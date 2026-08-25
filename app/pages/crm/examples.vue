<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Câu chuyện Khách hàng Thành công & Ví dụ Điển hình | bidly CRM',
  description: 'Khám phá cách các thương hiệu Good360, Nexo, Precina, reMarkable và Zota bứt phá doanh số và tối ưu vận hành cùng hệ thống CRM.'
})

const caseStudies = [
  {
    company: 'Good360',
    industry: 'Tổ chức Phi lợi nhuận & Cứu trợ',
    headline: 'Tăng 45% năng suất vận hành và kết nối hàng triệu gói hàng cứu trợ',
    summary: 'Good360 sử dụng hệ thống CRM để quản lý mối quan hệ với hàng nghìn đối tác nhà tài trợ và cộng đồng tiếp nhận, tự động hóa quy trình phân phối hàng hóa cứu trợ kịp thời.',
    metrics: [
      { label: 'Năng suất vận hành', value: '+45%' },
      { label: 'Thời gian điều phối', value: '-60%' },
      { label: 'Tỷ lệ hài lòng đối tác', value: '98%' }
    ],
    quote: 'Nền tảng CRM đã trở thành cầu nối vững chắc giúp chúng tôi đưa hàng cứu trợ tới đúng nơi cần nhất trong thời gian ngắn kỷ lục.'
  },
  {
    company: 'Nexo',
    industry: 'Công nghệ Tài chính & Dịch vụ Số',
    headline: 'Cắt giảm 50% thời gian phản hồi với AI Agent tự động hóa 24/7',
    summary: 'Nhờ tích hợp Agentforce AI vào tổng đài hỗ trợ khách hàng, Nexo có thể tự động trả lời chính xác hơn 60% các câu hỏi thường gặp của khách hàng ngay lập tức.',
    metrics: [
      { label: 'Tốc độ phản hồi', value: 'Gấp 2 lần' },
      { label: 'Tự động hóa Ticket', value: '62%' },
      { label: 'Điểm CSAT', value: '4.9 / 5.0' }
    ],
    quote: 'Khách hàng của chúng tôi nhận được sự hỗ trợ chuẩn xác bất kể ngày đêm nhờ các AI Agent thông minh.'
  },
  {
    company: 'Precina',
    industry: 'Bất động sản & Xây dựng',
    headline: 'Bứt phá 32% tỷ lệ chốt đơn nhờ quản lý phễu bán hàng thông minh',
    summary: 'Đội ngũ hơn 200 chuyên viên môi giới của Precina theo dõi sát sao từng khách hàng tiềm năng, nhận thông báo nhắc nhở lịch hẹn và chấm điểm cơ hội tự động.',
    metrics: [
      { label: 'Tỷ lệ chốt hợp đồng', value: '+32%' },
      { label: 'Thất thoát Lead', value: '-80%' },
      { label: 'Chu kỳ bán hàng', value: 'Rút ngắn 18 ngày' }
    ],
    quote: 'Không còn tình trạng quên chăm sóc khách hàng. Mỗi chuyên viên môi giới đều làm việc như một chuyên gia hàng đầu.'
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Case Studies -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-gray-100">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="blue" size="md">
          CÂU CHUYỆN KHÁCH HÀNG
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#032D60] tracking-tight leading-[1.2]">
          Xem Cách Các Thương Hiệu Hàng Đầu Chuyển Đổi Doanh Nghiệp
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Khám phá những kết quả kinh doanh thực tế, chỉ số ROI đo lường được và bài học kinh nghiệm từ các doanh nghiệp đã ứng dụng giải pháp CRM của chúng tôi.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Bắt đầu câu chuyện thành công của bạn
          </SfButton>
        </div>
      </div>
    </section>

    <!-- Case Studies Detail -->
    <section class="py-16 md:py-24 bg-white">
      <div class="sf-container space-y-16">
        <div
          v-for="(study, sIdx) in caseStudies"
          :key="sIdx"
          class="sf-card-hover bg-[#F8FAFC] p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-8"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-6">
            <div>
              <div class="text-2xl font-black text-[#032D60] font-serif">{{ study.company }}</div>
              <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">{{ study.industry }}</div>
            </div>
            <SfBadge variant="green" size="md">CHỨNG THỰC THỰC TẾ</SfBadge>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl sm:text-3xl font-bold text-[#032D60] leading-snug">
              {{ study.headline }}
            </h2>
            <p class="text-base text-gray-600 leading-relaxed max-w-3xl">
              {{ study.summary }}
            </p>
          </div>

          <!-- Metrics Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div
              v-for="(metric, mIdx) in study.metrics"
              :key="mIdx"
              class="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs"
            >
              <div class="text-3xl font-extrabold text-[#0176D3]">{{ metric.value }}</div>
              <div class="text-xs font-semibold text-gray-500 mt-1 uppercase">{{ metric.label }}</div>
            </div>
          </div>

          <!-- Quote Block -->
          <div class="bg-[#EBF5FF] p-6 rounded-2xl border-l-4 border-[#0176D3] italic text-sm text-[#032D60] font-medium">
            "{{ study.quote }}"
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Contact Blade -->
    <SfContactPillars />
  </div>
</template>
