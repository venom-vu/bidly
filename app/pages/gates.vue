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
    title: "Giao Dịch Đơn Khối",
    desc: "Đổi stage, cập nhật dữ liệu và ghi log trong 1 transaction duy nhất. Tự động rollback khi có lỗi, chống phân mảnh trạng thái.",
  },
  {
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "Khóa Lạc Quan",
    desc: "Kiểm soát phiên bản qua cột version. Báo lỗi 409 Conflict nếu dữ liệu bị sửa cùng lúc, chống ghi đè dữ liệu thầu.",
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    title: "Nhật Ký Bất Biến",
    desc: "Lưu vết vĩnh viễn StageHistory và Audit Log trong transaction. Không thể chỉnh sửa hay xóa bỏ lịch sử phê duyệt.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Phân Quyền Chặt Chẽ",
    desc: "Thực thi ma trận 5 vai trò trực tiếp tại máy chủ qua PermissionsGuard. Chặn ngay từ API các thao tác vượt quyền hạn.",
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
      "Rời S2 duy nhất qua ScorecardService.decide — máy chủ từ chối lệnh đổi stage trần.",
      "Tự động tính lại điểm (0–100) theo 6 tiêu chí trọng số tại thời điểm duyệt.",
      "Phân luồng tự động: Duyệt GO sang S3, duyệt NO_GO sang S7 (No-bid kèm lý do).",
      "Bắt buộc nhập lý do và lưu định danh người phê duyệt vào StageHistory.",
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
      "Tự động khởi tạo WorkPackage (Gói thầu) và TenderRound (Vòng thầu 1).",
      "Kích hoạt Tender Workspace với checklist chuẩn ngành cho 5 bộ phận: Pháp lý, Kỹ thuật, MEP, Dự toán, HSE.",
      "Ấn định mốc nộp thầu (Deadline) và kích hoạt cảnh báo đếm ngược 7-14-30 ngày.",
      "Khóa ngân sách làm thầu và phân quyền truy cập tài liệu bảo mật theo vai trò.",
    ],
    riskEliminated:
      "Tránh làm hồ sơ tự phát, đùn đẩy trách nhiệm giữa các phòng ban, thất lạc tài liệu và trễ hạn nộp thầu.",
    dataArtifacts:
      "Gói thầu WorkPackage, Vòng thầu TenderRound 1, Checklist 5 phòng ban, Lịch tiến độ nộp thầu.",
  },
  {
    number: "03",
    stageCode: "S5",
    stageName: "Xác Nhận Nộp Bản Final",
    accentColor: "var(--stage-s5, #0176D3)",
    position: "S4 (Đang đấu thầu) ➔ S5 (Đã nộp hồ sơ)",
    authority: "Tender Lead & Chuyên Viên BD",
    ruleHeadline:
      "Sang S5 duy nhất bằng bản nộp Final ở trạng thái SUBMITTED kèm bằng chứng",
    enforcingMechanism: [
      "Máy chủ chặn lệnh đổi stage trần — chỉ cho phép sang S5 khi có BidSubmission (isFinal = true & status = SUBMITTED) trong round mở.",
      "Bất biến duy nhất 1 bản Final: Mỗi round chỉ có tối đa 1 bản nộp Final, tự động gỡ cờ bản cũ khi cập nhật.",
      "Thao tác submitFinal bọc đồng thời: xác nhận SUBMITTED + ghi Audit Log + chuyển S5 trong một transaction.",
    ],
    riskEliminated:
      "Triệt tiêu rủi ro nộp nhầm file giá cũ, hồ sơ chưa hoàn thiện hoặc lệch phiên bản kỹ thuật - thương mại.",
    dataArtifacts:
      "Bản nộp BidSubmission Final, Dấu thời gian / Biên nhận nộp thầu, Chuỗi lịch sử phiên bản (revision chain).",
  },
  {
    number: "04",
    stageCode: "S7",
    stageName: "Chốt Kết Quả & Khóa Cơ Hội",
    accentColor: "var(--stage-s7, #475569)",
    position: "S4 / S5 / S6 hoặc dừng sớm ➔ S7 (Kết quả)",
    authority: "CEO / Giám Đốc Kinh Doanh",
    ruleHeadline:
      "Bắt buộc chọn Outcome (WON / LOST / NO_BID) & Khóa cứng nếu không trúng thầu",
    enforcingMechanism: [
      "Bắt buộc cập nhật 1 trong 3 trạng thái outcome: WON (Trúng thầu), LOST (Trượt thầu), NO_BID (Rút lui).",
      "Bắt buộc nhập lý do, đối thủ thắng và giá trúng thực tế để phục vụ Win/Loss Analysis.",
      "Khóa trạng thái Terminal: Chặn 100% lệnh chuyển tiếp sang S8 nếu outcome là LOST hoặc NO_BID.",
      "Quy trình Re-bid: Mở TenderRound mới kế thừa round cũ khi CĐT yêu cầu đấu lại, không sửa đè kết quả đã chốt.",
    ],
    riskEliminated:
      "Xóa sổ pipeline ảo, ngăn việc tự ý mở lại cơ hội đã đóng trái quy trình và tích lũy tri thức cạnh tranh.",
    dataArtifacts:
      "Thư trúng thầu (LOA) / Thông báo kết quả, Báo cáo Win/Loss Analysis, Dữ liệu cập nhật Win Rate.",
  },
  {
    number: "05",
    stageCode: "S8",
    stageName: "Bàn Giao Tiền Thi Công",
    accentColor: "var(--stage-s8, #04844B)",
    position: "S7 (Dự án WON) ➔ S8 (Bàn giao thi công)",
    authority: "GĐKD, Đấu Thầu ➔ Ban Chỉ Huy",
    ruleHeadline:
      "Chỉ mở cho dự án WON & Bắt buộc đầy đủ 4 cấu phần gói bàn giao chuẩn hóa",
    enforcingMechanism: [
      "Kiểm tra canEnterHandover ở máy chủ: Chặn tuyệt đối mọi cơ hội có outcome khác WON.",
      "Gác cổng requireReason: Từ chối lệnh chuyển sang S8 nếu thiếu lý do và biên bản bàn giao.",
      "Chuẩn hóa Handover Pack 4 cấu phần: Phạm vi cam kết, Giả định định mức chi phí, Danh mục rủi ro & File Final.",
      "Lưu vết người bàn giao - tiếp nhận vào Audit Log, sẵn sàng đẩy dữ liệu qua API sang ERP/PM.",
    ],
    riskEliminated:
      "Xóa bỏ khoảng trống thông tin và tranh chấp trách nhiệm giữa Đấu thầu và Công trường; ngăn phát sinh vượt dự toán.",
    dataArtifacts:
      "Gói bàn giao Handover Pack 4 cấu phần, Biên bản bàn giao ký duyệt, Payload dữ liệu chuẩn hóa sang ERP/PM.",
  },
];

