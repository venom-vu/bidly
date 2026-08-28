<script setup lang="ts">
import SfBadge from '~/components/ui/SfBadge.vue'
import SfButton from '~/components/ui/SfButton.vue'
import SfContactPillars from '~/components/blades/SfContactPillars.vue'
import SfFaqAccordion from '~/components/blades/SfFaqAccordion.vue'
import { useDemoModal } from '~/composables/useDemoModal'

definePageMeta({
  alias: ['/9-giai-doan', '/features/stages', '/crm/stages']
})

useSeoMeta({
  title: 'Quy Trình 9 Giai Đoạn Cố Định (S0 - S8) | Bidly Preconstruction CRM',
  description: 'Khám phá chi tiết 9 giai đoạn cố định trong vòng đời đấu thầu xây dựng công nghiệp từ tiếp nhận tín hiệu dự án đến bàn giao thi công, kiểm soát chuyển bước bằng State Machine và lưu vết kiểm toán bất biến.'
})

const { openModal } = useDemoModal()

const principles = [
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Bất biến 9 giai đoạn',
    desc: 'Cấu hình template chỉ thay đổi nhãn hiển thị và tiêu chí, tuyệt đối không thêm bớt stage làm sai lệch chuỗi dữ liệu pipeline.'
  },
  {
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    title: '5 Cổng cứng kiểm soát',
    desc: 'Bắt buộc quyết định phê duyệt, người duyệt và lý do lưu vết máy chủ trước khi chuyển bước, không cho phép lách cổng.'
  },
  {
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    title: 'Khóa lạc quan (Version)',
    desc: 'Cơ chế Optimistic Concurrency Control qua trường version ngăn ngừa hoàn toàn nguy cơ ghi đè dữ liệu khi nhiều phòng ban cùng tác nghiệp.'
  },
  {
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    title: 'Audit Log append-only',
    desc: 'Mọi thao tác chuyển stage và cập nhật dữ liệu được ghi nhận đồng thời trong Database Transaction, bất biến và không thể xoá.'
  }
]

