<script setup lang="ts">
import { FileCheck2, Handshake, ShieldAlert, Stethoscope, CheckCircle, ArrowRight } from 'lucide-vue-next'

const { t } = useI18n()

const pillarIcons = [FileCheck2, Handshake, ShieldAlert, Stethoscope]

const pillars = computed(() =>
  pillarIcons.map((icon, i) => ({
    icon,
    title: t(`whyUs.pillars.${i}.title`),
    description: t(`whyUs.pillars.${i}.description`),
  })),
)
</script>

<template>
  <section class="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
    <!-- Pattern background -->
    <div class="absolute inset-0 pattern-cross" />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Image area -->
        <div v-reveal:left class="relative">
          <div class="relative rounded-2xl overflow-hidden">
            <img
              src="/images/results.webp"
              alt="Clinical professional reviewing results with patient at Serenity Behavioral Services"
              class="w-full aspect-[3/4] object-cover rounded-2xl"
              loading="lazy"
            />
          </div>

          <!-- Badge hidden: pending client update -->
        </div>

        <!-- Right: Content -->
        <div>
          <CommonSectionHeading
            :overline="t('whyUs.overline')"
            :title="t('whyUs.title')"
            :highlight="t('whyUs.highlight')"
            :description="t('whyUs.description')"
            align="left"
            dark
          />

          <div class="space-y-5">
            <div
              v-for="(pillar, index) in pillars"
              :key="index"
              v-reveal:left="{ delay: index * 100 }"
              class="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div class="shrink-0 w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center">
                <component :is="pillar.icon" class="h-5 w-5 text-accent-400" />
              </div>
              <div>
                <h3 class="font-heading font-bold text-white mb-1">{{ pillar.title }}</h3>
                <p class="text-sm text-white/50 leading-relaxed">{{ pillar.description }}</p>
              </div>
            </div>
          </div>

          <div v-reveal="{ delay: 500 }" class="mt-8">
            <NuxtLink
              to="/#about"
              class="btn-arrow px-7 py-3.5 bg-accent-400 hover:bg-accent-300 text-navy-900 rounded-full text-sm font-bold transition-all"
            >
              {{ t('buttons.learnMore') }}
              <span class="arrow-icon bg-navy-800 text-white">
                <ArrowRight class="h-3.5 w-3.5" />
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
