# Typography Guideline

This document defines the typography choices, type scale rules, hierarchy instructions, and readability constraints for the Quitline platform. The system is optimized to ensure maximum reading speed, low cognitive fatigue, and high legibility.

---

## 🔤 Typeface Choices

To establish a premium, corporate SaaS atmosphere while ensuring readability, we pair two high-performance sans-serif families:

```
  Outfit (Display)        Inter (Body Copy)
  ┌────────────────┐      ┌────────────────┐
  │ Modern         │      │ Neutral        │
  │ Geometric      │      │ High Legibility│
  │ Headings, Stats│      │ Lists, Forms   │
  └────────────────┘      └────────────────┘
```

### 1. Headings & Numbers: **Outfit**
*   *Provider:* Google Fonts (Sans-serif)
*   *Weights:* `600` (Semi-Bold), `700` (Bold), `800` (Extra-Bold)
*   *Intent:* Modern, geometric layout with clean shapes. Designed to draw attention to recovery stats, timeline milestones, and major section dividers.

### 2. Body Text & Form Labels: **Inter**
*   *Provider:* Google Fonts (Sans-serif)
*   *Weights:* `400` (Regular), `500` (Medium), `600` (Semi-Bold)
*   *Intent:* A neutral, highly structured typeface with excellent x-height readability. Used for checklists, dynamic calculators, privacy statements, and calendar interfaces.

---

## 📏 Typographic Scale

To maintain proportional scaling, typography follows a strict modular scale:

| CSS Variable | Font Size | Line Height | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `--font-h1` | `2.25rem` (36px) | `1.2` | `800` | Landing Page Hero titles. |
| `--font-h2` | `1.50rem` (24px) | `1.3` | `700` | Major content sections (Timeline, Coping). |
| `--font-h3` | `1.125rem` (18px)| `1.4` | `600` | Card headers, selector tabs, group labels. |
| `--font-body` | `1.00rem` (16px) | `1.6` | `400` | Body paragraphs, instructions. |
| `--font-label`| `0.875rem` (14px)| `1.5` | `500` | Input labels, action buttons, table metrics. |
| `--font-caption` | `0.75rem` (12px)| `1.5` | `400` | Privacy disclaimers, keyboard shortcuts (`ESC`). |

---

## 📖 Text Usage & Readability Rules

To support Ek's time constraints and need for direct advice, implement the following styling constraints:

### 1. Line Length Restrictions (Measure)
*   To prevent visual fatigue when reading, body text paragraphs must never exceed a line width of **70 characters** (approx. `600px` to `650px`).
*   *CSS Rule:* `max-width: 65ch;`

### 2. Line-Height Safeguards
*   Body text should never drop below a line-height of `1.5` to maintain screen-reading ease. We default to `1.6` for paragraphs.
*   Headings are capped at `1.2` to `1.3` to keep multi-line titles clean and tight.

### 3. All-Caps Restrictions
*   Avoid long strings of ALL-CAPS text (which decrease reading speed). 
*   All-caps should only be applied to short labels (under 3 words) such as tags or category flags (e.g., `"COPING STRATEGY"`, `"PRIVATE CHAT"`).
*   *CSS Rule:* `text-transform: uppercase; letter-spacing: 0.05em; font-size: var(--text-xs);`

### 4. Dynamic Contrast Adaptations
*   Headings must use `--text-primary` HSL values (`hsl(222, 47%, 12%)` light / `hsl(210, 40%, 98%)` dark) to stand out immediately against content blocks.
*   Paragraph text should use `--text-secondary` for a softer look, but remain above contrast thresholds.