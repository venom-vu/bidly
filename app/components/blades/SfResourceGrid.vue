<script setup lang="ts">
import type { BladeResourceCard } from "~/data/crm-blades";
import SfBadge from "~/components/ui/SfBadge.vue";

interface Props {
  heading?: string;
  cards: BladeResourceCard[];
  ctaButton?: {
    label: string;
    url: string;
  };
}

defineProps<Props>();
</script>

<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="sf-container space-y-12">
      <div v-if="heading" class="text-center max-w-3xl mx-auto space-y-4">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#032D60] tracking-tight leading-tight"
        >
          {{ heading }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        <div
          v-for="card in cards"
          :key="card.id"
          class="sf-card-hover bg-white rounded-2xl border border-gray-100/90 overflow-hidden flex flex-col group shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[#0176D3]/30 transition-all duration-300"
        >
          <!-- Card Image Container -->
          <div class="relative aspect-[16/9] bg-gray-100 overflow-hidden">
            <img
              :src="card.imageUrl"
              :alt="card.headline"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <!-- Card Content -->
          <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
            <div class="space-y-3">
              <div v-if="card.badge">
                <SfBadge variant="blue" size="sm">
                  {{ card.badge }}
                </SfBadge>
              </div>

              <h3
                class="text-lg sm:text-xl font-extrabold text-[#032D60] leading-snug group-hover:text-[#0176D3] transition-colors"
              >
                {{ card.headline }}
              </h3>
              <p class="text-sm sm:text-[15px] text-gray-600 leading-relaxed line-clamp-3">
                {{ card.description }}
              </p>
            </div>

            <!-- Card Link -->
            <div class="pt-3 border-t border-gray-100">
              <NuxtLink
                :to="card.linkUrl"
                class="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-bold text-[#0176D3] underline underline-offset-4 decoration-2 group-hover:text-[#014486] transition-all"
              >
                {{ card.linkText }}
                <svg
                  class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 no-underline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Optional CTA Button below grid -->
      <div v-if="ctaButton" class="text-center pt-4">
        <NuxtLink
          :to="ctaButton.url"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-[#0176D3] text-white font-bold text-base rounded-xl hover:bg-[#014486] transition-all shadow-md active:scale-[0.98]"
        >
          {{ ctaButton.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
