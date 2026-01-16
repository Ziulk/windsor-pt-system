# CLAUDE.md - Project Instructions for Claude Code

## 1. Project Overview

**Project:** Windsor Personal Training Business System  
**Owner:** Personal trainer in Windsor, Ontario, Canada  
**Stack:** Next.js 15 + Supabase + Tailwind CSS + TypeScript  
**Goal:** Build a complete business system for lead generation, client management, and automation.

---

## 2. Tech Stack (Mandatory)

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15+ | App router, server components |
| React | 19+ | UI framework |
| TypeScript | 5+ | Type safety |
| Tailwind CSS | 4+ | Styling |
| Supabase | Latest | Database, auth, storage |
| Resend | Latest | Transactional email |

**Do not** use: Vue, Angular, plain JavaScript, MongoDB, or Firebase.

---

## 3. Project Structure

```
/app                    # Next.js app router
  /(marketing)          # Public pages (landing, about)
  /(app)                # Authenticated app (portal, dashboard)
  /api                  # API routes
/components             # Reusable UI components
/lib                    # Helpers (db, auth, utils)
/types                  # TypeScript types
/styles                 # Tailwind config, globals
```

---

## 4. Naming Conventions

- **Files:** `kebab-case.tsx` (e.g., `client-dashboard.tsx`)
- - **Components:** `PascalCase` (e.g., `ClientDashboard`)
  - - **Hooks:** `useCamelCase` (e.g., `useClientPrograms`)
    - - **Functions:** `camelCase` (e.g., `fetchClients`)
      - - **Database tables:** `snake_case` (e.g., `client_programs`)
       
        - ---

        ## 5. Error Handling

        ### API Routes
        ```typescript
        try {
          // do work...
          return NextResponse.json({ success: true }, { status: 200 });
        } catch (error) {
          console.error('POST /api/example', error);
          return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
          );
        }
        ```

        ### Principles
        - Fail gracefully with friendly user messages
        - - Log errors server-side with context
          - - Never expose secrets or stack traces to client
           
            - ---

            ## 6. Business Context

            - **Location:** Windsor, Ontario, Canada
            - - **Timezone:** Eastern (America/Toronto)
              - - **Currency:** CAD
                - - **Target audience:** Busy professionals wanting transformation
                  - - **Session length:** 45-60 minutes typical
                   
                    - ---

                    ## 7. Core Metrics to Track

                    1. Leads captured
                    2. 2. Consultations booked
                       3. 3. Active paying clients
                          4. 4. Client retention rate
                            
                             5. ---
                            
                             6. ## 8. Key Commands
                            
                             7. ```bash
                                # Development
                                npm run dev

                                # Build
                                npm run build

                                # Database (Supabase)
                                npx supabase start
                                npx supabase db push
                                ```

                                ---

                                ## 9. Environment Variables Required

                                ```env
                                NEXT_PUBLIC_SUPABASE_URL=
                                NEXT_PUBLIC_SUPABASE_ANON_KEY=
                                SUPABASE_SERVICE_ROLE_KEY=
                                RESEND_API_KEY=
                                ```

                                Never commit `.env.local` to git.

                                ---

                                ## 10. When in Doubt

                                1. Ask clarifying questions before building
                                2. 2. Start simple, iterate
                                   3. 3. Mobile-first design
                                      4. 4. Prioritize user experience over features
