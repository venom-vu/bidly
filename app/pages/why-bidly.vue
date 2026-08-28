<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Vì sao chọn Bidly? So sánh Giải pháp & Lợi ích ROI | Preconstruction CRM',
  description: 'Khám phá lý do tổng thầu EPC, MEP và kết cấu thép lựa chọn Bidly thay vì Excel, CRM bán hàng hay ERP. So sánh 5 nhóm giải pháp, 6 chuyển dịch AS-IS sang TO-BE và 6 chỉ số đo lường hiệu quả.'
})

const marketData = [
  {
    value: '+10,28%',
    label: 'Tăng trưởng xây dựng Q2/2026',
    desc: 'Ngành xây dựng Việt Nam duy trì đà tăng trưởng cao (+7,87% năm 2024 và +10,28% trong Q2/2026). Nhu cầu quản trị pipeline tăng mạnh theo số lượng dự án.'
  },
  {
    value: '34,65 tỷ USD',
    label: 'FDI đăng ký 6T/2026 (+61%)',
    desc: 'Dòng vốn FDI vào nhà máy, khu công nghiệp tiếp tục bùng nổ; chế biến, chế tạo chiếm 56,5% tạo cơ hội lớn cho tổng thầu EPC, MEP, PCCC và kết cấu thép.'
  },
  {
    value: '44,7%',
    label: 'Doanh nghiệp thiếu hợp đồng mới',
    desc: 'Khảo sát ngành ghi nhận 44,7% doanh nghiệp thiếu hợp đồng mới; 11,6% không biết thông tin đấu thầu. Săn tìm và chọn đúng dự án là bài toán sống còn.'
  },
  {
    value: '2,6 / 5',
    label: 'Mức độ số hóa ngành xây dựng',
    desc: 'Quy trình đấu thầu còn phân mảnh giữa Zalo, Excel, Drive. Chuyển đổi số với công cụ may đo chuẩn ngành mang lại lợi thế cạnh tranh áp đảo.'
  }
]

const asIsToBe = [
  {
    area: 'Tín hiệu dự án & Project Inbox',
    asIs: 'Thu thập từ Zalo, KCN, báo chí lưu rải rác; không rõ ai đang theo, dễ trùng lặp hoặc bỏ sót cơ hội.',
    toBe: 'Một Project Inbox duy nhất, tự động kiểm tra trùng (dedup), phân loại FDI/KCN/ngành và gán owner rõ ràng.'
  },
  {
    area: 'Đánh giá & Chọn cơ hội (Go/No-Go)',
    asIs: 'Quyết định theo cảm tính hoặc áp lực doanh số; đầu tư nguồn lực vào các dự án rủi ro cao hoặc không đúng năng lực.',
    toBe: 'Scorecard Go/No-Go định lượng 6 tiêu chí có trọng số (0-100); bắt buộc người duyệt, quyết định và lý do vĩnh viễn.'
  },
  {
    area: 'Mạng lưới bên liên quan (Stakeholders)',
    asIs: 'Lưu trong danh bạ cá nhân; khi nhân sự nghỉ việc, công ty mất toàn bộ thông tin quan hệ và lịch sử tiếp xúc.',
    toBe: 'Bản đồ Stakeholder Map theo ngữ cảnh dự án (Decision Maker, Influencer, Champion, Gatekeeper); dữ liệu thuộc về tổ chức.'
  },
  {
    area: 'Phối hợp lập hồ sơ thầu (Tender Workspace)',
    asIs: 'Checklist và file nằm rải rác trên Drive, Zalo; dễ trễ hạn, sót đầu mục hoặc nộp nhầm phiên bản cũ.',
    toBe: 'Tender Workspace theo vòng thầu; phân rã checklist cho 5 phòng ban, theo dõi deadline và bất biến tối đa 1 bản final.'
  },
  {
    area: 'Thư viện hồ sơ năng lực (Capability Library)',
    asIs: 'Mỗi lần đấu thầu lại đi hỏi xin CV, ảnh dự án và chứng chỉ; chứng chỉ hết hạn không được cảnh báo.',
    toBe: 'Capability Library tập trung: dự án tiêu biểu (tonnage, diện tích), hồ sơ chuyên gia, thiết bị có tag và cảnh báo hết hạn tự động.'
  },
  {
    area: 'Bàn giao sau trúng thầu (Handover Pack S8)',
    asIs: 'Bàn giao sang ban điều hành dự án bằng họp hoặc email; thất lạc cam kết thương mại, giả định và rủi ro.',
    toBe: 'Gói bàn giao Handover Pack (S8) chuẩn hóa toàn bộ dữ liệu trước khi chuyển giao sang hệ thống ERP/PM thi công.'
  }
]

