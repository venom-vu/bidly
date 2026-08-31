<script setup lang="ts">
import { Handle, Position } from "@vue-flow/core";

export interface BusinessNodeData {
  id: string;
  lane: string;
  col: number;
  row: number;
  type: "activity" | "gate" | "auto" | "platform";
  state: "da-dung" | "mot-phan" | "ui-mock" | "chua-dung" | "phase-sau";
  label: string;
  ref?: string;
  tip?: string;
  w: number;
  h: number;
  laneLabel?: string;
  laneColor?: string;
  stageLabel?: string;
  stateLabel?: string;
  stateColor?: string;
  typeLabel?: string;
  stepNumber?: number | null;
  isActiveStep?: boolean;
  isSelected?: boolean;
  isHighlighted?: boolean;
  isDimmed?: boolean;
}

interface Props {
  id: string;
  data: BusinessNodeData;
  selected?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "inspect", id: string): void;
}>();

function onClick() {
  emit("inspect", props.data.id);
}
</script>

<template>
  <div
    class="business-node group relative rounded-lg border bg-white select-none transition-all duration-200 cursor-pointer border-l-[4px]"
    :class="[
      data.isActiveStep
        ? 'ring-4 ring-primary/80 ring-offset-2 border-primary shadow-[0_10px_28px_-4px_rgba(1,118,211,0.35)] scale-[1.02] z-30'
        : data.isSelected
          ? 'ring-2 ring-primary border-primary shadow-[0_6px_20px_-2px_rgba(1,118,211,0.22)] z-20'
          : data.isDimmed
            ? 'opacity-20 grayscale-[70%] hover:opacity-90 hover:grayscale-0 border-slate-200 shadow-none'
            : data.isHighlighted
              ? 'border-primary/80 ring-2 ring-primary/20 shadow-card bg-white hover:-translate-y-0.5'
              : 'border-slate-200/90 shadow-2xs hover:border-primary/50 hover:shadow-card hover:-translate-y-0.5',
      data.type === 'gate' ? 'border-l-[5px]' : '',
    ]"
    :style="{
      width: `${data.w || 230}px`,
      height: `${data.h || 58}px`,
      borderLeftColor: data.laneColor || (data.type === 'gate' ? '#be123c' : '#0176d3'),
    }"
    @click="onClick"
  >
    <!-- Vue Flow Connection Handles (4 sides) -->
    <!-- Left Handles -->
    <Handle
      id="left-target"
      type="target"
      :position="Position.Left"
      class="!w-2 !h-2 !bg-slate-400 group-hover:!bg-primary !border-2 !border-white !opacity-0 group-hover:!opacity-100 transition-opacity !-left-[1px]"
    />
    <Handle
      id="left-source"
      type="source"
      :position="Position.Left"
      class="!w-2 !h-2 !bg-slate-400 group-hover:!bg-primary !border-2 !border-white !opacity-0 group-hover:!opacity-100 transition-opacity !-left-[1px]"
    />

    <!-- Right Handles -->
    <Handle
      id="right-source"
      type="source"
      :position="Position.Right"
      class="!w-2 !h-2 !bg-slate-400 group-hover:!bg-primary !border-2 !border-white !opacity-0 group-hover:!opacity-100 transition-opacity !-right-[1px]"
    />
    <Handle
      id="right-target"
      type="target"
      :position="Position.Right"
      class="!w-2 !h-2 !bg-slate-400 group-hover:!bg-primary !border-2 !border-white !opacity-0 group-hover:!opacity-100 transition-opacity !-right-[1px]"
    />

    <!-- Top Handles -->
    <Handle
      id="top-target"
      type="target"
      :position="Position.Top"
      class="!w-2 !h-2 !bg-slate-400 group-hover:!bg-primary !border-2 !border-white !opacity-0 group-hover:!opacity-100 transition-opacity !-top-[1px]"
    />
    <Handle
      id="top-source"
      type="source"
      :position="Position.Top"
      class="!w-2 !h-2 !bg-slate-400 group-hover:!bg-primary !border-2 !border-white !opacity-0 group-hover:!opacity-100 transition-opacity !-top-[1px]"
    />

    <!-- Bottom Handles -->
    <Handle
      id="bottom-source"
      type="source"
      :position="Position.Bottom"
      class="!w-2 !h-2 !bg-slate-400 group-hover:!bg-primary !border-2 !border-white !opacity-0 group-hover:!opacity-100 transition-opacity !-bottom-[1px]"
    />
    <Handle
      id="bottom-target"
      type="target"
      :position="Position.Bottom"
      class="!w-2 !h-2 !bg-slate-400 group-hover:!bg-primary !border-2 !border-white !opacity-0 group-hover:!opacity-100 transition-opacity !-bottom-[1px]"
    />

    <!-- Card Content Container -->
    <div class="px-2.5 py-1.5 flex flex-col justify-between h-full">
      <!-- Top Row: Type Pill / Stage & Lane -->
      <div class="flex items-center justify-between gap-1 leading-none">
        <div class="flex items-center gap-1 min-w-0">
          <span
            v-if="data.type === 'gate'"
            class="text-[8.5px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200/70"
          >
            Cổng cứng
          </span>
          <span
            v-else-if="data.type === 'auto'"
            class="text-[8.5px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200/70"
          >
            Tự tính
          </span>
          <span
            v-else-if="data.type === 'platform'"
            class="text-[8.5px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/70"
          >
            Nền tảng
          </span>
          <span
            v-else
            class="text-[8.5px] font-bold text-slate-500 truncate"
          >
            {{ data.stageLabel?.split('·')[0]?.trim() || '' }}
          </span>
        </div>

        <span
          v-if="data.laneLabel"
          class="text-[8.5px] font-semibold text-slate-400 font-sans truncate max-w-[70px] hidden sm:inline"
        >
          {{ data.laneLabel.split(' ')[0] }}
        </span>
      </div>

      <!-- Center: Node Label (Title) -->
      <div
        class="font-extrabold text-[#032D60] text-[11px] sm:text-[11.5px] leading-tight line-clamp-2 transition-colors group-hover:text-primary"
      >
        {{ data.label }}
      </div>

      <!-- Bottom Row: Ref Code -->
      <div class="flex items-center justify-between text-[9px] text-slate-400 font-mono leading-none">
        <span v-if="data.ref" class="truncate max-w-[150px]" :title="data.ref">
          {{ data.ref }}
        </span>
        <span v-else class="text-transparent">&nbsp;</span>

        <!-- Active step micro-tag if present -->
        <span
          v-if="data.isActiveStep"
          class="text-[8px] font-black uppercase tracking-wider text-primary font-sans animate-pulse"
        >
          Đang xem
        </span>
      </div>
    </div>

    <!-- Active Step Flow Badge (Floating Sleek Rounded Tag) -->
    <div
      v-if="data.stepNumber"
      class="absolute -top-2.5 -right-2 px-1.5 h-5 min-w-[20px] rounded-[5px] flex items-center justify-center font-mono font-black text-[10.5px] text-white shadow-sm z-40 border border-white/90 transition-all select-none"
      :class="data.isActiveStep ? 'scale-110 bg-primary ring-2 ring-primary/40 shadow-md' : ''"
      :style="!data.isActiveStep ? { backgroundColor: data.laneColor || '#0176d3' } : {}"
    >
      {{ data.stepNumber }}
    </div>
  </div>
</template>
