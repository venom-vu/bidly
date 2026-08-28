<script setup lang="ts">
interface Props {
  variant?: "blue" | "navy" | "green" | "gray" | "orange" | "teal";
  size?: "sm" | "md";
}

withDefaults(defineProps<Props>(), {
  variant: "green",
  size: "sm",
});
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 font-bold uppercase tracking-wider rounded-full select-none transition-colors',
      size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3.5 py-1 text-xs',
      variant === 'blue' || variant === 'green'
        ? 'bg-brand-soft text-brand-text border border-brand-text/15'
        : '',
      variant === 'navy' ? 'bg-brand-panel text-white shadow-xs' : '',
      variant === 'gray'
        ? 'bg-secondary text-muted-foreground border border-border'
        : '',
      variant === 'orange'
        ? 'bg-tone-warn-soft text-tone-warn border border-tone-warn/20'
        : '',
      variant === 'teal'
        ? 'bg-[#e6f4f1] text-[#0d9488] border border-[#0d9488]/20'
        : '',
    ]"
  >
    <slot />
  </span>
</template>

