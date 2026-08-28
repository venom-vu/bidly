<script setup lang="ts">
import { crmBladesData } from "~/data/crm-blades";
import SfHeroMarquee from "~/components/blades/SfHeroMarquee.vue";
import SfResourceGrid from "~/components/blades/SfResourceGrid.vue";
import SfHeading from "~/components/blades/SfHeading.vue";
import SfFeatureZPattern from "~/components/blades/SfFeatureZPattern.vue";
import SfProductPortfolio from "~/components/blades/SfProductPortfolio.vue";
import SfBusinessScale from "~/components/blades/SfBusinessScale.vue";
import SfLogoGrid from "~/components/blades/SfLogoGrid.vue";
import SfArticleCarousels from "~/components/blades/SfArticleCarousels.vue";
import SfContactPillars from "~/components/blades/SfContactPillars.vue";

useSeoMeta({
  title:
    "Bidly : Preconstruction CRM cho Tổng thầu Xây dựng Công nghiệp | Vtechcom",
  description:
    "Bidly là Preconstruction CRM do Vtechcom phát triển: pipeline 9 giai đoạn, Go/No-Go scorecard, Tender Workspace và Capability Library cho tổng thầu EPC, MEP và kết cấu thép tại Việt Nam.",
});
</script>

<template>
  <div class="space-y-0">
    <!-- Blade 1: Hero Marquee (Asia #1 Agentic CRM for Construction) -->
    <SfHeroMarquee />

    <!-- Blade 2: 3-Up Resource Cards Top (3 Living Problems) -->
    <SfResourceGrid
      :heading="crmBladesData.resourceGridTop.heading"
      :cards="crmBladesData.resourceGridTop.cards"
    />

    <!-- Blade 3: Section Divider Heading 1 -->
    <SfHeading :text="crmBladesData.heading1.text" bg-color="light" />

    <!-- Blade 4, 5, 6: Z-Pattern Feature Highlights -->
    <SfFeatureZPattern />

    <!-- Blade 7: 6 Core MVP Product Cards (Top Accent) -->
    <SfProductPortfolio />

    <!-- Blade 8: Scale by Business Size (SMB vs Enterprise Asymmetric) -->
    <SfBusinessScale />

    <!-- Blade 9: Market Evidence & Stats Grid -->
    <SfLogoGrid />

    <!-- Blade 10: CRM Articles & Topics Carousels -->
    <SfArticleCarousels />

    <!-- Blade 11: Guides & Research Insights (3-Up Cards Bottom) -->
    <SfResourceGrid
      :heading="crmBladesData.resourceGridBottom.heading"
      :cards="crmBladesData.resourceGridBottom.cards"
      :cta-button="{ label: 'Xem tất cả tài nguyên', url: '/crm/what-is-crm' }"
    />

    <!-- Blade 12: Contact Us 3 Action Pillars -->
    <SfContactPillars />
  </div>
</template>
