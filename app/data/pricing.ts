export interface PricingTier {
  id: string
  name: string
  badge?: string
  price: string
  period: string
  description: string
  popular?: boolean
  features: string[]
  ctaLabel: string
  ctaUrl: string
  ctaVariant: 'primary' | 'secondary'
}

export const pricingData = {
  heading: 'Chọn gói giải pháp CRM phù hợp nhất với doanh nghiệp của bạn',
  subheading: 'Khởi đầu nhanh chóng, dễ dàng mở rộng và tối ưu hóa chi phí với các gói cước linh hoạt từ bidly.',
  tiers: [
    {
      id: 'free-suite',
      name: 'Free Suite',
      badge: 'MIỄN PHÍ TRỌN ĐỜI',
      price: '0 USD',
      period: 'người dùng / tháng',
      description: 'Dành cho cá nhân hoặc đội ngũ khởi nghiệp cần quản lý danh bạ khách hàng cơ bản.',
      popular: false,
      features: [
        'Quản lý tối đa 500 khách hàng tiềm năng',
        'Lưu trữ lịch sử tương tác và ghi chú',
        'Bảng theo dõi giao dịch dạng Kanban cơ bản',
        'Ứng dụng di động iOS & Android',
        'Hỗ trợ cộng đồng trực tuyến'
      ],
      ctaLabel: 'Bắt đầu miễn phí',
      ctaUrl: '/crm/free-trial',
      ctaVariant: 'secondary'
    },
    {
      id: 'starter-suite',
      name: 'Starter Suite',
      badge: 'PHỔ BIẾN NHẤT CHO SMB',
      price: '25 USD',
      period: 'người dùng / tháng (thanh toán hàng năm)',
      description: 'Giải pháp tất-cả-trong-một cho doanh nghiệp vừa và nhỏ cần kết hợp Bán hàng, Tiếp thị & CSKH.',
      popular: true,
      features: [
        'Toàn bộ tính năng của gói Free',
        'Tích hợp Email Marketing tự động',
        'Chấm điểm cơ hội bán hàng (Lead Scoring)',
        'Quản lý Ticket chăm sóc khách hàng đa kênh',
        'Báo cáo doanh số và hiệu suất kinh doanh trực quan',
        'Tích hợp sẵn AI hỗ trợ soạn thảo & tóm tắt',
        'Hỗ trợ kỹ thuật tiêu chuẩn 24/5'
      ],
      ctaLabel: 'Dùng thử 30 ngày',
      ctaUrl: '/crm/free-trial',
      ctaVariant: 'primary'
    },
    {
      id: 'pro-suite',
      name: 'Pro Suite',
      badge: 'TĂNG TRƯỞNG MẠNH MẼ',
      price: '100 USD',
      period: 'người dùng / tháng (thanh toán hàng năm)',
      description: 'Dành cho các doanh nghiệp đang mở rộng quy mô cần tự động hóa nâng cao và dự báo AI.',
      popular: false,
      features: [
        'Toàn bộ tính năng của gói Starter',
        'Tự động hóa quy trình nghiệp vụ phức tạp (Workflows)',
        'Dự báo doanh thu thông minh với AI',
        'Phân quyền người dùng và kiểm soát truy cập nâng cao',
        'Cổng thanh toán và báo giá trực tuyến',
        'Kết nối không giới hạn qua REST API',
        'Hỗ trợ kỹ thuật ưu tiên 24/7'
      ],
      ctaLabel: 'Dùng thử gói Pro',
      ctaUrl: '/crm/free-trial',
      ctaVariant: 'secondary'
    }
  ] as PricingTier[],

  successPlans: {
    heading: 'Đạt được mục tiêu nhanh hơn với các Kế hoạch Đồng hành (Success Plans)',
    plans: [
      {
        name: 'Standard Success',
        description: 'Tài liệu hướng dẫn trực tuyến, bài học Trailhead và hỗ trợ kỹ thuật tiêu chuẩn trong giờ hành chính.',
        included: 'Đã bao gồm trong mọi giấy phép sản phẩm'
      },
      {
        name: 'Premier Success',
        description: 'Hỗ trợ kỹ thuật chuyên sâu 24/7, thời gian phản hồi cam kết dưới 1 giờ cho các sự cố khẩn cấp.',
        included: 'Bổ sung theo tỷ lệ phần trăm giấy phép'
      },
      {
        name: 'Signature Success',
        description: 'Chuyên gia tư vấn giải pháp riêng biệt, giám sát chủ động và tối ưu hóa kiến trúc định kỳ.',
        included: 'Dành cho các tổ chức quy mô lớn và trọng yếu'
      }
    ]
  }
}
