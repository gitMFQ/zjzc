<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { CarRentalData } from '@/data/carRentalData'
import { assetUrl } from '@/data/assets'
import AppIcon from './AppIcon.vue'

const company = CarRentalData.company

const phoneLink = computed(() => `tel:${company.phone.split('/')[0].replace(/\s/g, '')}`)
const emailLink = computed(() => `mailto:${company.email}`)

function toPath(page) {
  return page === 'home' ? '/' : `/${page}`
}
</script>

<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 class="font-semibold mb-4 text-lg">{{ company.name }}</h3>
          <p class="text-gray-400 text-sm mb-4">{{ company.description }}</p>
          <div class="flex space-x-3">
            <a
              :href="phoneLink"
              class="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition"
              title="电话咨询"
            >
              <AppIcon name="phone" class="h-4 w-4" />
            </a>
            <RouterLink
              to="/contact"
              class="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition"
              title="在线咨询"
            >
              <AppIcon name="message-circle" class="h-4 w-4" />
            </RouterLink>
            <a
              :href="emailLink"
              class="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition"
              title="邮件联系"
            >
              <AppIcon name="mail" class="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-4">快速链接</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li v-for="link in CarRentalData.footerQuickLinks" :key="link.name">
              <RouterLink :to="toPath(link.page)" class="hover:text-white">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4">服务支持</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li v-for="(link, index) in CarRentalData.footerServiceLinks" :key="`${link.name}-${index}`">
              <RouterLink :to="toPath(link.page)" class="hover:text-white">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4">联系我们</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li class="flex items-center">
              <AppIcon name="phone" class="h-4 w-4 mr-2" />
              <span>{{ company.phone }}</span>
            </li>
            <li class="flex items-center">
              <AppIcon name="mail" class="h-4 w-4 mr-2" />
              <span>{{ company.email }}</span>
            </li>
            <li class="flex items-center">
              <AppIcon name="map-pin" class="h-4 w-4 mr-2" />
              <span>{{ company.address }}</span>
            </li>
          </ul>
          <div class="mt-4">
            <img :src="assetUrl('qrcode.jpg')" alt="微信公众号" class="w-20 h-20 rounded-lg shadow-lg" />
            <p class="text-xs text-gray-500 mt-2">扫码关注公众号</p>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm space-y-2">
        <p>© 2021-2026 zhaojia All Rights Reserved. 宁夏昭佳汽车服务有限公司 版权所有</p>
        <p>
          备案号：<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" class="hover:text-white">宁ICP备2024004868号-1</a>
        </p>
        <p class="flex items-center justify-center">
          <img :src="assetUrl('公安.png')" alt="公安备案" class="w-4 h-4 mr-1" />
          <a
            href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=64010602001086"
            target="_blank"
            rel="noopener"
            class="hover:text-white"
          >
            宁公网安备64010602001086号
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
