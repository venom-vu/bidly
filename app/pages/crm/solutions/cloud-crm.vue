<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Cloud CRM: Nền tảng Điện toán Đám mây Tiên tiến | Bidly',
  description: 'Giải pháp CRM trên nền tảng đám mây: Triển khai nhanh, không tốn chi phí bảo trì phần cứng, cập nhật tính năng tự động và an toàn dữ liệu tuyệt đối.'
})

const cloudFeatures = [
  { title: 'Không Tốn Chi Phí Đầu Tư Hạ Tầng Ban Đầu', desc: 'Không cần mua máy chủ vật lý hay thiết lập phòng máy tốn kém. Hệ thống đám mây sẵn sàng hoạt động ngay sau khi đăng ký.' },
  { title: 'Tự Động Cập Nhật & Sao Lưu Dữ Liệu Hàng Ngày', desc: 'Luôn được sử dụng phiên bản mới nhất với các tính năng AI hiện đại mà không bị gián đoạn hoạt động.' },
  { title: 'Khả Năng Mở Rộng Linh Hoạt Theo Quy Mô', desc: 'Dễ dàng thêm người dùng, mở rộng dung lượng lưu trữ chỉ trong vài giây khi công ty phát triển thêm chi nhánh.' },
  { title: 'Cam Kết Uptime 99.99% & Phục Hồi Thảm Họa (DR)', desc: 'Hạ tầng đa vùng địa lý đảm bảo hệ thống luôn sẵn sàng 24/7/365 cho toàn bộ nhân sự trên toàn cầu.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          CLOUD CRM ĐIỆN TOÁN ĐÁM MÂY
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Nền Tảng CRM Đám Mây Hiện Đại, An Toàn & Linh Hoạt
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Tối ưu chi phí vận hành CNTT, nâng cao tính linh hoạt cho tổ chức và truy cập dữ liệu an toàn từ mọi trình duyệt và thiết bị.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Trải nghiệm Cloud CRM
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in cloudFeatures"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              ☁️
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
