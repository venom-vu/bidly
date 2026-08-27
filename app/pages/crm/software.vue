<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Phần mềm CRM Thế hệ Mới: Hợp nhất Dữ liệu & AI Tự hành | Bidly',
  description: 'Khám phá phần mềm CRM thế hệ mới giúp hợp nhất toàn bộ thông tin khách hàng, tự động hóa quy trình bán hàng và bứt phá doanh thu cho doanh nghiệp.'
})

const softwareCapabilities = [
  {
    title: 'Quản lý Dữ liệu Khách hàng Tập trung (Customer 360)',
    description: 'Lưu trữ toàn bộ lịch sử giao dịch, ghi chú họp, email trao đổi và tài liệu liên quan tại một nơi duy nhất.',
    tag: 'Single Source of Truth'
  },
  {
    title: 'Tự động hóa Phễu Bán hàng Chuẩn hóa',
    description: 'Quy trình kiểm soát đa giai đoạn rõ ràng, giảm thiểu tối đa sai sót và rút ngắn 35% chu kỳ chốt hợp đồng.',
    tag: 'Pipeline Control'
  },
  {
    title: 'Trợ lý AI Tự hành (Agentforce)',
    description: 'Tự động trích xuất thông tin hồ sơ, chấm điểm cơ hội và soạn thảo đề xuất phản hồi khách hàng theo thời gian thực.',
    tag: 'Built-in AI'
  },
  {
    title: 'Bảo mật Cấp Doanh nghiệp & Điện toán Đám mây',
    description: 'Tuân thủ các tiêu chuẩn bảo mật khắt khe, mã hóa dữ liệu đầu cuối và hoạt động ổn định 99.99% Uptime.',
    tag: 'Enterprise Security'
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          PHẦN MỀM CRM TOÀN DIỆN
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Phần Mềm CRM Thế Hệ Mới Tích Hợp Sức Mạnh AI
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Xây dựng mối quan hệ khách hàng bền vững, thúc đẩy hiệu suất đội ngũ và mở rộng quy mô kinh doanh không giới hạn với nền tảng phần mềm CRM số 1.
        </p>
        <div class="pt-2 flex flex-wrap justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Dùng thử phần mềm miễn phí
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/crm/pricing">
            Xem bảng giá
          </SfButton>
        </div>
      </div>
    </section>

    <!-- Capabilities Grid -->
    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-foreground">
            Năng lực Cốt lõi của Phần mềm CRM Hiện đại
          </h2>
          <p class="text-muted-foreground">
            Mọi tính năng cần thiết để vận hành và chuyển đổi số quy trình kinh doanh của doanh nghiệp.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(cap, idx) in softwareCapabilities"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-4"
          >
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-brand-text bg-brand-soft px-3 py-1 rounded-full">
                {{ cap.tag }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-foreground">
              {{ cap.title }}
            </h3>
            <p class="text-sm text-muted-foreground leading-relaxed">
              {{ cap.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual Showcase Blade -->
    <section class="py-16 md:py-20 sf-gradient-bg border-y border-border">
      <div class="sf-container">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 space-y-6">
            <SfBadge variant="navy">TRỰC QUAN & DỄ DÙNG</SfBadge>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
              Giao diện trực quan, làm quen nhanh chóng trong vài phút
            </h2>
            <p class="text-muted-foreground leading-relaxed">
              Không cần thời gian đào tạo phức tạp. Giao diện người dùng được tối ưu hóa cho từng phòng ban: Bán hàng, Chăm sóc khách hàng và Quản lý cấp cao.
            </p>
            <div class="pt-2">
              <SfButton variant="primary" to="/crm/free-trial">
                Trải nghiệm giao diện ngay
              </SfButton>
            </div>
          </div>
          <div class="lg:col-span-6">
            <div class="rounded-3xl overflow-hidden shadow-2xl border border-border bg-card aspect-[4/3]">
              <img
                src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2026/04/3-up_Image2_CRM_16x9_1x.webp?w=800"
                alt="Giao diện phần mềm CRM"
                class="w-full h-full object-cover"
                loading="lazy"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Contact Blade -->
    <SfContactPillars />
  </div>
</template>
