<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#032D60] text-white pt-16 pb-12 border-t border-[#0B3F7E]">
    <div class="sf-container space-y-12">
      <!-- Main Footer Links Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <!-- Brand Col -->
        <div class="col-span-2 space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-[#0176D3] text-white flex items-center justify-center font-black text-lg">
              B
            </div>
            <span class="text-xl font-extrabold tracking-tight text-white">bidly CRM</span>
          </div>
          <p class="text-xs text-gray-300 max-w-sm leading-relaxed">
            Hệ thống Agentic CRM hàng đầu Châu Á. Tích hợp AI tự hành để kết nối bán hàng, chăm sóc khách hàng, marketing và dữ liệu doanh nghiệp trên một nền tảng duy nhất.
          </p>
          <div class="text-xs text-gray-400">
            Hotline: <span class="text-white font-bold">+84 (0) 28 7300 0000</span> (Hỗ trợ 24/7)
          </div>
        </div>

        <!-- Col 2: Sản phẩm -->
        <div class="space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-[#0176D3]">
            Sản phẩm & Giải pháp
          </div>
          <ul class="space-y-2 text-xs text-gray-300">
            <li><NuxtLink to="/crm/what-is-crm" class="hover:text-white transition-colors">Agentforce AI</NuxtLink></li>
            <li><NuxtLink to="/crm/what-is-crm" class="hover:text-white transition-colors">Sales Cloud</NuxtLink></li>
            <li><NuxtLink to="/crm/what-is-crm" class="hover:text-white transition-colors">Service Cloud</NuxtLink></li>
            <li><NuxtLink to="/crm/what-is-crm" class="hover:text-white transition-colors">Marketing Cloud</NuxtLink></li>
            <li><NuxtLink to="/crm/pricing" class="hover:text-white transition-colors">Bảng giá sản phẩm</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 3: Tài nguyên -->
        <div class="space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-[#0176D3]">
            Tài nguyên
          </div>
          <ul class="space-y-2 text-xs text-gray-300">
            <li><NuxtLink to="/crm/what-is-crm" class="hover:text-white transition-colors">Khái niệm CRM</NuxtLink></li>
            <li><NuxtLink to="/crm/what-is-crm#benefits" class="hover:text-white transition-colors">Lợi ích & Hiệu quả ROI</NuxtLink></li>
            <li><NuxtLink to="/crm/free-trial" class="hover:text-white transition-colors">Đăng ký dùng thử</NuxtLink></li>
            <li><NuxtLink to="/#faq" class="hover:text-white transition-colors">Câu hỏi thường gặp</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 4: Pháp lý -->
        <div class="space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-[#0176D3]">
            Pháp lý & Bảo mật
          </div>
          <ul class="space-y-2 text-xs text-gray-300">
            <li><a href="#" class="hover:text-white transition-colors">Chính sách bảo mật</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Bảo mật chuẩn ISO/SOC2</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Tùy chọn Cookie</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <div>
          © {{ currentYear }} bidly CRM, Inc. Tất cả quyền được bảo lưu. Mẫu giao diện và trải nghiệm cảm hứng từ Salesforce.
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
