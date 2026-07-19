# Screen blueprint: Revoke Integration Modal

Purpose: Confirm revocation of account integration.
Layout: **single-column-form**

## Required regions
- **main**: Warn user about data loss and confirm/cancel integration revocation. — components: WarningIcon, IntegrationNameText, WarningMessageText, DataLossImpactText, ConfirmButton, CancelButton

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