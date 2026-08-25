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
            { label: 'Tính năng CRM Nổi bật', url: '/crm/features' },
            { label: 'Quy trình Triển khai CRM', url: '/crm/crm-implementation' },
            { label: 'Ví dụ & Câu chuyện Khách hàng', url: '/crm/examples' }
          ]
        },
        {
          categoryTitle: 'Quy mô Doanh nghiệp',
          items: [
            { label: 'Doanh nghiệp Vừa & Nhỏ (SMB)', url: '/crm/solutions/small-business', description: 'Gói giải pháp Starter Suite tinh gọn, dễ dùng.' },
            { label: 'Tập đoàn & Doanh nghiệp Lớn', url: '/crm/solutions/enterprise', description: 'Nền tảng mở rộng quy mô, bảo mật tối đa.' }
          ]
        }
      ]
    },
    {
      title: 'Giải pháp',
      categories: [
        {
          categoryTitle: 'Theo Quy mô',
          items: [
            { label: 'Doanh nghiệp Vừa & Nhỏ (SMB)', url: '/crm/solutions/small-business' },
            { label: 'Doanh nghiệp Lớn (Enterprise)', url: '/crm/solutions/enterprise' }
          ]
        },
        {
          categoryTitle: 'Tính năng & Năng lực',
          items: [
            { label: 'Agentic AI & Tự động hóa', url: '/crm/features#ai' },
            { label: 'Bán hàng & Phễu Lead', url: '/crm/features#sales' },
            { label: 'Dịch vụ Khách hàng Đa kênh', url: '/crm/features#service' }
          ]
        },
        {
          categoryTitle: 'Thực tiễn & Đánh giá',
          items: [
            { label: 'Câu chuyện Thành công', url: '/crm/examples' },
            { label: 'Lộ trình Triển khai Chuẩn', url: '/crm/crm-implementation' }
          ]
        }
      ]
    },
    {
      title: 'Tính năng',
      url: '/crm/features'
    },
    {
      title: 'Khách hàng',
      url: '/crm/examples'
    },
    {
      title: 'Bảng giá',
      url: '/crm/pricing'
    }
  ] as NavMenuGroup[]
}
