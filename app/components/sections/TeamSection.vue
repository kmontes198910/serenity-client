<script setup lang="ts">
import { ArrowRight, Languages } from 'lucide-vue-next'

const { t } = useI18n()
const { members } = useStaff()
</script>

<template>
  <section class="fluid-section-y bg-white">
    <div class="mx-auto max-w-7xl fluid-section-x">
      <CommonSectionHeading
        :overline="t('team.overline')"
        :title="t('team.title')"
        :highlight="t('team.highlight')"
        :description="t('team.description')"
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          v-for="(member, index) in members"
          :key="member.id"
          v-reveal:scale="{ delay: index * 80 }"
          class="group relative flex flex-row rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl hover:shadow-navy-100/50 transition-all duration-500 hover:-translate-y-1"
        >
          <!-- Image area (left) -->
          <div
            class="w-40 sm:w-48 shrink-0 flex items-center justify-center relative overflow-hidden"
            :style="`background: linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})`"
          >
            <img
              v-if="member.image"
              :src="member.image"
              :alt="member.name"
              class="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            >
            <span v-else class="text-4xl font-heading font-bold text-white/80">
              {{ member.initials }}
            </span>

            <!-- Pattern overlay -->
            <div class="absolute inset-0 pattern-dots opacity-30" />

            <!-- Hover overlay with CTA -->
            <div class="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <NuxtLink
                :to="`/#contact-${member.id}`"
                class="px-4 py-2 bg-accent-400 text-navy-900 rounded-full text-xs font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              >
                {{ t('buttons.bookAppointment') }}
              </NuxtLink>
            </div>
          </div>

          <!-- Content (right) -->
          <div class="flex-1 p-5 flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between gap-2">
                <div>
                  <h3 class="font-heading font-bold text-navy-900 text-lg leading-tight">
                    {{ member.name }}
                  </h3>
                  <p class="text-accent-500 text-sm font-semibold mt-0.5">{{ member.title }}</p>
                </div>
                <span class="shrink-0 px-2.5 py-1 rounded-full text-xs font-bold bg-accent-50 text-accent-600 border border-accent-200">
                  {{ member.credentials }}
                </span>
              </div>

              <p class="text-sm text-navy-500 leading-relaxed mt-3 line-clamp-3">
                {{ member.bio }}
              </p>
            </div>

            <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="specialty in member.specialties.slice(0, 2)"
                  :key="specialty"
                  class="px-2 py-0.5 rounded text-[10px] font-medium bg-navy-50 text-navy-600"
                >
                  {{ specialty }}
                </span>
                <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700">
                  <Languages class="h-2.5 w-2.5" />
                  {{ t('labels.bilingual') }}
                </span>
              </div>
              <NuxtLink :to="`/#contact-${member.id}`" :aria-label="`Book appointment with ${member.name}`" class="w-8 h-8 rounded-full bg-navy-50 group-hover:bg-accent-400 flex items-center justify-center transition-colors">
                <ArrowRight class="h-3.5 w-3.5 text-navy-400 group-hover:text-navy-900 transition-colors" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div v-reveal class="text-center mt-14">
        <NuxtLink
          to="/#team"
          class="btn-arrow px-7 py-3.5 bg-navy-700 hover:bg-navy-800 text-white rounded-full text-sm font-bold transition-all"
        >
          {{ t('buttons.viewFullTeam') }}
          <span class="arrow-icon bg-accent-400 text-navy-900">
            <ArrowRight class="h-3.5 w-3.5" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
