<script setup>
import { computed } from 'vue'
import { icons } from './icons'

const props = defineProps({
  name: { type: String, required: true }
})

const icon = computed(() => icons[props.name] || null)
</script>

<template>
  <component :is="icon" v-if="icon" aria-hidden="true" />
</template>
