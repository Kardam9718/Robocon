# WhatsApp Dental Clinic Chatbot System — Complete No-Code Guide

> **Zero-cost | No backend | No WhatsApp API | Ready in 1 day**
> Designed for Indian dental clinics. Staff language: Hinglish + English.

---

## 1) SYSTEM OVERVIEW (NO-CODE ARCHITECTURE)

### How It Works (Plain English)

This is a **pseudo-chatbot** — it looks and feels like a chatbot to patients, but it is powered by WhatsApp Business app features + Google tools + smart staff SOPs. No coding, no server, no paid subscriptions.

```
Patient sends WhatsApp message
        ↓
Auto Greeting fires (WhatsApp Business auto-reply)
        ↓
Patient reads Menu → replies with number (1/2/3/4/5)
        ↓
Staff uses Quick Reply (pre-saved scripts) to respond in seconds
        ↓
Staff sends Google Form link to capture lead details
        ↓
Form fills Google Sheet (acts as mini-CRM)
        ↓
Staff books appointment & sends confirmation
        ↓
Reminder sent 1 day before + follow-up after visit
```

### Tool Roles

| Free Tool | Role in System |
|---|---|
| **WhatsApp Business App** | Main patient-facing interface: greeting, away msg, quick replies, labels, catalog |
| **Google Forms** | Structured patient intake form (replaces chatbot data collection) |
| **Google Sheets** | Auto-collects form data; acts as CRM/dashboard for staff |
| **Google Calendar** | (Optional) Staff blocks appointment slots; reduces double-booking |
| **Manual SOP + Templates** | Staff copy-pastes from cheat sheet; simulates "AI" responses |

### What Is Automated vs Manual

| ✅ AUTOMATED (Zero effort) | 🔧 MANUAL (Staff does it) |
|---|---|
| Greeting message on first contact | Reading patient replies and selecting quick reply |
| Away message outside business hours | Sending form link |
| Typing Indicators (manual delay trick) | Booking in calendar |
| Form data → Sheet auto-capture | Labeling chats |
| Confirmation email from Google Forms | Sending appointment reminders |

---

## 2) WHATSAPP BUSINESS COMPLETE SETUP

### Business Profile Checklist

- [ ] Business name: `[Clinic Name] Dental Clinic`
- [ ] Category: `Health/Medical`
- [ ] Description: `Expert dental care — appointments, treatments, and emergencies. WhatsApp karo, hum help karenge! 😊`
- [ ] Address: Full address with Google Maps pin link
- [ ] Business hours: Set exact hours (e.g., Mon–Sat 9 AM – 7 PM)
- [ ] Email: Clinic email ID
- [ ] Website: Google Maps link or clinic website (if any)
- [ ] Profile photo: Clinic logo or dentist photo
- [ ] Catalog: Add 4–5 treatment packages (see Catalog section)

### Greeting Message (Auto-Reply on First Contact)

> Enable: **Settings → Business Tools → Greeting Message → Toggle ON**

```
Namaste! 🙏 [Clinic Name] mein aapka swagat hai!

Aap WhatsApp pe aa gaye — hum yahan hain aapki help ke liye! 😊

Neeche wale menu se apna option choose karein — just number type karein:

1️⃣ Appointment book karna hai
2️⃣ Treatment ki price jaanni hai
3️⃣ Clinic address / timings
4️⃣ Emergency / dard bahut zyada hai
5️⃣ Staff se seedha baat karni hai

Reply karein: 1, 2, 3, 4 ya 5 👇
```

### Away Message (Outside Business Hours)

> Enable: **Settings → Business Tools → Away Message → Schedule**

```
Namaste! 🙏 Abhi clinic band hai.

Humare working hours hain:
🕘 Mon–Sat: 9:00 AM – 7:00 PM
🚫 Sunday: Band

Aapka message mil gaya hai — kal subah 9 baje tak reply milega.

🚨 Emergency ke liye: Dr. [Name] — 📞 [Emergency Number]

Tab tak, apni problem describe karke chod dein — hum jaldi se jaldi respond karenge! 💙
```

### 10 Quick Replies (Slash Format)

> Add via: **Settings → Business Tools → Quick Replies → Add (+)**

| Shortcut | Message |
|---|---|
| `/menu` | Namaste! 😊 Aap kya jaanna chahte hain? Reply karein 1-5:\n1️⃣ Appointment\n2️⃣ Price\n3️⃣ Address/Timing\n4️⃣ Emergency\n5️⃣ Staff se baat |
| `/book` | Appointment book karne ke liye yeh form fill karein 👇\n🔗 [FORM LINK]\nForm fill hote hi hum confirm karenge! ✅ |
| `/price` | Hamare popular treatments ki approximate price:\n🦷 Cleaning: ₹500–800\n🔧 Filling: ₹800–1500\n👑 Crown: ₹4000–8000\n🏥 RCT: ₹3000–6000\n😁 Braces: ₹15,000 se shuru\n\nExact price ke liye appointment lein. |
| `/address` | 📍 Hum yahan hain:\n[Full Address]\n\n🗺️ Google Maps: [Maps Link]\n⏰ Timings: Mon–Sat 9 AM – 7 PM\n📞 Call: [Phone] |
| `/emergency` | 🚨 EMERGENCY HELP\n\nAgar dard bahut zyada hai:\n1. Cold compress lagaein (cloth mein ice)\n2. Kuch khane-peene se bachein abhi\n3. Dr. [Name] ko call karein: 📞 [Emergency No.]\n\n⚠️ Yeh medical advice nahi hai. Please turant doctor ko call karein. |
| `/form` | Apni details share karein taaki hum better help kar sakein 😊\n🔗 [FORM SHORT LINK]\n(Official clinic form — aapki info safe hai 🔒)\nForm fill hone ke baad 1 ghante mein call/message aayega! |
| `/confirm` | ✅ Aapka appointment confirm ho gaya!\n\n📅 Date: [DATE]\n⏰ Time: [TIME]\n📍 [Clinic Name], [Address]\n\nKuch change karna ho toh batayein. Reminder 1 din pehle aayega! 😊 |
| `/remind` | 🔔 Reminder: Kal aapka appointment hai!\n\n📅 [DATE] ⏰ [TIME]\n📍 [CLINIC ADDRESS]\n\nPlease 10 min pehle aayen. Koi doubt ho toh batayein! 😊 |
| `/followup` | Namaste [Name]! 😊 Aapki visit ke baad kaisa feel ho raha hai?\n\nAgar koi problem hai toh zaroor batayein. Hum yahan hain!\n\nAgle checkup ke liye: /book type karein. |
| `/thanks` | Bahut shukriya [Name]! 🙏 Aapne humein choose kiya — yeh hamare liye bahut valuable hai.\n\nAgar family/friends ko dental help chahiye toh unhe bhi bataein! 😊\n\nGoogle Review dein: [REVIEW LINK] ⭐ |

