<script setup lang="ts">
import { navigationData } from '~/data/navigation'
import SfButton from '~/components/ui/SfButton.vue'

const isMobileMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)
const { openModal } = useDemoModal()

const toggleDropdown = (title: string) => {
  if (activeDropdown.value === title) {
    activeDropdown.value = null
  } else {
    activeDropdown.value = title
  }
}

const closeAllDropdowns = () => {
  activeDropdown.value = null
}
</script>

<template>
  <header class="sticky top-0 z-40 w-full bg-white shadow-sm" @mouseleave="closeAllDropdowns">
    <!-- Top Global Nav (Tầng 1) -->
    <div class="border-b border-gray-100 bg-[#032D60] text-white text-xs py-2 px-4 sm:px-8">
      <div class="sf-container flex items-center justify-between">
        <div class="flex items-center gap-6 font-semibold">
          <NuxtLink to="/" class="flex items-center gap-2 hover:text-[#0176D3] transition-colors">
            <span class="w-2.5 h-2.5 rounded-full bg-[#0176D3]" />
            <span class="font-extrabold tracking-wider text-sm text-white">bidly</span>
            <span class="text-[10px] uppercase tracking-widest text-gray-300">Enterprise AI</span>
          </NuxtLink>
          <span class="hidden md:inline text-gray-400">|</span>
          <span class="hidden md:inline text-gray-300">Hotline: <strong class="text-white">+84 (0) 28 7300 0000</strong></span>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1.5 cursor-pointer text-gray-200 hover:text-white">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
            <span class="font-bold">VI / VN</span>
          </div>
          <NuxtLink
            to="/crm/free-trial"
            class="text-gray-200 hover:text-white font-semibold flex items-center gap-1"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Đăng nhập
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Contextual Nav C360 (Tầng 2) -->
    <div class="border-b border-gray-100 bg-white">
      <div class="sf-container flex items-center justify-between h-16">
        <!-- Logo & Brand Badge -->
        <div class="flex items-center gap-8">
          <NuxtLink to="/" class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-[#0176D3] text-white flex items-center justify-center font-black text-lg shadow-sm">
              B
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-extrabold tracking-tight text-[#032D60] leading-none">bidly CRM</span>
              <span class="text-[10px] font-bold text-[#0176D3] uppercase tracking-wider mt-0.5">Agentforce Powered</span>
            </div>
          </NuxtLink>

          <!-- Desktop Navigation Items -->
          <nav class="hidden lg:flex items-center gap-1">
            <div
              v-for="menu in navigationData.mainMenu"
              :key="menu.title"
              class="relative"
              @mouseenter="menu.categories ? (activeDropdown = menu.title) : (activeDropdown = null)"
            >
              <NuxtLink
                v-if="menu.url"
                :to="menu.url"
                class="px-3.5 py-2 text-sm font-bold text-[#032D60] hover:text-[#0176D3] rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-1"
              >
                {{ menu.title }}
              </NuxtLink>

              <button
                v-else
                type="button"
                class="px-3.5 py-2 text-sm font-bold text-[#032D60] hover:text-[#0176D3] rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-1 cursor-pointer"
                @click="toggleDropdown(menu.title)"
              >
                <span>{{ menu.title }}</span>
                <svg
                  class="w-3.5 h-3.5 transition-transform duration-200"
                  :class="activeDropdown === menu.title ? 'rotate-180 text-[#0176D3]' : 'text-gray-400'"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Mega Menu Dropdown -->
              <div
                v-if="menu.categories && activeDropdown === menu.title"
                class="absolute top-full left-0 mt-1 w-96 max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 animate-fade-in"
              >
                <div class="space-y-4">
                  <div
                    v-for="(cat, cIdx) in menu.categories"
                    :key="cIdx"
                    class="space-y-2 border-b border-gray-50 last:border-0 pb-3 last:pb-0"
                  >
                    <div v-if="cat.categoryTitle" class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      {{ cat.categoryTitle }}
                    </div>
                    <div class="space-y-1">
                      <NuxtLink
                        v-for="(item, iIdx) in cat.items"
                        :key="iIdx"
                        :to="item.url"
                        class="block px-3 py-2 rounded-lg hover:bg-[#F4F6F9] transition-colors group"
                        @click="closeAllDropdowns"
                      >
                        <div class="text-sm font-bold text-[#032D60] group-hover:text-[#0176D3] flex items-center justify-between">
                          <span>{{ item.label }}</span>
                          <span v-if="item.badge" class="text-[10px] font-bold bg-[#E6F4EA] text-[#04844B] px-1.5 py-0.5 rounded">
                            {{ item.badge }}
                          </span>
                        </div>
                        <div v-if="item.description" class="text-xs text-gray-500 line-clamp-1 mt-0.5">
                          {{ item.description }}
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <!-- Utility CTAs (Right) -->
        <div class="hidden sm:flex items-center gap-3">
          <SfButton
            variant="secondary"
            size="sm"
            @click="openModal('Tour Khám phá Giải pháp CRM')"
          >
            {{ navigationData.utilityNavigation.tourCta.label }}
          </SfButton>

          <SfButton
            variant="primary"
            size="sm"
            :to="navigationData.utilityNavigation.freeTrialCta.url"
          >
            {{ navigationData.utilityNavigation.freeTrialCta.label }}
          </SfButton>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="lg:hidden flex items-center gap-2">
          <button
            type="button"
            class="p-2 text-gray-600 hover:text-[#032D60] rounded-lg focus:outline-none"
            aria-label="Menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden border-b border-gray-200 bg-white px-6 py-6 space-y-6 shadow-xl max-h-[80vh] overflow-y-auto"
    >
      <div class="space-y-4">
        <div v-for="menu in navigationData.mainMenu" :key="menu.title" class="space-y-2">
          <NuxtLink
            v-if="menu.url"
            :to="menu.url"
            class="block text-base font-bold text-[#032D60] py-1"
            @click="isMobileMenuOpen = false"
          >
            {{ menu.title }}
          </NuxtLink>
          <div v-else class="space-y-1">
            <div class="text-xs font-bold text-gray-400 uppercase tracking-wider pt-2">
              {{ menu.title }}
            </div>
            <div v-for="(cat, cIdx) in menu.categories" :key="cIdx" class="pl-2 space-y-1">
              <NuxtLink
                v-for="(item, iIdx) in cat.items"
                :key="iIdx"
                :to="item.url"
                class="block text-sm font-semibold text-gray-700 py-1.5 hover:text-[#0176D3]"
                @click="isMobileMenuOpen = false"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-gray-100 flex flex-col gap-3">
        <SfButton
          variant="primary"
          to="/crm/free-trial"
          block
          @click="isMobileMenuOpen = false"
        >
          Bắt đầu miễn phí 30 ngày
        </SfButton>
        <SfButton
          variant="secondary"
          block
          @click="() => { openModal('Tour Khám phá'); isMobileMenuOpen = false }"
        >
          Khám phá tour
        </SfButton>
      </div>
    </div>
  </header>
</template>
