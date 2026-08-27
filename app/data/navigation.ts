export interface NavMenuItem {
  label: string
  url: string
  description?: string
  eyebrow?: string
  badge?: string
}

export interface NavMenuCategory {
  categoryTitle?: string
  description?: string
  hasSeparator?: boolean
  items: NavMenuItem[]
}

export interface NavMenuGroup {
  title: string
  url?: string
  widthClass?: string
  categories?: NavMenuCategory[]
}

export const navigationData = {
  propertyTitle: {
    label: 'CRM',
    url: '/'
  },
  utilityNavigation: {
    tourCta: {
      label: 'Khám phá tour',
      url: '#demo-modal',
      variant: 'secondary' as const
    },
    freeTrialCta: {
      label: 'Bắt đầu miễn phí',
      url: '/crm/free-trial',
      variant: 'primary' as const
    }
  },
  mainMenu: [
    {
      title: 'Tổng quan',
      url: '/'
    },
    {
      title: 'CRM là gì?',
      widthClass: 'w-[780px]',
      categories: [
        {
          categoryTitle: 'Bắt đầu tại đây',
          hasSeparator: true,
          items: [
            {
              label: 'CRM là gì?',
              url: '/crm/what-is-crm',
              description: 'Xây dựng mối quan hệ vững chắc bằng cách kết nối toàn bộ đội ngũ quanh một góc nhìn khách hàng 360 độ.'
            }
          ]
        },
        {
          categoryTitle: 'Nền tảng & Kỹ thuật',
          hasSeparator: true,
          items: [
            { label: 'Phần mềm CRM', url: '/crm/software', description: 'Nền tảng AI CRM số 1 thế giới' },
            { label: 'Quy trình Triển khai', url: '/crm/crm-implementation', description: 'Lộ trình 5 bước chuẩn quốc tế' },
            { label: 'Tính năng CRM', url: '/crm/features', description: 'Trọn bộ công cụ bán hàng & CSKH' }
          ]
        },
        {
          categoryTitle: 'Thực tiễn & Hiệu quả',
          hasSeparator: false,
          items: [
            { label: 'Thực tiễn Tốt nhất', url: '/crm/best-practices', description: 'Bí quyết tối ưu hóa tỷ lệ chuyển đổi' },
            { label: 'Lợi ích của CRM', url: '/crm/benefits-of-crm', description: '10 lợi ích cốt lõi cho doanh nghiệp' },
            { label: 'Câu chuyện Khách hàng', url: '/crm/examples', description: 'Case study thực tế từ các thương hiệu' }
          ]
        }
      ]
    },
    {
      title: 'Giải pháp',
      widthClass: 'w-[960px]',
      categories: [
        {
          categoryTitle: 'Quy mô Doanh nghiệp',
          hasSeparator: true,
          items: [
            { label: 'Doanh nghiệp Nhỏ (SMB)', url: '/crm/solutions/small-business', description: 'Bộ Starter Suite nhanh gọn, dễ dùng' },
            { label: 'Doanh nghiệp Khởi nghiệp (Startup)', url: '/crm/solutions/startup-crm', description: 'Tối ưu chi phí cho công ty mới' },
            { label: 'Tập đoàn & Doanh nghiệp Lớn', url: '/crm/solutions/enterprise', description: 'Bảo mật cấp cao & mở rộng quy mô' }
          ]
        },
        {
          categoryTitle: 'Theo Ngành nghề',
          hasSeparator: true,
          items: [
            { label: 'Bất động sản & Xây dựng', url: '/crm/solutions/real-estate-crm', description: 'Quản lý dự án, giỏ hàng & đấu thầu' },
            { label: 'Doanh nghiệp B2B', url: '/crm/solutions/b2b-crm', description: 'Chu kỳ bán hàng dài & tài khoản lớn' }
          ]
        },
        {
          categoryTitle: 'Năng lực Cốt lõi',
          hasSeparator: true,
          items: [
            { label: 'AI CRM (Trí tuệ nhân tạo)', url: '/crm/solutions/ai-crm', description: 'Trợ lý AI tự hành 24/7' },
            { label: 'Tự động hóa Quy trình', url: '/crm/solutions/automation', description: 'Cắt giảm 80% tác vụ thủ công' },
            { label: 'Social CRM & Đa kênh', url: '/crm/solutions/social-crm', description: 'Hợp nhất Zalo OA, Chat, Email' },
            { label: 'Tùy biến Quy trình (Custom)', url: '/crm/solutions/custom-crm', description: 'Hard Gates & linh hoạt theo nhu cầu' }
          ]
        },
        {
          categoryTitle: 'Mở rộng & Báo cáo',
          hasSeparator: false,
          items: [
            { label: 'Mobile CRM (Di động)', url: '/crm/solutions/mobile-crm', description: 'Làm việc linh hoạt trên iOS & Android' },
            { label: 'Cloud CRM (Đám mây)', url: '/crm/solutions/cloud-crm', description: 'Truy cập dữ liệu an toàn mọi nơi' },
            { label: 'Báo cáo & Phân tích', url: '/crm/solutions/report', description: 'Dashboard trực quan theo thời gian thực' },
            { label: 'Quản lý Dự án & Bàn giao', url: '/crm/solutions/project-management', description: 'Theo dõi tiến độ & gói bàn giao S8' }
          ]
        }
      ]
    },
    {
      title: 'Tài nguyên',
      widthClass: 'w-[680px]',
      categories: [
        {
          categoryTitle: 'Tài nguyên & Hướng dẫn',
          hasSeparator: true,
          items: [
            { label: 'CRM Miễn phí', url: '/crm/resources/free-crm', description: 'Khám phá các công cụ và tiện ích miễn phí' },
            { label: 'CRM Tốt nhất', url: '/crm/resources/best-crm', description: 'Tiêu chí đánh giá hệ thống CRM hàng đầu' },
            { label: 'Chiến lược CRM Toàn diện', url: '/crm/resources/strategy', description: 'Xây dựng chiến lược lấy khách hàng làm trọng tâm' },
            { label: 'Tích hợp Hệ thống (API)', url: '/crm/resources/crm-integration', description: 'Kết nối API, ERP & phần mềm kế toán' }
          ]
        },
        {
          categoryTitle: 'Chuyên sâu & Khám phá',
          hasSeparator: false,
          items: [
            { label: 'Cơ sở Dữ liệu CRM', url: '/crm/resources/database', description: 'Quản trị dữ liệu lớn tập trung an toàn' },
            { label: 'Generative CRM (AI Tạo sinh)', url: '/crm/resources/generative-crm', description: 'Tạo nội dung và hỗ trợ tự động bằng AI' },
            { label: 'Chứng chỉ & Đào tạo', url: '/crm/resources/certification', description: 'Nâng cao kỹ năng quản trị hệ thống' },
            { label: 'Dùng thử 30 Ngày Miễn phí', url: '/crm/free-trial', description: 'Trải nghiệm trọn vẹn ngay hôm nay' }
          ]
        }
      ]
    },
    {
      title: 'Bảng giá',
      url: '/crm/pricing'
    }
  ] as NavMenuGroup[]
}
