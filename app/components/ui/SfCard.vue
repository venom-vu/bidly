<script setup lang="ts">
interface Props {
  title: string;
  borderColor?: string;
  description: string;
  linkText: string;
  linkUrl: string;
  badge?: string;
}

withDefaults(defineProps<Props>(), {
  borderColor: "var(--brand, #74CC55)",
});
</script>

<template>
  <div
    class="sf-card group bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between overflow-hidden h-full"
  >
    <!-- Top Accent Bar: 8px height with module/stage distinctive color -->
    <div
      class="h-2 w-full shrink-0"
      :style="{ backgroundColor: borderColor }"
    />

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
          class="text-lg sm:text-xl font-extrabold text-foreground tracking-tight leading-snug group-hover:text-brand-text transition-colors"
        >
          {{ title }}
        </h3>
        <p
          class="text-sm sm:text-[14.5px] text-muted-foreground leading-relaxed font-normal"
        >
          {{ description }}
        </p>
      </div>

      <!-- Card Link (Signature Salesforce Underlined Link with Animated Arrow) -->
      <div class="pt-2 border-t border-border">
        <NuxtLink
          :to="linkUrl"
          class="group/link inline-flex items-center gap-1.5 text-sm sm:text-[14.5px] font-bold text-brand-text underline underline-offset-4 decoration-2 hover:text-primary hover:decoration-primary transition-all cursor-pointer"
        >
          <span>{{ linkText }}</span>
          <svg
            class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform no-underline"
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
  </div>
</template>

<style scoped>
.sf-card {
  will-change: transform, box-shadow;
}
</style>
