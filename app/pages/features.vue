<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'
import SfFaqAccordion from '~/components/blades/SfFaqAccordion.vue'

useSeoMeta({
  title: 'Tính năng Bidly: 7 Mô-đun Lõi & State Machine 9 Giai đoạn | Vtechcom',
  description: 'Khám phá 7 module lõi của Bidly Preconstruction CRM: Project Intelligence, Pursuit & Go/No-Go, Stakeholder, Tender Workspace, Capability Library, Dashboard & Handover cùng nền tảng bảo mật on-premise single-tenant.'
})

const stages = [
  { code: 'S0', name: 'Tín hiệu (Signal)', desc: 'Thu thập tín hiệu dự án FDI/KCN, dedup, phân loại, gán owner', gate: false },
  { code: 'S1', name: 'Sàng lọc (Qualified)', desc: 'Xác nhận cơ hội có thật, đánh giá fit sơ bộ, gắn PursuitContact', gate: false },
  { code: 'S2', name: 'Go / No-Go', desc: 'Scorecard 6 tiêu chí 0-100: bắt buộc người duyệt & lý do ở máy chủ', gate: true },
  { code: 'S3', name: 'Chuẩn bị thầu (Pre-bid)', desc: 'Chiến lược theo đuổi, lập đội thầu, chuẩn bị hồ sơ sơ bộ', gate: false },
  { code: 'S4', name: 'Đang đấu thầu (Tender Active)', desc: 'Mở Tender Workspace: checklist 5 phòng, milestone, tài liệu', gate: true },
  { code: 'S5', name: 'Đã nộp (Submitted)', desc: 'Nộp bản final: chỉ vào được khi có BidSubmission final SUBMITTED', gate: true },
  { code: 'S6', name: 'Làm rõ (Clarification)', desc: 'Nhật ký câu hỏi - phản hồi, cập nhật thay đổi thương mại có dấu', gate: false },
  { code: 'S7', name: 'Kết quả (Won / Lost / No-bid)', desc: 'Kết quả thầu: Lost và No-bid là terminal, Won chờ bàn giao', gate: true },
  { code: 'S8', name: 'Bàn giao (Handover)', desc: 'Bàn giao tiền thi công: gói dữ liệu chuẩn hóa sang ERP/PM', gate: true }
]

const nonLinearFlows = [
  {
    flow: 'Dừng sớm No-Go (S2 ➔ S7 No-bid)',
    type: 'Hard Gate',
    desc: 'Khi Scorecard S2 bị từ chối (No-Go), cơ hội lập tức chuyển sang S7 với kết quả NO_BID, bắt buộc ghi rõ lý do. Bỏ qua toàn bộ giai đoạn đấu thầu S4-S6 để tiết kiệm nguồn lực.'
  },
  {
    flow: 'Chỉ định thầu trực tiếp (S1/S3 ➔ S7 Won ➔ S8)',
    type: 'Hard Gate',
    desc: 'Trường hợp chủ đầu tư chỉ định thầu trực tiếp, cơ hội được phép chuyển sang S7 (Won) kèm lý do chỉ định và tiến vào S8 để lập gói bàn giao thi công.'
  },
  {
    flow: 'Rút lui có kiểm soát (S0-S6 ➔ S7 Withdrawal)',
    type: 'Hard Gate',
    desc: 'Doanh nghiệp có thể chủ động rút lui khỏi quá trình theo đuổi ở bất kỳ giai đoạn nào trước S7. Bắt buộc nhập lý do rút lui và ghi nhận vào StageHistory.'
  },
  {
    flow: 'Sửa sai & Quay lại bước (Correction)',
    type: 'Soft Gate',
    desc: 'Cho phép quay lại giai đoạn trước để bổ sung tài liệu khi có quyền hạn phù hợp. Hệ thống bắt buộc nhập lý do điều chỉnh và ghi log kiểm toán.'
  },
  {
    flow: 'Đấu lại / Re-tender (Mở TenderRound mới)',
    type: 'Canonical Entity',
    desc: 'Khi CĐT yêu cầu đấu lại hoặc đàm phán vòng 2, hệ thống mở một TenderRound mới trong S4/S6, bản cũ thành SUPERSEDED: tuyệt đối không sửa hay ghi đè vòng cũ.'
  }
]

