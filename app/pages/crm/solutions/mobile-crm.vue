<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Mobile CRM: Ứng dụng Quản lý Bán hàng trên Thiết bị Di động | Bidly',
  description: 'Quản lý khách hàng, tra cứu hồ sơ thầu và cập nhật cơ hội bán hàng mọi lúc mọi nơi trên ứng dụng di động iOS và Android mượt mà.'
})

const mobileFeatures = [
  { title: 'Truy cập Dữ liệu Offline & Đồng bộ Tức thì', desc: 'Nhập thông tin ghi chú cuộc họp ngay cả khi mất sóng, hệ thống tự động đồng bộ khi có kết nối trở lại.' },
  { title: 'Định vị GPS & Check-in Khách hàng', desc: 'Chuyên viên thị trường dễ dàng check-in tại địa điểm gặp khách hàng và ghi nhận biên bản làm việc ngay trên điện thoại.' },
  { title: 'Quét Danh thiếp Tự động bằng AI (OCR)', desc: 'Chụp ảnh danh thiếp để tự động trích xuất họ tên, số điện thoại, công ty vào hệ thống chỉ trong 2 giây.' },
  { title: 'Thông báo Đẩy Theo Thời Gian Thực (Push Notifications)', desc: 'Nhận thông báo tức thì khi có lead mới được phân bổ hoặc khi khách hàng mở email báo giá.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          MOBILE CRM DI ĐỘNG
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Bán Hàng & Quản Trị Linh Hoạt Mọi Lúc Mọi Nơi
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Trang bị cho đội ngũ kinh doanh ngoài thị trường sức mạnh toàn diện của hệ thống CRM trong lòng bàn tay trên cả hai nền tảng iOS & Android.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Dùng thử ứng dụng di động
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in mobileFeatures"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              📱
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
