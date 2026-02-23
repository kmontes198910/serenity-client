<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    class="flex h-full w-full flex-col justify-between p-16"
    style="background: linear-gradient(135deg, #011a33 0%, #03325e 50%, #044075 100%); font-family: 'Outfit', sans-serif;"
  >
    <!-- Top: Logo area -->
    <div class="flex items-center gap-4">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-xl"
        style="background: #22d3ee;"
      >
        <span style="color: #011a33; font-size: 28px; font-weight: 800;">S</span>
      </div>
      <span style="color: #ffffff; font-size: 24px; font-weight: 700;">
        Serenity Behavioral Services
      </span>
    </div>

    <!-- Middle: Title + Description -->
    <div class="flex flex-col gap-4">
      <h1 style="color: #ffffff; font-size: 56px; font-weight: 800; line-height: 1.1;">
        {{ title || 'Behavioral Health Services' }}
      </h1>
      <p style="color: #8bbedf; font-size: 24px; line-height: 1.4; max-width: 80%;">
        {{ description || 'Outpatient behavioral health clinic in Las Vegas, Nevada. Trusted by courts, community partners, and individuals.' }}
      </p>
    </div>

    <!-- Bottom: Accent bar + Location -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div style="width: 48px; height: 4px; background: #22d3ee; border-radius: 2px;" />
        <span style="color: #67e8f9; font-size: 18px; font-weight: 600;">
          Las Vegas, Nevada
        </span>
      </div>
      <span style="color: #4a94cc; font-size: 16px;">
        (702) 665-5035
      </span>
    </div>
  </div>
</template>
