<script setup lang="ts">
import { crmBladesData } from "~/data/crm-blades";
import SfBadge from "~/components/ui/SfBadge.vue";
import SfButton from "~/components/ui/SfButton.vue";
import { useDemoModal } from "~/composables/useDemoModal";

const contactPillars = computed(() => crmBladesData.contactPillars);
const { openModal } = useDemoModal();

const handleCtaClick = (pillar: { ctaUrl: string; title: string }) => {
  if (pillar.ctaUrl === "#demo") {
    openModal(`Đăng ký: ${pillar.title}`);
  }
};
</script>

<template>
  <section class="py-16 md:py-24 sf-gradient-bg border-t border-border">
    <div class="sf-container text-center space-y-12">
      <div class="max-w-3xl mx-auto space-y-3">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
        >
          {{ contactPillars.heading }}
        </h2>
        <p
          v-if="contactPillars.subheading"
          class="text-sm sm:text-base text-muted-foreground"
        >
          {{ contactPillars.subheading }}
        </p>
      </div>

      <!-- 3 Pillars Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto"
      >
        <div
          v-for="pillar in contactPillars.pillars"
          :key="pillar.id"
          class="sf-card group bg-card p-8 rounded-xl border border-border/70 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between space-y-6 text-left"
          :class="pillar.isPrimary ? 'border-primary/50 shadow-modal scale-[1.02] z-10' : ''"
        >
          <div class="space-y-4">
            <!-- Badge -->
            <div v-if="pillar.badge" class="flex items-center justify-between">
              <SfBadge :variant="pillar.isPrimary ? 'green' : 'gray'" size="sm">
                {{ pillar.badge }}
              </SfBadge>
            </div>

            <h3 class="text-xl font-extrabold text-foreground tracking-tight">
              {{ pillar.title }}
            </h3>

            <p class="text-sm text-muted-foreground leading-relaxed font-normal">
              {{ pillar.description }}
            </p>
          </div>

          <div class="pt-2">
            <SfButton
              v-if="pillar.ctaUrl === '#demo'"
              :variant="pillar.isPrimary ? 'primary' : 'secondary'"
              size="md"
              block
              @click="handleCtaClick(pillar)"
            >
              {{ pillar.ctaLabel }}
            </SfButton>
            <SfButton
              v-else
              :variant="pillar.isPrimary ? 'primary' : 'secondary'"
              size="md"
              :to="pillar.ctaUrl"
              block
            >
              {{ pillar.ctaLabel }}
            </SfButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
