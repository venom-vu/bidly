<script setup lang="ts">
import { crmBladesData } from '~/data/crm-blades'
import SfHeroMarquee from '~/components/blades/SfHeroMarquee.vue'
import SfResourceGrid from '~/components/blades/SfResourceGrid.vue'
import SfHeading from '~/components/blades/SfHeading.vue'
import SfFeatureZPattern from '~/components/blades/SfFeatureZPattern.vue'
import SfProductTabs from '~/components/blades/SfProductTabs.vue'
import SfLogoGrid from '~/components/blades/SfLogoGrid.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'
import SfFaqAccordion from '~/components/blades/SfFaqAccordion.vue'

useSeoMeta({
  title: 'bidly - Phần mềm CRM Doanh Nghiệp Tích Hợp AI Số 1 Châu Á',
  description: 'Hợp nhất bán hàng, dịch vụ, marketing và dữ liệu với phần mềm CRM bidly. Xây dựng mối quan hệ khách hàng bền chặt và bứt phá doanh số.'
})
</script>

<template>
  <div class="space-y-0">
    <!-- Blade 1: Hero Marquee -->
    <SfHeroMarquee />

    <!-- Blade 2: 3-Up Resource Cards Top -->
    <SfResourceGrid
      heading="Giải pháp CRM vượt trên mọi mục tiêu kinh doanh và kỳ vọng của khách hàng"
      :cards="crmBladesData.resourceGridTop.cards"
    />

    <!-- Blade 3: Section Divider Heading -->
    <SfHeading
      :text="crmBladesData.heading1.text"
      bg-color="light"
    />

    <!-- Blade 4, 5, 6: Z-Pattern Feature Highlights -->
    <SfFeatureZPattern />

    <!-- Blade 7, 8, 9, 10: 5 Core Clouds & Scale by Business Size -->
    <SfProductTabs />

    <!-- Blade 11: Customer Success Logos & Stats -->
    <SfLogoGrid />

    <!-- Blade 12: Section Divider Heading -->
    <SfHeading
      text="Đọc các bài viết hướng dẫn CRM giải quyết đúng nhu cầu thực tế của doanh nghiệp."
      bg-color="light"
    />

    <!-- Blade 15: Guides & Research Insights (3-Up Cards Bottom) -->
    <SfResourceGrid
      :heading="crmBladesData.resourceGridBottom.heading"
      :cards="crmBladesData.resourceGridBottom.cards"
    />

    <!-- Blade 16: Contact Us 3 Action Pillars -->
    <SfContactPillars />

    <!-- Blade 17: FAQ Accordion -->
    <div id="faq">
      <SfFaqAccordion />
    </div>
  </div>
</template>
