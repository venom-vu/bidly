---
title: 'Product Requirements Document: bidly CRM (Salesforce Clone & Localization)'
status: final
version: '1.0.0'
created: '2026-08-25'
updated: '2026-08-25'
owner: 'Venom'
---

# Product Requirements Document: bidly CRM

Tài liệu yêu cầu sản phẩm (PRD) xác lập toàn bộ phạm vi tính năng, giao diện, dữ liệu và tiêu chuẩn kỹ thuật để xây dựng website CRM trên nền tảng **Nuxt 4 + Vue 3**, mô phỏng chính xác cấu trúc và trải nghiệm của [Salesforce CRM AP](https://www.salesforce.com/ap/crm/) với toàn bộ nội dung được bản địa hóa sang **Tiếng Việt**.

---

## 1. Tầm nhìn & Mục tiêu Sản phẩm (Vision & Goals)

- **Tầm nhìn (Vision)**: Cung cấp một website giới thiệu giải pháp CRM doanh nghiệp chuẩn quốc tế, trực quan, hiện đại và thân thiện với người dùng Việt Nam.
- **Mục tiêu cốt lõi (Key Objectives)**:
  1. Tái hiện 100% bố cục chuẩn 17 Blades của trang chủ Salesforce CRM kèm theo các trang con quan trọng (What is CRM, Pricing, Free Trial, Solutions).
  2. Áp dụng hệ thống Design Tokens nhất quán (`DESIGN.md`) với tone màu xanh thương hiệu `#0176D3` và xanh navy `#032D60`.
  3. Bản địa hóa 100% nội dung sang tiếng Việt chuẩn văn phong B2B SaaS chuyên nghiệp.
  4. Đạt hiệu năng tối ưu (Google Lighthouse Performance & SEO > 90/100).

---

## 2. Đối tượng Người dùng & Chân dung (Target Audience)

1. **Giám đốc Doanh nghiệp & Lãnh đạo Bán hàng (C-Level / Sales Leaders)**: Tìm kiếm giải pháp AI CRM để bứt phá doanh số và tối ưu năng suất nhân viên.
2. **Trưởng phòng Vận hành & IT (Operations / IT Managers)**: Cần tìm hiểu khả năng mở rộng, bảo mật dữ liệu và tích hợp đa hệ thống.
3. **Chủ doanh nghiệp vừa & nhỏ / Startup (SMBs / Founders)**: Tìm kiếm gói cước khởi đầu tinh gọn (Starter Suite) với chi phí hợp lý.

---

## 3. Phạm vi Trang & Cấu trúc Routing (Scope of Pages)

| Route Path | Tên trang | Mục đích & Khối nội dung chính |
|:---|:---|:---|
| `/` (hoặc `/crm`) | Trang chủ CRM Hub | Hiển thị trọn vẹn 17 Blades thành phần, Hero Marquee, Tabs sản phẩm, FAQ. |
| `/crm/what-is-crm` | Khái niệm CRM | Trang giáo dục định nghĩa CRM, vai trò theo phòng ban, lợi ích AI tự hành. |
| `/crm/pricing` | Bảng giá & Gói cước | So sánh các gói: Free Suite, Starter Suite ($25/tháng), Pro Suite ($100/tháng). |
| `/crm/free-trial` | Đăng ký Dùng thử | Form thu thập thông tin lead dùng thử 30 ngày (không cần thẻ tín dụng). |
| `/crm/solutions/small-business` | CRM Doanh nghiệp nhỏ | Giới thiệu chi tiết Starter Suite cho SMB. |
| `/crm/solutions/enterprise` | CRM Doanh nghiệp lớn | Giới thiệu Agentforce 360 và giải pháp hạ tầng mở rộng. |

---

## 4. Yêu cầu Chức năng (Functional Requirements)

### `[FR-1]` Hệ thống Điều hướng 2 tầng (Dual-layer Navigation)
- **FR-1.1**: Tầng 1 (Global Nav) hiển thị Logo thương hiệu, thanh tìm kiếm toàn cục, nút chuyển ngôn ngữ và nút Đăng nhập.
- **FR-1.2**: Tầng 2 (Contextual Subnav C360) cố định khi cuộn trang (Sticky Header), bao gồm tiêu đề "CRM", menu dropdown phân nhóm và 2 nút CTA: *"Khám phá tour"* (Primary) và *"Bắt đầu miễn phí"* (Secondary).
- **FR-1.3**: Hỗ trợ menu trượt dạng Drawer mượt mà trên thiết bị di động (Mobile Hamburger Menu).

### `[FR-2]` Hero Marquee & Video Demo Modal (Blade 1)
- **FR-2.1**: Hiển thị tiêu đề Hero 2 màu sắc tương phản cao, Eyebrow "Hệ thống Salesforce CRM", đoạn mô tả giá trị và cụm nút CTA.
- **FR-2.2**: Khối media bên phải hiển thị hình ảnh mockup/thumbnail có nút Play nổi. Khi nhấp nút, hiển thị hộp thoại Video / Interactive Demo Modal với nền tối mờ và phím tắt đóng (Esc / Click overlay).

### `[FR-3]` Khối Tài nguyên & Bài viết 3 cột (Blade 2 & Blade 15)
- **FR-3.1**: Hiển thị lưới 3 thẻ (Card Grid) tỷ lệ 16:9 với nhãn Tag phân loại nổi (`Tài nguyên`, `Bài viết`, `Starter Suite`, `Cẩm nang`, `Bản demo`).
- **FR-3.2**: Hiệu ứng nâng thẻ nhẹ (`translateY(-4px)`) và trượt mũi tên khi di chuột qua (Hover effect).

### `[FR-4]` Giới thiệu Tính năng Doanh nghiệp dạng Z-Pattern (Blades 4, 5, 6)
- **FR-4.1**: Hiển thị 3 khối tính năng so le nhau (Trái/Phải) làm nổi bật: Góc nhìn 360 độ về khách hàng, AI tự hành Agentforce và Giải pháp theo từng ngành nghề.
- **FR-4.2**: Tích hợp các nút điều hướng chi tiết (`Khám phá Agentforce 360`, `Xem cách thức hoạt động`, `Xem tất cả các ngành nghề`).

### `[FR-5]` Bộ chọn Tab Danh mục 5 Cloud Cốt lõi (Blade 8, 10, 13, 14)
- **FR-5.1**: Tab switch tương tác cho 5 giải pháp: **Agentforce**, **Sales Cloud**, **Service Cloud**, **Marketing Cloud**, **Commerce Cloud**.
- **FR-5.2**: Chuyển đổi mượt mà giữa các tab mà không bị giật layout, có thanh gạch chân báo trạng thái kích hoạt (Active Indicator).

### `[FR-6]` Khối Khách hàng Tiêu biểu & Logo Đối tác (Blade 11)
- **FR-6.1**: Trình bày logo của 5 khách hàng tiêu biểu (Good360, Nexo, Precina, reMarkable, Zota).
- **FR-6.2**: Khi hover hiển thị sắc nét và cho phép nhấp xem chi tiết câu chuyện thành công (Case Study).

### `[FR-7]` Trụ cột Liên hệ & Tư vấn (Blade 16)
- **FR-7.1**: 3 khối thẻ liên hệ với biểu tượng SVG trực quan: Dùng thử 30 ngày, Trao đổi với chuyên gia tư vấn, Đăng ký nhận bản tin thị trường.

### `[FR-8]` Danh sách Câu hỏi Thường gặp Dạng Accordion (Blade 17)
- **FR-8.1**: Danh sách 12 câu hỏi thường gặp về CRM, điện toán đám mây, bảo mật và chi phí.
- **FR-8.2**: Đóng/mở câu trả lời mượt mà, hỗ trợ mở đa câu hoặc đóng câu cũ khi mở câu mới, mũi tên icon tự động xoay 180°.

### `[FR-9]` Trang Giáo dục Khái niệm CRM (`/crm/what-is-crm`)
- **FR-9.1**: Định nghĩa CRM, bảng phân tích lợi ích cho từng bộ phận (Kinh doanh, Dịch vụ, Tiếp thị, Thương mại, IT).
- **FR-9.2**: Các số liệu chứng minh hiệu quả đầu tư (ROI) khi ứng dụng CRM tích hợp AI.

### `[FR-10]` Trang Bảng giá Chi tiết (`/crm/pricing`)
- **FR-10.1**: Bảng so sánh 3 gói cước cốt lõi: Gói Miễn phí (Free Suite), Gói Khởi đầu (Starter Suite - $25/người/tháng), Gói Chuyên nghiệp (Pro Suite - $100/người/tháng).
- **FR-10.2**: Nút chọn mua hoặc đăng ký dùng thử tương ứng cho từng gói cước.

### `[FR-11]` Form Thu thập Thông tin Dùng thử (`/crm/free-trial`)
- **FR-11.1**: Form đăng ký với các trường: Họ và tên, Email doanh nghiệp, Chức danh, Tên công ty, Quy mô công ty, Số điện thoại.
- **FR-11.2**: Xác thực dữ liệu đầu vào (Form Validation) theo thời gian thực (Email hợp lệ, không để trống trường bắt buộc).
- **FR-11.3**: Hiển thị thông báo thành công và chuyển hướng sau khi hoàn tất gửi form.

### `[FR-12]` Footer Đa cột & Hỗ trợ Bản địa hóa
- **FR-12.1**: Footer chân trang hiển thị đầy đủ liên kết sản phẩm, chính sách bảo mật, điều khoản sử dụng, bản quyền và mạng xã hội.

---

## 5. Yêu cầu Phi Chức năng (Non-Functional Requirements)

- **NFR-1 (Performance)**: Điểm Google Lighthouse Performance trên Desktop đạt tối thiểu **90+**, thời gian tải trang ban đầu (FCP) < 1.2s.
- **NFR-2 (SEO & Metadata)**: Mỗi trang có đầy đủ thẻ `title`, `meta description`, Open Graph tags (`og:title`, `og:image`, `og:description`), Canonical URL và Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **NFR-3 (Responsive)**: Hiển thị hoàn hảo không vỡ layout trên mọi kích thước màn hình từ Mobile (375px), Tablet (768px), Laptop (1024px) đến Màn hình lớn (1440px+).
- **NFR-4 (Accessibility)**: Tuân thủ tiêu chuẩn WCAG 2.1 mức AA+, tỷ lệ tương phản chữ/nền tối thiểu 4.5:1, hỗ trợ điều hướng đầy đủ bằng bàn phím.
- **NFR-5 (Mã nguồn & Cấu trúc Nuxt 4)**: Cấu trúc code mô-đun hóa, tách riêng dữ liệu content vào file `.ts`, dùng Vue 3 Composition API với `<script setup lang="ts">`.

---

## 6. Cấu trúc Quản lý Dữ liệu (Content & Data Contract)

Tất cả nội dung text, danh mục menu, danh sách 17 blades, gói cước và FAQ được tổ chức tập trung trong thư mục dữ liệu của Nuxt 4:
```
app/
├── data/
│   ├── navigation.ts                  # Menu items, mega-menu, header CTAs
│   ├── crm-blades.ts                  # Toàn bộ nội dung tiếng Việt 17 Blades
│   ├── pricing-tiers.ts               # Dữ liệu bảng giá & tính năng
│   └── faq-items.ts                   # 12 câu hỏi & câu trả lời FAQ
```

---

## 7. Tiêu chí Chấp nhận & Nghiệm thu (Acceptance Criteria)

1. **Giao diện & Bố cục**: Tất cả 17 Blades trên trang chủ và 4 trang con hiển thị chính xác theo quy chuẩn thiết kế `DESIGN.md`.
2. **Nội dung Tiếng Việt**: Không còn đoạn text tiếng Anh sót lại trên giao diện chính; toàn bộ câu từ mạch lạc, tự nhiên.
3. **Tương tác**: Các hiệu ứng hover card, tab chuyển đổi, video demo modal, FAQ accordion và form đăng ký hoạt động trơn tru không lỗi console.
4. **Không lỗi build**: Lệnh `npx nuxi typecheck` và `npm run build` hoàn thành với mã thoát 0 (Exit code 0).
