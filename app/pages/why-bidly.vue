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

const marketData = [
  {
    value: "+10,28%",
    label: "Tăng trưởng xây dựng Q2/2026",
    desc: "Ngành xây dựng duy trì đà tăng trưởng cao theo Tổng cục Thống kê (+7,87% năm 2024 và +10,28% Q2/2026). Nhu cầu quản trị pipeline thầu tăng nhanh.",
    accentColor: "var(--primary, #0176D3)",
  },
  {
    value: "34,65 tỷ $",
    label: "Tổng vốn FDI 6T/2026 (+61%)",
    desc: "Dòng vốn FDI vào nhà máy, KCN bùng nổ; khối chế biến, chế tạo chiếm 56,5%, mở ra cơ hội lớn cho tổng thầu EPC, MEP, PCCC và kết cấu thép.",
    accentColor: "var(--brand, #00A1E0)",
  },
  {
    value: "44,7%",
    label: "Doanh nghiệp thiếu hợp đồng mới",
    desc: "Khảo sát ngành: 44,7% doanh nghiệp đối mặt thiếu hợp đồng; 11,6% bỏ lỡ thông tin thầu. Sàng lọc và chọn đúng cơ hội là bài toán sống còn.",
    accentColor: "var(--destructive, #EA001E)",
  },
  {
    value: "2,6 / 5",
    label: "Mức độ số hóa ngành xây dựng",
    desc: "Quy trình theo đuổi thầu còn phân mảnh giữa Zalo, Excel, Drive. Số hóa với hệ thống chuẩn ngành mang lại lợi thế cạnh tranh vượt trội.",
    accentColor: "var(--stage-s2, #7F27FF)",
  },
];

