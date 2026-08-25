---
title: 'UX Experience Specification: bidly CRM'
status: final
created: '2026-08-25'
updated: '2026-08-25'
visual_reference: './DESIGN.md'
---

# UX Experience Specification: bidly CRM (Salesforce Style)

Tài liệu này đặc tả toàn bộ kiến trúc thông tin (IA), quy chuẩn tương tác, trạng thái component và các luồng hành trình người dùng (User Journeys) cho website CRM trên nền tảng **Nuxt 4 + Vue 3**.

---

## 1. Nền tảng & Hệ thống UI (Foundation)

- **Hình thức triển khai (Form-factor)**: Web Application Responsive (Desktop-first, tối ưu toàn diện trên Tablet & Mobile).
- **Công nghệ nền tảng**: Nuxt 4, Vue 3, CSS Variables kế thừa trực tiếp từ `{DESIGN.md}`.
- **Quy tắc tham chiếu visual**: Tất cả màu sắc, khoảng cách, font chữ trong tài liệu này đều liên kết với các tokens trong `DESIGN.md` thông qua cú pháp `{colors.*}`, `{spacing.*}`, `{rounded.*}`.

---

## 2. Kiến trúc Thông tin (Information Architecture)

### Cây Routing & Điều hướng:
```
/                                      -> Trang chủ CRM Hub (17 Blades tổng quan)
/crm/what-is-crm                       -> Trang giáo dục: Định nghĩa, lợi ích & tính năng
/crm/pricing                           -> Bảng giá: Free Suite, Starter Suite, Pro Suite, Enterprise
/crm/free-trial                        -> Form đăng ký trải nghiệm dùng thử 30 ngày
/crm/solutions/small-business          -> Giải pháp CRM chuyên sâu cho SMB & Startup
/crm/solutions/enterprise              -> Giải pháp Agentforce 360 cho Doanh nghiệp lớn
```

### Quy tắc Điều hướng 2 tầng:
1. **Global Header (Tầng 1)**: Chứa Logo `bidly`, Global Search, Chuyển đổi ngôn ngữ (VI/EN), Nút Đăng nhập.
2. **Contextual Bar C360 (Tầng 2)**: 
   - Tiêu đề cố định: `CRM`
   - Menu Dropdown: `Tổng quan`, `CRM là gì?`, `Giải pháp`, `Tài nguyên`, `Bảng giá`.
   - Nút hành động nhanh: `Khám phá tour` và `Dùng thử miễn phí`.

---

## 3. Tông giọng & Viết nội dung (Voice and Tone / Microcopy)

- **Phong cách giao tiếp**: Tự tin, chuyên nghiệp, truyền cảm hứng và tập trung vào hiệu quả kinh doanh thực tế.
- **Quy chuẩn Microcopy tiếng Việt**:
  - Nhãn nút bấm (Button Labels): Bắt đầu bằng động từ hành động rõ ràng (`Bắt đầu miễn phí`, `Xem bản Demo`, `Khám phá giải pháp`).
  - Tiêu đề (Headlines): Ngắn gọn, có điểm nhấn từ khóa công nghệ (`Agentic CRM`, `AI tự hành`, `Góc nhìn 360 độ`).
  - Trạng thái thông báo form: Lịch sự, minh bạch và cam kết bảo mật thông tin khách hàng.

---

## 4. Đặc tả Hành vi Component (Component Patterns)

### 4.1. Header Mega Menu
- **Kích hoạt (Trigger)**: Hover hoặc Click vào menu cha trên Desktop; Click mở rộng dạng Drawer trên Mobile.
- **Hành vi**: Dropdown trượt xuống nhẹ (`translateY(-8px) -> translateY(0)` trong `150ms`).
- **Phân nhóm**: Các mục liên kết được gom theo danh mục rõ ràng (Quy mô, Ngành nghề, Năng lực).

### 4.2. Tab Switcher (Khối 5 Core Clouds - Blade 8)
- **Kích hoạt**: Click chọn tab (`Agentforce`, `Sales Cloud`, `Service Cloud`, `Marketing Cloud`, `Commerce Cloud`).
- **Hành vi**:
  - Gạch chân kích hoạt (Active Indicator) trượt mượt mà sang vị trí tab mới.
  - Nội dung mô tả và hình ảnh chuyển đổi qua hiệu ứng `Fade` (`opacity: 0 -> 1` trong `200ms`).

