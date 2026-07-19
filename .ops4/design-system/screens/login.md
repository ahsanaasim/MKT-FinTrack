# Screen blueprint: Login

Route: `/auth/login`
Purpose: User authentication for Individual User and Admin.
Layout: **single-column-form**

## Required regions
- **form**: Collects user credentials for authentication. — components: EmailOrMobileField, PasswordField, LoginButton, ForgotPasswordLink, RegisterLink

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