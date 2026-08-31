<script setup lang="ts">
import SfBadge from "~/components/ui/SfBadge.vue";
import SfButton from "~/components/ui/SfButton.vue";
import SfContactPillars from "~/components/blades/SfContactPillars.vue";
import { useDemoModal } from "~/composables/useDemoModal";

useSeoMeta({
  title:
    "Giải pháp Bidly theo ngành: EPC, MEP, Kết cấu thép | Preconstruction CRM",
  description:
    "Giải pháp quản trị đấu thầu chuyên biệt cho tổng thầu EPC công nghiệp, nhà thầu MEP/PCCC và kết cấu thép tại Việt Nam. 3 mẫu nghiệp vụ chuẩn hóa và mô hình triển khai on-premise.",
});

const { openModal } = useDemoModal();

const segments = [
  {
    id: "epc",
    badge: "PHÂN KHÚC ƯU TIÊN P1 · TEMPLATE #1",
    title: "Tổng thầu EPC & Xây dựng Công nghiệp",
    subtitle:
      "Quy mô 50 - 500 nhân sự · Hợp đồng giá trị lớn · Nhiều phòng ban tham gia",
    description:
      "Tổng thầu EPC công nghiệp quản lý hàng chục dự án KCN/FDI, điều phối nhịp nhàng 5 phòng ban và bảo vệ tri thức quan hệ khi nhân sự biến động.",
    problems: [
      "Dữ liệu cơ hội bị phân mảnh giữa nhiều phòng ban: không ai có bức tranh toàn cảnh về tiến độ và rủi ro.",
      "Quyết định Go/No-Go theo cảm tính hoặc áp lực doanh số: dẫn tới dàn trải nguồn lực vào các dự án rủi ro cao.",
      "Hồ sơ dự thầu gửi nhầm phiên bản do phối hợp qua Zalo/email không có cơ chế khóa máy chủ.",
    ],
    solutions: [
      "Pipeline 9 giai đoạn chuẩn hóa với Scorecard Go/No-Go định lượng 6 tiêu chí có trọng số 0-100.",
      "Tender Workspace phân rã checklist 5 phòng ban với trạng thái cập nhật thời gian thực.",
      "Capability Library tập trung: kho dự án tiêu biểu, hồ sơ chuyên gia, chứng chỉ không thất lạc khi nhân sự nghỉ việc.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "mep",
    badge: "PHÂN KHÚC ƯU TIÊN P1 · TEMPLATE #2",
    title: "Nhà thầu Cơ điện MEP, PCCC & Xử lý nước",
    subtitle:
      "Quy mô 20 - 150 nhân sự · Theo đuổi nhiều gói thầu song song · Phụ thuộc quan hệ",
    description:
      "Nhà thầu MEP theo đuổi hàng chục gói thầu song song, phụ thuộc mạng lưới quan hệ CĐT/Tổng thầu. Chu kỳ ngắn và số lượng nhiều đòi hỏi kiểm soát hạn chót nghiêm ngặt.",
    problems: [
      "Theo dõi nhiều gói thầu song song với các hạn nộp khác nhau: dễ bỏ sót đầu mục và xung đột nguồn lực.",
      "Mạng lưới quan hệ nằm trong danh bạ cá nhân: mỗi lần thầu phải hỏi lại ai là người có quyền quyết định.",
      "Hồ sơ năng lực và chứng chỉ kỹ thuật cần cập nhật liên tục nhưng không có cảnh báo hết hạn.",
    ],
    solutions: [
      "Dashboard Deadline Heatmap: nhìn ngay các gói thầu sắp đến hạn trong 7-14-30 ngày.",
      "Bản đồ Stakeholder Map theo ngữ cảnh dự án: ai là Decision Maker, Influencer, Champion cho từng gói thầu.",
      "Thư viện Capability Library tự động cảnh báo chứng chỉ sắp hết hạn và lọc nhanh theo chủng loại gói thầu.",
    ],
    imageUrl:
      "https://images.openai.com/static-rsc-4/UzhtlPgVi9tk17AuFMwaVEO634nkyxg171eDS7eBFJHMLxi4PtuFipdL6wJ1Un8ajC1Fzk_mEzamaW48TkB2GA9MOVi8rGV2a5jjnQwnR5BGFnEwlELbYymVY04W9QPFwoPpoJHMvX_j--pVwysqZSAtqr7kL6-TzjuaEVFlqhowRanhPQC4qthcGE3WUe9g?w=800&q=80",
  },
  {
    id: "steel",
    badge: "PHÂN KHÚC ƯU TIÊN P1 · TEMPLATE #3",
    title: "Kết cấu thép & Nhà thép tiền chế",
    subtitle:
      "Quy mô 30 - 200 nhân sự · Báo giá cạnh tranh · Quản lý RFQ vật tư",
    description:
      "Nhà thầu kết cấu thép cạnh tranh giá cao và biến động vật liệu lớn. Thư viện dự án thép tiêu biểu (tonnage, khẩu độ) là yếu tố quyết định niềm tin với CĐT FDI.",
    problems: [
      "Hồ sơ năng lực dự án thép tiêu biểu khó tổng hợp: thiếu thông số kỹ thuật chuẩn (tonnage, span) và ảnh chất lượng.",
      "Phối hợp thiết kế - kỹ thuật - thương mại trong giai đoạn chào giá thiếu hệ thống tập trung.",
      "Lịch sử báo giá và bài học thắng/thua không được ghi lại bài bản để tối ưu chiến lược giá.",
    ],
    solutions: [
      "Thư viện dự án thép chuẩn hóa: lưu trữ thông số tonnage, diện tích, khẩu độ, hình ảnh và hồ sơ nghiệm thu.",
      "Tender Workspace phối hợp thiết kế - thương mại chặt chẽ: quản lý mốc thời gian và tài liệu chào thầu.",
      "Phân tích Win/Loss chi tiết theo loại công trình, khu vực và đối thủ cạnh tranh để đúc rút bài học.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1562088997-ed2fbeef1cd6?w=800&q=80",
  },
];

const deploymentModels = [
  {
    name: "Design Partner Pilot",
    target: "Dành cho doanh nghiệp muốn kiểm chứng adoption",
    desc: "Triển khai có hỗ trợ đầy đủ 8-10 tuần trên dữ liệu thật. Chi phí khấu trừ 100% khi ký hợp đồng năm.",
    ctaUrl: "/crm/pricing#pilot",
    accentColor: "var(--primary, #0176D3)",
  },
  {
    name: "Private Cloud Managed",
    target: "Khuyến nghị cho Tổng thầu vừa & lớn",
    desc: "Database PostgreSQL riêng biệt, backup độc lập, Vtechcom vận hành và cam kết SLA 99.9%.",
    ctaUrl: "/crm/pricing#professional",
    accentColor: "var(--brand, #00A1E0)",
  },
  {
    name: "Enterprise On-premise",
    target: "Dành cho tập đoàn có chính sách IT nghiêm ngặt",
    desc: "Cài đặt trực tiếp trên máy chủ nội bộ hoặc Customer Cloud, tích hợp SSO doanh nghiệp, tùy biến sâu.",
    ctaUrl: "/crm/pricing#enterprise",
    accentColor: "var(--brand-panel, #032D60)",
  },
];
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Header — Salesforce marquee light blade -->
    <section
      class="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-white sf-section-border"
    >
      <div
        class="sf-container relative z-10 text-center max-w-4xl mx-auto space-y-6"
      >
        <div>
          <span class="sf-eyebrow">GIẢI PHÁP CHUYÊN BIỆT THEO PHÂN KHÚC</span>
        </div>
        <h1
          class="text-3xl sm:text-4xl lg:text-[2.875rem] xl:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]"
        >
          Giải Pháp Bidly Cho Từng
          <strong class="text-primary block mt-1 font-extrabold">
            Phân Khúc Tổng Thầu Xây Dựng
          </strong>
        </h1>
        <p
          class="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          style="color: #54698d"
        >
          Mỗi phân khúc có quy trình đặc thù. Bidly xây dựng 3 mẫu nghiệp vụ
          chuẩn (EPC, MEP, Thép) giúp triển khai nhanh và hiệu quả tức thì.
        </p>
        <div class="pt-2 flex flex-wrap justify-center items-center gap-4">
          <SfButton
            variant="primary"
            size="lg"
            @click="openModal('Đặt lịch Demo Giải pháp Bidly theo ngành')"
          >
            <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              />
            </svg>
            Đặt lịch Demo theo ngành của bạn
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/features">
            Xem 7 Mô-đun Lõi
          </SfButton>
        </div>

        <!-- Trust Badges Strip -->
        <div
          class="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-muted-foreground border-t border-border/70 max-w-xl mx-auto"
        >
          <div class="flex items-center gap-2">
            <span
              class="w-2 h-2 rounded-full bg-primary inline-block shrink-0"
            />
            <span>3 Mẫu nghiệp vụ chuẩn hóa</span>
          </div>
          <div class="flex items-center gap-2">
            <span
              class="w-2 h-2 rounded-full bg-emerald-600 inline-block shrink-0"
            />
            <span>Triển khai thí điểm 8-10 tuần</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Segments Details Section — Salesforce light_gradient blade -->
    <section class="py-16 md:py-24 sf-section-gradient sf-section-border">
      <div class="sf-container space-y-24">
        <div
          v-for="(seg, sIdx) in segments"
          :key="seg.id"
          :id="seg.id"
          class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <!-- Left Column -->
          <div
            :class="[
              'lg:col-span-6 space-y-6',
              sIdx % 2 === 1 ? 'lg:order-2' : '',
            ]"
          >
            <div>
              <div
                class="text-xs font-bold text-primary uppercase tracking-widest mb-2"
              >
                {{ seg.badge }}
              </div>
              <h2
                class="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug"
              >
                {{ seg.title }}
              </h2>
              <div
                class="text-xs font-semibold text-muted-foreground mt-1.5 tabular"
              >
                {{ seg.subtitle }}
              </div>
            </div>
            <p
              class="leading-relaxed text-sm sm:text-base"
              style="color: #54698d"
            >
              {{ seg.description }}
            </p>

            <!-- Problems -->
            <div
              class="p-4 sm:p-5 rounded-xl bg-destructive/5 space-y-2.5 border border-destructive/10"
            >
              <div
                class="text-xs font-bold uppercase tracking-wider text-destructive flex items-center gap-1.5"
              >
                <svg
                  class="w-4 h-4 text-destructive shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Bài toán thách thức:</span>
              </div>
              <ul class="space-y-2">
                <li
                  v-for="problem in seg.problems"
                  :key="problem"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal"
                >
                  <span class="text-destructive font-bold">•</span>
                  <span>{{ problem }}</span>
                </li>
              </ul>
            </div>

            <!-- Solutions -->
            <div
              class="p-4 sm:p-5 rounded-xl bg-brand-soft/70 space-y-2.5 border border-brand/20"
            >
              <div
                class="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5"
              >
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
                <span>Giải pháp với Bidly:</span>
              </div>
              <ul class="space-y-2">
                <li
                  v-for="sol in seg.solutions"
                  :key="sol"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-foreground font-semibold leading-relaxed"
                >
                  <span class="text-primary font-bold">✓</span>
                  <span>{{ sol }}</span>
                </li>
              </ul>
            </div>

            <div class="pt-2">
              <SfButton
                variant="primary"
                size="md"
                @click="openModal(`Đăng ký Demo Giải pháp: ${seg.title}`)"
              >
                Đăng ký Demo chuyên biệt
              </SfButton>
            </div>
          </div>

          <!-- Right Image Column -->
          <div :class="['lg:col-span-6', sIdx % 2 === 1 ? 'lg:order-1' : '']">
            <div
              class="sf-card rounded-xl overflow-hidden border border-border/70 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-500 aspect-[4/3] bg-muted group"
            >
              <img
                :src="seg.imageUrl"
                :alt="seg.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Deployment Models Selection -->
    <section class="py-16 md:py-24 bg-background border-b border-border/80">
      <div class="sf-container space-y-12 md:space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Lựa Chọn Mô Hình Triển Khai Linh Hoạt
          </h2>
          <p
            class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto"
          >
            Từ thí điểm nhanh 8-10 tuần đến cài đặt trên máy chủ riêng của doanh
            nghiệp với độ bảo mật tuyệt đối.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
        >
          <div
            v-for="(mod, mIdx) in deploymentModels"
            :key="mIdx"
            class="sf-card group bg-card border border-border/70 rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col justify-between p-6 sm:p-8 space-y-6"
          >
            <div class="space-y-3">
              <h3
                class="text-xl font-extrabold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors"
              >
                {{ mod.name }}
              </h3>
              <div class="text-xs font-bold text-primary">{{ mod.target }}</div>
              <p
                class="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal"
              >
                {{ mod.desc }}
              </p>
            </div>
            <div class="pt-2">
              <SfButton variant="secondary" size="md" :to="mod.ctaUrl" block>
                Xem chi tiết &amp; Báo giá
              </SfButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Contact Blade -->
    <SfContactPillars />
  </div>
</template>
