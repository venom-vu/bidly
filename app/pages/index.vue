<script setup lang="ts">
import { crmBladesData } from '~/data/crm-blades'
import SfHeroMarquee from '~/components/blades/SfHeroMarquee.vue'
import SfResourceGrid from '~/components/blades/SfResourceGrid.vue'
import SfHeading from '~/components/blades/SfHeading.vue'
import SfFeatureZPattern from '~/components/blades/SfFeatureZPattern.vue'
import SfProductPortfolio from '~/components/blades/SfProductPortfolio.vue'
import SfBusinessScale from '~/components/blades/SfBusinessScale.vue'
import SfLogoGrid from '~/components/blades/SfLogoGrid.vue'
import SfArticleCarousels from '~/components/blades/SfArticleCarousels.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'
import SfFaqAccordion from '~/components/blades/SfFaqAccordion.vue'

useSeoMeta({
  title: 'Phần mềm CRM Doanh Nghiệp Tích Hợp AI Số 1 Châu Á | Bidly',
  description: 'Hợp nhất bán hàng, dịch vụ, marketing và dữ liệu với phần mềm CRM Bidly. Xây dựng mối quan hệ khách hàng bền chặt và bứt phá doanh số.'
})
</script>

<template>
  <div class="space-y-0">
    <!-- Blade 1: Hero Marquee (Asia #1 Agentic CRM) -->
    <SfHeroMarquee />

    <!-- Blade 2: 3-Up Resource Cards Top -->
    <SfResourceGrid
      :heading="crmBladesData.resourceGridTop.heading"
      :cards="crmBladesData.resourceGridTop.cards"
    />

    <!-- Blade 3: Section Divider Heading 1 -->
    <SfHeading
      :text="crmBladesData.heading1.text"
      bg-color="light"
    />

    <!-- Blade 4, 5, 6: Z-Pattern Feature Highlights (360 View, Agentic AI, Industries) -->
    <SfFeatureZPattern />

    <!-- Blade 7 & 8: 5 Core Cloud Product Cards (Image 1: 3 top, 2 bottom centered) -->
    <SfProductPortfolio />

    <!-- Blade 9 & 10: Scale by Business Size (Image 2: SMB vs Enterprise Asymmetric) -->
    <SfBusinessScale />

    <!-- Blade 11: Customer Success Logos & Stories (Image 3: Good360, NEXO, Precina, reMarkable, zota) -->
    <SfLogoGrid />

    <!-- Blade 12, 13, 14: CRM Articles & Topics Carousels (Image 3 & 4: Business Types & Topics with Slider) -->
    <SfArticleCarousels />

    <!-- Blade 15: Guides & Research Insights (3-Up Cards Bottom) -->
    <SfResourceGrid
      :heading="crmBladesData.resourceGridBottom.heading"
      :cards="crmBladesData.resourceGridBottom.cards"
      :cta-button="{ label: 'Xem tất cả tài nguyên', url: '/crm/what-is-crm' }"
    />

    <!-- Blade 16: Contact Us 3 Action Pillars -->
    <SfContactPillars />

    <!-- Blade 17: FAQ Accordion -->
    <div id="faq">
      <SfFaqAccordion />
    </div>
  </div>
</template>
