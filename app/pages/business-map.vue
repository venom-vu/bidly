<script setup lang="ts">
import SfButton from "~/components/ui/SfButton.vue";
import SfContactPillars from "~/components/blades/SfContactPillars.vue";
import { useDemoModal } from "~/composables/useDemoModal";
import rawData from "~/data/business-map.json";

definePageMeta({
  alias: ["/ban-do-nghiep-vu", "/crm/ban-do-nghiep-vu"],
});

useSeoMeta({
  title: "Bản Đồ Nghiệp Vụ Đấu Thầu 5 Làn | Bidly Preconstruction CRM",
  description:
    "Bản đồ trực quan luồng nghiệp vụ 5 làn × 9 giai đoạn: phân định trách nhiệm liên phòng ban (BD, Đấu thầu, Ban điều hành, Hệ thống, Nền tảng), 5 cổng cứng máy chủ và 10 luồng xử lý chuyên sâu.",
});

const { openModal } = useDemoModal();

// ─── TYPES & DATA DEFINITIONS ────────────────────────────────────────────────
interface NodeItem {
  id: string;
  lane: string;
  col: number;
  row: number;
  type: "activity" | "gate" | "auto" | "platform";
  state: "da-dung" | "mot-phan" | "ui-mock" | "chua-dung" | "phase-sau";
  label: string;
  ref?: string;
  tip?: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface EdgeItem {
  from: string;
  to: string;
  kind: string;
  label?: string;
}

interface FlowStep {
  node: string;
  note: string;
}

interface FlowItem {
  id: string;
  name: string;
  group: string;
  summary: string;
  steps: FlowStep[];
}

const G = rawData as {
  meta: typeof rawData.meta;
  nodes: NodeItem[];
  edges: EdgeItem[];
  flows: FlowItem[];
};

const M = G.meta;
const GEO = M.geometry;

// Lookup maps
const nodeById = new Map<string, NodeItem>(G.nodes.map((n) => [n.id, n]));
const laneById = new Map(M.lanes.map((l) => [l.id, l]));
const kindById = new Map(M.edgeKinds.map((k) => [k.id, k]));
const stateById = new Map(M.states.map((s) => [s.id, s]));
const typeById = new Map(M.nodeTypes.map((t) => [t.id, t]));

// ─── REACTIVE STATE ──────────────────────────────────────────────────────────
const viewMode = ref<"board" | "canvas">("canvas");
const activeFlowId = ref<string | null>("f-lifecycle");
const currentStepIndex = ref<number>(0);
const activeNodeId = ref<string | null>(null);
const activeLaneFilter = ref<string>("all");
const activeStageFilter = ref<string>("all");
const activeStateFilter = ref<string>("all");
const searchQuery = ref<string>("");
const isDrawerOpen = ref<boolean>(false);
const isLegendOpen = ref<boolean>(false);
const isCanvasFullscreen = ref<boolean>(false);
const isFlowDropdownOpen = ref<boolean>(false);
const isLaneDropdownOpen = ref<boolean>(false);

// SVG Canvas Pan/Zoom
const canvasView = ref({ x: 20, y: 10, k: 0.82 });
const isDragging = ref(false);
const dragStart = ref({ x: 0, y: 0, vx: 0, vy: 0 });
const svgRef = ref<SVGSVGElement | null>(null);

// Hover Tooltip
const tooltip = ref({
  show: false,
  x: 0,
  y: 0,
  node: null as NodeItem | null,
});

// ─── COMPUTED PROPERTIES ─────────────────────────────────────────────────────
const activeFlow = computed(() =>
  activeFlowId.value
    ? G.flows.find((f) => f.id === activeFlowId.value) || null
    : null,
);

const activeStep = computed(() => {
  if (!activeFlow.value || !activeFlow.value.steps.length) return null;
  const idx = Math.min(
    Math.max(0, currentStepIndex.value),
    activeFlow.value.steps.length - 1,
  );
  const step = activeFlow.value.steps[idx];
  if (!step) return null;
  return {
    index: idx,
    total: activeFlow.value.steps.length,
    step,
    node: nodeById.get(step.node) || null,
  };
});

const activeNode = computed(() =>
  activeNodeId.value ? nodeById.get(activeNodeId.value) || null : null,
);

// Map of nodeId -> step number in active flow
const flowStepMap = computed(() => {
  const map = new Map<string, number>();
  if (activeFlow.value) {
    activeFlow.value.steps.forEach((s, idx) => {
      map.set(s.node, idx + 1);
    });
  }
  return map;
});

// Highlighted nodes set based on active flow or search
const highlightedNodeIds = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();

  // Search query takes precedence
  if (q) {
    const set = new Set<string>();
    G.nodes.forEach((n) => {
      const txt = `${n.label} ${n.ref || ""} ${n.tip || ""}`.toLowerCase();
      if (txt.includes(q)) set.add(n.id);
    });
    return set;
  }

  // Active flow
  if (activeFlow.value) {
    return new Set(activeFlow.value.steps.map((s) => s.node));
  }

  return null;
});

// Filtered nodes matrix for Swimlane Board View
const swimlaneData = computed(() => {
  return M.lanes.map((lane) => {
    // Columns S0 to S8
    const columns = M.columns.map((col, cIdx) => {
      let cellNodes = G.nodes.filter(
        (n) => n.lane === lane.id && n.col === cIdx,
      );

      // Filter by build state if chosen
      if (activeStateFilter.value !== "all") {
        cellNodes = cellNodes.filter(
          (n) => n.state === activeStateFilter.value,
        );
      }

      // Filter by lane if chosen
      if (
        activeLaneFilter.value !== "all" &&
        lane.id !== activeLaneFilter.value
      ) {
        cellNodes = [];
      }

      // Filter by stage if chosen
      if (
        activeStageFilter.value !== "all" &&
        col.id !== activeStageFilter.value
      ) {
        cellNodes = [];
      }

      return {
        col,
        nodes: cellNodes,
      };
    });

    return {
      lane,
      columns,
    };
  });
});

// Summary statistics
const stats = computed(() => ({
  stages: M.columns.length,
  activities: G.nodes.filter((n) => n.type === "activity").length,
  gates: G.nodes.filter((n) => n.type === "gate").length,
  autos: G.nodes.filter((n) => n.type === "auto").length,
  flows: G.flows.length,
  builtNodes: G.nodes.filter((n) => n.state === "da-dung").length,
  totalNodes: G.nodes.length,
}));

