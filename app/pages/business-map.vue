<script setup lang="ts">
import {
  VueFlow,
  useVueFlow,
  MarkerType,
  type Node,
  type Edge,
} from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";

import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";
import "@vue-flow/controls/dist/style.css";
import "@vue-flow/minimap/dist/style.css";

import SfButton from "~/components/ui/SfButton.vue";
import SfContactPillars from "~/components/blades/SfContactPillars.vue";
import BusinessMapNode from "~/components/business-map/BusinessMapNode.vue";
import LaneBackgroundNode from "~/components/business-map/LaneBackgroundNode.vue";
import StageHeaderNode from "~/components/business-map/StageHeaderNode.vue";
import LaneLabelNode from "~/components/business-map/LaneLabelNode.vue";
import { useDemoModal } from "~/composables/useDemoModal";
import rawData from "~/data/business-map.json";

definePageMeta({
  alias: ["/ban-do-nghiep-vu", "/crm/ban-do-nghiep-vu"],
});

useSeoMeta({
  title: "Bản Đồ Nghiệp Vụ Đấu Thầu 5 Làn | Bidly Preconstruction CRM",
  description:
    "Bản đồ trực quan luồng nghiệp vụ 5 làn × 9 giai đoạn: phân định trách nhiệm liên phòng ban (BD, Đấu thầu, Ban điều hành, Hệ thống, Nền tảng), 5 cổng cứng máy chủ và 10 luồng xử lý chuyên sâu với Vue Flow tương tác cao cấp.",
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

// ─── 3 CRISP FLOW GROUPS ─────────────────────────────────────────────────────
const FLOW_CATEGORY_GROUPS = [
  {
    id: "core-lifecycle",
    title: "Vòng Đời Thầu & Quy Trình",
    desc: "Tiến trình chuẩn từ tín hiệu đầu tiên đến khi bàn giao thi công",
    flowIds: ["f-lifecycle", "f-tender", "f-rebid"],
  },
  {
    id: "server-gates",
    title: "5 Cổng Cứng Kiểm Soát Máy Chủ",
    desc: "Chốt chặn bất biến kiểm soát dữ liệu, tính điểm và nộp hồ sơ",
    flowIds: ["f-gates", "f-gonogo", "f-final", "f-result"],
  },
  {
    id: "platform-trace",
    title: "Hệ Thống, Dấu Vết & Nền Tảng",
    desc: "Khoá version, phân quyền 5 vai, số liệu tự tính và dấu vết kiểm toán",
    flowIds: ["f-trace", "f-tower", "f-perm", "f-gap"],
  },
];

// ─── REACTIVE STATE ──────────────────────────────────────────────────────────
const activeFlowId = ref<string | null>("f-lifecycle");
const currentStepIndex = ref<number>(0);
const activeNodeId = ref<string | null>(null);
const activeLaneFilter = ref<string>("all");
const searchQuery = ref<string>("");
const isDrawerOpen = ref<boolean>(false);
const isFlowDropdownOpen = ref<boolean>(false);
const isLaneDropdownOpen = ref<boolean>(false);
const isCopiedRef = ref<boolean>(false);

// Auto-play tour state
const isAutoPlaying = ref<boolean>(false);
let autoPlayTimer: ReturnType<typeof setInterval> | null = null;
const autoPlayProgress = ref<number>(0);
let progressTimer: ReturnType<typeof setInterval> | null = null;

// Helper to safely access VueFlow instance on client
function getVueFlow() {
  if (import.meta.client) {
    try {
      return useVueFlow("bidly-business-map");
    } catch {}
  }
  return null;
}

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

// Grouped flows for the popover
const structuredFlowGroups = computed(() => {
  return FLOW_CATEGORY_GROUPS.map((group) => {
    const items = group.flowIds
      .map((fid) => G.flows.find((f) => f.id === fid))
      .filter((f): f is FlowItem => !!f);
    return {
      ...group,
      items,
    };
  });
});

// ─── SEARCH & FILTER COMPUTED ────────────────────────────────────────────────
const matchedSearchNodes = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return [];
  return G.nodes.filter((n) => {
    const lane = laneById.get(n.lane);
    const col = M.columns[n.col];
    const state = stateById.get(n.state);
    const type = typeById.get(n.type);
    const target = [
      n.label,
      n.ref || "",
      n.tip || "",
      lane?.label || "",
      lane?.sub || "",
      col?.label || "",
      col?.id || "",
      col?.sub || "",
      state?.label || "",
      type?.label || "",
    ]
      .join(" ")
      .toLowerCase();
    return target.includes(q);
  });
});

const highlightedNodeIds = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();

  // 1. Search Query active
  if (q) {
    return new Set(matchedSearchNodes.value.map((n) => n.id));
  }

  // 2. Active Flow highlighted steps
  if (activeFlow.value) {
    return new Set(activeFlow.value.steps.map((s) => s.node));
  }

  return null;
});

// ─── ACTIVE NODE RELATIONSHIPS FOR DRAWER ────────────────────────────────────
const activeNodeIncomingEdges = computed(() => {
  if (!activeNode.value) return [];
  return G.edges.filter((e) => e.to === activeNode.value?.id);
});

const activeNodeOutgoingEdges = computed(() => {
  if (!activeNode.value) return [];
  return G.edges.filter((e) => e.from === activeNode.value?.id);
});

const activeNodeInvolvedFlows = computed(() => {
  if (!activeNode.value) return [];
  return G.flows.filter((f) => f.steps.some((s) => s.node === activeNode.value?.id));
});

// Helper for exact handle pairing (Left/Right/Top/Bottom source & target)
function getEdgeHandles(fromNode: NodeItem, toNode: NodeItem) {
  // 1. Backward / Loopback flow (from right to left)
  if (toNode.x < fromNode.x - 30) {
    return {
      sourceHandle: "left-source",
      targetHandle: "right-target",
    };
  }
  // 2. Same column / Vertical step within the same stage
  if (Math.abs(toNode.x - fromNode.x) < 40) {
    if (toNode.y > fromNode.y) {
      return {
        sourceHandle: "bottom-source",
        targetHandle: "top-target",
      };
    } else {
      return {
        sourceHandle: "top-source",
        targetHandle: "bottom-target",
      };
    }
  }
  // 3. Standard forward progression (left to right)
  return {
    sourceHandle: "right-source",
    targetHandle: "left-target",
  };
}

