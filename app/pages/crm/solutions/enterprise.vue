<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Nền tảng CRM Doanh Nghiệp Lớn & Tập Đoàn (Enterprise CRM) | bidly',
  description: 'Hạ tầng Agentic CRM bảo mật cấp cao, khả năng mở rộng hàng triệu giao dịch, tích hợp MuleSoft và Data Cloud cho các tập đoàn đa quốc gia.'
})

const enterprisePillars = [
  {
    title: 'Hạ tầng Mở rộng Toàn cầu',
    description: 'Xử lý hàng triệu bản ghi và giao dịch mỗi ngày với độ trễ siêu thấp và cam kết thời gian hoạt động Uptime 99.99%.',
    stat: '99.99% Uptime'
  },
  {
    title: 'Bảo mật Cấp Ngân hàng',
    description: 'Tuân thủ các tiêu chuẩn bảo mật quốc tế khắt khe nhất: ISO 27001, SOC 2 Type II, GDPR và mã hóa TLS 1.3 đầu cuối.',
    stat: 'ISO 27001'
  },
  {
    title: 'Data Cloud & Agentic AI',
    description: 'Hợp nhất dữ liệu lớn từ kho dữ liệu (Data Lakehouse, Snowflake, BigQuery) để cung cấp ngữ cảnh thời gian thực cho các AI Agent.',
    stat: 'Real-time AI'
  },
  {
    title: 'Tùy biến Quy trình Phức tạp',
    description: 'Thiết kế luồng công việc đa tầng (Flow Automation), phân quyền dữ liệu phân cấp chi tiết theo từng chi nhánh và vùng lãnh thổ.',
    stat: 'Custom Flows'
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Enterprise -->
    <section class="py-16 md:py-24 bg-[#032D60] text-white border-b border-[#0B3F7E]">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="blue" size="md">
          ENTERPRISE CRM PLATFORM
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
          Nền tảng Quản trị Quan hệ Khách hàng Cấp Doanh nghiệp Số 1 Thế giới
        </h1>
        <p class="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Được tin cậy bởi các tập đoàn lớn nhất toàn cầu. Vận hành với sức mạnh của Agentforce AI, Data Cloud và khả năng tùy biến quy trình làm việc không giới hạn.
        </p>
        <div class="pt-2 flex flex-wrap justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Liên hệ Tư vấn Chuyên sâu
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/crm/pricing">
            Xem Kế hoạch Success Plans
          </SfButton>
        </div>
      </div>
    </section>

    <!-- Enterprise Pillars -->
    <section class="py-16 md:py-24 bg-white">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#032D60]">
            Sức mạnh hạ tầng cho các tổ chức quy mô lớn
          </h2>
          <p class="text-gray-600">
            Được xây dựng để đáp ứng những yêu cầu khắt khe nhất về an ninh mạng, hiệu năng và độ tin cậy.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(pillar, idx) in enterprisePillars"
            :key="idx"
            class="sf-card-hover p-8 rounded-3xl border border-gray-100 bg-[#F8FAFC] space-y-4"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-[#032D60]">{{ pillar.title }}</h3>
              <span class="text-xs font-bold text-[#0176D3] bg-[#EBF5FF] px-3 py-1 rounded-full">
                {{ pillar.stat }}
              </span>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed">
              {{ pillar.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Pillars -->
    <SfContactPillars />
  </div>
</template>
