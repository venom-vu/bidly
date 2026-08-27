<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Tùy biến Quy trình CRM theo Đặc thù Doanh nghiệp (Custom CRM) | Bidly',
  description: 'Khả năng tùy chỉnh không giới hạn: Thêm trường dữ liệu tùy biến, thiết kế giao diện theo phòng ban và thiết lập quy tắc nghiệp vụ riêng biệt.'
})

const customFeatures = [
  { title: 'Tùy biến Trường Dữ liệu & Đối tượng (Custom Objects)', desc: 'Thêm mới các trường thông tin đặc thù theo ngành nghề mà không làm ảnh hưởng đến cấu trúc hệ thống.' },
  { title: 'Phân quyền Đa cấp độ & Bảo mật Theo Vai trò', desc: 'Kiểm soát chặt chẽ quyền xem, sửa, xóa dữ liệu theo từng chi nhánh, phòng ban và cấp bậc quản lý.' },
  { title: 'Quy tắc Kiểm tra & Cổng Quyết định (Hard Gates)', desc: 'Bắt buộc nhập lý do khi từ chối, yêu cầu phê duyệt lãnh đạo khi vượt hạn mức ngân sách.' },
  { title: 'Kiến trúc On-premise Single-tenant', desc: 'Linh hoạt triển khai trên hạ tầng máy chủ riêng của khách hàng hoặc môi trường đám mây theo yêu cầu.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          CUSTOM CRM TÙY BIẾN
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Hệ Thống CRM Thiết Kế May Đo Theo Quy Trình Doanh Nghiệp
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Không ép buộc doanh nghiệp phải thay đổi quy trình. Bidly CRM linh hoạt tùy biến sâu để ăn khớp hoàn hảo với văn hóa và phương thức vận hành của bạn.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Tư vấn giải pháp tùy biến
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in customFeatures"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              🛠️
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
