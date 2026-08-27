<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Quản lý Dự án & Bàn giao Khách hàng (CRM Project Management) | Bidly',
  description: 'Chuyển tiếp mượt mà từ giai đoạn bán hàng sang triển khai thực tế: Quản lý công việc (Tasks), gói bàn giao S8, kiểm soát mốc thời gian và ngân sách dự án.'
})

const projectFeatures = [
  { title: 'Chuyển Tiếp Hợp Đồng Thành Dự Án Tự Động (S8 Handover)', desc: 'Ngay khi thắng thầu hoặc ký hợp đồng, toàn bộ thông tin yêu cầu và cam kết được đóng gói tự động chuyển giao cho đội ngũ triển khai.' },
  { title: 'Bảng Điều Khiển Tiến Độ Kanban & Gantt', desc: 'Phân chia các đầu việc cụ thể, gán người phụ trách, thiết lập ngày đến hạn và theo dõi tiến độ hoàn thành trực quan.' },
  { title: 'Kiểm Soát Ngân Sách & Chi Phí Thực Tế (Cost Control)', desc: 'So sánh chi phí dự toán ban đầu với chi phí thực tế phát sinh để ngăn chặn tình trạng vượt ngân sách dự án.' },
  { title: 'Lưu Trữ Biên Bản Nghiệm Thu & Hồ Sơ Dự Án', desc: 'Đính kèm tài liệu bàn giao, nhật ký công trình, chữ ký số và biên bản nghiệm thu trực tiếp trong từng gói công việc.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          QUẢN LÝ DỰ ÁN & BÀN GIAO
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Kết Nối Liền Mạch Từ Bán Hàng Đến Triển Khai Dự Án
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Đảm bảo mọi cam kết với khách hàng trong hợp đồng đều được thực hiện đúng tiến độ, chuẩn chất lượng và trong phạm vi ngân sách đề ra.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Dùng thử tính năng quản lý dự án
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in projectFeatures"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              📁
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
