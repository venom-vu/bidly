<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'
import SfFaqAccordion from '~/components/blades/SfFaqAccordion.vue'
import { useDemoModal } from '~/composables/useDemoModal'

definePageMeta({
  alias: ['/5-cong-kiem-soat', '/features/gates', '/hard-gates', '/crm/gates']
})

useSeoMeta({
  title: '5 Cổng Cứng Kiểm Soát (Hard Gates) | Bidly Preconstruction CRM',
  description: 'Khám phá 5 chốt chặn kiểm soát cứng ở tầng máy chủ của Bidly: S2 (Go/No-Go), S4 (Tender Active), S5 (Nộp bản Final), S7 (Kết quả thầu), S8 (Bàn giao thi công) bảo vệ toàn vẹn dữ liệu và ngân sách thầu.'
})

const { openModal } = useDemoModal()

const serverPillars = [
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Atomic Database Transaction',
    desc: 'Mọi lệnh đổi stage, cập nhật trạng thái và ghi audit log diễn ra trong một $transaction duy nhất. Lỗi ở bất kỳ khâu nào sẽ tự động rollback toàn bộ, loại bỏ hoàn toàn tình trạng phân mảnh trạng thái (split-state).'
  },
  {
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    title: 'Optimistic Concurrency (Version)',
    desc: 'Khoá lạc quan qua cột version: máy chủ tự động từ chối (HTTP 409 Conflict) nếu phát hiện dữ liệu cơ hội đã bị thay đổi bởi người khác, chống tuyệt đối nguy cơ ghi đè dữ liệu thầu.'
  },
  {
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    title: 'Append-only Audit Trail',
    desc: 'Nhật ký kiểm toán StageHistory và Audit Log được ghi nhận append-only đồng thời trong transaction. Mọi quyết định duyệt, lý do chuyển bước và người thực hiện đều được lưu vết vĩnh viễn.'
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: 'Fine-grained RBAC Guards',
    desc: 'Ma trận phân quyền 5 vai trò (CEO, BD Director, BD, Tender Lead, Admin) được thực thi nghiêm ngặt ở tầng máy chủ qua PermissionsGuard. Người dùng không có quyền hạn sẽ bị chặn ngay từ API gateway.'
  }
]

