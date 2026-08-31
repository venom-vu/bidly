<script setup lang="ts">
import SfBadge from "~/components/ui/SfBadge.vue";
import SfButton from "~/components/ui/SfButton.vue";
import SfContactPillars from "~/components/blades/SfContactPillars.vue";
import SfFaqAccordion from "~/components/blades/SfFaqAccordion.vue";
import { useDemoModal } from "~/composables/useDemoModal";

definePageMeta({
  alias: ["/5-cong-kiem-soat", "/features/gates", "/hard-gates", "/crm/gates"],
});

useSeoMeta({
  title: "5 Cổng Cứng Kiểm Soát (Hard Gates) | Bidly Preconstruction CRM",
  description:
    "Khám phá 5 chốt chặn kiểm soát cứng ở tầng máy chủ của Bidly: S2 (Go/No-Go), S4 (Tender Active), S5 (Nộp bản Final), S7 (Kết quả thầu), S8 (Bàn giao thi công) bảo vệ toàn vẹn dữ liệu và ngân sách thầu.",
});

const { openModal } = useDemoModal();

const serverPillars = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Xử Lý Đồng Bộ An Toàn",
    desc: "Chuyển bước, cập nhật dữ liệu và ghi lịch sử đồng thời. Tự động hoàn tác nếu phát sinh lỗi, đảm bảo dữ liệu luôn nhất quán và chính xác.",
  },
  {
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "Chống Ghi Đè Dữ Liệu",
    desc: "Kiểm soát phiên bản theo thời gian thực. Tự động cảnh báo và ngăn chặn khi nhiều người cùng chỉnh sửa một cơ hội, bảo vệ an toàn dữ liệu hồ sơ.",
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    title: "Lịch Sử Minh Bạch",
    desc: "Tự động lưu vết vĩnh viễn mọi hành động phê duyệt, người thực hiện và lý do. Không thể chỉnh sửa hay xóa bỏ lịch sử đã chốt.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Phân Quyền Chặt Chẽ",
    desc: "Thực thi ma trận 5 vai trò trực tiếp từ hệ thống lõi. Ngăn chặn tuyệt đối các thao tác vượt quyền hoặc nhầm lẫn giữa các phòng ban.",
  },
];

