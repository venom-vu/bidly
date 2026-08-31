<script setup lang="ts">
import { crmBladesData } from "~/data/crm-blades";
import SfButton from "~/components/ui/SfButton.vue";

const marketEvidence = crmBladesData.customerLogos;

interface MarketStat {
  value: string;
  target: number;
  prefix?: string;
  suffix?: string;
  decimals: number;
  label: string;
  desc: string;
}

const marketData: MarketStat[] = [
  {
    value: "+10,28%",
    target: 10.28,
    prefix: "+",
    suffix: "%",
    decimals: 2,
    label: "Tăng trưởng xây dựng Q2/2026",
    desc: "Ngành xây dựng tăng trưởng cao, thúc đẩy nhu cầu cấp thiết về chuẩn hóa quản trị thầu.",
  },
  {
    value: "34,65 tỷ $",
    target: 34.65,
    prefix: "",
    suffix: " tỷ $",
    decimals: 2,
    label: "Tổng vốn FDI 6T/2026 (+61%)",
    desc: "Vốn FDI công nghiệp bùng nổ, mở ra làn sóng dự án quy mô lớn cho các nhà thầu.",
  },
  {
    value: "44,7%",
    target: 44.7,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "Doanh nghiệp thiếu hợp đồng mới",
    desc: "Áp lực cạnh tranh gia tăng; sàng lọc và bắt đúng cơ hội thầu là bài toán sống còn.",
  },
  {
    value: "2,6 / 5",
    target: 2.6,
    prefix: "",
    suffix: " / 5",
    decimals: 1,
    label: "Mức độ số hóa ngành xây dựng",
    desc: "Vận hành còn phân mảnh qua Excel, Zalo; số hóa chuẩn ngành tạo lợi thế vượt trội.",
  },
];

const statsSectionRef = ref<HTMLElement | null>(null);
const animatedValues = ref<string[]>(
  marketData.map(
    (s) =>
      `${s.prefix || ""}${(0).toFixed(s.decimals).replace(".", ",")}${s.suffix || ""}`,
  ),
);

let hasAnimated = false;

const startCountAnimation = () => {
  if (hasAnimated) return;
  hasAnimated = true;

  const duration = 1600;
  const startTime = performance.now();

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    animatedValues.value = marketData.map((stat) => {
      const currentVal = stat.target * easedProgress;
      const formatted = currentVal.toFixed(stat.decimals).replace(".", ",");
      return `${stat.prefix || ""}${formatted}${stat.suffix || ""}`;
    });

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      animatedValues.value = marketData.map((stat) => stat.value);
    }
  };

  requestAnimationFrame(step);
};

let statsObserver: IntersectionObserver | null = null;

onMounted(() => {
  if (typeof IntersectionObserver !== "undefined") {
    if (statsSectionRef.value) {
      statsObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            startCountAnimation();
            statsObserver?.disconnect();
          }
        },
        { threshold: 0.25 },
      );
      statsObserver.observe(statsSectionRef.value);
    } else {
      animatedValues.value = marketData.map((s) => s.value);
    }
  } else {
    animatedValues.value = marketData.map((s) => s.value);
  }
});

onUnmounted(() => {
  statsObserver?.disconnect();
});
</script>

<template>
  <!-- Market Context & Stats Blade -->
  <section class="py-16 md:py-24 bg-card border-b border-border/80">
    <div class="sf-container space-y-12 md:space-y-16">
      <!-- Section Heading -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
        >
          {{ marketEvidence.heading }}
        </h2>
        <p
          class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto"
        >
          Thị trường bùng nổ vốn FDI nhà máy, nhưng cũng đối mặt áp lực cạnh tranh giá gay gắt.
        </p>
      </div>

      <!-- 4 Stat Cards -->
      <div
        ref="statsSectionRef"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch"
      >
        <div
          v-for="(stat, sIdx) in marketData"
          :key="sIdx"
          class="sf-card group bg-card border border-border/70 p-6 sm:p-7 rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col text-left"
        >
          <div
            class="text-3xl sm:text-4xl font-extrabold tabular-nums tracking-tight text-primary mb-3 sm:mb-4"
          >
            {{ animatedValues[sIdx] || stat.value }}
          </div>
          <div class="flex-1 flex flex-col">
            <div
              class="text-sm sm:text-[15px] font-bold text-foreground group-hover:text-primary transition-colors min-h-[2.5rem] sm:min-h-[2.75rem] flex items-start leading-snug"
            >
              {{ stat.label }}
            </div>
            <p
              class="text-xs sm:text-[13px] text-muted-foreground leading-relaxed mt-2 font-normal"
            >
              {{ stat.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- Action CTA -->
      <div v-if="marketEvidence.cta" class="pt-2 flex justify-center">
        <SfButton
          variant="primary"
          size="lg"
          :to="marketEvidence.cta.url"
        >
          {{ marketEvidence.cta.label }}
        </SfButton>
      </div>
    </div>
  </section>
</template>
