// Wait for DOM Content to load
document.addEventListener("DOMContentLoaded", () => {

  // Safe Storage Wrapper to prevent security crashes on sandboxed local browsers (file://)
  const safeStorage = {
    getItem(key) {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        return this[key] || null;
      }
    },
    setItem(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        this[key] = String(value);
      }
    },
    clear() {
      try {
        localStorage.clear();
      } catch (e) {
        Object.keys(this).forEach(k => {
          if (k !== 'getItem' && k !== 'setItem' && k !== 'clear') {
            delete this[k];
          }
        });
      }
    }
  };

  /* ==========================================
     1. TRANSLATION CATALOG & LOCALIZATION
     ========================================== */
  const TRANSLATIONS = {
    en: {
      "logo-title": "Quitline1600",
      "guest-mode": "Guest Mode Active",
      "exit-btn": "Exit Page (ESC)",
      "skip-link": "Skip to Main Content",
      "hero-subtitle": "Confidential Support",
      "hero-title": "Professional Cessation Planning",
      "clinical-ref-heading": "Clinical References",
      "hero-privacy-note": "🔒 100% anonymous. We do not store your data or log your IP address.",
      "cta-plan": "Build Your Quit Plan (2 Min)",
      "cta-chat": "AI Live Chat",
      "cta-call": "Schedule Private Call",
      "outlook-header-label": "Personalized Health Outlook",
      "result-oxygen-label": "Oxygen & Circulation",
      "result-resilience-label": "Executive Stress Shield",
      "result-life-label": "Life Recovered (Annual)",
      "docked-sec-1-title": "LOCAL",
      "docked-sec-1-label": "Guest Mode (Local Only)",
      "docked-sec-2-title": "SECURE",
      "docked-sec-2-label": "Encrypted Live Chat",
      "docked-sec-3-title": "MASKED",
      "docked-sec-3-label": "Discreet Call Protocol",
      "hero-desc": "Get direct, science-backed guidance and build a customized timeline. Quitline1600 runs entirely in guest mode inside your browser, leaving zero database logs, email records, or persistent digital footprints.",
      "bullet-1-title": "100% Private",
      "bullet-1-text": "No email sign-up. All data persists locally in your browser.",
      "bullet-2-title": "Time-Optimized",
      "bullet-2-text": "Find coping checklists and medical statistics in under 30 seconds.",
      "bullet-3-title": "Self-Directed",
      "bullet-3-text": "Interactive timeline calculators map your exact recovery curve.",
      "bullet-4-title": "Masked Support",
      "bullet-4-text": "Secure live text chat and phone calls booked under neutral titles.",
      "builder-title": "Quit Plan Builder",
      "builder-badge": "2-Min Set Up",
      "input-quit-date": "Target Quit Date",
      "input-stress-level": "Work Environment Stress Level",
      "opt-stress-low": "Low Stress (Standard Routine)",
      "opt-stress-mod": "Moderate Stress (Regular Deadlines)",
      "opt-stress-high": "High-Stakes Executive (Frequent Pressure)",
      "out-save-week": "Weekly Savings",
      "out-save-year": "Annual Savings",
      "out-life": "Estimated Life Recovered",
      "download-btn": "Download Quit Plan (Masked PDF)",
      "guidelines-subtitle": "Clinical Action Steps",
      "guidelines-title": "Quick Step-by-Step Guidelines",
      "guide-card-1-tag": "Clinical Step 1",
      "guide-card-1-title": "NRT Dosing Protocols",
      "guide-card-1-desc": "Use patch (21mg) or gum (2mg) to maintain steady plasma levels during work hours.",
      "guide-card-2-tag": "Clinical Step 2",
      "guide-card-2-title": "Environment Trigger Clearing",
      "guide-card-2-desc": "Remove all ashtrays, lighters, and vehicle tobacco residues. Replace with neutral essential mist or mints.",
      "guide-card-3-tag": "Clinical Step 3",
      "guide-card-3-title": "Behavioral Substitution",
      "guide-card-3-desc": "Substitute oral smoking cues with toothpicks or ice water sips to satisfy the throat swallowing reflex during meetings.",
      "guide-card-4-tag": "Clinical Step 4",
      "guide-card-4-title": "Craving Peak Management",
      "guide-card-4-desc": "Physical urges peak within 3 minutes. Apply 3-minute delay tactics and two quick nasal inhales followed by slow exhales.",
      "coping-subtitle": "Coping & Stress Management",
      "coping-title": "Emergency Toolkit & Context Guides",
      "buster-title": "30-Second Craving Buster",
      "buster-desc": "Manage acute smoking urges during meetings or stressful decision points using standard box breathing.",
      "breathing-guide-idle": "Press Start to begin breathing loop",
      "breathing-start-btn": "Start Breathing Guide",
      "breathing-stop-btn": "Stop Breathing Tool",
      "acc-summary-1": "Managing Urges During High-Stakes Meetings",
      "acc-desc-1": "Keep focused and avoid giving away cravings under pressure:",
      "acc-1-li-1": "<strong>Delay Tactically:</strong> Cravings peak within 3 minutes. Commit to waiting out the next agenda item.",
      "acc-1-li-2": "<strong>Hydrate Quietly:</strong> Take slow, measured sips of ice water to trigger the physical swallowing reflex, distracting the throat craving.",
      "acc-1-li-3": "<strong>Dynamic Posture:</strong> Anchor your feet flat on the floor, relaxing your shoulders to reduce physical tension.",
      "acc-1-li-4": "<strong>Discreet Breathing:</strong> Take slow, silent abdominal breaths through the nose. Do not hold your breath.",
      "acc-summary-2": "Coping with Decision-Stress Points",
      "acc-desc-2": "Break the connection between stress and nicotine triggers:",
      "acc-2-li-1": "<strong>Step Away:</strong> Excuse yourself for a 2-minute \"operational check\" or phone call to break the immediate visual trigger environment.",
      "acc-2-li-2": "<strong>Physiological Sigh:</strong> Take two quick inhales through the nose, followed by a long, slow exhale through the mouth. This instantly downregulates the nervous system.",
      "acc-2-li-3": "<strong>Scribble Action:</strong> Channel restless finger energy into writing notes or organizing physical papers rather than holding a cigarette.",
      "acc-summary-3": "Handling the Morning & Evening Commute",
      "acc-desc-3": "Modify driving or transit habits to eliminate associated smoking cues:",
      "acc-3-li-1": "<strong>Substitute Activity:</strong> Keep a toothpick, organic mint, or sugar-free lozenge inside the vehicle console.",
      "acc-3-li-2": "<strong>Clean Vehicle Environment:</strong> Remove any car ashtrays, lighters, or residues, and use a neutral essential oil mist.",
      "acc-3-li-3": "<strong>Vocal Release:</strong> Sing along to music or listen to high-focus audiobooks to keep oral and mental faculties occupied.",
      "support-subtitle": "Human Support",
      "support-title": "Secure Cessation Counseling",
      "chat-title": "Encrypted Live Chat",
      "chat-status": "Available",
      "chat-secure": "Secure E2E Connection Verified",
      "chat-wait": "Wait: ~0 min",
      "chat-send": "Send",
      "chat-cta-create-plan": "✨ Create My Quit Plan",
      "contact-phone-label": "Hotline Phone",
      "contact-phone-val": "1600 (Toll-Free) / +66 2 590 1000",
      "contact-line-label": "Official LINE ID",
      "contact-address-label": "Headquarters",
      "contact-address-val": "Ministry of Public Health, Nonthaburi, Thailand",
      "chat-disclaimer": "No logs are generated on this device. Session transcripts are deleted immediately from the host connection when the browser tab is closed or the \"ESC\" exit is triggered.",
      "call-title": "Schedule a Private Call",
      "call-badge": "Masked Call Option",
      "call-date-label": "Select Callback Date",
      "call-time-label": "Select Callback Time",
      "call-phone-label": "Direct Phone Number *",
      "call-error": "❌ A contact number is required for booking.",
      "call-intro-label": "Call Introduction Protocol",
      "opt-neutral": "Neutral Callback Inquiry",
      "opt-custom": "Ask for me regarding...",
      "custom-topic-label": "Custom Call Topic",
      "opt-custom-placeholder": "e.g. Corporate Consulting follow-up",
      "call-submit-btn": "Book Scheduled Callback",
      "footer-copyright": "© 2026 Quitline1600 Initiative. All support guides follow evidence-based parameters.",
      "footer-disclaimer": "Data persists locally in client browser storage. Server logs are disabled.",
      "privacy-link": "Privacy Protocol",
      "cdc-link": "CDC Guidelines",
      "who-link": "WHO Cessation",
      "purge-btn": "Purge Session Settings",
      "modal-success-title": "Callback Scheduled",
      "modal-success-body": "Your callback is scheduled. The counselor will dial your number at the requested window.<br/><br/><strong>Security note:</strong> The call will display as \"Unknown Number\" and the agent will use the requested introduction protocol to ensure privacy.",
      "modal-success-ok": "Understood",
      "modal-purge-title": "Purge Local Footprint?",
      "modal-purge-body": "This action will wipe all your custom sliders, calculated timelines, and chat history. This cannot be undone.",
      "modal-purge-cancel": "Cancel",
      "modal-purge-confirm": "Confirm Wipe",
      "modal-privacy-title": "Quitline1600 Privacy Protocol",
      "modal-privacy-body": "To safeguard your professional reputation:<br/><br/>1. <strong>Local Only:</strong> Calculations and sliders are stored on your local browser machine via localStorage. No details are transmitted to external databases.<br/>2. <strong>E2E Chat:</strong> Conversations are encrypted during transit and deleted as soon as the session closes.<br/>3. <strong>Masked Caller:</strong> Our support agents follow a strict checklist to never disclose \"Quitline1600\" to assistants or family answering your line.",
      "modal-privacy-close": "Close Protocol"
    },
    th: {
      "logo-title": "Quitline1600",
      "guest-mode": "โหมดผู้ใช้ทั่วไปทำงานอยู่",
      "exit-btn": "ออกจากหน้านี้ทันที (ESC)",
      "skip-link": "ข้ามไปยังเนื้อหาหลัก",
      "hero-subtitle": "บริการสนับสนุนการเลิกบุหรี่ที่เป็นความลับ",
      "hero-title": "ดูแลสุขภาพปอดอย่างมืออาชีพ",
      "clinical-ref-heading": "แหล่งอ้างอิงทางการแพทย์",
      "hero-privacy-note": "🔒 ปกปิดตัวตน 100% ไม่มีการบันทึกข้อมูลส่วนบุคคลหรือ IP Address",
      "cta-plan": "สร้างแผนการเลิกบุหรี่ใน 2 นาที",
      "cta-chat": "แชทสด AI",
      "cta-call": "นัดหมายการโทรส่วนตัว",
      "outlook-header-label": "ภาพรวมการฟื้นฟูสุขภาพส่วนบุคคล",
      "result-oxygen-label": "ระดับออกซิเจนและการหมุนเวียนเลือด",
      "result-resilience-label": "ความทนทานต่อความเครียดระดับบริหาร",
      "result-life-label": "อายุขัยที่ได้คืนมา (ต่อปี)",
      "docked-sec-1-title": "บันทึกในเครื่อง",
      "docked-sec-1-label": "โหมดผู้ใช้ทั่วไป (บันทึกในเครื่อง)",
      "docked-sec-2-title": "ปลอดภัย",
      "docked-sec-2-label": "แชทสดเข้ารหัส E2E",
      "docked-sec-3-title": "ปกปิดตัวตน",
      "docked-sec-3-label": "ระบบโทรแบบปกปิดตัวตน",
      "hero-desc": "รับคำแนะนำที่ตรงไปตรงมาและอิงตามหลักวิทยาศาสตร์ พร้อมสร้างไทม์ไลน์ส่วนตัวของคุณ Quitline1600 ทำงานในโหมดผู้ใช้ทั่วไปบนเบราว์เซอร์ของคุณ 100% โดยไม่มีการบันทึกฐานข้อมูล ประวัติอีเมล หรือร่องรอยดิจิทัลใดๆ",
      "bullet-1-title": "ความเป็นส่วนตัว 100%",
      "bullet-1-text": "ไม่มีขั้นตอนการสมัครสมาชิก ข้อมูลทั้งหมดจะถูกบันทึกไว้ในเบราว์เซอร์ของคุณเท่านั้น",
      "bullet-2-title": "ประหยัดเวลาสูงสุด",
      "bullet-2-text": "ค้นหาคำแนะนำและข้อมูลสถิติทางการแพทย์ได้ในเวลาไม่ถึง 30 วินาที",
      "bullet-3-title": "กำหนดเป้าหมายด้วยตนเอง",
      "bullet-3-text": "เครื่องคำนวณไทม์ไลน์จะจำลองกราฟการฟื้นฟูร่างกายของคุณโดยละเอียด",
      "bullet-4-title": "ช่องทางติดต่อที่ปิดลับ",
      "bullet-4-text": "แชทสดและจองคิวโทรศัพท์ที่ปลอดภัยโดยใช้หัวข้อการโทรที่เป็นกลาง",
      "builder-title": "เครื่องมือวางแผนการเลิกบุหรี่",
      "builder-badge": "ตั้งค่าใน 2 นาที",
      "input-quit-date": "วันที่ตั้งเป้าหมายเริ่มต้นเลิกบุหรี่",
      "input-stress-level": "ระดับความตึงเครียดของสภาพแวดล้อมการทำงาน",
      "opt-stress-low": "ความเครียดต่ำ (งานประจำทั่วไป)",
      "opt-stress-mod": "ความเครียดปานกลาง (มีเดดไลน์ปกติ)",
      "opt-stress-high": "ความเครียดสูงระดับผู้บริหาร (ความกดดันถี่)",
      "out-save-week": "ยอดประหยัดรายสัปดาห์",
      "out-save-year": "ยอดประหยัดรายปี",
      "out-life": "อายุขัยที่ได้คืนมา (ประมาณ)",
      "download-btn": "ดาวน์โหลดแผนการเลิกบุหรี่ (ไฟล์ PDF ลำลอง)",
      "guidelines-subtitle": "ขั้นตอนปฏิบัติทางคลินิก",
      "guidelines-title": "ขั้นตอนแนวทางปฏิบัติอย่างง่าย",
      "guide-card-1-tag": "ขั้นตอนคลินิก 1",
      "guide-card-1-title": "โปรโตคอลการใช้นิโคตินทดแทน (NRT)",
      "guide-card-1-desc": "ใช้แผ่นแปะ (21มก.) หรือหมากฝรั่ง (2มก.) เพื่อรักษาระดับนิโคตินในเลือดให้คงที่ระหว่างการทำงาน",
      "guide-card-2-tag": "ขั้นตอนคลินิก 2",
      "guide-card-2-title": "ขจัดสิ่งเร้าและตัวกระตุ้นรอบข้าง",
      "guide-card-2-desc": "กำจัดที่เขี่ยบุหรี่ ไฟแช็ก และคราบเขม่าในรถยนต์ออกให้หมด แล้วใช้น้ำมันหอมระเหยหรือลูกอมมิ้นต์แทน",
      "guide-card-3-tag": "ขั้นตอนคลินิก 3",
      "guide-card-3-title": "ใช้สิ่งทดแทนทางพฤติกรรม",
      "guide-card-3-desc": "ใช้ไม้จิ้มฟันหรือการจิบน้ำเย็นทดแทนพฤติกรรมการคาบบุหรี่ เพื่อตอบสนองปฏิกิริยาการกลืนระหว่างการประชุม",
      "guide-card-4-tag": "ขั้นตอนคลินิก 4",
      "guide-card-4-title": "การจัดการช่วงความอยากพุ่งสูงสุด",
      "guide-card-4-desc": "ความอยากทางกายภาพจะพุ่งสูงสุดใน 3 นาที ใช้เทคนิคประวิงเวลา 3 นาทีร่วมกับการถอนหายใจทางสรีรวิทยา",
      "coping-subtitle": "การจัดการความเครียดและการรับมือ",
      "coping-title": "ชุดเครื่องมือฉุกเฉินและคำแนะนำตามบริบท",
      "buster-title": "บริการช่วยสยบความอยากใน 30 วินาที",
      "buster-desc": "จัดการความอยากบุหรี่อย่างฉับพลันระหว่างการประชุมหรือจุดเครียดของการทำงานด้วยการหายใจแบบกล่อง (Box Breathing)",
      "breathing-guide-idle": "กดปุ่ม Start เพื่อเริ่มรอบการหายใจ",
      "breathing-start-btn": "เริ่มต้นการฝึกหายใจ",
      "breathing-stop-btn": "หยุดการฝึกหายใจ",
      "acc-summary-1": "การจัดการความอยากระหว่างการประชุมสำคัญ",
      "acc-desc-1": "รักษาโฟกัสการทำงานและควบคุมความอยากภายใต้ความกดดัน:",
      "acc-1-li-1": "<strong>ประวิงเวลาอย่างมีชั้นเชิง:</strong> ความอยากจะขึ้นสูงสุดในเวลา 3 นาที ตั้งใจรอให้วาระถัดไปเริ่มขึ้นก่อน",
      "acc-1-li-2": "<strong>จิบน้ำเย็นเงียบๆ:</strong> จิบน้ำเย็นช้าๆ เพื่อกระตุ้นการกลืนทางกายภาพ ช่วยหันเหความรู้สึกอยากบริเวณลำคอ",
      "acc-1-li-3": "<strong>ปรับสรีระร่างกาย:</strong> วางเท้าราบไปกับพื้น ผ่อนคลายหัวไหล่เพื่อลดความตึงเครียดทางกายภาพ",
      "acc-1-li-4": "<strong>ฝึกหายใจเงียบเชียบ:</strong> หายใจเข้าออกทางจมูกอย่างช้าๆ และเงียบเชียบ หลีกเลี่ยงการกลั้นหายใจยาวนาน",
      "acc-summary-2": "การรับมือกับความเครียดจากจุดตัดสินใจงาน",
      "acc-desc-2": "ตัดสัญญาณความสัมพันธ์ระหว่างจุดตึงเครียดกับสารนิโคติน:",
      "acc-2-li-1": "<strong>เดินเลี่ยงออกไป:</strong> เดินเลี่ยงออกไปข้างนอกสัก 2 นาที เช่น ไปเช็คงานหรือโทรศัพท์ เพื่อเปลี่ยนสภาพแวดล้อมและตัดตัวกระตุ้นทันที",
      "acc-2-li-2": "<strong>ถอนหายใจทางสรีรวิทยา:</strong> หายใจเข้าทางจมูกสั้นๆ สองครั้ง ตามด้วยการผ่อนลมหายใจออกทางปากช้าๆ ช่วยลดการทำงานของประสาทอัตโนมัติทันที",
      "acc-2-li-3": "<strong>ใช้ทักษะเขียนจดบันทึก:</strong> หันไปจดบันทึกหรือจัดเอกสารบนโต๊ะ เพื่อระบายพลังงานกระวนกระวายของนิ้วมือแทนการจับบุหรี่",
      "acc-summary-3": "การจัดการความอยากระหว่างเดินทางเช้า-เย็น",
      "acc-desc-3": "ปรับเปลี่ยนพฤติกรรมในรถยนต์หรือยานพาหนะเพื่อตัดสิ่งเร้า:",
      "acc-3-li-1": "<strong>ใช้สิ่งทดแทนทางพฤติกรรม:</strong> พกไม้จิ้มฟัน ลูกอมมิ้นต์ หรือยาอมปราศจากน้ำตาลไว้ที่คอนโซลรถ",
      "acc-3-li-2": "<strong>ทำความสะอาดห้องโดยสาร:</strong> นำที่เขี่ยบุหรี่ ไฟแช็ก หรือคราบเขม่าในรถออกให้หมด และใช้น้ำมันหอมระเหยกลิ่นสดชื่นแทน",
      "acc-3-li-3": "<strong>กระตุ้นเสียงและสมอง:</strong> ร้องเพลงตามวิทยุหรือเปิดหนังสือเสียง เพื่อให้ระบบเสียงและสมองตื่นตัวมีกิจกรรมทำ",
      "support-subtitle": "บริการสนับสนุนโดยผู้เชี่ยวชาญ",
      "support-title": "การให้คำปรึกษาเพื่อเลิกบุหรี่อย่างเป็นความลับ",
      "chat-title": "แชทสดเข้ารหัสความปลอดภัย",
      "chat-status": "พร้อมให้บริการ",
      "chat-secure": "ตรวจสอบการเชื่อมต่อที่ปลอดภัย E2E แล้ว | รอคิว: ~0 นาที",
      "chat-send": "ส่ง",
      "chat-cta-create-plan": "✨ สร้างแผนการเลิกบุหรี่ของฉัน",
      "contact-phone-label": "สายด่วนเลิกบุหรี่",
      "contact-phone-val": "1600 (โทรฟรี) / 02-590-1000",
      "contact-line-label": "LINE Official Account",
      "contact-address-label": "ที่อยู่อาคารสำนักงาน",
      "contact-address-val": "อาคารกระทรวงสาธารณสุข นนทบุรี ประเทศไทย",
      "chat-disclaimer": "จะไม่มีการบันทึกประวัติบนอุปกรณ์เครื่องนี้ บทสนทนาทั้งหมดจะถูกลบออกทันทีที่ปิดแท็บหรือกดออกจากหน้าเว็บผ่านปุ่ม ESC",
      "call-title": "นัดหมายการโทรส่วนตัว",
      "call-badge": "ตัวเลือกโทรปกปิดตัวตน",
      "call-date-label": "เลือกวันที่นัดหมายโทรกลับ",
      "call-time-label": "เลือกเวลาที่ต้องการให้นัดหมายโทรกลับ",
      "call-phone-label": "เบอร์โทรศัพท์ติดต่อโดยตรง *",
      "call-error": "❌ ต้องระบุเบอร์โทรศัพท์เพื่อใช้ในการนัดหมาย",
      "call-intro-label": "รูปแบบการแจ้งเรื่องเมื่อโทรกลับ",
      "opt-neutral": "แจ้งเรื่องสอบถามข้อมูลทั่วไป (ที่เป็นกลาง)",
      "opt-custom": "แจ้งว่าติดต่อเรื่อง...",
      "custom-topic-label": "หัวข้อการโทรแบบกำหนดเอง",
      "opt-custom-placeholder": "ตัวอย่าง: ติดตามงานปรึกษาแผนงานบริษัท",
      "call-submit-btn": "จองนัดหมายการโทรกลับ",
      "footer-copyright": "© 2026 Quitline1600 Initiative. แนวทางปฏิบัติทั้งหมดอิงตามเกณฑ์ทางวิทยาศาสตร์และหลักฐานทางการแพทย์ที่ได้รับการพิสูจน์แล้ว",
      "footer-disclaimer": "ข้อมูลทั้งหมดถูกจัดเก็บในเครื่องเบราว์เซอร์ของคุณผ่าน localStorage ระบบไม่เก็บประวัติบันทึกบนเซิร์ฟเวอร์",
      "privacy-link": "โปรโตคอลความเป็นส่วนตัว",
      "cdc-link": "แนวทางปฏิบัติ CDC",
      "who-link": "บริการเลิกบุหรี่ WHO",
      "purge-btn": "ล้างการตั้งค่าเซสชัน",
      "modal-success-title": "ลงทะเบียนนัดหมายโทรกลับเรียบร้อยแล้ว",
      "modal-success-body": "การนัดหมายของคุณได้รับการบันทึกแล้ว เจ้าหน้าที่จะติดต่อคุณตามช่วงเวลาที่ระบุ<br/><br/><strong>หมายเหตุความปลอดภัย:</strong> หมายเลขที่โทรเข้าจะแสดงเป็น \"Unknown Number\" (ไม่แสดงเบอร์) และเจ้าหน้าที่จะดำเนินการสนทนาตามหัวข้อแนะนำสายที่คุณระบุเพื่อความเป็นส่วนตัวสูงสุด",
      "modal-success-ok": "รับทราบ",
      "modal-purge-title": "ต้องการล้างข้อมูลทั้งหมดในเครื่องใช่หรือไม่?",
      "modal-purge-body": "การดำเนินการนี้จะลบข้อมูลแผนการเลิกบุหรี่ ค่าคำนวณทั้งหมด รวมถึงประวัติการแชทในเครื่องเบราว์เซอร์นี้โดยถาวร และไม่สามารถกู้คืนได้",
      "modal-purge-cancel": "ยกเลิก",
      "modal-purge-confirm": "ยืนยันการล้างข้อมูล",
      "modal-privacy-title": "โปรโตคอลความเป็นส่วนตัว Quitline1600",
      "modal-privacy-body": "เพื่อปกป้องชื่อเสียงทางวิชาชีพและธุรกิจของคุณ:<br/><br/>1. <strong>จัดเก็บในเครื่องเท่านั้น:</strong> การคำนวณและค่าระดับสไลเดอร์จะถูกจัดเก็บไว้บนบราวเซอร์เครื่องนี้ผ่าน localStorage เท่านั้น ไม่มีการส่งออกไปยังฐานข้อมูลภายนอกใดๆ<br/>2. <strong>แชทเข้ารหัส E2E:</strong> บทสนทนาการแชทสดจะถูกเข้ารหัสระหว่างทางและลบทิ้งทันทีหลังปิดเบราว์เซอร์<br/>3. <strong>ปกปิดตัวตนเมื่อติดต่อกลับ:</strong> ทีมงานของเราปฏิบัติตามมาตรฐานอย่างเคร่งครัด โดยจะไม่ระบุชื่อ \"Quitline1600\" ให้เลขาฯ เพื่อนร่วมงาน หรือครอบครัวที่รับสายแทนคุณทราบเป็นอันขาด",
      "modal-privacy-close": "ปิดการรับทราบ"
    }
  };

  let activeLang = "en"; // Default

  // Function to translate all elements with data-i18n
  const setLanguage = (lang) => {
    activeLang = lang;
    safeStorage.setItem("quitline1600_lang", lang);

    // Sync button UI active states
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // Translate DOM nodes matching catalog keys
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      const translation = TRANSLATIONS[lang][key];
      if (translation) {
        if (translation.includes("<") && translation.includes(">")) {
          el.innerHTML = translation;
        } else {
          el.textContent = translation;
        }
      }
    });

    // Translate input placeholders matching catalog keys
    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const translation = TRANSLATIONS[lang][key];
      if (translation) {
        el.placeholder = translation;
      }
    });

    // Update dynamic calculations labels (Baht ฿ vs Dollar $)
    updateCalculations();

    // Re-initialize breathing loop labels to prevent mismatching text
    if (!isBreathingActive) {
      instructionText.textContent = TRANSLATIONS[lang]["breathing-guide-idle"];
    } else {
      instructionText.textContent = PHASES[activeLang][currentPhaseIndex].text;
    }

    // Refresh Chat History Welcome message to keep language aligned
    initChatWelcome();

    // Update form select labels which may require translation refresh
    updateFormSelectPlaceholder();

    // Adjust specific page attributes (e.g. lang tag)
    document.documentElement.setAttribute("lang", lang);
  };


  /* ==========================================
     2. GLOBAL ESCAPE INTERCEPT & QUICK EXIT
     ========================================== */
  const quickExit = () => {
    window.location.replace("https://www.google.com");
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      quickExit();
    }
  });

  const exitBtn = document.getElementById("quick-exit-btn");
  if (exitBtn) {
    exitBtn.addEventListener("click", quickExit);
  }


  /* ==========================================
     3. PLAN BUILDER INPUTS & RECOVERY METRICS
     ========================================== */
  const quitDateInput = document.getElementById("quit-date-input");
  const stressSelect = document.getElementById("stress-level-select");
  const callDatePicker = document.getElementById("call-date-picker");

  const lifeGainedEl = document.getElementById("life-gained");
  const oxygenRecoveryEl = document.getElementById("oxygen-recovery");
  const stressResilienceEl = document.getElementById("stress-resilience");

  // Set default dates if not already set
  const today = new Date();
  const targetDefault = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const tomorrowDefault = new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000);

  if (quitDateInput && !quitDateInput.value) {
    quitDateInput.value = targetDefault.toISOString().split('T')[0];
  }
  if (callDatePicker && !callDatePicker.value) {
    callDatePicker.value = tomorrowDefault.toISOString().split('T')[0];
  }

  const updateCalculations = () => {
    if (!lifeGainedEl) return;

    const dayLabel = activeLang === "th" ? " วัน/ปี" : " days / yr";

    let daysGained = 55;
    let oxygenStatus = activeLang === "th" ? "ฟื้นฟูใน 24 ชม." : "24h Normalization";
    let resilienceStatus = activeLang === "th" ? "ระดับโฟกัสดีเยี่ยม" : "Optimal Focus";

    const stressVal = stressSelect ? stressSelect.value : "moderate";
    if (stressVal === "high") {
      daysGained = 65;
      resilienceStatus = activeLang === "th" ? "เกราะป้องกันระดับบริหาร" : "Executive Shield";
    } else if (stressVal === "low") {
      daysGained = 48;
      resilienceStatus = activeLang === "th" ? "ความเสถียรมาตรฐาน" : "Steady Focus";
    }

    lifeGainedEl.textContent = `+${daysGained}${dayLabel}`;
    if (oxygenRecoveryEl) oxygenRecoveryEl.textContent = oxygenStatus;
    if (stressResilienceEl) stressResilienceEl.textContent = resilienceStatus;

    if (quitDateInput) safeStorage.setItem("quitline1600_quit_date", quitDateInput.value);
    if (stressSelect) safeStorage.setItem("quitline1600_stress", stressSelect.value);
  };

  if (quitDateInput) quitDateInput.addEventListener("change", updateCalculations);
  if (stressSelect) stressSelect.addEventListener("change", updateCalculations);

  updateCalculations();

  // Simulated Masked PDF Download
  const downloadBtn = document.getElementById("download-plan-btn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const headerEN = "QUITLINE1600 PROFESSIONAL CESSATION PERFORMANCE STRATEGY";
      const headerTH = "แผนงานดูแลสุขภาพปอดและปรับแต่งสรีระร่างกาย QUITLINE1600";
      const selectedDate = quitDateInput ? quitDateInput.value : targetDefault.toISOString().split('T')[0];
      const selectedStress = stressSelect ? stressSelect.options[stressSelect.selectedIndex].text : "Moderate";
      const oxygenVal = oxygenRecoveryEl ? oxygenRecoveryEl.textContent : "24h Normalization";
      const resilienceVal = stressResilienceEl ? stressResilienceEl.textContent : "Optimal Focus";
      
      const content = `${activeLang === 'th' ? headerTH : headerEN}\n` +
                      `============================================================\n\n` +
                      `${activeLang === 'th' ? 'ข้อมูลสรุปการตั้งค่าแผนงาน:' : 'Plan Parameters Profile:'}\n` +
                      `- ${activeLang === 'th' ? 'วันที่ตั้งเป้าหมายเริ่มต้น' : 'Target Quit Date'}: ${selectedDate}\n` +
                      `- ${activeLang === 'th' ? 'ระดับความตึงเครียดการทำงาน' : 'Work Environment Stress Level'}: ${selectedStress}\n\n` +
                      `${activeLang === 'th' ? 'อายุขัยที่ฟื้นฟูต่อปี' : 'Estimated Life Recovered per year'}: ${lifeGainedEl ? lifeGainedEl.textContent : '+55 days / yr'}\n` +
                      `${activeLang === 'th' ? 'ระดับการฟื้นฟูออกซิเจนและหมุนเวียนเลือด' : 'Oxygen & Circulation Recovery'}: ${oxygenVal}\n` +
                      `${activeLang === 'th' ? 'ความทนทานต่อความเครียดระดับบริหาร' : 'Executive Stress Resilience'}: ${resilienceVal}\n\n` +
                      `${activeLang === 'th' ? 'แผนการเลิกบุหรี่นี้ถูกสร้างขึ้นอย่างเป็นส่วนตัวโดยเบราว์เซอร์ของคุณ' : 'This strategy is generated locally by Quitline1600. Stay optimized.'}`;
      
      const blob = new Blob([content], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Quitline1600_Performance_Strategy.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }


  /* ==========================================
     4. 30-SECOND CRAVING BUSTER (BREATHING TOOL)
     ========================================== */
  const breatheStartBtn = document.getElementById("breathing-start-btn");
  const breathingBox = document.querySelector(".breathing-box");
  const timerNum = document.getElementById("timer-number");
  const instructionText = document.getElementById("breathing-instruction");
  
  let breathingInterval = null;
  let isBreathingActive = false;
  
  const PHASES = {
    en: [
      { text: "Inhale slowly...", class: "pill-1", duration: 4 },
      { text: "Hold your breath...", class: "pill-2", duration: 4 },
      { text: "Exhale gently...", class: "pill-3", duration: 4 },
      { text: "Hold empty...", class: "pill-4", duration: 4 }
    ],
    th: [
      { text: "หายใจเข้าช้าๆ...", class: "pill-1", duration: 4 },
      { text: "กลั้นหายใจ...", class: "pill-2", duration: 4 },
      { text: "หายใจออกช้าๆ...", class: "pill-3", duration: 4 },
      { text: "กลั้นหายใจขณะปอดว่าง...", class: "pill-4", duration: 4 }
    ]
  };
  
  let currentPhaseIndex = 0;
  let secondsRemaining = 0;

  const updateBreathingUI = () => {
    const currentPhase = PHASES[activeLang][currentPhaseIndex];
    instructionText.textContent = currentPhase.text;
    timerNum.textContent = secondsRemaining;
    
    document.querySelectorAll(".breathing-pill").forEach(p => p.classList.remove("active"));
    const activePill = document.getElementById(currentPhase.class);
    if (activePill) activePill.classList.add("active");
  };

  const runBreathingCycle = () => {
    if (secondsRemaining > 1) {
      secondsRemaining--;
      timerNum.textContent = secondsRemaining;
    } else {
      currentPhaseIndex = (currentPhaseIndex + 1) % PHASES[activeLang].length;
      secondsRemaining = PHASES[activeLang][currentPhaseIndex].duration;
      updateBreathingUI();
    }
  };

  const startBreathing = () => {
    isBreathingActive = true;
    currentPhaseIndex = 0;
    secondsRemaining = PHASES[activeLang][0].duration;
    
    breathingBox.classList.add("breathing-active");
    breatheStartBtn.textContent = TRANSLATIONS[activeLang]["breathing-stop-btn"];
    breatheStartBtn.classList.remove("btn-secondary");
    breatheStartBtn.classList.add("btn-danger");
    
    updateBreathingUI();
    breathingInterval = setInterval(runBreathingCycle, 1000);
  };

  const stopBreathing = () => {
    isBreathingActive = false;
    clearInterval(breathingInterval);
    
    breathingBox.classList.remove("breathing-active");
    breatheStartBtn.textContent = TRANSLATIONS[activeLang]["breathing-start-btn"];
    breatheStartBtn.classList.remove("btn-danger");
    breatheStartBtn.classList.add("btn-secondary");
    
    timerNum.textContent = "--";
    instructionText.textContent = TRANSLATIONS[activeLang]["breathing-guide-idle"];
    document.querySelectorAll(".breathing-pill").forEach(p => p.classList.remove("active"));
  };

  if (breatheStartBtn) {
    breatheStartBtn.addEventListener("click", () => {
      if (isBreathingActive) {
        stopBreathing();
      } else {
        startBreathing();
      }
    });
  }


  /* ==========================================
     5. ANONYMOUS CHAT SIMULATOR
     ========================================== */
  const chatHistory = document.getElementById("chat-history-list");
  const chatInput = document.getElementById("chat-user-input");
  const chatSendBtn = document.getElementById("chat-send-btn");

  const simulatedResponses = {
    en: [
      "Understood. Preparing to quit is an important step. Physiological detoxification begins 20 minutes after your last cigarette.",
      "For craving peaks during meetings, NRT gum or discrete deep-sigh breathing works effectively. The physical urge will dissipate within 3 minutes.",
      "Setting a specific date helps frame your progress. It is advisable to choose a lower-stress day next week to finalize your plan.",
      "Our callbacks use caller-id masking automatically. We will introduce ourselves as corporate consult calls to safeguard your privacy."
    ],
    th: [
      "รับทราบครับ การเตรียมตัวเลิกบุหรี่เป็นขั้นตอนที่สำคัญมาก ระบบขับสารพิษตามสรีรวิทยาจะเริ่มทำงานภายใน 20 นาทีหลังมวนสุดท้าย",
      "สำหรับจุดตึงเครียดที่มีอาการอยากระหว่างการประชุม การใช้หมากฝรั่งนิโคตินทดแทนหรือการถอนหายใจช้าๆ จะช่วยระงับความอยากทางกายภาพลงใน 3 นาที",
      "การเลือกวันที่เป้าหมายอย่างเจาะจงจะช่วยเพิ่มประสิทธิภาพได้ครับ ขอแนะนำให้เลือกวันทำงานทั่วไปที่ไม่ตึงเครียดมากนักเพื่อเริ่มต้นแผนการของคุณ",
      "ระบบโทรกลับของเราจะปกปิดหมายเลขต้นสายอัตโนมัติ โดยเจ้าหน้าที่จะระบุเป็นการโทรเรื่องธุรกิจตามนัดหมายที่ตั้งค่าไว้เพื่อความปลอดภัยครับ"
    ]
  };
  let responseIndex = 0;

  const appendChatMessage = (text, isUser = false) => {
    const msg = document.createElement("div");
    msg.classList.add("chat-msg", isUser ? "msg-user" : "msg-agent");
    msg.textContent = text;
    chatHistory.appendChild(msg);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  };

  const initChatWelcome = () => {
    chatHistory.innerHTML = "";
    const welcomeText = activeLang === "th" ? 
      "สวัสดีครับ ยินดีต้อนรับสู่บริการ Quitline1600 Support ขณะนี้คุณกำลังอยู่ในโหมดผู้ใช้ทั่วไปที่ปกปิดตัวตน 100% มีข้อมูลส่วนใดที่เราสามารถช่วยเหลือคุณได้ในวันนี้ครับ?" :
      "Hello. Welcome to Quitline1600 support. You are currently in 100% anonymous guest mode. How can we assist your cessation plan today?";
    appendChatMessage(welcomeText, false);
    
    chatInput.placeholder = activeLang === "th" ? "พิมพ์ข้อความพูดคุยอย่างเป็นส่วนตัว..." : "Type a message privately...";
  };

  const handleSendMessage = () => {
    const text = chatInput.value.trim();
    if (!text) return;

    appendChatMessage(text, true);
    chatInput.value = "";

    setTimeout(() => {
      const activeResponses = simulatedResponses[activeLang];
      const response = activeResponses[responseIndex];
      responseIndex = (responseIndex + 1) % activeResponses.length;
      appendChatMessage(response, false);
    }, 1200);
  };

  const promptPlanBtn = document.getElementById("chat-prompt-plan");
  if (promptPlanBtn) {
    promptPlanBtn.addEventListener("click", () => {
      const userText = activeLang === "th" ? "✨ สร้างแผนการเลิกบุหรี่ของฉัน" : "✨ Create My Quit Plan";
      appendChatMessage(userText, true);
      setTimeout(() => {
        const planReply = activeLang === "th" ?
          "ระบบยินดีช่วยคุณจัดทำแผนการเลิกบุหรี่ส่วนบุคคลครับ!\n\nขั้นตอนที่ 1: กำหนดวันเริ่มต้นเลิกบุหรี่\nขั้นตอนที่ 2: เลือกวิธีปรับลดนิโคติน (หักดิบ / นิโคตินทดแทน)\nขั้นตอนที่ 3: ตั้งค่าแผนรับมือจุดตึงเครียด\n\nคุณต้องการตั้งวันเริ่มต้นเลิกบุหรี่เป็นวันจันทร์หน้า หรือสุดสัปดาห์นี้ดีครับ?" :
          "I will help you create a custom, step-by-step quit plan!\n\nStep 1: Set your target Quit Date\nStep 2: Choose your Nicotine Strategy (Cold-turkey or NRT)\nStep 3: Define coping triggers\n\nWould you like to set your Quit Date for next Monday or this coming weekend?";
        appendChatMessage(planReply, false);
      }, 1000);
    });
  }

  if (chatSendBtn && chatInput) {
    chatSendBtn.addEventListener("click", handleSendMessage);
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        handleSendMessage();
      }
    });
  }

  initChatWelcome();


  /* ==========================================
     6. SECURE CALENDAR BOOKING FORM
     ========================================== */
  const bookingForm = document.getElementById("booking-form");
  const phoneInput = document.getElementById("phone-number");
  const callTimePicker = document.getElementById("call-time-picker");
  const successDialog = document.getElementById("booking-success-dialog");
  const introSelect = document.getElementById("intro-select");
  const customTopicWrapper = document.getElementById("custom-topic-wrapper");

  if (callTimePicker && !callTimePicker.value) {
    callTimePicker.value = "14:00";
  }

  const updateFormSelectPlaceholder = () => {
    if (phoneInput) {
      phoneInput.placeholder = activeLang === "th" ? "ตัวอย่าง +66 81 234 5678" : "e.g. +1 (555) 019-2834";
    }
  };

  const syncIntroCustomInputVisibility = () => {
    if (introSelect && customTopicWrapper) {
      customTopicWrapper.style.display = introSelect.value === "custom" ? "block" : "none";
    }
  };

  if (introSelect) {
    syncIntroCustomInputVisibility();
    introSelect.addEventListener("change", syncIntroCustomInputVisibility);
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const isPhoneValid = phoneInput.checkValidity();
      
      if (isPhoneValid) {
        if (successDialog && typeof successDialog.showModal === "function") {
          successDialog.showModal();
        } else {
          alert(activeLang === "th" ? "บันทึกคิวนัดหมายโทรกลับเรียบร้อยแล้ว" : "Callback scheduled privately. Check your device shortly.");
        }
      } else {
        phoneInput.focus();
        phoneInput.blur();
      }
    });
  }


  /* ==========================================
     7. DECLARATIVE OVERLAY LINKS & DIALOGS
     ========================================== */
  if (!('commandForElement' in HTMLButtonElement.prototype)) {
    document.addEventListener("click", (e) => {
      const button = e.target.closest("button[commandfor]");
      if (!button) return;

      const targetId = button.getAttribute("commandfor");
      const dialog = document.getElementById(targetId);
      const command = button.getAttribute("command");

      if (dialog && command) {
        if (command === "show-modal" && typeof dialog.showModal === "function") {
          dialog.showModal();
        } else if (command === "close" && typeof dialog.close === "function") {
          dialog.close();
        }
      }
    });
  }

  const privacyLink = document.getElementById("privacy-policy-link");
  const privacyDialog = document.getElementById("privacy-info-dialog");
  
  if (privacyLink && privacyDialog) {
    privacyLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof privacyDialog.showModal === "function") {
        privacyDialog.showModal();
      }
    });
  }


  /* ==========================================
     8. DATA PURGER SYSTEM
     ========================================== */
  const purgeBtn = document.getElementById("purge-data-btn");
  const purgeConfirmDialog = document.getElementById("purge-confirm-dialog");
  const confirmPurgeBtn = document.getElementById("confirm-purge-btn");

  if (purgeBtn && purgeConfirmDialog) {
    purgeBtn.addEventListener("click", () => {
      if (typeof purgeConfirmDialog.showModal === "function") {
        purgeConfirmDialog.showModal();
      }
    });
  }

  if (confirmPurgeBtn) {
    confirmPurgeBtn.addEventListener("click", () => {
      safeStorage.clear();
      
      if (purgeConfirmDialog && typeof purgeConfirmDialog.close === "function") {
        purgeConfirmDialog.close();
      }

      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  }


  /* ==========================================
     9. VISUAL THEME TOGGLE (🌗)
     ========================================== */
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  
  const loadSavedTheme = () => {
    const savedTheme = safeStorage.getItem("quitline1600_theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
    } else if (!savedTheme && window.matchMedia("(prefers-color-scheme: light)").matches) {
      document.body.classList.add("light-theme");
    }
  };

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");
      safeStorage.setItem("quitline1600_theme", isLight ? "light" : "dark");
    });
  }

  loadSavedTheme();


  /* ==========================================
     10. LANGUAGE BUTTON BINDINGS & STARTUP
     ========================================== */
  const langEnBtn = document.getElementById("lang-en");
  const langThBtn = document.getElementById("lang-th");

  if (langEnBtn && langThBtn) {
    langEnBtn.addEventListener("click", () => setLanguage("en"));
    langThBtn.addEventListener("click", () => setLanguage("th"));
  }

  const loadSavedLanguage = () => {
    const savedLang = safeStorage.getItem("quitline1600_lang");
    if (savedLang === "th") {
      setLanguage("th");
    } else if (savedLang === "en") {
      setLanguage("en");
    } else {
      const userLang = navigator.language || navigator.userLanguage;
      if (userLang.startsWith("th")) {
        setLanguage("th");
      } else {
        setLanguage("en");
      }
    }
  };

  loadSavedLanguage();
  loadCachedParameters();

  /* ==========================================
     11. INTERACTIVE SCROLL GRADIENT MESH CONTROLLER
     ========================================== */
  let scrollTicking = false;

  const updateScrollGradientMesh = () => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );
    const scrollRatio = Math.min(Math.max(scrollY / maxScroll, 0), 1);

    document.documentElement.style.setProperty('--scroll-y', `${scrollY.toFixed(1)}px`);
    document.documentElement.style.setProperty('--scroll-ratio', scrollRatio.toFixed(4));
    scrollTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateScrollGradientMesh);
      scrollTicking = true;
    }
  }, { passive: true });

  updateScrollGradientMesh();
});