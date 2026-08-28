export interface FaqItem {
  id: string
  question: string
  answer: string
  category?: string
}

export const faqsData = {
  heading: 'Câu Hỏi Thường Gặp Về Bidly Preconstruction CRM',
  subheading: 'Giải đáp chi tiết về mô hình quản trị đấu thầu, phương thức triển khai và tiêu chuẩn an toàn dữ liệu.',
  items: [
    {
      id: 'faq-1',
      question: 'Bidly Preconstruction CRM là gì? Khác biệt gì so với CRM bán hàng thông thường?',
      answer: 'Bidly là hệ thống quản trị chuyên sâu cho quá trình tìm kiếm, theo đuổi và giành dự án của tổng thầu xây dựng công nghiệp. Đối tượng trung tâm của Bidly là Cơ hội thầu (Pursuit) và Gói thầu (Work Package), không phải đơn hàng (Deal/Order) đơn lẻ. Hệ thống kiểm soát trọn vẹn từ tín hiệu dự án KCN/FDI, chấm điểm Go/No-Go, quản lý phòng thầu số đến gói bàn giao thi công S8.'
    },
    {
      id: 'faq-2',
      question: 'State machine 9 giai đoạn là gì? Vì sao không cho phép kéo thả tự do?',
      answer: 'Bidly áp dụng state machine 9 giai đoạn cố định (S0 đến S8). Năm cổng kiểm soát cứng (S2, S4, S5, S7, S8) bắt buộc phải có quyết định phê duyệt, lý do xác đáng và người chịu trách nhiệm được xác thực ở tầng máy chủ. Cơ chế này loại bỏ tình trạng kéo thả cảm tính, đảm bảo dữ liệu pipeline phản ánh trung thực thực tế kinh doanh.'
    },
    {
      id: 'faq-3',
      question: 'Scorecard Go/No-Go hoạt động như thế nào?',
      answer: 'Tại giai đoạn S2, người có thẩm quyền đánh giá cơ hội trên 6 tiêu chí trọng số (sự phù hợp kỹ thuật, quan hệ CĐT, năng lực cạnh tranh giá, biên lợi nhuận, mức độ rủi ro và nguồn lực). Điểm tổng 0-100 được máy chủ tính toán lại tại thời điểm duyệt. Quyết định Go cho phép tiến sang S3; No-Go tự động chuyển cơ hội sang S7 (No-bid) kèm lý do lưu vết vĩnh viễn trong Audit Log.'
    },
    {
      id: 'faq-4',
      question: 'Tender Workspace kiểm soát phiên bản hồ sơ thầu ra sao?',
      answer: 'Mỗi vòng thầu (Tender Round) được cấp một không gian số riêng biệt với checklist phân quyền 5 phòng ban. Máy chủ thực thi quy tắc bất biến: chỉ duy nhất 1 bản nộp được đánh dấu Final trong mỗi vòng. Để chuyển từ S4 sang S5, hệ thống bắt buộc phải ghi nhận bản Final kèm dấu thời gian và bằng chứng nộp hợp lệ.'
    },
    {
      id: 'faq-5',
      question: 'Bidly phù hợp với những loại hình nhà thầu nào?',
      answer: 'Bidly được thiết kế chuyên biệt cho 3 nhóm nhà thầu: (1) Tổng thầu EPC & Xây dựng công nghiệp (quy mô 50-500 nhân sự, nhiều phòng ban phối hợp, giá trị thầu lớn); (2) Nhà thầu Cơ điện MEP, PCCC & Xử lý nước (nhiều gói thầu song song, kiểm soát hạn chót ngặt nghèo); (3) Nhà thầu Kết cấu thép & Nhà tiền chế (chào giá cạnh tranh, thư viện năng lực thông số tonnage/khẩu độ).'
    },
    {
      id: 'faq-6',
      question: 'Capability Library (M5) mang lại lợi ích gì khi lập hồ sơ thầu?',
      answer: 'Capability Library số hóa toàn bộ tài sản năng lực của doanh nghiệp: kho dự án tiêu biểu (kèm thông số kỹ thuật, tonnage, ảnh chất lượng cao), hồ sơ chuyên gia, chứng chỉ chuyên môn và danh mục thiết bị. Hệ thống tự động cảnh báo chứng chỉ sắp hết hạn và hỗ trợ tìm kiếm tức thì, giúp tiết kiệm 30% thời gian chuẩn bị hồ sơ năng lực.'
    },
    {
      id: 'faq-7',
      question: 'Doanh nghiệp nên lựa chọn mô hình triển khai nào?',
      answer: 'Bidly cung cấp 3 lựa chọn linh hoạt: (1) Design Partner Pilot (8-10 tuần thí điểm trên dữ liệu thật); (2) Professional Private Cloud (cơ sở dữ liệu độc lập, do Vtechcom vận hành an toàn); (3) Enterprise On-premise (cài đặt trực tiếp trên máy chủ nội bộ doanh nghiệp). Dữ liệu giá thầu luôn được bảo mật cô lập 100%.'
    },
    {
      id: 'faq-8',
      question: 'Chính sách giá của Bidly được tính như thế nào? Có tính theo user không?',
      answer: 'Bidly tính phí theo thực thể doanh nghiệp (Instance) và cấp độ hạ tầng, hoàn toàn không tính theo số lượng người dùng. Điều này khuyến khích 100% nhân sự liên phòng ban (Kinh doanh, Kỹ thuật, Đấu thầu, Dự toán, Pháp lý, Tài chính) cùng tham gia vận hành mà không phát sinh thêm chi phí.'
    },
    {
      id: 'faq-9',
      question: 'Dữ liệu giá thầu và thông tin khách hàng được bảo mật như thế nào?',
      answer: 'Bảo mật là ưu tiên hàng đầu. Mỗi doanh nghiệp sở hữu một cơ sở dữ liệu PostgreSQL độc lập, sao lưu định kỳ, lưu vết kiểm toán append-only và tuân thủ chặt chẽ Luật Bảo vệ Dữ liệu Cá nhân 91/2025/QH15.'
    },
    {
      id: 'faq-10',
      question: 'Thời gian triển khai và đào tạo người dùng mất bao lâu?',
      answer: 'Với chương trình Design Partner Pilot, thời gian triển khai từ 8-10 tuần. Vtechcom trực tiếp hỗ trợ nhập dữ liệu lịch sử từ Excel, cấu hình quy trình 9 giai đoạn, đào tạo phân quyền theo vai trò và cùng khách hàng đánh giá các chỉ số ứng dụng (Adoption KPI).'
    },
    {
      id: 'faq-11',
      question: 'Bidly có tích hợp được với ERP và phần mềm quản lý thi công không?',
      answer: 'Bidly cung cấp REST API và Webhook chuẩn mực. Hệ thống tập trung tối ưu giai đoạn tiền xây dựng và kết thúc tại Gói bàn giao S8 (Handover Pack), cung cấp bộ dữ liệu chuẩn hóa (phạm vi, cam kết thương mại, giả định, rủi ro) để chuyển giao mượt mà sang ERP hoặc phần mềm quản lý dự án công trường.'
    },
    {
      id: 'faq-12',
      question: 'Làm thế nào để bắt đầu trải nghiệm Bidly?',
      answer: 'Bạn chỉ cần đăng ký buổi Demo 45 phút được thiết kế riêng theo đặc thù ngành của bạn (EPC, MEP hoặc Kết cấu thép). Sau buổi demo, Vtechcom sẽ đồng hành cùng doanh nghiệp thiết lập gói thí điểm Pilot để kiểm chứng hiệu quả thực tế.'
    }
  ] as FaqItem[]
}
