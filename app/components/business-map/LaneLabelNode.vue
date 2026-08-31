<script setup lang="ts">
interface LaneLabelData {
  id: string;
  label: string;
  sub: string;
  color: string;
  w: number;
  h: number;
}

interface Props {
  id: string;
  data: LaneLabelData;
}

defineProps<Props>();
</script>

<template>
  <div
    class="bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 shadow-2xs p-3 flex flex-col justify-center select-none relative overflow-hidden pointer-events-auto"
    :style="{
      width: `${data.w || 190}px`,
      height: `${data.h || 200}px`,
    }"
  >
    <!-- Left Accent Stripe -->
    <div
      class="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl shrink-0"
      :style="{ backgroundColor: data.color || '#0176d3' }"
    />

    <!-- Title and Subtitle -->
    <div class="pl-1.5 space-y-1">
      <div
        class="text-xs sm:text-[13px] font-black tracking-tight leading-snug"
        :style="{ color: data.color || '#032D60' }"
      >
        {{ data.label }}
      </div>
      <div class="text-[10.5px] text-slate-500 font-medium leading-relaxed">
        {{ data.sub }}
      </div>
    </div>
  </div>
</template>
