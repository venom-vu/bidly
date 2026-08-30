<script setup lang="ts">
import SfBadge from "~/components/ui/SfBadge.vue";
import SfButton from "~/components/ui/SfButton.vue";
import SfContactPillars from "~/components/blades/SfContactPillars.vue";
import { useDemoModal } from "~/composables/useDemoModal";

useSeoMeta({
  title:
    "Vì sao chọn Bidly? So sánh Giải pháp & Lợi ích ROI | Preconstruction CRM",
  description:
    "Khám phá lý do tổng thầu EPC, MEP và kết cấu thép lựa chọn Bidly thay vì Excel, CRM bán hàng hay ERP. So sánh 5 nhóm giải pháp, 6 chuyển dịch AS-IS sang TO-BE và 6 chỉ số đo lường hiệu quả.",
});

const { openModal } = useDemoModal();

interface MarketStat {
  value: string;
  target: number;
  prefix?: string;
  suffix?: string;
  decimals: number;
  label: string;
  desc: string;
  accentColor: string;
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
    accentColor: "var(--primary, #0176D3)",
  },
  {
    value: "34,65 tỷ $",
    target: 34.65,
    prefix: "",
    suffix: " tỷ $",
    decimals: 2,
    label: "Tổng vốn FDI 6T/2026 (+61%)",
    desc: "Vốn FDI công nghiệp bùng nổ, mở ra làn sóng dự án quy mô lớn cho các nhà thầu.",
    accentColor: "var(--brand, #00A1E0)",
  },
  {
    value: "44,7%",
    target: 44.7,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "Doanh nghiệp thiếu hợp đồng mới",
    desc: "Áp lực cạnh tranh gia tăng; sàng lọc và bắt đúng cơ hội thầu là bài toán sống còn.",
    accentColor: "var(--destructive, #EA001E)",
  },
  {
    value: "2,6 / 5",
    target: 2.6,
    prefix: "",
    suffix: " / 5",
    decimals: 1,
    label: "Mức độ số hóa ngành xây dựng",
    desc: "Vận hành còn phân mảnh qua Excel, Zalo; số hóa chuẩn ngành tạo lợi thế vượt trội.",
    accentColor: "var(--stage-s2, #7F27FF)",
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

let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (typeof IntersectionObserver !== "undefined" && statsSectionRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          startCountAnimation();
          observer?.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(statsSectionRef.value);
  } else {
    animatedValues.value = marketData.map((s) => s.value);
  }
});

onUnmounted(() => {
  observer?.disconnect();
});

interface TransformationItem {
  number: string;
  stageCode: string;
  stageLabel: string;
  area: string;
  shortDesc: string;
  asIs: string;
  asIsPain: string;
  toBe: string;
  highlights: string[];
}

