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
  <header
    class="sticky top-0 z-40 w-full bg-card shadow-xs border-b border-border"
    @mouseleave="closeAllDropdowns"
  >
    <div class="sf-container flex items-center justify-between h-20">
      <!-- Logo & Brand Badge -->
      <div class="flex items-center gap-6 lg:gap-8">
        <NuxtLink to="/" class="flex items-center gap-2">
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
              <g style="fill: var(--logo-tile, #1b211c)">
                <path
                  d="M5 4H17.25A4.75 4.75 0 0 1 22 8.75V13.5H17V9H10V13.5H5Z"
                />
                <path
                  d="M5 28H19.25A4.75 4.75 0 0 0 24 23.25V18.5H19V23H10V18.5H5Z"
                />
              </g>
              <!-- Gate cutting through B -->
              <path
                d="M5 13.5H23.5A2.5 2.5 0 0 1 23.5 18.5H5Z"
                style="fill: var(--logo-gate, #74cc55)"
              />
            </svg>
            <div class="min-w-0">
              <div
                class="leading-none font-bold tracking-tight text-2xl text-foreground"
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
              class="px-3.5 py-2 text-sm font-bold text-foreground hover:text-brand-text rounded-lg hover:bg-background transition-colors inline-flex items-center gap-1"
            >
              {{ menu.title }}
            </NuxtLink>

            <button
              v-else
              type="button"
              class="px-3.5 py-2 text-sm font-bold text-foreground hover:text-brand-text rounded-lg hover:bg-background transition-colors inline-flex items-center gap-1.5 cursor-pointer select-none"
              @click="toggleDropdown(menu.title)"
            >
              <span>{{ menu.title }}</span>
              <svg
                class="w-3.5 h-3.5 transition-transform duration-200"
                :class="
                  activeDropdown === menu.title
                    ? 'rotate-180 text-brand-text'
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

            <!-- Mega Menu Dropdown -->
            <div
              v-if="menu.categories && activeDropdown === menu.title"
              :class="[
                'absolute top-full left-0 mt-1.5 bg-card rounded-2xl shadow-dropdown border border-border p-5 z-50 transition-all duration-200',
                menu.widthClass || 'w-[640px]',
              ]"
            >
              <div
                :class="[
                  'grid gap-5',
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
                    cat.hasSeparator ? 'border-r border-border/80 pr-5' : '',
                  ]"
                >
                  <div
                    v-if="cat.categoryTitle"
                    class="text-[11px] font-extrabold text-muted-foreground uppercase tracking-wider px-2 pb-1.5 border-b border-border/50"
                  >
                    {{ cat.categoryTitle }}
                  </div>
                  <div class="space-y-0.5">
                    <NuxtLink
                      v-for="(item, iIdx) in cat.items"
                      :key="iIdx"
                      :to="item.url"
                      class="block px-2.5 py-2 rounded-xl hover:bg-brand-soft/60 transition-all duration-150 group"
                      @click="closeAllDropdowns"
                    >
                      <div
                        class="text-[13.5px] font-bold text-foreground group-hover:text-brand-text flex items-center justify-between"
                      >
                        <span class="flex items-center gap-1.5">
                          <span
                            class="w-1.5 h-1.5 rounded-full bg-brand-gate opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                          {{ item.label }}
                        </span>
                        <span
                          v-if="item.badge"
                          class="text-[10px] font-extrabold bg-brand-soft text-brand-text px-1.5 py-0.5 rounded tracking-tight"
                        >
                          {{ item.badge }}
                        </span>
                      </div>
                      <div
                        v-if="item.description"
                        class="text-xs text-muted-foreground line-clamp-1 mt-0.5 leading-snug pl-3 group-hover:text-foreground/80 transition-colors"
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
        <!-- <SfButton
          variant="secondary"
          size="sm"
          :to="navigationData.utilityNavigation.tourCta.url"
        >
          {{ navigationData.utilityNavigation.tourCta.label }}
        </SfButton> -->

        <SfButton
          variant="primary"
          size="md"
          @click="openModal('Demo Bidly Preconstruction CRM')"
        >
          {{ navigationData.utilityNavigation.freeTrialCta.label }}
        </SfButton>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <div class="lg:hidden flex items-center gap-2">
        <button
          type="button"
          class="p-2 text-muted-foreground hover:text-foreground rounded-lg focus:outline-none"
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

    <!-- Mobile Drawer -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden border-b border-border bg-card px-6 py-6 space-y-6 shadow-xl max-h-[80vh] overflow-y-auto"
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
              class="text-xs font-bold text-muted-foreground uppercase tracking-wider pt-2"
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
                class="text-[11px] font-bold text-brand-text uppercase"
              >
                {{ cat.categoryTitle }}
              </div>
              <NuxtLink
                v-for="(item, iIdx) in cat.items"
                :key="iIdx"
                :to="item.url"
                class="block text-sm font-semibold text-muted-foreground py-1.5 hover:text-brand-text"
                @click="isMobileMenuOpen = false"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-border flex flex-col gap-3">
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
