<script setup lang="ts">
import SfBadge from "~/components/ui/SfBadge.vue";
import SfButton from "~/components/ui/SfButton.vue";
import SfContactPillars from "~/components/blades/SfContactPillars.vue";
import { useDemoModal } from "~/composables/useDemoModal";

useSeoMeta({
  title: "Preconstruction CRM là gì? Cẩm nang cho Tổng thầu Xây dựng | Bidly",
  description:
    "Khái niệm Preconstruction CRM, chuỗi thực thể dữ liệu Dự án đến Gói bàn giao, và ranh giới với CRM bán lẻ & ERP.",
});

const { openModal } = useDemoModal();

const comparisonThreeWays = [
  {
    criteria: "Đối tượng trung tâm",
    retailCrm: "Đơn hàng (Deal / Opportunity đơn lẻ)",
    preconCrm: "Dự án → Pursuit → Gói thầu → Vòng thầu",
    erp: "Hợp đồng thi công, Dự toán BOQ, Vật tư",
  },
  {
    criteria: "Thời điểm quản trị",
    retailCrm: "Khách hàng quan tâm → Đóng đơn hàng",
    preconCrm: "Tín hiệu dự án KCN/FDI → Thắng thầu & Bàn giao (S8)",
    erp: "Sau khi ký hợp đồng → Quyết toán công trình",
  },
  {
    criteria: "Chu kỳ theo đuổi & Giá trị",
    retailCrm: "Vài ngày đến vài tuần; giá trị nhỏ",
    preconCrm: "3 - 24 tháng; giá trị hàng chục đến hàng nghìn tỷ",
    erp: "Vận hành suốt vòng đời thi công 1 - 3 năm",
  },
  {
    criteria: "Kiểm soát chuyển bước (State Machine)",
    retailCrm: "Kéo thả tự do, không có chốt chặn thực tế",
    preconCrm: "9 giai đoạn cố định, 5 cổng kiểm soát cứng ở máy chủ",
    erp: "Quy trình hạch toán kế toán và phê duyệt vật tư",
  },
  {
    criteria: "Đánh giá cơ hội (Go/No-Go)",
    retailCrm: "Cảm tính hoặc không có công cụ định lượng",
    preconCrm: "Scorecard 6 tiêu chí trọng số 0-100, lưu vết Audit Log",
    erp: "Không có chức năng đánh giá trước thầu",
  },
  {
    criteria: "Phối hợp phòng thầu",
    retailCrm: "Giao việc cá nhân, không có vòng thầu / bản final",
    preconCrm: "Tender Workspace 5 phòng ban, bất biến 1 bản final",
    erp: "Quản lý tổ đội công trường, kho bãi, máy móc",
  },
  {
    criteria: "Mô hình triển khai & Cơ sở dữ liệu",
    retailCrm: "Multi-tenant SaaS dùng chung cơ sở dữ liệu",
    preconCrm: "Single-tenant On-premise hoặc Private Cloud DB độc lập",
    erp: "On-premise hoặc Private ERP Server",
  },
];

