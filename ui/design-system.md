# Design System Tokens & Patterns

This document defines the reusable design tokens, spacing scales, typography standards, and structural layout rules for the Quitline platform. These parameters ensure pixel-perfect consistency, accessibility, and high visual appeal across light and dark interfaces.

---

## 🔤 Typography Tokens

We use modern, highly legible sans-serif typefaces (e.g., **Inter** or **Outfit**) available from Google Fonts. 

### Font Family
*   `--font-sans`: `'Inter', system-ui, -apple-system, sans-serif`
*   `--font-display`: `'Outfit', sans-serif` (used for headings, timelines, numbers)

### Typography Scale

| Token Name | Font Size | Line Height | Font Weight | Default Usage |
| :--- | :--- | :--- | :--- | :--- |
| `--text-xs` | `0.75rem` (12px) | `1.5` | `400` / `500` | Micro-captions, helper texts |
| `--text-sm` | `0.875rem` (14px)| `1.5` | `400` / `500` | Body copy, labels, input fields |
| `--text-base` | `1.00rem` (16px) | `1.6` | `400` | Primary reading paragraphs |
| `--text-md` | `1.125rem` (18px)| `1.4` | `600` | Subheadings, card titles |
| `--text-lg` | `1.50rem` (24px) | `1.3` | `600` / `700` | Section headings (`H3`/`H2`) |
| `--text-xl` | `2.25rem` (36px) | `1.2` | `800` | Hero titles (`H1`), large metrics |

---

## 📏 Spacing & Layout Grid (8px Base Scale)

Spacing is built on a strict `8px` modular grid to guarantee consistent padding, margins, and alignments.

*   `--space-1`: `4px` (0.25rem) — Micro padding, close elements (icon+label gap).
*   `--space-2`: `8px` (0.5rem) — Small gap, list item separation.
*   `--space-3`: `12px` (0.75rem) — Form item spacing, inner badge padding.
*   `--space-4`: `16px` (1.0rem) — Standard container/card padding.
*   `--space-6`: `24px` (1.5rem) — Content sections, large card padding.
*   `--space-8`: `32px` (2.0rem) — Landing page section margins.
*   `--space-12`: `48px` (3.0rem) — Hero sections, massive margins.

---

## 🎨 Border Radius & Elevation (Shadows)

### Corner Radii
*   `--radius-sm`: `4px` — Small tags, badges.
*   `--radius-md`: `8px` — Input fields, select dropdowns, small buttons.
*   `--radius-lg`: `12px` — Standard content cards, modals.
*   `--radius-xl`: `24px` — Large hero blocks, container frames.

### Elevation & Depth (Shadows)
*   `--shadow-sm`: `0 1px 2px 0 rgba(0, 0, 0, 0.05)` — Subtle form field depth.
*   `--shadow-md`: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)` — Standard cards.
*   `--shadow-lg`: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)` — Interactive modals.
*   `--shadow-glass`: `0 8px 32px 0 rgba(0, 0, 0, 0.3)` — Frosted overlay shadows.

---

## 🏎️ Transition & Animation Scale

To create a premium feel, all states transition smoothly.

*   `--transition-speed-fast`: `150ms` — Hover states, button clicks.
*   `--transition-speed-normal`: `250ms` — Modals, drawer expansions.
*   `--transition-speed-slow`: `400ms` — Graph expansions, timer loops.
*   `--ease-out-cubic`: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — Standard timing function for UI expansion.

---

## 📐 Layout & Composition UI Rules

1.  **Max Content Width Container:**
    *   Main content rows should always be constrained to a max-width container of `1200px` to maintain scannability on ultra-wide screens.
    *   *CSS Pattern:* `max-width: 1200px; margin: 0 auto; padding: 0 1rem;`
2.  **Form Grid Layout:**
    *   Form field arrays should use a vertical gap of `--space-4` (`16px`).
    *   Checkbox or radio groups should arrange horizontally where possible, with a spacing gap of `--space-3` (`12px`).
3.  **Glassmorphism Container Standards:**
    *   Used for overlays, dropdowns, and floating cards.
    *   *CSS Rules:*
        ```css
        background: rgba(17, 24, 39, 0.7); /* HSL BG with Opacity */
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid var(--border-muted);
        ```
4.  **Touch Target Buffer:**
    *   All buttons, links, inputs, and interactive controls must include a minimum active hit area of `44px` (using transparent padding if the visual element is smaller).