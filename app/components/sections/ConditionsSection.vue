<script setup lang="ts">
import {
  CloudSun,
  Brain,
  ShieldAlert,
  Zap,
  Pill,
  Focus,
  HeartCrack,
} from 'lucide-vue-next'

const { t } = useI18n()

const icons = [CloudSun, Brain, ShieldAlert, Zap, Pill, Focus, HeartCrack]

const conditions = computed(() =>
  Array.from({ length: 7 }, (_, i) => ({
    title: t(`conditions.items.${i}.title`),
    description: t(`conditions.items.${i}.description`),
    icon: icons[i],
  })),
)
</script>

<template>
  <section class="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
    <!-- Pattern -->
    <div class="absolute inset-0 pattern-cross" />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <CommonSectionHeading
        :overline="t('conditions.overline')"
        :title="t('conditions.title')"
        :highlight="t('conditions.highlight')"
        :description="t('conditions.description')"
        dark
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(condition, index) in conditions"
          :key="index"
          v-reveal:scale="{ delay: index * 80 }"
          class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-accent-400/30 transition-all duration-300"
        >
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl bg-accent-400/10 flex items-center justify-center mb-5">
            <component :is="condition.icon" class="h-6 w-6 text-accent-400" />
          </div>

          <!-- Content -->
          <h3 class="text-lg font-heading font-bold text-white mb-2">
            {{ condition.title }}
          </h3>
          <p class="text-sm text-white/60 leading-relaxed">
            {{ condition.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
