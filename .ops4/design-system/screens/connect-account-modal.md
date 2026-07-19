# Screen blueprint: Connect Account Modal

Purpose: OAuth connect flow for Gmail or supported financial institution. User selects provider, reviews permissions, and connects.
Layout: **single-column-form**

## Required regions
- **main**: Guide user through provider selection, permission review, and connection. — components: ModalTitle, ProviderSelectDropdown, PermissionsSummary, SupportedBanksLink, ConnectButton, CancelButton

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