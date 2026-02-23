<script setup lang="ts">
import { Stethoscope, Award, Clock, Heart } from 'lucide-vue-next'

const { t } = useI18n()

const stats = computed(() => [
  { icon: Stethoscope, value: 9, suffix: '+', label: t('stats.servicesOffered') },
  { icon: Award, value: 8, suffix: '+', label: t('stats.treatmentPrograms') },
  { icon: Clock, value: 1, suffix: '', label: t('stats.licensedClinicians') },
  { icon: Heart, value: 100, suffix: '%', label: t('stats.evidenceBasedCare') },
])
</script>

<template>
  <section class="bg-navy-800 py-14">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          v-reveal="{ delay: i * 100 }"
          class="flex items-center gap-4 lg:justify-center"
        >
          <div class="w-14 h-14 rounded-full bg-accent-400/10 flex items-center justify-center shrink-0">
            <component :is="stat.icon" class="h-6 w-6 text-accent-400" />
          </div>
          <div>
            <p class="text-3xl font-heading font-bold text-white">
              <CommonAnimatedCounter :target="stat.value" :suffix="stat.suffix" />
            </p>
            <p class="text-sm text-white/50 mt-0.5">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
