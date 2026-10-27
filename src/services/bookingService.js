/**
 * 预订提交服务
 *
 * 通过 Cloudflare Worker 代理转发到钉钉机器人（见根目录 cloudflare-worker.js）。
 * 代理地址可通过环境变量覆盖：VITE_WEBHOOK_ENDPOINT
 */
const WEBHOOK_ENDPOINT = import.meta.env.VITE_WEBHOOK_ENDPOINT || 'https://webhook.osai.eu.org'

export function buildBookingMessage(form) {
  return `【昭佳租车】新预订通知
━━━━━━━━━━━━━━━━
姓名：${form.name}
电话：${form.phone}
车型：${form.vehicle}
取车日期：${form.date}
还车日期：${form.returnDate || '未填写'}
备注：${form.remarks || '无'}
━━━━━━━━━━━━━━━━
提交时间：${new Date().toLocaleString('zh-CN')}`
}

/**
 * @returns {Promise<{ ok: boolean, message: string }>}
 */
export async function submitBooking(form) {
  try {
    const response = await fetch(WEBHOOK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        msgtype: 'text',
        text: { content: buildBookingMessage(form) }
      })
    })

    const result = await response.json()

    if (result.errcode === 0) {
      return { ok: true, message: '预订提交成功！我们将尽快联系您' }
    }

    console.error('钉钉推送失败:', result)
    return { ok: false, message: result.errmsg || '请稍后重试' }
  } catch (error) {
    console.error('预订提交异常:', error)
    return { ok: false, message: '提交失败，请检查网络后重试' }
  }
}
