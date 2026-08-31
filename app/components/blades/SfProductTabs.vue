<script setup lang="ts">
import { crmBladesData } from "~/data/crm-blades";

const productTabs = crmBladesData.productTabs;
const clouds = productTabs.clouds;

const currentIndex = ref(0);
const isHovered = ref(false);

const AUTOPLAY_DURATION = 5500; // 5.5s per slide
let autoplayTimer: ReturnType<typeof setInterval> | null = null;

const goToSlide = (index: number) => {
  currentIndex.value = (index + clouds.length) % clouds.length;
  resetAutoplay();
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % clouds.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + clouds.length) % clouds.length;
};

// Autoplay without ANY window scrolling
const startAutoplay = () => {
  stopAutoplay();
  autoplayTimer = setInterval(() => {
    if (!isHovered.value) {
      nextSlide();
    }
  }, AUTOPLAY_DURATION);
};

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
};

const resetAutoplay = () => {
  stopAutoplay();
  startAutoplay();
};

// Touch / Swipe handling
const touchStartX = ref(0);
const touchEndX = ref(0);
const minSwipeDistance = 45;

const onTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.changedTouches[0]?.clientX || 0;
  isHovered.value = true;
};

const onTouchMove = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0]?.clientX || 0;
};

const onTouchEnd = () => {
  isHovered.value = false;
  const deltaX = touchStartX.value - touchEndX.value;
  if (Math.abs(deltaX) > minSwipeDistance) {
    if (deltaX > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    resetAutoplay();
  }
  touchStartX.value = 0;
  touchEndX.value = 0;
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<template>
  <!--
    Salesforce Product Tabs Blade — Smooth Slider Track
    - Original clean Salesforce underline tabs
    - Hardware-accelerated smooth slide track
    - No page scroll jumps on slide change
  -->
  <section class="py-16 md:py-24 bg-white sf-section-border overflow-hidden">
    <div class="sf-container space-y-10 md:space-y-14">
      <!-- Section Heading -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <h2
          class="text-2xl sm:text-3xl md:text-[2.25rem] font-extrabold text-foreground tracking-tight leading-tight"
        >
          {{ productTabs.heading }}
        </h2>
        <p class="text-sm sm:text-base" style="color: #54698d">
          Mỗi vai trò sở hữu một không gian làm việc chuyên biệt, kết nối liền
          mạch từ tiếp nhận tín hiệu đến bàn giao thi công.
        </p>
      </div>

      <!-- Tab Navigation — Original Salesforce underline tab style -->
      <div
        class="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-0"
        style="border-bottom: 1px solid rgba(0, 0, 0, 0.08)"
      >
        <button
          v-for="(cloud, idx) in clouds"
          :key="cloud.id"
          type="button"
          :class="[
            'px-5 py-3.5 font-bold text-sm sm:text-[15px] transition-all whitespace-nowrap relative cursor-pointer select-none border-b-2 -mb-px',
            currentIndex === idx
              ? 'text-primary border-primary'
              : 'text-muted-foreground border-transparent hover:text-foreground',
          ]"
          @click="goToSlide(idx)"
        >
          {{ cloud.title }}
        </button>
      </div>

      <!-- Slider Container & Viewport -->
      <div
        class="bg-white rounded-2xl overflow-hidden relative"
        style="
          box-shadow:
            0 4px 24px rgba(3, 45, 96, 0.07),
            0 8px 40px rgba(3, 45, 96, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.06);
        "
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
      >
        <!-- Horizontal Slide Track -->
        <div
          class="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
          :style="{
            transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
          }"
        >
          <!-- Individual Slide Panel -->
          <div
            v-for="(cloud, idx) in clouds"
            :key="cloud.id"
            class="w-full min-w-full shrink-0 p-6 sm:p-10 md:p-12 box-border transition-opacity duration-500"
            :class="currentIndex === idx ? 'opacity-100' : 'opacity-40 pointer-events-none'"
          >
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <!-- Content Left (6 cols) -->
              <div class="lg:col-span-6 space-y-6">
                <div v-if="cloud.eyebrow">
                  <span class="sf-eyebrow">{{ cloud.eyebrow }}</span>
                </div>

                <h3
                  class="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight tracking-tight"
                >
                  {{ cloud.headline }}
                </h3>

                <p class="text-base leading-relaxed" style="color: #54698d">
                  {{ cloud.description }}
                </p>

                <!-- Feature Bullets — Salesforce checkmark list -->
                <div class="space-y-3 pt-1">
                  <div
                    v-for="(feat, fIdx) in cloud.features"
                    :key="fIdx"
                    class="flex items-center gap-3 text-sm font-semibold"
                    style="color: #181818"
                  >
                    <span
                      class="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style="background: #e8f4fd"
                    >
                      <svg
                        class="w-3.5 h-3.5"
                        style="color: #0176d3"
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

                <!-- CTA -->
                <div class="pt-4">
                  <NuxtLink
                    :to="cloud.linkUrl"
                    class="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-extrabold text-sm rounded-[4px] hover:bg-primary-hover transition-all active:scale-[0.98] cursor-pointer"
                    style="box-shadow: 0 2px 8px rgba(1, 118, 211, 0.25)"
                  >
                    <span>{{ cloud.linkText }}</span>
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

              <!-- Image Right (6 cols) -->
              <div class="lg:col-span-6">
                <div
                  class="rounded-xl overflow-hidden bg-muted aspect-[16/10]"
                  style="
                    box-shadow: 0 4px 20px rgba(3, 45, 96, 0.08);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                  "
                >
                  <img
                    :src="cloud.imageUrl"
                    :alt="cloud.headline"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


