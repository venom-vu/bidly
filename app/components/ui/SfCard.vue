<script setup lang="ts">
interface Props {
  title: string
  borderColor?: string
  description: string
  linkText: string
  linkUrl: string
}

withDefaults(defineProps<Props>(), {
  borderColor: '#90D0FE'
})
</script>

<template>
  <div class="sf-card group bg-white rounded-2xl border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_35px_rgba(3,45,96,0.12)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden h-full">
    <!-- Top Accent Bar (8px) -->
    <div
      class="h-2 w-full shrink-0"
      :style="{ backgroundColor: borderColor }"
    />

    <!-- Card Body -->
    <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
      <div class="space-y-3.5">
        <h3 class="text-xl sm:text-[22px] font-extrabold text-[#032D60] tracking-tight leading-snug">
          {{ title }}
        </h3>
        <p class="text-sm sm:text-[15px] text-[#2d3748] leading-relaxed font-normal">
          {{ description }}
        </p>
      </div>

      <!-- Card Link (Signature Salesforce Underlined Link) -->
      <div class="pt-2">
        <NuxtLink
          :to="linkUrl"
          class="inline-flex items-center text-sm sm:text-[15px] font-bold text-[#0176D3] underline underline-offset-4 decoration-2 hover:text-[#014486] hover:decoration-[#014486] transition-colors cursor-pointer"
        >
          {{ linkText }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sf-card {
  will-change: transform, box-shadow;
}
</style>
