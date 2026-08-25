<script setup lang="ts">
interface Props {
  variant?: 'blue' | 'navy' | 'green' | 'gray' | 'orange'
  size?: 'sm' | 'md'
}

withDefaults(defineProps<Props>(), {
  variant: 'blue',
  size: 'sm'
})
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 font-bold uppercase tracking-wider rounded-full select-none',
      size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3.5 py-1 text-xs',
      variant === 'blue' ? 'bg-[#EBF5FF] text-[#0176D3]' : '',
      variant === 'navy' ? 'bg-[#032D60] text-white' : '',
      variant === 'green' ? 'bg-[#E6F4EA] text-[#04844B]' : '',
      variant === 'gray' ? 'bg-[#F4F6F9] text-[#5C5C5C] border border-[#E5E5E5]' : '',
      variant === 'orange' ? 'bg-[#FFF4E5] text-[#D46B08]' : ''
    ]"
  >
    <slot />
  </span>
</template>
