export interface BladeResourceCard {
  id: string
  badge: string
  headline: string
  description: string
  imageUrl: string
  linkText: string
  linkUrl: string
  accentColor?: string
}

export interface BladeProductCard {
  id: string
  title: string
  borderColor: string
  description: string
  linkText: string
  linkUrl: string
  badge?: string
}

export interface BladeScaleCard {
  id: string
  title: string
  borderColor: string
  description: string
  linkText: string
  linkUrl: string
  badge?: string
}

export interface BladeArticleCard {
  id: string
  title: string
  borderColor: string
  description: string
  linkText: string
  linkUrl: string
}

export interface BladeFeatureZ {
  id: string
  layout: 'image-right' | 'image-left'
  eyebrow: string
  headline: string
  description: string
  linkText: string
  linkUrl: string
  imageUrl: string
}

export const crmBladesData = {
  // Blade 1: Hero Marquee
  hero: {
    eyebrow: 'Preconstruction CRM : Vtechcom',
    headlinePrefix: 'Chuẩn hóa quy trình',
    headlineHighlight: 'theo đuổi & trúng thầu xây dựng công nghiệp.',
    description: 'Từ tín hiệu đến bàn giao: Bidly giúp tổng thầu EPC, MEP và kết cấu thép tập trung nguồn lực, chấm điểm Go/No-Go chuẩn xác và bảo vệ tri thức quan hệ tổ chức.',
    primaryCta: {
      label: 'Đặt lịch Demo 45 phút',
      url: '#demo'
    },
    secondaryCta: {
      label: 'Xem bản đồ nghiệp vụ',
      url: '/business-map'
    },
    media: {
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1024&q=80',
      videoUrl: ''
    }
  },

  // Blade 2: 3-Up Resource Cards (3 bài toán sống còn)
  resourceGridTop: {
    heading: 'Ba bài toán sống còn của tổng thầu công nghiệp',
    cards: [
      {
        id: 'res-1',
        badge: 'Bài toán 1 : Dữ liệu phân mảnh',
        headline: 'Tín hiệu dự án & quan hệ phân mảnh trên Zalo, Excel',
        description: 'Khi nhân sự nghỉ việc, quan hệ chủ đầu tư và lịch sử giá dễ thất lạc. Bidly quy tụ về Project Inbox và Stakeholder Map theo dự án.',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=768&q=80',
        linkText: 'Xem giải pháp Inbox & Quan hệ',
        linkUrl: '/features#stakeholder',
        accentColor: 'var(--stage-s0, #64748B)'
      },
      {
        id: 'res-2',
        badge: 'Bài toán 2 : Quyết định cảm tính',
        headline: 'Quyết định Go/No-Go cảm tính, áp lực doanh số thiếu căn cứ',
        description: '44,7% doanh nghiệp thiếu hợp đồng do đầu tư dàn trải. Scorecard S2 bắt buộc chấm điểm theo trọng số và lưu vết máy chủ.',
        imageUrl: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=768&q=80',
        linkText: 'Xem Scorecard Go/No-Go',
        linkUrl: '/features#gonogo',
        accentColor: 'var(--stage-s2, #8B5CF6)'
      },
      {
        id: 'res-3',
        badge: 'Bài toán 3 : Rủi ro phiên bản hồ sơ',
        headline: 'Hồ sơ nộp sai phiên bản, checklist liên phòng sót việc',
        description: 'Phối hợp 5 phòng ban dễ trễ hạn. Tender Workspace quản lý theo vòng thầu với bất biến 1 bản final duy nhất.',
        imageUrl: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=768&q=80',
        linkText: 'Xem Tender Workspace',
        linkUrl: '/features#tender',
        accentColor: 'var(--stage-s4, #0284C7)'
      }
    ] as BladeResourceCard[]
  },

  // Blade 3: Tuyên ngôn định vị
  heading1: {
    text: 'Bidly : Hệ thống chuẩn giúp tổng thầu công nghiệp nâng cao tỷ lệ trúng thầu và bảo vệ tri thức.'
  },

  // Blade 4, 5, 6: Z-Pattern 3 năng lực cốt lõi
  featuresZPattern: [
    {
      id: 'feat-1',
      layout: 'image-right',
      eyebrow: 'STATE MACHINE 9 GIAI ĐOẠN & 5 CỔNG CỨNG',
      headline: 'Pipeline 9 giai đoạn cố định: Không cơ hội nào thiếu quyết định',
      description: 'Khác với CRM kéo thả tự do, Bidly dùng state machine 9 giai đoạn. 5 cổng cứng kiểm soát ở máy chủ đảm bảo pipeline phản ánh đúng thực tế.',
      linkText: 'Xem chi tiết 9 giai đoạn',
      linkUrl: '/business-map',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      id: 'feat-2',
      layout: 'image-left',
      eyebrow: 'TENDER WORKSPACE & PHÒNG THẦU SỐ',
      headline: 'Phối hợp 5 phòng ban: Bất biến 1 bản Final duy nhất',
      description: 'Không gian số theo từng vòng thầu: phân rã checklist 5 phòng ban, theo dõi hạn chót và chuỗi phiên bản. Nộp bản final là cách duy nhất sang S5, tránh nộp nhầm file.',
      linkText: 'Khám phá Tender Workspace',
      linkUrl: '/features#tender',
      imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80'
    },
    {
      id: 'feat-3',
      layout: 'image-right',
      eyebrow: 'CAPABILITY LIBRARY & BẢO VỆ TRI THỨC',
      headline: 'Thư viện năng lực tập trung: Tri thức thuộc về tổ chức',
      description: 'Tập trung hồ sơ dự án tiêu biểu, thông số kỹ thuật, chuyên gia và chứng chỉ. Tự động cảnh báo hạn chứng chỉ giúp lập hồ sơ thầu nhanh chóng.',
      linkText: 'Tìm hiểu Capability Library',
      linkUrl: '/features#capability',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
    }
  ] as BladeFeatureZ[],

  // Blade 7: 6 Module MVP của Bidly
  productPortfolio: {
    heading: 'Bộ 6 Mô-đun Lõi Trọn Vòng Đời Đấu Thầu',
    cards: [
      {
        id: 'mod-1',
        title: 'M1 · Project Intelligence',
        borderColor: 'var(--stage-s0, #64748B)',
        badge: 'SÀNG LỌC TÍN HIỆU',
        description: 'Thu thập tín hiệu KCN, FDI; import Excel preview và mapping cột; kiểm tra trùng lặp, gắn người phụ trách.',
        linkText: 'Xem mô-đun M1',
        linkUrl: '/features#project-intel'
      },
      {
        id: 'mod-2',
        title: 'M2 · Pursuit & Go/No-Go',
        borderColor: 'var(--stage-s2, #8B5CF6)',
        badge: 'SCORECARD ĐỊNH LƯỢNG',
        description: 'Pipeline 9 giai đoạn; Scorecard Go/No-Go trọng số 0-100; tính giá trị pipeline theo xác suất thắng.',
        linkText: 'Xem mô-đun M2',
        linkUrl: '/features#gonogo'
      },
      {
        id: 'mod-3',
        title: 'M3 · Stakeholder Map',
        borderColor: 'var(--stage-s3, #0D9488)',
        badge: 'QUAN HỆ DỰ ÁN',
        description: 'Bản đồ bên liên quan theo dự án (Decision Maker, Influencer, Champion, Gatekeeper); ghi nhật ký tiếp xúc.',
        linkText: 'Xem mô-đun M3',
        linkUrl: '/features#stakeholder'
      },
      {
        id: 'mod-4',
        title: 'M4 · Tender Workspace',
        borderColor: 'var(--stage-s4, #0284C7)',
        badge: 'PHÒNG THẦU SỐ',
        description: 'Không gian làm việc theo vòng thầu; checklist 5 phòng ban; kiểm soát phiên bản và 1 bản final duy nhất.',
        linkText: 'Xem mô-đun M4',
        linkUrl: '/features#tender'
      },
      {
        id: 'mod-5',
        title: 'M5 · Capability Library',
        borderColor: 'var(--stage-s6, #4F46E5)',
        badge: 'TRI THỨC NĂNG LỰC',
        description: 'Thư viện dự án tiêu biểu (tonnage, diện tích), chuyên gia, máy móc và cảnh báo hạn chứng chỉ.',
        linkText: 'Xem mô-đun M5',
        linkUrl: '/features#capability'
      },
      {
        id: 'mod-6',
        title: 'M6 · Dashboard & Handover',
        borderColor: 'var(--stage-s8, #3F9E25)',
        badge: 'ĐIỀU HÀNH & BÀN GIAO',
        description: 'Control Tower điều hành, Deadline Heatmap 7-14-30 ngày, phân tích Win/Loss và Gói bàn giao S8 sang ERP.',
        linkText: 'Xem mô-đun M6',
        linkUrl: '/features#dashboard'
      }
    ] as BladeProductCard[],
    cta: {
      label: 'Xem tất cả tính năng chi tiết',
      url: '/features'
    }
  },

  // Blade 8: Cấu hình theo phân khúc tổng thầu
  businessScale: {
    mainHeading: 'Thiết kế chuyên biệt cho từng phân khúc nhà thầu công nghiệp',
    leftTitle: 'Từ nhà thầu MEP, Thép đến Tổng thầu EPC quy mô lớn',
    cards: [
      {
        id: 'scale-1',
        title: 'Tổng thầu EPC & Công nghiệp',
        borderColor: 'var(--stage-s4, #0284C7)',
        badge: 'TEMPLATE EPC',
        description: 'Quy mô 50-500 nhân sự, nhiều phòng ban. Quản lý đa gói thầu, phân quyền RBAC và Control Tower theo dõi tiến độ.',
        linkText: 'Giải pháp cho EPC',
        linkUrl: '/solutions#epc'
      },
      {
        id: 'scale-2',
        title: 'Nhà thầu MEP, PCCC & Kết cấu thép',
        borderColor: 'var(--stage-s3, #0D9488)',
        badge: 'TEMPLATE MEP & THÉP',
        description: 'Theo đuổi đồng thời hàng chục gói thầu. Kiểm soát deadline, tra cứu nhanh năng lực và quản lý mạng lưới CĐT/Tổng thầu.',
        linkText: 'Giải pháp cho MEP & Thép',
        linkUrl: '/solutions#mep'
      }
    ] as BladeScaleCard[],
    cta: {
      label: 'Khám phá giải pháp theo phân khúc',
      url: '/solutions'
    }
  },

  // Blade 9: Bối cảnh thị trường & số liệu
  customerLogos: {
    heading: 'Căn cứ thực tế & Khoảng trống số hóa xây dựng công nghiệp',
    cta: {
      label: 'Xem phân tích thị trường & giải pháp',
      url: '/why-bidly'
    }
  },

  // Blade 10: Bài viết & Cẩm nang chuyên môn
  articleCarousels: {
    mainHeading: 'Kiến thức thực chiến Quản trị Đấu thầu & Bảo mật Dữ liệu',
    row1: {
      leftTitle: 'Cẩm nang quản trị đấu thầu tiền xây dựng',
      cards: [
        {
          id: 'art-1',
          title: '5 dấu hiệu pipeline đấu thầu rò rỉ thông tin và cơ hội',
          borderColor: 'var(--stage-s0, #64748B)',
          description: 'Nhận diện lỗ hổng quy trình săn dự án khi vận hành bằng Excel, Zalo và email rời rạc.',
          linkText: 'Đọc cẩm nang',
          linkUrl: '/why-bidly'
        },
        {
          id: 'art-2',
          title: 'Thiết lập ma trận Scorecard Go/No-Go chuẩn cho tổng thầu',
          borderColor: 'var(--stage-s2, #8B5CF6)',
          description: 'Định lượng 6 tiêu chí: năng lực, quan hệ, giá, biên lợi nhuận, rủi ro và nguồn lực.',
          linkText: 'Xem hướng dẫn',
          linkUrl: '/features#gonogo'
        },
        {
          id: 'art-3',
          title: 'Kiểm soát phiên bản hồ sơ thầu: Tránh nộp nhầm file',
          borderColor: 'var(--stage-s4, #0284C7)',
          description: 'Bất biến 1 bản final và nộp có timestamp giúp loại bỏ hoàn toàn rủi ro nộp nhầm hồ sơ.',
          linkText: 'Xem quy trình',
          linkUrl: '/features#tender'
        },
        {
          id: 'art-4',
          title: 'Bản đồ bên liên quan (Stakeholder Map) theo dự án',
          borderColor: 'var(--stage-s3, #0D9488)',
          description: 'Phân loại 4 vai trò stakeholder và bảo vệ dữ liệu quan hệ doanh nghiệp.',
          linkText: 'Xem phương pháp',
          linkUrl: '/features#stakeholder'
        }
      ] as BladeArticleCard[]
    },
    row2: {
      leftTitle: 'Kiến trúc hệ thống & An toàn dữ liệu thầu',
      cards: [
        {
          id: 'art-5',
          title: 'Tại sao dữ liệu đấu thầu cần cô lập Private Cloud / On-premise?',
          borderColor: 'var(--stage-s8, #3F9E25)',
          description: 'Giá dự thầu là tài sản tối mật. Phân tích khác biệt SaaS dùng chung và Database riêng biệt.',
          linkText: 'Xem so sánh bảo mật',
          linkUrl: '/crm/pricing'
        },
        {
          id: 'art-6',
          title: 'Chuỗi thực thể chuẩn: Project → Pursuit → Package → Round → Submission',
          borderColor: 'var(--stage-s5, #2563EB)',
          description: 'Tại sao không thể gom quy trình thầu phức tạp vào một "Deal" của CRM bán lẻ.',
          linkText: 'Xem mô hình dữ liệu',
          linkUrl: '/crm/what-is-crm'
        },
        {
          id: 'art-7',
          title: 'Gói bàn giao tiền thi công (S8): Cầu nối CRM và ERP',
          borderColor: 'var(--stage-s6, #4F46E5)',
          description: 'Chuẩn hóa phạm vi, cam kết thương mại, giả định và rủi ro trước khi chuyển giao công trường.',
          linkText: 'Xem quy trình bàn giao',
          linkUrl: '/features#dashboard'
        },
        {
          id: 'art-8',
          title: 'Tuân thủ Luật Dữ liệu Cá nhân 91/2025/QH15 trong quản trị hồ sơ',
          borderColor: 'var(--stage-s1, #475569)',
          description: 'Quản lý thông tin nhân sự, chuyên gia và đối tác trong hồ sơ năng lực theo luật mới.',
          linkText: 'Xem tiêu chuẩn PDPA',
          linkUrl: '/crm/what-is-crm'
        }
      ] as BladeArticleCard[]
    }
  },

  // Blade 11: 3-Up Resource Cards Bottom
  resourceGridBottom: {
    heading: 'Tài nguyên quan trọng về Bidly',
    cards: [
      {
        id: 'res-bot-1',
        badge: 'Khái niệm & Định vị',
        headline: 'Preconstruction CRM là gì? Khác biệt với CRM & ERP',
        description: 'Vì sao tổng thầu công nghiệp cần hệ thống quản trị chuyên biệt từ tín hiệu đến bàn giao tiền thi công.',
        imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=768&q=80',
        linkText: 'Đọc bài phân tích',
        linkUrl: '/crm/what-is-crm',
        accentColor: 'var(--stage-s2, #8B5CF6)'
      },
      {
        id: 'res-bot-2',
        badge: 'So sánh & Lợi ích',
        headline: 'Vì sao chọn Bidly? So sánh 5 giải pháp thay thế',
        description: 'So sánh chi tiết Bidly với CRM phổ thông, CRM quốc tế, ERP xây dựng và tự phát triển.',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=768&q=80',
        linkText: 'Xem bảng so sánh',
        linkUrl: '/why-bidly',
        accentColor: 'var(--stage-s4, #0284C7)'
      },
      {
        id: 'res-bot-3',
        badge: 'Mô hình & Bảng giá',
        headline: 'Chương trình Design Partner Pilot & Bảng giá triển khai',
        description: 'Chương trình pilot 8-10 tuần trên dữ liệu thật cùng các gói Essential, Professional, Enterprise.',
        imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=768&q=80',
        linkText: 'Xem bảng giá chi tiết',
        linkUrl: '/crm/pricing',
        accentColor: 'var(--stage-s8, #3F9E25)'
      }
    ] as BladeResourceCard[]
  },

  // Blade 12: Contact Us 3 Action Pillars
  contactPillars: {
    heading: 'Chuyển đổi quy trình đấu thầu cùng Vtechcom',
    subheading: 'Chuyên gia Vtechcom sẵn sàng tư vấn giải pháp phù hợp quy mô và đặc thù doanh nghiệp.',
    pillars: [
      {
        id: 'pil-1',
        badge: 'CÁ NHÂN HÓA',
        title: 'Đặt lịch Demo 45 phút',
        description: 'Trải nghiệm demo trực tiếp trên quy trình thực tế ngành bạn (EPC, MEP, Thép), không demo chung chung.',
        ctaLabel: 'Đăng ký Demo',
        ctaUrl: '#demo',
        isPrimary: true
      },
      {
        id: 'pil-2',
        badge: 'KIỂM CHỨNG TRƯỚC',
        title: 'Design Partner Pilot',
        description: 'Thử nghiệm 8-10 tuần trên dữ liệu thật. Đo lường KPI adoption trước khi cam kết dài hạn.',
        ctaLabel: 'Tìm hiểu gói Pilot',
        ctaUrl: '/crm/pricing',
        isPrimary: false
      },
      {
        id: 'pil-3',
        badge: 'TƯ VẤN HẠ TẦNG',
        title: 'Tư vấn Kỹ thuật & Bảo mật',
        description: 'Giải đáp triển khai On-premise, Private Cloud, bảo mật cơ sở dữ liệu và tích hợp ERP sẵn có.',
        ctaLabel: 'Liên hệ chuyên gia',
        ctaUrl: '#demo',
        isPrimary: false
      }
    ]
  }
}
