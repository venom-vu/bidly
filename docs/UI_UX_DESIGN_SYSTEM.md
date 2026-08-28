# HỆ THỐNG QUY CHUẨN THIẾT KẾ UI/UX TOÀN DIỆN — BIDLY DESIGN SYSTEM
## (Tiêu Chuẩn Salesforce Enterprise CRM × Bộ Nhận Diện Bidly Preconstruction CRM)

> **Tài liệu đặc tả thiết kế & quy chuẩn trải nghiệm người dùng (UI/UX Master Specification)**
> 
> **Mục đích**: Áp dụng thống nhất cho toàn bộ hệ thống phần mềm **Bidly** (bao gồm Web App nội bộ, Landing Page, Portal đối tác và các mô-đun nghiệp vụ mở rộng).
> 
> **Tham chiếu nguồn**:
> - **Ngôn ngữ thiết kế & Bố cục**: [Salesforce CRM](https://www.salesforce.com/ap/crm/) & Salesforce Lightning Design System (SLDS).
> - **Bộ màu & Ngữ nghĩa nghiệp vụ**: `docs/design-system/index.html`, `docs/brand/index.html`, `docs/mockups/index.html`.

---

## MỤC LỤC
1. [Triết Lý Thiết Kế & Ma Trận Đối Soát Salesforce](#1-triết-lý-thiết-kế--ma-trận-đối-soát-salesforce)
2. [Hệ Thống Màu Sắc Chuẩn (Color Tokens & Semantics)](#2-hệ-thống-màu-sắc-chuẩn-color-tokens--semantics)
3. [Quy Chuẩn Typography & Định Dạng Số Nghiệp Vụ (.tabular)](#3-quy-chuẩn-typography--định-dạng-số-nghiệp-vụ-tabular)
4. [Bố Cục, Khung Chứa & Nhịp Không Gian (Layout, Grid & Spacing)](#4-bố-cục-khung-chứa--nhịp-không-gian-layout-grid--spacing)
5. [Thang Bo Góc (Border Radius) & Đổ Bóng (Elevation)](#5-thang-bo-góc-border-radius--đổ-bóng-elevation)
6. [Đặc Tả Chi Tiết Thành Phần Giao Diện (Component Blueprints)](#6-đặc-tả-chi-tiết-thành-phần-giao-diện-component-blueprints)
   - 6.1. Thẻ Chuẩn Salesforce (Cards với Top Accent Bar)
   - 6.2. Ô Nhập Liệu & Biểu Mẫu Nhận Diện Cao (High-Affordance Inputs & Forms)
   - 6.3. Hộp Thoại Popup / Modal (Kiến Trúc 3 Lớp & Backdrop Blur)
   - 6.4. Thanh Điều Hướng & Mega Menu Đa Tầng (Navigation & Mega Dropdowns)
   - 6.5. Nút Bấm & Tương Tác Vi Mô (Buttons & Micro-interactions)
   - 6.6. Huy Hiệu Giao Diện & Trạng Thái Nghiệp Vụ (Badges & Chips)
   - 6.7. Tabs Sản Phẩm, Khung Z-Pattern, Accordion & Carousels
   - 6.8. Bảng Dữ Liệu Lớn & Server Pagination (Tables & Lists)
7. [Chuyển Động, Hiệu Ứng & Trạng Thái Tương Tác (Motion & States)](#7-chuyển-động-hiệu-ứng--trạng-thái-tương-tác-motion--states)
8. [Tiêu Chuẩn Trợ Năng (A11y WCAG AA) & Bảng Kiểm Tra Chất Lượng (QA Checklist)](#8-tiêu-chuẩn-trợ-năng-a11y-wcag-aa--bảng-kiểm-tra-chất-lượng-qa-checklist)

---

## 1. TRIẾT LÝ THIẾT KẾ & MA TRẬN ĐỐI SOÁT SALESFORCE

### 1.1. Bối Cảnh & Định Vị
- **Khách hàng mục tiêu**: Tổng thầu xây dựng công nghiệp Việt Nam (EPC, MEP, Kết cấu thép).
- **Đặc thù nghiệp vụ**: Quy mô gói thầu từ hàng chục đến hàng nghìn tỷ VND; chuỗi xử lý kéo dài từ S0 (Tín hiệu dự án) đến S8 (Bàn giao thi công); bắt buộc có 5 chốt chặn cứng (Hard Gates) ở tầng máy chủ; chấm điểm Go/No-Go định lượng (S2).
- **Mục tiêu UI/UX**: Đạt độ hoàn thiện, chuyên nghiệp, trực quan đẳng cấp quốc tế như **Salesforce CRM**, nhưng được tinh chỉnh chính xác cho ngữ cảnh thương hiệu và thói quen làm việc của kỹ sư, chuyên viên đấu thầu và lãnh đạo tổng thầu Việt Nam.

### 1.2. Ma Trận Đối Soát Thành Phần (Salesforce CRM vs Bidly Standard)

| Thành phần UI/UX | Tiêu chuẩn Salesforce CRM (`salesforce.com/ap/crm`) | Chuẩn hóa áp dụng cho Bidly System |
| :--- | :--- | :--- |
| **Bố cục tổng thể (Layout)** | Cấu trúc phân khối Blade dạng tầng (Hero Marquee, 3-up Resources, Z-Pattern, Product Portfolio Tabs, Business Scale, Client Logos, FAQ Accordion, 3 Action Pillars, Mega Footer). | **Áp dụng 100% cấu trúc Blade phân tầng**. Khung chứa cố định `max-w-7xl` (`1280px`), xen kẽ nền Giấy Lạnh (`#F4F6F4`) và Gradient Mềm (`#F4F6F4` → `#EBF2EB`). |
| **Thẻ nội dung (Cards)** | Viền 1px sắc nét (`border`), bo góc `16px`, dải màu phân loại trên đầu thẻ (Top Accent Bar 6–8px), hiệu ứng hover lift `-4px` kèm đổ bóng mềm `shadow-card-hover`, link gạch chân có mũi tên chuyển động. | **Salesforce Top Accent Card**. Dải màu 8px trên đỉnh thẻ mang màu sắc định danh mô-đun/giai đoạn (Xanh trời cho M4 Tender, Tím cho S2 Scorecard, Xanh lá cho S8 Bàn giao). Link chữ xanh thương hiệu gạch chân cách chữ 4px (`underline-offset-4`). |
| **Ô nhập & Biểu mẫu (Inputs)** | Chiều cao 40px–44px, viền rõ nét `border-input`, nhãn tường minh in hoa bên trên, focus ring màu xanh sáng 3px, có icon dẫn hướng, thông báo lỗi cụ thể đi kèm icon cảnh báo. | **High-Affordance Form Controls**. Nền trắng `#FFFFFF`, viền `#D4DDD4`, focus ring `#74CC55` (`ring-2 ring-ring`), nhãn `text-xs font-bold uppercase tracking-wider text-foreground`, hỗ trợ icon kính lúp/vòng quay spinner chuẩn accessibility. |
| **Hộp thoại (Modal / Popup)** | Kiến trúc 3 lớp (Header cố định có nút X tròn, Body cuộn bên trong không làm trôi nút, Footer cố định), backdrop mờ kính cao cấp, đóng bằng phím Esc và click ngoài. | **3-Layer Modal Architecture**. Header cố định → Thân `min-h-0 max-h-[calc(100dvh-8rem)] overflow-y-auto` → Footer cố định chứa nút Huỷ & Hành động. Backdrop `bg-brand-panel/75 backdrop-blur-md`. |
| **Điều hướng & Menu** | Header dính (Sticky), thanh Utility trên cùng, Mega Dropdown 2–4 cột phân nhóm rõ ràng kèm mô tả chi tiết và badge nổi bật, nút CTA kép ("Take tour" + "Start free"). Mobile Drawer vuốt từ cạnh. | **Bidly Mega Menu System**. Menu 2–3 cột phân nhóm (Định vị, Tính năng lõi M1–M7, Bản đồ S0–S8, Tài nguyên, Bảng giá), kèm thẻ pill highlight ("TRỰC QUAN", "MỚI"). Mobile Navigation Drawer `w-72 max-w-[85vw]` thân thiện với ngón tay cảm ứng. |
| **Thang bo góc (Radius)** | Kết hợp đa tầng: Nút bấm/Input bo 8px (`rounded-lg`), Thẻ bo 16px (`rounded-2xl`), Khung lớn bo 24px (`rounded-3xl`), Huy hiệu/Pill bo 9999px (`rounded-full`). | **Hệ thống Bo góc phân tầng 6 mức**: `4px` (tags nhỏ), `6px` (badge nghiệp vụ), `8px` (nút/input), `12px` (sub-cards), `16px` (thẻ chuẩn), `24px` (khung lớn), `9999px` (pill/chips). |
| **Định dạng số & Bảng** | Cột tiền tệ, tỷ lệ phần trăm và ngày tháng luôn dùng font chữ có độ rộng số cố định (Tabular numbers) để tránh nhảy răng cưa khi cuộn bảng. | **Bắt buộc class `.tabular` (`font-variant-numeric: tabular-nums`)** cho mọi số tiền (VND/USD), số tỷ lệ %, số lượng ngày/deadline. Tiền VND format chuẩn "tỷ / triệu". |

---

## 2. HỆ THỐNG MÀU SẮC CHUẨN (COLOR TOKENS & SEMANTICS)

Hệ thống màu của Bidly được tổ chức thành **2 lớp token phân tách nghiêm ngặt**:

### 2.1. Lớp 1 — Giao Diện Bề Mặt & Hành Động (Surfaces & Actions)

```css
:root {
  /* Nền trang & Chữ (Clean Light - Mặc định) */
  --background: #F4F6F4;          /* Giấy lạnh ngả nhẹ xanh công nghiệp (#F4F6F4) */
  --foreground: #1B211C;          /* Mực đen than đậm (#1B211C) */

  /* Bề mặt thẻ & Popover */
  --card: #FFFFFF;                /* Trắng tinh khiết (#FFFFFF) */
  --card-foreground: #1B211C;
  --popover: #FFFFFF;
  --popover-foreground: #1B211C;

  /* Nút hành động chính (Primary Action) */
  --primary: #3F9E25;             /* Xanh lá Vtechcom (#3F9E25) */
  --primary-hover: #2E7D1A;       /* Xanh lá đậm hơn khi hover (#2E7D1A) */
  --primary-foreground: #FFFFFF;  /* Chữ trắng (#FFFFFF) */

  /* Nét nhấn thương hiệu (Brand Accent & Gate) */
  --brand: #74CC55;               /* Xanh sáng gốc vtechcom (#74CC55) — dùng cho thanh cổng logo, ring */
  --brand-gate: #74CC55;
  --brand-text: #277A14;          /* Xanh đậm (#277A14) — bắt buộc dùng cho CHỮ & LINK trên nền sáng để đạt 4.5:1 WCAG AA */
  --brand-soft: #EBF7E8;          /* Nền xanh rất nhạt (#EBF7E8) cho hover, pill badges */

  /* Bề mặt phụ trợ & Phân tách */
  --secondary: #EFF2EF;           /* Xám xanh nhạt (#EFF2EF) */
  --secondary-foreground: #1B211C;
  --muted: #EFF2EF;
  --muted-foreground: #5C665D;    /* Chữ phụ, mô tả thẻ (#5C665D) */

  --accent: #E5EAE5;              /* Nền hover của các menu item (#E5EAE5) */
  --accent-foreground: #1B211C;

  --destructive: #DC2626;         /* Đỏ cảnh báo / Xoá (#DC2626) */
  --destructive-foreground: #FFFFFF;

  --border: #E3E8E3;              /* Viền thẻ và bảng 1px siêu nét (#E3E8E3) */
  --input: #D4DDD4;               /* Viền ô nhập liệu (#D4DDD4) */
  --ring: #74CC55;                /* Vòng sáng focus ring (#74CC55) */

  /* Panel tối (Footer, Hero Tối, Terminal, Auth panel) */
  --brand-panel: #171C18;         /* Đen than ấm sâu thẳm (#171C18) */
  --brand-panel-foreground: #F4F6F4;
  --brand-panel-muted: #8E9B8F;
  --brand-panel-border: #262E27;

  /* Logo */
  --logo-tile: #1B211C;
  --logo-glyph: #FFFFFF;
  --logo-gate: #74CC55;

  /* Chữ trên nền màu đặc của lớp 2 */
  --on-accent: #FFFFFF;
}
```

### 2.2. Lớp 2 — Ngữ Nghĩa Nghiệp Vụ Pipeline S0–S8 & Trạng Thái (Business Semantics)

> [!CAUTION]
> **Quy tắc vàng về màu sắc**:
> 1. **Tuyệt đối không dùng màu Stage làm màu nút bấm**: Cung S0–S6 hoàn toàn mang màu lạnh, không có màu xanh lá. Màu xanh lá chỉ được xuất hiện ở **Nút Hành Động**, **Stage S8 (Bàn giao)** và **Kết quả Thắng (WON)**.
> 2. **Chữ xanh trên nền sáng PHẢI dùng `--brand-text: #277A14`**: Không được dùng `--brand: #74CC55` làm màu chữ vì sẽ bị tàng hình và rớt bài kiểm tra tương phản 4.5:1.
> 3. **Badge nghiệp vụ = Nền Soft + Chữ Đặc**: Không dùng badge màu bão hòa đặc trên bảng 100 dòng vì sẽ làm rối mắt người dùng.

```css
:root {
  /* 9 Giai đoạn Pipeline cố định */
  --stage-s0: #64748B;          --stage-s0-soft: #F1F5F9;  /* S0 · Tín hiệu */
  --stage-s1: #475569;          --stage-s1-soft: #F1F5F9;  /* S1 · Sàng lọc */
  --stage-s2: #8B5CF6;          --stage-s2-soft: #F5F3FF;  /* S2 · Go/No-Go (Hard Gate 1) */
  --stage-s3: #0D9488;          --stage-s3-soft: #F0FDFA;  /* S3 · Chuẩn bị */
  --stage-s4: #0284C7;          --stage-s4-soft: #F0F9FF;  /* S4 · Đấu thầu (Tender Room) */
  --stage-s5: #2563EB;          --stage-s5-soft: #EFF6FF;  /* S5 · Chờ kết quả (Hard Gate 2) */
  --stage-s6: #4F46E5;          --stage-s6-soft: #EEF2FF;  /* S6 · Thương thảo */
  --stage-s7: #475569;          --stage-s7-soft: #F1F5F9;  /* S7 · Kết thúc (Mượn màu outcome) */
  --stage-s8: #3F9E25;          --stage-s8-soft: #EBF7E8;  /* S8 · Bàn giao (Hard Gate 3) */

  /* Kết quả dự án (Outcomes) */
  --outcome-won: #3F9E25;       --outcome-won-soft: #EBF7E8;   /* Thắng thầu (WON) */
  --outcome-lost: #DC2626;      --outcome-lost-soft: #FEE2E2;  /* Thua thầu (LOST) */
  --outcome-nobid: #64748B;     --outcome-nobid-soft: #F1F5F9; /* Không tham gia (NO-BID) */

  /* Cảnh báo tiến độ & Thời hạn (Tone Alerts) */
  --tone-ok: #3F9E25;           --tone-ok-soft: #EBF7E8;       /* Đúng hạn, tiến độ chuẩn */
  --tone-warn: #D97706;         --tone-warn-soft: #FEF3C7;     /* Cận hạn (< 3 ngày), cảnh báo */
  --tone-danger: #DC2626;       --tone-danger-soft: #FEE2E2;   /* Quá hạn, rủi ro cao */
  --tone-info: #0284C7;         --tone-info-soft: #E0F2FE;     /* Thông tin bổ trợ */
}
```

---

## 3. QUY CHUẨN TYPOGRAPHY & ĐỊNH DẠNG SỐ NGHIỆP VỤ (.TABULAR)

### 3.1. Font Chữ & Cấu Trúc Phông
- **Phông chữ chủ đạo**: `'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.
- **Phông số & Mã nguồn**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`.

### 3.2. Bảng Thang Chữ Chi Tiết (Type Hierarchy)

```
┌─────────────────────────┬──────────────┬──────────────┬────────┬─────────────┬──────────────┐
│ Cấp bậc hiển thị        │ Kích thước   │ Tailwind     │ Weight │ Line Height │ Letter Space │
├─────────────────────────┼──────────────┼──────────────┼────────┼─────────────┼──────────────┤
│ Display / Hero H1       │ 48px - 56px  │ text-5xl     │ 800    │ 1.12        │ -0.03em      │
│ Section H2              │ 32px - 38px  │ text-4xl     │ 700    │ 1.20        │ -0.025em     │
│ Subsection H3           │ 20px - 24px  │ text-2xl     │ 700    │ 1.30        │ -0.015em     │
│ Card Title H4           │ 17px - 19px  │ text-lg      │ 600    │ 1.40        │ -0.01em      │
│ Body Lead               │ 16px - 18px  │ text-base/lg │ 400    │ 1.60        │ normal       │
│ Body Standard           │ 14px - 15px  │ text-sm      │ 400    │ 1.55        │ normal       │
│ Caption / Helper text   │ 12px - 13px  │ text-xs      │ 500    │ 1.45        │ normal       │
│ Overline / Category Tag │ 11px - 12px  │ text-[11px]  │ 700    │ 1.20        │ +0.08em (UP) │
└─────────────────────────┴──────────────┴──────────────┴────────┴─────────────┴──────────────┘
```

### 3.3. Quy Tắc Số Liệu & Tiền Tệ (`.tabular`)
- Mọi trường dữ liệu số (Doanh thu, Dự toán, Giá trị gói thầu, Ngày nộp hồ sơ, Điểm Scorecard, Tỷ lệ trúng thầu) **bắt buộc mang class `.tabular`** (`font-variant-numeric: tabular-nums`).
- Tiền tệ hiển thị theo chuẩn tiếng Việt: `1.250 tỷ VND` hoặc `880 triệu VND` qua hàm tiện ích `formatVnd()`.

---

## 4. BỐ CỤC, KHUNG CHỨA & NHỊP KHÔNG GIAN (LAYOUT, GRID & SPACING)

### 4.1. Khung Chứa Chuẩn (Container Specification)
- **Container Class**: `.sf-container`
  - Max Width: `1280px` (`max-w-7xl`).
  - Lề ngang di động (< 640px): `px-4` (16px).
  - Lề ngang tablet (640px – 1023px): `px-6` (24px).
  - Lề ngang desktop (>= 1024px): `px-8` (32px).
- **Hệ thống Lưới 12 Cột**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8`.

### 4.2. Thang Khoảng Cách Modular 4px / 8px (Spacing Hierarchy)

```
├── 4px  (0.25rem / 1)  -> gap-1: Khoảng cách giữa icon và text nhỏ
├── 8px  (0.5rem / 2)   -> gap-2: Khoảng cách giữa các chip, badge, nút trong hàng
├── 12px (0.75rem / 3)  -> gap-3: Khoảng cách giữa các phần tử bên trong thẻ con
├── 16px (1.0rem / 4)   -> gap-4 / space-y-4: Nhịp dọc chuẩn giữa các khối cấp trang và form fields
├── 24px (1.5rem / 6)   -> p-6: Padding trong của Thẻ Card tiêu chuẩn
├── 32px (2.0rem / 8)   -> p-8 / gap-8: Padding trong của Card lớn, khoảng cách giữa các cột
├── 48px (3.0rem / 12)  -> py-12: Padding dọc section nhỏ
├── 64px (4.0rem / 16)  -> py-16: Padding dọc section tiêu chuẩn trên tablet
└── 96px (6.0rem / 24)  -> py-24: Padding dọc section lớn trên desktop
```

### 4.3. Cấu Trúc Khối Blade & Phân Tách Nhịp Dọc
- Section trên Landing page và Portal sử dụng kỹ thuật phân tầng Blade của Salesforce:
  - **Blade 1**: Hero Marquee (Headline + Primary CTA + Secondary Link + Media Box với Floating Interactive Badges).
  - **Blade 2**: Resource 3-Up Grid (Thẻ Top Accent phân loại thông tin).
  - **Blade 3**: Section Divider Heading (Dòng thông điệp dẫn dắt tinh tế).
  - **Blade 4, 5, 6**: Z-Pattern Feature Highlights (Bố cục xen kẽ Trái/Phải).
  - **Blade 7**: Product Cloud Portfolio Tabs (Thanh tabs ngang chọn mô-đun).
  - **Blade 8**: Asymmetric Scale Comparison (So sánh quy mô Doanh nghiệp vừa vs Doanh nghiệp lớn).
  - **Blade 9**: Social Proof Client Logo Grid & Case Studies.
  - **Blade 10**: Topic & Article Carousels.
  - **Blade 11**: 3 Contact Action Pillars.
  - **Blade 12**: FAQ Accordion.
  - **Blade 13**: Mega Footer 5 cột.

---

## 5. THANG BO GÓC (BORDER RADIUS) & ĐỔ BÓNG (ELEVATION)

### 5.1. Thang Bo Góc (Border Radius Scale)

```css
:root {
  --radius-xs: 0.25rem;   /* 4px  - Tag nhỏ, Tooltip, Micro indicator */
  --radius-sm: 0.375rem;  /* 6px  - Business Stage Badges, Code inline */
  --radius: 0.5rem;       /* 8px  - Nút bấm chuẩn, Input fields, Selects */
  --radius-md: 0.625rem;  /* 10px - Bảng điều khiển nhỏ, Toast notifications */
  --radius-lg: 0.75rem;   /* 12px - Sub-panels, Mega Menu Dropdowns */
  --radius-xl: 1.0rem;    /* 16px - Standard Cards, Feature boxes, Pricing Cards */
  --radius-2xl: 1.25rem;  /* 20px - Large Modals, Banner containers */
  --radius-3xl: 1.5rem;   /* 24px - Large Feature Z-Pattern Containers */
  --radius-full: 9999px;  /* Pill - Status Pills, Search Capsules, Action Pills */
}
```

### 5.2. Thang Đổ Bóng Đa Tầng (Elevation Scale)

```css
/* Elevation 1: Thẻ nghỉ ngơi (Resting Card) */
.shadow-card {
  box-shadow: 0 4px 16px 0 rgba(27, 33, 28, 0.04);
}

/* Elevation 2: Thẻ khi di chuột (Card Hover Lift -4px) */
.shadow-card-hover {
  box-shadow: 0 16px 32px -4px rgba(27, 33, 28, 0.08), 0 4px 12px -2px rgba(27, 33, 28, 0.03);
}

/* Elevation 3: Mega Menu Dropdown & Popover */
.shadow-dropdown {
  box-shadow: 0 20px 48px -8px rgba(27, 33, 28, 0.14), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

/* Elevation 4: Modal Dialog Floating */
.shadow-modal {
  box-shadow: 0 25px 50px -12px rgba(27, 33, 28, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
}
```

---

## 6. ĐẶC TẢ CHI TIẾT THÀNH PHẦN GIAO DIỆN (COMPONENT BLUEPRINTS)

### 6.1. Thẻ Chuẩn Salesforce (Cards với Top Accent Bar)

Thẻ Salesforce đặc trưng với **Dải màu nhận diện trên đỉnh (Top Accent Bar)** cao 6px–8px, viền mảnh 1px, hiệu ứng nhấc thẻ mượt mà và liên kết gạch chân có mũi tên chuyển động:

```html
<div class="group bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between overflow-hidden h-full">
  <!-- Top Accent Bar: 8px chiều cao mang màu của mô-đun -->
  <div class="h-2 w-full shrink-0" style="background-color: var(--brand)" />

  <!-- Card Body -->
  <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
    <div class="space-y-3.5">
      <!-- Optional Category Tag -->
      <span class="inline-flex px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-full bg-brand-soft text-brand-text">
        MÔ-ĐUN M4
      </span>
      
      <h3 class="text-xl sm:text-[22px] font-extrabold text-foreground tracking-tight leading-snug group-hover:text-brand-text transition-colors">
        Tender Workspace & Không Gian Số Đấu Thầu
      </h3>
      
      <p class="text-sm sm:text-[15px] text-muted-foreground leading-relaxed font-normal">
        Hiệp đồng 5 phòng ban lập hồ sơ kỹ thuật, dự toán tài chính và kiểm soát bất biến tối đa 1 bản nộp Final mỗi vòng thầu.
      </p>
    </div>

    <!-- Salesforce Signature Underlined Link with Animated Arrow -->
    <div class="pt-2">
      <a href="/features#tender" class="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-bold text-brand-text underline underline-offset-4 decoration-2 hover:text-primary hover:decoration-primary transition-colors cursor-pointer group/link">
        <span>Khám phá tính năng</span>
        <svg class="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
</div>
```

---

### 6.2. Ô Nhập Liệu & Biểu Mẫu Nhận Diện Cao (High-Affordance Inputs & Forms)

Tuân thủ nguyên tắc High Affordance:
- **Chiều cao chuẩn**: `h-10` (40px) hoặc `h-11` (44px).
- **Nền & Viền**: Nền trắng `bg-card`, viền `border border-input` (`#D4DDD4`), bo góc `rounded-lg` (8px).
- **Trạng thái Focus**: `focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring`.
- **Nhãn trường**: Luôn hiển thị nhãn in hoa bên trên (`text-xs font-bold uppercase tracking-wider text-foreground`).

```html
<div class="space-y-1.5">
  <label for="company-name" class="block text-xs font-bold uppercase tracking-wider text-foreground">
    Tên Doanh Nghiệp / Tổng Thầu <span class="text-tone-danger">*</span>
  </label>
  <div class="relative">
    <input
      id="company-name"
      type="text"
      required
      placeholder="Ví dụ: Công ty Cổ phần Xây dựng AZB"
      class="w-full h-10 px-3.5 bg-card rounded-lg border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all"
    />
  </div>
  <p class="text-xs text-muted-foreground">Tên pháp nhân đầy đủ dùng để cấu hình dữ liệu mẫu.</p>
</div>
```

---

### 6.3. Hộp Thoại Popup / Modal (Kiến Trúc 3 Lớp & Backdrop Blur)

Để tránh lỗi trôi nút hành động trên màn hình di động, mọi Modal trong hệ thống bắt buộc tuân thủ kiến trúc 3 lớp:

```
┌────────────────────────────────────────────────────────┐
│ 1. MODAL HEADER (Cố định):                             │
│    - Tiêu đề H3 / H4, Icon nhận diện                   │
│    - Nút Đóng (X) tròn ở góc phải                      │
├────────────────────────────────────────────────────────┤
│ 2. MODAL BODY (Vùng cuộn an toàn):                     │
│    - min-h-0                                           │
│    - max-h-[calc(100dvh-8rem)]                         │
│    - overflow-y-auto                                   │
│    - Chứa nội dung form hoặc video demo               │
├────────────────────────────────────────────────────────┤
│ 3. MODAL FOOTER (Cố định):                             │
│    - Nút Huỷ / Đóng (Secondary/Outline)               │
│    - Nút Xác nhận / Gửi yêu cầu (Primary)             │
└────────────────────────────────────────────────────────┘
```

#### Blueprint Code:
```html
<div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-panel/75 backdrop-blur-md">
  <div class="relative w-full max-w-2xl bg-card rounded-2xl shadow-modal overflow-hidden border border-border flex flex-col max-h-[calc(100dvh-2rem)]">
    
    <!-- 1. Header Cố Định -->
    <div class="flex items-center justify-between px-6 py-4 border-b border-border bg-background/80 shrink-0">
      <h3 class="text-base sm:text-lg font-bold text-foreground">Đăng ký Trải nghiệm Demo Bidly</h3>
      <button class="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors cursor-pointer">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- 2. Thân Modal Cuộn An Toàn -->
    <div class="p-6 overflow-y-auto min-h-0 flex-1 space-y-4">
      <!-- Nội dung form -->
    </div>

    <!-- 3. Footer Cố Định -->
    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-border bg-background/80 shrink-0">
      <button class="px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary rounded-lg transition-colors cursor-pointer">Đóng</button>
      <button class="px-5 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-lg hover:bg-primary-hover shadow-sm transition-all cursor-pointer">Gửi Yêu Cầu</button>
    </div>
  </div>
</div>
```

---

### 6.4. Thanh Điều Hướng & Mega Menu Đa Tầng (Navigation & Mega Dropdowns)

- **Header Chiều cao**: `h-20` (80px), Sticky `top-0 z-40`, nền kính `bg-card/95 backdrop-blur-md`, viền dưới `border-b border-border`.
- **Mega Menu Dropdown**:
  - Xuất hiện khi hover/click menu mục cha với độ trễ chuyển động `duration-200`.
  - Phân chia 2–3 cột danh mục (`w-[780px]` hoặc `w-[840px]`), mỗi mục có **Tiêu đề in đậm + Đoạn mô tả nghiệp vụ 2 dòng + Badge trạng thái**.
  - Đổ bóng `shadow-dropdown`, bo góc `rounded-2xl`.
- **Thao tác nhanh bên phải (Right Actions)**:
  - Nút Secondary: "Bản đồ nghiệp vụ S0–S8".
  - Nút Primary: "Đặt lịch Demo".

---

### 6.5. Nút Bấm & Tương Tác Vi Mô (Buttons & Controls)

```
┌─────────────┬─────────────────────────────────────────────────────────────────────────────┐
│ Variant     │ Chuỗi Class Tailwind CSS Chuẩn                                              │
├─────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ Primary     │ bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm        │
│             │ hover:shadow active:scale-[0.98] transition-all duration-200 cursor-pointer│
├─────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ Secondary   │ bg-card text-brand-text border-2 border-primary hover:bg-brand-soft         │
│             │ active:scale-[0.98] transition-all duration-200 cursor-pointer              │
├─────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ Outline     │ border border-border bg-card text-foreground hover:bg-secondary             │
│             │ active:scale-[0.98] transition-all duration-200 cursor-pointer              │
├─────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ Navy (Dark) │ bg-brand-panel text-brand-panel-foreground hover:bg-brand-panel-border      │
│             │ shadow-sm active:scale-[0.98] transition-all duration-200 cursor-pointer    │
├─────────────┼─────────────────────────────────────────────────────────────────────────────┤
│ Ghost / Link│ text-brand-text hover:bg-brand-soft transition-colors cursor-pointer        │
└─────────────┴─────────────────────────────────────────────────────────────────────────────┘
```

---

### 6.6. Huy Hiệu Giao Diện & Trạng Thái Nghiệp Vụ (Badges & Chips)

1. **Huy hiệu Giao diện (UI Pill Badge)**:
   ```html
   <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-brand-soft text-brand-text select-none">
     HỆ SINH THÁI 5 CLOUD
   </span>
   ```

2. **Huy hiệu Nghiệp vụ Pipeline (Stage & Outcome Badge)**:
   ```html
   <!-- S4 Đấu thầu -->
   <span class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-md bg-[#F0F9FF] text-[#0284C7] select-none">
     <span class="opacity-70 tabular">S4</span> Đấu thầu
   </span>

   <!-- Thắng thầu -->
   <span class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-md bg-[#EBF7E8] text-[#3F9E25] select-none">
     Thắng (WON)
   </span>
   ```

---

### 6.7. Tabs Sản Phẩm, Khung Z-Pattern, Accordion & Carousels

- **Product Cloud Tabs (`SfProductTabs.vue`)**:
  - Thanh ray tab ngang có thể cuộn trên mobile (`no-scrollbar`).
  - Tab đang chọn: `text-brand-text bg-card border-t-2 border-primary shadow-xs font-bold`.
  - Khung nội dung tab: Bo góc `rounded-3xl`, padding `p-6 sm:p-10 md:p-12`, lưới 2 cột (Trái: Nội dung & Bullet points; Phải: Ảnh minh hoạ giao diện tỷ lệ `16/10`).
- **Accordion FAQ (`SfFaqAccordion.vue`)**:
  - Đường phân cách 1px giữa các câu hỏi.
  - Icon cộng/trừ chuyển đổi mượt mà.
  - Câu trả lời mở trượt tự nhiên không gây giật khung trang.

---

### 6.8. Bảng Dữ Liệu Lớn & Server Pagination (Tables & Lists)

- Header bảng: `h-10 text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border`.
- Hàng dữ liệu: `h-12 border-b border-border hover:bg-secondary/40 transition-colors`.
- Tiền tệ & ngày tháng bắt buộc `.tabular text-right`.
- Bảng dày luôn sử dụng cơ chế phân trang phía máy chủ (`server-side pagination`), không tải toàn bộ dữ liệu về trình duyệt.

---

## 7. CHUYỂN ĐỘNG, HIỆU ỨNG & TRẠNG THÁI TƯƠNG TÁC (MOTION & STATES)

### 7.1. Thời Gian & Easing Chuẩn
- **Nút bấm & Hover tương tác**: `150ms - 200ms` (`ease-out`).
- **Card Lift & Shadow Transition**: `250ms - 300ms` (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Modal & Dropdown Transition**: `200ms - 300ms` (`ease-out`).

### 7.2. Micro-interactions
- **Active Click**: Mọi nút bấm và card có thể click đều thu nhỏ nhẹ `active:scale-[0.98]` khi bấm.
- **Floating Status Badges**: Huy hiệu trạng thái trên Hero chuyển động dập dềnh nhẹ nhàng (`animation: floatY 3.5s ease-in-out infinite alternate`).
- **Trợ năng Chuyển động**: Khi người dùng kích hoạt `prefers-reduced-motion: reduce`, toàn bộ animation tự động chuyển sang hiệu ứng tức thì không chuyển động.

---

## 8. TIÊU CHUẨN TRỢ NĂNG (A11Y WCAG AA) & BẢNG KIỂM TRA CHẤT LƯỢNG (QA CHECKLIST)

Mọi màn hình hoặc tính năng mới trước khi được coi là hoàn tất phải thỏa mãn **100% các tiêu chí sau**:

- [ ] **1. Tương phản màu sắc (Contrast Ratio)**: Mọi đoạn văn bản trên nền sáng đạt tối thiểu **4.5:1** (WCAG AA). Chữ xanh trên nền sáng dùng `--brand-text: #277A14`.
- [ ] **2. Không dùng màu đơn độc**: Mọi thông báo lỗi, trạng thái giai đoạn hoặc cảnh báo thời hạn luôn đi kèm **Icon và Chữ/Số cụ thể**.
- [ ] **3. Icon chuẩn SVG**: Tuyệt đối không dùng emoji (🚀, 🎨, ⚙️) làm biểu tượng tính năng; 100% dùng SVG vector sắc nét.
- [ ] **4. Con trỏ chuột tương tác**: Mọi phần tử bấm được mang class `cursor-pointer` và có phản hồi hover/focus rõ ràng.
- [ ] **5. Điều hướng bàn phím**: Có thể dùng phím `Tab` để di chuyển qua mọi nút, ô nhập liệu và hiển thị vòng `focus-visible:ring-2`.
- [ ] **6. Số liệu thẳng hàng**: Mọi trường tiền tệ, tỷ lệ và ngày tháng có gắn class `.tabular`.
- [ ] **7. Kiểm tra Responsive 4 Mốc**: Hiển thị hoàn hảo, không bị tràn thanh cuộn ngang (horizontal overflow) trên `375px`, `768px`, `1024px`, `1440px`.
- [ ] **8. Modal 3 Lớp an toàn**: Modal có thể đóng bằng phím `Esc`, click ngoài, và thân modal cuộn an toàn trên mobile mà không làm trôi nút bấm.

---
*Tài liệu quy chuẩn được phê duyệt và áp dụng cho toàn bộ dự án Bidly Preconstruction CRM.*
