<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Báo cáo & Phân tích Dữ liệu CRM Thời gian Thực (CRM Reporting) | Bidly',
  description: 'Trực quan hóa bức tranh kinh doanh toàn cảnh với Dashboard động: Đo lường KPI bán hàng, tỷ lệ chuyển đổi phễu, phân tích doanh thu và xuất báo cáo tự động.'
})

const reportFeatures = [
  { title: 'Dashboard Trực quan Đa chiều (Interactive Dashboards)', desc: 'Tùy biến bảng điều khiển với hơn 30+ loại biểu đồ: Phễu bán hàng, tăng trưởng doanh số, tỷ lệ thắng thầu và năng suất nhân viên.' },
  { title: 'Báo cáo Phân tích Phễu Chuyển đổi (Conversion Funnel)', desc: 'Chỉ ra chính xác các điểm nghẽn trong quy trình bán hàng nơi các cơ hội thường bị thất thoát để kịp thời điều chỉnh.' },
  { title: 'Dự Báo Doanh Thu Bằng Máy Học (AI Forecasting)', desc: 'AI tự động tính toán dự báo doanh thu quý tới dựa trên xác suất chuyển đổi thực tế của các hợp đồng đang đàm phán.' },
  { title: 'Tự Động Xuất & Gửi Báo Cáo Định Kỳ', desc: 'Lên lịch tự động gửi tóm tắt hiệu suất kinh doanh qua Email/PDF cho Ban giám đốc vào mỗi sáng thứ Hai.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          BÁO CÁO & PHÂN TÍCH
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Ra Quyết Định Kinh Doanh Chuẩn Xác Dựa Trên Dữ Liệu
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Biến các con số rời rạc thành những thông điệp kinh doanh giá trị với hệ thống báo cáo phân tích thời gian thực thông minh và trực quan.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Khám phá Dashboard mẫu
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in reportFeatures"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              📊
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
