export interface FaqItem {
  id: string
  question: string
  answer: string
  category?: string
}

export const faqsData = {
  heading: 'Câu hỏi thường gặp về phần mềm CRM',
  subheading: 'Giải đáp những thắc mắc phổ biến nhất về quản trị quan hệ khách hàng, triển khai và bảo mật đám mây.',
  items: [
    {
      id: 'faq-1',
      question: 'Salesforce CRM là gì và hoạt động như thế nào?',
      answer: 'Salesforce CRM là hệ thống phần mềm quản trị quan hệ khách hàng tích hợp trí tuệ nhân tạo (AI), giúp doanh nghiệp thu hút khách hàng tiềm năng, chốt nhiều đơn hàng hơn và mang lại dịch vụ khách hàng vượt trội. Nền tảng hợp nhất tất cả dữ liệu từ các bộ phận bán hàng, marketing, dịch vụ và thương mại trên một góc nhìn 360 độ duy nhất.'
    },
    {
      id: 'faq-2',
      question: 'Hệ thống CRM này có hoạt động trên nền tảng đám mây (Cloud-based) không?',
      answer: 'Đúng vậy. Đây là nền tảng SaaS (Phần mềm dưới dạng dịch vụ) hoạt động 100% trên nền tảng điện toán đám mây. Bạn có thể truy cập mọi lúc, mọi nơi từ trình duyệt web hoặc ứng dụng di động mà không cần đầu tư máy chủ vật lý hay hạ tầng CNTT phức tạp.'
    },
    {
      id: 'faq-3',
      question: 'Chi phí sử dụng phần mềm CRM là bao nhiêu?',
      answer: 'Chúng tôi cung cấp nhiều gói cước linh hoạt phù hợp với mọi quy mô: Gói Free Suite miễn phí khởi đầu, Gói Starter Suite chỉ từ 25 USD/người dùng/tháng dành cho doanh nghiệp vừa & nhỏ (SMB), và Gói Pro Suite 100 USD/người dùng/tháng cho các doanh nghiệp đang tăng trưởng mạnh.'
    },
    {
      id: 'faq-4',
      question: 'Doanh nghiệp thuộc ngành nghề nào nên sử dụng CRM?',
      answer: 'Phần mềm được thiết kế tùy biến linh hoạt cho mọi ngành nghề: Bất động sản, Bán lẻ, Thương mại B2B, Tài chính - Ngân hàng, Y tế, Công nghệ thông tin, Sản xuất và Dịch vụ công. Hơn 25 năm kinh nghiệm thực chiến đã được đúc kết thành các bộ quy chuẩn theo ngành.'
    },
    {
      id: 'faq-5',
      question: 'Phần mềm CRM giúp đội ngũ kinh doanh (Sales) tăng doanh số ra sao?',
      answer: 'Sales Cloud giúp nhân viên bán hàng tự động hóa nhập liệu, chấm điểm cơ hội (Lead Scoring) bằng AI, quản lý toàn bộ phễu bán hàng (Pipeline) và dự báo doanh thu chính xác. Nhờ đó, đội ngũ kinh doanh tiết kiệm hàng giờ mỗi tuần và chốt hợp đồng nhanh hơn 30%.'
    },
    {
      id: 'faq-6',
      question: 'CRM có chỉ dành riêng cho đội ngũ bán hàng không?',
      answer: 'Hoàn toàn không. Bán hàng chỉ là một phần của hệ thống CRM toàn diện. Nền tảng còn bao gồm Service Cloud (Chăm sóc khách hàng), Marketing Cloud (Tiếp thị tự động), Commerce Cloud (Thương mại số) và Nền tảng dữ liệu Data Cloud, kết nối mọi phòng ban xoay quanh khách hàng.'
    },
    {
      id: 'faq-7',
      question: 'Phần mềm có tích hợp được với các ứng dụng hiện có của chúng tôi không?',
      answer: 'Có. Nền tảng hỗ trợ tích hợp mạnh mẽ thông qua REST APIs, Webhooks và nền tảng MuleSoft. Bạn có thể dễ dàng kết nối dữ liệu với hệ thống ERP, phần mềm kế toán, cổng thanh toán, Google Workspace, Microsoft 365, Slack và hàng trăm ứng dụng bên thứ ba.'
    },
    {
      id: 'faq-8',
      question: 'Dữ liệu của doanh nghiệp chúng tôi có được bảo mật an toàn không?',
      answer: 'Bảo mật và Tin cậy là giá trị cốt lõi số 1. Toàn bộ dữ liệu được mã hóa ở trạng thái lưu trữ (Encryption at Rest) và truyền tải (In Transit) chuẩn TLS 1.3, tuân thủ các tiêu chuẩn quốc tế nghiêm ngặt như ISO 27001, SOC 2 Type II và GDPR.'
    },
    {
      id: 'faq-9',
      question: 'Tôi có thể dùng thử phần mềm trước khi quyết định mua không?',
      answer: 'Có, bạn hoàn toàn có thể đăng ký trải nghiệm dùng thử 30 ngày đầy đủ tính năng. Quá trình đăng ký chỉ mất 1 phút, không yêu cầu thẻ tín dụng và không có ràng buộc hợp đồng nào.'
    },
    {
      id: 'faq-10',
      question: 'Thời gian triển khai CRM cho doanh nghiệp mất bao lâu?',
      answer: 'Với gói Starter Suite cho doanh nghiệp nhỏ, bạn có thể thiết lập và bắt đầu sử dụng ngay trong ngày. Với các gói Enterprise phức tạp có tích hợp đa hệ thống, thời gian triển khai thông thường từ 2 đến 6 tuần với sự đồng hành của chuyên gia.'
    },
    {
      id: 'faq-11',
      question: 'Trí tuệ nhân tạo (Agentic AI) trong CRM hoạt động như thế nào?',
      answer: 'Agentforce AI là thế hệ AI tự hành thông minh có khả năng hiểu ngữ cảnh dữ liệu CRM, tự động trả lời email hỗ trợ, đề xuất bước hành động tiếp theo cho nhân viên bán hàng và tự động hóa các quy trình làm việc đa bước mà không cần con người can thiệp thủ công.'
    },
    {
      id: 'faq-12',
      question: 'Làm thế nào để đội ngũ của tôi học cách sử dụng CRM nhanh chóng?',
      answer: 'Nền tảng sở hữu giao diện trực quan, thân thiện cùng hệ thống học tập Trailhead miễn phí với hàng nghìn bài học tương tác dạng trò chơi hóa (gamification), giúp nhân viên làm quen và thành thạo chỉ sau vài buổi hướng dẫn.'
    }
  ] as FaqItem[]
}
