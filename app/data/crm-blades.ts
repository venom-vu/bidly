export interface BladeResourceCard {
  id: string
  badge: string
  headline: string
  description: string
  imageUrl: string
  linkText: string
  linkUrl: string
}

export interface BladeCloudTab {
  id: string
  title: string
  eyebrow?: string
  headline: string
  description: string
  linkText: string
  linkUrl: string
  imageUrl: string
  features: string[]
}

export const crmBladesData = {
  // Blade 1: Marquee Hero
  hero: {
    eyebrow: 'Hệ thống Salesforce CRM',
    headlinePrefix: 'Hệ thống Agentic CRM số 1 Châu Á',
    headlineHighlight: 'vận hành Doanh nghiệp Tự động hóa bằng AI.',
    description: 'Thu hút thêm khách hàng tiềm năng, chốt nhiều hợp đồng hơn và thắt chặt mối quan hệ khách hàng bằng cách hợp nhất bán hàng, dịch vụ, marketing, thương mại và CNTT trên một nền tảng duy nhất.',
    primaryCta: {
      label: 'Xem bản Demo',
      url: '#demo'
    },
    secondaryCta: {
      label: 'Bắt đầu miễn phí',
      url: '/crm/free-trial'
    },
    media: {
      imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2026/04/3-up_Image2_CRM_16x9_1x.webp?w=1024',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  },

  // Blade 2: 3-Up Resource Cards
  resourceGridTop: {
    cards: [
      {
        id: 'res-1',
        badge: 'Tài nguyên',
        headline: 'CRM là gì và vì sao doanh nghiệp cần?',
        description: 'Tìm hiểu cách phần mềm quản lý quan hệ khách hàng giúp toàn bộ đội ngũ phối hợp để đặt khách hàng làm trung tâm của mọi tương tác.',
        imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2026/04/3-up_Image2_CRM_16x9_1x.webp?w=768',
        linkText: 'Tìm hiểu về CRM',
        linkUrl: '/crm/what-is-crm'
      },
      {
        id: 'res-2',
        badge: 'Bài viết chuyên sâu',
        headline: 'Tại sao CRM là nền tảng cốt lõi cho Doanh nghiệp AI Tự động hóa',
        description: 'Vượt trên việc lưu trữ dữ liệu, CRM cung cấp cho các AI Agent ngữ cảnh và quy tắc để giải quyết công việc thực tế với độ chính xác cao.',
        imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2025/10/TSK-44301_Why_CRM_Is_the_Trusted_Foundation.png?w=768',
        linkText: 'Đọc bài phân tích',
        linkUrl: '/crm/what-is-crm#benefits'
      },
      {
        id: 'res-3',
        badge: 'Starter Suite',
        headline: 'Trải nghiệm CRM tất-cả-trong-một – Miễn phí trong 30 ngày',
        description: 'Giải pháp CRM kết nối toàn bộ doanh nghiệp với marketing, bán hàng, chăm sóc khách hàng và thương mại – tích hợp AI tự động hóa khi bạn phát triển.',
        imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2026/03/smb-resource-starter-4.jpg?w=768',
        linkText: 'Dùng thử miễn phí',
        linkUrl: '/crm/free-trial'
      }
    ] as BladeResourceCard[]
  },

  // Blade 3: Heading
  heading1: {
    text: 'Giải pháp CRM phục vụ khách hàng tận tâm, bứt phá năng suất và tăng trưởng doanh thu.'
  },

  // Blade 4, 5, 6: Feature Z-Pattern
  featuresZPattern: [
    {
      id: 'feature-1',
      layout: 'image-right' as const,
      eyebrow: 'HỢP NHẤT DỮ LIỆU',
      headline: 'Xây dựng mối quan hệ bền chặt với góc nhìn 360 độ duy nhất về từng khách hàng.',
      description: 'Trao quyền cho nhân viên mang đến trải nghiệm cá nhân hóa vượt trội nhờ góc nhìn toàn diện về mọi tương tác qua từng phòng ban. Biến dữ liệu thô thành ngữ cảnh hữu ích và quy trình làm việc thành trí tuệ thông minh — tất cả trên một nền tảng duy nhất.',
      linkText: 'Khám phá Agentforce 360',
      linkUrl: '/crm/what-is-crm',
      imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2026/04/nUp_Image2_CRM_16x9_1x.webp?w=1024'
    },
    {
      id: 'feature-2',
      layout: 'image-left' as const,
      eyebrow: 'AGENTIC AI',
      headline: 'Tối ưu hóa quy trình chuyển giao giữa AI Agent và nhân viên nhờ trí tuệ tự hành.',
      description: 'Hành động nhanh hơn bằng cách cung cấp cho nhân sự và các AI Agent nền tảng cần thiết để làm việc liền mạch và hiệu quả trên mọi mắt xích của doanh nghiệp.',
      linkText: 'Xem cách thức hoạt động',
      linkUrl: '/crm/what-is-crm#ai',
      imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/09/1-up-crm-trusted-ai.jpg?w=1024'
    },
    {
      id: 'feature-3',
      layout: 'image-right' as const,
      eyebrow: 'CHUYÊN BIỆT THEO NGÀNH',
      headline: 'Khám phá các giải pháp được may đo chuyên biệt cho từng ngành nghề và quy mô.',
      description: 'Sở hữu giải pháp CRM được đúc kết từ hơn 25 năm kinh nghiệm thực chiến, quy chuẩn hàng đầu và yêu cầu chuyên sâu cho y tế, bán lẻ, công nghệ cao, tài chính, dịch vụ công và nhiều ngành khác.',
      linkText: 'Xem tất cả các ngành nghề',
      linkUrl: '/crm/what-is-crm#industries',
      imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/09/1-up-crm-industry-business-size.webp?w=1024'
    }
  ],

  // Blade 7 & 8: 5 Core Clouds Tabs
  productPortfolio: {
    heading: 'Một nền tảng CRM doanh nghiệp toàn diện cho mối quan hệ khách hàng vững mạnh',
    clouds: [
      {
        id: 'agentforce',
        title: 'Agentforce AI',
        eyebrow: 'TRÍ TUỆ NHÂN TẠO TỰ HÀNH',
        headline: 'Thúc đẩy năng suất và cá nhân hóa với các AI Agent hoạt động 24/7.',
        description: 'Tự động hóa các tác vụ phức tạp từ phân tích dữ liệu, soạn thảo email phản hồi đến giải quyết các yêu cầu hỗ trợ khách hàng đa kênh với độ chính xác cao.',
        linkText: 'Khám phá Agentforce AI',
        linkUrl: '/crm/what-is-crm',
        imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2026/04/nUp_Image2_CRM_16x9_1x.webp?w=800',
        features: ['AI Agent tự xử lý ticket', 'Phân tích dự báo hành vi khách hàng', 'Tích hợp mô hình LLM an toàn']
      },
      {
        id: 'sales-cloud',
        title: 'Sales Cloud',
        eyebrow: 'TĂNG TRƯỞNG DOANH SỐ',
        headline: 'Tăng tốc độ tăng trưởng và bứt phá doanh số với AI tích hợp sẵn.',
        description: 'Từ quản lý cơ hội tiềm năng, chấm điểm lead thông minh đến dự báo doanh thu chính xác – giúp đội ngũ kinh doanh chốt hợp đồng nhanh hơn 30%.',
        linkText: 'Tìm hiểu Sales Cloud',
        linkUrl: '/crm/what-is-crm',
        imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/09/1-up-crm-trusted-ai.jpg?w=800',
        features: ['Chấm điểm Lead Scoring bằng AI', 'Dự báo doanh số tự động', 'Tích hợp quản lý Pipeline trực quan']
      },
      {
        id: 'service-cloud',
        title: 'Service Cloud',
        eyebrow: 'DỊCH VỤ KHÁCH HÀNG',
        headline: 'Chuyển đổi chất lượng dịch vụ để nâng tầm trải nghiệm và lòng trung thành.',
        description: 'Hỗ trợ khách hàng đa kênh liền mạch (Omnichannel), định tuyến thông minh và cung cấp cho tổng đài viên đầy đủ lịch sử tương tác 360 độ.',
        linkText: 'Tìm hiểu Service Cloud',
        linkUrl: '/crm/what-is-crm',
        imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2026/04/3-up_Image2_CRM_16x9_1x.webp?w=800',
        features: ['Hỗ trợ đa kênh Omnichannel', 'Cổng tự phục vụ Self-service', 'Định tuyến ticket thông minh']
      },
      {
        id: 'marketing-cloud',
        title: 'Marketing Cloud',
        eyebrow: 'TIẾP THỊ CÁ NHÂN HÓA',
        headline: 'Thu hút khách hàng tiềm năng và tối ưu hóa hiệu quả chiến dịch.',
        description: 'Tự động hóa hành trình khách hàng qua Email, SMS, Mạng xã hội và Web, đo lường chính xác ROI cho từng chiến dịch tiếp thị.',
        linkText: 'Tìm hiểu Marketing Cloud',
        linkUrl: '/crm/what-is-crm',
        imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2025/10/TSK-44301_Why_CRM_Is_the_Trusted_Foundation.png?w=800',
        features: ['Bản đồ hành trình Customer Journey', 'Tự động hóa chiến dịch đa kênh', 'Phân khúc tệp khách hàng sâu']
      },
      {
        id: 'commerce-cloud',
        title: 'Commerce Cloud',
        eyebrow: 'THƯƠNG MẠI SỐ',
        headline: 'Đơn giản hóa trải nghiệm mua sắm và gia tăng giá trị đơn hàng.',
        description: 'Thiết lập trải nghiệm thương mại điện tử mượt mà cho cả mô hình B2B và B2C, cá nhân hóa đề xuất sản phẩm dựa trên hành vi mua sắm.',
        linkText: 'Tìm hiểu Commerce Cloud',
        linkUrl: '/crm/what-is-crm',
        imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2026/03/smb-resource-starter-4.jpg?w=800',
        features: ['Cá nhân hóa giỏ hàng', 'Quản lý danh mục sản phẩm thông minh', 'Tối ưu thanh toán đa cổng']
      }
    ] as BladeCloudTab[]
  },

  // Blade 9 & 10: Scale by Business Size
  businessScale: {
    heading: 'Từ doanh nghiệp nhỏ đến tập đoàn lớn, các tổ chức đều đang bứt phá mạnh mẽ cùng chúng tôi.',
    items: [
      {
        badge: 'DOANH NGHIỆP VỪA & NHỎ (SMB)',
        title: 'Starter Suite — Bộ công cụ CRM khởi đầu hoàn hảo',
        description: 'Tất cả những gì bạn cần để quản lý bán hàng, chăm sóc khách hàng và tiếp thị trong một ứng dụng duy nhất với mức giá tối ưu nhất.',
        price: 'Từ 25 USD / người dùng / tháng',
        linkText: 'Khám phá Starter Suite',
        linkUrl: '/crm/pricing'
      },
      {
        badge: 'TẬP ĐOÀN LỚN (ENTERPRISE)',
        title: 'Enterprise Platform — Nền tảng mở rộng quy mô không giới hạn',
        description: 'Hạ tầng bảo mật cấp doanh nghiệp, hỗ trợ hàng triệu giao dịch, tùy biến quy trình làm việc phức tạp và tích hợp đa hệ thống thông qua API mạnh mẽ.',
        price: 'Báo giá theo quy mô & nhu cầu tùy biến',
        linkText: 'Liên hệ tư vấn Enterprise',
        linkUrl: '/crm/free-trial'
      }
    ]
  },

  // Blade 11: Logo Grid & Case Studies
  customerLogos: {
    heading: 'Xem cách các thương hiệu hàng đầu chuyển đổi doanh nghiệp với CRM, AI và Dữ liệu.',
    logos: [
      { name: 'Good360', stat: '+45% năng suất vận hành', quote: 'Giải pháp CRM giúp chúng tôi kết nối hàng nghìn đối tác liền mạch.' },
      { name: 'Nexo', stat: 'Gấp đôi tốc độ phản hồi', quote: 'AI tự động hóa đã giảm một nửa thời gian xử lý yêu cầu khách hàng.' },
      { name: 'Precina', stat: '+32% tỷ lệ chốt đơn', quote: 'Đội ngũ bán hàng quản lý phễu cơ hội tiềm năng rõ ràng và chính xác hơn.' },
      { name: 'reMarkable', stat: 'Trải nghiệm 5 sao', quote: 'Góc nhìn khách hàng 360 độ giúp chúng tôi thấu hiểu từng người dùng.' },
      { name: 'Zota', stat: '+50% tăng trưởng doanh thu', quote: 'Nền tảng CRM là đòn bẩy quan trọng nhất cho chiến lược mở rộng thị trường.' }
    ]
  },

  // Blade 15: Resource Grid Bottom (Guides & Insights)
  resourceGridBottom: {
    heading: 'Cập nhật những xu hướng CRM mới nhất với cẩm nang hướng dẫn và báo cáo chuyên gia.',
    cards: [
      {
        id: 'guide-1',
        badge: 'Cẩm nang',
        headline: 'Biến tiềm năng AI thành hiện thực kinh doanh với hướng dẫn từng bước chi tiết',
        description: 'Khám phá lộ trình triển khai Agentic AI thực tế để tối ưu hóa quy trình bán hàng và chăm sóc khách hàng.',
        imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2026/08/BecomeAnAgenticEn_Hero-NewInsights4.webp?w=768',
        linkText: 'Tải cẩm nang miễn phí',
        linkUrl: '/crm/what-is-crm'
      },
      {
        id: 'guide-2',
        badge: 'Bản Demo',
        headline: 'Trải nghiệm trực quan nền tảng CRM qua bản tương tác đa tính năng',
        description: 'Tự mình thử nghiệm các tình huống quản lý khách hàng, giao dịch và phân tích báo cáo trực tiếp.',
        imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2025/09/portfolio_interactive_demo_resource_card.png?w=768',
        linkText: 'Thử nghiệm ngay',
        linkUrl: '/crm/what-is-crm'
      },
      {
        id: 'guide-3',
        badge: 'Báo cáo',
        headline: 'Tìm hiểu cách CRM kết nối các đội ngũ để tạo góc nhìn khách hàng 360 độ',
        description: 'Phân tích chi tiết về việc phá vỡ các rào cản phòng ban và nâng cao hiệu quả phối hợp nội bộ.',
        imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/07/n-up-resource-crm-bring-teams-together.jpg?w=768',
        linkText: 'Đọc báo cáo',
        linkUrl: '/crm/what-is-crm'
      }
    ] as BladeResourceCard[]
  },

  // Blade 16: Contact Us (3 Action Pillars)
  contactUs: {
    heading: 'Khám phá những gì có thể đạt được với Hệ thống Agentic CRM số 1.',
    pillars: [
      {
        id: 'pillar-trial',
        title: 'Bắt đầu dùng thử ngay',
        description: 'Trải nghiệm đầy đủ tính năng CRM miễn phí trong 30 ngày. Không yêu cầu thẻ tín dụng. Không cần cài đặt phần mềm phức tạp.',
        ctaText: 'Đăng ký dùng thử miễn phí',
        ctaUrl: '/crm/free-trial',
        icon: 'trial'
      },
      {
        id: 'pillar-expert',
        title: 'Trao đổi với chuyên gia',
        description: 'Tìm hiểu chi tiết về các gói giải pháp, bảng giá, quy trình triển khai hoặc các câu hỏi riêng cho mô hình kinh doanh của bạn.',
        ctaText: 'Gặp chuyên viên tư vấn',
        ctaUrl: '/crm/free-trial',
        icon: 'expert'
      },
      {
        id: 'pillar-newsletter',
        title: 'Đăng ký nhận bản tin',
        description: 'Cập nhật những phân tích thị trường mới nhất, góc nhìn từ các chuyên gia hàng đầu và tính năng sản phẩm mới trực tiếp qua email.',
        ctaText: 'Đăng ký nhận tin',
        ctaUrl: '/crm/free-trial',
        icon: 'email'
      }
    ]
  }
}
