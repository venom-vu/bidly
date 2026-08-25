<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'CRM là gì? Hướng dẫn Toàn diện về Quản trị Quan hệ Khách hàng | bidly',
  description: 'Tìm hiểu định nghĩa CRM, lợi ích của việc ứng dụng CRM cho các bộ phận bán hàng, dịch vụ, tiếp thị và cách AI tự hành chuyển đổi doanh nghiệp.'
})

const departmentBenefits = [
  {
    role: 'Đội ngũ Kinh doanh (Sales)',
    title: 'Tăng 30% tốc độ chốt hợp đồng',
    description: 'Tự động hóa nhập liệu, chấm điểm cơ hội tiềm năng (Lead Scoring) bằng AI và quản lý toàn bộ phễu bán hàng minh bạch trên một màn hình.',
    icon: 'sales'
  },
  {
    role: 'Chăm sóc Khách hàng (Service)',
    title: 'Giảm 50% thời gian phản hồi',
    description: 'Tổng đài viên nắm bắt toàn bộ lịch sử tương tác 360 độ của khách hàng, giải quyết ticket đa kênh nhanh chóng và chính xác.',
    icon: 'service'
  },
  {
    role: 'Đội ngũ Tiếp thị (Marketing)',
    title: 'Tối ưu hóa chi phí ROI chiến dịch',
    description: 'Xây dựng hành trình khách hàng cá nhân hóa qua Email, SMS và mạng xã hội, tự động phân khúc tệp khách hàng tiềm năng cao.',
    icon: 'marketing'
  },
  {
    role: 'Thương mại & CNTT (Commerce & IT)',
    title: 'Hạ tầng mở rộng linh hoạt',
    description: 'Tích hợp mượt mà với các hệ thống ERP, kế toán và ứng dụng bên thứ ba qua hệ thống API bảo mật cấp doanh nghiệp.',
    icon: 'it'
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-gray-100">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="blue" size="md">
          CẨM NANG TOÀN DIỆN
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#032D60] tracking-tight leading-[1.2]">
          CRM là gì? (Customer Relationship Management)
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Quản trị quan hệ khách hàng (CRM) là giải pháp phần mềm toàn diện giúp doanh nghiệp xây dựng, nuôi dưỡng và thắt chặt mối quan hệ với khách hàng, tối ưu hóa năng suất và bứt phá doanh thu.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Dùng thử miễn phí 30 ngày
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/crm/pricing">
            Xem bảng giá
          </SfButton>
        </div>
      </div>
    </section>

    <!-- Definition & Why CRM Matters -->
    <section class="py-16 md:py-20 bg-white">
      <div class="sf-container">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 space-y-6">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#032D60] leading-tight">
              Tại sao hệ thống CRM là nền tảng sống còn của mọi doanh nghiệp hiện đại?
            </h2>
            <p class="text-gray-600 leading-relaxed">
              Trong thời đại số, dữ liệu khách hàng thường bị phân mảnh trên nhiều ứng dụng, bảng tính Excel và email cá nhân. CRM đóng vai trò là <strong>nguồn sự thật duy nhất (Single Source of Truth)</strong>, tập hợp tất cả thông tin, lịch sử mua hàng, phản hồi dịch vụ và cơ hội kinh doanh về một nơi.
            </p>
            <div class="space-y-4 pt-2">
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-[#EBF5FF] text-[#0176D3] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">1</span>
                <div>
                  <h4 class="font-bold text-[#032D60]">Góc nhìn khách hàng 360 độ</h4>
                  <p class="text-sm text-gray-600">Thấu hiểu từng nhu cầu và hành vi của khách hàng để phục vụ cá nhân hóa.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-[#EBF5FF] text-[#0176D3] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">2</span>
                <div>
                  <h4 class="font-bold text-[#032D60]">Tự động hóa với Trí tuệ Nhân tạo (AI)</h4>
                  <p class="text-sm text-gray-600">Cắt giảm các tác vụ thủ công lặp lại, giải phóng thời gian cho đội ngũ tập trung vào chốt đơn.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-[#EBF5FF] text-[#0176D3] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">3</span>
                <div>
                  <h4 class="font-bold text-[#032D60]">Bảo mật đám mây và mở rộng quy mô</h4>
                  <p class="text-sm text-gray-600">Truy cập dữ liệu từ bất cứ đâu trên thế giới với tiêu chuẩn bảo mật ngân hàng.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-[#F4F6F9] aspect-[4/3]">
              <img
                src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2026/04/3-up_Image2_CRM_16x9_1x.webp?w=800"
                alt="Giao diện CRM trực quan"
                class="w-full h-full object-cover"
                loading="lazy"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Department Benefits Grid -->
    <section id="benefits" class="py-16 md:py-24 sf-gradient-bg border-y border-gray-100">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <SfBadge variant="blue">LỢI ÍCH THEO PHÒNG BAN</SfBadge>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#032D60] tracking-tight">
            Cách CRM tạo nên đột phá cho từng mắt xích trong tổ chức của bạn
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(dept, dIdx) in departmentBenefits"
            :key="dIdx"
            class="bg-white p-8 rounded-3xl border border-gray-100 shadow-md space-y-4"
          >
            <div class="flex items-center justify-between">
              <SfBadge variant="navy" size="sm">{{ dept.role }}</SfBadge>
              <span class="text-xs font-bold text-[#04844B] bg-[#E6F4EA] px-2.5 py-1 rounded-md">{{ dept.title }}</span>
            </div>
            <h3 class="text-xl font-bold text-[#032D60]">
              Tối ưu hiệu suất làm việc
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              {{ dept.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Contact Blade -->
    <SfContactPillars />
  </div>
</template>