const stageList = [
  {
    code: 'S0',
    name: 'Tín hiệu (Signal)',
    subtitle: 'Tiếp nhận & Chuẩn hóa thông tin cơ hội ban đầu',
    gateType: 'Soft Gate',
    isHard: false,
    color: 'var(--stage-s0, #64748B)',
    owner: 'Phát triển Kinh doanh (BD)',
    lane: 'Làn 1 · BD & Quan hệ',
    objective: 'Thu thập tín hiệu dự án FDI/KCN từ nhiều nguồn tin phân mảnh; loại bỏ trùng lặp (dedup), phân loại ngành và gán người phụ trách ngay từ ngày đầu.',
    prerequisites: [
      'Nguồn thông tin thầu (KCN, FDI, Ban Quản lý, Môi giới, Tin báo thầu)',
      'Tên dự án sơ bộ & Địa điểm triển khai (Tỉnh thành/KCN)',
      'Chủ đầu tư hoặc đơn vị tư vấn quản lý dự án ban đầu'
    ],
    systemActions: [
      'Tạo thực thể Project & Pursuit trong hệ thống Bidly',
      'Dedup Engine tự động đối chiếu tên dự án, vị trí và chủ đầu tư để cảnh báo trùng lặp',
      'Liên kết Tổ chức (Account) và Người liên hệ (Contact) liên quan',
      'Gán Owner phụ trách chính và thời hạn kiểm chứng nguồn tin'
    ],
    serverRules: 'Hệ thống tự động ghi nhận createdAt trong StageHistory, khởi tạo version = 1 cho Pursuit, cấp quyền thao tác theo phân quyền RBAC.',
    exitCriteria: 'Dự án được định danh chính xác, xác nhận không trùng lặp, có nhân sự phụ trách tiếp cận và xác thực tính khả thi.',
    transitions: [
      { to: 'S1 (Sàng lọc)', type: 'Tuyến tính', desc: 'Thông tin có cơ sở, chuyển sang xác minh chi tiết.' },
      { to: 'S7 (No-bid)', type: 'Dừng sớm', desc: 'Thông tin sai lệch hoặc không phù hợp phân khúc, rút lui có lý do.' }
    ]
  },
  {
    code: 'S1',
    name: 'Sàng lọc (Qualified)',
    subtitle: 'Xác minh dự án có thật & Thiết lập bản đồ quan hệ',
    gateType: 'Soft Gate',
    isHard: false,
    color: 'var(--stage-s1, #475569)',
    owner: 'BD · Chuyên viên Phát triển Dự án',
    lane: 'Làn 1 · BD & Quan hệ',
    objective: 'Tiếp cận sơ bộ, xác nhận cơ hội có thật (ngân sách, thời điểm đấu thầu, yêu cầu kỹ thuật); đánh giá sơ bộ mức độ phù hợp và thiết lập mạng lưới quan hệ theo dự án.',
    prerequisites: [
      'Xác nhận thông tin liên hệ của các nhân sự phụ trách bên Chủ đầu tư',
      'Ước tính sơ bộ quy mô, diện tích xây dựng hoặc tổng mức đầu tư',
      'Dự kiến thời điểm phát hành HSMT (RFP/RFQ)'
    ],
    systemActions: [
      'Gắn các bên liên quan vào dự án thành PursuitContact với 4 vai trò: Decision Maker, Influencer, Champion, Gatekeeper',
      'Đánh giá mức độ ảnh hưởng (Power) và mức độ ủng hộ (Affinity) của từng cá nhân',
      'Ghi nhận nhật ký tiếp xúc (Touchpoint Log): cuộc gọi, gặp gỡ, khảo sát thực địa',
      'Cập nhật giá trị ước tính (Estimated Value) và xác suất sơ bộ'
    ],
    serverRules: 'Bắt buộc gắn tối thiểu 1 PursuitContact trước khi chuyển bước; mọi cập nhật stakeholder được lưu vết kiểm toán.',
    exitCriteria: 'Cơ hội được xác thực rõ ràng, có đầy đủ dữ liệu đầu vào để Hội đồng Ban điều hành tổ chức chấm điểm Go/No-Go tại S2.',
    transitions: [
      { to: 'S2 (Go/No-Go)', type: 'Tuyến tính', desc: 'Chuyển sang bước phê duyệt chính thức bằng Scorecard.' },
      { to: 'S7 (Won - Chỉ định)', type: 'Chỉ định thầu', desc: 'Trường hợp CĐT chỉ định thầu trực tiếp, nhảy sang S7 Won kèm lý do.' },
      { to: 'S7 (No-bid)', type: 'Rút lui', desc: 'Dự án không khả thi, rút lui kèm lý do.' }
    ]
  },
  {
    code: 'S2',
    name: 'Phê duyệt Go / No-Go',
    subtitle: 'Định lượng 6 tiêu chí trọng số & Phê duyệt của Ban điều hành',
    gateType: 'Hard Gate #1',
    isHard: true,
    color: 'var(--stage-s2, #7F27FF)',
    owner: 'Ban Điều Hành (CEO / Giám đốc Kinh doanh)',
    lane: 'Làn 3 · Ban điều hành',
    objective: 'Đánh giá có căn cứ khoa học xem doanh nghiệp có nên bỏ hàng trăm triệu đồng chi phí làm thầu và nguồn lực để theo đuổi dự án hay không.',
    prerequisites: [
      'Bản tóm tắt cơ hội Pursuit Brief từ đội ngũ BD',
      'Dữ liệu phân tích năng lực lõi, đối thủ cạnh tranh dự kiến và năng lực tài chính',
      'Bảng chấm điểm Scorecard 6 tiêu chí được điền đầy đủ bởi các phòng ban'
    ],
    systemActions: [
      'Chấm điểm Scorecard gồm 6 tiêu chí có trọng số: (1) Năng lực kỹ thuật, (2) Quan hệ & Vị thế, (3) Mức độ cạnh tranh, (4) Biên lợi nhuận, (5) Rủi ro pháp lý/tài chính, (6) Nguồn lực sẵn sàng',
      'Máy chủ tự động tính điểm tổng hợp 0-100 tại thời điểm phê duyệt',
      'Lãnh đạo phê duyệt quyết định GO hoặc NO-GO kèm văn bản kết luận'
    ],
    serverRules: 'CỔNG CỨNG BẮT BUỘC: ScorecardService.decide tự động điều hướng: chọn GO tự động sang S3; chọn NO_GO lập tức chuyển sang S7 với outcome NO_BID. Bắt buộc có quyết định và lý do được ký duyệt.',
    exitCriteria: 'Có biên bản quyết định Go/No-Go chính thức; nếu GO, nguồn lực được phân bổ để thành lập tổ thầu.',
    transitions: [
      { to: 'S3 (Chuẩn bị thầu)', type: 'Phê duyệt GO', desc: 'Đạt điểm chuẩn, chính thức chuyển sang giai đoạn chuẩn bị đấu thầu.' },
      { to: 'S7 (No-bid)', type: 'Quyết định NO-GO', desc: 'Không đạt tiêu chí, dừng thầu sớm để bảo toàn nguồn lực.' }
    ]
  },
  {
    code: 'S3',
    name: 'Chuẩn bị thầu (Pre-bid)',
    subtitle: 'Lập chiến lược theo đuổi & Thành lập tổ làm thầu',
    gateType: 'Soft Gate',
    isHard: false,
    color: 'var(--stage-s3, #0D9488)',
    owner: 'Phòng Đấu Thầu & BD',
    lane: 'Làn 2 · Phòng Đấu thầu',
    objective: 'Xây dựng chiến lược dự thầu (Winning Strategy), phân công Trưởng nhóm thầu (Tender Lead), khảo sát hiện trường và chuẩn bị sẵn hồ sơ năng lực tiêu biểu.',
    prerequisites: [
      'Quyết định phê duyệt GO từ giai đoạn S2',
      'Thông báo mời thầu sơ bộ hoặc hồ sơ mời thầu (HSMT/RFP) từ Chủ đầu tư',
      'Định hình danh sách nhân sự chủ chốt cho dự án'
    ],
    systemActions: [
      'Bổ nhiệm Tender Lead và phân bổ nhân sự 5 chuyên môn: Pháp lý, Kỹ thuật/Biện pháp, MEP, Dự toán, HSE',
      'Tra cứu và xuất hồ sơ từ Capability Library (dự án tiêu biểu, CV chuyên gia, chứng chỉ thiết bị)',
      'Ghi nhận biên bản khảo sát hiện trường (Site Visit Log) và các rủi ro mặt bằng',
      'Thiết lập mốc thời gian nộp thầu (Submission Deadline) và ngân sách làm thầu'
    ],
    serverRules: 'Cập nhật deadline chính thức; chuẩn bị sẵn sàng cấu trúc WorkPackage để mở không gian làm việc số.',
    exitCriteria: 'Tổ làm thầu được kích hoạt, phân công trách nhiệm rõ ràng, sẵn sàng mở Tender Workspace khi nhận HSMT chính thức.',
    transitions: [
      { to: 'S4 (Đang đấu thầu)', type: 'Tuyến tính', desc: 'Nhận HSMT chính thức, mở Tender Workspace để tác nghiệp.' },
      { to: 'S7 (Won - Chỉ định)', type: 'Chỉ định thầu', desc: 'Ký kết hợp đồng chỉ định trực tiếp, chuyển sang S7 Won.' },
      { to: 'S7 (Withdrawn)', type: 'Rút lui', desc: 'Thay đổi chiến lược kinh doanh hoặc HSMT bất lợi, rút lui có lý do.' }
    ]
  },
  {
    code: 'S4',
    name: 'Đang đấu thầu (Tender Active)',
    subtitle: 'Không gian số liên phòng ban & Kiểm soát bản nộp duy nhất',
    gateType: 'Hard Gate #2',
    isHard: true,
    color: 'var(--stage-s4, #0284C7)',
    owner: 'Phòng Đấu Thầu (Tổ thầu 5 phòng ban)',
    lane: 'Làn 2 · Phòng Đấu thầu',
    objective: 'Giai đoạn tác nghiệp cao điểm: phân rã checklist hồ sơ cho 5 phòng ban, theo dõi tiến độ từng đầu việc theo thời gian thực, quản lý chuỗi phiên bản giá thầu và chốt 1 bản Final duy nhất.',
    prerequisites: [
      'Hồ sơ mời thầu (HSMT/RFP) chính thức kèm bản vẽ thiết kế và bảng BOQ',
      'Đồng hồ đếm ngược hạn nộp thầu được kích hoạt trên hệ thống'
    ],
    systemActions: [
      'Mở thực thể WorkPackage và TenderRound (RFI, RFQ, RFP, Vòng 1, Đấu lại)',
      'Phân bổ hàng chục TenderChecklistItem cho 5 bộ phận (Pháp lý, Biện pháp, MEP, Dự toán, An toàn)',
      'Tải lên các bản dự thảo hồ sơ và quản lý chuỗi phiên bản qua supersedesId',
      'Đánh dấu bản hồ sơ nộp cuối cùng (isFinal = true) sau khi Ban điều hành chốt giá'
    ],
    serverRules: 'CỔNG CỨNG BẤT BIẾN: Trong một TenderRound chỉ cho phép tối đa 1 bản nộp được gắn cờ isFinal = true. Đánh dấu bản mới sẽ tự động gỡ cờ bản cũ trong cùng một Database Transaction.',
    exitCriteria: 'Toàn bộ checklist 5 phòng ban hoàn thành; bản hồ sơ dự thầu Final được duyệt đầy đủ chữ ký số/con dấu.',
    transitions: [
      { to: 'S5 (Đã nộp hồ sơ)', type: 'Nộp bản Final', desc: 'Ghi nhận nộp bản Final kèm biên nhận để chuyển sang S5.' },
      { to: 'S7 (Withdrawn)', type: 'Rút lui', desc: 'Rút lui trước giờ đóng thầu, bắt buộc lưu vết lý do.' }
    ]
  },
  {
    code: 'S5',
    name: 'Đã nộp hồ sơ (Submitted)',
    subtitle: 'Khóa phiên bản dự thầu & Xác nhận nộp thành công',
    gateType: 'Hard Gate #3',
    isHard: true,
    color: 'var(--stage-s5, #0176D3)',
    owner: 'Trưởng Nhóm Thầu (Tender Lead) & BD',
    lane: 'Làn 2 · Phòng Đấu thầu',
    objective: 'Xác nhận chính thức hồ sơ dự thầu đã được nộp thành công tới Chủ đầu tư / Tư vấn quản lý trước thời điểm đóng thầu; khóa niêm phong toàn bộ tài liệu dự thầu.',
    prerequisites: [
      'Bản hồ sơ dự thầu isFinal = true đã hoàn tất',
      'Biên nhận nộp thầu, ảnh chụp niêm phong hoặc xác nhận từ cổng thầu điện tử'
    ],
    systemActions: [
      'Thực hiện tác vụ Submit Final trên Tender Workspace',
      'Đính kèm bằng chứng nộp thầu (biên nhận, mã xác nhận điện tử, dấu thời gian)',
      'Chuyển trạng thái bản nộp thành SUBMITTED',
      'Hệ thống tự động khóa chỉnh sửa các tài liệu trong vòng thầu'
    ],
    serverRules: 'CỔNG CỨNG MÁY CHỦ BẮT BUỘC: StageTransitionService chỉ cho phép chuyển từ S4 sang S5 khi tìm thấy bản ghi BidSubmission có isFinal = true và status = SUBMITTED trong round đang mở. Chặn 100% lệnh chuyển stage trần.',
    exitCriteria: 'Hồ sơ đã được tiếp nhận hợp lệ; hệ thống kích hoạt chế độ chờ mở thầu và làm rõ.',
    transitions: [
      { to: 'S6 (Làm rõ & Đàm phán)', type: 'Tuyến tính', desc: 'Nhận yêu cầu làm rõ hồ sơ hoặc thư mời phỏng vấn kỹ thuật.' },
      { to: 'S7 (Kết quả thầu)', type: 'Công bố trực tiếp', desc: 'Chủ đầu tư công bố kết quả không qua giai đoạn làm rõ.' }
    ]
  },
  {
    code: 'S6',
    name: 'Làm rõ & Đàm phán (Clarification)',
    subtitle: 'Nhật ký làm rõ kỹ thuật & Đàm phán thương mại có dấu',
    gateType: 'Soft Gate',
    isHard: false,
    color: 'var(--stage-s6, #4F46E5)',
    owner: 'Tender Lead · Khối Kỹ thuật & BD',
    lane: 'Làn 2 · Phòng Đấu thầu',
    objective: 'Xử lý các công văn làm rõ (RFI) từ phía CĐT; bảo vệ biện pháp thi công trong các buổi phỏng vấn; đàm phán tối ưu giá trị và điều khoản hợp đồng.',
    prerequisites: [
      'Văn bản yêu cầu làm rõ hoặc thư mời phỏng vấn bảo vệ hồ sơ từ Chủ đầu tư',
      'Danh sách câu hỏi cần giải trình về biện pháp kỹ thuật, tiến độ hoặc đơn giá'
    ],
    systemActions: [
      'Ghi nhận nhật ký Clarification Log: số công văn, nội dung hỏi, nội dung trả lời, hạn phản hồi',
      'Lưu trữ các biên bản đàm phán thương mại có chữ ký đại diện hai bên',
      'Cập nhật giá trị chào thầu sau đàm phán nếu có giảm trừ/bổ sung phạm vi',
      'Phối hợp cùng bộ phận Dự toán tính toán các kịch bản giá điều chỉnh'
    ],
    serverRules: 'Mọi tài liệu đính kèm và thay đổi giá trị thầu được lưu vết lịch sử trong Audit Log; bảo vệ tính toàn vẹn dữ liệu.',
    exitCriteria: 'Hoàn tất toàn bộ nội dung làm rõ; hai bên thống nhất biên bản đàm phán cuối cùng.',
    transitions: [
      { to: 'S7 (Kết quả thầu)', type: 'Tuyến tính', desc: 'Chuyển sang ghi nhận kết quả trúng thầu hoặc trượt thầu.' },
      { to: 'S4/S6 (Đấu lại / Re-bid)', type: 'Mở Round mới', desc: 'CĐT yêu cầu đấu lại vòng 2, mở TenderRound mới mà không ghi đè dữ liệu cũ.' }
    ]
  },
  {
    code: 'S7',
    name: 'Kết quả thầu (Outcome)',
    subtitle: 'Chốt kết quả Won/Lost/No-bid & Phân tích Win/Loss',
    gateType: 'Hard Gate #4',
    isHard: true,
    color: 'var(--stage-s7, #475569)',
    owner: 'Ban Điều Hành & Giám đốc Kinh doanh',
    lane: 'Làn 3 · Ban điều hành',
    objective: 'Ghi nhận quyết định trúng thầu (WON), trượt thầu (LOST) hoặc không tham gia (NO_BID); lưu vết nguyên nhân chi tiết để làm giàu kho tri thức phân tích Win/Loss cho toàn doanh nghiệp.',
    prerequisites: [
      'Thông báo trúng thầu (LOA) hoặc văn bản thông báo kết quả lựa chọn nhà thầu từ CĐT',
      'Thông tin về đối thủ trúng thầu và mức giá trúng (nếu trượt thầu)'
    ],
    systemActions: [
      'Cập nhật trường Outcome bắt buộc: WON, LOST, hoặc NO_BID',
      'Nhập phân tích nguyên nhân: Giá, Năng lực, Quan hệ, Tiến độ, Biện pháp kỹ thuật',
      'Ghi nhận thông tin đối thủ cạnh tranh và giá trúng thầu thực tế',
      'Control Tower tự động cập nhật tỷ lệ Win Rate theo ngành, địa bàn và quy mô'
    ],
    serverRules: 'CỔNG CỨNG BẢO VỆ: Nếu kết quả là LOST hoặc NO_BID, trạng thái là TERMINAL (Đóng hoàn toàn), hệ thống khóa cứng cơ hội, không cho phép chuyển sang S8. Chỉ cơ hội có outcome = WON mới được phép mở đường vào S8.',
    exitCriteria: 'Cơ hội có kết luận chính thức và lý do lưu vết đầy đủ trong hệ thống.',
    transitions: [
      { to: 'S8 (Bàn giao thi công)', type: 'Trúng thầu (WON)', desc: 'Tiến hành đóng gói dữ liệu bàn giao sang ban điều hành công trường.' },
      { to: 'Kết thúc (Terminal)', type: 'Trượt thầu (LOST)', desc: 'Đóng cơ hội, lưu vào kho dữ liệu phân tích bài học kinh nghiệm.' },
      { to: 'S4/S6 (Khiếu nại/Đấu lại)', type: 'Reopen', desc: 'Trường hợp có khiếu nại hoặc CĐT huỷ kết quả đấu lại, mở TenderRound mới.' }
    ]
  },
  {
    code: 'S8',
    name: 'Bàn giao (Handover)',
    subtitle: 'Đóng gói dữ liệu chuẩn hóa chuyển giao sang ERP/PM thi công',
    gateType: 'Hard Gate #5',
    isHard: true,
    color: 'var(--stage-s8, #04844B)',
    owner: 'Phòng BD & Phòng Đấu Thầu ➔ Ban Điều Hành Dự Án',
    lane: 'Làn 1 + Làn 2 ➔ Ban Dự án',
    objective: 'Cầu nối huyết mạch giữa Tiền thi công (Preconstruction) và Thi công thực tế (Project Execution). Đóng gói trọn vẹn cam kết thương mại, giả định báo giá và rủi ro chuyển giao cho đội công trường.',
    prerequisites: [
      'Hợp đồng thi công chính thức đã được ký kết',
      'Kết quả thầu được xác nhận là WON tại giai đoạn S7',
      'Toàn bộ hồ sơ thầu Final và biên bản đàm phán hợp lệ'
    ],
    systemActions: [
      'Khởi tạo Gói bàn giao Handover Pack gồm 4 cấu phần chuẩn hóa',
      'Cấu phần 1: Phạm vi công việc & Cam kết thương mại đặc biệt với CĐT',
      'Cấu phần 2: Giả định báo giá & Định mức bóc tách chi phí',
      'Cấu phần 3: Danh mục rủi ro, loại trừ và điều kiện tạm dừng',
      'Cấu phần 4: Toàn bộ hồ sơ dự thầu Final và phụ lục hợp đồng đã xác thực'
    ],
    serverRules: 'CỔNG CỨNG MÁY CHỦ: canEnterHandover chặn 100% các cơ hội có outcome khác WON. Máy chủ bắt buộc nhập lý do bàn giao và lưu vết biên bản bàn giao trong StageHistory và Audit Log.',
    exitCriteria: 'Biên bản bàn giao được ký duyệt bởi Trưởng phòng Đấu thầu và Giám đốc Dự án công trường; dữ liệu sẵn sàng đồng bộ sang ERP.',
    transitions: [
      { to: 'Chuyển giao ERP/PM', type: 'Hoàn tất Preconstruction', desc: 'Dữ liệu được bàn giao trọn vẹn sang hệ thống quản lý thi công công trường.' }
    ]
  }
]

