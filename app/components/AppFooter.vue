<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-brand-panel text-brand-panel-foreground pt-16 pb-12 border-t border-brand-panel-border">
    <div class="sf-container space-y-12">
      <!-- Main Footer Links Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <!-- Brand Col -->
        <div class="col-span-2 space-y-4">
          <div class="flex min-w-0 items-center gap-3">
            <svg
              width="44"
              height="44"
              viewBox="4 3 23 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
              aria-hidden="true"
              class="shrink-0"
            >
              <g style="fill: var(--logo-glyph, #FFFFFF)">
                <path
                  d="M5 4H17.25A4.75 4.75 0 0 1 22 8.75V13.5H17V9H10V13.5H5Z"
                />
                <path
                  d="M5 28H19.25A4.75 4.75 0 0 0 24 23.25V18.5H19V23H10V18.5H5Z"
                />
              </g>
              <path
                d="M5 13.5H23.5A2.5 2.5 0 0 1 23.5 18.5H5Z"
                style="fill: var(--logo-gate, #74CC55)"
              />
            </svg>
            <div class="min-w-0">
              <div
                class="leading-none font-bold tracking-tight text-2xl text-brand-panel-foreground"
              >
                Bidly
              </div>
            </div>
          </div>
          <p class="text-xs text-brand-panel-muted max-w-sm leading-relaxed">
            Preconstruction CRM cho Tổng thầu Xây dựng Công nghiệp Việt Nam (EPC, MEP, Kết cấu thép). Từ tín hiệu dự án đến bàn giao tiền thi công: kiểm soát chuyển bước có chốt chặn ở máy chủ, Go/No-Go định lượng và bảo vệ tri thức quan hệ của tổ chức.
          </p>
          <div class="text-xs text-brand-panel-muted space-y-1">
            <div>Hotline: <span class="text-brand-panel-foreground font-bold tabular">+84 912 349 901</span></div>
            <div>Email: <span class="text-brand-panel-foreground font-bold">contact@vtechcom.vn</span></div>
          </div>
        </div>

        <!-- Col 2: Mô-đun Lõi -->
        <div class="space-y-3">
          <div
            class="text-xs font-bold uppercase tracking-wider text-brand"
          >
            Mô-đun Lõi (M1 - M7)
          </div>
          <ul class="space-y-2 text-xs text-brand-panel-muted">
            <li>
              <NuxtLink
                to="/features#project-intel"
                class="hover:text-brand-panel-foreground transition-colors"
                >M1 · Project Intelligence</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/features#gonogo"
                class="hover:text-brand-panel-foreground transition-colors"
                >M2 · Pursuit &amp; Go/No-Go</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/features#stakeholder"
                class="hover:text-brand-panel-foreground transition-colors"
                >M3 · Stakeholder Map</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/features#tender"
                class="hover:text-brand-panel-foreground transition-colors"
                >M4 · Tender Workspace</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/features#capability"
                class="hover:text-brand-panel-foreground transition-colors"
                >M5 · Capability Library</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/features#dashboard"
                class="hover:text-brand-panel-foreground transition-colors"
                >M6 · Dashboard &amp; Handover</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/features#platform-sec"
                class="hover:text-brand-panel-foreground transition-colors"
                >M7 · Nền tảng &amp; Bảo mật</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Col 3: Định vị & Tài nguyên -->
        <div class="space-y-3">
          <div
            class="text-xs font-bold uppercase tracking-wider text-brand"
          >
            Tổng quan &amp; So sánh
          </div>
          <ul class="space-y-2 text-xs text-brand-panel-muted">
            <li>
              <NuxtLink
                to="/crm/what-is-crm"
                class="hover:text-brand-panel-foreground transition-colors"
                >Preconstruction CRM là gì?</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/why-bidly"
                class="hover:text-brand-panel-foreground transition-colors"
                >Vì sao chọn Bidly?</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/business-map"
                class="hover:text-brand-panel-foreground transition-colors"
                >Bản đồ nghiệp vụ</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/solutions"
                class="hover:text-brand-panel-foreground transition-colors"
                >3 Mẫu giải pháp ngành</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/pricing"
                class="hover:text-brand-panel-foreground transition-colors"
                >Bảng giá & Triển khai</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/#faq" class="hover:text-brand-panel-foreground transition-colors"
                >Câu hỏi thường gặp (FAQ)</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Col 4: Mô hình & Bảo mật -->
        <div class="space-y-3">
          <div
            class="text-xs font-bold uppercase tracking-wider text-brand"
          >
            Mô hình & Bảo mật
          </div>
          <ul class="space-y-2 text-xs text-brand-panel-muted">
            <li>
              <NuxtLink
                to="/solutions#epc"
                class="hover:text-brand-panel-foreground transition-colors"
                >Tổng thầu EPC & Công nghiệp</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/solutions#mep"
                class="hover:text-brand-panel-foreground transition-colors"
                >Nhà thầu Cơ điện MEP</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/solutions#steel"
                class="hover:text-brand-panel-foreground transition-colors"
                >Kết cấu thép tiền chế</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/pricing#pilot"
                class="hover:text-brand-panel-foreground transition-colors"
                >Design Partner Pilot</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/pricing#professional"
                class="hover:text-brand-panel-foreground transition-colors"
                >Private Cloud Managed</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/pricing#enterprise"
                class="hover:text-brand-panel-foreground transition-colors"
                >Enterprise On-premise</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="pt-8 border-t border-brand-panel-border flex flex-col sm:flex-row items-center justify-between text-xs text-brand-panel-muted gap-4"
      >
        <div>
          © {{ currentYear }} Vtechcom. Bidly Preconstruction CRM. Nền tảng chuyên biệt cho Tổng thầu Xây dựng Công nghiệp.
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <span>Tiếng Việt (Việt Nam)</span>
          <span>•</span>
          <span>Tuân thủ Luật PDPA 91/2025/QH15</span>
          <span>•</span>
          <span>Cơ sở dữ liệu độc lập 100%</span>
        </div>
      </div>
    </div>
  </footer>
</template>