### Labels / Tags Setup

> Add via: **Chat → Hold on message → Label**

| Label Name | Color | When to Use |
|---|---|---|
| 🔵 New Lead | Blue | First contact, not yet responded |
| 🔴 Hot Lead | Red | Replied, interested, needs quick follow-up |
| 🟡 Form Sent | Yellow | Form link sent, waiting for fill |
| 🟢 Booked | Green | Appointment confirmed |
| 🟣 Follow-up | Purple | Post-visit follow-up needed |
| ⚫ Done | Grey | Case closed, no further action |
| 🟠 Emergency | Orange | Urgent pain/emergency case |

### Catalog Setup (Treatment Packages)

> Add via: **Settings → Business Tools → Catalog**

Add these 5 items:

| Item | Price | Description |
|---|---|---|
| Basic Dental Checkup | ₹200 | Full mouth exam + X-ray consultation |
| Teeth Cleaning (Scaling) | ₹500–800 | Professional cleaning, removes plaque/tartar |
| Tooth Filling | ₹800–1,500 | White/composite filling for cavities |
| Root Canal Treatment | ₹3,000–6,000 | Complete RCT with crown |
| Smile Makeover Package | ₹25,000 onwards | Whitening + Veneers + Reshaping |

Share catalog via: Type `/catalog` in chat and send product link.

### Business Hours Setup

> **Settings → Business Tools → Business Hours → Specific Hours**

- Monday to Saturday: 9:00 AM – 7:00 PM
- Sunday: Closed
- Away message: Enabled outside these hours

---

## 3) CHATBOT-LIKE CONVERSATION FLOW (MENU-DRIVEN)

### Entry Message (Triggered by Greeting Auto-Reply)

```
Namaste! 🙏 [Clinic Name] mein aapka swagat hai!

Main aapki help karne ke liye yahan hoon. Neeche se option choose karein:

1️⃣  Appointment book karna hai
2️⃣  Treatment ki price jaanni hai
3️⃣  Clinic ka address / timings
4️⃣  Emergency — dard bahut zyada hai
5️⃣  Staff se seedha baat karni hai

Bas number type karein (1, 2, 3, 4 ya 5) 👇
```

---

### BRANCH 1 — Appointment Booking

**Patient types:** `1`

**Staff sends (Quick Reply `/book`):**
```
Zaroor! 😊 Appointment book karne ke liye pehle thodi si details chahiye.

Kya aap yeh chhota sa form fill kar sakte hain?
🔗 [FORM SHORT LINK]

Form fill hote hi 30–60 minutes mein hum aapko call/message karenge aur slot confirm karenge! ✅

(Form fill karne mein sirf 2–3 minutes lagte hain 🙏)
```

**Patient fills form → Staff sees in Sheet → Staff calls or messages:**
```
Namaste [Name]! ✅

Aapki details mil gayi. Hum aapke liye yeh slot available kar sakte hain:

📅 Option 1: [Date] at [Time]
📅 Option 2: [Date] at [Time]

Kaunsa prefer karenge? Reply karein 1 ya 2 👇
```

**After patient confirms:**
```
✅ Confirmed! Aapka appointment book ho gaya!

📅 Date: [DATE]
⏰ Time: [TIME]
📍 [Clinic Name], [Address]
🚗 Parking available hai

Please 10 min pehle aayen. Agar change chahiye toh 12 ghante pehle batayein.

Reminder 1 din pehle milega! 😊
```

---

### BRANCH 2 — Treatment Pricing

**Patient types:** `2`

**Staff sends (Quick Reply `/price`):**
```
Hamare common treatments ki price guide 👇

🦷 Basic Checkup: ₹200
🧹 Teeth Cleaning: ₹500–800
🔧 Filling: ₹800–1,500
🏥 RCT (Root Canal): ₹3,000–6,000
👑 Crown: ₹4,000–8,000
😁 Braces (metal): ₹15,000 se shuru
✨ Whitening: ₹3,000–5,000

⚠️ Note: Final price examination ke baad hi confirm hoti hai.

Kisi specific treatment ke baare mein poochna chahte hain? Batayein!
Appointment ke liye type karein: 1
```

---

### BRANCH 3 — Clinic Address / Timing

**Patient types:** `3`

**Staff sends (Quick Reply `/address`):**
```
📍 Hum yahan hain:

[Clinic Full Name]
[Full Address Line 1]
[Area, City - PIN]

🗺️ Google Maps: [SHORT MAP LINK]

⏰ Working Hours:
Mon – Sat: 9:00 AM – 7:00 PM
Sunday: Band (Closed)

📞 Phone: [Clinic Number]
📧 Email: [Clinic Email]

Appointment ke liye: 1 type karein 😊
```

---

### BRANCH 4 — Emergency

**Patient types:** `4`

**Staff sends (Quick Reply `/emergency`):**
```
🚨 Emergency samajh aa gayi! Pehle yeh karein:

✅ Step 1: Dard ki jagah pe cold compress (ice pack in cloth) lagaein — 10 min ke liye
✅ Step 2: Kuch bhi khane-peene se bachein abhi
✅ Step 3: Dr. [Name] Emergency Line pe call karein: 📞 [EMERGENCY NUMBER]

📞 Dr. [Name] Emergency Line: [EMERGENCY NUMBER]
(Available 9 AM – 8 PM, Mon–Sat)

⚠️ DISCLAIMER: Yeh sirf general first-aid guidance hai — professional medical advice nahi hai. Kisi bhi medicine lene se pehle apne doctor se poochein. Please immediately dentist se milein ya call karein.

Kya aap call kar sakte hain abhi? Reply Y ya N 👇
```

