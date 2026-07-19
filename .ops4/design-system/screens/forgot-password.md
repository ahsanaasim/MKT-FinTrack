# Screen blueprint: Forgot Password

Route: `/auth/forgot`
Purpose: Password reset initiation.
Layout: **single-column-form**

## Required regions
- **header**: Branding and navigation context — components: Logo, PageTitle, BackToLoginLink
- **main**: Password reset form entry — components: InstructionText, EmailOrMobileField, SubmitButton, FormErrorMessage

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