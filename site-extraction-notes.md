# Source Extraction — ronavaida.github.io/Shiri-Zenou

Reference site (Hebrew, RTL, static 6-page site): sleep + lactation consultant landing site for "שירי זנו" (Shiry Zenou).

## Design system (from style.css — saved alongside this file)
- Font: Heebo (Google Font), sans-serif, RTL body direction
- Palette: cream base (#FDF8F4), lavender accent (#7B6AAD dark / #C5B5E0 / #F0EBFB light), blush (#C07880 / #F5C4C8 / #FCE8EA), sage (#5A8A52 / #A8C9A0 / #E6F3E2), text #3C3456
- Fixed navbar w/ blur, hamburger on mobile, pill-shaped nav links
- Rounded cards/buttons (border-radius 12–32px, full-pill buttons), soft shadows, blob/organic background shapes
- Emoji used as primary iconography in heroes, cards, and step numbers (🌙⭐🤍✨🐣🐥🧒👶⚖️🔄💗👩‍⚕️🤱🌸💬📱⏰)
- Font Awesome-style `<i>` icons (no text content) used for: checkmarks in feature/service lists, FAQ chevron, credential/contact icon tiles, footer social icons — exact icon set not confirmed from fetch, but functionally: check, chevron-down, certificate/graduation, phone/mail/clock/map-pin, whatsapp/instagram/facebook/tiktok brand icons
- Scroll-triggered fade-in class (`.fade-in.visible`) — needs an IntersectionObserver script
- FAQ accordion needs open/close JS (`.faq-item.open`)
- Mobile nav toggle needs JS (`.nav-links.open`, `.hamburger.open`)

## Site structure
6 pages, shared navbar + footer:
1. `index.html` — Home
2. `about.html` — About
3. `sleep.html` — Sleep consulting
4. `breastfeeding.html` — Lactation consulting
5. `services.html` — Packages & pricing
6. `contact.html` — Contact form

Nav order: דף הבית (Home) · אודות (About) · שינה (Sleep) · הנקה (Breastfeeding) · השירותים שלי (Services) · צור קשר (Contact) + WhatsApp CTA button in nav.

## Business info (real)
- Name: שירי זנו (Shiry Zenou) — certified sleep consultant + IBCLC lactation consultant
- Phone: 054-4818126
- Email: shiry.sasson@gmail.com
- Hours: א׳–ה׳ | 9:00–21:00 (Sun–Thu)
- Service area: כל הארץ — ייעוץ מרחוק וביקורי בית (nationwide, remote + home visits)
- WhatsApp link in source uses a **placeholder** number `972500000000` — needs correcting to the real number (+972 54-481-8126) before launch.
- Tel link in source also inconsistent (`tel:0500000000` placeholder vs displayed 054-4818126) — flag for correction.
- © 2024 שירי זנו — footer note "עוצב עם ❤️"

## Page-by-page copy (Hebrew, verbatim from live site)

### Home (index.html)
- Hero tag: "יועצת שינה בגישת אינטליגנציה רגשית ומדריכת הנקה מוסמכת"
- H1: "אני מאמינה שלכל אמא ותינוק מגיעה הזכות **לישון טוב**"
- Subhead: "אני שירי זנו — כאן כדי ללוות אתכן בדרך לשינה שקטה יותר, להנקה מוצלחת, ולאמא רגועה ומחוברת. כי כשאנחנו בטוב — הבית בטוב."
- CTAs: "שלחי הודעה" (WhatsApp) / "לשירותים שלי" (Services)
- Stats bar: 200+ משפחות שסייעתי להן · 5+ שנות ניסיון · 98% שביעות רצון · ∞ תמיכה ואהבה
- 3 offer cards: ייעוץ שינה / ייעוץ הנקה / ליווי אישי (each with description + link)
- About teaser block ("אני שירי זנו — לצידכן בכל צעד") with 4 credential bullets
- 3 testimonials: מאיה ר. (אמא לנועה, 8mo), לירן ק. (אמא לרז, 6mo), רחל ש. (אמא לעידן, 1yr)
- Closing CTA banner: "מוכנה להתחיל?" + WhatsApp/contact buttons

### About (about.html)
- Hero: "קצת עליי" / "אמא, יועצת שינה ומדריכת הנקה — עם הרבה אהבה לאמהות ולתינוקות"
- Story section "היי, אני שירי 👋" — full personal narrative (empathetic, gentle-methods positioning, no one-size-fits-all)
- Credentials list (5 items): יועצת שינה מוסמכת (המכון הישראלי לייעוץ שינה) · מדריכת הנקה מוסמכת IBCLC · קורס התפתחות הילד (בר-אילן) · הכשרה בגישה סנסורית ורגשית · השתלמויות שוטפות
- 4 values: חמלה ואמפתיה / התאמה אישית / מבוסס מחקר / גישה עדינה
- Philosophy section: "אמא מנוחה = תינוק מאושר"
- CTA: "בואי נדבר" → contact

### Sleep (sleep.html)
- Hero: "שינה טובה לכולם 🌙"
- Intro: sleep consulting is a right, not a luxury; gentle/no-CIO approach; bullet list of process (questionnaire, written plan, ongoing support, adjustments)
- 4 age groups: 0–4mo / 4–8mo / 8–18mo / 18mo–4yr, each with specific challenges
- Approach section: 5 bullets (research-based, no CIO, respects emotional needs, works with room-sharing, flexible)
- "When to reach out" — 3 signs (frequent night wakings, sleep-prop dependency, irregular schedule)
- FAQ (5 Q&A): starting age, timeline (1–2 weeks), crying involved?, compatible with breastfeeding?, regressions after program

### Breastfeeding (breastfeeding.html)
- Hero: "הנקה מוצלחת מתחילה כאן 🤱"
- Intro: breastfeeding is a learned skill, not pure instinct; bullet list of visit process
- 6 common challenges: pain, perceived low supply, mastitis/cracked nipples, latch refusal, poor weight gain, bottle-to-breast transition
- "When to reach out" — 6 warning signs, CTA "פנו עכשיו"
- FAQ (5 Q&A): when to reach out, what's included (60–90 min visit), home visits?, formula supplementation stigma, combining with sleep consulting

### Services (services.html)
- H1: "בחרי את החבילה שמתאימה לך"
- 3 pricing cards:
  - ייעוץ שינה — 850 ₪/חבילה (questionnaire, written plan, 90-min session, 2 follow-ups, 3wk WhatsApp support, adjustments)
  - ייעוץ הנקה — 490 ₪/ביקור (60–90 min home visit, observation, hands-on guidance, written summary, follow-up call, 2wk WhatsApp support)
  - חבילת ליווי מלאה (המלצה/הכי פופולרי) — 1,490 ₪ (sleep + breastfeeding combined, 1-month unlimited support)
  - Footnote: prices incl. VAT; free intro call
- "How it works" 4 steps: שיחת היכרות → שאלון ומידע → תוכנית אישית → ליווי ומעקב
- 1 testimonial: דנה ל. (אמא לאיתמר, 9mo)
- FAQ (4 Q&A): package differences, remote option, cancellation policy (14-day, per consumer protection law), post-program support

### Contact (contact.html)
- Hero: "צרי קשר 💬"
- Contact block: WhatsApp (primary CTA), phone, email, hours, service area, social icons
- Form fields: שם מלא* / טלפון* / אימייל / במה את מתעניינת (select: sleep / breastfeeding / full package / other) / גיל התינוק / ספרי לי קצת* / submit "שלחי הודעה"
- Free intro call callout box (15–20 min, no cost/commitment)
- Secondary WhatsApp CTA block with pre-filled message: "שלום שירי, אני מעוניינת לשמוע עוד על השירותים שלך"

## What was NOT recoverable via fetch (flag before rebuild)
- Exact `<head>` tags (Google Fonts link, Font Awesome CDN link, favicon, OG tags) — inferred from CSS font-family and icon usage, not confirmed verbatim.
- `script.js` contents (nav toggle, FAQ accordion, scroll fade-in, form handling) — not retrievable as text via fetch; will need to be rebuilt from scratch to match documented behavior in style.css.
- No real photography — site currently uses an emoji/gradient "photo placeholder" in About, not an actual headshot.
- WhatsApp/phone links contain placeholder numbers inconsistent with the real displayed number.
