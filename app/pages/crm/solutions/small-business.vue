<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Giải pháp CRM cho Doanh Nghiệp Vừa & Nhỏ (SMB) & Startup | bidly',
  description: 'Khám phá Starter Suite: bộ công cụ CRM all-in-one cho doanh nghiệp nhỏ. Tích hợp Bán hàng, CSKH, Marketing và AI chỉ từ 25 USD/tháng.'
})

const smbFeatures = [
  {
    title: 'Thiết lập trong 15 phút',
    description: 'Không cần đội ngũ IT kỹ thuật hay chuyên gia tư vấn. Hệ thống hướng dẫn thông minh từng bước giúp bạn bắt đầu ngay trong ngày.',
    icon: 'lightning'
  },
  {
    title: 'Hợp nhất 3 trong 1',
    description: 'Quản lý Lead bán hàng, gửi Email Marketing tự động và xử lý Ticket chăm sóc khách hàng trên cùng một ứng dụng duy nhất.',
    icon: 'all-in-one'
  },
  {
    title: 'Trợ lý AI tự động hóa',
    description: 'Tự động tóm tắt cuộc gọi, soạn thảo email phản hồi và nhắc nhở lịch hẹn với khách hàng tiềm năng.',
    icon: 'ai'
  },
  {
    title: 'Chi phí tối ưu linh hoạt',
    description: 'Chỉ từ 25 USD / người dùng / tháng. Không phát sinh chi phí ẩn, dễ dàng nâng cấp khi quy mô công ty mở rộng.',
    icon: 'price'
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Hero SMB -->
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-gray-100">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="blue" size="md">
          GIẢI PHÁP CHO SMB & STARTUP
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#032D60] tracking-tight leading-[1.2]">
          Phần mềm CRM Tinh gọn, Dễ dùng và Đầy đủ Sức mạnh cho <span class="text-[#0176D3]">Doanh nghiệp Nhỏ</span>
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Tạm biệt những bảng tính Excel rời rạc. Tăng tốc kinh doanh, quản lý thông tin khách hàng tập trung và tạo dựng lòng tin bền vững với gói giải pháp Starter Suite.
        </p>
        <div class="pt-2 flex flex-wrap justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Dùng thử Starter Suite 30 ngày
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/crm/pricing">
            Xem bảng giá chi tiết
          </SfButton>
        </div>
      </div>
    </section>

    <!-- SMB Value Props Grid -->
    <section class="py-16 md:py-20 bg-white">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#032D60]">
            Tại sao hàng nghìn doanh nghiệp nhỏ chọn chúng tôi?
          </h2>
          <p class="text-gray-600">
            Được thiết kế riêng để tối giản quy trình vận hành nhưng vẫn mang lại hiệu quả kinh doanh tối đa.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(feat, idx) in smbFeatures"
            :key="idx"
            class="sf-card-hover bg-[#F4F6F9] p-8 rounded-3xl border border-gray-100 space-y-4"
          >
            <div class="w-12 h-12 rounded-2xl bg-white text-[#0176D3] flex items-center justify-center font-bold text-lg shadow-sm">
              0{{ idx + 1 }}
            </div>
            <h3 class="text-xl font-bold text-[#032D60]">
              {{ feat.title }}
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              {{ feat.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Z-Pattern Feature Detail -->
    <section class="py-16 md:py-20 sf-gradient-bg border-y border-gray-100">
      <div class="sf-container">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 space-y-6">
            <SfBadge variant="navy">TRẢI NGHIỆM TRỰC QUAN</SfBadge>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#032D60] leading-tight">
              Quản lý toàn bộ cơ hội bán hàng trên một màn hình Kanban sinh động
            </h2>
            <p class="text-gray-600 leading-relaxed">
              Kéo thả các giao dịch qua từng giai đoạn phễu bán hàng (Từ tiếp cận, báo giá đến chốt hợp đồng). Nhân viên kinh doanh không còn bỏ lỡ bất kỳ khách hàng tiềm năng nào.
            </p>
            <div class="pt-2">
              <SfButton variant="primary" to="/crm/free-trial">
                Bắt đầu trải nghiệm ngay
              </SfButton>
            </div>
          </div>
          <div class="lg:col-span-6">
            <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white aspect-[4/3]">
              <img
                src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2026/03/smb-resource-starter-4.jpg?w=800"
                alt="Bảng điều khiển Starter Suite"
                class="w-full h-full object-cover"
                loading="lazy"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Pillars -->
    <SfContactPillars />
  </div>
</template>
