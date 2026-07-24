# Wireframe Layout Plan

This document plans the low-fidelity structural grid layouts for the Quitline platform across desktop and mobile viewports. It serves as a visual guide before writing client-side CSS and component structures, fully synchronized with `content-hierarchy.md`, `sitemap.md`, and `user-flow.md`.

---

## 🖥️ 1. Desktop Wireframe Layout (min-width: 1024px)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  [Logo] Quitline1600           [Safety Status: Guest Mode]         [ EXIT PAGE (ESC) ] │ Global Header
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  ┌──────────────────────────────────────────┐  ┌────────────────────────────────────┐  │
│  │  Hero & Direct Cessation Advice          │  │  Custom Plan Builder (Interactive)  │  │
│  │                                          │  │  - Target Quit Date Fill-in Box    │  │ Hero & Plan
│  │  - Headline: "Professional Cessation     │  │  - Work Environment Stress Level   │  │ Split View
│  │    Planning"                             │  │  - Clinical Reference Logos        │  │
│  │    (Thai: "ดูแลสุขภาพปอดอย่างมืออาชีพ")      │  │    (CDC, WHO, Mayo Clinic)         │  │
│  │  - CTAs: [ AI Live Chat ]                │  │  - [ Download Quit Plan (PDF) ]    │  │
│  │         [ Schedule Private Call ]        │  │                                    │  │
│  └──────────────────────────────────────────┘  └────────────────────────────────────┘  │
│                                                                                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  Evidence-Based "How-To" Guidelines (Direct Clinical Action Steps)                     │
│  ┌───────────────┐   ┌───────────────┐   ┌───────────────┐   ┌───────────────┐         │
│  │ NRT Dosing    │   │ Environment   │   │ Behavioral    │   │ Trigger       │         │ 4-Card Grid
│  │ Protocols     │   │ Clearing      │   │ Substitution  │   │ Management    │         │
│  └───────────────┘   └───────────────┘   └───────────────┘   └───────────────┘         │
│                                                                                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  Coping & Micro-Intervention Center                                                    │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │
│  │  [30-Sec Box Breathing Tool Widget]                                               │  │ Centered Toolkit
│  │  - Click to Start -> Expands breathing circle                                      │  │ (Box Breathing)
│  │  - Synchronized CSS Scale micro-animations                                        │  │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌────────────────────────┐      │
│  │  Tabs: In Meetings     │  │  Tabs: Decision Stress│  │  Tabs: Commuting       │      │ Tabbed Checklists
│  │  (No long text)       │  │  (Bullet points only) │  │  (Actionable steps)    │      │
│  └───────────────────────┘  └───────────────────────┘  └────────────────────────┘      │
│                                                                                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  Confidential Consultation Channels                                                    │
│  ┌──────────────────────────────────────────┐  ┌────────────────────────────────────┐  │
│  │  Anonymous Live Chat Card                 │  │  Scheduled Call Calendar Page      │  │ Support Channels
│  │  - Queue: 0 min wait time                │  │  - [ Calendar Date Picker Page ]   │  │ Split Grid
│  │  - Quick Prompt:                         │  │  - [ Time Calling Selection Below ]│  │
│  │    [ ✨ Create My Quit Plan ]            │  │  - Protocol: Neutral / Custom Box  │  │
│  │  - [ Start Secure Chat ]                 │  │  - [ Book Scheduled Callback ]     │  │
│  └──────────────────────────────────────────┘  └────────────────────────────────────┘  │
│                                                                                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  Hotline 1600 | LINE: @Quitline1600 | Ministry of Public Health [ Wipe Local Data ]  │ Footer
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📱 2. Mobile Wireframe Layout (max-width: 639px)

