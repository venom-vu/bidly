<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Tự động hóa Quy trình Bán hàng & Chăm sóc Khách hàng (CRM Automation) | Bidly',
  description: 'Thiết kế luồng tự động hóa quy trình kinh doanh không cần viết mã (No-code Flow Builder): Giao việc, gửi email, cảnh báo và cập nhật dữ liệu tức thì.'
})

const autoFeatures = [
  { title: 'Trình Tạo Luồng Không Cần Code (Flow Builder)', desc: 'Kéo thả các khối điều kiện, kích hoạt và hành động trực quan để tạo các quy trình phê duyệt đa tầng.' },
  { title: 'Tự Động Phân Bổ Lead & Cơ Hội', desc: 'Định tuyến khách hàng tiềm năng đến đúng chuyên viên phụ trách dựa trên vùng địa lý, ngành nghề hoặc quy mô giao dịch.' },
  { title: 'Cảnh Báo & Nhắc Hạn Tự Động', desc: 'Gửi thông báo nhắc nhở qua Telegram, Email, Zalo khi có giao dịch bị chậm trễ hoặc sắp đến hạn ký hợp đồng.' },
  { title: 'Tự Động Tạo Hợp Đồng & Báo Giá (CPQ)', desc: 'Trích xuất dữ liệu giá sản phẩm và tự động tạo file PDF báo giá chuyên nghiệp chỉ với một cú nhấp chuột.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          TỰ ĐỘNG HÓA DOANH NGHIỆP
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Tự Động Hóa Mọi Quy Trình Bán Hàng & Chăm Sóc Khách Hàng
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Loại bỏ 100% các sai sót thủ công, tăng tốc độ xử lý nghiệp vụ và giúp đội ngũ tập trung vào việc tạo ra doanh thu thực tế.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Thử nghiệm Flow Builder
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in autoFeatures"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              ⚡
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
