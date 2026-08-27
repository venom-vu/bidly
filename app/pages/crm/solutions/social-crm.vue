<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Social CRM & Quản lý Tương tác Đa kênh (Omnichannel CRM) | Bidly',
  description: 'Hợp nhất toàn bộ kênh tương tác Zalo OA, Facebook Messenger, Live Chat, Email và Tổng đài Hotline trên một màn hình quản trị duy nhất.'
})

const socialFeatures = [
  { title: 'Tích hợp Đa kênh Zalo, Facebook & Web Chat', desc: 'Nhận và phản hồi tin nhắn từ mọi nền tảng mạng xã hội ngay trên CRM mà không cần chuyển đổi ứng dụng.' },
  { title: 'Tự Động Tạo Lead Từ Tin Nhắn & Bình Luận', desc: 'Trích xuất tự động số điện thoại và nhu cầu khách hàng từ chat để tạo cơ hội bán hàng tức thì.' },
  { title: 'Chatbot AI & Phản Hồi Tự Động 24/7', desc: 'Giải đáp các câu hỏi thường gặp và tư vấn sơ bộ cho khách hàng kể cả ngoài giờ làm việc.' },
  { title: 'Đo Lường Hiệu Quả Từng Kênh Mạng Xã Hội', desc: 'Thống kê chính xác số lượng khách hàng tiềm năng và doanh thu đem lại từ từng chiến dịch quảng cáo mạng xã hội.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          SOCIAL & OMNICHANNEL CRM
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Hợp Nhất Mọi Kênh Tương Tác Mạng Xã Hội Vào Một Nơi
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Kết nối với khách hàng trên bất kỳ kênh nào họ ưa thích: Zalo, Facebook, Live Chat hay Email với trải nghiệm liền mạch và đồng nhất.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Dùng thử Omnichannel CRM
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in socialFeatures"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              💬
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
