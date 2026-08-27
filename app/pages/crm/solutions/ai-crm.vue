<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'AI CRM: Trí tuệ Nhân tạo Tự hành & Agentforce | Bidly',
  description: 'Khám phá thế hệ AI CRM tự hành: Tự động phân tích hồ sơ, tóm tắt cuộc gọi, chấm điểm cơ hội và đề xuất hành động tối ưu nhất (Next Best Action).'
})

const aiCapabilities = [
  { title: 'Tự động Chấm điểm Cơ hội (Predictive Lead Scoring)', desc: 'Thuật toán máy học phân tích lịch sử giao dịch để chỉ ra những khách hàng tiềm năng có xác suất chốt đơn cao nhất.' },
  { title: 'Trợ lý Soạn thảo & Tóm tắt Cuộc gọi Tự động', desc: 'AI tự động lắng nghe, tóm tắt nội dung cuộc họp và tạo danh sách việc cần làm (Action Items) chỉ trong 3 giây.' },
  { title: 'Đề xuất Hành động Tiếp theo Tốt nhất (Next Best Action)', desc: 'Hướng dẫn nhân viên kinh doanh các bước tiếp theo cần làm dựa trên dữ liệu thành công của hàng nghìn thương vụ trước đó.' },
  { title: 'Tương tác Ngôn ngữ Tự nhiên & Trợ lý Đàm thoại', desc: 'Tra cứu báo cáo doanh số, số liệu khách hàng bằng cách hỏi đáp trực tiếp bằng tiếng Việt tự nhiên.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          AGENTIC AI CRM
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Kỷ Nguyên CRM Tự Hành Cùng Trí Tuệ Nhân Tạo
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Giải phóng nhân sự khỏi các tác vụ thủ công và trang bị cho mọi nhân viên sức mạnh của một chuyên gia hàng đầu với AI tích hợp sẵn.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Trải nghiệm AI Agent miễn phí
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in aiCapabilities"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <span class="text-xs font-bold text-brand-text bg-brand-soft px-3 py-1 rounded-full">
              Agentforce AI
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
