<script setup lang="ts">
import { crmBladesData } from '~/data/crm-blades'
import SfBadge from '~/components/ui/SfBadge.vue'

const portfolio = crmBladesData.productPortfolio
const businessScale = crmBladesData.businessScale
const activeTabId = ref(portfolio.clouds[0]?.id || 'agentforce')

const activeCloud = computed(() => {
  return portfolio.clouds.find(c => c.id === activeTabId.value) || portfolio.clouds[0]
})
</script>

<template>
  <section class="py-16 md:py-24 sf-gradient-bg border-y border-gray-100">
    <div class="sf-container space-y-16">
      <!-- Section 1: 5 Core Clouds Tabs -->
      <div class="space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <SfBadge variant="blue" size="md">
            HỆ SINH THÁI 5 CLOUD TOÀN DIỆN
          </SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#032D60] tracking-tight">
            {{ portfolio.heading }}
          </h2>
        </div>

        <!-- Tabs Navigation -->
        <div class="flex items-center justify-start md:justify-center overflow-x-auto pb-4 gap-2 border-b border-gray-200 no-scrollbar">
          <button
            v-for="cloud in portfolio.clouds"
            :key="cloud.id"
            type="button"
            :class="[
              'px-5 py-3 font-bold text-sm sm:text-base rounded-t-xl transition-all whitespace-nowrap relative cursor-pointer',
              activeTabId === cloud.id
                ? 'text-[#0176D3] bg-white border-t-2 border-[#0176D3] shadow-sm'
                : 'text-gray-600 hover:text-[#032D60] hover:bg-gray-100/50'
            ]"
            @click="activeTabId = cloud.id"
          >
            {{ cloud.title }}
          </button>
        </div>

        <!-- Tab Content View (Transition Fade) -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-gray-100">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <!-- Content Left -->
            <div class="lg:col-span-6 space-y-6">
              <div v-if="activeCloud.eyebrow">
                <SfBadge variant="navy" size="sm">
                  {{ activeCloud.eyebrow }}
                </SfBadge>
              </div>

              <h3 class="text-2xl sm:text-3xl font-bold text-[#032D60] leading-tight">
                {{ activeCloud.headline }}
              </h3>

              <p class="text-base text-gray-600 leading-relaxed">
                {{ activeCloud.description }}
              </p>

              <!-- Feature Bullets -->
              <div class="space-y-3 pt-2">
                <div
                  v-for="(feat, fIdx) in activeCloud.features"
                  :key="fIdx"
                  class="flex items-center gap-3 text-sm font-semibold text-[#032D60]"
                >
                  <span class="w-5 h-5 rounded-full bg-[#E6F4EA] text-[#04844B] flex items-center justify-center shrink-0">
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
                  class="inline-flex items-center gap-2 px-6 py-3 bg-[#0176D3] text-white font-bold text-sm rounded-lg hover:bg-[#014486] transition-all shadow-sm"
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
              <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-[#F4F6F9] aspect-[16/10]">
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

      <!-- Section 2: Scale by Business Size (SMB vs Enterprise) -->
      <div class="pt-12 border-t border-gray-200">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#032D60] tracking-tight">
            {{ businessScale.heading }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, bIdx) in businessScale.items"
            :key="bIdx"
            class="sf-card-hover bg-white p-8 rounded-3xl border border-gray-100 shadow-md flex flex-col justify-between space-y-6"
          >
            <div class="space-y-4">
              <SfBadge :variant="bIdx === 0 ? 'blue' : 'navy'" size="sm">
                {{ item.badge }}
              </SfBadge>
              <h3 class="text-xl sm:text-2xl font-bold text-[#032D60]">
                {{ item.title }}
              </h3>
              <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                {{ item.description }}
              </p>
            </div>

            <div class="pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
              <div class="text-xs font-bold text-[#04844B] bg-[#E6F4EA] px-3 py-1.5 rounded-lg">
                {{ item.price }}
              </div>
              <NuxtLink
                :to="item.linkUrl"
                class="inline-flex items-center gap-1.5 text-sm font-bold text-[#0176D3] hover:text-[#014486] transition-colors"
              >
                {{ item.linkText }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
