<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('meta.homeTitle'),
  ogTitle: () => t('meta.homeTitle'),
  description: () => t('meta.homeDescription'),
  ogDescription: () => t('meta.homeDescription'),
  ogType: 'website',
  ogSiteName: 'Serenity Behavioral Services',
  ogLocale: 'en_US',
})

defineOgImage({ component: 'OgImageDefault' })
</script>

<template>
  <div>
    <SectionsHeroSection id="hero" />
    <SectionsStatsSection />
    <LazySectionsFacilitiesSection />
    <LazySectionsServicesSection id="services" />
    <LazySectionsTeamSection id="team" />
    <div class="relative overflow-hidden">
      <!-- SERENITY watermark (left, top-aligned) -->
      <span class="absolute left-4 top-8 z-[1] text-[300px] leading-[0.85] tracking-tight text-white/[0.03] pointer-events-none select-none [writing-mode:vertical-lr]" style="font-family: 'Bebas Neue', sans-serif">
        SERENITY
      </span>
      <!-- RESULTS watermark (right, bottom-aligned) -->
      <span class="absolute right-4 bottom-8 z-[1] text-[300px] leading-[0.85] tracking-tight text-white/[0.03] pointer-events-none select-none [writing-mode:vertical-lr]" style="font-family: 'Bebas Neue', sans-serif">
        RESULTS
      </span>
      <LazySectionsWhyUsSection id="about" />
      <LazySectionsAppointmentSection id="contact" />
    </div>
    <LazySectionsTestimonialsSection id="testimonials" />
    <LazySectionsHowItWorksSection />
    <!-- <LazySectionsFeaturedDoctorSection /> -->
    <LazySectionsFaqSection id="faq" />
    <LazySectionsCtaSection />
  </div>
</template>