const hardGates = [
  {
    number: '01',
    gateCode: 'CỔNG CỨNG S2',
    stageName: 'Phê duyệt Go / No-Go (Scorecard Approval)',
    accentColor: 'var(--stage-s2, #7F27FF)',
    position: 'Chốt chặn phân luồng giữa S2 (Go/No-Go) và S3 (Chuẩn bị thầu) hoặc S7 (Dừng thầu sớm No-bid)',
    authority: 'Ban Điều Hành (Tổng Giám Đốc / Giám Đốc Kinh Doanh)',
    ruleHeadline: 'Chỉ được phép tiến bước khi có quyết định Scorecard được ký duyệt bởi lãnh đạo',
    enforcingMechanism: [
      'ScorecardService.decide là con đường DUY NHẤT để rời khỏi S2: Máy chủ không chấp nhận gọi lệnh transition trần sang S3.',
      'Máy chủ tự động tính toán lại điểm tổng 0–100 từ 6 tiêu chí có trọng số (Năng lực, Quan hệ, Mức độ cạnh tranh, Biên lợi nhuận, Rủi ro, Nguồn lực) tại đúng thời điểm bấm phê duyệt.',
      'Phân nhánh tự động bắt buộc: Quyết định GO đưa cơ hội sang S3; quyết định NO_GO lập tức chuyển cơ hội sang S7 với outcome NO_BID kèm lý do từ chối.',
      'Bắt buộc nhập lý do phê duyệt và lưu vết người duyệt trong StageHistory.'
    ],
    riskEliminated: 'Loại bỏ 100% tình trạng theo đuổi các dự án rủi ro cao hoặc không khả thi do cảm tính, tiết kiệm chi phí làm thầu và tập trung nguồn lực tinh hoa vào cơ hội có tỷ lệ thắng cao.',
    dataArtifacts: 'Scorecard Report 6 tiêu chí, Quyết định phê duyệt Go/No-Go có chữ ký số, Bản tóm tắt cơ hội Pursuit Brief.'
  },
  {
    number: '02',
    gateCode: 'CỔNG CỨNG S4',
    stageName: 'Vào Đấu Thầu Chính Thức (Tender Active Gate)',
    accentColor: 'var(--stage-s4, #0284C7)',
    position: 'Chốt chặn kích hoạt không gian làm việc số từ S3 (Chuẩn bị thầu) sang S4 (Đang đấu thầu)',
    authority: 'Trưởng Phòng Đấu Thầu (Tender Lead) & Giám Đốc Kinh Doanh',
    ruleHeadline: 'Kích hoạt không gian làm việc số, phân rã checklist 5 phòng ban và ấn định hạn nộp',
    enforcingMechanism: [
      'Máy chủ tự động khởi tạo thực thể WorkPackage (Gói thầu) và TenderRound (Vòng thầu RFI/RFQ/RFP/Vòng 1).',
      'Kích hoạt không gian số Tender Workspace với hệ thống checklist chuẩn ngành phân bổ cho 5 bộ phận: Pháp lý, Kỹ thuật - Biện pháp, MEP, Dự toán, HSE.',
      'Ấn định mốc thời gian nộp thầu (Submission Deadline) và kích hoạt đồng hồ đếm ngược tự động cảnh báo hạn chót 7-14-30 ngày.',
      'Khóa ngân sách làm thầu và gán quyền truy cập tài liệu bảo mật theo vai trò.'
    ],
    riskEliminated: 'Ngăn chặn tình trạng lập hồ sơ thầu tự phát, thiếu phân công trách nhiệm, trễ hạn nộp hoặc thất lạc tài liệu mời thầu của Chủ đầu tư.',
    dataArtifacts: 'Thực thể WorkPackage, TenderRound 1, Hệ thống 50+ TenderChecklistItem, Lịch trình theo dõi mốc tiến độ.'
  },
  {
    number: '03',
    gateCode: 'CỔNG CỨNG S5',
    stageName: 'Xác Nhận Nộp Bản Final (Submission Final Gate)',
    accentColor: 'var(--stage-s5, #0176D3)',
    position: 'Chốt chặn từ S4 (Đang đấu thầu) sang S5 (Đã nộp hồ sơ)',
    authority: 'Trưởng Nhóm Thầu (Tender Lead) & BD',
    ruleHeadline: 'Con đường DUY NHẤT sang S5 là ghi nhận nộp bản Final SUBMITTED kèm bằng chứng',
    enforcingMechanism: [
      'Server Guard cốt lõi: StageTransitionService kiểm tra nghiêm ngặt — chỉ cho phép chuyển từ S4 sang S5 khi tồn tại bản ghi BidSubmission có isFinal = true và status = SUBMITTED trong round đang mở.',
      'Lệnh gọi API chuyển stage trần { toStage: "S5" } từ S4 sẽ bị máy chủ từ chối với mã lỗi HTTP 400 Bad Request.',
      'Quy tắc bất biến duy nhất 1 bản Final: Trong một TenderRound, chỉ được phép có tối đa 1 bản nộp isFinal. Khi đánh dấu bản mới, hệ thống tự động gỡ cờ bản cũ trong cùng transaction.',
      'Tác vụ submitFinal bọc toàn bộ: cập nhật trạng thái SUBMITTED + lưu Audit Log + chuyển stage sang S5 trong một Database Transaction duy nhất.'
    ],
    riskEliminated: 'Triệt tiêu hoàn toàn rủi ro nộp nhầm file giá nháp cũ, nộp hồ sơ chưa hoàn thiện hoặc không đồng nhất phiên bản kỹ thuật - thương mại giữa các phòng ban.',
    dataArtifacts: 'Bản nộp BidSubmission Final, Biên nhận nộp thầu / Dấu thời gian điện tử, Chuỗi lịch sử phiên bản (revision chain).'
  },
  {
    number: '04',
    gateCode: 'CỔNG CỨNG S7',
    stageName: 'Chốt Kết Quả Thầu & Khóa Terminal (Outcome Gate)',
    accentColor: 'var(--stage-s7, #475569)',
    position: 'Chốt chặn ghi nhận kết quả cuối cùng từ S4, S5, S6 hoặc dừng sớm từ S1/S2/S3',
    authority: 'Ban Điều Hành (CEO / Giám Đốc Kinh Doanh)',
    ruleHeadline: 'Bắt buộc xác định Outcome (Won/Lost/No-bid) & Khóa cơ hội nếu thua thầu',
    enforcingMechanism: [
      'Máy chủ bắt buộc cập nhật trường outcome thành 1 trong 3 trạng thái: WON (Trúng thầu), LOST (Trượt thầu), NO_BID (Không tham gia / Rút lui).',
      'Bắt buộc ghi nhận lý do trúng/trượt, đối thủ thắng thầu và mức giá trúng thực tế để làm giàu kho dữ liệu Win/Loss Analysis.',
      'Khóa trạng thái Terminal: Nếu kết quả là LOST hoặc NO_BID, hệ thống khóa cứng cơ hội, máy chủ chặn tuyệt đối mọi lệnh chuyển tiếp sang S8.',
      'Quy trình Đấu lại (Re-bid): Nếu CĐT yêu cầu đấu lại, hệ thống mở một thực thể TenderRound mới kế thừa round cũ, tuyệt đối không chỉnh sửa kết quả vòng đã chốt.'
    ],
    riskEliminated: 'Ngăn ngừa số liệu pipeline ảo, ngăn việc tự ý mở lại cơ hội đã đóng mà không qua quy trình đấu lại, và bảo toàn tri thức cạnh tranh của doanh nghiệp.',
    dataArtifacts: 'Thư trúng thầu (LOA) / Thư thông báo kết quả, Báo cáo phân tích Win/Loss Report, Cập nhật Win Rate tự động.'
  },
  {
    number: '05',
    gateCode: 'CỔNG CỨNG S8',
    stageName: 'Gói Bàn Giao Tiền Thi Công (Handover Pack Gate)',
    accentColor: 'var(--stage-s8, #04844B)',
    position: 'Chốt chặn chuyển giao từ S7 (Won) sang S8 (Bàn giao thi công)',
    authority: 'Giám Đốc Kinh Doanh & Trưởng Phòng Đấu Thầu ➔ Ban Điều Hành Dự Án',
    ruleHeadline: 'Chỉ mở cho cơ hội WON & Bắt buộc đóng gói dữ liệu cam kết chuẩn hóa',
    enforcingMechanism: [
      'Hàm canEnterHandover kiểm tra ở máy chủ: Chặn 100% các cơ hội có outcome khác WON.',
      'Máy chủ gác cổng bằng requireReason = true: Từ chối các lệnh chuyển stage trần sang S8 nếu không kèm lý do bàn giao và biên bản chuẩn hóa.',
      'Chuẩn hóa Gói bàn giao Handover Pack gồm 4 cấu phần: (1) Phạm vi cam kết thương mại, (2) Giả định báo giá & định mức chi phí, (3) Danh mục rủi ro & loại trừ, (4) File đính kèm Final.',
      'Lưu vết người bàn giao và người tiếp nhận trong StageHistory và Audit Log, sẵn sàng đẩy dữ liệu qua API sang hệ thống ERP/PM.'
    ],
    riskEliminated: 'Xóa bỏ hoàn toàn khoảng trống thông tin và tranh chấp trách nhiệm giữa đội làm thầu và đội thi công công trường; ngăn ngừa phát sinh chi phí vượt dự toán.',
    dataArtifacts: 'Gói bàn giao Handover Pack 4 cấu phần, Biên bản bàn giao tiền thi công có ký duyệt, Payload dữ liệu chuẩn hóa sang ERP.'
  }
]

