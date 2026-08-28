<script setup lang="ts">
import { crmBladesData } from "~/data/crm-blades";

const marketEvidence = crmBladesData.customerLogos;
</script>

<template>
  <!--
    Salesforce Stats / Logo Grid Blade — theme_variant: "light" (pure white)
    4-column stat cards, shadow-only cards, centered heading
  -->
  <section class="py-16 md:py-24 bg-white sf-section-border">
    <div class="sf-container text-center space-y-12 md:space-y-16">
      <!-- Section Heading -->
      <div class="max-w-3xl mx-auto space-y-3">
        <h2
          class="text-2xl sm:text-3xl md:text-[2.25rem] font-extrabold text-foreground tracking-tight leading-tight"
        >
          {{ marketEvidence.heading }}
        </h2>
        <p
          class="text-sm sm:text-base max-w-2xl mx-auto"
          style="color: #54698d"
        >
          Dữ liệu thống kê: lý do nhà thầu công nghiệp cần chuyển đổi từ vận
          hành phân mảnh sang Preconstruction CRM chuẩn mực.
        </p>
      </div>

      <!-- 4 Stat Cards — Salesforce large-number stat cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch"
      >
        <!-- Stat 1 -->
        <div
          class="sf-stat-card group bg-white p-6 sm:p-7 rounded-xl flex flex-col justify-between text-left space-y-4 cursor-default transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="text-3xl sm:text-4xl font-extrabold tracking-tight tabular"
            style="color: #0176d3"
          >
            +10,28%
          </div>
          <div>
            <div
              class="text-sm sm:text-[15px] font-bold tracking-tight group-hover:text-primary transition-colors"
              style="color: #181818"
            >
              Tăng trưởng xây dựng Q2/2026
            </div>
            <div
              class="text-xs sm:text-[13px] mt-1.5 leading-relaxed"
              style="color: #54698d"
            >
              Duy trì đà mở rộng theo Tổng cục Thống kê (năm 2024 tăng 7,87%).
            </div>
          </div>
        </div>

        <!-- Stat 2 -->
        <div
          class="sf-stat-card group bg-white p-6 sm:p-7 rounded-xl flex flex-col justify-between text-left space-y-4 cursor-default transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="text-3xl sm:text-4xl font-extrabold tracking-tight tabular"
            style="color: #0176d3"
          >
            34,65 tỷ $
          </div>
          <div>
            <div
              class="text-sm sm:text-[15px] font-bold tracking-tight group-hover:text-primary transition-colors"
              style="color: #181818"
            >
              Tổng FDI đăng ký 6T/2026
            </div>
            <div
              class="text-xs sm:text-[13px] mt-1.5 leading-relaxed"
              style="color: #54698d"
            >
              Tăng 61% YoY; khối chế biến chế tạo chiếm 56,5% vốn mới.
            </div>
          </div>
        </div>

        <!-- Stat 3 -->
        <div
          class="sf-stat-card group bg-white p-6 sm:p-7 rounded-xl flex flex-col justify-between text-left space-y-4 cursor-default transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="text-3xl sm:text-4xl font-extrabold tracking-tight tabular"
            style="color: #ea001e"
          >
            44,7%
          </div>
          <div>
            <div
              class="text-sm sm:text-[15px] font-bold tracking-tight"
              style="color: #181818"
            >
              DN xây dựng thiếu hợp đồng mới
            </div>
            <div
              class="text-xs sm:text-[13px] mt-1.5 leading-relaxed"
              style="color: #54698d"
            >
              Khảo sát ngành; 11,6% doanh nghiệp lỡ thông tin mời thầu.
            </div>
          </div>
        </div>

        <!-- Stat 4 -->
        <div
          class="sf-stat-card group bg-white p-6 sm:p-7 rounded-xl flex flex-col justify-between text-left space-y-4 cursor-default transition-all duration-300 hover:-translate-y-1"
        >
          <div
            class="text-3xl sm:text-4xl font-extrabold tracking-tight tabular"
            style="color: #0176d3"
          >
            2,6 / 5
          </div>
          <div>
            <div
              class="text-sm sm:text-[15px] font-bold tracking-tight group-hover:text-primary transition-colors"
              style="color: #181818"
            >
              Mức sẵn sàng số hóa hiện tại
            </div>
            <div
              class="text-xs sm:text-[13px] mt-1.5 leading-relaxed"
              style="color: #54698d"
            >
              Quy trình theo đuổi thầu còn rời rạc trên Zalo, email và Excel.
            </div>
          </div>
        </div>
      </div>

      <!-- Action CTA -->
      <div class="pt-2">
        <NuxtLink
          :to="marketEvidence.cta.url"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-extrabold text-sm sm:text-base rounded-[4px] hover:bg-primary-hover transition-all active:scale-[0.98] cursor-pointer"
          style="box-shadow: 0 2px 8px rgba(1, 118, 211, 0.25)"
        >
          {{ marketEvidence.cta.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sf-stat-card {
  box-shadow: 0 2px 8px rgba(3, 45, 96, 0.06), 0 4px 20px rgba(3, 45, 96, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  will-change: transform, box-shadow;
}

.sf-stat-card:hover {
  box-shadow: 0 8px 28px rgba(3, 45, 96, 0.12), 0 16px 40px rgba(3, 45, 96, 0.07);
  border-color: rgba(1, 118, 211, 0.18);
}
</style>
