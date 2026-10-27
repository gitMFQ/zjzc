<script setup>
import { RouterLink } from 'vue-router'
import { CarRentalData } from '@/data/carRentalData'
import { useScrollY, scrollToTop } from '@/composables/useScrollY'
import AppIcon from './AppIcon.vue'

const scrollY = useScrollY()
const phoneLink = `tel:${CarRentalData.company.phone.split('/')[0].replace(/\s/g, '')}`
</script>

<template>
  <div class="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
    <a
      :href="phoneLink"
      class="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center hover:scale-110"
      title="电话咨询"
    >
      <AppIcon name="phone" class="h-5 w-5" />
    </a>

    <RouterLink
      to="/contact"
      class="w-12 h-12 bg-accent text-white rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center hover:scale-110"
      title="在线预订"
    >
      <AppIcon name="calendar-check" class="h-5 w-5" />
    </RouterLink>

    <button
      v-show="scrollY > 300"
      type="button"
      class="w-12 h-12 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center hover:scale-110"
      title="返回顶部"
      @click="scrollToTop"
    >
      <AppIcon name="chevron-up" class="h-5 w-5" />
    </button>
  </div>
</template>
