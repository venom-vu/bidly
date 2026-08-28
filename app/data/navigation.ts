export interface NavMenuItem {
  label: string;
  url: string;
  description?: string;
  eyebrow?: string;
  badge?: string;
}

export interface NavMenuCategory {
  categoryTitle?: string;
  description?: string;
  hasSeparator?: boolean;
  items: NavMenuItem[];
}

export interface NavMenuGroup {
  title: string;
  url?: string;
  widthClass?: string;
  categories?: NavMenuCategory[];
}

export const navigationData = {
  propertyTitle: {
    label: "Bidly Preconstruction CRM",
    url: "/",
  },
  utilityNavigation: {
    tourCta: {
      label: "Bản đồ nghiệp vụ",
      url: "/business-map",
      variant: "secondary" as const,
    },
    freeTrialCta: {
      label: "Đặt lịch Demo",
      url: "#demo",
      variant: "primary" as const,
    },
  },
  mainMenu: [
    {
      title: "Định vị & Bản đồ",
      widthClass: "w-[680px]",
      categories: [
        {
          categoryTitle: "Khái niệm Preconstruction",
          hasSeparator: true,
          items: [
            {
              label: "Preconstruction CRM là gì?",
              url: "/crm/what-is-crm",
              description: "Khác biệt với CRM bán lẻ & chuỗi 6 cấp thực thể.",
            },
            {
              label: "Vì sao chọn Bidly?",
              url: "/why-bidly",
              description: "So sánh 5 nhóm giải pháp & 6 chỉ số đo lường ROI.",
            },
            {
              label: "Bản đồ nghiệp vụ",
              url: "/business-map",
              description: "9 giai đoạn pipeline & 5 cổng kiểm soát cứng.",
              badge: "TRỰC QUAN",
            },
          ],
        },
        {
          categoryTitle: "Cơ chế & Chốt chặn Lõi",
          hasSeparator: false,
          items: [
            {
              label: "5 Cổng kiểm soát (Stage Gates)",
              url: "/features#pipeline",
              description: "Kiểm soát chuyển bước & lịch sử bất biến.",
            },
            {
              label: "Scorecard Go/No-Go (S2)",
              url: "/features#gonogo",
              description: "Chấm điểm 6 tiêu chí & phê duyệt định lượng.",
            },
            {
              label: "Tender Workspace (S4)",
              url: "/features#tender",
              description: "Phối hợp 5 phòng ban & chốt 1 bản nộp final.",
            },
          ],
        },
      ],
    },
    {
      title: "Tính năng & Mô-đun",
      widthClass: "w-[740px]",
      categories: [
        {
          categoryTitle: "Sàng lọc cơ hội (M1 - M3)",
          hasSeparator: true,
          items: [
            {
              label: "M1 · Tín hiệu dự án",
              url: "/features#project-intel",
              description: "Thu thập tín hiệu FDI/KCN & tự động lọc trùng.",
            },
            {
              label: "M2 · Pipeline & Go/No-Go",
              url: "/features#gonogo",
              description: "Quản lý 9 giai đoạn & chấm điểm dừng thầu sớm.",
            },
            {
              label: "M3 · Stakeholder Map",
              url: "/features#stakeholder",
              description: "Bản đồ Decision Maker, Influencer & Champion.",
            },
          ],
        },
        {
          categoryTitle: "Đấu thầu & Vận hành (M4 - M7)",
          hasSeparator: false,
          items: [
            {
              label: "M4 · Phòng thầu số (Tender Room)",
              url: "/features#tender",
              description: "Checklist liên phòng & kiểm soát hạn nộp thầu.",
            },
            {
              label: "M5 · Thư viện năng lực",
              url: "/features#capability",
              description: "Hồ sơ dự án tiêu biểu & chứng chỉ chuyên gia.",
            },
            {
              label: "M6 · Control Tower & Bàn giao",
              url: "/features#dashboard",
              description: "Heatmap tiến độ 7-30 ngày & gói bàn giao S8.",
            },
            {
              label: "M7 · Nền tảng & Bảo mật",
              url: "/features#platform-sec",
              description: "Triển khai Private Cloud / On-premise cô lập 100%.",
            },
          ],
        },
      ],
    },
    {
      title: "Giải pháp ngành",
      widthClass: "w-[680px]",
      categories: [
        {
          categoryTitle: "Mẫu nghiệp vụ theo ngành",
          hasSeparator: true,
          items: [
            {
              label: "Tổng thầu EPC & Công nghiệp",
              url: "/solutions#epc",
              description: "Dành cho tổng thầu quy mô lớn nhiều gói thầu.",
            },
            {
              label: "Nhà thầu Cơ điện MEP",
              url: "/solutions#mep",
              description: "Quản lý đa gói thầu song song & tiến độ gấp.",
            },
            {
              label: "Kết cấu thép tiền chế",
              url: "/solutions#steel",
              description: "Báo giá nhanh, quản lý tonnage & RFQ vật tư.",
            },
          ],
        },
        {
          categoryTitle: "Mô hình triển khai",
          hasSeparator: false,
          items: [
            {
              label: "Private Cloud Managed",
              url: "/crm/pricing#professional",
              description: "Đám mây riêng biệt do Vtechcom vận hành.",
            },
            {
              label: "Enterprise On-premise",
              url: "/crm/pricing#enterprise",
              description: "Cài đặt trên máy chủ nội bộ doanh nghiệp.",
            },
            {
              label: "Design Partner Pilot",
              url: "/crm/pricing#pilot",
              description: "Gói thí điểm 8-10 tuần hỗ trợ chuyên sâu.",
              badge: "KHUYẾN NGHỊ",
            },
          ],
        },
      ],
    },
    {
      title: "Bảng giá",
      url: "/crm/pricing",
    },
  ] as NavMenuGroup[],
};