const comparisonRows = [
  {
    feature: 'Vị trí kiểm tra & Enforce',
    genericCrm: 'Chủ yếu ở Client/Giao diện người dùng (dễ bị vượt qua)',
    bidlyHardGate: 'Enforce nghiêm ngặt ở tầng Máy chủ (Server Database Transaction)'
  },
  {
    feature: 'Chuyển stage khi chưa đủ điều kiện',
    genericCrm: 'Cho phép kéo thả tự do, tạo dữ liệu ảo và bỏ qua bước',
    bidlyHardGate: 'Máy chủ trả về HTTP 400/409, chặn 100% lệnh chuyển bước sai luật'
  },
  {
    feature: 'Kiểm soát phiên bản hồ sơ nộp thầu',
    genericCrm: 'Không có khái niệm bản Final; dễ nộp nhầm file giá cũ',
    bidlyHardGate: 'Bất biến: Tối đa 1 bản Final duy nhất mỗi round, khóa khi Submit'
  },
  {
    feature: 'Phê duyệt Go/No-Go',
    genericCrm: 'Duyệt bằng miệng, email hoặc tích ô check đơn giản',
    bidlyHardGate: 'Scorecard 6 tiêu chí trọng số 0-100 tính lại realtime tại máy chủ'
  },
  {
    feature: 'Bàn giao sang thi công (S8)',
    genericCrm: 'Không có cấu phần Handover, chuyển giao qua họp miệng',
    bidlyHardGate: 'Handover Pack 4 cấu phần chuẩn hóa, chỉ mở cho cơ hội WON'
  },
  {
    feature: 'Lịch sử chuyển bước & Kiểm toán',
    genericCrm: 'Log đơn giản, có thể bị ghi đè hoặc không đồng bộ',
    bidlyHardGate: 'StageHistory & Audit Log append-only ghi trong cùng transaction'
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Header -->
    <section class="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden sf-gradient-bg border-b border-border">
      <div class="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div class="absolute top-1/2 -left-32 w-80 h-80 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />

      <div class="sf-container relative z-10 text-center max-w-4xl space-y-6">
        <div class="inline-block">
          <SfBadge variant="green" size="md">
            KIỂM SOÁT TẦNG MÁY CHỦ · HARD GATES
          </SfBadge>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
          5 Cổng Cứng Kiểm Soát
          <span class="text-primary block mt-1">
            Bảo Vệ Toàn Vẹn Dữ Liệu Thầu
          </span>
        </h1>
        <p class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
          Không kiểm tra hời hợt ở giao diện, 5 cổng cứng của Bidly được thực thi nghiêm ngặt tại máy chủ trong Database Transaction. Loại bỏ hoàn toàn rủi ro lách quy trình, nhầm phiên bản hồ sơ hay lãng phí chi phí làm thầu.
        </p>

        <div class="pt-2 flex flex-wrap justify-center items-center gap-4">
          <SfButton
            variant="primary"
            size="lg"
            @click="openModal('Đặt lịch Demo 5 Cổng Cứng Kiểm Soát Bidly')"
          >
            <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
            Đặt lịch Demo 45 phút
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/stages">
            Xem 9 Giai Đoạn Cố Định ➔
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/business-map">
            Xem bản đồ nghiệp vụ 5 làn
          </SfButton>
        </div>

        <!-- Trust Badges Strip -->
        <div class="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-muted-foreground border-t border-border/80 max-w-2xl mx-auto">
          <div class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-primary inline-block shrink-0" />
            <span>5 Cổng cứng bắt buộc (S2, S4, S5, S7, S8)</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block shrink-0" />
            <span>Chống split-state trong Database Transaction</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-destructive inline-block shrink-0" />
            <span>Khóa cứng phiên bản &amp; Phân quyền RBAC</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 4 Server Enforcing Pillars -->
    <section class="py-12 md:py-16 bg-card border-b border-border">
      <div class="sf-container space-y-8">
        <div class="text-center max-w-3xl mx-auto space-y-2">
          <div class="text-xs font-bold uppercase tracking-wider text-primary">
            KIẾN TRÚC BẢO MẬT &amp; TOÀN VẸN DỮ LIỆU
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Cơ Chế Thực Thi Cổng Cứng Ở Tầng Máy Chủ
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(pillar, pIdx) in serverPillars"
            :key="pIdx"
            class="sf-card rounded-xl p-6 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 space-y-3 flex flex-col justify-between"
          >
            <div class="space-y-3">
              <div class="w-10 h-10 rounded-lg bg-brand-soft text-primary flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="pillar.icon" />
                </svg>
              </div>
              <h3 class="text-base font-extrabold text-foreground tracking-tight leading-snug">
                {{ pillar.title }}
              </h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                {{ pillar.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vertical 5 Hard Gates Breakdown -->
    <section class="py-16 md:py-24 bg-background border-b border-border">
      <div class="sf-container space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-primary">
            DANH SÁCH 5 CỔNG CỨNG THEO TRỤC DỌC
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
            Chi Tiết Từng Chốt Chặn Kiểm Soát Cứng
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            Mỗi cổng cứng gác chốt tại vị trí then chốt, bắt buộc thẩm quyền phê duyệt, kiểm tra điều kiện máy chủ và loại bỏ triệt để rủi ro vận hành.
          </p>
        </div>

        <div class="relative max-w-5xl mx-auto space-y-12">
          <!-- Continuous Vertical Background Line -->
          <div class="hidden md:block absolute top-8 bottom-8 left-[39px] w-1 bg-border/80 rounded-full z-0" />

          <div
            v-for="gate in hardGates"
            :key="gate.number"
            class="relative z-10 flex flex-col md:flex-row items-start gap-6 md:gap-8 group"
          >
            <!-- Gate Number Badge (Left Node on Timeline) -->
            <div class="shrink-0 flex items-center md:flex-col gap-3">
              <div
                class="w-20 h-20 rounded-2xl flex flex-col items-center justify-center font-black shadow-card transition-transform duration-300 group-hover:scale-105"
                :style="{ backgroundColor: gate.accentColor, color: '#ffffff' }"
              >
                <span class="text-2xl font-black tracking-tight">{{ gate.number }}</span>
                <span class="text-[9.5px] uppercase font-bold tracking-wider opacity-90">Gate</span>
              </div>
              <div class="md:hidden">
                <span class="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-destructive/10 text-destructive border border-destructive/30">
                  {{ gate.gateCode }}
                </span>
              </div>
            </div>

            <!-- Gate Card (Right Content) -->
            <div class="flex-1 sf-card bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden w-full border border-border/80 ring-2 ring-primary/40">
              <!-- Top Header Bar -->
              <div class="h-2.5 w-full shrink-0" :style="{ backgroundColor: gate.accentColor }" />

              <div class="p-6 sm:p-8 space-y-6">
                <!-- Header Info -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-4">
                  <div>
                    <div class="flex items-center gap-3">
                      <h3 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                        {{ gate.gateCode }} · {{ gate.stageName }}
                      </h3>
                    </div>
                    <p class="text-xs sm:text-sm font-semibold text-primary mt-1">
                      {{ gate.position }}
                    </p>
                  </div>
                  <div class="text-left sm:text-right shrink-0">
                    <span class="inline-block text-[11.5px] font-bold text-muted-foreground bg-secondary/80 px-3 py-1 rounded-md">
                      Thẩm quyền: <strong class="text-foreground">{{ gate.authority }}</strong>
                    </span>
                  </div>
                </div>

                <!-- Rule Headline -->
                <div class="bg-brand-soft/70 border border-brand/20 rounded-xl p-4 flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <div class="text-xs font-bold uppercase tracking-wider text-primary">Nguyên tắc kiểm soát cốt lõi</div>
                    <div class="text-xs sm:text-sm font-bold text-foreground mt-0.5">{{ gate.ruleHeadline }}</div>
                  </div>
                </div>

                <!-- Enforcing Mechanism Checklist -->
                <div class="space-y-3">
                  <div class="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                    <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span>Cơ chế kiểm soát thực thi ở tầng máy chủ:</span>
                  </div>
                  <ul class="space-y-2.5">
                    <li
                      v-for="(mech, mIdx) in gate.enforcingMechanism"
                      :key="mIdx"
                      class="text-xs sm:text-sm text-muted-foreground font-normal flex items-start gap-2.5 leading-relaxed"
                    >
                      <span class="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{{ mech }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Risk Eliminated & Data Artifacts -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-border/70">
                  <div class="bg-secondary/30 rounded-xl p-4 border border-border/60 space-y-1">
                    <div class="text-[11px] font-bold uppercase tracking-wider text-destructive flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                      </svg>
                      <span>Rủi ro loại bỏ:</span>
                    </div>
                    <p class="text-xs text-muted-foreground font-normal leading-relaxed">
                      {{ gate.riskEliminated }}
                    </p>
                  </div>

                  <div class="bg-secondary/30 rounded-xl p-4 border border-border/60 space-y-1">
                    <div class="text-[11px] font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                      </svg>
                      <span>Hồ sơ &amp; Bằng chứng sinh ra:</span>
                    </div>
                    <p class="text-xs text-muted-foreground font-normal leading-relaxed">
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
    <section class="py-16 md:py-24 bg-card border-b border-border">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-primary">
            ĐỐI CHIẾU KIỂM SOÁT
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
            5 Cổng Cứng Bidly vs CRM Bán Lẻ Thông Thường
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            Sự khác biệt cốt lõi nằm ở khả năng enforce luật nghiệp vụ tại máy chủ, loại trừ hoàn toàn việc thao tác sai hoặc bỏ qua quy trình.
          </p>
        </div>

        <div class="sf-card rounded-2xl shadow-card overflow-hidden border border-border max-w-5xl mx-auto bg-card">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-secondary/70 border-b border-border text-xs uppercase font-extrabold tracking-wider text-foreground">
                  <th class="py-4 px-6">Tiêu chí kiểm soát</th>
                  <th class="py-4 px-6 text-muted-foreground">CRM Phổ Thông / Bán Lẻ</th>
                  <th class="py-4 px-6 text-primary bg-brand-soft/60">5 Cổng Cứng Bidly CRM</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border text-xs sm:text-sm font-normal">
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
                  <td class="py-4 px-6 font-semibold text-primary bg-brand-soft/30">
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