const personas = [
  {
    role: "Tổng giám đốc / CEO",
    title: "Nắm bắt cơ hội đáng theo đuổi & Dự báo pipeline tin cậy",
    description:
      "Bao quát toàn cảnh pipeline có trọng số, theo dõi phân bố cơ hội theo ngành FDI, phê duyệt Go/No-Go dựa trên dữ liệu định lượng và kiểm soát rủi ro dòng tiền.",
    badge: "RA QUYẾT ĐỊNH",
    accentColor: "var(--stage-s8, #04844B)",
  },
  {
    role: "Giám đốc / Trưởng phòng BD",
    title: "Tập trung cơ hội & Kiểm soát việc tiếp theo (Next Action)",
    description:
      "Quản lý toàn bộ tín hiệu dự án từ KCN và chủ đầu tư trên Project Inbox tập trung, xây dựng bản đồ bên liên quan (Stakeholder Map) và theo dõi sát sao lịch sử tiếp xúc.",
    badge: "TĂNG TRƯỞNG",
    accentColor: "var(--stage-s0, #64748B)",
  },
  {
    role: "Trưởng phòng Đấu thầu",
    title: "Nộp đúng hạn, đúng phiên bản & Đủ đầu việc liên phòng",
    description:
      "Phân rã checklist hồ sơ cho 5 phòng ban (Kinh doanh, Kỹ thuật, Đấu thầu, Pháp lý, Tài chính), theo dõi tiến độ thời gian thực và kiểm soát chốt 1 bản final mỗi vòng.",
    badge: "VẬN HÀNH THẦU",
    accentColor: "var(--stage-s4, #0284C7)",
  },
  {
    role: "Kỹ thuật & Dự toán",
    title: "Nhận yêu cầu rõ ràng & Tái sử dụng tri thức năng lực",
    description:
      "Tra cứu nhanh dự án tiêu biểu, thông số kỹ thuật, hồ sơ chuyên gia từ Capability Library và khóa các giả định thương mại trước khi nộp giá chào thầu.",
    badge: "CHUYÊN MÔN",
    accentColor: "var(--stage-s6, #4F46E5)",
  },
  {
    role: "Pháp lý & Tài chính",
    title: "Kiểm soát điều khoản hợp đồng & Rủi ro bảo lãnh thầu",
    description:
      "Phát hiện sớm các điều khoản thanh toán bất lợi, rủi ro trượt giá vật tư, theo dõi tiến độ phát hành thư bảo lãnh dự thầu và kế hoạch dòng tiền tạm ứng.",
    badge: "KIỂM SOÁT RỦI RO",
    accentColor: "var(--stage-s2, #7F27FF)",
  },
  {
    role: "Quản trị hệ thống / IT",
    title: "Bảo vệ bí mật giá thầu & Vận hành hạ tầng riêng biệt",
    description:
      "Kiểm soát phân quyền RBAC 5 vai trò ở máy chủ, lưu vết kiểm toán Audit Log append-only và tuân thủ chặt chẽ Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15.",
    badge: "BẢO MẬT & HẠ TẦNG",
    accentColor: "var(--brand-panel, #032D60)",
  },
];

const entities = [
  {
    name: "1. Project (Dự án thực tế)",
    desc: "Công trình, nhà máy, hạ tầng KCN thực tế với địa điểm, chủ đầu tư, nguồn vốn FDI và mã định danh nội bộ chuẩn hóa.",
    accentColor: "var(--stage-s0, #64748B)",
  },
  {
    name: "2. Pursuit (Cơ hội theo đuổi)",
    desc: "Nỗ lực của doanh nghiệp để giành một phạm vi công việc cho dự án. Đây là Aggregate Root quản trị xuyên suốt giai đoạn S0-S3.",
    accentColor: "var(--stage-s2, #7F27FF)",
  },
  {
    name: "3. Work Package (Gói thầu)",
    desc: "Phân rã theo gói chuyên môn: Kết cấu, MEP, PCCC, Xử lý nước. Mỗi gói thầu mang tiến trình và kết quả riêng biệt từ S4-S8.",
    accentColor: "var(--stage-s3, #0D9488)",
  },
  {
    name: "4. Tender Round (Vòng thầu)",
    desc: "Vòng RFI, RFQ, RFP hoặc đấu lại. Khi đấu lại, hệ thống mở TenderRound mới, tuyệt đối không sửa hay ghi đè vòng cũ.",
    accentColor: "var(--stage-s4, #0284C7)",
  },
  {
    name: "5. Bid Submission (Hồ sơ nộp)",
    desc: "Hồ sơ dự thầu cụ thể kèm giá chào và chuỗi phiên bản (revision chain). Duy nhất một bản final được chốt trong mỗi vòng.",
    accentColor: "var(--stage-s5, #0176D3)",
  },
  {
    name: "6. Handover Pack (Gói bàn giao)",
    desc: "Bộ dữ liệu chuẩn hóa (phạm vi, cam kết thương mại, giả định, rủi ro) để chuyển giao sang hệ thống ERP/PM khi trúng thầu (Won).",
    accentColor: "var(--stage-s8, #04844B)",
  },
];

