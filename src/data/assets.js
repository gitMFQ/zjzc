/**
 * 静态资源路径解析
 *
 * 默认从站点同源的 images/ 目录加载图片，支持通过环境变量切换到 CDN：
 *   在 .env 中设置 VITE_IMAGE_BASE=https://cdn.jsdmirror.com/gh/gitmfq/zjzc@master/images/
 */
const IMAGE_BASE = import.meta.env.VITE_IMAGE_BASE || `${import.meta.env.BASE_URL}images/`

const ABSOLUTE_URL = /^(?:[a-z][a-z\d+\-.]*:)?\/\//i

export function assetUrl(file) {
  if (!file) return ''
  // 已经是一个完整 URL（http/https 协议相对地址、data URI）时原样返回
  if (ABSOLUTE_URL.test(file) || file.startsWith('data:')) return file
  return IMAGE_BASE + encodeURI(file)
}
