<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { CarRentalData } from '@/data/carRentalData'
import { filterVehicles } from '@/data/helpers'
import { bookVehicle } from '@/stores/booking'
import VehicleCard from '@/components/VehicleCard.vue'

const router = useRouter()
const categories = CarRentalData.categories
const activeCategory = ref('all')

const vehicles = computed(() => filterVehicles(activeCategory.value))

function onBook(vehicleName) {
  bookVehicle(vehicleName)
  router.push('/contact')
}
</script>

<template>
  <div class="pt-20">
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-center mb-8">车型展示</h1>

        <!-- 筛选按钮 -->
        <div class="flex flex-wrap justify-center gap-3 mb-10">
          <button
            v-for="cat in categories"
            :key="cat.id"
            type="button"
            class="px-5 py-2 rounded-full text-sm transition"
            :class="activeCategory === cat.id ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'"
            @click="activeCategory = cat.id"
          >
            {{ cat.name }}
          </button>
        </div>

        <!-- 车型列表 -->
        <div v-if="vehicles.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <VehicleCard v-for="vehicle in vehicles" :key="vehicle.id" :vehicle="vehicle" @book="onBook" />
        </div>
        <p v-else class="text-center text-gray-500 py-16">该分类下暂无车型，请联系客服为您推荐</p>
      </div>
    </section>
  </div>
</template>
