<script setup lang="ts">
import type { BladeResourceCard } from '~/data/crm-blades'
import SfBadge from '~/components/ui/SfBadge.vue'

interface Props {
  heading?: string
  cards: BladeResourceCard[]
}

defineProps<Props>()
</script>

<template>
  <section class="py-16 md:py-20 bg-white">
    <div class="sf-container">
      <div v-if="heading" class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-[#032D60] tracking-tight">
          {{ heading }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="card in cards"
          :key="card.id"
          class="sf-card-hover bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col group shadow-sm hover:border-[#0176D3]/30"
        >
          <!-- Card Image Container -->
          <div class="relative aspect-[16/9] bg-gray-100 overflow-hidden">
            <img
              :src="card.imageUrl"
              :alt="card.headline"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            >
            <div class="absolute top-4 left-4 z-10">
              <SfBadge variant="navy">
                {{ card.badge }}
              </SfBadge>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <div class="space-y-2">
              <h3 class="text-lg font-bold text-[#032D60] leading-snug group-hover:text-[#0176D3] transition-colors">
                {{ card.headline }}
              </h3>
              <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">
                {{ card.description }}
              </p>
            </div>

            <!-- Card Link -->
            <div class="pt-2 border-t border-gray-50">
              <NuxtLink
                :to="card.linkUrl"
                class="inline-flex items-center gap-1.5 text-sm font-bold text-[#0176D3] group-hover:text-[#014486] transition-all"
              >
                {{ card.linkText }}
                <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
