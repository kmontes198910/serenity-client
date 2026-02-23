<script setup lang="ts">
import { Wallet, ShieldCheck, ArrowRight } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <section class="py-20 lg:py-28 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <CommonSectionHeading
        :overline="t('admissions.overline')"
        :title="t('admissions.title')"
        :highlight="t('admissions.highlight')"
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Private Pay -->
        <div
          v-reveal:scale="{ delay: 100 }"
          class="relative bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 hover:border-accent-200 transition-all duration-300 hover:shadow-lg"
        >
          <div class="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center mb-6">
            <Wallet class="h-7 w-7 text-accent-500" />
          </div>
          <h3 class="text-xl font-heading font-bold text-navy-900 mb-4">
            {{ t('admissions.privatePay.title') }}
          </h3>
          <p class="text-navy-600 leading-relaxed">
            {{ t('admissions.privatePay.description') }}
          </p>
          <div class="mt-6">
            <NuxtLink
              to="/#contact"
              class="inline-flex items-center gap-2 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors"
            >
              {{ t('buttons.callUs') }}
              <ArrowRight class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Insurance -->
        <div
          v-reveal:scale="{ delay: 200 }"
          class="relative bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 hover:border-accent-200 transition-all duration-300 hover:shadow-lg"
        >
          <div class="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center mb-6">
            <ShieldCheck class="h-7 w-7 text-accent-500" />
          </div>
          <h3 class="text-xl font-heading font-bold text-navy-900 mb-4">
            {{ t('admissions.insurance.title') }}
          </h3>
          <p class="text-navy-600 leading-relaxed">
            {{ t('admissions.insurance.description') }}
          </p>
          <div class="mt-6">
            <NuxtLink
              to="/#contact"
              class="inline-flex items-center gap-2 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors"
            >
              {{ t('buttons.callUs') }}
              <ArrowRight class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
