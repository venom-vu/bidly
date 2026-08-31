<script setup lang="ts">
interface LaneBackgroundData {
  id: string;
  label: string;
  sub: string;
  color: string;
  y: number;
  h: number;
  canvasWidth: number;
  isAlt?: boolean;
}

interface Props {
  id: string;
  data: LaneBackgroundData;
}

defineProps<Props>();
</script>

<template>
  <div
    class="pointer-events-none select-none border-b border-t border-slate-200/80 transition-colors"
    :style="{
      width: `${data.canvasWidth || 2040}px`,
      height: `${data.h || 230}px`,
      backgroundColor: data.isAlt ? '#f8fafc' : '#ffffff',
    }"
  />
</template>
