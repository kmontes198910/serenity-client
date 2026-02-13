<script setup lang="ts">
import {
  ClipboardCheck,
  Brain,
  CalendarRange,
  Users,
  ShieldCheck,
  HeartHandshake,
  MessageCircle,
  MonitorSmartphone,
  ArrowRight,
} from 'lucide-vue-next'

const { t } = useI18n()
const { services } = useServices()

const iconMap: Record<string, ReturnType<typeof defineComponent>> = {
  'clipboard-check': ClipboardCheck,
  'brain': Brain,
  'calendar-range': CalendarRange,
  'users': Users,
  'shield-check': ShieldCheck,
  'heart-handshake': HeartHandshake,
  'message-circle': MessageCircle,
  'monitor-smartphone': MonitorSmartphone,
}
</script>

<template>
  <section class="py-20 lg:py-28 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <CommonSectionHeading
        :overline="t('services.overline')"
        :title="t('services.title')"
        :highlight="t('services.highlight')"
        :description="t('services.description')"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          v-reveal:scale="{ delay: index * 60 }"
          class="service-card group relative bg-white rounded-2xl p-7 border border-gray-100 cursor-pointer"
        >
          <!-- Dot -->
          <div class="card-dot absolute top-6 right-6 w-2.5 h-2.5 rounded-full bg-accent-400" />

          <!-- Icon -->
          <div class="service-icon w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center mb-5">
            <component :is="iconMap[service.icon]" class="h-6 w-6 text-accent-500" />
          </div>

          <!-- Content -->
          <h3 class="text-lg font-heading font-bold text-navy-900 mb-2">
            {{ service.title }}
          </h3>
          <p class="text-sm text-navy-500 leading-relaxed mb-5">
            {{ service.description }}
          </p>

          <!-- Arrow -->
          <div class="card-arrow w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center transition-all">
            <ArrowRight class="h-4 w-4 text-navy-400" />
          </div>
        </div>
      </div>

      <div v-reveal class="text-center mt-14">
        <NuxtLink
          to="/#services"
          class="btn-arrow px-7 py-3.5 bg-navy-700 hover:bg-navy-800 text-white rounded-full text-sm font-bold transition-all"
        >
          {{ t('buttons.viewAllServices') }}
          <span class="arrow-icon bg-accent-400 text-navy-900">
            <ArrowRight class="h-3.5 w-3.5" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
