<script setup lang="ts">
import SfBadge from "~/components/ui/SfBadge.vue";
import SfButton from "~/components/ui/SfButton.vue";
import SfContactPillars from "~/components/blades/SfContactPillars.vue";
import SfFaqAccordion from "~/components/blades/SfFaqAccordion.vue";
import { useDemoModal } from "~/composables/useDemoModal";

useSeoMeta({
  title: "Tính năng Bidly: 7 Mô-đun Lõi & Nền Tảng Bảo Mật | Vtechcom",
  description:
    "Khám phá 7 mô-đun lõi của Bidly Preconstruction CRM: Project Intelligence, Pursuit & Go/No-Go, Stakeholder Map, Tender Workspace, Capability Library, Dashboard & Handover cùng nền tảng bảo mật on-premise single-tenant.",
});

const { openModal } = useDemoModal();

const modules = [
  {
    id: "project-intel",
    title: "M1 · Project Intelligence",
    eyebrow: "THU THẬP & SÀNG LỌC TÍN HIỆU DỰ ÁN",
    accentColor: "var(--stage-s0, #64748B)",
    description:
      "Thu thập tín hiệu dự án từ KCN, FDI, báo thầu và đối tác. Tự động kiểm tra trùng (dedup), gán owner và phân loại ngành. Project Inbox tập trung thay thế hoàn toàn Zalo và bảng tính phân mảnh.",
    features: [
      "Import dữ liệu từ Excel với giao diện preview và mapping cột linh hoạt",
      "Tự động kiểm tra trùng lặp (dedup) theo tên dự án, địa điểm, chủ đầu tư",
      "Phân loại chi tiết theo KCN, nguồn vốn FDI và ngành công nghiệp",
      "Cảnh báo tự động khi tín hiệu dự án chưa được phân loại hoặc bỏ quên",
      "Quản lý danh sách Tổ chức (Account) và Người liên hệ (Contact)",
    ],
  },
  {
    id: "gonogo",
    title: "M2 · Pursuit & Go/No-Go Scorecard",
    eyebrow: "QUẢN TRỊ PIPELINE & PHÊ DUYỆT CÓ CĂN CỨ",
    accentColor: "var(--stage-s2, #7F27FF)",
    description:
      "Pipeline 9 giai đoạn cố định với 5 cổng cứng ở máy chủ. Scorecard Go/No-Go tại S2 với 6 tiêu chí có trọng số (năng lực, quan hệ, giá, biên lợi nhuận, rủi ro, nguồn lực). Điểm 0-100 được tính lại chuẩn xác tại thời điểm duyệt.",
    features: [
      "State machine chuẩn hóa với lịch sử chuyển bước StageHistory bất biến",
      "5 cổng cứng (hard gates) bắt buộc người duyệt và lý do ở tầng máy chủ",
      "Scorecard chấm điểm 0-100 theo tiêu chí trọng số cấu hình được",
      "Cơ chế No-Go tự động điều hướng sang S7 (No-bid) bắt buộc ghi lý do",
      "Quản lý quay lại bước (Correction) có lưu vết và bắt buộc nhập lý do",
      "Tự động tính toán Pipeline có trọng số (Estimated Value × Probability)",
    ],
  },
  {
    id: "stakeholder",
    title: "M3 · Stakeholder & Touchpoint Map",
    eyebrow: "BẢN ĐỒ BÊN LIÊN QUAN THEO DỰ ÁN",
    accentColor: "var(--stage-s3, #0D9488)",
    description:
      "Bản đồ bên liên quan theo dự án (PursuitContact), phân biệt với chức danh cố định. Gán 4 vai trò: Decision Maker, Influencer, Champion, Gatekeeper kèm mức độ ảnh hưởng và thái độ tiếp xúc.",
    features: [
      "Gán vai trò bên liên quan linh hoạt theo từng dự án cụ thể (PursuitContact)",
      "Theo dõi mức độ ảnh hưởng và mức độ ủng hộ của từng cá nhân",
      "Ghi nhận nhật ký cuộc họp, site visit, khảo sát mặt bằng và biên bản",
      "Bảo vệ tài sản mạng lưới quan hệ của tổ chức khi nhân sự thay đổi",
      "Gắn nhiệm vụ (Task) và việc tiếp theo (Next Action) theo từng stakeholder",
    ],
  },
  {
    id: "tender",
    title: "M4 · Tender Workspace (Phòng Thầu Số)",
    eyebrow: "PHỐI HỢP LIÊN PHÒNG BAN & KIỂM SOÁT BẢN FINAL",
    accentColor: "var(--stage-s4, #0284C7)",
    description:
      "Không gian số theo từng vòng thầu (RFI, RFQ, RFP, Đấu lại): phân rã checklist 5 phòng ban, theo dõi hạn nộp, quản lý nhật ký làm rõ và chuỗi phiên bản. Bất biến 1 bản final duy nhất mỗi vòng.",
    features: [
      "Theo dõi mốc thời gian (milestones) và đồng hồ đếm ngược hạn nộp",
      "Checklist hồ sơ liên phòng ban với trạng thái cập nhật thời gian thực",
      "Quản lý chuỗi phiên bản hồ sơ dự thầu (revision chain) qua supersedesId",
      "Bất biến máy chủ: Tối đa một bản nộp Final duy nhất trong một vòng thầu",
      "Con đường duy nhất sang S5 là ghi nhận nộp bản Final kèm bằng chứng",
      "Đấu lại tạo TenderRound mới, giữ nguyên toàn bộ lịch sử đấu thầu cũ",
    ],
  },
  {
    id: "capability",
    title: "M5 · Capability Library (Thư Viện Năng Lực)",
    eyebrow: "KHO TRI THỨC NĂNG LỰC DOANH NGHIỆP",
    accentColor: "var(--stage-s6, #4F46E5)",
    description:
      "Thư viện số hóa toàn bộ năng lực: kho dự án tiêu biểu (tonnage thép, diện tích, MEP), hồ sơ chuyên gia, thiết bị thi công và chứng chỉ. Tự động cảnh báo khi chứng chỉ sắp hết hạn.",
    features: [
      "Thư viện dự án tiêu biểu gắn tag theo ngành, loại công trình và địa phương",
      "Hồ sơ nhân sự, chứng chỉ chuyên môn và CV kỹ sư định dạng chuẩn",
      "Danh mục máy móc, thiết bị thi công kèm tình trạng sẵn sàng và vị trí",
      "Hệ thống cảnh báo tự động khi chứng chỉ năng lực sắp hết hạn",
      "Tìm kiếm toàn văn (full-text search) nhanh chóng phục vụ lập hồ sơ thầu",
      "Tri thức năng lực thuộc về tài sản tổ chức, không mất đi khi nhân sự rời đi",
    ],
  },
  {
    id: "dashboard",
    title: "M6 · Dashboard Điều Hành & Gói Bàn Giao (S8)",
    eyebrow: "CONTROL TOWER & BÀN GIAO SANG THI CÔNG",
    accentColor: "var(--stage-s8, #04844B)",
    description:
      "Control Tower điều hành toàn cảnh: pipeline trọng số, cơ hội rủi ro, deadline heatmap và phân tích Win/Loss. Gói bàn giao S8 chuẩn hóa cam kết thương mại, giả định và rủi ro chuyển giao sang ERP.",
    features: [
      "Control Tower với 4 chỉ số điều hành then chốt tính toán theo thời gian thực",
      "Deadline heatmap cảnh báo các gói thầu sắp đến hạn nộp trong 7-14-30 ngày",
      "Báo cáo chất lượng dữ liệu (Data Quality Score) nhắc nhở thông tin còn thiếu",
      "Phân tích Win Rate chi tiết theo phân khúc ngành, địa bàn và đối thủ",
      "Gói bàn giao Handover Pack (S8) chuẩn hóa dữ liệu trước khi chuyển giao ERP",
      "Nhật ký kiểm toán hệ thống (Audit Log) ghi nhận toàn bộ hoạt động nhạy cảm",
    ],
  },
  {
    id: "platform-sec",
    title: "M7 · Nền Tảng & Bảo Mật Dữ Liệu Riêng Biệt",
    eyebrow: "AN TOÀN THÔNG TIN CẤP DOANH NGHIỆP",
    accentColor: "var(--brand-panel, #032D60)",
    description:
      "Kiến trúc On-premise Single-tenant hoặc Private Cloud. Mỗi doanh nghiệp sở hữu database PostgreSQL độc lập, tuyệt đối không chia sẻ dữ liệu giá thầu. Phân quyền RBAC 5 vai trò và audit log append-only.",
    features: [
      "Cơ sở dữ liệu PostgreSQL độc lập cho từng khách hàng (Database Isolation)",
      "Phân quyền RBAC 5 vai trò (CEO, BD Director, BD, Tender Lead, Admin) ở máy chủ",
      "Nhật ký kiểm toán (Audit Log) ghi nhận append-only đồng thời trong transaction",
      "Khoá lạc quan (Optimistic Concurrency) qua trường version chống ghi đè dữ liệu",
      "Mã hóa đường truyền TLS và mã hóa lưu trữ tài liệu nhạy cảm",
      "Tuân thủ Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15 và Nghị định 356/2025/NĐ-CP",
    ],
  },
];
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Header with Ambient Glow -->
    <section
      class="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden sf-gradient-bg border-b border-border"
    >
      <!-- Background subtle ambient glow -->
      <div
        class="absolute -top-32 -right-32 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        class="absolute top-1/2 -left-32 w-80 h-80 bg-foreground/5 rounded-full blur-3xl pointer-events-none"
      />

      <div class="sf-container relative z-10 text-center max-w-4xl space-y-6">
        <div class="inline-block">
          <SfBadge variant="green" size="md"> BỘ TÍNH NĂNG TOÀN DIỆN </SfBadge>
        </div>
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]"
        >
          Tính Năng Chuyên Ngành
          <span class="text-primary block mt-1">
            Bidly Preconstruction CRM
          </span>
        </h1>
        <p
          class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal"
        >
          Hệ thống 7 mô-đun lõi và kiến trúc bảo mật dữ liệu riêng biệt bao phủ
          trọn vẹn vòng đời thầu từ tiếp nhận tín hiệu đến bàn giao thi công.
        </p>
      </div>
    </section>

    <!-- 7 Modules Detail Sections -->
    <section class="py-16 md:py-24 bg-card border-b border-border">
      <div class="sf-container space-y-20">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <div class="text-xs font-bold uppercase tracking-wider text-primary">
            7 MÔ-ĐUN LÕI (M1 - M7)
          </div>
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Chi Tiết Toàn Bộ Tính Năng Lõi
          </h2>
          <p
            class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto"
          >
            Được xây dựng chuyên biệt cho các phòng ban tham gia vào quá trình
            theo đuổi thầu xây dựng công nghiệp.
          </p>
        </div>

        <div
          v-for="(mod, mIdx) in modules"
          :key="mod.id"
          :id="mod.id"
          :class="[
            'grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-10',
            mIdx > 0 ? 'border-t border-border/80' : '',
          ]"
        >
          <!-- Left Info Column -->
          <div class="lg:col-span-6 space-y-4">
            <div
              class="text-xs font-bold text-primary uppercase tracking-widest"
            >
              {{ mod.eyebrow }}
            </div>
            <h3
              class="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight tracking-tight"
            >
              {{ mod.title }}
            </h3>
            <p
              class="text-muted-foreground leading-relaxed text-sm sm:text-base font-normal"
            >
              {{ mod.description }}
            </p>
            <div class="pt-2">
              <button
                type="button"
                class="sf-link text-sm font-bold cursor-pointer"
                @click="openModal(`Đăng ký trải nghiệm mô-đun: ${mod.title}`)"
              >
                Trải nghiệm mô-đun này trong bản Demo ➔
              </button>
            </div>
          </div>

          <!-- Right Features Box with Top Accent -->
          <div
            class="lg:col-span-6 sf-card rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between border border-border/70"
          >
            <div
              class="h-2 w-full shrink-0"
              :style="{
                backgroundColor: mod.accentColor || 'var(--primary, #0176D3)',
              }"
            />
            <div class="p-6 sm:p-8 space-y-4">
              <div
                class="text-xs font-bold uppercase tracking-wider text-primary"
              >
                Tính năng then chốt:
              </div>
              <ul class="space-y-3">
                <li
                  v-for="(feat, fIdx) in mod.features"
                  :key="fIdx"
                  class="flex items-start gap-3 text-xs sm:text-sm text-foreground font-medium leading-relaxed"
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
        </div>
      </div>
    </section>

    <!-- Bottom Contact & FAQ Blades -->
    <SfContactPillars />
    <SfFaqAccordion />
  </div>
</template>
