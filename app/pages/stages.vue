<script setup lang="ts">
import SfButton from "~/components/ui/SfButton.vue";
import SfContactPillars from "~/components/blades/SfContactPillars.vue";
import SfFaqAccordion from "~/components/blades/SfFaqAccordion.vue";
import { useDemoModal } from "~/composables/useDemoModal";

definePageMeta({
  alias: ["/9-giai-doan", "/features/stages", "/crm/stages"],
});

useSeoMeta({
  title: "Quy Trình 9 Giai Đoạn Cố Định (S0 - S8) | Bidly Preconstruction CRM",
  description:
    "Khám phá chi tiết 9 giai đoạn cố định trong vòng đời đấu thầu xây dựng công nghiệp từ tiếp nhận tín hiệu dự án đến bàn giao thi công, kiểm soát chuyển bước bằng State Machine và lưu vết kiểm toán bất biến.",
});

const { openModal } = useDemoModal();

const principles = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Bất biến 9 giai đoạn",
    desc: "Cấu hình template chỉ đổi nhãn và điều kiện; tuyệt đối không thêm/bớt stage làm sai lệch chuỗi pipeline.",
  },
  {
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "5 Cổng cứng kiểm soát",
    desc: "Bắt buộc quyết định phê duyệt và lý do lưu vết tại máy chủ trước khi chuyển bước, loại trừ việc lách cổng.",
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "Khóa lạc quan (Version)",
    desc: "Kiểm soát phiên bản qua trường version, chống hoàn toàn nguy cơ ghi đè dữ liệu khi nhiều phòng ban cùng làm thầu.",
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    title: "Audit Log append-only",
    desc: "Mọi thao tác chuyển stage và cập nhật được ghi đồng thời trong Database Transaction, lưu vết vĩnh viễn.",
  },
];