const asIsToBe: TransformationItem[] = [
  {
    number: "01",
    stageCode: "S0",
    stageLabel: "Phát hiện cơ hội",
    area: "Tín hiệu dự án & Hộp thư cơ hội",
    shortDesc: "Project Inbox & FDI Intelligence",
    asIs: "Thu thập rải rác qua Zalo, KCN, báo chí; không rõ ai đang phụ trách, dễ trùng lặp hoặc bỏ sót dự án tiềm năng.",
    asIsPain: "Phân mảnh nguồn tin, mất dấu cơ hội",
    toBe: "Một Project Inbox tập trung duy nhất, tự động lọc trùng (dedup), phân loại FDI/KCN/ngành và gán người phụ trách rõ ràng.",
    highlights: [
      "Lọc trùng (Dedup) tự động",
      "Phân loại FDI / KCN",
      "Gán đầu mối tức thì",
    ],
  },
  {
    number: "02",
    stageCode: "S2",
    stageLabel: "Sàng lọc & Quyết định",
    area: "Đánh giá & Lựa chọn cơ hội",
    shortDesc: "Scorecard Go/No-Go Gate",
    asIs: "Quyết định theo cảm tính hoặc áp lực doanh số; đầu tư nguồn lực vào dự án rủi ro cao hoặc không đúng năng lực lõi.",
    asIsPain: "Cảm tính, lãng phí chi phí lập hồ sơ",
    toBe: "Scorecard Go/No-Go định lượng 6 tiêu chí trọng số (0-100); bắt buộc người duyệt, quyết định và lý do lưu vết máy chủ.",
    highlights: [
      "Ma trận 6 tiêu chí trọng số",
      "Khóa gate trên máy chủ",
      "Lưu vết thẩm định",
    ],
  },
  {
    number: "03",
    stageCode: "S3",
    stageLabel: "Nuôi dưỡng & Quan hệ",
    area: "Mạng lưới bên liên quan",
    shortDesc: "Stakeholder Relationship Mapping",
    asIs: "Lưu trong danh bạ cá nhân; khi nhân sự nghỉ việc, doanh nghiệp mất toàn bộ thông tin quan hệ và lịch sử tương tác.",
    asIsPain: "Tri thức rời đi cùng nhân sự",
    toBe: "Bản đồ Stakeholder Map theo dự án (Decision Maker, Influencer, Champion, Gatekeeper); dữ liệu thuộc về tổ chức.",
    highlights: [
      "4 Vai trò ảnh hưởng",
      "Dữ liệu thuộc tổ chức",
      "Nhật ký tương tác sâu",
    ],
  },
  {
    number: "04",
    stageCode: "S4-S5",
    stageLabel: "Hồ sơ & Đấu thầu",
    area: "Phối hợp lập hồ sơ thầu",
    shortDesc: "Tender Workspace & Submission Gate",
    asIs: "Checklist và tệp tin nằm rải rác trên Drive, Zalo; dễ trễ hạn, sót đầu việc hoặc nộp nhầm phiên bản giá cũ.",
    asIsPain: "Rủi ro nộp nhầm giá, trễ deadline",
    toBe: "Tender Workspace theo vòng thầu; phân rã checklist cho 5 phòng ban, theo dõi hạn chót và bất biến duy nhất 1 bản final.",
    highlights: [
      "Checklist 5 phòng ban",
      "Khóa bất biến 1 bản Final",
      "Kiểm soát 100% hạn chót",
    ],
  },
  {
    number: "05",
    stageCode: "S6",
    stageLabel: "Đàm phán & Thương thảo",
    area: "Thư viện hồ sơ năng lực",
    shortDesc: "Centralized Capability Library",
    asIs: "Mỗi lần đấu thầu lại hỏi xin CV, ảnh dự án và chứng chỉ; chứng chỉ hết hạn không được phát hiện kịp thời.",
    asIsPain: "Tìm kiếm thủ công, rủi ro chứng chỉ hết hạn",
    toBe: "Capability Library tập trung: dự án tiêu biểu (tonnage, diện tích), hồ sơ chuyên gia, thiết bị có tag và cảnh báo hết hạn tự động.",
    highlights: [
      "Thư viện số tập trung",
      "Cảnh báo chứng chỉ hết hạn",
      "Truy xuất tức thì",
    ],
  },
  {
    number: "06",
    stageCode: "S8",
    stageLabel: "Bàn giao thi công",
    area: "Bàn giao sau trúng thầu",
    shortDesc: "Handover Pack to ERP / PM",
    asIs: "Bàn giao sang ban điều hành dự án bằng họp miệng hoặc email; thất lạc cam kết thương mại, giả định và rủi ro.",
    asIsPain: "Đứt gãy thông tin khi chuyển giao thi công",
    toBe: "Gói bàn giao Handover Pack (S8) chuẩn hóa toàn bộ dữ liệu trước khi chuyển giao sang hệ thống ERP/PM thi công.",
    highlights: [
      "Khép kín chuỗi Precon",
      "100% Cam kết được chuyển giao",
      "Tương thích ERP / PM",
    ],
  },
];

