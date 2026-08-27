<script setup lang="ts">
import { crmBladesData } from '~/data/crm-blades'
import SfButton from '~/components/ui/SfButton.vue'

const contactUs = crmBladesData.contactUs
</script>

<template>
  <section class="py-16 md:py-24 sf-gradient-bg border-t border-border">
    <div class="sf-container text-center space-y-12">
      <div class="max-w-3xl mx-auto space-y-3">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
          {{ contactUs.heading }}
        </h2>
      </div>

      <!-- 3 Pillars Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="pillar in contactUs.pillars"
          :key="pillar.id"
          class="sf-card-hover bg-card p-8 rounded-3xl border border-border shadow-md flex flex-col justify-between space-y-6 text-left"
        >
          <div class="space-y-4">
            <!-- Icon -->
            <div class="w-12 h-12 rounded-2xl bg-brand-soft text-brand-text flex items-center justify-center shadow-inner">
              <svg v-if="pillar.icon === 'trial'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <svg v-else-if="pillar.icon === 'expert'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h3 class="text-xl font-bold text-foreground">
              {{ pillar.title }}
            </h3>

            <p class="text-sm text-muted-foreground leading-relaxed">
              {{ pillar.description }}
            </p>
          </div>

          <div class="pt-4">
            <SfButton
              variant="primary"
              size="md"
              :to="pillar.ctaUrl"
              block
            >
              {{ pillar.ctaText }}
            </SfButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
