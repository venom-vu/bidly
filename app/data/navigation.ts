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
                "Định vị giải pháp, chuỗi thực thể dữ liệu và so sánh với CRM bán lẻ & ERP.",
            },
            {
              label: "Vì sao chọn Bidly?",
              url: "/why-bidly",
              description:
                "Phân tích 5 giải pháp thay thế, 6 chuyển dịch vận hành và đo lường ROI.",
            },
            {
              label: "Bản đồ nghiệp vụ 5 làn",
              url: "/business-map",
              description:
                "Quy trình 9 giai đoạn, 5 cổng kiểm soát và phân định trách nhiệm 5 làn.",
            },
          ],
        },
      ],
    },
    {
      title: "Tính năng & Mô-đun",
      widthClass: "w-[980px]",
      categories: [
        {
          categoryTitle: "Cơ chế & Chốt chặn Lõi",
          hasSeparator: true,
          items: [
            {
              label: "9 Giai đoạn cố định",
              url: "/stages",
              description:
                "Chuỗi vòng đời thầu chuẩn mực S0-S8 và các nhánh rẽ thực tế.",
            },
            {
              label: "5 Cổng kiểm soát cứng",
              url: "/gates",
              description:
                "Chốt chặn máy chủ chuyển giai đoạn và lưu vết lịch sử bất biến.",
            },
            {
              label: "Scorecard Go/No-Go",
              url: "/features#gonogo",
              description:
                "Định lượng 6 tiêu chí trọng số giúp ra quyết định dừng thầu sớm.",
            },
            {
              label: "Tender Workspace",
              url: "/features#tender",
              description:
                "Không gian số phối hợp liên phòng và kiểm soát bản nộp duy nhất.",
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
                "Tập trung tín hiệu dự án FDI/KCN và tự động lọc trùng dữ liệu.",
            },
            {
              label: "M2 · Pipeline & Go/No-Go",
              url: "/features#gonogo",
              description:
                "Quản trị 9 giai đoạn cơ hội và chấm điểm Go/No-Go định lượng.",
            },
            {
              label: "M3 · Stakeholder Map",
              url: "/features#stakeholder",
              description:
                "Bản đồ 4 vai trò bên liên quan (DM, Influencer, Champion) theo dự án.",
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
                "Checklist phối hợp 5 phòng ban và kiểm soát tiến độ nộp thầu.",
            },
            {
              label: "M5 · Thư viện năng lực",
              url: "/features#capability",
              description:
                "Số hóa hồ sơ dự án tiêu biểu, chuyên gia và chứng chỉ kỹ thuật.",
            },
            {
              label: "M6 · Control Tower & Bàn giao",
              url: "/features#dashboard",
              description:
                "Bảng điều hành cảnh báo hạn chót và gói bàn giao thi công S8.",
            },
            {
              label: "M7 · Nền tảng & Bảo mật",
              url: "/features#platform-sec",
              description:
                "Kiến trúc Private Cloud / On-premise cô lập dữ liệu 100%.",
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
              description:
                "Tối ưu cho tổng thầu quy mô lớn, quản lý đa gói thầu phức tạp.",
            },
            {
              label: "Nhà thầu Cơ điện MEP",
              url: "/solutions#mep",
              description:
                "Quản lý hàng chục gói thầu song song và kiểm soát hạn chót chặt chẽ.",
            },
            {
              label: "Kết cấu thép tiền chế",
              url: "/solutions#steel",
              description:
                "Quản lý thông số tonnage, thư viện năng lực và tối ưu chào giá.",
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
              description:
                "Hạ tầng đám mây riêng biệt, do Vtechcom vận hành và bảo mật.",
            },
            {
              label: "Enterprise On-premise",
              url: "/crm/pricing#enterprise",
              description:
                "Cài đặt trực tiếp trên máy chủ nội bộ, tích hợp SSO doanh nghiệp.",
            },
            {
              label: "Design Partner Pilot",
              url: "/crm/pricing#pilot",
              description:
                "Chương trình thí điểm 8-10 tuần trên dữ liệu thật có hỗ trợ chuyên sâu.",
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
