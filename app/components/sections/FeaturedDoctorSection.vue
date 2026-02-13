<script setup lang="ts">
import { ArrowRight, Award, Shield, Users, Brain } from 'lucide-vue-next'

const { t } = useI18n()
const { leadership } = useStaff()
const director = computed(() => leadership.value[0])

const highlightIcons = [Award, Shield, Users, Brain]

const highlights = computed(() =>
  highlightIcons.map((icon, i) => ({
    icon,
    label: t(`featuredDoctor.highlights.${i}`),
  })),
)
</script>

<template>
  <section class="py-20 lg:py-28 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Content -->
        <div>
          <CommonSectionHeading
            :overline="t('featuredDoctor.overline')"
            :title="director?.name ?? ''"
            :highlight="director?.credentials"
            :description="director?.bio"
            align="left"
          />

          <div v-reveal="{ delay: 200 }" class="grid grid-cols-2 gap-3 mb-8">
            <div
              v-for="h in highlights"
              :key="h.label"
              class="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100"
            >
              <component :is="h.icon" class="h-5 w-5 text-accent-500 shrink-0" />
              <span class="text-sm font-semibold text-navy-700">{{ h.label }}</span>
            </div>
          </div>

          <div v-reveal="{ delay: 200 }" class="flex flex-wrap gap-2 mb-8">
            <span
              v-for="specialty in director?.specialties"
              :key="specialty"
              class="px-3 py-1.5 rounded-full text-xs font-medium bg-navy-50 text-navy-600 border border-navy-100"
            >
              {{ specialty }}
            </span>
          </div>

          <div v-reveal="{ delay: 300 }">
            <NuxtLink
              to="/#team"
              class="btn-arrow px-7 py-3.5 bg-navy-700 hover:bg-navy-800 text-white rounded-full text-sm font-bold transition-all"
            >
              {{ t('buttons.meetFullTeam') }}
              <span class="arrow-icon bg-accent-400 text-navy-900">
                <ArrowRight class="h-3.5 w-3.5" />
              </span>
            </NuxtLink>
          </div>
        </div>

        <!-- Right: Image -->
        <div v-reveal:right class="relative">
          <div class="relative rounded-2xl overflow-hidden">
            <img
              src="/images/businesswoman.jpg"
              alt="Clinical Director at Serenity Behavioral Services"
              class="w-full aspect-[3/4] object-cover object-top rounded-2xl"
              loading="lazy"
            />
          </div>

          <!-- Experience badge -->
          <div class="absolute -bottom-5 right-8 bg-white rounded-xl px-6 py-4 shadow-xl flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-accent-50 flex items-center justify-center">
              <Award class="h-6 w-6 text-accent-500" />
            </div>
            <div>
              <p class="font-heading font-bold text-navy-900 text-lg">{{ director?.credentials }}</p>
              <p class="text-xs text-navy-500">{{ t('labels.clinicalDirector') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
