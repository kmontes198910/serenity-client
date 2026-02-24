<script setup lang="ts">
import { FileSearch, ClipboardList, HeartPulse, TrendingUp } from 'lucide-vue-next'

const { t } = useI18n()

const stepIcons = [FileSearch, ClipboardList, HeartPulse, TrendingUp]
const stepNumbers = ['01', '02', '03', '04']

const steps = computed(() =>
  stepIcons.map((icon, i) => ({
    icon,
    step: stepNumbers[i],
    title: t(`howItWorks.steps.${i}.title`),
    description: t(`howItWorks.steps.${i}.description`),
  })),
)
</script>

<template>
  <section class="fluid-section-y bg-gray-50">
    <div class="mx-auto max-w-7xl fluid-section-x">
      <CommonSectionHeading
        :overline="t('howItWorks.overline')"
        :title="t('howItWorks.title')"
        :highlight="t('howItWorks.highlight')"
        :description="t('howItWorks.description')"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(step, index) in steps"
          :key="step.step"
          v-reveal="{ delay: index * 100 }"
          class="relative text-center group"
        >
          <!-- Connector line -->
          <div
            v-if="index < steps.length - 1"
            class="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-navy-200"
          />

          <!-- Icon -->
          <div class="relative inline-flex mb-6">
            <div class="w-20 h-20 rounded-full bg-white border-2 border-navy-100 flex items-center justify-center shadow-lg group-hover:border-accent-400 transition-colors duration-300">
              <component :is="step.icon" class="h-8 w-8 text-navy-600 group-hover:text-accent-500 transition-colors duration-300" />
            </div>
            <span class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-400 text-navy-900 text-xs font-bold flex items-center justify-center shadow-md">
              {{ step.step }}
            </span>
          </div>

          <!-- Content -->
          <h3 class="font-heading font-bold text-navy-900 fluid-h3 mb-2">
            {{ step.title }}
          </h3>
          <p class="text-sm text-navy-500 leading-relaxed max-w-xs mx-auto">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