const competitiveMatrix = [
  {
    group: "CRM Bán lẻ phổ thông (MISA, Base...)",
    accentColor: "var(--stage-s0, #64748B)",
    pros: "Chi phí thấp, giao diện tiếng Việt, dễ tiếp cận ban đầu.",
    cons: "Mô hình xoay quanh đơn hàng ngắn hạn (Deal); thiếu hoàn toàn chuỗi Pursuit, gói thầu (Work Package), Scorecard Go/No-Go và hồ sơ năng lực kỹ thuật.",
  },
  {
    group: "CRM Quốc tế phổ thông (Salesforce, HubSpot...)",
    accentColor: "var(--brand, #00A1E0)",
    pros: "Hệ sinh thái tính năng rộng, thương hiệu toàn cầu.",
    cons: "Chi phí triển khai và tùy biến rất cao; không phù hợp quy trình đấu thầu đặc thù tại Việt Nam; rào cản chia sẻ dữ liệu giá thầu SaaS nước ngoài.",
  },
  {
    group: "AEC CRM Quốc tế (Unanet / Cosential...)",
    accentColor: "var(--stage-s2, #7F27FF)",
    pros: "Đã chứng minh nhu cầu Preconstruction chuyên ngành xây dựng.",
    cons: "Chi phí đắt đỏ; không có đội ngũ hỗ trợ và pháp nhân tại Việt Nam; rào cản ngôn ngữ và không tương thích văn hóa vận hành Zalo/Excel nội địa.",
  },
  {
    group: "ERP & Quản lý thi công (SAP, BIM, PM)",
    accentColor: "var(--stage-s4, #0284C7)",
    pros: "Quản lý tài chính, vật tư, kế toán và tiến độ thi công công trường rất tốt.",
    cons: "Bắt đầu quá muộn: chỉ sau khi đã ký hợp đồng. Không giải quyết được bài toán phát hiện, sàng lọc và giành dự án ở giai đoạn tiền xây dựng.",
  },
  {
    group: "Phần mềm Tự phát triển (In-house Custom)",
    accentColor: "var(--brand-panel, #032D60)",
    pros: "Xây dựng theo đúng thói quen hiện tại của doanh nghiệp.",
    cons: "Chi phí đầu tư lớn, khó bảo trì nâng cấp, thiếu kinh nghiệm chuẩn hóa ngành và rủi ro gián đoạn khi đội ngũ IT nội bộ biến động.",
  },
];

