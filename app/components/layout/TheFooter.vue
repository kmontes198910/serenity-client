<script setup lang="ts">
import { Phone, Mail, Clock, MapPin, Printer } from 'lucide-vue-next'

const { t } = useI18n()
const currentYear = new Date().getFullYear()

const serviceLinks = computed(() => [
  { label: t('footer.serviceLinks.0'), to: '/#services' },
  { label: t('footer.serviceLinks.1'), to: '/#services' },
  { label: t('footer.serviceLinks.2'), to: '/#services' },
  { label: t('footer.serviceLinks.3'), to: '/#services' },
  { label: t('footer.serviceLinks.4'), to: '/#services' },
])

const quickLinks = computed(() => [
  { label: t('footer.quickLinks.0'), to: '/#about' },
  { label: t('footer.quickLinks.1'), to: '/#services' },
  { label: t('footer.quickLinks.2'), to: '/#team' },
  { label: t('footer.quickLinks.3'), to: '/#contact' },
])
</script>

<template>
  <footer class="bg-navy-900">
    <!-- Contact bar -->
    <div class="border-b border-white/10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <h3 class="text-2xl font-heading font-bold text-white">{{ t('footer.getInTouch') }}</h3>
          <div class="flex flex-wrap items-center gap-8">
            <a href="tel:+17026655035" class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center">
                <Phone class="h-5 w-5 text-accent-400" />
              </div>
              <div>
                <p class="text-xs text-white/50 font-medium">{{ t('labels.callUs') }}</p>
                <p class="text-base font-bold text-white">(702) 665-5035</p>
              </div>
            </a>
            <a href="mailto:serenitybslv@gmail.com" class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center">
                <Mail class="h-5 w-5 text-accent-400" />
              </div>
              <div>
                <p class="text-xs text-white/50 font-medium">{{ t('labels.email') }}</p>
                <p class="text-base font-bold text-white">serenitybslv@gmail.com</p>
              </div>
            </a>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center">
                <Clock class="h-5 w-5 text-accent-400" />
              </div>
              <div>
                <p class="text-xs text-white/50 font-medium">{{ t('footer.hoursLabel') }}</p>
                <p class="text-base font-bold text-white">{{ t('footer.hoursValue') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main footer -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand -->
        <div>
          <img src="/logo.png" alt="Serenity Behavioral Services" class="h-16 w-auto brightness-0 invert mb-5" />
          <p class="text-base text-white/50 leading-relaxed">
            {{ t('footer.tagline') }}
          </p>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-heading font-bold text-white mb-5">{{ t('footer.servicesHeading') }}</h3>
          <ul class="space-y-3">
            <li v-for="link in serviceLinks" :key="link.label">
              <NuxtLink :to="link.to" class="text-base text-white/50 hover:text-accent-400 transition-colors">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-heading font-bold text-white mb-5">{{ t('footer.quickLinksHeading') }}</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.label">
              <NuxtLink :to="link.to" class="text-base text-white/50 hover:text-accent-400 transition-colors">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-heading font-bold text-white mb-5">{{ t('footer.contactHeading') }}</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <MapPin class="h-4 w-4 text-accent-400 mt-0.5 shrink-0" />
              <span class="text-base text-white/50">4680 S Eastern Ave, Suite B, Las Vegas, NV 89119</span>
            </li>
            <li>
              <a href="tel:+17026655035" class="flex items-start gap-3 text-base text-white/50 hover:text-accent-400 transition-colors">
                <Phone class="h-4 w-4 text-accent-400 mt-0.5 shrink-0" />
                (702) 665-5035
              </a>
            </li>
            <li>
              <div class="flex items-start gap-3 text-base text-white/50">
                <Printer class="h-4 w-4 text-accent-400 mt-0.5 shrink-0" />
                Fax: (702) 552-6881
              </div>
            </li>
            <li>
              <a href="mailto:serenitybslv@gmail.com" class="flex items-start gap-3 text-base text-white/50 hover:text-accent-400 transition-colors">
                <Mail class="h-4 w-4 text-accent-400 mt-0.5 shrink-0" />
                serenitybslv@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-white/10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <p class="text-center text-sm text-white/40">
          &copy; {{ currentYear }} {{ t('footer.copyright') }}
          &middot; 4680 S Eastern Ave, Suite B, Las Vegas, NV 89119
        </p>
      </div>
    </div>
  </footer>
</template>
