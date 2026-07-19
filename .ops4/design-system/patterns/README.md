# Design Pattern Brain briefs

Retrieved composition patterns — REQUIRED for matching screen types (esp. auth/register/login). Apply structure/spacing/hierarchy; keep product brand tokens. Do not copy proprietary branding.

- [Interactive 3D Configurator](./pattern-1-landing.md)
- [Bento Grid Showcase](./pattern-2-landing.md)
- [Centered authentication card](./pattern-3-authentication.md)
- [Centered authentication card](./pattern-4-authentication.md)
- [drawer dialog with header and action bar](./pattern-5-dialog-drawer.md)
- [filter drawer for list/table](./pattern-6-dialog-drawer.md)
- [Sidebar profile details with sectioned editing](./pattern-7-entity-details.md)

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
