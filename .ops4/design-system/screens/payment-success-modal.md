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