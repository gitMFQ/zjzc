<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import FloatingActions from '@/components/FloatingActions.vue'
</script>

<template>
  <AppNavbar />

  <main class="flex-1">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

  <AppFooter />
  <FloatingActions />
</template>
