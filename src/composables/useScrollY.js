import { onMounted, onUnmounted, ref } from 'vue'

/**
 * 共享的页面滚动位置（导航栏毛玻璃效果、返回顶部按钮都用它）
 */
const scrollY = ref(0)
let listeners = 0

function onScroll() {
  scrollY.value = window.scrollY
}

export function useScrollY() {
  onMounted(() => {
    if (listeners === 0) {
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
    }
    listeners += 1
  })

  onUnmounted(() => {
    listeners -= 1
    if (listeners <= 0) {
      listeners = 0
      window.removeEventListener('scroll', onScroll)
    }
  })

  return scrollY
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
