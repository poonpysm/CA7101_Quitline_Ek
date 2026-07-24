# Component Guideline

This document defines the structural blueprint, user interface states, and technical implementation requirements for critical components of the Quitline application.

---

## 🛑 1. The Global "Quick Escape" Utility

*   **Description:** A persistent panic button and keyboard interceptor that instantly redirects the viewport to a safe, neutral URL.
*   **Aesthetic & Layout:**
    *   Sticky overlay anchored to the top-right corner of the page.
    *   Labeled discreetly: "Exit Page (ESC)" with a small external-link icon.
*   **Behavioral States:**
    *   `Idle`: High contrast border (neutral HSL), clean slate background.
    *   `Hover/Focus`: HSL terracotta border (`hsl(12, 50%, 45%)`), smooth transition scaling.
    *   `Active/Pressed`: Transition to flat terracotta fill, instant redirect.
*   **JavaScript Expectation:**
    ```javascript
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        window.location.replace("https://www.google.com");
      }
    });
    ```

---

## ⚡ 2. The Interactive Plan Builder (Fill-In Inputs & Clinical Validation)

*   **Description:** An interactive input card enabling the user to set their Target Quit Date and select their Work Environment Stress Level, accompanied by authoritative clinical reference badges and a general quit plan download action (no sliders).
*   **Aesthetic & Layout:**
    *   Fill-in input fields: Date picker for Target Quit Date and selector for Work Environment Stress Level (Low / Moderate / High-Stakes Executive).
    *   Authoritative clinical reference logos/badges (CDC Guidelines, WHO Cessation, Mayo Clinic) validating medical accuracy.
    *   Prominent "Download Quit Plan (Masked PDF)" CTA button.
*   **Behavioral States:**
    *   `Idle Input`: Muted slate border/surface fill (`hsl(214, 32%, 91%)`).
    *   `Focus Input`: Distinct outline ring (`hsl(217, 91%, 60%)`) with clean focus highlight.
    *   `Date/Stress Selected`: Immediate dynamic calculation of estimated budget savings and recovery milestones.
    *   `Download CTA Hover`: Accent primary HSL fill with subtle micro-animation scale.

---

## 🧘 3. The "30-Second Craving Buster" (Box Breathing Widget)

*   **Description:** A quick-activation modal or accordion presenting a breathing timer to mitigate acute cravings.
*   **Aesthetic & Layout:**
    *   Floating card container using glassmorphic styling (frosted background blur).
    *   Central breathing indicator (a circular ring that expands/contracts to lead pacing).
*   **Behavioral States:**
    *   `Collapsed`: Discreet floating bubble or footer tab.
    *   `Expanded`: Modal layout displaying a clean 4-4-4-4 cycle (Inhale, Hold, Exhale, Hold).
    *   `Paced Cycle (Animation)`: CSS scale transitions (`transform: scale()`) synchronized with text instructions:
        *   *Inhale (4s):* Scale from 1.0 to 1.8.
        *   *Hold (4s):* Hold scale at 1.8.
        *   *Exhale (4s):* Scale down from 1.8 to 1.0.
        *   *Hold (4s):* Hold scale at 1.0.

---

## 📅 4. The Secure Calendar Booking Component

*   **Description:** An interactive calendar page interface to schedule a private callback with date selection, a time calling window selection grid directly below it, and custom caller ID introduction protocol options.
*   **Aesthetic & Layout:**
    *   **Calendar Date Selection Page:** Interactive calendar view for selecting the callback date.
    *   **Time Calling Selection Below:** Time window buttons displayed directly below the calendar grid.
    *   **Masked Protocol Options:** Dropdown with 2 options: *Neutral Callback Inquiry* or *Ask for me regarding...* (includes an optional text input field for custom cover topics).
*   **Behavioral States:**
    *   `Selected Calendar Date`: Highlighted active cell state.
    *   `Selected Time Slot`: Full accent color background, white text.
    *   `Custom Cover Topic`: Dynamically reveals text input field when "Ask for me regarding..." is selected.
    *   `Submitting/Loading`: Spinner replacement inside the submit button, inputs disabled (`pointer-events: none`).
*   **Validation Rules:**
    *   Inline, non-intrusive red error icons and clean text feedback.
    *   No automatic focus stealing to avoid startling keyboard users.

---

## 🧼 5. The "Clear Footprint" Action (Privacy Clean)

*   **Description:** A simple footer control that purges all locally stored plan configurations and data in one click.
*   **Aesthetic & Layout:**
    *   A low-contrast text link/button in the footer labeled "Purge Session History."
*   **Behavioral States:**
    *   `Idle`: Understated grey text.
    *   `Clicked`: Triggers a fast confirmation popup: *"This will permanently clear your local plan. Proceed?"*
    *   `Success`: Text changes to checkmark icon, flashes success green, and reloads page state immediately.