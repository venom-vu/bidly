---
name: bidly-salesforce-crm
description: Salesforce Lightning Design System tokens & visual specification for bidly CRM
status: final
created: '2026-08-25'
updated: '2026-08-25'
colors:
  brand-primary: '#0176D3'
  brand-primary-hover: '#014486'
  brand-primary-light: '#EBF5FF'
  brand-navy: '#032D60'
  brand-accent-green: '#04844B'
  brand-accent-teal: '#0176D3'
  text-primary: '#032D60'
  text-body: '#181818'
  text-secondary: '#5C5C5C'
  text-muted: '#747474'
  surface-white: '#FFFFFF'
  surface-light: '#F4F6F9'
  surface-gradient-start: '#F8FAFC'
  surface-gradient-end: '#EEF4F9'
  border-subtle: '#E5E5E5'
  border-focus: '#0176D3'
typography:
  fontFamily: '"Salesforce Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  fontFamilyHeading: '"AvantGardeForSalesforceW05-Dm", "Salesforce Sans", sans-serif'
  hero:
    fontFamily: '"AvantGardeForSalesforceW05-Dm", "Salesforce Sans", sans-serif'
    fontSize: '48px'
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: '-0.02em'
  h2:
    fontFamily: '"AvantGardeForSalesforceW05-Dm", "Salesforce Sans", sans-serif'
    fontSize: '36px'
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: '-0.01em'
  h3:
    fontFamily: '"Salesforce Sans", sans-serif'
    fontSize: '22px'
    fontWeight: '700'
    lineHeight: '1.3'
  bodyLarge:
    fontFamily: '"Salesforce Sans", sans-serif'
    fontSize: '18px'
    fontWeight: '400'
    lineHeight: '1.5'
  bodyRegular:
    fontFamily: '"Salesforce Sans", sans-serif'
    fontSize: '16px'
    fontWeight: '400'
    lineHeight: '1.6'
  badge:
    fontFamily: '"Salesforce Sans", sans-serif'
    fontSize: '13px'
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: '0.04em'
  caption:
    fontFamily: '"Salesforce Sans", sans-serif'
    fontSize: '14px'
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: '4px'
  md: '8px'
  lg: '12px'
  xl: '16px'
  '2xl': '24px'
  full: '9999px'
spacing:
  '1': '4px'
  '2': '8px'
  '3': '12px'
  '4': '16px'
  '6': '24px'
  '8': '32px'
  '12': '48px'
  '16': '64px'
  '24': '96px'
  container-max: '1280px'
  container-expanded: '1440px'
components:
  btn-primary:
    backgroundColor: '{colors.brand-primary}'
    backgroundColorHover: '{colors.brand-primary-hover}'
    color: '{colors.surface-white}'
    borderRadius: '{rounded.md}'
    padding: '12px 24px'
    fontWeight: '700'
  btn-secondary:
    backgroundColor: 'transparent'
    borderColor: '{colors.brand-primary}'
    color: '{colors.brand-primary}'
    borderRadius: '{rounded.md}'
    padding: '12px 24px'
    fontWeight: '700'
  btn-pill:
    borderRadius: '{rounded.full}'
    padding: '10px 20px'
  card-standard:
    backgroundColor: '{colors.surface-white}'
    borderColor: '{colors.border-subtle}'
    borderRadius: '{rounded.xl}'
    padding: '{spacing.6}'
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
    boxShadowHover: '0 16px 32px rgba(3, 45, 96, 0.12)'
---

# Visual Design Specification: bidly CRM (Salesforce Style)

## 1. Brand & Style
- **Bản sắc thiết kế**: Chuyên nghiệp, đáng tin cậy (Trust), hiện đại với phong cách Enterprise B2B SaaS.
- **Tông giọng thị giác (Visual Tone)**: Sử dụng các mảng màu thương hiệu xanh dương `{colors.brand-primary}` và xanh navy `{colors.brand-navy}` làm điểm nhấn, kết hợp nền trắng sáng và xám nhạt `{colors.surface-light}` tạo cảm giác thông thoáng, rộng rãi.
- **Phong cách chuyển động (Motion Posture)**: Mượt mà, đầm chắc, tinh tế. Tránh chuyển động giật hoặc quá nhanh; sử dụng easing curve `cubic-bezier(0.16, 1, 0.3, 1)`.

---

## 2. Colors
- `{colors.brand-primary}` (`#0176D3`): Màu nhận diện chính, dùng cho CTA chính, link tương tác, border focus và các điểm nhấn biểu tượng.
- `{colors.brand-navy}` (`#032D60`): Màu nền phụ cao cấp, dùng cho toàn bộ tiêu đề H1/H2 và các thanh điều hướng dark tương phản cao.
- `{colors.text-body}` (`#181818`): Màu văn bản đọc chính, độ tương phản đạt chuẩn WCAG AAA trên nền trắng.
- `{colors.surface-light}` (`#F4F6F9`): Nền các khối nội dung xen kẽ (Z-pattern blades) để phân tách phân đoạn trực quan.

