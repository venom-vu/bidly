<script setup lang="ts">
import { crmBladesData } from "~/data/crm-blades";

const productTabs = crmBladesData.productTabs;
const activeTabId = ref(productTabs.clouds[0]?.id || "bd-cloud");

const activeCloud = computed(() => {
  return (
    productTabs.clouds.find((c) => c.id === activeTabId.value) ||
    productTabs.clouds[0]
  );
});
</script>

<template>
  <section class="py-16 md:py-24 bg-card border-b border-border/80">
    <div class="sf-container space-y-12 md:space-y-16">
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
        >
          {{ productTabs.heading }}
        </h2>
        <p class="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Mỗi vai trò sở hữu một không gian làm việc chuyên biệt, kết nối liền mạch từ tiếp nhận tín hiệu đến bàn giao thi công.
        </p>
      </div>

      <!-- Tab Buttons Navigation (Salesforce Pill / Underline Tabs) -->
      <div
        class="flex items-center justify-start md:justify-center overflow-x-auto pb-2 gap-2 border-b border-border/80 no-scrollbar"
      >
        <button
          v-for="cloud in productTabs.clouds"
          :key="cloud.id"
          type="button"
          :class="[
            'px-5 py-3 font-bold text-sm sm:text-base rounded-t-lg transition-all whitespace-nowrap relative cursor-pointer select-none border-b-2',
            activeTabId === cloud.id
              ? 'text-primary border-primary bg-brand-soft/60'
              : 'text-muted-foreground border-transparent hover:text-foreground hover:bg-secondary/40',
          ]"
          @click="activeTabId = cloud.id"
        >
          {{ cloud.title }}
        </button>
      </div>

      <!-- Active Tab Content Area -->
      <div class="sf-card bg-card rounded-xl p-6 sm:p-10 md:p-12 border border-border/70 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <!-- Content Left -->
          <div class="lg:col-span-6 space-y-6">
            <div v-if="activeCloud.eyebrow">
              <span
                class="inline-flex px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-full bg-brand-soft text-primary select-none"
              >
                {{ activeCloud.eyebrow }}
              </span>
            </div>

            <h3
              class="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight tracking-tight"
            >
              {{ activeCloud.headline }}
            </h3>

            <p
              class="text-base text-muted-foreground leading-relaxed font-normal"
            >
              {{ activeCloud.description }}
            </p>

            <!-- Feature Bullets -->
            <div class="space-y-3 pt-1">
              <div
                v-for="(feat, fIdx) in activeCloud.features"
                :key="fIdx"
                class="flex items-center gap-3 text-sm font-semibold text-foreground"
              >
                <span
                  class="w-5 h-5 rounded-full bg-brand-soft text-primary flex items-center justify-center shrink-0"
                >
                  <svg
                    class="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>{{ feat }}</span>
              </div>
            </div>

            <div class="pt-4">
              <NuxtLink
                :to="activeCloud.linkUrl"
                class="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-extrabold text-sm rounded-[4px] hover:bg-primary-hover transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
              >
                <span>{{ activeCloud.linkText }}</span>
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

          <!-- Image Right -->
          <div class="lg:col-span-6">
            <div
              class="rounded-xl overflow-hidden shadow-card border border-border/70 bg-card aspect-[16/10]"
            >
              <img
                :src="activeCloud.imageUrl"
                :alt="activeCloud.headline"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
