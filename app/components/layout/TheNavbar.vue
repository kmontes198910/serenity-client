<script setup lang="ts">
import { Menu, X, ArrowRight } from 'lucide-vue-next'

const { t } = useI18n()
const { items } = useNavigation()
const isMobileOpen = ref(false)
const route = useRoute()
const activeSection = ref('hero')

watch(() => route.fullPath, () => { isMobileOpen.value = false })

function getSectionId(to: string) {
  return to.replace('/#', '')
}

onMounted(() => {
  const sectionIds = items.value.map(item => getSectionId(item.to))

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      }
    },
    { rootMargin: '-20% 0px -60% 0px' },
  )

  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  }

  onUnmounted(() => observer.disconnect())
})

function isActive(to: string) {
  return activeSection.value === getSectionId(to)
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-navy-700 shadow-lg shadow-navy-900/20">
    <div class="px-4 sm:px-6 xl:px-12">
      <nav class="flex items-center h-16 lg:h-[72px] gap-8">
        <!-- Logo -->
        <NuxtLink to="/#hero" class="flex items-center gap-3">
          <img src="/logo.png" alt="Serenity Behavioral Services" class="h-14 w-auto brightness-0 invert" />
        </NuxtLink>

        <!-- Desktop nav -->
        <div class="hidden lg:flex items-center gap-1">
          <NuxtLink
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            class="nav-link relative px-5 py-2 text-base font-bold transition-colors"
            :class="isActive(item.to) ? 'text-accent-400' : 'text-white/80 hover:text-accent-400'"
          >
            {{ item.label }}
            <span class="nav-underline" :class="isActive(item.to) ? 'nav-underline-active' : ''" />
          </NuxtLink>
        </div>

        <!-- CTA + Language -->
        <div class="hidden lg:flex items-center gap-1 ml-auto">
          <CommonLanguageSwitcher />
          <NuxtLink
            to="/#contact"
            class="btn-arrow px-6 py-2.5 bg-accent-400 hover:bg-accent-300 text-navy-900 rounded-full text-sm font-bold transition-all"
          >
            {{ t('buttons.getStarted') }}
            <span class="arrow-icon bg-navy-800 text-white">
              <ArrowRight class="h-3.5 w-3.5" />
            </span>
          </NuxtLink>
        </div>

        <!-- Mobile toggle -->
        <button
          class="lg:hidden p-2 text-white ml-auto"
          @click="isMobileOpen = !isMobileOpen"
        >
          <Menu v-if="!isMobileOpen" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
        </button>
      </nav>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMobileOpen" class="lg:hidden bg-navy-800 border-t border-white/10">
        <div class="px-4 py-4 space-y-1">
          <NuxtLink
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            class="block px-4 py-3 rounded-xl font-medium transition-colors"
            :class="isActive(item.to) ? 'text-accent-400 bg-white/5' : 'text-white hover:bg-white/5'"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="flex items-center justify-between mt-3">
            <CommonLanguageSwitcher />
          </div>
          <NuxtLink
            to="/#contact"
            class="block mt-3 px-4 py-3 bg-accent-400 text-navy-900 text-center rounded-xl font-bold"
          >
            {{ t('buttons.getStarted') }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