// ─── UNIFIED VUE FLOW NODES ──────────────────────────────────────────────────
const flowNodes = computed<Node[]>(() => {
  const nodes: Node[] = [];

  // 1. Lane Background Bands (5 horizontal department lanes)
  M.lanes.forEach((lane, idx) => {
    nodes.push({
      id: `lane-bg-${lane.id}`,
      type: "laneBackground",
      position: { x: 0, y: lane.y },
      selectable: false,
      draggable: false,
      zIndex: -20,
      data: {
        ...lane,
        canvasWidth: M.canvas.width,
        isAlt: idx % 2 === 1,
      },
    });
  });

  // 2. Stage Column Headers (9 vertical stage divisions S0-S8)
  M.columns.forEach((col) => {
    nodes.push({
      id: `stage-header-${col.id}`,
      type: "stageHeader",
      position: { x: col.x - 12, y: 10 },
      selectable: false,
      draggable: false,
      zIndex: -10,
      data: {
        ...col,
        canvasHeight: M.canvas.height,
        headerH: GEO.headerH,
      },
    });
  });

  // 3. Lane Department Labels (5 sticky department cards on the left)
  M.lanes.forEach((lane) => {
    nodes.push({
      id: `lane-label-${lane.id}`,
      type: "laneLabel",
      position: { x: 12, y: lane.y + 12 },
      selectable: false,
      draggable: false,
      zIndex: 5,
      data: {
        ...lane,
        w: GEO.laneLabelW - 32,
        h: lane.h - 24,
      },
    });
  });

  // 4. Business Process Task/Gate Cards
  G.nodes.forEach((n) => {
    const lane = laneById.get(n.lane);
    const col = M.columns[n.col];
    const state = stateById.get(n.state);
    const type = typeById.get(n.type);
    const stepNum = flowStepMap.value.get(n.id) || null;
    const isActive = activeStep.value?.node?.id === n.id;
    const isSelected = activeNodeId.value === n.id;
    const isHighlighted = highlightedNodeIds.value
      ? highlightedNodeIds.value.has(n.id)
      : false;
    const isDimmed = highlightedNodeIds.value
      ? !highlightedNodeIds.value.has(n.id)
      : false;

    // Filters
    let isHidden = false;
    if (activeLaneFilter.value !== "all" && n.lane !== activeLaneFilter.value) {
      isHidden = true;
    }

    nodes.push({
      id: n.id,
      type: "businessNode",
      position: { x: n.x, y: n.y },
      hidden: isHidden,
      draggable: false,
      zIndex: 10,
      data: {
        ...n,
        laneLabel: lane?.label,
        laneColor: lane?.color,
        stageLabel: col?.label,
        stateLabel: state?.label,
        stateColor: state?.color,
        typeLabel: type?.label,
        stepNumber: stepNum,
        isActiveStep: isActive,
        isSelected: isSelected,
        isHighlighted: isHighlighted,
        isDimmed: isDimmed,
      },
    });
  });

  return nodes;
});

// ─── UN-CLUTTERED EDGES GENERATION ───────────────────────────────────────────
const flowEdges = computed<Edge[]>(() => {
  const edges: Edge[] = [];
  const activeFlowSteps = activeFlow.value?.steps || [];
  const isFlowActive = !!activeFlow.value && activeFlowSteps.length > 0;

  // 1. ACTIVE FLOW DEDICATED PATH (Step 1 -> 2 -> ... -> N)
  if (isFlowActive) {
    for (let i = 0; i < activeFlowSteps.length - 1; i++) {
      const fromNodeId = activeFlowSteps[i]?.node;
      const toNodeId = activeFlowSteps[i + 1]?.node;
      if (!fromNodeId || !toNodeId) continue;

      const fromNode = nodeById.get(fromNodeId);
      const toNode = nodeById.get(toNodeId);
      if (!fromNode || !toNode) continue;

      const isCurrentActiveStep = currentStepIndex.value === i;
      const isPastStep = currentStepIndex.value > i;

      const { sourceHandle, targetHandle } = getEdgeHandles(fromNode, toNode);

      edges.push({
        id: `flow-step-edge-${i}-${fromNodeId}-${toNodeId}`,
        source: fromNodeId,
        target: toNodeId,
        sourceHandle,
        targetHandle,
        type: "smoothstep",
        pathOptions: {
          borderRadius: 14,
          offset: 12,
        },
        animated: isCurrentActiveStep || isAutoPlaying.value,
        zIndex: isCurrentActiveStep ? 35 : 25,
        style: {
          stroke: isCurrentActiveStep
            ? "#0176d3"
            : isPastStep
              ? "#0284c7"
              : "#94a3b8",
          strokeWidth: isCurrentActiveStep ? 3.2 : 2.2,
          strokeDasharray: isPastStep || isCurrentActiveStep ? undefined : "5 4",
          opacity: 1,
          transition: "all 0.25s ease",
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isCurrentActiveStep
            ? "#0176d3"
            : isPastStep
              ? "#0284c7"
              : "#94a3b8",
          width: isCurrentActiveStep ? 14 : 11,
          height: isCurrentActiveStep ? 14 : 11,
        },
        label: `${i + 1} → ${i + 2}`,
        labelStyle: {
          fill: isCurrentActiveStep ? "#0176d3" : "#0f172a",
          fontWeight: 800,
          fontSize: "10px",
          fontFamily: "ui-monospace, monospace, sans-serif",
        },
        labelBgStyle: {
          fill: "#ffffff",
          fillOpacity: 1,
          stroke: isCurrentActiveStep ? "#0176d3" : "#cbd5e1",
          strokeWidth: isCurrentActiveStep ? 1.5 : 1,
        },
        labelBgPadding: [6, 2.5],
        labelBgBorderRadius: 6,
      });
    }
  }

  // 2. BACKGROUND / OVERVIEW EDGES
  G.edges.forEach((e, idx) => {
    const isNodeActive =
      activeNodeId.value === e.from || activeNodeId.value === e.to;

    // In active flow mode, ignore non-flow edges unless user clicked a specific node
    if (isFlowActive && !isNodeActive) {
      return;
    }

    const kind = kindById.get(e.kind);
    const strokeColor = isNodeActive
      ? kind?.color || "#0176d3"
      : kind?.color || "#cbd5e1";

    const fromNode = nodeById.get(e.from);
    const toNode = nodeById.get(e.to);
    let sourceHandle = "right-source";
    let targetHandle = "left-target";

    if (fromNode && toNode) {
      const handles = getEdgeHandles(fromNode, toNode);
      sourceHandle = handles.sourceHandle;
      targetHandle = handles.targetHandle;
    }

    edges.push({
      id: `bg-edge-${e.from}-${e.to}-${idx}`,
      source: e.from,
      target: e.to,
      sourceHandle,
      targetHandle,
      type: "smoothstep",
      pathOptions: {
        borderRadius: 12,
        offset: 8,
      },
      animated: isNodeActive,
      zIndex: isNodeActive ? 20 : 1,
      style: {
        stroke: strokeColor,
        strokeWidth: isNodeActive ? 2.4 : 1.4,
        strokeDasharray: kind?.dash || undefined,
        opacity: isNodeActive ? 0.9 : 0.32,
        transition: "all 0.2s ease",
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: strokeColor,
        width: isNodeActive ? 12 : 9,
        height: isNodeActive ? 12 : 9,
      },
      label: isNodeActive ? e.label || kind?.label : undefined,
      labelStyle: { fill: "#334155", fontWeight: 700, fontSize: "9.5px" },
      labelBgStyle: { fill: "#ffffff", fillOpacity: 0.95, stroke: "#cbd5e1", strokeWidth: 1 },
      labelBgPadding: [5, 2],
      labelBgBorderRadius: 4,
    });
  });

  return edges;
});

