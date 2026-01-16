# Day 1 Setup Checklist - January 15, 2026

## ✅ COMPLETED TASKS

### Task 1.1: Verify Access
- [x] Claude AI Pro Plan active
- [ ] - [x] Google AI Pro Plan needed (confirm with user)
- [ ] - [x] Claude Code access verified at https://code.claude.com
- [ ] - [x] Basic Claude Code functionality tested

- [ ] ---

- [ ] ## 📋 REMAINING DAY 1 TASKS (2 hours total)

- [ ] ### Task 1.2: Development Environment Setup
- [ ] - [ ] Install Node.js 18+ (verify: `node --version`)
- [ ] - [ ] Create project directory: `mkdir personal-trainer-app && cd personal-trainer-app`
- [ ] - [ ] Initialize Git: `git init`
- [ ] - [ ] Connect to GitHub: `git remote add origin https://github.com/YOUR-USERNAME/personal-trainer-app.git`
- [ ] - [ ] Create README.md and initial commit
- [ ] - [ ] Push to GitHub: `git push -u origin main`

- [ ] ### Task 1.3: Vercel Account Setup
- [ ] - [ ] Create account: https://vercel.com
- [ ] - [ ] Connect GitHub account
- [ ] - [ ] Create new project (auto-deploys from GitHub)
- [ ] - [ ] Configure initial domain (use vercel.app for now)

- [ ] ### Task 1.4: Supabase Backend Setup
- [ ] - [ ] Create account: https://supabase.com
- [ ] - [ ] Create new PostgreSQL project
- [ ] - [ ] Get Connection String & API Keys
- [ ] - [ ] Save to `.env.local` file (NEVER commit to git)
- [ ] - [ ] Required env vars:
- [ ]   - `NEXT_PUBLIC_SUPABASE_URL`
- [ ]     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ]   - `SUPABASE_SERVICE_ROLE_KEY`

- [ ]   ### Task 1.5: Stripe Payment Setup
- [ ]   - [ ] Create account: https://stripe.com
- [ ]   - [ ] Verify email and set up account
- [ ]   - [ ] Get API keys (use TEST MODE for development)
- [ ]   - [ ] Save to `.env.local`:
- [ ]     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- [ ]   - `STRIPE_SECRET_KEY`

- [ ]   ### Task 1.6: Email Service Setup
- [ ]   - [ ] Choose: Resend (recommended) OR SendGrid
- [ ]   - [ ] Create account: https://resend.com OR https://sendgrid.com
- [ ]   - [ ] Get API key
- [ ]   - [ ] Save to `.env.local`:
- [ ]     - `RESEND_API_KEY` or `SENDGRID_API_KEY`

- [ ] ---

- [ ] ## 🔐 Environment Variables Template

- [ ] Create `.env.local` in your project root (add to `.gitignore`):

- [ ] ```
- [ ] # Supabase
- [ ] NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
- [ ] NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
- [ ] SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

- [ ] # Stripe (Test Mode)
- [ ] NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
- [ ] STRIPE_SECRET_KEY=sk_test_...

- [ ] # Email
- [ ] RESEND_API_KEY=re_...
- [ ] ```

- [ ] ---

- [ ] ## 📅 NEXT STEPS

- [ ] **Once Day 1 Complete:**
- [ ] - Day 2-3 (4 hours): Build landing page with Claude Code
- [ ] - Day 4-5 (3 hours): Set up Calendly + Stripe integration
- [ ] - Day 6-7 (2 hours): Deploy and start outreach

- [ ] **SUCCESS CRITERIA FOR MVP:**
- [ ] - 3+ paying clients ($399 CAD each)
- [ ] - They complete 4+ weeks
- [ ] - Confirmed progress/satisfaction

- [ ] ---

- [ ] ## 💡 QUICK REFERENCE

- [ ] **Tech Stack (from CLAUDE.md):**
- [ ] - Frontend: Next.js 15, React 19, TypeScript 5
- [ ] - Styling: Tailwind CSS 4
- [ ] - Backend: Supabase (PostgreSQL + Auth)
- [ ] - Deployment: Vercel
- [ ] - Payments: Stripe
- [ ] - Email: Resend

- [ ] **Time Zone:** Eastern (Windsor, Ontario)
- [ ] **Currency:** CAD
- [ ] **Target:** Busy professionals, 25-55 years old
