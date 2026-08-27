<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Quy trình Triển khai CRM 5 Bước Chuẩn Quốc tế | Bidly',
  description: 'Cẩm nang lộ trình 5 bước triển khai phần mềm CRM thành công: Từ chuẩn bị dữ liệu, đào tạo nhân sự, tự động hóa quy trình đến đo lường ROI.'
})

const steps = [
  {
    number: '01',
    title: 'Xác định Mục tiêu & Chỉ số Đo lường (KPI)',
    description: 'Làm rõ các mục tiêu kinh doanh cụ thể: Tăng tỷ lệ thắng thầu, giảm thời gian xử lý hồ sơ hay cải thiện độ hài lòng khách hàng.',
    tip: 'Đặt mục tiêu theo nguyên tắc SMART có thể đo lường được sau 3, 6 và 12 tháng.'
  },
  {
    number: '02',
    title: 'Làm sạch & Chuẩn hóa Dữ liệu Khách hàng & Dự án',
    description: 'Thu thập dữ liệu từ các file Excel, danh bạ email và phần mềm cũ, loại bỏ bản ghi trùng lặp và phân loại trường thông tin chuẩn.',
    tip: 'Chất lượng dữ liệu đầu vào quyết định 80% độ chính xác của các phân tích và AI Agent sau này.'
  },
  {
    number: '03',
    title: 'Tùy biến Quy trình Làm việc & Hard Gates',
    description: 'Thiết lập các giai đoạn phễu S0–S8, ma trận tiêu chí đánh giá Go/No-Go và phân quyền dữ liệu bảo mật theo vai trò phòng ban.',
    tip: 'Bắt đầu với quy trình chuẩn, sau đó mở rộng dần các luồng phê duyệt và checklist chi tiết.'
  },
  {
    number: '04',
    title: 'Đào tạo Đội ngũ & Xây dựng Văn hóa Dữ liệu',
    description: 'Tổ chức các buổi hướng dẫn thực hành thực tế, giải thích rõ lợi ích cá nhân cho nhân viên thay vì chỉ là công cụ giám sát.',
    tip: 'Tận dụng các hướng dẫn tương tác để đội ngũ làm quen nhanh chóng.'
  },
  {
    number: '05',
    title: 'Đánh giá Hiệu quả & Tối ưu hóa Định kỳ',
    description: 'Theo dõi báo cáo tỷ lệ chuyển đổi, đo lường mức độ gia tăng hợp đồng trúng thầu và liên tục cải tiến quy trình làm việc.',
    tip: 'Khảo sát phản hồi của người dùng định kỳ hàng tháng để kịp thời gỡ bỏ các rào cản thao tác.'
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Implementation -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          CẨM NANG THỰC CHIẾN
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Lộ Trình Triển Khai CRM 5 Bước Cho Doanh Nghiệp Thành Công
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Triển khai CRM không chỉ là cài đặt phần mềm, mà là một bước chuyển đổi chiến lược lấy cơ hội và khách hàng làm trung tâm. Dưới đây là lộ trình đã được kiểm chứng trên hàng trăm dự án.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Nhận tư vấn triển khai miễn phí
          </SfButton>
        </div>
      </div>
    </section>

    <!-- 5 Steps List -->
    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container max-w-4xl space-y-10">
        <div
          v-for="(step, idx) in steps"
          :key="idx"
          class="sf-card-hover bg-background p-8 sm:p-10 rounded-3xl border border-border shadow-sm flex flex-col md:flex-row gap-6 items-start"
        >
          <div class="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black shrink-0 shadow-md">
            {{ step.number }}
          </div>

          <div class="space-y-3 flex-1">
            <h2 class="text-xl sm:text-2xl font-bold text-foreground">
              {{ step.title }}
            </h2>
            <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {{ step.description }}
            </p>
            <div class="bg-brand-soft p-3.5 rounded-xl text-xs font-semibold text-brand-text flex items-center gap-2">
              <span>💡</span>
              <span><strong>Mẹo thực tế:</strong> {{ step.tip }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Contact Blade -->
    <SfContactPillars />
  </div>
</template>
