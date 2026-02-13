<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: () => t('meta.homeTitle'),
  meta: [
    {
      name: 'description',
      content: () => t('meta.homeDescription'),
    },
  ],
})
</script>

<template>
  <div>
    <SectionsHeroSection id="hero" />
    <SectionsStatsSection />
    <SectionsFacilitiesSection />
    <SectionsServicesSection id="services" />
    <SectionsTeamSection id="team" />
    <div class="relative overflow-hidden">
      <!-- SERENITY watermark (left, top-aligned) -->
      <span class="absolute left-4 top-8 z-[1] text-[300px] leading-[0.85] tracking-tight text-white/[0.03] pointer-events-none select-none [writing-mode:vertical-lr]" style="font-family: 'Bebas Neue', sans-serif">
        SERENITY
      </span>
      <!-- RESULTS watermark (right, bottom-aligned) -->
      <span class="absolute right-4 bottom-8 z-[1] text-[300px] leading-[0.85] tracking-tight text-white/[0.03] pointer-events-none select-none [writing-mode:vertical-lr]" style="font-family: 'Bebas Neue', sans-serif">
        RESULTS
      </span>
      <SectionsWhyUsSection id="about" />
      <SectionsAppointmentSection id="contact" />
    </div>
    <SectionsTestimonialsSection id="testimonials" />
    <SectionsHowItWorksSection />
    <!-- <SectionsFeaturedDoctorSection /> -->
    <SectionsFaqSection id="faq" />
    <SectionsCtaSection />
  </div>
</template>
