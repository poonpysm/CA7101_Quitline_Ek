# Color Guideline

This document defines the interface color system, HSL color tokens, contrast parameters, and semantic usage rules for the Quitline platform. The system is designed to look like a premium corporate tool (reassuringly professional, minimizing accidental exposure) while maintaining a modern, elegant aesthetic.

---

## 🎨 Color Palette & HSL Tokens

We use HSL color tokens to ensure precise programmatic control, clean opacity layering (glassmorphism), and smooth theme transitions.

### 1. Base Palette (Light Mode - Standard Corporate)

| Color Token | Variable Name | HSL Value | Hex Code (Approx.) | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Canvas Background** | `--bg-canvas` | `hsl(210, 20%, 98%)` | `#f8f9fa` | Page body background |
| **Surface Background** | `--bg-surface` | `hsl(0, 0%, 100%)` | `#ffffff` | Cards, navigation bars, dropdowns |
| **Border Muted** | `--border-muted` | `hsl(214, 32%, 91%)` | `#e2e8f0` | Dividers, card borders, inactive inputs |
| **Text Primary** | `--text-primary` | `hsl(222, 47%, 12%)` | `#0f172a` | Body copy, headings, labels |
| **Text Secondary** | `--text-secondary` | `hsl(215, 16%, 47%)` | `#64748b` | Sub-labels, dates, captions |

### 2. Base Palette (Sleek Dark Mode - High Privacy)
*Highly recommended for Ek as it reduces screen illumination and makes the UI less visible at a distance.*

| Color Token | Variable Name | HSL Value | Hex Code (Approx.) | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Canvas Background** | `--bg-canvas` | `hsl(222, 47%, 6%)` | `#0b0f19` | Page body background |
| **Surface Background** | `--bg-surface` | `hsl(222, 47%, 10%)` | `#111827` | Cards, navigation bars |
| **Border Muted** | `--border-muted` | `hsl(217, 33%, 17%)` | `#1e293b` | Dividers, card borders |
| **Text Primary** | `--text-primary` | `hsl(210, 40%, 98%)` | `#f8fafc` | Headings, active state labels |
| **Text Secondary** | `--text-secondary` | `hsl(215, 20%, 65%)` | `#94a3b8` | Subtext, placeholder inputs |

### 3. Interactive & Accent Palette

| Brand Color | Variable Name | HSL Value | Use Case |
| :--- | :--- | :--- | :--- |
| **Accent Primary (Navy Slate)** | `--accent-primary` | `hsl(217, 91%, 60%)` | Interactive buttons, active links, primary CTA |
| **Accent Hover** | `--accent-hover` | `hsl(217, 91%, 52%)` | Hover states |
| **Accent Muted Glass** | `--accent-glass` | `hsla(217, 91%, 60%, 0.1)`| Glassmorphism overlays, badge backdrops |

---

## 🚦 Semantic Color Rules

Semantic colors convey status and guide actions. To maintain visual discretion for Ek, we avoid neon colors and instead use sophisticated, muted tones.

```
┌───────────────────┐    ┌───────────────────┐    ┌───────────────────┐
│     SUCCESS       │    │     WARNING       │    │      DANGER       │
│  Eucalyptus Mint  │    │    Warm Amber     │    │  Burnt Terracotta │
│ HSL(150, 40%, 35%)│    │ HSL(35, 60%, 45%) │    │ HSL(12, 50%, 45%) │
└───────────────────┘    └───────────────────┘    └───────────────────┘
```

*   **Success (Progress, Recovery Milestones):**
    *   *Tone:* Eucalyptus Mint (`hsl(150, 40%, 35%)`)
    *   *Usage:* Applied to health recovery milestones, cravings successfully avoided, and completed tasks.
*   **Warning (Attention, Verification Steps):**
    *   *Tone:* Warm Amber (`hsl(35, 60%, 45%)`)
    *   *Usage:* Displayed when scheduling calls near working hours or for high-risk inputs.
*   **Danger / Critical (Destructive, Quick Escape):**
    *   *Tone:* Burnt Terracotta (`hsl(12, 50%, 45%)`)
    *   *Usage:* Primary identifier for the **Quick Escape** button, deleting local storage progress, or action validation failures.

---

## 👁️ Contrast & Accessibility Guidelines

To ensure the interface remains accessible under stressful or low-light conditions, all layouts must satisfy the following criteria:

*   **Contrast Thresholds (WCAG 2.1 AA Compliant):**
    *   **Body Copy:** Must maintain a minimum contrast ratio of `4.5:1` against its background (WCAG AA). Our default styling target is `7:1` for maximum readability.
    *   **Headings / Large Text (18pt+):** Must maintain a minimum contrast of `3:1`.
    *   **User Interface Components (borders, input states, icons):** Must have a minimum contrast of `3:1`.
*   **Color Redundancy Rule:**
    *   Never rely *only* on color changes to convey meaning (e.g., green for correct, red for error). Error messages must include helper text and warning icons to accommodate color-blind users.

---

## ✨ Dynamic Flowing Gradient Background & Glassmorphism

To make the platform feel alive, modern, and engaging without distracting from corporate usability, we utilize a **Dynamic Flowing Ambient Gradient Mesh**:

*   **Layered Ambient Nodes:**
    *   *Primary Node:* Deep Slate Blue (`hsla(217, 91%, 60%, 0.14)`)
    *   *Secondary Node:* Eucalyptus Recovery Green (`hsla(150, 40%, 35%, 0.09)`)
    *   *Accent Focus:* Soft Royal Cyan (`hsla(217, 91%, 45%, 0.08)`)
*   **CSS Animation Specs (`@keyframes flowAmbientGradient`):**
    *   *Duration:* 25s continuous infinite loop (`alternate ease-in-out`).
    *   *Movement:* Slow multi-axis translation (`translate(-5%, 4%)`), subtle scaling (`scale(1.05)`), and smooth rotation (`rotate(3deg)`).
*   **Glassmorphic Interactivity (`backdrop-filter`):**
    *   Cards and modals feature `backdrop-filter: blur(12px)` and subtle `1px solid var(--border-muted)` borders, allowing the flowing gradient underneath to gently refract, creating a tactile, high-end aesthetic.