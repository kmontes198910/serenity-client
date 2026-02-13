<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Serenity Behavioral Services` : 'Serenity Behavioral Services'
  },
})

if (import.meta.server) {
  useJsonLd([
    createLocalBusinessSchema(),
    createMedicalBusinessSchema(),
  ])
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <a
      href="#main-content"
      class="skip-link sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-navy-700 focus:text-white focus:rounded-lg focus:font-bold focus:text-sm focus:shadow-xl"
    >
      Skip to main content
    </a>
    <LayoutTheTopBar />
    <LayoutTheNavbar />
    <main id="main-content" class="flex-1">
      <slot />
    </main>
    <LayoutTheFooter />
    <CommonScrollToTop />
  </div>
</template>
