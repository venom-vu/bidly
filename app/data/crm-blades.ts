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

export interface BladeProductCloud {
  id: string;
  title: string;
  eyebrow?: string;
  headline: string;
  description: string;
  features: string[];
  linkText: string;
  linkUrl: string;
  imageUrl: string;
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

export interface BladeContactPillar {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
  isPrimary: boolean;
  badge?: string;
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
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1024&q=80",
      videoUrl: "",
    },
  },

  // Blade 2: 3-Up Resource Cards (3 bài toán sống còn)
  resourceGridTop: {
    heading: "3 Thách thức lớn trong quản trị đấu thầu công nghiệp",
    cards: [
      {
        id: "res-1",
        badge: "TÍN HIỆU & QUAN HỆ",
        headline: "Dữ liệu dự án và quan hệ phân mảnh trên Zalo, Excel",
        description:
          "Thông tin chủ đầu tư và lịch sử tiếp xúc dễ thất lạc khi nhân sự biến động. Bidly tập trung toàn bộ vào Project Inbox và Stakeholder Map theo dự án.",
        imageUrl:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=768&q=80",
        linkText: "Khám phá Project Inbox & Quan hệ",
        linkUrl: "/features#stakeholder",
      },
      {
        id: "res-2",
        badge: "RA QUYẾT ĐỊNH",
        headline: "Quyết định Go/No-Go cảm tính, dàn trải chi phí làm thầu",
        description:
          "Theo đuổi dự án rủi ro gây lãng phí hàng trăm triệu đồng chi phí thầu. Scorecard S2 chuẩn hóa 6 tiêu chí trọng số giúp dừng thầu sớm có căn cứ xác thực.",
        imageUrl:
          "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=768&q=80",
        linkText: "Xem Scorecard Go/No-Go",
        linkUrl: "/features#gonogo",
      },
      {
        id: "res-3",
        badge: "PHÒNG THẦU SỐ",
        headline: "Hồ sơ nộp sai phiên bản, checklist liên phòng dễ sót việc",
        description:
          "Phối hợp 5 phòng ban qua email dễ trễ hạn và nộp nhầm file giá. Tender Workspace quản lý theo vòng thầu với bất biến duy nhất 1 bản nộp final.",
        imageUrl:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=768&q=80",
        linkText: "Khám phá Tender Workspace",
        linkUrl: "/features#tender",
      },
    ] as BladeResourceCard[],
  },

  // Blade 3: Tuyên ngôn định vị
  heading1: {
    text: "Bidly: Nền tảng chuẩn hóa quy trình theo đuổi thầu và bảo toàn tri thức cho nhà thầu công nghiệp.",
  },

  // Blade 4: Product Cloud Tabs (Salesforce Style)
  productTabs: {
    heading: "Bốn Không Gian Làm Việc Chuyên Sâu Cho Mọi Phòng Ban",
    clouds: [
      {
        id: "bd-cloud",
        title: "BD & Phát Triển Cơ Hội",
        eyebrow: "SÀNG LỌC TÍN HIỆU & QUAN HỆ",
        headline: "Tập trung tín hiệu dự án và bản đồ 4 vai trò bên liên quan",
        description:
          "Project Inbox phân loại nguồn tin KCN/FDI, tự động chống trùng lặp dữ liệu và gán người phụ trách. Stakeholder Map quản lý Decision Maker, Influencer, Champion theo từng cơ hội.",
        features: [
          "Import dữ liệu thầu từ Excel với ánh xạ cột tự động",
          "Bản đồ quan hệ stakeholder theo dự án, không mất khi đổi nhân sự",
          "Nhật ký tiếp xúc (Touchpoint Log) lưu vết cuộc gọi, khảo sát, gặp gỡ",
        ],
        linkText: "Xem chi tiết mô-đun BD",
        linkUrl: "/features#project-intel",
        imageUrl:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      },
      {
        id: "gov-cloud",
        title: "Hội Đồng Phê Duyệt",
        eyebrow: "KIỂM SOÁT & RA QUYẾT ĐỊNH",
        headline: "Scorecard Go/No-Go 6 tiêu chí & Phê duyệt có thẩm quyền",
        description:
          "Định lượng tính khả thi của dự án bằng Scorecard 0-100. Ban điều hành phê duyệt GO hoặc NO_GO kèm lưu vết kiểm toán và lý do tại tầng máy chủ.",
        features: [
          "Chấm điểm 6 tiêu chí trọng số: Kỹ thuật, Quan hệ, Giá, Lợi nhuận, Rủi ro, Nguồn lực",
          "Dừng thầu sớm có căn cứ (No-Go), tiết kiệm chi phí làm thầu",
          "Bất biến lưu vết phê duyệt và lý do vào StageHistory",
        ],
        linkText: "Xem cơ chế Scorecard",
        linkUrl: "/features#gonogo",
        imageUrl:
          "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80",
      },
      {
        id: "tender-cloud",
        title: "Phòng Đấu Thầu Số",
        eyebrow: "ĐIỀU PHỐI LIÊN PHÒNG BAN",
        headline: "Checklist 5 phòng ban & Kiểm soát duy nhất 1 bản nộp Final",
        description:
          "Không gian làm việc số theo từng vòng thầu (RFP/RFQ/Đấu lại). Phân quyền checklist cho Kỹ thuật, MEP, Dự toán, Pháp lý và khóa chặn nộp nhầm phiên bản.",
        features: [
          "Đồng hồ đếm ngược hạn nộp và cảnh báo deadline 7-14-30 ngày",
          "Quản lý chuỗi phiên bản hồ sơ và chốt 1 bản Final duy nhất",
          "Đấu lại tạo vòng thầu mới, bảo toàn lịch sử các vòng trước",
        ],
        linkText: "Khám phá Tender Workspace",
        linkUrl: "/features#tender",
        imageUrl:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      },
      {
        id: "handover-cloud",
        title: "Bàn Giao & Tri Thức",
        eyebrow: "KHO TRI THỨC & BÀN GIAO THI CÔNG",
        headline: "Gói bàn giao S8 chuẩn hóa & Thư viện năng lực tập trung",
        description:
          "Capability Library số hóa kho dự án tiêu biểu, hồ sơ kỹ sư và chứng chỉ kỹ thuật. Gói bàn giao Handover Pack S8 chuẩn hóa cam kết trước khi chuyển sang ERP thi công.",
        features: [
          "Tra cứu nhanh dự án mẫu theo tonnage thép, diện tích và MEP",
          "Cảnh báo tự động khi chứng chỉ năng lực sắp hết hạn",
          "Gói bàn giao S8 chuyển giao trọn vẹn giả định và rủi ro sang ERP",
        ],
        linkText: "Xem gói bàn giao S8",
        linkUrl: "/features#dashboard",
        imageUrl:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      },
    ] as BladeProductCloud[],
  },

  // Blade 5: Z-Pattern Feature Highlights
  featuresZPattern: [
    {
      id: "feat-1",
      layout: "image-right",
      eyebrow: "Quy Trình Chuẩn",
      headline: "Pipeline 9 giai đoạn cố định với 5 cổng kiểm soát cứng",
      description:
        "Khác với CRM kéo thả tự do dễ sai lệch, Bidly thiết lập 9 giai đoạn chuẩn mực từ S0 đến S8. Các cổng kiểm soát ở máy chủ đảm bảo mọi chuyển bước đều có người duyệt và lưu vết kiểm toán bất biến.",
      linkText: "Xem chi tiết 9 giai đoạn",
      linkUrl: "/stages",
      imageUrl:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      id: "feat-2",
      layout: "image-left",
      eyebrow: "Phối Hợp Nhóm",
      headline: "Phòng thầu số: Đồng bộ 5 phòng ban và kiểm soát hạn chót",
      description:
        "Tập trung đầu việc lập hồ sơ thầu giữa Kinh doanh, Kỹ thuật, Dự toán, Pháp lý và Ban điều hành. Hệ thống tự động cảnh báo hạn nộp và kiểm soát chuỗi phiên bản giá thầu chính xác.",
      linkText: "Khám phá Tender Workspace",
      linkUrl: "/features#tender",
      imageUrl:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    },
    {
      id: "feat-3",
      layout: "image-right",
      eyebrow: "Tài Sản Số",
      headline: "Thư viện năng lực tập trung: Bảo toàn tri thức của tổ chức",
      description:
        "Số hóa toàn bộ kho dự án tiêu biểu (diện tích, tonnage, công nghệ), hồ sơ chuyên gia và chứng chỉ kỹ thuật. Tra cứu nhanh chóng phục vụ lập hồ sơ thầu, rút ngắn 30% thời gian chuẩn bị.",
      linkText: "Tìm hiểu Capability Library",
      linkUrl: "/features#capability",
      imageUrl:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    },
  ] as BladeFeatureZ[],

  // Blade 6: Bối cảnh thị trường & số liệu
  customerLogos: {
    heading: "Cơ sở thực tế để nhà thầu công nghiệp chuyển đổi số",
    cta: {
      label: "Xem phân tích thị trường & ROI",
      url: "/why-bidly",
    },
  },

  // Blade 7: Cấu hình theo phân khúc
  businessScale: {
    mainHeading: "Giải Pháp Chuyên Biệt Cho Từng Phân Khúc Nhà Thầu",
    leftTitle: "3 Mẫu nghiệp vụ cấu hình sẵn sàng cho EPC, MEP và Kết cấu thép",
    cards: [
      {
        id: "scale-1",
        title: "Tổng thầu EPC & Công nghiệp",
        borderColor: "var(--stage-s4, #0284C7)",
        description:
          "Quản lý đa gói thầu quy mô lớn, phân quyền 5 vai trò và Control Tower theo dõi tiến độ toàn cảnh theo thời gian thực.",
        linkText: "Giải pháp cho EPC",
        linkUrl: "/solutions#epc",
      },
      {
        id: "scale-2",
        title: "Nhà thầu Cơ điện MEP & Kết cấu thép",
        borderColor: "var(--stage-s3, #0D9488)",
        description:
          "Theo đuổi hàng chục gói thầu song song. Kiểm soát hạn chót nghiêm ngặt, tra cứu nhanh năng lực và bảo toàn quan hệ chủ đầu tư.",
        linkText: "Giải pháp cho MEP & Thép",
        linkUrl: "/solutions#mep",
      },
    ] as BladeScaleCard[],
    cta: {
      label: "Khám phá giải pháp theo phân khúc",
      url: "/solutions",
    },
  },

  // Blade 8: Bài viết & Cẩm nang
  articleCarousels: {
    mainHeading: "Cẩm Nang Quản Trị Đấu Thầu & Tiêu Chuẩn Bảo Mật",
    row1: {
      leftTitle: "Chiến lược & Quản trị thầu",
      cards: [
        {
          id: "art-1",
          title: "5 dấu hiệu pipeline đấu thầu rò rỉ thông tin và cơ hội",
          borderColor: "var(--stage-s0, #64748B)",
          description:
            "Nhận diện rủi ro thất thoát cơ hội khi theo dõi qua bảng tính và nhóm chat phân mảnh.",
          linkText: "Đọc cẩm nang",
          linkUrl: "/why-bidly",
        },
        {
          id: "art-2",
          title: "Thiết lập ma trận Scorecard Go/No-Go chuẩn cho tổng thầu",
          borderColor: "var(--stage-s2, #8B5CF6)",
          description:
            "Phương pháp định lượng 6 tiêu chí trọng số: kỹ thuật, quan hệ, giá, lợi nhuận, rủi ro và nguồn lực.",
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
            "Phân loại 4 vai trò chủ chốt và bảo toàn tài sản quan hệ khi nhân sự biến động.",
          linkText: "Xem phương pháp",
          linkUrl: "/features#stakeholder",
        },
      ] as BladeArticleCard[],
    },
    row2: {
      leftTitle: "Bảo mật & Kiến trúc dữ liệu",
      cards: [
        {
          id: "art-5",
          title:
            "Tại sao dữ liệu thầu cần cô lập trên Private Cloud / On-premise?",
          borderColor: "var(--stage-s8, #04844B)",
          description:
            "Bí mật giá thầu là sống còn. Phân tích sự khác biệt giữa SaaS dùng chung và cơ sở dữ liệu riêng biệt.",
          linkText: "Xem so sánh",
          linkUrl: "/crm/pricing",
        },
        {
          id: "art-6",
          title: "Mô hình dữ liệu chuẩn: Project → Pursuit → Package → Round",
          borderColor: "var(--stage-s5, #0176D3)",
          description:
            "Lý do không thể quản lý quy trình thầu phức tạp bằng mô hình đơn hàng (Deal) của CRM bán lẻ.",
          linkText: "Xem mô hình",
          linkUrl: "/crm/what-is-crm",
        },
        {
          id: "art-7",
          title: "Gói bàn giao thi công S8: Cầu nối chuẩn xác giữa CRM và ERP",
          borderColor: "var(--stage-s6, #4F46E5)",
          description:
            "Chuẩn hóa phạm vi, cam kết thương mại, giả định và rủi ro trước khi chuyển giao cho công trường.",
          linkText: "Xem quy trình bàn giao",
          linkUrl: "/features#dashboard",
        },
        {
          id: "art-8",
          title: "Tuân thủ Luật PDPA 91/2025/QH15 trong quản trị hồ sơ thầu",
          borderColor: "var(--stage-s1, #475569)",
          description:
            "Quy chuẩn quản lý thông tin nhân sự, chuyên gia và đối tác theo luật mới.",
          linkText: "Xem tiêu chuẩn",
          linkUrl: "/crm/what-is-crm",
        },
      ] as BladeArticleCard[],
    },
  },

  // Blade 9: 3-Up Resource Cards Bottom
  resourceGridBottom: {
    heading: "Tài liệu chuyên sâu về Bidly Preconstruction CRM",
    cards: [
      {
        id: "res-bot-1",
        badge: "TỔNG QUAN",
        headline: "Preconstruction CRM là gì? Khác biệt với CRM & ERP",
        description:
          "Phân tích vì sao nhà thầu công nghiệp cần hệ thống quản trị chuyên biệt từ tín hiệu dự án đến bàn giao thi công.",
        imageUrl:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=768&q=80",
        linkText: "Đọc bài phân tích",
        linkUrl: "/crm/what-is-crm",
      },
      {
        id: "res-bot-2",
        badge: "SO SÁNH",
        headline: "Vì sao chọn Bidly? So sánh 5 giải pháp thay thế",
        description:
          "Đối chiếu chi tiết giữa Bidly với CRM bán lẻ, CRM quốc tế, ERP thi công và phần mềm tự phát triển.",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=768&q=80",
        linkText: "Xem bảng so sánh",
        linkUrl: "/why-bidly",
      },
      {
        id: "res-bot-3",
        badge: "TRIỂN KHAI",
        headline: "Chương trình Design Partner Pilot & Bảng giá",
        description:
          "Lộ trình triển khai thí điểm 8-10 tuần trên dữ liệu thật cùng chính sách giá linh hoạt theo quy mô.",
        imageUrl:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=768&q=80",
        linkText: "Xem bảng giá chi tiết",
        linkUrl: "/crm/pricing",
      },
    ] as BladeResourceCard[],
  },

  // Blade: Product Portfolio (6 Core Modules)
  productPortfolio: {
    heading: "6 Mô-đun Lõi Trong Hệ Sinh Thái Bidly Preconstruction CRM",
    cards: [
      {
        id: "mod-1",
        title: "Project Inbox & Dedup",
        borderColor: "var(--stage-s0, #64748B)",
        badge: "GIAI ĐOẠN S0",
        description:
          "Tập trung tín hiệu dự án KCN/FDI, tự động nhận diện chống trùng lặp và gán người phụ trách.",
        linkText: "Xem Project Inbox",
        linkUrl: "/features#project-intel",
      },
      {
        id: "mod-2",
        title: "Stakeholder Map Dự Án",
        borderColor: "var(--stage-s1, #475569)",
        badge: "GIAI ĐOẠN S1",
        description:
          "Bản đồ quan hệ 4 vai trò (Decision Maker, Influencer, Champion, Gatekeeper) theo từng cơ hội.",
        linkText: "Xem Stakeholder Map",
        linkUrl: "/features#stakeholder",
      },
      {
        id: "mod-3",
        title: "Scorecard Go/No-Go S2",
        borderColor: "var(--stage-s2, #7F27FF)",
        badge: "CỔNG CỨNG S2",
        description:
          "Chấm điểm 6 tiêu chí trọng số 0-100, bắt buộc phê duyệt có thẩm quyền và lý do lưu vết máy chủ.",
        linkText: "Xem Scorecard S2",
        linkUrl: "/features#gonogo",
      },
      {
        id: "mod-4",
        title: "Tender Workspace S4",
        borderColor: "var(--stage-s4, #0284C7)",
        badge: "CỔNG CỨNG S4",
        description:
          "Phòng thầu số điều phối 5 phòng ban, theo dõi hạn chót 7-14-30 ngày và khóa 1 bản final duy nhất.",
        linkText: "Khám phá Tender Workspace",
        linkUrl: "/features#tender",
      },
      {
        id: "mod-5",
        title: "Capability Library",
        borderColor: "var(--stage-s6, #4F46E5)",
        badge: "TRI THỨC TỔ CHỨC",
        description:
          "Thư viện dự án mẫu (tonnage, diện tích), hồ sơ chuyên gia, chứng chỉ có cảnh báo hết hạn.",
        linkText: "Xem Capability Library",
        linkUrl: "/features#capability",
      },
      {
        id: "mod-6",
        title: "Gói Bàn Giao Handover S8",
        borderColor: "var(--stage-s8, #04844B)",
        badge: "CỔNG CỨNG S8",
        description:
          "Chuẩn hóa dữ liệu cam kết thương mại, giả định và rủi ro chuyển giao trọn vẹn sang ERP thi công.",
        linkText: "Xem Gói bàn giao S8",
        linkUrl: "/features#dashboard",
      },
    ] as BladeProductCard[],
    cta: {
      label: "Khám phá toàn bộ tính năng",
      url: "/features",
    },
  },

  // Blade 10: 3 Action Pillars
  contactPillars: {
    heading: "Sẵn sàng chuẩn hóa quy trình đấu thầu cùng Vtechcom",
    subheading:
      "Đội ngũ chuyên gia Vtechcom đồng hành tư vấn giải pháp phù hợp với quy mô và đặc thù doanh nghiệp của bạn.",
    pillars: [
      {
        id: "pil-1",
        badge: "TRỰC QUAN 45 PHÚT",
        title: "Đặt lịch Demo 45 phút",
        description:
          "Trải nghiệm trực quan trên quy trình thực tế theo phân khúc (EPC, MEP, Kết cấu thép), giải quyết đúng bài toán của bạn.",
        ctaLabel: "Đăng ký Demo",
        ctaUrl: "#demo",
        isPrimary: true,
      },
      {
        id: "pil-2",
        badge: "KHẤU TRỪ 100%",
        title: "Design Partner Pilot",
        description:
          "Triển khai thí điểm 8-10 tuần trên dữ liệu thật, kiểm chứng mức độ ứng dụng và hiệu quả trước khi ký chính thức.",
        ctaLabel: "Tìm hiểu gói Pilot",
        ctaUrl: "/crm/pricing",
        isPrimary: false,
      },
      {
        id: "pil-3",
        badge: "BẢO MẬT DỮ LIỆU",
        title: "Tư vấn Kỹ thuật & Bảo mật",
        description:
          "Tư vấn chi tiết phương án On-premise, Private Cloud, bảo mật cơ sở dữ liệu và kết nối API với hệ thống ERP sẵn có.",
        ctaLabel: "Liên hệ chuyên gia",
        ctaUrl: "#demo",
        isPrimary: false,
      },
    ] as BladeContactPillar[],
  },
};