### 4.3. Interactive Video / Demo Modal
- **Kích hoạt**: Click nút `Xem bản Demo` tại Hero Marquee hoặc các thẻ Demo.
- **Hành vi**:
  - Backdrop tối mờ `{colors.brand-navy}` với độ mờ `60%`.
  - Hộp thoại video hiển thị ở trung tâm màn hình, hỗ trợ phát/dừng, phím `Esc` để đóng.

### 4.4. FAQ Accordion (Blade 17)
- **Kích hoạt**: Click vào câu hỏi bất kỳ.
- **Hành vi**: Mở rộng mượt mà chiều cao của câu trả lời, đồng thời xoay mũi tên icon từ 0° sang 180°. Chỉ mở 1 câu tại một thời điểm (hoặc cho phép mở đa câu tùy chọn).

---

## 5. Trạng thái Giao diện (State Patterns)

| Trạng thái | Hành vi thị giác & Tương tác |
|:---|:---|
| **Rest (Mặc định)** | Nền thẻ trắng `{colors.surface-white}`, viền `{colors.border-subtle}`, đổ bóng nhẹ. |
| **Hover** | Thẻ nhấc lên `-4px`, bóng đổ sâu hơn `{colors.brand-navy}` 12% alpha, link mũi tên dịch chuyển sang phải `+4px`. |
| **Active / Pressed** | Nút bấm thu nhỏ nhẹ `scale(0.98)` để phản hồi xúc giác. |
| **Focus Visible** | Viền outline xanh `{colors.brand-primary}` dày `2px` với khoảng cách `2px` cho khả năng điều hướng bằng bàn phím (Tab key). |
| **Loading** | Hiển thị Skeleton shimmer mượt mà trong khi nạp dữ liệu/hình ảnh. |

---

## 6. Hiệu ứng & Chuyển động (Interaction Primitives)

```css
/* Scroll Reveal Entry */
.sf-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.sf-reveal.is-active {
  opacity: 1;
  transform: translateY(0);
}

/* Card Lift Transition */
.sf-card-interactive {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
}
```

---

## 7. Tiêu chuẩn Tiếp cận (Accessibility Floor - WCAG AA+)

1. **Độ tương phản màu sắc**: Tất cả văn bản chính trên nền trắng đạt tỷ lệ tương phản tối thiểu **4.5:1** (tiêu đề Navy `#032D60` đạt **12.6:1**).
2. **Điều hướng bàn phím**: Toàn bộ hệ thống Header, Mega Menu, Tabs, và Accordion có thể điều hướng 100% bằng phím `Tab`, `Enter`, `Space` và `Arrow Keys`.
3. **Thẻ Screen Reader**: Các nút icon (Play, Close, Menu) đều có `aria-label` tương ứng bằng tiếng Việt.

---

## 8. Hành trình Người dùng Trọng tâm (Key User Flows)

### Flow 1: Khám phá Năng lực & Đăng ký Dùng thử 30 ngày
- **Nhân vật**: *Anh Tuấn - Giám đốc Kinh doanh một công ty dịch vụ B2B*.
- **Bước 1**: Truy cập Trang chủ CRM, đọc Hero Headline về *Agentic CRM và AI tự hành*.
- **Bước 2**: Xem qua 3 Card tài nguyên và các khối tính năng Z-pattern minh họa góc nhìn 360 độ về khách hàng.
- **Bước 3**: Click chọn Tab `Sales Cloud` trong khối Product Portfolio để xem cách AI tự động chấm điểm cơ hội (Lead Scoring).
- **Bước 4**: Nhấp nút `Bắt đầu miễn phí` (Start for free) tại Sticky Subnav -> Chuyển đến trang `/crm/free-trial`.
- **Bước 5**: Điền form 4 trường cơ bản (Họ tên, Email doanh nghiệp, Tên công ty, Quy mô) -> Nhận thông báo kích hoạt tài khoản thử nghiệm thành công.

### Flow 2: Tìm hiểu Bảng giá & Đăng ký Tư vấn Chuyên sâu
- **Nhân vật**: *Chị Mai - Trưởng phòng Vận hành Doanh nghiệp vừa và nhỏ*.
- **Bước 1**: Nhấp vào menu `Bảng giá` trên thanh điều hướng -> Chuyển đến `/crm/pricing`.
- **Bước 2**: So sánh giữa 3 gói chính: `Free Suite`, `Starter Suite ($25)` và `Pro Suite ($100)`.
- **Bước 3**: Cuộn xuống khối Contact Us (`Blade 16`) -> Chọn `Trao đổi với chuyên gia`.
- **Bước 4**: Điền nhu cầu tư vấn -> Hệ thống xác nhận và thông báo chuyên viên sẽ liên hệ trong 24 giờ.