// Flow grouping
const flowGroups = computed(() => {
  const map = new Map<string, FlowItem[]>();
  G.flows.forEach((f) => {
    if (!map.has(f.group)) map.set(f.group, []);
    map.get(f.group)!.push(f);
  });
  return Array.from(map.entries()).map(([group, items]) => ({ group, items }));
});

// ─── ACTION HANDLERS ─────────────────────────────────────────────────────────
function setFlow(flowId: string) {
  if (activeFlowId.value === flowId) {
    activeFlowId.value = null;
    currentStepIndex.value = 0;
  } else {
    activeFlowId.value = flowId;
    currentStepIndex.value = 0;
    // Auto-focus first node
    const targetFlow = G.flows.find((f) => f.id === flowId);
    if (targetFlow && targetFlow.steps.length > 0 && targetFlow.steps[0]) {
      activeNodeId.value = targetFlow.steps[0].node;
    }
  }
}

function nextStep() {
  if (!activeFlow.value) return;
  if (currentStepIndex.value < activeFlow.value.steps.length - 1) {
    currentStepIndex.value++;
    const nextS = activeFlow.value.steps[currentStepIndex.value];
    if (nextS) {
      activeNodeId.value = nextS.node;
    }
    if (viewMode.value === "canvas" && activeStep.value?.node) {
      centerCanvasOn(activeStep.value.node);
    }
  }
}

function prevStep() {
  if (!activeFlow.value) return;
  if (currentStepIndex.value > 0) {
    currentStepIndex.value--;
    const prevS = activeFlow.value.steps[currentStepIndex.value];
    if (prevS) {
      activeNodeId.value = prevS.node;
    }
    if (viewMode.value === "canvas" && activeStep.value?.node) {
      centerCanvasOn(activeStep.value.node);
    }
  }
}

function jumpToStep(idx: number) {
  if (!activeFlow.value) return;
  currentStepIndex.value = idx;
  const targetS = activeFlow.value.steps[idx];
  if (targetS) {
    activeNodeId.value = targetS.node;
  }
  if (viewMode.value === "canvas" && activeStep.value?.node) {
    centerCanvasOn(activeStep.value.node);
  }
}

function inspectNode(nodeId: string) {
  activeNodeId.value = nodeId;
  isDrawerOpen.value = true;
  // If this node is part of current flow, update step index
  if (activeFlow.value) {
    const stepIdx = activeFlow.value.steps.findIndex((s) => s.node === nodeId);
    if (stepIdx !== -1) {
      currentStepIndex.value = stepIdx;
    }
  }
}

function closeDrawer() {
  isDrawerOpen.value = false;
}

function resetAllFilters() {
  activeLaneFilter.value = "all";
  activeStageFilter.value = "all";
  activeStateFilter.value = "all";
  searchQuery.value = "";
  activeFlowId.value = "f-lifecycle";
  currentStepIndex.value = 0;
  activeNodeId.value = null;
  fitCanvasAll();
}

// ─── SVG CANVAS CONTROLS ─────────────────────────────────────────────────────
function fitCanvasAll() {
  if (!svgRef.value) return;
  const rect = svgRef.value.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const pad = 40;
  const w = M.canvas.width + pad * 2;
  const h = M.canvas.height + pad * 2;
  const k = Math.min(rect.width / w, rect.height / h, 1.05);

  canvasView.value = {
    k,
    x: Math.max(10, (rect.width - M.canvas.width * k) / 2),
    y: Math.max(10, (rect.height - M.canvas.height * k) / 2),
  };
}

function centerCanvasOn(node: NodeItem) {
  if (!svgRef.value) return;
  const rect = svgRef.value.getBoundingClientRect();
  const k = Math.max(canvasView.value.k, 0.9);
  canvasView.value = {
    k,
    x: rect.width / 2 - (node.x + node.w / 2) * k,
    y: rect.height / 2 - (node.y + node.h / 2) * k,
  };
}

function zoomCanvas(factor: number) {
  if (!svgRef.value) return;
  const rect = svgRef.value.getBoundingClientRect();
  const k = Math.min(2.4, Math.max(0.2, canvasView.value.k * factor));
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  canvasView.value = {
    k,
    x: cx - (cx - canvasView.value.x) * (k / canvasView.value.k),
    y: cy - (cy - canvasView.value.y) * (k / canvasView.value.k),
  };
}

function onCanvasPointerDown(ev: PointerEvent) {
  const target = ev.target as HTMLElement | SVGElement;
  if (target.closest(".node") || target.closest("[data-clickable]")) return;

  isDragging.value = true;
  dragStart.value = {
    x: ev.clientX,
    y: ev.clientY,
    vx: canvasView.value.x,
    vy: canvasView.value.y,
  };
  (ev.currentTarget as HTMLElement)?.setPointerCapture(ev.pointerId);
}

function onCanvasPointerMove(ev: PointerEvent) {
  if (!isDragging.value) return;
  canvasView.value = {
    ...canvasView.value,
    x: dragStart.value.vx + (ev.clientX - dragStart.value.x),
    y: dragStart.value.vy + (ev.clientY - dragStart.value.y),
  };
}

function onCanvasPointerUp(ev: PointerEvent) {
  if (!isDragging.value) return;
  isDragging.value = false;
  try {
    (ev.currentTarget as HTMLElement)?.releasePointerCapture(ev.pointerId);
  } catch {}
}

function onCanvasWheel(ev: WheelEvent) {
  ev.preventDefault();
  if (!svgRef.value) return;
  const rect = svgRef.value.getBoundingClientRect();
  const k = Math.min(
    2.4,
    Math.max(
      0.2,
      canvasView.value.k * Math.pow(0.999, ev.deltaY * (ev.ctrlKey ? 4 : 1.4)),
    ),
  );
  const mx = ev.clientX - rect.left;
  const my = ev.clientY - rect.top;
  canvasView.value = {
    k,
    x: mx - (mx - canvasView.value.x) * (k / canvasView.value.k),
    y: my - (my - canvasView.value.y) * (k / canvasView.value.k),
  };
}

