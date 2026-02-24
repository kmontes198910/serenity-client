<script setup lang="ts">
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-vue-next'

const { t } = useI18n()

const testimonials = computed(() => [
  {
    id: 1,
    text: t('testimonials.items.0.text'),
    name: t('testimonials.items.0.name'),
    role: t('testimonials.items.0.role'),
    rating: 5,
  },
  {
    id: 2,
    text: t('testimonials.items.1.text'),
    name: t('testimonials.items.1.name'),
    role: t('testimonials.items.1.role'),
    rating: 5,
  },
  {
    id: 3,
    text: t('testimonials.items.2.text'),
    name: t('testimonials.items.2.name'),
    role: t('testimonials.items.2.role'),
    rating: 5,
  },
])

const currentIndex = ref(0)

function next() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
}

const current = computed(() => testimonials.value[currentIndex.value])
</script>

<template>
  <section class="fluid-section-y bg-white">
    <div class="mx-auto max-w-7xl fluid-section-x">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Heading -->
        <div>
          <CommonSectionHeading
            :overline="t('testimonials.overline')"
            :title="t('testimonials.title')"
            :highlight="t('testimonials.highlight')"
            :description="t('testimonials.description')"
            align="left"
          />

          <!-- Indicators -->
          <div class="flex items-center gap-4 mt-8">
            <button
              type="button"
              aria-label="Previous testimonial"
              class="w-12 h-12 rounded-full border-2 border-navy-200 hover:border-accent-400 hover:bg-accent-50 flex items-center justify-center transition-all"
              @click="prev"
            >
              <ChevronLeft class="h-5 w-5 text-navy-600" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              class="w-12 h-12 rounded-full border-2 border-navy-200 hover:border-accent-400 hover:bg-accent-50 flex items-center justify-center transition-all"
              @click="next"
            >
              <ChevronRight class="h-5 w-5 text-navy-600" />
            </button>
            <span class="text-sm text-navy-400 ml-2">
              {{ currentIndex + 1 }} / {{ testimonials.length }}
            </span>
          </div>
        </div>

        <!-- Right: Testimonial card -->
        <div v-reveal:right>
          <div class="relative bg-navy-800 rounded-2xl p-8 lg:p-10">
            <!-- Quote icon -->
            <Quote class="h-10 w-10 text-accent-400/30 mb-6" />

            <!-- Stars -->
            <div class="flex items-center gap-1 mb-4">
              <Star
                v-for="s in current.rating"
                :key="s"
                class="h-5 w-5 text-accent-400 fill-accent-400"
              />
            </div>

            <!-- Text -->
            <Transition
              mode="out-in"
              enter-active-class="transition-all duration-300"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div :key="current.id">
                <p class="text-white/90 text-lg leading-relaxed mb-6">
                  "{{ current.text }}"
                </p>

                <div class="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div class="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center">
                    <span class="text-sm font-bold text-accent-400">
                      {{ current.name.split(' ').map((w: string) => w[0]).join('') }}
                    </span>
                  </div>
                  <div>
                    <p class="font-heading font-bold text-white">{{ current.name }}</p>
                    <p class="text-sm text-white/50">{{ current.role }}</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
