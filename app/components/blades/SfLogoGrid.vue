<script setup lang="ts">
import { crmBladesData } from '~/data/crm-blades'

const customerLogos = crmBladesData.customerLogos
</script>

<template>
  <section class="py-16 md:py-24 bg-card border-y border-border">
    <div class="sf-container text-center space-y-10 md:space-y-12">
      <!-- Section Top Headline -->
      <div class="max-w-3xl mx-auto space-y-6">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
          {{ customerLogos.heading }}
        </h2>

        <!-- Action Button below heading -->
        <div>
          <NuxtLink
            :to="customerLogos.cta.url"
            class="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-bold text-sm sm:text-base rounded-xl hover:bg-primary-hover transition-all shadow-md active:scale-[0.98]"
          >
            {{ customerLogos.cta.label }}
          </NuxtLink>
        </div>
      </div>

      <!-- Logos Card Row (Good360, NEXO, Precina, reMarkable, zota) -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto items-center">
        <!-- Good360 -->
        <div class="group bg-card p-6 rounded-2xl border border-border shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24 hover:-translate-y-1">
          <div class="flex items-center gap-2">
            <svg class="w-7 h-7 text-[#70B62C] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <div class="text-left">
              <span class="text-lg font-black text-[#70B62C] tracking-tight">Good<span class="text-[#3A7528]">360</span></span>
              <span class="block text-[8px] font-semibold text-muted-foreground -mt-1 tracking-widest uppercase">Goods For The Greater Good</span>
            </div>
          </div>
        </div>

        <!-- NEXO -->
        <div class="group bg-card p-6 rounded-2xl border border-border shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24 hover:-translate-y-1">
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6 text-[#1A1A1A] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h4.5l7.5 12V4H20v16h-4.5L8 8v12H4V4z" />
            </svg>
            <span class="text-xl font-black text-[#1A1A1A] tracking-wider uppercase">NEXO</span>
          </div>
        </div>

        <!-- Precina -->
        <div class="group bg-card p-6 rounded-2xl border border-border shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24 hover:-translate-y-1">
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6 text-[#0085CA] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7a5 5 0 1 0 5 5" />
            </svg>
            <span class="text-xl font-bold text-[#0085CA] tracking-tight font-sans">Precina</span>
          </div>
        </div>

        <!-- reMarkable -->
        <div class="group bg-card p-6 rounded-2xl border border-border shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24 hover:-translate-y-1">
          <span class="text-lg font-bold text-[#111111] tracking-tight font-serif italic">reMarkable</span>
        </div>

        <!-- zota -->
        <div class="group bg-card p-6 rounded-2xl border border-border shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24 hover:-translate-y-1 col-span-2 sm:col-span-1">
          <span class="text-2xl font-black text-[#0052CC] tracking-tighter">zota</span>
        </div>
      </div>
    </div>
  </section>
</template>