const scopeBoundaries = [
  {
    domain: "Tín hiệu dự án (Project Signals)",
    inScope:
      "Thu thập tín hiệu, import Excel, lọc trùng lặp (dedup), phân loại FDI/KCN và gán người phụ trách.",
    outScope:
      "Thu thập toàn bộ internet không kiểm soát; mua bán dữ liệu thương mại khi chưa có sự đồng thuận.",
  },
  {
    domain: "Đánh giá & Chọn cơ hội (Pursuit & Go/No-Go)",
    inScope:
      "Scorecard 6 tiêu chí trọng số 0-100, bắt buộc người duyệt, lý do dừng thầu No-bid và lưu vết kiểm toán.",
    outScope: "Tự động ra quyết định thay thế vai trò phê duyệt của con người.",
  },
  {
    domain: "Bên liên quan (Stakeholder Map)",
    inScope:
      "Bản đồ 4 vai trò (DM, Influencer, Champion, Gatekeeper), mức độ ảnh hưởng, độ ủng hộ và nhật ký tiếp xúc theo dự án.",
    outScope:
      "Theo dõi thông tin cá nhân ngoài phạm vi công việc hoặc trái quy định pháp luật.",
  },
  {
    domain: "Không gian đấu thầu (Tender Workspace)",
    inScope:
      "Mốc tiến độ, checklist 5 phòng ban, nhật ký làm rõ, chuỗi phiên bản hồ sơ và kiểm soát duy nhất 1 bản final.",
    outScope:
      "Tự động nộp thầu qua mạng công cộng thay thế cán bộ đấu thầu.",
  },
  {
    domain: "Dự toán & Thương mại (Estimate Summary)",
    inScope:
      "Tổng giá trị chào thầu, giả định thương mại, tóm tắt phiên bản giá và đính kèm bảng BOQ.",
    outScope:
      "Bóc tách khối lượng (takeoff) chi tiết từng dòng, định mức chi tiết, bảng đơn giá vật tư hàng ngàn mã.",
  },
  {
    domain: "Bàn giao sau trúng thầu (Handover)",
    inScope:
      "Gói dữ liệu bàn giao tiền thi công (S8 Handover Pack) chuẩn hóa dữ liệu sang hệ thống ERP/PM.",
    outScope:
      "Quản trị thi công công trường, nhật ký giám sát, nghiệm thu QA/QC, HSE, hạch toán công nợ kế toán.",
  },
];
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Header with Ambient Glow -->
    <section
      class="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden sf-gradient-bg border-b border-border"
    >
      <!-- Background subtle ambient glow -->
      <div
        class="absolute -top-32 -right-32 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        class="absolute top-1/2 -left-32 w-80 h-80 bg-foreground/5 rounded-full blur-3xl pointer-events-none"
      />

      <div class="sf-container relative z-10 text-center max-w-4xl space-y-6">
        <div class="inline-block">
          <SfBadge variant="green" size="md">
            ĐỊNH VỊ PRECON CRM
          </SfBadge>
        </div>

        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]"
        >
          Preconstruction CRM Là Gì?
          <span class="text-primary block mt-1">
            Cẩm Nang Quản Trị Cho Tổng Thầu Xây Dựng
          </span>
        </h1>

        <p
          class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal"
        >
          Preconstruction CRM là hệ thống làm việc chuẩn cho quá trình tìm kiếm, theo đuổi và giành dự án xây dựng công nghiệp: từ tín hiệu dự án đầu tiên đến kết quả Thắng/Thua và gói bàn giao tiền thi công.
        </p>

        <div class="pt-2 flex flex-wrap justify-center items-center gap-4">
          <SfButton
            variant="primary"
            size="lg"
            @click="openModal('Đăng ký Demo Khám phá Preconstruction CRM')"
          >
            <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              />
            </svg>
            Đặt lịch Demo 45 phút
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/business-map">
            Xem bản đồ nghiệp vụ
          </SfButton>
        </div>

        <!-- Trust Badges -->
        <div
          class="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs font-semibold text-muted-foreground border-t border-border/80 max-w-xl mx-auto"
        >
          <div class="flex items-center gap-1.5">
            <svg
              class="w-4 h-4 text-primary shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Chuỗi thực thể chuẩn ngành</span>
          </div>
          <div class="flex items-center gap-1.5">
            <svg
              class="w-4 h-4 text-primary shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Ranh giới rõ ràng với ERP</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Industrial General Contractors Need Precon CRM -->
    <section class="py-16 md:py-24 bg-card border-b border-border">
      <div class="sf-container">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 space-y-6">
            <div class="text-xs font-bold uppercase tracking-wider text-brand-text">
              KHOẢNG TRỐNG QUẢN TRỊ
            </div>
            <h2
              class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight tracking-tight"
            >
              Tại sao Tổng thầu Công nghiệp không thể dùng CRM bán hàng hay ERP?
            </h2>
            <p class="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
              CRM bán hàng truyền thống xoay quanh đơn hàng tiêu dùng (Deal/Order) với chu kỳ ngắn và cá nhân mua hàng đơn lẻ. Trong khi đó, ERP và phần mềm quản lý thi công chỉ bắt đầu sau khi hợp đồng đã ký. Preconstruction CRM lấp đầy đúng khoảng trống quan trọng nhất: phát hiện, chọn đúng cơ hội và giành thắng lợi trong đấu thầu.
            </p>
            <div class="space-y-4 pt-2">
              <div class="flex items-start gap-3.5">
                <span
                  class="w-7 h-7 rounded-full bg-brand-soft text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs tabular"
                >
                  1
                </span>
                <div>
                  <h4 class="font-extrabold text-foreground tracking-tight text-base">
                    Đối tượng trung tâm là Pursuit &amp; Work Package
                  </h4>
                  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-0.5 font-normal">
                    Một dự án có thể có nhiều cơ hội theo đuổi (Pursuit), mỗi cơ hội gồm nhiều gói thầu (Work Package) với chu kỳ đấu thầu độc lập.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3.5">
                <span
                  class="w-7 h-7 rounded-full bg-brand-soft text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs tabular"
                >
                  2
                </span>
                <div>
                  <h4 class="font-extrabold text-foreground tracking-tight text-base">
                    State Machine 5 Cổng Cứng (Server-Enforced)
                  </h4>
                  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-0.5 font-normal">
                    Không cho phép kéo thả tự do làm sai lệch pipeline; các cổng S2 (Go/No-Go), S4, S5, S7, S8 bắt buộc có bằng chứng và người duyệt ở máy chủ.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3.5">
                <span
                  class="w-7 h-7 rounded-full bg-brand-soft text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs tabular"
                >
                  3
                </span>
                <div>
                  <h4 class="font-extrabold text-foreground tracking-tight text-base">
                    Gói Bàn Giao (Handover Pack) chuẩn mực sang ERP
                  </h4>
                  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-0.5 font-normal">
                    Bidly kết thúc tại điểm Thắng thầu với gói bàn giao đầy đủ (phạm vi, cam kết thương mại, giả định, rủi ro) chuyển giao sang hệ thống thi công.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div
              class="sf-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all bg-card p-6 sm:p-8 space-y-6"
            >
              <div class="flex items-center justify-between border-b border-border/80 pb-4">
                <span class="text-xs font-bold uppercase tracking-wider text-primary">
                  Ranh giới vòng đời sản phẩm
                </span>
                <span class="text-xs text-muted-foreground font-mono tabular font-bold">
                  S0 ➔ S8
                </span>
              </div>
              <div class="space-y-4">
                <div class="p-4 sm:p-5 rounded-lg bg-secondary/50 flex items-center gap-4 shadow-xs">
                  <div
                    class="w-11 h-11 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-extrabold text-sm shrink-0"
                  >
                    S0
                  </div>
                  <div>
                    <div class="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Điểm bắt đầu
                    </div>
                    <div class="text-sm font-extrabold text-foreground tracking-tight">
                      Tín hiệu dự án &amp; Sàng lọc cơ hội
                    </div>
                    <div class="text-xs text-muted-foreground font-normal mt-0.5">
                      Project Inbox, dedup, FDI/KCN mapping, gán owner
                    </div>
                  </div>
                </div>

                <div class="p-4 sm:p-5 rounded-lg bg-secondary/50 flex items-center gap-4 shadow-xs">
                  <div
                    class="w-11 h-11 rounded-lg bg-stage-s4 text-white flex items-center justify-center font-extrabold text-sm shrink-0"
                  >
                    S2-S6
                  </div>
                  <div>
                    <div class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Tiền đấu thầu &amp; Đấu thầu
                    </div>
                    <div class="text-sm font-extrabold text-foreground tracking-tight">
                      Scorecard Go/No-Go &amp; Tender Workspace
                    </div>
                    <div class="text-xs text-muted-foreground font-normal mt-0.5">
                      Checklist 5 phòng ban, bất biến 1 bản final, làm rõ
                    </div>
                  </div>
                </div>

                <div class="p-4 sm:p-5 rounded-lg bg-secondary/50 flex items-center gap-4 shadow-xs">
                  <div
                    class="w-11 h-11 rounded-lg bg-stage-s8 text-white flex items-center justify-center font-extrabold text-sm shrink-0"
                  >
                    S8
                  </div>
                  <div>
                    <div class="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Điểm kết thúc
                    </div>
                    <div class="text-sm font-extrabold text-foreground tracking-tight">
                      Gói bàn giao tiền thi công (Handover Pack)
                    </div>
                    <div class="text-xs text-muted-foreground font-normal mt-0.5">
                      Chuyển giao dữ liệu sang ERP/PM thi công
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3-Way Comparison Table -->
    <section class="py-16 md:py-24 bg-secondary/40 border-b border-border">
      <div class="sf-container space-y-12 md:space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-brand-text">
            SO SÁNH BẢN CHẤT
          </div>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Khác Biệt Giữa CRM Bán Lẻ, Preconstruction CRM &amp; ERP
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            Bảng đối chiếu 7 tiêu chí then chốt giúp doanh nghiệp định vị đúng công cụ cho từng giai đoạn.
          </p>
        </div>

        <div class="overflow-x-auto rounded-xl bg-card shadow-card">
          <table class="w-full text-left text-sm">
            <thead class="bg-muted/60 border-b border-border text-foreground font-extrabold">
              <tr>
                <th class="p-4 sm:p-5">Tiêu chí</th>
                <th class="p-4 sm:p-5 text-muted-foreground font-semibold">
                  CRM Bán lẻ (MISA, Base...)
                </th>
                <th
                  class="p-4 sm:p-5 text-primary bg-brand-soft/40 border-x border-brand-soft font-extrabold"
                >
                  Bidly Preconstruction CRM
                </th>
                <th class="p-4 sm:p-5 text-muted-foreground font-semibold">
                  ERP / PM Thi công (SAP, BIM...)
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border/70">
              <tr
                v-for="(row, rIdx) in comparisonThreeWays"
                :key="rIdx"
                class="hover:bg-muted/30 transition-colors"
              >
                <td class="p-4 sm:p-5 font-bold text-foreground whitespace-nowrap">
                  {{ row.criteria }}
                </td>
                <td class="p-4 sm:p-5 text-muted-foreground font-normal">
                  {{ row.retailCrm }}
                </td>
                <td
                  class="p-4 sm:p-5 font-bold text-foreground bg-brand-soft/20 border-x border-brand-soft"
                >
                  {{ row.preconCrm }}
                </td>
                <td class="p-4 sm:p-5 text-muted-foreground font-normal">
                  {{ row.erp }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Canonical Data Model Chain -->
    <section class="py-16 md:py-24 bg-card border-b border-border">
      <div class="sf-container space-y-12 md:space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-brand-text">
            MÔ HÌNH DỮ LIỆU CỐT LÕI
          </div>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Chuỗi Thực Thể Nghiệp Vụ Chuẩn (Canonical Model)
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            Phân định rõ ràng từng cấp bậc dữ liệu: giải quyết trọn vẹn bài toán một dự án đấu thầu nhiều gói thầu song song (Multi-package) và kết quả thầu từng phần (Partial Award).
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
        >
          <div
            v-for="(ent, eIdx) in entities"
            :key="eIdx"
            class="sf-card group bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
          >
            <!-- Top Accent Bar -->
            <div
              class="h-2 w-full shrink-0"
              :style="{ backgroundColor: ent.accentColor }"
            />

            <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-3">
              <div class="space-y-2">
                <div class="text-xs font-mono font-bold text-primary uppercase tabular">
                  Entity #0{{ eIdx + 1 }}
                </div>
                <h3
                  class="text-lg sm:text-xl font-extrabold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors"
                >
                  {{ ent.name }}
                </h3>
                <p
                  class="text-sm text-muted-foreground leading-relaxed font-normal"
                >
                  {{ ent.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6 Personas Jobs-to-be-Done -->
    <section id="personas" class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container space-y-12 md:space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-brand-text">
            VAI TRÒ &amp; GIẢI PHÁP
          </div>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Bidly Phục Vụ Đúng Nhu Cầu Của 6 Nhóm Nhân Sự Then Chốt
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            Mỗi vai trò trong doanh nghiệp tổng thầu có góc nhìn dữ liệu và quyền hạn tương ứng trên cùng một hệ thống duy nhất.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
        >
          <div
            v-for="(persona, pIdx) in personas"
            :key="pIdx"
            class="sf-card group bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
          >
            <!-- Top Accent Bar -->
            <div
              class="h-2 w-full shrink-0"
              :style="{ backgroundColor: persona.accentColor }"
            />

            <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <SfBadge variant="navy" size="sm">{{ persona.role }}</SfBadge>
                </div>
                <h3
                  class="text-base sm:text-lg font-extrabold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors"
                >
                  {{ persona.title }}
                </h3>
                <p
                  class="text-sm text-muted-foreground leading-relaxed font-normal"
                >
                  {{ persona.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- In-Scope vs Out-of-Scope Boundaries -->
    <section class="py-16 md:py-24 bg-card border-b border-border">
      <div class="sf-container space-y-12 md:space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-brand-text">
            RANH GIỚI HỆ THỐNG
          </div>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Ranh Giới Rõ Ràng: Không Làm Tràn Lan
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            Bidly tập trung làm xuất sắc miền Preconstruction, không cố gắng trở thành một ERP cồng kềnh hay phần mềm dự toán chi tiết.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          <div
            v-for="(bound, bIdx) in scopeBoundaries"
            :key="bIdx"
            class="sf-card bg-card p-6 sm:p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 space-y-3"
          >
            <h3
              class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2.5 tracking-tight"
            >
              <span class="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
              {{ bound.domain }}
            </h3>
            <div class="space-y-2.5 text-xs sm:text-sm pt-1">
              <div class="text-foreground font-medium leading-relaxed">
                <strong class="text-primary font-bold">Trong phạm vi:</strong> {{ bound.inScope }}
              </div>
              <div class="text-muted-foreground font-normal leading-relaxed">
                <strong class="text-destructive font-bold">Ngoài phạm vi:</strong> {{ bound.outScope }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Contact Blade -->
    <SfContactPillars />
  </div>
</template>