**If patient replies Y:**
```
Dr. [Name] se abhi milo. Number hai: 📞 [EMERGENCY NUMBER]

Bata dein: Aapka naam, problem aur address — emergency visit arrange kar sakte hain.
```

**If patient replies N:**
```
Samajh gaye. Kya aap clinic aa sakte hain?

📍 Address: [Address]
⏰ Walk-in: Mon–Sat 9AM–7PM

Hum aapka wait karenge. Please jaldi aayen! 🙏
```

---

### BRANCH 5 — Talk to Human

**Patient types:** `5`

**Staff sends:**
```
Bilkul! Aapko hum personally help karenge. 😊

Kripya apna naam aur concern likhein — ek staff member abhi 5 minute mein reply karega.

[Staff takes over the conversation manually]
```

---

### Fallback Handling (Invalid Input)

```
Hmm, aapka reply samajh nahi aaya. 😅

Please sirf number type karein:

1️⃣ Appointment
2️⃣ Price
3️⃣ Address/Timing
4️⃣ Emergency
5️⃣ Staff se baat

Bas 1 se 5 ke beech koi number bhejein 👇
```

### Re-Engagement (Patient Stops Replying — After 2 Hours)

```
Namaste! 😊 Aapko aise hi chod nahi sakte!

Kya aapko koi help chahiye thi? Main yahan hoon!

Appointment ke liye: 1 type karein
Koi sawaal hai toh seedha likhen 👇
```

### Human Handoff Script

```
[INTERNAL NOTE — Staff only]
Jab patient "5" type kare ya frustrated lage:

1. Staff khud message karein: "Namaste [Name]! Main [Staff Name] bol raha/rahi hoon [Clinic] se. Aapki problem solve karne ke liye yahan hoon. Kya hua, bataiye?"
2. Chat label change karein: Hot Lead → Staff Handling
3. Puri baat karein, jab solve ho tab: Done label lagaein
4. Agar call zaruri ho: "Kya main aapko call kar sakta/sakti hoon? Hamare paas [NUMBER] pe call karo ya haan bolein toh main call karta/karti hoon."
```

---

## 4) LEAD CAPTURE FLOW (MANDATORY)

### What to Ask on WhatsApp (Quick Pre-Screening)

Ask these 2–3 questions **on WhatsApp** before sending the form:

**Question 1:** (After they reply with option 1 or any inquiry)
```
Pehle ek chhota sa sawaal — kis cheez mein help chahiye?

A) Dard / Pain
B) Cleaning / Checkup
C) Cosmetic (whitening, braces)
D) Kuch aur
```

**Question 2:** (After they answer)
```
Aur yeh aapke liye hai ya family member ke liye?
```

**Then send the form:**
```
Great! Ab yeh 2-minute form fill karein taaki hum aapko best slot de sakein:
🔗 [FORM LINK]
```

### What Goes in the Google Form (Detailed Intake)

The form captures everything that would take too long on WhatsApp:

| Question | WhatsApp or Form |
|---|---|
| Patient Name | Form (required) |
| Age | Form (required) |
| Phone Number (confirm) | Form (required) |
| Main Problem/Concern | WhatsApp (pre-screen) + Form (detailed) |
| Pain Severity (1–10) | Form (slider/dropdown) |
| Preferred Date | Form (date picker) |
| Preferred Time Slot | Form (dropdown) |
| New or Existing Patient | Form (MCQ) |
| Medical Conditions | Form (checkboxes) |
| Referring Doctor/Source | Form (optional) |

---

## 5) GOOGLE FORM + SHEET INTEGRATION

### Form Title: `[Clinic Name] — Patient Appointment Request`

### Form Description:
```
Apni details share karein — hum 30–60 minutes mein aapko confirm karenge! 😊
Aapki information safe aur confidential hai. 🔒
```

### Sections & Fields

**Section 1: Personal Details**

| Field | Type | Validation |
|---|---|---|
| Full Name | Short Answer | Required |
| Age | Short Answer | Number only, 1–120 |
| WhatsApp Number | Short Answer | Required, 10 digits |
| Are you an existing patient? | Multiple Choice | New / Existing |

**Section 2: Dental Concern**

| Field | Type | Validation |
|---|---|---|
| What is your main concern? | Checkboxes | Tooth Pain / Cleaning / Cavity / Braces / Whitening / Broken Tooth / Sensitivity / Other |
| Please describe your problem | Paragraph | Optional |
| Pain severity (if any) | Linear Scale (1–10) | 1 = No Pain, 10 = Severe |

**Section 3: Appointment Preference**

| Field | Type | Validation |
|---|---|---|
| Preferred Date | Date | Future dates only |
| Preferred Time Slot | Dropdown | 9 AM / 10 AM / 11 AM / 12 PM / 2 PM / 3 PM / 4 PM / 5 PM / 6 PM |
| Alternative Date (optional) | Date | Optional |

**Section 4: Medical History (Brief)**

| Field | Type | Options |
|---|---|---|
| Do you have any medical conditions? | Checkboxes | Diabetes / Heart Disease / Blood Pressure / Allergies (medicines) / Pregnant / None |
| Current medications (if any) | Short Answer | Optional |

**Section 5: Consent**

| Field | Type |
|---|---|
| I agree that this information is used only for appointment purposes | Checkbox (Required) |

### Form Confirmation Message:
```
✅ Bahut shukriya! Aapki request mil gayi.

Hum 30–60 minutes mein aapko WhatsApp pe confirm karenge.

Agar urgent ho toh directly call karein: 📞 [CLINIC NUMBER]

[Clinic Name] Team 🙏
```

### Google Sheet Setup

> Google Forms auto-creates a linked Sheet. Open it via: **Responses → View in Sheets icon**

