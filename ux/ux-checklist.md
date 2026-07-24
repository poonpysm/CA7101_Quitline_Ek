# UX & Accessibility Checklist

This checklist tracks the implementation of usability, accessibility, and visual consistency checks across the Quitline application, focused on the needs of privacy-first, time-constrained users.

---

## 🔒 Usability & Privacy Checklist

*   ### [ ] Quick Escape Mechanics
    *   [ ] Floating "Quick Exit" button is visible at all times, pinning to the header or viewport corner.
    *   [ ] Pressing the `ESC` key instantly redirects the browser tab to a neutral site (e.g., `google.com`) and replaces history.
    *   [ ] "Quick Exit" button uses a neutral name (e.g., "Exit to Search" or a simple close icon) to avoid attention.
*   ### [ ] Onboarding & Friction Reduction
    *   [ ] All core planning calculators and coping tools are 100% accessible in "Guest Mode" without sign-up.
    *   [ ] Standard inputs utilize native browser autofill controls where safe, but respect toggles to clear them upon exit.
    *   [ ] Forms use progressive disclosure (one question at a time) rather than showing a long, daunting list.
*   ### [ ] Task Completion & Time-to-Value
    *   [ ] The "30-Second Craving Buster" is accessible with a single click from the landing viewport.
    *   [ ] Custom quit timelines load immediately on the client side without database roundtrips.

---

## ♿ Accessibility (a11y) Checklist (WCAG 2.1 AA Compliant)

*   ### [ ] Keyboard Navigation & Focus
    *   [ ] Keyboard focus states (`:focus-visible`) are highly visible and styled consistently with a custom ring.
    *   [ ] Focus order matches visual reading order (top-to-bottom, left-to-right).
    *   [ ] "Skip to Main Content" link is active and accessible as the first keyboard tab target.
*   ### [ ] Screen Reader & Semantic HTML
    *   [ ] All interactive elements (e.g., chat buttons, calendar slots) have explicit `aria-label` definitions.
    *   [ ] Form inputs have corresponding `<label>` tags with matching `for`/`id` properties.
    *   [ ] Landmarks (`<header>`, `<main>`, `<section>`, `<footer>`) are used semantically.
*   ### [ ] Contrast & Visual Layout
    *   [ ] Contrast ratio between text and background meets WCAG AA standards (minimum 4.5:1 for body, 3:1 for large text).
    *   [ ] Colors are not the sole indicator of actions or states (e.g., validation errors also show helper text and warning icons).
    *   [ ] Touch targets are at least `44x44px` on mobile/tablet screens with adequate padding.

---

## 🎨 Consistency & Brand Integrity Checklist

*   ### [ ] Visual Discretion & Styling
    *   [ ] Color palette is corporate and neutral (e.g., steel blues, slate grays, clean off-whites) to look like a standard business tool.
    *   [ ] No graphic images of smoke damage or health warnings that could invite over-the-shoulder scrutiny.
    *   [ ] Visual cards and layouts utilize a uniform border-radius, shadow hierarchy, and border style.
*   ### [ ] Typography Scale
    *   [ ] Font families (e.g., Outfit/Inter for sans-serif) are set up correctly in CSS variables.
    *   [ ] Headings scale consistently from `h1` down to `h6` following a modular typographic scale.
    *   [ ] Font sizes remain readable down to mobile viewports without overlapping.
*   ### [ ] Error Prevention & Feedback
    *   [ ] Inline validation displays immediately when focus leaves an input field (e.g., custom call scheduling forms).
    *   [ ] Error messages are constructive and state-oriented (e.g., "Please select a time in the future" rather than "Invalid time").