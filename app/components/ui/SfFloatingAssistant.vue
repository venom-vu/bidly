<script setup lang="ts">
import { useDemoModal } from '~/composables/useDemoModal'

const { openModal } = useDemoModal()
</script>

<template>
  <div class="fixed bottom-6 right-6 z-40">
    <button
      type="button"
      class="group flex items-center gap-2.5 px-5 py-3 bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-sm rounded-full shadow-dropdown hover:shadow-modal transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer border border-white/25 select-none"
      @click="openModal('Trợ lý AI Piper - Tư vấn giải pháp CRM')"
    >
      <!-- Sparkle Icon -->
      <svg class="w-4 h-4 text-white animate-pulse" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
      </svg>
      <span>Ask Piper AI</span>
    </button>
  </div>
</template>

