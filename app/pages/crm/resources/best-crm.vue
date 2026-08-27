<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Top Phần mềm CRM Tốt nhất Châu Á & Tiêu chí Lựa chọn | Bidly',
  description: 'Hướng dẫn đánh giá và so sánh các phần mềm CRM hàng đầu thị trường. 6 tiêu chí cốt lõi giúp doanh nghiệp chọn được giải pháp CRM phù hợp nhất.'
})

const criteriaList = [
  { title: 'Khả năng Tùy biến & Kiểm soát Quy trình (Customization)', desc: 'Hệ thống phải cho phép tùy biến sâu các giai đoạn, điều kiện kiểm soát cứng (Hard Gates) để phù hợp văn hóa doanh nghiệp.' },
  { title: 'Sức mạnh của Trí tuệ Nhân tạo (Agentic AI)', desc: 'AI không chỉ là tính năng viết văn bản đơn thuần mà phải có khả năng tự động phân tích hồ sơ, dự báo và đề xuất hành động thực tế.' },
  { title: 'Hệ sinh thái Tích hợp & Mở rộng (Integrations)', desc: 'Khả năng kết nối mượt mà với Zalo, ERP, tổng đài và các ứng dụng kế toán hiện có qua API mở.' },
  { title: 'Bảo mật Cấp Doanh nghiệp & Kiến trúc Triển khai', desc: 'Linh hoạt lựa chọn triển khai Cloud hoặc On-premise Single-tenant với tiêu chuẩn an ninh thông tin ISO 27001.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          ĐÁNH GIÁ & SO SÁNH
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Tiêu Chí Lựa Chọn Phần Mềm CRM Tốt Nhất Cho Doanh Nghiệp
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Khám phá những tiêu chuẩn hàng đầu mà các tập đoàn và doanh nghiệp thành công sử dụng để lựa chọn nền tảng CRM chiến lược.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Trải nghiệm Bidly CRM
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in criteriaList"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <span class="text-xs font-bold text-brand-text bg-brand-soft px-3 py-1 rounded-full">
              Tiêu chí #0{{ idx + 1 }}
            </span>
            <h2 class="text-xl font-bold text-foreground">
              {{ item.title }}
            </h2>
            <p class="text-sm text-muted-foreground leading-relaxed">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <SfContactPillars />
  </div>
</template>
