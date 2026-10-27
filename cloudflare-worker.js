// Cloudflare Worker - 预订消息推送代理（钉钉 + OIH 双通道）
// 部署地址：https://dash.cloudflare.com -> Workers & Pages -> Create Worker
// 环境变量需在 Cloudflare 控制台设置：Settings -> Variables -> Add variable
//   - WEBHOOK_BASE_URL: https://oapi.dingtalk.com/robot/send?access_token=xxx
//   - SECRET: SECxxx
//   - OIH_API_URL: 可选，默认 https://oih.osai.eu.org:8443/bot/v1/message/send
//   - OIH_TOKEN: 可选，OIH 的 Authorization Bearer Token（只放环境变量，严禁写进代码仓库）
//
// 请求格式（前端沿用钉钉格式即可）：
//   { "msgtype": "text", "text": { "content": "..." } }
//   或直接 { "content": "..." }
// 响应：钉钉返回体原样透传（前端依赖 errcode），另加 oih 字段：
//   配置了钉钉时：{ "errcode": 0, "errmsg": "ok", "oih": { "queued": true } }  // OIH 走 ctx.waitUntil 后台推送
//   只配 OIH 时：  { "errcode": 0, "errmsg": "ok", "oih": { "ok": true, "status": 200, "result": {...} } }

// OIH 默认接口地址（Token 从环境变量读取）
const OIH_DEFAULT_URL = 'https://oih.osai.eu.org:8443/bot/v1/message/send';

// 生成钉钉签名
async function generateSign(timestamp, secret) {
  const stringToSign = timestamp + '\n' + secret;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(stringToSign));
  const sign = btoa(String.fromCharCode(...new Uint8Array(signature)));
  return encodeURIComponent(sign);
}

// 钉钉请求体：保持 { msgtype, text/markdown... } 原样；若前端只给了 { content } 则补成文本消息
function toDingTalkPayload(body) {
  if (body && typeof body.msgtype === 'string') return body;
  return { msgtype: 'text', text: { content: body?.content || '' } };
}

// 推送钉钉（原样透传请求体，保留 text / markdown 等消息类型）
async function sendDingTalk(body, env) {
  if (!env.WEBHOOK_BASE_URL) {
    return { ok: false, skipped: true, error: '未配置 WEBHOOK_BASE_URL' };
  }

  let webhookUrl = env.WEBHOOK_BASE_URL;
  if (env.SECRET) {
    const timestamp = Date.now();
    const sign = await generateSign(timestamp, env.SECRET);
    webhookUrl = `${webhookUrl}&timestamp=${timestamp}&sign=${sign}`;
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toDingTalkPayload(body)),
    // 钉钉偶发慢响应，超时则快速失败，避免前端一直挂着
    signal: AbortSignal.timeout(10000)
  });
  const result = await response.json();
  return { ok: response.ok && result.errcode === 0, status: response.status, result };
}

// 推送 OIH（POST /bot/v1/message/send，body: { "content": "..." }）
// 该接口偶发握手失败/超时（国内 IPv6 线路），单次请求加超时，失败重试一次
async function sendOih(content, env, attempts = 2, timeoutMs = 8000) {
  const token = env.OIH_TOKEN;
  if (!token) {
    return { ok: false, skipped: true, error: '未配置 OIH_TOKEN' };
  }

  const url = env.OIH_API_URL || OIH_DEFAULT_URL;
  let last = { ok: false, error: 'OIH 推送失败' };

  for (let i = 0; i < attempts; i++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content }),
        signal: AbortSignal.timeout(timeoutMs)
      });

      const text = await response.text();
      let result;
      try {
        result = text ? JSON.parse(text) : {};
      } catch {
        result = { raw: text };
      }

      last = { ok: response.ok, status: response.status, result };
      if (response.ok) return last;
    } catch (error) {
      last = { ok: false, error: error?.name === 'TimeoutError' ? 'OIH 请求超时' : String(error?.message || error) };
    }

    if (i + 1 < attempts) await new Promise((r) => setTimeout(r, 1000));
  }

  return last;
}

// 后台推送 OIH，失败只记日志，不影响预订主流程
async function sendOihInBackground(content, env) {
  const result = await sendOih(content, env);
  if (result.ok) {
    console.log('OIH 推送成功', JSON.stringify(result.result));
  } else {
    console.error('OIH 推送失败', JSON.stringify(result));
  }
  return result;
}

export default {
  async fetch(request, env, ctx) {
    // CORS 预检请求
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    // 只允许 POST
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ errcode: -1, errmsg: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    try {
      const body = await request.json();

      // 消息正文：兼容 { msgtype, text: { content } } 与 { content } 简写格式
      const content = body?.text?.content || body?.content;
      if (!content || typeof content !== 'string') {
        return new Response(JSON.stringify({ errcode: -1, errmsg: '缺少消息内容' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      // 验证手机号格式
      const phoneMatch = content.match(/电话：(\d+)/);
      if (phoneMatch && !/^1[3-9]\d{9}$/.test(phoneMatch[1])) {
        return new Response(JSON.stringify({ errcode: -1, errmsg: '手机号格式不正确' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }

      const hasDingTalk = Boolean(env.WEBHOOK_BASE_URL);

      if (hasDingTalk) {
        // 钉钉为主通道：先等它返回（前端依赖 errcode 提示用户）
        let dingtalkResult;
        try {
          dingtalkResult = await sendDingTalk(body, env);
        } catch (error) {
          const timedOut = error?.name === 'TimeoutError' || error?.name === 'AbortError';
          dingtalkResult = {
            ok: false,
            error: timedOut ? '钉钉推送超时，请稍后重试' : error?.message || String(error)
          };
        }

        const dingtalkBody = dingtalkResult.result || {
          errcode: dingtalkResult.ok ? 0 : -1,
          errmsg: dingtalkResult.ok ? 'ok' : dingtalkResult.error || '钉钉推送失败'
        };

        // OIH 放后台执行：国内线路偶发握手失败/超时，绝不拖慢预订响应
        const oihQueued = Boolean(env.OIH_TOKEN);
        if (oihQueued) ctx.waitUntil(sendOihInBackground(content, env));

        return new Response(
          JSON.stringify({ ...dingtalkBody, oih: { queued: oihQueued } }),
          {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
        );
      }

      // 只配置了 OIH：以 OIH 结果为准
      const oihResult = await sendOih(content, env);
      return new Response(
        JSON.stringify({
          errcode: oihResult.ok ? 0 : -1,
          errmsg: oihResult.ok ? 'ok' : oihResult.error || 'OIH 推送失败',
          oih: oihResult
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    } catch (error) {
      return new Response(JSON.stringify({ errcode: -1, errmsg: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
  }
};
