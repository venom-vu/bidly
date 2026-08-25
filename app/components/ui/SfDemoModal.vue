<script setup lang="ts">
const { isOpen, videoTitle, closeModal } = useDemoModal()

// Keyboard listener for Escape key
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#032D60]/75 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div
          class="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20 transform transition-all"
        >
          <!-- Modal Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#F4F6F9]">
            <div class="flex items-center gap-3">
              <span class="inline-flex p-2 bg-[#0176D3]/10 text-[#0176D3] rounded-lg">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
              </span>
              <h3 class="text-lg font-bold text-[#032D60]">{{ videoTitle }}</h3>
            </div>
            <button
              type="button"
              class="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Đóng"
              @click="closeModal"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Video / Demo Body -->
          <div class="p-6">
            <div class="relative w-full aspect-video bg-[#032D60] rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
              <div class="text-center text-white px-6">
                <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center animate-pulse">
                  <svg class="w-10 h-10 text-[#0176D3]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <h4 class="text-xl font-bold mb-2">Trải nghiệm tương tác thực tế</h4>
                <p class="text-sm text-gray-300 max-w-md mx-auto mb-6">
                  Khám phá cách thức Agentic AI tự động hóa việc chấm điểm lead, soạn thảo email và giải quyết ticket chăm sóc khách hàng.
                </p>
                <div class="flex items-center justify-center gap-4">
                  <NuxtLink
                    to="/crm/free-trial"
                    class="px-6 py-2.5 bg-[#0176D3] text-white font-bold rounded-lg hover:bg-[#014486] transition-colors"
                    @click="closeModal"
                  >
                    Bắt đầu dùng thử miễn phí
                  </NuxtLink>
                  <button
                    class="px-6 py-2.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                    @click="closeModal"
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
