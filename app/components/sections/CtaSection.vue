<script setup lang="ts">
import { Phone, ArrowRight, Mail, Shield } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <section class="relative fluid-section-y-lg overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />

    <!-- Pattern -->
    <div class="absolute inset-0 pattern-dots" />

    <!-- Glow -->
    <div class="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-400/5 rounded-full blur-[120px]" />
    <div class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />

    <div class="relative z-10 mx-auto max-w-7xl fluid-section-x">
      <div class="max-w-3xl mx-auto text-center">
        <div
          v-reveal
          class="inline-flex items-center gap-2 px-4 py-2 bg-accent-400/10 border border-accent-400/20 rounded-full text-sm font-semibold text-accent-400 mb-6"
        >
          <Shield class="h-4 w-4" />
          {{ t('badges.acceptingReferrals') }}
        </div>

        <h2
          v-reveal="{ delay: 100 }"
          class="font-heading fluid-display font-bold text-white leading-tight"
        >
          {{ t('cta.title') }}
          <span class="text-accent-400">{{ t('cta.highlight') }}</span>
        </h2>

        <p
          v-reveal="{ delay: 200 }"
          class="mt-6 text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
        >
          {{ t('cta.subtitle') }}
        </p>

        <div v-reveal="{ delay: 300 }" class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <NuxtLink
            to="/#contact"
            class="btn-arrow px-8 py-4 bg-accent-400 hover:bg-accent-300 text-navy-900 rounded-full text-sm font-bold transition-all"
          >
            {{ t('buttons.getStartedToday') }}
            <span class="arrow-icon bg-navy-800 text-white">
              <ArrowRight class="h-3.5 w-3.5" />
            </span>
          </NuxtLink>
          <a
            href="tel:+17026655035"
            class="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 hover:border-accent-400 text-white rounded-full font-bold transition-all"
          >
            <Phone class="h-4 w-4 text-accent-400" />
            (702) 665-5035
          </a>
        </div>

        <div v-reveal="{ delay: 400 }" class="flex items-center justify-center gap-6 mt-10">
          <a href="mailto:serenitybslv@gmail.com" class="flex items-center gap-2 text-sm text-white/40 hover:text-accent-400 transition-colors">
            <Mail class="h-4 w-4" />
            serenitybslv@gmail.com
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
