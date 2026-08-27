<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Cơ sở Dữ liệu CRM: Kiến trúc Lưu trữ & Quản trị Dữ liệu Lớn | Bidly',
  description: 'Khám phá hạ tầng cơ sở dữ liệu quan hệ PostgreSQL 18, kiến trúc lưu trữ dữ liệu an toàn, xử lý truy vấn tốc độ cao và bảo mật cấp doanh nghiệp.'
})

const dbFeatures = [
  { title: 'Kiến Trúc Dữ Liệu PostgreSQL 18', desc: 'Hiệu năng xử lý truy vấn vượt trội, hỗ trợ hàng triệu bản ghi khách hàng và giao dịch phức tạp mà không bị trễ.' },
  { title: 'Ngăn Chặn Trùng Lặp & Làm Sạch Tự Động (Deduplication)', desc: 'Thuật toán đối soát thông minh tự động phát hiện số điện thoại, email trùng lặp và gộp bản ghi an toàn.' },
  { title: 'Audit Trail & Nhật Ký Thay Đổi Bất Biến (Immutable)', desc: 'Ghi lại chính xác ai đã xem, sửa, chuyển giai đoạn cơ hội vào thời gian nào để phục vụ công tác thanh tra dữ liệu.' },
  { title: 'Kiểm Soát Tranh Chấp Dữ Liệu (Optimistic Concurrency)', desc: 'Khóa phiên bản versioning ngăn chặn việc hai nhân viên cùng chỉnh sửa và vô tình ghi đè dữ liệu của nhau.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          CƠ SỞ DỮ LIỆU CRM
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Nền Tảng Quản Trị Dữ Liệu Khách Hàng Tập Trung & Bất Biến
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Đảm bảo tính toàn vẹn, bảo mật cao nhất và tốc độ truy vấn tức thì cho toàn bộ cơ sở dữ liệu khách hàng của doanh nghiệp.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Dùng thử hệ thống dữ liệu
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in dbFeatures"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              🗄️
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