const hardGates = [
  {
    number: "01",
    stageCode: "S2",
    stageName: "Phê Duyệt Go / No-Go",
    accentColor: "var(--stage-s2, #7F27FF)",
    position: "S2 ➔ S3 (Chuẩn bị thầu) hoặc S7 (No-bid)",
    authority: "CEO / Giám Đốc Kinh Doanh",
    ruleHeadline:
      "Bắt buộc có quyết định Scorecard hợp lệ được lãnh đạo phê duyệt",
    enforcingMechanism: [
      "Chỉ chuyển bước khi có quyết định Scorecard chính thức từ lãnh đạo — hệ thống từ chối các thao tác kéo thả tự do.",
      "Tự động tính lại điểm (0–100) theo 6 tiêu chí trọng số tại thời điểm duyệt.",
      "Phân luồng tự động: Duyệt GO sang S3, duyệt NO_GO sang S7 (No-bid kèm lý do).",
      "Bắt buộc nhập lý do và tự động lưu vết định danh người phê duyệt vào lịch sử.",
    ],
    riskEliminated:
      "Loại bỏ tình trạng làm thầu theo cảm tính; tiết kiệm chi phí và tập trung nguồn lực vào cơ hội có tỷ lệ thắng cao.",
    dataArtifacts:
      "Báo cáo Scorecard 6 tiêu chí, Quyết định Go/No-Go ký số, Hồ sơ tóm tắt Pursuit Brief.",
  },
  {
    number: "02",
    stageCode: "S4",
    stageName: "Kích Hoạt Đấu Thầu Chính Thức",
    accentColor: "var(--stage-s4, #0284C7)",
    position: "S3 (Chuẩn bị thầu) ➔ S4 (Đang đấu thầu)",
    authority: "Trưởng Phòng Đấu Thầu & GĐKD",
    ruleHeadline:
      "Kích hoạt Tender Workspace, phân rã checklist 5 phòng ban và ấn định hạn chốt",
    enforcingMechanism: [
      "Tự động khởi tạo Gói thầu và Vòng thầu chính thức đầu tiên.",
      "Kích hoạt phòng thầu số với checklist chuẩn ngành cho 5 bộ phận: Pháp lý, Kỹ thuật, MEP, Dự toán, HSE.",
      "Ấn định mốc nộp thầu và kích hoạt cảnh báo đếm ngược 7-14-30 ngày.",
      "Khóa ngân sách làm thầu và phân quyền truy cập tài liệu bảo mật theo vai trò.",
    ],
    riskEliminated:
      "Tránh làm hồ sơ tự phát, đùn đẩy trách nhiệm giữa các phòng ban, thất lạc tài liệu và trễ hạn nộp thầu.",
    dataArtifacts:
      "Gói thầu, Vòng thầu 1, Checklist 5 phòng ban, Lịch tiến độ nộp thầu.",
  },
  {
    number: "03",
    stageCode: "S5",
    stageName: "Xác Nhận Nộp Bản Final",
    accentColor: "var(--stage-s5, #0176D3)",
    position: "S4 (Đang đấu thầu) ➔ S5 (Đã nộp hồ sơ)",
    authority: "Tender Lead & Chuyên Viên BD",
    ruleHeadline:
      "Sang S5 duy nhất bằng bản nộp Final chính thức kèm bằng chứng nộp",
    enforcingMechanism: [
      "Chỉ cho phép chuyển sang giai đoạn Đã nộp khi đã chọn duy nhất 1 bản nộp Final và có bằng chứng nộp thực tế.",
      "Nguyên tắc duy nhất 1 bản Final: Mỗi vòng thầu chỉ có tối đa 1 bản nộp Final, tự động gỡ cờ bản cũ khi cập nhật.",
      "Thao tác nộp hồ sơ được đồng bộ tự động: xác nhận nộp thành công, lưu vết nhật ký và chuyển sang giai đoạn Đã nộp.",
    ],
    riskEliminated:
      "Triệt tiêu rủi ro nộp nhầm file giá cũ, hồ sơ chưa hoàn thiện hoặc lệch phiên bản kỹ thuật - thương mại.",
    dataArtifacts:
      "Bản nộp Final chính thức, Dấu thời gian / Biên nhận nộp thầu, Lịch sử các phiên bản hồ sơ.",
  },
  {
    number: "04",
    stageCode: "S7",
    stageName: "Chốt Kết Quả & Khóa Cơ Hội",
    accentColor: "var(--stage-s7, #475569)",
    position: "S4 / S5 / S6 hoặc dừng sớm ➔ S7 (Kết quả)",
    authority: "CEO / Giám Đốc Kinh Doanh",
    ruleHeadline:
      "Bắt buộc chọn kết quả (Thắng / Trượt / Dừng thầu) & Khóa cứng nếu không trúng thầu",
    enforcingMechanism: [
      "Bắt buộc cập nhật 1 trong 3 trạng thái kết quả: Thắng thầu (WON), Trượt thầu (LOST), Dừng thầu (NO_BID).",
      "Bắt buộc nhập lý do, đối thủ thắng và giá trúng thực tế để phục vụ phân tích rút kinh nghiệm.",
      "Khóa chuyển bước: Chặn 100% lệnh chuyển tiếp sang Bàn giao nếu kết quả là Trượt hoặc Dừng thầu.",
      "Quy trình Đấu lại: Mở vòng thầu mới kế thừa vòng cũ khi chủ đầu tư yêu cầu đấu lại, không sửa đè kết quả đã chốt.",
    ],
    riskEliminated:
      "Xóa sổ pipeline ảo, ngăn việc tự ý mở lại cơ hội đã đóng trái quy trình và tích lũy tri thức cạnh tranh.",
    dataArtifacts:
      "Thông báo kết quả / Thư trao thầu, Báo cáo phân tích Thắng/Thua, Dữ liệu cập nhật tỷ lệ trúng thầu.",
  },
  {
    number: "05",
    stageCode: "S8",
    stageName: "Bàn Giao Tiền Thi Công",
    accentColor: "var(--stage-s8, #04844B)",
    position: "S7 (Dự án WON) ➔ S8 (Bàn giao thi công)",
    authority: "GĐKD, Đấu Thầu ➔ Ban Chỉ Huy",
    ruleHeadline:
      "Chỉ mở cho dự án Trúng thầu & Bắt buộc đầy đủ 4 cấu phần gói bàn giao chuẩn hóa",
    enforcingMechanism: [
      "Kiểm tra điều kiện bàn giao: Chỉ cho phép bàn giao các dự án đã có kết quả Trúng thầu (WON).",
      "Yêu cầu đầy đủ hồ sơ: Bắt buộc đính kèm lý do phê duyệt và biên bản bàn giao trước khi hoàn tất chuyển bước.",
      "Chuẩn hóa Handover Pack 4 cấu phần: Phạm vi cam kết, Giả định định mức chi phí, Danh mục rủi ro & File nộp chính thức.",
      "Lưu vết người bàn giao - tiếp nhận vào nhật ký hệ thống, sẵn sàng đồng bộ dữ liệu sang phần mềm quản lý thi công (ERP).",
    ],
    riskEliminated:
      "Xóa bỏ khoảng trống thông tin và tranh chấp trách nhiệm giữa Đấu thầu và Công trường; ngăn phát sinh vượt dự toán.",
    dataArtifacts:
      "Gói bàn giao Handover Pack 4 cấu phần, Biên bản bàn giao ký duyệt, Dữ liệu chuẩn hóa bàn giao sang ERP.",
  },
];

