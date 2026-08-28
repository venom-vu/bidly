<script setup lang="ts">
import { crmBladesData } from "~/data/crm-blades";
import SfBadge from "~/components/ui/SfBadge.vue";

const features = crmBladesData.featuresZPattern;
</script>

<template>
  <!--
    Salesforce oneUp / Z-Pattern Blade — theme_variant: "light_gradient"
    Xen kẽ gradient background, 2-col layout đảo chiều theo Z-pattern
    Image và text đổi trái-phải cho mỗi feature block
  -->
  <section class="py-0 sf-section-border">
    <div
      v-for="(feature, idx) in features"
      :key="feature.id"
      :class="[
        'py-16 md:py-24',
        idx % 2 === 0 ? 'bg-white' : 'sf-section-gradient',
      ]"
    >
      <div class="sf-container">
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          <!-- Text Column -->
          <div
            :class="[
              'space-y-7 text-left',
              feature.layout === 'image-left'
                ? 'lg:col-span-6 lg:order-2'
                : 'lg:col-span-6 lg:order-1',
            ]"
          >
            <!-- Eyebrow -->
            <div>
              <span
                class="text-xs font-bold uppercase tracking-wider"
                style="color: #0176d3"
              >
                {{ feature.eyebrow }}
              </span>
            </div>

            <!-- Heading — Salesforce uses large navy heading -->
            <h2
              class="text-2xl sm:text-3xl md:text-[2rem] font-extrabold text-foreground tracking-tight leading-[1.2]"
            >
              {{ feature.headline }}
            </h2>

            <p class="text-base leading-relaxed" style="color: #54698d">
              {{ feature.description }}
            </p>

            <!-- CTA Link — Salesforce "Learn more" style with arrow -->
            <div class="pt-1">
              <NuxtLink
                :to="feature.linkUrl"
                class="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-extrabold text-sm rounded-[4px] hover:bg-primary-hover transition-all active:scale-[0.98] cursor-pointer"
                style="box-shadow: 0 2px 8px rgba(1, 118, 211, 0.25)"
              >
                <span>{{ feature.linkText }}</span>
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Image Column -->
          <div
            :class="[
              'relative',
              feature.layout === 'image-left'
                ? 'lg:col-span-6 lg:order-1'
                : 'lg:col-span-6 lg:order-2',
            ]"
          >
            <div
              class="relative rounded-2xl overflow-hidden group aspect-[16/10]"
              style="
                box-shadow:
                  0 8px 32px rgba(3, 45, 96, 0.1),
                  0 2px 8px rgba(3, 45, 96, 0.06);
              "
            >
              <img
                :src="feature.imageUrl"
                :alt="feature.headline"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
