<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

definePageMeta({
  alias: ['/ban-do-nghiep-vu', '/crm/ban-do-nghiep-vu']
})

useSeoMeta({
  title: 'Bản đồ Nghiệp vụ Đấu thầu | Bidly Preconstruction CRM',
  description: 'Trực quan hóa luồng nghiệp vụ 5 làn (BD, Đấu thầu, Ban điều hành, Hệ thống tự tính, Quản trị) qua 9 giai đoạn cố định, 5 cổng kiểm soát cứng và 9 luồng nghiệp vụ tương tác của Bidly.'
})

const activeLane = ref('all')
const activeFlowId = ref('f-lifecycle')
const searchQuery = ref('')

const lanes = [
  { id: 'all', label: 'Tất cả các làn', color: 'bg-primary text-primary-foreground' },
  { id: 'bd', label: 'Phát triển kinh doanh (BD)', color: 'bg-[#0f766e] text-white', sub: 'BD · Giám đốc Kinh doanh' },
  { id: 'dt', label: 'Phòng Đấu thầu', color: 'bg-[#b45309] text-white', sub: 'Trưởng phòng Đấu thầu · 5 phòng ban' },
  { id: 'bdh', label: 'Ban điều hành', color: 'bg-[#be123c] text-white', sub: 'Tổng giám đốc · Giám đốc KD' },
  { id: 'sys', label: 'Hệ thống tự tính', color: 'bg-[#4f46e5] text-white', sub: 'Bất biến · Không nhập tay' },
  { id: 'adm', label: 'Quản trị & Nền tảng', color: 'bg-[#64748b] text-white', sub: 'Admin/IT · Xuyên suốt' }
]

const flows = [
  {
    id: 'f-lifecycle',
    code: 'F01',
    name: 'Chuỗi thắng thầu danh giá',
    summary: 'Đường đi chính qua toàn bộ 9 giai đoạn từ khi nhận tín hiệu thị trường đến bàn giao gói thi công.',
    steps: ['S0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8']
  },
  {
    id: 'f-gates',
    code: 'F02',
    name: 'Năm cổng kiểm soát cứng (Hard Gates)',
    summary: 'Các chốt chặn bắt buộc ở máy chủ ngăn ngừa rủi ro sai sót hồ sơ và bảo vệ nguồn lực tổ chức.',
    steps: ['S2', 'S4', 'S5', 'S7', 'S8']
  },
  {
    id: 'f-nonlinear',
    code: 'F03',
    name: 'Năm đường rẽ không tuyến tính',
    summary: 'Các luồng xử lý thực tế: dừng sớm No-Go, chỉ định thầu, rút lui, sửa sai và đấu lại.',
    steps: ['S1', 'S2', 'S3', 'S4', 'S6', 'S7']
  },
  {
    id: 'f-gono',
    code: 'F04',
    name: 'Quy trình đánh giá Go/No-Go S2',
    summary: 'Từ chấm điểm 6 tiêu chí có trọng số đến phán quyết phân định của Tổng giám đốc / Giám đốc KD.',
    steps: ['S1', 'S2', 'S3', 'S7']
  },
  {
    id: 'f-tender',
    code: 'F05',
    name: 'Phòng thầu số (Tender Workspace)',
    summary: 'Quy trình phối hợp hồ sơ liên phòng 5 bộ phận, kiểm soát phiên bản giá và ghi nhận nộp thầu.',
    steps: ['S3', 'S4', 'S5']
  },
  {
    id: 'f-rebid',
    code: 'F06',
    name: 'Cơ chế Đấu lại (Re-bid vòng mới)',
    summary: 'Quy trình đấu lại qua Tender Round mới mà không làm mất lịch sử các lần nộp trước.',
    steps: ['S4', 'S5', 'S7']
  },
  {
    id: 'f-trace',
    code: 'F07',
    name: 'Kiểm soát phiên bản & Audit Log',
    summary: 'Bảo vệ dữ liệu bằng khoá lạc quan (Optimistic locking), StageHistory và Audit log.',
    steps: ['S0', 'S2', 'S4', 'S7']
  },
  {
    id: 'f-tower',
    code: 'F08',
    name: 'Control Tower & Cảnh báo sớm',
    summary: 'Các chỉ số tự động nuôi bảng điều hành: Pipeline có trọng số, Heatmap hạn chót, Rủi ro.',
    steps: ['S0', 'S1', 'S4', 'S5', 'S7']
  },
  {
    id: 'f-perm',
    code: 'F09',
    name: 'Phân quyền 5 Vai trò (RBAC)',
    summary: 'Ma trận phân quyền chặt chẽ bảo vệ các thao tác nhạy cảm trong đấu thầu.',
    steps: ['S0', 'S2', 'S4', 'S5', 'S7', 'S8']
  }
]

