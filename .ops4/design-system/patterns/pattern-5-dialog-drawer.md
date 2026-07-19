# drawer dialog with header and action bar

Screen type: dialog_drawer
Primary task: Complete or review a focused task in a side panel without losing main context

### Pattern 1: drawer dialog with header and action bar
- Screen type: dialog_drawer
- Primary task: Complete or review a focused task in a side panel without losing main context
- Composition archetype: drawer-header-content-actions
- Reading flow: drawer-header → drawer-content → drawer-actions
- Density: comfortable
- Symmetry: asymmetric
- Primary focal point: drawer-header (title and close/action buttons)
- Secondary focal points: drawer-content card
- Spacing rhythm: page 16 / section 16 / card 10 / base 4
- Typography:
  - Page title: 24px / weight 700 / lh 32
  - Section title: 16px / weight 400 / lh 24
  - Body: 16px / weight 400 / lh 24
- Surfaces: canvas neutral; cards always; borders subtle; shadows minimal
- Color roles (adapt roles; keep product brand hues):
  - canvas: #F1F5FA (drawer background)
  - surface: #FFFFFF (content card)
  - border: #F4F4F5 (dividers and card outlines)
  - text-primary: #181A1B (titles and body)
  - accent: #F96B0D (primary action button)
- Fonts:
  - Onest · ui · weights 400, 700
- Radii:
  - md: 8px
  - sm: 6px
  - pill: 999px
- Components: action-button (secondary)
- Interactions: drawer-close, primary-secondary-actions
- Why it works: Keeps user in context while enabling focused task completion. Clear separation of header, content, and actions aids scanability. Primary action is visually distinct, reducing user error.
- Avoid when: Tasks require multi-step flows or complex navigation.; Screen space is too limited for a 500px drawer.; User needs to compare multiple entities side-by-side.
- Summary: A dialog drawer pattern for desktop B2B SaaS, supporting focused tasks like editing or reviewing entities without losing main context. The composition features a fixed-width side panel with a strong header, clear content region, and grouped action buttons. Visual hierarchy is established through scale, contrast, and whitespace, with accent color reserved for primary actions. Best for workflows needing quick, contextual actions; avoid for complex or multi-step tasks.

## Application rules
- Apply this composition to matching product screens in the current change (auth/register/login/landing as relevant).
- Keep product brand colors/logo; adapt spacing/type/surface/hierarchy from this pattern.
- Do not ignore this file because a prior layout exists — the change request may intentionally restyle those screens.