#### Sheet Column Headers (auto-generated + add manually):

| Column | Source |
|---|---|
| Timestamp | Auto |
| Full Name | Form |
| Age | Form |
| WhatsApp Number | Form |
| New/Existing | Form |
| Main Concern | Form |
| Problem Description | Form |
| Pain Severity | Form |
| Preferred Date | Form |
| Preferred Time | Form |
| Alt Date | Form |
| Medical Conditions | Form |
| Medications | Form |
| **STATUS** | Manual (Staff) |
| **APPOINTMENT DATE** | Manual (Staff) |
| **APPOINTMENT TIME** | Manual (Staff) |
| **NOTES** | Manual (Staff) |
| **FOLLOW-UP DONE** | Manual (Staff) |

#### Color Code Logic (Use Conditional Formatting):

> **Format → Conditional formatting → Custom formula**

| STATUS Value | Cell Color | Meaning |
|---|---|---|
| `New` | 🔵 Light Blue | Just came in, not contacted yet |
| `Called` | 🟡 Yellow | Staff called/messaged |
| `Booked` | 🟢 Green | Appointment confirmed |
| `Cancelled` | 🔴 Red | Patient cancelled |
| `Follow-up` | 🟣 Purple | Post-visit follow-up needed |
| `Done` | ⚫ Grey | Case closed |

#### Mini-CRM Usage for Staff:

1. Open Sheet every morning — filter by STATUS = `New`
2. Call/message each new lead within 1 hour
3. Change STATUS to `Called`
4. After booking, enter Appointment Date/Time → change to `Booked`
5. Day before appointment: Send reminder message
6. Day after: Send follow-up → change to `Follow-up Done`
7. Weekly: Count `Booked` rows → track conversion rate

---

## 6) "AUTO-SEND FORM LINK" WITHOUT API (JUGAAD METHOD)

### Step 1: Create Short Link

Use free URL shorteners:
- **bit.ly** → e.g., `bit.ly/DrSharmaClinic`
- **tinyurl.com** → e.g., `tinyurl.com/DentalClinicForm`
- **short.io** (free tier) → custom branded link

### Step 2: Create Quick Reply `/form`

Save this as a Quick Reply in WhatsApp Business:

```
Namaste! 😊 Appointment ke liye yeh chhota sa form fill karein — sirf 2 minutes!

🔗 bit.ly/[YourClinicForm]

✅ Yeh [Clinic Name] ka official form hai
🔒 Aapki info 100% safe hai
📞 Form ke baad hum 30 min mein call karenge!

Koi sawaal ho toh seedha yahan type karein 👇
```

### Step 3: Reminder if Form Not Filled (After 2 Hours)

**Reminder 1:**
```
Namaste [Name]! 😊

Pehle form bheja tha aapko. Kya fill ho gaya?

🔗 bit.ly/[YourClinicForm]

Sirf 2 minute lagenge — baad mein appointment confirm kar dete hain! ✅
```

**Reminder 2 (Next Day):**
```
Namaste [Name]! 🙏

Kal aapki inquiry aayi thi dental concern ke baare mein.

Hum abhi bhi aapki help ke liye available hain!

Direct call karein: 📞 [PHONE]
Ya form fill karein: 🔗 [FORM LINK]

Seedha batana chahein toh yahan likhein 👇
```

### Trust-Building Tips:

- Always mention: "Yeh [Clinic Name] ka official form hai"
- Add lock emoji 🔒 to signal safety
- Keep form link consistent — don't change it
- Add clinic name in the bit.ly URL for branding

---

## 7) STAFF OPERATIONS SOP (MANUAL AUTOMATION)

### Response SLA (Service Level Agreement)

| Time | Action Required |
|---|---|
| Within **5 minutes** | First reply to new message during business hours |
| Within **1 hour** | Form sent, pre-screening done |
| Within **2 hours** | Appointment slot offered |
| Within **30 minutes** | Emergency cases — escalate immediately |
| **Next morning by 10 AM** | Reply to after-hours messages |

### Who Handles What

| Role | Responsibility |
|---|---|
| **Receptionist** | First response, quick replies, form sending, labeling, booking |
| **Senior Staff / Manager** | Hot lead follow-up, escalations, end-of-day report |
| **Dentist** | Emergency calls only, complex clinical queries |

### Label Workflow

```
Patient Messages → Apply "New Lead"
     ↓
First Reply Sent → Change to "Hot Lead"
     ↓
Form Sent → Add "Form Sent" label
     ↓
Form Filled + Appointment Offered → Keep "Hot Lead"
     ↓
Appointment Confirmed → Change to "Booked"
     ↓
Visit Done → Change to "Follow-up"
     ↓
Follow-up message sent + no further action → Change to "Done"
```

### Appointment Confirmation Workflow

1. Patient fills form → Staff sees new row in Google Sheet
2. Staff calls/messages within 30 min
3. Confirm slot verbally or on WhatsApp
4. Send `/confirm` quick reply with actual date/time
5. Update Sheet: STATUS = `Booked`, enter appointment date/time
6. Change WhatsApp label: `Booked`
7. Day before: Send `/remind` quick reply
8. Day of: Mark patient as arrived in Sheet

### Follow-Up Workflow

**Pre-Visit (1 Day Before):**
```
🔔 Reminder: Kal aapka appointment hai!
📅 [DATE] ⏰ [TIME]
📍 [ADDRESS]
Please 10 min pehle aayen. Koi change ho toh batayein! 😊
```

**Post-Visit (1 Day After):**
```
Namaste [Name]! 😊 Aaj kaisa feel ho raha hai?
Treatment ke baad koi takleef ho toh zaroor batayein.
Next checkup ke baare mein poochna ho toh: /book type karein 🙏
```

**Post-Visit (7 Days After — Optional):**
```
Namaste [Name]! Dr. [Name] ki taraf se ek check-in —
Sab theek hai? Koi bhi concern ho toh WhatsApp karein.
Regular checkup har 6 months mein recommended hai 😊
```

### End-of-Day Report Format (Staff fills this in a WhatsApp group or Sheet tab)

