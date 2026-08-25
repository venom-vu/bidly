# Digest: Dimension 2 - Design Tokens, Typography & Layout

- **Topic**: Salesforce Lightning & Brand Design Tokens
- **Dimension**: Design Tokens & Layout
- **Round**: 1
- **Confidence**: High

---

## 1. Color Palette (Design Tokens)

```css
:root {
  /* Brand Core Colors */
  --color-brand-primary: #0176D3;       /* Salesforce Lightning Blue */
  --color-brand-primary-hover: #014486; /* Deep Blue Hover */
  --color-brand-primary-active: #032D60;
  --color-brand-navy: #032D60;          /* Cloud Navy - Headings & Primary Contrast */
  --color-brand-accent-green: #04844B;  /* Trust Green */
  --color-brand-accent-teal: #0176D3;   /* Agentforce Cyan/Teal Accents */
  
  /* Neutral Grayscale */
  --color-text-primary: #032D60;        /* Main Titles */
  --color-text-body: #181818;           /* Body paragraphs */
  --color-text-secondary: #5C5C5C;      /* Meta & subtext */
  --color-text-muted: #747474;
  
  /* Backgrounds */
  --color-bg-white: #FFFFFF;
  --color-bg-light: #F4F6F9;           /* Section light background */
  --color-bg-gradient-top: #F8FAFC;
  --color-bg-gradient-bottom: #EEF4F9;
  --color-border-subtle: #E5E5E5;
  --color-border-hover: #0176D3;
}
```

---

## 2. Typography Scale

- **Primary Font Family**: `"Salesforce Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Heading Display Font**: `"AvantGardeForSalesforceW05-Dm", "Salesforce Sans", sans-serif`
- **Font Scale**:
  - `Display / Hero H1`: `44px - 52px` (line-height: 1.15, font-weight: 700, color: `#032D60`)
  - `Section H2`: `32px - 40px` (line-height: 1.2, font-weight: 700)
  - `Card Title H3`: `20px - 24px` (line-height: 1.3, font-weight: 700)
  - `Subhead / Lead`: `18px - 20px` (line-height: 1.5, font-weight: 400)
  - `Body Regular`: `16px` (line-height: 1.6, font-weight: 400, color: `#181818`)
  - `Eyebrow / Badge`: `13px - 14px` (text-transform: uppercase / capitalized, font-weight: 700, letter-spacing: 0.5px)

---

## 3. Layout Grid & Spacing

- **Container Max-Width**: `1280px` (standard), `1440px` (expanded blades)
- **Gutters & Padding**: `24px` mobile, `48px` tablet, `64px` - `80px` desktop
- **Blade Vertical Spacing**: `64px` to `96px` per blade section
- **Border Radius**:
  - Cards: `12px` - `16px`
  - Buttons / Badges: `24px` (pill-shape) or `8px`
  - Input fields: `6px` - `8px`
- **Shadow Tokens**:
  - Card Default: `0 4px 12px rgba(0, 0, 0, 0.05)`
  - Card Hover: `0 16px 32px rgba(3, 45, 96, 0.12)`
  - Sticky Header: `0 2px 8px rgba(0, 0, 0, 0.08)`
