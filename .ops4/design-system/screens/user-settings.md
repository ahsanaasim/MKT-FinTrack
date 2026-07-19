# Screen blueprint: User Settings

Route: `/settings`
Purpose: Manage account details, privacy preferences, notification settings, and integration revocation.
Layout: **two-column-main-rail**

## Required regions
- **main**: Primary settings management: profile, password, notification preferences. — components: ProfileInfoForm, ChangePasswordForm, NotificationPreferencesToggle, DeleteAccountButton
- **context-rail**: Manage connected accounts, integration status, and revocation. — components: ConnectedAccountsList, IntegrationStatusBadge, RevokeIntegrationButton, SyncHistoryLink

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