// ─── ACTION HANDLERS & CAMERA CONTROLLERS ────────────────────────────────────
function centerOnNode(nodeId: string) {
  const node = nodeById.get(nodeId);
  if (!node) return;
  const flow = getVueFlow();
  if (flow) {
    const cx = node.x + node.w / 2;
    const cy = node.y + node.h / 2;
    flow.setCenter(cx, cy, { zoom: 0.84, duration: 420 });
  }
}

function setFlow(flowId: string | null) {
  stopAutoPlay();
  if (!flowId || activeFlowId.value === flowId) {
    activeFlowId.value = null;
    currentStepIndex.value = 0;
  } else {
    activeFlowId.value = flowId;
    currentStepIndex.value = 0;
    const targetFlow = G.flows.find((f) => f.id === flowId);
    if (targetFlow && targetFlow.steps.length > 0 && targetFlow.steps[0]) {
      activeNodeId.value = targetFlow.steps[0].node;
      nextTick(() => {
        centerOnNode(targetFlow.steps[0]!.node);
      });
    }
  }
}

function setFlowAndJumpToNode(flowId: string, nodeId: string) {
  stopAutoPlay();
  activeFlowId.value = flowId;
  const targetFlow = G.flows.find((f) => f.id === flowId);
  if (targetFlow) {
    const stepIdx = targetFlow.steps.findIndex((s) => s.node === nodeId);
    currentStepIndex.value = stepIdx !== -1 ? stepIdx : 0;
    activeNodeId.value = nodeId;
    nextTick(() => {
      centerOnNode(nodeId);
    });
  }
}

function resetAutoPlayInterval() {
  if (!isAutoPlaying.value) return;
  autoPlayProgress.value = 0;
  if (autoPlayTimer) clearInterval(autoPlayTimer);
  autoPlayTimer = setInterval(() => {
    if (!isAutoPlaying.value || !activeFlow.value) {
      stopAutoPlay();
      return;
    }
    autoPlayProgress.value = 0;
    if (currentStepIndex.value < activeFlow.value.steps.length - 1) {
      nextStep();
    } else {
      jumpToStep(0);
    }
  }, 3600);
}

function nextStep() {
  if (!activeFlow.value) return;
  if (currentStepIndex.value < activeFlow.value.steps.length - 1) {
    currentStepIndex.value++;
    const nextS = activeFlow.value.steps[currentStepIndex.value];
    if (nextS) {
      activeNodeId.value = nextS.node;
      centerOnNode(nextS.node);
    }
    resetAutoPlayInterval();
  }
}

function prevStep() {
  if (!activeFlow.value) return;
  if (currentStepIndex.value > 0) {
    currentStepIndex.value--;
    const prevS = activeFlow.value.steps[currentStepIndex.value];
    if (prevS) {
      activeNodeId.value = prevS.node;
      centerOnNode(prevS.node);
    }
    resetAutoPlayInterval();
  }
}

function jumpToStep(idx: number) {
  if (!activeFlow.value) return;
  currentStepIndex.value = idx;
  const targetS = activeFlow.value.steps[idx];
  if (targetS) {
    activeNodeId.value = targetS.node;
    centerOnNode(targetS.node);
  }
  resetAutoPlayInterval();
}

function inspectNode(nodeId: string) {
  activeNodeId.value = nodeId;
  isDrawerOpen.value = true;
  centerOnNode(nodeId);
  if (activeFlow.value) {
    const stepIdx = activeFlow.value.steps.findIndex((s) => s.node === nodeId);
    if (stepIdx !== -1) {
      currentStepIndex.value = stepIdx;
      resetAutoPlayInterval();
    }
  }
}

function closeDrawer() {
  isDrawerOpen.value = false;
}

function resetAllFilters() {
  stopAutoPlay();
  activeLaneFilter.value = "all";
  searchQuery.value = "";
  activeFlowId.value = "f-lifecycle";
  currentStepIndex.value = 0;
  activeNodeId.value = null;
  fitAll();
}

function fitAll() {
  const flow = getVueFlow();
  if (flow) {
    flow.fitView({
      duration: 400,
      padding: 0.04,
      minZoom: 0.28,
      maxZoom: 1.2,
    });
  }
}

function copyReferenceCode(code?: string) {
  if (!code || typeof navigator === "undefined") return;
  navigator.clipboard.writeText(code);
  isCopiedRef.value = true;
  setTimeout(() => {
    isCopiedRef.value = false;
  }, 1800);
}

// ─── AUTO-PLAY TOUR CONTROLLER ───────────────────────────────────────────────
function toggleAutoPlay() {
  if (isAutoPlaying.value) {
    stopAutoPlay();
  } else {
    startAutoPlay();
  }
}

