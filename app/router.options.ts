import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      const hash = to.hash.startsWith('#contact-') ? '#contact' : to.hash
      return {
        el: hash,
        top: 80,
        behavior: 'smooth',
      }
    }

    return { left: 0, top: 0 }
  },
} satisfies RouterConfig
