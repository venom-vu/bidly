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
      "Triển khai độc lập tại máy chủ riêng (On-premise) hoặc Đám mây riêng (Private Cloud). Mỗi doanh nghiệp sở hữu cơ sở dữ liệu hoàn toàn biệt lập, tuyệt đối không chia sẻ dữ liệu giá thầu. Phân quyền 5 vai trò và tự động lưu vết nhật ký minh bạch.",
    features: [
      "Cơ sở dữ liệu độc lập cho từng khách hàng (Bảo mật tối đa)",
      "Phân quyền chặt chẽ 5 vai trò (Tổng Giám Đốc, Giám Đốc Kinh Doanh, BD, Trưởng phòng Đấu thầu, Quản trị viên)",
      "Nhật ký kiểm toán lưu vết vĩnh viễn mọi thao tác người dùng",
      "Tự động chống ghi đè dữ liệu khi nhiều phòng ban cùng thao tác",
      "Mã hóa đường truyền TLS và mã hóa lưu trữ tài liệu nhạy cảm",
      "Tuân thủ Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15 và Nghị định 356/2025/NĐ-CP",
    ],
  },
];
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Header — Salesforce marquee light blade -->
    <section
      class="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-white sf-section-border"
    >
      <div class="sf-container relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <div>
          <span class="sf-eyebrow">7 MÔ-ĐUN LÕI TOÀN DIỆN</span>
        </div>
        <h1
          class="text-3xl sm:text-4xl lg:text-[2.875rem] xl:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]"
        >
          Tính Năng Chuyên Biệt Cho
          <strong class="text-primary block mt-1 font-extrabold">
            Tổng Thầu Xây Dựng Công Nghiệp
          </strong>
        </h1>
        <p
          class="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          style="color: #54698d;"
        >
          Bao phủ trọn vẹn vòng đời theo đuổi thầu: từ thu thập tín hiệu KCN/FDI đến phê duyệt Go/No-Go, phòng thầu số và bàn giao thi công.
        </p>

        <!-- Quick Jump Links — Salesforce context nav pills -->
        <div class="flex flex-wrap justify-center items-center gap-2 pt-2">
          <a
            v-for="mod in modules"
            :key="mod.id"
            :href="`#${mod.id}`"
            class="px-3.5 py-1.5 text-xs font-bold rounded-full bg-white text-foreground hover:text-primary transition-colors"
            style="border: 1px solid rgba(0,0,0,0.12); box-shadow: 0 1px 4px rgba(3,45,96,0.06);"
          >
            {{ mod.title.split('·')[0]?.trim() || mod.title }}
          </a>
        </div>
      </div>
    </section>

    <!-- 7 Modules Detail Sections — Salesforce light_gradient blade -->
    <section class="py-16 md:py-24 sf-section-gradient sf-section-border">
      <div class="sf-container space-y-20">
        <div
          v-for="(mod, mIdx) in modules"
          :key="mod.id"
          :id="mod.id"
          :class="[
            'grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-10',
            mIdx > 0 ? 'pt-12' : '',
          ]"
          :style="mIdx > 0 ? 'border-top: 1px solid rgba(0,0,0,0.07)' : ''"
        >
          <!-- Left Info Column -->
          <div class="lg:col-span-5 space-y-4">
            <div class="text-xs font-bold uppercase tracking-wider" style="color: #0176d3;">
              {{ mod.eyebrow }}
            </div>
            <h2
              class="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight tracking-tight"
            >
              {{ mod.title }}
            </h2>
            <p
              class="leading-relaxed text-sm sm:text-base"
              style="color: #54698d;"
            >
              {{ mod.description }}
            </p>
            <div class="pt-2">
              <button
                type="button"
                class="sf-link text-sm font-bold cursor-pointer inline-flex items-center gap-1.5"
                @click="openModal(`Đăng ký trải nghiệm mô-đun: ${mod.title}`)"
              >
                <span>Trải nghiệm mô-đun này trong bản Demo</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Right Features Card — Salesforce white shadow-only card -->
          <div
            class="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 space-y-5 transition-all duration-300 hover:-translate-y-1"
            style="
              box-shadow: 0 2px 8px rgba(3,45,96,0.06), 0 4px 20px rgba(3,45,96,0.04);
              border: 1px solid rgba(0,0,0,0.06);
            "
          >
            <div
              class="text-[11px] font-bold uppercase tracking-wider"
              style="color: #54698d;"
            >
              Tính năng then chốt:
            </div>
            <ul class="space-y-3.5">
              <li
                v-for="(feat, fIdx) in mod.features"
                :key="fIdx"
                class="flex items-start gap-3 text-xs sm:text-sm font-medium leading-relaxed"
                style="color: #181818;"
              >
                <span
                  class="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style="background: #e8f4fd;"
                >
                  <svg class="w-3.5 h-3.5" style="color: #0176d3;" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Contact & FAQ Blades -->
    <SfContactPillars />
    <SfFaqAccordion />
  </div>
</template>
