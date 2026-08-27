<script setup lang="ts">
import { pricingData } from '~/data/pricing'
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfFaqAccordion from '~/components/blades/SfFaqAccordion.vue'

useSeoMeta({
  title: 'Bảng giá Phần mềm CRM: Free, Starter Suite & Enterprise | Bidly',
  description: 'Khám phá bảng giá chi tiết phần mềm CRM Bidly. Lựa chọn gói cước phù hợp từ cá nhân, doanh nghiệp vừa & nhỏ (SMB) đến giải pháp Enterprise.'
})
</script>

<template>
  <div class="space-y-0">
    <!-- Pricing Header -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-4">
        <SfBadge variant="green" size="md">
          BẢNG GIÁ & GÓI DỊCH VỤ
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          {{ pricingData.heading }}
        </h1>
        <p class="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          {{ pricingData.subheading }}
        </p>
      </div>
    </section>

    <!-- Pricing Cards Grid -->
    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div
            v-for="tier in pricingData.tiers"
            :key="tier.id"
            :class="[
              'rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative',
              tier.popular
                ? 'border-2 border-primary shadow-2xl bg-card scale-[1.02] z-10'
                : 'border border-border shadow-md bg-card hover:border-muted-foreground/30'
            ]"
          >
            <!-- Popular Badge -->
            <div v-if="tier.popular" class="absolute -top-4 left-1/2 -translate-x-1/2">
              <span class="bg-primary text-primary-foreground text-[11px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider shadow-md">
                Phổ biến nhất
              </span>
            </div>

            <div class="space-y-6">
              <div>
                <h3 class="text-2xl font-extrabold text-foreground">
                  {{ tier.name }}
                </h3>
                <p class="text-xs text-muted-foreground mt-1 min-h-[32px]">
                  {{ tier.description }}
                </p>
              </div>

              <!-- Price Display -->
              <div class="py-4 border-y border-border">
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl sm:text-5xl font-black text-foreground">{{ tier.price }}</span>
                </div>
                <div class="text-xs text-muted-foreground mt-1">
                  {{ tier.period }}
                </div>
              </div>

              <!-- Features List -->
              <div class="space-y-3">
                <div class="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Tính năng bao gồm:
                </div>
                <ul class="space-y-2.5">
                  <li
                    v-for="(feat, fIdx) in tier.features"
                    :key="fIdx"
                    class="flex items-start gap-2.5 text-xs sm:text-sm text-foreground"
                  >
                    <svg class="w-4 h-4 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ feat }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="pt-8">
              <SfButton
                :variant="tier.ctaVariant"
                size="lg"
                :to="tier.ctaUrl"
                block
              >
                {{ tier.ctaLabel }}
              </SfButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Plans Section -->
    <section class="py-16 md:py-20 bg-background border-t border-border">
      <div class="sf-container space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-foreground">
            {{ pricingData.successPlans.heading }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(plan, pIdx) in pricingData.successPlans.plans"
            :key="pIdx"
            class="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-3"
          >
            <h4 class="text-lg font-bold text-foreground">{{ plan.name }}</h4>
            <p class="text-xs text-muted-foreground leading-relaxed">{{ plan.description }}</p>
            <div class="text-xs font-semibold text-brand-text pt-2 border-t border-border">
              {{ plan.included }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom FAQ -->
    <SfFaqAccordion />
  </div>
</template>
