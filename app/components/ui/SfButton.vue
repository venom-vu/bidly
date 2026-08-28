<script setup lang="ts">
interface Props {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "navy";
  size?: "sm" | "md" | "lg";
  to?: string;
  href?: string;
  pill?: boolean;
  block?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  pill: false,
  block: false,
  disabled: false,
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm hover:shadow active:scale-[0.98]";
    case "secondary":
      return "bg-card text-brand-text border border-primary hover:bg-brand-soft active:scale-[0.98]";
    case "outline":
      return "border border-border text-foreground hover:bg-secondary active:scale-[0.98]";
    case "navy":
      return "bg-brand-panel text-brand-panel-foreground hover:bg-brand-panel-border shadow-sm active:scale-[0.98]";
    case "ghost":
      return "text-brand-text hover:bg-brand-soft";
    default:
      return "bg-primary text-primary-foreground hover:bg-primary-hover";
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "px-3.5 py-1.5 text-xs font-semibold";
    case "lg":
      return "px-6 py-3.5 text-base font-bold";
    case "md":
    default:
      return "px-5 py-2.5 text-sm font-bold";
  }
});
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="[
      'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-center select-none font-medium',
      pill ? 'rounded-full' : 'rounded-lg',
      block ? 'w-full' : '',
      variantClasses,
      sizeClasses,
    ]"
  >
    <slot />
  </NuxtLink>

  <a
    v-else-if="href"
    :href="href"
    :class="[
      'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-center select-none font-medium',
      pill ? 'rounded-full' : 'rounded-lg',
      block ? 'w-full' : '',
      variantClasses,
      sizeClasses,
    ]"
  >
    <slot />
  </a>

  <button
    v-else
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-center select-none disabled:opacity-50 disabled:cursor-not-allowed font-medium',
      pill ? 'rounded-full' : 'rounded-lg',
      block ? 'w-full' : '',
      variantClasses,
      sizeClasses,
    ]"
  >
    <slot />
  </button>
</template>
