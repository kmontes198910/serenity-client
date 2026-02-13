<script setup lang="ts">
import { Phone, Mail, CalendarCheck, Clock, MapPin } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <div class="hidden lg:block bg-white border-b border-gray-100 w-full">
    <div class="px-6 xl:px-12">
      <div class="flex items-center justify-between py-3">
        <div class="flex items-center divide-x divide-gray-200">
          <a href="tel:+17026655035" class="flex items-center gap-3 pr-7 group">
            <div class="w-10 h-10 rounded-full bg-accent-50 flex items-center justify-center group-hover:bg-accent-400 transition-colors">
              <Phone class="h-4 w-4 text-accent-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p class="text-[11px] font-semibold text-accent-500 uppercase tracking-wider">{{ t('topbar.contactUs') }}</p>
              <p class="text-sm font-bold text-navy-800">(702) 665-5035</p>
            </div>
          </a>
          <a href="mailto:info@serenitybhs.com" class="flex items-center gap-3 px-7 group">
            <div class="w-10 h-10 rounded-full bg-accent-50 flex items-center justify-center group-hover:bg-accent-400 transition-colors">
              <Mail class="h-4 w-4 text-accent-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p class="text-[11px] font-semibold text-accent-500 uppercase tracking-wider">{{ t('topbar.emailSupport') }}</p>
              <p class="text-sm font-bold text-navy-800">info@serenitybhs.com</p>
            </div>
          </a>
          <NuxtLink to="/#contact" class="flex items-center gap-3 px-7 group">
            <div class="w-10 h-10 rounded-full bg-accent-50 flex items-center justify-center group-hover:bg-accent-400 transition-colors">
              <CalendarCheck class="h-4 w-4 text-accent-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p class="text-[11px] font-semibold text-accent-500 uppercase tracking-wider">{{ t('topbar.onlineAppointment') }}</p>
              <p class="text-sm font-bold text-navy-800">{{ t('topbar.bookNow') }} &rarr;</p>
            </div>
          </NuxtLink>
        </div>
        <div class="flex items-center divide-x divide-gray-200">
          <div class="flex items-center gap-3 px-7">
            <div class="w-10 h-10 rounded-full bg-accent-50 flex items-center justify-center">
              <Clock class="h-4 w-4 text-accent-500" />
            </div>
            <div>
              <p class="text-[11px] font-semibold text-accent-500 uppercase tracking-wider">{{ t('topbar.telehealth') }}</p>
              <p class="text-sm font-bold text-navy-800">{{ t('topbar.vseePlatform') }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3 pl-7">
            <div class="w-10 h-10 rounded-full bg-accent-50 flex items-center justify-center">
              <MapPin class="h-4 w-4 text-accent-500" />
            </div>
            <div>
              <p class="text-[11px] font-semibold text-accent-500 uppercase tracking-wider">{{ t('topbar.location') }}</p>
              <p class="text-sm font-bold text-navy-800">{{ t('topbar.lasVegas') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