```
📊 DAILY REPORT — [DATE]

New Leads Today: __
Forms Sent: __
Forms Filled: __
Appointments Booked: __
Cancellations: __
Emergencies: __
Pending Follow-ups: __

Top Issues Today: (e.g., tooth pain x3, checkup x2)
Notes: __________________

— [Staff Name]
```

### Escalation Matrix

| Situation | Action | Who |
|---|---|---|
| Emergency / severe pain | Call emergency number immediately | Staff → Dr. [Name] |
| Patient angry / complaint | Apologize, escalate to manager | Receptionist → Manager |
| Medical history concern (e.g., heart patient) | Don't advise — ask to consult own doctor first | Staff → Note in sheet |
| Patient wants refund / billing issue | Forward to manager | Receptionist → Manager |
| Patient not showing up | Call once, send reminder, mark in sheet | Receptionist |

---

## 8) ADVANCED "AI FEEL" WITHOUT API

### Typing Delay Strategy

Never send a response instantly — it feels robotic. Follow this:

| Message Type | Wait Before Sending |
|---|---|
| Greeting / Menu | 5–10 seconds (seems like "reading") |
| Pricing info | 15–20 seconds (seems like "checking records") |
| Appointment confirmation | 30–45 seconds (seems like "checking calendar") |
| Emergency response | Send IMMEDIATELY — no delay |

> **Trick:** Open WhatsApp, start typing but wait the above time, THEN send.

### Template Variation Strategy (Avoid Repetition)

Have 2–3 versions of each template. Rotate them so it feels human:

**Appointment Confirmation — Version A:**
```
✅ Ho gaya! Aapka appointment book ho gaya [Name]! 😊
📅 [DATE] ⏰ [TIME]
```

**Appointment Confirmation — Version B:**
```
Zabardast! 🎉 [Name], aapki slot confirm ho gayi hai!
📅 [DATE] ⏰ [TIME]
```

**Appointment Confirmation — Version C:**
```
Done! ✅ Appointment fix ho gayi [Name].
Date: [DATE] | Time: [TIME]
```

### Personalized Token Insertion

Always replace before sending:
- `[Name]` → Patient's actual name
- `[Issue]` → Their dental problem
- `[Date]` → Appointment date
- `[Time]` → Appointment time
- `[Staff Name]` → Your name

> **Pro tip:** Keep patient name in WhatsApp chat name — set it when first contact comes in.

### Decision-Tree Cheat Sheet for Staff

```
Patient says "dard" (pain) → Send /emergency
Patient says "price" / "kitna lagega" → Send /price
Patient says "kab aa sakte hain" / "time" → Send /book
Patient says "kahan hai" / "address" → Send /address
Patient says "hello" / just greeting → Send /menu
Patient seems confused → Send /menu again with extra line: "Koi bhi help ke liye seedha likhen!"
Patient is angry → Apologize + escalate to manager
```

### Smart FAQ Bank — 30 Common Dental Questions

| # | Question | Short Answer |
|---|---|---|
| 1 | Tooth mein dard hai — kya karein? | Cold compress lagaein aur immediately clinic visit karein. Proper diagnosis ke liye dentist examination zaroori hai. |
| 2 | Tooth nikaalna hai — kitna lagega? | ₹300–700 (simple). Complex case: ₹800–1500. Confirm for checkup. |
| 3 | Tooth whitening safe hai? | Haan, professional whitening safe hai. Home kits risky ho sakti hain. |
| 4 | Braces kitne time mein lagti hain? | 1–2 ghante for fitting. Total treatment 12–24 months. |
| 5 | Braces ke liye age limit hai? | Koi age limit nahi. Adults ke liye bhi suitable. |
| 6 | Root canal painful hota hai? | Nahi! Anesthesia se pain-free hota hai modern technique mein. |
| 7 | Bachche ka pehla dental visit kab? | Pehla tooth aane ke baad ya 1 saal ki umar mein. |
| 8 | Mera tooth toot gaya — emergency hai? | Haan. Piece ko milk mein rakhein aur immediately aayen. |
| 9 | Cavities se kaise bachein? | Brushing 2x/day + flossing + 6-monthly checkup. |
| 10 | Gums se blood aa raha hai — kya problem hai? | Gingivitis ho sakta hai. Professional cleaning + doctor advice. |
| 11 | Dentures banwane hain — kya clinic mein hoti hai? | Haan, complete + partial dentures available hain. |
| 12 | Sensitivity hai (thanda-garam lagta hai) — why? | Enamel erosion ya exposed roots. Sensodyne + doctor visit. |
| 13 | X-ray safe hai? | Haan, dental X-ray radiation minimal hai — completely safe. |
| 14 | Anesthesia injection mein bahut dard hota hai? | Modern technique mein minimal sensation. Don't worry! |
| 15 | Treatment ke baad kya nahi khana chahiye? | 2 ghante kuch nahi. Hard/crunchy food avoid karein for 24h. |
| 16 | Kya pregnant women ka dental treatment ho sakta hai? | Pregnancy mein dental treatment ke liye pehle apne gynecologist aur dentist dono se milein — har case alag hota hai. |
| 17 | Implants ka kya option hai? | Titanium implant — ₹25,000–40,000/tooth. Long-term best option. |
| 18 | Veneers kya hote hain? | Thin shells on front teeth for cosmetic improvement. ₹8,000–15,000/tooth. |
| 19 | Wisdom tooth problem — surgery lagegi? | Depends on position. X-ray se pata chalega. |
| 20 | Mera jaw lock ho jaata hai — kya karna chahiye? | TMJ issue ho sakta hai. Doctor se milein — physiotherapy help karta hai. |
| 21 | Teeth grinding (bruxism) — treatment? | Night guard recommended. Stress management bhi help karta hai. |
| 22 | Teeth staining ki kya wajah hai? | Coffee, tea, tobacco, certain medicines. Scaling se remove hoti hai. |
| 23 | Crown aur cap mein kya difference hai? | Same cheez hai — "cap" common Indian term hai crown ke liye. |
| 24 | Filling ke kitne types hain? | Composite (white/tooth-coloured) — most common. Silver (amalgam) — less used now. |
| 25 | Appointment cancel karne ke liye kya karna hai? | WhatsApp karo ya call karo 12 ghante pehle please. |
| 26 | Insurance accept karte hain? | Haan/Nahi — please clinic se directly confirm karein. Accepted insurers list ke liye call karein: 📞 [NUMBER] |
| 27 | EMI option hai? | Haan/Nahi — clinic ke payment options ke liye receptionist se poochein: 📞 [NUMBER] |
| 28 | Home visit karte hain? | Abhi home visits available nahi hain. Clinic mein aayen ya appointment lein: type karein 1 |
| 29 | Same-day appointment milta hai? | Urgent cases mein haan. WhatsApp karo, dekhte hain. |
| 30 | Review/feedback kahan dein? | Google pe review dein: [GOOGLE REVIEW LINK] — bahut appreciate karenge! 🙏 |

