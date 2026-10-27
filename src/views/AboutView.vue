<script setup>
import { CarRentalData } from '@/data/carRentalData'
import AppIcon from '@/components/AppIcon.vue'

const about = CarRentalData.about
const company = CarRentalData.company
const advantages = CarRentalData.advantages

const contactRows = [
  { icon: 'phone', text: `电话：${company.phone}` },
  { icon: 'mail', text: `邮箱：${company.email}` },
  { icon: 'map-pin', text: company.address }
]
</script>

<template>
  <div class="pt-20">
    <section class="py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-center mb-8">{{ about.title }}</h1>

        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 class="text-2xl font-semibold mb-4">公司简介</h2>
          <p class="text-gray-600 leading-relaxed mb-4">{{ about.description }}</p>
          <p class="text-gray-600 leading-relaxed">{{ about.description2 }}</p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 class="text-2xl font-semibold mb-4">我们的优势</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="item in advantages" :key="item.title" class="flex items-start space-x-4">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AppIcon :name="item.icon" class="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 class="font-semibold mb-1">{{ item.title }}</h3>
                <p class="text-gray-600 text-sm">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-semibold mb-4">联系我们</h2>
          <div class="space-y-4">
            <div v-for="row in contactRows" :key="row.text" class="flex items-center space-x-4">
              <AppIcon :name="row.icon" class="h-5 w-5 text-primary flex-shrink-0" />
              <span class="text-gray-600">{{ row.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
