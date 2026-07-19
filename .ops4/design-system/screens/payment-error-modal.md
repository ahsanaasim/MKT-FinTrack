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