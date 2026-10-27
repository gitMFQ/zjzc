<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { CarRentalData } from '@/data/carRentalData'
import { assetUrl } from '@/data/assets'
import { useScrollY } from '@/composables/useScrollY'
import AppIcon from './AppIcon.vue'

const route = useRoute()
const scrollY = useScrollY()
const mobileMenu = ref(false)

const navItems = CarRentalData.navItems.map((item) => ({
  ...item,
  to: item.id === 'home' ? '/' : `/${item.id}`
}))

function isActive(id) {
  return route.name === id
}

// 路由变化后收起移动端菜单
watch(
  () => route.fullPath,
  () => {
    mobileMenu.value = false
  }
)
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="flex items-center" title="宁夏昭佳汽车服务有限公司">
            <img
              :src="assetUrl('昭佳租车LOGO.png')"
              alt="宁夏昭佳汽车服务有限公司"
              class="h-10 w-auto"
            />
          </RouterLink>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="item in navItems"
            :key="item.id"
            :to="item.to"
            class="transition-colors"
            :class="isActive(item.id) ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <button
          type="button"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100"
          :aria-expanded="mobileMenu"
          aria-label="展开导航菜单"
          @click="mobileMenu = !mobileMenu"
        >
          <AppIcon name="menu" class="h-6 w-6" />
        </button>
      </div>
    </div>

    <div v-show="mobileMenu" class="md:hidden bg-white border-t">
      <div class="px-4 py-2 space-y-1">
        <RouterLink
          v-for="item in navItems"
          :key="item.id"
          :to="item.to"
          class="block px-4 py-2 rounded-lg"
          :class="isActive(item.id) ? 'bg-blue-50 text-primary' : 'text-gray-700'"
          @click="mobileMenu = false"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </nav>

  <!-- 移动端菜单展开时的遮罩，点击收起 -->
  <div v-if="mobileMenu" class="md:hidden fixed inset-0 z-40 bg-gray-900/10" @click="mobileMenu = false" />
</template>