### Context Memory Workaround

| Tool | How to Use for Memory |
|---|---|
| **WhatsApp Chat Name** | Rename: "Rahul - Tooth Pain - 15 Mar" |
| **Pinned Message in Chat** | Pin the Google Sheet row ID or form submission timestamp |
| **WhatsApp Chat Labels** | Visual status at a glance |
| **Google Sheet Notes Column** | Write complete history: "Called 3 times, interested, waiting for date" |
| **Sheet Row ID** | Tell patient: "Aapka reference number R-[ROW NUMBER] hai" |

---

## 9) READY-TO-USE HINGLISH MESSAGE TEMPLATES

### T1 — Greeting

```
Namaste! 🙏 [Clinic Name] mein aapka swagat hai!

Main aapki help ke liye yahan hoon. Kya problem hai aapko?

Reply karein:
1️⃣ Appointment
2️⃣ Price
3️⃣ Address/Timing
4️⃣ Emergency
5️⃣ Staff se baat

Bas number type karein 👇
```

### T2 — Menu

```
📋 MAIN MENU

1️⃣  Appointment book karna hai
2️⃣  Treatment ki price jaanni hai
3️⃣  Clinic ka address / timings dekhne hain
4️⃣  Emergency — bahut dard ho raha hai
5️⃣  Kisi staff se seedha baat karni hai

Reply: 1, 2, 3, 4 ya 5 👇
```

### T3 — Appointment Capture

```
Appointment ke liye bahut shukriya! 😊

Sirf yeh chhota sa form fill karein — 2 min mein ho jaayega:
🔗 [FORM LINK]

Form fill karte hi 30–60 minute mein hum aapko slot confirm karenge!

Koi sawaal? Yahan likhein 👇
```

### T4 — Price Inquiry

```
Hamare treatments ki approximate price 👇

🦷 Checkup: ₹200
🧹 Scaling (Cleaning): ₹500–800
🔧 Filling: ₹800–1,500
🏥 Root Canal (RCT): ₹3,000–6,000
👑 Crown: ₹4,000–8,000
😁 Braces: ₹15,000 onwards
✨ Whitening: ₹3,000–5,000
🔩 Implant: ₹25,000 onwards

⚠️ Final price examination ke baad confirm hogi.

Appointment ke liye: 1 type karein 😊
```

### T5 — Clinic Location / Timing

```
📍 Humari clinic:

[Clinic Full Name]
[Address Line 1]
[City, PIN Code]

🗺️ Google Maps: [MAPS LINK]

⏰ Timings:
Mon – Sat: 9:00 AM – 7:00 PM
Sunday: Band (Closed)

📞 Phone: [NUMBER]
📧 Email: [EMAIL]

Aaj appointment lena hai? Type karein: 1 👇
```

### T6 — Emergency Disclaimer

```
🚨 Emergency — Hum samajhte hain!

Pehle yeh karein:
✅ Cold pack lagaein (kapde mein ice) — 10 min ke liye
✅ Kuch mat khaiye abhi
✅ Immediately doctor ko call karein

📞 Emergency Contact: [DR. NAME — NUMBER]
Timing: 9 AM – 8 PM (Mon–Sat)

⚠️ NOTE: Yeh sirf general first-aid guidance hai — professional medical advice nahi. Koi bhi medicine lene se pehle apne doctor se poochein. Please clinic call karein ya turant aayen!

Kya main aapke liye call arrange kar sakta/sakti hoon? Reply Y ya N 👇
```

### T7 — Form Reminder 1 (2 Hours After Form Sent)

```
Namaste [Name]! 😊

Kya aapne form fill kiya?
🔗 [FORM LINK]

Sirf 2 minute mein ho jaayega — baad mein appointment confirm ho jaayegi! ✅

Koi problem ho toh seedha batayein 👇
```

### T8 — Form Reminder 2 (Next Day)

```
Namaste [Name]! 🙏

Hum notice kar rahe hain ki form abhi fill nahi hua.

Koi issue? Hum help kar sakte hain!

Direct call karein: 📞 [NUMBER]
Ya form fill karein: 🔗 [FORM LINK]

Aapki dental health hamare liye important hai 💙
```

### T9 — Appointment Confirmation

```
✅ Aapka appointment confirm ho gaya!

👤 Naam: [NAME]
📅 Date: [DATE]
⏰ Time: [TIME]
📍 [CLINIC NAME], [ADDRESS]

📌 Please yaad rakhein:
• 10 minute pehle aayen
• Insurance card (if any)
• Pehle ke X-rays (if any)

Agar change chahiye: Ek din pehle batayein 🙏

Kal reminder milega! 😊 — [Clinic Name] Team
```

### T10 — Follow-Up After Treatment

```
Namaste [Name]! 😊

Aaj aapki visit ho gayi — bahut shukriya trust karne ke liye! 🙏

Kaisa feel ho raha hai abhi? Koi bhi takleef ya sawaal ho toh zaroor batayein.

💡 Quick tips:
[Customize based on treatment done]

Next checkup: [6 months / 1 month / as advised]

Google pe ek review dein toh bahut khushi hogi hume! ⭐
🔗 [GOOGLE REVIEW LINK]

Take care! 💙 — Dr. [Name] & Team
```

---

