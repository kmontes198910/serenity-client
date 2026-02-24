<script setup lang="ts">
import type { Component } from 'vue'
import {
  ClipboardCheck,
  Stethoscope,
  Scale,
  Brain,
  CalendarRange,
  Users,
  ShieldCheck,
  HeartHandshake,
  MonitorSmartphone,
  ArrowRight,
  CheckCircle,
  X,
} from 'lucide-vue-next'
import type { Service } from '~/types'

const { t } = useI18n()
const { services } = useServices()

const selectedService = ref<Service | null>(null)
const isModalOpen = ref(false)

if (import.meta.client) {
  watch(selectedService, (val) => {
    document.body.style.overflow = val ? 'hidden' : ''
  })
}

const iconMap: Record<string, Component> = {
  'clipboard-check': ClipboardCheck,
  'stethoscope': Stethoscope,
  'scale': Scale,
  'brain': Brain,
  'calendar-range': CalendarRange,
  'users': Users,
  'shield-check': ShieldCheck,
  'heart-handshake': HeartHandshake,
  'monitor-smartphone': MonitorSmartphone,
}

function openModal(service: Service) {
  selectedService.value = service
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
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

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          v-reveal:scale="{ delay: index * 60 }"
          class="service-card group relative bg-white rounded-2xl p-7 border border-gray-100 cursor-pointer flex flex-col h-[280px]"
          @click="openModal(service)"
        >
          <!-- Dot -->
          <div class="card-dot absolute top-6 right-6 w-2.5 h-2.5 rounded-full bg-accent-400" />

          <!-- Icon -->
          <div class="service-icon w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center mb-5 shrink-0">
            <component :is="iconMap[service.icon]" class="h-6 w-6 text-accent-500" />
          </div>

          <!-- Content -->
          <h3 class="text-lg font-heading font-bold text-navy-900 mb-2">
            {{ service.title }}
          </h3>
          <p class="text-sm text-navy-500 leading-relaxed line-clamp-3 flex-1">
            {{ service.description }}
          </p>

          <!-- Learn More -->
          <div class="flex items-center gap-2 mt-4 shrink-0">
            <span class="text-sm font-semibold text-accent-500 group-hover:text-white transition-colors">
              {{ t('buttons.learnMore') }}
            </span>
            <ArrowRight class="h-4 w-4 text-accent-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal-overlay">
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          @keydown.escape="closeModal"
        >
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
            @click="closeModal"
          />

          <!-- Modal content -->
          <Transition name="modal-content" appear>
            <div
              v-if="selectedService"
              class="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10"
            >
              <!-- Header -->
              <div class="sticky top-0 bg-white rounded-t-3xl border-b border-gray-100 px-8 py-6 flex items-start justify-between z-10">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center shrink-0">
                    <component :is="iconMap[selectedService.icon]" class="h-6 w-6 text-accent-500" />
                  </div>
                  <h3 id="service-modal-title" class="text-xl font-heading font-bold text-navy-900">
                    {{ selectedService.title }}
                  </h3>
                </div>
                <button
                  type="button"
                  aria-label="Close service details"
                  class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shrink-0"
                  @click="closeModal"
                >
                  <X class="h-5 w-5 text-navy-500" />
                </button>
              </div>

              <!-- Body -->
              <div class="px-8 py-6">
                <p class="text-navy-600 leading-relaxed whitespace-pre-line mb-8">
                  {{ selectedService.description }}
                </p>

                <!-- Features -->
                <div v-if="selectedService.features.length">
                  <h4 class="text-sm font-bold text-navy-900 uppercase tracking-wider mb-4">
                    {{ selectedService.id === 'therapy' ? t('services.modalModalities') : t('services.modalFeatures') }}
                  </h4>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div
                      v-for="(feature, i) in selectedService.features"
                      :key="i"
                      class="flex items-start gap-3 p-3 rounded-xl bg-gray-50"
                    >
                      <CheckCircle class="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                      <span class="text-sm text-navy-700">{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div class="px-8 py-6 border-t border-gray-100">
                <NuxtLink
                  to="/#contact"
                  class="btn-arrow inline-flex px-7 py-3.5 bg-navy-700 hover:bg-navy-800 text-white rounded-full text-sm font-bold transition-all"
                  @click="closeModal"
                >
                  {{ t('buttons.bookAppointment') }}
                  <span class="arrow-icon bg-accent-400 text-navy-900">
                    <ArrowRight class="h-3.5 w-3.5" />
                  </span>
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
/* Modal transitions */
.modal-overlay-enter-active,
.modal-overlay-leave-active {
  transition: all 0.3s ease;
}
.modal-overlay-enter-from,
.modal-overlay-leave-to {
  opacity: 0;
}

.modal-content-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.modal-content-leave-active {
  transition: all 0.25s ease-in;
}
.modal-content-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}
.modal-content-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}
</style>
