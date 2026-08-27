<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: '10 Lợi ích Vượt trội của Hệ thống CRM Doanh Nghiệp | Bidly',
  description: 'Khám phá 10 lợi ích cốt lõi của CRM: Tăng năng suất bán hàng, nâng cao độ hài lòng CSAT, giảm thất thoát khách hàng và ra quyết định dựa trên dữ liệu.'
})

const benefits = [
  { title: 'Tăng 32% tỷ lệ chốt đơn', desc: 'Đội ngũ bán hàng quản lý phễu khách hàng tiềm năng sát sao, không bỏ sót cơ hội nào.' },
  { title: 'Cắt giảm 50% thời gian xử lý', desc: 'Tự động hóa các tác vụ soạn thảo, nhập liệu và phân bổ công việc hàng ngày.' },
  { title: 'Nâng cao chỉ số hài lòng CSAT', desc: 'Nắm bắt lịch sử tương tác 360 độ giúp giải quyết vấn đề của khách hàng nhanh chóng.' },
  { title: 'Dự báo doanh thu chính xác', desc: 'Báo cáo thống kê đa chiều theo thời gian thực giúp ban lãnh đạo ra quyết định chuẩn xác.' },
  { title: 'Hợp nhất dữ liệu đa phòng ban', desc: 'Phá vỡ các silo dữ liệu rời rạc giữa Sales, Marketing, CSKH và Kế toán.' },
  { title: 'Bảo mật dữ liệu tuyệt đối', desc: 'Phân quyền truy cập chi tiết theo vai trò, mã hóa dữ liệu theo tiêu chuẩn quốc tế.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          GIÁ TRỊ KINH DOANH
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Lợi Ích Vượt Trội Của Hệ Thống CRM Đối Với Doanh Nghiệp
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Khám phá cách CRM chuyển hóa cách thức vận hành, tối ưu hóa chi phí và tạo ra bước nhảy vọt về doanh thu cho tổ chức của bạn.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Nhận tư vấn giải pháp
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(item, idx) in benefits"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              ✓
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
