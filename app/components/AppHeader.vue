<script setup lang="ts">
import { navigationData } from "~/data/navigation";
import SfButton from "~/components/ui/SfButton.vue";

const isMobileMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);
const { openModal } = useDemoModal();

const toggleDropdown = (title: string) => {
  if (activeDropdown.value === title) {
    activeDropdown.value = null;
  } else {
    activeDropdown.value = title;
  }
};

const closeAllDropdowns = () => {
  activeDropdown.value = null;
};
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full bg-white shadow-sm"
    @mouseleave="closeAllDropdowns"
  >
    <!-- Contextual Nav C360 (Tầng 2) -->
    <div class="border-b border-gray-100 bg-white">
      <div class="sf-container flex items-center justify-between h-20">
        <!-- Logo & Brand Badge -->
        <div class="flex items-center gap-8">
          <NuxtLink to="/" class="flex items-center gap-2">
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
          </NuxtLink>

          <!-- Desktop Navigation Items -->
          <nav class="hidden lg:flex items-center gap-1">
            <div
              v-for="menu in navigationData.mainMenu"
              :key="menu.title"
              class="relative"
              @mouseenter="
                menu.categories
                  ? (activeDropdown = menu.title)
                  : (activeDropdown = null)
              "
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
                  :class="
                    activeDropdown === menu.title
                      ? 'rotate-180 text-[#0176D3]'
                      : 'text-gray-400'
                  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M19 9l-7 7-7-7"
                  />
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
                    <div
                      v-if="cat.categoryTitle"
                      class="text-[11px] font-bold text-gray-400 uppercase tracking-wider"
                    >
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
                        <div
                          class="text-sm font-bold text-[#032D60] group-hover:text-[#0176D3] flex items-center justify-between"
                        >
                          <span>{{ item.label }}</span>
                          <span
                            v-if="item.badge"
                            class="text-[10px] font-bold bg-[#E6F4EA] text-[#04844B] px-1.5 py-0.5 rounded"
                          >
                            {{ item.badge }}
                          </span>
                        </div>
                        <div
                          v-if="item.description"
                          class="text-xs text-gray-500 line-clamp-1 mt-0.5"
                        >
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
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
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
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden border-b border-gray-200 bg-white px-6 py-6 space-y-6 shadow-xl max-h-[80vh] overflow-y-auto"
    >
      <div class="space-y-4">
        <div
          v-for="menu in navigationData.mainMenu"
          :key="menu.title"
          class="space-y-2"
        >
          <NuxtLink
            v-if="menu.url"
            :to="menu.url"
            class="block text-base font-bold text-[#032D60] py-1"
            @click="isMobileMenuOpen = false"
          >
            {{ menu.title }}
          </NuxtLink>
          <div v-else class="space-y-1">
            <div
              class="text-xs font-bold text-gray-400 uppercase tracking-wider pt-2"
            >
              {{ menu.title }}
            </div>
            <div
              v-for="(cat, cIdx) in menu.categories"
              :key="cIdx"
              class="pl-2 space-y-1"
            >
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
          @click="
            () => {
              openModal('Tour Khám phá');
              isMobileMenuOpen = false;
            }
          "
        >
          Khám phá tour
        </SfButton>
      </div>
    </div>
  </header>
</template>
