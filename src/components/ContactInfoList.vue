<script setup>
import { CarRentalData } from '@/data/carRentalData'
import { assetUrl } from '@/data/assets'
import AppIcon from './AppIcon.vue'

const company = CarRentalData.company

const items = [
  { icon: 'phone', title: '客服热线', value: company.phone, hint: '7×24小时为您服务' },
  { icon: 'mail', title: '电子邮箱', value: company.email, hint: '我们将在24小时内回复' },
  { icon: 'printer', title: '传真', value: company.fax, hint: '商务合作传真' }
]
</script>

<template>
  <div class="space-y-6">
    <div v-for="item in items" :key="item.title" class="flex items-start space-x-4">
      <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <AppIcon :name="item.icon" class="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 class="font-semibold">{{ item.title }}</h3>
        <p class="text-gray-600">{{ item.value }}</p>
        <p class="text-sm text-gray-500">{{ item.hint }}</p>
      </div>
    </div>

    <div class="flex items-start space-x-4">
      <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <AppIcon name="message-square" class="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 class="font-semibold mb-2">微信公众号</h3>
        <img :src="assetUrl('qrcode.jpg')" alt="微信公众号二维码" class="w-28 h-28 rounded-lg shadow-sm" />
      </div>
    </div>
  </div>
</template>
