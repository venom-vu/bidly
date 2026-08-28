<script setup lang="ts">
import { pricingData } from "~/data/pricing";
import SfBadge from "~/components/ui/SfBadge.vue";
import SfButton from "~/components/ui/SfButton.vue";
import SfFaqAccordion from "~/components/blades/SfFaqAccordion.vue";
import SfContactPillars from "~/components/blades/SfContactPillars.vue";
import { useDemoModal } from "~/composables/useDemoModal";

useSeoMeta({
  title:
    "Bảng giá Bidly Preconstruction CRM: Pilot, Essential & Enterprise | Vtechcom",
  description:
    "Mô hình triển khai và bảng giá Bidly theo quy mô doanh nghiệp: từ Design Partner Pilot 35-60 triệu đến Enterprise on-prem. Tính phí theo doanh nghiệp, không tính theo số user.",
});

const { openModal } = useDemoModal();

const philosophies = [
  {
    title: "Tính phí theo thực thể doanh nghiệp (Instance)",
    desc: "Không tính theo số lượng người dùng nhằm khuyến khích 100% nhân sự liên phòng ban (Kinh doanh, Kỹ thuật, Đấu thầu, Dự toán, Pháp lý, Tài chính, Ban điều hành) cùng tham gia mà không phát sinh thêm chi phí.",
    accentColor: "var(--primary, #0176D3)",
  },
  {
    title: "Cơ sở dữ liệu độc lập 100%",
    desc: "Bảo vệ dữ liệu giá thầu và bí quyết quan hệ tối đa. Mỗi doanh nghiệp sở hữu cơ sở dữ liệu PostgreSQL riêng biệt, tuyệt đối không dùng chung database đa người thuê.",
    accentColor: "var(--brand, #00A1E0)",
  },
  {
    title: "Khấu trừ 100% chi phí Pilot",
    desc: "Toàn bộ chi phí gói Design Partner Pilot 8-10 tuần (35-60 triệu) được khấu trừ 100% vào hợp đồng thuê bao năm đầu tiên khi doanh nghiệp ký chính thức.",
    accentColor: "var(--stage-s8, #04844B)",
  },
];
</script>

