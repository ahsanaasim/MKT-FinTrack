# Sidebar profile details with sectioned editing

Screen type: entity_details
Primary task: View and edit structured profile or entity details

### Pattern 1: Sidebar profile details with sectioned editing
- Screen type: entity_details
- Primary task: View and edit structured profile or entity details
- Composition archetype: sidebar-header-content
- Reading flow: app-header → sidebar-profile-summary → main-profile-details
- Density: comfortable
- Symmetry: asymmetric
- Primary focal point: main-profile-details
- Secondary focal points: sidebar-profile-summary, edit actions
- Spacing rhythm: page 32 / section 32 / card 16 / base 4
- Typography:
  - Page title: 28px / weight 600 / lh 34
  - Section title: 16px / weight 600 / lh 24
  - Body: 14px / weight 400 / lh 20
- Surfaces: canvas neutral; cards selective; borders subtle; shadows minimal
- Color roles (adapt roles; keep product brand hues):
  - canvas: #F8FAFC (page background)
  - surface: #FFFFFF (cards / panels)
  - border: #E2E8F0 (dividers)
  - text-primary: #0F172A (titles / body)
  - text-muted: #64748B (meta / secondary)
  - accent: #2563EB (primary actions)
  - danger: #F87171 (destructive actions)
- Fonts:
  - Inter · ui · weights 400, 500, 600
- Radii:
  - lg: 12px
  - md: 8px
  - sm: 4px
  - pill: 999px
- Components: profile-summary-card (secondary), sectioned-detail-card (secondary), sidebar-navigation (secondary)
- Interactions: section-edit, row-hover-actions
- Why it works: Sidebar provides persistent context and quick navigation. Sectioned cards in main region support focused editing and scanning. Whitespace and subtle dividers create clear separation without visual clutter.
- Avoid when: Mobile-first workflows; Entity details are too simple for sectioning; No need for persistent sidebar context
- Summary: This is a sidebar-header-content pattern for entity detail screens, ideal for profile or structured record editing in SaaS or social platforms. The layout features a persistent sidebar with user summary and navigation, and a main region with sectioned, card-based editable details. Visual hierarchy is established through scale, whitespace, and subtle dividers, supporting comfortable reading and quick edits. Best for desktop contexts where sidebar context is valuable; avoid on mobile or for simple entities.

## Application rules
- Apply this composition to matching product screens in the current change (auth/register/login/landing as relevant).
- Keep product brand colors/logo; adapt spacing/type/surface/hierarchy from this pattern.
- Do not ignore this file because a prior layout exists — the change request may intentionally restyle those screens.
