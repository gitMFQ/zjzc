<script setup>
import { CarRentalData } from '@/data/carRentalData'
import AppIcon from '@/components/AppIcon.vue'

const packages = CarRentalData.servicePackages
const priceClasses = CarRentalData.vehiclePriceClasses
</script>

<template>
  <div class="pt-20">
    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-center mb-4">服务套餐</h1>
        <p class="text-center text-gray-600 mb-12">选择适合您的服务等级，享受安心的出行体验</p>

        <!-- 增值服务套餐 -->
        <div class="mb-12">
          <h2 class="text-2xl font-semibold mb-6">增值服务套餐</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div
              v-for="pkg in packages"
              :key="pkg.name"
              class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              :class="pkg.recommended ? 'ring-2 ring-primary relative' : ''"
            >
              <div
                v-if="pkg.recommended"
                class="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-lg font-medium"
              >
                推荐
              </div>
              <div class="p-6" :class="pkg.recommended ? 'bg-gradient-to-r from-blue-50 to-blue-100' : 'bg-gray-50'">
                <h3 class="text-xl font-bold text-gray-800 mb-1">{{ pkg.name }}</h3>
                <p class="text-sm text-gray-500 mb-2">{{ pkg.desc }}</p>
                <p class="text-2xl font-bold text-primary">{{ pkg.price }}</p>
              </div>
              <div class="p-6">
                <ul class="space-y-3">
                  <li v-for="feature in pkg.features" :key="feature.label" class="flex items-start">
                    <AppIcon name="check-circle" class="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <span class="font-medium text-gray-700">{{ feature.label }}：</span>
                      <span class="text-gray-600 text-sm">{{ feature.value }}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p class="text-center text-gray-500 text-sm mt-4">
            * 增值服务需在订单下达时选择购买，合同执行中不可变更服务等级
          </p>
        </div>

        <!-- 车辆价格分类 -->
        <div>
          <h2 class="text-2xl font-semibold mb-6">车辆价格分类</h2>
          <p class="text-gray-600 mb-6">根据车辆购置价格划分等级，不同等级对应不同的服务收费标准</p>
          <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead class="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <tr>
                  <th class="px-6 py-4 text-left font-semibold">车辆分类</th>
                  <th class="px-6 py-4 text-left font-semibold">购置价格区间</th>
                  <th class="px-6 py-4 text-left font-semibold">车型示例</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr
                  v-for="(item, index) in priceClasses"
                  :key="item.class"
                  class="hover:bg-blue-50 transition"
                  :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-white'"
                >
                  <td class="px-6 py-4">
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                      {{ item.class }}
                    </span>
                  </td>
                  <td class="px-6 py-4 font-medium text-gray-800">{{ item.priceRange }}</td>
                  <td class="px-6 py-4 text-gray-600">{{ item.examples }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
