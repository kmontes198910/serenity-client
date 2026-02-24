<script setup lang="ts">
interface Props {
  overline?: string
  title: string
  highlight?: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
}

withDefaults(defineProps<Props>(), {
  align: 'center',
  dark: false,
})
</script>

<template>
  <div
    :class="[
      align === 'center' ? 'text-center mx-auto' : 'text-left',
      'max-w-2xl fluid-mb-section',
    ]"
  >
    <span
      v-if="overline"
      v-reveal
      class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] mb-4"
      :class="dark ? 'text-accent-400' : 'text-accent-500'"
    >
      <span class="w-8 h-[2px]" :class="dark ? 'bg-accent-400' : 'bg-accent-500'" />
      {{ overline }}
    </span>

    <h2
      v-reveal="{ delay: 100 }"
      class="font-heading fluid-h2 font-bold leading-tight"
      :class="dark ? 'text-white' : 'text-navy-900'"
    >
      <template v-if="highlight">
        {{ title }} <span class="text-accent-400">{{ highlight }}</span>
      </template>
      <template v-else>
        {{ title }}
      </template>
    </h2>

    <p
      v-if="description"
      v-reveal="{ delay: 200 }"
      class="mt-4 fluid-body-lg leading-relaxed whitespace-pre-line"
      :class="dark ? 'text-white/60' : 'text-navy-600'"
    >
      {{ description }}
    </p>
  </div>
</template>
