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

/*
 * Salesforce Button Design System
 * ─────────────────────────────────────────────────────────────────────────────
 * Primary:   Solid blue #0176D3, white text, hover #0B5CAB
 * Secondary: White bg, blue border, blue text, hover pale blue fill
 * Outline:   Transparent bg, dark border, dark text
 * Ghost:     No bg/border, blue text only
 * Navy:      Deep navy bg, white text (dark section CTAs)
 * ─────────────────────────────────────────────────────────────────────────────
 * Border-radius: 4px (Salesforce uses 4px for most CTAs, NOT pill/rounded)
 * Pill: Optional 9999px for special cases
 */
const variantClasses = computed(() => {
  switch (props.variant) {
    case "primary":
      // Salesforce primary: solid Lightning Blue, shadow-sm, active scale
      return "bg-primary text-white hover:bg-primary-hover active:scale-[0.98] sf-btn-primary";
    case "secondary":
      // Salesforce secondary: white bg, 1px blue border, blue text
      return "bg-white text-primary border border-primary hover:bg-brand-soft active:scale-[0.98]";
    case "outline":
      return "border border-border text-foreground hover:bg-secondary hover:border-muted-foreground/40 active:scale-[0.98]";
    case "navy":
      // Dark section CTA
      return "bg-brand-panel text-white hover:bg-brand-panel-border active:scale-[0.98]";
    case "ghost":
      return "text-primary hover:bg-brand-soft";
    default:
      return "bg-primary text-white hover:bg-primary-hover sf-btn-primary";
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "px-3.5 py-1.5 text-xs font-bold";
    case "lg":
      // Salesforce large CTA: generous padding, slightly larger text
      return "px-7 py-3.5 text-[15px] font-extrabold tracking-tight";
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
      'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-center select-none font-bold',
      pill ? 'rounded-full' : 'rounded-[4px]',
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
      'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-center select-none font-bold',
      pill ? 'rounded-full' : 'rounded-[4px]',
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
      'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-center select-none disabled:opacity-50 disabled:cursor-not-allowed font-bold',
      pill ? 'rounded-full' : 'rounded-[4px]',
      block ? 'w-full' : '',
      variantClasses,
      sizeClasses,
    ]"
  >
    <slot />
  </button>
</template>

<style scoped>
/* Salesforce primary button — shadow that matches SF exactly */
.sf-btn-primary {
  box-shadow: 0 2px 6px rgba(1, 118, 211, 0.30);
}
.sf-btn-primary:hover {
  box-shadow: 0 4px 12px rgba(1, 118, 211, 0.35);
}
</style>