const comparisonRows = [
  {
    feature: "Cơ chế kiểm soát quy trình",
    genericCrm: "Chủ yếu ở Giao diện người dùng (dễ bị kéo thả tùy tiện)",
    bidlyHardGate: "Kiểm soát bắt buộc từ hệ thống (Tự động & An toàn tuyệt đối)",
  },
  {
    feature: "Chuyển giai đoạn sai điều kiện",
    genericCrm: "Cho phép kéo thả tự do, tạo dữ liệu ảo và nhảy cóc bước",
    bidlyHardGate:
      "Hệ thống tự động ngăn chặn 100% thao tác sai quy trình",
  },
  {
    feature: "Kiểm soát hồ sơ nộp thầu",
    genericCrm: "Không có khái niệm bản Final; dễ nộp nhầm file giá cũ",
    bidlyHardGate:
      "Quy tắc cứng: Tối đa 1 bản Final duy nhất mỗi vòng, khóa khi nộp",
  },
  {
    feature: "Phê duyệt Go/No-Go (S2)",
    genericCrm: "Duyệt bằng miệng, email hoặc tích ô check đơn giản",
    bidlyHardGate:
      "Scorecard 6 tiêu chí trọng số 0-100 tự động tính toán minh bạch",
  },
  {
    feature: "Bàn giao sang thi công (S8)",
    genericCrm: "Không có cấu phần Handover, chuyển giao qua họp miệng",
    bidlyHardGate: "Handover Pack 4 cấu phần chuẩn hóa, chỉ mở cho dự án Thắng",
  },
  {
    feature: "Nhật ký chuyển bước & Lịch sử",
    genericCrm: "Log đơn giản, dễ bị ghi đè hoặc không đồng bộ",
    bidlyHardGate:
      "Lưu vết lịch sử tự động, minh bạch và không thể sửa xóa",
  },
];
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Header — Salesforce marquee light blade -->
    <section
      class="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-white sf-section-border"
    >
      <div
        class="sf-container relative z-10 text-center max-w-4xl mx-auto space-y-6"
      >
        <div>
          <span class="sf-eyebrow">KIỂM SOÁT HỆ THỐNG · 5 CHỐT CHẶN CỨNG</span>
        </div>
        <h1
          class="text-3xl sm:text-4xl lg:text-[2.875rem] xl:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]"
        >
          5 Cổng Cứng Kiểm Soát
          <span class="text-primary block mt-1">
            Bảo Vệ Toàn Vẹn Dữ Liệu Thầu
          </span>
        </h1>
        <p
          class="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
          style="color: #54698d"
        >
          Không kiểm tra hời hợt ở giao diện, 5 cổng cứng của Bidly được kiểm soát tự động và nghiêm ngặt từ hệ thống lõi. Loại bỏ hoàn toàn rủi ro lách quy trình, nhầm phiên bản hồ sơ hay lãng phí chi phí làm thầu.
        </p>
      </div>
    </section>

    <!-- 4 Server Enforcing Pillars -->
    <section class="py-12 md:py-16 bg-card border-b border-border/80">
      <div class="sf-container space-y-8">
        <div class="text-center max-w-3xl mx-auto space-y-2">
          <h2
            class="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight"
          >
            Cơ Chế Thực Thi Cổng Cứng Ở Tầng Máy Chủ
          </h2>
          <p
            class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto"
          >
            4 trụ cột công nghệ đảm bảo mọi quy tắc kiểm soát được thực thi
            tuyệt đối, không thể lách qua giao diện.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(pillar, pIdx) in serverPillars"
            :key="pIdx"
            class="sf-card group bg-card rounded-xl p-6 sm:p-7 border border-border/70 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 space-y-3 flex flex-col justify-between"
          >
            <div class="space-y-3">
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center"
                style="background: #e8f4fd"
              >
                <svg
                  class="w-5 h-5"
                  style="color: #0176d3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="pillar.icon"
                  />
                </svg>
              </div>
              <h3
                class="text-base font-extrabold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors"
              >
                {{ pillar.title }}
              </h3>
              <p
                class="text-xs sm:text-sm leading-relaxed"
                style="color: #54698d"
              >
                {{ pillar.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vertical 5 Hard Gates Breakdown -->
    <section class="py-16 md:py-24 bg-background border-b border-border/80">
      <div class="sf-container space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Chi Tiết Từng Chốt Chặn Kiểm Soát Cứng
          </h2>
          <p
            class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto"
          >
            Kiểm soát nghiêm ngặt tại 5 điểm nút trọng yếu — phân định rõ thẩm
            quyền, điều kiện tiên quyết và hồ sơ đầu ra.
          </p>
        </div>

        <div class="max-w-5xl mx-auto space-y-0">
          <div
            v-for="(gate, gIdx) in hardGates"
            :key="gate.number"
            :id="`gate-${gate.number}`"
            class="flex items-stretch gap-4 sm:gap-6 md:gap-8 group"
          >
            <!-- Gate Number Badge (Left Node on Timeline) -->
            <div class="flex flex-col items-center shrink-0 w-11 sm:w-14">
              <div
                class="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-brand-soft text-primary font-extrabold text-sm sm:text-base md:text-lg flex items-center justify-center border border-primary/25 shadow-xs shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
              >
                {{ gate.stageCode }}
              </div>
              <div
                v-if="gIdx < hardGates.length - 1"
                class="w-0.5 flex-1 bg-border/80 my-2.5 sm:my-3 group-hover:bg-primary/30 transition-colors"
              />
            </div>

            <!-- Gate Card (Right Content) -->
            <div class="flex-1 pb-8 sm:pb-10">
              <div
                class="sf-card group bg-card rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 overflow-hidden w-full border border-border/70"
              >
                <div class="p-6 sm:p-8 space-y-6">
                  <!-- Header Info -->
                  <div
                    class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2.5 border-b border-border/70 pb-4"
                  >
                    <div class="space-y-1">
                      <div class="flex items-center gap-2.5 flex-wrap">
                        <span
                          class="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-brand-soft text-primary border border-primary/20"
                        >
                          CỔNG #{{ gate.number }}
                        </span>
                        <h3
                          class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight"
                        >
                          {{ gate.stageName }}
                        </h3>
                      </div>
                      <p
                        class="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 font-medium"
                      >
                        <span class="text-primary font-semibold">Lộ trình:</span>
                        <span>{{ gate.position }}</span>
                      </p>
                    </div>

                    <div
                      class="text-xs text-muted-foreground shrink-0 bg-secondary/60 px-2.5 py-1 rounded-md"
                    >
                      Thẩm quyền:
                      <strong class="text-foreground">{{
                        gate.authority
                      }}</strong>
                    </div>
                  </div>

                <!-- Rule Headline -->
                <div
                  class="bg-brand-soft/70 border border-brand/20 rounded-xl p-4 flex items-start gap-3"
                >
                  <svg
                    class="w-5 h-5 text-primary shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div>
                    <div
                      class="text-xs font-bold uppercase tracking-wider text-primary"
                    >
                      Nguyên tắc kiểm soát cốt lõi
                    </div>
                    <div
                      class="text-xs sm:text-sm font-bold text-foreground mt-0.5"
                    >
                      {{ gate.ruleHeadline }}
                    </div>
                  </div>
                </div>

                <!-- Enforcing Mechanism Checklist -->
                <div class="space-y-3">
                  <div
                    class="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5"
                  >
                    <svg
                      class="w-4 h-4 text-emerald-600 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Cơ chế kiểm soát tại máy chủ:</span>
                  </div>
                  <ul class="space-y-2.5">
                    <li
                      v-for="(mech, mIdx) in gate.enforcingMechanism"
                      :key="mIdx"
                      class="text-xs sm:text-sm text-muted-foreground font-normal flex items-start gap-2.5 leading-relaxed"
                    >
                      <span
                        class="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"
                      />
                      <span>{{ mech }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Risk Eliminated & Data Artifacts -->
                <div
                  class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-border/70"
                >
                  <div
                    class="bg-secondary/30 rounded-xl p-4 border border-border/60 space-y-1"
                  >
                    <div
                      class="text-[11px] font-bold uppercase tracking-wider text-destructive flex items-center gap-1"
                    >
                      <svg
                        class="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>Rủi ro loại bỏ:</span>
                    </div>
                    <p
                      class="text-xs text-muted-foreground font-normal leading-relaxed"
                    >
                      {{ gate.riskEliminated }}
                    </p>
                  </div>

                  <div
                    class="bg-secondary/30 rounded-xl p-4 border border-border/60 space-y-1"
                  >
                    <div
                      class="text-[11px] font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1"
                    >
                      <svg
                        class="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>Hồ sơ &amp; Bằng chứng sinh ra:</span>
                    </div>
                    <p
                      class="text-xs text-muted-foreground font-normal leading-relaxed"
                    >
                      {{ gate.dataArtifacts }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- Comparison Table: Bidly Hard Gates vs Generic CRM -->
    <section class="py-16 md:py-24 bg-card border-b border-border/80">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            5 Cổng Cứng Bidly vs CRM Bán Lẻ Thông Thường
          </h2>
          <p
            class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto"
          >
            Sự khác biệt cốt lõi nằm ở khả năng enforce luật nghiệp vụ tại máy
            chủ, loại trừ hoàn toàn việc thao tác sai hoặc bỏ qua quy trình.
          </p>
        </div>

        <div
          class="sf-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-border/70 max-w-5xl mx-auto bg-card"
        >
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr
                  class="bg-secondary/70 border-b border-border text-xs uppercase font-extrabold tracking-wider text-foreground"
                >
                  <th class="py-4 px-6">Tiêu chí kiểm soát</th>
                  <th class="py-4 px-6 text-muted-foreground">
                    CRM Phổ Thông / Bán Lẻ
                  </th>
                  <th class="py-4 px-6 text-primary bg-brand-soft/60">
                    5 Cổng Cứng Bidly CRM
                  </th>
                </tr>
              </thead>
              <tbody
                class="divide-y divide-border text-xs sm:text-sm font-normal"
              >
                <tr
                  v-for="(row, rIdx) in comparisonRows"
                  :key="rIdx"
                  class="hover:bg-secondary/30 transition-colors"
                >
                  <td class="py-4 px-6 font-bold text-foreground">
                    {{ row.feature }}
                  </td>
                  <td class="py-4 px-6 text-muted-foreground">
                    {{ row.genericCrm }}
                  </td>
                  <td
                    class="py-4 px-6 font-semibold text-primary bg-brand-soft/30"
                  >
                    {{ row.bidlyHardGate }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="pt-4 text-center">
          <SfButton variant="primary" size="lg" to="/stages">
            Xem toàn bộ 9 Giai Đoạn Cố Định ➔
          </SfButton>
        </div>
      </div>
    </section>

    <!-- Bottom Contact & FAQ Blades -->
    <SfContactPillars />
    <SfFaqAccordion />
  </div>
</template>