const stages = [
  {
    id: 'S0',
    name: 'Tín hiệu (Signal)',
    sub: 'Mới có tín hiệu dự án',
    gateType: 'Soft Gate',
    isHard: false,
    exitCondition: 'Gán người phụ trách (owner), nguồn tin và ngày kiểm chứng tiếp theo.',
    nodes: [
      { id: 'n0-1', lane: 'bd', label: 'Tạo cơ hội từ tín hiệu', desc: 'Nhập tên dự án, chủ đầu tư, phạm vi (EPC/MEP/Thép), nguồn tin, giá trị ước tính và xác suất.' },
      { id: 'n0-2', lane: 'bd', label: 'Giao người phụ trách & việc tiếp theo', desc: 'Thiết lập ownerId, nextAction, nextActionAt và deadlineAt lái cảnh báo.' },
      { id: 'n0-3', lane: 'sys', label: 'Sinh mã PUR-2026-NNN & StageHistory', desc: 'Ghi nhận dòng lịch sử đầu tiên null → S0 vào StageHistory có audit.' }
    ]
  },
  {
    id: 'S1',
    name: 'Sàng lọc (Qualified)',
    sub: 'Xác nhận thông tin cơ bản',
    gateType: 'Soft Gate',
    isHard: false,
    exitCondition: 'Đầy đủ thông tin về dự án, chủ đầu tư, phạm vi công việc và thời gian.',
    nodes: [
      { id: 'n1-1', lane: 'bd', label: 'Sàng lọc tính khả thi', desc: 'Đánh giá sơ bộ độ phù hợp với năng lực và định hướng của doanh nghiệp.' },
      { id: 'n1-2', lane: 'bd', label: 'Lập bản đồ bên liên quan (PursuitContact)', desc: 'Xác định Decision Maker, Influencer, Champion, Gatekeeper kèm mức ảnh hưởng và thái độ.' },
      { id: 'n1-3', lane: 'sys', label: 'Tính toán Pipeline có trọng số', desc: 'Hệ thống tự nhân estimatedValue × probability cho các cơ hội S0-S6.' }
    ]
  },
  {
    id: 'S2',
    name: 'Go / No-Go',
    sub: 'Cổng cứng: Bắt buộc đánh giá',
    gateType: 'Hard Gate',
    isHard: true,
    exitCondition: 'Bảng đánh giá Scorecard 0-100 điểm + người duyệt + quyết định + lý do bắt buộc.',
    nodes: [
      { id: 'n2-1', lane: 'bd', label: 'Chấm điểm 6 tiêu chí Scorecard', desc: 'Chấm điểm 0-5 trên 6 tiêu chí (năng lực, quan hệ, cạnh tranh giá, biên LN, rủi ro, nguồn lực).' },
      { id: 'n2-2', lane: 'bdh', label: 'Quyết định Go / No-Go', desc: 'CEO / Giám đốc KD duyệt. Go → sang S3. No-Go → tự động sang S7 (No-bid) bắt buộc ghi lý do.' },
      { id: 'n2-3', lane: 'sys', label: 'Cổng cứng S2 & Tính lại điểm', desc: 'Server kiểm tra điều kiện và tính lại điểm chuẩn xác tại thời điểm quyết định, khóa điểm vĩnh viễn.' }
    ]
  },
  {
    id: 'S3',
    name: 'Chuẩn bị thầu (Pre-bid)',
    sub: 'Đã có quyết định Go',
    gateType: 'Soft Gate',
    isHard: false,
    exitCondition: 'Kế hoạch bên liên quan + chiến lược theo đuổi + đội ngũ phụ trách thầu.',
    nodes: [
      { id: 'n3-1', lane: 'bd', label: 'Chiến lược theo đuổi & lập đội thầu', desc: 'Xác định luận điểm thắng thầu, điểm khác biệt cạnh tranh và phân công nhân sự.' },
      { id: 'n3-2', lane: 'dt', label: 'Tạo gói thầu chính (Simple mode)', desc: 'Hệ thống tự động tạo WorkPackage isPrimary để sẵn sàng mở không gian đấu thầu.' },
      { id: 'n3-3', lane: 'sys', label: 'Khóa lạc quan (Optimistic version)', desc: 'Cột version trên aggregate tăng dần, ngăn chặn xung đột ghi đè dữ liệu khi nhiều người thao tác.' }
    ]
  },
  {
    id: 'S4',
    name: 'Đang đấu thầu (Tender Active)',
    sub: 'Có HSMT và không gian thầu',
    gateType: 'Hard Gate (Entry)',
    isHard: true,
    exitCondition: 'Mốc thời gian (milestone) + checklist liên phòng ban + sổ đăng ký tài liệu.',
    nodes: [
      { id: 'n4-1', lane: 'dt', label: 'Mở vòng thầu (RFI / RFQ / RFP)', desc: 'Thiết lập hạn nộp của CĐT, hạn nộp nội bộ, hình thức nộp (trực tiếp / qua mạng / bưu điện).' },
      { id: 'n4-2', lane: 'dt', label: 'Phân rã checklist 5 phòng ban', desc: 'Giao việc hồ sơ cho Kinh doanh, Kỹ thuật, Đấu thầu, Pháp lý, Tài chính theo dõi thời gian thực.' },
      { id: 'n4-3', lane: 'dt', label: 'Lập bản hồ sơ & đánh số version', desc: 'Quản lý chuỗi phiên bản hồ sơ dự thầu, ghi nhận giá chào thầu (VND) và ghi chú.' },
      { id: 'n4-4', lane: 'sys', label: 'Bất biến: Tối đa 1 bản Final mỗi vòng', desc: 'Transaction gỡ final của bản cũ khi đánh dấu bản mới; không thể có 2 bản final song song.' }
    ]
  },
  {
    id: 'S5',
    name: 'Đã nộp hồ sơ (Submitted)',
    sub: 'Có bằng chứng nộp hợp lệ',
    gateType: 'Hard Gate (Enforce)',
    isHard: true,
    exitCondition: 'Bản nộp Final + timestamp nộp + bằng chứng nộp (số biên nhận, biên bản bàn giao).',
    nodes: [
      { id: 'n5-1', lane: 'dt', label: 'Ghi nhận nộp bản Final & bằng chứng', desc: 'Trưởng phòng Đấu thầu xác nhận nộp bản final kèm số biên nhận / biên bản bàn giao hồ sơ.' },
      { id: 'n5-2', lane: 'dt', label: 'Rút hồ sơ (Withdrawn)', desc: 'Trường hợp rút hồ sơ, hệ thống chuyển trạng thái WITHDRAWN và giữ nguyên lịch sử, không xoá.' },
      { id: 'n5-3', lane: 'sys', label: 'Cổng cứng S4 → S5: Chỉ mở qua nộp Final', desc: 'Máy chủ chặn chuyển stage trần. Con đường DUY NHẤT sang S5 là lệnh submitFinal thành công.' }
    ]
  },
  {
    id: 'S6',
    name: 'Làm rõ / Thương thảo (Clarification)',
    sub: 'Trước khi có kết quả chính thức',
    gateType: 'Soft Gate',
    isHard: false,
    exitCondition: 'Nhật ký câu hỏi-phản hồi + các thay đổi thương mại có dấu.',
    nodes: [
      { id: 'n6-1', lane: 'bd', label: 'Nhật ký làm rõ & thay đổi thương mại', desc: 'Ghi nhận yêu cầu làm rõ từ CĐT, phản hồi và điều chỉnh giá trị hợp đồng (cộng/trừ có dấu).' },
      { id: 'n6-2', lane: 'dt', label: 'Cập nhật tài liệu bổ sung', desc: 'Đính kèm các văn bản giải trình kỹ thuật và phụ lục giá trong quá trình thương thảo.' }
    ]
  },
  {
    id: 'S7',
    name: 'Kết quả: Thắng / Thua / No-bid',
    sub: 'Đã có kết quả chính thức',
    gateType: 'Hard Gate',
    isHard: true,
    exitCondition: 'Kết quả (Won/Lost/No-bid) + lý do bắt buộc + giá trị trúng + tên đối thủ thắng.',
    nodes: [
      { id: 'n7-1', lane: 'bd', label: 'Ghi nhận kết quả thầu & đối thủ', desc: 'Bắt buộc chọn kết quả, nhập giá trị trúng thầu thực tế và tên đối thủ thắng (nếu thua).' },
      { id: 'n7-2', lane: 'bdh', label: 'Soát kết quả & tỷ lệ trúng thầu (Win rate)', desc: 'Ban điều hành phân tích tỷ lệ thắng/thua theo ngành, khu vực và đối thủ cạnh tranh.' },
      { id: 'n7-3', lane: 'dt', label: 'Đấu lại (Re-bid)', desc: 'Nếu CĐT mời đấu lại, hệ thống mở TenderRound mới (vòng cũ đóng, bản cũ superseded), giữ nguyên toàn bộ 9 giai đoạn.' }
    ]
  },
  {
    id: 'S8',
    name: 'Bàn giao (Handover)',
    sub: 'Chỉ áp dụng khi Thắng (Won)',
    gateType: 'Hard Gate (Terminal)',
    isHard: true,
    exitCondition: 'Chỉ cơ hội WON mới được vào. Người nhận bàn giao + checklist nghiệm thu tiền thi công.',
    nodes: [
      { id: 'n8-1', lane: 'dt', label: 'Lập Gói bàn giao tiền thi công (Handover Pack)', desc: 'Tổng hợp phạm vi, cam kết thương mại, bên liên quan, tài liệu chốt, giả định và rủi ro.' },
      { id: 'n8-2', lane: 'bdh', label: 'Rút kinh nghiệm dự án (Lessons Learned)', desc: 'Tổng hợp bài học thắng thầu đưa vào thư viện năng lực để tái sử dụng cho các dự án sau.' },
      { id: 'n8-3', lane: 'sys', label: 'Cổng cứng S8: Chặn Lost/No-bid', desc: 'Server kiểm tra outcome === WON và requireReason mới cho phép chuyển bước S8.' }
    ]
  }
]

