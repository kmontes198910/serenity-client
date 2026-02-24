<script setup lang="ts">
import { ArrowRight, Phone, CheckCircle, HeartHandshake, Award, Brain, Video } from 'lucide-vue-next'

const { t } = useI18n()

const mouseX = ref(0)
const mouseY = ref(0)
const sectionRef = ref<HTMLElement | null>(null)

function onMouseMove(e: MouseEvent) {
  if (!sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  mouseX.value = ((e.clientX - rect.left) / rect.width - 0.5) * 2
  mouseY.value = ((e.clientY - rect.top) / rect.height - 0.5) * 2
}

function cardTransform(speed: number) {
  const x = mouseX.value * speed
  const y = mouseY.value * speed
  return `translate(${x}px, ${y}px)`
}
</script>

<template>
  <section
    ref="sectionRef"
    class="relative bg-accent-50/40 overflow-x-clip min-h-[calc(100svh-8rem)]"
    @mousemove="onMouseMove"
  >

    <!-- Brain watermark -->
    <Brain class="absolute -left-32 top-1/2 -translate-y-1/2 h-[700px] w-[700px] text-accent-300/[0.06] pointer-events-none" :stroke-width="0.6" />

    <!-- Hero image with radiating waves -->
    <div class="hidden lg:block absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none">
      <!-- Radiating circular waves centered on the image -->
      <div class="absolute bottom-0 right-0 h-[90%] w-full flex items-center justify-center">
        <span class="ripple-wave" />
        <span class="ripple-wave" />
        <span class="ripple-wave" />
        <span class="ripple-wave" />
      </div>

      <img
        src="/images/hero_doc.webp"
        alt="Behavioral health professional providing care at Serenity Behavioral Services"
        class="absolute bottom-0 right-0 h-[90%] w-auto object-contain hue-rotate-[8deg] saturate-[0.92] z-[1]"
        loading="eager"
        fetchpriority="high"
      />
    </div>

    <div class="relative mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-8 2xl:px-12 py-12 lg:py-0 min-h-[calc(100svh-8rem)] flex items-center">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-6 2xl:gap-8 items-center w-full">
        <!-- Left: Content -->
        <div class="relative z-10">
          <h1
            v-reveal="{ delay: 100 }"
            class="font-heading fluid-display font-bold leading-[1.1] text-navy-900"
          >
            {{ t('hero.title') }}
            <span class="relative">
              <span class="text-accent-500">{{ t('hero.highlight') }}</span>
              <svg class="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C47 2 153 2 199 5.5" stroke="#22d3ee" stroke-width="3" stroke-linecap="round" />
              </svg>
            </span>
            <br />{{ t('hero.titleEnd') }}
          </h1>

          <p
            v-reveal="{ delay: 200 }"
            class="mt-4 2xl:mt-6 fluid-body-lg text-navy-600 leading-relaxed max-w-lg"
          >
            {{ t('hero.subtitle') }}
          </p>

          <div v-reveal="{ delay: 300 }" class="flex flex-col sm:flex-row gap-3 2xl:gap-4 mt-5 2xl:mt-8">
            <NuxtLink
              to="/#contact"
              class="btn-arrow px-5 2xl:px-7 py-2.5 2xl:py-3.5 bg-navy-700 hover:bg-navy-800 text-white rounded-full text-xs 2xl:text-sm font-bold transition-all"
            >
              {{ t('buttons.bookAppointment') }}
              <span class="arrow-icon bg-accent-400 text-navy-900">
                <ArrowRight class="h-3.5 w-3.5" />
              </span>
            </NuxtLink>
            <a
              href="tel:+17026655035"
              class="inline-flex items-center justify-center gap-2 2xl:gap-3 px-5 2xl:px-7 py-2.5 2xl:py-3.5 border-2 border-navy-200 hover:border-accent-400 rounded-full text-xs 2xl:text-sm font-bold text-navy-700 transition-all"
            >
              <Phone class="h-4 w-4 text-accent-500" />
              (702) 665-5035
            </a>
          </div>

          <!-- Trust indicators -->
          <div v-reveal="{ delay: 400 }" class="flex items-center gap-4 2xl:gap-6 mt-4 2xl:mt-8 pt-4 2xl:pt-6 border-t border-gray-100">
            <div class="flex items-center gap-2">
              <CheckCircle class="h-5 w-5 text-accent-500" />
              <span class="text-sm font-medium text-navy-700">{{ t('badges.licensedStaff') }}</span>
            </div>
            <div class="flex items-center gap-2">
              <CheckCircle class="h-5 w-5 text-accent-500" />
              <span class="text-sm font-medium text-navy-700">{{ t('badges.courtApproved') }}</span>
            </div>
            <div class="hidden sm:flex items-center gap-2">
              <CheckCircle class="h-5 w-5 text-accent-500" />
              <span class="text-sm font-medium text-navy-700">{{ t('badges.hipaaCompliant') }}</span>
            </div>
          </div>
        </div>

        <!-- Right: Spacer for grid -->
        <div class="hidden lg:block" />
      </div>

      <!-- Floating cards with parallax mouse effect -->
      <!-- Floating card: Accepting Referrals (moves slow) -->
      <div
        v-reveal:left="{ delay: 500 }"
        class="hidden lg:flex absolute left-[55%] top-[25%] bg-white rounded-xl shadow-xl shadow-navy-900/10 p-3 2xl:p-4 items-center gap-2 2xl:gap-3 z-10 transition-transform duration-300 ease-out"
        :style="{ transform: cardTransform(15) }"
      >
        <div class="w-10 2xl:w-12 h-10 2xl:h-12 rounded-full bg-accent-50 flex items-center justify-center">
          <HeartHandshake class="h-5 2xl:h-6 w-5 2xl:w-6 text-accent-500" />
        </div>
        <div>
          <p class="text-sm 2xl:text-lg font-heading font-bold text-navy-900">{{ t('hero.nowOpen') }}</p>
          <p class="text-[10px] 2xl:text-xs text-navy-500">{{ t('hero.acceptingReferrals') }}</p>
        </div>
      </div>

      <!-- Floating card: Licensed Clinical Staff (moves medium) -->
      <div
        v-reveal:right="{ delay: 600 }"
        class="hidden lg:flex absolute right-[5%] bottom-[25%] bg-white rounded-xl shadow-xl shadow-navy-900/10 p-3 2xl:p-4 items-center gap-2 2xl:gap-3 z-10 transition-transform duration-300 ease-out"
        :style="{ transform: cardTransform(-20) }"
      >
        <div class="w-10 2xl:w-12 h-10 2xl:h-12 rounded-full bg-navy-700 flex items-center justify-center">
          <Award class="h-5 2xl:h-6 w-5 2xl:w-6 text-accent-400" />
        </div>
        <div>
          <p class="text-sm 2xl:text-lg font-heading font-bold text-navy-900">{{ t('hero.licensedClinicalStaff') }}</p>
        </div>
      </div>

    </div>

    <!-- Floating card: Telehealth - anchored to section for full-width positioning -->
    <div
      v-reveal:right="{ delay: 700 }"
      class="hidden lg:flex absolute right-16 top-[15%] bg-white rounded-xl shadow-xl shadow-navy-900/10 p-3 2xl:p-4 items-center gap-2 2xl:gap-3 z-10 transition-transform duration-300 ease-out"
      :style="{ transform: cardTransform(25) }"
    >
      <div class="w-10 2xl:w-12 h-10 2xl:h-12 rounded-full bg-accent-400/10 flex items-center justify-center">
        <Video class="h-5 2xl:h-6 w-5 2xl:w-6 text-accent-500" />
      </div>
      <div>
        <p class="text-sm 2xl:text-lg font-heading font-bold text-navy-900">{{ t('hero.telehealth') }}</p>
        <p class="text-[10px] 2xl:text-xs text-navy-500">{{ t('hero.telehealthSub') }}</p>
      </div>
    </div>
  </section>
</template>
