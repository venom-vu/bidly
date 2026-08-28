<script setup lang="ts">
import type { BladeResourceCard } from "~/data/crm-blades";

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
  <!--
    Salesforce nUp Blade — theme_variant: "light_gradient"
    Nền trắng → xanh nhạt gradient (blade phân tích sf/nup)
    Cards: shadow-only, không border cứng, hover lift
  -->
  <section class="py-16 md:py-24 sf-section-gradient sf-section-border">
    <div class="sf-container space-y-12 md:space-y-16">
      <!-- Section heading — centered, navy -->
      <div v-if="heading" class="text-center max-w-3xl mx-auto space-y-3">
        <h2
          class="text-2xl sm:text-3xl md:text-[2.25rem] font-extrabold text-foreground tracking-tight leading-tight"
        >
          {{ heading }}
        </h2>
      </div>

      <!-- 3-column Card Grid — Salesforce Resource Cards -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
      >
        <div
          v-for="card in cards"
          :key="card.id"
          class="sf-grid-card group bg-white rounded-xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Card Image 16:9 -->
          <div class="relative aspect-[16/9] bg-muted overflow-hidden">
            <img
              :src="card.imageUrl"
              :alt="card.headline"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>

          <!-- Card Body -->
          <div
            class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5"
          >
            <div class="space-y-3">
              <!-- Badge — Salesforce eyebrow/badge pill -->
              <div v-if="card.badge">
                <span
                  class="inline-flex px-2.5 py-0.5 text-[11px] font-bold rounded-full select-none"
                  style="background: #e8f4fd; color: #0176d3"
                >
                  {{ card.badge }}
                </span>
              </div>

              <h3
                class="text-[1.0625rem] sm:text-[1.125rem] font-extrabold text-foreground leading-snug tracking-tight group-hover:text-primary transition-colors"
              >
                {{ card.headline }}
              </h3>
              <p
                class="text-sm sm:text-[14.5px] leading-relaxed"
                style="color: #54698d"
              >
                {{ card.description }}
              </p>
            </div>

            <!-- Card Link — Salesforce bold underline with arrow -->
            <div class="pt-1">
              <NuxtLink
                :to="card.linkUrl"
                class="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover transition-colors group/link"
              >
                <span class="underline underline-offset-3 decoration-1">{{
                  card.linkText
                }}</span>
                <svg
                  class="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Optional CTA Button — Salesforce primary solid -->
      <div v-if="ctaButton" class="text-center pt-2">
        <NuxtLink
          :to="ctaButton.url"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-extrabold text-sm sm:text-base rounded-[4px] hover:bg-primary-hover transition-all active:scale-[0.98] cursor-pointer"
          style="box-shadow: 0 2px 8px rgba(1, 118, 211, 0.25)"
        >
          {{ ctaButton.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sf-grid-card {
  box-shadow: 0 2px 8px rgba(3, 45, 96, 0.06), 0 4px 20px rgba(3, 45, 96, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  will-change: transform, box-shadow;
}

.sf-grid-card:hover {
  box-shadow: 0 8px 28px rgba(3, 45, 96, 0.12), 0 16px 40px rgba(3, 45, 96, 0.07);
  border-color: rgba(1, 118, 211, 0.18);
}
</style>
