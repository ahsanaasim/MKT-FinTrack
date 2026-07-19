# filter drawer for list/table

Screen type: dialog_drawer
Primary task: Refine and filter a list of entities without losing context of the main data table

### Pattern 1: filter drawer for list/table
- Screen type: dialog_drawer
- Primary task: Refine and filter a list of entities without losing context of the main data table
- Composition archetype: sidebar-header-content
- Reading flow: sidebar-navigation → page-header → main-list-table → filter-drawer
- Density: comfortable
- Symmetry: asymmetric
- Primary focal point: filter-drawer
- Secondary focal points: page-header, main-list-table
- Spacing rhythm: page 32 / section 32 / card 16 / base 4
- Typography:
  - Page title: 28px / weight 600 / lh 34
  - Section title: 16px / weight 600 / lh 24
  - Body: 14px / weight 400 / lh 20
- Surfaces: canvas neutral; cards selective; borders subtle; shadows minimal
- Color roles (adapt roles; keep product brand hues):
  - canvas: #F8FAFC (page background)
  - surface: #FFFFFF (cards / panels / drawer)
  - border: #E2E8F0 (dividers / input borders)
  - text-primary: #0F172A (titles / body)
  - text-muted: #64748B (meta / secondary)
  - accent: #2563EB (primary actions)
- Fonts:
  - Inter · ui · weights 400, 500, 600
- Radii:
  - lg: 12px
  - md: 8px
  - sm: 4px
  - pill: 999px
- Components: filter-group (secondary), list-table (secondary), sidebar-navigation (secondary)
- Interactions: drawer-open-close, multi-select-filter, row-hover-actions
- Why it works: Drawer pattern allows advanced filtering without disrupting main workflow. Sidebar keeps navigation persistent and context clear. Clear separation of primary (Apply Filters) and secondary (Reset All) actions reduces error risk.
- Avoid when: Screen width is below 900px; Filtering is infrequent or trivial; Modal dialogs are preferred for workflow reasons
- Summary: This is a dialog_drawer pattern for desktop list/table screens, where users refine large datasets using a right-side filter drawer without losing context of the main content. The composition uses a sidebar-header-content archetype, with clear hierarchy and comfortable density. Suitable for operational dashboards or admin tools with complex filtering needs. Avoid on mobile or when filters are simple.

## Application rules
- Apply this composition to matching product screens in the current change (auth/register/login/landing as relevant).
- Keep product brand colors/logo; adapt spacing/type/surface/hierarchy from this pattern.
- Do not ignore this file because a prior layout exists — the change request may intentionally restyle those screens.
