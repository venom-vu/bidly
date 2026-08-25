<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Quy trình Triển khai CRM 5 Bước Chuẩn Quốc tế | bidly',
  description: 'Cẩm nang lộ trình 5 bước triển khai phần mềm CRM thành công: Từ chuẩn bị dữ liệu, đào tạo nhân sự, tự động hóa quy trình đến đo lường ROI.'
})

const steps = [
  {
    number: '01',
    title: 'Xác định Mục tiêu & Chỉ số Đo lường (KPI)',
    description: 'Làm rõ các mục tiêu kinh doanh cụ thể: Tăng tỷ lệ chốt đơn, giảm thời gian xử lý ticket hay cải thiện độ hài lòng CSAT.',
    tip: 'Đặt mục tiêu theo nguyên tắc SMART có thể đo lường được sau 3, 6 và 12 tháng.'
  },
  {
    number: '02',
    title: 'Làm sạch & Chuẩn hóa Dữ liệu Khách hàng',
    description: 'Thu thập dữ liệu từ các file Excel, danh bạ email và phần mềm cũ, loại bỏ bản ghi trùng lặp và phân loại trường thông tin chuẩn.',
    tip: 'Chất lượng dữ liệu đầu vào quyết định 80% độ chính xác của các AI Agent sau này.'
  },
  {
    number: '03',
    title: 'Tùy biến Quy trình Làm việc & Phân quyền',
    description: 'Thiết lập các giai đoạn trong phễu bán hàng, quy tắc phân bổ lead tự động và phân quyền dữ liệu bảo mật theo vai trò phòng ban.',
    tip: 'Bắt đầu với quy trình đơn giản, sau đó mở rộng dần các luồng tự động hóa phức tạp.'
  },
  {
    number: '04',
    title: 'Đào tạo Đội ngũ & Xây dựng Văn hóa Dữ liệu',
    description: 'Tổ chức các buổi hướng dẫn thực hành thực tế, giải thích rõ lợi ích cá nhân cho nhân viên thay vì chỉ là công cụ giám sát.',
    tip: 'Tận dụng các bài học Trailhead tương tác để nhân viên làm quen hào hứng hơn.'
  },
  {
    number: '05',
    title: 'Đánh giá Hiệu quả & Tối ưu hóa Định kỳ',
    description: 'Theo dõi báo cáo Adoption Rate (Tỷ lệ ứng dụng), đo lường mức độ gia tăng doanh số và liên tục cải tiến quy trình làm việc.',
    tip: 'Khảo sát phản hồi của người dùng định kỳ hàng tháng để kịp thời gỡ bỏ các rào cản thao tác.'
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Implementation -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-gray-100">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="blue" size="md">
          CẨM NANG THỰC CHIẾN
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#032D60] tracking-tight leading-[1.2]">
          Lộ Trình Triển Khai CRM 5 Bước Cho Doanh Nghiệp Thành Công
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Triển khai CRM không chỉ là cài đặt phần mềm, mà là một bước chuyển đổi chiến lược lấy khách hàng làm trung tâm. Dưới đây là lộ trình đã được kiểm chứng trên hàng nghìn dự án.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Nhận tư vấn triển khai miễn phí
          </SfButton>
        </div>
      </div>
    </section>

    <!-- 5 Steps List -->
    <section class="py-16 md:py-24 bg-white">
      <div class="sf-container max-w-4xl space-y-10">
        <div
          v-for="(step, idx) in steps"
          :key="idx"
          class="sf-card-hover bg-[#F8FAFC] p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 items-start"
        >
          <div class="w-16 h-16 rounded-2xl bg-[#0176D3] text-white flex items-center justify-center text-2xl font-black shrink-0 shadow-md">
            {{ step.number }}
          </div>

          <div class="space-y-3 flex-1">
            <h2 class="text-xl sm:text-2xl font-bold text-[#032D60]">
              {{ step.title }}
            </h2>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
              {{ step.description }}
            </p>
            <div class="bg-[#E6F4EA] p-3.5 rounded-xl text-xs font-semibold text-[#04844B] flex items-center gap-2">
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
