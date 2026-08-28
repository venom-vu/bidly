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
  <section class="py-16 md:py-24 bg-card border-b border-border">
    <div class="sf-container space-y-12">
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
          class="sf-card group bg-card rounded-2xl border border-border overflow-hidden flex flex-col justify-between shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
        >
          <!-- Top Accent Bar: 8px height -->
          <div
            class="h-2 w-full shrink-0"
            :style="{
              backgroundColor: card.accentColor || 'var(--brand, #74CC55)',
            }"
          />

          <!-- Card Image Container (16:9) -->
          <div class="relative aspect-[16/9] bg-muted overflow-hidden">
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
                <SfBadge variant="green" size="sm">
                  {{ card.badge }}
                </SfBadge>
              </div>

              <h3
                class="text-lg sm:text-xl font-extrabold text-foreground leading-snug group-hover:text-brand-text transition-colors"
              >
                {{ card.headline }}
              </h3>
              <p
                class="text-sm sm:text-[14.5px] text-muted-foreground leading-relaxed font-normal"
              >
                {{ card.description }}
              </p>
            </div>

            <!-- Card Link with Animated Arrow -->
            <div class="pt-3 border-t border-border">
              <NuxtLink
                :to="card.linkUrl"
                class="group/link inline-flex items-center gap-1.5 text-sm sm:text-[14.5px] font-bold text-brand-text underline underline-offset-4 decoration-2 hover:text-primary hover:decoration-primary transition-all cursor-pointer"
              >
                <span>{{ card.linkText }}</span>
                <svg
                  class="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1 no-underline"
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
      <div v-if="ctaButton" class="text-center pt-2">
        <NuxtLink
          :to="ctaButton.url"
          class="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-bold text-sm sm:text-base rounded-xl hover:bg-primary-hover transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
        >
          {{ ctaButton.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
