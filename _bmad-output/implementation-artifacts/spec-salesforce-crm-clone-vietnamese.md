---
title: 'Build Salesforce CRM Clone in Vietnamese (Nuxt 4 / Vue 3)'
type: 'feature'
created: '2026-08-25'
status: 'ready-for-dev'
review_loop_iteration: 0
context:
  - '_bmad-output/planning-artifacts/research/competitive-salesforce-crm-teardown-2026-08-25/research.md'
  - '_bmad-output/planning-artifacts/ux-designs/ux-bidly-2026-08-25/DESIGN.md'
  - '_bmad-output/planning-artifacts/ux-designs/ux-bidly-2026-08-25/EXPERIENCE.md'
  - '_bmad-output/planning-artifacts/prds/prd-bidly-2026-08-25/prd.md'
  - '_bmad-output/planning-artifacts/architecture/architecture-bidly-2026-08-25/ARCHITECTURE-SPINE.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Dự án `bidly` cần một website hoàn chỉnh có giao diện, bố cục 17 Blades, hiệu ứng chuyển động và các trang con mô phỏng chính xác Salesforce CRM AP với toàn bộ nội dung được bản địa hóa sang Tiếng Việt.

**Approach:** Xây dựng trên nền tảng Nuxt 4 + Vue 3 với Tailwind CSS v4, tổ chức dữ liệu nội dung tiếng Việt tách biệt trong `app/data/*.ts`, triển khai đầy đủ hệ thống 17 Blades component, Navigation 2 tầng, Video Demo Modal và 4 trang con chủ đạo (`/`, `/crm/what-is-crm`, `/crm/pricing`, `/crm/free-trial`).

## Boundaries & Constraints

**Always:**
- Sử dụng mã màu Design Tokens chuẩn: Primary `#0176D3`, Dark Navy `#032D60`, Surface Light `#F4F6F9`.
- Toàn bộ nội dung hiển thị 100% bằng tiếng Việt chuẩn văn phong B2B SaaS.
- Đảm bảo responsive hoàn hảo trên Mobile, Tablet và Desktop.
- Không để lỗi Typescript hoặc lỗi console khi chạy.

**Ask First:**
- Thay đổi cấu trúc routing hoặc xóa bỏ bất kỳ Blade nào trong số 17 Blades.

**Never:**
- Không hardcode chuỗi text dài trực tiếp trong template component (phải đọc qua `app/data/`).
- Không cài đặt thêm các UI library nặng nề làm giảm điểm Google Lighthouse.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Truy cập Trang chủ | URL `/` | Hiển thị trọn vẹn 17 Blades, Header 2 tầng, Sticky Subnav, Footer | N/A |
| Chuyển Tab 5 Core Clouds | Click Tab `Sales Cloud` | Active indicator trượt mượt mà, nội dung & ảnh chuyển Fade | Giữ tab hiện tại nếu click lại |
| Mở Video Demo Popup | Click `Xem bản Demo` | Modal hiển thị giữa màn hình với backdrop mờ, phím Esc để đóng | Click backdrop để đóng |
| FAQ Accordion | Click câu hỏi bất kỳ | Mở rộng nội dung câu trả lời, xoay icon 180° | Click lại để thu gọn |
| Gửi Form Dùng thử | Form `/crm/free-trial` điền đủ 6 trường | Hiển thị thông báo thành công xanh và toast xác nhận | Báo lỗi trường trống hoặc email sai định dạng |

</frozen-after-approval>

## Code Map