```
┌──────────────────────────────────────────┐
│  [Logo] Quitline1600 [Secure]    [ EXIT ] │ Sticky Header
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐  │
│  │  Hero Heading:                     │  │ Hero Section
│  │  "Professional Cessation Planning" │  │ (Stacked)
│  │  ("ดูแลสุขภาพปอดอย่างมืออาชีพ")       │  │
│  │  [ AI Live Chat ]                  │  │
│  │  [ Schedule Private Call ]         │  │
│  └────────────────────────────────────┘  │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │  Interactive Quit Plan Builder     │  │
│  │  [ Fill-in: Target Quit Date ]     │  │ Custom Plan Input Box Card
│  │  [ Select: Work Environment Stress]│  │ (Stacked Below Hero)
│  │  [ Clinical Logos: CDC, WHO, Mayo ]│  │
│  │  [ Download Quit Plan (Masked PDF)]│  │
│  └────────────────────────────────────┘  │
│                                          │
├──────────────────────────────────────────┤
│                                          │
│  Evidence-Based "How-To" Guidelines      │
│  ┌────────────────────────────────────┐  │
│  │ NRT Dosing & Timing Protocols      │  │ Card 1
│  ├────────────────────────────────────┤  │
│  │ Immediate Environment Clearing     │  │ Card 2 (Vertical Stack)
│  ├────────────────────────────────────┤  │
│  │ Behavioral Substitution Tactics    │  │ Card 3
│  └────────────────────────────────────┘  │
│                                          │
├──────────────────────────────────────────┤
│                                          │
│  Coping & Breathing Widget               │
│  ┌────────────────────────────────────┐  │
│  │ [ 30-Sec Box Breathing Buster ]    │  │ Centered Button
│  └────────────────────────────────────┘  │
│  ┌────────────────────────────────────┐  │
│  │  Accordion: In Meetings            │  │ Checklists
│  │  Accordion: Decision Stress        │  │ (Vertical Collapsible)
│  └────────────────────────────────────┘  │
│                                          │
├──────────────────────────────────────────┤
│                                          │
│  Direct Contact Channels                 │
│  ┌────────────────────────────────────┐  │
│  │ Anonymous Live Chat                │  │ Card 1 (Chat + Prompt)
│  │ [ ✨ Create My Quit Plan ]         │  │
│  ├────────────────────────────────────┤  │
│  │ Scheduled Call Calendar Page       │  │ Card 2 (Calendar + Time Picker)
│  │ - Date Selection Grid              │  │
│  │ - Time Calling Selection Below     │  │
│  └────────────────────────────────────┘  │
│                                          │
├──────────────────────────────────────────┤
│  Hotline 1600 | LINE: @Quitline1600       │ Footer (Stacked Details)
│  Ministry of Public Health, Nonthaburi   │
│  [ Wipe Local Session Data ]             │
└──────────────────────────────────────────┘
```

---

## 📐 Detailed Section Specifications

### 1. Hero & Interactive Plan Builder
*   **Hero Headline:** *"Professional Cessation Planning"*
    *   **Thai Translation:** *"ดูแลสุขภาพปอดอย่างมืออาชีพ"*
    *   **CTAs:** Two primary buttons (`AI Live Chat` anchoring to `#live-chat-card` and `Schedule Private Call` anchoring to `#schedule-call-card`).
*   **Interactive Plan Builder (No Cigs/Day input):**
    *   **Fill-in Input 1:** Target Quit Date selection picker.
    *   **Fill-in Input 2:** Work Environment Stress Level selector (Low / Moderate / High-Stakes Executive).
    *   **Clinical Reference Logos:** Displays authoritative logos/badges for evidence validation (CDC Guidelines, WHO Cessation, Mayo Clinic).
    *   **General Quit Plan Export:** Button to download a masked, un-gated PDF ("Performance Strategy Plan").

### 2. Evidence-Based "How-To" Guidelines
*   Replaces generic recovery timelines with direct, clinically proven action steps.
*   Structured as a 4-card grid detailing NRT dosing protocols, environment trigger clearing, behavioral substitution, and craving peak management.

### 3. Support Channels & Scheduled Call Calendar Page
*   **Encrypted Live Chat:** Features a prominent Quick Prompt CTA button (`✨ Create My Quit Plan`) to immediately launch guided step-by-step plan generation inside the chat window.
*   **Scheduled Call Calendar Page:**
    *   **Calendar Date Selection Page:** Interactive Calendar view for picking the exact callback date.
    *   **Time Calling Selection Below:** Dedicated time-slot picker displayed directly below the calendar for selecting the preferred calling window.
    *   **Protocol Options:** Selection dropdown with 2 options: *Neutral Callback Inquiry* or *Ask for me regarding...* (includes an optional text input field for custom topics).

### 4. Footer & Contact Details
*   Displays official Quitline1600 contact info: Hotline `1600` / `+66 2 590 1000`, LINE ID `@Quitline1600`, and Headquarters Address (Ministry of Public Health, Nonthaburi).
*   Includes the one-click **[ Wipe Local Session Data ]** button.

---

## 📐 Layout Adaptation Matrix (Breakpoints Code Specs)

*   **Hero & Builder Split Grid CSS Specifications:**
    ```css
    .hero-top-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
    }
    @media (min-width: 1024px) {
      .hero-top-grid {
        grid-template-columns: 1.2fr 0.8fr;
        gap: var(--space-8);
      }
    }
    ```
*   **Guidelines Grid CSS Specifications:**
    ```css
    .guidelines-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }
    @media (min-width: 640px) {
      .guidelines-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .guidelines-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    ```