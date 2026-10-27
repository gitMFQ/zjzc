<script setup>
import { CarRentalData } from '@/data/carRentalData'
import { assetUrl } from '@/data/assets'
import AppIcon from '@/components/AppIcon.vue'
import BookingForm from '@/components/BookingForm.vue'
import ContactInfoList from '@/components/ContactInfoList.vue'
import StoreList from '@/components/StoreList.vue'

const depositInfo = CarRentalData.depositInfo
</script>

<template>
  <div class="pt-20">
    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-center mb-8">联系方式</h1>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- 预订表单 -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-semibold mb-6">预订</h2>
            <BookingForm />

            <div class="mt-6 pt-6 border-t border-gray-100 text-center">
              <p class="text-gray-500 text-sm mb-3">或微信、支付宝扫码线上平台下单</p>
              <img
                :src="assetUrl('haluo.png')"
                alt="哈罗下单"
                class="w-32 h-32 mx-auto rounded-lg shadow"
              />
            </div>
          </div>

          <!-- 联系方式 / 门店 -->
          <div class="space-y-8">
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-semibold mb-6">联系方式</h2>
              <ContactInfoList />
            </div>
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-semibold mb-6">门店地址</h2>
              <StoreList />
            </div>
          </div>
        </div>

        <!-- 押金说明 -->
        <div class="mt-12">
          <h2 class="text-2xl font-semibold mb-6 text-center">押金说明</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div
              v-for="item in depositInfo"
              :key="item.type"
              class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <AppIcon :name="item.icon" class="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-bold text-lg text-gray-800">{{ item.type }}</h3>
                  <p class="text-sm text-gray-500">{{ item.desc }}</p>
                </div>
              </div>
              <ul class="space-y-2">
                <li v-for="detail in item.details" :key="detail" class="flex items-start text-sm text-gray-600">
                  <AppIcon name="chevron-right" class="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>{{ detail }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
