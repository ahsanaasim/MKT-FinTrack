# Screen blueprint: Change Password Modal

Purpose: Change account password.
Layout: **single-column-form**

## Required regions
- **main**: Allows user to securely change their password. — components: FormTitle, CurrentPasswordField, NewPasswordField, ConfirmPasswordField, PasswordStrengthMeter, SaveButton, CancelButton, FormErrorMessage, FormSuccessMessage

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