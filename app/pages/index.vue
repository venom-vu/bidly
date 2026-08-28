<script setup lang="ts">
import { crmBladesData } from "~/data/crm-blades";
import SfHeroMarquee from "~/components/blades/SfHeroMarquee.vue";
import SfResourceGrid from "~/components/blades/SfResourceGrid.vue";
import SfProductTabs from "~/components/blades/SfProductTabs.vue";
import SfFeatureZPattern from "~/components/blades/SfFeatureZPattern.vue";
import SfBusinessScale from "~/components/blades/SfBusinessScale.vue";
import SfLogoGrid from "~/components/blades/SfLogoGrid.vue";
import SfArticleCarousels from "~/components/blades/SfArticleCarousels.vue";
import SfContactPillars from "~/components/blades/SfContactPillars.vue";

useSeoMeta({
  title:
    "Bidly — Preconstruction CRM cho Tổng thầu Xây dựng Công nghiệp | Vtechcom",
  description:
    "Bidly là Preconstruction CRM do Vtechcom phát triển: pipeline 9 giai đoạn, Go/No-Go scorecard, Tender Workspace và Capability Library cho tổng thầu EPC, MEP và kết cấu thép tại Việt Nam.",
});
</script>

<template>
  <div class="space-y-0">
    <!-- Blade 1: Clean 2-Column Hero -->
    <SfHeroMarquee />

    <!-- Blade 2: 3-Up Resource Cards (3 Thách thức lớn) -->
    <SfResourceGrid
      :heading="crmBladesData.resourceGridTop.heading"
      :cards="crmBladesData.resourceGridTop.cards"
    />

    <!-- Blade 3: Salesforce Style 4 Workspaces Product Tabs -->
    <SfProductTabs />

    <!-- Blade 4: Z-Pattern 3 Feature Highlights -->
    <SfFeatureZPattern />

    <!-- Blade 5: Scale by Industry Blueprint (EPC, MEP, Thép) -->
    <SfBusinessScale />

    <!-- Blade 6: Market Evidence & Stats Grid -->
    <SfLogoGrid />

    <!-- Blade 7: CRM Strategy & Security Articles Carousel -->
    <SfArticleCarousels />

    <!-- Blade 8: Guides & Research Insights (3-Up Cards Bottom) -->
    <SfResourceGrid
      :heading="crmBladesData.resourceGridBottom.heading"
      :cards="crmBladesData.resourceGridBottom.cards"
      :cta-button="{ label: 'Xem tất cả tài nguyên', url: '/crm/what-is-crm' }"
    />

    <!-- Blade 9: Contact Us 3 Action Pillars -->
    <SfContactPillars />
  </div>
</template>