const stageList = [
  {
    code: "S0",
    name: "Tiếp Nhận Tín Hiệu (Signal)",
    subtitle: "Thu thập & Chuẩn hóa thông tin cơ hội ban đầu",
    gateType: "Soft Gate",
    isHard: false,
    color: "var(--stage-s0, #64748B)",
    owner: "Chuyên viên BD",
    lane: "Làn 1 · BD & Quan hệ",
    objective:
      "Thu thập tín hiệu dự án FDI/KCN; tự động lọc trùng (Dedup), chuẩn hóa dữ liệu và gán người phụ trách ngay từ đầu.",
    prerequisites: [
      "Nguồn tin dự án (KCN, FDI, Môi giới, Tin thầu)",
      "Tên dự án sơ bộ, địa điểm & Chủ đầu tư",
    ],
    systemActions: [
      "Tạo thực thể Project & Pursuit; Dedup Engine kiểm tra trùng lặp",
      "Liên kết Tổ chức (Account) & Người liên hệ (Contact)",
      "Gán BD Owner phụ trách và thời hạn xác thực",
    ],
    serverRules:
      "Ghi nhận StageHistory, đặt version = 1, áp dụng phân quyền RBAC.",
    exitCriteria:
      "Dự án được định danh chuẩn xác, không trùng lặp và có nhân sự tiếp cận.",
    transitions: [
      {
        to: "S1 (Sàng lọc)",
        type: "Tuyến tính",
        desc: "Thông tin có cơ sở, chuyển sang xác minh.",
      },
      {
        to: "S7 (No-bid)",
        type: "Dừng sớm",
        desc: "Không phù hợp phân khúc, rút lui có lý do.",
      },
    ],
  },
  {
    code: "S1",
    name: "Sàng Lọc Cơ Hội (Qualified)",
    subtitle: "Xác thực cơ hội & Thiết lập bản đồ quan hệ",
    gateType: "Soft Gate",
    isHard: false,
    color: "var(--stage-s1, #475569)",
    owner: "Chuyên viên Phát triển Dự án (BD)",
    lane: "Làn 1 · BD & Quan hệ",
    objective:
      "Xác thực ngân sách, thời điểm đấu thầu và lập bản đồ các bên liên quan (Stakeholder Map) bên Chủ đầu tư.",
    prerequisites: [
      "Đầu mối liên hệ phụ trách bên Chủ đầu tư",
      "Ước tính quy mô, ngân sách & thời điểm phát hành HSMT",
    ],
    systemActions: [
      "Gắn PursuitContact 4 vai trò: Decision Maker, Influencer, Champion, Gatekeeper",
      "Đánh giá mức độ ảnh hưởng (Power) & ủng hộ (Affinity); ghi nhật ký tiếp xúc",
      "Cập nhật giá trị ước tính (Estimated Value) và xác suất ban đầu",
    ],
    serverRules:
      "Bắt buộc gắn tối thiểu 1 PursuitContact trước khi chuyển bước; lưu vết kiểm toán.",
    exitCriteria:
      "Cơ hội được xác thực, đủ dữ liệu để Hội đồng chấm điểm Go/No-Go tại S2.",
    transitions: [
      {
        to: "S2 (Go/No-Go)",
        type: "Tuyến tính",
        desc: "Chuyển sang phê duyệt bằng Scorecard.",
      },
      {
        to: "S7 (Won - Chỉ định)",
        type: "Chỉ định thầu",
        desc: "CĐT chỉ định thầu trực tiếp, sang S7 Won.",
      },
      {
        to: "S7 (No-bid)",
        type: "Rút lui",
        desc: "Dự án không khả thi, dừng có lý do.",
      },
    ],
  },
  {
    code: "S2",
    name: "Phê Duyệt Go / No-Go (Scorecard)",
    subtitle: "Định lượng 6 tiêu chí trọng số & Phê duyệt của Ban điều hành",
    gateType: "Hard Gate #1",
    isHard: true,
    color: "var(--stage-s2, #7F27FF)",
    owner: "CEO / Giám đốc Kinh doanh",
    lane: "Làn 3 · Ban điều hành",
    objective:
      "Định lượng tính khả thi bằng Scorecard 6 tiêu chí; giúp Ban điều hành quyết định có nên đầu tư chi phí làm thầu hay không.",
    prerequisites: [
      "Hồ sơ tóm tắt cơ hội Pursuit Brief từ BD",
      "Bảng chấm điểm Scorecard 6 tiêu chí từ các bộ phận",
    ],
    systemActions: [
      "Chấm điểm 6 tiêu chí: Kỹ thuật, Quan hệ, Cạnh tranh, Lợi nhuận, Rủi ro, Nguồn lực",
      "Máy chủ tự động tính lại tổng điểm 0–100 tại thời điểm phê duyệt",
      "Lãnh đạo ký duyệt quyết định GO hoặc NO-GO kèm kết luận",
    ],
    serverRules:
      "CỔNG CỨNG: ScorecardService.decide tự động rẽ nhánh: GO sang S3, NO_GO sang S7 (No-bid). Chặn đổi stage trần.",
    exitCriteria:
      "Có quyết định Go/No-Go chính thức; nếu GO, cấp nguồn lực thành lập tổ thầu.",
    transitions: [
      {
        to: "S3 (Chuẩn bị thầu)",
        type: "Duyệt GO",
        desc: "Đạt điểm chuẩn, chuyển sang chuẩn bị thầu.",
      },
      {
        to: "S7 (No-bid)",
        type: "Duyệt NO-GO",
        desc: "Không đạt tiêu chí, dừng sớm để bảo toàn nguồn lực.",
      },
    ],
  },
  {
    code: "S3",
    name: "Chuẩn Bị Thầu (Pre-bid)",
    subtitle: "Lập chiến lược dự thầu & Thành lập tổ thầu",
    gateType: "Soft Gate",
    isHard: false,
    color: "var(--stage-s3, #0D9488)",
    owner: "Trưởng Phòng Đấu Thầu & BD",
    lane: "Làn 2 · Phòng Đấu thầu",
    objective:
      "Hoạch định chiến lược dự thầu (Winning Strategy), bổ nhiệm Tender Lead, khảo sát hiện trường và chuẩn bị sẵn hồ sơ năng lực.",
    prerequisites: [
      "Quyết định phê duyệt GO chính thức từ S2",
      "Thông báo mời thầu sơ bộ / dự thảo HSMT từ CĐT",
    ],
    systemActions: [
      "Bổ nhiệm Tender Lead & nhân sự 5 ban: Pháp lý, Kỹ thuật, MEP, Dự toán, HSE",
      "Trích xuất hồ sơ từ Capability Library (dự án mẫu, CV chuyên gia, chứng chỉ)",
      "Ghi nhận nhật ký khảo sát hiện trường (Site Visit Log) & mốc nộp thầu (Deadline)",
    ],
    serverRules:
      "Cập nhật deadline chính thức; chuẩn bị cấu trúc WorkPackage để mở không gian làm việc số.",
    exitCriteria:
      "Tổ thầu được kích hoạt, phân công trách nhiệm rõ ràng, sẵn sàng nhận HSMT chính thức.",
    transitions: [
      {
        to: "S4 (Đang đấu thầu)",
        type: "Tuyến tính",
        desc: "Nhận HSMT chính thức, mở Tender Workspace.",
      },
      {
        to: "S7 (Won - Chỉ định)",
        type: "Chỉ định thầu",
        desc: "Ký hợp đồng chỉ định trực tiếp, chuyển S7 Won.",
      },
      {
        to: "S7 (Withdrawn)",
        type: "Rút lui",
        desc: "Thay đổi định hướng hoặc HSMT bất lợi, rút lui.",
      },
    ],
  },
  {
    code: "S4",
    name: "Đang Đấu Thầu (Tender Active)",
    subtitle: "Không gian số liên phòng ban & Kiểm soát bản nộp duy nhất",
    gateType: "Hard Gate #2",
    isHard: true,
    color: "var(--stage-s4, #0284C7)",
    owner: "Tổ Thầu 5 Phòng Ban (Tender Lead)",
    lane: "Làn 2 · Phòng Đấu thầu",
    objective:
      "Phân rã checklist cho 5 phòng ban, theo dõi tiến độ realtime, quản lý phiên bản giá và chốt 1 bản Final duy nhất.",
    prerequisites: [
      "Hồ sơ mời thầu (HSMT/RFP) chính thức, bản vẽ thiết kế & bảng BOQ",
      "Kích hoạt đồng hồ đếm ngược thời hạn nộp thầu",
    ],
    systemActions: [
      "Khởi tạo WorkPackage và TenderRound (Vòng 1, Đấu lại)",
      "Phân bổ 50+ TenderChecklistItem cho 5 bộ phận chuyên môn",
      "Quản lý chuỗi phiên bản qua supersedesId; đánh dấu isFinal = true khi chốt giá",
    ],
    serverRules:
      "CỔNG CỨNG: Tối đa 1 bản nộp isFinal = true mỗi round, tự động gỡ cờ bản cũ trong transaction.",
    exitCriteria:
      "Hoàn thành toàn bộ checklist 5 ban; bản hồ sơ Final được duyệt đầy đủ chữ ký/con dấu.",
    transitions: [
      {
        to: "S5 (Đã nộp hồ sơ)",
        type: "Nộp bản Final",
        desc: "Ghi nhận nộp bản Final kèm biên nhận để sang S5.",
      },
      {
        to: "S7 (Withdrawn)",
        type: "Rút lui",
        desc: "Rút lui trước giờ đóng thầu, bắt buộc kèm lý do.",
      },
    ],
  },
  {
    code: "S5",
    name: "Đã Nộp Hồ Sơ (Submitted)",
    subtitle: "Khóa niêm phong tài liệu & Xác nhận nộp thành công",
    gateType: "Hard Gate #3",
    isHard: true,
    color: "var(--stage-s5, #0176D3)",
    owner: "Tender Lead & Chuyên Viên BD",
    lane: "Làn 2 · Phòng Đấu thầu",
    objective:
      "Xác nhận hồ sơ thầu đã nộp thành công tới CĐT trước giờ đóng thầu; khóa niêm phong toàn bộ tài liệu dự thầu.",
    prerequisites: [
      "Bản hồ sơ dự thầu isFinal = true đã hoàn tất duyệt",
      "Biên nhận nộp thầu, ảnh niêm phong hoặc xác nhận cổng thầu điện tử",
    ],
    systemActions: [
      "Thực hiện tác vụ Submit Final trên Tender Workspace",
      "Đính kèm bằng chứng nộp thầu (biên nhận, dấu thời gian điện tử)",
      "Chuyển trạng thái SUBMITTED; khóa chỉnh sửa toàn bộ tài liệu trong vòng thầu",
    ],
    serverRules:
      "CỔNG CỨNG: Chỉ cho phép sang S5 khi có BidSubmission (isFinal = true & status = SUBMITTED) trong round mở. Chặn đổi stage trần.",
    exitCriteria:
      "Hồ sơ được CĐT tiếp nhận hợp lệ; hệ thống chuyển sang chế độ chờ mở thầu và làm rõ.",
    transitions: [
      {
        to: "S6 (Làm rõ & Đàm phán)",
        type: "Tuyến tính",
        desc: "Nhận yêu cầu làm rõ hoặc thư mời bảo vệ kỹ thuật.",
      },
      {
        to: "S7 (Kết quả thầu)",
        type: "Công bố trực tiếp",
        desc: "CĐT công bố kết quả không qua bước làm rõ.",
      },
    ],
  },
  {
    code: "S6",
    name: "Làm Rõ & Đàm Phán (Clarification)",
    subtitle: "Nhật ký làm rõ kỹ thuật & Đàm phán thương mại",
    gateType: "Soft Gate",
    isHard: false,
    color: "var(--stage-s6, #4F46E5)",
    owner: "Tender Lead · Kỹ Thuật & BD",
    lane: "Làn 2 · Phòng Đấu thầu",
    objective:
      "Xử lý công văn làm rõ (RFI) từ CĐT; bảo vệ biện pháp thi công trong buổi phỏng vấn; đàm phán giá và điều khoản hợp đồng.",
    prerequisites: [
      "Văn bản yêu cầu làm rõ hoặc thư mời bảo vệ hồ sơ từ CĐT",
      "Danh mục câu hỏi về kỹ thuật, tiến độ hoặc đơn giá",
    ],
    systemActions: [
      "Ghi nhận nhật ký Clarification Log: công văn, câu hỏi, phản hồi, hạn chốt",
      "Lưu biên bản đàm phán thương mại có ký duyệt hai bên",
      "Cập nhật giá trị chào thầu sau đàm phán; phối hợp Dự toán chạy kịch bản giá",
    ],
    serverRules:
      "Lưu vết lịch sử mọi tài liệu và thay đổi giá trong Audit Log; bảo toàn tính toàn vẹn dữ liệu.",
    exitCriteria:
      "Hoàn tất toàn bộ nội dung làm rõ; hai bên thống nhất biên bản đàm phán cuối cùng.",
    transitions: [
      {
        to: "S7 (Kết quả thầu)",
        type: "Tuyến tính",
        desc: "Chuyển sang ghi nhận kết quả trúng/trượt thầu.",
      },
      {
        to: "S4/S6 (Đấu lại / Re-bid)",
        type: "Mở Round mới",
        desc: "CĐT yêu cầu đấu lại, mở TenderRound mới không đè dữ liệu cũ.",
      },
    ],
  },
  {
    code: "S7",
    name: "Kết Quả Thầu (Outcome)",
    subtitle: "Chốt kết quả Won/Lost/No-bid & Phân tích Win/Loss",
    gateType: "Hard Gate #4",
    isHard: true,
    color: "var(--stage-s7, #475569)",
    owner: "CEO / Giám Đốc Kinh Doanh",
    lane: "Làn 3 · Ban điều hành",
    objective:
      "Ghi nhận kết quả trúng thầu (WON), trượt thầu (LOST) hoặc dừng thầu (NO_BID); lưu vết nguyên nhân chi tiết để làm giàu kho tri thức Win/Loss.",
    prerequisites: [
      "Thông báo trúng thầu (LOA) hoặc văn bản thông báo kết quả từ CĐT",
      "Thông tin đối thủ trúng thầu và giá trúng thực tế (nếu trượt)",
    ],
    systemActions: [
      "Cập nhật Outcome bắt buộc: WON, LOST, hoặc NO_BID",
      "Ghi nhận phân tích nguyên nhân: Giá, Kỹ thuật, Quan hệ, Tiến độ, Năng lực",
      "Lưu thông tin đối thủ và giá trúng; tự động cập nhật tỷ lệ Win Rate",
    ],
    serverRules:
      "CỔNG CỨNG: LOST/NO_BID là TERMINAL (Khóa cơ hội), chặn lệnh sang S8. Chỉ cơ hội WON mới được phép vào S8.",
    exitCriteria:
      "Cơ hội có kết luận chính thức và lý do lưu vết đầy đủ trong hệ thống.",
    transitions: [
      {
        to: "S8 (Bàn giao thi công)",
        type: "Trúng thầu (WON)",
        desc: "Đóng gói dữ liệu bàn giao sang ban điều hành công trường.",
      },
      {
        to: "Kết thúc (Terminal)",
        type: "Trượt thầu (LOST)",
        desc: "Đóng cơ hội, lưu vào kho tri thức bài học kinh nghiệm.",
      },
      {
        to: "S4/S6 (Khiếu nại/Đấu lại)",
        type: "Reopen",
        desc: "Có khiếu nại hoặc CĐT yêu cầu đấu lại, mở TenderRound mới.",
      },
    ],
  },
  {
    code: "S8",
    name: "Bàn Giao Thi Công (Handover)",
    subtitle: "Đóng gói dữ liệu chuẩn hóa chuyển giao sang ERP/PM thi công",
    gateType: "Hard Gate #5",
    isHard: true,
    color: "var(--stage-s8, #04844B)",
    owner: "BD & Đấu Thầu ➔ Ban Chỉ Huy Công Trường",
    lane: "Làn 1 + Làn 2 ➔ Ban Dự án",
    objective:
      "Cầu nối giữa Tiền thi công (Preconstruction) và Thi công thực tế. Đóng gói trọn vẹn cam kết thương mại, định mức chi phí và rủi ro cho đội công trường.",
    prerequisites: [
      "Hợp đồng thi công chính thức đã ký kết & xác nhận WON tại S7",
      "Toàn bộ hồ sơ thầu Final và biên bản đàm phán hợp lệ",
    ],
    systemActions: [
      "Khởi tạo Handover Pack gồm 4 cấu phần chuẩn hóa",
      "Cấu phần 1: Phạm vi công việc & Cam kết thương mại đặc biệt",
      "Cấu phần 2: Giả định báo giá & Định mức bóc tách chi phí",
      "Cấu phần 3: Danh mục rủi ro, loại trừ & Cấu phần 4: File hồ sơ Final đã duyệt",
    ],
    serverRules:
      "CỔNG CỨNG: canEnterHandover chặn các cơ hội khác WON. Bắt buộc nhập lý do bàn giao và lưu biên bản vào Audit Log.",
    exitCriteria:
      "Biên bản bàn giao ký duyệt bởi Trưởng phòng Đấu thầu và Giám đốc Dự án; sẵn sàng đồng bộ sang ERP.",
    transitions: [
      {
        to: "Chuyển giao ERP/PM",
        type: "Hoàn tất Preconstruction",
        desc: "Bàn giao trọn vẹn dữ liệu sang hệ thống quản lý thi công.",
      },
    ],
  },
];