## 10) TEXT-BASED WORKFLOW DIAGRAM

```
                    ┌─────────────────────┐
                    │  Patient Messages    │
                    │  on WhatsApp        │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │  Auto GREETING      │
                    │  Message fires      │
                    │  (WA Business)      │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │  Patient reads      │
                    │  MENU (1–5)         │
                    └──────────┬──────────┘
                               │
          ┌────────────────────┼──────────────────────┐
          │                    │                      │
   ┌──────▼──────┐    ┌────────▼──────┐    ┌─────────▼──────┐
   │  Branch 1   │    │  Branch 2–3   │    │  Branch 4–5    │
   │  APPOINTMENT│    │  INFO REQUEST │    │  EMERGENCY /   │
   │             │    │  (Price/Addr) │    │  HUMAN         │
   └──────┬──────┘    └────────┬──────┘    └────────────────┘
          │                    │
   ┌──────▼──────┐    ┌────────▼──────┐
   │  Staff sends│    │  Staff sends  │
   │  FORM LINK  │    │  Quick Reply  │
   │  /form      │    │  /price /addr │
   └──────┬──────┘    └───────────────┘
          │
   ┌──────▼──────────────┐
   │  Patient fills      │
   │  GOOGLE FORM        │
   │  (2 minutes)        │
   └──────┬──────────────┘
          │
   ┌──────▼──────────────┐
   │  Data auto-goes to  │
   │  GOOGLE SHEET       │
   │  (New row created)  │
   └──────┬──────────────┘
          │
   ┌──────▼──────────────┐
   │  Staff reviews Sheet│
   │  Calls/messages     │
   │  patient (30 min)   │
   └──────┬──────────────┘
          │
   ┌──────▼──────────────┐
   │  Slot offered &     │
   │  CONFIRMED          │
   │  /confirm sent      │
   └──────┬──────────────┘
          │
   ┌──────▼──────────────┐
   │  1 day before:      │
   │  REMINDER sent      │
   │  /remind template   │
   └──────┬──────────────┘
          │
   ┌──────▼──────────────┐
   │  Patient visits     │
   │  clinic → BOOKED ✅ │
   └──────┬──────────────┘
          │
   ┌──────▼──────────────┐
   │  Next day:          │
   │  FOLLOW-UP sent     │
   │  /followup template │
   └──────┬──────────────┘
          │
   ┌──────▼──────────────┐
   │  Label: DONE ✅     │
   │  Sheet: Follow-up   │
   │  Done = YES         │
   └─────────────────────┘
```

---

## 11) 1-DAY IMPLEMENTATION PLAN

### Hour-by-Hour Setup

| Time Block | Task | Who |
|---|---|---|
| **0–1h** | Install/setup WhatsApp Business app; complete business profile | Manager |
| **1–2h** | Set up Greeting message + Away message | Manager |
| **2–3h** | Create all 10 Quick Replies (/menu, /book, /price, etc.) | Manager/Receptionist |
| **3–4h** | Create labels: New Lead, Hot Lead, Form Sent, Booked, Done | Receptionist |
| **4–5h** | Build Google Form (all 5 sections) | Manager |
| **5–6h** | Test form → verify Sheet auto-creates and data flows | Manager |
| **6–7h** | Create bit.ly short link for form | Manager |
| **7–8h** | Update /form quick reply with actual short link | Receptionist |
| **8–9h** | Print out Decision Tree cheat sheet + FAQ bank | Receptionist |
| **9–10h** | Add catalog items to WhatsApp Business | Manager |
| **10–11h** | Full dry-run testing (see checklist below) | Both |
| **11h+** | Go live! Handle first real patient messages | Receptionist |

### Testing Checklist — 10 Sample Scenarios

| # | Scenario | Expected Result | ✅/❌ |
|---|---|---|---|
| 1 | New patient messages first time | Greeting auto-fires | |
| 2 | Patient types "1" | Staff ready with /book quick reply | |
| 3 | Patient types "2" | Staff sends /price | |
| 4 | Patient types "5" | Staff takes over personally | |
| 5 | Patient types random text | Staff sends /menu or fallback | |
| 6 | Patient fills form | New row appears in Google Sheet | |
| 7 | Staff sends /confirm with date/time | Confirmation message looks correct | |
| 8 | Patient messages at 11 PM | Away message auto-fires | |
| 9 | Staff sends /remind template | Reminder message looks correct | |
| 10 | End of day report | Staff fills the format in their WA group | |

---

## 12) QUALITY + COMPLIANCE NOTES

### Medical Disclaimer (Add to Away Message + Form Description)

```
⚠️ MEDICAL DISCLAIMER:
Yeh WhatsApp chatbot sirf information aur appointment booking ke liye hai.
Yeh MEDICAL DIAGNOSIS YA ADVICE NAHI HAI.
Kisi bhi dental emergency ya serious concern ke liye directly qualified dentist se milein.
```

### Emergency Handling Statement

```
🚨 EMERGENCY POLICY:
Agar koi patient severe pain, swelling, breathing difficulty, ya major injury report kare:
1. Immediately emergency number forward karein
2. Clinic visit ke liye urge karein
3. Nearest hospital jaane ka suggest karein agar clinic band hai
4. Never delay emergency by asking for form or information
```

### Privacy Best Practices

- Patient data (form responses) sirf authorized staff ke paas hona chahiye
- Google Sheet ka access: Sirf clinic email accounts ko share karein — NOT public
- WhatsApp mein personally identifiable info (like medical history) ko forward mat karein
- Patient records India ke medical laws ke anusar retain karein (minimum 3 years, ya as advised by your legal/medical consultant). Data delete karne se pehle legal guidance lein.
- Never share patient details with third parties
- Form mein CONSENT checkbox mandatory rakhen
- Data protection ke liye Google Workspace account use karein (free tier) — personal Gmail se better security milti hai

### Consent Message Before Form Capture

```
Hamara form fill karne se pehle:

✅ Yeh information sirf appointment booking ke liye use hogi
✅ Yeh data kisi third party ke saath share nahi ki jaayegi
✅ Aap kabhi bhi apna data delete karne ka request kar sakte hain

Form mein ek consent checkbox hai — usse tick karein 🙏
```

