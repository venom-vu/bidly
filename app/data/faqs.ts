export interface FaqItem {
  id: string
  question: string
  answer: string
  category?: string
}

export const faqsData = {
  heading: 'Câu hỏi thường gặp về Bidly Preconstruction CRM',
  subheading: 'Giải đáp những thắc mắc về hệ thống quản trị đấu thầu, triển khai và bảo mật dữ liệu thầu của Vtechcom.',
  items: [
    {
      id: 'faq-1',
      question: 'Bidly Preconstruction CRM là gì? Khác gì CRM bán hàng thông thường?',
      answer: 'Bidly là hệ thống quản trị quá trình theo đuổi và giành dự án cho tổng thầu xây dựng công nghiệp, không phải CRM bán lẻ hay quản lý đơn hàng. Đối tượng trung tâm của Bidly là Pursuit (cơ hội đấu thầu), không phải Deal hay Order. Bidly quản lý toàn bộ chuỗi từ tín hiệu dự án đến Go/No-Go, hồ sơ thầu, kết quả và bàn giao tiền thi công (S8).'
    },
    {
      id: 'faq-2',
      question: 'State machine 9 giai đoạn là gì? Tại sao không thể bỏ qua các giai đoạn?',
      answer: 'Bidly có 9 giai đoạn cố định: S0 Signal, S1 Qualified, S2 Go/No-Go, S3 Pre-bid, S4 Tender active, S5 Submitted, S6 Clarification, S7 Outcome và S8 Handover. Năm giai đoạn có cổng cứng (S2, S4, S5, S7, S8) bắt buộc có quyết định, lý do và người phê duyệt được ghi nhận trước khi chuyển giai đoạn (kiểm soát ở máy chủ). Điều này đảm bảo dữ liệu pipeline phản ánh đúng thực tế.'
    },
    {
      id: 'faq-3',
      question: 'Go/No-Go Scorecard hoạt động như thế nào?',
      answer: 'Tại giai đoạn S2, người có thẩm quyền điền scorecard với 6 tiêu chí có trọng số (fit kỹ thuật, quan hệ CĐT, năng lực cạnh tranh giá, biên lợi nhuận, rủi ro, nguồn lực). Tổng điểm ra 0-100. Quyết định Go cho phép sang S3; No-Go tự động sang S7 (No-bid). Quyết định và lý do ghi nhận vĩnh viễn vào StageHistory và audit log.'
    },
    {
      id: 'faq-4',
      question: 'Tender Workspace kiểm soát phiên bản hồ sơ như thế nào?',
      answer: 'Mỗi vòng thầu (TenderRound) có không gian làm việc riêng với checklist 5 phòng ban và lịch sử nộp. Bất biến máy chủ: Chỉ được đánh dấu 1 bản final duy nhất trong một vòng. Chuyển từ S4 sang S5 chỉ được thực hiện khi đã nộp bản final (SUBMITTED) trong vòng thầu đang mở.'
    },
    {
      id: 'faq-5',
      question: 'Bidly phù hợp với những loại nhà thầu nào?',
      answer: 'Bidly được thiết kế cho ba phân khúc: (1) Tổng thầu EPC công nghiệp (50-500 nhân sự, nhiều phòng ban tham gia thầu, hợp đồng lớn); (2) Nhà thầu MEP, PCCC, xử lý nước (nhiều gói song song, quản lý deadline ngặt nghèo); (3) Kết cấu thép tiền chế (báo giá cạnh tranh, thư viện năng lực tonnage/khẩu độ).'
    },
    {
      id: 'faq-6',
      question: 'Capability Library giúp ích gì trong quá trình lập hồ sơ thầu?',
      answer: 'Capability Library (M5) lưu trữ dự án tiêu biểu, hồ sơ nhân sự, thiết bị, chứng chỉ và tài liệu năng lực theo tag và hạn hiệu lực. Khi chuẩn bị hồ sơ năng lực, đội thầu tìm kiếm theo ngành, loại công trình hoặc địa điểm. Hệ thống cảnh báo tự động khi chứng chỉ sắp hết hạn và bảo vệ tri thức không mất khi nhân sự nghỉ việc.'
    },
    {
      id: 'faq-7',
      question: 'Mô hình triển khai nào phù hợp với doanh nghiệp của tôi?',
      answer: 'Bidly có ba mô hình: (1) Design Partner Pilot: 8-10 tuần có hỗ trợ đầy đủ để kiểm chứng adoption; (2) Professional Private Cloud: database và backup riêng biệt do Vtechcom vận hành; (3) Enterprise On-premise: chạy trực tiếp trên hạ tầng khách hàng. Dữ liệu giá thầu luôn được cô lập 100%.'
    },
    {
      id: 'faq-8',
      question: 'Chi phí triển khai Bidly như thế nào? Có tính theo số user không?',
      answer: 'Bidly thu phí theo thực thể doanh nghiệp (Instance), không đếm số user nhằm khuyến khích 100% nhân sự liên phòng tham gia. Gói Design Partner Pilot trọn gói 35-60 triệu đồng (khấu trừ 100% khi ký hợp đồng năm). Các gói Professional và Enterprise theo thỏa thuận hạ tầng.'
    },
    {
      id: 'faq-9',
      question: 'Dữ liệu đấu thầu của chúng tôi có được bảo mật không?',
      answer: 'Bảo mật giá thầu là ưu tiên số một. Mỗi doanh nghiệp sở hữu cơ sở dữ liệu PostgreSQL độc lập, sao lưu định kỳ, lưu vết audit log append-only và tuân thủ Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15 hiệu lực từ 2026.'
    },
    {
      id: 'faq-10',
      question: 'Thời gian triển khai và onboard mất bao lâu?',
      answer: 'Design Partner Pilot: 8-10 tuần có hỗ trợ đầy đủ từ Vtechcom, bao gồm import dữ liệu từ Excel, cấu hình quy trình, đào tạo và đo KPI adoption. Vtechcom hỗ trợ import Excel có preview và mapping cột linh hoạt.'
    },
    {
      id: 'faq-11',
      question: 'Bidly có tích hợp được với ERP hoặc phần mềm quản lý thi công không?',
      answer: 'Bidly cung cấp API REST và Webhook. Bidly tập trung quản trị giai đoạn trước thi công và kết thúc tại Gói bàn giao S8 (Handover Pack) để chuyển dữ liệu chuẩn sang ERP hoặc phần mềm quản lý dự án công trường.'
    },
    {
      id: 'faq-12',
      question: 'Làm thế nào để bắt đầu với Bidly?',
      answer: 'Bước đầu tiên là đặt lịch Demo 45 phút được thiết kế riêng theo ngành của bạn (EPC, MEP hoặc Kết cấu thép). Sau buổi demo, Vtechcom sẽ đồng hành thiết lập gói Pilot kiểm chứng hiệu quả.'
    }
  ] as FaqItem[]
}
