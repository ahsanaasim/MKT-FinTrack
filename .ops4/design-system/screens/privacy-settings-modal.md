# Screen blueprint: Privacy Settings Modal

Purpose: Manage privacy and data sharing preferences.
Layout: **single-column-form**

## Required regions
- **main**: Allows user to manage privacy, data sharing, export, and account deletion. — components: FormTitle, DataSharingToggle, DownloadExportDataButton, DeleteAccountButton, DeleteAccountConfirmationDialog, FormErrorMessage, FormSuccessMessage

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