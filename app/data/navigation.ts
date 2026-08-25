export interface NavMenuItem {
  label: string
  url: string
  description?: string
  eyebrow?: string
  badge?: string
}

export interface NavMenuGroup {
  title: string
  url?: string
  categories?: {
    categoryTitle?: string
    items: NavMenuItem[]
  }[]
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
      categories: [
        {
          categoryTitle: 'Bắt đầu tại đây',
          items: [
            {
              label: 'Khái niệm CRM',
              url: '/crm/what-is-crm',
              description: 'Xây dựng mối quan hệ vững chắc bằng cách kết nối toàn bộ đội ngũ quanh một góc nhìn khách hàng 360 độ.'
            }
          ]
        },
        {
          categoryTitle: 'Kỹ thuật & Tính năng',
          items: [
            { label: 'Phần mềm CRM', url: '/crm/what-is-crm' },
            { label: 'Quy trình Triển khai CRM', url: '/crm/what-is-crm#implementation' },
            { label: 'Tính năng CRM Nổi bật', url: '/crm/what-is-crm#features' }
          ]
        },
        {
          categoryTitle: 'Giá trị thực tiễn',
          items: [
            { label: 'Quy chuẩn tốt nhất (Best Practices)', url: '/crm/what-is-crm#practices' },
            { label: 'Lợi ích của CRM', url: '/crm/what-is-crm#benefits' },
            { label: 'Ví dụ & Câu chuyện thành công', url: '/crm/what-is-crm#examples' }
          ]
        }
      ]
    },
    {
      title: 'Giải pháp',
      categories: [
        {
          categoryTitle: 'Theo Quy mô Doanh nghiệp',
          items: [
            { label: 'Doanh nghiệp Vừa & Nhỏ (SMB)', url: '/crm/solutions/small-business', description: 'Gói giải pháp Starter Suite tinh gọn, dễ dùng.' },
            { label: 'Startup & Khởi nghiệp', url: '/crm/solutions/small-business' }
          ]
        },
        {
          categoryTitle: 'Theo Ngành nghề',
          items: [
            { label: 'CRM Bất động sản', url: '/crm/what-is-crm' },
            { label: 'B2B CRM Thương mại', url: '/crm/what-is-crm' }
          ]
        },
        {
          categoryTitle: 'Năng lực AI & Nền tảng',
          items: [
            { label: 'Agentic AI CRM', url: '/#blade-agentforce', badge: 'Mới' },
            { label: 'Tự động hóa Quy trình', url: '/#blade-automation' },
            { label: 'CRM Di động & Đám mây', url: '/crm/what-is-crm' }
          ]
        }
      ]
    },
    {
      title: 'Tài nguyên',
      categories: [
        {
          categoryTitle: 'Cẩm nang & Báo cáo',
          items: [
            { label: 'Chiến lược Triển khai CRM', url: '/crm/what-is-crm' },
            { label: 'Cơ sở dữ liệu Khách hàng', url: '/crm/what-is-crm' },
            { label: 'Generative CRM & AI', url: '/crm/what-is-crm' }
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
