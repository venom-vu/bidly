<script setup lang="ts">
import { pricingData } from '~/data/pricing'
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfFaqAccordion from '~/components/blades/SfFaqAccordion.vue'

useSeoMeta({
  title: 'Bảng giá Bidly Preconstruction CRM: Pilot, Essential & Enterprise | Vtechcom',
  description: 'Mô hình triển khai và bảng giá Bidly theo quy mô doanh nghiệp: từ Design Partner Pilot 35-60 triệu đến Enterprise on-prem. Tính phí theo doanh nghiệp, không tính theo số user.'
})

const philosophies = [
  {
    title: 'Tính phí theo doanh nghiệp (Instance)',
    desc: 'Không đếm số lượng user để khuyến khích 100% thành viên (BD, Kỹ thuật, Đấu thầu, Dự toán, Pháp lý, Tài chính, Ban điều hành) cùng tham gia mà không phát sinh thêm chi phí.'
  },
  {
    title: 'Cơ sở dữ liệu độc lập 100%',
    desc: 'Bảo vệ dữ liệu giá thầu và bí quyết quan hệ tối đa. Mỗi khách hàng sở hữu một cơ sở dữ liệu PostgreSQL riêng biệt, tuyệt đối không dùng chung database đa người thuê.'
  },
  {
    title: 'Khấu trừ 100% phí Pilot',
    desc: 'Chi phí gói Design Partner Pilot 8-10 tuần (35-60 triệu) được khấu trừ toàn bộ vào hợp đồng thuê bao năm đầu tiên khi khách hàng quyết định ký chính thức.'
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Pricing Header -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-4">
        <div class="inline-block">
          <SfBadge variant="green" size="md">
            BẢNG GIÁ &amp; GÓI DỊCH VỤ
          </SfBadge>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          {{ pricingData.heading }}
        </h1>
        <p class="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-normal">
          {{ pricingData.subheading }}
        </p>
      </div>
    </section>

    <!-- Pricing Philosophies -->
    <section class="py-12 bg-card border-b border-border">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(phil, pIdx) in philosophies"
            :key="pIdx"
            class="p-6 rounded-2xl bg-background border border-border space-y-2 shadow-xs"
          >
            <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-text">
              <span class="w-5 h-5 rounded-full bg-brand-soft text-brand-text flex items-center justify-center font-mono text-[10px] tabular">
                0{{ pIdx + 1 }}
              </span>
              {{ phil.title }}
            </div>
            <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {{ phil.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Cards Grid -->
    <section class="py-16 md:py-24 bg-background border-b border-border">
      <div class="sf-container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div
            v-for="tier in pricingData.tiers"
            :id="tier.id"
            :key="tier.id"
            :class="[
              'rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative',
              tier.popular
                ? 'border-2 border-primary shadow-2xl bg-card scale-[1.02] z-10'
                : 'border border-border shadow-card bg-card hover:border-muted-foreground/30'
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
                <div v-if="tier.badge" class="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                  {{ tier.badge }}
                </div>
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
                  <span class="text-3xl sm:text-4xl font-black text-foreground tabular">{{ tier.price }}</span>
                </div>
                <div class="text-xs text-muted-foreground mt-1 tabular">
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

    <!-- Enterprise Tier Section -->
    <section id="enterprise" class="py-12 bg-card border-b border-border">
      <div class="sf-container">
        <div class="bg-gradient-to-r from-card via-card to-brand-soft/40 p-8 sm:p-10 rounded-2xl border-2 border-border shadow-card flex flex-col lg:flex-row items-center justify-between gap-8">
          <div class="space-y-3 max-w-3xl">
            <div class="flex items-center gap-2">
              <SfBadge variant="navy" size="sm">ENTERPRISE / ON-PREMISE</SfBadge>
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-foreground">
              {{ pricingData.enterpriseTier.heading }}
            </h3>
            <p class="text-sm text-muted-foreground leading-relaxed font-normal">
              {{ pricingData.enterpriseTier.description }}
            </p>
          </div>
          <div class="shrink-0 w-full lg:w-auto">
            <SfButton
              variant="primary"
              size="lg"
              :to="pricingData.enterpriseTier.ctaUrl"
              class="w-full sm:w-auto"
            >
              {{ pricingData.enterpriseTier.ctaLabel }}
            </SfButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Plans Section -->
    <section id="pilot-details" class="py-16 md:py-20 bg-background border-b border-border">
      <div class="sf-container space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="green">DỊCH VỤ ĐỒNG HÀNH</SfBadge>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-foreground">
            {{ pricingData.successPlans.heading }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(plan, pIdx) in pricingData.successPlans.plans"
            :key="pIdx"
            class="bg-card p-6 rounded-2xl border border-border shadow-card space-y-3"
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
    <div id="faq">
      <SfFaqAccordion />
    </div>
  </div>
</template>
