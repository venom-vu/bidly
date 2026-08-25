<script setup lang="ts">
import { faqsData } from '~/data/faqs'

const openIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  if (openIndex.value === index) {
    openIndex.value = null
  } else {
    openIndex.value = index
  }
}
</script>

<template>
  <section class="py-16 md:py-24 bg-white border-t border-gray-100">
    <div class="sf-container max-w-4xl">
      <div class="text-center space-y-3 mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#032D60] tracking-tight">
          {{ faqsData.heading }}
        </h2>
        <p class="text-base text-gray-600">
          {{ faqsData.subheading }}
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-4">
        <div
          v-for="(faq, idx) in faqsData.items"
          :key="faq.id"
          class="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
          :class="openIndex === idx ? 'border-[#0176D3] shadow-md bg-[#F8FAFC]' : 'hover:border-gray-300 bg-white'"
        >
          <button
            type="button"
            class="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#032D60] cursor-pointer"
            @click="toggleFaq(idx)"
          >
            <span>{{ faq.question }}</span>
            <span
              class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 transition-transform duration-300 text-gray-600"
              :class="openIndex === idx ? 'rotate-180 bg-[#0176D3] text-white' : ''"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <div
            v-show="openIndex === idx"
            class="px-6 pb-6 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
