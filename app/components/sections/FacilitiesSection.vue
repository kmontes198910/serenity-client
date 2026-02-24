<script setup lang="ts">
import { Clock, CheckCircle, ArrowRight, MapPin, Phone } from 'lucide-vue-next'

const { t } = useI18n()

const features = computed(() => [
  t('facilities.features.0'),
  t('facilities.features.1'),
  t('facilities.features.2'),
  t('facilities.features.3'),
  t('facilities.features.4'),
  t('facilities.features.5'),
])

const hours = computed(() => [
  { day: t('facilities.hours.0.day'), time: t('facilities.hours.0.time') },
  { day: t('facilities.hours.1.day'), time: t('facilities.hours.1.time') },
  { day: t('facilities.hours.2.day'), time: t('facilities.hours.2.time') },
])
</script>

<template>
  <section class="fluid-section-y bg-white">
    <div class="mx-auto max-w-7xl fluid-section-x">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Image + Hours card -->
        <div v-reveal:left class="relative">
          <div class="relative rounded-2xl overflow-hidden shadow-xl">
            <div class="aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.45707552006!2d-115.3660276!3d36.1145825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                class="w-full h-full border-0"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Serenity Behavioral Services location in Las Vegas, Nevada"
              />
            </div>
          </div>

          <!-- Opening hours card -->
          <div class="absolute -bottom-8 -right-4 lg:-right-8 bg-navy-800 text-white rounded-xl p-6 shadow-2xl w-72">
            <div class="flex items-center gap-2 mb-4">
              <Clock class="h-5 w-5 text-accent-400" />
              <h4 class="font-heading font-bold text-lg">{{ t('facilities.openingHours') }}</h4>
            </div>
            <ul class="space-y-2.5">
              <li
                v-for="item in hours"
                :key="item.day"
                class="flex items-center justify-between text-sm"
              >
                <span class="text-white/70">{{ item.day }}</span>
                <span class="font-semibold text-accent-400">{{ item.time }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right: Content -->
        <div>
          <CommonSectionHeading
            :overline="t('facilities.overline')"
            :title="t('facilities.title')"
            :highlight="t('facilities.highlight')"
            :description="t('facilities.description')"
            align="left"
          />

          <div v-reveal="{ delay: 200 }" class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <div
              v-for="feature in features"
              :key="feature"
              class="flex items-center gap-3"
            >
              <CheckCircle class="h-5 w-5 text-accent-500 shrink-0" />
              <span class="text-sm font-medium text-navy-700">{{ feature }}</span>
            </div>
          </div>

          <div v-reveal="{ delay: 300 }" class="flex flex-wrap gap-4">
            <NuxtLink
              to="/#services"
              class="btn-arrow px-6 py-3 bg-navy-700 hover:bg-navy-800 text-white rounded-full text-sm font-bold transition-all"
            >
              {{ t('buttons.viewAllServices') }}
              <span class="arrow-icon bg-accent-400 text-navy-900">
                <ArrowRight class="h-3.5 w-3.5" />
              </span>
            </NuxtLink>
            <a
              href="tel:+17026655035"
              class="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy-200 hover:border-accent-400 rounded-full text-sm font-bold text-navy-700 transition-all"
            >
              <Phone class="h-4 w-4 text-accent-500" />
              {{ t('buttons.callUs') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
