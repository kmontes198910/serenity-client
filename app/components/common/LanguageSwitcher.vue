<script setup lang="ts">
import { Globe } from 'lucide-vue-next'

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() =>
  (locales.value as Array<{ code: string; name: string }>).filter(l => l.code !== locale.value),
)

function switchLanguage() {
  const next = availableLocales.value[0]
  if (next) {
    setLocale(next.code)
  }
}

const currentLocaleName = computed(() => {
  const current = (locales.value as Array<{ code: string; name: string }>).find(l => l.code === locale.value)
  return current?.code.toUpperCase() ?? ''
})
</script>

<template>
  <button
    type="button"
    class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white/80 hover:text-accent-400 transition-colors"
    @click="switchLanguage"
  >
    <Globe class="h-4 w-4" />
    <span>{{ currentLocaleName }}</span>
  </button>
</template>
