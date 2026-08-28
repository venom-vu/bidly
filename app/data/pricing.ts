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
  heading: 'Lựa Chọn Mô Hình Triển Khai Phù Hợp Với Quy Mô & Tiêu Chuẩn Bảo Mật',
  subheading: 'Bidly tính phí theo thực thể doanh nghiệp (Instance) và cấu hình hạ tầng, không tính theo số người dùng, giúp toàn bộ các phòng ban phối hợp không giới hạn.',
  tiers: [
    {
      id: 'pilot',
      name: 'Design Partner Pilot',
      price: '35 - 60 triệu',
      period: 'VNĐ / trọn gói 8-10 tuần',
      description: 'Triển khai có đồng hành toàn diện trên dữ liệu thật. Kiểm chứng mức độ ứng dụng và đo lường KPI thực tế trước khi cam kết dài hạn.',
      popular: false,
      features: [
        '1 đơn vị kinh doanh (Business Unit), 10-20 nhân sự tham gia',
        'Hỗ trợ kỹ thuật import và làm sạch dữ liệu từ Excel',
        'Cấu hình quy trình 9 giai đoạn và Scorecard theo phân khúc',
        'Đào tạo chuyên sâu theo từng phòng ban tham gia thầu',
        'Đo lường các chỉ số ứng dụng (Adoption KPI) sau 6-8 tuần',
        'Hoàn lại 100% phí pilot (khấu trừ vào hợp đồng năm)',
        'Đồng hành trực tiếp từ đội ngũ chuyên gia giải pháp Vtechcom'
      ],
      ctaLabel: 'Tìm hiểu gói Pilot',
      ctaUrl: '#demo',
      ctaVariant: 'secondary'
    },
    {
      id: 'essential',
      name: 'Essential Private Cloud',
      price: '7 - 12 triệu',
      period: 'VNĐ / tháng (+ 30-60 triệu khởi tạo)',
      description: 'Đầy đủ mô-đun lõi trên hạ tầng Private Cloud chuẩn. Tối ưu cho nhà thầu MEP, Kết cấu thép và Tổng thầu quy mô vừa muốn vận hành nhanh.',
      popular: true,
      features: [
        'Toàn bộ 6 mô-đun nghiệp vụ lõi (M1 - M6)',
        'Pipeline 9 giai đoạn với 5 cổng kiểm soát cứng',
        'Scorecard Go/No-Go tùy biến tiêu chí trọng số',
        'Tender Workspace phân rã checklist và kiểm soát phiên bản',
        'Capability Library số hóa kho tri thức năng lực',
        'Control Tower dự báo pipeline và phân tích Win/Loss',
        'Phân quyền RBAC 5 vai trò và lưu vết Audit Log',
        'Hỗ trợ kỹ thuật và bảo trì định kỳ'
      ],
      ctaLabel: 'Đặt lịch Demo',
      ctaUrl: '#demo',
      ctaVariant: 'primary'
    },
    {
      id: 'professional',
      name: 'Professional Dedicated',
      price: '15 - 30 triệu',
      period: 'VNĐ / tháng (+ 80-150 triệu khởi tạo & di trú)',
      description: 'Cơ sở dữ liệu PostgreSQL độc lập và backup riêng biệt do Vtechcom vận hành. Dành cho tổng thầu yêu cầu bảo mật dữ liệu giá thầu tuyệt đối.',
      popular: false,
      features: [
        'Toàn bộ tính năng của gói Essential',
        'Cơ sở dữ liệu PostgreSQL riêng biệt, cô lập 100%',
        'Quy trình sao lưu tự động và kiểm thử phục hồi định kỳ',
        'Audit Log nâng cao (ghi nhận mọi thao tác xem, sửa, xuất dữ liệu)',
        'Tùy biến luồng phê duyệt và mẫu thông báo theo yêu cầu',
        'Cấp quyền hỗ trợ kỹ thuật có thời hạn và có kiểm toán',
        'Cam kết chất lượng dịch vụ (SLA) phản hồi ưu tiên',
        'Đồng hành di trú và chuẩn hóa dữ liệu lịch sử'
      ],
      ctaLabel: 'Đặt lịch tư vấn',
      ctaUrl: '#demo',
      ctaVariant: 'secondary'
    }
  ] as PricingTier[],

  enterpriseTier: {
    heading: 'Enterprise: Triển Khai On-premise hoặc Customer Cloud',
    description: 'Dành cho tập đoàn xây dựng hoặc tổng thầu có chính sách an toàn thông tin nghiêm ngặt. Hệ thống cài đặt trực tiếp trên máy chủ nội bộ hoặc hạ tầng đám mây riêng của khách hàng, tích hợp SSO doanh nghiệp, tùy biến sâu và cam kết SLA riêng biệt. Chi phí theo thỏa thuận triển khai.',
    ctaLabel: 'Liên hệ tư vấn Enterprise',
    ctaUrl: '#demo'
  },

  successPlans: {
    heading: 'Chương Trình Đồng Hành Triển Khai & Đảm Bảo Thành Công',
    plans: [
      {
        name: 'Onboarding & Chuẩn hóa dữ liệu',
        description: 'Hỗ trợ nhập dữ liệu từ Excel, ánh xạ trường thông tin, khử trùng lặp và đối soát. Thiết lập Scorecard và quy trình khớp với thực tế vận hành.',
        included: 'Bao gồm trong tất cả các gói'
      },
      {
        name: 'Đào tạo theo phân quyền vai trò',
        description: 'Chương trình đào tạo chuyên biệt cho Ban điều hành, Trưởng phòng Kinh doanh, Đội ngũ Đấu thầu, Kỹ thuật và Dự toán theo đúng phân quyền hệ thống.',
        included: 'Bao gồm trong Professional & Enterprise'
      },
      {
        name: 'Đánh giá & Đo lường KPI ứng dụng',
        description: 'Sau 6-8 tuần, Vtechcom cùng khách hàng đánh giá các chỉ số cốt lõi: tỷ lệ cơ hội có việc tiếp theo, tỷ lệ quyết định Go/No-Go có căn cứ và tần suất sử dụng thực tế.',
        included: 'Dành cho Design Partner Pilot'
      }
    ]
  }
}
