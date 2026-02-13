export function useCountUp(target: number, duration: number = 2000) {
  const count = ref(0)
  const hasAnimated = ref(false)

  function start() {
    if (hasAnimated.value) return
    hasAnimated.value = true

    const startTime = performance.now()

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      count.value = Math.round(eased * target)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  return { count, start }
}
