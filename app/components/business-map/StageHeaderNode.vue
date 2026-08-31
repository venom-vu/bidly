<script setup lang="ts">
interface StageHeaderData {
  id: string;
  label: string;
  sub: string;
  index: number;
  x: number;
  w: number;
  canvasHeight: number;
  headerH: number;
}

interface Props {
  id: string;
  data: StageHeaderData;
}

defineProps<Props>();
</script>

<template>
  <div class="pointer-events-none select-none relative" :style="{ width: `${data.w || 200}px` }">
    <!-- Top Stage Header Card -->
    <div
      class="bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200/90 shadow-2xs p-2.5 space-y-0.5 text-center pointer-events-auto"
      :style="{ width: `${data.w || 200}px`, height: `${(data.headerH || 70) - 20}px` }"
    >
      <div class="flex items-center justify-center gap-1.5 leading-tight">
        <span
          class="text-[10.5px] font-black px-1.5 py-0.2 rounded font-mono"
          :class="
            data.id === 'S2' || data.id === 'S4' || data.id === 'S5' || data.id === 'S7' || data.id === 'S8'
              ? 'bg-rose-600 text-white shadow-2xs'
              : 'bg-slate-100 text-slate-700'
          "
        >
          {{ data.id }}
        </span>
        <span class="text-xs font-extrabold text-[#032D60] tracking-tight truncate">
          {{ data.label.split('·')[1]?.trim() || data.label }}
        </span>
      </div>
      <div class="text-[10px] text-slate-500 font-medium truncate">
        {{ data.sub }}
      </div>
    </div>

    <!-- Vertical Stage Guideline (Dashed line spanning entire canvas height) -->
    <div
      class="absolute left-0 top-[52px] bottom-0 w-px border-l border-dashed border-slate-200"
      :style="{ height: `${(data.canvasHeight || 1040) - 52}px` }"
    />
  </div>
</template>