const currentFlow = computed(() => flows.find(f => f.id === activeFlowId.value) || null)

const filteredStages = computed(() => {
  let list = stages
  
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase()
    list = list.map(stg => ({
      ...stg,
      nodes: stg.nodes.filter(n => `${n.label} ${n.desc}`.toLowerCase().includes(q))
    })).filter(stg => stg.nodes.length > 0)
  }

  if (activeLane.value !== 'all') {
    list = list.map(stg => ({
      ...stg,
      nodes: stg.nodes.filter(n => n.lane === activeLane.value)
    })).filter(stg => stg.nodes.length > 0)
  }

  return list
})

function isStageInActiveFlow(stageId: string): boolean {
  if (!currentFlow.value) return true
  return currentFlow.value.steps.includes(stageId)
}
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Header -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <div class="inline-block">
          <SfBadge variant="green" size="md">
            KIẾN TRÚC NGHIỆP VỤ CHUẨN
          </SfBadge>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Bản đồ Nghiệp vụ Bidly Preconstruction CRM
        </h1>
        <p class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
          Minh bạch quy trình: <strong>ai làm gì ở giai đoạn nào</strong>, cổng cứng ở máy chủ, số tự tính và trách nhiệm từng phòng ban trong chu kỳ thầu.
        </p>
        <div class="pt-2 flex flex-wrap justify-center gap-4">
          <SfButton variant="primary" size="lg" to="#demo">
            Đặt lịch Demo thực tế
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/features">
            Xem 6 Mô-đun Lõi
          </SfButton>
        </div>
      </div>
    </section>

    <!-- Flow Selector Section (F01-F09) -->
    <section class="py-8 bg-card border-b border-border">
      <div class="sf-container space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div class="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Chọn Luồng nghiệp vụ tương tác để theo dõi:
          </div>
          <div v-if="currentFlow" class="text-xs font-bold text-primary tabular">
            {{ currentFlow.code }} · {{ currentFlow.name }}
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="flow in flows"
            :key="flow.id"
            type="button"
            :class="[
              'px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border tabular',
              activeFlowId === flow.id
                ? 'bg-primary text-primary-foreground border-transparent shadow-sm'
                : 'bg-background text-muted-foreground border-border hover:text-foreground'
            ]"
            @click="activeFlowId = activeFlowId === flow.id ? '' : flow.id"
          >
            {{ flow.code }} · {{ flow.name.split('(')[0].trim() }}
          </button>
        </div>

        <div v-if="currentFlow" class="p-4 rounded-2xl bg-brand-soft border border-primary/20 text-xs text-foreground flex items-center justify-between gap-4">
          <div>
            <span class="font-bold text-primary">{{ currentFlow.name }}:</span>
            <span class="ml-1 text-muted-foreground">{{ currentFlow.summary }}</span>
          </div>
          <span class="shrink-0 px-2 py-0.5 rounded bg-primary/15 font-mono font-bold text-primary tabular">
            {{ currentFlow.steps.length }} giai đoạn
          </span>
        </div>
      </div>
    </section>

    <!-- Filter Bar by Lane & Search -->
    <section class="py-6 bg-background border-b border-border sticky top-16 z-20 backdrop-blur-md bg-background/95">
      <div class="sf-container">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <!-- Search input -->
          <div class="relative w-full lg:w-72">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Tìm hoạt động, cổng, ghi chú..."
              class="w-full h-9 pl-3 pr-3 text-xs rounded-xl border border-border bg-card text-foreground focus:outline-none focus:border-primary"
            >
          </div>

          <!-- Filter buttons -->
          <div class="flex flex-wrap gap-1.5 items-center">
            <span class="text-[11px] font-bold text-muted-foreground mr-1 hidden sm:inline">Làn:</span>
            <button
              v-for="lane in lanes"
              :key="lane.id"
              type="button"
              :class="[
                'px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer border',
                activeLane === lane.id
                  ? `${lane.color} border-transparent shadow-xs`
                  : 'bg-card text-muted-foreground border-border hover:text-foreground'
              ]"
              @click="activeLane = lane.id"
            >
              {{ lane.label }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Stage Pipeline Matrix View -->
    <section class="py-16 md:py-24 bg-background border-b border-border">
      <div class="sf-container space-y-16">
        <!-- Explanatory note -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-card border border-border shadow-card">
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm shrink-0 tabular">
              9
            </div>
            <div>
              <div class="text-sm font-bold text-foreground">9 Giai đoạn Cố định</div>
              <div class="text-xs text-muted-foreground mt-0.5">State machine bất biến, không thêm/xóa stage để đảm bảo tính toàn vẹn dữ liệu.</div>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-destructive/20 text-destructive flex items-center justify-center font-bold text-sm shrink-0 tabular">
              5
            </div>
            <div>
              <div class="text-sm font-bold text-foreground">5 Cổng Cứng (Hard Gates)</div>
              <div class="text-xs text-muted-foreground mt-0.5">S2, S4 vào, S5 nộp final, S7 outcome, S8 handover: server enforce, không thể vượt quyền.</div>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-[#4f46e5]/20 text-[#4f46e5] flex items-center justify-center font-bold text-sm shrink-0">
              Tx
            </div>
            <div>
              <div class="text-sm font-bold text-foreground">Audit Log &amp; StageHistory</div>
              <div class="text-xs text-muted-foreground mt-0.5">Mọi bước chuyển đều ghi nhận gate + reason + actor trong cùng một database transaction.</div>
            </div>
          </div>
        </div>

        <!-- 9 Stages Cards Sequence -->
        <div class="space-y-8">
          <div
            v-for="stg in filteredStages"
            :key="stg.id"
            :class="[
              'rounded-2xl p-6 sm:p-8 border-2 transition-all',
              stg.isHard
                ? 'border-primary/50 bg-card shadow-card'
                : 'border-border bg-card/60 shadow-xs',
              !isStageInActiveFlow(stg.id) ? 'opacity-40 grayscale-40' : ''
            ]"
          >
            <!-- Stage Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border gap-4">
              <div class="flex items-center gap-4">
                <span :class="[
                  'w-12 h-12 rounded-xl flex items-center justify-center font-black text-base tabular',
                  stg.isHard ? 'bg-primary text-primary-foreground shadow-md' : 'bg-secondary text-foreground'
                ]">
                  {{ stg.id }}
                </span>
                <div>
                  <h3 class="text-xl font-extrabold text-foreground">{{ stg.name }}</h3>
                  <p class="text-xs text-muted-foreground">{{ stg.sub }}</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <span :class="[
                  'px-3 py-1 rounded-full text-xs font-bold',
                  stg.isHard ? 'bg-primary/15 text-primary border border-primary/30' : 'bg-secondary text-muted-foreground'
                ]">
                  {{ stg.gateType }}
                </span>
              </div>
            </div>

            <!-- Exit condition requirement -->
            <div class="py-3 px-4 my-4 rounded-xl bg-background border border-border text-xs text-muted-foreground flex items-center gap-2">
              <span class="font-bold text-foreground shrink-0">Điều kiện qua cổng:</span>
              <span>{{ stg.exitCondition }}</span>
            </div>

            <!-- Activities inside this stage -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              <div
                v-for="node in stg.nodes"
                :key="node.id"
                class="bg-background p-4 sm:p-5 rounded-xl border border-border space-y-2 hover:border-primary/40 transition-colors shadow-xs"
              >
                <div class="flex items-center justify-between gap-2">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-brand-text">
                    {{ lanes.find(l => l.id === node.lane)?.label || node.lane }}
                  </span>
                </div>
                <div class="text-sm font-bold text-foreground">{{ node.label }}</div>
                <p class="text-xs text-muted-foreground leading-relaxed">{{ node.desc }}</p>
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
