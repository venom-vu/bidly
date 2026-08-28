<script setup lang="ts">
import { navigationData } from "~/data/navigation";
import SfButton from "~/components/ui/SfButton.vue";
import { useDemoModal } from "~/composables/useDemoModal";

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
  <!--
    Salesforce Header / Context Navigation
    - Nền trắng thuần, 1px border bottom rất nhạt
    - Logo + nav text màu navy #032D60
    - CTA buttons: primary solid blue + secondary outline
    - Dropdown: white card, shadow-dropdown, bo góc xl
    - Height: 72–80px — Salesforce chuẩn header height
  -->
  <header
    class="sticky top-0 z-40 w-full bg-white"
    style="border-bottom: 1px solid rgba(0,0,0,0.08); box-shadow: 0 1px 4px rgba(3,45,96,0.05);"
    @mouseleave="closeAllDropdowns"
  >
    <div class="sf-container flex items-center justify-between h-[72px]">
      <!-- Logo & Brand -->
      <div class="flex items-center gap-6 lg:gap-8">
        <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
          <div class="flex min-w-0 items-center gap-2.5">
            <svg
              width="40"
              height="40"
              viewBox="4 3 23 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
              aria-hidden="true"
              class="shrink-0"
            >
              <g style="fill: var(--logo-tile, #032d60)">
                <path d="M5 4H17.25A4.75 4.75 0 0 1 22 8.75V13.5H17V9H10V13.5H5Z" />
                <path d="M5 28H19.25A4.75 4.75 0 0 0 24 23.25V18.5H19V23H10V18.5H5Z" />
              </g>
              <path
                d="M5 13.5H23.5A2.5 2.5 0 0 1 23.5 18.5H5Z"
                style="fill: var(--logo-gate, #0176d3)"
              />
            </svg>
            <div class="min-w-0">
              <div
                class="leading-none font-bold tracking-tight text-[1.375rem] text-foreground"
              >
                Bidly
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-0.5">
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
            <!-- Nav link (no dropdown) -->
            <NuxtLink
              v-if="menu.url"
              :to="menu.url"
              class="px-3.5 py-2 text-[13.5px] font-semibold text-foreground hover:text-primary rounded-sm transition-colors inline-flex items-center gap-1"
              style="letter-spacing: -0.01em;"
            >
              {{ menu.title }}
            </NuxtLink>

            <!-- Nav button (has dropdown) -->
            <button
              v-else
              type="button"
              class="px-3.5 py-2 text-[13.5px] font-semibold text-foreground hover:text-primary rounded-sm transition-colors inline-flex items-center gap-1.5 cursor-pointer select-none"
              style="letter-spacing: -0.01em;"
              @click="toggleDropdown(menu.title)"
            >
              <span>{{ menu.title }}</span>
              <svg
                class="w-3.5 h-3.5 transition-transform duration-200"
                :class="
                  activeDropdown === menu.title
                    ? 'rotate-180 text-primary'
                    : 'text-muted-foreground'
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

            <!-- Mega Dropdown — Salesforce white card with strong shadow -->
            <div
              v-if="menu.categories && activeDropdown === menu.title"
              :class="[
                'absolute top-full left-0 mt-2 bg-white rounded-xl p-5 z-50',
                menu.widthClass || 'w-[640px]',
              ]"
              style="
                box-shadow: 0 16px 40px rgba(3,45,96,0.16), 0 4px 12px rgba(3,45,96,0.07);
                border: 1px solid rgba(0,0,0,0.07);
              "
            >
              <div
                :class="[
                  'grid gap-5',
                  menu.categories.length === 1 ? 'grid-cols-1' : '',
                  menu.categories.length === 2 ? 'grid-cols-2' : '',
                  menu.categories.length === 3 ? 'grid-cols-3' : '',
                  menu.categories.length >= 4 ? 'grid-cols-4' : '',
                ]"
              >
                <div
                  v-for="(cat, cIdx) in menu.categories"
                  :key="cIdx"
                  :class="[
                    'space-y-2.5',
                    cat.hasSeparator
                      ? 'border-r pr-5'
                      : '',
                  ]"
                  :style="cat.hasSeparator ? 'border-color: rgba(0,0,0,0.07)' : ''"
                >
                  <div
                    v-if="cat.categoryTitle"
                    class="text-[10.5px] font-extrabold uppercase tracking-wider px-2 pb-1.5"
                    style="color: #54698d; border-bottom: 1px solid rgba(0,0,0,0.07);"
                  >
                    {{ cat.categoryTitle }}
                  </div>
                  <div class="space-y-0.5">
                    <NuxtLink
                      v-for="(item, iIdx) in cat.items"
                      :key="iIdx"
                      :to="item.url"
                      class="block px-3 py-2 rounded-lg transition-all duration-150 group"
                      style="color: inherit;"
                      :style="{}"
                      @mouseenter="(e: MouseEvent) => { (e.currentTarget as HTMLElement).style.background = '#e8f4fd' }"
                      @mouseleave="(e: MouseEvent) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }"
                      @click="closeAllDropdowns"
                    >
                      <div
                        class="text-[13px] font-semibold text-foreground group-hover:text-primary transition-colors"
                      >
                        {{ item.label }}
                      </div>
                      <div
                        v-if="item.description"
                        class="text-[11.5px] line-clamp-1 mt-0.5 leading-snug group-hover:text-foreground/80 transition-colors"
                        style="color: #54698d;"
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

      <!-- Utility CTAs (Right) — Salesforce: 2 CTAs, primary + secondary -->
      <div class="hidden sm:flex items-center gap-2.5">
        <SfButton
          variant="primary"
          size="md"
          @click="openModal('Demo Bidly Preconstruction CRM')"
        >
          {{ navigationData.utilityNavigation.freeTrialCta.label }}
        </SfButton>
      </div>

      <!-- Mobile Toggle -->
      <div class="lg:hidden flex items-center gap-2">
        <button
          type="button"
          class="p-2 text-muted-foreground hover:text-foreground rounded-lg focus:outline-none"
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

    <!-- Mobile Drawer -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden bg-white px-6 py-6 space-y-6 max-h-[80vh] overflow-y-auto"
      style="border-top: 1px solid rgba(0,0,0,0.07); box-shadow: 0 16px 40px rgba(3,45,96,0.10);"
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
            class="block text-base font-bold text-foreground py-1"
            @click="isMobileMenuOpen = false"
          >
            {{ menu.title }}
          </NuxtLink>
          <div v-else class="space-y-1">
            <div
              class="text-[10.5px] font-extrabold uppercase tracking-wider pt-2"
              style="color: #54698d;"
            >
              {{ menu.title }}
            </div>
            <div
              v-for="(cat, cIdx) in menu.categories"
              :key="cIdx"
              class="pl-2 space-y-2 pt-1"
            >
              <div
                v-if="cat.categoryTitle"
                class="text-[11px] font-bold uppercase tracking-wider"
                style="color: #0176d3;"
              >
                {{ cat.categoryTitle }}
              </div>
              <NuxtLink
                v-for="(item, iIdx) in cat.items"
                :key="iIdx"
                :to="item.url"
                class="block text-sm font-semibold py-1.5 hover:text-primary"
                style="color: #54698d;"
                @click="isMobileMenuOpen = false"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 flex flex-col gap-3" style="border-top: 1px solid rgba(0,0,0,0.08);">
        <SfButton
          variant="primary"
          block
          @click="
            () => {
              openModal('Demo Bidly Preconstruction CRM');
              isMobileMenuOpen = false;
            }
          "
        >
          Đặt lịch Demo
        </SfButton>
        <SfButton
          variant="secondary"
          to="/features"
          block
          @click="isMobileMenuOpen = false"
        >
          Xem tính năng
        </SfButton>
      </div>
    </div>
  </header>
</template>
