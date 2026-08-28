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
  heading: 'Chọn mô hình triển khai phù hợp với quy mô và yêu cầu bảo mật của bạn',
  subheading: 'Bidly thu phí theo doanh nghiệp (Instance) và mức độ hạ tầng, không tính theo số user. Không giới hạn số lượng tài khoản xem và phê duyệt.',
  tiers: [
    {
      id: 'pilot',
      name: 'Design Partner Pilot',
      badge: 'KHỞI ĐẦU ĐƯỢC KHUYẾN NGHỊ',
      price: '35 - 60 triệu',
      period: 'trọn gói 8-10 tuần',
      description: 'Triển khai có hỗ trợ đầy đủ trên dữ liệu thật của bạn. Kiểm chứng adoption và đo KPI trước khi cam kết dài hạn.',
      popular: false,
      features: [
        '1 business unit, 10-20 người tham gia',
        'Import dữ liệu từ Excel có hỗ trợ kỹ thuật',
        'Cấu hình quy trình và scorecard theo ngành',
        'Đào tạo và onboard từng phòng ban',
        'Đo lường KPI adoption sau 6-8 tuần',
        'Phí pilot khấu trừ 100% khi ký hợp đồng năm',
        'Đồng hành trực tiếp từ đội ngũ chuyên gia Vtechcom'
      ],
      ctaLabel: 'Tìm hiểu gói Pilot',
      ctaUrl: '#demo',
      ctaVariant: 'secondary'
    },
    {
      id: 'essential',
      name: 'Essential SaaS',
      badge: 'PHÙ HỢP CHO NHÀ THẦU VỪA',
      price: '7 - 12 triệu',
      period: 'tháng + 30-60 triệu onboarding',
      description: 'Mô-đun lõi trên nền Private Cloud chuẩn. Cho nhà thầu MEP, kết cấu thép và tổng thầu vừa muốn triển khai nhanh.',
      popular: true,
      features: [
        'Toàn bộ mô-đun M1-M6 lõi',
        'Pipeline 9 giai đoạn với 5 cổng cứng chuẩn',
        'Scorecard Go/No-Go cấu hình trọng số',
        'Tender Workspace kiểm soát phiên bản',
        'Capability Library M5 quản lý năng lực',
        'Dashboard forecast và phân tích Win/Loss',
        'Audit log và phân quyền RBAC ở máy chủ',
        'Hỗ trợ kỹ thuật tiêu chuẩn'
      ],
      ctaLabel: 'Đặt lịch Demo',
      ctaUrl: '#demo',
      ctaVariant: 'primary'
    },
    {
      id: 'professional',
      name: 'Professional Private',
      badge: 'KHUYẾN NGHỊ CHO TỔNG THẦU LỚN',
      price: '15 - 30 triệu',
      period: 'tháng + 80-150 triệu onboarding',
      description: 'Database và backup riêng biệt, Vtechcom vận hành. Phù hợp với tổng thầu quan tâm bảo mật dữ liệu giá thầu tuyệt đối.',
      popular: false,
      features: [
        'Toàn bộ tính năng gói Essential',
        'Database PostgreSQL riêng biệt, cô lập 100%',
        'Backup định kỳ có kiểm thử restore',
        'Audit log nâng cao (xem, sửa, tải, xuất)',
        'Workflow và mẫu thông báo tùy chỉnh',
        'Quyền hỗ trợ Vtechcom có thời hạn và audit',
        'Cam kết SLA phản hồi ưu tiên',
        'Hỗ trợ import và di trú dữ liệu lịch sử'
      ],
      ctaLabel: 'Đặt lịch tư vấn',
      ctaUrl: '#demo',
      ctaVariant: 'secondary'
    }
  ] as PricingTier[],

  enterpriseTier: {
    heading: 'Enterprise : On-premise hoặc Customer Cloud',
    description: 'Dành cho tập đoàn hoặc tổng thầu có chính sách IT nghiêm ngặt. Chạy trực tiếp trên hạ tầng riêng của khách hàng, tích hợp SSO doanh nghiệp, SLA và chính sách vận hành riêng. Giá theo thỏa thuận triển khai.',
    ctaLabel: 'Liên hệ tư vấn Enterprise',
    ctaUrl: '#demo'
  },

  successPlans: {
    heading: 'Chương trình Design Partner : Đồng hành từ ngày đầu',
    plans: [
      {
        name: 'Onboarding & Migration',
        description: 'Hỗ trợ import dữ liệu từ Excel, mapping cột, dedup và báo cáo đối soát. Cấu hình scorecard và workflow theo đúng quy trình của bạn.',
        included: 'Bao gồm trong tất cả các gói'
      },
      {
        name: 'Đào tạo theo phòng ban',
        description: 'Đào tạo riêng cho BD, đội thầu, kỹ thuật và lãnh đạo theo vai trò và quyền hạn trong hệ thống.',
        included: 'Bao gồm trong Professional & Enterprise'
      },
      {
        name: 'Đo lường KPI Adoption',
        description: 'Sau 6-8 tuần, Vtechcom cùng khách hàng đánh giá các KPI: tỷ lệ pursuit có owner/stage/next-action, tỷ lệ Go/No-Go có ghi nhận, adoption rate theo phòng ban.',
        included: 'Dành cho Design Partner Pilot'
      }
    ]
  }
}
