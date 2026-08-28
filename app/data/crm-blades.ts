export interface BladeResourceCard {
  id: string;
  badge?: string;
  headline: string;
  description: string;
  imageUrl: string;
  linkText: string;
  linkUrl: string;
  accentColor?: string;
}

export interface BladeProductCard {
  id: string;
  title: string;
  borderColor: string;
  description: string;
  linkText: string;
  linkUrl: string;
  badge?: string;
}

export interface BladeScaleCard {
  id: string;
  title: string;
  borderColor: string;
  description: string;
  linkText: string;
  linkUrl: string;
  badge?: string;
}

export interface BladeArticleCard {
  id: string;
  title: string;
  borderColor: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface BladeFeatureZ {
  id: string;
  layout: "image-right" | "image-left";
  eyebrow: string;
  headline: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageUrl: string;
}

export const crmBladesData = {
  // Blade 1: Hero Marquee
  hero: {
    eyebrow: "Preconstruction CRM",
    headlinePrefix: "Chuẩn hóa quy trình",
    headlineHighlight: "theo đuổi & trúng thầu xây dựng công nghiệp.",
    description:
      "Từ tín hiệu dự án đến bàn giao thi công: Bidly giúp tổng thầu EPC, MEP và kết cấu thép tập trung nguồn lực, chấm điểm Go/No-Go định lượng và bảo toàn tri thức quan hệ của tổ chức.",
    primaryCta: {
      label: "Đặt lịch Demo 45 phút",
      url: "#demo",
    },
    secondaryCta: {
      label: "Xem bản đồ nghiệp vụ",
      url: "/business-map",
    },
    media: {
      imageUrl:
        "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=1024&q=80",
      videoUrl: "",
    },
  },

  // Blade 2: 3-Up Resource Cards (3 bài toán sống còn)
  resourceGridTop: {
    heading: "3 Thách thức lớn trong quản trị đấu thầu công nghiệp",
    cards: [
      {
        id: "res-1",
        headline:
          "Tín hiệu dự án và mạng lưới quan hệ phân mảnh trên Zalo, Excel",
        description:
          "Khi nhân sự biến động, thông tin chủ đầu tư và lịch sử tiếp xúc dễ thất lạc. Bidly tập trung toàn bộ vào Project Inbox và Stakeholder Map theo dự án.",
        imageUrl:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=768&q=80",
        linkText: "Xem giải pháp Inbox & Quan hệ",
        linkUrl: "/features#stakeholder",
        accentColor: "var(--stage-s0, #64748B)",
      },
      {
        id: "res-2",
        headline:
          "Quyết định Go/No-Go cảm tính, dàn trải nguồn lực thiếu căn cứ",
        description:
          "Theo đuổi dự án rủi ro gây lãng phí chi phí cơ hội lớn. Scorecard S2 chuẩn hóa 6 tiêu chí trọng số, giúp dừng thầu sớm có căn cứ xác thực.",
        imageUrl:
          "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=768&q=80",
        linkText: "Xem Scorecard Go/No-Go",
        linkUrl: "/features#gonogo",
        accentColor: "var(--stage-s2, #8B5CF6)",
      },
      {
        id: "res-3",
        headline:
          "Hồ sơ nộp sai phiên bản, checklist liên phòng ban dễ sót việc",
        description:
          "Phối hợp 5 phòng ban qua email dễ trễ hạn và nhầm file. Tender Workspace quản lý theo vòng thầu với quy tắc bất biến duy nhất 1 bản nộp final.",
        imageUrl:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=768&q=80",
        linkText: "Xem Tender Workspace",
        linkUrl: "/features#tender",
        accentColor: "var(--stage-s4, #0284C7)",
      },
    ] as BladeResourceCard[],
  },

  // Blade 3: Tuyên ngôn định vị
  heading1: {
    text: "Bidly: Nền tảng chuẩn hóa quy trình theo đuổi thầu và bảo toàn tri thức cho nhà thầu công nghiệp.",
  },

  // Blade 4, 5, 6: Z-Pattern 3 năng lực cốt lõi
  featuresZPattern: [
    {
      id: "feat-1",
      layout: "image-right",
      eyebrow: "State Machine Chuẩn",
      headline:
        "Pipeline 9 giai đoạn cố định: Minh bạch tiến độ và kiểm soát chuyển bước",
      description:
        "Khác với CRM kéo thả tự do dễ sai lệch số liệu, Bidly thiết lập 9 giai đoạn chuẩn với 5 cổng kiểm soát ở máy chủ, đảm bảo mọi cơ hội đều có quyết định và lý do rõ ràng.",
      linkText: "Xem chi tiết 9 giai đoạn",
      linkUrl: "/business-map",
      imageUrl:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      id: "feat-2",
      layout: "image-left",
      eyebrow: "Phòng Thầu Số",
      headline:
        "Phối hợp 5 phòng ban: Kiểm soát tiến độ và bất biến 1 bản nộp Final",
      description:
        "Không gian làm việc số theo từng vòng thầu: phân rã checklist cho 5 phòng ban, theo dõi hạn chót và chuỗi phiên bản giá. Cơ chế chốt chặn máy chủ loại bỏ hoàn toàn rủi ro nộp nhầm tài liệu.",
      linkText: "Khám phá Tender Workspace",
      linkUrl: "/features#tender",
      imageUrl:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    },
    {
      id: "feat-3",
      layout: "image-right",
      eyebrow: "Thư Viện Năng Lực",
      headline:
        "Thư viện năng lực số hóa: Biến kinh nghiệm cá nhân thành tài sản tổ chức",
      description:
        "Kho lưu trữ tập trung dự án tiêu biểu, thông số kỹ thuật (tonnage, diện tích, MEP), hồ sơ chuyên gia và chứng chỉ. Hệ thống tự động cảnh báo hạn hiệu lực, rút ngắn 30% thời gian lập hồ sơ thầu.",
      linkText: "Tìm hiểu Capability Library",
      linkUrl: "/features#capability",
      imageUrl:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    },
  ] as BladeFeatureZ[],

  // Blade 7: 6 Module MVP của Bidly
  productPortfolio: {
    heading: "Hệ Thống 6 Mô-đun Lõi Bao Phủ Trọn Vòng Đời Đấu Thầu",
    cards: [
      {
        id: "mod-1",
        title: "M1 · Project Intelligence",
        borderColor: "#D17DFE",
        description:
          "Thu thập tín hiệu KCN, FDI; import Excel xem trước và ánh xạ cột; tự động lọc trùng và gán người phụ trách.",
        linkText: "Xem mô-đun M1",
        linkUrl: "/features#project-intel",
      },
      {
        id: "mod-2",
        title: "M2 · Pursuit & Go/No-Go",
        borderColor: "#04E1CB",
        description:
          "Quản trị pipeline 9 giai đoạn; chấm điểm Scorecard Go/No-Go 0-100; tự động tính giá trị dự báo theo trọng số xác suất.",
        linkText: "Xem mô-đun M2",
        linkUrl: "/features#gonogo",
      },
      {
        id: "mod-3",
        title: "M3 · Stakeholder Map",
        borderColor: "#FF538A",
        description:
          "Bản đồ 4 vai trò bên liên quan (Decision Maker, Influencer, Champion, Gatekeeper) theo dự án và ghi nhận lịch sử tiếp xúc.",
        linkText: "Xem mô-đun M3",
        linkUrl: "/features#stakeholder",
      },
      {
        id: "mod-4",
        title: "M4 · Tender Workspace",
        borderColor: "#FE9339",
        description:
          "Không gian làm việc số theo vòng thầu; checklist phân quyền 5 phòng ban; kiểm soát chuỗi phiên bản và chốt 1 bản final.",
        linkText: "Xem mô-đun M4",
        linkUrl: "/features#tender",
      },
      {
        id: "mod-5",
        title: "M5 · Capability Library",
        borderColor: "#41B658",
        description:
          "Số hóa dự án tiêu biểu (thông số kỹ thuật, tonnage, diện tích), hồ sơ chuyên gia, thiết bị và cảnh báo hạn chứng chỉ.",
        linkText: "Xem mô-đun M5",
        linkUrl: "/features#capability",
      },
      {
        id: "mod-6",
        title: "M6 · Dashboard & Handover",
        borderColor: "#0284C7",
        description:
          "Bảng điều hành Control Tower, heatmap hạn chót 7-14-30 ngày, phân tích Win/Loss và gói bàn giao thi công S8 sang ERP.",
        linkText: "Xem mô-đun M6",
        linkUrl: "/features#dashboard",
      },
    ] as BladeProductCard[],
    cta: {
      label: "Xem tất cả tính năng chi tiết",
      url: "/features",
    },
  },

  // Blade 8: Cấu hình theo phân khúc tổng thầu
  businessScale: {
    mainHeading: "Giải Pháp Chuyên Biệt Cho Từng Phân Khúc Nhà Thầu",
    leftTitle: "Mẫu quy trình may đo sẵn sàng cho EPC, MEP và Kết cấu thép",
    cards: [
      {
        id: "scale-1",
        title: "Tổng thầu EPC & Công nghiệp",
        borderColor: "var(--stage-s4, #0284C7)",
        description:
          "Phù hợp quy mô 50-500 nhân sự. Quản lý đa gói thầu phức tạp, phân quyền RBAC 5 vai trò và Control Tower theo dõi tiến độ toàn diện.",
        linkText: "Giải pháp cho EPC",
        linkUrl: "/solutions#epc",
      },
      {
        id: "scale-2",
        title: "Nhà thầu MEP, PCCC & Kết cấu thép",
        borderColor: "var(--stage-s3, #0D9488)",
        description:
          "Tối ưu cho việc theo đuổi hàng chục gói thầu song song. Kiểm soát hạn chót nghiêm ngặt, tra cứu nhanh năng lực và bảo toàn quan hệ chủ đầu tư.",
        linkText: "Giải pháp cho MEP & Thép",
        linkUrl: "/solutions#mep",
      },
    ] as BladeScaleCard[],
    cta: {
      label: "Khám phá giải pháp theo phân khúc",
      url: "/solutions",
    },
  },

  // Blade 9: Bối cảnh thị trường & số liệu
  customerLogos: {
    heading: "Bối Cảnh Ngành & Cơ Sở Chuyển Đổi Số Đấu Thầu",
    cta: {
      label: "Xem phân tích thị trường & giải pháp",
      url: "/why-bidly",
    },
  },

  // Blade 10: Bài viết & Cẩm nang chuyên môn
  articleCarousels: {
    mainHeading: "Cẩm Nang Quản Trị Đấu Thầu & Tiêu Chuẩn Bảo Mật Dữ Liệu",
    row1: {
      leftTitle: "Chiến lược & Quản trị đấu thầu",
      cards: [
        {
          id: "art-1",
          title: "5 dấu hiệu pipeline đấu thầu rò rỉ thông tin và cơ hội",
          borderColor: "var(--stage-s0, #64748B)",
          description:
            "Nhận diện rủi ro thất thoát cơ hội và thông tin khi quản lý qua bảng tính và nhóm chat phân mảnh.",
          linkText: "Đọc cẩm nang",
          linkUrl: "/why-bidly",
        },
        {
          id: "art-2",
          title: "Thiết lập ma trận Scorecard Go/No-Go chuẩn cho tổng thầu",
          borderColor: "var(--stage-s2, #8B5CF6)",
          description:
            "Phương pháp định lượng 6 tiêu chí trọng số: năng lực, quan hệ, giá, biên lợi nhuận, rủi ro và nguồn lực.",
          linkText: "Xem hướng dẫn",
          linkUrl: "/features#gonogo",
        },
        {
          id: "art-3",
          title:
            "Kiểm soát chuỗi phiên bản hồ sơ thầu: Loại bỏ rủi ro nhầm file",
          borderColor: "var(--stage-s4, #0284C7)",
          description:
            "Cơ chế bất biến duy nhất 1 bản final kèm dấu thời gian và bằng chứng nộp ở máy chủ.",
          linkText: "Xem quy trình",
          linkUrl: "/features#tender",
        },
        {
          id: "art-4",
          title: "Xây dựng bản đồ bên liên quan (Stakeholder Map) theo dự án",
          borderColor: "var(--stage-s3, #0D9488)",
          description:
            "Phương pháp phân loại 4 vai trò chủ chốt và bảo toàn tài sản quan hệ khi nhân sự biến động.",
          linkText: "Xem phương pháp",
          linkUrl: "/features#stakeholder",
        },
      ] as BladeArticleCard[],
    },
    row2: {
      leftTitle: "Kiến trúc kỹ thuật & Bảo mật",
      cards: [
        {
          id: "art-5",
          title:
            "Tại sao dữ liệu đấu thầu cần cô lập trên Private Cloud / On-premise?",
          borderColor: "var(--stage-s8, #04844B)",
          description:
            "Bí mật giá thầu là sống còn. Phân tích sự khác biệt giữa SaaS dùng chung và cơ sở dữ liệu riêng biệt.",
          linkText: "Xem so sánh bảo mật",
          linkUrl: "/crm/pricing",
        },
        {
          id: "art-6",
          title:
            "Mô hình dữ liệu chuẩn: Project → Pursuit → Package → Round → Submission",
          borderColor: "var(--stage-s5, #0176D3)",
          description:
            'Lý do không thể quản lý quy trình thầu phức tạp bằng thực thể "Deal" của CRM bán lẻ.',
          linkText: "Xem mô hình dữ liệu",
          linkUrl: "/crm/what-is-crm",
        },
        {
          id: "art-7",
          title:
            "Gói bàn giao thi công (S8): Cầu nối chuẩn xác giữa CRM và ERP",
          borderColor: "var(--stage-s6, #4F46E5)",
          description:
            "Chuẩn hóa phạm vi, cam kết thương mại, giả định và rủi ro trước khi chuyển giao cho ban điều hành công trường.",
          linkText: "Xem quy trình bàn giao",
          linkUrl: "/features#dashboard",
        },
        {
          id: "art-8",
          title:
            "Tuân thủ Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15 trong quản trị hồ sơ thầu",
          borderColor: "var(--stage-s1, #475569)",
          description:
            "Quy chuẩn quản lý thông tin nhân sự, chuyên gia và đối tác trong hồ sơ năng lực theo quy định mới.",
          linkText: "Xem tiêu chuẩn PDPA",
          linkUrl: "/crm/what-is-crm",
        },
      ] as BladeArticleCard[],
    },
  },

  // Blade 11: 3-Up Resource Cards Bottom
  resourceGridBottom: {
    heading: "Tài Liệu Chuyên Sâu Về Bidly Preconstruction CRM",
    cards: [
      {
        id: "res-bot-1",
        headline: "Preconstruction CRM là gì? Khác biệt với CRM & ERP",
        description:
          "Phân tích vì sao nhà thầu công nghiệp cần hệ thống quản trị chuyên biệt từ tín hiệu dự án đến bàn giao thi công.",
        imageUrl:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=768&q=80",
        linkText: "Đọc bài phân tích",
        linkUrl: "/crm/what-is-crm",
        accentColor: "var(--stage-s2, #7F27FF)",
      },
      {
        id: "res-bot-2",
        headline: "Vì sao chọn Bidly? So sánh 5 giải pháp thay thế",
        description:
          "Đối chiếu chi tiết giữa Bidly với CRM bán lẻ, CRM quốc tế, ERP thi công và phần mềm tự phát triển.",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=768&q=80",
        linkText: "Xem bảng so sánh",
        linkUrl: "/why-bidly",
        accentColor: "var(--stage-s4, #0284C7)",
      },
      {
        id: "res-bot-3",
        headline: "Chương trình Design Partner Pilot & Bảng giá triển khai",
        description:
          "Lộ trình triển khai thí điểm 8-10 tuần trên dữ liệu thật cùng chính sách giá linh hoạt theo quy mô.",
        imageUrl:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=768&q=80",
        linkText: "Xem bảng giá chi tiết",
        linkUrl: "/crm/pricing",
        accentColor: "var(--stage-s8, #04844B)",
      },
    ] as BladeResourceCard[],
  },

  // Blade 12: Contact Us 3 Action Pillars
  contactPillars: {
    heading: "Sẵn Sàng Chuẩn Hóa Quy Trình Đấu Thầu Cùng Vtechcom",
    subheading:
      "Đội ngũ chuyên gia Vtechcom đồng hành tư vấn giải pháp phù hợp với quy mô và đặc thù doanh nghiệp của bạn.",
    pillars: [
      {
        id: "pil-1",
        title: "Đặt lịch Demo 45 phút",
        description:
          "Trải nghiệm trực quan trên quy trình thực tế theo phân khúc (EPC, MEP, Kết cấu thép), giải quyết đúng bài toán của bạn.",
        ctaLabel: "Đăng ký Demo",
        ctaUrl: "#demo",
        isPrimary: true,
      },
      {
        id: "pil-2",
        title: "Design Partner Pilot",
        description:
          "Triển khai thí điểm 8-10 tuần trên dữ liệu thật, kiểm chứng mức độ ứng dụng và hiệu quả trước khi ký chính thức.",
        ctaLabel: "Tìm hiểu gói Pilot",
        ctaUrl: "/crm/pricing",
        isPrimary: false,
      },
      {
        id: "pil-3",
        title: "Tư vấn Kỹ thuật & Bảo mật",
        description:
          "Tư vấn chi tiết phương án On-premise, Private Cloud, bảo mật cơ sở dữ liệu và kết nối API với hệ thống ERP sẵn có.",
        ctaLabel: "Liên hệ chuyên gia",
        ctaUrl: "#demo",
        isPrimary: false,
      },
    ],
  },
};
