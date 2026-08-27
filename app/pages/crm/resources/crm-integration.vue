<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'

useSeoMeta({
  title: 'Tích hợp Hệ thống CRM với ERP, Email & MuleSoft (CRM Integration) | Bidly',
  description: 'Kết nối mượt mà dữ liệu giữa CRM và các phần mềm ERP, Kế toán, Tổng đài VoIP, Zalo OA và Email qua hệ thống RESTful API chuẩn quốc tế.'
})

const integrationItems = [
  { title: 'Tích Hợp Hệ Thống ERP & Kế Toán', desc: 'Đồng bộ hóa tức thì đơn hàng, hợp đồng, tình trạng xuất hóa đơn và công nợ với SAP, Oracle, MISA và FAST.' },
  { title: 'Tích Hợp Tổng Đài Ảo VoIP & SMS Brandname', desc: 'Tự động hiển thị thông tin khách hàng (Pop-up Call) khi có cuộc gọi đến và ghi âm cuộc gọi trực tiếp vào CRM.' },
  { title: 'Hệ Thống RESTful API & Webhooks Mở Rộng', desc: 'Dễ dàng kết nối với các ứng dụng nội bộ riêng của doanh nghiệp với tài liệu API chi tiết chuẩn OpenAPI.' },
  { title: 'MuleSoft & Kết Nối Đám Mây Doanh Nghiệp', desc: 'Xử lý luồng dữ liệu lớn thời gian thực, đảm bảo tính toàn vẹn và độ trễ thấp giữa các hệ thống đa đám mây.' }
]
</script>

<template>
  <div class="space-y-0">
    <section class="py-16 md:py-24 sf-gradient-bg border-b border-border">
      <div class="sf-container text-center max-w-4xl space-y-6">
        <SfBadge variant="green" size="md">
          TÍCH HỢP HỆ THỐNG
        </SfBadge>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2]">
          Kết Nối Không Giới Hạn Mọi Ứng Dụng Doanh Nghiệp
        </h1>
        <p class="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Hợp nhất dữ liệu phân mảnh và tạo ra dòng chảy thông tin liền mạch giữa CRM, ERP, Tổng đài và các ứng dụng bên thứ ba.
        </p>
        <div class="pt-2 flex justify-center gap-4">
          <SfButton variant="primary" size="lg" to="/crm/free-trial">
            Khám phá tài liệu API
          </SfButton>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-card">
      <div class="sf-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(item, idx) in integrationItems"
            :key="idx"
            class="sf-card-hover bg-background p-8 rounded-3xl border border-border space-y-3"
          >
            <div class="w-10 h-10 rounded-xl bg-brand-soft text-brand-text flex items-center justify-center font-bold text-sm">
              🔗
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
