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
      title: "Tổng quan",
      widthClass: "w-[420px]",
      categories: [
        {
          categoryTitle: "Khái niệm Preconstruction",
          hasSeparator: false,
          items: [
            {
              label: "Preconstruction CRM là gì?",
              url: "/crm/what-is-crm",
              description:
                "Định vị giải pháp và so sánh với CRM bán lẻ & ERP.",
            },
            {
              label: "Vì sao chọn Bidly?",
              url: "/why-bidly",
              description:
                "Phân tích 5 giải pháp thay thế và đo lường hiệu quả ROI.",
            },
            {
              label: "Bản đồ nghiệp vụ 5 làn",
              url: "/business-map",
              description:
                "Quy trình 9 giai đoạn và phân định trách nhiệm 5 làn.",
            },
          ],
        },
      ],
    },
    {
      title: "Tính năng & Mô-đun",
      widthClass: "w-[960px]",
      categories: [
        {
          categoryTitle: "Chốt chặn cốt lõi",
          hasSeparator: true,
          items: [
            {
              label: "9 Giai đoạn cố định",
              url: "/stages",
              description:
                "Chuỗi vòng đời thầu chuẩn mực từ S0 đến S8.",
            },
            {
              label: "5 Cổng kiểm soát cứng",
              url: "/gates",
              description:
                "Chốt chặn máy chủ bảo vệ dữ liệu và ngân sách thầu.",
            },
            {
              label: "Scorecard Go/No-Go",
              url: "/features#gonogo",
              description:
                "Định lượng 6 tiêu chí trọng số giúp dừng thầu sớm.",
            },
            {
              label: "Tender Workspace",
              url: "/features#tender",
              description:
                "Không gian phối hợp 5 phòng ban và chốt 1 bản final.",
            },
          ],
        },
        {
          categoryTitle: "Sàng lọc cơ hội",
          hasSeparator: true,
          items: [
            {
              label: "M1 · Tín hiệu dự án",
              url: "/features#project-intel",
              description:
                "Thu thập tín hiệu KCN/FDI và tự động lọc trùng dữ liệu.",
            },
            {
              label: "M2 · Pipeline & Go/No-Go",
              url: "/features#gonogo",
              description:
                "Quản trị 9 giai đoạn và chấm điểm Go/No-Go định lượng.",
            },
            {
              label: "M3 · Stakeholder Map",
              url: "/features#stakeholder",
              description:
                "Bản đồ 4 vai trò bên liên quan bảo toàn quan hệ tổ chức.",
            },
          ],
        },
        {
          categoryTitle: "Đấu thầu & Vận hành",
          hasSeparator: false,
          items: [
            {
              label: "M4 · Phòng thầu số",
              url: "/features#tender",
              description:
                "Checklist 5 phòng ban và kiểm soát hạn chót nộp thầu.",
            },
            {
              label: "M5 · Thư viện năng lực",
              url: "/features#capability",
              description:
                "Số hóa kho dự án tiêu biểu, chuyên gia và chứng chỉ.",
            },
            {
              label: "M6 · Dashboard & Bàn giao",
              url: "/features#dashboard",
              description:
                "Cảnh báo hạn chót và gói bàn giao thi công S8 sang ERP.",
            },
            {
              label: "M7 · Nền tảng & Bảo mật",
              url: "/features#platform-sec",
              description:
                "Kiến trúc On-premise / Private Cloud cô lập dữ liệu 100%.",
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
          categoryTitle: "Mẫu nghiệp vụ ngành",
          hasSeparator: true,
          items: [
            {
              label: "Tổng thầu EPC & Công nghiệp",
              url: "/solutions#epc",
              description:
                "Tối ưu cho tổng thầu lớn, quản lý đa gói thầu phức tạp.",
            },
            {
              label: "Nhà thầu Cơ điện MEP",
              url: "/solutions#mep",
              description:
                "Theo dõi hàng chục gói thầu song song và kiểm soát hạn chót.",
            },
            {
              label: "Kết cấu thép tiền chế",
              url: "/solutions#steel",
              description:
                "Quản lý thông số tonnage, thư viện năng lực và chào giá.",
            },
          ],
        },
        {
          categoryTitle: "Mô hình triển khai",
          hasSeparator: false,
          items: [
            {
              label: "Design Partner Pilot",
              url: "/crm/pricing#pilot",
              description:
                "Thí điểm 8-10 tuần trên dữ liệu thật có hỗ trợ chuyên sâu.",
              badge: "KHUYẾN NGHỊ",
            },
            {
              label: "Private Cloud Managed",
              url: "/crm/pricing#professional",
              description:
                "Hạ tầng đám mây riêng biệt, do Vtechcom bảo mật và vận hành.",
            },
            {
              label: "Enterprise On-premise",
              url: "/crm/pricing#enterprise",
              description:
                "Cài đặt trực tiếp trên máy chủ nội bộ, tích hợp SSO doanh nghiệp.",
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
