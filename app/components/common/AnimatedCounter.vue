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
const { count, start } = useCountUp(props.target, props.duration)

onMounted(() => {
  if (!el.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        start()
        observer.disconnect()
      }
    },
    { threshold: 0.3 },
  )

  observer.observe(el.value)
})
</script>

<template>
  <span ref="el">{{ prefix }}{{ count }}{{ suffix }}</span>
</template>
