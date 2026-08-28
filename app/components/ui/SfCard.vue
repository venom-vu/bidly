<script setup lang="ts">
interface Props {
  title: string;
  borderColor?: string;
  description: string;
  linkText: string;
  linkUrl: string;
  badge?: string;
  imageUrl?: string;
}

withDefaults(defineProps<Props>(), {
  borderColor: "var(--primary, #0176D3)",
});
</script>

<template>
  <div
    class="sf-card group bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between overflow-hidden h-full"
  >
    <!-- Top Accent Bar: 8px height with single solid color (only shown when card has NO image) -->
    <div
      v-if="!imageUrl"
      class="h-2 w-full shrink-0"
      :style="{ backgroundColor: borderColor }"
    />

    <!-- Card Image Container (if imageUrl provided) -->
    <div v-if="imageUrl" class="relative aspect-[16/9] bg-muted overflow-hidden">
      <img
        :src="imageUrl"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <!-- Card Body -->
    <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
      <div class="space-y-3">
        <!-- Optional Category Badge -->
        <div v-if="badge">
          <span
            class="inline-flex px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-full bg-brand-soft text-brand-text select-none"
          >
            {{ badge }}
          </span>
        </div>

        <h3
          class="text-lg sm:text-xl font-extrabold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors"
        >
          {{ title }}
        </h3>
        <p
          class="text-sm sm:text-[14.5px] text-muted-foreground leading-relaxed font-normal"
        >
          {{ description }}
        </p>
      </div>

      <!-- Card Link (Clean Salesforce Underlined Link with delicate 1px underline) -->
      <div class="pt-1">
        <NuxtLink
          :to="linkUrl"
          class="inline-flex items-center text-sm sm:text-[14.5px] font-bold text-primary underline underline-offset-4 decoration-1 hover:text-primary-hover hover:decoration-2 transition-all cursor-pointer"
        >
          <span>{{ linkText }}</span>
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

