<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Preconstruction CRM là gì? Cẩm nang cho Tổng thầu Xây dựng | Bidly',
  description: 'Khái niệm Preconstruction CRM, chuỗi thực thể dữ liệu Dự án đến Gói bàn giao, và ranh giới với CRM bán lẻ & ERP.'
})

const comparisonThreeWays = [
  {
    criteria: 'Đối tượng trung tâm',
    retailCrm: 'Đơn hàng (Deal / Opportunity đơn lẻ)',
    preconCrm: 'Dự án → Pursuit → Gói thầu → Vòng thầu',
    erp: 'Hợp đồng thi công, Dự toán BOQ, Vật tư'
  },
  {
    criteria: 'Thời điểm bắt đầu & kết thúc',
    retailCrm: 'Khách hàng quan tâm → Đóng đơn hàng',
    preconCrm: 'Tín hiệu dự án KCN/FDI → Thắng thầu & Bàn giao (S8)',
    erp: 'Sau khi ký hợp đồng → Quyết toán công trình'
  },
  {
    criteria: 'Chu kỳ theo đuổi & Giá trị',
    retailCrm: 'Vài ngày đến vài tuần; giá trị nhỏ',
    preconCrm: '3 - 24 tháng; giá trị hàng chục đến hàng nghìn tỷ',
    erp: 'Vận hành suốt vòng đời thi công 1 - 3 năm'
  },
  {
    criteria: 'Quản trị chuyển bước (State Machine)',
    retailCrm: 'Kéo thả tự do, không có cổng chặn thực tế',
    preconCrm: '9 stage cố định, 5 cổng cứng bảo vệ ở máy chủ',
    erp: 'Quy trình hạch toán kế toán và phê duyệt mua sắm'
  },
  {
    criteria: 'Đánh giá cơ hội (Go/No-Go)',
    retailCrm: 'Cảm tính hoặc không có công cụ định lượng',
    preconCrm: 'Scorecard 6 tiêu chí trọng số 0-100, lưu vết audit',
    erp: 'Không có chức năng đánh giá trước thầu'
  },
  {
    criteria: 'Phối hợp phòng thầu',
    retailCrm: 'Giao việc cá nhân, không có vòng thầu / final',
    preconCrm: 'Tender Workspace 5 phòng, bất biến 1 bản final',
    erp: 'Quản lý tổ đội công trường, kho bãi, máy móc'
  },
  {
    criteria: 'Mô hình triển khai & Cơ sở dữ liệu',
    retailCrm: 'Multi-tenant SaaS dùng chung database',
    preconCrm: 'Single-tenant on-premise hoặc Private Cloud DB riêng',
    erp: 'On-premise hoặc Private ERP Server'
  }
]

const personas = [
  {
    role: 'Tổng giám đốc / CEO',
    title: 'Biết dự án nào đáng theo & Forecast có độ tin cậy cao',
    description: 'Nắm bắt toàn cảnh pipeline có trọng số, theo dõi phân bố cơ hội theo ngành FDI, phê duyệt Go/No-Go dựa trên dữ liệu thật và kiểm soát rủi ro dòng tiền.',
    badge: 'RA QUYẾT ĐỊNH'
  },
  {
    role: 'Giám đốc / Trưởng phòng BD',
    title: 'Không bỏ sót cơ hội & Kiểm soát việc tiếp theo (Next Action)',
    description: 'Quản lý toàn bộ tín hiệu dự án từ KCN và chủ đầu tư trên một Project Inbox tập trung, xây dựng bản đồ bên liên quan (Stakeholder Map) và theo dõi sát sao lịch sử tương tác.',
    badge: 'TĂNG TRƯỞNG'
  },
  {
    role: 'Trưởng phòng Đấu thầu',
    title: 'Nộp đúng hạn, đúng phiên bản & Đủ đầu việc liên phòng',
    description: 'Phân rã checklist hồ sơ cho 5 phòng ban (Kinh doanh, Kỹ thuật, Đấu thầu, Pháp lý, Tài chính), theo dõi tiến độ thời gian thực và bất biến 1 bản final mỗi vòng.',
    badge: 'VẬN HÀNH THẦU'
  },
  {
    role: 'Kỹ thuật & Dự toán',
    title: 'Nhận yêu cầu rõ ràng & Tái sử dụng tri thức năng lực',
    description: 'Tra cứu nhanh dự án tiêu biểu, thông số kỹ thuật, hồ sơ chuyên gia từ Capability Library và khóa các giả định thương mại trước khi nộp giá chào thầu.',
    badge: 'CHUYÊN MÔN'
  },
  {
    role: 'Pháp lý & Tài chính',
    title: 'Kiểm soát điều khoản hợp đồng & Rủi ro bảo lãnh thầu',
    description: 'Phát hiện sớm các điều khoản thanh toán bất lợi, rủi ro trượt giá vật tư, theo dõi tiến độ phát hành thư bảo lãnh dự thầu và kế hoạch dòng tiền tạm ứng.',
    badge: 'KIỂM SOÁT RỦI RO'
  },
  {
    role: 'Quản trị hệ thống / IT',
    title: 'Bảo vệ dữ liệu giá thầu & Vận hành hệ thống riêng biệt',
    description: 'Kiểm soát phân quyền RBAC 5 vai trò ở máy chủ, lưu vết kiểm toán audit log append-only và tuân thủ Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15.',
    badge: 'BẢO MẬT & HẠ TẦNG'
  }
]

