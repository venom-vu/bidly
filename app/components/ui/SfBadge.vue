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
      'inline-flex items-center gap-1.5 font-bold uppercase tracking-wider rounded-full select-none',
      size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3.5 py-1 text-xs',
      variant === 'blue' ? 'bg-brand-soft text-brand-text' : '',
      variant === 'green' ? 'bg-brand-soft text-brand-text' : '',
      variant === 'navy' ? 'bg-brand-panel text-on-accent' : '',
      variant === 'gray'
        ? 'bg-secondary text-muted-foreground border border-border'
        : '',
      variant === 'orange' ? 'bg-tone-warn-soft text-tone-warn' : '',
      variant === 'teal' ? 'bg-stage-s3/15 text-stage-s3' : '',
    ]"
  >
    <slot />
  </span>
</template>
