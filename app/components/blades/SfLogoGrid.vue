<script setup lang="ts">
import { crmBladesData } from "~/data/crm-blades";

const marketEvidence = crmBladesData.customerLogos;
</script>

<template>
  <section class="py-16 md:py-24 bg-secondary/50 border-y border-border">
    <div class="sf-container text-center space-y-10 md:space-y-12">
      <!-- Section Top Headline -->
      <div class="max-w-3xl mx-auto space-y-3">
        <div class="text-xs font-bold uppercase tracking-wider text-brand-text">
          BỐI CẢNH THỊ TRƯỜNG &amp; CĂN CỨ NGÀNH
        </div>
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
        >
          {{ marketEvidence.heading }}
        </h2>
        <p class="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Thống kê ngành: lý do tổng thầu cần chuyển đổi từ phân mảnh sang Preconstruction CRM chuẩn mực.
        </p>
      </div>

      <!-- Market Stats Grid (4 Cards) -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch"
      >
        <!-- Stat 1 -->
        <div
          class="bg-card p-6 sm:p-7 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between text-left space-y-4 border border-border/70 hover:border-primary/40"
        >
          <div
            class="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight tabular"
          >
            +10,28%
          </div>
          <div>
            <div class="text-sm sm:text-[15px] font-bold text-foreground">
              Tăng trưởng xây dựng Q2/2026
            </div>
            <div
              class="text-xs sm:text-[13px] text-muted-foreground mt-1.5 leading-relaxed font-normal"
            >
              Duy trì đà mở rộng theo Tổng cục Thống kê (năm 2024 tăng 7,87%).
            </div>
          </div>
        </div>

        <!-- Stat 2 -->
        <div
          class="bg-card p-6 sm:p-7 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between text-left space-y-4 border border-border/70 hover:border-primary/40"
        >
          <div
            class="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight tabular"
          >
            34,65 tỷ $
          </div>
          <div>
            <div class="text-sm sm:text-[15px] font-bold text-foreground">
              Tổng FDI đăng ký 6T/2026
            </div>
            <div
              class="text-xs sm:text-[13px] text-muted-foreground mt-1.5 leading-relaxed font-normal"
            >
              Tăng 61% YoY; khối chế biến chế tạo chiếm 56,5% vốn mới.
            </div>
          </div>
        </div>

        <!-- Stat 3 -->
        <div
          class="bg-card p-6 sm:p-7 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between text-left space-y-4 border border-border/70 hover:border-destructive/40"
        >
          <div
            class="text-3xl sm:text-4xl font-extrabold text-destructive tracking-tight tabular"
          >
            44,7%
          </div>
          <div>
            <div class="text-sm sm:text-[15px] font-bold text-foreground">
              DN xây dựng thiếu hợp đồng mới
            </div>
            <div
              class="text-xs sm:text-[13px] text-muted-foreground mt-1.5 leading-relaxed font-normal"
            >
              Khảo sát ngành; 11,6% doanh nghiệp lỡ thông tin mời thầu.
            </div>
          </div>
        </div>

        <!-- Stat 4 -->
        <div
          class="bg-card p-6 sm:p-7 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between text-left space-y-4 border border-border/70 hover:border-primary/40"
        >
          <div
            class="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight tabular"
          >
            2,6 / 5
          </div>
          <div>
            <div class="text-sm sm:text-[15px] font-bold text-foreground">
              Mức sẵn sàng số hóa hiện tại
            </div>
            <div
              class="text-xs sm:text-[13px] text-muted-foreground mt-1.5 leading-relaxed font-normal"
            >
              Quy trình theo đuổi thầu còn rời rạc trên Zalo, email và Excel.
            </div>
          </div>
        </div>
      </div>

      <!-- Action Button below grid -->
      <div class="pt-2">
        <NuxtLink
          :to="marketEvidence.cta.url"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-extrabold text-sm sm:text-base rounded-xl hover:bg-primary-hover transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
        >
          {{ marketEvidence.cta.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
