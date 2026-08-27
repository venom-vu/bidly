<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Thực tiễn Tốt nhất khi Ứng dụng CRM (Best Practices) | Bidly',
  description: 'Tổng hợp các bí quyết, nguyên tắc vàng và thực tiễn tốt nhất giúp doanh nghiệp tối ưu hóa hiệu quả khi triển khai và vận hành hệ thống CRM.'
})

const practices = [
  {
    number: '01',
    title: 'Xây dựng văn hóa nhập liệu kỷ luật ngay từ ngày đầu',
    desc: 'Chất lượng dữ liệu quyết định trực tiếp độ chính xác của dự báo doanh thu và sự thông minh của AI. Hãy đơn giản hóa biểu mẫu để nhân viên dễ dàng cập nhật dữ liệu hàng ngày.'
  },
  {
    number: '02',
    title: 'Thiết lập các cổng kiểm soát cứng (Hard Gates)',
    desc: 'Định nghĩa rõ điều kiện chuyển giai đoạn giữa các bước trong phễu bán hàng (từ tiếp cận, đánh giá cơ hội đến đàm phán hợp đồng) để tránh tình trạng đốt cháy giai đoạn.'
  },
  {
    number: '03',
    title: 'Tự động hóa các tác vụ lặp lại định kỳ',
    desc: 'Sử dụng Flow Automation để tự động giao việc cho nhân sự, gửi email xác nhận cho khách hàng và cảnh báo sớm các cơ hội có nguy cơ trễ hạn.'
  },
  {
    number: '04',
    title: 'Theo dõi chỉ số Adoption Rate (Mức độ tiếp nhận)',
    desc: 'Thường xuyên đo lường tần suất sử dụng của từng bộ phận, lắng nghe phản hồi của người dùng và liên tục tinh chỉnh giao diện cho phù hợp.'
  }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          CẨM NANG THỰC TIỄN
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Thực Tiễn Tốt Nhất Khi Vận Hành Hệ Thống CRM
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Những bài học kinh nghiệm và nguyên tắc vàng được đúc kết từ hàng nghìn dự án chuyển đổi số thành công giúp bạn khai thác tối đa giá trị của CRM.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Bắt đầu ứng dụng thực tế
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container max-w-4xl space-y-8">
        <div
          v-for="(item, idx) in practices"
          :key="idx"
          class="sf-card-hover bg-background p-8 rounded-3xl border border-border flex flex-col sm:flex-row gap-6 items-start"
        >
          <div class="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-xl font-black shrink-0 shadow-md">
            {{ item.number }}
          </div>
          <div class="space-y-2 flex-1">
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
