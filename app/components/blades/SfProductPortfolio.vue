<script setup lang="ts">
import { crmBladesData } from '~/data/crm-blades'
import SfCard from '~/components/ui/SfCard.vue'

const portfolio = crmBladesData.productPortfolio

// Split into top row (3 cards) and bottom row (2 cards centered)
const topCards = computed(() => portfolio.cards.slice(0, 3))
const bottomCards = computed(() => portfolio.cards.slice(3, 5))
</script>

<template>
  <section class="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-card via-card to-brand-soft/50 overflow-hidden">
    <div class="sf-container relative z-10 space-y-12 md:space-y-16">
      <!-- Section Heading -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-foreground tracking-tight leading-tight">
          {{ portfolio.heading }}
        </h2>
      </div>

      <!-- Cards Grid (3 on Top, 2 Centered on Bottom) -->
      <div class="space-y-6 lg:space-y-8 max-w-6xl mx-auto">
        <!-- Top Row: 3 Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="card in topCards"
            :key="card.id"
            class="flex"
          >
            <SfCard
              :title="card.title"
              :border-color="card.borderColor"
              :description="card.description"
              :link-text="card.linkText"
              :link-url="card.linkUrl"
              class="w-full"
            />
          </div>
        </div>

        <!-- Bottom Row: 2 Cards Centered -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div
            v-for="card in bottomCards"
            :key="card.id"
            class="flex"
          >
            <SfCard
              :title="card.title"
              :border-color="card.borderColor"
              :description="card.description"
              :link-text="card.linkText"
              :link-url="card.linkUrl"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Bottom Centered Action Button -->
      <div class="text-center pt-4">
        <NuxtLink
          :to="portfolio.cta.url"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-bold text-base rounded-xl hover:bg-primary-hover transition-all shadow-md active:scale-[0.98]"
        >
          {{ portfolio.cta.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