const modules = [
  {
    id: 'project-intel',
    title: 'M1 · Project Intelligence',
    eyebrow: 'THU THẬP & SÀNG LỌC TÍN HIỆU DỰ ÁN',
    accentColor: 'var(--stage-s0, #64748B)',
    description: 'Thu thập tín hiệu dự án từ KCN, FDI, báo thầu và đối tác. Tự động kiểm tra trùng (dedup), gán owner và phân loại ngành. Project Inbox tập trung thay thế hoàn toàn Zalo và bảng tính phân mảnh.',
    features: [
      'Import dữ liệu từ Excel với giao diện preview và mapping cột linh hoạt',
      'Tự động kiểm tra trùng lặp (dedup) theo tên dự án, địa điểm, chủ đầu tư',
      'Phân loại chi tiết theo KCN, nguồn vốn FDI và ngành công nghiệp',
      'Cảnh báo tự động khi tín hiệu dự án chưa được phân loại hoặc bỏ quên',
      'Quản lý danh sách Tổ chức (Account) và Người liên hệ (Contact)'
    ]
  },
  {
    id: 'gonogo',
    title: 'M2 · Pursuit & Go/No-Go Scorecard',
    eyebrow: 'QUẢN TRỊ PIPELINE & PHÊ DUYỆT CÓ CĂN CỨ',
    accentColor: 'var(--stage-s2, #8B5CF6)',
    description: 'Pipeline 9 giai đoạn cố định với 5 cổng cứng ở máy chủ. Scorecard Go/No-Go tại S2 với 6 tiêu chí có trọng số (năng lực, quan hệ, giá, biên lợi nhuận, rủi ro, nguồn lực). Điểm 0-100 được tính lại chuẩn xác tại thời điểm duyệt.',
    features: [
      'State machine chuẩn hóa với lịch sử chuyển bước StageHistory bất biến',
      '5 cổng cứng (hard gates) bắt buộc người duyệt và lý do ở tầng máy chủ',
      'Scorecard chấm điểm 0-100 theo tiêu chí trọng số cấu hình được',
      'Cơ chế No-Go tự động điều hướng sang S7 (No-bid) bắt buộc ghi lý do',
      'Quản lý quay lại bước (Correction) có lưu vết và bắt buộc nhập lý do',
      'Tự động tính toán Pipeline có trọng số (Estimated Value × Probability)'
    ]
  },
  {
    id: 'stakeholder',
    title: 'M3 · Stakeholder & Touchpoint Map',
    eyebrow: 'BẢN ĐỒ BÊN LIÊN QUAN THEO DỰ ÁN',
    accentColor: 'var(--stage-s3, #0D9488)',
    description: 'Bản đồ bên liên quan theo dự án (PursuitContact), phân biệt với chức danh cố định. Gán 4 vai trò: Decision Maker, Influencer, Champion, Gatekeeper kèm mức độ ảnh hưởng và thái độ tiếp xúc.',
    features: [
      'Gán vai trò bên liên quan linh hoạt theo từng dự án cụ thể (PursuitContact)',
      'Theo dõi mức độ ảnh hưởng và mức độ ủng hộ của từng cá nhân',
      'Ghi nhận nhật ký cuộc họp, site visit, khảo sát mặt bằng và biên bản',
      'Bảo vệ tài sản mạng lưới quan hệ của tổ chức khi nhân sự thay đổi',
      'Gắn nhiệm vụ (Task) và việc tiếp theo (Next Action) theo từng stakeholder'
    ]
  },
  {
    id: 'tender',
    title: 'M4 · Tender Workspace (Phòng Thầu Số)',
    eyebrow: 'PHỐI HỢP LIÊN PHÒNG BAN & KIỂM SOÁT BẢN FINAL',
    accentColor: 'var(--stage-s4, #0284C7)',
    description: 'Không gian số theo từng vòng thầu (RFI, RFQ, RFP, Đấu lại): phân rã checklist 5 phòng ban, theo dõi hạn nộp, quản lý nhật ký làm rõ và chuỗi phiên bản. Bất biến 1 bản final duy nhất mỗi vòng.',
    features: [
      'Theo dõi mốc thời gian (milestones) và đồng hồ đếm ngược hạn nộp',
      'Checklist hồ sơ liên phòng ban với trạng thái cập nhật thời gian thực',
      'Quản lý chuỗi phiên bản hồ sơ dự thầu (revision chain) qua supersedesId',
      'Bất biến máy chủ: Tối đa một bản nộp Final duy nhất trong một vòng thầu',
      'Con đường duy nhất sang S5 là ghi nhận nộp bản Final kèm bằng chứng',
      'Đấu lại tạo TenderRound mới, giữ nguyên toàn bộ lịch sử đấu thầu cũ'
    ]
  },
  {
    id: 'capability',
    title: 'M5 · Capability Library (Thư Viện Năng Lực)',
    eyebrow: 'KHO TRI THỨC NĂNG LỰC DOANH NGHIỆP',
    accentColor: 'var(--stage-s6, #4F46E5)',
    description: 'Thư viện số hóa toàn bộ năng lực: kho dự án tiêu biểu (tonnage thép, diện tích, MEP), hồ sơ chuyên gia, thiết bị thi công và chứng chỉ. Tự động cảnh báo khi chứng chỉ sắp hết hạn.',
    features: [
      'Thư viện dự án tiêu biểu gắn tag theo ngành, loại công trình và địa phương',
      'Hồ sơ nhân sự, chứng chỉ chuyên môn và CV kỹ sư định dạng chuẩn',
      'Danh mục máy móc, thiết bị thi công kèm tình trạng sẵn sàng và vị trí',
      'Hệ thống cảnh báo tự động khi chứng chỉ năng lực sắp hết hạn',
      'Tìm kiếm toàn văn (full-text search) nhanh chóng phục vụ lập hồ sơ thầu',
      'Tri thức năng lực thuộc về tài sản tổ chức, không mất đi khi nhân sự rời đi'
    ]
  },
  {
    id: 'dashboard',
    title: 'M6 · Dashboard Điều Hành & Gói Bàn Giao (S8)',
    eyebrow: 'CONTROL TOWER & BÀN GIAO SANG THI CÔNG',
    accentColor: 'var(--stage-s8, #3F9E25)',
    description: 'Control Tower điều hành toàn cảnh: pipeline trọng số, cơ hội rủi ro, deadline heatmap và phân tích Win/Loss. Gói bàn giao S8 chuẩn hóa cam kết thương mại, giả định và rủi ro chuyển giao sang ERP.',
    features: [
      'Control Tower với 4 chỉ số điều hành then chốt tính toán theo thời gian thực',
      'Deadline heatmap cảnh báo các gói thầu sắp đến hạn nộp trong 7-14-30 ngày',
      'Báo cáo chất lượng dữ liệu (Data Quality Score) nhắc nhở thông tin còn thiếu',
      'Phân tích Win Rate chi tiết theo phân khúc ngành, địa bàn và đối thủ',
      'Gói bàn giao Handover Pack (S8) chuẩn hóa dữ liệu trước khi chuyển giao ERP',
      'Nhật ký kiểm toán hệ thống (Audit Log) ghi nhận toàn bộ hoạt động nhạy cảm'
    ]
  },
  {
    id: 'platform-sec',
    title: 'M7 · Nền Tảng & Bảo Mật Dữ Liệu Riêng Biệt',
    eyebrow: 'AN TOÀN THÔNG TIN CẤP DOANH NGHIỆP',
    accentColor: 'var(--brand-panel, #171C18)',
    description: 'Kiến trúc On-premise Single-tenant hoặc Private Cloud. Mỗi doanh nghiệp sở hữu database PostgreSQL độc lập, tuyệt đối không chia sẻ dữ liệu giá thầu. Phân quyền RBAC 5 vai trò và audit log append-only.',
    features: [
      'Cơ sở dữ liệu PostgreSQL độc lập cho từng khách hàng (Database Isolation)',
      'Phân quyền RBAC 5 vai trò (CEO, BD Director, BD, Tender Lead, Admin) ở máy chủ',
      'Nhật ký kiểm toán (Audit Log) ghi nhận append-only đồng thời trong transaction',
      'Khoá lạc quan (Optimistic Concurrency) qua trường version chống ghi đè dữ liệu',
      'Mã hóa đường truyền TLS và mã hóa lưu trữ tài liệu nhạy cảm',
      'Tuân thủ Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15 và Nghị định 356/2025/NĐ-CP'
    ]
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Header -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <div class="inline-block">
          <SfBadge variant="green" size="md">
            BỘ TÍNH NĂNG TOÀN DIỆN
          </SfBadge>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Tính năng Bidly Preconstruction CRM
        </h1>
        <p class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
          Hệ thống 7 mô-đun lõi và bảo mật riêng biệt bao phủ trọn vẹn vòng đời thầu từ tín hiệu đến bàn giao.
        </p>
        <div class="pt-2 flex flex-wrap justify-center gap-4">
          <SfButton variant="primary" size="lg" to="#demo">
            Đặt lịch Demo 45 phút
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/business-map">
            Xem bản đồ nghiệp vụ
          </SfButton>
        </div>
      </div>
    </section>

    <!-- Stage Gate Visualization Section -->
    <section id="pipeline" class="py-16 md:py-24 bg-card border-b border-border">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="green">STATE MACHINE 9 GIAI ĐOẠN</SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            9 Giai đoạn Cố định · 5 Cổng Cứng Kiểm Soát
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground">
            Stage gate là trái tim của Bidly. 5 cổng cứng bắt buộc quyết định, người duyệt và lý do trước khi chuyển bước.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3">
          <div
            v-for="stage in stages"
            :key="stage.code"
            :class="[
              'relative p-4 rounded-2xl border-2 text-center space-y-2 transition-all shadow-xs',
              stage.gate
                ? 'border-primary bg-brand-soft/80 shadow-md'
                : 'border-border bg-background'
            ]"
          >
            <div :class="['text-xs font-black uppercase tracking-wider tabular', stage.gate ? 'text-primary' : 'text-muted-foreground']">
              {{ stage.code }}
            </div>
            <div class="text-sm font-bold text-foreground leading-tight">{{ stage.name }}</div>
            <div class="text-[11px] text-muted-foreground leading-relaxed hidden lg:block">{{ stage.desc }}</div>
            <div v-if="stage.gate" class="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-sm" title="Cổng cứng: Bắt buộc ghi nhận ở máy chủ">
              <svg class="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div class="text-center text-xs text-muted-foreground pt-2">
          <span class="inline-flex items-center gap-2 flex-wrap justify-center">
            <span class="w-3.5 h-3.5 rounded-full bg-primary inline-block"></span>
            <strong>Cổng cứng (Hard Gate):</strong> S2 (Go/No-Go), S4 (Vào đấu thầu), S5 (Nộp bản Final), S7 (Kết quả), S8 (Bàn giao).
          </span>
        </div>
      </div>
    </section>

    <!-- 5 Non-Linear Transitions Section -->
    <section class="py-16 md:py-24 bg-secondary/40 border-b border-border">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="green">LUỒNG THỰC TẾ</SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            5 Đường Rẽ Không Tuyến Tính Trong Đấu Thầu
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground">
            Đấu thầu xây dựng không chỉ có đường thẳng: Bidly hỗ trợ dừng sớm, chỉ định thầu, rút lui, sửa sai và đấu lại.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          <div
            v-for="(flow, fIdx) in nonLinearFlows"
            :key="fIdx"
            class="sf-card bg-card p-6 sm:p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 space-y-3 flex flex-col justify-between border-0"
          >
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-brand-text tabular">Flow #0{{ fIdx + 1 }}</span>
                <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-muted text-foreground">{{ flow.type }}</span>
              </div>
              <h3 class="text-base font-bold text-foreground">{{ flow.flow }}</h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">{{ flow.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modules Detail Sections -->
    <section class="py-16 md:py-24 bg-card border-b border-border">
      <div class="sf-container space-y-20">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="green">7 MÔ-ĐUN LÕI (M1 - M7)</SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Chi Tiết Toàn Bộ Tính Năng Lõi
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground">
            Được xây dựng chuyên biệt cho các phòng ban tham gia vào quá trình theo đuổi thầu.
          </p>
        </div>

        <div
          v-for="(mod, mIdx) in modules"
          :key="mod.id"
          :id="mod.id"
          :class="[
            'grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-10',
            mIdx > 0 ? 'border-t border-border' : ''
          ]"
        >
          <!-- Left Info Column -->
          <div class="lg:col-span-6 space-y-4">
            <div class="text-xs font-bold text-primary uppercase tracking-widest">{{ mod.eyebrow }}</div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">{{ mod.title }}</h3>
            <p class="text-muted-foreground leading-relaxed text-sm sm:text-base">{{ mod.description }}</p>
          </div>

          <!-- Right Features Box with Top Accent -->
          <div class="lg:col-span-6 rounded-2xl bg-card shadow-card overflow-hidden flex flex-col justify-between border-0">
            <div class="h-1.5 w-full shrink-0" :style="{ backgroundColor: mod.accentColor || 'var(--brand, #74CC55)' }" />
            <div class="p-6 sm:p-8 space-y-4">
              <div class="text-xs font-bold uppercase tracking-widest text-brand-text">
                Tính năng then chốt:
              </div>
              <ul class="space-y-3">
                <li
                  v-for="(feat, fIdx) in mod.features"
                  :key="fIdx"
                  class="flex items-start gap-3 text-xs sm:text-sm text-foreground"
                >
                  <svg class="w-4 h-4 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Contact & FAQ Blades -->
    <SfContactPillars />
    <SfFaqAccordion />
  </div>
</template>
