<script setup lang="ts">
import { crmBladesData } from '~/data/crm-blades'
import SfCard from '~/components/ui/SfCard.vue'

const businessScale = crmBladesData.businessScale
</script>

<template>
  <section class="py-16 md:py-24 bg-[#EAF5FE] border-t border-blue-100/50">
    <div class="sf-container space-y-12 md:space-y-16">
      <!-- Main Centered Top Headline -->
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#032D60] tracking-tight leading-tight">
          {{ businessScale.mainHeading }}
        </h2>
      </div>

      <!-- Asymmetric Section: Left Title + Right 2 Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
        <!-- Left Title -->
        <div class="lg:col-span-4 space-y-4">
          <h3 class="text-2xl sm:text-3xl font-extrabold text-[#032D60] tracking-tight leading-snug">
            {{ businessScale.leftTitle }}
          </h3>
        </div>

        <!-- Right 2 Cards Side-by-Side -->
        <div class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div
            v-for="card in businessScale.cards"
            :key="card.id"
            class="flex"
          >
            <SfCard
              :title="card.title"
              :border-color="card.borderColor"
              :description="card.description"
              :link-text="card.linkText"
              :link-url="card.linkUrl"
              class="w-full shadow-[0_8px_24px_rgba(3,45,96,0.06)]"
            />
          </div>
        </div>
      </div>

      <!-- Bottom Centered Action Button -->
      <div class="text-center pt-4">
        <NuxtLink
          :to="businessScale.cta.url"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-[#0176D3] text-white font-bold text-base rounded-xl hover:bg-[#014486] transition-all shadow-md active:scale-[0.98]"
        >
          {{ businessScale.cta.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
