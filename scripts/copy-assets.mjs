/**
 * 构建后置处理：把仓库根目录的 images/ 复制到 dist/images/
 *
 * 图片体积较大且原站/CDN 直接引用仓库路径，所以不放进 public/（避免重复提交 13MB），
 * 而是在构建时复制，保证 dist/ 是可直接部署的完整站点。
 */
import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const source = resolve(root, 'images')
const target = resolve(root, 'dist/images')

if (!existsSync(source)) {
  console.warn('[copy-assets] 未找到 images/ 目录，跳过')
  process.exit(0)
}

mkdirSync(target, { recursive: true })
cpSync(source, target, { recursive: true })
console.log(`[copy-assets] 已复制 images/ -> dist/images/${existsSync(target) ? '' : ''}`)
