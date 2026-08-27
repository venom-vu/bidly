<script setup lang="ts">
import { crmBladesData } from '~/data/crm-blades'
import SfBadge from '~/components/ui/SfBadge.vue'

const portfolio = crmBladesData.productPortfolio
const businessScale = crmBladesData.businessScale
const activeTabId = ref(portfolio.clouds?.[0]?.id || 'agentforce')

const activeCloud = computed(() => {
  return portfolio.clouds?.find(c => c.id === activeTabId.value) || portfolio.clouds?.[0] || {}
})
</script>

<template>
  <section class="py-16 md:py-24 sf-gradient-bg border-y border-border">
    <div class="sf-container space-y-16">
      <!-- Section 1: 5 Core Clouds Tabs -->
      <div v-if="portfolio.clouds" class="space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <SfBadge variant="green" size="md">
            HỆ SINH THÁI 5 CLOUD TOÀN DIỆN
          </SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            {{ portfolio.heading }}
          </h2>
        </div>

        <!-- Tabs Navigation -->
        <div class="flex items-center justify-start md:justify-center overflow-x-auto pb-4 gap-2 border-b border-border no-scrollbar">
          <button
            v-for="cloud in portfolio.clouds"
            :key="cloud.id"
            type="button"
            :class="[
              'px-5 py-3 font-bold text-sm sm:text-base rounded-t-xl transition-all whitespace-nowrap relative cursor-pointer',
              activeTabId === cloud.id
                ? 'text-brand-text bg-card border-t-2 border-primary shadow-xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
            ]"
            @click="activeTabId = cloud.id"
          >
            {{ cloud.title }}
          </button>
        </div>

        <!-- Tab Content View (Transition Fade) -->
        <div class="bg-card rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-border">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <!-- Content Left -->
            <div class="lg:col-span-6 space-y-6">
              <div v-if="activeCloud.eyebrow">
                <SfBadge variant="navy" size="sm">
                  {{ activeCloud.eyebrow }}
                </SfBadge>
              </div>

              <h3 class="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                {{ activeCloud.headline }}
              </h3>

              <p class="text-base text-muted-foreground leading-relaxed">
                {{ activeCloud.description }}
              </p>

              <!-- Feature Bullets -->
              <div class="space-y-3 pt-2">
                <div
                  v-for="(feat, fIdx) in activeCloud.features"
                  :key="fIdx"
                  class="flex items-center gap-3 text-sm font-semibold text-foreground"
                >
                  <span class="w-5 h-5 rounded-full bg-brand-soft text-brand-text flex items-center justify-center shrink-0">
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  {{ feat }}
                </div>
              </div>

              <div class="pt-4">
                <NuxtLink
                  :to="activeCloud.linkUrl"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold text-sm rounded-lg hover:bg-primary-hover transition-all shadow-sm"
                >
                  {{ activeCloud.linkText }}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </NuxtLink>
              </div>
            </div>

            <!-- Image Right -->
            <div class="lg:col-span-6">
              <div class="rounded-2xl overflow-hidden shadow-lg border border-border bg-background aspect-[16/10]">
                <img
                  :src="activeCloud.imageUrl"
                  :alt="activeCloud.headline"
                  class="w-full h-full object-cover"
                  loading="lazy"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
