# Screen blueprint: Sync History Drawer

Purpose: Detailed sync history for a connected account.
Layout: **single-column-form**

## Required regions
- **main**: Display timeline of sync events, errors, and last successful sync for the selected integration. — components: IntegrationNameHeader, SyncTimeline, SyncEventItem, SyncStatusBadge, SyncErrorTooltip, LastSuccessfulSyncText, ManualSyncButton, CloseDrawerButton

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