const nonLinearFlows = [
  {
    code: 'F01',
    name: 'Dừng sớm No-Go (S2 ➔ S7 No-bid)',
    type: 'Hard Gate Branch',
    accentColor: 'var(--stage-s2, #7F27FF)',
    summary: 'Khi Scorecard S2 không đạt ngưỡng điểm hoặc có rủi ro nghiêm trọng, cơ hội lập tức chuyển sang S7 (No-bid), bắt buộc nhập lý do từ chối. Tiết kiệm 100% nguồn lực và chi phí làm thầu vô ích.'
  },
  {
    code: 'F02',
    name: 'Chỉ định thầu trực tiếp (S1/S3 ➔ S7 Won ➔ S8)',
    type: 'Direct Award Branch',
    accentColor: 'var(--stage-s8, #04844B)',
    summary: 'Trong trường hợp Chủ đầu tư tin cậy chỉ định thầu trực tiếp không qua đấu thầu cạnh tranh, hệ thống cho phép chuyển thẳng từ S1 hoặc S3 sang S7 Won kèm biên bản chỉ định, sau đó tiến vào S8 để lập gói bàn giao.'
  },
  {
    code: 'F03',
    name: 'Rút lui có kiểm soát (S0–S6 ➔ S7 Withdrawn)',
    type: 'Controlled Withdrawal',
    accentColor: 'var(--destructive, #EA001E)',
    summary: 'Doanh nghiệp có thể chủ động rút lui khỏi quá trình theo đuổi tại bất kỳ thời điểm nào trước S7 khi phát hiện rủi ro phát sinh hoặc thay đổi định hướng. Bắt buộc nhập lý do rút lui và ghi nhận vào StageHistory.'
  },
  {
    code: 'F04',
    name: 'Sửa sai & Quay lại bước (Correction)',
    type: 'Soft Gate Correction',
    accentColor: 'var(--stage-s3, #0D9488)',
    summary: 'Cho phép quay lại giai đoạn trước để bổ sung tài liệu hoặc hiệu chỉnh dữ liệu khi có thẩm quyền thích hợp. Hệ thống bắt buộc nhập lý do điều chỉnh và ghi log kiểm toán không thể xóa.'
  },
  {
    code: 'F05',
    name: 'Đấu lại / Re-bid (Mở TenderRound mới)',
    type: 'Canonical Round Entity',
    accentColor: 'var(--stage-s4, #0284C7)',
    summary: 'Khi CĐT yêu cầu đấu lại vòng 2 hoặc đàm phán lại giá, hệ thống mở một thực thể TenderRound mới trong S4/S6, đánh dấu bản cũ thành SUPERSEDED. Tuyệt đối không ghi đè hay làm mất lịch sử vòng đấu trước.'
  }
]
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Header -->
    <section class="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-card to-background border-b border-border/80">
      <div class="sf-container relative z-10 text-center max-w-4xl space-y-6">
        <div class="inline-block">
          <span class="inline-flex items-center px-3 py-1 text-xs font-bold rounded-full bg-brand-soft text-primary">
            STATE MACHINE CHUẨN MỰC · S0 ĐẾN S8
          </span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18]">
          9 Giai Đoạn Cố Định
          <span class="text-primary block mt-1">
            Trong Vòng Đời Đấu Thầu
          </span>
        </h1>
        <p class="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
          Không giống CRM bán lẻ cho phép kéo thả tự do dễ làm sai lệch số liệu, Bidly thiết lập 9 giai đoạn chuẩn mực và bất biến. Mọi cơ hội theo đuổi (Pursuit) được quản trị nghiêm ngặt từ tín hiệu ban đầu đến bàn giao thi công.
        </p>

        <div class="pt-2 flex flex-wrap justify-center items-center gap-4">
          <SfButton
            variant="primary"
            size="lg"
            @click="openModal('Đặt lịch Demo 9 Giai Đoạn Cố Định Bidly')"
          >
            <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
            Đặt lịch Demo 45 phút
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/gates">
            Khám phá 5 Cổng Cứng Kiểm Soát ➔
          </SfButton>
          <SfButton variant="secondary" size="lg" to="/business-map">
            Xem bản đồ nghiệp vụ 5 làn
          </SfButton>
        </div>

        <!-- Quick Strip -->
        <div class="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-muted-foreground border-t border-border/70 max-w-2xl mx-auto">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-primary inline-block shrink-0" />
            <span>9 Giai đoạn cố định (S0 - S8)</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-destructive inline-block shrink-0" />
            <span>5 Cổng cứng máy chủ</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-600 inline-block shrink-0" />
            <span>Audit Log append-only</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 4 Core Principles -->
    <section class="py-12 md:py-16 bg-card border-b border-border/80">
      <div class="sf-container space-y-8">
        <div class="text-center max-w-3xl mx-auto space-y-2">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            4 Trụ Cột Đảm Bảo Tính Toàn Vẹn Của State Machine
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(p, pIdx) in principles"
            :key="pIdx"
            class="sf-card group bg-card rounded-xl p-6 sm:p-7 border border-border/70 shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 space-y-3 flex flex-col justify-between"
          >
            <div class="space-y-3">
              <div class="w-10 h-10 rounded-lg bg-brand-soft text-primary flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="p.icon" />
                </svg>
              </div>
              <h3 class="text-base font-extrabold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors">
                {{ p.title }}
              </h3>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                {{ p.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Vertical Timeline Stages Section -->
    <section class="py-16 md:py-24 bg-background border-b border-border/80">
      <div class="sf-container space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
            Vận Hành Từng Giai Đoạn Trong Preconstruction CRM
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            Mỗi giai đoạn được quy định rõ mục tiêu, vai trò chủ trì, điều kiện đầu vào, thao tác trong hệ thống, ràng buộc máy chủ và tiêu chí đầu ra.
          </p>
        </div>

        <!-- Vertical Timeline Spine -->
        <div class="relative max-w-5xl mx-auto space-y-12">
          <!-- Continuous Vertical Background Line -->
          <div class="hidden md:block absolute top-8 bottom-8 left-[39px] w-1 bg-border/80 rounded-full z-0" />

          <div
            v-for="(stg, sIdx) in stageList"
            :key="stg.code"
            :id="stg.code.toLowerCase()"
            class="relative z-10 flex flex-col md:flex-row items-start gap-6 md:gap-8 group"
          >
            <!-- Stage Number Badge (Left Node on Timeline) -->
            <div class="shrink-0 flex items-center md:flex-col gap-3">
              <div
                class="w-20 h-20 rounded-2xl flex flex-col items-center justify-center font-black shadow-card transition-transform duration-300 group-hover:scale-105"
                :style="{ backgroundColor: stg.color, color: '#ffffff' }"
              >
                <span class="text-2xl font-black tracking-tight">{{ stg.code }}</span>
                <span class="text-[9.5px] uppercase font-bold tracking-wider opacity-90">Stage</span>
              </div>
              <div class="md:hidden">
                <span
                  :class="[
                    'text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full',
                    stg.isHard ? 'bg-destructive/10 text-destructive border border-destructive/30' : 'bg-brand-soft text-primary'
                  ]"
                >
                  {{ stg.gateType }}
                </span>
              </div>
            </div>

            <!-- Detailed Stage Card (Right Content) -->
            <div
              :class="[
                'flex-1 sf-card group bg-card rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 overflow-hidden w-full border border-border/70',
                stg.isHard ? 'border-primary/50' : ''
              ]"
            >
              <div class="p-6 sm:p-8 space-y-6">
                <!-- Header Info -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-4">
                  <div>
                    <div class="flex items-center gap-3">
                      <h3 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                        {{ stg.code }} · {{ stg.name }}
                      </h3>
                      <span
                        class="hidden md:inline-flex text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full"
                        :class="stg.isHard ? 'bg-destructive/10 text-destructive border border-destructive/30' : 'bg-brand-soft text-primary'"
                      >
                        {{ stg.gateType }}
                      </span>
                    </div>
                    <p class="text-xs sm:text-sm font-semibold text-primary mt-0.5">
                      {{ stg.subtitle }}
                    </p>
                  </div>
                  <div class="text-left sm:text-right shrink-0">
                    <span class="inline-block text-[11.5px] font-bold text-muted-foreground bg-secondary/80 px-3 py-1 rounded-md">
                      Chủ trì: <strong class="text-foreground">{{ stg.owner }}</strong>
                    </span>
                  </div>
                </div>

                <!-- Objective -->
                <div class="space-y-1.5">
                  <div class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Bản chất &amp; Mục tiêu giai đoạn
                  </div>
                  <p class="text-xs sm:text-sm text-foreground font-normal leading-relaxed">
                    {{ stg.objective }}
                  </p>
                </div>

                <!-- Two-Column Breakdown: Prerequisites & System Actions -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <!-- Col 1: Prerequisites -->
                  <div class="space-y-3 bg-secondary/30 rounded-xl p-4 border border-border/60">
                    <div class="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                      <svg class="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                      </svg>
                      <span>Điều kiện đầu vào &amp; Dữ liệu cần có</span>
                    </div>
                    <ul class="space-y-2">
                      <li
                        v-for="(req, rIdx) in stg.prerequisites"
                        :key="rIdx"
                        class="text-xs text-muted-foreground font-normal flex items-start gap-2 leading-relaxed"
                      >
                        <span class="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{{ req }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Col 2: System Actions -->
                  <div class="space-y-3 bg-secondary/30 rounded-xl p-4 border border-border/60">
                    <div class="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                      <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Thao tác &amp; Thực thể trong Bidly</span>
                    </div>
                    <ul class="space-y-2">
                      <li
                        v-for="(act, aIdx) in stg.systemActions"
                        :key="aIdx"
                        class="text-xs text-muted-foreground font-normal flex items-start gap-2 leading-relaxed"
                      >
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                        <span>{{ act }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Server Rules & Exit Criteria Strip -->
                <div class="space-y-3 pt-1 border-t border-border/70">
                  <div class="text-xs font-normal text-muted-foreground leading-relaxed">
                    <strong class="text-foreground font-bold">Ràng buộc máy chủ:</strong> {{ stg.serverRules }}
                  </div>
                  <div class="text-xs font-normal text-muted-foreground leading-relaxed">
                    <strong class="text-foreground font-bold">Tiêu chí hoàn thành (Exit):</strong> {{ stg.exitCriteria }}
                  </div>
                </div>

                <!-- Transition Branches Pill Strip -->
                <div class="space-y-2 pt-2 border-t border-border/70">
                  <div class="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Các nhánh chuyển tiếp hợp lệ từ {{ stg.code }}:
                  </div>
                  <div class="flex flex-wrap gap-2.5">
                    <div
                      v-for="(tr, tIdx) in stg.transitions"
                      :key="tIdx"
                      class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-card border border-border text-xs font-medium text-foreground shadow-xs"
                    >
                      <span class="text-primary font-bold">➔ {{ tr.to }}</span>
                      <span class="text-[10px] uppercase font-extrabold px-1.5 py-0.2 rounded bg-secondary text-muted-foreground">
                        {{ tr.type }}
                      </span>
                      <span class="text-muted-foreground text-[11px] hidden sm:inline">({{ tr.desc }})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5 Non-Linear Transitions Section -->
    <section class="py-16 md:py-24 bg-card border-b border-border/80">
      <div class="sf-container space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
            5 Đường Rẽ Không Tuyến Tính Trong Đấu Thầu
          </h2>
          <p class="text-sm sm:text-base text-muted-foreground font-normal max-w-2xl mx-auto">
            Đấu thầu xây dựng không diễn ra theo một đường thẳng tuyệt đối. Bidly mô hình hóa đầy đủ các tình huống nghiệp vụ thực tế phát sinh trong quá trình theo đuổi thầu.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div
            v-for="(flow, fIdx) in nonLinearFlows"
            :key="fIdx"
            class="sf-card group bg-card border border-border/70 rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 p-6 sm:p-8 flex flex-col justify-between space-y-4"
          >
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-primary tabular">{{ flow.code }}</span>
                <span class="text-[10.5px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-brand-soft text-primary">
                  {{ flow.type }}
                </span>
              </div>
              <h3 class="text-lg font-extrabold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors">
                {{ flow.name }}
              </h3>
              <p class="text-xs sm:text-[13.5px] text-muted-foreground leading-relaxed font-normal">
                {{ flow.summary }}
              </p>
            </div>
          </div>
        </div>

        <div class="pt-6 text-center">
          <SfButton variant="primary" size="lg" to="/gates">
            Tìm hiểu sâu hơn về 5 Cổng Cứng Kiểm Soát ➔
          </SfButton>
        </div>
      </div>
    </section>

    <!-- Bottom Contact & FAQ Blades -->
    <SfContactPillars />
    <SfFaqAccordion />
  </div>
</template>
