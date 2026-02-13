<script setup lang="ts">
import { ArrowUp } from 'lucide-vue-next'

const { t } = useI18n()
const isVisible = ref(false)

function checkScroll() {
  isVisible.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4 scale-90"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-90"
  >
    <button
      v-if="isVisible"
      class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-accent-400 hover:bg-accent-300 text-navy-900 shadow-lg shadow-accent-400/30 flex items-center justify-center transition-colors"
      :aria-label="t('scrollToTop.ariaLabel')"
      @click="scrollToTop"
    >
      <ArrowUp class="h-5 w-5" />
    </button>
  </Transition>
</template>
