<script setup lang="ts">
interface Props {
  text: string
  subtext?: string
  align?: 'center' | 'left'
  bgColor?: 'white' | 'light' | 'gradient'
}

withDefaults(defineProps<Props>(), {
  align: 'center',
  bgColor: 'light'
})
</script>

<template>
  <section
    :class="[
      'py-12 md:py-16 border-y border-gray-100',
      bgColor === 'light' ? 'bg-[#F4F6F9]' : '',
      bgColor === 'white' ? 'bg-white' : '',
      bgColor === 'gradient' ? 'sf-gradient-bg' : ''
    ]"
  >
    <div class="sf-container">
      <div
        :class="[
          'max-w-4xl mx-auto space-y-3',
          align === 'center' ? 'text-center' : 'text-left'
        ]"
      >
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#032D60] tracking-tight leading-tight">
          {{ text }}
        </h2>
        <p v-if="subtext" class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          {{ subtext }}
        </p>
      </div>
    </div>
  </section>
</template>
