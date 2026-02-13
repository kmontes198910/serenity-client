<script setup lang="ts">
useHead({
  titleTemplate: '%s | Serenity Behavioral Services',
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <LayoutTheTopBar />
    <LayoutTheNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutTheFooter />
    <CommonScrollToTop />
  </div>
</template>