---

## 3. Typography
- **Font chữ chính**: `Salesforce Sans` (Fallback: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif`).
- **Font tiêu đề**: `AvantGardeForSalesforceW05-Dm` hoặc font Sans đậm sắc nét.
- **Quy tắc phân cấp**:
  - `Hero H1`: `48px / 1.15` (Mobile: `34px`)
  - `Section H2`: `36px / 1.2` (Mobile: `28px`)
  - `Card Title H3`: `22px / 1.3`
  - `Body`: `16px / 1.6`
  - `Badge`: `13px / 1.2`, viết hoa hoặc chữ đậm cách điệu.

---

## 4. Layout & Spacing
- **Container chuẩn**: `max-width: 1280px`, căn giữa với padding ngang `24px` (mobile) đến `48px` (desktop).
- **Khoảng cách giữa các Blade (Section Spacing)**: `64px` đến `96px` nhằm phân tách rõ ràng từng khối giá trị.
- **Hệ thống Grid Responsive**:
  - Desktop (>1024px): 12 cột hoặc 3-4 cột thẻ đều nhau.
  - Tablet (768px - 1023px): 2 cột thẻ.
  - Mobile (<768px): 1 cột xếp chồng dọc.

---

## 5. Elevation & Depth
- **Level 1 (Card Rest)**: `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05)`
- **Level 2 (Card Hover / Modal)**: `box-shadow: 0 16px 32px rgba(3, 45, 96, 0.12)`, đi kèm `transform: translateY(-4px)`
- **Level 3 (Sticky Nav)**: `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)`

---

## 6. Shapes
- **Thẻ nội dung (Cards)**: `{rounded.xl}` (`16px`) tạo cảm giác thân thiện, bo tròn hiện đại.
- **Nút bấm & Badges**: `{rounded.md}` (`8px`) cho nút tiêu chuẩn hoặc `{rounded.full}` (`9999px`) cho các tag/pill phân loại.

---

## 7. Chi tiết 17 Component Blades (UI Specs)

1. **`AppHeader` & `SubHeaderC360`**:
   - Header 2 tầng cố định (Sticky). Chiều cao tầng trên: `64px`, tầng dưới: `48px`.
   - Nút CTA kép: `Khám phá tour` (Nút phụ viền xanh) + `Dùng thử miễn phí` (Nút chính nền xanh).
2. **`HeroMarquee` (Blade 1)**:
   - Layout 2 cột: Cột trái chứa Eyebrow, H1 in đậm hai màu, đoạn mô tả và cặp CTA. Cột phải chứa khung video demo tỉ lệ 16:9 với nút play nổi.
3. **`ResourceGrid3Up` (Blade 2 & 15)**:
   - Lưới 3 cột card ngang bằng nhau, có thẻ Tag nổi (`Tài nguyên`, `Bài viết`, `Starter Suite`), ảnh thumbnail và link điều hướng mũi tên.
4. **`CenteredHeading` (Blade 3, 7, 9, 12)**:
   - Khối tiêu đề căn giữa bản rộng, font H2 xanh navy `{colors.brand-navy}`.
5. **`FeatureOneUp` (Blade 4, 5, 6)**:
   - Bố cục Z-pattern so le (Blade 4: Hình phải; Blade 5: Hình trái; Blade 6: Hình phải).
6. **`ProductPortfolioTabs` (Blade 8, 10, 13, 14)**:
   - Thanh chọn Tab các Cloud cốt lõi (Agentforce, Sales, Service, Marketing, Commerce) chuyển đổi mượt mà.
7. **`CustomerLogoGrid` (Blade 11)**:
   - Khối hiển thị 5 thương hiệu tiêu biểu với logo màu xám tối và chuyển sang màu thực khi hover.
8. **`ContactUsBlade` (Blade 16)**:
   - 3 khối hành động bo góc tròn kèm icon SVG nổi bật (Dùng thử, Gặp chuyên gia, Nhận bản tin).
9. **`FaqAccordion` (Blade 17)**:
   - Danh sách câu hỏi viền mảnh `{colors.border-subtle}`, click mở rộng nội dung và xoay mũi tên icon.

---

## 8. Do's and Don'ts

### ✅ Do's
- Luôn sử dụng đúng mã màu biến CSS từ Design Tokens.
- Duy trì khoảng cách đệm (padding/margin) tối thiểu `64px` giữa các Section lớn.
- Đảm bảo tất cả hình ảnh có thẻ `alt` và tỷ lệ hiển thị chuẩn (16:9 cho card, 4:3 cho mockup).
- Áp dụng micro-interaction nhấc thẻ nhẹ (`-4px`) khi hover vào các khối có thể click.

### ❌ Don'ts
- Không sử dụng màu xanh thô chưa qua tinh chỉnh (ví dụ `#0000FF`).
- Không đặt các khối nội dung tràn sát mép màn hình mà thiếu container padding.
- Không sử dụng các hiệu ứng animation giật cục, quá nhanh (<0.1s) hoặc quá chậm (>0.8s).
