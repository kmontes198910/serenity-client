<script setup lang="ts">
interface Props {
  target: number
  duration?: number
  prefix?: string
  suffix?: string
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2000,
  prefix: '',
  suffix: '',
})

const el = ref<HTMLElement | null>(null)
const { count, start, stop } = useCountUp(props.target, props.duration)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!el.value) return

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        start()
        observer?.disconnect()
        observer = null
      }
    },
    { threshold: 0.3 },
  )

  observer.observe(el.value)
})

onUnmounted(() => {
  observer?.disconnect()
  observer = null
  stop()
})
</script>

<template>
  <span ref="el">{{ prefix }}{{ count }}{{ suffix }}</span>
</template>
