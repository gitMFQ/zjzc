# legacy / 重构前的 Alpine.js 版本备份

> 本目录仅作对照与回退备份，**不参与 Vue 版构建**，也不会出现在 `dist/` 中。

| 文件 | 说明 |
| --- | --- |
| `index.alpine.html` | 重构前的主页面（Alpine.js + Tailwind CDN 版） |
| `main.js` | 原 Alpine 应用逻辑与字符串模板 |
| `data.js` | 原全站数据（已迁移为 `src/data/carRentalData.js`） |
| `style.css` | 原自定义样式（仅旧版页面使用） |
| `tank.html` | 早期独立落地页（引用上面的 `main.js` / `data.js` / `style.css`） |
| `main-26.3.17.js`、`main-06191814.js`、`data-26.7.15.js` | 历史版本快照 |
| `old.index.html` | 更早的整站旧版 |
| `data.json`、`min/` | 早期精简版/移动端数据 |

## 本地预览旧版

旧页面用相对路径引用 `images/`，所以要从仓库根目录起服务，再访问 `legacy/` 下的 html：

```bash
npx serve .          # 或 python3 -m http.server 8080
# 打开 http://localhost:3000/legacy/index.alpine.html
```

旧版依赖的 CDN（`cdn.tailwindcss.com`、Alpine、unpkg、jsDelivr 图片）需要外网可访问。
