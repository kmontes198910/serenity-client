<script setup lang="ts">
import { Plus, Minus, ArrowRight } from 'lucide-vue-next'

const { t } = useI18n()

const faqs = computed(() =>
  [0, 1, 2, 3, 4, 5].map(i => ({
    question: t(`faq.items.${i}.question`),
    answer: t(`faq.items.${i}.answer`),
  })),
)

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="fluid-section-pt bg-white">
    <div class="mx-auto max-w-7xl fluid-section-x">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <!-- Left: Heading + image -->
        <div>
          <CommonSectionHeading
            :overline="t('faq.overline')"
            :title="t('faq.title')"
            :highlight="t('faq.highlight')"
            :description="t('faq.description')"
            align="left"
          />

          <div v-reveal="{ delay: 200 }" class="relative mt-8">
            <img
              src="/images/man-thinking.webp"
              alt="Man thinking about frequently asked questions"
              class="w-full max-w-md mx-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Right: Accordion -->
        <div class="space-y-3">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.question"
            v-reveal="{ delay: index * 60 }"
            class="border border-gray-100 rounded-xl overflow-hidden transition-all"
            :class="openIndex === index ? 'bg-navy-50 border-navy-200' : 'bg-white hover:bg-gray-50'"
          >
            <button
              type="button"
              class="w-full flex items-center justify-between gap-4 p-5 text-left"
              @click="toggle(index)"
            >
              <span class="font-heading font-bold text-navy-900">
                {{ faq.question }}
              </span>
              <span
                class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                :class="openIndex === index ? 'bg-accent-400 text-navy-900' : 'bg-navy-100 text-navy-500'"
              >
                <Minus v-if="openIndex === index" class="h-4 w-4" />
                <Plus v-else class="h-4 w-4" />
              </span>
            </button>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="openIndex === index" class="overflow-hidden">
                <p class="px-5 pb-5 text-sm text-navy-600 leading-relaxed">
                  {{ faq.answer }}
                </p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
