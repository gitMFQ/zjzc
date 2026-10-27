<script setup>
import { CarRentalData } from '@/data/carRentalData'

const stores = CarRentalData.stores
</script>

<template>
  <div class="space-y-4">
    <div
      v-for="(store, index) in stores"
      :key="store.address"
      :class="index < stores.length - 1 ? 'border-b pb-4' : ''"
    >
      <p class="text-gray-600 text-sm">{{ store.address }}</p>
      <p class="text-sm text-gray-500">电话：{{ store.phone }}</p>
    </div>
  </div>
</template>
