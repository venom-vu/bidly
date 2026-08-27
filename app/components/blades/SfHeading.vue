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
      'py-12 md:py-16 border-y border-border',
      bgColor === 'light' ? 'bg-background' : '',
      bgColor === 'white' ? 'bg-card' : '',
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
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
          {{ text }}
        </h2>
        <p v-if="subtext" class="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          {{ subtext }}
        </p>
      </div>
    </div>
  </section>
</template>
