<script setup lang="ts">
import { Phone, Mail, CalendarCheck, Clock, MapPin } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <div class="hidden lg:block bg-white border-b border-gray-100 w-full">
    <div class="px-4 xl:px-6 2xl:px-12">
      <div class="flex items-center justify-between py-2 2xl:py-3">
        <div class="flex items-center divide-x divide-gray-200">
          <a href="tel:+17026655035" class="flex items-center gap-2 2xl:gap-3 pr-4 xl:pr-5 2xl:pr-7 group">
            <div class="w-8 xl:w-9 2xl:w-10 h-8 xl:h-9 2xl:h-10 rounded-full bg-accent-50 flex items-center justify-center group-hover:bg-accent-400 transition-colors">
              <Phone class="h-3.5 2xl:h-4 w-3.5 2xl:w-4 text-accent-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p class="text-[10px] 2xl:text-[11px] font-semibold text-accent-500 uppercase tracking-wider">{{ t('topbar.contactUs') }}</p>
              <p class="text-xs 2xl:text-sm font-bold text-navy-800">(702) 665-5035</p>
            </div>
          </a>
          <a href="mailto:serenitybslv@gmail.com" class="flex items-center gap-2 2xl:gap-3 px-4 xl:px-5 2xl:px-7 group">
            <div class="w-8 xl:w-9 2xl:w-10 h-8 xl:h-9 2xl:h-10 rounded-full bg-accent-50 flex items-center justify-center group-hover:bg-accent-400 transition-colors">
              <Mail class="h-3.5 2xl:h-4 w-3.5 2xl:w-4 text-accent-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p class="text-[10px] 2xl:text-[11px] font-semibold text-accent-500 uppercase tracking-wider">{{ t('topbar.emailSupport') }}</p>
              <p class="text-xs 2xl:text-sm font-bold text-navy-800">serenitybslv@gmail.com</p>
            </div>
          </a>
          <NuxtLink to="/#contact" class="flex items-center gap-2 2xl:gap-3 px-4 xl:px-5 2xl:px-7 group">
            <div class="w-8 xl:w-9 2xl:w-10 h-8 xl:h-9 2xl:h-10 rounded-full bg-accent-50 flex items-center justify-center group-hover:bg-accent-400 transition-colors">
              <CalendarCheck class="h-3.5 2xl:h-4 w-3.5 2xl:w-4 text-accent-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p class="text-[10px] 2xl:text-[11px] font-semibold text-accent-500 uppercase tracking-wider">{{ t('topbar.onlineAppointment') }}</p>
              <p class="text-xs 2xl:text-sm font-bold text-navy-800">{{ t('topbar.bookNow') }} &rarr;</p>
            </div>
          </NuxtLink>
        </div>
        <div class="flex items-center divide-x divide-gray-200">
          <div class="flex items-center gap-2 2xl:gap-3 px-4 xl:px-5 2xl:px-7">
            <div class="w-8 xl:w-9 2xl:w-10 h-8 xl:h-9 2xl:h-10 rounded-full bg-accent-50 flex items-center justify-center">
              <Clock class="h-3.5 2xl:h-4 w-3.5 2xl:w-4 text-accent-500" />
            </div>
            <div>
              <p class="text-[10px] 2xl:text-[11px] font-semibold text-accent-500 uppercase tracking-wider">{{ t('topbar.telehealth') }}</p>
              <p class="text-xs 2xl:text-sm font-bold text-navy-800">{{ t('topbar.vseePlatform') }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 2xl:gap-3 pl-4 xl:pl-5 2xl:pl-7">
            <div class="w-8 xl:w-9 2xl:w-10 h-8 xl:h-9 2xl:h-10 rounded-full bg-accent-50 flex items-center justify-center">
              <MapPin class="h-3.5 2xl:h-4 w-3.5 2xl:w-4 text-accent-500" />
            </div>
            <div>
              <p class="text-[10px] 2xl:text-[11px] font-semibold text-accent-500 uppercase tracking-wider">{{ t('topbar.location') }}</p>
              <p class="text-xs 2xl:text-sm font-bold text-navy-800">{{ t('topbar.lasVegas') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
