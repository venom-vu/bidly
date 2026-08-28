<script setup lang="ts">
import { crmBladesData } from '~/data/crm-blades'
import SfBadge from '~/components/ui/SfBadge.vue'

const features = crmBladesData.featuresZPattern
</script>

<template>
  <section class="py-16 md:py-24 bg-card space-y-20 md:space-y-28">
    <div class="sf-container space-y-20 md:space-y-28">
      <div
        v-for="feature in features"
        :key="feature.id"
        class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
      >
        <!-- Text Column -->
        <div
          :class="[
            'space-y-6 text-left',
            feature.layout === 'image-left' ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'
          ]"
        >
          <div class="inline-block">
            <SfBadge variant="green" size="md">
              {{ feature.eyebrow }}
            </SfBadge>
          </div>

          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-[1.2]">
            {{ feature.headline }}
          </h2>

          <p class="text-base text-muted-foreground leading-relaxed font-normal">
            {{ feature.description }}
          </p>

          <div class="pt-2">
            <NuxtLink
              :to="feature.linkUrl"
              class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold text-sm rounded-lg hover:bg-primary-hover transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
            >
              <span>{{ feature.linkText }}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Image Mockup Column -->
        <div
          :class="[
            'relative',
            feature.layout === 'image-left' ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'
          ]"
        >
          <div class="relative rounded-2xl overflow-hidden shadow-card border border-border bg-background group aspect-[16/10]">
            <img
              :src="feature.imageUrl"
              :alt="feature.headline"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
