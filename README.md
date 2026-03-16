# 昭佳租车官网

宁夏昭佳汽车服务有限公司官方网站，提供银川租车、宁夏租车、自驾租车、公务租车、旅游包车、婚庆租车等服务。

## 项目简介

这是一个基于 Alpine.js + Tailwind CSS 构建的单页应用（SPA）网站，展示公司信息、车型列表、服务套餐等内容，并支持在线预订。

## 技术栈

- **前端框架**: Alpine.js 3.x
- **CSS框架**: Tailwind CSS
- **图标库**: Lucide Icons
- **数据管理**: 纯 JavaScript 数据对象

## 项目结构

```
zjzc/
├── index.html          # 主页面
├── data.js             # 数据配置（车型、FAQ、公司信息等）
├── main.js             # Alpine.js 应用逻辑和模板
├── style.css           # 自定义样式
├── cloudflare-worker.js # Cloudflare Worker（Webhook代理）
├── images/             # 图片资源
├── min/                # 移动端/精简版本
└── old.index.html      # 旧版页面备份
```

## 功能模块

### 页面导航
- 首页（Home）
- 车型展示（Vehicles）
- 服务套餐（Packages）
- 关于我们（About）
- 联系方式（Contact）
- 帮助中心（Help）

### 车型分类
支持多标签筛选：
- **车型类型**: SUV、MPV、轿车、皮卡
- **价格档次**: 经济型、舒适型、豪华型
- **品牌分类**: 丰田、本田、别克、比亚迪、哈弗、坦克、传祺、捷途、腾势、长城

### 在线预订
- 表单验证（姓名、手机号、车型、日期）
- 钉钉机器人通知（通过 Cloudflare Worker 代理）

## 快速开始

1. 克隆项目
```bash
git clone https://github.com/gitMFQ/zjzc.git
```

2. 直接打开 `index.html` 或使用本地服务器

```bash
# 使用 Python
python -m http.server 8080

# 使用 Node.js
npx serve
```

3. 访问 `http://localhost:8080`

## 数据配置

### 添加新车型

在 `data.js` 的 `vehicles` 数组中添加：

```javascript
{
  id: 31,
  name: "车型名称",
  categories: ["品牌", "车型类型", "价格档次"],
  image: "图片URL",
  specs: "座位数 · 变速箱 · 排量/动力",
  features: ["特点1", "特点2"]
}
```

### 添加新品牌

1. 在 `categories` 数组中添加品牌分类
2. 在 `main.js` 的 `getCategoryClass` 函数中添加颜色映射

## 部署

项目为纯静态网站，可部署至：
- GitHub Pages
- Cloudflare Pages
- Vercel
- 任意静态托管服务

## 相关链接

- 官网: https://www.nxzjzc.cn
- 备案号: 宁ICP备2024004868号-1
- 公安备案: 宁公网安备64010602001086号

## 联系方式

- 电话: 187 9500 7776 / 199 0957 0777
- 邮箱: info@nxzjzc.cn
- 地址: 银川市金凤区旭辉江南学府44-10号

## License

Copyright © 2024 宁夏昭佳汽车服务有限公司