function startAutoPlay() {
  if (!activeFlow.value) {
    setFlow("f-lifecycle");
  }
  isAutoPlaying.value = true;
  autoPlayProgress.value = 0;

  // Progress ticker
  if (progressTimer) clearInterval(progressTimer);
  progressTimer = setInterval(() => {
    if (!isAutoPlaying.value) return;
    autoPlayProgress.value = Math.min(100, autoPlayProgress.value + 100 / 36);
  }, 100);

  // Step interval (3.6s per step)
  if (autoPlayTimer) clearInterval(autoPlayTimer);
  autoPlayTimer = setInterval(() => {
    if (!isAutoPlaying.value || !activeFlow.value) {
      stopAutoPlay();
      return;
    }
    autoPlayProgress.value = 0;
    if (currentStepIndex.value < activeFlow.value.steps.length - 1) {
      nextStep();
    } else {
      jumpToStep(0);
    }
  }, 3600);
}

function stopAutoPlay() {
  isAutoPlaying.value = false;
  autoPlayProgress.value = 0;
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
  if (progressTimer) {
    clearInterval(progressTimer);
    progressTimer = null;
  }
}

// ─── KEYBOARD SHORTCUTS ──────────────────────────────────────────────────────
function onKeydown(ev: KeyboardEvent) {
  if (ev.key === "Escape") {
    closeDrawer();
    stopAutoPlay();
    isFlowDropdownOpen.value = false;
    isLaneDropdownOpen.value = false;
  }
  if (ev.key === "ArrowRight" && activeFlow.value) {
    nextStep();
  }
  if (ev.key === "ArrowLeft" && activeFlow.value) {
    prevStep();
  }
  if (
    ev.key === " " &&
    activeFlow.value &&
    document.activeElement?.tagName !== "INPUT"
  ) {
    ev.preventDefault();
    toggleAutoPlay();
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

let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
  document.addEventListener("click", onDocumentClick);

  // Default initial state: Fit cleanly to frame on page load
  nextTick(() => {
    setTimeout(fitAll, 80);
    setTimeout(fitAll, 260);
  });

  // Watch container resize for dynamic responsive fitting
  if (typeof window !== "undefined" && typeof ResizeObserver !== "undefined") {
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    resizeObserver = new ResizeObserver(() => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        fitAll();
      }, 150);
    });
    const container = document.getElementById("bidly-business-map");
    if (container) {
      resizeObserver.observe(container);
    }
  }
});

onUnmounted(() => {
  stopAutoPlay();
  window.removeEventListener("keydown", onKeydown);
  document.removeEventListener("click", onDocumentClick);
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
});
</script>

