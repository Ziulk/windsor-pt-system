# Jan 22 LLM Frame - Project Status

## Project
Windsor Personal Training Business System - MVP for acquiring first 3 paying clients at $399 CAD each

---

## ✅ Completed

### Setup & Infrastructure
- Next.js 15 + TypeScript 5 + Tailwind CSS 4 configured
- Supabase and Stripe clients initialized
- Basic app router structure with (marketing) and (app) segments
- Landing page skeleton with hero section

### Files Present
- `/lib/supabase/` - Client and server utilities
- `/lib/stripe/` - Stripe payment client
- `/components/ui/` - Button and Card components started
- `/app/(marketing)/page.tsx` - Landing page (minimal)

---

## ⏳ To Do (Priority Order)

### 1. Landing Page (MVP)
Build conversion-focused page with:
- Header with CTA button
- Hero section
- Problem/solution
- Offer details (8-week hybrid coaching, $399 CAD)
- Testimonials/social proof
- FAQ
- Footer with CTA

### 2. Payment & Booking
- Connect "Get Started" button to Calendly embedded widget
- Stripe payment flow for $399 CAD checkout
- Lead capture form (name, email, phone, fitness goals)
- Confirmation/thank you page

### 3. Backend APIs
- `POST /api/leads` - Capture form data to Supabase
- `POST /api/webhooks/stripe` - Handle payment completion
- Email confirmation via Resend API
- Supabase schema: `leads`, `clients` tables

### 4. Deployment
- Set environment variables in production
- Deploy to Vercel
- Test end-to-end payment flow

---

## MVP Offer
- **Target:** Busy professionals in Windsor wanting to lose 10–20 lbs
- **What:** 8-week hybrid coaching (1x weekly live session + plan + weekly check-in)
- **Price:** $399 CAD
- **Guarantee:** Free 2 extra weeks if no progress in 4 weeks

---

## Key Files
- `CLAUDE.md` - Project guidelines
- `mvp-launch-plan.md` - Business/traffic strategy
- `package.json` - Dependencies (Stripe, Supabase, Resend, etc.)

---

## Tech Stack (Locked)
- Next.js 15, React 19, TypeScript 5, Tailwind CSS 4
- Supabase (DB + auth)
- Stripe (payments)
- Resend (email)
- No: Vue, Angular, MongoDB, Firebase