const entities = [
  {
    name: '1. Project (Dự án thực tế)',
    desc: 'Công trình, nhà máy, hạ tầng KCN thực tế với địa điểm, chủ đầu tư, nguồn vốn FDI và mã định danh nội bộ chuẩn hóa.'
  },
  {
    name: '2. Pursuit (Cơ hội theo đuổi)',
    desc: 'Nỗ lực của doanh nghiệp để giành một phạm vi công việc cho dự án đó. Đây là Aggregate Root quản trị giai đoạn S0-S3.'
  },
  {
    name: '3. Work Package (Gói thầu)',
    desc: 'Phân rã theo gói chuyên môn: Kết cấu, MEP, PCCC, Xử lý nước. Mỗi gói mang sub-lifecycle và kết quả riêng từ S4-S8.'
  },
  {
    name: '4. Tender Round (Vòng thầu)',
    desc: 'Vòng RFI, RFQ, RFP hoặc đấu lại. Khi đấu lại, hệ thống mở TenderRound mới, tuyệt đối không sửa hay ghi đè vòng cũ.'
  },
  {
    name: '5. Bid Submission (Hồ sơ nộp)',
    desc: 'Hồ sơ dự thầu cụ thể với giá chào và chuỗi phiên bản (revision chain). Tối đa một bản final được chọn trong mỗi vòng.'
  },
  {
    name: '6. Handover Pack (Gói bàn giao)',
    desc: 'Bộ dữ liệu chuẩn hóa (phạm vi, cam kết thương mại, giả định, rủi ro) để chuyển giao sang hệ thống ERP/PM khi trúng thầu (Won).'
  }
]