const kpiMetrics = [
  {
    metric: ">= 85%",
    label: "Độ phủ quản trị (Coverage Rate)",
    desc: "Tỷ lệ cơ hội đang theo đuổi có đầy đủ người phụ trách, giai đoạn chuẩn và việc tiếp theo (next action).",
    accentColor: "var(--primary, #0176D3)",
  },
  {
    metric: "100%",
    label: "Kiểm soát hạn chót (Deadline Control)",
    desc: "Mọi mốc tiến độ và hạn nộp hồ sơ thầu đều có người chịu trách nhiệm và cảnh báo thời gian thực.",
    accentColor: "var(--stage-s8, #04844B)",
  },
  {
    metric: "0 lỗi",
    label: "Chất lượng phiên bản (Version Quality)",
    desc: "Loại bỏ hoàn toàn sự cố nộp nhầm phiên bản hồ sơ giá nhờ cơ chế khóa bất biến ở tầng máy chủ.",
    accentColor: "var(--brand, #00A1E0)",
  },
  {
    metric: ">= 70%",
    label: "Độ sâu quan hệ (Stakeholder Depth)",
    desc: "Các dự án ưu tiên xác định rõ Decision Maker, Influencer và Champion với nhật ký tương tác đầy đủ.",
    accentColor: "var(--stage-s3, #0D9488)",
  },
  {
    metric: "+30%",
    label: "Tái sử dụng năng lực (Capability Reuse)",
    desc: "Tiết kiệm tối thiểu 30% thời gian tìm kiếm dự án tiêu biểu, CV chuyên gia và chứng chỉ khi làm hồ sơ thầu.",
    accentColor: "var(--stage-s6, #4F46E5)",
  },
  {
    metric: ">= 70%",
    label: "Tỷ lệ ứng dụng thực tế (Adoption Rate)",
    desc: "Tỷ lệ nhân sự các phòng ban tích cực sử dụng hệ thống hàng tuần sau 6-8 tuần triển khai thí điểm.",
    accentColor: "var(--primary, #0176D3)",
  },
];
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <section
      class="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-card to-background border-b border-border/80"
    >
      <div class="sf-container relative z-10 text-center max-w-4xl space-y-6">
        <div class="inline-block">
          <span
            class="inline-flex items-center px-3 py-1 text-xs font-bold rounded-full bg-brand-soft text-primary"
          >
            ĐỊNH VỊ GIẢI PHÁP
          </span>
        </div>

        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18]"
        >
          Vì Sao Tổng Thầu Công Nghiệp
          <span class="text-primary block mt-1">
            Lựa Chọn Nền Tảng Bidly?
          </span>
        </h1>

        <p
          class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-normal"
        >
          Bidly lấp đầy khoảng trống giữa CRM bán hàng và ERP thi công: giúp
          tổng thầu tập trung đúng cơ hội, nộp đúng hồ sơ và giữ trọn tri thức
          quan hệ của tổ chức.
        </p>

        <div class="pt-2 flex flex-wrap justify-center items-center gap-4">
          <SfButton
            variant="primary"
            size="lg"
            @click="openModal('Đăng ký Demo Vì sao chọn Bidly')"
          >
            <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              />
            </svg>
            Đặt lịch Demo 45 phút
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/crm/pricing">
            Tìm hiểu gói Pilot 8-10 tuần
          </SfButton>
        </div>

        <!-- Trust Badges -->
        <div
          class="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-muted-foreground border-t border-border/70 max-w-xl mx-auto"
        >
          <div class="flex items-center gap-2">
            <span
              class="w-2 h-2 rounded-full bg-primary inline-block shrink-0"
            />
            <span>Khấu trừ 100% chi phí Pilot</span>
          </div>
          <div class="flex items-center gap-2">
            <span
              class="w-2 h-2 rounded-full bg-emerald-600 inline-block shrink-0"
            />
            <span>Bảo mật dữ liệu On-premise</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Market Context & "Why Now" -->
    <section class="py-16 md:py-24 bg-card border-b border-border/80">
      <div class="sf-container space-y-12 md:space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Vì Sao Cần Bidly Ngay Lúc Này?
          </h2>
          <p
            class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto"
          >
            Thị trường bùng nổ vốn FDI nhà máy, nhưng cũng đối mặt áp lực cạnh
            tranh giá gay gắt.
          </p>
        </div>

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
      </div>
    </section>

    <!-- AS-IS vs TO-BE Transformation Table -->
    <section
      class="py-20 md:py-28 bg-gradient-to-b from-background via-section-gradient-to/20 to-background border-b border-border/80 relative overflow-hidden"
    >
      <!-- Ambient light backdrop -->
      <div
        class="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand/5 blur-[120px] rounded-full pointer-events-none"
      />

      <div class="sf-container relative z-10 space-y-10 md:space-y-14">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            6 Điểm Chuyển Đổi: Từ Vận Hành Rời Rạc
            <span class="text-primary block sm:inline"> Sang Chuẩn Hóa</span>
          </h2>
          <p
            class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto"
          >
            Xóa bỏ tình trạng phân mảnh trên Zalo & Excel — Thiết lập luồng dữ
            liệu chuẩn hóa, kiểm soát toàn diện từng chặng tiền xây dựng.
          </p>
        </div>

        <!-- Transformation Matrix List -->
        <div
          class="bg-card border border-border/80 rounded-lg shadow-card divide-y divide-border/60 overflow-hidden max-w-5xl mx-auto"
        >
          <div
            v-for="(item, idx) in asIsToBe"
            :key="idx"
            class="p-6 sm:p-8 lg:p-9 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-soft/20 group relative"
          >
            <div
              class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
              <!-- Left: Stage Header & Info -->
              <div class="lg:col-span-4 space-y-2 lg:pr-2">
                <div class="flex items-center gap-2.5">
                  <span
                    class="text-2xl sm:text-3xl font-extrabold text-primary/40 group-hover:text-primary transition-colors tabular tracking-tight font-mono"
                  >
                    {{ item.number }}
                  </span>
                  <span
                    class="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold bg-brand-soft text-primary border border-primary/15"
                  >
                    {{ item.stageCode }}: {{ item.stageLabel }}
                  </span>
                </div>
                <h3
                  class="text-base sm:text-lg font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors leading-snug"
                >
                  {{ item.area }}
                </h3>
                <p
                  class="text-xs text-muted-foreground font-medium leading-relaxed"
                >
                  {{ item.shortDesc }}
                </p>
              </div>

              <!-- Right: AS-IS vs TO-BE Flow (No Box-in-Box) -->
              <div class="lg:col-span-8">
                <div
                  class="grid grid-cols-1 md:grid-cols-11 gap-4 lg:gap-6 items-start"
                >
                  <!-- AS-IS Column -->
                  <div class="md:col-span-5 space-y-2">
                    <div
                      class="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-destructive/90"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>Hiện tại (AS-IS)</span>
                    </div>
                    <p
                      class="text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-normal"
                    >
                      {{ item.asIs }}
                    </p>
                    <div class="pt-0.5">
                      <span
                        class="inline-flex items-center gap-1 text-[11px] font-medium text-destructive bg-destructive/5 px-2 py-0.5 rounded border border-destructive/10"
                      >
                        <span>⚠</span> {{ item.asIsPain }}
                      </span>
                    </div>
                  </div>

                  <!-- Transformation Arrow Connector -->
                  <div
                    class="md:col-span-1 hidden md:flex items-center justify-center pt-5"
                  >
                    <div
                      class="w-7 h-7 rounded-full bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-brand-soft group-hover:border-primary/30 border border-border/80 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-xs shrink-0"
                    >
                      <svg
                        class="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>

                  <!-- TO-BE Column -->
                  <div class="md:col-span-5 space-y-2">
                    <div
                      class="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary"
                    >
                      <span class="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Với Bidly (TO-BE)</span>
                    </div>
                    <p
                      class="text-xs sm:text-[13px] text-foreground font-semibold leading-relaxed"
                    >
                      {{ item.toBe }}
                    </p>
                    <div class="flex flex-wrap gap-1.5 pt-1">
                      <span
                        v-for="(hl, hIdx) in item.highlights"
                        :key="hIdx"
                        class="inline-flex items-center gap-1 text-[11px] font-bold text-primary bg-brand-soft/80 border border-primary/15 px-2 py-0.5 rounded-full"
                      >
                        <span class="text-[9px] text-primary">✓</span> {{ hl }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Competitive Alternatives Comparison -->
    <section class="py-16 md:py-24 bg-card border-b border-border/80">
      <div class="sf-container space-y-12 md:space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            So Sánh Bidly với 5 Nhóm Giải Pháp Thay Thế
          </h2>
          <p
            class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto"
          >
            Tại sao CRM bán lẻ, ERP hay tự phát triển không giải quyết được bài
            toán thầu xây dựng công nghiệp?
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
        >
          <div
            v-for="(comp, cIdx) in competitiveMatrix"
            :key="cIdx"
            class="sf-card group bg-card border border-border/70 rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between p-6 sm:p-8 space-y-4"
          >
            <div class="space-y-3">
              <h3
                class="text-lg sm:text-xl font-extrabold text-foreground leading-snug tracking-tight group-hover:text-primary transition-colors"
              >
                {{ comp.group }}
              </h3>
              <div class="space-y-3 text-xs sm:text-[13px]">
                <div>
                  <span class="font-bold text-primary">Điểm mạnh:</span>
                  <span
                    class="text-muted-foreground ml-1 font-normal leading-relaxed"
                  >
                    {{ comp.pros }}
                  </span>
                </div>
                <div>
                  <span class="font-bold text-destructive">Khoảng trống:</span>
                  <span
                    class="text-muted-foreground ml-1 font-normal leading-relaxed"
                  >
                    {{ comp.cons }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pilot ROI & Adoption Metrics -->
    <section class="py-16 md:py-24 bg-background border-b border-border/80">
      <div class="sf-container space-y-12 md:space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            6 Chỉ Số Đo Lường Hiệu Quả Chương Trình Pilot
          </h2>
          <p
            class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto"
          >
            Vtechcom cùng khách hàng theo dõi các chỉ số đo lường rõ ràng trong
            8-10 tuần thí điểm.
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch"
        >
          <div
            v-for="(kpi, kIdx) in kpiMetrics"
            :key="kIdx"
            class="sf-card group bg-card border border-border/70 p-6 sm:p-7 rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col text-left"
          >
            <div
              class="text-3xl sm:text-4xl font-extrabold tabular-nums tracking-tight text-primary mb-3 sm:mb-4"
            >
              {{ kpi.metric }}
            </div>
            <div class="flex-1 flex flex-col">
              <div
                class="text-sm sm:text-[15px] font-bold text-foreground group-hover:text-primary transition-colors min-h-[2.5rem] sm:min-h-[2.75rem] flex items-start leading-snug"
              >
                {{ kpi.label }}
              </div>
              <p
                class="text-xs sm:text-[13px] text-muted-foreground leading-relaxed mt-2 font-normal"
              >
                {{ kpi.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Contact Blade -->
    <SfContactPillars />
  </div>
</template>