function getBezierPath(fromId: string, toId: string) {
  const a = nodeById.get(fromId);
  const b = nodeById.get(toId);
  if (!a || !b) return "";

  if (b.x > a.x + a.w - 1) {
    const sx = a.x + a.w;
    const sy = a.y + a.h / 2;
    const tx = b.x;
    const ty = b.y + b.h / 2;
    const d = Math.max(34, (tx - sx) * 0.45);
    return `M${sx},${sy}C${sx + d},${sy} ${tx - d},${ty} ${tx},${ty}`;
  }

  if (b.x + b.w < a.x + 1) {
    const sx = a.x;
    const sy = a.y + a.h / 2;
    const tx = b.x + b.w;
    const ty = b.y + b.h / 2;
    const d = Math.max(44, (sx - tx) * 0.3);
    return `M${sx},${sy}C${sx - d},${sy} ${tx + d},${ty} ${tx},${ty}`;
  }

  const down = b.y > a.y;
  const off = down ? -7 : 7;
  const sx = a.x + a.w / 2 + off;
  const sy = down ? a.y + a.h : a.y;
  const tx = b.x + b.w / 2 + off;
  const ty = down ? b.y : b.y + b.h;
  const d = Math.max(26, Math.abs(ty - sy) * 0.42);
  return `M${sx},${sy}C${sx},${sy + (down ? d : -d)} ${tx},${ty - (down ? d : -d)} ${tx},${ty}`;
}

// ─── TOOLTIP LOGIC ───────────────────────────────────────────────────────────
function showTooltip(n: NodeItem, ev: MouseEvent) {
  tooltip.value = {
    show: true,
    x: ev.clientX + 14,
    y: ev.clientY + 14,
    node: n,
  };
}

function moveTooltip(ev: MouseEvent) {
  if (!tooltip.value.show) return;
  let x = ev.clientX + 14;
  let y = ev.clientY + 14;
  if (x + 320 > window.innerWidth - 12) x = ev.clientX - 334;
  if (y + 180 > window.innerHeight - 12) y = ev.clientY - 194;
  tooltip.value.x = Math.max(12, x);
  tooltip.value.y = Math.max(12, y);
}

function hideTooltip() {
  tooltip.value.show = false;
}

// ─── KEYBOARD SHORTCUTS ──────────────────────────────────────────────────────
function onKeydown(ev: KeyboardEvent) {
  if (ev.key === "Escape") {
    closeDrawer();
  }
  if (ev.key === "ArrowRight" && activeFlow.value) {
    nextStep();
  }
  if (ev.key === "ArrowLeft" && activeFlow.value) {
    prevStep();
  }
  if (ev.key === "/" && document.activeElement?.tagName !== "INPUT") {
    ev.preventDefault();
    document.getElementById("business-map-search")?.focus();
  }
}

// Click outside handler
function onDocumentClick(ev: MouseEvent) {
  const target = ev.target as HTMLElement;
  if (!target.closest("#flow-picker-container")) {
    isFlowDropdownOpen.value = false;
  }
  if (!target.closest("#lane-filter-container")) {
    isLaneDropdownOpen.value = false;
  }
}

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
  document.addEventListener("click", onDocumentClick);
  requestAnimationFrame(fitCanvasAll);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  document.removeEventListener("click", onDocumentClick);
});
</script>

