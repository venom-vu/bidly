# Digest: Dimension 3 - Component Inventory & Animations

- **Topic**: UI Components & Micro-interactions
- **Dimension**: Component Inventory & Animations
- **Round**: 1
- **Confidence**: High

---

## 1. Component Inventory (17 Specialized Blades)

1. **`AppHeader` & `SubHeaderC360`**:
   - Sticky navigation with collapsible mobile menu.
   - Dual CTA button group (`Take guided tour` outline, `Start for free` solid primary).
2. **`HeroMarquee` (Blade 1)**:
   - Split layout (Text Left, Visual Media Right).
   - Video / Interactive Demo thumbnail with play overlay.
   - Background gradient with abstract cloud wave.
3. **`ResourceGrid3Up` (Blade 2 & Blade 15)**:
   - 3-column responsive card grid.
   - Floating badge tag (`Resource`, `Blog`, `Starter Suite`, `Guide`, `Demo`).
   - Image 16:9 ratio, title, summary, text link with arrow icon.
4. **`CenteredHeading` (Blade 3, 7, 9, 12)**:
   - High-impact section dividers with Navy `#032D60` typography.
5. **`FeatureOneUp` (Blades 4, 5, 6)**:
   - Alternating Left/Right layout (Z-pattern).
   - Visual mockups showing Agentforce AI, CSAT analytics, and industry solutions.
6. **`ProductPortfolioTabs` (Blades 8, 10, 13, 14)**:
   - Tabbed / Category filter switcher for Core Clouds (Agentforce, Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud).
   - Carousel cards with hover elevation.
7. **`CustomerLogoGrid` (Blade 11)**:
   - Interactive customer logos (Good360, Nexo, Precina, reMarkable, Zota).
   - Case study modal/link.
8. **`ContactUsBlade` (Blade 16)**:
   - 3 interactive action cards (Start trial, Talk to an expert, Newsletter).
   - SVG iconography + direct action links.
9. **`FaqAccordion` (Blade 17)**:
   - Smooth accordion collapse/expand with chevron rotation.
   - Rich answer text with internal linking.
10. **`AppFooter`**:
    - Global multi-column links, legal disclaimers, language selector, social icons.

---

## 2. Animation & Interaction Model

- **Card Hover Animation**:
  ```css
  .sf-card {
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
  }
  .sf-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(3, 45, 96, 0.1);
  }
  .sf-card:hover .sf-link-arrow {
    transform: translateX(4px);
    transition: transform 0.2s ease;
  }
  ```
- **Scroll-triggered Entry (Intersection Observer)**:
  ```css
  .fade-in-up {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .fade-in-up.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  ```
- **Tab Transition**:
  - Fade-in + slight slide-in on tab change (`opacity: 0` -> `1`, `scale(0.98)` -> `1`).
- **Floating Badge Animation**:
  - Keyframe `floatAnimation` oscillating 6px vertically over 3s ease-in-out infinite alternate.