const nonLinearFlows = [
  {
    code: "F01",
    name: "Dừng sớm No-Go",
    type: "S2 ➔ S7 No-bid",
    accentColor: "var(--stage-s2, #7F27FF)",
    summary:
      "Scorecard S2 không đạt điểm chuẩn hoặc gặp rủi ro lớn, lập tức chuyển sang S7 (No-bid kèm lý do). Tiết kiệm chi phí làm thầu vô ích.",
  },
  {
    code: "F02",
    name: "Chỉ định thầu trực tiếp",
    type: "S1/S3 ➔ S7 Won ➔ S8",
    accentColor: "var(--stage-s8, #04844B)",
    summary:
      "Khi CĐT chỉ định thầu trực tiếp, hệ thống cho phép nhảy thẳng từ S1/S3 sang S7 Won kèm biên bản chỉ định, sau đó lập gói bàn giao S8.",
  },
  {
    code: "F03",
    name: "Rút lui có kiểm soát",
    type: "S0–S6 ➔ S7 Withdrawn",
    accentColor: "var(--destructive, #EA001E)",
    summary:
      "Chủ động rút lui tại bất kỳ thời điểm nào trước S7 khi phát sinh rủi ro hoặc đổi định hướng. Bắt buộc nhập lý do vào StageHistory.",
  },
  {
    code: "F04",
    name: "Sửa sai & Quay lại bước",
    type: "Correction",
    accentColor: "var(--stage-s3, #0D9488)",
    summary:
      "Cho phép quay lại giai đoạn trước để bổ sung tài liệu khi có quyền hạn. Bắt buộc nhập lý do điều chỉnh và ghi log kiểm toán bất biến.",
  },
  {
    code: "F05",
    name: "Đấu lại / Re-bid",
    type: "Mở TenderRound mới",
    accentColor: "var(--stage-s4, #0284C7)",
    summary:
      "Khi CĐT yêu cầu đấu lại vòng 2, hệ thống mở một TenderRound mới kế thừa round cũ trong S4/S6, tuyệt đối không sửa đè dữ liệu vòng trước.",
  },
];
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Header -->
    <section
      class="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-card to-background border-b border-border/80"
    >
      <div class="sf-container relative z-10 text-center max-w-4xl space-y-6">
        <div class="inline-block">
          <span
            class="inline-flex items-center px-3 py-1 text-xs font-bold rounded-full bg-brand-soft text-primary"
          >
            STATE MACHINE CHUẨN MỰC
          </span>
        </div>
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18]"
        >
          9 Giai Đoạn Cố Định
          <span class="text-primary block mt-1"> Trong Vòng Đời Đấu Thầu </span>
        </h1>
        <p
          class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal"
        >
          Không giống CRM bán lẻ cho phép kéo thả tự do dễ làm sai lệch số liệu,
          Bidly thiết lập 9 giai đoạn chuẩn mực và bất biến. Mọi cơ hội theo
          đuổi (Pursuit) được quản trị nghiêm ngặt từ tín hiệu ban đầu đến bàn
          giao thi công.
        </p>
      </div>
    </section>

    <!-- 4 Core Principles -->
    <section class="py-12 md:py-16 bg-card border-b border-border/80">
      <div class="sf-container space-y-8">
        <div class="text-center max-w-3xl mx-auto space-y-2">
          <h2
            class="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight"
          >
            4 Trụ Cột Đảm Bảo Tính Toàn Vẹn Của State Machine
          </h2>
          <p
            class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto"
          >
            4 nguyên lý cốt lõi đảm bảo quy trình vận hành nhất quán, dữ liệu
            minh bạch và không thể bị thao túng.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(p, pIdx) in principles"
            :key="pIdx"
            class="sf-card group bg-card rounded-xl p-6 sm:p-7 border border-border/70 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 space-y-3 flex flex-col justify-between"
          >
            <div class="space-y-3">
              <div
                class="w-10 h-10 rounded-lg bg-brand-soft text-primary flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="p.icon"
                  />
                </svg>
              </div>
              <h3
                class="text-base font-extrabold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors"
              >
                {{ p.title }}
              </h3>
              <p
                class="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal"
              >
                {{ p.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Vertical Timeline Stages Section -->
    <section class="py-16 md:py-24 bg-background border-b border-border/80">
      <div class="sf-container space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            Vận Hành Từng Giai Đoạn Trong Preconstruction CRM
          </h2>
          <p
            class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto"
          >
            Mỗi giai đoạn được quy định rõ mục tiêu, vai trò chủ trì, điều kiện
            đầu vào, thao tác hệ thống, ràng buộc máy chủ và tiêu chí hoàn
            thành.
          </p>
        </div>

        <!-- Vertical Timeline Spine -->
        <div class="relative max-w-5xl mx-auto space-y-12">
          <!-- Continuous Vertical Background Line -->
          <div
            class="hidden md:block absolute top-8 bottom-8 left-[39px] w-1 bg-border/80 rounded-full z-0"
          />

          <div
            v-for="(stg, sIdx) in stageList"
            :key="stg.code"
            :id="stg.code.toLowerCase()"
            class="relative z-10 flex flex-col md:flex-row items-start gap-6 md:gap-8 group"
          >
            <!-- Stage Number Badge (Left Node on Timeline) -->
            <div class="shrink-0 flex items-center md:flex-col gap-3">
              <div
                class="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex flex-col items-center justify-center font-black shadow-card transition-transform duration-300 group-hover:scale-105 text-white"
                :style="{ backgroundColor: stg.color }"
              >
                <span class="text-xl md:text-2xl font-black tracking-tight">{{
                  stg.code
                }}</span>
                <span
                  class="text-[9px] md:text-[9.5px] uppercase font-bold tracking-wider opacity-90"
                >
                  {{ stg.isHard ? "Hard Gate" : "Soft Gate" }}
                </span>
              </div>
            </div>

            <!-- Detailed Stage Card (Right Content) -->
            <div
              :class="[
                'flex-1 sf-card group bg-card rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 overflow-hidden w-full border border-border/70',
                stg.isHard ? 'border-primary/50' : '',
              ]"
            >
              <div class="p-6 sm:p-8 space-y-6">
                <!-- Header Info -->
                <div
                  class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2.5 border-b border-border/70 pb-4"
                >
                  <div class="space-y-1">
                    <div class="flex items-center gap-2.5 flex-wrap">
                      <h3
                        class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight"
                      >
                        {{ stg.name }}
                      </h3>
                      <span
                        class="text-[10.5px] font-extrabold uppercase px-2 py-0.5 rounded-full shrink-0"
                        :class="
                          stg.isHard
                            ? 'bg-destructive/10 text-destructive border border-destructive/30'
                            : 'bg-brand-soft text-primary'
                        "
                      >
                        {{ stg.gateType }}
                      </span>
                    </div>
                    <p class="text-xs sm:text-sm font-semibold text-primary">
                      {{ stg.subtitle }}
                    </p>
                  </div>
                  <div
                    class="text-xs text-muted-foreground shrink-0 bg-secondary/60 px-2.5 py-1 rounded-md"
                  >
                    Chủ trì:
                    <strong class="text-foreground font-semibold">{{
                      stg.owner
                    }}</strong>
                  </div>
                </div>

                <!-- Objective -->
                <div class="space-y-1.5">
                  <div
                    class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Bản chất &amp; Mục tiêu giai đoạn
                  </div>
                  <p
                    class="text-xs sm:text-sm text-foreground font-normal leading-relaxed"
                  >
                    {{ stg.objective }}
                  </p>
                </div>

                <!-- Two-Column Breakdown: Prerequisites & System Actions -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <!-- Col 1: Prerequisites -->
                  <div
                    class="space-y-3 bg-secondary/30 rounded-xl p-4 border border-border/60"
                  >
                    <div
                      class="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5"
                    >
                      <svg
                        class="w-4 h-4 text-primary shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>Điều kiện đầu vào &amp; Dữ liệu cần có</span>
                    </div>
                    <ul class="space-y-2">
                      <li
                        v-for="(req, rIdx) in stg.prerequisites"
                        :key="rIdx"
                        class="text-xs text-muted-foreground font-normal flex items-start gap-2 leading-relaxed"
                      >
                        <span
                          class="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"
                        />
                        <span>{{ req }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Col 2: System Actions -->
                  <div
                    class="space-y-3 bg-secondary/30 rounded-xl p-4 border border-border/60"
                  >
                    <div
                      class="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5"
                    >
                      <svg
                        class="w-4 h-4 text-emerald-600 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>Thao tác &amp; Thực thể trong Bidly</span>
                    </div>
                    <ul class="space-y-2">
                      <li
                        v-for="(act, aIdx) in stg.systemActions"
                        :key="aIdx"
                        class="text-xs text-muted-foreground font-normal flex items-start gap-2 leading-relaxed"
                      >
                        <span
                          class="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"
                        />
                        <span>{{ act }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Server Rules & Exit Criteria Strip -->
                <div class="space-y-3 pt-1 border-t border-border/70">
                  <div
                    class="text-xs font-normal text-muted-foreground leading-relaxed"
                  >
                    <strong class="text-foreground font-bold"
                      >Ràng buộc máy chủ:</strong
                    >
                    {{ stg.serverRules }}
                  </div>
                  <div
                    class="text-xs font-normal text-muted-foreground leading-relaxed"
                  >
                    <strong class="text-foreground font-bold"
                      >Tiêu chí hoàn thành (Exit):</strong
                    >
                    {{ stg.exitCriteria }}
                  </div>
                </div>

                <!-- Transition Branches Pill Strip -->
                <div class="space-y-2 pt-2 border-t border-border/70">
                  <div
                    class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Các nhánh chuyển tiếp hợp lệ từ {{ stg.code }}:
                  </div>
                  <div class="flex flex-wrap gap-2.5">
                    <div
                      v-for="(tr, tIdx) in stg.transitions"
                      :key="tIdx"
                      class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-card border border-border text-xs font-medium text-foreground shadow-xs"
                    >
                      <span class="text-primary font-bold">➔ {{ tr.to }}</span>
                      <span
                        class="text-[10px] uppercase font-extrabold px-1.5 py-0.2 rounded bg-secondary text-muted-foreground"
                      >
                        {{ tr.type }}
                      </span>
                      <span
                        class="text-muted-foreground text-[11px] hidden sm:inline"
                        >({{ tr.desc }})</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5 Non-Linear Transitions Section -->
    <section class="py-16 md:py-24 bg-card border-b border-border/80">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            5 Tuyến Rẽ Không Tuyến Tính Trong Đấu Thầu
          </h2>
          <p
            class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto"
          >
            Đấu thầu xây dựng không diễn ra theo đường thẳng tuyệt đối. Bidly mô
            hình hóa đầy đủ 5 kịch bản rẽ nhánh thực tế trong nghiệp vụ.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          <div
            v-for="(flow, fIdx) in nonLinearFlows"
            :key="fIdx"
            class="sf-card group bg-card border border-border/70 rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 p-6 sm:p-8 flex flex-col justify-between space-y-4"
          >
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-2">
                <span
                  class="text-xs font-mono font-bold text-primary tabular shrink-0"
                  >{{ flow.code }}</span
                >
                <span
                  class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-soft text-primary"
                >
                  {{ flow.type }}
                </span>
              </div>
              <h3
                class="text-lg font-extrabold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors"
              >
                {{ flow.name }}
              </h3>
              <p
                class="text-xs sm:text-[13.5px] text-muted-foreground leading-relaxed font-normal"
              >
                {{ flow.summary }}
              </p>
            </div>
          </div>
        </div>

        <div class="pt-6 text-center">
          <SfButton variant="primary" size="lg" to="/gates">
            Tìm hiểu sâu hơn về 5 Cổng Cứng Kiểm Soát ➔
          </SfButton>
        </div>
      </div>
    </section>

    <!-- Bottom Contact & FAQ Blades -->
    <SfContactPillars />
    <SfFaqAccordion />
  </div>
</template>