const asIsToBe = [
  {
    area: "Tín hiệu dự án & Hộp thư cơ hội (Project Inbox)",
    asIs: "Thu thập rải rác qua Zalo, KCN, báo chí; không rõ ai đang phụ trách, dễ trùng lặp hoặc bỏ sót dự án tiềm năng.",
    toBe: "Một Project Inbox tập trung duy nhất, tự động lọc trùng (dedup), phân loại FDI/KCN/ngành và gán người phụ trách rõ ràng.",
  },
  {
    area: "Đánh giá & Lựa chọn cơ hội (Scorecard Go/No-Go)",
    asIs: "Quyết định theo cảm tính hoặc áp lực doanh số; đầu tư nguồn lực vào dự án rủi ro cao hoặc không đúng năng lực lõi.",
    toBe: "Scorecard Go/No-Go định lượng 6 tiêu chí trọng số (0-100); bắt buộc người duyệt, quyết định và lý do lưu vết máy chủ.",
  },
  {
    area: "Mạng lưới bên liên quan (Stakeholder Map)",
    asIs: "Lưu trong danh bạ cá nhân; khi nhân sự nghỉ việc, doanh nghiệp mất toàn bộ thông tin quan hệ và lịch sử tương tác.",
    toBe: "Bản đồ Stakeholder Map theo dự án (Decision Maker, Influencer, Champion, Gatekeeper); dữ liệu thuộc về tổ chức.",
  },
  {
    area: "Phối hợp lập hồ sơ thầu (Tender Workspace)",
    asIs: "Checklist và tệp tin nằm rải rác trên Drive, Zalo; dễ trễ hạn, sót đầu việc hoặc nộp nhầm phiên bản giá cũ.",
    toBe: "Tender Workspace theo vòng thầu; phân rã checklist cho 5 phòng ban, theo dõi hạn chót và bất biến duy nhất 1 bản final.",
  },
  {
    area: "Thư viện hồ sơ năng lực (Capability Library)",
    asIs: "Mỗi lần đấu thầu lại hỏi xin CV, ảnh dự án và chứng chỉ; chứng chỉ hết hạn không được phát hiện kịp thời.",
    toBe: "Capability Library tập trung: dự án tiêu biểu (tonnage, diện tích), hồ sơ chuyên gia, thiết bị có tag và cảnh báo hết hạn tự động.",
  },
  {
    area: "Bàn giao sau trúng thầu (Handover Pack S8)",
    asIs: "Bàn giao sang ban điều hành dự án bằng họp miệng hoặc email; thất lạc cam kết thương mại, giả định và rủi ro.",
    toBe: "Gói bàn giao Handover Pack (S8) chuẩn hóa toàn bộ dữ liệu trước khi chuyển giao sang hệ thống ERP/PM thi công.",
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
          <span class="inline-flex items-center px-3 py-1 text-xs font-bold rounded-full bg-brand-soft text-primary">
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
          Bidly lấp đầy khoảng trống giữa CRM bán hàng và ERP thi công: giúp tổng thầu tập trung đúng cơ hội, nộp đúng hồ sơ và giữ trọn tri thức quan hệ của tổ chức.
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
            <span class="w-2 h-2 rounded-full bg-primary inline-block shrink-0" />
            <span>Khấu trừ 100% chi phí Pilot</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-600 inline-block shrink-0" />
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
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            Thị trường bùng nổ vốn FDI nhà máy, nhưng cũng đối mặt áp lực cạnh tranh giá gay gắt.
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch"
        >
          <div
            v-for="(stat, sIdx) in marketData"
            :key="sIdx"
            class="sf-card group bg-card border border-border/70 p-6 sm:p-7 rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 space-y-4 flex flex-col justify-between text-left"
          >
            <div
              class="text-3xl sm:text-4xl font-extrabold tabular tracking-tight text-primary"
            >
              {{ stat.value }}
            </div>
            <div>
              <div class="text-sm sm:text-[15px] font-bold text-foreground group-hover:text-primary transition-colors">
                {{ stat.label }}
              </div>
              <p
                class="text-xs sm:text-[13px] text-muted-foreground leading-relaxed mt-1.5 font-normal"
              >
                {{ stat.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AS-IS vs TO-BE Transformation Table -->
    <section class="py-16 md:py-24 bg-background border-b border-border/80">
      <div class="sf-container space-y-12 md:space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            6 Điểm Chuyển Đổi: Từ Thủ Công sang Chuẩn Hóa
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            So sánh vận hành phân mảnh hiện tại (AS-IS) với mô hình quản trị số của Bidly (TO-BE).
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(item, idx) in asIsToBe"
            :key="idx"
            class="sf-card group bg-card border border-border/70 rounded-xl p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 space-y-4"
          >
            <div class="flex items-center gap-3">
              <span
                class="w-7 h-7 rounded-full bg-brand-soft text-primary flex items-center justify-center font-extrabold text-xs tabular shrink-0"
              >
                {{ idx + 1 }}
              </span>
              <h3 class="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                {{ item.area }}
              </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <!-- AS-IS -->
              <div class="p-4 sm:p-5 rounded-lg bg-destructive/5 space-y-2 border border-destructive/10">
                <div
                  class="text-xs font-bold uppercase tracking-wider text-destructive flex items-center gap-1.5"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Hiện tại (AS-IS)</span>
                </div>
                <p
                  class="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal"
                >
                  {{ item.asIs }}
                </p>
              </div>

              <!-- TO-BE -->
              <div class="p-4 sm:p-5 rounded-lg bg-brand-soft/70 space-y-2 border border-brand/20">
                <div
                  class="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Với Bidly (TO-BE)</span>
                </div>
                <p
                  class="text-xs sm:text-sm text-foreground font-semibold leading-relaxed"
                >
                  {{ item.toBe }}
                </p>
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
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            Tại sao CRM bán lẻ, ERP hay tự phát triển không giải quyết được bài toán thầu xây dựng công nghiệp?
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
                  <span class="text-muted-foreground ml-1 font-normal leading-relaxed">
                    {{ comp.pros }}
                  </span>
                </div>
                <div>
                  <span class="font-bold text-destructive">Khoảng trống:</span>
                  <span class="text-muted-foreground ml-1 font-normal leading-relaxed">
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
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            Vtechcom cùng khách hàng theo dõi các chỉ số đo lường rõ ràng trong 8-10 tuần thí điểm.
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
        >
          <div
            v-for="(kpi, kIdx) in kpiMetrics"
            :key="kIdx"
            class="sf-card group bg-card border border-border/70 rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 p-6 sm:p-8 space-y-2 text-left flex flex-col justify-between"
          >
            <div class="space-y-2">
              <div
                class="text-3xl sm:text-4xl font-extrabold text-primary tabular tracking-tight"
              >
                {{ kpi.metric }}
              </div>
              <div class="text-base font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                {{ kpi.label }}
              </div>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
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

