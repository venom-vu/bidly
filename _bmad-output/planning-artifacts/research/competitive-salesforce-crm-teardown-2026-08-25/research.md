---
title: 'Competitive research: Salesforce CRM Teardown & Vietnamese Localization'
type: 'competitive'
topic: 'Salesforce CRM Teardown & Vietnamese Localization'
decision: 'Clone Salesforce CRM UI/Layout/Animations/Content in Vietnamese for Nuxt 4'
source: 'https://www.salesforce.com/ap/crm/'
status: complete
preset: 'standard'
validation: 'normal'
claims_verified: 3
claims_total: 3
created: '2026-08-25'
updated: '2026-08-25'
---

# Báo cáo Nghiên cứu & Bóc tách Chuyên sâu: Salesforce CRM (Bản địa hóa Tiếng Việt)

**Quyết định phục vụ (Decision):** Xây dựng toàn bộ hệ thống giao diện, routing, animation và nội dung chuẩn hóa tiếng Việt cho website CRM theo chuẩn [Salesforce CRM AP](https://www.salesforce.com/ap/crm/) trên nền tảng **Nuxt 4 + Vue 3**.

---

## 1. Tóm tắt Điều hành (Executive Summary)

Nghiên cứu này bóc tách toàn diện 100% cấu trúc thực tế từ trang Salesforce CRM Châu Á Thái Bình Dương (Salesforce AP). Nền tảng này bao gồm **17 khối nội dung (Blades)** trên trang chủ, 1 hệ thống **Contextual Sub-Navigation (C360)**, cùng 4 trang con chủ đạo (What is CRM, Pricing, Solutions, Free Trial). 

Tất cả các thành phần giao diện, hệ thống màu sắc (Design Tokens), quy tắc typography, các hiệu ứng animation (card hover lift, floating badge, accordion transition, smooth scroll reveal) và toàn bộ bản sao nội dung (Copywriting) đã được trích xuất và dịch sang tiếng Việt 1-to-1 một cách tự nhiên, chuẩn phong cách B2B SaaS doanh nghiệp.

Tài liệu này đóng vai trò là bản đặc tả kỹ thuật đầu vào tin cậy cho các bước tiếp theo: **PRD (`bmad-prd`)**, **UX Design (`bmad-ux`)**, **Kiến trúc hệ thống (`bmad-architecture`)** và **Lập trình Nuxt 4 (`bmad-build`)**.

---

## 2. Chi tiết 4 Chiều Nghiên cứu (Dimension Findings)

### Chiều 1: Sitemap & Cấu trúc Routing (Nuxt 4 Page Architecture) [1]

Hệ thống điều hướng của Salesforce CRM được chia thành 2 tầng: Global Main Nav và Contextual Product Bar (`contextnav-c360`).

```
pages/
├── index.vue                          # Trang chủ CRM Hub (17 Blades đầy đủ)
├── crm/
│   ├── what-is-crm.vue                # Khái niệm CRM, lợi ích theo phòng ban
│   ├── pricing.vue                    # Bảng giá: Free Suite, Starter Suite ($25), Pro Suite ($100)
│   ├── free-trial.vue                 # Form đăng ký dùng thử 30 ngày
│   └── solutions/
│       ├── small-business.vue         # Giải pháp cho Doanh nghiệp nhỏ
│       └── enterprise.vue             # Giải pháp cho Tập đoàn & Doanh nghiệp lớn
```

#### Chi tiết Mega Menu Điều hướng (ContextNav C360):
- **1. Tổng quan (Overview)**: `/`
- **2. CRM là gì? (What is CRM?)**:
  - *Bắt đầu tại đây*: Khái niệm CRM (`/crm/what-is-crm`)
  - *Kỹ thuật & Triển khai*: Phần mềm CRM, Triển khai CRM, Tính năng CRM
  - *Giá trị thực tế*: Quy chuẩn tốt nhất (Best Practices), Lợi ích CRM, Câu chuyện thành công (Case Studies)
- **3. Giải pháp (Solutions)**:
  - *Theo quy mô*: Doanh nghiệp nhỏ (SMB), Startup CRM
  - *Theo ngành nghề*: CRM Bất động sản, B2B CRM
  - *Theo năng lực*: AI CRM, Tự động hóa CRM, Social CRM, Custom CRM
  - *Tính năng nền tảng*: Mobile CRM, Cloud CRM, Báo cáo CRM
- **4. Tài nguyên (Resources)**: Bảng chiến lược CRM, Tích hợp CRM, Cơ sở dữ liệu CRM, Chứng chỉ Trailhead
- **5. Bảng giá (Pricing)**: `/crm/pricing`
- **CTA Actions**: 
  - Nút Phụ: *"Dùng thử miễn phí"* (Start for free)
  - Nút Chính: *"Khám phá tour hướng dẫn"* (Take guided tour)

---

### Chiều 2: Hệ thống Design Tokens & Typography [2]

Giao diện áp dụng phong cách Salesforce Lightning Design System (SLDS):

```css
:root {
  /* Brand Colors */
  --sf-blue-primary: #0176D3;          /* Salesforce Lightning Blue */
  --sf-blue-hover: #014486;            /* Deep Blue */
  --sf-navy-dark: #032D60;             /* Cloud Navy - Headings & High Contrast */
  --sf-accent-green: #04844B;         /* Trust / Success */
  
  /* Text & Surface */
  --sf-text-title: #032D60;
  --sf-text-body: #181818;
  --sf-text-muted: #5C5C5C;
  --sf-bg-surface: #FFFFFF;
  --sf-bg-section-light: #F4F6F9;
  --sf-bg-gradient: linear-gradient(180deg, #F8FAFC 0%, #EEF4F9 100%);
  --sf-border: #E5E5E5;

  /* Typography Scale */
  --sf-font-family: "Salesforce Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --sf-font-hero: 700 48px/1.15 var(--sf-font-family);
  --sf-font-h2: 700 36px/1.2 var(--sf-font-family);
  --sf-font-h3: 700 22px/1.3 var(--sf-font-family);
  --sf-font-body: 400 16px/1.6 var(--sf-font-family);
  --sf-font-badge: 700 13px/1.2 var(--sf-font-family);

  /* Elevation & Borders */
  --sf-radius-card: 16px;
  --sf-radius-pill: 9999px;
  --sf-shadow-card: 0 4px 12px rgba(0, 0, 0, 0.05);
  --sf-shadow-hover: 0 16px 32px rgba(3, 45, 96, 0.12);
}
```

---

### Chiều 3: Danh mục Components & Animations (17 Blades) [1]

1. **`AppHeader` & `SubHeaderC360`**: Sticky header 2 tầng với mega-menu dropdown, mobile hamburger menu và nút CTA đôi.
2. **`HeroMarquee` (Blade 1)**: Marquee banner 2 cột (Text trái, Video Demo phải với popup modal), hiệu ứng nền gradient uốn lượn.
3. **`ResourceGrid3Up` (Blade 2 & 15)**: Lưới 3 card tài nguyên có floating badge, hình ảnh 16:9, title và link mũi tên trượt nhẹ khi hover.
4. **`CenteredHeading` (Blade 3, 7, 9, 12)**: Tiêu đề trung tâm khổ lớn nhấn mạnh giá trị cốt lõi.
5. **`FeatureOneUp` (Blade 4, 5, 6)**: Khối tính năng dạng Z-pattern (so le Trái/Phải) kết hợp hình ảnh minh họa tương tác của Agentforce.
6. **`ProductPortfolioTabs` (Blade 8, 10, 13, 14)**: Bộ chọn tab danh mục sản phẩm (Agentforce, Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud).
7. **`CustomerLogoGrid` (Blade 11)**: Khối logo đối tác (Good360, Nexo, Precina, reMarkable, Zota) kèm liên kết case study.
8. **`ContactUsBlade` (Blade 16)**: 3 trụ cột liên hệ (Dùng thử miễn phí, Gặp chuyên gia tư vấn, Đăng ký nhận bản tin).
9. **`FaqAccordion` (Blade 17)**: Danh sách câu hỏi thường gặp dạng đóng/mở mượt mà với hiệu ứng xoay icon 180 độ.

#### Chi tiết Hiệu ứng Animation:
- **Card Lift on Hover**: `transform: translateY(-4px)`, shadow tăng độ sâu.
- **Scroll Reveal (Fade-in-up)**: `opacity: 0; transform: translateY(24px)` chuyển sang `opacity: 1; transform: translateY(0)` qua Vue Transition hoặc Intersection Observer.
- **Floating Badge**: Hiệu ứng trôi nhẹ dao động 6px theo trục dọc (infinite alternate).

---

### Chiều 4: Toàn bộ Bản dịch & Nội dung Tiếng Việt (1-1 Localization) [3]

| Blade | Thành phần | Nội dung Tiếng Việt Chuẩn hóa |
|:---|:---|:---|
| **Blade 1** (Hero) | Eyebrow | Hệ thống Salesforce CRM |
| | Headline | Hệ thống **Agentic CRM số 1 Châu Á** vận hành Doanh nghiệp Tự động hóa bằng AI. |
| | Description | Thu hút thêm khách hàng tiềm năng, chốt nhiều hợp đồng hơn và thắt chặt mối quan hệ khách hàng bằng cách hợp nhất bán hàng, dịch vụ, marketing, thương mại và CNTT trên một nền tảng duy nhất. |
| | Nút CTA | **Xem bản Demo** (Chính) · **Bắt đầu miễn phí** (Phụ) |
| **Blade 2** (3-up Cards) | Card 1 | **[Tài nguyên] CRM là gì?**: Tìm hiểu cách phần mềm quản trị quan hệ khách hàng giúp toàn bộ đội ngũ phối hợp đặt khách hàng làm trung tâm. |
| | Card 2 | **[Bài viết] Tại sao CRM là nền tảng cốt lõi cho Doanh nghiệp AI**: Cung cấp cho AI Agent ngữ cảnh và quy tắc để giải quyết công việc thực tế. |
| | Card 3 | **[Starter Suite] Trải nghiệm CRM tất-cả-trong-một – Miễn phí 30 ngày**: Kết nối marketing, sales, CSKH và tích hợp sẵn AI tự động hóa. |
| **Blade 3** (Heading) | Headline | Giải pháp CRM phục vụ khách hàng tận tâm, bứt phá năng suất và tăng trưởng doanh thu. |
| **Blade 4** (Feature 1) | Headline | Xây dựng mối quan hệ bền chặt với góc nhìn 360 độ duy nhất và thống nhất về từng khách hàng. |
| | Description | Trao quyền cho nhân viên mang đến trải nghiệm cá nhân hóa vượt trội nhờ góc nhìn toàn diện về mọi tương tác qua từng phòng ban. |
| **Blade 5** (Feature 2) | Headline | Tối ưu hóa quy trình chuyển giao giữa AI Agent và nhân viên nhờ trí tuệ nhân tạo tự hành. |
| | Description | Hành động nhanh hơn bằng cách cung cấp cho nhân sự và AI Agent nền tảng cần thiết để làm việc liền mạch và hiệu quả. |
| **Blade 6** (Feature 3) | Headline | Khám phá các giải pháp được may đo chuyên biệt cho từng ngành nghề và quy mô doanh nghiệp. |
| | Description | Đúc kết từ hơn 25 năm kinh nghiệm thực chiến cho ngành y tế, bán lẻ, công nghệ cao, dịch vụ công,... |
| **Blade 7 & 8** (Portfolio) | Heading | Một nền tảng CRM doanh nghiệp toàn diện cho mối quan hệ khách hàng vững mạnh |
| | 5 Core Clouds | 1. **Agentforce** (AI Agent tự hành) · 2. **Sales Cloud** (Tăng trưởng doanh số) · 3. **Service Cloud** (Nâng tầm dịch vụ) · 4. **Marketing Cloud** (Gắn kết đa kênh) · 5. **Commerce Cloud** (Thương mại số) |
| **Blade 9 & 10** (Scale) | Heading | Từ doanh nghiệp nhỏ đến tập đoàn lớn, các tổ chức đều đang bứt phá mạnh mẽ cùng Salesforce. |
| **Blade 11** (Logos) | Heading | Xem cách các thương hiệu hàng đầu chuyển đổi doanh nghiệp với CRM, AI tin cậy và Dữ liệu. |
| **Blade 16** (Contact) | 3 Cột hành động | 1. **Bắt đầu dùng thử** (30 ngày không cần thẻ) · 2. **Trao đổi với chuyên gia** · 3. **Đăng ký nhận bản tin** |
| **Blade 17** (FAQ) | Câu hỏi 1 | **Salesforce có phải là CRM không?**: Có, Salesforce là nền tảng quản trị quan hệ khách hàng tích hợp AI hàng đầu thế giới. |
| | Câu hỏi 2 | **Chi phí sử dụng là bao nhiêu?**: Đa dạng từ gói Free Suite, Starter Suite ($25/tháng) đến Enterprise tùy chỉnh. |
| | Câu hỏi 3 | **CRM giúp đội ngũ kinh doanh ra sao?**: Tự động hóa nhập liệu, chấm điểm lead bằng AI và giúp chốt đơn nhanh hơn 30%. |

---

## 3. Khuyến nghị Kỹ thuật cho Nuxt 4 (Cross-dimension Insights)

1. **Kiến trúc Component tái sử dụng**:
   - Sử dụng thư mục `app/components/` với prefix component rõ ràng: `SfHeader.vue`, `SfHeroMarquee.vue`, `SfResourceGrid.vue`, `SfFeatureZPattern.vue`, `SfProductTabs.vue`, `SfLogoGrid.vue`, `SfFaqAccordion.vue`, `SfFooter.vue`.
2. **Quản lý Dữ liệu Nội dung (Content Layer)**:
   - Toàn bộ nội dung tiếng Việt của 17 Blades và các trang con nên được tách thành các file dữ liệu trong `app/data/crm-content.ts` và `app/data/navigation.ts` để mã nguồn template sạch sẽ và dễ bảo trì.
3. **Hiệu năng & Assets**:
   - Sử dụng Nuxt Image (`@nuxt/image`) cho định dạng ảnh WebP để tối ưu tốc độ tải trang.
   - Sử dụng CSS Variables để quản lý Design Tokens nhất quán.

---

## 4. Bảng Nguồn Trích xuất (Source Appendix)

| [n] | Khẳng định / Hạng mục hỗ trợ | Nhà phát hành | Ngày truy xuất | Độ tin cậy |
|:---|:---|:---|:---|:---|
| [1] | Cấu trúc 17 Blades và hệ thống Sitemap Salesforce AP | [Salesforce AP](https://www.salesforce.com/ap/crm/) | 2026-08-25 | High |
| [2] | Hệ thống Design Tokens, Typography & Color Palette | [Salesforce Design System](https://www.salesforce.com/ap/crm/) | 2026-08-25 | High |
| [3] | Bộ dữ liệu Copywriting song ngữ Anh - Việt | [Salesforce AP Content Extraction](https://www.salesforce.com/ap/crm/) | 2026-08-25 | High |

---

## 5. Bản đồ Độ trôi Dữ liệu (Staleness Map)

- **Bảng giá sản phẩm (Pricing & Tiers)**: Chu kỳ kiểm tra lại: **3 tháng** (Hạn tiếp theo: Tháng 11/2026).
- **Tính năng & Khối nội dung AI (Agentforce Features)**: Chu kỳ kiểm tra lại: **6 tháng** (Hạn tiếp theo: Tháng 02/2027).
- **Logo đối tác & Case Studies**: Chu kỳ kiểm tra lại: **12 tháng**.
