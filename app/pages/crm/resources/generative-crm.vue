<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Generative CRM: Trí tuệ Nhân tạo Tạo sinh cho Bán hàng & Dịch vụ | Bidly',
  description: 'Ứng dụng mô hình ngôn ngữ lớn (LLM) và AI tạo sinh vào CRM: Tự động viết email bán hàng cá nhân hóa, tóm tắt hồ sơ và tạo nội dung phản hồi khách hàng thông minh.'
})

const genAiFeatures = [
  { title: 'Tự Động Soạn Thảo Email Bán Hàng Siêu Cá Nhân Hóa', desc: 'AI đọc lịch sử tương tác và tự động viết email chào hàng nhắm đúng nhu cầu và điểm đau của từng khách hàng.' },
  { title: 'Trợ Lý Tóm Tắt Lịch Sử Khách Hàng Trước Cuộc Họp', desc: 'Tổng hợp 100+ email và ghi chú trao đổi thành một bản tóm tắt 3 dòng ngắn gọn trước khi nhân viên bấm gọi.' },
  { title: 'Tự Động Sinh Nội Dung Phản Hồi Ticket CSKH', desc: 'Đề xuất câu trả lời chuẩn xác dựa trên kho tri thức nội bộ và hướng dẫn xử lý của công ty.' },
  { title: 'Tạo Báo Cáo & Thuyết Minh Bằng Ngôn Ngữ Tự Nhiên', desc: 'Biến bảng số liệu khô khan thành đoạn văn phân tích nhận định thị trường và xu hướng kinh doanh mạch lạc.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          GENERATIVE AI CRM
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Khai Phá Sức Mạnh Trí Tuệ Nhân Tạo Tạo Sinh Trong CRM
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Tăng tốc độ sáng tạo nội dung, cá nhân hóa từng điểm chạm khách hàng và nhân đôi năng suất đội ngũ cùng các mô hình AI tiên tiến.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Dùng thử Generative AI
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in genAiFeatures"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              ✨
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
