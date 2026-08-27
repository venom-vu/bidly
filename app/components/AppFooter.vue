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
            Hệ thống Preconstruction & Agentic CRM hàng đầu. Hợp nhất cơ hội kinh doanh, đấu thầu, khách hàng và dữ liệu doanh nghiệp trên một nền tảng duy nhất.
          </p>
          <div class="text-xs text-brand-panel-muted">
            Hotline: <span class="text-brand-panel-foreground font-bold">+84 912 349 901</span>
          </div>
        </div>

        <!-- Col 2: Sản phẩm -->
        <div class="space-y-3">
          <div
            class="text-xs font-bold uppercase tracking-wider text-brand"
          >
            Sản phẩm & Giải pháp
          </div>
          <ul class="space-y-2 text-xs text-brand-panel-muted">
            <li>
              <NuxtLink
                to="/crm/what-is-crm"
                class="hover:text-brand-panel-foreground transition-colors"
                >Agentforce AI</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/what-is-crm"
                class="hover:text-brand-panel-foreground transition-colors"
                >Sales Cloud</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/what-is-crm"
                class="hover:text-brand-panel-foreground transition-colors"
                >Service Cloud</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/what-is-crm"
                class="hover:text-brand-panel-foreground transition-colors"
                >Marketing Cloud</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/pricing"
                class="hover:text-brand-panel-foreground transition-colors"
                >Bảng giá sản phẩm</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Col 3: Tài nguyên -->
        <div class="space-y-3">
          <div
            class="text-xs font-bold uppercase tracking-wider text-brand"
          >
            Tài nguyên
          </div>
          <ul class="space-y-2 text-xs text-brand-panel-muted">
            <li>
              <NuxtLink
                to="/crm/what-is-crm"
                class="hover:text-brand-panel-foreground transition-colors"
                >Khái niệm CRM</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/what-is-crm#benefits"
                class="hover:text-brand-panel-foreground transition-colors"
                >Lợi ích & Hiệu quả ROI</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/free-trial"
                class="hover:text-brand-panel-foreground transition-colors"
                >Đăng ký dùng thử</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/#faq" class="hover:text-brand-panel-foreground transition-colors"
                >Câu hỏi thường gặp</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Col 4: Pháp lý -->
        <div class="space-y-3">
          <div
            class="text-xs font-bold uppercase tracking-wider text-brand"
          >
            Pháp lý & Bảo mật
          </div>
          <ul class="space-y-2 text-xs text-brand-panel-muted">
            <li>
              <a href="#" class="hover:text-brand-panel-foreground transition-colors"
                >Chính sách bảo mật</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-brand-panel-foreground transition-colors"
                >Điều khoản dịch vụ</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-brand-panel-foreground transition-colors"
                >Bảo mật chuẩn ISO/SOC2</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-brand-panel-foreground transition-colors"
                >Tùy chọn Cookie</a
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
          © {{ currentYear }} Bidly CRM. Tất cả quyền được bảo lưu.
        </div>
        <div class="flex items-center gap-4">
          <span>Tiếng Việt (Việt Nam)</span>
          <span>•</span>
          <span>Bảo mật dữ liệu 100%</span>
        </div>
      </div>
    </div>
  </footer>
</template>