const scopeBoundaries = [
  {
    domain: 'Tín hiệu dự án (Project Signals)',
    inScope: 'Thu thập thủ công, import Excel, API KCN/FDI; chuẩn hóa; kiểm tra trùng lặp (dedup); gán owner.',
    outScope: 'Crawler toàn bộ internet không kiểm soát; cơ sở dữ liệu thương mại dùng chung khi chưa có quyền.'
  },
  {
    domain: 'Đánh giá & Chọn cơ hội (Pursuit & Go/No-Go)',
    inScope: 'Scorecard 6 tiêu chí trọng số 0-100, bắt buộc người duyệt, lý do dừng No-bid và audit log.',
    outScope: 'Tự động ra quyết định bằng AI thay thế con người.'
  },
  {
    domain: 'Bên liên quan (Stakeholder Map)',
    inScope: 'Bản đồ 4 vai trò (DM, Influencer, Champion, Gatekeeper), mức ảnh hưởng, độ ủng hộ, touchpoint theo dự án.',
    outScope: 'Theo dõi mạng xã hội cá nhân hoặc thu thập dữ liệu trái luật.'
  },
  {
    domain: 'Không gian đấu thầu (Tender Workspace)',
    inScope: 'Milestones, checklist 5 phòng, clarification log, chuỗi phiên bản hồ sơ và kiểm soát duy nhất 1 bản final.',
    outScope: 'Tự động nộp thầu qua mạng công thay con người.'
  },
  {
    domain: 'Dự toán & Thương mại (Estimate Summary)',
    inScope: 'Tổng giá trị chào, giả định thương mại, tóm tắt phiên bản, đính kèm bảng giá BOQ.',
    outScope: 'Takeoff chi tiết từng dòng, định mức chi tiết, bảng đơn giá vật tư hàng ngàn mã.'
  },
  {
    domain: 'Bàn giao sau trúng thầu (Handover)',
    inScope: 'Gói dữ liệu bàn giao tiền thi công (S8 Handover Pack) chuẩn hóa sang ERP/PM.',
    outScope: 'Quản lý thi công công trường, nhật ký, nghiệm thu QA/QC, HSE, sổ kế toán công nợ.'
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
            CẨM NANG ĐỊNH VỊ CHUYÊN NGÀNH
          </SfBadge>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Preconstruction CRM là gì?
        </h1>
        <p class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
          Preconstruction CRM là hệ thống làm việc chuẩn cho quá trình tìm kiếm, theo đuổi và giành dự án xây dựng công nghiệp: từ tín hiệu dự án đầu tiên đến kết quả Thắng/Thua và gói bàn giao tiền thi công.
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

    <!-- Why Industrial General Contractors Need Precon CRM -->
    <section class="py-16 md:py-24 bg-card border-b border-border">
      <div class="sf-container">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 space-y-6">
            <SfBadge variant="navy">KHOẢNG TRỐNG QUẢN TRỊ</SfBadge>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
              Tại sao Tổng thầu Công nghiệp không thể dùng CRM bán hàng hay ERP?
            </h2>
            <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
              CRM bán hàng truyền thống xoay quanh đơn hàng tiêu dùng (Deal/Order) với chu kỳ ngắn và cá nhân mua hàng đơn lẻ. Trong khi đó, ERP và phần mềm quản lý thi công chỉ bắt đầu sau khi hợp đồng đã ký. Preconstruction CRM lấp đầy đúng khoảng trống quan trọng nhất: phát hiện, chọn đúng cơ hội và giành thắng lợi trong đấu thầu.
            </p>
            <div class="space-y-4 pt-2">
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-brand-soft text-brand-text flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">1</span>
                <div>
                  <h4 class="font-bold text-foreground">Đối tượng trung tâm là Pursuit &amp; Work Package</h4>
                  <p class="text-xs sm:text-sm text-muted-foreground">Một dự án có thể có nhiều cơ hội theo đuổi (Pursuit), mỗi cơ hội gồm nhiều gói thầu (Work Package) với chu kỳ đấu thầu độc lập.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-brand-soft text-brand-text flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">2</span>
                <div>
                  <h4 class="font-bold text-foreground">State Machine 5 Cổng Cứng (Server-Enforced)</h4>
                  <p class="text-xs sm:text-sm text-muted-foreground">Không cho phép kéo thả tự do làm sai lệch pipeline; các cổng S2 (Go/No-Go), S4, S5, S7, S8 bắt buộc có bằng chứng và người duyệt ở máy chủ.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-brand-soft text-brand-text flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">3</span>
                <div>
                  <h4 class="font-bold text-foreground">Gói Bàn Giao (Handover Pack) chuẩn mực sang ERP</h4>
                  <p class="text-xs sm:text-sm text-muted-foreground">Bidly kết thúc tại điểm Thắng thầu với gói bàn giao đầy đủ (phạm vi, cam kết thương mại, giả định, rủi ro) chuyển giao sang hệ thống thi công.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="rounded-2xl overflow-hidden shadow-card border border-border bg-background p-6 space-y-6">
              <div class="flex items-center justify-between border-b border-border pb-4">
                <span class="text-xs font-bold uppercase tracking-wider text-brand-text">Ranh giới vòng đời sản phẩm</span>
                <span class="text-xs text-muted-foreground font-mono tabular">S0 ➔ S8</span>
              </div>
              <div class="space-y-4">
                <div class="p-4 rounded-xl bg-card border border-border shadow-xs flex items-center gap-4">
                  <div class="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                    S0
                  </div>
                  <div>
                    <div class="text-xs font-bold uppercase tracking-wider text-brand-text">Điểm bắt đầu</div>
                    <div class="text-sm font-bold text-foreground">Tín hiệu dự án &amp; Sàng lọc cơ hội</div>
                    <div class="text-xs text-muted-foreground">Project Inbox, dedup, FDI/KCN mapping, gán owner</div>
                  </div>
                </div>

                <div class="p-4 rounded-xl bg-card border border-border shadow-xs flex items-center gap-4">
                  <div class="w-10 h-10 rounded-lg bg-stage-s4 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    S2-S6
                  </div>
                  <div>
                    <div class="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tiền đấu thầu &amp; Đấu thầu</div>
                    <div class="text-sm font-bold text-foreground">Scorecard Go/No-Go &amp; Tender Workspace</div>
                    <div class="text-xs text-muted-foreground">Checklist 5 phòng ban, bất biến 1 bản final, làm rõ</div>
                  </div>
                </div>

                <div class="p-4 rounded-xl bg-card border border-border shadow-xs flex items-center gap-4">
                  <div class="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                    S8
                  </div>
                  <div>
                    <div class="text-xs font-bold uppercase tracking-wider text-brand-text">Điểm kết thúc</div>
                    <div class="text-sm font-bold text-foreground">Gói bàn giao tiền thi công (Handover Pack)</div>
                    <div class="text-xs text-muted-foreground">Chuyển giao dữ liệu sang ERP/PM thi công</div>
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
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="green">SO SÁNH BẢN CHẤT</SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Khác Biệt Giữa CRM Bán Lẻ, Preconstruction CRM &amp; ERP
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground">
            Bảng đối chiếu 7 tiêu chí then chốt giúp doanh nghiệp định vị đúng công cụ cho từng giai đoạn.
          </p>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
          <table class="w-full text-left text-sm">
            <thead class="bg-muted/60 border-b border-border text-foreground font-bold">
              <tr>
                <th class="p-4 sm:p-5">Tiêu chí</th>
                <th class="p-4 sm:p-5 text-muted-foreground font-semibold">CRM Bán lẻ (MISA, Base...)</th>
                <th class="p-4 sm:p-5 text-brand-text bg-brand-soft/40 border-x border-brand-soft font-bold">Bidly Preconstruction CRM</th>
                <th class="p-4 sm:p-5 text-muted-foreground font-semibold">ERP / PM Thi công (SAP, BIM...)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr v-for="(row, rIdx) in comparisonThreeWays" :key="rIdx" class="hover:bg-muted/20 transition-colors">
                <td class="p-4 sm:p-5 font-bold text-foreground whitespace-nowrap">{{ row.criteria }}</td>
                <td class="p-4 sm:p-5 text-muted-foreground">{{ row.retailCrm }}</td>
                <td class="p-4 sm:p-5 font-semibold text-foreground bg-brand-soft/20 border-x border-brand-soft">{{ row.preconCrm }}</td>
                <td class="p-4 sm:p-5 text-muted-foreground">{{ row.erp }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Canonical Data Model Chain -->
    <section class="py-16 md:py-24 bg-card border-b border-border">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="green">MÔ HÌNH DỮ LIỆU CỐT LÕI</SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Chuỗi Thực Thể Nghiệp Vụ Chuẩn (Canonical Model)
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground">
            Phân định rõ ràng từng cấp bậc dữ liệu: giải quyết trọn vẹn bài toán một dự án đấu thầu nhiều gói thầu song song (Multi-package) và kết quả thầu từng phần (Partial Award).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          <div
            v-for="(ent, eIdx) in entities"
            :key="eIdx"
            class="sf-card bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 space-y-3"
          >
            <div class="text-xs font-mono font-bold text-brand-text uppercase tabular">Entity #0{{ eIdx + 1 }}</div>
            <h3 class="text-lg font-bold text-foreground">{{ ent.name }}</h3>
            <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">{{ ent.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6 Personas Jobs-to-be-Done -->
    <section id="personas" class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="green">VAI TRÒ &amp; GIẢI PHÁP</SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Bidly Phục Vụ Đúng Nhu Cầu Của 6 Nhóm Nhân Sự Then Chốt
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground">
            Mỗi vai trò trong doanh nghiệp tổng thầu có góc nhìn dữ liệu và quyền hạn tương ứng trên cùng một hệ thống duy nhất.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          <div
            v-for="(persona, pIdx) in personas"
            :key="pIdx"
            class="sf-card bg-card p-7 sm:p-8 rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 space-y-4 flex flex-col justify-between"
          >
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <SfBadge variant="navy" size="sm">{{ persona.role }}</SfBadge>
                <span class="text-[10px] font-bold uppercase text-brand-text">{{ persona.badge }}</span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-foreground">
                {{ persona.title }}
              </h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {{ persona.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- In-Scope vs Out-of-Scope Boundaries -->
    <section class="py-16 md:py-24 bg-card border-b border-border">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="green">RANH GIỚI HỆ THỐNG</SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Ranh Giới Rõ Ràng: Không Làm Tràn Lan
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground">
            Bidly tập trung làm xuất sắc miền Preconstruction, không cố gắng trở thành một ERP cồng kềnh hay phần mềm dự toán chi tiết.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
          <div
            v-for="(bound, bIdx) in scopeBoundaries"
            :key="bIdx"
            class="p-6 sm:p-7 rounded-2xl bg-background border border-border shadow-xs space-y-3"
          >
            <h3 class="text-base font-bold text-foreground flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-brand-text"></span>
              {{ bound.domain }}
            </h3>
            <div class="space-y-2 text-xs sm:text-sm">
              <div class="text-foreground">
                <strong class="text-brand-text">Trong phạm vi:</strong> {{ bound.inScope }}
              </div>
              <div class="text-muted-foreground">
                <strong class="text-destructive">Ngoài phạm vi:</strong> {{ bound.outScope }}
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
