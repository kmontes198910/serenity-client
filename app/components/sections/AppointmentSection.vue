<script setup lang="ts">
import { Send, Phone, Mail, MapPin, Clock, Printer } from 'lucide-vue-next'

const { t } = useI18n()
const route = useRoute()
const { members } = useStaff()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  clinician: '',
  message: '',
})

watch(() => route.hash, (hash) => {
  if (hash.startsWith('#contact-')) {
    const clinicianId = hash.replace('#contact-', '')
    const member = members.value.find(m => m.id === clinicianId)
    if (member) {
      form.clinician = member.name
    }
  }
}, { immediate: true })

const serviceOptions = computed(() => [
  t('appointment.serviceOptions.0'),
  t('appointment.serviceOptions.1'),
  t('appointment.serviceOptions.2'),
  t('appointment.serviceOptions.3'),
  t('appointment.serviceOptions.4'),
  t('appointment.serviceOptions.5'),
  t('appointment.serviceOptions.6'),
  t('appointment.serviceOptions.7'),
])

function handleSubmit() {
  const subject = encodeURIComponent(`Appointment Request - ${form.service || 'General'}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred Clinician: ${form.clinician || 'No preference'}\n\nMessage:\n${form.message}`,
  )
  window.location.href = `mailto:serenitybslv@gmail.com?subject=${subject}&body=${body}`
}
</script>

<template>
  <section class="fluid-section-y bg-navy-900 relative overflow-hidden">
    <!-- Pattern -->
    <div class="absolute inset-0 pattern-cross" />

    <div class="relative z-10 mx-auto max-w-7xl fluid-section-x">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Left: Info -->
        <div>
          <CommonSectionHeading
            :overline="t('appointment.overline')"
            :title="t('appointment.title')"
            :highlight="t('appointment.highlight')"
            :description="t('appointment.description')"
            align="left"
            dark
          />

          <div v-reveal="{ delay: 200 }" class="space-y-5 mt-8">
            <a href="tel:+17026655035" class="flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center group-hover:bg-accent-400/20 transition-colors">
                <Phone class="h-5 w-5 text-accent-400" />
              </div>
              <div>
                <p class="text-xs text-white/50 font-medium">{{ t('labels.phone') }}</p>
                <p class="text-white font-bold">(702) 665-5035</p>
              </div>
            </a>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center">
                <Printer class="h-5 w-5 text-accent-400" />
              </div>
              <div>
                <p class="text-xs text-white/50 font-medium">{{ t('labels.fax') }}</p>
                <p class="text-white font-bold">(702) 552-6881</p>
              </div>
            </div>
            <a href="mailto:serenitybslv@gmail.com" class="flex items-center gap-4 group">
              <div class="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center group-hover:bg-accent-400/20 transition-colors">
                <Mail class="h-5 w-5 text-accent-400" />
              </div>
              <div>
                <p class="text-xs text-white/50 font-medium">{{ t('labels.email') }}</p>
                <p class="text-white font-bold">serenitybslv@gmail.com</p>
              </div>
            </a>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center">
                <MapPin class="h-5 w-5 text-accent-400" />
              </div>
              <div>
                <p class="text-xs text-white/50 font-medium">{{ t('labels.location') }}</p>
                <p class="text-white font-bold">4680 S Eastern Ave. Suite B</p>
                <p class="text-sm text-white/70">Las Vegas, NV 89119</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center shrink-0">
                <Clock class="h-5 w-5 text-accent-400" />
              </div>
              <div>
                <p class="text-xs text-white/50 font-medium">{{ t('labels.hours') }}</p>
                <p class="text-white font-bold">{{ t('appointment.extendedHours') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div v-reveal:right>
          <form
            class="bg-white rounded-2xl p-8 shadow-2xl"
            @submit.prevent="handleSubmit"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label for="appointment-name" class="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">{{ t('labels.fullName') }}</label>
                <input
                  id="appointment-name"
                  v-model="form.name"
                  type="text"
                  required
                  :placeholder="t('placeholders.yourFullName')"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label for="appointment-email" class="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">{{ t('labels.email') }}</label>
                <input
                  id="appointment-email"
                  v-model="form.email"
                  type="email"
                  required
                  :placeholder="t('placeholders.yourEmail')"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label for="appointment-phone" class="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">{{ t('labels.phone') }}</label>
                <input
                  id="appointment-phone"
                  v-model="form.phone"
                  type="tel"
                  :placeholder="t('placeholders.phoneNumber')"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label for="appointment-service" class="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">{{ t('labels.service') }}</label>
                <select
                  id="appointment-service"
                  v-model="form.service"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all bg-white"
                >
                  <option value="" disabled>{{ t('placeholders.selectService') }}</option>
                  <option v-for="s in serviceOptions" :key="s" :value="s">{{ s }}</option>
                </select>
              </div>
            </div>

            <div class="mb-4">
              <label for="appointment-clinician" class="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">{{ t('labels.preferredClinician') }}</label>
              <select
                id="appointment-clinician"
                v-model="form.clinician"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all bg-white"
              >
                <option value="">{{ t('placeholders.selectClinician') }}</option>
                <option v-for="m in members" :key="m.id" :value="m.name">{{ m.name }} — {{ m.credentials }}</option>
              </select>
            </div>

            <div class="mb-6">
              <label for="appointment-message" class="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">{{ t('labels.message') }}</label>
              <textarea
                id="appointment-message"
                v-model="form.message"
                rows="4"
                :placeholder="t('placeholders.tellUsNeeds')"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              class="w-full btn-arrow justify-center px-8 py-4 bg-navy-700 hover:bg-navy-800 text-white rounded-xl text-sm font-bold transition-all"
            >
              <Send class="h-4 w-4" />
              {{ t('buttons.sendRequest') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
