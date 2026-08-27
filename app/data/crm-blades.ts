export interface BladeResourceCard {
  id: string
  badge: string
  headline: string
  description: string
  imageUrl: string
  linkText: string
  linkUrl: string
}

export interface BladeProductCard {
  id: string
  title: string
  borderColor: string
  description: string
  linkText: string
  linkUrl: string
}

export interface BladeScaleCard {
  id: string
  title: string
  borderColor: string
  description: string
  linkText: string
  linkUrl: string
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
  // Blade 1: Marquee Hero
  hero: {
    eyebrow: 'Hệ thống Bidly Preconstruction CRM',
    headlinePrefix: 'Hệ thống Agentic CRM số 1 Châu Á',
    headlineHighlight: 'vận hành Doanh nghiệp Tự động hóa bằng AI.',
    description: 'Thu hút thêm cơ hội tiềm năng, quản lý hồ sơ thầu chuẩn xác và thắt chặt mối quan hệ khách hàng bằng cách hợp nhất bán hàng, tiền dự án, dịch vụ và dữ liệu trên một nền tảng duy nhất.',
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

  // Blade 2: 3-Up Resource Cards Top (Heading 2)
  resourceGridTop: {
    heading: 'Giải pháp CRM bứt phá mọi mục tiêu',
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

  // Blade 3: Section Divider Heading 1 (Heading 3)
  heading1: {
    text: 'Tối ưu vận hành, bứt phá năng suất và doanh thu.'
  },

  // Blade 4, 5, 6: Feature Z-Pattern
  featuresZPattern: [
    {
      id: 'feature-1',
      layout: 'image-right' as const,
      eyebrow: 'HỢP NHẤT DỮ LIỆU',
      headline: 'Xây dựng mối quan hệ bền chặt với góc nhìn 360 độ về từng khách hàng.',
      description: 'Trao quyền cho nhân viên mang đến trải nghiệm cá nhân hóa vượt trội nhờ góc nhìn toàn diện về mọi tương tác qua từng phòng ban. Biến dữ liệu thô thành ngữ cảnh hữu ích và quy trình làm việc thành trí tuệ thông minh — tất cả trên một nền tảng duy nhất.',
      linkText: 'Khám phá Agentforce 360',
      linkUrl: '/crm/what-is-crm',
      imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2026/04/nUp_Image2_CRM_16x9_1x.webp?w=1024'
    },
    {
      id: 'feature-2',
      layout: 'image-left' as const,
      eyebrow: 'AGENTIC AI',
      headline: 'Tối ưu hóa chuyển giao giữa AI Agent và nhân viên.',
      description: 'Hành động nhanh hơn bằng cách cung cấp cho nhân sự và các AI Agent nền tảng cần thiết để làm việc liền mạch và hiệu quả trên mọi mắt xích của doanh nghiệp.',
      linkText: 'Xem cách thức hoạt động',
      linkUrl: '/crm/what-is-crm#ai',
      imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/09/1-up-crm-trusted-ai.jpg?w=1024'
    },
    {
      id: 'feature-3',
      layout: 'image-right' as const,
      eyebrow: 'CHUYÊN BIỆT THEO NGÀNH',
      headline: 'Giải pháp may đo theo từng ngành nghề và quy mô.',
      description: 'Sở hữu giải pháp CRM được đúc kết từ nhiều năm kinh nghiệm thực chiến, quy chuẩn hàng đầu và yêu cầu chuyên sâu cho xây dựng công nghiệp, y tế, bất động sản, tài chính và nhiều ngành khác.',
      linkText: 'Xem tất cả các ngành nghề',
      linkUrl: '/crm/what-is-crm#industries',
      imageUrl: 'https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/09/1-up-crm-industry-business-size.webp?w=1024'
    }
  ] as BladeFeatureZ[],

  // Blade 7 & 8: 5 Core Cloud Product Cards (Portfolio Grid)
  productPortfolio: {
    heading: 'Một nền tảng CRM cho mọi mối quan hệ khách hàng',
    cta: {
      label: 'Xem tất cả sản phẩm',
      url: '/crm/what-is-crm'
    },
    cards: [
      {
        id: 'agentforce',
        title: 'Agentforce AI',
        borderColor: 'var(--stage-s2)', // Purple
        description: 'Thúc đẩy năng suất và cá nhân hóa với các AI Agent hoạt động trên toàn bộ hệ thống CRM của bạn.',
        linkText: 'Khám phá AI',
        linkUrl: '/crm/what-is-crm#ai'
      },
      {
        id: 'sales-cloud',
        title: 'Sales & Preconstruction',
        borderColor: 'var(--stage-s3)', // Teal
        description: 'Tăng tốc độ tăng trưởng và bứt phá doanh số với AI tích hợp sẵn – từ quản lý cơ hội tiềm năng đến dự báo và đấu thầu.',
        linkText: 'Khám phá Sales Cloud',
        linkUrl: '/crm/features'
      },
      {
        id: 'service-cloud',
        title: 'Service Cloud',
        borderColor: 'var(--tone-info)', // Cyan
        description: 'Chuyển đổi chất lượng dịch vụ để nâng tầm trải nghiệm và sự tương tác của khách hàng với các quy trình tinh gọn, tự động hóa và vận hành dịch vụ.',
        linkText: 'Khám phá Service Cloud',
        linkUrl: '/crm/what-is-crm'
      },
      {
        id: 'marketing-cloud',
        title: 'Marketing Cloud',
        borderColor: 'var(--tone-warn)', // Amber
        description: 'Thu hút khách hàng. Tương tác hiệu quả. Tăng trưởng doanh thu. Xây dựng mối quan hệ dài lâu bằng cách đưa AI vào tiếp thị.',
        linkText: 'Khám phá Marketing Cloud',
        linkUrl: '/crm/what-is-crm'
      },
      {
        id: 'commerce-cloud',
        title: 'Commerce Cloud',
        borderColor: 'var(--primary)', // Brand Green
        description: 'Đơn giản hóa mọi quy trình từ thiết lập gian hàng số đến thúc đẩy doanh số tại mọi điểm chạm khách hàng với AI bản địa và tự động hóa.',
        linkText: 'Khám phá Commerce Cloud',
        linkUrl: '/crm/what-is-crm'
      }
    ] as BladeProductCard[]
  },

  // Blade 9 & 10: Scale by Business Size (SMB vs Enterprise)
  businessScale: {
    mainHeading: 'Đồng hành cùng mọi quy mô doanh nghiệp.',
    leftTitle: 'Giải pháp đúng theo quy mô của bạn',
    cta: {
      label: 'Xem bảng giá và các gói CRM',
      url: '/crm/pricing'
    },
    cards: [
      {
        id: 'crm-smb',
        title: 'CRM cho SMB & Startup',
        borderColor: 'var(--brand)', // Brand light green
        description: 'Doanh nghiệp trong mọi ngành nghề phát triển nhanh hơn cùng Bidly CRM. Bắt đầu ngay hôm nay với Starter Suite, giải pháp CRM tinh gọn cho doanh nghiệp vừa và nhỏ.',
        linkText: 'Khám phá Starter Suite',
        linkUrl: '/crm/solutions/small-business'
      },
      {
        id: 'crm-enterprise',
        title: 'Enterprise CRM',
        borderColor: 'var(--primary)', // Brand primary green
        description: 'CRM số 1 tích hợp AI tự hành và là nền tảng đáng tin cậy được thiết kế đáp ứng các nhu cầu phức tạp nhất của tổ chức. Bạn có thể mở rộng quy mô không giới hạn trên một nền tảng duy nhất.',
        linkText: 'Xem tất cả sản phẩm',
        linkUrl: '/crm/solutions/enterprise'
      }
    ] as BladeScaleCard[]
  },

  // Blade 11: Logo Grid & Case Studies
  customerLogos: {
    heading: 'Khách hàng bứt phá cùng CRM, AI và Dữ liệu.',
    cta: {
      label: 'Xem tất cả câu chuyện khách hàng',
      url: '/crm/examples'
    },
    logos: [
      {
        id: 'good360',
        name: 'Good360',
        color: '#70B62C',
        stat: '+45% năng suất vận hành',
        quote: 'Giải pháp CRM giúp chúng tôi kết nối hàng nghìn đối tác liền mạch.'
      },
      {
        id: 'nexo',
        name: 'NEXO',
        color: '#1A1A1A',
        stat: 'Gấp đôi tốc độ phản hồi',
        quote: 'AI tự động hóa đã giảm một nửa thời gian xử lý yêu cầu khách hàng.'
      },
      {
        id: 'precina',
        name: 'Precina',
        color: '#0085CA',
        stat: '+32% tỷ lệ chốt đơn',
        quote: 'Đội ngũ bán hàng quản lý phễu cơ hội tiềm năng rõ ràng và chính xác hơn.'
      },
      {
        id: 'remarkable',
        name: 'reMarkable',
        color: '#111111',
        stat: 'Trải nghiệm 5 sao',
        quote: 'Góc nhìn khách hàng 360 độ giúp chúng tôi thấu hiểu từng người dùng.'
      },
      {
        id: 'zota',
        name: 'zota',
        color: '#0052CC',
        stat: '+50% tăng trưởng doanh thu',
        quote: 'Nền tảng CRM là đòn bẩy quan trọng nhất cho chiến lược mở rộng thị trường.'
      }
    ]
  },

  // Blade 12, 13, 14: Article Carousels (Business Types & Topics)
  articleCarousels: {
    mainHeading: 'Kiến thức và cẩm nang thực chiến về CRM.',
    row1: {
      leftTitle: 'CRM theo loại hình doanh nghiệp',
      cards: [
        {
          id: 'art-smb',
          title: 'CRM cho Doanh nghiệp nhỏ',
          borderColor: 'var(--brand)',
          description: 'Vận hành một doanh nghiệp nhỏ chưa bao giờ là dễ dàng, nhưng việc tìm đúng giải pháp CRM có thể tạo nên bước ngoặt lớn.',
          linkText: 'Đọc bài viết',
          linkUrl: '/crm/solutions/small-business'
        },
        {
          id: 'art-startup',
          title: 'CRM cho Doanh nghiệp khởi nghiệp',
          borderColor: 'var(--stage-s3)',
          description: 'Tìm hiểu cách CRM giúp tinh gọn quy trình, khai phá dữ liệu chi tiết và làm sâu sắc mối quan hệ với khách hàng và các bên liên quan.',
          linkText: 'Đọc bài viết',
          linkUrl: '/crm/what-is-crm'
        },
        {
          id: 'art-real-estate',
          title: 'CRM cho Bất động sản & Xây dựng',
          borderColor: 'var(--tone-info)',
          description: 'Chuyển đổi hoạt động kinh doanh bằng cách tổ chức danh bạ tập trung, tự động hóa tác vụ và cải thiện việc ra quyết định.',
          linkText: 'Đọc bài viết',
          linkUrl: '/crm/what-is-crm'
        },
        {
          id: 'art-b2b',
          title: 'CRM cho B2B & Tổng thầu',
          borderColor: 'var(--stage-s2)',
          description: 'Tìm hiểu cách các tính năng CRM đóng vai trò then chốt trong quy trình bán hàng B2B đặc thù và mở rộng quy mô.',
          linkText: 'Đọc bài viết',
          linkUrl: '/crm/features'
        }
      ] as BladeArticleCard[]
    },
    row2: {
      leftTitle: 'Các chủ đề CRM then chốt',
      cards: [
        {
          id: 'art-best-practices',
          title: 'Thực tiễn CRM Tốt nhất',
          borderColor: 'var(--primary)',
          description: 'Khai thác tối đa tiềm năng CRM và thiết lập nền tảng thành công cho doanh nghiệp của bạn với 8 bước tối ưu này.',
          linkText: 'Đọc bài viết',
          linkUrl: '/crm/what-is-crm#best-practices'
        },
        {
          id: 'art-database',
          title: 'Cơ sở Dữ liệu CRM',
          borderColor: 'var(--stage-s3)',
          description: 'Sử dụng dữ liệu khách hàng để thắt chặt mối quan hệ và tinh gọn hiệu suất làm việc trên tất cả kênh và phòng ban.',
          linkText: 'Đọc bài viết',
          linkUrl: '/crm/what-is-crm'
        },
        {
          id: 'art-strategy',
          title: 'Chiến lược CRM',
          borderColor: 'var(--tone-info)',
          description: 'Làm theo các bước chỉ dẫn để xây dựng kế hoạch triển khai và ứng dụng CRM toàn diện nhất.',
          linkText: 'Đọc bài viết',
          linkUrl: '/crm/crm-implementation'
        },
        {
          id: 'art-automation',
          title: 'Tự động hóa CRM',
          borderColor: 'var(--stage-s2)',
          description: 'Tự động hóa các tác vụ lặp đi lặp lại để đội ngũ của bạn tập trung vào điều quan trọng nhất: khách hàng.',
          linkText: 'Đọc bài viết',
          linkUrl: '/crm/features'
        }
      ] as BladeArticleCard[]
    }
  },

  // Blade 15: Resource Grid Bottom (Guides & Insights)
  resourceGridBottom: {
    heading: 'Xu hướng CRM, cẩm nang và báo cáo chuyên sâu.',
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
    heading: 'Khám phá sức mạnh của Bidly Preconstruction CRM.',
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
