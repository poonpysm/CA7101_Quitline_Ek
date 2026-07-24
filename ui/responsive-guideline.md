# Responsive Design Guideline

This document defines the responsive layout rules, media query breakpoints, typography adaptations, and component restructuring policies for the Quitline application. The objective is to provide a seamless, secure experience whether Ek is browsing on a desktop in his office or checking his plan on a phone during his commute.

---

## 📱 Breakpoint Scale

We follow a mobile-first responsive scale to build fluid layouts.

```
  0px                      640px                    1024px                  1200px+
   ┌────────────────────────┼────────────────────────┼────────────────────────┐
   │         MOBILE         │         TABLET         │        DESKTOP         │   MAX-CONTAINER
   │      (Single Col)      │      (Multi-Col)       │     (Side-by-Side)     │   (1200px Limit)
   └────────────────────────┴────────────────────────┴────────────────────────┘
```

*   **Mobile (Default):** `< 640px` (Optimized for single-column scrolling, vertical stack, and large thumb touch targets).
*   **Tablet:** `640px` to `1023px` (Enables multi-column grid adjustments for cards, inline forms, and secondary sidebar structures).
*   **Desktop:** `1024px` and above (Supports full side-by-side grids, split screen views, and detailed interactive widgets).
*   **Max Content Constraint:** `1200px` (All main content grids must center and cap at `1200px` to prevent layout stretching on ultra-wide monitors).

---

## 🔄 Layout Adaptation Rules

### 1. Grid-to-Stack Behavior
*   **Multi-Column Grids:** Content grids (such as the 4-card Evidence-Based How-To Guidelines, the Hero split layout, or the Chat/Call support selections) must transition from a multi-column horizontal layout on desktop to a single-column vertical stack on mobile viewports.
*   *CSS Pattern:*
    ```css
    .card-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }
    @media (min-width: 640px) {
      .card-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .card-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    ```

### 2. Navigation Adaptation
*   **Desktop:** Clean, horizontal inline menu items displaying secondary utility controls (e.g., local plan, clinical links, and escape button).
*   **Mobile:** Navigation collapses into a simple drawer menu or adapts to a bottom bar interface for ease of reach on mobile devices. 
*   **Quick Escape Accessibility:** The Quick Escape button must stay sticky at all times on both viewports. On mobile, it pins to the bottom-right or top-right as a compact icon (e.g., a shield or a close icon) with a safety boundary of `48x48px` to prevent accidental clicks on neighboring text.

---

## 🔠 Responsive Typography

To maintain a balanced visual scale, text tokens scale fluidly between viewports.

| Font Variable | Mobile Size (px) | Tablet Size (px) | Desktop Size (px) |
| :--- | :--- | :--- | :--- |
| `--text-xl` (Hero Title) | `28px` (1.75rem) | `32px` (2.00rem) | `36px` (2.25rem) |
| `--text-lg` (Section Heading) | `20px` (1.25rem) | `22px` (1.375rem)| `24px` (1.50rem) |
| `--text-md` (Card Title) | `16px` (1.00rem) | `18px` (1.125rem)| `18px` (1.125rem)|
| `--text-base` (Body Copy) | `15px` (0.937rem)| `16px` (1.00rem) | `16px` (1.00rem) |
| `--text-sm` (Sub-Labels) | `13px` (0.812rem)| `14px` (0.875rem)| `14px` (0.875rem)|

---

## 🎨 Interactive Adaptations (Touch vs. Pointer)

1.  **Touch Target Buffers:**
    *   All interactive elements (buttons, form inputs, select dropdowns, calendar date cells, and time slots) must maintain a minimum touch hit target of `48px` vertically and horizontally on Mobile/Tablet viewports to prevent mis-taps. On desktop, hover states transition smoothly with clear keyboard focus indicators.
2.  **Plan Builder Form Inputs:**
    *   Form controls in the Plan Builder (Target Quit Date picker and Work Environment Stress selector) adapt to full-width, touch-friendly native picker interfaces on mobile devices with `16px` font size to prevent browser auto-zoom.
3.  **Live Chat Quick Prompts:**
    *   Quick prompt CTA chips inside the Live Chat module (`✨ Create My Quit Plan`) wrap into a scrollable or multi-line touch target row on mobile screens for effortless one-tap activation.
4.  **Scheduled Call Calendar & Time Slot Picker:**
    *   The interactive calendar date grid and time-slot selection buttons below scale fluidly to a single-column layout on mobile, providing ample touch target area (`>= 48px` height) for easy date and time window selection.