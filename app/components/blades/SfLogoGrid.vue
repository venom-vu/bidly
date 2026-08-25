<script setup lang="ts">
import { crmBladesData } from '~/data/crm-blades'

const customerLogos = crmBladesData.customerLogos
</script>

<template>
  <section class="py-16 md:py-20 bg-white">
    <div class="sf-container text-center space-y-12">
      <div class="max-w-3xl mx-auto space-y-3">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-[#032D60] tracking-tight">
          {{ customerLogos.heading }}
        </h2>
      </div>

      <!-- Logos & Metric Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div
          v-for="(logo, lIdx) in customerLogos.logos"
          :key="lIdx"
          class="sf-card-hover p-6 rounded-2xl border border-gray-100 bg-[#F4F6F9] flex flex-col justify-between space-y-4 text-left"
        >
          <div class="text-xl font-black text-[#032D60] tracking-tight font-serif">
            {{ logo.name }}
          </div>
          <div class="text-xs font-bold text-[#0176D3] bg-[#EBF5FF] px-2.5 py-1 rounded-md inline-block self-start">
            {{ logo.stat }}
          </div>
          <p class="text-xs text-gray-600 italic leading-relaxed">
            "{{ logo.quote }}"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
