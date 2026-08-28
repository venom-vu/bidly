<script setup lang="ts">
import { crmBladesData } from "~/data/crm-blades";
import SfButton from "~/components/ui/SfButton.vue";
import SfBadge from "~/components/ui/SfBadge.vue";
import { useDemoModal } from "~/composables/useDemoModal";

const hero = crmBladesData.hero;
const { openModal } = useDemoModal();
</script>

<template>
  <section
    class="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-card to-background border-b border-border/80"
  >
    <div class="sf-container relative z-10">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center"
      >
        <!-- Left Column: Value Prop Content -->
        <div class="lg:col-span-7 space-y-6 text-left">
          <div class="inline-block">
            <span class="inline-flex items-center px-3 py-1 text-xs font-bold rounded-full bg-brand-soft text-primary">
              {{ hero.eyebrow }}
            </span>
          </div>

          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18]"
          >
            {{ hero.headlinePrefix }}
            <span class="text-primary block mt-1">
              {{ hero.headlineHighlight }}
            </span>
          </h1>

          <p
            class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-normal"
          >
            {{ hero.description }}
          </p>

          <!-- Action CTAs -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <SfButton
              variant="primary"
              size="lg"
              @click="openModal('Đăng ký Demo Giải pháp Bidly CRM 45 phút')"
            >
              <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                />
              </svg>
              {{ hero.primaryCta.label }}
            </SfButton>

            <SfButton variant="secondary" size="lg" :to="hero.secondaryCta.url">
              {{ hero.secondaryCta.label }}
            </SfButton>
          </div>

          <!-- Trust Badges -->
          <div
            class="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-muted-foreground border-t border-border/70"
          >
            <div class="flex items-center gap-2">
              <svg
                class="w-4 h-4 text-primary shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Trải nghiệm trực quan trên dữ liệu thật</span>
            </div>
            <div class="flex items-center gap-2">
              <svg
                class="w-4 h-4 text-primary shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Cơ sở dữ liệu độc lập 100%</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Hero Media Card with Clean Floating Badges -->
        <div class="lg:col-span-5 relative">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            <!-- Floating Pipeline Badge 1 -->
            <div
              class="absolute -top-4 -left-4 z-20 bg-card px-4 py-2.5 rounded-xl shadow-dropdown border border-border/80 flex items-center gap-3"
            >
              <span class="w-2.5 h-2.5 rounded-full bg-primary" />
              <div>
                <div
                  class="text-[10px] font-bold text-muted-foreground uppercase tracking-wider"
                >
                  Pipeline Hoạt Động
                </div>
                <div class="text-xs font-bold text-foreground tabular">
                  18 cơ hội · 3 chờ duyệt Go/No-Go
                </div>
              </div>
            </div>

            <!-- Floating Badge 2 -->
            <div
              class="absolute -bottom-4 -right-4 z-20 bg-card px-4 py-2.5 rounded-xl shadow-dropdown border border-border/80 flex items-center gap-2.5"
            >
              <div class="p-1.5 bg-brand-soft text-primary rounded-[4px]">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <div>
                <div
                  class="text-[10px] font-bold text-muted-foreground uppercase tracking-wider"
                >
                  Tender Workspace
                </div>
                <div class="text-xs font-bold text-primary tabular">
                  S4 → S5 · Bản final sẵn sàng
                </div>
              </div>
            </div>

            <!-- Media Preview Container -->
            <div
              class="relative rounded-xl overflow-hidden shadow-modal border border-border/60 group cursor-pointer aspect-[4/3] bg-muted"
              @click="openModal('Trải nghiệm Giải pháp Bidly CRM')"
            >
              <img
                :src="hero.media.imageUrl"
                alt="Giao diện trực quan Bidly CRM"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-brand-panel/75 via-transparent to-transparent flex items-center justify-center"
              >
                <div
                  class="w-14 h-14 rounded-full bg-card/95 text-primary shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-card transition-all"
                >
                  <svg
                    class="w-7 h-7 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold drop-shadow flex items-center justify-between"
              >
                <span>Khám phá mô hình Preconstruction CRM</span>
                <span class="text-brand font-bold text-[11px] underline"
                  >Xem demo ➔</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
