<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Đào tạo & Chứng chỉ Quản trị viên CRM (CRM Certification) | Bidly',
  description: 'Nâng cao trình độ và nhận chứng chỉ chuyên gia quản trị hệ thống CRM: Lộ trình học tương tác, bài thi đánh giá năng lực và cơ hội nghề nghiệp rộng mở.'
})

const certPrograms = [
  { title: 'Chứng Chỉ Quản Trị Viên CRM (Certified Administrator)', desc: 'Nắm vững kỹ năng thiết lập người dùng, phân quyền bảo mật, tạo trường dữ liệu tùy biến và xây dựng báo cáo chuyên sâu.' },
  { title: 'Chứng Chỉ Chuyên Gia Quy Trình (Process Automation Specialist)', desc: 'Làm chủ công cụ Flow Builder, thiết kế các luồng tự động hóa phê duyệt đa tầng và tích hợp hệ thống bên ngoài.' },
  { title: 'Chứng Chỉ Chuyên Viên Bán Hàng & Tiền Dự Án (Sales Consultant)', desc: 'Thành thạo kỹ năng quản trị phễu S0–S8, chấm điểm cơ hội Go/No-Go và quản lý hồ sơ đấu thầu.' },
  { title: 'Lộ Trình Tự Học Tương Tác Qua Video & Bài Tập Mẫu', desc: 'Học tập linh hoạt theo tốc độ riêng với hệ thống bài tập thực hành sát thực tế và thi thử có đáp án giải thích chi tiết.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          ĐÀO TẠO & CHỨNG CHỈ
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Nâng Cao Kỹ Năng & Nhận Chứng Chỉ Chuyên Gia CRM
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Trở thành chuyên gia được săn đón trong lĩnh vực quản trị quan hệ khách hàng với các khóa đào tạo và chứng chỉ nghề nghiệp chuẩn quốc tế.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Bắt đầu lộ trình học tập
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in certPrograms"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              🎓
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
