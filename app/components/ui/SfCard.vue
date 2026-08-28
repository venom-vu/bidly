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
  <!--
    Salesforce Resource Card — sf/resource card component
    Shadow-only card, NO hard border (or very subtle rgba border)
    Hover: lift + deeper shadow + subtle blue border
    Matches salesforce.com/ap/crm/ card pattern exactly
  -->
  <div
    class="sf-resource-card group bg-white rounded-xl flex flex-col justify-between overflow-hidden h-full transition-all duration-300 hover:-translate-y-1"
  >
    <!-- Card Image (if provided) — 16:9 -->
    <div
      v-if="imageUrl"
      class="relative aspect-[16/9] bg-muted overflow-hidden"
    >
      <img
        :src="imageUrl"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        loading="lazy"
      />
    </div>

    <!-- Card Body -->
    <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
      <div class="space-y-3">
        <!-- Badge pill — Salesforce eyebrow badge -->
        <div v-if="badge" class="flex items-center gap-2">
          <span
            class="inline-flex px-2.5 py-0.5 text-[11px] font-bold rounded-full select-none"
            style="background: #e8f4fd; color: #0176d3;"
          >
            {{ badge }}
          </span>
        </div>

        <h3
          class="text-[1.0625rem] sm:text-[1.125rem] font-extrabold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors"
        >
          {{ title }}
        </h3>
        <p
          class="text-sm sm:text-[14.5px] leading-relaxed"
          style="color: #54698d;"
        >
          {{ description }}
        </p>
      </div>

      <!-- Card Link — Salesforce underline link + arrow -->
      <div class="pt-1">
        <NuxtLink
          :to="linkUrl"
          class="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover transition-colors group/link"
        >
          <span class="underline underline-offset-3 decoration-1">{{ linkText }}</span>
          <svg
            class="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Salesforce card: shadow-only at rest, subtle border to define shape on white bg */
.sf-resource-card {
  box-shadow: 0 2px 8px rgba(3, 45, 96, 0.06), 0 4px 20px rgba(3, 45, 96, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  will-change: transform, box-shadow;
}

.sf-resource-card:hover {
  box-shadow: 0 8px 28px rgba(3, 45, 96, 0.12), 0 16px 40px rgba(3, 45, 96, 0.07);
  border-color: rgba(1, 118, 211, 0.18);
}
</style>
