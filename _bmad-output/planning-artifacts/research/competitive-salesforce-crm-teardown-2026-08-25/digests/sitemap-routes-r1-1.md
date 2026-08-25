# Digest: Dimension 1 - Sitemap & Route Hierarchy

- **Topic**: Salesforce CRM Subpages & Navigation Architecture
- **Dimension**: Sitemap & Route Hierarchy
- **Round**: 1
- **Source**: `https://www.salesforce.com/ap/crm/` and linked subpaths
- **Publisher**: Salesforce Asia Pacific
- **Confidence**: High

---

## 1. Global Navigation Architecture (ContextNav C360)

The CRM Hub features a dual-layer navigation header:
1. **Primary Global Header**: Salesforce Cloud Logo, Search, Country/Region Selector, Global Contact, Login (`/ap/form/signup/freetrial-sales/`).
2. **Contextual Product Subnav (`contextnav-c360`)**:
   - **Root Property Title**: "CRM" -> `https://www.salesforce.com/ap/crm/` (Local route `/crm` or `/`)
   - **Utility CTAs**:
     - CTA Primary: "Take guided tour" -> `/products/demos/interactive-portfolio/`
     - CTA Secondary: "Start for free" -> `/small-business/free-trial/starter-suite/`

### Mega Menu Structure:
- **Menu 1: Overview** (`/crm`)
- **Menu 2: What is CRM?**
  - *Get started here*: What is CRM? (`/crm/what-is-crm/`)
  - *Technical & Implementation*:
    - CRM Software (`/crm/what-is-crm/software/`)
    - CRM Implementation (`/crm/crm-implementation/`)
    - CRM Features (`/crm/features/`)
  - *Insights & Value*:
    - Best Practices (`/crm/best-practices/`)
    - Benefits of CRM (`/crm/benefits-of-crm/`)
    - CRM Examples (`/crm/examples/`)
- **Menu 3: Solutions**
  - *By Business Size*: Small Business (`/crm/crm-for-small-business/`), Startup CRM (`/crm/startup-crm/`)
  - *By Industry*: Real Estate CRM (`/crm/real-estate-crm/`), B2B CRM (`/crm/b2b-crm/`)
  - *By Capabilities*: AI CRM (`/crm/ai-crm/`), CRM Automation (`/crm/automation/`), Social CRM (`/crm/social-crm/`), Custom CRM (`/crm/custom-crm/`)
  - *Platform Features*: Mobile CRM (`/crm/mobile-crm/`), Cloud CRM (`/crm/cloud-crm/`), CRM Reporting (`/crm/report/`), CRM Project Management (`/crm/project-management/`)
- **Menu 4: Resources**
  - Free CRM (`/crm/free-crm/`), Best CRM (`/crm/best-crm/`), CRM Strategy (`/crm/strategy/`), CRM Integration (`/crm/crm-integration/`), CRM Database (`/crm/database/`), Generative CRM (`/crm/generative-crm/`), CRM Certification (`/credentials/administratoroverview/`), CRM Free Trial (`/crm/free-trial/`)
- **Menu 5: Pricing** (`/crm/pricing/`)

---

## 2. Key Target Routes for Nuxt 4 Clone

For a complete and structured clone, the following page routing structure is defined:

| Route Path | Page Title | Purpose |
|:---|:---|:---|
| `/` (hoặc `/crm`) | Trang chủ CRM Hub | Landing page tổng quan giới thiệu Agentic AI CRM, 17 Blades |
| `/crm/what-is-crm` | What Is CRM? | Trang giáo dục định nghĩa, lợi ích các phòng ban, ROI |
| `/crm/pricing` | Bảng giá CRM | Gói Free Suite, Starter Suite ($25), Pro Suite ($100), Enterprise |
| `/crm/free-trial` | Đăng ký dùng thử (Form) | Form đăng ký dùng thử 30 ngày không cần thẻ tín dụng |
| `/crm/solutions/small-business` | CRM cho Doanh nghiệp nhỏ | Giải pháp Starter Suite cho SMB |
| `/crm/solutions/enterprise` | CRM cho Doanh nghiệp lớn | Agentforce 360 & Tích hợp đa hệ thống |
| `/crm/features` | Tính năng chi tiết | Bảng tính năng, Automation, Reporting, AI Agents |
