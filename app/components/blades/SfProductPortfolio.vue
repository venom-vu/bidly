<script setup lang="ts">
import { crmBladesData } from "~/data/crm-blades";
import SfCard from "~/components/ui/SfCard.vue";

const portfolio = crmBladesData.productPortfolio;
</script>

<template>
  <section
    class="relative py-16 md:py-24 bg-secondary/50 border-t border-border overflow-hidden"
  >
    <div class="sf-container relative z-10 space-y-12 md:space-y-16">
      <!-- Section Heading -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
        >
          {{ portfolio.heading }}
        </h2>
        <p class="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Mô hình hóa từ sàng lọc tín hiệu đến bàn giao thi công với các chốt chặn kiểm soát ở máy chủ.
        </p>
      </div>

      <!-- 6 Core MVP Modules Grid (3 columns on desktop) -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
      >
        <div v-for="card in portfolio.cards" :key="card.id" class="flex">
          <SfCard
            :title="card.title"
            :border-color="card.borderColor"
            :badge="card.badge"
            :description="card.description"
            :link-text="card.linkText"
            :link-url="card.linkUrl"
            class="w-full"
          />
        </div>
      </div>

      <!-- Bottom Centered Action Button -->
      <div class="text-center pt-2">
        <NuxtLink
          :to="portfolio.cta.url"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-extrabold text-sm sm:text-base rounded-xl hover:bg-primary-hover transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
        >
          {{ portfolio.cta.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

