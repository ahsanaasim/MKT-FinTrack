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