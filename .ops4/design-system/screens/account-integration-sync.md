# Screen blueprint: Account Integration & Sync

Route: `/accounts`
Purpose: Connect Gmail and supported financial institution accounts via OAuth, view connection status, sync history, and manage/revoke integrations.
Layout: **gallery-grid**

## Required regions
- **header**: Introduce integration purpose, show supported banks/formats, and provide add account CTA. — components: PageTitle, SupportedBankCoverageIndicator, AddAccountButton
- **main**: Display connected accounts, their sync status, and allow management (revoke, resync, view history). — components: AccountConnectionCard, ConnectionStatusBadge, SyncHistoryButton, RevokeIntegrationButton

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