<script setup lang="ts">
import { useDemoModal } from "~/composables/useDemoModal";

const { isOpen, videoTitle, closeModal } = useDemoModal();

const formState = reactive({
  fullName: "",
  company: "",
  phone: "",
  email: "",
  segment: "epc",
  submitted: false,
});

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isOpen.value) {
    closeModal();
  }
};

const submitDemoForm = () => {
  formState.submitted = true;
  setTimeout(() => {
    formState.submitted = false;
    closeModal();
  }, 2000);
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-panel/75 backdrop-blur-md"
        @click.self="closeModal"
      >
        <div
          class="relative w-full max-w-2xl bg-card rounded-2xl shadow-modal overflow-hidden border border-border flex flex-col max-h-[calc(100dvh-2rem)] transform transition-all"
        >
          <!-- 1. Modal Header (Cố định) -->
          <div
            class="flex items-center justify-between px-6 py-4 border-b border-border bg-background/90 shrink-0"
          >
            <div class="flex items-center gap-3">
              <span
                class="inline-flex p-2 bg-brand-soft text-brand-text rounded-lg"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  />
                </svg>
              </span>
              <div>
                <h3 class="text-base sm:text-lg font-bold text-foreground">
                  {{
                    videoTitle ||
                    "Đăng ký Trải nghiệm Demo Bidly Preconstruction CRM"
                  }}
                </h3>
                <div class="text-xs text-muted-foreground">
                  Trải nghiệm demo trực tiếp 45 phút trên quy trình thực tế theo
                  ngành của bạn
                </div>
              </div>
            </div>
            <button
              type="button"
              class="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors cursor-pointer"
              aria-label="Đóng"
              @click="closeModal"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- 2. Modal Body (Vùng cuộn an toàn) -->
          <div class="p-6 overflow-y-auto min-h-0 flex-1 space-y-4">
            <div
              v-if="formState.submitted"
              class="p-8 text-center space-y-3 bg-brand-soft rounded-xl border border-brand/30"
            >
              <div
                class="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-xl font-bold"
              >
                ✓
              </div>
              <h4 class="text-lg font-bold text-foreground">
                Gửi thông tin thành công!
              </h4>
              <p class="text-sm text-muted-foreground">
                Chuyên gia Vtechcom sẽ liên hệ trong vòng 2 giờ làm việc để xếp
                lịch trải nghiệm phù hợp nhất.
              </p>
            </div>

            <form v-else class="space-y-4" @submit.prevent="submitDemoForm">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label
                    class="block text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    Họ và tên <span class="text-destructive">*</span>
                  </label>
                  <input
                    v-model="formState.fullName"
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn An"
                    class="w-full h-11 px-3.5 bg-card rounded-[4px] border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                <div class="space-y-1.5">
                  <label
                    class="block text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    Tên Doanh Nghiệp <span class="text-destructive">*</span>
                  </label>
                  <input
                    v-model="formState.company"
                    type="text"
                    required
                    placeholder="Ví dụ: Công ty TNHH VTechcom"
                    class="w-full h-11 px-3.5 bg-card rounded-[4px] border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label
                    class="block text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    Số điện thoại <span class="text-destructive">*</span>
                  </label>
                  <input
                    v-model="formState.phone"
                    type="tel"
                    required
                    placeholder="0912 345 678"
                    class="w-full h-11 px-3.5 bg-card rounded-[4px] border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                <div class="space-y-1.5">
                  <label
                    class="block text-xs font-bold uppercase tracking-wider text-foreground"
                  >
                    Email công việc <span class="text-destructive">*</span>
                  </label>
                  <input
                    v-model="formState.email"
                    type="email"
                    required
                    placeholder="an.nguyen@azb.vn"
                    class="w-full h-11 px-3.5 bg-card rounded-[4px] border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div class="space-y-1.5">
                <label
                  class="block text-xs font-bold uppercase tracking-wider text-foreground"
                >
                  Phân khúc hoạt động chính
                </label>
                <select
                  v-model="formState.segment"
                  class="w-full h-11 px-3.5 bg-card rounded-[4px] border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                  <option value="epc">
                    Tổng thầu EPC & Xây dựng Công nghiệp
                  </option>
                  <option value="mep">Nhà thầu Cơ điện MEP & PCCC</option>
                  <option value="steel">
                    Kết cấu thép & Nhà thép tiền chế
                  </option>
                  <option value="other">Nhà thầu chuyên ngành khác</option>
                </select>
              </div>

              <p class="text-xs text-muted-foreground leading-relaxed">
                Thông tin được bảo mật theo Luật Bảo vệ Dữ liệu Cá nhân
                91/2025/QH15. Vtechcom cam kết tuyệt đối không chia sẻ dữ liệu
                cho bên thứ ba.
              </p>
            </form>
          </div>

          <!-- 3. Modal Footer (Cố định) -->
          <div
            class="flex items-center justify-end gap-3 px-6 py-4 border-t border-border bg-background/90 shrink-0"
          >
            <button
              type="button"
              class="px-4 py-2 text-sm font-bold text-foreground hover:bg-secondary rounded-[4px] transition-colors cursor-pointer"
              @click="closeModal"
            >
              Đóng
            </button>
            <button
              type="button"
              class="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-extrabold rounded-[4px] hover:bg-primary-hover shadow-sm hover:shadow active:scale-[0.98] transition-all cursor-pointer"
              @click="submitDemoForm"
            >
              Gửi Yêu Cầu Demo
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
