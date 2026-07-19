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