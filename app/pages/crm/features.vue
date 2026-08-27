<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Tổng hợp Tính năng Nổi bật của Hệ thống CRM | Bidly',
  description: 'Khám phá chi tiết các tính năng của CRM: Quản lý Lead & Cơ hội S0–S8, Chấm điểm AI, Omnichannel Service, Marketing Automation, Báo cáo & Dashboard phân tích dữ liệu.'
})

const featureCategories = [
  {
    id: 'sales',
    badge: 'BÁN HÀNG & TIỀN DỰ ÁN (PRECONSTRUCTION)',
    title: 'Quản lý Lead & Quy trình 9 Giai đoạn S0–S8',
    description: 'Chuyển đổi cơ hội tiềm năng thành hợp đồng trúng thầu với quy trình kiểm soát cổng cứng (Hard Gates).',
    items: [
      'Chấm điểm cơ hội Go/No-Go tự động bằng ma trận tiêu chí',
      'Bảng theo dõi giao dịch dạng Pipeline & Kanban trực quan',
      'Quản lý hồ sơ nộp thầu (Tender Room) và gói bàn giao S8',
      'Dự báo doanh số và quản trị rủi ro đa chiều theo thời gian thực'
    ]
  },
  {
    id: 'service',
    badge: 'DỊCH VỤ & CHĂM SÓC KHÁCH HÀNG',
    title: 'Hỗ trợ Đa kênh & Trải nghiệm 5 Sao',
    description: 'Cung cấp cho đội ngũ hỗ trợ góc nhìn toàn diện 360 độ để giải quyết mọi thắc mắc của khách hàng.',
    items: [
      'Định tuyến ticket thông minh theo kỹ năng và mức độ ưu tiên',
      'Tích hợp đa kênh: Hotline, Live Chat, Email, Zalo & Facebook',
      'Cổng tri thức tự phục vụ (Self-service Knowledge Base)',
      'Đo lường chỉ số hài lòng khách hàng CSAT & NPS tự động'
    ]
  },
  {
    id: 'ai',
    badge: 'AGENTIC AI & TỰ ĐỘNG HÓA',
    title: 'Trí tuệ Nhân tạo Tự hành 24/7',
    description: 'Giải phóng nhân sự khỏi các công việc thủ công lặp lại bằng các AI Agent thông minh.',
    items: [
      'AI Agent tự động trả lời email hỗ trợ và tư vấn ban đầu',
      'Tự động tạo tóm tắt thông tin khách hàng trước mỗi cuộc gọi',
      'Gợi ý hành động tiếp theo tốt nhất (Next Best Action)',
      'Thiết kế quy trình tự động hóa không cần viết mã (No-code Flow Builder)'
    ]
  },
  {
    id: 'analytics',
    badge: 'PHÂN TÍCH & BÁO CÁO',
    title: 'Dữ liệu Thời gian thực & Báo cáo Thông minh',
    description: 'Đưa ra các quyết định kinh doanh chuẩn xác dựa trên dữ liệu trực quan cập nhật tức thì.',
    items: [
      'Dashboard hiệu suất kinh doanh tùy biến linh hoạt',
      'Báo cáo phân tích hiệu quả từng chiến dịch tiếp thị',
      'Xuất báo cáo PDF/Excel tự động định kỳ theo tuần/tháng',
      'Cảnh báo sớm các giao dịch có nguy cơ bị hủy hoặc chậm trễ'
    ]
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Features -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          TÍNH NĂNG NỀN TẢNG
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Trang bị Đầy đủ Bộ Công cụ cho Mọi Bộ phận Doanh nghiệp
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Khám phá hệ sinh thái tính năng CRM toàn diện được thiết kế để kết nối Bán hàng, Tiền dự án, Chăm sóc khách hàng và Tiếp thị xoay quanh hiệu quả kinh doanh.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Dùng thử toàn bộ tính năng 30 ngày
          </SfButton>
        </div>
      </div>
    </section>

    <!-- Feature Categories Grid -->
    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container space-y-16">
        <div
          v-for="cat in featureCategories"
          :id="cat.id"
          :key="cat.id"
          class="sf-card-hover bg-background p-8 sm:p-12 rounded-3xl border border-border shadow-sm space-y-6"
        >
          <div class="space-y-2">
            <SfBadge variant="navy">{{ cat.badge }}</SfBadge>
            <h2 class="text-2xl sm:text-3xl font-bold text-foreground">
              {{ cat.title }}
            </h2>
            <p class="text-base text-muted-foreground">
              {{ cat.description }}
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border">
            <div
              v-for="(item, iIdx) in cat.items"
              :key="iIdx"
              class="flex items-start gap-3 bg-card p-4 rounded-xl border border-border shadow-xs"
            >
              <span class="w-5 h-5 rounded-full bg-brand-soft text-brand-text flex items-center justify-center shrink-0 mt-0.5">
                ✓
              </span>
              <span class="text-sm font-semibold text-foreground">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Contact Blade -->
    <SfContactPillars />
  </div>
</template>