const competitiveMatrix = [
  {
    group: 'CRM Việt Nam phổ thông (MISA, Base...)',
    pros: 'Giá thấp, giao diện tiếng Việt, triển khai nhanh.',
    cons: 'Mô hình dữ liệu đơn hàng (Deal); thiếu hoàn toàn chuỗi Pursuit, gói thầu (WorkPackage), Go/No-Go scorecard, vòng thầu và hồ sơ năng lực xây dựng.'
  },
  {
    group: 'CRM quốc tế phổ thông (Salesforce, HubSpot...)',
    pros: 'Hệ sinh thái tính năng rộng, thương hiệu lớn.',
    cons: 'Chi phí triển khai và tùy biến rất cao; không bản địa hóa quy trình đấu thầu Việt Nam; rào cản chia sẻ dữ liệu SaaS nước ngoài.'
  },
  {
    group: 'AEC CRM quốc tế (Unanet / Cosential...)',
    pros: 'Đã xác nhận nhu cầu Preconstruction chuyên ngành xây dựng.',
    cons: 'Chi phí đắt đỏ; không có đội ngũ hỗ trợ và pháp nhân tại Việt Nam; rào cản ngôn ngữ và không phù hợp với chuẩn hóa Zalo/Excel nội địa.'
  },
  {
    group: 'ERP / Quản lý thi công (SAP, BIM, PM)',
    pros: 'Quản lý tài chính, vật tư, kế toán và tiến độ thi công rất tốt.',
    cons: 'Bắt đầu quá muộn: chỉ sau khi đã ký hợp đồng. Không giải quyết được bài toán phát hiện, sàng lọc và giành dự án ở giai đoạn tiền xây dựng.'
  },
  {
    group: 'Tự phát triển theo dự án (In-house Custom)',
    pros: 'May đo đúng quy trình hiện tại của một doanh nghiệp.',
    cons: 'Chi phí ban đầu lớn, khó bảo trì nâng cấp, thiếu kinh nghiệm chuẩn hóa ngành và rủi ro gián đoạn khi đội ngũ IT nội bộ biến động.'
  }
]

