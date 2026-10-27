<script setup>
import { CarRentalData } from '@/data/carRentalData'
import AppIcon from '@/components/AppIcon.vue'
import FaqAccordion from '@/components/FaqAccordion.vue'

const faqs = CarRentalData.faqs
const rentalGuide = CarRentalData.rentalGuide
const terms = CarRentalData.terms
</script>

<template>
  <div class="pt-20">
    <section class="py-12">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-center mb-8">帮助中心</h1>

        <!-- 常见问题 -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 class="text-2xl font-semibold mb-6">常见问题</h2>
          <FaqAccordion :faqs="faqs" />
        </div>

        <!-- 租车须知 -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 class="text-2xl font-semibold mb-6">租车须知</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="guide in rentalGuide" :key="guide.title" class="bg-gray-50 rounded-lg p-5">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <AppIcon :name="guide.icon" class="h-5 w-5 text-primary" />
                </div>
                <h3 class="font-semibold">{{ guide.title }}</h3>
              </div>
              <ul class="space-y-2">
                <li v-for="item in guide.items" :key="item" class="text-gray-600 text-sm flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 服务条款 -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-semibold mb-6">服务条款</h2>
          <div class="space-y-4 text-gray-600 text-sm">
            <p v-for="(term, index) in terms" :key="index">{{ term }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