- `package.json` & `nuxt.config.ts` -- Cấu hình Tailwind CSS v4, `@tailwindcss/vite`, SEO meta & fonts
- `app/assets/css/main.css` -- Tailwind imports, Salesforce theme custom variables & keyframes
- `app/data/navigation.ts` -- Dữ liệu menu 2 tầng (Global Nav & ContextNav C360)
- `app/data/crm-blades.ts` -- Dữ liệu tiếng Việt đầy đủ cho 17 Blades trang chủ
- `app/data/pricing.ts` -- Dữ liệu so sánh bảng giá 3 gói (Free, Starter, Pro)
- `app/data/faqs.ts` -- 12 câu hỏi & câu trả lời FAQ tiếng Việt
- `app/composables/useDemoModal.ts` -- Composable quản lý video demo modal
- `app/components/ui/` -- `SfButton.vue`, `SfBadge.vue`, `SfDemoModal.vue`
- `app/components/blades/` -- 17 Blades components (`SfHeroMarquee.vue`, `SfResourceGrid.vue`, `SfHeading.vue`, `SfFeatureZPattern.vue`, `SfProductTabs.vue`, `SfLogoGrid.vue`, `SfContactPillars.vue`, `SfFaqAccordion.vue`)
- `app/components/AppHeader.vue` & `AppFooter.vue` -- Header 2 tầng và Footer đa cột
- `app/layouts/default.vue` -- Khung layout chuẩn tích hợp Header, Footer & Global Modal
- `app/pages/index.vue` -- Trang chủ CRM Hub
- `app/pages/crm/what-is-crm.vue` -- Trang khái niệm & lợi ích CRM
- `app/pages/crm/pricing.vue` -- Trang bảng giá chi tiết
- `app/pages/crm/free-trial.vue` -- Trang form đăng ký dùng thử 30 ngày

## Tasks & Acceptance

**Execution:**
- [ ] `package.json` & `nuxt.config.ts` -- Cài đặt Tailwind CSS v4 và cấu hình Nuxt 4 -- Thiết lập nền tảng styling và build
- [ ] `app/assets/css/main.css` -- Định nghĩa biến màu sắc `#0176D3`, `#032D60`, font stack và animations -- Chuẩn hóa Design Tokens
- [ ] `app/data/` (`navigation.ts`, `crm-blades.ts`, `pricing.ts`, `faqs.ts`) -- Khởi tạo toàn bộ dữ liệu nội dung tiếng Việt -- Tách biệt dữ liệu và giao diện
- [ ] `app/composables/useDemoModal.ts` -- Viết logic mở/đóng modal video demo -- Trạng thái tương tác toàn cục
- [ ] `app/components/ui/` (`SfButton.vue`, `SfBadge.vue`, `SfDemoModal.vue`) -- Xây dựng các UI Atoms cơ bản -- Thành phần tái sử dụng
- [ ] `app/components/blades/` -- Xây dựng toàn bộ 17 Component Blades -- Tái hiện giao diện 17 khối nội dung chuẩn
- [ ] `app/components/AppHeader.vue` & `AppFooter.vue` -- Lập trình Header 2 tầng (Global + C360 Sticky) và Footer đa cột -- Điều hướng hoàn chỉnh
- [ ] `app/layouts/default.vue` -- Tạo default layout bọc Header, Slot và Footer -- Cấu trúc trang chuẩn
- [ ] `app/pages/index.vue` -- Lắp ghép 17 Blades vào trang chủ CRM -- Hoàn thiện Landing Page chính
- [ ] `app/pages/crm/what-is-crm.vue` -- Lập trình trang Khái niệm CRM -- Hoàn thiện trang con giáo dục
- [ ] `app/pages/crm/pricing.vue` -- Lập trình trang Bảng giá CRM -- Hoàn thiện trang con pricing
- [ ] `app/pages/crm/free-trial.vue` -- Lập trình trang Form dùng thử 30 ngày với client validation -- Hoàn thiện trang thu thập lead
- [ ] `app/app.vue` -- Cập nhật NuxtLayout và NuxtPage -- Khởi chạy ứng dụng

**Acceptance Criteria:**
- Given người dùng truy cập `/`, when cuộn trang, then thấy đủ 17 Blades với bố cục chuẩn, font chữ sắc nét và màu sắc xanh Lightning / Navy.
- Given người dùng click `Xem bản Demo`, when modal mở, then hiển thị hộp thoại demo video nổi bật và có thể đóng bằng nút X / phím Esc.
- Given người dùng chuyển các Tab sản phẩm, when click tab khác, then nội dung và hình ảnh chuyển đổi mượt mà.
- Given người dùng gửi form tại `/crm/free-trial`, when điền đủ thông tin, then nhận được thông báo thành công và form được reset.

## Design Notes

Giao diện áp dụng Tailwind CSS v4 kết hợp theme tùy biến:
- Xanh thương hiệu: `#0176D3` (Hover `#014486`), Xanh Navy: `#032D60`, Nền Light: `#F4F6F9`.
- Font: `Salesforce Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif`.

## Verification

**Commands:**
- `npm run build` -- expected: Build thành công không có lỗi (Exit code 0)
- `npx nuxi typecheck` -- expected: TypeScript kiểm tra hợp lệ
