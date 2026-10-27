<script setup>
import { CarRentalData } from '@/data/carRentalData'
import { assetUrl } from '@/data/assets'
import { getHotVehicles } from '@/data/helpers'
import AppIcon from '@/components/AppIcon.vue'
import VehicleCard from '@/components/VehicleCard.vue'

const company = CarRentalData.company
const services = CarRentalData.services
const process = CarRentalData.process
const team = CarRentalData.team
const testimonials = CarRentalData.testimonials
const hotVehicles = getHotVehicles()

const TEAM_FALLBACK = (name) =>
  `https://placehold.co/100x100/2563eb/ffffff?text=${encodeURIComponent(name.charAt(0))}`

function onAvatarError(event, name) {
  const fallback = TEAM_FALLBACK(name)
  if (event.target.src !== fallback) event.target.src = fallback
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="pt-16 relative min-h-[500px] bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url('${assetUrl('bg.png')}')` }"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">{{ company.slogan }}</h1>
          <p class="text-xl text-gray-200 mb-8">{{ company.description }}</p>
          <RouterLink
            to="/vehicles"
            class="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition shadow-lg hover:shadow-xl"
          >
            立即选车
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 服务内容 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-4">服务内容</h2>
        <p class="text-center text-gray-600 mb-12">
          本公司提供多种可定制用车服务，为您提供40+车型，超过100+车辆，以更多的选择满足您不同的需求
        </p>
        <div class="grid md:grid-cols-5 gap-6">
          <div
            v-for="service in services"
            :key="service.title"
            class="relative rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-48"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              :style="{ backgroundImage: `url('${service.bgImage}')` }"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/60 transition-all duration-300"
            ></div>
            <div class="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
              <div
                class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition"
              >
                <AppIcon :name="service.icon" class="h-7 w-7 text-white" />
              </div>
              <h3 class="font-bold text-lg text-white mb-2">{{ service.title }}</h3>
              <p class="text-gray-200 text-sm leading-relaxed">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 热门车型 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-10">热门车型</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <VehicleCard
            v-for="vehicle in hotVehicles"
            :key="vehicle.id"
            :vehicle="vehicle"
            mode="more"
            :max-specs="3"
          />
        </div>
      </div>
    </section>

    <!-- 服务流程 -->
    <section class="py-16 bg-gray-50 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-blue-50"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 class="text-3xl font-bold text-center mb-4 text-gray-900">服务流程</h2>
        <p class="text-center text-gray-600 mb-12">简单明了，反应迅速！</p>
        <div class="grid md:grid-cols-6 gap-6">
          <div v-for="item in process" :key="item.step" class="text-center group">
            <div
              class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg border-2 border-blue-100 group-hover:border-primary transition"
            >
              <AppIcon :name="item.icon" class="h-8 w-8 text-primary" />
            </div>
            <div class="text-sm font-bold text-accent mb-1">Step {{ item.step }}</div>
            <h3 class="font-semibold mb-2 text-gray-800">{{ item.title }}</h3>
            <p class="text-gray-500 text-xs leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队成员 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-4 text-gray-900">团队成员</h2>
        <p class="text-center text-gray-600 mb-12">专业团队，用心服务每一位客户！</p>
        <div class="grid md:grid-cols-4 gap-8">
          <div
            v-for="member in team"
            :key="member.name"
            class="bg-gray-50 rounded-xl shadow-lg overflow-hidden text-center hover:shadow-xl transition group"
          >
            <div class="pt-8 pb-4">
              <img
                :src="member.avatar"
                :alt="member.name"
                loading="lazy"
                class="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100 group-hover:border-primary transition"
                @error="onAvatarError($event, member.name)"
              />
            </div>
            <div class="p-6 pt-2">
              <h3 class="font-semibold text-lg">{{ member.name }}</h3>
              <p class="text-primary text-sm mb-2">{{ member.role }}</p>
              <p class="text-gray-600 text-sm">{{ member.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户评价 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-4 text-gray-900">客户评价</h2>
        <p class="text-center text-gray-600 mb-12">我们注重每一位客户的评价，口碑见证品质！</p>
        <div class="grid md:grid-cols-4 gap-6">
          <div
            v-for="review in testimonials"
            :key="review.name"
            class="bg-white rounded-xl p-6 hover:shadow-lg transition"
          >
            <div class="flex items-center mb-4">
              <AppIcon
                v-for="star in review.rating"
                :key="star"
                name="star"
                class="h-4 w-4 text-yellow-400 fill-current"
              />
            </div>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">"{{ review.content }}"</p>
            <div class="flex items-center">
              <div
                class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-3"
              >
                {{ review.name.charAt(0) }}
              </div>
              <div>
                <p class="font-semibold text-sm">{{ review.name }}</p>
                <p class="text-gray-500 text-xs">{{ review.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部 CTA -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">准备好开始您的旅程了吗？</h2>
        <p class="text-xl text-blue-100 mb-8">立即预订，享受专业、便捷的租车服务</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink
            to="/vehicles"
            class="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition shadow-lg"
          >
            浏览车型
          </RouterLink>
          <RouterLink
            to="/contact"
            class="inline-block bg-white/20 backdrop-blur text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition border border-white/30"
          >
            立即预订
          </RouterLink>
        </div>
        <p class="mt-6 text-blue-200 text-sm">客服热线：<span>{{ company.phone }}</span></p>
      </div>
    </section>
  </div>
</template>