<template>
  <div class="space-y-0 text-foreground bg-[#f8fafc]">
    <!-- ─── 1. HERO HEADER ──────────────────────────────────────────────── -->
    <section
      class="relative pt-12 pb-14 md:pt-16 md:pb-16 overflow-hidden bg-white sf-section-border"
    >
      <div class="sf-container relative z-10 text-center max-w-4xl mx-auto space-y-5">
        <div>
          <span class="sf-eyebrow">
            KIẾN TRÚC NGHIỆP VỤ ĐẤU THẦU · 5 LÀN × 9 GIAI ĐOẠN
          </span>
        </div>

        <h1
          class="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-tight leading-[1.15]"
        >
          Bản Đồ Phối Hợp &amp; Luồng Dữ Liệu
          <strong class="text-primary block mt-1 font-extrabold">
            Bidly Preconstruction CRM
          </strong>
        </h1>

        <p
          class="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal text-muted-foreground"
        >
          Minh bạch <strong class="font-semibold text-foreground">trách nhiệm từng phòng ban</strong>, 5 cổng cứng kiểm soát máy chủ, số liệu tự động tính toán và dấu vết kiểm toán bất biến.
        </p>

        <div class="pt-1 flex flex-wrap justify-center items-center gap-3.5">
          <SfButton
            variant="primary"
            size="lg"
            @click="openModal('Đăng ký Demo Bản đồ Nghiệp vụ 5 Làn')"
          >
            <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              />
            </svg>
            Đặt lịch Demo trực tiếp
          </SfButton>
          <SfButton
            variant="secondary"
            size="lg"
            to="/gates"
          >
            Khám phá 5 Cổng Cứng
          </SfButton>
        </div>

        <!-- Trust Badges Strip -->
        <div
          class="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs font-semibold text-muted-foreground border-t border-border/70 max-w-xl mx-auto"
        >
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-primary inline-block shrink-0" />
            <span>5 Làn phân định trách nhiệm</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-600 inline-block shrink-0" />
            <span>9 Giai đoạn &amp; 10 Luồng tương tác</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-rose-600 inline-block shrink-0" />
            <span>5 Cổng cứng máy chủ</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 2. REFINED WORKFLOW COMMAND CENTER & FILTER TOOLBAR ────────────── -->
    <section class="py-2.5 sticky top-16 z-30">
      <div class="sf-container">
        <!-- Main Unified Command Card -->
        <div class="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-[0_4px_24px_-4px_rgba(3,45,96,0.08)] p-2 sm:p-2.5 space-y-2">
          
          <!-- Top Row: Workflow Selector + Interactive Stepper + Search + Filters -->
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
            
            <!-- Left Cluster: Workflow Journey Selector & Tour Stepper -->
            <div class="flex items-center gap-2 flex-1 min-w-[280px]">
              
              <!-- Workflow Selector Trigger -->
              <div id="flow-picker-container" class="relative">
                <button
                  type="button"
                  class="h-9 px-3 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer select-none group"
                  :class="[
                    activeFlow
                      ? 'bg-primary/5 text-primary border-primary/30 hover:bg-primary/10 shadow-2xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  ]"
                  @click.stop="isFlowDropdownOpen = !isFlowDropdownOpen; isLaneDropdownOpen = false"
                >
                  <!-- Route / Journey Icon -->
                  <svg class="w-4 h-4 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="9" r="3" />
                    <path d="M6 9v6" />
                    <path d="M6 9c0 3 3 6 6 6h3" />
                  </svg>

                  <span class="font-bold max-w-[180px] sm:max-w-[220px] truncate text-foreground">
                    {{ activeFlow ? (activeFlow.name.split(':')[0]?.trim() || activeFlow.name) : 'Chọn luồng nghiệp vụ' }}
                  </span>

                  <span
                    v-if="activeFlow"
                    class="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-primary/10 text-primary font-bold shrink-0"
                  >
                    {{ activeFlow.steps.length }} bước
                  </span>

                  <!-- Chevron SVG Icon -->
                  <svg
                    class="w-3.5 h-3.5 text-slate-400 transition-transform duration-200"
                    :class="{ 'rotate-180 text-primary': isFlowDropdownOpen }"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <!-- Flow Popover Dropdown Menu (3 Organized Semantic Groups) -->
                <Transition name="sf-popover">
                  <div
                    v-if="isFlowDropdownOpen"
                    class="absolute left-0 top-full mt-2 w-80 sm:w-[440px] bg-white rounded-2xl border border-slate-200 shadow-modal z-50 p-2 max-h-[460px] overflow-y-auto space-y-3.5"
                  >
                    <!-- Dropdown Header -->
                    <div class="flex items-center justify-between px-3 pt-2 pb-1.5 border-b border-slate-100">
                      <div class="flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-primary" />
                        <span class="text-[11px] font-extrabold uppercase tracking-wider text-[#032D60]">10 Luồng Nghiệp Vụ Chuyên Sâu</span>
                      </div>
                      <button
                        v-if="activeFlowId"
                        type="button"
                        class="text-[11px] font-semibold text-slate-500 hover:text-primary transition-colors cursor-pointer"
                        @click="setFlow(null); isFlowDropdownOpen = false"
                      >
                        Tắt chọn luồng
                      </button>
                    </div>

                    <!-- 3 Organized Categories -->
                    <div v-for="cat in structuredFlowGroups" :key="cat.id" class="space-y-1.5">
                      <div class="px-3 pt-0.5 flex items-center justify-between">
                        <div class="text-[10.5px] font-extrabold uppercase tracking-wider text-slate-400">
                          {{ cat.title }}
                        </div>
                      </div>

                      <div
                        v-for="fl in cat.items"
                        :key="fl.id"
                        class="p-2.5 rounded-xl cursor-pointer transition-all flex items-start gap-2.5 hover:bg-slate-50 group border border-transparent"
                        :class="activeFlowId === fl.id ? 'bg-primary/5 border-primary/25 text-primary' : 'text-slate-700'"
                        @click="setFlow(fl.id); isFlowDropdownOpen = false"
                      >
                        <!-- Sequence Number Badge -->
                        <span
                          class="w-5 h-5 rounded-md flex items-center justify-center font-mono font-bold text-[10px] shrink-0 transition-colors mt-0.5"
                          :class="activeFlowId === fl.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'"
                        >
                          {{ String(G.flows.findIndex(f => f.id === fl.id) + 1).padStart(2, '0') }}
                        </span>

                        <!-- Flow Info -->
                        <div class="flex-1 min-w-0">
                          <div class="font-bold text-xs leading-tight text-foreground group-hover:text-primary transition-colors">
                            {{ fl.name }}
                          </div>
                          <div class="text-[10.5px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                            {{ fl.summary }}
                          </div>
                        </div>

                        <!-- Step count badge -->
                        <span class="text-[10px] font-mono text-slate-500 font-bold shrink-0 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                          {{ fl.steps.length }} bước
                        </span>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>

              <!-- Interactive Stepper Navigator & Auto-Tour Player -->
              <div v-if="activeFlow && activeStep" class="flex items-center gap-1 bg-slate-100/90 border border-slate-200/80 rounded-xl p-1 shadow-2xs">
                <!-- Previous Step Button -->
                <button
                  type="button"
                  :disabled="activeStep.index === 0"
                  class="w-7 h-7 rounded-lg flex items-center justify-center text-slate-700 hover:bg-white hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs disabled:shadow-none"
                  title="Bước trước (Phím ←)"
                  @click="prevStep"
                >
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <!-- Step Counter Display -->
                <span class="text-[11px] font-mono font-bold text-primary px-2 min-w-[50px] text-center select-none tabular">
                  {{ String(activeStep.index + 1).padStart(2, '0') }} / {{ String(activeStep.total).padStart(2, '0') }}
                </span>

                <!-- Next Step Button -->
                <button
                  type="button"
                  :disabled="activeStep.index === activeStep.total - 1"
                  class="w-7 h-7 rounded-lg flex items-center justify-center text-slate-700 hover:bg-white hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs disabled:shadow-none"
                  title="Bước tiếp (Phím →)"
                  @click="nextStep"
                >
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>

                <!-- Auto-Tour Toggle Button -->
                <button
                  type="button"
                  class="h-7 px-2.5 rounded-lg flex items-center gap-1.5 font-bold text-[11px] transition-all cursor-pointer border ml-0.5"
                  :class="[
                    isAutoPlaying
                      ? 'bg-primary text-white border-primary shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:text-primary hover:bg-slate-50'
                  ]"
                  :title="isAutoPlaying ? 'Tạm dừng trình chiếu (Phím Space)' : 'Tự động chạy qua các bước (Phím Space)'"
                  @click="toggleAutoPlay"
                >
                  <svg v-if="!isAutoPlaying" class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <svg v-else class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                  <span class="hidden sm:inline">{{ isAutoPlaying ? 'Tạm dừng' : 'Tự chạy' }}</span>
                </button>
              </div>
            </div>

            <!-- Right Cluster: Search, Lane Filter & Reset -->
            <div class="flex items-center gap-2 ml-auto">
              <!-- Search Box -->
              <div class="relative w-36 sm:w-48">
                <svg class="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  id="business-map-search"
                  v-model="searchQuery"
                  type="search"
                  placeholder="Tìm kiếm ô..."
                  class="w-full h-9 pl-8 pr-7 text-xs rounded-xl border border-slate-200 bg-slate-50 text-foreground focus:outline-none focus:border-primary focus:bg-white transition-all shadow-2xs font-medium"
                />
                <button
                  v-if="searchQuery"
                  type="button"
                  class="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 flex items-center justify-center cursor-pointer transition-colors"
                  @click="searchQuery = ''"
                >
                  <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
                <span
                  v-else
                  class="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 border border-slate-200 rounded px-1 py-0.2 select-none pointer-events-none hidden sm:inline"
                >
                  /
                </span>
              </div>

              <!-- Lane Filter Menu -->
              <div id="lane-filter-container" class="relative hidden md:block">
                <button
                  type="button"
                  class="h-9 px-3 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  @click.stop="isLaneDropdownOpen = !isLaneDropdownOpen; isFlowDropdownOpen = false"
                >
                  <span
                    v-if="activeLaneFilter !== 'all'"
                    class="w-2 h-2 rounded-full shrink-0"
                    :style="{ background: laneById.get(activeLaneFilter)?.color }"
                  />
                  <span>{{ activeLaneFilter === 'all' ? '5 Làn' : laneById.get(activeLaneFilter)?.label.split(' ')[0] }}</span>
                  <svg class="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <!-- Lane Popover Dropdown -->
                <Transition name="sf-popover">
                  <div
                    v-if="isLaneDropdownOpen"
                    class="absolute right-0 top-full mt-2 w-60 bg-white rounded-2xl border border-slate-200 shadow-modal z-50 p-1.5 space-y-0.5"
                  >
                    <div
                      class="px-3 py-2 rounded-xl cursor-pointer text-xs font-bold flex items-center justify-between hover:bg-slate-50 transition-colors"
                      :class="activeLaneFilter === 'all' ? 'text-primary bg-primary/5' : 'text-slate-700'"
                      @click="activeLaneFilter = 'all'; isLaneDropdownOpen = false"
                    >
                      <span>Tất cả 5 Làn</span>
                      <svg v-if="activeLaneFilter === 'all'" class="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div
                      v-for="lane in M.lanes"
                      :key="lane.id"
                      class="px-3 py-2 rounded-xl cursor-pointer text-xs font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors"
                      :class="activeLaneFilter === lane.id ? 'text-primary bg-primary/5' : 'text-slate-700'"
                      @click="activeLaneFilter = lane.id; isLaneDropdownOpen = false"
                    >
                      <span class="w-2.5 h-2.5 rounded-full shrink-0" :style="{ background: lane.color }" />
                      <span class="flex-1 truncate">{{ lane.label }}</span>
                      <svg v-if="activeLaneFilter === lane.id" class="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                </Transition>
              </div>

              <!-- Reset Filters Button -->
              <button
                type="button"
                class="w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors shrink-0 cursor-pointer shadow-2xs"
                title="Đặt lại tất cả bộ lọc & căn chỉnh"
                @click="resetAllFilters"
              >
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M8 16H3v5" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Bottom Row: Step Context Telemetry Banner (Active Walkthrough Mode) -->
          <div
            v-if="activeFlow && activeStep"
            class="relative px-3.5 py-2.5 rounded-xl bg-slate-50/90 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-2.5 text-xs transition-all overflow-hidden"
          >
            <!-- Auto-play animated progress line -->
            <div
              v-if="isAutoPlaying"
              class="absolute left-0 top-0 h-0.5 bg-primary transition-all duration-100 ease-linear pointer-events-none"
              :style="{ width: `${autoPlayProgress}%` }"
            />

            <!-- Step Breadcrumb Narrative -->
            <div class="flex items-center gap-2 min-w-0 overflow-hidden relative z-10">
              <span class="px-2 py-0.5 rounded-md bg-primary text-white font-mono font-bold text-[10px] shrink-0 shadow-2xs">
                BƯỚC {{ String(activeStep.index + 1).padStart(2, '0') }}/{{ String(activeStep.total).padStart(2, '0') }}
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

              <span v-if="activeStep?.step" class="text-slate-600 font-normal truncate hidden lg:inline border-l border-slate-200 pl-2">
                {{ activeStep.step.note }}
              </span>
            </div>

            <!-- Inspect Node Trigger Button -->
            <button
              v-if="activeStep?.node"
              type="button"
              class="text-[11px] font-bold text-primary hover:text-primary-hover hover:underline shrink-0 flex items-center gap-1 cursor-pointer self-end md:self-auto relative z-10"
              @click="inspectNode(activeStep.node.id)"
            >
              <span>Xem chi tiết ô</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <!-- Search Match Telemetry if query is active -->
          <div
            v-else-if="searchQuery"
            class="px-3.5 py-1.5 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-between text-xs text-primary font-bold"
          >
            <span>Tìm thấy {{ matchedSearchNodes.length }} ô phù hợp với từ khóa "{{ searchQuery }}"</span>
            <button
              type="button"
              class="text-xs hover:underline cursor-pointer font-semibold"
              @click="searchQuery = ''"
            >
              Xóa tìm kiếm
            </button>
          </div>

        </div>
      </div>
    </section>

    <!-- ─── 3. VUE FLOW INTERACTIVE CANVAS ──────────────────────────────── -->
    <section class="py-3 bg-white sf-section-border">
      <div class="sf-container">
        <div
          class="relative rounded-2xl border border-slate-200/90 shadow-card overflow-hidden bg-[#fcfdfe]"
          style="height: calc(100vh - 165px); min-height: 640px"
        >
          <!-- Vue Flow Canvas -->
          <ClientOnly>
            <VueFlow
              id="bidly-business-map"
              :nodes="flowNodes"
              :edges="flowEdges"
              :min-zoom="0.28"
              :max-zoom="2.2"
              :translate-extent="[[-300, -200], [3150, 1350]]"
              :fit-view-on-init="true"
              class="w-full h-full"
            >
              <!-- Background Layer Grid -->
              <Background
                pattern-color="#94a3b8"
                :gap="24"
                :size="1.2"
                class="opacity-25"
              />

              <!-- Custom Registered Vue Flow Nodes -->
              <template #node-laneBackground="nodeProps">
                <LaneBackgroundNode v-bind="nodeProps" />
              </template>

              <template #node-stageHeader="nodeProps">
                <StageHeaderNode v-bind="nodeProps" />
              </template>

              <template #node-laneLabel="nodeProps">
                <LaneLabelNode v-bind="nodeProps" />
              </template>

              <template #node-businessNode="nodeProps">
                <BusinessMapNode
                  v-bind="nodeProps"
                  @inspect="inspectNode"
                />
              </template>

              <!-- MiniMap (Bản đồ thu nhỏ góc dưới) -->
              <MiniMap
                :node-color="(node: any) => node.data?.laneColor || (node.type === 'businessNode' ? '#0176d3' : 'transparent')"
                :node-stroke-width="1.5"
                :mask-color="'rgba(3, 45, 96, 0.08)'"
                class="!bg-white/95 !border !border-slate-200 !rounded-xl !shadow-card !backdrop-blur-md !m-3"
              />

              <!-- Controls -->
              <Controls
                :show-interactive="false"
                class="!bg-white/95 !border !border-slate-200 !rounded-xl !shadow-card !backdrop-blur-md !m-3"
              />
            </VueFlow>

            <template #fallback>
              <div class="w-full h-full flex items-center justify-center text-slate-400 text-sm font-semibold">
                Đang tải sơ đồ luồng nghiệp vụ...
              </div>
            </template>
          </ClientOnly>

          <!-- Floating Fit View Quick Button (Top-Right) -->
          <div class="absolute right-4 top-4 z-10 flex items-center gap-1.5">
            <button
              type="button"
              class="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xs text-xs font-bold text-slate-700 hover:text-primary hover:border-primary/40 flex items-center gap-1.5 transition-all cursor-pointer"
              title="Căn chỉnh vừa toàn màn hình"
              @click="fitAll"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
              <span>Vừa khung</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 4. EXECUTIVE ARCHITECTURAL DOSSIER & DETAIL SHEET ──────────────── -->
    <!-- Mobile Backdrop Overlay when Drawer is open -->
    <Transition name="sf-fade">
      <div
        v-if="isDrawerOpen"
        class="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-40 sm:hidden"
        @click="closeDrawer"
      />
    </Transition>

    <Transition name="sf-drawer">
      <div
        v-if="isDrawerOpen && activeNode"
        class="fixed inset-y-0 right-0 w-full sm:w-[480px] lg:w-[500px] bg-white border-l border-slate-200 shadow-modal z-50 flex flex-col"
      >
        <!-- Top Lane Color Accent Bar -->
        <div
          class="h-1.5 w-full shrink-0"
          :style="{ background: laneById.get(activeNode.lane)?.color || '#0176d3' }"
        />

        <!-- Drawer Header Navigation -->
        <div
          class="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80"
        >
          <!-- Lane & Stage Chips -->
          <div class="flex items-center gap-2 min-w-0">
            <span
              class="w-2.5 h-2.5 rounded-full shrink-0"
              :style="{ background: laneById.get(activeNode.lane)?.color }"
            />
            <span
              class="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 truncate"
            >
              {{ laneById.get(activeNode.lane)?.label }}
            </span>
            <span class="text-slate-300">·</span>
            <span class="text-[11px] font-bold text-slate-500 truncate">
              {{ M.columns[activeNode.col]?.label }}
            </span>
          </div>

          <!-- Close Action Button -->
          <div class="flex items-center gap-1.5 shrink-0">
            <span class="text-[10px] font-mono text-slate-400 hidden sm:inline select-none">Esc</span>
            <button
              type="button"
              class="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
              title="Đóng bảng chi tiết (Phím Esc)"
              @click="closeDrawer"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Drawer Body Scrollable Content -->
        <div class="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          <!-- Block 1: Node Title, Type & System Metadata -->
          <div class="space-y-3">
            <!-- Badges Row -->
            <div class="flex flex-wrap items-center gap-1.5">
              <!-- Node Type Badge with Icon -->
              <span
                v-if="activeNode.type === 'gate'"
                class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10.5px] font-bold bg-rose-50 text-rose-700 border border-rose-200"
              >
                <svg class="w-3 h-3 text-rose-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Cổng kiểm soát phê duyệt
              </span>
              <span
                v-else-if="activeNode.type === 'auto'"
                class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10.5px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200"
              >
                <svg class="w-3 h-3 text-indigo-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                </svg>
                Hệ thống tự động tính
              </span>
              <span
                v-else-if="activeNode.type === 'platform'"
                class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10.5px] font-bold bg-slate-100 text-slate-700 border border-slate-200"
              >
                <svg class="w-3 h-3 text-slate-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                Quản trị &amp; Tiện ích chung
              </span>
              <span
                v-else
                class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10.5px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200"
              >
                <svg class="w-3 h-3 text-emerald-700 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                </svg>
                Thao tác phòng ban
              </span>

              <!-- Implementation Status Tag -->
              <div
                v-if="stateById.get(activeNode.state)"
                class="text-[10.5px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200 inline-flex items-center gap-1.5"
              >
                <span
                  class="w-2 h-2 rounded-full shrink-0"
                  :style="{ background: stateById.get(activeNode.state)?.color || '#15803d' }"
                />
                <span>{{ stateById.get(activeNode.state)?.label }}</span>
              </div>
            </div>

            <!-- Authoritative Node Title -->
            <h3 class="text-xl font-black text-[#032D60] tracking-tight leading-snug m-0">
              {{ activeNode.label }}
            </h3>

            <!-- Ref Code with Copy Action -->
            <div v-if="activeNode.ref" class="pt-0.5 flex items-center gap-2">
              <button
                type="button"
                class="text-xs font-mono font-bold text-primary bg-primary/8 hover:bg-primary/15 px-2.5 py-1 rounded-lg border border-primary/20 inline-flex items-center gap-1.5 cursor-pointer transition-colors group"
                title="Bấm để sao chép mã quy trình"
                @click="copyReferenceCode(activeNode.ref)"
              >
                <span class="text-[10px] text-primary/70 uppercase font-sans font-bold">Mã quy trình:</span>
                <span>{{ activeNode.ref }}</span>
                <svg v-if="!isCopiedRef" class="w-3 h-3 text-primary/60 group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <svg v-else class="w-3 h-3 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Block 2: Business Rule & Server Enforcement Card -->
          <div
            v-if="activeNode.tip"
            class="p-4 rounded-2xl border text-xs space-y-2"
            :class="[
              activeNode.type === 'gate'
                ? 'bg-rose-50/60 border-rose-200 text-rose-950'
                : activeNode.type === 'auto'
                  ? 'bg-indigo-50/60 border-indigo-200 text-indigo-950'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
            ]"
          >
            <div class="font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-between"
              :class="activeNode.type === 'gate' ? 'text-rose-900' : activeNode.type === 'auto' ? 'text-indigo-900' : 'text-slate-700'"
            >
              <div class="flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <span>Quy Tắc Kiểm Soát Nghiệp Vụ:</span>
              </div>
              <span
                v-if="activeNode.type === 'gate'"
                class="text-[9.5px] font-mono font-bold px-1.5 py-0.2 rounded bg-rose-100 text-rose-800 border border-rose-200"
              >
                Kiểm soát bắt buộc
              </span>
            </div>
            <p class="text-xs leading-relaxed m-0 font-normal text-slate-800">
              {{ activeNode.tip }}
            </p>
          </div>

          <!-- Block 3: Connected Data Graph Pipeline (I/O) -->
          <div class="space-y-4 pt-1">
            
            <!-- Outgoing Links (Bước tiếp theo / Cấp dữ liệu cho) -->
            <div class="space-y-2">
              <div class="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                <span>Cấp Dữ Liệu Cho / Bước Kế Tiếp:</span>
              </div>

              <div class="space-y-1.5">
                <div
                  v-for="(e, oIdx) in activeNodeOutgoingEdges"
                  :key="`out-${oIdx}`"
                  class="p-3 rounded-xl border border-slate-200 bg-white hover:border-primary/50 hover:bg-slate-50 cursor-pointer text-xs flex items-center justify-between transition-all group shadow-2xs"
                  @click="inspectNode(e.to)"
                >
                  <div class="space-y-0.5 min-w-0 flex-1 pr-2">
                    <div class="font-bold text-[#032D60] group-hover:text-primary transition-colors truncate">
                      {{ nodeById.get(e.to)?.label }}
                    </div>
                    <div class="text-[10px] text-slate-500 flex items-center gap-1.5 truncate">
                      <span
                        class="w-1.5 h-1.5 rounded-full shrink-0"
                        :style="{ background: laneById.get(nodeById.get(e.to)?.lane || '')?.color }"
                      />
                      <span>{{ laneById.get(nodeById.get(e.to)?.lane || '')?.label }}</span>
                      <span>·</span>
                      <span>{{ M.columns[nodeById.get(e.to)?.col || 0]?.label }}</span>
                    </div>
                  </div>

                  <span class="text-[10px] font-bold text-primary px-2.5 py-1 rounded-md bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    {{ kindById.get(e.kind)?.label }} →
                  </span>
                </div>

                <div
                  v-if="activeNodeOutgoingEdges.length === 0"
                  class="text-xs text-slate-400 italic p-3 rounded-xl bg-slate-50 border border-dashed border-slate-200 text-center"
                >
                  Điểm kết thúc quy trình
                </div>
              </div>
            </div>

            <!-- Incoming Links (Nhận dữ liệu từ) -->
            <div class="space-y-2">
              <div class="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-slate-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>Nhận Dữ Liệu Từ / Bước Trước:</span>
              </div>

              <div class="space-y-1.5">
                <div
                  v-for="(e, iIdx) in activeNodeIncomingEdges"
                  :key="`in-${iIdx}`"
                  class="p-3 rounded-xl border border-slate-200 bg-white hover:border-primary/50 hover:bg-slate-50 cursor-pointer text-xs flex items-center justify-between transition-all group shadow-2xs"
                  @click="inspectNode(e.from)"
                >
                  <div class="space-y-0.5 min-w-0 flex-1 pr-2">
                    <div class="font-bold text-[#032D60] group-hover:text-primary transition-colors truncate">
                      {{ nodeById.get(e.from)?.label }}
                    </div>
                    <div class="text-[10px] text-slate-500 flex items-center gap-1.5 truncate">
                      <span
                        class="w-1.5 h-1.5 rounded-full shrink-0"
                        :style="{ background: laneById.get(nodeById.get(e.from)?.lane || '')?.color }"
                      />
                      <span>{{ laneById.get(nodeById.get(e.from)?.lane || '')?.label }}</span>
                      <span>·</span>
                      <span>{{ M.columns[nodeById.get(e.from)?.col || 0]?.label }}</span>
                    </div>
                  </div>

                  <span class="text-[10px] font-bold text-slate-600 px-2 py-0.5 rounded-md bg-slate-100 shrink-0">
                    {{ kindById.get(e.kind)?.label }}
                  </span>
                </div>

                <div
                  v-if="activeNodeIncomingEdges.length === 0"
                  class="text-xs text-slate-400 italic p-3 rounded-xl bg-slate-50 border border-dashed border-slate-200 text-center"
                >
                  Điểm khởi đầu quy trình
                </div>
              </div>
            </div>

          </div>

          <!-- Block 4: Cross-Flow Involvement (Xuất hiện trong các luồng) -->
          <div class="space-y-2 pt-1">
            <div class="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              <span>Xuất Hiện Trong Các Luồng Nghiệp Vụ:</span>
            </div>

            <div class="space-y-1.5">
              <div
                v-for="fl in activeNodeInvolvedFlows"
                :key="`f-inc-${fl.id}`"
                class="p-3 rounded-xl border border-slate-200 hover:border-primary/50 bg-white hover:bg-primary/5 cursor-pointer text-xs flex items-center justify-between transition-all group shadow-2xs"
                @click="setFlowAndJumpToNode(fl.id, activeNode.id)"
              >
                <div class="space-y-0.5 min-w-0 flex-1 pr-2">
                  <div class="font-bold text-[#032D60] group-hover:text-primary transition-colors truncate">
                    {{ fl.name }}
                  </div>
                  <div class="text-[10px] text-slate-500">
                    Vị trí: Bước {{ (fl.steps.findIndex(s => s.node === activeNode?.id) + 1) }} / {{ fl.steps.length }} trong luồng
                  </div>
                </div>

                <span class="text-[11px] font-bold text-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0">
                  <span>Xem luồng</span>
                  <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </div>

              <div
                v-if="activeNodeInvolvedFlows.length === 0"
                class="text-xs text-slate-400 italic p-3 rounded-xl bg-slate-50 border border-dashed border-slate-200 text-center"
              >
                Không nằm trong 10 luồng tiêu biểu
              </div>
            </div>
          </div>

        </div>

        <!-- Drawer Footer Actions -->
        <div
          class="p-4 border-t border-slate-200 bg-slate-50/90 flex items-center justify-between gap-3"
        >
          <button
            type="button"
            class="px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:text-primary hover:border-primary/40 transition-all cursor-pointer flex items-center gap-1.5"
            title="Căn chỉnh camera vào ô này trên sơ đồ"
            @click="centerOnNode(activeNode.id)"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>Định vị ô</span>
          </button>
          
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="px-3 py-2 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
              @click="closeDrawer"
            >
              Đóng
            </button>
            
            <SfButton
              variant="primary"
              size="sm"
              @click="openModal('Tư vấn chức năng: ' + activeNode.label)"
            >
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
              Yêu cầu Demo ô này
            </SfButton>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ─── 5. BOTTOM CONTACT CTA BLADE ────────────────────────────────────── -->
    <SfContactPillars />
  </div>
</template>

<style scoped>
/* Fade Transition for Backdrop */
.sf-fade-enter-active,
.sf-fade-leave-active {
  transition: opacity 0.25s ease;
}
.sf-fade-enter-from,
.sf-fade-leave-to {
  opacity: 0;
}

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
