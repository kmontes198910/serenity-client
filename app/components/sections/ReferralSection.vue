<script setup lang="ts">
import { Phone, Mail, ArrowRight, UserPlus } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <section class="py-16 lg:py-20 bg-gray-50">
    <div class="mx-auto max-w-7xl fluid-section-x">
      <div class="flex flex-col items-center text-center gap-8">
        <!-- Icon -->
        <div class="w-16 h-16 rounded-2xl bg-accent-50 flex items-center justify-center">
          <UserPlus class="h-8 w-8 text-accent-500" />
        </div>

        <!-- Text -->
        <div class="max-w-2xl">
          <h3 class="fluid-h3-lg font-heading font-bold text-navy-900">
            {{ t('referral.title') }}
          </h3>
          <p class="mt-4 text-lg text-navy-600 leading-relaxed">
            {{ t('referral.description') }}
          </p>
        </div>

        <!-- Actions -->
        <div class="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href="tel:+17026655035"
            class="inline-flex items-center gap-2.5 px-7 py-3.5 bg-navy-900 text-white rounded-full font-semibold hover:bg-navy-800 transition-colors"
          >
            <Phone class="h-4.5 w-4.5" />
            {{ t('referral.callLabel') }}
          </a>
          <a
            href="mailto:serenitybslv@gmail.com"
            class="inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent-500 text-white rounded-full font-semibold hover:bg-accent-600 transition-colors"
          >
            <Mail class="h-4.5 w-4.5" />
            {{ t('referral.emailLabel') }}
          </a>
          <NuxtLink
            to="/#contact"
            class="inline-flex items-center gap-2.5 px-7 py-3.5 border-2 border-navy-200 text-navy-900 rounded-full font-semibold hover:border-accent-500 hover:text-accent-600 transition-colors"
          >
            {{ t('referral.formLabel') }}
            <ArrowRight class="h-4.5 w-4.5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
