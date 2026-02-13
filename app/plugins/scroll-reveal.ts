export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement, binding) {
      const direction = binding.arg || 'up'
      const delay = binding.value?.delay || 0

      const classMap: Record<string, string> = {
        up: 'reveal-hidden',
        left: 'reveal-hidden-left',
        right: 'reveal-hidden-right',
        scale: 'reveal-hidden-scale',
      }

      el.classList.add(classMap[direction] || 'reveal-hidden')

      if (delay) {
        el.style.transitionDelay = `${delay}ms`
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('revealed')
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
      )

      observer.observe(el)
    },
  })
})
