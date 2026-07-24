# Website Sitemap & Key Page Structure

Based on the research and requirements documented in the project files, the Quitline portal is designed as a **highly streamlined, single-page-first hub** to minimize navigation delay (Time-to-Value) and reduce the browser history footprint.

---

## 🗺️ Website Sitemap

```
                          [ Quitline Portal Hub ]
                                     │
      ┌──────────────────────────────┼──────────────────────────────┐
      ▼                              ▼                              ▼
 [ Main Landing Hub ]       [ Privacy Center ]             [ Quick Exit Redirect ]
 (Single-Page App)          (/privacy / local storage)     (/exit -> google.com)
      │
       ├─► Hero Segment (Instant Hook & Privacy Status)
       ├─► Plan Builder Segment (Interactive Inputs)
       ├─► Evidence-Based Guidelines Segment (Direct How-To Advice)
       ├─► Coping Toolkit Segment (Box Breathing & Work Checklists)
       └─► Help Channels Segment (Chat, Masked Call & Footer Contact Info)
```

---

## 📄 Key Pages & Segment Breakdown

### 1. Main Landing Hub (Homepage - `/`)
*The central workspace where the primary persona (Ek) conducts 90% of his actions. It is structured as a continuous, high-speed single-page application.*

*   **Header (Global Sticky Overlay):**
    *   Logo (Neutral abstract branding e.g., "Quitline1600").
    *   Active Security Indicator ("Guest Mode: Local Only").
    *   Floating **Quick Escape** button.
*   **Hero Segment:**
    *   Primary value proposition focused on professional discretion.
    *   Primary CTA: "Build Your 2-Min Quit Plan" (anchors to the Plan Builder).
    *   Direct CTA buttons: "AI Live Chat" & "Schedule Private Call".
*   **Plan Builder Segment (Embedded App):**
    *   Interactive inputs for Target Quit Date and Work Stress Level.
    *   Dynamic calculation chart showing budget savings and life recovered.
    *   Option to export a masked PDF ("Performance Planner").
*   **Evidence-Based Guidelines Segment:**
    *   Direct clinical action steps replacing vague advice (NRT dosing protocols, immediate environment clearing, behavioral substitution tactics).
*   **Coping Toolkit Segment:**
    *   The "30-Second Craving Buster" box breathing widget.
    *   "Coping at Work" tabbed instructions (cravings during meetings, high-stakes decisions, commutes).
*   **Help Channels Segment:**
    *   Anonymous Chat widget client interface with `"Create My Quit Plan"` quick prompt CTA button.
    *   Discreet Calendar Booking form for phone consultations.
    *   Official Footer Contact Bar (Hotline 1600, LINE @Quitline1600, Headquarters Address).

---

## 🔒 2. Privacy & Data Purge Center (`/privacy`)
*A dedicated sub-page (or a highly detailed modal overlay) explaining data-logging policies to establish complete trust.*

*   **Privacy Statements:** Visual bullet-point explanations of end-to-end encryption, cookieless setup, and server-side log policies.
*   **The Purge Utility:** A prominent warning block with a CTA button: **"Wipe Local Footprint."** Tapping this instantly deletes all `localStorage` records, resets all browser cookies, and returns the portal to a fresh state.
*   **Stealth Instructions:** Brief guides showing Ek how to view the page in Private/Incognito Mode and clear browser history.

---

## 🚀 3. Quick Exit Portal (`/exit`)
*A client-side redirect route that instantly forwards the browser viewport to a safe homepage.*

*   **Behavior:** Triggered by the `ESC` key or top header button.
*   **Execution:** Instantly replaces the window location history state (`window.location.replace`) so that pressing the browser's "Back" button does not return to the Quitline page.