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
  <!--
    Salesforce Contact / CTA Pillars Blade — theme_variant: "light_gradient"
    3-column card grid, center-highlighted primary card (scale up slightly)
    Salesforce "Get in touch" / "Start for free" / "Talk to expert" pattern
  -->
  <section class="py-16 md:py-24 sf-section-gradient">
    <div class="sf-container text-center space-y-12">
      <!-- Section Heading -->
      <div class="max-w-3xl mx-auto space-y-3">
        <h2
          class="text-2xl sm:text-3xl md:text-[2.25rem] font-extrabold text-foreground tracking-tight leading-tight"
        >
          {{ contactPillars.heading }}
        </h2>
        <p
          v-if="contactPillars.subheading"
          class="text-sm sm:text-base"
          style="color: #54698d"
        >
          {{ contactPillars.subheading }}
        </p>
      </div>

      <!-- 3 Pillars Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto"
      >
        <div
          v-for="pillar in contactPillars.pillars"
          :key="pillar.id"
          class="group bg-white p-8 rounded-2xl flex flex-col justify-between space-y-6 text-left transition-all duration-300 hover:-translate-y-1"
          :class="pillar.isPrimary ? 'scale-[1.03] z-10' : ''"
          :style="
            pillar.isPrimary
              ? 'box-shadow: 0 8px 32px rgba(1,118,211,0.18), 0 2px 8px rgba(1,118,211,0.10); border: 1.5px solid rgba(1,118,211,0.30);'
              : 'box-shadow: 0 2px 8px rgba(3,45,96,0.06), 0 4px 20px rgba(3,45,96,0.04); border: 1px solid rgba(0,0,0,0.06);'
          "
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

            <p class="text-sm leading-relaxed" style="color: #54698d">
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
