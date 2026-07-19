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