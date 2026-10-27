<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { categoryClass, categoryName } from '@/data/helpers'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  vehicle: { type: Object, required: true },
  /** more: 首页卡片（跳转车型页）；book: 车型页卡片（带入预订） */
  mode: { type: String, default: 'book' },
  /** 规格最多展示几段，0 表示全部 */
  maxSpecs: { type: Number, default: 0 }
})

const emit = defineEmits(['book'])
const router = useRouter()

const FALLBACK_IMAGE = 'https://placehold.co/400x250/2563eb/ffffff?text=车辆图片'

const specs = computed(() => {
  if (!props.maxSpecs) return props.vehicle.specs
  return props.vehicle.specs.split(' · ').slice(0, props.maxSpecs).join(' · ')
})

function onImageError(event) {
  if (event.target.src !== FALLBACK_IMAGE) event.target.src = FALLBACK_IMAGE
}

function onAction() {
  if (props.mode === 'more') {
    router.push('/vehicles')
    return
  }
  emit('book', props.vehicle.name)
}
</script>

<template>
  <div
    class="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
    :class="mode === 'more' ? 'bg-gray-50' : 'bg-white'"
  >
    <div class="relative h-48 overflow-hidden">
      <img
        :src="vehicle.image"
        :alt="vehicle.name"
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        @error="onImageError"
      />
      <div class="absolute top-3 right-3 flex flex-wrap gap-1 justify-end">
        <span
          v-for="catId in vehicle.categories"
          :key="catId"
          class="text-xs font-medium backdrop-blur-sm bg-white/80 px-2 py-0.5 rounded-full"
          :class="categoryClass(catId)"
        >
          {{ categoryName(catId) }}
        </span>
      </div>
    </div>

    <div class="p-5">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-semibold text-lg text-gray-800">{{ vehicle.name }}</h3>
      </div>
      <p class="text-gray-500 text-sm" :class="mode === 'more' ? 'mb-3' : 'mb-4'">{{ specs }}</p>
      <div class="flex flex-wrap gap-2" :class="mode === 'more' ? 'mb-3' : 'mb-4'">
        <span
          v-for="feature in vehicle.features"
          :key="feature"
          class="text-xs px-2 py-1 rounded"
          :class="mode === 'more' ? 'bg-white text-gray-600' : 'bg-gray-100 text-gray-600'"
        >
          {{ feature }}
        </span>
      </div>

      <button
        type="button"
        class="w-full text-white text-sm font-medium flex items-center justify-center gap-2 transition"
        :class="mode === 'more'
          ? 'mt-2 bg-gradient-to-r from-blue-600 to-blue-700 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800'
          : 'bg-primary py-2.5 rounded-lg hover:bg-blue-700'"
        @click="onAction"
      >
        <template v-if="mode === 'more'">
          <span>更多车型</span>
          <AppIcon name="arrow-right" class="h-4 w-4" />
        </template>
        <template v-else>立即预订</template>
      </button>
    </div>
  </div>
</template>
