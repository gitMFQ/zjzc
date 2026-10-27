import { createRouter, createWebHashHistory } from 'vue-router'

const HOME_TITLE =
  '银川租车公司_宁夏租车费用_银川公务用车租赁_婚庆租车价格费用_越野车租赁_昭佳租车'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: HOME_TITLE }
  },
  {
    path: '/vehicles',
    name: 'vehicles',
    component: () => import('@/views/VehiclesView.vue'),
    meta: { title: '车型展示 - 昭佳租车' }
  },
  {
    path: '/packages',
    name: 'packages',
    component: () => import('@/views/PackagesView.vue'),
    meta: { title: '服务套餐 - 昭佳租车' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: '关于我们 - 昭佳租车' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: '联系方式与在线预订 - 昭佳租车' }
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('@/views/HelpView.vue'),
    meta: { title: '帮助中心 - 昭佳租车' }
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  // 静态托管（GitHub Pages / 对象存储）无需服务端 rewrite，使用 hash 路由最稳妥
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = to.meta.title
})

export default router
