<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Giải pháp CRM Tinh gọn cho Doanh nghiệp Khởi nghiệp (Startup CRM) | Bidly',
  description: 'Gói CRM tối ưu ngân sách cho các công ty Startup: Thiết lập trong 15 phút, tự động hóa phễu bán hàng và mở rộng quy mô linh hoạt.'
})

const startupBenefits = [
  { title: 'Triển khai siêu tốc trong 15 phút', desc: 'Không cần đội ngũ IT kỹ thuật. Mẫu quy trình chuẩn hóa giúp bạn bắt đầu nhập liệu và bán hàng ngay.' },
  { title: 'Tối ưu ngân sách ban đầu', desc: 'Chi phí linh hoạt theo tháng, không phụ phí ẩn, chỉ trả tiền cho các tính năng bạn thực sự cần.' },
  { title: 'Tích hợp sẵn AI Agent tự hành', desc: 'Tự động gửi email chăm sóc khách hàng và nhắc nhở lịch hẹn với nhà đầu tư và đối tác.' },
  { title: 'Sẵn sàng mở rộng khi tăng trưởng', desc: 'Dễ dàng nâng cấp lên các gói quy mô lớn hơn khi công ty phát triển mà không mất dữ liệu cũ.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          GIẢI PHÁP CHO STARTUP
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Phần Mềm CRM Tinh Gọn Giúp Startup Tăng Trưởng Đột Phá
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Tập trung vào khách hàng và bứt phá doanh số ngay từ ngày đầu tiên với bộ công cụ CRM thông minh, dễ dùng và tiết kiệm chi phí.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Dùng thử miễn phí 30 ngày
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/crm/pricing">
            Xem gói giá
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in startupBenefits"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-12 h-12 rounded-2xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-lg">
              0{{ idx + 1 }}
            </div>
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