const kpiMetrics = [
  {
    metric: '>= 85%',
    label: 'Độ phủ quản trị (Coverage)',
    desc: 'Tỷ lệ cơ hội đang hoạt động có đầy đủ owner, stage và việc tiếp theo (next action).'
  },
  {
    metric: '100%',
    label: 'Kiểm soát hạn chót (Deadline)',
    desc: 'Mọi milestone và hạn nộp thầu đều có người phụ trách và cảnh báo thời gian thực.'
  },
  {
    metric: '0 lỗi',
    label: 'Chất lượng phiên bản (Version Quality)',
    desc: 'Tuyệt đối không xảy ra sự cố dùng nhầm phiên bản hồ sơ final nhờ cơ chế khóa máy chủ.'
  },
  {
    metric: '>= 70%',
    label: 'Độ sâu quan hệ (Stakeholder Depth)',
    desc: 'Các dự án ưu tiên xác định rõ Decision Maker, Influencer và Champion.'
  },
  {
    metric: '+30%',
    label: 'Tái sử dụng năng lực (Capability Reuse)',
    desc: 'Tiết kiệm tối thiểu 30% thời gian tìm kiếm dự án tiêu biểu, CV và chứng chỉ cho hồ sơ thầu.'
  },
  {
    metric: '>= 70%',
    label: 'Tỷ lệ ứng dụng thực tế (Adoption)',
    desc: 'Tỷ lệ nhân sự tích cực sử dụng hệ thống hàng tuần sau 6-8 tuần triển khai thí điểm.'
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <div class="inline-block">
          <SfBadge variant="green" size="md">
            ĐỊNH VỊ &amp; GIÁ TRỊ KHÁC BIỆT
          </SfBadge>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Vì sao Tổng thầu Công nghiệp Chọn Bidly?
        </h1>
        <p class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
          Bidly lấp đầy khoảng trống giữa CRM bán hàng và ERP thi công: giúp tổng thầu tập trung đúng cơ hội, nộp đúng hồ sơ và giữ trọn tri thức quan hệ.
        </p>
        <div class="pt-2 flex flex-wrap justify-center gap-4">
          <SfButton variant="primary" size="lg" to="#demo">
            Đặt lịch Demo 45 phút
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/crm/pricing">
            Tìm hiểu gói Pilot 8-10 tuần
          </SfButton>
        </div>
      </div>
    </section>

    <!-- Market Context & "Why Now" -->
    <section class="py-16 md:py-24 bg-card border-b border-border">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="navy">CĂN CỨ THỊ TRƯỜNG</SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Vì Sao Cần Bidly Ngay Lúc Này?
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal">
            Thị trường 2026 bùng nổ vốn FDI, nhưng cũng đối mặt áp lực cạnh tranh gay gắt.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
          <div
            v-for="(stat, sIdx) in marketData"
            :key="sIdx"
            class="sf-card bg-card p-6 sm:p-7 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 space-y-3 flex flex-col justify-between border border-border/70 hover:border-primary/40"
          >
            <div class="text-2xl sm:text-3xl font-extrabold text-primary tabular tracking-tight">{{ stat.value }}</div>
            <div>
              <div class="text-sm font-extrabold text-foreground tracking-tight">{{ stat.label }}</div>
              <p class="text-xs text-muted-foreground leading-relaxed mt-1 font-normal">{{ stat.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AS-IS vs TO-BE Transformation Table -->
    <section class="py-16 md:py-24 bg-secondary/40 border-b border-border">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="green">CHUYỂN ĐỔI VẬN HÀNH</SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            6 Điểm Chuyển Đổi: Từ Thủ Công sang Chuẩn Hóa
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal">
            So sánh vận hành hiện tại (AS-IS) với mô hình quản trị của Bidly (TO-BE).
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(item, idx) in asIsToBe"
            :key="idx"
            class="bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 space-y-4 border border-border/70"
          >
            <div class="flex items-center gap-3">
              <span class="w-7 h-7 rounded-full bg-brand-soft text-primary flex items-center justify-center font-extrabold text-xs tabular border border-primary/20">
                {{ idx + 1 }}
              </span>
              <h3 class="text-lg font-extrabold text-foreground tracking-tight">{{ item.area }}</h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <!-- AS-IS -->
              <div class="p-4 rounded-xl bg-destructive/5 border border-destructive/20 space-y-1.5">
                <div class="text-xs font-bold uppercase tracking-wider text-destructive flex items-center gap-1.5">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                  <span>Hiện tại (AS-IS)</span>
                </div>
                <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">{{ item.asIs }}</p>
              </div>

              <!-- TO-BE -->
              <div class="p-4 rounded-xl bg-primary/5 border border-primary/25 space-y-1.5">
                <div class="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Với Bidly (TO-BE)</span>
                </div>
                <p class="text-xs sm:text-sm text-foreground font-semibold leading-relaxed">{{ item.toBe }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Competitive Alternatives Comparison -->
    <section class="py-16 md:py-24 bg-card border-b border-border">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="green">KHOẢNG TRỐNG CẠNH TRANH</SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            So Sánh Bidly với 5 Nhóm Giải Pháp Thay Thế
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal">
            Tại sao CRM bán lẻ, ERP hay tự phát triển không giải quyết được bài toán thầu xây dựng?
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          <div
            v-for="(comp, cIdx) in competitiveMatrix"
            :key="cIdx"
            class="sf-card bg-card p-6 sm:p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between space-y-4 border border-border/70 hover:border-primary/40"
          >
            <div class="space-y-3">
              <h3 class="text-lg font-extrabold text-foreground leading-snug tracking-tight">{{ comp.group }}</h3>
              <div class="space-y-2.5 text-xs">
                <div>
                  <span class="font-bold text-primary">Điểm mạnh:</span>
                  <span class="text-muted-foreground ml-1 font-normal">{{ comp.pros }}</span>
                </div>
                <div>
                  <span class="font-bold text-destructive">Khoảng trống:</span>
                  <span class="text-muted-foreground ml-1 font-normal">{{ comp.cons }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pilot ROI & Adoption Metrics -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="green">ĐO LƯỜNG HIỆU QUẢ</SfBadge>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            6 Chỉ Số Đo Lường Hiệu Quả Chương Trình Pilot
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal">
            Vtechcom cùng khách hàng theo dõi các chỉ số đo lường rõ ràng trong 8-10 tuần thí điểm.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          <div
            v-for="(kpi, kIdx) in kpiMetrics"
            :key="kIdx"
            class="sf-card bg-card p-6 sm:p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 space-y-2 text-left flex flex-col justify-between border border-border/70 hover:border-primary/40"
          >
            <div class="space-y-2">
              <div class="text-3xl sm:text-4xl font-extrabold text-primary tabular tracking-tight">{{ kpi.metric }}</div>
              <div class="text-base font-extrabold text-foreground tracking-tight">{{ kpi.label }}</div>
              <p class="text-xs text-muted-foreground leading-relaxed font-normal">{{ kpi.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Contact Blade -->
    <SfContactPillars />
  </div>
</template>