---

## 13) FINAL DELIVERY FORMAT

---

### A) COPY-PASTE PACK

```
============================
[CLINIC NAME] — WHATSAPP TEMPLATES
============================

[GREETING]
Namaste! 🙏 [Clinic Name] mein aapka swagat hai!
Main aapki help ke liye yahan hoon.
1️⃣ Appointment  2️⃣ Price  3️⃣ Address  4️⃣ Emergency  5️⃣ Staff
Number type karein 👇

---

[MENU]
📋 Main Menu:
1️⃣ Appointment book karna hai
2️⃣ Treatment price jaanni hai
3️⃣ Clinic address / timings
4️⃣ Emergency
5️⃣ Staff se baat
Reply: 1–5 👇

---

[AWAY MESSAGE]
Clinic abhi band hai. Working hours: Mon-Sat 9AM–7PM.
Kal subah reply milega. Emergency: 📞 [NUMBER]

---

[FORM LINK]
Namaste! 😊 Appointment ke liye form fill karein:
🔗 [FORM LINK]
2 min mein ho jaayega — 30 min mein confirm! ✅

---

[PRICE]
🦷 Checkup ₹200 | Cleaning ₹500-800 | Filling ₹800-1500
RCT ₹3000-6000 | Crown ₹4000-8000 | Braces ₹15000+
Final price examination ke baad hogi.

---

[ADDRESS]
📍 [Full Address]
🗺️ [Maps Link]
⏰ Mon-Sat 9AM–7PM | 📞 [Phone]

---

[EMERGENCY]
🚨 Cold compress lagaein. Doctor ko call karein: 📞 [NUMBER]
⚠️ Yeh medical advice nahi hai.

---

[FORM REMINDER 1]
Namaste [Name]! Form fill hua? 🔗 [LINK] — 2 min only! ✅

---

[FORM REMINDER 2]
Namaste [Name]! Hum aapki help ke liye hain. 📞 [NUMBER] pe call karein ya 🔗 [FORM LINK]

---

[CONFIRMATION]
✅ Appointment confirmed! [Name]
📅 [DATE] ⏰ [TIME] 📍 [ADDRESS]
10 min pehle aayen. Reminder kal milega! 😊

---

[REMINDER]
🔔 Kal aapka appointment hai!
📅 [DATE] ⏰ [TIME] 📍 [ADDRESS]

---

[FOLLOW-UP]
Namaste [Name]! 😊 Kaisa feel ho raha hai?
Koi bhi problem ho toh batayein. Next checkup: [DATE/TIME]
Google Review: ⭐ [REVIEW LINK]

============================
```

---

### B) STAFF PLAYBOOK

**Daily Opening Routine (9 AM)**
- Open WhatsApp Business
- Check all unread messages — apply label "New Lead"
- Open Google Sheet — check new form submissions
- Respond to all new leads within 30 min

**Handling a New Patient Inquiry**
- Read their message
- Select appropriate Quick Reply (/menu, /price, /book)
- If interested: Send /form
- After form filled: Call within 30 min to offer slot
- After booking: Send /confirm with actual date/time
- Update Sheet: STATUS = Booked
- Change WA label to "Booked"

**Day Before Appointment**
- Check Google Sheet for tomorrow's appointments
- Send /remind to each patient
- Confirm they're coming (wait for reply)
- If no reply in 2h: Call once

**Day After Appointment**
- Send /followup to each visited patient
- Update Sheet: Follow-up Done = YES
- Change WA label to "Done"

**End of Day (7 PM)**
- Fill daily report format in WhatsApp staff group
- Archive "Done" chats with label
- Check any pending "Form Sent" — send Reminder 2 if needed

**Escalation Triggers (Go to Manager)**
- Patient is angry or threatening
- Medical concern beyond dental (heart, breathing)
- Billing / refund request
- Media / press inquiry
- Any unusual situation

---

### C) GO-LIVE CHECKLIST

**WhatsApp Business Setup**
- [ ] WhatsApp Business installed and verified
- [ ] Business profile complete (name, address, hours, description)
- [ ] Greeting message saved and tested
- [ ] Away message saved with correct schedule
- [ ] All 10 Quick Replies created (/menu, /book, /price, /address, /emergency, /form, /confirm, /remind, /followup, /thanks)
- [ ] All labels created (New Lead, Hot Lead, Form Sent, Booked, Follow-up, Done, Emergency)
- [ ] Catalog added (5 treatment packages)
- [ ] Business hours configured

**Google Form Setup**
- [ ] Form created with all 5 sections
- [ ] All required fields marked
- [ ] Consent checkbox added
- [ ] Confirmation message set
- [ ] Form tested end-to-end

**Google Sheet Setup**
- [ ] Sheet linked to form and verified
- [ ] Manual columns added (STATUS, APPT DATE, APPT TIME, NOTES, FOLLOW-UP)
- [ ] Conditional formatting for STATUS colors applied
- [ ] Sheet shared only with clinic staff emails

**Short Link**
- [ ] bit.ly or tinyurl link created for form
- [ ] Link tested — form opens correctly
- [ ] /form quick reply updated with short link

**Staff Readiness**
- [ ] Decision tree cheat sheet printed
- [ ] FAQ bank accessible (printed or bookmarked)
- [ ] All staff trained on Quick Replies
- [ ] Staff WhatsApp group created for daily reports
- [ ] Escalation contacts noted

**Testing Done**
- [ ] All 10 test scenarios passed
- [ ] Form → Sheet flow verified
- [ ] Greeting fires on new contact
- [ ] Away message fires after hours
- [ ] Short link works on mobile

**Compliance**
- [ ] Medical disclaimer in form description
- [ ] Emergency contact number confirmed and active
- [ ] Privacy consent checkbox in form
- [ ] Sheet access restricted to authorized staff only

---

> 🎉 **You're Go-Live Ready!**
> System designed for zero cost, zero coding, and maximum efficiency.
> Built for Indian dental clinic staff — practical, Hinglish-friendly, and ready in 1 day.
