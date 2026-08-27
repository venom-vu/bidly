<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Chiến lược CRM Toàn diện: Lấy Khách hàng làm Trọng tâm | Bidly',
  description: 'Khung chiến lược 4 trụ cột xây dựng văn hóa quản trị quan hệ khách hàng thành công: Con người, Quy trình, Dữ liệu và Công nghệ.'
})

const strategyPillars = [
  { title: 'Con Người & Văn Hóa (People)', desc: 'Xác lập tầm nhìn rõ ràng từ cấp lãnh đạo, đào tạo kỹ năng thực chiến và gắn chỉ số KPI cá nhân với sự hài lòng của khách hàng.' },
  { title: 'Quy Trình Chuẩn Hóa (Process)', desc: 'Tối ưu hóa hành trình khách hàng từ lúc tiếp cận ban đầu, nuôi dưỡng lead đến giai đoạn sau bán hàng (After-sales service).' },
  { title: 'Chất Lượng Dữ Liệu (Data Integrity)', desc: 'Duy trì cơ sở dữ liệu sạch, loại bỏ trùng lặp và biến dữ liệu thành tài sản có thể phân tích và dự báo chuẩn xác.' },
  { title: 'Công Nghệ & AI (Technology)', desc: 'Lựa chọn nền tảng CRM linh hoạt, có khả năng tích hợp mở và tích hợp sẵn trợ lý AI tự hành để nâng cao năng suất.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          CHIẾN LƯỢC CRM
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Khung Chiến Lược CRM Lấy Khách Hàng Làm Trọng Tâm
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Hướng dẫn phương pháp luận 4 trụ cột giúp doanh nghiệp chuyển đổi thành công từ mô hình bán hàng truyền thống sang mô hình lấy khách hàng làm trung tâm.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Nhận tài liệu chiến lược
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in strategyPillars"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              🎯
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
