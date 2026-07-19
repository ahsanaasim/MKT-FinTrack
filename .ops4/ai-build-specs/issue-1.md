# AI Build Task

## Objective
Build the complete FinTrack web application preview using the locked 'Editorial Merchandising Dashboard' design prompt. Follow the provided Design Brain baseline exactly, including all specified screens, layouts, and visual merchandising patterns. Do not simplify or deviate from the editorial, magazine-style, story-driven dashboard aesthetic.

## Context
## Evidence graph summary
Levels: E0=0 E1=34 E2=0 E3=0
Validation: unverified=34
Note: extraction confidence is not stakeholder approval; treat E1 stakeholder beliefs as hypotheses.

## decision:approved
- id=9e0b7e66-7888-45ac-aab6-3d9cd8b8ff01 title="Discovery feedback: UI Variation B" confidence=n/a evidence=e1 validation=unverified description="regenerate using updated design direction"
- id=a1376a9b-2be6-45c8-8208-ffd7de5c42b8 title="Discovery feedback: UI Variation A" confidence=n/a evidence=e1 validation=unverified description="regenerate using updated design direction"
- id=30c72e8b-ffec-4088-afdc-14004190daf3 title="Discovery feedback: UI Variation B" confidence=n/a evidence=e1 validation=unverified description="Regenerate using our updated Design Direction"
- id=c82f0a3f-fc0f-46ba-a0ea-0a0b0c7280ac title="Discovery feedback: UI Variation A" confidence=n/a evidence=e1 validation=unverified description="Regenerate"
- id=c19a3ab9-90f0-4ff1-8322-28724c57fbf2 title="Primary user platform: Responsive web application (laptop/desktop/mobile browser)" confidence=0.98 evidence=e1 validation=unverified kind=stakeholder_belief description="Client clarifies that the MVP is a web app with responsive UI, not a mobile app."
- id=071cd697-a09d-44e2-919a-6e25d92c667b title="No offline support required for MVP" confidence=0.98 evidence=e1 validation=unverified kind=stakeholder_belief description="Client states that offline support is not required for MVP; internet connectivity is required."
- id=5582e62b-7f2e-4e54-9e34-9eda1463431e title="No secondary user role for MVP" confidence=0.98 evidence=e1 validation=unverified kind=stakeholder_belief description="Client explicitly states there is no secondary user for MVP; each account is single-user only."
- id=c78934dd-9704-4063-add4-18ecca0425e8 title="User research: permission to observe real end user" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client explicitly grants permission to observe at least one real end user for workflow validation."
- id=bb8cf1fe-0885-4158-aac0-fc9e4326ed4e title="Accessibility: Follow standard best practices, no formal compliance for MVP" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client states that while accessibility is valued, formal standards like WCAG AA are not required for launch. Standard best practices (contrast, readable text, touch targets, screen reader support wher"
## feature:approved
- id=b587f334-2716-4692-8f9d-6629d96dd7d7 title="Responsive web application dashboard" confidence=0.98 evidence=e1 validation=unverified kind=stakeholder_belief description="Client corrects earlier assumption: MVP is a web app with responsive UI, not Android/iOS native."
- id=bf326b5c-6c7b-4f4f-add5-f3c3b90e3e91 title="Connection status page for account/institution sync" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client requests a page showing which email accounts and financial institutions are synced and when last updated."
- id=b2917e4f-0adc-4aaf-97d2-c230aa3b6814 title="User review and correction of parsed data" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client requests a review/correction step to build trust before saving parsed data."
- id=66f95a99-6fdf-475d-9b5b-fbf9bd2ccddf title="Manual upload option for PDF statements" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client explicitly requests a manual upload fallback for cases where email parsing fails."
- id=6a553f8f-8f80-4d67-9ce2-baf0b7012493 title="Current manual financial tracking workflow" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client described the step-by-step process users follow today to manage credit card bills and investments."
- id=12a309c7-e103-4b24-b65c-37282edb9fb2 title="Integration with CDSL, NSDL, and major bank statement parsers" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client lists parsers for CDSL, NSDL, and major bank statements as required integrations."
- id=999ef019-5224-4fa4-909a-679375cf2a97 title="Stabilized OAuth and robust Gmail parsing for external accounts" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client re-emphasizes that improving onboarding reliability and parsing accuracy is the highest MVP priority."
- id=c3860e5f-8019-4732-a541-baf26a2c5838 title="Advanced tax-optimization insights (post-launch)" confidence=0.80 evidence=e1 validation=unverified kind=stakeholder_belief description="Client lists this as a nice-to-have for later phases."
- id=71e61fe8-2396-477a-8707-98bdfbcc31b3 title="Encrypted in-app vault for statement storage" confidence=0.90 evidence=e1 validation=unverified kind=stakeholder_belief description="Client describes secure storage of raw statements as a must-have."
- id=f5f9551c-baf6-47d4-bb48-495ecfdc8628 title="One-click credit card bill payment via UPI/BBPS" confidence=0.90 evidence=e1 validation=unverified kind=stakeholder_belief description="Client describes seamless payment as a key user action."
- id=abd20cf8-fcbf-4a9f-966b-551125c8cf39 title="Smart push notifications for transactions and due dates" confidence=0.90 evidence=e1 validation=unverified kind=stakeholder_belief description="Client describes actionable alerts and reminders as a core workflow."
- id=514d4026-fa92-4f76-ba87-540a88efbacf title="Automated financial dashboard with statement parsing" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client describes a dashboard that automatically pulls and parses financial data from emails."
## business_rule:approved
- id=4c5a9b64-df45-41f7-9365-b5411db412b4 title="MVP supports only selected banks and statement formats" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client wants it clear that v1 is limited to selected banks/formats, with more added over time."
- id=93fac3be-ebe1-4639-a089-f10d2e9b2196 title="MVP success metrics: Onboarding, parsing accuracy, engagement, payment adoption, satisfaction" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client lists five specific metrics for measuring MVP success in the first 90 days."
- id=270475ec-c6f0-4fc9-9e01-0bec20e3676f title="Business outcome: Build user trust through reliable automation" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client states that the most important business outcome is building user trust by ensuring users never have to manually track bills or investments again."
- id=6d59b841-4ca9-4ee4-9533-d9d7749af31a title="Manual verification fallback for failed parsing" confidence=0.85 evidence=e1 validation=unverified kind=stakeholder_belief description="Client mentions that when parsing fails, users must verify or enter information manually. This implies a fallback workflow is needed."
- id=75b5c488-b27c-4ce0-9268-872d693a91c8 title="Access control: Only user can access their decrypted data" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client specifies strict access control for privacy."
- id=9db49478-da99-46ef-9a22-4528f20ec651 title="Automated alerts for payment due dates" confidence=0.90 evidence=e1 validation=unverified kind=stakeholder_belief description="Client specifies notification timing and routing rules."
## user_role:approved
- id=c11b0817-e3aa-4d19-9791-1a7348de70d7 title="Admin user (internal support/admin team)" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client describes an internal admin/support user role responsible for monitoring system health, investigating parsing failures, managing integrations, and handling customer support, with no access to d"
- id=499faddd-0de2-45f9-a0d6-0ac613818361 title="Individual user (primary)" confidence=0.95 evidence=e1 validation=unverified kind=stakeholder_belief description="Client describes the product as single-user, with each user accessing only their own data."
## data_object:approved
- id=d28c877c-91b7-4b57-8a55-ee26e697d3f5 title="Raw PDF/JSON financial statements" confidence=0.90 evidence=e1 validation=unverified kind=stakeholder_belief description="Client specifies storage of raw statements in the vault."
- id=a361832c-3951-464c-96e2-cc10a8ea248a title="NPS balances" confidence=0.90 evidence=e1 validation=unverified kind=stakeholder_belief description="Client lists NPS balances as a tracked and displayed data point."
- id=d819f6d7-0001-4ef3-93b3-3a691b25770c title="Mutual fund units" confidence=0.90 evidence=e1 validation=unverified kind=stakeholder_belief description="Client lists mutual fund units as a tracked and displayed data point."
- id=6ab5f2df-c3b6-4e0b-a576-91ada8516e37 title="Equity stock holdings" confidence=0.90 evidence=e1 validation=unverified kind=stakeholder_belief description="Client lists equity stock holdings as a tracked and displayed data point."
- id=46d5ac1d-13e8-4733-81a5-827832c17055 title="Credit card due date" confidence=0.90 evidence=e1 validation=unverified kind=stakeholder_belief description="Client lists due date as a tracked and displayed data point."

## Methodology Brain
Mode: authoritative; readiness: 75%; designReady: true.
Critical dimensions meet evidence thresholds for design. Weakest areas: User Evidence (55%, e1); Exceptions & Edge Cases (55%, e1); Accessibility Context (57%, e1). Active risks: 12. Next best question: Can we speak with or observe at least one real end user? Stakeholder beliefs alone cannot validate user needs.

### Evidence gaps
- Business Outcome: 76% (e1)
- Actors & Roles: 76% (e1)
- User Evidence: 55% (e1)
- Current Workflow: 100% (e1)
- Future Workflow: 100% (e1)
- Exceptions & Edge Cases: 55% (e1)
- Permissions: 100% (e1)
- Information & Data: 100% (e1)

### Recommended methods
- Contextual Inquiry: Selected because User Evidence coverage is 55% at e1.
- Accessibility Audit: Selected because Accessibility Context coverage is 57% at e1.

### Rules
- Stakeholder answers are hypotheses unless backed by user/observational evidence (E2+).
- Synthetic personas without research remain assumptions.
- Cover empty, loading, error, success, and permission-denied states for every consequential task.

## Existing Design Rules
Variation: Editorial Merchandising Dashboard
Editorial, magazine-style merchandising layout with immersive hero regions, asymmetric feature blocks, and visually rich, story-driven dashboard — never a grid-first gallery or admin table.
Screens: Landing Page, Login, Register, Forgot Password, User Dashboard Home, Account Integration & Sync, Connect Account Modal, Revoke Integration Modal, Sync History Drawer, Data Review & Correction, Manual PDF Upload, Manual Data Entry Modal, Payments, Payment Confirmation Modal, Payment Success Modal, Payment Error Modal, Encrypted Statement Vault, Statement Detail Drawer, Notifications & Alerts, Notification Detail Drawer, User Settings, Change Password Modal, Privacy Settings Modal, Admin System Health, Admin panels, Onboarding Wizard Steps
Design system: Vibrant merchandising / gallery storefront
Components: 
PREVIEW BUILD: isolated feature branch — do not merge to main; Ops4 will promote the chosen variation.
Fourteen Aperture UI/UX guideline documents are included for tokens/a11y — locked build prompt + screen blueprints win for composition.
Colors: accent: #18181b; neutrals: warm paper / soft neutrals with premium merchandising contrast
Typography: IBM Plex Sans / IBM Plex Sans

## 1. Locked Design Brain build prompt (PRIMARY — implement verbatim)
LOCKED DESIGN SYSTEM (generated by Design Intelligence — reproduce EXACTLY; only LAYOUT may differ across variations)

CLIENT BRAND LOCK (hard constraint from discovery): typography=modern-sans
Typography MUST stay modern sans-serif for headings and UI. Do NOT use display serif.
Product category: commerce
Aesthetic: Vibrant merchandising / gallery storefront
Palette: Shadcn Zinc
Typography pairing: IBM Plex Sans / IBM Plex Sans
Accent: #18181b
Neutrals: warm paper / soft neutrals with premium merchandising contrast
Typography: IBM Plex Sans / IBM Plex Sans
Radius: 0.5rem
App shell: Marketing/commerce top nav + generous content (sidebar only for signed-in buyer account area, never as the primary catalog shell)
Components: shadcn/ui (New York) + lucide-react (or Phosphor if locked)
Colors:
- primary: #18181b
- secondary: #f4f4f5
- background: #ffffff
Avoid:
- Admin sidebar + master-detail + inspector as the primary shopping experience
- Visible UI chrome labels like "Master-Detail Workspace" or "Inspector"
- Dense CRM/table aesthetic for product browsing
- Generic dark navy SaaS-admin skin for a consumer marketplace
- Using Sales Intelligence / Analytics Dashboard as the storefront visual system
- Display serif headings when the client asked for modern sans-serif

Do NOT invent a competing indigo/orange/pink default that conflicts with client brand preferences.
If category is commerce/marketplace/consumer: prioritize storefront polish and top-nav merchandising; forbid admin master-detail as the primary browse experience.

---

This UI is for Web Application (responsive) — design all screens for browser conventions, responsive breakpoints, pointer and touch, and a top navigation shell. Use an editorial, magazine-style merchandising layout: immersive hero regions, asymmetric feature blocks, and visually rich, story-driven dashboard flows. All status variants (empty, loading, error, plan limit, permission denied) must be visually distinct and handled per page.

Build a working Next.js (App Router) app with Tailwind, TypeScript, and shadcn/ui. Use realistic sample data matching the Page by Page Data Points. Implement every page from the page list below, with correct routes, layouts, and components. For each screen, use the layout archetype and regions described. For commerce, use immersive hero blocks, editorial feature sections, and merchandising CTAs; never admin tables or dense rails unless the user is an operator (not the case here).

---

PAGES & LAYOUTS (all must be implemented):

1. Landing Page ('/'): 
   - Archetype: Editorial Merchandising Landing
   - Top nav: Logo (left), PrimaryNavigation (center), LoginCTA/RegisterCTA (right)
   - Hero region: Full-bleed HeroImage (left or top), HeroTitle (overlaid or adjacent), HeroSubtitle, PrimaryCTA (Register), SecondaryCTA (Learn More)
   - Features region: Asymmetric EditorialFeatureBlocks (each with FeatureIcon, FeatureTitle, FeatureDescription, alternating left/right image and text)
   - Supported-banks region: Inline SupportedBankBadges with editorial copy, UnsupportedBankTooltip on hover/click
   - FAQ region: Editorial FAQSection with expandable FAQAccordion, styled as a magazine Q&A
   - Footer: FooterLinks, PrivacyPolicyLink, TermsOfServiceLink, ContactLink, CopyrightNotice
   - Status: Loading (skeletons for hero/features/FAQ, nav/footer always visible), Error (ErrorBanner at top, retry option)

2. Login ('/auth/login'):
   - Archetype: Editorial Auth Form
   - Centered editorial card with Logo, page-header, EmailOrMobileField, PasswordField, LoginButton (primary, disabled until valid), ForgotPasswordLink, RegisterLink
   - Editorial intro text above form (e.g., "Welcome back to your financial story")
   - Error: LoginErrorMessage above form, SupportLink
   - Loading: LoginButton shows spinner, fields disabled

3. Register ('/auth/register'):
   - Archetype: Editorial Auth Form
   - Centered editorial card with Logo, FormTitle, NameField, EmailOrMobileField, PasswordField, ConfirmPasswordField, RegisterButton (primary, disabled until valid), LoginLink
   - Editorial intro text above form (e.g., "Start your journey to effortless finance")
   - Footer: TermsLink, PrivacyLink, AccessibilityStatement
   - Error: Error Message above form
   - Loading: RegisterButton shows spinner, fields disabled
   - Plan limit/permission denied: Show Plan Limit Message or Permission Denied Message, only LoginLink enabled

4. Forgot Password ('/auth/forgot'):
   - Archetype: Editorial Auth Form
   - Centered editorial card with Logo, PageTitle, InstructionText, EmailOrMobileField, SubmitButton (primary, disabled until valid), BackToLoginLink
   - Editorial reassurance copy (e.g., "We'll help you get back on track")
   - Error: FormErrorMessage above form
   - Loading: SubmitButton shows spinner, fields disabled
   - Plan limit/permission denied: PlanLimitMessage or PermissionDeniedMessage, only BackToLoginLink enabled

5. User Dashboard Home ('/dashboard'):
   - Archetype: Editorial Dashboard
   - Top nav: Logo (left), TopNav (center), UserAvatarDropdown/NotificationsBell (right)
   - Hero region: Immersive DashboardHero (large net worth metric, personalized greeting, hero illustration)
   - Main: Asymmetric EditorialSummaryBlocks (NPS balances, Mutual fund units, Equity stock holdings, Credit card due date), each with large icon, headline, and supporting chart or trend
   - Editorial InvestmentStorySection: InvestmentBreakdownChart with narrative copy
   - RecentActivityTimeline: Vertical timeline of recent activity, styled as a magazine feature
   - AlertBanner (Payment Due/Connection Issue) as editorial callouts
   - PayCreditCardAction as a prominent, editorial CTA block
   - ConnectAccountCTA as a story-driven onboarding prompt
   - Status: 
     - Default: All blocks, charts, and actions visible
     - Empty: Editorial OnboardingHero, ConnectAccountButton, OnboardingIllustration, HelpLink (no summary blocks)
     - Loading: Skeleton loaders for all blocks/charts/activity
     - Error: Error banner at top, Retry action, (if partial data, show last known snapshot with overlays)
     - Plan limit: Plan limit banner, Upgrade plan action, disabled premium actions
     - Permission denied: Permission denied banner, Contact support

6. Account Integration & Sync ('/accounts'):
   - Archetype: Editorial Integration Overview
   - Header: Editorial PageTitle, SupportedBankCoverageIndicator with inline copy, AddAccountButton
   - Main: EditorialIntegrationBlocks (each with Connected account email, Connected institution name, ConnectionStatusBadge, Last sync time, SyncHistoryButton, RevokeIntegrationButton, Sync error badge), arranged in asymmetric magazine-style blocks (not grid)
   - Status:
     - Default: All blocks visible, AddAccountButton enabled
     - Empty: Editorial OnboardingBlock, SupportedBankCoverageIndicator, AddAccountButton
     - Loading: Skeleton loaders for blocks, SupportedBankCoverageIndicator
     - Error: Error message at top, Retry button, SupportedBankCoverageIndicator
     - Plan limit: Upgrade plan action, disabled AddAccountButton
     - Permission denied: Re-authenticate action, SupportedBankCoverageIndicator

7. Connect Account Modal (triggered from AddAccountButton):
   - Archetype: Editorial Modal, single-column form
   - ModalTitle, ProviderSelectDropdown (Gmail, ICICI, HDFC, Axis, CDSL, NSDL, Other), PermissionsSummary, SupportedBanksLink, ConnectButton (primary), CancelButton
   - Editorial copy explaining privacy and security
   - Status: Loading spinner, Error Message + Retry Button + Help Center Link, Plan Limit Message + Upgrade Plan Button, Permission Denied Message + Help Center Link

8. Revoke Integration Modal (triggered from RevokeIntegrationButton):
   - Archetype: Editorial Modal, warning style
   - WarningIcon, IntegrationNameText, WarningMessageText, DataLossImpactText, ConfirmButton (primary), CancelButton
   - Editorial warning copy (e.g., "Revoking this account will remove its story from your dashboard")
   - Status: Loading spinner, Error Message + Retry Revoke Integration, Plan Limit Message, Permission Denied Message

9. Sync History Drawer (triggered from SyncHistoryButton):
   - Archetype: Editorial Drawer, vertical timeline
   - IntegrationNameHeader, SyncTimeline (vertical magazine-style timeline of SyncEventItems with SyncStatusBadge, SyncErrorTooltip), LastSuccessfulSyncText, ManualSyncButton, CloseDrawerButton
   - Status: Empty State Message if no events, Loading spinner, Error Message + Retry Load Sync History, Plan Limit Message, Permission Denied Message

10. Data Review & Correction ('/review'):
    - Archetype: Editorial Review Form
    - Editorial summary blocks for all parsed data points (credit card, investments, NPS), each with editable fields, Confirm/Save and Edit/Cancel actions, and narrative copy explaining the importance of review
    - Error: Error messaging, Retry and Manual Upload options

11. Manual PDF Upload ('/upload'):
    - Archetype: Editorial Upload Card
    - Large file picker, upload progress, supported formats/size limits, CTA to review/correct parsed data, editorial copy explaining fallback
    - Success: Success message, CTA to review/correct
    - Error: Error messaging, Retry and support options

12. Manual Data Entry Modal (fallback):
    - Archetype: Editorial Modal, single-column form
    - Editable fields for all required data points, Save/Cancel actions, editorial guidance copy

13. Payments ('/payments'):
    - Archetype: Editorial Payment Card
    - Pre-filled with parsed due amounts, Payment method selection, Confirm and Pay, editorial reassurance copy
    - Payment Confirmation Modal: Summary of bill, due date, amount, Confirm/Cancel, editorial confirmation copy
    - Payment Success Modal: Receipt summary, CTA to dashboard or vault, editorial success copy
    - Payment Error Modal: Error messaging, Retry and support options, editorial troubleshooting copy

14. Encrypted Statement Vault ('/vault'):
    - Archetype: Editorial Vault Gallery
    - Magazine-style list of statement cards with download links, only user can access, editorial privacy copy
    - Loading: Skeleton loaders
    - Empty: Editorial prompt to connect accounts or upload statements
    - Error: Error messaging, Retry and support options
    - Statement Detail Drawer: Statement metadata, download PDF/JSON, delete option, editorial context

15. Notifications & Alerts ('/notifications'):
    - Archetype: Editorial Notification Feed
    - List of notification cards styled as magazine callouts, each linking to relevant action (pay bill, view statement)
    - Empty: Friendly, editorial copy
    - Error: Error messaging, Retry and support options
    - Notification Detail Drawer: Full message, CTA to pay/view/dismiss, editorial context

16. User Settings ('/settings'):
    - Archetype: Editorial Settings Cards
    - Profile info, password change, notification toggles, integration management, editorial privacy copy
    - Permission denied: Clear, actionable messaging, CTA to re-authenticate
    - Change Password Modal, Privacy Settings Modal

17. Admin System Health ('/admin') and panels:
    - Internal-only, not linked from user nav. No access to decrypted user data. (Implement as separate route, not visible to users)

18. Onboarding Wizard Steps (as per sitemap):
    - Each step is a full-width, visually rich editorial card with illustration, value prop, and CTA to next step. Steps: Welcome, Connect Email, Connect Financial Accounts, First Sync (loading), Review Data, Manual Upload Fallback, Success. Editorial storytelling copy throughout.

---

QUALITY BAR: 2020s senior product-designer / ecommerce-polished prototype — beautiful hierarchy, intentional whitespace, strong editorial merchandising when selling; never a dated admin CRM or thin CRUD shell. All status variants (empty, loading, error, plan limit, permission denied) must be visually distinct and handled per page. Use shadcn/ui Cards, Editorial Feature Blocks, and modals/drawers for all commerce/consumer flows. Use Table only for true operational lists (not present here). All filters per page must be implemented as facet chips or filter drawers, not dense spreadsheet-style unless for operator/admin (not the case here).

DO NOT:
- Collapse multi-region screens into a single card
- Invent jargon chrome labels (e.g., 'Master-Detail Workspace')
- Ship a subset of pages
- Use a dark navy SaaS-admin look
- Use display serif headings
- Switch to a mobile or admin platform

---

PAGES TO IMPLEMENT:
[Landing Page, Login, Register, Forgot Password, User Dashboard Home, Account Integration & Sync, Connect Account Modal, Revoke Integration Modal, Sync History Drawer, Data Review & Correction, Manual PDF Upload, Manual Data Entry Modal, Payments, Payment Confirmation Modal, Payment Success Modal, Payment Error Modal, Encrypted Statement Vault, Statement Detail Drawer, Notifications & Alerts, Notification Detail Drawer, User Settings, Change Password Modal, Privacy Settings Modal, Admin System Health, Admin panels, Onboarding Wizard Steps]

Use realistic sample data for all summary blocks, charts, and lists. All navigation must be top nav (never sidebar except for settings/account area if needed). All screens must be responsive and visually consistent with the locked design system.

## 2. Design Pattern Brain (REQUIRED for matching screens)

Design Pattern Brain briefs (REQUIRED composition for matching screen types — esp. auth/register/login):
- `.ops4/design-system/patterns/pattern-1-landing.md`
- `.ops4/design-system/patterns/pattern-2-landing.md`
- `.ops4/design-system/patterns/pattern-3-authentication.md`
- `.ops4/design-system/patterns/pattern-4-authentication.md`
- `.ops4/design-system/patterns/pattern-5-dialog-drawer.md`
- `.ops4/design-system/patterns/pattern-6-dialog-drawer.md`
- `.ops4/design-system/patterns/pattern-7-entity-details.md`
Apply composition, density, hierarchy, spacing, and surfaces from these briefs. Keep product brand tokens; do not clone reference branding.
If patterns specify centered auth and the current auth UI is multi-panel, reshape auth screens to match.

## Design Pattern Brain (composition geometry only — keep locked product tokens)
These patterns are approved visual-memory references.
Apply archetype, reading flow, density, hierarchy, spacing rhythm, and surface structure only. DO NOT adopt reference hex colors or font families — use locked designMemory tokens.
KEEP this product's brand tokens (logo, primary brand color, locked Figma/product colors) — do not clone proprietary branding/copy from the reference product.
If a retrieved pattern is a centered auth/register card and the current screen is a heavier multi-panel auth layout, RESHAPE the auth/register screen to match the pattern archetype.

### Pattern 1: Interactive 3D Configurator
- Screen type: landing
- Primary task: Convert visitor / communicate value
- Composition archetype: Interactive 3D Configurator
- Reading flow: Hero (Configurator) → Feature Highlight (synced) → Price/Specs → Purchase
- Density: spacious
- Symmetry: symmetric
- Primary focal point: Hero / primary CTA
- Secondary focal points: Features, Social proof
- Surfaces: canvas light marketing page; cards Neutral studio background. Product: Realistic materials. UI: Minimal overlay.; borders soft; shadows subtle
- Components: hero (primary), primary_cta (primary), section (secondary)
- Interactions: Inside Configurator UI + Sticky Bottom Bar, Real-time rendering, material swap animation, camera rotate/zoom, light reflection
- Why it works: Increases ownership feeling. 360 view reduces return rates. Direct add-to-cart. Increases ownership feeling. 360 view reduces return rates. Direct add-to-cart.
- Summary: Landing pattern: Interactive 3D Configurator
3d, configurator, customizer, interactive, product, interactive product demo
1. Hero (Configurator), 2. Feature Highlight (synced), 3. Price/Specs, 4. Purchase
Inside Configurator UI + Sticky Bottom Bar
Neutral studio background. Product: Realistic materials. UI: Minimal overlay.
Increases ownership feeling. 360 view reduces return rates. Direct add-to-cart.
### Pattern 2: Bento Grid Showcase
- Screen type: landing
- Primary task: Convert visitor / communicate value
- Composition archetype: Bento Grid Showcase
- Reading flow: Hero → Bento Grid (Key Features) → Detail Cards → Tech Specs → CTA
- Density: spacious
- Symmetry: symmetric
- Primary focal point: Hero / primary CTA
- Secondary focal points: Features, Social proof
- Surfaces: canvas light marketing page; cards Card backgrounds: #F5F5F7 or Glass. Icons: Vibrant brand colors. Text: Dark.; borders soft; shadows subtle
- Components: hero (primary), primary_cta (primary), section (secondary)
- Interactions: Floating Action Button or Bottom of Grid, Hover card scale (1.02), video inside cards, tilt effect, staggered reveal
- Why it works: Scannable value props. High information density without clutter. Mobile stack. Scannable value props. High information density without clutter. Mobile stack.
- Summary: Landing pattern: Bento Grid Showcase
bento, grid, features, modular, apple-style, showcase, feature-rich showcase
1. Hero, 2. Bento Grid (Key Features), 3. Detail Cards, 4. Tech Specs, 5. CTA
Floating Action Button or Bottom of Grid
Card backgrounds: #F5F5F7 or Glass. Icons: Vibrant brand colors. Text: Dark.
Scannable value props. High information density without clutter. Mobile stack.
### Pattern 3: Centered authentication card
- Screen type: authentication
- Primary task: Authenticate with email and password to access the application
- Composition archetype: centered-card
- Reading flow: brand-logo → form-title → form-fields → form-actions → secondary-links
- Density: comfortable
- Symmetry: symmetric
- Primary focal point: form-title and fields
- Secondary focal points: brand-logo, primary action button
- Spacing rhythm: page 32 / section 24 / card 16 / base 4
- Surfaces: canvas neutral; cards primary; borders subtle; shadows minimal
- Components: form-field (secondary), checkbox (secondary), button-primary (secondary), link-secondary (secondary)
- Interactions: form-validation, disabled-primary-action, show-hide-password
- Why it works: Centering and whitespace create a calm, focused entry point for authentication. Single-column, minimal distractions, and clear hierarchy reduce cognitive load and error risk. Card elevation and rounded corners reinforce separation from background and draw attention.
- Avoid when: Multi-step or highly transactional flows; When space is limited and vertical stacking would cause excessive scrolling
- Summary: This pattern is a centered authentication card for desktop SaaS apps, focusing user attention on a single sign-in task. The composition uses a single-column card with generous whitespace, clear hierarchy, and minimal distractions, making it suitable for login, registration, or password reset screens. Works best when authentication is the only task and branding is important. Avoid for multi-step onboarding or dense transactional flows.
### Pattern 4: Centered authentication card
- Screen type: authentication
- Primary task: Create a new user account by entering email and password
- Composition archetype: centered-card
- Reading flow: page-header → primary-region
- Density: comfortable
- Symmetry: symmetric
- Primary focal point: authentication-card
- Secondary focal points: form-fields, primary-action
- Spacing rhythm: page 32 / section 24 / card 16 / base 4
- Surfaces: canvas neutral; cards primary; borders subtle; shadows minimal
- Components: form-field (secondary), primary-action (secondary), secondary-action (secondary)
- Interactions: form-validation, disabled-primary-action, show-hide-password
- Why it works: Centering and card containment reduce cognitive load and focus attention on the authentication task. Single-column layout is optimal for short forms and improves accessibility. Clear separation of primary and secondary actions prevents accidental navigation.
- Avoid when: Multi-step onboarding or marketing-heavy flows; Dense data input requirements
- Summary: A centered authentication card pattern for desktop SaaS apps, optimized for sign-up or sign-in flows. The primary task is account creation, with a single-column card containing form fields and clear primary/secondary actions. The composition uses generous whitespace, strong visual hierarchy, and minimal distractions, making it suitable for focused authentication tasks. Avoid for multi-step onboarding or marketing-heavy screens.
### Pattern 5: drawer dialog with header and action bar
- Screen type: dialog_drawer
- Primary task: Complete or review a focused task in a side panel without losing main context
- Composition archetype: drawer-header-content-actions
- Reading flow: drawer-header → drawer-content → drawer-actions
- Density: comfortable
- Symmetry: asymmetric
- Primary focal point: drawer-header (title and close/action buttons)
- Secondary focal points: drawer-content card
- Spacing rhythm: page 16 / section 16 / card 10 / base 4
- Surfaces: canvas neutral; cards always; borders subtle; shadows minimal
- Components: action-button (secondary)
- Interactions: drawer-close, primary-secondary-actions
- Why it works: Keeps user in context while enabling focused task completion. Clear separation of header, content, and actions aids scanability. Primary action is visually distinct, reducing user error.
- Avoid when: Tasks require multi-step flows or complex navigation.; Screen space is too limited for a 500px drawer.; User needs to compare multiple entities side-by-side.
- Summary: A dialog drawer pattern for desktop B2B SaaS, supporting focused tasks like editing or reviewing entities without losing main context. The composition features a fixed-width side panel with a strong header, clear content region, and grouped action buttons. Visual hierarchy is established through scale, contrast, and whitespace, with accent color reserved for primary actions. Best for workflows needing quick, contextual actions; avoid for complex or multi-step tasks.
### Pattern 6: filter drawer for list/table
- Screen type: dialog_drawer
- Primary task: Refine and filter a list of entities without losing context of the main data table
- Composition archetype: sidebar-header-content
- Reading flow: sidebar-navigation → page-header → main-list-table → filter-drawer
- Density: comfortable
- Symmetry: asymmetric
- Primary focal point: filter-drawer
- Secondary focal points: page-header, main-list-table
- Spacing rhythm: page 32 / section 32 / card 16 / base 4
- Surfaces: canvas neutral; cards selective; borders subtle; shadows minimal
- Components: filter-group (secondary), list-table (secondary), sidebar-navigation (secondary)
- Interactions: drawer-open-close, multi-select-filter, row-hover-actions
- Why it works: Drawer pattern allows advanced filtering without disrupting main workflow. Sidebar keeps navigation persistent and context clear. Clear separation of primary (Apply Filters) and secondary (Reset All) actions reduces error risk.
- Avoid when: Screen width is below 900px; Filtering is infrequent or trivial; Modal dialogs are preferred for workflow reasons
- Summary: This is a dialog_drawer pattern for desktop list/table screens, where users refine large datasets using a right-side filter drawer without losing context of the main content. The composition uses a sidebar-header-content archetype, with clear hierarchy and comfortable density. Suitable for operational dashboards or admin tools with complex filtering needs. Avoid on mobile or when filters are simple.
### Pattern 7: Sidebar profile details with sectioned editing
- Screen type: entity_details
- Primary task: View and edit structured profile or entity details
- Composition archetype: sidebar-header-content
- Reading flow: app-header → sidebar-profile-summary → main-profile-details
- Density: comfortable
- Symmetry: asymmetric
- Primary focal point: main-profile-details
- Secondary focal points: sidebar-profile-summary, edit actions
- Spacing rhythm: page 32 / section 32 / card 16 / base 4
- Surfaces: canvas neutral; cards selective; borders subtle; shadows minimal
- Components: profile-summary-card (secondary), sectioned-detail-card (secondary), sidebar-navigation (secondary)
- Interactions: section-edit, row-hover-actions
- Why it works: Sidebar provides persistent context and quick navigation. Sectioned cards in main region support focused editing and scanning. Whitespace and subtle dividers create clear separation without visual clutter.
- Avoid when: Mobile-first workflows; Entity details are too simple for sectioning; No need for persistent sidebar context
- Summary: This is a sidebar-header-content pattern for entity detail screens, ideal for profile or structured record editing in SaaS or social platforms. The layout features a persistent sidebar with user summary and navigation, and a main region with sectioned, card-based editable details. Visual hierarchy is established through scale, whitespace, and subtle dividers, supporting comfortable reading and quick edits. Best for desktop contexts where sidebar context is valuable; avoid on mobile or for simple entities.

## 3. Screen composition blueprints

Screen composition blueprints (REQUIRED layouts — do not collapse):
- `.ops4/design-system/screens/landing-page.md`
- `.ops4/design-system/screens/login.md`
- `.ops4/design-system/screens/register.md`
- `.ops4/design-system/screens/forgot-password.md`
- `.ops4/design-system/screens/user-dashboard-home.md`
- `.ops4/design-system/screens/account-integration-sync.md`
- `.ops4/design-system/screens/connect-account-modal.md`
- `.ops4/design-system/screens/revoke-integration-modal.md`
- `.ops4/design-system/screens/sync-history-drawer.md`
- `.ops4/design-system/screens/data-review-correction.md`
- `.ops4/design-system/screens/manual-pdf-upload.md`
- `.ops4/design-system/screens/manual-data-entry-modal.md`
- `.ops4/design-system/screens/payments.md`
- `.ops4/design-system/screens/payment-confirmation-modal.md`
- `.ops4/design-system/screens/payment-success-modal.md`
- `.ops4/design-system/screens/payment-error-modal.md`
- `.ops4/design-system/screens/encrypted-statement-vault.md`
- `.ops4/design-system/screens/statement-detail-drawer.md`
- `.ops4/design-system/screens/notifications-alerts.md`
- `.ops4/design-system/screens/notification-detail-drawer.md`
- `.ops4/design-system/screens/user-settings.md`
- `.ops4/design-system/screens/change-password-modal.md`
- `.ops4/design-system/screens/privacy-settings-modal.md`
- `.ops4/design-system/screens/admin-system-health.md`
- `.ops4/design-system/screens/admin-panels.md`
- `.ops4/design-system/screens/onboarding-wizard-steps.md`
# Screen blueprint: Landing Page

Route: `/`
Purpose: Public marketing and information page introducing FinTrack, its value proposition, and key features. Includes CTAs to Login and Register.
Layout: **marketing-landing**

## Required regions
- **header**: Branding, navigation, and quick access to authentication CTAs. — components: Logo, PrimaryNavigation, LoginCTA, RegisterCTA
- **hero**: Immediate value proposition, visual brand impact, and primary call-to-action. — components: HeroTitle, HeroSubtitle, HeroIllustration, PrimaryCTA, SecondaryCTA
- **features**: Highlight core product features and differentiators. — components: FeatureCard, FeatureIcon, FeatureTitle, FeatureDescription
- **supported-banks**: Communicate supported bank/statement coverage for transparency. — components: SupportedBankBadge, UnsupportedBankTooltip
- **faq**: Address common questions and reduce onboarding friction. — components: FAQAccordion, FAQQuestion, FAQAnswer
- **footer**: Legal, privacy, contact, and secondary navigation. — components: FooterLinks, PrivacyPolicyLink, TermsOfServiceLink, ContactLink, CopyrightNotice

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Login

Route: `/auth/login`
Purpose: User authentication for Individual User and Admin.
Layout: **single-column-form**

## Required regions
- **form**: Collects user credentials for authentication. — components: EmailOrMobileField, PasswordField, LoginButton, ForgotPasswordLink, RegisterLink

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Register

Route: `/auth/register`
Purpose: User registration for Individual User.
Layout: **single-column-form**

## Required regions
- **header**: Branding and navigation to login for returning users — components: Logo, LoginLink
- **main**: Primary registration form for new users — components: FormTitle, NameField, EmailOrMobileField, PasswordField, ConfirmPasswordField, RegisterButton
- **footer**: Legal and accessibility links — components: TermsLink, PrivacyLink, AccessibilityStatement

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Forgot Password

Route: `/auth/forgot`
Purpose: Password reset initiation.
Layout: **single-column-form**

## Required regions
- **header**: Branding and navigation context — components: Logo, PageTitle, BackToLoginLink
- **main**: Password reset form entry — components: InstructionText, EmailOrMobileField, SubmitButton, FormErrorMessage

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: User Dashboard Home

Route: `/dashboard`
Purpose: Authenticated home for Individual Users. Consolidated financial dashboard with credit card, investment, and NPS data, actionable alerts, and entry points to all major workflows.
Layout: **dashboard-grid**

## Required regions
- **header**: Branding, navigation, and quick access to user account/settings. — components: Logo, TopNav, UserAvatarDropdown, NotificationsBell
- **main**: Primary dashboard content: financial summary, charts, actionable alerts, and recent activity. — components: SummaryCard(NPS balances), SummaryCard(Mutual fund units), SummaryCard(Equity stock holdings), SummaryCard(Credit card due date), NetWorthChart, InvestmentBreakdownChart, RecentActivityList, AlertBanner(Payment Due), AlertBanner(Connection Issue), PayCreditCardAction, ConnectAccountCTA

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Account Integration & Sync

Route: `/accounts`
Purpose: Connect Gmail and supported financial institution accounts via OAuth, view connection status, sync history, and manage/revoke integrations.
Layout: **gallery-grid**

## Required regions
- **header**: Introduce integration purpose, show supported banks/formats, and provide add account CTA. — components: PageTitle, SupportedBankCoverageIndicator, AddAccountButton
- **main**: Display connected accounts, their sync status, and allow management (revoke, resync, view history). — components: AccountConnectionCard, ConnectionStatusBadge, SyncHistoryButton, RevokeIntegrationButton

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Connect Account Modal

Purpose: OAuth connect flow for Gmail or supported financial institution. User selects provider, reviews permissions, and connects.
Layout: **single-column-form**

## Required regions
- **main**: Guide user through provider selection, permission review, and connection. — components: ModalTitle, ProviderSelectDropdown, PermissionsSummary, SupportedBanksLink, ConnectButton, CancelButton

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Revoke Integration Modal

Purpose: Confirm revocation of account integration.
Layout: **single-column-form**

## Required regions
- **main**: Warn user about data loss and confirm/cancel integration revocation. — components: WarningIcon, IntegrationNameText, WarningMessageText, DataLossImpactText, ConfirmButton, CancelButton

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Sync History Drawer

Purpose: Detailed sync history for a connected account.
Layout: **single-column-form**

## Required regions
- **main**: Display timeline of sync events, errors, and last successful sync for the selected integration. — components: IntegrationNameHeader, SyncTimeline, SyncEventItem, SyncStatusBadge, SyncErrorTooltip, LastSuccessfulSyncText, ManualSyncButton, CloseDrawerButton

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Data Review & Correction

Route: `/review`
Purpose: Step for users to review, confirm, or correct parsed financial data before saving to their dashboard.
Layout: **two-column-main-rail**

## Required regions
- **header**: Communicate step context and parsing source — components: StepIndicator, ParsedSourceBadge, SupportedBankFormatIndicator
- **main**: Display and allow editing of parsed financial data — components: ParsedDataTable, EditableField, InlineValidation, CorrectionTooltip
- **context-rail**: Show parsing summary, upload details, and guidance — components: ParsingSummaryCard, OriginalStatementPreview, HelpTooltip
- **footer**: Enable user actions to confirm, save, or cancel corrections — components: ConfirmAndSaveButton, EditCancelButton

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Manual PDF Upload

Route: `/upload`
Purpose: Fallback workflow for uploading PDF statements when automated parsing fails or is unsupported.
Layout: **single-column-form**

## Required regions
- **header**: Communicate upload context and supported formats — components: StepIndicator, SupportedBankFormatIndicator, UploadGuidanceText
- **main**: Enable file selection, show progress, and handle errors — components: FilePicker, UploadProgressBar, SupportedFormatsList, SizeLimitBadge, UploadErrorBanner, HelpTooltip
- **footer**: Allow user to submit or cancel upload — components: UploadButton, CancelButton

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Manual Data Entry Modal

Purpose: Fallback for unsupported or unparseable statements. User can manually enter all required data points.
Layout: **single-column-form**

## Required regions
- **header**: Explain manual entry fallback and instructions — components: InfoIcon, TitleText, InstructionsText
- **main**: Editable fields for all required data points — components: StatementTypeSelect, StatementPeriodDateRange, AccountNumberField, IssuerNameField, TotalOutstandingField, DueDateField, TransactionTable, InvestmentTable, UploadOriginalPDFField
- **footer**: Save/cancel actions and support — components: SaveButton, CancelButton, SupportLink

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Payments

Route: `/payments`
Purpose: Initiate and complete one-click credit card bill payments via UPI/BBPS.
Layout: **single-column-form**

## Required regions
- **header**: Display page title and context for payment action — components: PageTitle, DueSoonBadge, SupportedBanksTooltip
- **main**: Collect and confirm payment details, select payment method, and initiate payment — components: CreditCardBillSummaryCard, DueDateText, OutstandingAmountMetric, PaymentMethodSelector, UPIIdInput, PayNowButton, ManualEntryFallbackLink
- **footer**: Provide legal, support, and security info — components: SecurityAssuranceText, SupportLink

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Payment Confirmation Modal

Purpose: Confirm payment details before submission.
Layout: **single-column-form**

## Required regions
- **main**: Summarize bill and payment details for user confirmation — components: CreditCardBillSummaryCard, DueDateText, OutstandingAmountMetric, PaymentMethodSummary, UPIIdSummary, ConfirmButton, CancelButton

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Payment Success Modal

Purpose: Payment completed successfully.
Layout: **single-column-form**

## Required regions
- **main**: Show payment receipt and next steps — components: SuccessIllustration, ReceiptSummaryCard, TransactionIdText, PaidAmountMetric, PaidToText, PaidFromText, PaymentDateText, DownloadReceiptButton, GoToDashboardButton, GoToVaultButton

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Payment Error Modal

Purpose: Payment failed.
Layout: **single-column-form**

## Required regions
- **main**: Communicate payment failure, offer retry and support options. — components: ErrorIcon, ErrorMessageText, RetryPaymentButton, ContactSupportLink, CloseModalButton

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Encrypted Statement Vault

Route: `/vault`
Purpose: Secure, encrypted in-app vault for storing and downloading historical PDF/JSON statements.
Layout: **list-detail**

## Required regions
- **header**: Page title and vault summary. — components: VaultTitle, VaultDescription, DownloadAllStatementsButton
- **filters**: Allow user to filter/search statements by type, date, or institution. — components: StatementTypeFilter, DateRangeFilter, InstitutionFilter, SearchBar
- **main**: Display list of stored statements with download and metadata. — components: StatementListTable

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Statement Detail Drawer

Purpose: View details and download options for a specific statement.
Layout: **single-column-form**

## Required regions
- **header**: Display statement metadata and quick actions — components: StatementFileName, StatementDateRange, StatementSourceBadge
- **main**: Enable download, deletion, and metadata review — components: DownloadPDFButton, DownloadJSONButton, DeleteStatementButton, StatementFilePreview, StatementUploadTimestamp, SupportedFormatsTooltip

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Notifications & Alerts

Route: `/notifications`
Purpose: Centralized feed of actionable alerts for new transactions, payment due dates, and system messages.
Layout: **list-detail**

## Required regions
- **header**: Page title and quick actions — components: PageTitle, MarkAllAsReadButton
- **filters**: Allow user to filter notifications by type or date — components: NotificationTypeFilter, DateRangeFilter, SearchInput
- **main**: Display list of notifications with actionable links — components: NotificationList, NotificationCard, ActionButton, UnreadBadge, Timestamp, NotificationIcon

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Notification Detail Drawer

Purpose: Expanded view of a notification with actionable links.
Layout: **drawer**

## Required regions
- **header**: Displays notification type, icon, and timestamp for quick context. — components: NotificationTypeBadge, NotificationTimestamp, CloseDrawerButton
- **main**: Shows the full notification message, actionable CTAs, and supporting details. — components: NotificationMessageText, DueAmountHighlight, DueDateHighlight, PayNowCTAButton, ViewStatementLink, DismissNotificationButton, StatementSourceBadge, PaymentStatusBadge

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: User Settings

Route: `/settings`
Purpose: Manage account details, privacy preferences, notification settings, and integration revocation.
Layout: **two-column-main-rail**

## Required regions
- **main**: Primary settings management: profile, password, notification preferences. — components: ProfileInfoForm, ChangePasswordForm, NotificationPreferencesToggle, DeleteAccountButton
- **context-rail**: Manage connected accounts, integration status, and revocation. — components: ConnectedAccountsList, IntegrationStatusBadge, RevokeIntegrationButton, SyncHistoryLink

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Change Password Modal

Purpose: Change account password.
Layout: **single-column-form**

## Required regions
- **main**: Allows user to securely change their password. — components: FormTitle, CurrentPasswordField, NewPasswordField, ConfirmPasswordField, PasswordStrengthMeter, SaveButton, CancelButton, FormErrorMessage, FormSuccessMessage

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Privacy Settings Modal

Purpose: Manage privacy and data sharing preferences.
Layout: **single-column-form**

## Required regions
- **main**: Allows user to manage privacy, data sharing, export, and account deletion. — components: FormTitle, DataSharingToggle, DownloadExportDataButton, DeleteAccountButton, DeleteAccountConfirmationDialog, FormErrorMessage, FormSuccessMessage

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Admin System Health

Route: `/admin`
Purpose: Internal-only admin area for monitoring system health, integration status, error logs, and managing supported bank/institution parsers.
Layout: **dashboard-grid**

## Required regions
- **header**: Displays system health summary and quick actions. — components: SystemStatusBadge, LastUpdatedTimestamp, RefreshButton
- **main**: Shows system metrics, integration status, error logs, and parser management. — components: SystemMetricsGrid, IntegrationStatusTable, ErrorLogsTable, SupportedBankCoverageIndicator, ParserManagementPanel

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Admin panels

Layout: **two-column-main-rail**

## Required regions
- **main**: Primary workflow for this screen — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Onboarding Wizard Steps

Layout: **two-column-main-rail**

## Required regions
- **main**: Primary workflow for this screen — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

## 4. Page-by-page data points
Implement screens using this field-level inventory.

Summary: 59 pages, 579 data points, 19 filters.

### Landing Page (/) [default] layout=marketing-landing
Regions:
- header — Branding, navigation, and quick access to authentication CTAs. [Logo, PrimaryNavigation, LoginCTA, RegisterCTA]
- hero — Immediate value proposition, visual brand impact, and primary call-to-action. [HeroTitle, HeroSubtitle, HeroIllustration, PrimaryCTA, SecondaryCTA]
- features — Highlight core product features and differentiators. [FeatureCard, FeatureIcon, FeatureTitle, FeatureDescription]
- supported-banks — Communicate supported bank/statement coverage for transparency. [SupportedBankBadge, UnsupportedBankTooltip]
- faq — Address common questions and reduce onboarding friction. [FAQAccordion, FAQQuestion, FAQAnswer]
- footer — Legal, privacy, contact, and secondary navigation. [FooterLinks, PrivacyPolicyLink, TermsOfServiceLink, ContactLink, CopyrightNotice]
Fields:
- Logo (navigation-item · header · required)
- PrimaryNavigation (navigation-item · header · required)
- LoginCTA (action · header · required)
- RegisterCTA (action · header · required)
- HeroTitle (text · hero · required)
- HeroSubtitle (text · hero · required)
- HeroIllustration (image · hero · required)
- PrimaryCTA (action · hero · required)
- SecondaryCTA (action · hero)
- FeatureCard (text · features · required)
- FeatureIcon (image · features · required)
- FeatureTitle (text · features · required)
- FeatureDescription (text · features · required)
- SupportedBankBadge (badge · supported-banks · required)
- UnsupportedBankTooltip (tooltip · supported-banks)
- FAQAccordion (list · faq · required)
- FAQQuestion (text · faq · required)
- FAQAnswer (text · faq · required)
- FooterLinks (navigation-item · footer · required)
- PrivacyPolicyLink (navigation-item · footer · required)
- TermsOfServiceLink (navigation-item · footer · required)
- ContactLink (navigation-item · footer · required)
- CopyrightNotice (text · footer · required)
- ErrorBanner (badge · header)
Statuses: default, loading, error, plan_limit, permission_denied

### Login (/auth/login) [default] layout=single-column-form
Regions:
- form — Collects user credentials for authentication. [EmailOrMobileField, PasswordField, LoginButton, ForgotPasswordLink, RegisterLink]
Fields:
- EmailOrMobileField (form-field · form · required)
- PasswordField (form-field · form · required)
- LoginButton (action · form · required)
- ForgotPasswordLink (navigation-item · form · required)
- RegisterLink (navigation-item · form · required)
- LoginErrorMessage (badge · form)
Statuses: default, loading, error, empty, plan_limit, permission_denied

### Login (Error State) (/auth/login) [error] layout=single-column-form
Regions:
- form — Collects user credentials for authentication and displays error messaging. [LoginErrorMessage, EmailOrMobileField, PasswordField, LoginButton, ForgotPasswordLink, RegisterLink, SupportLink]
Fields:
- LoginErrorMessage (badge · form · required)
- EmailOrMobileField (form-field · form · required)
- PasswordField (form-field · form · required)
- LoginButton (action · form · required)
- ForgotPasswordLink (navigation-item · form · required)
- RegisterLink (navigation-item · form · required)
- SupportLink (navigation-item · form)
Statuses: error, loading, default, plan_limit, permission_denied

### Register (/auth/register) [default] layout=single-column-form
Regions:
- header — Branding and navigation to login for returning users [Logo, LoginLink]
- main — Primary registration form for new users [FormTitle, NameField, EmailOrMobileField, PasswordField, ConfirmPasswordField, RegisterButton]
- footer — Legal and accessibility links [TermsLink, PrivacyLink, AccessibilityStatement]
Fields:
- Name (form-field · main · required)
- Email or Mobile (form-field · main · required)
- Password (form-field · main · required)
- Confirm Password (form-field · main · required)
- Register Button (action · main · required)
- Login Link (navigation-item · header · required)
- Loading Spinner (badge · main)
- Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
- Logo (badge · header · required)
- FormTitle (text · main · required)
- TermsLink (navigation-item · footer)
- PrivacyLink (navigation-item · footer)
- AccessibilityStatement (navigation-item · footer)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Register (Success) (/auth/register) [success] layout=single-column-form
Regions:
- main — Display success message and next steps [SuccessIcon, SuccessMessage, LoginButton]
Fields:
- SuccessIcon (badge · main · required)
- SuccessMessage (text · main · required)
- LoginButton (action · main · required)
- Loading Spinner (badge · main)
- Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, loading, error, plan_limit, permission_denied

### Register (Error) (/auth/register) [error] layout=single-column-form
Regions:
- main — Display error messaging and allow user to retry registration [ErrorIcon, ErrorMessage, RetryButton, LoginLink]
Fields:
- ErrorIcon (badge · main · required)
- ErrorMessage (text · main · required)
- RetryButton (action · main · required)
- LoginLink (navigation-item · main · required)
- Loading Spinner (badge · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, loading, plan_limit, permission_denied

### Forgot Password (/auth/forgot) [default] layout=single-column-form
Regions:
- header — Branding and navigation context [Logo, PageTitle, BackToLoginLink]
- main — Password reset form entry [InstructionText, EmailOrMobileField, SubmitButton, FormErrorMessage]
Fields:
- Logo (navigation-item · header · required)
- PageTitle (text · header · required)
- InstructionText (text · main · required)
- EmailOrMobileField (form-field · main · required)
- SubmitButton (action · main · required)
- FormErrorMessage (text · main)
- BackToLoginLink (navigation-item · header · required)
- PlanLimitMessage (text · main)
- PermissionDeniedMessage (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Forgot Password (Success) (/auth/forgot) [success] layout=single-column-form
Regions:
- header — Branding and navigation context [Logo, PageTitle, BackToLoginLink]
- main — Confirmation and next steps [SuccessMessage, ResendLink, BackToLoginLink]
Fields:
- Logo (navigation-item · header · required)
- PageTitle (text · header · required)
- SuccessMessage (text · main · required)
- ResendLink (action · main)
- ResendErrorMessage (text · main)
- BackToLoginLink (navigation-item · header · required)
- PlanLimitMessage (text · main)
- PermissionDeniedMessage (text · main)
Statuses: default, loading, error, plan_limit, permission_denied

### Forgot Password (Error) (/auth/forgot) [error] layout=single-column-form
Regions:
- header — Branding and navigation context [Logo, PageTitle, BackToLoginLink]
- main — Error messaging and retry [ErrorMessage, RetryButton, BackToLoginLink]
Fields:
- Logo (navigation-item · header · required)
- PageTitle (text · header · required)
- ErrorMessage (text · main · required)
- RetryButton (action · main)
- BackToLoginLink (navigation-item · header · required)
- PlanLimitMessage (text · main)
- PermissionDeniedMessage (text · main)
Statuses: default, loading, plan_limit, permission_denied

### User Dashboard Home (/dashboard) [default] layout=dashboard-grid
Regions:
- header — Branding, navigation, and quick access to user account/settings. [Logo, TopNav, UserAvatarDropdown, NotificationsBell]
- main — Primary dashboard content: financial summary, charts, actionable alerts, and recent activity. [SummaryCard(NPS balances), SummaryCard(Mutual fund units), SummaryCard(Equity stock holdings), SummaryCard(Credit card due date), NetWorthChart, InvestmentBreakdownChart, RecentActivityList, AlertBanner(Payment Due)]
Fields:
- NPS balances (table-column · dashboard · required)
- Mutual fund units (table-column · dashboard · required)
- Equity stock holdings (table-column · dashboard · required)
- Credit card due date (table-column · dashboard · required)
- Net worth (calculated) (metric · dashboard · required)
- Upcoming payment due (badge · dashboard · required)
- Recent activity (list · dashboard · required)
- Connection status (badge · dashboard · required)
- Pay credit card action (action · dashboard · required)
- Download statement action (action · dashboard)
- Onboarding CTA (action · dashboard · required)
- Plan limit banner (badge · dashboard · required)
- Upgrade plan action (action · dashboard · required)
- Error banner (badge · dashboard · required)
- Retry action (action · dashboard · required)
- Permission denied banner (badge · dashboard · required)
- Contact support (action · dashboard)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### User Dashboard Home (Loading) (/dashboard) [loading] layout=dashboard-grid
Regions:
- header — Branding, navigation, and quick access to user account/settings. [Logo, TopNav, UserAvatarDropdown, NotificationsBell]
- main — Skeleton loaders for summary cards, charts, and activity list. [SummaryCardSkeleton(NPS balances), SummaryCardSkeleton(Mutual fund units), SummaryCardSkeleton(Equity stock holdings), SummaryCardSkeleton(Credit card due date), NetWorthChartSkeleton, InvestmentBreakdownChartSkeleton, RecentActivityListSkeleton, LoadingIndicator]
Fields:
- NPS balances (table-column · dashboard · required)
- Mutual fund units (table-column · dashboard · required)
- Equity stock holdings (table-column · dashboard · required)
- Credit card due date (table-column · dashboard · required)
- Net worth (skeleton) (metric · dashboard)
- Recent activity (skeleton) (list · dashboard)
Statuses: loading

### User Dashboard Home (Empty) (/dashboard) [empty] layout=dashboard-grid
Regions:
- header — Branding, navigation, and quick access to user account/settings. [Logo, TopNav, UserAvatarDropdown, NotificationsBell]
- main — Onboarding CTA to connect accounts, friendly copy, and illustration. [OnboardingCTA, ConnectAccountButton, OnboardingIllustration, HelpLink]
Fields:
- NPS balances (table-column · dashboard · required)
- Mutual fund units (table-column · dashboard · required)
- Equity stock holdings (table-column · dashboard · required)
- Credit card due date (table-column · dashboard · required)
- Onboarding CTA (action · dashboard · required)
- Connect account action (action · dashboard · required)
Statuses: empty

### User Dashboard Home (Error) (/dashboard) [error] layout=dashboard-grid
Regions:
- header — Communicate error state, provide retry and support options. [ErrorMessage, RetryButton, SupportLink]
- main — (If partial data available) Show last known financial snapshot, but with error overlays. [NPSBalanceCard, MutualFundUnitsCard, EquityStockHoldingsCard, CreditCardDueDateCard]
Fields:
- NPS balances (table-column · dashboard · required)
- Mutual fund units (table-column · dashboard · required)
- Equity stock holdings (table-column · dashboard · required)
- Credit card due date (table-column · dashboard · required)
- Error message (text · header · required)
- Retry button (action · header · required)
- Support link (action · header)
Statuses: error, default, empty, loading, plan_limit, permission_denied

### Account Integration & Sync (/accounts) [default] layout=gallery-grid
Regions:
- header — Introduce integration purpose, show supported banks/formats, and provide add account CTA. [PageTitle, SupportedBankCoverageIndicator, AddAccountButton]
- main — Display connected accounts, their sync status, and allow management (revoke, resync, view history). [AccountConnectionCard, ConnectionStatusBadge, SyncHistoryButton, RevokeIntegrationButton]
Fields:
- Connected account email (table-column · main · required)
- Connected institution name (table-column · main · required)
- Connection status (badge · main · required)
- Last sync time (date · main · required)
- Sync error badge (badge · main)
- Supported bank/format coverage indicator (badge · header · required)
- Revoke integration action (action · main · required)
- Sync history action (action · main)
- Add account action (action · header · required)
- Upgrade plan action (action · header)
- Error message (text · header · required)
- Retry button (action · header · required)
- Re-authenticate action (action · header · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Account Integration & Sync (Loading) (/accounts) [loading] layout=gallery-grid
Regions:
- header — Show supported banks/formats and loading indicator. [SupportedBankCoverageIndicator, LoadingIndicator]
- main — Show skeleton loaders for account rows. [AccountConnectionCardSkeleton]
Fields:
- Supported bank/format coverage indicator (badge · header · required)
- Loading indicator (badge · header · required)
- AccountConnectionCardSkeleton (table-column · main · required)
Statuses: loading

### Account Integration & Sync (Empty) (/accounts) [empty] layout=dashboard-grid
Regions:
- header — Introduce the integration feature and reassure about security. [PageTitle, OnboardingSubtitle, SecurityAssuranceBadge]
- main — Guide user to connect their first account and explain benefits. [IllustrationEmptyState, EmptyStateText, ConnectAccountButton]
- footer — Provide access to help/support and supported banks info. [SupportedBanksLink, HelpCenterLink]
Fields:
- Page Title (text · header · required)
- Onboarding Subtitle (text · header)
- Security Assurance Badge (badge · header)
- Illustration (Empty State) (image · main)
- Empty State Text (text · main · required)
- Connect Account Button (action · main · required)
- Supported Banks Link (action · footer)
- Help Center Link (action · footer)
- Loading Spinner (action · main)
- Error Message (text · main · required)
- Retry Button (action · main · required)
- Plan Limit Message (text · main · required)
- Upgrade Plan Button (action · main · required)
- Permission Denied Message (text · main · required)
Statuses: empty, loading, error, plan_limit, permission_denied

### Account Integration & Sync (Error) (/accounts) [error] layout=dashboard-grid
Regions:
- header — Communicate the error context and provide reassurance. [PageTitle, ErrorContextSubtitle]
- main — Display error details and actionable recovery options. [ErrorIcon, ErrorMessage, RetryButton, HelpCenterLink]
Fields:
- Page Title (text · header · required)
- Error Context Subtitle (text · header)
- Error Icon (image · main)
- Error Message (text · main · required)
- Retry Button (action · main · required)
- Help Center Link (action · main)
- Loading Spinner (action · main)
- Plan Limit Message (text · main · required)
- Upgrade Plan Button (action · main · required)
- Permission Denied Message (text · main · required)
Statuses: error, loading, plan_limit, permission_denied

### Connect Account Modal [default] layout=single-column-form
Regions:
- main — Guide user through provider selection, permission review, and connection. [ModalTitle, ProviderSelectDropdown, PermissionsSummary, SupportedBanksLink, ConnectButton, CancelButton]
Fields:
- Modal Title (text · main · required)
- Provider Select Dropdown (form-field · main · required)
- Permissions Summary (form-field · main · required)
- Supported Banks Link (action · main)
- Connect Button (action · main · required)
- Cancel Button (action · main · required)
- Loading Spinner (action · main)
- Error Message (text · main · required)
- Retry Button (action · main · required)
- Help Center Link (action · main)
- Plan Limit Message (text · main · required)
- Upgrade Plan Button (action · main · required)
- Permission Denied Message (text · main · required)
Filters:
- Provider (multi-select)
Statuses: default, loading, error, plan_limit, permission_denied

### Revoke Integration Modal [default] layout=single-column-form
Regions:
- main — Warn user about data loss and confirm/cancel integration revocation. [WarningIcon, IntegrationNameText, WarningMessageText, DataLossImpactText, ConfirmButton, CancelButton]
Fields:
- Integration Name (text · main · required)
- Warning Message (text · main · required)
- Data Loss Impact (text · main · required)
- Confirm Revoke Integration (action · main · required)
- Cancel (action · main · required)
- Loading Spinner (badge · main)
- Error Message (text · main)
- Retry Revoke Integration (action · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, loading, error, plan_limit, permission_denied

### Sync History Drawer [default] layout=single-column-form
Regions:
- main — Display timeline of sync events, errors, and last successful sync for the selected integration. [IntegrationNameHeader, SyncTimeline, SyncEventItem, SyncStatusBadge, SyncErrorTooltip, LastSuccessfulSyncText, ManualSyncButton, CloseDrawerButton]
Fields:
- Integration Name (text · header · required)
- Sync Timeline (list · main · required)
- Sync Event (text · main · required)
- Sync Status Badge (badge · main)
- Sync Error Tooltip (tooltip · main)
- Last Successful Sync (date · main)
- Manual Sync (action · main · required)
- Close Drawer (action · main · required)
- Empty State Message (text · main)
- Loading Spinner (badge · main)
- Error Message (text · main)
- Retry Load Sync History (action · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Unsupported Bank/Format Modal [default] layout=single-column-form
Regions:
- main — Inform user of unsupported bank/format and offer manual upload fallback. [UnsupportedBankIcon, UnsupportedBankMessage, SupportedBanksLink, ManualUploadButton, DismissButton]
Fields:
- Unsupported Bank Message (text · main · required)
- Supported Banks Link (action · main)
- Manual Upload (action · main · required)
- Dismiss (action · main · required)
- Loading Spinner (badge · main)
- Error Message (text · main)
- Retry Manual Upload (action · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, loading, error, plan_limit, permission_denied

### Data Review & Correction (/review) [default] layout=two-column-main-rail
Regions:
- header — Communicate step context and parsing source [StepIndicator, ParsedSourceBadge, SupportedBankFormatIndicator]
- main — Display and allow editing of parsed financial data [ParsedDataTable, EditableField, InlineValidation, CorrectionTooltip]
- context-rail — Show parsing summary, upload details, and guidance [ParsingSummaryCard, OriginalStatementPreview, HelpTooltip]
- footer — Enable user actions to confirm, save, or cancel corrections [ConfirmAndSaveButton, EditCancelButton]
Fields:
- Step Indicator (text · header · required)
- Parsed Source Badge (badge · header · required)
- Supported Bank/Format Indicator (badge · header · required)
- Parsed Data Table (table-column · main · required)
- Editable Field (form-field · main · required)
- Inline Validation (tooltip · main · required)
- Correction Tooltip (tooltip · main)
- Parsing Summary Card (text · context-rail · required)
- Original Statement Preview (action · context-rail)
- Help Tooltip (tooltip · context-rail)
- Confirm & Save Action (action · footer · required)
- Edit/Cancel Action (action · footer · required)
- Loading Skeleton (text · main)
- Error Message (text · main · required)
- Plan Limit Banner (badge · header · required)
- Permission Denied Banner (badge · header · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Data Review & Correction (Error) (/review) [error] layout=single-column-form
Regions:
- header — Communicate error context and next steps [StepIndicator, ErrorMessage, SupportedBankFormatIndicator]
- main — Provide error details and recovery actions [ErrorDetails, RetryParsingButton, ManualUploadButton, HelpTooltip]
Fields:
- Step Indicator (text · header · required)
- Error Message (text · header · required)
- Supported Bank/Format Indicator (badge · header)
- Error Details (text · main · required)
- Retry Parsing Action (action · main · required)
- Manual Upload Action (action · main · required)
- Help Tooltip (tooltip · main)
- Loading Skeleton (text · main)
- Plan Limit Banner (badge · header · required)
- Permission Denied Banner (badge · header · required)
Statuses: error, loading, plan_limit, permission_denied

### Manual PDF Upload (/upload) [default] layout=single-column-form
Regions:
- header — Communicate upload context and supported formats [StepIndicator, SupportedBankFormatIndicator, UploadGuidanceText]
- main — Enable file selection, show progress, and handle errors [FilePicker, UploadProgressBar, SupportedFormatsList, SizeLimitBadge, UploadErrorBanner, HelpTooltip]
- footer — Allow user to submit or cancel upload [UploadButton, CancelButton]
Fields:
- Step Indicator (text · header · required)
- Supported Bank/Format Indicator (badge · header · required)
- Upload Guidance Text (text · header · required)
- File Picker (form-field · main · required)
- Supported Formats List (text · main · required)
- Size Limit Badge (badge · main · required)
- Upload Progress Bar (text · main)
- Upload Error Banner (badge · main)
- Upload Button (action · footer · required)
- Cancel Button (action · footer · required)
- Help Tooltip (tooltip · main)
- Plan Limit Banner (badge · header · required)
- Permission Denied Banner (badge · header · required)
Statuses: default, loading, error, empty, plan_limit, permission_denied

### Manual PDF Upload (Success) (/upload) [default] layout=single-column-form
Regions:
- header — Communicate upload success and next steps [SuccessIcon, TitleText, SubtitleText]
- main — Show parsed summary and CTA to review/correct data [ParsedSummaryCard, ReviewParsedDataButton, DownloadOriginalPDFLink]
- footer — Provide navigation and support options [BackToDashboardButton, SupportLink]
Fields:
- Upload Success Message (text · header · required)
- Parsed Statement Summary (text · main · required)
- Review Parsed Data Action (action · main · required)
- Download Original PDF Action (action · main)
- Back to Dashboard Action (action · footer)
- Support Link (action · footer)
- No Data Parsed Message (text · main · required)
- Manual Data Entry Action (action · main · required)
- Parsing In Progress Message (text · main · required)
- Loading Spinner (action · main)
- Generic Error Message (text · main · required)
- Retry Upload Action (action · main · required)
- Plan Limit Message (text · main · required)
- Upgrade Plan Action (action · main · required)
- Permission Denied Message (text · main · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Manual PDF Upload (Error) (/upload) [error] layout=single-column-form
Regions:
- header — Communicate upload or parsing failure [ErrorIcon, TitleText, SubtitleText]
- main — Show error details and recovery actions [ErrorDetailsText, RetryUploadButton, ManualDataEntryButton, SupportedFormatsLink]
- footer — Provide navigation and support options [BackToDashboardButton, SupportLink]
Fields:
- Upload/Parsing Error Message (text · header · required)
- Error Details (text · main)
- Retry Upload Action (action · main · required)
- Manual Data Entry Action (action · main · required)
- Supported Formats Link (action · main)
- Back to Dashboard Action (action · footer)
- Support Link (action · footer)
- Retry In Progress Message (text · main · required)
- Loading Spinner (action · main)
- Plan Limit Message (text · main · required)
- Upgrade Plan Action (action · main · required)
- Permission Denied Message (text · main · required)
Statuses: default, loading, plan_limit, permission_denied

### Manual Data Entry Modal [default] layout=single-column-form
Regions:
- header — Explain manual entry fallback and instructions [InfoIcon, TitleText, InstructionsText]
- main — Editable fields for all required data points [StatementTypeSelect, StatementPeriodDateRange, AccountNumberField, IssuerNameField, TotalOutstandingField, DueDateField, TransactionTable, InvestmentTable]
- footer — Save/cancel actions and support [SaveButton, CancelButton, SupportLink]
Fields:
- Statement Type (form-field · main · required)
- Statement Period (form-field · main · required)
- Account Number (form-field · main · required)
- Issuer Name (form-field · main · required)
- Total Outstanding (form-field · main)
- Due Date (form-field · main)
- Transaction Table (form-field · main)
- Investment Table (form-field · main)
- Upload Original PDF (form-field · main)
- Save Action (action · footer · required)
- Cancel Action (action · footer · required)
- Support Link (action · footer)
- Saving In Progress Message (text · main · required)
- Loading Spinner (action · main)
- Save Error Message (text · main · required)
- Retry Save Action (action · main · required)
- Plan Limit Message (text · main · required)
- Upgrade Plan Action (action · main · required)
- Permission Denied Message (text · main · required)
Statuses: default, loading, error, plan_limit, permission_denied

### Payments (/payments) [default] layout=single-column-form
Regions:
- header — Display page title and context for payment action [PageTitle, DueSoonBadge, SupportedBanksTooltip]
- main — Collect and confirm payment details, select payment method, and initiate payment [CreditCardBillSummaryCard, DueDateText, OutstandingAmountMetric, PaymentMethodSelector, UPIIdInput, PayNowButton, ManualEntryFallbackLink]
- footer — Provide legal, support, and security info [SecurityAssuranceText, SupportLink]
Fields:
- Credit Card Name (text · main · required)
- Masked Card Number (text · main · required)
- Due Date (date · main · required)
- Outstanding Amount (number · main · required)
- Payment Method (form-field · main · required)
- UPI ID (form-field · main · required)
- Pay Now (action · main · required)
- Manual Entry Fallback (action · main)
- Supported Banks/Formats (tooltip · header)
- Due Soon Badge (badge · header)
- Security Assurance (text · footer)
- Support Link (action · footer)
- Empty State Illustration (text · main)
- Empty State Message (text · main)
- Loading Spinner (text · main)
- Loading Message (text · main)
- Error Message (text · main)
- Retry Button (action · main)
- Plan Limit Message (text · main)
- Upgrade Plan CTA (action · main)
- Permission Denied Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Payment Confirmation Modal [default] layout=single-column-form
Regions:
- main — Summarize bill and payment details for user confirmation [CreditCardBillSummaryCard, DueDateText, OutstandingAmountMetric, PaymentMethodSummary, UPIIdSummary, ConfirmButton, CancelButton]
Fields:
- Credit Card Name (text · main · required)
- Masked Card Number (text · main · required)
- Due Date (date · main · required)
- Outstanding Amount (number · main · required)
- Payment Method (text · main · required)
- UPI ID (text · main · required)
- Confirm (action · main · required)
- Cancel (action · main · required)
- Loading Spinner (text · main)
- Loading Message (text · main)
- Error Message (text · main)
- Retry Button (action · main)
- Plan Limit Message (text · main)
- Upgrade Plan CTA (action · main)
- Permission Denied Message (text · main)
Statuses: default, loading, error, plan_limit, permission_denied

### Payment Success Modal [success] layout=single-column-form
Regions:
- main — Show payment receipt and next steps [SuccessIllustration, ReceiptSummaryCard, TransactionIdText, PaidAmountMetric, PaidToText, PaidFromText, PaymentDateText, DownloadReceiptButton]
Fields:
- Success Illustration (text · main)
- Receipt Summary (text · main · required)
- Transaction ID (text · main · required)
- Paid Amount (number · main · required)
- Paid To (text · main · required)
- Paid From (text · main · required)
- Payment Date (date · main · required)
- Download Receipt (action · main)
- Go to Dashboard (action · main)
- Go to Vault (action · main)
- Loading Spinner (text · main)
- Loading Message (text · main)
- Error Message (text · main)
- Retry Button (action · main)
- Plan Limit Message (text · main)
- Upgrade Plan CTA (action · main)
- Permission Denied Message (text · main)
Statuses: success, loading, error, plan_limit, permission_denied

### Payment Error Modal [error] layout=single-column-form
Regions:
- main — Communicate payment failure, offer retry and support options. [ErrorIcon, ErrorMessageText, RetryPaymentButton, ContactSupportLink, CloseModalButton]
Fields:
- Error message (text · main · required)
- Retry payment action (action · main · required)
- Contact support action (action · main)
- Plan limit message (text · main)
- Permission denied message (text · main)
- Close modal action (action · main · required)
Statuses: error, plan_limit, permission_denied

### Encrypted Statement Vault (/vault) [default] layout=list-detail
Regions:
- header — Page title and vault summary. [VaultTitle, VaultDescription, DownloadAllStatementsButton]
- filters — Allow user to filter/search statements by type, date, or institution. [StatementTypeFilter, DateRangeFilter, InstitutionFilter, SearchBar]
- main — Display list of stored statements with download and metadata. [StatementListTable]
Fields:
- Raw PDF/JSON financial statements (file · main · required)
- Statement type (table-column · main · required)
- Statement period (table-column · main · required)
- Institution (table-column · main · required)
- Uploaded date (table-column · main · required)
- Download statement action (action · main · required)
- Download all statements action (action · header)
- Empty vault message (text · main)
- Loading skeleton (table-column · main)
- Error message (text · main)
- Plan limit message (text · main)
- Permission denied message (text · main)
Filters:
- Statement Type (multi-select)
- Date Range (date-range)
- Institution (multi-select)
- Search (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Encrypted Statement Vault (Loading) (/vault) [loading] layout=list-detail
Regions:
- header — Page title and vault summary. [VaultTitle, VaultDescription]
- main — Display skeleton loaders for statement rows. [StatementListSkeleton]
Fields:
- Raw PDF/JSON financial statements (file · main · required)
- Loading skeleton (table-column · main)
Statuses: loading

### Encrypted Statement Vault (Empty) (/vault) [empty] layout=dashboard-grid
Regions:
- header — Introduce the vault and prompt user action [VaultEmptyStateHero, VaultOnboardingText]
- main — Enable user to connect accounts or upload statements [ConnectAccountButton, UploadStatementButton, SupportedFormatsTooltip]
Fields:
- Raw PDF/JSON financial statements (file · vault · required)
Statuses: empty, default, loading, error, plan_limit, permission_denied

### Encrypted Statement Vault (Error) (/vault) [error] layout=dashboard-grid
Regions:
- header — Display error messaging and support options [ErrorStateHero, ErrorDescriptionText]
- main — Enable user to retry loading or contact support [RetryButton, ContactSupportLink]
Fields:
- Raw PDF/JSON financial statements (file · vault · required)
Statuses: error, default, empty, loading, plan_limit, permission_denied

### Statement Detail Drawer [default] layout=single-column-form
Regions:
- header — Display statement metadata and quick actions [StatementFileName, StatementDateRange, StatementSourceBadge]
- main — Enable download, deletion, and metadata review [DownloadPDFButton, DownloadJSONButton, DeleteStatementButton, StatementFilePreview, StatementUploadTimestamp, SupportedFormatsTooltip]
Fields:
- Statement file name (text · header · required)
- Statement date range (date · header · required)
- Statement source (badge · header · required)
- Download PDF (action · main · required)
- Download JSON (action · main)
- Delete statement (action · main · required)
- Statement file preview (file · main)
- Statement upload timestamp (date · main)
Statuses: default, loading, error, plan_limit, permission_denied, empty

### Notifications & Alerts (/notifications) [default] layout=list-detail
Regions:
- header — Page title and quick actions [PageTitle, MarkAllAsReadButton]
- filters — Allow user to filter notifications by type or date [NotificationTypeFilter, DateRangeFilter, SearchInput]
- main — Display list of notifications with actionable links [NotificationList, NotificationCard, ActionButton, UnreadBadge, Timestamp, NotificationIcon]
Fields:
- Notification Title (text · main · required)
- Notification Body (text · main · required)
- Notification Type (badge · main · required)
- Timestamp (date · main · required)
- Is Read (badge · main · required)
- Action Link (action · main · required)
- Unread Badge (badge · main)
- Notification Icon (icon · main)
- Empty State Illustration (image · main)
- Empty State Copy (text · main)
- Loading Spinner (icon · main)
- Notification Skeleton Card (text · main)
- Error Message (text · main)
- Retry Button (action · main)
- Support Link (action · main)
- Plan Limit Message (text · main)
- Upgrade Plan Button (action · main)
- Permission Denied Message (text · main)
- Mark All as Read (action · header)
Filters:
- Notification Type (multi-select)
- Date Range (date-range)
- Search (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Notifications & Alerts (Empty) (/notifications) [empty] layout=list-detail
Regions:
- header — Page title [PageTitle]
- main — Friendly empty state illustration and copy [Empty State Illustration, Empty State Copy]
Fields:
- Empty State Illustration (image · main · required)
- Empty State Copy (text · main · required)
Statuses: empty

### Notifications & Alerts (Error) (/notifications) [error] layout=list-detail
Regions:
- header — Page title [PageTitle]
- main — Error message and support options [Error Message, Retry Button, Support Link]
Fields:
- Error Message (text · main · required)
- Retry Button (action · main · required)
- Support Link (action · main)
Statuses: error

### Notification Detail Drawer [default] layout=drawer
Regions:
- header — Displays notification type, icon, and timestamp for quick context. [NotificationTypeBadge, NotificationTimestamp, CloseDrawerButton]
- main — Shows the full notification message, actionable CTAs, and supporting details. [NotificationMessageText, DueAmountHighlight, DueDateHighlight, PayNowCTAButton, ViewStatementLink, DismissNotificationButton, StatementSourceBadge, PaymentStatusBadge]
Fields:
- Notification Type (badge · header · required)
- Notification Timestamp (date · header · required)
- Notification Message (text · main · required)
- Due Amount (number · main)
- Due Date (date · main)
- Pay Now CTA (action · main)
- View Statement Link (action · main)
- Dismiss Notification Button (action · main · required)
- Statement Source Badge (badge · main)
- Payment Status Badge (badge · main)
- Error Message (text · main)
- Empty State Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, loading, error, empty, plan_limit, permission_denied

### User Settings (/settings) [default] layout=two-column-main-rail
Regions:
- main — Primary settings management: profile, password, notification preferences. [ProfileInfoForm, ChangePasswordForm, NotificationPreferencesToggle, DeleteAccountButton]
- context-rail — Manage connected accounts, integration status, and revocation. [ConnectedAccountsList, IntegrationStatusBadge, RevokeIntegrationButton, SyncHistoryLink]
Fields:
- Profile Name (form-field · main · required)
- Profile Email (form-field · main · required)
- Change Password (form-field · main · required)
- Notification Preferences (form-field · main · required)
- Delete Account (action · main · required)
- Connected Accounts (list · context-rail)
- Integration Status (badge · context-rail)
- Revoke Integration (action · context-rail)
- Sync History (action · context-rail)
- Error Message (text · main)
- Empty State Message (text · context-rail)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, loading, error, empty, plan_limit, permission_denied

### User Settings (Permission Denied) (/settings) [permission-denied] layout=single-column-form
Regions:
- main — Displays permission denied message and re-authentication CTA. [PermissionDeniedIcon, PermissionDeniedMessage, ReAuthenticateButton]
Fields:
- Permission Denied Message (text · main · required)
Statuses: permission_denied

### Change Password Modal [default] layout=single-column-form
Regions:
- main — Allows user to securely change their password. [FormTitle, CurrentPasswordField, NewPasswordField, ConfirmPasswordField, PasswordStrengthMeter, SaveButton, CancelButton, FormErrorMessage]
Fields:
- Current Password (form-field · main · required)
- New Password (form-field · main · required)
- Confirm New Password (form-field · main · required)
- Password Strength Meter (badge · main)
- Save (action · main · required)
- Cancel (action · main · required)
- Form Error Message (text · main)
- Form Success Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, loading, error, empty, plan_limit, permission_denied

### Privacy Settings Modal [default] layout=single-column-form
Regions:
- main — Allows user to manage privacy, data sharing, export, and account deletion. [FormTitle, DataSharingToggle, DownloadExportDataButton, DeleteAccountButton, DeleteAccountConfirmationDialog, FormErrorMessage, FormSuccessMessage]
Fields:
- Data Sharing Toggle (form-field · main · required)
- Download/Export Data (action · main · required)
- Delete Account (action · main · required)
- Delete Account Confirmation Dialog (form-field · main)
- Form Error Message (text · main)
- Form Success Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, loading, error, empty, plan_limit, permission_denied

### Admin System Health (/admin) [default] layout=dashboard-grid
Regions:
- header — Displays system health summary and quick actions. [SystemStatusBadge, LastUpdatedTimestamp, RefreshButton]
- main — Shows system metrics, integration status, error logs, and parser management. [SystemMetricsGrid, IntegrationStatusTable, ErrorLogsTable, SupportedBankCoverageIndicator, ParserManagementPanel]
Fields:
- System Status Badge (badge · header · required)
- Last Updated Timestamp (text · header · required)
- Refresh (action · header · required)
- System Metrics (metric · main · required)
- Integration Status Table (table-column · main · required)
- Error Logs Table (table-column · main · required)
- Supported Bank Coverage Indicator (badge · main · required)
- Parser Management Panel (panel · main · required)
- Empty State Message (text · main)
- Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Filters:
- Integration Type (multi-select)
- Error Severity (multi-select)
- Date Range (date-range)
Statuses: default, loading, empty, error, plan_limit, permission_denied

### Admin Login (/admin/login) [default] layout=single-column-form
Regions:
- main — Authenticate admin users securely. [Logo, AdminLoginForm, ForgotPasswordLink]
Fields:
- Admin Email (form-field · main · required)
- Admin Password (form-field · main · required)
- Login Button (action · main · required)
- Forgot Password Link (action · main)
- Error Message (badge · main)
- Loading Spinner (badge · main)
- Plan Limit Banner (badge · main)
- Permission Denied Banner (badge · main)
Statuses: default, loading, error, plan_limit, permission_denied, empty

### Admin System Status Panel [default] layout=dashboard-grid
Regions:
- header — Panel title and quick status summary. [PanelTitle, LastUpdatedTimestamp]
- main — Display system health metrics and integration status. [SystemHealthMetricCard, IntegrationStatusCard, IntegrationHealthChart, RecentSystemEventsList]
- context-rail — Show integration coverage and quick actions. [SupportedBankCoverageIndicator, RefreshStatusButton]
Fields:
- System Uptime (metric · main · required)
- API Latency (metric · main · required)
- Integration Health Status (metric · main · required)
- Integration Error Count (metric · main)
- Recent System Events (list · main)
- Supported Bank Coverage (badge · context-rail)
- Last Updated Timestamp (text · header · required)
- Refresh Status Button (action · context-rail · required)
- Loading Spinner (badge · main)
- Error Banner (badge · main)
- Plan Limit Banner (badge · main)
- Permission Denied Banner (badge · main)
Statuses: default, loading, error, plan_limit, permission_denied, empty

### Admin Error Logs Panel [default] layout=list-detail
Regions:
- header — Panel title and quick filter summary. [PanelTitle, ActiveFiltersSummary]
- filters — Filter error logs by integration, error type, and date. [IntegrationFilter, ErrorTypeFilter, DateRangeFilter, SearchBar]
- main — Display filtered error logs in a table. [ErrorLogsTable]
Fields:
- Integration (filter · filters)
- Error Type (filter · filters)
- Date Range (filter · filters)
- Search (filter · filters)
- Error Timestamp (table-column · main · required)
- Integration Name (table-column · main · required)
- Error Type (Table) (table-column · main · required)
- Error Message (table-column · main · required)
- Error ID (table-column · main)
- Log Details Action (action · main)
- Loading Spinner (badge · main)
- Error Banner (badge · main)
- Plan Limit Banner (badge · main)
- Permission Denied Banner (badge · main)
- Empty State Banner (badge · main)
Filters:
- Integration (multi-select)
- Error Type (multi-select)
- Date Range (date-range)
- Search (search)
Statuses: default, loading, error, plan_limit, permission_denied, empty

### Admin Integration Management Panel [default] layout=dashboard-grid
Regions:
- header — Page title, quick actions, and system health summary. [PageTitle, AddIntegrationButton, IntegrationCoverageBadge, SystemHealthStatus]
- main — List and manage all supported integrations/parsers. [IntegrationTable, IntegrationStatusBadge, EditIntegrationAction, RemoveIntegrationAction, IntegrationErrorTooltip]
- context-rail — Show error logs, recent integration events, and coverage indicators. [IntegrationErrorLogList, RecentIntegrationEvents, CoverageIndicator]
Fields:
- Integration Name (table-column · main · required)
- Institution Type (table-column · main · required)
- Supported Formats (table-column · main · required)
- Integration Status (badge · main · required)
- Last Sync Time (table-column · main · required)
- Error Count (badge · main)
- Coverage Indicator (badge · main)
- Edit Integration (action · main · required)
- Remove Integration (action · main · required)
- Add Integration (action · header · required)
- IntegrationErrorLogList (list · context-rail)
- RecentIntegrationEvents (list · context-rail)
- SystemHealthStatus (badge · header)
Filters:
- Integration Status (multi-select)
- Institution Type (multi-select)
- Search Integration (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Onboarding Wizard: Welcome (/dashboard/onboarding/step-1) [default] layout=single-column-form
Regions:
- header — Branding and value proposition. [Logo, WelcomeTitle, ValuePropText]
- main — Explain benefits, set onboarding context, and CTA to next step. [FeatureList, NextStepButton]
Fields:
- NPS balances (table-column · dashboard · required)
- Mutual fund units (table-column · dashboard · required)
- Equity stock holdings (table-column · dashboard · required)
- Credit card due date (table-column · dashboard · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Onboarding Wizard: Connect Email (/dashboard/onboarding/step-2) [default] layout=single-column-form
Regions:
- header — Step title and instructions. [StepTitle, StepDescription]
- main — OAuth connect flow and connection status. [OAuthConnectButton, SupportedEmailProvidersList, ConnectionStatusBadge, NextStepButton]
Fields:
- NPS balances (table-column · dashboard · required)
- Mutual fund units (table-column · dashboard · required)
- Equity stock holdings (table-column · dashboard · required)
- Credit card due date (table-column · dashboard · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Onboarding Wizard: Connect Financial Accounts (/dashboard/onboarding/step-3) [default] layout=two-column-main-rail
Regions:
- header — Step indicator and onboarding progress context [StepProgressIndicator, OnboardingTitle, OnboardingSubtitle]
- main — Primary account connection actions and status [SupportedInstitutionList, OAuthConnectButton, ManualPDFUploadButton, SupportedBankCoverageIndicator, ConnectionStatusBadge, ConnectionHelpTooltip]
- context-rail — Explain benefits, security, and privacy of connecting accounts [SecurityInfoCard, PrivacyAssuranceCard, IntegrationHelpLink]
Fields:
- NPS balances (table-column · dashboard · required)
- Mutual fund units (table-column · dashboard · required)
- Equity stock holdings (table-column · dashboard · required)
- Credit card due date (table-column · dashboard · required)
- Supported institutions (list · main · required)
- Connection status (badge · main · required)
- Supported bank/format coverage (badge · main · required)
- Manual PDF upload (action · main · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Onboarding Wizard: First Sync (/dashboard/onboarding/step-4) [loading] layout=single-column-form
Regions:
- header — Step indicator and onboarding progress context [StepProgressIndicator, OnboardingTitle, OnboardingSubtitle]
- main — Show sync progress, what to expect, and loading feedback [SyncProgressBar, SyncStatusMessage, ParsingEngineStatus, LoadingSpinner, ParsingHelpTooltip]
Fields:
- NPS balances (table-column · dashboard · required)
- Mutual fund units (table-column · dashboard · required)
- Equity stock holdings (table-column · dashboard · required)
- Credit card due date (table-column · dashboard · required)
- Sync progress (metric · main · required)
- Parsing status (badge · main · required)
- Sync summary (text · main · required)
Statuses: loading, default, empty, error, plan_limit, permission_denied

### Onboarding Wizard: Review Data (/dashboard/onboarding/step-5) [default] layout=single-column-form
Regions:
- header — Step indicator and onboarding progress context [StepProgressIndicator, OnboardingTitle, OnboardingSubtitle]
- main — Editable review table for parsed data, with confirm/save actions [ParsedDataReviewTable, EditableFieldCell, CorrectionHelpTooltip, ConfirmAndSaveButton, ManualDataEntryButton]
Fields:
- NPS balances (table-column · dashboard · required)
- Mutual fund units (table-column · dashboard · required)
- Equity stock holdings (table-column · dashboard · required)
- Credit card due date (table-column · dashboard · required)
- Editable fields (form-field · main · required)
- Confirm/save action (action · main · required)
- Manual data entry (action · main · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Onboarding Wizard: Manual Upload Fallback (/dashboard/onboarding/step-6) [default] layout=single-column-form
Regions:
- header — Communicate fallback context and instructions [StepIndicator, Title, InstructionText, SupportedFormatsBadge]
- main — Enable user to upload PDF statement and view upload status [FileUploadField, UploadButton, SupportedBankList, UploadStatusMessage, ErrorBanner]
- footer — Navigation and support access [BackButton, ContinueButton, SupportLink]
Fields:
- NPS balances (table-column · dashboard · required)
- Mutual fund units (table-column · dashboard · required)
- Equity stock holdings (table-column · dashboard · required)
- Credit card due date (table-column · dashboard · required)
- Supported Bank/Format (filter · filters · required)
- File Upload (form-field · main · required)
- Upload Status (text · main)
- Upload Error Message (text · main)
- Supported Formats Badge (badge · header)
Filters:
- Supported Bank/Format (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Onboarding Wizard: Success (/dashboard/onboarding/step-7) [success] layout=single-column-form
Regions:
- header — Celebrate onboarding completion and reinforce value [SuccessIcon, Title, SuccessMessage, SummaryMetrics]
- main — Show preview of consolidated financial data and next steps [NPSBalancePreview, MutualFundUnitsPreview, EquityStockHoldingsPreview, CreditCardDueDatePreview, GoToDashboardButton]
Fields:
- NPS balances (table-column · dashboard · required)
- Mutual fund units (table-column · dashboard · required)
- Equity stock holdings (table-column · dashboard · required)
- Credit card due date (table-column · dashboard · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Onboarding Wizard: Error (/dashboard/onboarding/step-8) [error] layout=single-column-form
Regions:
- header — Communicate onboarding failure and next steps [ErrorIcon, Title, ErrorMessage, SupportLink]
- main — Provide retry and fallback options [RetryButton, ManualEntryButton, ContactSupportButton]
Fields:
- NPS balances (table-column · dashboard · required)
- Mutual fund units (table-column · dashboard · required)
- Equity stock holdings (table-column · dashboard · required)
- Credit card due date (table-column · dashboard · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Access Denied (/403) [permission-denied] layout=single-column-form
Regions:
- main — Communicate access restriction, provide actionable next steps. [AccessDeniedIcon, AccessDeniedTitle, AccessDeniedMessage, PrimaryCTAButton, SecondaryCTAButton]
Fields:
- Access Denied Title (text · header · required)
- Access Denied Message (text · panel · required)
- Primary CTA Button (action · footer · required)
- Secondary CTA Button (action · footer)
- Loading Spinner (action · panel)
- Error Message (text · panel)
- Retry Button (action · footer)
- Plan Limit Message (text · panel)
- Upgrade Plan CTA Button (action · footer)
- AccessDeniedIcon (icon · header)
Statuses: default, loading, error, plan_limit, permission_denied, empty

### Not Found (/404) [not-found] layout=single-column-form
Regions:
- main — Communicate that the page does not exist and provide navigation options. [NotFoundIcon, NotFoundTitle, NotFoundMessage, PrimaryCTAButton, SecondaryCTAButton]
Fields:
- Not Found Title (text · header · required)
- Not Found Message (text · panel · required)
- Primary CTA Button (action · footer · required)
- Secondary CTA Button (action · footer)
- Loading Spinner (action · panel)
- Error Message (text · panel)
- Retry Button (action · footer)
- Plan Limit Message (text · panel)
- Upgrade Plan CTA Button (action · footer)
- NotFoundIcon (icon · header)
- Access Denied Title (text · header)
- Access Denied Message (text · panel)
Statuses: default, loading, error, plan_limit, permission_denied, empty

## 5. Design guidelines (tokens / UX validation — secondary to §1–§3)

Guideline files in the repo under `.ops4/design-system/` (validation / tokens / a11y — do NOT override screen composition in the locked build prompt):
- `.ops4/design-system/01_design_system.md` — Design system
- `.ops4/design-system/02_ux_principles.md` — UX principles
- `.ops4/design-system/03_screen_composition.md` — Screen composition
- `.ops4/design-system/04_form_patterns.md` — Form patterns
- `.ops4/design-system/05_table_patterns.md` — Table patterns
- `.ops4/design-system/06_dashboard_patterns.md` — Dashboard patterns
- `.ops4/design-system/07_navigation_patterns.md` — Navigation patterns
- `.ops4/design-system/08_feedback_patterns.md` — Feedback patterns
- `.ops4/design-system/09_layout_patterns.md` — Layout patterns
- `.ops4/design-system/10_responsive_patterns.md` — Responsive patterns
- `.ops4/design-system/11_accessibility_rules.md` — Accessibility rules
- `.ops4/design-system/12_content_guidelines.md` — Content guidelines
- `.ops4/design-system/13_interaction_patterns.md` — Interaction patterns
- `.ops4/design-system/14_ai_validation_rules.md` — AI validation rules
Also: `.ops4/design-system/README.md` (conflict priority) and `.ops4/design-system/DESIGN_SYSTEM.md` (index).
Index URL: https://github.com/ahsanaasim/MKT-FinTrack/blob/ai-build/preview-var2-issue-1-implement-editorial-merchandising-dashboard-ui-f/.ops4/design-system/DESIGN_SYSTEM.md
# Aperture UI/UX guideline pack

This file concatenates all guideline slots for the coding agent.
Prefer individual files under `.ops4/design-system/` when available.

## Conflict priority (README)

# UI / UX guidelines (Aperture Design Governance)

Version: 1.1

These files are the **default** source of truth for Design Brain / Build Now / Cursor.

## Design Brain

Each project Design Brain shows **14 slots** (one per file below).

- If a slot has **no upload**, the matching default file from this folder is used.
- If a user **uploads** a `.md`/`.txt` file for a slot, that override is stored on the project baseline and used instead.
- **Preview** always shows the *effective* content (override or default).
- Build Now / Cursor always receives all 14 effective documents under `.ops4/design-system/`.

## File index

| File | Role |
|------|------|
| `01_design_system.md` | Visual tokens, components, motion, casing matrix |
| `02_ux_principles.md` | UX philosophy (when other docs are silent) |
| `03_screen_composition.md` | Page anatomy (header, filters, content, footer) |
| `04_form_patterns.md` | Forms, fields, validation timing |
| `05_table_patterns.md` | Tables / data tables (when features are required) |
| `06_dashboard_patterns.md` | Dashboard structure & KPI patterns |
| `07_navigation_patterns.md` | App nav, breadcrumbs, wayfinding |
| `08_feedback_patterns.md` | Loading, toasts, empty, confirm, undo |
| `09_layout_patterns.md` | Grid, widths, spacing, placement |
| `10_responsive_patterns.md` | Breakpoints & device adaptations |
| `11_accessibility_rules.md` | WCAG 2.1 AA, keyboard, ARIA |
| `12_content_guidelines.md` | Copy tone, labels, microcopy |
| `13_interaction_patterns.md` | States, gestures, animation behavior |
| `14_ai_validation_rules.md` | Pre-ship checklist (must not invent new policy) |

Optional companion: `tokens.css` (CSS variables mirroring `01`).

## Conflict priority (highest wins)

When two files disagree, apply in this order:

1. **`11_accessibility_rules.md`** — accessibility blockers always win  
2. **`01_design_system.md`** — tokens, components, Sheet/Drawer, casing matrix  
3. **Domain patterns** — `04` forms · `05` tables · `06` dashboards · `07` nav · `08` feedback  
4. **Structure** — `03` composition · `09` layout · `10` responsive  
5. **`12_content_guidelines.md`** — copy (must match `01` casing matrix)  
6. **`13_interaction_patterns.md`** — interaction polish  
7. **`02_ux_principles.md`** — philosophy only when others are silent  
8. **`14_ai_validation_rules.md`** — checklist only; never overrides higher docs  

## Canonical reconciled rules (v1.1)

Agents must treat these as authoritative:

### Primary CTA
- Exactly **one** orange `primary` button in the **page header** (page chrome).
- Nested cards/panels use `secondary` / `ghost`.
- **Exception:** a focused task surface (dialog, sheet/drawer body, or empty-state recovery) may contain **one** primary.
- Never show two or more primary fills in the same viewport.

### Sheet vs Drawer
- **≥ 640px:** edge panel = shadcn **Sheet** (desktop/tablet secondary panels, filters, details).
- **&lt; 640px:** same pattern = shadcn **Drawer** (bottom sheet).
- Do not put full multi-step workflows inside Sheet/Drawer.
- “Right drawer” in older wording means **Sheet** on desktop.

### Destructive actions
- **Recoverable** (soft delete, archive, dismiss) → perform action + **Undo toast** (~10s). No modal.
- **Irreversible / high-impact** (permanent delete, purge, cancel subscription) → **Alert Dialog**. Cancel is the safe default focus. Never toast-only.

### Validation timing (forms)
1. Do **not** validate aggressively on every keystroke before first blur.
2. After a field is touched/blurred → validate that field on subsequent changes.
3. On submit → validate all; move focus to first invalid; announce errors accessibly.
4. Success → toast or inline confirmation.

### Capitalization
Follow the matrix in `01` §8 (mirrored in `12`):
- Actions, form labels, toasts → **sentence case** (`Email address`, `Save changes`)
- Page titles, section headers, nav labels → **Title Case** (`Account Settings`)

### Motion
- Interactive transitions: **150–200ms** on named easings.
- Overlay enter/exit: up to **300ms** allowed.
- Continuous indicators (spinner ~700ms loop, skeleton shimmer) are exempt; honor `prefers-reduced-motion`.

### Spacing
Use the 4px rail in `01`. Mapped common values:
- 8 / 16 / 24 / 32 / 48 → `space-2` / `space-4` / `space-6` / `space-8` / `space-12`
- Page section-to-section = **48px** (`space-12`), not invented values.

### Typography floor
- Primary reading body ≥ **16px**.
- `body-small` **14px** = metadata/captions only.
- `label` **13px** = form labels, chips, button text — OK.

### Error feedback
- Recoverable / non-blocking → toast (assertive OK) with retry when useful.
- Critical / blocking → persistent Alert or modal — **never toast-only**.

---

## 01_design_system — Design system

Source: default (01_design_system.md)

# Aperture — Design System Guidelines

Version: 1.1  
Part of: Aperture Design Governance

**Source of truth for visual UI.** Coding agents (Cursor / Build Now) and humans must follow this file over generic aesthetics, invented palettes, or ad-hoc component styles.

For cross-file conflict priority and the canonical CTA / Sheet-Drawer / delete / validation rules, see `README.md`.

| Item | Value |
|------|--------|
| System name | **Aperture** |
| Stack | React + Tailwind CSS + **shadcn/ui** patterns |
| Icons | **Phosphor Icons** (`@phosphor-icons/web`) |
| Themes | Light + Dark (`class` strategy) |
| Direction | LTR + RTL (`dir` on `<html>`) |
| Contrast | WCAG 2.1 AA |

---

## 1. Non‑negotiable rules

1. **Do not invent a new visual language.** Use Aperture tokens, zinc neutrals, and orange brand accents below.
2. **One primary CTA in page chrome.** Exactly one orange `primary` in the page header. Nested cards use `secondary`/`ghost`. Focused task surfaces (dialog, sheet/drawer, empty-state) may have one primary. Never two primary fills in one viewport.
3. **Never encode meaning by color alone.** Pair status with icon + text.
4. **Focus rings are mandatory.** Orange 2px ring + 2px offset — never remove without a visible replacement.
5. **Sentence case for actions and form labels;** Title Case for page/nav headers (see §8).
6. **Motion:** interactive transitions **150–200ms**; overlay enter/exit up to **300ms**; spinner/shimmer loops exempt. Honor `prefers-reduced-motion`.
7. **≥ 640px** secondary panels use **Sheet**; **&lt; 640px** the same pattern uses bottom **Drawer**.
8. Use **logical CSS** (`ms`/`me`, `border-s`, `start`/`end`) — no hard-coded left/right that breaks RTL.
9. Prefer existing **shadcn/ui** components over custom one-offs.
10. When this file conflicts with a generic “make it pretty” instinct, **this file wins** (accessibility in `11` still outranks this file).

---

## 2. Brand & aesthetic

- **Look:** Clean product UI — zinc surfaces, subtle borders, restrained elevation, orange accent.
- **Not:** Purple gradients, glassmorphism noise, neon glow, heavy multi-layer shadows, random decorative cards.
- **Canvas:** Light `#fafafa` / Dark `#09090b`
- **Surfaces:** Light `#ffffff` / Dark `#18181b` (cards, panels)
- **Brand / primary fill:** `#f97316` (orange-500/600 family); hover darkens in light, lightens in dark
- **Destructive:** Rose (`#e11d48` light / `#fb7185` dark)
- **Fonts:** System UI sans (`ui-sans-serif`, system-ui, Segoe UI, Roboto, Helvetica, Arial); mono for code chips

### Shared shell primitives (Tailwind)

```
CARD = rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900
RING = focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
       focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950
```

---

## 3. Color tokens

### Semantic roles

| Token | Role | Light | Dark | Use |
|-------|------|-------|------|-----|
| `bg/canvas` | Page canvas | `#fafafa` | `#09090b` | Lowest layer; don’t put long-form text directly on canvas without a surface |
| `bg/surface` | Card / panel | `#ffffff` | `#18181b` | Default elevated container; pair with `border/subtle` |
| `bg/muted` | Inset fill | `#f4f4f5` | `#27272a` | Wells, code blocks, secondary rows |
| `fg/default` | Primary action fill | `#f97316` | `#f97316` | Primary buttons; **white** label/icons for AA |
| `fg/hover` | Primary hover | `#ea580c` | `#fb923c` | Darken in light; lighten in dark |
| `fg/neutral` | Secondary fill | `#e4e4e7` | `#3f3f46` | Secondary / ghost resting fill |
| `text/primary` | Body & headings | `#18181b` | `#fafafa` | ≥ 4.5:1 on surface |
| `text/secondary` | Supporting copy | `#52525b` | `#a1a1aa` | Metadata, helpers (≥ 4.5:1) |
| `text/disabled` | Disabled label | `#a1a1aa` | `#52525b` | Always pair with non-color disabled cues |
| `icon/interactive` | Actionable icon | `#ea580c` | `#fb923c` | ≥ 3:1 graphical contrast |
| `icon/neutral` | Informational icon | `#52525b` | `#a1a1aa` | ≥ 3:1; pair with text if status |
| `border/subtle` | Structural line | `#e4e4e7` | `#27272a` | Cards, dividers |
| `border/strong` | Input border | `#a1a1aa` | `#52525b` | Form affordance (~3:1 vs surface) |
| `border/focus` | Focus ring | `#f97316` | `#f97316` | Keyboard focus only — never structure |
| `status/success` | Success | `#059669` | `#34d399` | + check glyph |
| `status/info` | Info | `#2563eb` | `#60a5fa` | Tips, in-progress |
| `status/warning` | Warning | `#d97706` | `#fbbf24` | + warning glyph |
| `status/error` | Error | `#e11d48` | `#fb7185` | Blocking; announce with `aria-live` |

### Charts (Okabe–Ito–derived — color-blind safe)

| Token | Hex | Name |
|-------|-----|------|
| `charts/1` | `#0072b2` | Blue |
| `charts/2` | `#e69f00` | Orange |
| `charts/3` | `#009e73` | Green |
| `charts/4` | `#cc79a7` | Pink |
| `charts/5` | `#56b4e9` | Sky |
| `charts/6` | `#d55e00` | Vermillion |
| `charts/7` | `#f0e442` | Yellow |
| `charts/8` | `#525252` | Grey |

Always encode series with **color + label/pattern**, never hue alone.

### Badge / pill tones

`zinc` | `orange` | `emerald` | `rose` | `blue` | `amber` — soft filled pills with matching border; map to status semantics.

---

## 4. Typography

| Token | Desktop | Tablet | Mobile | Weight | Tracking | Rule |
|-------|---------|--------|--------|--------|----------|------|
| `display1` | 60/64 | 52/56 | 40/44 | 700 | -0.02em | Marketing heroes only — never dense product UI |
| `display2` | 48/52 | 40/44 | 34/38 | 700 | -0.02em | Secondary marketing splash |
| `h1` | 36/40 | 32/36 | 28/32 | 700 | -0.01em | **One per page/view** |
| `h2` | 28/34 | 26/32 | 24/30 | 600 | -0.01em | Module / major section titles |
| `title` | 20/28 | 18/26 | 18/26 | 600 | 0 | Card headers, dialog titles |
| `body` | 16/24 | 16/24 | 16/24 | 400 | 0 | Default reading size |
| `body-small` | 14/20 | 14/20 | 14/20 | 400 | 0 | Secondary metadata only |
| `label` | 13/16 | 13/16 | 13/16 | 500 | 0.01em | Form labels, buttons, chips — sentence case |
| `overline` | 11/16 | 11/16 | 11/16 | 600 | 0.12em | Eyebrows — uppercase + tracked |

Contrast: body/label ≥ **4.5:1**; large headings ≥ **3:1**.

**Size floor:** primary reading body ≥ **16px**. `body-small` (14px) is metadata only. `label` (13px) is OK for controls.

---

## 5. Spacing, radius, elevation

### Spacing (4px rail)

| Token | px | Use |
|-------|-----|-----|
| `space-1` | 4 | Icon–label gap |
| `space-2` | 8 | Chip / badge padding |
| `space-3` | 12 | Compact control padding (S) |
| `space-4` | 16 | Default container / M control padding |
| `space-5` | 20 | Card internal padding |
| `space-6` | 24 | Section gaps / card gutters |
| `space-8` | 32 | Grouped blocks; desktop page padding |
| `space-10` | 40 | Tablet region gaps |
| `space-12` | 48 | Page section-to-section rhythm |

### Radius

| Token | px | Tailwind | Use |
|-------|-----|----------|-----|
| `radius-sm` | 6 | `rounded-md` | Inputs, small buttons, checkboxes |
| `radius-md` | 8 | `rounded-lg` | Default buttons, menus, alerts |
| `radius-lg` | 12 | `rounded-xl` | Cards, dialogs, sheets, popovers |
| `radius-xl` | 16 | `rounded-2xl` | Large marketing / media |
| `radius-full` | 9999 | `rounded-full` | Pills, avatars, switch thumbs |

### Shadows

| Token | Use |
|-------|-----|
| `shadow-xs` / `shadow-sm` | Resting buttons, inputs, chips |
| `shadow` | Cards on canvas |
| `shadow-md` | Dropdowns, popovers, hover cards |
| `shadow-lg` | Menus, comboboxes, toasts |
| `shadow-xl` | Modals, sheets, drawers |

---

## 6. Iconography (Phosphor)

- Library: [phosphoricons.com](https://phosphoricons.com/)
- Weights: `thin` | `light` | `regular` | `bold` | `fill` | `duotone`
- Usage: **Regular** resting · **Bold/Fill** active/selected
- Sizes: **16 / 20 / 24 / 28** (4px steps)
- Custom icons: 24×24 grid, 2px stroke, 2px live padding, rounded terminals, optical center
- Roles:
  - **Actionable** — 3:1 + accessible name
  - **Informational** — pair with text
  - **Decorative** — `aria-hidden="true"`
- RTL: directional icons use `.flip-x` (`scaleX(-1)`)

---

## 7. Motion & interaction states

### Easing (Tailwind / CSS)

| Name | Curve | Typical duration |
|------|-------|------------------|
| `standard` | `cubic-bezier(0.2, 0, 0, 1)` | 150–200ms |
| `emphasized` | `cubic-bezier(0.05, 0.7, 0.1, 1)` | 200ms |
| `decelerate` | `cubic-bezier(0, 0, 0, 1)` | 150ms |
| `accelerate` | `cubic-bezier(0.3, 0, 1, 1)` | 150ms |

### Motion presets

| Preset | Duration | Behavior |
|--------|----------|----------|
| Press | 150ms | `scale(0.98)` on active |
| Fade | 150ms | Opacity 0→1 |
| Expand | 200ms | Height + chevron |
| Slide | 200ms | `translateY(8–12px)` + fade |
| Overlay | 200–300ms | Scrim fade + panel slide (**exception** to 200ms cap) |
| Thumb | 150ms | Switch knob travel |
| Shimmer | 1400ms | Skeleton sweep (**continuous**; disable if reduced-motion) |
| Spin | 700ms linear | Spinner (**continuous**; slow/fade if reduced-motion) |

**Rule:** UI state transitions stay in 150–200ms. Overlay entrance may use up to 300ms. Continuous loops are not “transitions” but must respect reduced motion.

### Control states (all interactive controls)

`Default` · `Hover` · `Focus` · `Active` · `Disabled` · `Loading`

Sizes: **S** `h-8` · **M** `h-9` · **L** `h-11`

### Buttons

| Variant | Style |
|---------|--------|
| `primary` | Orange fill, white text |
| `secondary` | Surface + zinc border |
| `ghost` | Transparent, zinc text, muted hover |
| `destructive` | Rose fill, white text |
| `link` | Orange text, underline on hover |

Labels: sentence-case **verbs** (“Save changes”). Loading → spinner + `aria-busy` + disabled.

### Inputs

- Radius `rounded-md`, strong border; invalid → rose border + `aria-invalid`
- Always visible `<label>` — **never** placeholder-as-label
- **Validation timing** (canonical — also in `04` / README):
  1. Do not validate aggressively on every keystroke before first blur
  2. After touch/blur → validate that field on subsequent changes
  3. On submit → validate all; focus first invalid; announce errors
  4. Success → toast or inline confirmation

### Overlays

- Scrim: `bg-black/50` + light blur
- Esc + outside click dismiss (except alert dialogs where Cancel is explicit)
- Focus trap; restore focus to trigger on close
- Toasts: bottom-end stack, `aria-live="polite"` (assertive OK for **recoverable** errors), max ~3, pause on hover
- **Never toast-only for irreversible/blocking failures** — use Alert Dialog or persistent Alert
- **Destructive policy:** recoverable → Undo toast (~10s); irreversible/high-impact → Alert Dialog

---

## 8. Editorial / copy

### Tone

| Do | Don’t |
|----|--------|
| Clear, direct, human (“Your changes are saved.”) | Robotic (“Operation completed successfully.”) |
| Confident, not boastful (“Deploy in one click.”) | Hype (“The world’s most powerful…”) |
| Blame-free errors (“We couldn’t reach the server.”) | Accusatory (“You entered an invalid value.”) |
| Concise active voice (“Add a member.”) | Passive padding |

### Capitalization

| Surface | Style | Example |
|---------|--------|---------|
| Buttons & actions | Sentence case | Save changes |
| Tooltips & helpers | Sentence case | Add to your library |
| Page & section headers | Title Case | Account Settings |
| Navigation labels | Title Case | Billing & Plans |
| Form labels | Sentence case | Email address |
| Toast / banner titles | Sentence case | Event created |

### Length limits

| Surface | Max chars |
|---------|-----------|
| Toast title | 60 |
| Banner body | 120 |
| Notification card | 90 |

---

## 9. Accessibility & i18n

- WCAG 2.1 AA contrast (see §3)
- Keyboard: Tab order intact; Esc closes top overlay; menus/tabs/radios follow WAI-ARIA patterns
- Icon-only controls need `aria-label`
- Status / errors: text + icon; errors use `role="alert"` / `aria-live="assertive"` when injected
- Charts: provide summary/`role="img"` + data table alternative when practical
- **RTL:** set `dir="rtl"`; mirror arrows/carets; sheets slide from logical end; pagination arrows flip
- Reduced motion: no infinite shimmer/pulse; prefer opacity fades

### Global keyboard expectations

| Context | Key | Behavior |
|---------|-----|----------|
| Global | Tab / Shift+Tab | Move focus |
| Global | Esc | Dismiss top overlay |
| Buttons | Enter / Space | Activate |
| Menus | ↑ ↓ · Home/End | Navigate items |
| Tabs | ← → | Move tabs |
| Radio | Arrows | Move selection |
| Combobox | Alt+↓ | Open listbox |
| Calendar/Grid | Arrows · PageUp/Down | Navigate |
| Slider | ← → · Home/End | Step / jump |
| Dialog | Tab | Cycle inside only |

---

## 10. Layout & responsive behavior

- App shell: often **sidebar nav** + main content; collapse to icons / off-canvas on narrow screens
- Cards: `radius-lg`, `space-5` padding; card actions are `secondary`/`ghost` unless the card is a focused task surface
- Tables: see `05_table_patterns.md` — Data Table features only when the task needs them
- Empty states: icon in soft circle + title + why + **one recovery CTA**
- **Viewport rule:** `≥ 640px` → side **Sheet**; `< 640px` → bottom **Drawer** for secondary panels/filters

---

## 11. Component inventory

Prefer **shadcn/ui** docs for implementation. Use each component for its intended job.

### Core (shadcn)

Accordion · Alert · Alert Dialog · Aspect Ratio · Avatar · Badge · Breadcrumb · Button · Button Group · Calendar · Card · Carousel · Chart · Checkbox · Collapsible · Combobox · Command · Context Menu · Data Table · Date Picker · Dialog · Drawer · Dropdown Menu · Empty · Hover Card · Input · Input Group · Input OTP · Label · Menubar · Native Select · Navigation Menu · Pagination · Popover · Progress · Radio Group · Resizable · Scroll Area · Select · Separator · Sheet · Sidebar · Skeleton · Slider · Sonner (Toast) · Spinner · Switch · Table · Tabs · Textarea · Toggle · Toggle Group · Tooltip

### Brand / chat / media (Aperture)

| Component | When |
|-----------|------|
| Attachment | Inline file chip (type + name + size + action) |
| AttachmentNew | Post-upload confirmed / emphasized attachment |
| Bubble | Compact chat bubble (own = end, other = start) |
| BubbleNew | Emphasized bubble (ring/shadow) — sparingly |
| Message | Avatar + author + timestamp + body |
| MessageNew | Carded / pinned message |
| Message Scroller | Live thread `role="log"`; stick to bottom only if already at bottom |
| Message ScrollerNew | + typing indicator |
| Marker | Map/timeline annotation |
| MarkerNew | Live/now marker (pulse; respect reduced-motion) |

**Chat a11y:** message list = `aria-live="polite"` log; sender via alignment + label, not color alone; timestamps use `<time datetime>`.

### Component selection cheatsheet

| Need | Use | Avoid |
|------|-----|--------|
| Primary action | One `primary` in page header (or focused task surface) | Multiple primaries in one viewport |
| Confirm irreversible destroy | Alert Dialog | Toast-only |
| Recoverable delete/archive | Undo toast (~10s) | Alert Dialog fatigue |
| Transient feedback | Sonner | Blocking Alert Dialog |
| Persistent inline notice | Alert | Toast |
| Blocking / critical failure | Alert or modal | Toast-only |
| Short text | Input | Textarea |
| Choices ≤ ~6 visible | Radio / Select | Combobox |
| Searchable long list | Combobox | Select |
| Instant setting | Switch | Checkbox + Save |
| Form multi-select | Checkbox | Switch |
| Side panel desktop (≥640) | Sheet | Drawer |
| Side panel mobile (&lt;640) | Drawer | Sheet |
| Page sections peers | Tabs | Accordion (unless stack needed) |
| Dense sort/filter data | Data Table | static Table |

---

## 12. Implementation checklist (for agents)

When building or changing UI:

- [ ] Zinc + orange Aperture palette (light/dark classes)
- [ ] Phosphor icons at 16/20/24/28; decorative icons `aria-hidden`
- [ ] Focus ring on all interactive controls
- [ ] Labels on every input; errors linked via `aria-describedby`
- [ ] Spacing on the 4px scale; section-to-section `space-12` (48px); cards `rounded-xl` + subtle border
- [ ] One primary in page header; no stacked primaries
- [ ] Sheet (≥640) / Drawer (&lt;640) for secondary panels
- [ ] Motion: 150–200ms transitions; overlays ≤300ms; reduced-motion safe
- [ ] Status colors always with icon + text
- [ ] Prefer shadcn components from §11 over custom widgets
- [ ] Validation timing per Inputs section / README

---

## 13. Optional CSS variables (tokens.css)

Agents may commit a companion `tokens.css` mapping the semantic tokens above, e.g.:

```css
:root {
  --bg-canvas: #fafafa;
  --bg-surface: #ffffff;
  --bg-muted: #f4f4f5;
  --fg-default: #f97316;
  --fg-hover: #ea580c;
  --text-primary: #18181b;
  --text-secondary: #52525b;
  --border-subtle: #e4e4e7;
  --border-strong: #a1a1aa;
  --border-focus: #f97316;
  --status-success: #059669;
  --status-info: #2563eb;
  --status-warning: #d97706;
  --status-error: #e11d48;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --space-1: 4px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
}
.dark {
  --bg-canvas: #09090b;
  --bg-surface: #18181b;
  --bg-muted: #27272a;
  --fg-hover: #fb923c;
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --border-subtle: #27272a;
  --border-strong: #52525b;
  --status-success: #34d399;
  --status-info: #60a5fa;
  --status-warning: #fbbf24;
  --status-error: #fb7185;
}
```

---

*Derived from the Aperture Design System Showroom (`design-system-showroom.html` / `.md`). Treat this document as the visual and behavioral contract for product UI.*

---

## 02_ux_principles — UX principles

Source: default (02_ux_principles.md)

# 02_ux_principles.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines the mandatory User Experience (UX) principles that govern every interface generated within the Aperture ecosystem.

Unlike the Design System, which defines visual appearance, this document defines how interfaces should behave, communicate, and guide users.

Every generated page, component, workflow, and interaction must comply with these principles.

These principles are mandatory.

If any UX principle conflicts with aesthetics, animations, or personal preference, the UX principle always wins.

---

# UX Philosophy

Software exists to help people complete tasks.

Users should spend their time solving business problems—not learning how to use the interface.

Every screen should reduce friction.

Every interaction should increase confidence.

Every workflow should minimize effort.

Good UX is invisible.

The best interface is one that users barely notice because everything feels obvious.

---

# Core Objectives

Every interface must optimize for:

- Clarity
- Simplicity
- Speed
- Predictability
- Consistency
- Learnability
- Accessibility
- Error Prevention
- Confidence
- Efficiency

Never optimize for visual complexity.

---

# UX-001 — Clarity Above Everything

## Objective

The purpose of every screen must be obvious within three seconds.

Users should never wonder:

- Where am I?
- What is this page for?
- What should I do next?

## Rules

- Every page must have one clear purpose.
- Every page must have a descriptive title.
- Primary content must appear before secondary content.
- Decorative elements must never compete with functional elements.
- Every important action must be visible.

## AI MUST

- Prioritize clarity over aesthetics.
- Remove unnecessary visual elements.
- Keep labels simple and descriptive.

## AI MUST NEVER

- Hide primary actions.
- Use vague labels.
- Add decorative components without purpose.

---

# UX-002 — One Primary Goal Per Screen

Every page should help users complete one primary objective.

Examples

Good

Customer Details

Goal:
Manage customer information.

Bad

Customer Details

Analytics

Reports

Calendar

Marketing

Invoices

Support

Everything mixed together.

## Rules

- One dominant workflow.
- One dominant call-to-action.
- Secondary actions must support the primary workflow.

---

# UX-003 — Reduce Cognitive Load

Users should think about their work.

Not the interface.

## Rules

- Show only necessary information.
- Group related information.
- Hide advanced options until needed.
- Break complex workflows into smaller steps.
- Remove unnecessary decisions.

## AI MUST

Ask before adding every component:

Does this help complete the primary task?

If not,

Remove it.

---

# UX-004 — Recognition Over Recall

Interfaces should help users recognize information.

Never require memory.

Examples

Good

Autocomplete

Recent searches

Recent projects

Breadcrumbs

Current filters

Bad

Remember IDs

Remember commands

Remember previous page values

---

# UX-005 — Progressive Disclosure

Complexity should appear only when necessary.

Rules

- Show essential information first.
- Hide advanced settings behind expansion panels.
- Reveal complexity gradually.
- Default experience should be beginner-friendly.

---

# UX-006 — Visual Hierarchy

Users should know what deserves attention first.

Hierarchy

1. Page Title

2. Primary Action

3. Primary Content

4. Supporting Content

5. Metadata

6. Footer

Never create competing visual focal points.

---

# UX-007 — Information Hierarchy

Information should appear in this order.

Overview

↓

Current Task

↓

Important Information

↓

Supporting Information

↓

History

↓

Metadata

Never reverse this order.

---

# UX-008 — Consistency

Users should never relearn the interface.

Everything should behave consistently.

Including:

- Buttons
- Colors
- Icons
- Terminology
- Navigation
- Dialogs
- Forms
- Tables
- Error Messages

Example

Never rename the same action.

Delete

Remove

Erase

Discard

Choose one.

Use it everywhere.

---

# UX-009 — User Control

Users should always feel in control.

Provide

- Cancel
- Back
- Undo
- Retry
- Close

Never trap users.

Always allow recovery whenever possible.

---

# UX-010 — Feedback

Every user action deserves feedback.

Loading

Saving

Success

Failure

Empty

Retry

Progress

Users should never wonder whether something happened.

---

# UX-011 — Error Prevention

Prevent mistakes instead of reporting mistakes.

Examples

Disable impossible actions.

Validate before submission (and per-field after blur — see `04` / README).

Warn before irreversible destructive actions (Alert Dialog). Prefer Undo for recoverable deletes.

Autosave drafts.

Suggest corrections.

Good UX prevents errors.

---

# UX-012 — Forgiveness

Humans make mistakes.

Software should help recover.

Examples

Undo

Restore

Version History

Draft Recovery

Confirmation Dialogs

Never punish mistakes.

---

# UX-013 — Trust

Interfaces should always explain what is happening.

Users should understand

- Why something happened.
- Why something failed.
- What changed.
- What will happen next.

Never perform destructive actions silently.

Never surprise users.

---

# UX-014 — Accessibility

Accessibility is mandatory.

Every interface must support:

- Keyboard navigation
- Screen readers
- Color blindness
- Low vision
- Motor impairments
- Reduced motion

Accessibility failures block release.

---

# UX-015 — Perceived Performance

Fast interfaces feel trustworthy.

Rules

Always prefer

- Skeleton loading
- Progressive loading
- Optimistic updates
- Lazy loading
- Background refresh

Never show blank screens while waiting.

---

# UX-016 — Decision Economy

Reduce unnecessary decisions.

Software should remember:

- Previous selections
- Recent searches
- Filters
- Sorting
- Preferred views
- Default values

Never ask users the same question repeatedly.

---

# UX-017 — Discoverability

Important functionality should be easy to discover.

Users should not need documentation to complete common tasks.

Frequently used actions should always remain visible.

Rare actions may be hidden behind menus.

---

# UX-018 — Predictability

Interfaces should behave exactly as users expect.

Buttons should look clickable.

Links should look like links.

Menus should open consistently.

Dialogs should close consistently.

Never surprise users.

---

# UX-019 — Task Efficiency

Optimize for completing tasks quickly.

Reduce:

- Clicks
- Typing
- Navigation
- Waiting
- Scrolling

Never increase interaction count without clear value.

---

# UX-020 — Simplicity

Simple interfaces outperform complicated ones.

Whenever multiple solutions exist,

Choose the simplest solution that solves the problem.

Simple does not mean fewer features.

Simple means fewer unnecessary decisions.

---

# AI Decision Rules

Before generating any screen, AI must answer:

1. What is the user's primary goal?

2. What information is required?

3. What information can be removed?

4. What information can be hidden?

5. What action should be primary?

6. Can anything be automated?

7. Can defaults be inferred?

8. Can the workflow be simplified?

If yes,

Simplify before generating the interface.

---

# AI Anti-Patterns

Never:

- Create multiple primary buttons.
- Add decorative cards without purpose.
- Mix different interaction styles.
- Use inconsistent spacing.
- Overcrowd dashboards.
- Hide important actions.
- Use placeholder text as labels.
- Depend on color alone.
- Require horizontal scrolling for normal workflows.
- Invent custom components when existing components exist.
- Create unnecessary clicks.
- Duplicate information.
- Display advanced settings by default.

---

# UX Validation Checklist

Every screen must satisfy all of the following.

## Purpose

✓ Screen purpose immediately obvious.

✓ Primary task clearly identifiable.

---

## Content

✓ Only necessary information displayed.

✓ Information grouped logically.

✓ No redundant content.

---

## Actions

✓ One primary action.

✓ Secondary actions clearly differentiated.

✓ Destructive actions separated.

---

## Navigation

✓ User knows current location.

✓ Navigation predictable.

✓ Back navigation available.

---

## Feedback

✓ Loading state.

✓ Empty state.

✓ Success state.

✓ Error state.

---

## Accessibility

✓ Keyboard accessible.

✓ Screen reader friendly.

✓ WCAG AA compliant.

✓ Touch targets large enough.

---

## Performance

✓ No unnecessary rendering.

✓ Loading feedback visible.

✓ Responsive interactions.

---

## Overall

The interface should feel:

- Obvious
- Predictable
- Trustworthy
- Fast
- Simple

If any of these qualities are missing, the design should be revised before implementation.

---

# Final Principle

The goal of UX is not to impress users.

The goal is to help users accomplish meaningful work with the least possible effort.

If removing an element improves the experience,

remove it.

---

## 03_screen_composition — Screen composition

Source: default (03_screen_composition.md)

# 03_screen_composition.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how every application screen should be structured.

The goal is to ensure every generated interface follows a predictable, consistent and user-friendly layout regardless of feature or module.

This document does **not** define colors, typography or component styling. Those are covered in the Design System.

This document defines **where things belong**.

---

# Design Philosophy

Users should never spend time figuring out where information is located.

Every page should follow familiar patterns.

Layouts should feel predictable across the entire application.

Every section must have a purpose.

Every component must support the primary workflow.

---

# Core Principles

Every screen should:

- Have one clear purpose
- Have one primary workflow
- Follow a predictable reading order
- Minimize scrolling
- Prioritize important information
- Group related information
- Maintain visual balance
- Be responsive across all devices

---

# Standard Reading Flow

Every screen should follow this hierarchy.

```

Header
↓

Page Information

↓

Primary Actions

↓

Primary Content

↓

Supporting Content

↓

Secondary Information

↓

Footer (optional)

```

Never reverse this order unless a documented pattern explicitly requires it.

---

# Standard Page Anatomy

Every application page should contain the following sections when applicable.

## 1. Global Navigation

Purpose

Provide application-wide navigation.

Examples

- Sidebar
- Top Navigation
- Workspace Switcher

Rules

- Always accessible.
- Current page clearly highlighted.
- Never hide navigation unexpectedly.

---

## 2. Page Header

Purpose

Introduce the current page.

Contains

- Page Title
- Description (optional)
- Primary Action
- Secondary Actions

Rules

- Exactly one page title.
- Exactly one primary CTA in the page header (orange `primary`).
- Nested content actions use secondary/ghost — see README Primary CTA rule.
- Keep descriptions concise.

---

## 3. Filters / Search

Only display if content can be filtered.

Contains

- Search
- Filters
- Sort
- View Options

Rules

- Place above content.
- Preserve previous selections.
- Allow quick reset.

---

## 4. Main Content

Purpose

Primary task area.

Examples

- Table
- Form
- Dashboard
- Cards
- Timeline
- Editor

Rules

- Occupies most of the viewport.
- Must remain visually dominant.
- Never compete with side content.

---

## 5. Supporting Information

Examples

- Statistics
- Related Items
- Notes
- Activity
- Comments

Rules

Support—not replace—the primary content.

---

## 6. Footer

Optional.

Only include if additional actions or legal information are required.

Never place important actions exclusively in the footer.

---

# Screen Types

Every generated screen should belong to one of the following categories.

---

# Dashboard

Purpose

Provide a high-level overview.

Structure

```

Header

↓

KPI Cards

↓

Charts

↓

Primary Workflow

↓

Recent Activity

↓

Supporting Information

```

Rules

- KPIs always appear before charts.
- Recent activity near bottom.
- Maximum six KPI cards.
- Maximum three charts.
- Never overload dashboards.

---

# List Page

Purpose

Browse multiple records.

Structure

```

Header

↓

Search

↓

Filters

↓

Bulk Actions

↓

Table / Cards

↓

Pagination

```

Rules

- Search always before filters.
- Bulk actions appear only when items are selected.
- Pagination always below content.

---

# Detail Page

Purpose

Display one entity.

Structure

```

Header

↓

Summary

↓

Primary Information

↓

Related Information

↓

History

↓

Actions

```

Rules

Keep primary information visible before supporting information.

---

# Create / Edit Page

Purpose

Create or modify data.

Structure

```

Header

↓

Instructions (optional)

↓

Grouped Form Sections

↓

Validation

↓

Primary Actions

```

Rules

Never present one long unstructured form.

Group related fields.

---

# Settings

Purpose

Configure application behavior.

Structure

```

Category Navigation

↓

Section

↓

Settings

↓

Save Bar

```

Rules

Always group settings.

Never mix unrelated settings.

---

# Wizard

Purpose

Guide users through complex tasks.

Structure

```

Progress Indicator

↓

Current Step

↓

Navigation Buttons

```

Rules

- Clearly indicate progress.
- One step at a time.
- Preserve entered information.

---

# Empty State

Purpose

Guide users when no data exists.

Contains

- Illustration/Icon
- Title
- Explanation
- Primary CTA

Rules

Always explain why the page is empty.

Always provide a recovery action.

---

# Error State

Purpose

Recover from failures.

Contains

- Error Message
- Explanation
- Retry Button

Rules

Never expose technical errors.

Always explain what users can do next.

---

# Loading State

Purpose

Communicate progress.

Rules

- Use skeletons whenever possible.
- Preserve layout during loading.
- Avoid layout shifts.

---

# Section Rules

Every page section must have:

- Clear heading
- Related content
- Consistent spacing
- Visual separation
- Logical grouping

Never create sections without purpose.

---

# Visual Balance

Content should feel balanced.

Avoid:

- Large empty spaces
- Uneven columns
- Floating buttons
- Random card sizes
- Misaligned content

---

# White Space

Whitespace improves readability.

Rules

- Separate unrelated sections.
- Avoid excessive compression.
- Avoid excessive spacing.

Whitespace should communicate structure.

---

# CTA Placement

Primary CTA

Top-right of page header.

Secondary Actions

Beside primary action.

Destructive Actions

Separated from primary actions.

Never place destructive actions beside Save.

---

# Sticky Elements

Allowed

- Navigation
- Filters
- Table Header
- Save Bar
- Wizard Navigation

Avoid excessive sticky elements.

---

# Responsive Composition

Desktop

Multiple columns allowed.

Tablet

Reduce secondary panels.

Mobile

Single-column layout.

Stack vertically.

Never require horizontal scrolling.

---

# AI MUST

- Follow the appropriate page template.
- Use consistent reading flow.
- Prioritize primary workflows.
- Group related content.
- Remove unnecessary sections.

---

# AI MUST NEVER

- Invent page layouts.
- Mix multiple screen types.
- Create multiple primary workflows.
- Scatter actions randomly.
- Create visually unbalanced layouts.

---

# Validation Checklist

Every generated screen must satisfy:

✓ One page purpose

✓ One page title

✓ One primary workflow

✓ One primary CTA

✓ Logical reading order

✓ Related information grouped

✓ Appropriate screen template used

✓ Proper empty state

✓ Proper loading state

✓ Proper error state

✓ Responsive layout

✓ Balanced spacing

✓ Consistent section hierarchy

✓ No unnecessary components

---

# Final Principle

Users should never have to learn where information is located.

If two screens perform similar jobs, they should have similar layouts.

Consistency is more valuable than creativity.

---

## 04_form_patterns — Form patterns

Source: default (04_form_patterns.md)

# 04_form_patterns.md

Version: 1.1

Part of: Aperture Design Governance

---

# Purpose

This document defines how forms should be designed, structured, validated, and generated.

Forms are the primary interaction pattern in enterprise software.

Every generated form must minimize user effort, reduce errors, and maximize completion rate.

Whenever this document conflicts with aesthetics, this document wins.

---

# Design Philosophy

Forms exist to collect information.

They should never feel like paperwork.

Users should always understand:

• What information is needed.

• Why it is needed.

• Which fields are required.

• What happens after submission.

A good form reduces effort.

A great form feels effortless.

---

# Core Principles

Every form must be

• Easy to scan

• Easy to complete

• Easy to validate

• Easy to recover

• Easy to edit

---

# Form Anatomy

Every form should follow this structure.

Header

↓

Description (optional)

↓

Section 1

↓

Section 2

↓

Section 3

↓

Review (optional)

↓

Primary Actions

---

# Form Header

Contains

• Form Title

• Short description (optional)

Rules

One title only.

Descriptions should explain purpose—not implementation.

Good

Create Customer

Bad

Customer Creation Interface

---

# Form Sections

Large forms must be divided into logical sections.

Examples

Personal Information

Contact Information

Billing Information

Emergency Contact

Employment

Preferences

Never create one long list of fields.

---

# Field Ordering

Fields should appear in the same order users naturally think.

Example

Name

↓

Email

↓

Phone

↓

Address

↓

Notes

Never ask for detailed information before basic identity.

---

# Labels

Every input requires a visible label.

Never use placeholders as labels.

Good

Email address

[text field]

Bad

[text field]

Placeholder:
Email address

---

# Required Fields

Only require information that is absolutely necessary.

Mark required fields clearly.

Avoid making every field required.

---

# Optional Fields

Optional fields should be labeled.

Example

Company (optional)

Middle name (optional)

---

# Helper Text

Use helper text only when necessary.

Explain

• Expected format

• Restrictions

• Why information is needed

Never duplicate labels.

---

# Validation

Prefer inline validation.

Validate

• Required

• Format

• Length

• Range

• Duplicate values

**Timing (canonical — matches README / `01`):**

1. Do not validate aggressively on every keystroke before the field is first blurred.
2. After the field is touched or blurred → validate that field on subsequent changes.
3. On submit → validate all fields; move focus to the first invalid control; announce errors accessibly (`aria-invalid`, `aria-describedby`, assertive live region for blocking failures).
4. On success → toast or inline confirmation.

Show helpful errors as soon as the user has finished with a field—not while they are still typing the first character.

---

# Error Messages

Good

Email address is required.

Password must contain at least 8 characters.

Bad

Invalid Input

Error 5002

---

# Input Types

Always use the correct control.

Short text

Input

Long text

Textarea

Date

Date Picker

Boolean

Switch

One choice

Radio

Many choices

Checkbox

Large searchable list

Combobox

Never substitute incorrect controls.

---

# Default Values

Pre-fill information whenever safe.

Examples

Country

Timezone

Current User

Today's Date

Remember previous choices.

---

# Grouping

Related fields belong together.

Never mix unrelated topics.

Good

Address

City

State

ZIP

Bad

Address

Phone

ZIP

Email

---

# Long Forms

If more than 15 fields

Group into sections.

If more than 30 fields

Consider multi-step wizard.

---

# Multi-step Forms

Use only when complexity requires it.

Every step should contain one logical group.

Always show progress.

Never lose entered information.

---

# Save Behaviour

Support

Auto Save (where appropriate)

Save Draft

Cancel

Reset

Warn before leaving with unsaved changes.

---

# Primary Actions

Preferred

Save

Create

Submit

Update

Secondary

Cancel

Back

Reset

Destructive actions must remain separated.

---

# Mobile Behaviour

Fields stack vertically.

Minimum touch target 44px.

Avoid side-by-side inputs unless necessary.

Keyboard should never hide focused fields.

---

# Accessibility

Every field requires

Visible Label

Keyboard Access

Focus Indicator

ARIA Labels

Error Association

Screen Reader Support

---

# AI MUST

Use the correct input type.

Group related fields.

Use inline validation.

Generate clear labels.

Generate meaningful errors.

Support keyboard navigation.

Preserve entered values.

---

# AI MUST NEVER

Create placeholder-only labels.

Create giant ungrouped forms.

Use generic error messages.

Require unnecessary information.

Reset completed forms after validation errors.

---

# Validation Checklist

✓ Visible title

✓ Logical grouping

✓ Correct input types

✓ Labels

✓ Helper text

✓ Validation

✓ Error handling

✓ Mobile friendly

✓ Accessible

✓ Clear primary action

✓ Unsaved change protection

✓ Consistent spacing

---

# Final Principle

The best form is not the one with the fewest fields.

The best form is the one that feels the easiest to complete.

---

## 05_table_patterns — Table patterns

Source: default (05_table_patterns.md)

# 05_table_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines when and how tables should be generated.

Tables display comparable records. They are not a default layout for every screen.

If this document conflicts with aesthetics, this document wins.
For visual tokens and components, follow `01_design_system.md`.
For conflict priority across all guidelines, follow `README.md`.

---

# Design Philosophy

Users scan tables to compare, find, and act on records.

Every column must earn its place.

Every interactive table feature (search, sort, filter, pagination) must match the dataset size and task—not be added by default.

---

# Choose the right control

| Need | Use |
|------|-----|
| Read-only comparable data, few rows, no sort/filter | **Table** (static) |
| Sort, filter, search, selection, or pagination | **Data Table** |
| Precise values matter more than shape | Table / Data Table over Chart |
| Card list on mobile when columns collapse poorly | Stacked rows / card list (see Responsive) |

Never use tables for page layout.

---

# Static Table (simple)

Required

- Native `<table>` semantics (`th` with scope, optional `<caption>`)
- Clear column headers
- Numbers right-aligned
- Status via badge + text (never color alone)

Optional

- Row actions as secondary/ghost icon buttons with labels

Do **not** require search, sort, filters, or pagination on small static tables (e.g. &lt; ~20 rows of reference data).

---

# Data Table (interactive)

Use when any of the following are true:

- More than ~20 rows expected
- Users need to find a specific record quickly
- Users need to compare by sorting a column
- Users need to narrow the set (filters)
- Server- or client-paginated datasets

When a Data Table is used, include the features the task needs:

| Feature | Required when |
|---------|----------------|
| Column sort | Users compare or rank by a field |
| Search | Directory/list of many named entities |
| Filters | Multiple facets (status, owner, date) |
| Pagination or virtualization | Large datasets |
| Row selection | Bulk actions exist |
| Empty state | Zero rows possible |
| Loading skeleton | Async fetch |

Automatic failure for Data Tables only:

- Unsortable columns when comparison is the primary task
- No search on large entity directories
- Pagination without totals / position when paginated
- Missing empty or loading states

---

# Column rules

- Prefer 4–7 visible columns on desktop; hide secondary columns on tablet/mobile.
- Pin identity column (name/id) when horizontal space is tight.
- Truncate long text with title/tooltip; never clip without affordance.
- Put primary row action at end (secondary button or menu); never multiple primary fills in a row.

---

# Toolbar pattern

Place above the table:

Search (if needed) → Filters → View options → Primary create action (page header preferred; table toolbar uses secondary unless this is a focused embedded task surface—see README Primary CTA rule).

Allow clear/reset of filters.

Preserve filter/sort state when returning to the page when practical.

---

# Row actions

- Single common action → icon button or text button (`ghost` / `secondary`)
- Multiple actions → Dropdown Menu
- Destructive row action → follow Destructive actions policy in README:
  - Recoverable → Undo toast
  - Irreversible → Alert Dialog

Never hide the only path to a critical action inside an unlabeled icon.

---

# Responsive behaviour

Desktop

- Full columns + toolbar

Tablet

- Hide lowest-priority columns; keep identity + status + actions

Mobile (&lt; 640px)

- Prefer stacked row cards or horizontally scrollable table with sticky first column
- Move filters into Sheet→Drawer pattern (bottom Drawer)
- Keep search reachable without horizontal scroll

Never rely on tiny unreadable multi-column grids on small screens.

---

# Accessibility

- Use real table markup for tabular data
- Sort controls expose `aria-sort`
- Select-all and row checkboxes have accessible names
- Keyboard reaches sort headers and row actions
- Announce loading and empty states

---

# Content

- Header labels: Title Case for column names that act as headings (`Status`, `Created At`)
- Cell values: sentence case for prose; preserve proper nouns and IDs
- Empty: “No [entities] yet” + recovery CTA (see `08_feedback_patterns.md`)

---

# Do

✓ Prefer Data Table only when interaction is needed  
✓ Right-align numeric columns  
✓ Pair status color with label  
✓ Provide empty + loading states for async tables  
✓ Match features to dataset size  

# Don’t

✗ Force search/sort/pagination on tiny static tables  
✗ Use layout tables  
✗ Encode status by color alone  
✗ Overflow without a mobile strategy  
✗ Put multiple primary buttons in each row  

---

# Final Principle

Tables exist to help users decide and act on records.

Add power features when the task needs them—not because tables “usually” have them.

---

## 06_dashboard_patterns — Dashboard patterns

Source: default (06_dashboard_patterns.md)

# 06_dashboard_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how dashboards should be designed and structured.

Dashboards exist to help users quickly understand the current state of a system, identify problems, monitor progress, and take action.

Dashboards are not reports.

Dashboards are not data dumps.

Every dashboard must prioritize clarity, actionability, and decision making.

---

# Design Philosophy

Users should understand the health of the system within five seconds.

The dashboard should answer:

• What is happening?

• Is everything okay?

• What needs my attention?

• What should I do next?

If a dashboard cannot answer these questions immediately, it should be redesigned.

---

# Core Principles

Every dashboard should be

- Actionable
- Focused
- Scannable
- Real-time
- Role-specific
- Minimal
- Prioritized

Never build dashboards that simply display data.

---

# Dashboard Anatomy

Every dashboard should follow this structure.

Page Header

↓

Primary KPI Summary

↓

Alerts & Important Notifications

↓

Primary Business Metrics

↓

Supporting Analytics

↓

Recent Activity

↓

Quick Actions

---

# Page Header

Contains

- Dashboard Title
- Date Range
- Filters
- Refresh Action

Optional

- Export
- Share

Rules

Keep filters close to the title.

Do not overload the header.

---

# KPI Summary

Purpose

Provide an instant overview.

Rules

Display the most important business metrics first.

Examples

Revenue

Active Users

Orders

Open Tickets

System Health

Pending Approvals

Rules

Maximum six KPI cards.

Never display more than two rows of KPIs.

Every KPI must include

Current Value

↓

Trend

↓

Comparison

↓

Status

Example

1,245 Orders

↑ 12%

Compared to last week

---

# Alerts

Critical information appears immediately after KPIs.

Examples

Payment failures

System outage

Pending approvals

Security issues

Inventory shortage

Rules

Critical alerts first.

Warnings second.

Informational messages last.

Do not mix alerts with analytics.

---

# Charts

Charts answer questions.

They do not decorate pages.

Every chart must answer one business question.

Example

Revenue by Month

Orders by Region

New Users per Week

Support Resolution Time

Bad

Random Pie Chart

Random Line Graph

No context.

---

# Chart Selection

Use

Line Chart

Trends

Bar Chart

Comparison

Stacked Bar

Composition

Area Chart

Growth

Donut

Simple proportions

Table

Detailed information

Avoid

3D Charts

Decorative Charts

Gauge Charts

Radar Charts

Unless explicitly required.

---

# Supporting Analytics

Examples

Top Customers

Top Products

Recent Sales

Conversion Funnel

Team Performance

These should support the primary KPIs.

Never compete with them.

---

# Recent Activity

Purpose

Show what happened recently.

Examples

Recent Orders

Recent Logins

Recent Tickets

Recent Payments

Rules

Newest first.

Provide quick access.

Allow navigation to details.

---

# Quick Actions

Frequently used actions should appear near the bottom or side.

Examples

Create Customer

Add User

Generate Report

Create Invoice

Approve Request

Rules

Maximum six quick actions.

Never replace navigation.

Never duplicate the same destinations as another shortcut surface on the same screen (e.g. do not ship both a "Workflow shortcuts" icon grid and a "Quick links" list with the same six routes). Pick one primary shortcut surface; primary nav already covers global destinations.

---

# Dashboard Layout

Preferred layout

Desktop

```

KPI Row

↓

Charts

↓

Tables

↓

Activity

```

Tablet

```

KPIs

↓

Charts

↓

Activity

```

Mobile

```

KPIs

↓

Alerts

↓

Charts

↓

Activity

```

---

# Visual Priority

Highest

Critical Alerts

↓

KPIs

↓

Charts

↓

Tables

↓

Activity

↓

Supporting Information

Never reverse this order.

---

# Refresh Behaviour

Support

Manual Refresh

Auto Refresh (where appropriate)

Last Updated timestamp

Loading indicators

Never refresh unexpectedly while users interact.

---

# Empty Dashboard

Display

Illustration

↓

Explanation

↓

Primary Action

↓

Helpful Resources

Never show empty widgets.

---

# Loading Dashboard

Use skeleton cards.

Preserve layout.

Load critical metrics first.

Progressively load charts.

Avoid layout shifting.

---

# Error Handling

Dashboard failures should clearly explain

What failed.

What still works.

How users can recover.

Never display technical errors.

---

# Personalization

Allow users to

Choose date ranges.

Save filters.

Remember layout preferences.

Choose density.

Pin favorite widgets.

Do not require personalization for usability.

---

# Performance

Load KPIs first.

Lazy load charts.

Cache previous results.

Load secondary widgets after primary information.

Never block the entire dashboard.

---

# Accessibility

Every chart requires

Title

Description

Keyboard access

Data summary

Accessible colors

Charts must not depend only on color.

---

# AI MUST

Prioritize business decisions.

Display KPIs before analytics.

Separate alerts from reports.

Group related widgets.

Keep dashboards focused.

Use meaningful chart types.

Support loading states.

Support empty states.

Support error states.

---

# AI MUST NEVER

Create dashboards with random widgets.

Display more than six KPI cards.

Place charts before critical alerts.

Mix unrelated business metrics.

Use decorative charts.

Duplicate information.

Show the same destinations twice on one page under different layouts (Workflow shortcuts + Quick links with identical routes).

Display unnecessary statistics.

Overwhelm users.

---

# Validation Checklist

✓ Clear dashboard purpose

✓ Maximum six KPI cards

✓ Alerts separated

✓ Meaningful charts

✓ Recent activity visible

✓ Quick actions available

✓ No duplicate shortcut destinations (one shortcut surface — not Quick links + Workflow shortcuts with the same routes)

✓ Loading state

✓ Empty state

✓ Error state

✓ Responsive

✓ Accessible

✓ Fast initial loading

✓ Logical visual hierarchy

✓ Business-focused metrics

---

# Final Principle

A dashboard should help users make decisions.

If users have to search for important information, the dashboard has failed.

---

## 07_navigation_patterns — Navigation patterns

Source: default (07_navigation_patterns.md)

# 07_navigation_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how navigation should be designed throughout the application.

Navigation exists to help users move between workflows with the least possible effort.

Navigation should always feel predictable.

Users should never wonder:

- Where am I?
- Where can I go?
- How do I go back?

---

# Design Philosophy

Navigation is not decoration.

Navigation is a map.

Users should always understand their current location and available destinations.

Navigation should disappear mentally.

Users should focus on their work—not on finding pages.

---

# Core Principles

Every navigation system must be

- Predictable
- Consistent
- Discoverable
- Minimal
- Scalable
- Responsive
- Accessible

---

# Navigation Hierarchy

Every application should follow this hierarchy.

Application

↓

Module

↓

Page

↓

Section

↓

Component

Never exceed four navigation levels.

---

# Primary Navigation

Purpose

Move between major application modules.

Examples

Dashboard

Customers

Orders

Reports

Settings

Rules

- Always visible on desktop.
- Highlight current module.
- Use icons with labels.
- Sort modules by importance.
- Keep names short.

Maximum recommended items:

8

If more than eight,

group related modules.

---

# Secondary Navigation

Purpose

Navigate inside a module.

Examples

Profile

Security

Notifications

Billing

Rules

Keep navigation contextual.

Never mix unrelated sections.

---

# Breadcrumbs

Purpose

Show current location.

Structure

Home

>

Customers

>

John Smith

Rules

Show only when navigation depth exceeds one level.

Breadcrumbs should always be clickable.

Current page should not be clickable.

---

# Sidebar

Preferred for desktop applications.

Contains

- Logo
- Navigation
- Workspace Switcher
- Collapse Button
- User Profile

Rules

Support collapse.

Collapsed state shows icons.

Expanded state shows icons and labels.

Remember user preference.

---

# Top Navigation

Use for

Global search

Notifications

Help

Profile

Workspace switching

Do not place page-specific actions in global navigation.

---

# Mobile Navigation

Preferred

Bottom Navigation

or

Drawer Navigation

Maximum bottom navigation items

5

Additional pages belong in the drawer.

---

# Search

Global search should always remain accessible.

Search should locate

Pages

Users

Projects

Reports

Settings

Commands

Support keyboard shortcut.

Ctrl + K

or

⌘ + K

---

# Quick Navigation

Frequently used actions should be accessible.

Examples

Recent Pages

Favorites

Pinned Items

Recent Searches

Never require users to repeatedly navigate deep hierarchies.

---

# Navigation Labels

Labels should describe destinations.

Good

Customers

Invoices

Projects

Bad

Manage

Open

Start

Module

Keep labels noun-based whenever possible.

---

# Current Location

Users must always know where they are.

Highlight

Current module

Current page

Current tab

Current section

Never allow multiple active items.

---

# Tabs

Use tabs only for sibling content.

Good

Overview

Activity

Documents

History

Bad

Customers

Reports

Settings

Orders

Those belong in navigation.

---

# Back Navigation

Support

Browser Back

Back Button

Breadcrumbs

Cancel

Never trap users inside workflows.

---

# External Links

Always indicate when users leave the application.

Examples

Documentation

Support Portal

Company Website

Open external links in new tabs when appropriate.

---

# Icons

Icons support labels.

Icons never replace labels.

Exception

Collapsed sidebar.

---

# Notifications

Notifications belong in the global navigation.

Never interrupt workflows unless necessary.

Critical notifications should appear separately from standard notifications.

---

# Workspace Switching

For multi-tenant applications,

workspace switching should remain accessible from every page.

Switching workspaces should clearly indicate the active workspace.

---

# Responsive Navigation

Desktop

Persistent Sidebar

Tablet

Collapsed Sidebar

Mobile

Bottom Navigation

+

Drawer

Never force horizontal scrolling.

---

# Accessibility

Navigation must support

Keyboard navigation

Screen readers

Focus indicators

ARIA landmarks

Skip Navigation links

Visible active states

---

# AI MUST

Use consistent navigation across every page.

Keep navigation shallow.

Highlight current location.

Use descriptive labels.

Remember navigation preferences.

Support keyboard navigation.

---

# AI MUST NEVER

Invent different navigation systems.

Mix unrelated modules.

Hide important pages.

Use icons without labels.

Nest navigation excessively.

Create dead-end pages.

---

# Validation Checklist

✓ Current page highlighted

✓ Maximum four navigation levels

✓ Sidebar consistent

✓ Breadcrumbs where appropriate

✓ Global search available

✓ Mobile navigation supported

✓ Keyboard accessible

✓ Icons paired with labels

✓ Responsive

✓ Workspace clearly identified

✓ No dead ends

---

# HARD RULES — Product app entry & navigation (Ops4)

These rules are mandatory for generated product applications (Build Now / Cursor).

## Auth entry journey (MUST)

Default flow for web products:

Landing → Login → (Forgot password | Register) → Role home / first authenticated page

1. The application **always starts on a Landing** page (marketing/product entry), not an empty dashboard.
2. Landing CTAs navigate to **Login**. If the product has multiple roles, Landing may show per-role CTAs (e.g. “Continue as Buyer”) that still route to Login — **do not** put real username/password forms on the Landing.
3. Login **must** expose working links to **Forgot password** and **Register**.
4. After successful login, route the user to the **first page for that role** from discovery (`primary_user_role` + sitemap), typically that role’s dashboard or primary workspace.
5. Multi-role products: one Login form (optional role selector on Login is fine); credentials resolve role and destination. Never place separate password boxes per role on Landing.

## Navigation structure (MUST)

1. Provide a clear, predictable primary navigation model (top nav, sidebar, or tabs) appropriate to the product category.
2. Authenticated shells must keep navigation consistent across screens for the same role.
3. Every nav destination must resolve to a real route — no dead ends or placeholder “#” links for primary journeys.
4. Users must always know where they are (active nav item, breadcrumbs where nested).

## Design Pattern Brain / Screens (MUST)

1. When Design Pattern Brain or Screens library briefs exist for a matching screen type (especially landing, login, register, password), **apply that composition**.
2. Keep product brand tokens from the locked design system — do not clone reference branding.
3. UI must remain visually consistent across the app (same shell, density, control types, tokens).

## AI MUST NEVER (navigation)

- Start the app on a blank authenticated dashboard with no Landing/Login path.
- Ship Login without Forgot password and Register links.
- Leave primary navigation as inert chrome.
- Ignore matching Pattern Brain / Screens composition for auth/landing when briefs are present.
- Duplicate the same destinations on one page under different layouts (e.g. Workflow shortcuts + Quick links with identical routes). Pick one shortcut surface.

---

# Final Principle

Users should never think about navigation.

If users stop to figure out where to click next, the navigation has failed.

---

## 08_feedback_patterns — Feedback patterns

Source: default (08_feedback_patterns.md)

# 08_feedback_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how applications communicate with users.

Every user action should receive appropriate feedback.

Users should always know:

- What is happening.
- What has happened.
- What will happen next.
- Whether an action succeeded or failed.

Feedback should reduce uncertainty.

Never leave users guessing.

---

# Design Philosophy

Silence creates confusion.

Every interaction deserves a response.

Feedback should be:

- Immediate
- Clear
- Contextual
- Helpful
- Actionable

Never interrupt users unless absolutely necessary.

---

# Core Principles

Every interface must provide feedback for:

- Loading
- Success
- Failure
- Warning
- Progress
- Empty State
- Confirmation
- Background Processing
- Validation

---

# Feedback Hierarchy

Use the least disruptive feedback possible.

Information

↓

Success

↓

Warning

↓

Error

↓

Blocking Confirmation

Never interrupt users unnecessarily.

---

# Loading States

Users should immediately know that work is in progress.

Preferred order

1. Skeleton Loading
2. Inline Spinner
3. Progress Indicator
4. Full Page Loading (last resort)

Rules

- Preserve layout during loading.
- Never show blank pages.
- Never hide existing content while refreshing.
- Show loading immediately.

---

# Skeleton Loading

Use for

- Cards
- Tables
- Dashboards
- Lists
- Forms

Rules

Skeleton should closely resemble final layout.

Avoid flashing between loading and loaded states.

---

# Spinner

Use only for

- Small actions
- Inline loading
- Button loading

Avoid fullscreen spinners whenever possible.

---

# Progress Indicators

Use for operations longer than three seconds.

Examples

File Upload

Data Import

Report Generation

Export

Migration

Display

Current Progress

↓

Estimated Time (optional)

↓

Cancel (if possible)

---

# Success Feedback

Users should know when actions complete successfully.

Preferred methods

Toast

↓

Inline Success

↓

Success Screen

Rules

Success messages should be brief.

Example

Customer created.

Profile updated.

Invoice sent.

Avoid

Operation completed successfully.

---

# Error Feedback

Errors should help users recover.

Every error must answer

What happened?

Why?

How can I fix it?

Never expose

Stack traces

Technical IDs

Database errors

API messages

---

# Warning Feedback

Warnings communicate risk.

Examples

Unsaved changes

Low inventory

Expiring subscription

Delete confirmation

Warnings should not block users unless necessary.

---

# Empty States

Never display empty tables or blank pages.

Every empty state should include

Illustration or Icon

↓

Title

↓

Explanation

↓

Primary Action

Example

No customers yet.

Create your first customer to get started.

[Create customer]

---

# Confirmation Dialogs

Use **Alert Dialog** only for

Irreversible actions

High-impact actions that cannot be undone easily

Examples

Permanent delete / purge

Cancel subscription

Wipe data

Never confirm simple or easily reversible actions.

---

# Undo

For **recoverable** destructive actions, prefer Undo over a confirmation modal.

Examples

Soft delete

Archive

Dismiss

Flow

Action completes

↓

Toast with Undo (~10 seconds)

Do not use Undo-only for irreversible/high-impact actions — those require Alert Dialog (see README Destructive actions).

---

# Notifications

Notification types

Information

Success

Warning

Error

Rules

Keep notifications concise.

Automatically dismiss success messages.

Persistent errors require user action.

---

# Toasts

Use for

Short-lived feedback.

Examples

Saved

Copied

Updated

Sent

Rules

Maximum three visible.

Disappear automatically.

Pause on hover.

Never use toasts for irreversible or blocking critical failures (use Alert Dialog or persistent Alert).

Recoverable errors may use an assertive toast with retry when useful.

---

# Inline Feedback

Use inside forms.

Examples

Email available.

Password strength.

Invalid date.

Keep messages close to the related field.

---

# Background Processing

Long-running operations should continue in the background.

Users should be informed

Work started.

↓

Work in progress.

↓

Completed.

Allow users to continue working.

---

# Offline Feedback

Applications should detect connectivity changes.

Display

Offline

↓

Reconnecting

↓

Connected

Queue user actions when possible.

---

# Auto Save Feedback

When autosave exists,

display

Saving...

↓

Saved

↓

Last saved 2 minutes ago

Users should never wonder if data is safe.

---

# Retry

Whenever possible,

provide Retry.

Examples

Failed Upload

Network Error

Sync Failure

Never require users to restart workflows.

---

# AI MUST

Provide feedback for every user action.

Use skeleton loading.

Generate meaningful errors.

Generate meaningful success messages.

Support retry.

Support undo where possible.

Generate empty states.

Generate loading states.

---

# AI MUST NEVER

Leave users waiting silently.

Display blank pages while loading.

Expose technical errors.

Use generic messages.

Interrupt users unnecessarily.

Require page refreshes after actions.

---

# Validation Checklist

✓ Loading state exists

✓ Empty state exists

✓ Error state exists

✓ Success state exists

✓ Warning state exists

✓ Retry supported

✓ Undo supported where applicable

✓ Progress shown for long tasks

✓ Autosave feedback

✓ Background tasks communicated

✓ Notifications concise

✓ Feedback contextual

---

# HARD RULES — Functional product apps (Ops4)

Mandatory for Build Now / Cursor-generated applications.

## No dead controls (MUST)

1. Every visible interactive element must be functional: search fields, filters, tabs, menus, buttons, pagination, toggles.
2. If a control is shown, wiring it to dummy data or a mock handler is required — never leave decorative inert chrome that looks clickable.
3. Prefer removing a control over shipping a non-working one.

## Dummy data (MUST)

1. Provide local fixtures (`src/data/*.json` or equivalent) and/or a thin mock API so lists, search, and filters operate on real-shaped data.
2. Search and filter must update visible results against that data.
3. Role-specific demos may use seeded accounts documented in README (e.g. buyer@demo / seller@demo) that route to the correct home.

## Real async UX (MUST)

1. Treat the app like production: show a **loader/skeleton first**, then populate with data (even when data is local/mock).
2. Do not flash blank content that looks broken while loading.
3. Errors must be recoverable (retry) and human-readable.

## State preview FAB (MUST)

1. Include a small **rounded floating button** in a corner (prefer bottom-right), visually distinct from product chrome (label “States” or similar).
2. On press, open a menu to force the **current screen** into: **Loading · Empty · Error · Ready** (plus screen-specific states when relevant).
3. Default runtime mode is Ready (async loader → data). Forced states are for review / QA of generated UIs.
4. The FAB must not replace primary product navigation or compete with the page’s primary CTA hierarchy.

## AI MUST NEVER (functional apps)

- Ship searching/filtering UI that does nothing.
- Skip loading states on data-driven screens.
- Omit empty or error treatment for list/detail screens.
- Leave reviewers with no way to inspect non-ready states.

---

# Final Principle

Every user action should receive an immediate and meaningful response.

If users wonder whether the application is working,

the interface has failed.

---

## 09_layout_patterns — Layout patterns

Source: default (09_layout_patterns.md)

# 09_layout_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how content should be arranged across every page of the application.

Good layouts reduce cognitive load, improve readability, and make applications feel professional.

Every generated interface must follow these layout standards.

This document defines **where components should be placed**, **how much space they require**, and **how content should flow**.

---

# Design Philosophy

Layout is communication.

Users should understand page structure before reading any content.

Good layouts create rhythm.

Good layouts create balance.

Good layouts naturally guide attention.

Users should never feel lost because of poor positioning.

---

# Core Principles

Every layout must be

- Predictable
- Balanced
- Consistent
- Responsive
- Spacious
- Readable
- Purposeful

---

# Layout Hierarchy

Every page follows this order.

Application Shell

↓

Navigation

↓

Page Header

↓

Page Content

↓

Supporting Content

↓

Footer (Optional)

Never change this hierarchy without good reason.

---

# Page Width

Use consistent maximum content widths.

Recommended

Small Content

640px

Forms

768px

Standard Pages

1280px

Analytics

1440px

Never stretch content across the entire monitor.

Large screens should improve readability—not increase line length.

---

# Grid System

Use a 12-column grid.

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

All layouts should align to the grid.

Never position components arbitrarily.

---

# Containers

Every page should use containers.

Container responsibilities

- Alignment
- Padding
- Responsive resizing
- Visual consistency

Never place content directly against browser edges.

---

# Page Padding

Desktop

32px

Tablet

24px

Mobile

16px

Maintain consistent page padding.

---

# Section Spacing

Separate sections using the 4px spacing rail from `01_design_system.md`.

Recommended (token-mapped)

Section to Section

48px (`space-12`)

Section Heading to Content

24px (`space-6`)

Cards inside section

24px (`space-6`)

Related Components

16px (`space-4`)

Small Controls

8px (`space-2`)

Desktop page padding

32px (`space-8`)

Never invent spacing values outside the rail.

---

# Alignment

Align everything to the same vertical grid.

Examples

Good

Titles

↓

Cards

↓

Buttons

↓

Tables

All share the same left edge.

Bad

Floating cards.

Random margins.

Misaligned buttons.

Uneven columns.

---

# Reading Direction

Users naturally scan

Desktop

Top Left

↓

Top Right

↓

Middle

↓

Bottom

Mobile

Top

↓

Bottom

Place important information accordingly.

---

# White Space

Whitespace is intentional.

Whitespace separates meaning.

Do not fill empty areas simply because space exists.

Never sacrifice readability to reduce whitespace.

---

# Visual Balance

Every screen should feel balanced.

Avoid

Large empty regions

↓

Crowded regions

↓

Uneven component sizes

↓

Misaligned sections

Balance is more important than symmetry.

---

# Cards

Cards should group related information.

Use cards only when they create meaning.

Do not wrap everything in cards.

Avoid nested cards.

Maximum nesting

2 Levels

---

# Columns

Multiple columns should only exist when they improve readability.

Examples

Dashboard

2–4 columns

Form

1–2 columns

Settings

1–2 columns

Detail Page

2 columns

Mobile

1 column

Never create narrow unreadable columns.

---

# Sidebar Width

Expanded

280px

Collapsed

72px

Never resize sidebar unpredictably.

---

# Content Density

Support three density modes.

Comfortable

Default

Compact

Remember user preference.

Do not mix densities on the same page.

---

# Section Headers

Every major section requires

Title

Optional Description

Optional Action

Never place unrelated actions inside section headers.

---

# Dividers

Use dividers sparingly.

Prefer whitespace before borders.

Borders should reinforce structure—not replace spacing.

---

# Sticky Layouts

Allowed

Navigation

Table Header

Filter Bar

Save Bar

Wizard Footer

Avoid excessive sticky regions.

---

# Modals

Small

Confirmation

Medium

Standard Forms

Large

Complex Forms

Extra Large

Advanced Workflows

Never use fullscreen modals on desktop unless the task truly requires it.

On mobile (&lt; 640px), dialogs may go fullscreen for usability (see `10_responsive_patterns.md`).

---

# Sheets & Drawers

Use the Sheet / Drawer pattern for

Filters

Secondary editing

Quick details

**Breakpoint rule (canonical):**

- **≥ 640px** → shadcn **Sheet** (edge panel; “right drawer” means Sheet)
- **&lt; 640px** → shadcn **Drawer** (bottom)

Avoid placing entire multi-step workflows inside sheets or drawers.

---

# Master-Detail Layout

Preferred

List

↓

Details

Desktop

Side-by-side

Tablet

Adjustable

Mobile

Navigate between screens

---

# Dashboard Layout

Preferred order

KPIs

↓

Alerts

↓

Charts

↓

Tables

↓

Activity

↓

Quick Actions

Never reverse importance.

---

# Form Layout

Preferred

One column

↓

Grouped Sections

↓

Actions

Use two columns only when fields are naturally related.

---

# Table Layout

Toolbar

↓

Filters

↓

Table

↓

Pagination

↓

Bulk Actions

Bulk actions appear only after selection.

---

# Detail Layout

Header

↓

Summary

↓

Primary Information

↓

Related Information

↓

History

↓

Actions

---

# Responsive Layout

Desktop

Multiple columns.

Tablet

Reduce secondary panels.

Mobile

Single column.

Stack vertically.

No horizontal scrolling.

---

# Accessibility

Layouts must support

200% Zoom

Keyboard Navigation

Screen Readers

Reduced Motion

Large Text

No layout should break under accessibility settings.

---

# Performance

Avoid rendering hidden content.

Lazy load secondary panels.

Load above-the-fold content first.

Prevent layout shifts.

---

# AI MUST

Use the 12-column grid.

Maintain consistent spacing.

Align components.

Keep layouts balanced.

Use whitespace intentionally.

Group related information.

Optimize for readability.

Support all breakpoints.

---

# AI MUST NEVER

Create floating components.

Invent spacing values.

Stretch content edge-to-edge.

Nest unnecessary cards.

Mix layout patterns.

Create inconsistent alignments.

Depend on absolute positioning.

Create visually unbalanced pages.

---

# Validation Checklist

✓ Uses standard grid

✓ Consistent page padding

✓ Proper section spacing

✓ Balanced layout

✓ Logical reading flow

✓ Appropriate column usage

✓ Responsive

✓ Accessible

✓ Proper whitespace

✓ Components aligned

✓ No unnecessary cards

✓ No layout shifts

---

# Final Principle

Layout should disappear.

Users should notice the information—not the arrangement.

If the layout distracts users from completing their work, it has failed.

---

## 10_responsive_patterns — Responsive patterns

Source: default (10_responsive_patterns.md)

# 10_responsive_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how every interface must adapt across different screen sizes and devices.

Responsive design is not about shrinking a desktop interface.

Responsive design is about delivering the best possible experience for every device.

Every generated interface must work equally well on desktop, laptop, tablet, and mobile.

---

# Design Philosophy

Content is constant.

Presentation changes.

The user's task remains the same regardless of screen size.

Layouts should adapt.

Workflows should not.

Never remove critical functionality simply because the screen becomes smaller.

---

# Supported Breakpoints

Small Mobile

320px – 479px

Mobile

480px – 639px

Tablet

640px – 1023px

Laptop

1024px – 1439px

Desktop

1440px+

Every generated interface must support every breakpoint.

---

# Core Principles

Every responsive layout must be

- Readable
- Touch Friendly
- Consistent
- Accessible
- Efficient

Never create a mobile version with fewer capabilities unless technically necessary.

---

# Responsive Priority

When screen space decreases, preserve information in this order.

Primary Task

↓

Primary Actions

↓

Primary Content

↓

Supporting Content

↓

Secondary Information

↓

Decorative Elements

Decorative elements disappear first.

Never remove primary workflows.

---

# Navigation

Desktop

Persistent Sidebar

Tablet

Collapsible Sidebar

Mobile

Bottom Navigation

+

Drawer

Rules

Desktop navigation should never appear on mobile unchanged.

---

# Page Width

Desktop

Centered Container

Tablet

Fluid Container

Mobile

Full Width

Always maintain consistent page padding.

---

# Columns

Desktop

2–4 Columns

Tablet

1–2 Columns

Mobile

Single Column

Never create narrow unreadable columns.

---

# Cards

Desktop

Grid Layout

Tablet

2 Columns

Mobile

Single Column

Cards should expand vertically instead of shrinking horizontally.

---

# Forms

Desktop

Two-column layout where appropriate.

Tablet

Reduce to one or two columns.

Mobile

Single column only.

Never place multiple unrelated inputs on the same row on mobile.

---

# Tables

Desktop

Full Table

Tablet

Hide low-priority columns

Mobile

Convert to cards

or

Horizontal scroll only when absolutely necessary.

Never require horizontal scrolling for standard CRUD workflows.

---

# Dashboard

Desktop

KPIs

↓

Charts

↓

Tables

↓

Activity

Tablet

KPIs

↓

Charts

↓

Activity

Mobile

KPIs

↓

Alerts

↓

Charts

↓

Activity

↓

Actions

---

# Sidebar

Desktop

Expanded

Tablet

Collapsed

Mobile

Drawer

Remember previous state on larger devices.

---

# Dialogs

Desktop

Centered Modal

Tablet

Large Modal

Mobile

Fullscreen Dialog

Avoid tiny dialogs on mobile.

---

# Drawers / Sheets

Canonical overlay pattern for secondary panels (filters, details, quick edit):

Desktop / Tablet (≥ 640px)

**Sheet** (edge panel). Older docs may say “Right Drawer” — that means Sheet.

Mobile (&lt; 640px)

**Drawer** (bottom)

Never put full multi-step workflows in Sheet/Drawer.

---

# Buttons

Desktop

Standard Size

Mobile

Minimum Height

44px

Minimum Width

44px

Buttons should stretch full width only when it improves usability.

---

# Touch Targets

Minimum

44 × 44 px

Recommended

48 × 48 px

Never place interactive controls too close together.

---

# Typography

Never reduce body text below

16px

Headings may scale.

Body text should remain readable.

---

# Images

Scale proportionally.

Never crop important content.

Lazy load large images.

---

# Charts

Desktop

Full Charts

Tablet

Simplified Legends

Mobile

Prioritize readability over detail.

Provide table alternative when needed.

---

# Search

Desktop

Full Search Bar

Mobile

Expandable Search

Search should remain available on every device.

---

# Filters

Desktop

Sidebar or toolbar

Tablet / Desktop secondary panel (≥ 640px)

**Sheet**

Mobile (&lt; 640px)

**Drawer** (bottom)

Never permanently hide filters.

---

# Sticky Elements

Desktop

Allowed

Mobile

Use sparingly.

Too many sticky regions reduce usable space.

---

# Keyboard

When the mobile keyboard opens,

Focused fields must remain visible.

Never hide primary actions behind the keyboard.

---

# Orientation

Portrait

Default

Landscape

Improve content density

Do not require landscape mode.

---

# Performance

Load only visible content.

Lazy load secondary sections.

Optimize images.

Avoid unnecessary animations.

Reduce network requests on mobile.

---

# Accessibility

Support

Zoom

Screen Readers

Keyboard Navigation

Voice Control

Reduced Motion

High Contrast

Responsive layouts must remain accessible.

---

# AI MUST

Generate layouts for every breakpoint.

Maintain one primary workflow.

Stack content logically.

Prioritize readability.

Convert layouts—not simply resize them.

Use touch-friendly controls.

Optimize performance.

---

# AI MUST NEVER

Scale desktop layouts directly.

Hide critical functionality.

Create unreadable tables.

Reduce touch targets.

Break navigation.

Require horizontal scrolling unnecessarily.

Reduce accessibility on mobile.

---

# Validation Checklist

✓ Desktop supported

✓ Laptop supported

✓ Tablet supported

✓ Mobile supported

✓ Navigation adapts

✓ Forms adapt

✓ Tables adapt

✓ Dashboards adapt

✓ Touch targets ≥44px

✓ Body text ≥16px for primary reading (14px metadata / 13px labels OK)

✓ No unnecessary horizontal scrolling

✓ Performance optimized

✓ Accessibility preserved

---

# Final Principle

Responsive design is adaptation—not reduction.

Users should feel that the application was designed specifically for the device they are using.

---

## 11_accessibility_rules — Accessibility rules

Source: default (11_accessibility_rules.md)

# 11_accessibility_rules.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines the accessibility standards that every generated interface must follow.

Accessibility is not a feature.

Accessibility is a minimum quality requirement.

Every user, regardless of ability, should be able to successfully complete every supported workflow.

All generated interfaces must meet WCAG 2.1 AA standards at minimum.

---

# Design Philosophy

Accessible software is better software.

Accessibility improves usability for everyone.

Interfaces should never assume users:

- Can see perfectly
- Can hear perfectly
- Can use a mouse
- Can distinguish colors
- Can use a touchscreen precisely
- Can process information quickly

Design for everyone.

---

# Core Principles

Every interface must be

- Perceivable
- Operable
- Understandable
- Robust

Accessibility is mandatory.

Accessibility issues block release.

---

# Keyboard Navigation

Every feature must be usable without a mouse.

Users must be able to

- Navigate
- Select
- Submit
- Close dialogs
- Open menus
- Switch tabs
- Complete forms

using only the keyboard.

---

# Focus Management

Keyboard focus must always be visible.

Rules

- Never remove focus outlines.
- Focus order must match visual order.
- Focus should never become trapped.
- Focus returns to the triggering element when dialogs close.

Every interactive component requires a visible focus state.

---

# Focus Order

Focus should move logically.

Preferred order

Header

↓

Navigation

↓

Primary Content

↓

Secondary Content

↓

Footer

Never create random focus jumps.

---

# Skip Navigation

Every application should provide

Skip to Content

at the beginning of the page.

Keyboard users should bypass repeated navigation quickly.

---

# Touch Targets

Minimum size

44 × 44 px

Recommended

48 × 48 px

Interactive elements should never overlap.

Spacing between touch targets should prevent accidental taps.

---

# Color Contrast

All text must satisfy WCAG AA.

Minimum contrast

Normal Text

4.5 : 1

Large Text

3 : 1

Icons

3 : 1

Never reduce contrast for aesthetic purposes.

---

# Color Usage

Never communicate meaning using color alone.

Every status should include

Color

+

Icon

+

Text

Good

✓ Success

Bad

Green text only

---

# Typography

Minimum **primary reading** body text

16px

Secondary metadata may use 14px (`body-small`). Form labels/control text may use 13px (`label`) per `01_design_system.md`.

Maintain comfortable line height.

Avoid decorative fonts.

Never justify paragraphs.

Keep line lengths readable.

---

# Images

Every meaningful image requires alternative text.

Decorative images

aria-hidden

or

empty alt text.

Never use images to display important text.

---

# Icons

Decorative icons

aria-hidden="true"

Action icons

Accessible label required.

Icons should support text.

Icons should not replace text.

---

# Links

Links should clearly describe their destination.

Good

Download Invoice

Bad

Click Here

Never rely on surrounding context.

---

# Buttons

Every button should describe its action.

Good

Save Changes

Delete User

Generate Report

Bad

OK

Yes

Continue

---

# Forms

Every input requires

Visible Label

Associated Label

Helper Text (when needed)

Error Message

Accessible Description

Never use placeholders as labels.

---

# Form Validation

Errors should

- Identify the field.
- Explain the problem.
- Explain how to fix it.

Follow validation timing in `04_form_patterns.md` / README (blur-after-touch, then submit-all).

Focus should move to the first invalid field after a failed submission.

---

# Error Messages

Error messages should be announced to screen readers.

Never rely on color.

Good

Email address is required.

Bad

Red border only.

---

# Tables

Tables require

Column Headers

Row Headers (when appropriate)

Scope attributes

Captions (when helpful)

Screen readers must understand relationships.

---

# Charts

Charts require

Title

Summary

Alternative data table

Never rely only on visual interpretation.

---

# Dialogs

Dialogs must

Trap keyboard focus.

Close using Escape.

Return focus to the triggering element.

Announce themselves properly.

---

# Notifications

Important notifications should be announced.

Use

aria-live

Appropriate urgency

Success

Polite

Errors

Assertive

---

# Motion

Respect

prefers-reduced-motion

Disable

Large animations

Parallax

Continuous motion

Flashing effects

Never trigger seizures or discomfort.

---

# Timing

Users should have enough time.

Never automatically log users out without warning.

Allow users to extend timeouts whenever possible.

---

# Language

Every page must define its language.

Example

lang="en"

Changes in language should also be identified.

---

# Reading Order

Screen readers should encounter content in the same order that visual users do.

Never create different logical and visual hierarchies.

---

# Zoom

Every page must remain usable at

200%

Zoom

without loss of functionality.

No horizontal scrolling should occur for normal content.

---

# Responsive Accessibility

Accessibility requirements remain identical on

Desktop

Tablet

Mobile

Never reduce accessibility because of screen size.

---

# Performance

Accessibility should not significantly reduce application performance.

Optimize

ARIA usage

Screen reader announcements

Keyboard interactions

Avoid excessive live regions.

---

# AI MUST

Generate semantic HTML.

Generate accessible labels.

Generate keyboard support.

Generate visible focus states.

Generate meaningful alt text.

Generate accessible error messages.

Support screen readers.

Maintain sufficient color contrast.

Support reduced motion.

Support zoom.

---

# AI MUST NEVER

Remove focus indicators.

Depend only on color.

Generate inaccessible forms.

Use placeholder-only labels.

Use generic button labels.

Hide content from assistive technology unnecessarily.

Ignore keyboard navigation.

Generate inaccessible custom components.

---

# Validation Checklist

✓ Keyboard accessible

✓ Visible focus indicators

✓ Proper tab order

✓ Skip navigation available

✓ Touch targets ≥44px

✓ WCAG AA contrast

✓ Images have alt text

✓ Buttons have meaningful labels

✓ Inputs have associated labels

✓ Errors announced

✓ Dialogs trap focus

✓ Reduced motion supported

✓ Zoom to 200% supported

✓ Screen reader compatible

✓ No accessibility blockers

---

# Accessibility Blockers

The following issues automatically fail accessibility validation.

✗ Missing form labels

✗ Missing keyboard navigation

✗ Invisible keyboard focus

✗ Insufficient color contrast

✗ Color-only status indicators

✗ Missing alternative text

✗ Inaccessible dialogs

✗ Broken tab order

✗ Keyboard traps

✗ Unreachable interactive elements

Accessibility blockers must be fixed before release.

---

# Final Principle

Accessibility is not about accommodating a minority of users.

Accessibility is about ensuring every user can successfully complete every task with confidence and independence.

---

## 12_content_guidelines — Content guidelines

Source: default (12_content_guidelines.md)

# 12_content_guidelines.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how every piece of text inside the application should be written.

Good content reduces confusion.

Good content reduces support requests.

Good content builds trust.

Every word should help users complete their task.

---

# Design Philosophy

Interfaces should speak like a knowledgeable colleague.

Not like a machine.

Not like a legal document.

Not like a developer.

Writing should always be

- Clear
- Short
- Friendly
- Professional
- Action-oriented

---

# Core Principles

Every piece of content must be

- Easy to understand
- Easy to scan
- Consistent
- Helpful
- Human

---

# Tone of Voice

The application should sound

Professional

Helpful

Confident

Respectful

Calm

Never sound

Robotic

Passive aggressive

Sarcastic

Overly technical

Marketing focused

---

# Writing Style

Prefer

Short sentences.

Active voice.

Simple words.

Common vocabulary.

Avoid

Long paragraphs.

Buzzwords.

Technical jargon.

Complex grammar.

---

# Page Titles

Titles should describe the page.

Good

Customers

Orders

Reports

Account Settings

Bad

Customer Management Interface

Report Administration Portal

---

# Page Descriptions

Only include descriptions when they add value.

Good

Manage your customer information and activity.

Bad

This page allows users to manage customer information within the system.

---

# Button Labels

Buttons describe actions.

Always begin with a verb.

Good

Save Changes

Create Customer

Generate Report

Approve Request

Invite Member

Bad

OK

Go

Continue

Click Here

Yes

---

# Navigation Labels

Navigation describes destinations.

Use nouns.

Good

Customers

Invoices

Projects

Reports

Bad

Manage

Go

Open

View

---

# Form Labels

Labels describe information. Use **sentence case** (see `01` casing matrix).

Good

Email address

Phone number

Billing address

Bad

Email

Input

Information

(Do not Title Case form labels. Page titles and nav use Title Case.)

---

# Placeholder Text

Placeholder text provides examples.

Never replace labels.

Good

example@email.com

Bad

Enter your email address here

---

# Helper Text

Use helper text only when necessary.

Explain

Accepted format

Restrictions

Why information is required

Keep helper text short.

---

# Required Fields

Mark only truly required fields.

Example

Email address *

Optional fields should say

(optional)

Never make every field required.

---

# Empty States

Every empty state should include

Title

Explanation

Action

Good

No invoices yet.

Create your first invoice to get started.

[Create Invoice]

Bad

No Data

---

# Success Messages

Keep success messages short.

Good

Customer created.

Profile updated.

Changes saved.

Bad

The operation completed successfully.

---

# Error Messages

Explain

What happened.

How to fix it.

Good

Password must contain at least 8 characters.

Bad

Validation Error.

---

# Warning Messages

Warn users before risky actions.

Good

Deleting this customer cannot be undone.

Bad

Warning!

---

# Confirmation Dialogs

Title

Action

Consequence

Primary Action

Cancel

Example

Delete Customer

This action cannot be undone.

Delete

Cancel

---

# Notifications

Keep notifications concise.

Good

Invoice sent.

Bad

Your invoice has been successfully processed and delivered.

---

# Search

Search placeholders should explain what can be searched.

Good

Search customers...

Search invoices...

Bad

Search...

---

# Filters

Labels should be obvious.

Good

Status

Department

Date Range

Bad

Options

Category

---

# Dates

Use consistent formats.

Prefer

12 Jul 2026

or

Jul 12, 2026

Never mix formats.

---

# Numbers

Use thousands separators.

Good

12,450

Bad

12450

Display currency appropriately.

Example

$12,450.00

---

# Time

Display relative time when useful.

Examples

5 minutes ago

Yesterday

Today

Display exact timestamps when precision matters.

---

# Tables

Column names should be short.

Good

Customer

Status

Amount

Created

Bad

Customer Full Name Information

---

# Tooltips

Explain

Why

Not

What

Good

Only administrators can edit this setting.

Bad

Admin Button

---

# Links

Link text should describe the destination.

Good

View Customer Details

Bad

Click Here

---

# Loading Text

Good

Loading customers...

Saving changes...

Generating report...

Bad

Loading...

---

# Login

Be welcoming.

Good

Welcome back.

Sign in to continue.

Bad

Authentication Required

---

# Logout

Good

You have signed out successfully.

Bad

Session terminated.

---

# Permissions

Explain why users cannot perform an action.

Good

Only administrators can delete projects.

Bad

Permission denied.

---

# Validation Messages

Explain exactly what needs to change.

Good

Phone number must contain 10 digits.

Bad

Invalid value.

---

# AI Writing Rules

AI MUST

Follow the capitalization matrix in `01_design_system.md` / README:

- Actions, form labels, toasts → sentence case (`Save changes`, `Email address`)
- Page titles, section headers, nav → Title Case (`Account Settings`)

Use active voice.

Keep sentences under 20 words when possible.

Write at approximately Grade 8 reading level.

Prefer verbs for actions.

Prefer nouns for navigation.

Be concise.

---

# AI MUST NEVER

Use technical jargon.

Write robotic messages.

Use exclamation marks excessively.

Use ALL CAPS.

Blame the user.

Use vague wording.

Duplicate information.

Write paragraphs longer than four lines inside the interface.

---

# Validation Checklist

✓ Sentence case for actions, labels, toasts

✓ Title Case for page titles and navigation

✓ Active voice

✓ Clear actions

✓ Short labels

✓ Helpful errors

✓ Helpful empty states

✓ Helpful success messages

✓ Consistent terminology

✓ Professional tone

✓ Human language

✓ Accessible reading level

---

# Final Principle

Users should never stop to understand the wording.

Good interface copy disappears into the experience.

If users notice the writing, it should be because it helped them—not because it confused them.

---

## 13_interaction_patterns — Interaction patterns

Source: default (13_interaction_patterns.md)

# 13_interaction_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how users interact with every component in the application.

Interactions should feel predictable, responsive, and effortless.

Every interaction should provide immediate feedback and reinforce user confidence.

Users should never wonder whether an interaction worked.

---

# Design Philosophy

Interfaces should feel alive.

Every interaction should have a clear beginning, response, and completion.

Interactions should reduce effort—not increase it.

Animations exist to explain changes, not decorate the interface.

---

# Core Principles

Every interaction should be

- Predictable
- Responsive
- Consistent
- Accessible
- Forgiving
- Fast

---

# Interaction Lifecycle

Every interaction follows this sequence.

User Action

↓

Immediate Feedback

↓

Processing

↓

Completion

↓

Next Available Action

Never skip any stage.

---

# Click Interactions

Buttons should immediately indicate interaction.

Rules

- Show hover state.
- Show pressed state.
- Show loading when processing.
- Disable repeated submissions while processing.
- Restore normal state after completion.

Never leave buttons unchanged after clicking.

---

# Hover States

Use hover only to indicate interactivity.

Examples

- Buttons
- Links
- Cards
- Table Rows
- Menu Items

Never hide critical information behind hover.

Hover effects should never be required on touch devices.

---

# Focus States

Keyboard focus must always be visible.

Every interactive element requires a focus state.

Focus styling should be consistent across the application.

Never remove focus indicators.

---

# Active States

Selected items must remain visually distinct.

Examples

- Active Navigation
- Selected Card
- Selected Row
- Active Tab
- Selected Filter

Users should always know what is selected.

---

# Disabled States

Disabled controls must clearly communicate they are unavailable.

Rules

- Reduce emphasis.
- Maintain readability.
- Explain why when appropriate.

Never disable controls without explanation if the reason is not obvious.

---

# Loading Interactions

During processing

- Disable duplicate actions.
- Display progress.
- Preserve layout.
- Keep users informed.

Never freeze the interface.

---

# Optimistic Updates

Use optimistic updates when operations are highly likely to succeed.

Examples

- Like
- Favorite
- Archive
- Mark Complete

If an operation fails

Restore previous state

Display explanation

Offer retry

---

# Inline Editing

Allow inline editing only for simple changes.

Examples

- Name
- Status
- Tags

Complex editing should open a dedicated form.

Always support

Save

Cancel

Keyboard shortcuts

---

# Selection

Selection should always be visible.

Support

Single Selection

Multi Selection

Range Selection (Shift)

Select All

Never lose selections unexpectedly.

---

# Drag and Drop

Use only when it significantly improves productivity.

Examples

- Kanban Boards
- File Upload
- Reordering Lists

Always provide

Visual placeholder

Drop indicator

Success feedback

Alternative keyboard interaction

---

# Context Menus

Use for secondary actions.

Never hide primary actions inside context menus.

Keep menus concise.

Group related actions.

Separate destructive actions.

---

# Keyboard Shortcuts

Support shortcuts for frequently used actions.

Examples

Ctrl/Cmd + K

Search

Ctrl/Cmd + S

Save

Esc

Close

Enter

Submit

Delete

Delete Selected

Display shortcuts where appropriate.

---

# Undo

For **recoverable** actions (soft delete, archive, dismiss):

Prefer Undo over a confirmation modal.

Good

Delete customer

↓

Undo available for 10 seconds

For **irreversible / high-impact** actions (permanent delete, purge, cancel subscription):

Require **Alert Dialog**. Cancel is the safe default focus. Never toast-only.

---

# Confirmations

Require confirmation (Alert Dialog) only for

Irreversible

High-risk / high-impact

actions.

Do not confirm recoverable soft deletes when Undo is available.

Avoid confirmation fatigue.

---

# Auto Save

Where appropriate

Save automatically.

Communicate status.

Saving...

↓

Saved

Never make users wonder whether work has been lost.

---

# Refresh

Refreshing should preserve

Scroll position

Selection

Filters

Sorting

Expanded sections

Avoid resetting user context.

---

# Search Interaction

Search should

Respond immediately.

Debounce requests.

Highlight matches.

Remember recent searches.

Never require explicit search buttons unless necessary.

---

# Filter Interaction

Changing filters should

Update results quickly.

Display active filters.

Support clearing filters.

Remember preferences.

---

# Pagination

Users should remain oriented.

Preserve

Sorting

Filters

Search

Selection where possible

---

# Notifications

Do not interrupt users unnecessarily.

Success

Toast

Error

Persistent

Critical

Modal only if required

Choose the least disruptive feedback possible.

---

# Animations

Animations should explain

Movement

Expansion

Loading

State changes

Never animate for decoration.

Duration

Interactive transitions: 150–200ms

Overlay enter/exit: up to 300ms allowed

Continuous indicators (spinner, skeleton shimmer): exempt; honor prefers-reduced-motion

---

# Accessibility

Every interaction must support

Keyboard

Screen Readers

Reduced Motion

Touch

Mouse

No interaction should depend on only one input method.

---

# Performance

Interactions should feel immediate.

Target

Visual Response

<100ms

Loading Feedback

<200ms

Long Operations

Progress Indicator

Never leave users without feedback.

---

# AI MUST

Generate hover states.

Generate focus states.

Generate active states.

Generate loading states.

Generate disabled states.

Support keyboard interaction.

Support touch interaction.

Generate meaningful animations.

Support undo where possible.

Support retry where appropriate.

---

# AI MUST NEVER

Hide primary actions.

Require hover to reveal critical functionality.

Create inconsistent interaction patterns.

Remove keyboard accessibility.

Use excessive animations.

Interrupt users unnecessarily.

Reset user context unexpectedly.

Ignore loading states.

---

# Validation Checklist

✓ Hover states

✓ Focus states

✓ Active states

✓ Disabled states

✓ Loading states

✓ Success feedback

✓ Error feedback

✓ Keyboard support

✓ Touch support

✓ Accessible interactions

✓ Animation duration appropriate

✓ Context preserved

✓ Undo where applicable

✓ Retry where applicable

---

# Final Principle

Users should feel confident interacting with the interface.

Every interaction should be predictable, immediate, and reassuring.

If users hesitate before clicking, the interaction design has failed.

---

## 14_ai_validation_rules — AI validation rules

Source: default (14_ai_validation_rules.md)

# 14_ai_validation_rules.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines the mandatory validation process that every AI-generated interface must pass before it is considered complete.

Generating an interface is only the first step.

Every generated screen must validate itself, identify problems, automatically fix problems where possible, and only then present the final result.

Never consider the first generated UI to be the final UI.

Generation → Validation → Improvement is mandatory.

Validation criteria must follow the reconciled rules in `README.md` and must not invent policies that contradict higher-priority docs (`11` → `01` → domain patterns → …).

---

# AI Design Review Process

Every generated screen follows this workflow.

Requirements

↓

Generate Initial UI

↓

Run Validation

↓

Identify Issues

↓

Fix Issues

↓

Run Validation Again

↓

Repeat Until Score ≥ 95

↓

Return Final UI

---

# Validation Categories

Every screen must be evaluated in the following areas.

1. UX

2. Layout

3. Visual Design

4. Accessibility

5. Content

6. Interaction

7. Responsive Design

8. Performance

9. Technical Quality

No category may fail.

---

# UX Validation

Validate

✓ Purpose obvious

✓ Primary workflow obvious

✓ One primary CTA in page header (no stacked primaries in viewport)

✓ Logical information hierarchy

✓ Low cognitive load

✓ Related information grouped

✓ Navigation predictable

✓ Error prevention exists

✓ Recovery exists

Automatic Failure

✗ Multiple primary workflows

✗ Multiple orange primary buttons in the same viewport

✗ Confusing layout

✗ Missing primary action

---

# Layout Validation

Validate

✓ Proper spacing

✓ Consistent alignment

✓ Grid respected

✓ Balanced layout

✓ No floating elements

✓ Proper section spacing

Automatic Failure

✗ Misaligned content

✗ Random spacing

✗ Broken layout

---

# Design Validation

Validate

✓ Design System followed

✓ Correct typography

✓ Proper colors

✓ Proper icons

✓ Proper shadows

✓ Proper radius

✓ Proper elevation

Automatic Failure

✗ Custom colors

✗ Inconsistent typography

✗ Mixed component styles

---

# Component Validation

Validate

✓ Correct component used

✓ Proper component hierarchy

✓ Existing component reused

✓ Proper variants used

Automatic Failure

✗ Reinventing components

✗ Incorrect controls

---

# Content Validation

Validate

✓ Good page title

✓ Clear labels

✓ Helpful helper text

✓ Meaningful buttons

✓ Good error messages

✓ Professional wording

Automatic Failure

✗ Placeholder labels

✗ Generic errors

✗ Technical jargon

---

# Form Validation

Validate

✓ Labels

✓ Validation

✓ Required fields

✓ Helper text

✓ Logical grouping

✓ Correct input types

Automatic Failure

✗ Placeholder-only labels

✗ Giant forms

✗ Missing validation

---

# Table Validation

Follow `05_table_patterns.md`.

For **static Table** (small read-only sets):

✓ Semantic headers

✓ Status with text (not color alone)

✓ Numbers right-aligned when numeric

Do **not** fail static tables for missing search/sort/pagination.

For **Data Table** (when task needs interaction / large sets):

✓ Search when browsing many named entities

✓ Sorting when comparison is required

✓ Filters when facets exist

✓ Pagination or virtualization for large datasets

✓ Empty / loading / error states for async data

Automatic Failure (Data Table only)

✗ Unsortable columns when comparison is the primary task

✗ No search on large entity directories

✗ Missing empty or loading states for async tables

---

# Dashboard Validation

Validate

✓ KPIs

✓ Alerts

✓ Charts

✓ Activity

✓ Quick Actions

✓ Proper hierarchy

Automatic Failure

✗ Too many widgets

✗ Decorative charts

✗ No business focus

---

# Navigation Validation

Validate

✓ Current location

✓ Breadcrumbs

✓ Search

✓ Responsive navigation

✓ Logical hierarchy

Automatic Failure

✗ Dead ends

✗ Hidden navigation

✗ Deep nesting

---

# Interaction Validation

Validate

✓ Hover

✓ Focus

✓ Active

✓ Loading

✓ Disabled

✓ Success

✓ Error

✓ Retry

✓ Undo

Automatic Failure

✗ No loading

✗ No focus

✗ Missing feedback

---

# Accessibility Validation

Validate

✓ Keyboard support

✓ Focus indicators

✓ Color contrast

✓ Alt text

✓ Labels

✓ ARIA

✓ Screen reader support

Automatic Failure

✗ Accessibility blocker

---

# Responsive Validation

Validate

Desktop

Tablet

Mobile

Landscape

Portrait

Automatic Failure

✗ Horizontal scrolling

✗ Broken layout

✗ Hidden functionality

---

# Performance Validation

Validate

✓ Lazy loading

✓ Skeletons

✓ Optimized images

✓ Progressive loading

✓ Efficient rendering

Automatic Failure

✗ Blank loading screens

✗ Large layout shifts

---

# Visual Inspection

AI should inspect

Text clipping

↓

Component overlap

↓

Broken alignment

↓

Overflow

↓

Uneven spacing

↓

Visual balance

↓

Empty space

↓

Crowding

Every issue should be corrected automatically.

---

# Content Inspection

AI should inspect

Grammar

↓

Consistency

↓

Terminology

↓

Tone

↓

Capitalization

↓

Readability

↓

Accessibility

---

# UX Inspection

AI should inspect

Can users understand this page?

↓

Can users finish their task?

↓

Can users recover from mistakes?

↓

Can users find important actions?

↓

Can users navigate easily?

---

# Automatic Improvements

AI should automatically fix

Spacing

Alignment

Typography

Button hierarchy

Missing labels

Missing loading states

Missing empty states

Missing errors

Missing helper text

Responsive issues

Accessibility issues

Poor wording

Do not require human approval for these fixes.

---

# AI MUST

Run every validation category.

Automatically fix detected issues.

Revalidate after fixes.

Continue until quality threshold is reached.

Never stop after the first generation.

---

# AI MUST NEVER

Skip validation.

Ignore accessibility.

Ignore responsiveness.

Ignore content quality.

Ignore UX.

Output low-quality UI.

Return UI with known issues.

---

# Quality Score

Each category contributes equally.

UX                         10

Layout                     10

Design System              10

Components                 10

Content                    10

Accessibility              10

Responsive                 10

Interaction                10

Performance                10

Technical Quality          10

-------------------------------

Total                     100

---

# Release Rules

Score

95–100

Ready

90–94

Improve Automatically

80–89

Major Revision Required

Below 80

Reject

Automatic release is prohibited below 95.

---

# Blocking Issues

The following automatically fail validation.

• Text clipping

• Overflow

• Component overlap

• Broken navigation

• Missing labels

• Accessibility failure

• Missing loading state

• Missing error state

• Broken responsive layout

• Missing primary action in page chrome

• Multiple primary CTAs in the same viewport

• Incorrect component usage

• Design System violation

• Placeholder-only labels

• Horizontal scrolling that hides critical content with no mobile strategy

• Hidden critical functionality

• Toast-only handling of irreversible destructive actions

• Sheet/Drawer breakpoint ignored (≥640 Sheet / &lt;640 Drawer)

• Missing required region from `.ops4/design-system/screens/` blueprint (collapsed multi-region screen into a single Card/form)

• Thin admin/CRUD scaffold where the locked build prompt specified production-grade multi-panel composition

• Missing Landing → Login → Forgot/Register → role-home journey for product web apps

• Login screen without working Forgot password and Register links

• Visible search/filter/menu control that does nothing (dead UI)

• Data screens without loading → data (or empty/error) treatment

• Missing corner States preview control (Loading / Empty / Error / Ready) in preview builds

• Same destinations duplicated on one screen under different layouts (e.g. Workflow shortcuts grid + Quick links list with identical routes)

A screen with any blocker must never be considered complete.

---

# Final Principle

Generating an interface is not success.

A successful interface is one that has been generated, validated, improved, validated again, and proven to meet the standards defined by Aperture Design Governance.

Quality is verified.

Never assumed.

---

## Requirements
- Implement every screen and route listed in the locked Design Brain prompt, using the specified editorial merchandising layouts and regions.
- Use Next.js (App Router), Tailwind CSS, TypeScript, and shadcn/ui as required by the baseline.
- Apply the exact color palette, typography (IBM Plex Sans), and component guidelines from the locked prompt.
- Handle all status variants (loading, error, empty, permission denied, plan limit) per page with visually distinct editorial treatments.
- Populate each page with realistic sample data matching the provided page-by-page data points and field counts.
- Ensure responsive design for web (laptop/desktop/mobile browser) with top navigation shell and merchandising polish.
- Do not merge to the default branch; open a PR from the preview branch for review.

## Design Continuity Rules
- Implement the locked Design Brain build prompt as a production-grade full application.
- Implement every screen listed in the locked prompt / screen map — do not ship a subset of CRUD pages.
- Match the product CATEGORY in the locked prompt: commerce/marketplace → storefront (gallery, merchandising, PDP); ops/workspace → denser workflow chrome. Never force admin master-detail onto a consumer shop.
- Honor screen composition blueprints: required regions must exist; do not collapse multi-region layouts into a single Card/form.
- When Design Pattern Brain auth/register briefs are attached, apply their composition (e.g. centered card) even if prior auth screens were multi-panel.
- Prefer workflow-rich layouts (main + context rail, master-detail, inspector) ONLY when the locked prompt describes an ops/workspace product.
- For commerce: prioritize large imagery, product cards, clear price/CTA hierarchy, and marketing/top-nav shells — not CRM tables.
- Never render designer jargon as product chrome ("Master-Detail Workspace", "Inspector" as a primary header).
- Use correct control types from the prompt/blueprints (e.g. segmented EMAIL/SMS vs a generic select).
- Follow Aperture guidelines for tokens, accessibility, and interaction — they do not override locked composition or Pattern Brain.
- Do not invent a thinner admin scaffold or theme demo in place of the locked design.
- Web entry: Landing → Login → (Forgot password | Register) → role home. No credentials on Landing; Login links must work.
- Provide consistent primary nav per role; every nav destination is a real route.
- No dead controls — search/filters/menus work against dummy data or a mock API.
- Real async UX: loader/skeleton then data; empty and error states with retry.
- Include a corner States floating button to force Loading / Empty / Error / Ready on the current screen.
- Include a root `vercel.json` so Vercel deployments load correctly (see TECHNICAL_RULES).
- Use the latest stable Next.js, React, Tailwind, TypeScript, and related packages; compose UI with shadcn/ui.

## Technical Rules
- Never push directly to main.
- Always create a dedicated feature or fix branch.
- Create the branch from the repository default branch, then open a PR into that default branch.
- Run lint/build before opening PR.
- Follow existing project structure.
- Follow existing coding conventions.
- Keep files under 400 lines where possible.
- Use proper TypeScript interfaces/types.
- For Next.js apps deployed on Vercel: ALWAYS commit a root `vercel.json` with framework nextjs, buildCommand `npm run build`, and installCommand `npm install`. Without it the Vercel deploy can succeed while the site stays blank.
- Use the LATEST stable versions of the stack — Next.js (App Router), React, Tailwind CSS, TypeScript, @types/*, eslint-config-next, and other dependencies. Prefer `create-next-app` / `npx shadcn@latest` current defaults; do not pin outdated majors (e.g. old Next 13/14 or Tailwind 2/3 when a newer stable exists).
- UI MUST be built with shadcn/ui (New York style) + lucide-react as the component system — initialize with `npx shadcn@latest init` and add components via the CLI. Do not invent a parallel component library or raw Bootstrap/MUI look; theme shadcn tokens to the locked brand.
- Never allow a browser or screenshot operation to run indefinitely.
- Every browser action must use a maximum timeout of 30 seconds.
- Do not retry the same failed screenshot more than once.
- If visual capture fails, continue using HTTP checks, logs, DOM inspection, build validation, and terminal-based Playwright.
- Screenshot failure must never block implementation, commits, or pull-request creation.
- Base branch: main
- PR target: main
- Open `.ops4/design-system/README.md` plus `01`–`14` for tokens/a11y; locked build prompt + blueprints win for composition.
- Open `.ops4/design-system/patterns/` and APPLY retrieved composition to matching screens (esp. auth); keep product brand tokens.

## Acceptance Criteria
- All screens and flows from the locked prompt are implemented with correct layouts, regions, and editorial merchandising style.
- All required fields and data points per page are present and visually accurate.
- Status variants (loading, error, empty, etc.) are implemented and visually distinct on each page.
- UI matches the specified color palette, typography, and design system (no unauthorized substitutions).
- App is fully responsive and follows web conventions for navigation and interaction.
- Lint passes with no errors.
- Build passes with no errors.
- A pull request is opened from the preview branch to the default branch (do not merge).
- Screenshot/browser failures do not block commits or PR creation (max 30s browser timeout; one retry max).
- In-scope screens (esp. auth/register/login/landing) visibly apply Design Pattern Brain composition under `.ops4/design-system/patterns/` while keeping product brand tokens.
- Web entry journey is Landing → Login → (Forgot|Register) → role home; Login links work; no credentials on Landing.
- Visible search/filters/menus work against dummy data or a mock API; no inert clickable chrome.
- Data screens show loader/skeleton then data; empty and error states are present and recoverable.
- Corner States floating button forces Loading / Empty / Error / Ready on the current screen without replacing product nav.
- Root vercel.json exists with framework nextjs, buildCommand `npm run build`, and installCommand `npm install` (required for Vercel blank-page fix).
- Dependencies use latest stable Next.js, React, Tailwind, and TypeScript; UI is composed with shadcn/ui (New York) themed to locked brand tokens.

## Agent Instructions
Create a new branch named:
`ai-build/preview-var2-issue-1-implement-editorial-merchandising-dashboard-ui-f`

Base branch: `main`
PR target: `main`

Implement this issue only.
Never push directly to main.
Always create a dedicated feature or fix branch.
Open a Pull Request to the repository default branch.
PR title should be:
AI Build: Implement Editorial Merchandising Dashboard UI (Full App Preview)

PR body should include:
- Summary
- Files changed
- Validation results
- Screenshots of key screens (required for UI builds)
- Checklist of blueprint regions implemented
- Closes #1

This is an INITIAL full-app build from the locked Design Brain.
Implement the locked build prompt fully — every screen, with the specified composition richness.
Do NOT ship a thinner generic admin/CRUD shell.
Do NOT collapse multi-region workspace screens into a single Card/form.
EXCEPTION: authentication/register/login screens follow Design Pattern Brain briefs when present (e.g. centered card).
Entry: Landing → Login → Forgot/Register → role home. No credentials on Landing. Consistent nav per role.
Wire search/filters/menus to dummy data or mock API. Loader then data. Include corner States FAB (Loading/Empty/Error/Ready).
Commit root vercel.json (framework nextjs, npm run build, npm install) — required for Vercel or the deploy stays blank.
Use latest Next.js / React / Tailwind / TypeScript; UI via shadcn/ui (New York) + lucide-react — theme tokens to the locked brand.
Aperture guidelines under `.ops4/design-system/` govern tokens, a11y, and interaction — they do not replace screen composition in the locked prompt or Pattern Brain.
When page-by-page data points are provided, use them as the source of truth for fields, tables, filters, and statuses.
When screen blueprints are provided under `.ops4/design-system/screens/`, implement every required region for workspace screens.
When design pattern briefs are provided under `.ops4/design-system/patterns/`, APPLY their composition to matching screens — not optional taste.