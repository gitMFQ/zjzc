<script setup>
import { ref } from 'vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  faqs: { type: Array, required: true },
  /** 默认展开第几条，-1 表示全部收起 */
  defaultOpen: { type: Number, default: 0 }
})

const opened = ref(props.defaultOpen)

function toggle(index) {
  opened.value = opened.value === index ? -1 : index
}
</script>

<template>
  <div class="space-y-3">
    <div v-for="(faq, index) in faqs" :key="faq.q" class="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        class="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition"
        :aria-expanded="opened === index"
        @click="toggle(index)"
      >
        <span class="font-medium text-gray-800 pr-4">Q: {{ faq.q }}</span>
        <AppIcon
          name="chevron-down"
          class="h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-200"
          :class="opened === index ? 'rotate-180' : ''"
        />
      </button>
      <div
        class="grid transition-all duration-200 ease-out"
        :class="opened === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      >
        <div class="overflow-hidden bg-gray-50">
          <p class="px-4 pb-4 pt-0 text-gray-600 text-sm leading-relaxed">{{ faq.a }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