<template>
  <div class="space-y-0">
    <!-- Pricing Header -->
    <section
      class="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-card to-background border-b border-border/80"
    >
      <div class="sf-container relative z-10 text-center max-w-4xl space-y-6">
        <div class="inline-block">
          <span class="inline-flex items-center px-3 py-1 text-xs font-bold rounded-full bg-brand-soft text-primary">
            BẢNG GIÁ TRIỂN KHAI
          </span>
        </div>

        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18]"
        >
          {{ pricingData.heading.split(':')[0] }}
          <span class="text-primary block mt-1">
            {{ pricingData.heading.includes(':') ? pricingData.heading.split(':')[1].trim() : 'Định Giá Theo Doanh Nghiệp' }}
          </span>
        </h1>

        <p
          class="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed"
        >
          {{ pricingData.subheading }}
        </p>

        <div class="pt-2 flex flex-wrap justify-center items-center gap-4">
          <SfButton
            variant="primary"
            size="lg"
            @click="openModal('Đăng ký tư vấn Gói Pilot')"
          >
            <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              />
            </svg>
            Tư vấn Gói Pilot 8-10 tuần
          </SfButton>
          <SfButton variant="secondary" size="lg" to="#faq">
            Câu hỏi thường gặp
          </SfButton>
        </div>

        <!-- Trust Badges Strip -->
        <div
          class="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-muted-foreground border-t border-border/70 max-w-xl mx-auto"
        >
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-primary inline-block shrink-0" />
            <span>Không giới hạn số lượng tài khoản</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-600 inline-block shrink-0" />
            <span>Khấu trừ 100% chi phí thí điểm</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Philosophies -->
    <section class="py-16 md:py-20 bg-card border-b border-border/80">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Định Giá Minh Bạch Theo Thực Thể Doanh Nghiệp
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            Không đếm người dùng, không giới hạn phòng ban. Khuyến khích toàn bộ tổ chức cùng tham gia số hóa.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          <div
            v-for="(phil, pIdx) in philosophies"
            :key="pIdx"
            class="sf-card group bg-card border border-border/70 rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col justify-between p-6 sm:p-8 space-y-4"
          >
            <div class="space-y-3">
              <div class="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-primary">
                <span
                  class="w-6 h-6 rounded-full bg-brand-soft text-primary flex items-center justify-center font-bold text-xs tabular"
                >
                  0{{ pIdx + 1 }}
                </span>
                <span class="tracking-wide">{{ phil.title }}</span>
              </div>
              <p
                class="text-sm text-muted-foreground leading-relaxed font-normal"
              >
                {{ phil.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Cards Grid -->
    <section class="py-16 md:py-24 bg-background border-b border-border/80">
      <div class="sf-container space-y-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          <div
            v-for="tier in pricingData.tiers"
            :id="tier.id"
            :key="tier.id"
            class="sf-card group rounded-xl flex flex-col justify-between transition-all duration-300 overflow-hidden relative border"
            :class="[
              tier.popular
                ? 'shadow-modal bg-card scale-[1.03] z-10 border-primary ring-1 ring-primary'
                : 'shadow-card bg-card border-border/70 hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-1'
            ]"
          >
            <!-- Popular Badge -->
            <div
              v-if="tier.popular"
              class="absolute top-4 right-4"
            >
              <span
                class="bg-primary text-primary-foreground text-[10.5px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-sm select-none"
              >
                Khuyến nghị
              </span>
            </div>

            <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div class="space-y-6">
                <div>
                  <div
                    v-if="tier.badge"
                    class="text-[11px] font-bold uppercase tracking-widest text-primary mb-1.5"
                  >
                    {{ tier.badge }}
                  </div>
                  <h3 class="text-2xl font-extrabold text-foreground tracking-tight">
                    {{ tier.name }}
                  </h3>
                  <p
                    class="text-xs sm:text-sm text-muted-foreground mt-2 min-h-[36px] font-normal leading-relaxed"
                  >
                    {{ tier.description }}
                  </p>
                </div>

                <!-- Price Display -->
                <div class="py-4 border-y border-border/70">
                  <div class="flex items-baseline gap-1">
                    <span
                      class="text-3xl sm:text-4xl font-extrabold text-foreground tabular tracking-tight"
                    >
                      {{ tier.price }}
                    </span>
                  </div>
                  <div class="text-xs text-muted-foreground mt-1 tabular font-medium">
                    {{ tier.period }}
                  </div>
                </div>

                <!-- Features List -->
                <div class="space-y-3">
                  <div
                    class="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Tính năng bao gồm:
                  </div>
                  <ul class="space-y-3">
                    <li
                      v-for="(feat, fIdx) in tier.features"
                      :key="fIdx"
                      class="flex items-start gap-2.5 text-xs sm:text-sm text-foreground font-medium leading-relaxed"
                    >
                      <svg
                        class="w-4 h-4 text-primary shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>{{ feat }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- CTA Button -->
              <div class="pt-6">
                <SfButton
                  v-if="tier.ctaUrl === '#demo'"
                  :variant="tier.ctaVariant"
                  size="lg"
                  block
                  @click="openModal(`Đăng ký tư vấn gói: ${tier.name}`)"
                >
                  {{ tier.ctaLabel }}
                </SfButton>
                <SfButton
                  v-else
                  :variant="tier.ctaVariant"
                  size="lg"
                  :to="tier.ctaUrl"
                  block
                >
                  {{ tier.ctaLabel }}
                </SfButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enterprise Tier Section -->
    <section id="enterprise" class="py-12 md:py-16 bg-card border-b border-border/80">
      <div class="sf-container">
        <div
          class="sf-card group bg-card border border-border/70 p-8 sm:p-10 lg:p-12 rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto"
        >
          <div class="space-y-3 max-w-3xl">
            <div class="flex items-center gap-2">
              <span
                class="text-xs font-bold uppercase tracking-wider text-primary"
              >
                On-premise / Private Cloud
              </span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug">
              {{ pricingData.enterpriseTier.heading }}
            </h3>
            <p class="text-sm text-muted-foreground leading-relaxed font-normal">
              {{ pricingData.enterpriseTier.description }}
            </p>
          </div>
          <div class="shrink-0 w-full lg:w-auto">
            <SfButton
              variant="primary"
              size="lg"
              class="w-full sm:w-auto"
              @click="openModal('Tư vấn Gói Enterprise On-premise')"
            >
              {{ pricingData.enterpriseTier.ctaLabel }}
            </SfButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Plans Section -->
    <section
      id="pilot-details"
      class="py-16 md:py-24 bg-background border-b border-border/80"
    >
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            {{ pricingData.successPlans.heading }}
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            Đội ngũ chuyên gia Vtechcom trực tiếp hỗ trợ chuẩn hóa quy trình và đào tạo chuyển giao công nghệ.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          <div
            v-for="(plan, pIdx) in pricingData.successPlans.plans"
            :key="pIdx"
            class="sf-card group bg-card border border-border/70 rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col justify-between p-6 sm:p-8 space-y-6"
          >
            <div class="space-y-3">
              <h3 class="text-lg sm:text-xl font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                {{ plan.name }}
              </h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                {{ plan.description }}
              </p>
            </div>
            <div class="text-xs font-bold text-primary pt-3 border-t border-border/70">
              {{ plan.included }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom FAQ -->
    <div id="faq">
      <SfFaqAccordion />
    </div>

    <!-- Bottom Contact Blade -->
    <SfContactPillars />
  </div>
</template>

