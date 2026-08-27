<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Giải pháp CRM Bất động sản & Xây dựng | Bidly',
  description: 'Nền tảng CRM chuyên sâu cho ngành bất động sản, nhà thầu và xây dựng: Quản lý giỏ hàng, hồ sơ dự án, đấu thầu và chăm sóc nhà đầu tư.'
})

const industryFeatures = [
  { title: 'Quản lý Hồ sơ Đấu thầu & Dự án (Preconstruction)', desc: 'Theo dõi 9 giai đoạn S0–S8, chấm điểm Go/No-Go và lưu trữ toàn bộ bản vẽ, hồ sơ mời thầu.' },
  { title: 'Bản đồ Giỏ hàng & Mặt bằng Trực quan', desc: 'Cập nhật tình trạng đặt cọc, giữ chỗ và ký hợp đồng mua bán căn hộ, mặt bằng dự án theo thời gian thực.' },
  { title: 'Chăm sóc Khách hàng & Nhà đầu tư 360 độ', desc: 'Lưu trữ toàn bộ lịch sử tư vấn, tiến độ thanh toán và gửi thông báo nhắc hạn tự động qua SMS/Zalo/Email.' },
  { title: 'Báo cáo Doanh số & Tỷ lệ Hấp thụ Dự án', desc: 'Thống kê tức thì tiến độ bán hàng theo từng phân khu, đại lý phân phối và nhân viên môi giới.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          GIẢI PHÁP NGÀNH BẤT ĐỘNG SẢN & XÂY DỰNG
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Phần Mềm CRM Chuyên Sâu Cho Chủ Đầu Tư & Tổng Thầu
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Tối ưu hóa quy trình bán hàng bất động sản, quản lý hồ sơ thầu tiền dự án và nâng cao tỷ lệ hấp thụ dự án cùng nền tảng CRM thông minh.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Đăng ký tư vấn chuyên sâu
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in industryFeatures"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <span class="text-xs font-bold text-brand-text bg-brand-soft px-3 py-1 rounded-full">
              Chuyên ngành
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
