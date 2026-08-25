<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  pill?: boolean
  block?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  pill: false,
  block: false,
  disabled: false
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-[#0176D3] text-white hover:bg-[#014486] shadow-sm hover:shadow active:scale-[0.98]'
    case 'secondary':
      return 'bg-white text-[#0176D3] border-2 border-[#0176D3] hover:bg-[#EBF5FF] active:scale-[0.98]'
    case 'outline':
      return 'border border-[#032D60] text-[#032D60] hover:bg-[#F4F6F9] active:scale-[0.98]'
    case 'navy':
      return 'bg-[#032D60] text-white hover:bg-[#0B3F7E] shadow-sm active:scale-[0.98]'
    case 'ghost':
      return 'text-[#0176D3] hover:bg-[#EBF5FF]'
    default:
      return 'bg-[#0176D3] text-white'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3.5 py-1.5 text-xs font-semibold'
    case 'lg':
      return 'px-6 py-3.5 text-base font-bold'
    case 'md':
    default:
      return 'px-5 py-2.5 text-sm font-bold'
  }
})
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="[
      'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-center select-none',
      pill ? 'rounded-full' : 'rounded-lg',
      block ? 'w-full' : '',
      variantClasses,
      sizeClasses
    ]"
  >
    <slot />
  </NuxtLink>

  <a
    v-else-if="href"
    :href="href"
    :class="[
      'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-center select-none',
      pill ? 'rounded-full' : 'rounded-lg',
      block ? 'w-full' : '',
      variantClasses,
      sizeClasses
    ]"
  >
    <slot />
  </a>

  <button
    v-else
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer text-center select-none disabled:opacity-50 disabled:cursor-not-allowed',
      pill ? 'rounded-full' : 'rounded-lg',
      block ? 'w-full' : '',
      variantClasses,
      sizeClasses
    ]"
  >
    <slot />
  </button>
</template>
