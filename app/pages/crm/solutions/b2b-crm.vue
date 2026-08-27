<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Giải pháp CRM Doanh Nghiệp B2B (B2B CRM Software) | Bidly',
  description: 'Quản lý các tài khoản chiến lược (Key Accounts), đàm phán hợp đồng giá trị cao và tối ưu chu kỳ bán hàng B2B phức tạp cùng Bidly CRM.'
})

const b2bFeatures = [
  { title: 'Quản lý Tài khoản Trọng yếu (Account-Based Marketing)', desc: 'Tập hợp tất cả người liên hệ, người có quyền quyết định và các bên liên quan (Decision Makers & Influencers) của từng doanh nghiệp.' },
  { title: 'Kiểm soát Hợp đồng & Chu kỳ Bán hàng Dài hạn', desc: 'Theo dõi từng mốc tiến độ chào giá, chỉnh sửa điều khoản pháp lý và phê duyệt giá thầu nhiều cấp độ.' },
  { title: 'Dự báo Doanh thu B2B Đa kịch bản', desc: 'Dự báo dòng tiền chính xác theo từng giai đoạn xác suất thành công của các hợp đồng lớn.' },
  { title: 'Tích hợp ERP & Kế toán Doanh nghiệp', desc: 'Đồng bộ hóa tức thì đơn đặt hàng, công nợ và hóa đơn thanh toán với hệ thống quản trị nội bộ.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          GIẢI PHÁP BÁN HÀNG B2B
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Nâng Tầm Quản Trị Bán Hàng & Quan Hệ Doanh Nghiệp B2B
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Tối ưu hóa các thương vụ giá trị cao, tăng cường cộng tác nội bộ và quản trị toàn diện các tài khoản khách hàng doanh nghiệp chiến lược.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Dùng thử B2B CRM 30 ngày
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in b2bFeatures"
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
