<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-[#032D60] text-white pt-16 pb-12 border-t border-[#0B3F7E]">
    <div class="sf-container space-y-12">
      <!-- Main Footer Links Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <!-- Brand Col -->
        <div class="col-span-2 space-y-4">
          <div class="flex min-w-0 items-center gap-3" bis_skin_checked="1">
            <svg
              width="48"
              height="48"
              viewBox="4 3 23 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
              aria-hidden="true"
              class="shrink-0"
            >
              <!----><!---->
              <g style="fill: currentcolor">
                <path
                  d="M5 4H17.25A4.75 4.75 0 0 1 22 8.75V13.5H17V9H10V13.5H5Z"
                ></path>
                <path
                  d="M5 28H19.25A4.75 4.75 0 0 0 24 23.25V18.5H19V23H10V18.5H5Z"
                ></path>
              </g>
              <path
                d="M5 13.5H23.5A2.5 2.5 0 0 1 23.5 18.5H5Z"
                style="fill: #8cde5b"
              ></path>
            </svg>
            <div class="min-w-0" bis_skin_checked="1">
              <div
                class="leading-none font-bold tracking-tight text-2xl"
                bis_skin_checked="1"
              >
                Bidly
              </div>
            </div>
          </div>
          <p class="text-xs text-gray-300 max-w-sm leading-relaxed">
            Hệ thống Agentic CRM hàng đầu Châu Á. Tích hợp AI tự hành để kết nối
            bán hàng, chăm sóc khách hàng, marketing và dữ liệu doanh nghiệp
            trên một nền tảng duy nhất.
          </p>
          <div class="text-xs text-gray-400">
            Hotline: <span class="text-white font-bold">+84 912 349 901</span>
          </div>
        </div>

        <!-- Col 2: Sản phẩm -->
        <div class="space-y-3">
          <div
            class="text-xs font-bold uppercase tracking-wider text-[#0176D3]"
          >
            Sản phẩm & Giải pháp
          </div>
          <ul class="space-y-2 text-xs text-gray-300">
            <li>
              <NuxtLink
                to="/crm/what-is-crm"
                class="hover:text-white transition-colors"
                >Agentforce AI</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/what-is-crm"
                class="hover:text-white transition-colors"
                >Sales Cloud</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/what-is-crm"
                class="hover:text-white transition-colors"
                >Service Cloud</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/what-is-crm"
                class="hover:text-white transition-colors"
                >Marketing Cloud</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/pricing"
                class="hover:text-white transition-colors"
                >Bảng giá sản phẩm</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Col 3: Tài nguyên -->
        <div class="space-y-3">
          <div
            class="text-xs font-bold uppercase tracking-wider text-[#0176D3]"
          >
            Tài nguyên
          </div>
          <ul class="space-y-2 text-xs text-gray-300">
            <li>
              <NuxtLink
                to="/crm/what-is-crm"
                class="hover:text-white transition-colors"
                >Khái niệm CRM</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/what-is-crm#benefits"
                class="hover:text-white transition-colors"
                >Lợi ích & Hiệu quả ROI</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/crm/free-trial"
                class="hover:text-white transition-colors"
                >Đăng ký dùng thử</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/#faq" class="hover:text-white transition-colors"
                >Câu hỏi thường gặp</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Col 4: Pháp lý -->
        <div class="space-y-3">
          <div
            class="text-xs font-bold uppercase tracking-wider text-[#0176D3]"
          >
            Pháp lý & Bảo mật
          </div>
          <ul class="space-y-2 text-xs text-gray-300">
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Chính sách bảo mật</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Điều khoản dịch vụ</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Bảo mật chuẩn ISO/SOC2</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Tùy chọn Cookie</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4"
      >
        <div>
          © {{ currentYear }} bidly CRM, Inc. Tất cả quyền được bảo lưu.
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
