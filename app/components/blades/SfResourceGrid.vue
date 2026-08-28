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
  <section class="py-16 md:py-24 bg-card border-b border-border/80">
    <div class="sf-container space-y-12 md:space-y-16">
      <div v-if="heading" class="text-center max-w-3xl mx-auto space-y-3">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
        >
          {{ heading }}
        </h2>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
      >
        <div
          v-for="card in cards"
          :key="card.id"
          class="sf-card group bg-card rounded-xl border border-border/70 overflow-hidden flex flex-col justify-between shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1"
        >
          <!-- Card Image Container (16:9) -->
          <div class="relative aspect-[16/9] bg-muted overflow-hidden border-b border-border/50">
            <img
              :src="card.imageUrl"
              :alt="card.headline"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <!-- Card Content -->
          <div
            class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5"
          >
            <div class="space-y-3">
              <div v-if="card.badge">
                <span
                  class="inline-flex px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-brand-soft text-primary select-none"
                >
                  {{ card.badge }}
                </span>
              </div>

              <h3
                class="text-lg sm:text-xl font-extrabold text-foreground leading-snug group-hover:text-primary transition-colors tracking-tight"
              >
                {{ card.headline }}
              </h3>
              <p
                class="text-sm sm:text-[14.5px] text-muted-foreground leading-relaxed font-normal"
              >
                {{ card.description }}
              </p>
            </div>

            <!-- Card Link with smooth hover -->
            <div class="pt-2">
              <NuxtLink
                :to="card.linkUrl"
                class="inline-flex items-center gap-1.5 text-sm sm:text-[14.5px] font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer group/link"
              >
                <span class="underline underline-offset-4 decoration-1 hover:decoration-2">{{ card.linkText }}</span>
                <svg class="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Optional CTA Button below grid -->
      <div v-if="ctaButton" class="text-center pt-2">
        <NuxtLink
          :to="ctaButton.url"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-extrabold text-sm sm:text-base rounded-[4px] hover:bg-primary-hover transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
        >
          {{ ctaButton.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
