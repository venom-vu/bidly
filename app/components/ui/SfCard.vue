<script setup lang="ts">
interface Props {
  title: string;
  borderColor?: string;
  description: string;
  linkText: string;
  linkUrl: string;
  badge?: string;
  imageUrl?: string;
  icon?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="sf-card group bg-card rounded-xl border border-border/70 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between overflow-hidden h-full"
  >
    <!-- Card Image Container (if imageUrl provided) -->
    <div v-if="imageUrl" class="relative aspect-[16/9] bg-muted overflow-hidden border-b border-border/50">
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
        <!-- Optional Category Badge / Icon -->
        <div v-if="badge" class="flex items-center gap-2">
          <span
            class="inline-flex px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-brand-soft text-primary select-none"
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

      <!-- Card Link with Salesforce Style Underline & Smooth Hover -->
      <div class="pt-2">
        <NuxtLink
          :to="linkUrl"
          class="inline-flex items-center gap-1.5 text-sm sm:text-[14.5px] font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer group/link"
        >
          <span class="underline underline-offset-4 decoration-1 hover:decoration-2">{{ linkText }}</span>
          <svg class="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
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