<template>
  <div class="space-y-0 text-foreground bg-[#f8fafc]">
    <!-- ─── 1. HERO HEADER (EXECUTIVE B2B) ────────────────────────────────── -->
    <section class="relative pt-6 pb-5 md:pt-8 md:pb-6 overflow-hidden bg-white border-b border-slate-200/80">
      <div class="sf-container relative z-10 max-w-4xl mx-auto text-center space-y-2">
        <div>
          <span class="sf-eyebrow text-[11px] py-0.5 px-3">
            KIẾN TRÚC NGHIỆP VỤ ĐẤU THẦU · 5 LÀN × 9 GIAI ĐOẠN
          </span>
        </div>

        <h1 class="text-2xl sm:text-3xl font-extrabold text-[#032D60] tracking-tight leading-tight">
          Bản Đồ Phối Hợp &amp; Luồng Dữ Liệu
          <span class="text-primary font-extrabold inline sm:block sm:mt-0.5">
            Bidly Preconstruction CRM
          </span>
        </h1>

        <p class="text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto text-slate-500 font-normal">
          Minh bạch <strong>trách nhiệm từng phòng ban</strong>, 5 cổng cứng kiểm soát máy chủ, số liệu tự động tính toán và dấu vết kiểm toán bất biến.
        </p>
      </div>
    </section>

    <!-- ─── 2. PROFESSIONAL COMMAND BAR & WORKFLOW PLAYER ────────────────── -->
    <section class="py-3 sticky top-16 z-30">
      <div class="sf-container">
        <!-- Main Unified Command Card -->
        <div class="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-[0_4px_24px_-4px_rgba(3,45,96,0.08)] p-2 sm:p-2.5 space-y-2">
          
          <!-- Top Row: Flow Selector + Stepper + Search + Filters + Mode Switcher -->
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
            
            <!-- Left: Flow Picker Dropdown & Stepper Controls -->
            <div class="flex items-center gap-1.5 flex-1 min-w-[280px]">
              <!-- Custom Flow Selector Menu Container -->
              <div id="flow-picker-container" class="relative">
                <button
                  type="button"
                  class="h-8.5 px-3 rounded-lg border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer select-none"
                  :class="[
                    activeFlow
                      ? 'bg-primary/5 text-primary border-primary/30 hover:bg-primary/10 shadow-2xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  ]"
                  @click.stop="isFlowDropdownOpen = !isFlowDropdownOpen; isLaneDropdownOpen = false"
                >
                  <span class="text-primary font-black">⚡</span>
                  <span class="font-extrabold max-w-[180px] sm:max-w-[240px] truncate">
                    {{ activeFlow ? (activeFlow.name.split(':')[0]?.trim() || activeFlow.name) : 'Chọn luồng nghiệp vụ' }}
                  </span>
                  <span v-if="activeFlow" class="text-[10px] font-mono px-1.5 py-0.2 rounded bg-primary/15 text-primary font-black">
                    {{ activeFlow.steps.length }} bước
                  </span>
                  <svg class="w-3.5 h-3.5 text-slate-400 ml-0.5 transition-transform" :class="{ 'rotate-180': isFlowDropdownOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <!-- Flow Popover Dropdown Menu -->
                <Transition name="sf-popover">
                  <div
                    v-if="isFlowDropdownOpen"
                    class="absolute left-0 top-full mt-1.5 w-80 sm:w-96 bg-white rounded-xl border border-slate-200 shadow-modal z-50 p-2 max-h-96 overflow-y-auto space-y-3"
                  >
                    <div class="flex items-center justify-between px-2 pt-1 pb-0.5 border-b border-slate-100">
                      <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">10 Luồng Nghiệp Vụ Tương Tác</span>
                      <button
                        v-if="activeFlowId"
                        type="button"
                        class="text-[10px] font-bold text-slate-500 hover:text-primary hover:underline"
                        @click="setFlow(''); isFlowDropdownOpen = false"
                      >
                        Tắt luồng
                      </button>
                    </div>

                    <div v-for="grp in flowGroups" :key="grp.group" class="space-y-1">
                      <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 pt-1">
                        {{ grp.group }}
                      </div>
                      <div
                        v-for="fl in grp.items"
                        :key="fl.id"
                        class="p-2 rounded-lg cursor-pointer transition-all flex items-start gap-2 hover:bg-slate-50"
                        :class="activeFlowId === fl.id ? 'bg-primary/8 border border-primary/20 text-primary' : 'text-slate-700'"
                        @click="setFlow(fl.id); isFlowDropdownOpen = false"
                      >
                        <span class="w-5 h-5 rounded flex items-center justify-center font-mono font-black text-[10px] bg-slate-100 shrink-0 text-slate-600">
                          {{ G.flows.findIndex(f => f.id === fl.id) + 1 }}
                        </span>
                        <div class="flex-1 min-w-0">
                          <div class="font-extrabold text-xs leading-tight">{{ fl.name }}</div>
                          <div class="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{{ fl.summary }}</div>
                        </div>
                        <span class="text-[10px] font-mono text-slate-400 font-bold shrink-0">
                          {{ fl.steps.length }}b
                        </span>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>

              <!-- Stepper Controls (When flow is active) -->
              <div v-if="activeFlow && activeStep" class="flex items-center gap-0.5 bg-slate-100 border border-slate-200/80 rounded-lg p-0.5 shadow-2xs">
                <button
                  type="button"
                  :disabled="activeStep.index === 0"
                  class="w-7 h-7 rounded-md flex items-center justify-center text-slate-700 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed font-black text-xs transition-colors cursor-pointer"
                  title="Bước trước (Phím ←)"
                  @click="prevStep"
                >
                  ‹
                </button>
                <span class="text-[11px] font-mono font-extrabold text-primary px-1.5 min-w-[42px] text-center">
                  {{ activeStep.index + 1 }}/{{ activeStep.total }}
                </span>
                <button
                  type="button"
                  :disabled="activeStep.index === activeStep.total - 1"
                  class="w-7 h-7 rounded-md flex items-center justify-center text-slate-700 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed font-black text-xs transition-colors cursor-pointer"
                  title="Bước tiếp (Phím →)"
                  @click="nextStep"
                >
                  ›
                </button>
              </div>
            </div>

            <!-- Right: Search + Lane Filter + View Switcher + Reset -->
            <div class="flex items-center gap-1.5 ml-auto">
              <!-- Search input -->
              <div class="relative w-36 sm:w-44">
                <svg class="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <input
                  id="business-map-search"
                  v-model="searchQuery"
                  type="search"
                  placeholder="Lọc ô... (/)"
                  class="w-full h-8.5 pl-8 pr-5 text-xs rounded-lg border border-slate-200 bg-slate-50 text-foreground focus:outline-none focus:border-primary focus:bg-white transition-all shadow-2xs font-medium"
                />
                <button
                  v-if="searchQuery"
                  type="button"
                  class="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-bold"
                  @click="searchQuery = ''"
                >
                  ×
                </button>
              </div>

              <!-- Custom Lane Filter Menu -->
              <div id="lane-filter-container" class="relative hidden sm:block">
                <button
                  type="button"
                  class="h-8.5 px-2.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  @click.stop="isLaneDropdownOpen = !isLaneDropdownOpen; isFlowDropdownOpen = false"
                >
                  <span
                    v-if="activeLaneFilter !== 'all'"
                    class="w-2 h-2 rounded-full shrink-0"
                    :style="{ background: laneById.get(activeLaneFilter)?.color }"
                  />
                  <span>{{ activeLaneFilter === 'all' ? '5 Làn' : laneById.get(activeLaneFilter)?.label.split(' ')[0] }}</span>
                  <svg class="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <!-- Lane Popover Dropdown -->
                <Transition name="sf-popover">
                  <div
                    v-if="isLaneDropdownOpen"
                    class="absolute right-0 top-full mt-1.5 w-56 bg-white rounded-xl border border-slate-200 shadow-modal z-50 p-1.5 space-y-0.5"
                  >
                    <div
                      class="px-2.5 py-1.5 rounded-lg cursor-pointer text-xs font-bold flex items-center justify-between hover:bg-slate-50 transition-colors"
                      :class="activeLaneFilter === 'all' ? 'text-primary bg-primary/5' : 'text-slate-700'"
                      @click="activeLaneFilter = 'all'; isLaneDropdownOpen = false"
                    >
                      <span>Tất cả 5 Làn</span>
                      <span v-if="activeLaneFilter === 'all'">✓</span>
                    </div>
                    <div
                      v-for="lane in M.lanes"
                      :key="lane.id"
                      class="px-2.5 py-1.5 rounded-lg cursor-pointer text-xs font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors"
                      :class="activeLaneFilter === lane.id ? 'text-primary bg-primary/5' : 'text-slate-700'"
                      @click="activeLaneFilter = lane.id; isLaneDropdownOpen = false"
                    >
                      <span class="w-2 h-2 rounded-full shrink-0" :style="{ background: lane.color }" />
                      <span class="flex-1 truncate">{{ lane.label }}</span>
                      <span v-if="activeLaneFilter === lane.id">✓</span>
                    </div>
                  </div>
                </Transition>
              </div>

              <!-- View Mode Segmented Control -->
              <div class="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5 text-xs font-bold shrink-0">
                <button
                  type="button"
                  class="px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 text-[11px]"
                  :class="viewMode === 'board' ? 'bg-white text-primary shadow-xs font-black' : 'text-slate-600 hover:text-slate-900'"
                  @click="viewMode = 'board'"
                >
                  <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span>Bảng</span>
                </button>
                <button
                  type="button"
                  class="px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 text-[11px]"
                  :class="viewMode === 'canvas' ? 'bg-white text-primary shadow-xs font-black' : 'text-slate-600 hover:text-slate-900'"
                  @click="viewMode = 'canvas'; nextTick(fitCanvasAll)"
                >
                  <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>Sơ đồ</span>
                </button>
              </div>

              <!-- Reset Filters Icon Button -->
              <button
                type="button"
                class="w-8.5 h-8.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                title="Đặt lại tất cả bộ lọc"
                @click="resetAllFilters"
              >
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Bottom Row: Step Context Narrative Banner (Only when active flow is engaged) -->
          <div
            v-if="activeFlow && activeStep"
            class="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-2.5 text-xs transition-all"
          >
            <!-- Step Breadcrumb Narrative -->
            <div class="flex items-center gap-2 min-w-0 overflow-hidden">
              <span class="px-2 py-0.5 rounded-md bg-primary text-white font-mono font-black text-[10px] shrink-0 shadow-2xs">
                BƯỚC {{ activeStep.index + 1 }}/{{ activeStep.total }}
              </span>

              <span class="font-extrabold text-[#032D60] shrink-0 text-xs">
                {{ activeStep.node?.label }}
              </span>

              <span
                v-if="activeStep?.node"
                class="text-[10px] font-bold px-2 py-0.5 rounded-full text-white shrink-0 hidden sm:inline-block"
                :style="{ background: laneById.get(activeStep.node.lane || '')?.color || '#0176d3' }"
              >
                {{ laneById.get(activeStep.node.lane || '')?.label }}
              </span>

              <span v-if="activeStep?.node" class="text-[11px] font-semibold text-slate-500 shrink-0 hidden md:inline">
                · {{ M.columns[activeStep.node.col || 0]?.label }}
              </span>

              <span v-if="activeStep?.step" class="text-slate-500 font-normal truncate hidden lg:inline border-l border-slate-200 pl-2">
                {{ activeStep.step.note }}
              </span>
            </div>

            <!-- Inspect Node Button -->
            <button
              v-if="activeStep?.node"
              type="button"
              class="text-[11px] font-bold text-primary hover:text-primary-hover hover:underline shrink-0 flex items-center gap-1 cursor-pointer self-end md:self-auto"
              @click="inspectNode(activeStep.node.id)"
            >
              <span>Xem chi tiết ô</span>
              <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>

    <!-- ─── 3. MAIN WORKFLOW VISUALIZATION ───────────────────────────────── -->

    <!-- MODE A: SWIMLANE BOARD VIEW (Dạng Bảng Phối Hợp) -->
    <section v-if="viewMode === 'board'" class="pb-10 pt-1">
      <div class="sf-container space-y-4">
        <!-- Horizontal Scrollable Swimlane Table -->
        <div
          class="overflow-x-auto pb-3 rounded-2xl border border-slate-200 shadow-card bg-white"
          style="scrollbar-width: thin"
        >
          <div class="min-w-[1240px] divide-y divide-slate-100">
            <!-- Table Header: 9 Stages -->
            <div class="flex bg-slate-50 font-bold sticky top-0 z-20 border-b border-slate-200">
              <!-- Left Lane Column Label Header -->
              <div
                class="w-48 shrink-0 p-3.5 border-r border-slate-200 flex items-center justify-between text-xs text-slate-500 uppercase tracking-wider font-extrabold"
              >
                <span>5 Làn Phối Hợp</span>
                <span class="text-[10px] font-mono font-bold bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700">9 Stages</span>
              </div>

              <!-- 9 Stage Headers -->
              <div class="flex flex-1 divide-x divide-slate-200">
                <div
                  v-for="col in M.columns"
                  :key="col.id"
                  class="flex-1 p-3 text-center transition-colors"
                  :class="[
                    activeStageFilter === col.id ? 'bg-primary/5 text-primary' : '',
                  ]"
                >
                  <div class="flex items-center justify-center gap-1.5">
                    <span
                      class="text-xs font-black px-2 py-0.5 rounded font-mono"
                      :class="
                        col.id === 'S2' || col.id === 'S4' || col.id === 'S5' || col.id === 'S7' || col.id === 'S8'
                          ? 'bg-[#be123c] text-white shadow-2xs'
                          : 'bg-slate-200/80 text-slate-800'
                      "
                    >
                      {{ col.id }}
                    </span>
                    <span class="text-xs font-extrabold text-[#032D60] tracking-tight">
                      {{ col.label.split('·')[1]?.trim() || col.label }}
                    </span>
                  </div>
                  <div class="text-[10px] text-slate-500 font-normal mt-1 leading-tight line-clamp-1">
                    {{ col.sub }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Table Body: 5 Swimlane Rows -->
            <div
              v-for="row in swimlaneData"
              :key="row.lane.id"
              class="flex transition-colors group/row hover:bg-slate-50/40"
              :style="{ backgroundColor: `${row.lane.color}04` }"
            >
              <!-- Left Sticky Lane Info Column -->
              <div
                class="w-48 shrink-0 p-3.5 border-r border-slate-200 flex flex-col justify-center space-y-1 bg-white/70 backdrop-blur-xs"
                :style="{ borderLeft: `4px solid ${row.lane.color}` }"
              >
                <div class="text-xs font-black tracking-tight" :style="{ color: row.lane.color }">
                  {{ row.lane.label }}
                </div>
                <div class="text-[10px] text-slate-500 leading-tight font-medium">
                  {{ row.lane.sub }}
                </div>
              </div>

              <!-- 9 Cells in this Swimlane -->
              <div class="flex flex-1 divide-x divide-slate-100">
                <div
                  v-for="cell in row.columns"
                  :key="`${row.lane.id}-${cell.col.id}`"
                  class="flex-1 p-2 space-y-2 min-h-[96px] transition-colors"
                  :class="[
                    activeStageFilter === cell.col.id ? 'bg-primary/5' : '',
                  ]"
                >
                  <!-- Activity Task Cards in this Cell -->
                  <div
                    v-for="node in cell.nodes"
                    :key="node.id"
                    class="p-2.5 rounded-xl border text-xs leading-snug transition-all duration-200 cursor-pointer relative group/card select-none"
                    :class="[
                      activeStep && activeStep.node?.id === node.id
                        ? 'border-primary ring-2 ring-primary/40 bg-white shadow-card -translate-y-0.5'
                        : activeNodeId === node.id
                          ? 'border-primary ring-2 ring-primary/30 bg-white shadow-card'
                          : highlightedNodeIds && !highlightedNodeIds.has(node.id)
                            ? 'border-slate-200/50 bg-white/40 opacity-30'
                            : 'border-slate-200/90 bg-white hover:border-primary/40 hover:shadow-card hover:-translate-y-0.5',
                      node.type === 'gate' ? 'border-l-4' : '',
                    ]"
                    :style="node.type === 'gate' ? { borderLeftColor: row.lane.color } : {}"
                    @click="inspectNode(node.id)"
                  >
                    <!-- Top Info: Step Badge & State Dot -->
                    <div class="flex items-center justify-between gap-1 mb-1.5">
                      <div class="flex items-center gap-1.5">
                        <!-- Step Badge in Flow -->
                        <span
                          v-if="flowStepMap.has(node.id)"
                          class="w-5 h-5 rounded-full flex items-center justify-center font-black text-[10px] text-white font-mono shrink-0 shadow-2xs"
                          :style="{ background: row.lane.color }"
                        >
                          {{ flowStepMap.get(node.id) }}
                        </span>

                        <!-- Type Indicator Badge -->
                        <span
                          class="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded"
                          :class="node.type === 'gate' ? 'bg-[#be123c]/10 text-[#be123c]' : node.type === 'auto' ? 'bg-[#4f46e5]/10 text-[#4f46e5]' : 'bg-slate-100 text-slate-600'"
                        >
                          {{ typeById.get(node.type)?.label.split(' ')[0] }}
                        </span>
                      </div>

                      <!-- Build Status Dot -->
                      <span
                        class="w-2.5 h-2.5 rounded-full shrink-0"
                        :style="{ background: stateById.get(node.state)?.color }"
                        :title="stateById.get(node.state)?.label"
                      />
                    </div>

                    <!-- Label -->
                    <div class="font-extrabold text-[#032D60] group-hover/card:text-primary transition-colors leading-tight line-clamp-2">
                      {{ node.label }}
                    </div>

                    <!-- Technical Ref Code -->
                    <div v-if="node.ref" class="text-[9.5px] font-mono text-slate-400 mt-1 truncate font-medium">
                      {{ node.ref }}
                    </div>
                  </div>

                  <!-- Empty cell placeholder -->
                  <div
                    v-if="cell.nodes.length === 0"
                    class="h-full min-h-[50px] rounded-lg border border-dashed border-slate-200/60 flex items-center justify-center opacity-25 text-[10px] text-slate-400"
                  >
                    —
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="text-center text-xs text-slate-400 flex items-center justify-center gap-2 pt-1">
          <span>💡 <strong>Mẹo:</strong> Bấm vào bất kỳ ô chức năng nào để mở khay chi tiết quy tắc máy chủ và các liên kết nghiệp vụ.</span>
        </div>
      </div>
    </section>

    <!-- MODE B: INTERACTIVE VECTOR MAP CANVAS (Sơ Đồ Vector) -->
    <section v-else class="py-4 bg-white sf-section-border">
      <div class="sf-container">
        <div
          class="relative rounded-2xl border border-border/80 shadow-card overflow-hidden bg-[#fcfdfe]"
          style="height: calc(100vh - 170px); min-height: 600px"
        >
          <!-- SVG Canvas Area -->
          <svg
            ref="svgRef"
            class="w-full h-full block cursor-grab active:cursor-grabbing select-none"
            xmlns="http://www.w3.org/2000/svg"
            @pointerdown="onCanvasPointerDown"
            @pointermove="onCanvasPointerMove"
            @pointerup="onCanvasPointerUp"
            @wheel="onCanvasWheel"
          >
            <defs>
              <marker
                v-for="k in M.edgeKinds"
                :key="k.id"
                :id="`bm-ar-${k.id}`"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path d="M0 1 L9 5 L0 9 z" :fill="k.color" />
              </marker>
              <filter
                id="sf-node-shadow"
                x="-5%"
                y="-10%"
                width="115%"
                height="130%"
              >
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="3"
                  flood-color="#032d60"
                  flood-opacity="0.08"
                />
              </filter>
              <filter
                id="sf-node-shadow-active"
                x="-10%"
                y="-15%"
                width="125%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="6"
                  flood-color="#0176d3"
                  flood-opacity="0.25"
                />
              </filter>
            </defs>

            <!-- Pannable/Zoomable Viewport -->
            <g
              :transform="`translate(${canvasView.x}, ${canvasView.y}) scale(${canvasView.k})`"
            >
              <!-- Swimlane Backgrounds -->
              <g class="bands">
                <rect
                  v-for="(lane, idx) in M.lanes"
                  :key="lane.id"
                  :x="0"
                  :y="lane.y"
                  :width="M.canvas.width"
                  :height="lane.h"
                  :fill="idx % 2 === 0 ? '#ffffff' : '#f8fafc'"
                  stroke="#e2e8f0"
                  stroke-width="0.5"
                />
                <line
                  v-for="col in M.columns"
                  :key="col.id"
                  :x1="col.x - 12"
                  :y1="GEO.headerH"
                  :x2="col.x - 12"
                  :y2="M.canvas.height"
                  stroke="#e2e8f0"
                  stroke-width="1"
                  stroke-dasharray="4 6"
                />
              </g>

              <!-- Connectors / Edges -->
              <g class="edges">
                <path
                  v-for="(e, eIdx) in G.edges"
                  :key="`svg-edge-${eIdx}`"
                  :d="getBezierPath(e.from, e.to)"
                  :stroke="kindById.get(e.kind)?.color || '#94a3b8'"
                  :stroke-width="
                    activeNodeId === e.from || activeNodeId === e.to ? 2.8 : 1.5
                  "
                  :stroke-dasharray="kindById.get(e.kind)?.dash || ''"
                  :marker-end="`url(#bm-ar-${e.kind})`"
                  fill="none"
                  :opacity="
                    highlightedNodeIds &&
                    (!highlightedNodeIds.has(e.from) ||
                      !highlightedNodeIds.has(e.to))
                      ? 0.08
                      : 0.45
                  "
                  class="transition-opacity duration-200"
                />
              </g>

              <!-- Node Cards -->
              <g class="nodes">
                <g
                  v-for="n in G.nodes"
                  :key="n.id"
                  :transform="`translate(${n.x}, ${n.y})`"
                  class="node cursor-pointer transition-all duration-200"
                  :opacity="
                    highlightedNodeIds && !highlightedNodeIds.has(n.id)
                      ? 0.2
                      : 1
                  "
                  @mouseenter="showTooltip(n, $event)"
                  @mousemove="moveTooltip($event)"
                  @mouseleave="hideTooltip"
                  @click.stop="inspectNode(n.id)"
                >
                  <rect
                    :width="n.w"
                    :height="n.h"
                    rx="9"
                    :fill="n.type === 'gate' ? '#fbf8ff' : '#ffffff'"
                    :stroke="laneById.get(n.lane)?.color || '#64748b'"
                    :stroke-width="
                      activeNodeId === n.id ? 3 : n.type === 'gate' ? 2 : 1.2
                    "
                    :stroke-dasharray="
                      n.type === 'auto'
                        ? '5 3'
                        : n.type === 'platform'
                          ? '2 3'
                          : ''
                    "
                    :filter="
                      activeNodeId === n.id
                        ? 'url(#sf-node-shadow-active)'
                        : 'url(#sf-node-shadow)'
                    "
                  />
                  <rect
                    :x="5"
                    :y="8"
                    :width="3.5"
                    :height="n.h - 16"
                    rx="2"
                    :fill="laneById.get(n.lane)?.color || '#64748b'"
                  />
                  <text
                    :x="15"
                    :y="20"
                    class="text-[11.5px] font-bold fill-slate-900 pointer-events-none"
                  >
                    {{
                      n.label.length > 32 ? n.label.slice(0, 30) + "…" : n.label
                    }}
                  </text>
                  <text
                    v-if="n.ref"
                    :x="15"
                    :y="n.h - 10"
                    class="text-[9.5px] font-mono fill-slate-400 pointer-events-none"
                  >
                    {{ n.ref.length > 28 ? n.ref.slice(0, 26) + "…" : n.ref }}
                  </text>
                  <circle
                    :cx="n.w - 11"
                    :cy="11"
                    :r="4.5"
                    :fill="stateById.get(n.state)?.color || '#94a3b8'"
                    stroke="#ffffff"
                    stroke-width="1.5"
                  />
                  <!-- Step Sequence Badge -->
                  <g
                    v-if="flowStepMap.has(n.id)"
                    :transform="`translate(${n.w - 2}, ${n.h - 2})`"
                  >
                    <circle
                      :r="10"
                      :fill="laneById.get(n.lane)?.color || '#0176d3'"
                      stroke="#ffffff"
                      stroke-width="2"
                    />
                    <text
                      y="3.5"
                      text-anchor="middle"
                      class="text-[10px] font-black fill-white pointer-events-none"
                    >
                      {{ flowStepMap.get(n.id) }}
                    </text>
                  </g>
                </g>
              </g>

              <!-- Sticky Headers (Top) -->
              <g
                class="headers"
                :transform="`translate(0, ${Math.max(0, (8 - canvasView.y) / canvasView.k)})`"
              >
                <rect
                  :x="0"
                  :y="0"
                  :width="M.canvas.width"
                  :height="GEO.headerH - 8"
                  fill="#ffffff"
                  fill-opacity="0.96"
                  stroke="#e2e8f0"
                  stroke-width="1"
                />
                <g v-for="col in M.columns" :key="`canvas-col-${col.id}`">
                  <rect
                    :x="col.x - 6"
                    :y="10"
                    :width="col.w"
                    :height="GEO.headerH - 24"
                    rx="8"
                    fill="#ffffff"
                    stroke="#e2e8f0"
                    stroke-width="1"
                  />
                  <text
                    :x="col.x + 8"
                    :y="32"
                    class="text-[12px] font-black fill-slate-900 pointer-events-none"
                  >
                    {{ col.label }}
                  </text>
                  <text
                    :x="col.x + 8"
                    :y="48"
                    class="text-[10px] font-medium fill-slate-500 pointer-events-none"
                  >
                    {{ col.sub }}
                  </text>
                </g>
              </g>

              <!-- Sticky Lane Labels (Left) -->
              <g
                class="lane-labels"
                :transform="`translate(${Math.max(0, (8 - canvasView.x) / canvasView.k)}, 0)`"
              >
                <rect
                  :x="0"
                  :y="0"
                  :width="GEO.laneLabelW - 10"
                  :height="M.canvas.height"
                  fill="#ffffff"
                  fill-opacity="0.96"
                  stroke="#e2e8f0"
                  stroke-width="1"
                />
                <g v-for="lane in M.lanes" :key="`canvas-lane-${lane.id}`">
                  <rect
                    :x="6"
                    :y="lane.y + 6"
                    :width="GEO.laneLabelW - 24"
                    :height="lane.h - 12"
                    rx="8"
                    fill="#ffffff"
                    stroke="#e2e8f0"
                    stroke-width="1"
                  />
                  <rect
                    :x="6"
                    :y="lane.y + 6"
                    :width="4"
                    :height="lane.h - 12"
                    rx="2"
                    :fill="lane.color"
                  />
                  <text
                    :x="18"
                    :y="lane.y + 28"
                    class="text-[12px] font-black pointer-events-none"
                    :fill="lane.color"
                  >
                    {{ lane.label }}
                  </text>
                  <text
                    :x="18"
                    :y="lane.y + 44"
                    class="text-[9.5px] font-medium fill-slate-500 pointer-events-none"
                  >
                    {{ lane.sub.slice(0, 24) }}
                  </text>
                </g>
              </g>
            </g>
          </svg>

          <!-- Floating Zoom Bar on Canvas -->
          <div
            class="absolute right-4 bottom-4 flex items-center gap-1 bg-white/95 backdrop-blur-md border border-border p-1 rounded-lg shadow-card z-10"
          >
            <button
              type="button"
              class="w-8 h-8 rounded hover:bg-secondary flex items-center justify-center font-bold text-sm text-foreground transition-colors"
              title="Thu nhỏ"
              @click="zoomCanvas(0.8)"
            >
              −
            </button>
            <button
              type="button"
              class="w-8 h-8 rounded hover:bg-secondary flex items-center justify-center font-bold text-sm text-foreground transition-colors"
              title="Phóng to"
              @click="zoomCanvas(1.25)"
            >
              +
            </button>
            <button
              type="button"
              class="w-8 h-8 rounded hover:bg-secondary flex items-center justify-center font-bold text-xs text-foreground transition-colors"
              title="Vừa màn hình"
              @click="fitCanvasAll"
            >
              Fit
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 6. SLIDE-OVER DETAIL INSPECTOR DRAWER ─────────────────────────── -->
    <Transition name="sf-drawer">
      <div
        v-if="isDrawerOpen && activeNode"
        class="fixed inset-y-0 right-0 w-full sm:w-[440px] bg-white border-l border-border shadow-modal z-50 flex flex-col"
      >
        <!-- Drawer Header -->
        <div
          class="p-4 border-b border-border flex items-center justify-between bg-secondary/30"
        >
          <div class="flex items-center gap-2">
            <span
              class="w-3 h-3 rounded-full shrink-0"
              :style="{ background: laneById.get(activeNode.lane)?.color }"
            />
            <span
              class="text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              {{ laneById.get(activeNode.lane)?.label }}
            </span>
          </div>
          <button
            type="button"
            class="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            @click="closeDrawer"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Drawer Body Content -->
        <div class="flex-1 overflow-y-auto p-5 space-y-5">
          <!-- Title & Badges -->
          <div class="space-y-2">
            <div class="flex flex-wrap gap-1.5">
              <span
                class="px-2 py-0.5 rounded text-[10px] font-bold bg-secondary text-foreground"
              >
                {{ M.columns[activeNode.col]?.label }}
              </span>
              <span
                class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700"
              >
                {{ typeById.get(activeNode.type)?.label }}
              </span>
              <span
                class="px-2 py-0.5 rounded text-[10px] font-bold text-white"
                :style="{ background: stateById.get(activeNode.state)?.color }"
              >
                {{ stateById.get(activeNode.state)?.label }}
              </span>
            </div>

            <h3 class="text-lg font-black text-foreground tracking-tight m-0">
              {{ activeNode.label }}
            </h3>

            <div
              v-if="activeNode.ref"
              class="text-xs font-mono font-bold text-primary bg-brand-soft/60 px-2.5 py-1 rounded border border-brand/15 inline-block"
            >
              {{ activeNode.ref }}
            </div>
          </div>

          <!-- Business Explanation & Rule -->
          <div
            v-if="activeNode.tip"
            class="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-1.5"
          >
            <div
              class="font-black text-[11px] uppercase tracking-wider text-amber-900 flex items-center gap-1.5"
            >
              <span>📋 Quy Tắc Nghiệp Vụ &amp; Máy Chủ:</span>
            </div>
            <p class="text-xs leading-relaxed m-0 font-normal">
              {{ activeNode.tip }}
            </p>
          </div>

          <!-- Outgoing Connections (Bước tiếp theo) -->
          <div class="space-y-2">
            <div
              class="text-[11px] font-black uppercase tracking-wider text-muted-foreground"
            >
              Bước Kế Tiếp / Cấp Dữ Liệu Cho:
            </div>
            <div
              v-for="(e, oIdx) in G.edges.filter(
                (e) => e.from === activeNode?.id,
              )"
              :key="`out-${oIdx}`"
              class="p-2.5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary cursor-pointer text-xs flex items-center justify-between transition-colors"
              @click="inspectNode(e.to)"
            >
              <div>
                <div class="font-extrabold text-foreground">
                  {{ nodeById.get(e.to)?.label }}
                </div>
                <div class="text-[10px] text-muted-foreground">
                  {{ M.columns[nodeById.get(e.to)?.col || 0]?.label }}
                </div>
              </div>
              <span
                class="text-[10px] font-bold text-primary px-2 py-0.5 rounded bg-brand-soft"
              >
                {{ kindById.get(e.kind)?.label }}
              </span>
            </div>
            <div
              v-if="
                G.edges.filter((e) => e.from === activeNode?.id).length === 0
              "
              class="text-xs text-muted-foreground italic"
            >
              Điểm kết thúc quy trình
            </div>
          </div>

          <!-- Incoming Connections (Nhận từ) -->
          <div class="space-y-2">
            <div
              class="text-[11px] font-black uppercase tracking-wider text-muted-foreground"
            >
              Nhận Dữ Liệu Từ:
            </div>
            <div
              v-for="(e, iIdx) in G.edges.filter(
                (e) => e.to === activeNode?.id,
              )"
              :key="`in-${iIdx}`"
              class="p-2.5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary cursor-pointer text-xs flex items-center justify-between transition-colors"
              @click="inspectNode(e.from)"
            >
              <div>
                <div class="font-extrabold text-foreground">
                  {{ nodeById.get(e.from)?.label }}
                </div>
                <div class="text-[10px] text-muted-foreground">
                  {{ M.columns[nodeById.get(e.from)?.col || 0]?.label }}
                </div>
              </div>
              <span
                class="text-[10px] font-bold text-muted-foreground px-2 py-0.5 rounded bg-slate-100"
              >
                {{ kindById.get(e.kind)?.label }}
              </span>
            </div>
          </div>

          <!-- Flows Containing This Node -->
          <div class="space-y-2">
            <div
              class="text-[11px] font-black uppercase tracking-wider text-muted-foreground"
            >
              Xuất Hiện Trong Các Luồng:
            </div>
            <div
              v-for="fl in G.flows.filter((f) =>
                f.steps.some((s) => s.node === activeNode?.id),
              )"
              :key="`f-inc-${fl.id}`"
              class="p-2.5 rounded-lg border border-border hover:border-primary/40 cursor-pointer text-xs flex items-center justify-between transition-colors"
              @click="setFlow(fl.id)"
            >
              <span class="font-bold text-primary">{{ fl.name }}</span>
              <span class="text-[10px] text-muted-foreground font-mono"
                >Xem luồng →</span
              >
            </div>
          </div>
        </div>

        <!-- Drawer Footer -->
        <div
          class="p-4 border-t border-border bg-secondary/30 flex justify-end gap-2"
        >
          <button
            type="button"
            class="px-4 py-2 rounded text-xs font-bold text-muted-foreground hover:text-foreground"
            @click="closeDrawer"
          >
            Đóng
          </button>
          <SfButton
            variant="primary"
            size="sm"
            @click="openModal('Tư vấn chức năng: ' + activeNode.label)"
          >
            Yêu cầu Demo ô này
          </SfButton>
        </div>
      </div>
    </Transition>

    <!-- ─── 7. FLOATING TOOLTIP (CANVAS MODE) ──────────────────────────────── -->
    <div
      v-if="tooltip.show && tooltip.node"
      class="fixed z-50 pointer-events-none bg-white border border-slate-300 rounded-xl shadow-modal p-3.5 max-w-sm text-xs space-y-1.5 transition-opacity duration-150"
      :style="{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }"
    >
      <div class="flex items-center gap-2">
        <span
          class="w-2.5 h-2.5 rounded-full"
          :style="{ background: laneById.get(tooltip.node.lane)?.color }"
        />
        <span class="font-black text-foreground">{{ tooltip.node.label }}</span>
      </div>
      <div class="text-[10px] text-muted-foreground font-semibold">
        {{ M.columns[tooltip.node.col]?.label }} ·
        {{ laneById.get(tooltip.node.lane)?.label }} ·
        {{ tooltip.node.ref || "" }}
      </div>
      <p
        v-if="tooltip.node.tip"
        class="text-[11px] text-slate-700 leading-relaxed m-0 border-t border-border pt-1 font-normal"
      >
        {{ tooltip.node.tip }}
      </p>
    </div>

    <!-- ─── 8. BOTTOM CONTACT CTA BLADE ────────────────────────────────────── -->
    <SfContactPillars />
  </div>
</template>

<style scoped>
/* Slide-over Drawer Transition */
.sf-drawer-enter-active,
.sf-drawer-leave-active {
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.25s ease;
}
.sf-drawer-enter-from,
.sf-drawer-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Popover Transition */
.sf-popover-enter-active,
.sf-popover-leave-active {
  transition: opacity 0.15s ease, transform 0.15s cubic-bezier(0.16, 1, 0.3, 1);
}
.sf-popover-enter-from,
.sf-popover-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}
</style>
