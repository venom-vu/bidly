<script setup lang="ts">
import { crmBladesData } from "~/data/crm-blades";
import SfButton from "~/components/ui/SfButton.vue";
import { useDemoModal } from "~/composables/useDemoModal";

const hero = crmBladesData.hero;
const { openModal } = useDemoModal();
</script>

<template>
  <!--
    Salesforce Marquee Blade — theme_variant: "light"
    Nền trắng thuần, layout 2 cột (7/5), heading navy #032D60
    Tham chiếu: sf/marquee blade trên salesforce.com/ap/crm/
  -->
  <section
    class="relative pt-14 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-white sf-section-border"
    style="
      background-image: url(&quot;/images/hero-bg.jpg&quot;);
      background-size: cover;
      background-position: center top;
    "
  >
    <!-- Overlay nhẹ để đảm bảo legibility trên bg image -->
    <div class="absolute inset-0 bg-white/85" aria-hidden="true" />

    <div class="sf-container relative z-10">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center"
      >
        <!-- Left Column: Value Prop Content (7 cols) -->
        <div class="lg:col-span-7 space-y-7 text-left">
          <!-- Eyebrow pill — Salesforce style -->
          <div>
            <span class="sf-eyebrow">{{ hero.eyebrow }}</span>
          </div>

          <!-- H1 — Salesforce uses large bold navy text, partial blue highlight -->
          <h1
            class="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-foreground tracking-tight leading-[1.15]"
          >
            {{ hero.headlinePrefix }}
            <strong class="text-primary block mt-1 font-extrabold">
              {{ hero.headlineHighlight }}
            </strong>
          </h1>

          <!-- Description — Salesforce uses 18px, muted color -->
          <p
            class="text-base sm:text-[1.0625rem] lg:text-lg text-muted-foreground leading-relaxed max-w-xl"
            style="color: #444"
          >
            {{ hero.description }}
          </p>

          <!-- CTA Buttons — Salesforce: primary solid blue + secondary outline -->
          <div class="flex flex-wrap items-center gap-3 pt-1">
            <SfButton
              variant="primary"
              size="lg"
              @click="openModal('Đăng ký Demo Giải pháp Bidly CRM 45 phút')"
            >
              <svg
                class="w-4 h-4 mr-0.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
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

          <!-- Trust signals — Salesforce style horizontal row -->
          <div
            class="flex flex-wrap items-center gap-5 pt-3 border-t border-black/8 text-xs font-semibold"
            style="color: #54698d"
          >
            <div class="flex items-center gap-2">
              <svg
                class="w-4 h-4 shrink-0"
                style="color: #04844b"
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
                class="w-4 h-4 shrink-0"
                style="color: #04844b"
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
            <div class="flex items-center gap-2">
              <svg
                class="w-4 h-4 shrink-0"
                style="color: #04844b"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Triển khai on-prem theo khách hàng</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Hero Media (5 cols) -->
        <div class="lg:col-span-5 relative">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            <!-- Floating card — Pipeline badge (top-left) -->
            <div
              class="absolute -top-5 -left-4 z-20 bg-white px-3.5 py-2.5 rounded-xl border border-black/8 flex items-center gap-3 animate-float"
              style="box-shadow: 0 4px 16px rgba(3, 45, 96, 0.1)"
            >
              <span
                class="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style="background: #0176d3"
              />
              <div>
                <div
                  class="text-[10px] font-bold uppercase tracking-wider"
                  style="color: #54698d"
                >
                  Pipeline Hoạt Động
                </div>
                <div
                  class="text-[11.5px] font-bold tabular"
                  style="color: #032d60"
                >
                  18 cơ hội · 3 chờ duyệt
                </div>
              </div>
            </div>

            <!-- Floating card — Tender badge (bottom-right) -->
            <div
              class="absolute -bottom-5 -right-4 z-20 bg-white px-3.5 py-2.5 rounded-xl border border-black/8 flex items-center gap-2.5"
              style="box-shadow: 0 4px 16px rgba(3, 45, 96, 0.1)"
            >
              <div
                class="p-1.5 rounded-lg shrink-0"
                style="background: #e8f4fd"
              >
                <svg
                  class="w-4 h-4"
                  style="color: #0176d3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <div>
                <div
                  class="text-[10px] font-bold uppercase tracking-wider"
                  style="color: #54698d"
                >
                  Tender Workspace
                </div>
                <div class="text-[11.5px] font-bold" style="color: #0176d3">
                  S4 → S5 · Bản final sẵn sàng
                </div>
              </div>
            </div>

            <!-- Media container — Salesforce uses 16:9 ratio with rounded corners -->
            <div
              class="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/3]"
              style="
                box-shadow:
                  0 20px 48px rgba(3, 45, 96, 0.18),
                  0 4px 16px rgba(3, 45, 96, 0.1);
              "
              @click="openModal('Trải nghiệm Giải pháp Bidly CRM')"
            >
              <img
                :src="hero.media.imageUrl"
                alt="Giao diện trực quan Bidly CRM — Preconstruction Pipeline"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="eager"
              />
              <!-- Gradient overlay bottom — Salesforce style -->
              <div
                class="absolute inset-0 flex items-center justify-center"
                style="
                  background: linear-gradient(
                    to top,
                    rgba(3, 45, 96, 0.6) 0%,
                    transparent 60%
                  );
                "
              >
                <!-- Play button — clean white circle -->
                <div
                  class="w-16 h-16 rounded-full bg-white text-primary shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
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
              <!-- Bottom text bar -->
              <div
                class="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold drop-shadow flex items-center justify-between"
              >
                <span>Khám phá mô hình Preconstruction CRM</span>
                <span
                  class="font-bold text-[11px] underline underline-offset-2"
                  style="color: #00a1e0"
                  >Xem demo →</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