const comparisonRows = [
  {
    feature: "Vị trí kiểm soát & Enforce",
    genericCrm: "Chủ yếu ở Giao diện người dùng (dễ bị vượt qua)",
    bidlyHardGate: "Enforce nghiêm ngặt ở tầng Máy chủ (Database Transaction)",
  },
  {
    feature: "Chuyển giai đoạn sai điều kiện",
    genericCrm: "Cho phép kéo thả tự do, tạo dữ liệu ảo và nhảy cóc bước",
    bidlyHardGate:
      "Máy chủ trả về HTTP 400/409, chặn 100% lệnh chuyển sai luật",
  },
  {
    feature: "Kiểm soát hồ sơ nộp thầu",
    genericCrm: "Không có khái niệm bản Final; dễ nộp nhầm file giá cũ",
    bidlyHardGate:
      "Bất biến: Tối đa 1 bản Final duy nhất mỗi round, khóa khi Submit",
  },
  {
    feature: "Phê duyệt Go/No-Go (S2)",
    genericCrm: "Duyệt bằng miệng, email hoặc tích ô check đơn giản",
    bidlyHardGate:
      "Scorecard 6 tiêu chí trọng số 0-100 tính lại realtime tại máy chủ",
  },
  {
    feature: "Bàn giao sang thi công (S8)",
    genericCrm: "Không có cấu phần Handover, chuyển giao qua họp miệng",
    bidlyHardGate: "Handover Pack 4 cấu phần chuẩn hóa, chỉ mở cho cơ hội WON",
  },
  {
    feature: "Nhật ký chuyển bước & Kiểm toán",
    genericCrm: "Log đơn giản, dễ bị ghi đè hoặc không đồng bộ",
    bidlyHardGate:
      "StageHistory & Audit Log append-only ghi trong cùng transaction",
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
          <span class="sf-eyebrow">KIỂM SOÁT TẦNG MÁY CHỦ · HARD GATES</span>
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
          Không kiểm tra hời hợt ở giao diện, 5 cổng cứng của Bidly được thực
          thi nghiêm ngặt tại máy chủ trong Database Transaction. Loại bỏ hoàn
          toàn rủi ro lách quy trình, nhầm phiên bản hồ sơ hay lãng phí chi phí
          làm thầu.
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

        <div class="relative max-w-5xl mx-auto space-y-12">
          <!-- Continuous Vertical Background Line -->
          <div
            class="hidden md:block absolute top-8 bottom-8 left-[39px] w-1 bg-border/80 rounded-full z-0"
          />

          <div
            v-for="gate in hardGates"
            :key="gate.number"
            class="relative z-10 flex flex-col md:flex-row items-start gap-6 md:gap-8 group"
          >
            <!-- Gate Number Badge (Left Node on Timeline) -->
            <div class="shrink-0 flex items-center md:flex-col gap-3">
              <div
                class="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex flex-col items-center justify-center font-black shadow-card transition-transform duration-300 group-hover:scale-105"
                :style="{ backgroundColor: gate.accentColor, color: '#ffffff' }"
              >
                <span class="text-xl md:text-2xl font-black tracking-tight">{{
                  gate.stageCode
                }}</span>
                <span
                  class="text-[9px] md:text-[9.5px] uppercase font-bold tracking-wider opacity-90"
                  >Gate {{ gate.number }}</span
                >
              </div>
            </div>

            <!-- Gate Card (Right Content) -->
            <div
              class="flex-1 sf-card group bg-card rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 overflow-hidden w-full border border-border/70"
            >
              <div class="p-6 sm:p-8 space-y-6">
                <!-- Header Info -->
                <div
                  class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2.5 border-b border-border/70 pb-4"
                >
                  <div class="space-y-1">
                    <h3
                      class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight"
                    >
                      {{ gate.stageName }}
                    </h3>
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
