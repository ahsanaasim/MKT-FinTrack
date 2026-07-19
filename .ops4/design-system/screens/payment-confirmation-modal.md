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