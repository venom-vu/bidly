<script setup lang="ts">
import { crmBladesData } from '~/data/crm-blades'
import SfCard from '~/components/ui/SfCard.vue'

const data = crmBladesData.articleCarousels

const row1Container = ref<HTMLElement | null>(null)
const row2Container = ref<HTMLElement | null>(null)

const row1Progress = ref(0)
const row2Progress = ref(0)

const updateProgress = (container: HTMLElement | null, targetRef: Ref<number>) => {
  if (!container) return
  const maxScroll = container.scrollWidth - container.clientWidth
  if (maxScroll <= 0) {
    targetRef.value = 100
  } else {
    targetRef.value = Math.min(100, Math.max(0, (container.scrollLeft / maxScroll) * 100))
  }
}

const onRow1Scroll = () => {
  updateProgress(row1Container.value, row1Progress)
}

const onRow2Scroll = () => {
  updateProgress(row2Container.value, row2Progress)
}

const scrollNext = (container: HTMLElement | null) => {
  if (!container) return
  container.scrollBy({ left: 340, behavior: 'smooth' })
}

const scrollPrev = (container: HTMLElement | null) => {
  if (!container) return
  container.scrollBy({ left: -340, behavior: 'smooth' })
}

onMounted(() => {
  updateProgress(row1Container.value, row1Progress)
  updateProgress(row2Container.value, row2Progress)
})
</script>

<template>
  <section class="py-16 md:py-24 bg-white border-b border-gray-100 overflow-hidden">
    <div class="sf-container space-y-16 md:space-y-20">
      <!-- Main Centered Heading -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#032D60] tracking-tight leading-tight">
          {{ data.mainHeading }}
        </h2>
      </div>

      <!-- Row 1: Explore CRM for Business Types -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left Title -->
        <div class="lg:col-span-3 space-y-4 pt-2">
          <h3 class="text-2xl sm:text-3xl font-extrabold text-[#032D60] tracking-tight leading-snug">
            {{ data.row1.leftTitle }}
          </h3>
        </div>

        <!-- Right Carousel Container -->
        <div class="lg:col-span-9 relative">
          <!-- Scrollable Cards Row -->
          <div
            ref="row1Container"
            class="flex items-stretch gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
            @scroll="onRow1Scroll"
          >
            <div
              v-for="card in data.row1.cards"
              :key="card.id"
              class="w-[280px] sm:w-[320px] shrink-0 snap-start flex"
            >
              <SfCard
                :title="card.title"
                :border-color="card.borderColor"
                :description="card.description"
                :link-text="card.linkText"
                :link-url="card.linkUrl"
                class="w-full"
              />
            </div>
          </div>

          <!-- Navigation Arrow Next Button (Right) -->
          <button
            type="button"
            class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-11 h-11 rounded-full bg-white shadow-xl border border-gray-200 text-[#032D60] hover:text-[#0176D3] hover:scale-110 items-center justify-center transition-all z-20 cursor-pointer"
            aria-label="Xem tiếp"
            @click="scrollNext(row1Container)"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Scroll Progress Bar Indicator -->
          <div class="mt-4 w-full max-w-md bg-gray-200 h-1 rounded-full overflow-hidden">
            <div
              class="bg-gray-400 h-full rounded-full transition-all duration-150"
              :style="{ width: `${Math.max(25, row1Progress)}%` }"
            />
          </div>
        </div>
      </div>

      <!-- Row 2: Learn more about key CRM topics -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
        <!-- Left Title -->
        <div class="lg:col-span-3 space-y-4 pt-2">
          <h3 class="text-2xl sm:text-3xl font-extrabold text-[#032D60] tracking-tight leading-snug">
            {{ data.row2.leftTitle }}
          </h3>
        </div>

        <!-- Right Carousel Container -->
        <div class="lg:col-span-9 relative">
          <!-- Scrollable Cards Row -->
          <div
            ref="row2Container"
            class="flex items-stretch gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
            @scroll="onRow2Scroll"
          >
            <div
              v-for="card in data.row2.cards"
              :key="card.id"
              class="w-[280px] sm:w-[320px] shrink-0 snap-start flex"
            >
              <SfCard
                :title="card.title"
                :border-color="card.borderColor"
                :description="card.description"
                :link-text="card.linkText"
                :link-url="card.linkUrl"
                class="w-full"
              />
            </div>
          </div>

          <!-- Navigation Arrow Next Button (Right) -->
          <button
            type="button"
            class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-11 h-11 rounded-full bg-white shadow-xl border border-gray-200 text-[#032D60] hover:text-[#0176D3] hover:scale-110 items-center justify-center transition-all z-20 cursor-pointer"
            aria-label="Xem tiếp"
            @click="scrollNext(row2Container)"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Scroll Progress Bar Indicator -->
          <div class="mt-4 w-full max-w-md bg-gray-200 h-1 rounded-full overflow-hidden">
            <div
              class="bg-gray-400 h-full rounded-full transition-all duration-150"
              :style="{ width: `${Math.max(25, row2Progress)}%` }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
