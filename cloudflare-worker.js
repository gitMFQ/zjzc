// Cloudflare Worker - 钉钉 Webhook 代理（带签名）
// 部署地址：https://dash.cloudflare.com -> Workers & Pages -> Create Worker
// 环境变量需在 Cloudflare 控制台设置：Settings -> Variables -> Add variable
//   - WEBHOOK_BASE_URL: https://oapi.dingtalk.com/robot/send?access_token=xxx
//   - SECRET: SECxxx

// 生成签名
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

export default {
  async fetch(request, env) {
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
      
      // 验证手机号格式
      const phoneMatch = body?.text?.content?.match(/电话：(\d+)/);
      if (phoneMatch && !/^1[3-9]\d{9}$/.test(phoneMatch[1])) {
        return new Response(JSON.stringify({ errcode: -1, errmsg: '手机号格式不正确' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
      
      // 生成签名
      const timestamp = Date.now();
      const sign = await generateSign(timestamp, env.SECRET);
      const webhookUrl = `${env.WEBHOOK_BASE_URL}&timestamp=${timestamp}&sign=${sign}`;
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const result = await response.json();
      
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
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
