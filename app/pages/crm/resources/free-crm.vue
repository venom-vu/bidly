<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Phần mềm CRM Miễn phí: Bắt đầu Nhanh & Đầy đủ Tính năng | Bidly',
  description: 'Trải nghiệm phần mềm CRM miễn phí không giới hạn thời gian cho các đội nhóm nhỏ: Quản lý danh bạ, giao dịch, lịch hẹn và gửi email chuyên nghiệp.'
})

const freeFeatures = [
  { title: 'Quản lý Liên hệ & Công ty Không giới hạn', desc: 'Lưu trữ thông tin chi tiết của hàng nghìn khách hàng, đối tác cùng toàn bộ lịch sử tương tác liên quan.' },
  { title: 'Bảng Theo Dõi Giao Dịch Dạng Kanban', desc: 'Trực quan hóa phễu bán hàng, kéo thả chuyển giai đoạn cơ hội dễ dàng và nhanh chóng.' },
  { title: 'Tích Hợp Gmail & Outlook Miễn Phí', desc: 'Đồng bộ hóa email gửi đi và nhận về trực tiếp vào hồ sơ khách hàng mà không cần nhập liệu thủ công.' },
  { title: 'Biểu Mẫu Thu Thập Khách Hàng Tiềm Năng (Web Forms)', desc: 'Tạo form nhúng lên website để tự động thu thập khách hàng quan tâm vào hệ thống CRM.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          CRM MIỄN PHÍ
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Phần Mềm CRM Miễn Phí Đầy Đủ Sức Mạnh Cho Doanh Nghiệp
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Bắt đầu chuyển đổi số quy trình bán hàng ngay hôm nay hoàn toàn miễn phí, không yêu cầu thẻ tín dụng và không ràng buộc thời hạn.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Đăng ký tài khoản miễn phí
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in freeFeatures"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              🎁
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
