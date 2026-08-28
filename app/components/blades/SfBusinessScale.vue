<script setup lang="ts">
import { crmBladesData } from "~/data/crm-blades";
import SfCard from "~/components/ui/SfCard.vue";

const businessScale = crmBladesData.businessScale;
</script>

<template>
  <section class="py-16 md:py-24 bg-card border-t border-border">
    <div class="sf-container space-y-12 md:space-y-16">
      <!-- Main Centered Top Headline -->
      <div class="text-center max-w-4xl mx-auto space-y-3">
        <div class="text-xs font-bold uppercase tracking-wider text-brand-text">
          TÙY BIẾN THEO ĐẶC THÙ NGÀNH
        </div>
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
        >
          {{ businessScale.mainHeading }}
        </h2>
      </div>

      <!-- Asymmetric Section: Left Title + Right 2 Cards -->
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
      >
        <!-- Left Title -->
        <div class="lg:col-span-4 space-y-4">
          <h3
            class="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug"
          >
            {{ businessScale.leftTitle }}
          </h3>
          <p class="text-sm text-muted-foreground leading-relaxed">
            Mỗi phân khúc có chu kỳ và đặc thù thầu riêng biệt. Bidly cung cấp các mẫu nghiệp vụ cấu hình sẵn sàng vận hành ngay.
          </p>
        </div>

        <!-- Right 2 Cards Side-by-Side -->
        <div
          class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-stretch"
        >
          <div v-for="card in businessScale.cards" :key="card.id" class="flex">
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
      </div>

      <!-- Bottom Centered Action Button -->
      <div class="text-center pt-2">
        <NuxtLink
          :to="businessScale.cta.url"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-extrabold text-sm sm:text-base rounded-[4px] hover:bg-primary-hover transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
        >
          {{ businessScale.cta.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

