<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'

useSeoMeta({
  title: 'Đăng ký Dùng thử Phần mềm CRM Miễn phí 30 Ngày | bidly',
  description: 'Trải nghiệm toàn diện nền tảng CRM tích hợp AI miễn phí trong 30 ngày. Không cần thẻ tín dụng, sẵn sàng sử dụng chỉ sau 1 phút.'
})

const form = reactive({
  fullName: '',
  email: '',
  jobTitle: '',
  company: '',
  companySize: '1-20 nhân viên',
  phone: ''
})

const isSubmitted = ref(false)
const errorMessage = ref('')

const handleSubmit = () => {
  if (!form.fullName || !form.email || !form.company || !form.phone) {
    errorMessage.value = 'Vui lòng điền đầy đủ các thông tin bắt buộc (*)'
    return
  }

  if (!form.email.includes('@')) {
    errorMessage.value = 'Vui lòng nhập địa chỉ email hợp lệ'
    return
  }

  errorMessage.value = ''
  isSubmitted.value = true
}

const resetForm = () => {
  form.fullName = ''
  form.email = ''
  form.jobTitle = ''
  form.company = ''
  form.companySize = '1-20 nhân viên'
  form.phone = ''
  isSubmitted.value = false
}
</script>

<template>
  <div class="py-12 md:py-20 sf-gradient-bg min-h-[85vh] flex items-center">
    <div class="sf-container w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left Column: Value Prop & Trust Elements -->
        <div class="lg:col-span-6 space-y-6 text-left">
          <SfBadge variant="blue" size="md">
            TRẢI NGHIỆM MIỄN PHÍ 30 NGÀY
          </SfBadge>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#032D60] tracking-tight leading-[1.15]">
            Bắt đầu hành trình tăng trưởng cùng <span class="text-[#0176D3]">bidly CRM</span>
          </h1>

          <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
            Khám phá sức mạnh của hệ thống Agentic CRM số 1. Hợp nhất mọi luồng thông tin bán hàng, chăm sóc khách hàng và marketing để phục vụ khách hàng tốt nhất.
          </p>

          <div class="space-y-4 pt-4 border-t border-gray-200">
            <div class="flex items-center gap-3 text-sm font-semibold text-[#032D60]">
              <span class="w-6 h-6 rounded-full bg-[#E6F4EA] text-[#04844B] flex items-center justify-center shrink-0">
                ✓
              </span>
              <span>Dùng thử trọn vẹn mọi tính năng cao cấp</span>
            </div>
            <div class="flex items-center gap-3 text-sm font-semibold text-[#032D60]">
              <span class="w-6 h-6 rounded-full bg-[#E6F4EA] text-[#04844B] flex items-center justify-center shrink-0">
                ✓
              </span>
              <span>Không yêu cầu thẻ tín dụng hoặc cam kết thanh toán</span>
            </div>
            <div class="flex items-center gap-3 text-sm font-semibold text-[#032D60]">
              <span class="w-6 h-6 rounded-full bg-[#E6F4EA] text-[#04844B] flex items-center justify-center shrink-0">
                ✓
              </span>
              <span>Kích hoạt tài khoản ngay lập tức chỉ sau 1 phút</span>
            </div>
          </div>

          <div class="pt-2 text-xs text-gray-500">
            Cần hỗ trợ trực tiếp? Gọi ngay hotline: <strong class="text-[#032D60]">+84 (0) 28 7300 0000</strong>
          </div>
        </div>

        <!-- Right Column: Registration Form Card -->
        <div class="lg:col-span-6">
          <div class="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100">
            <!-- Success State -->
            <div v-if="isSubmitted" class="text-center py-10 space-y-5">
              <div class="w-16 h-16 rounded-full bg-[#E6F4EA] text-[#04844B] flex items-center justify-center mx-auto text-2xl font-bold shadow-inner">
                ✓
              </div>
              <h3 class="text-2xl font-extrabold text-[#032D60]">
                Đăng ký Dùng thử Thành công!
              </h3>
              <p class="text-sm text-gray-600 max-w-md mx-auto">
                Cảm ơn <strong>{{ form.fullName }}</strong>. Chúng tôi đã gửi email thông tin kích hoạt tài khoản thử nghiệm 30 ngày đến địa chỉ <strong>{{ form.email }}</strong>.
              </p>
              <div class="pt-4 flex justify-center gap-3">
                <NuxtLink
                  to="/"
                  class="px-6 py-2.5 bg-[#0176D3] text-white font-bold rounded-lg hover:bg-[#014486] transition-colors text-sm"
                >
                  Về Trang chủ
                </NuxtLink>
                <button
                  type="button"
                  class="px-6 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  @click="resetForm"
                >
                  Đăng ký tài khoản khác
                </button>
              </div>
            </div>

            <!-- Form State -->
            <form v-else class="space-y-4" @submit.prevent="handleSubmit">
              <div class="border-b border-gray-100 pb-4 mb-2">
                <h3 class="text-xl font-bold text-[#032D60]">Điền thông tin đăng ký</h3>
                <p class="text-xs text-gray-500 mt-1">Đội ngũ chuyên viên sẽ hỗ trợ bạn thiết lập trong vòng 24 giờ.</p>
              </div>

              <div v-if="errorMessage" class="p-3 rounded-lg bg-red-50 text-red-600 text-xs font-semibold">
                {{ errorMessage }}
              </div>

              <!-- Full Name -->
              <div>
                <label class="block text-xs font-bold text-[#032D60] uppercase mb-1">
                  Họ và tên <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.fullName"
                  type="text"
                  placeholder="Ví dụ: Nguyễn Văn An"
                  class="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-[#0176D3] focus:ring-2 focus:ring-[#0176D3]/20 outline-none transition-all"
                  required
                >
              </div>

              <!-- Email -->
              <div>
                <label class="block text-xs font-bold text-[#032D60] uppercase mb-1">
                  Email công việc <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="an.nguyen@congty.com"
                  class="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-[#0176D3] focus:ring-2 focus:ring-[#0176D3]/20 outline-none transition-all"
                  required
                >
              </div>

              <!-- Job Title & Company -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-[#032D60] uppercase mb-1">
                    Chức danh
                  </label>
                  <input
                    v-model="form.jobTitle"
                    type="text"
                    placeholder="Giám đốc kinh doanh"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-[#0176D3] focus:ring-2 focus:ring-[#0176D3]/20 outline-none transition-all"
                  >
                </div>
                <div>
                  <label class="block text-xs font-bold text-[#032D60] uppercase mb-1">
                    Tên công ty <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.company"
                    type="text"
                    placeholder="Công ty ABC"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-[#0176D3] focus:ring-2 focus:ring-[#0176D3]/20 outline-none transition-all"
                    required
                  >
                </div>
              </div>

              <!-- Company Size & Phone -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-[#032D60] uppercase mb-1">
                    Quy mô công ty
                  </label>
                  <select
                    v-model="form.companySize"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-[#0176D3] focus:ring-2 focus:ring-[#0176D3]/20 outline-none transition-all bg-white"
                  >
                    <option value="1-20 nhân viên">1 - 20 nhân viên</option>
                    <option value="21-100 nhân viên">21 - 100 nhân viên</option>
                    <option value="101-500 nhân viên">101 - 500 nhân viên</option>
                    <option value="Trên 500 nhân viên">Trên 500 nhân viên</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-bold text-[#032D60] uppercase mb-1">
                    Số điện thoại <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="0912 345 678"
                    class="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-[#0176D3] focus:ring-2 focus:ring-[#0176D3]/20 outline-none transition-all"
                    required
                  >
                </div>
              </div>

              <!-- Submit Button -->
              <div class="pt-4">
                <SfButton
                  variant="primary"
                  size="lg"
                  block
                  type="submit"
                >
                  Kích hoạt dùng thử 30 ngày
                </SfButton>
              </div>

              <div class="text-[11px] text-gray-400 text-center pt-2">
                Bằng việc nhấp vào Đăng ký, bạn đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của chúng tôi.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
