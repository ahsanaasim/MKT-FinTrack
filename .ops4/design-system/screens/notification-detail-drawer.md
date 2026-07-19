# Screen blueprint: Notification Detail Drawer

Purpose: Expanded view of a notification with actionable links.
Layout: **drawer**

## Required regions
- **header**: Displays notification type, icon, and timestamp for quick context. — components: NotificationTypeBadge, NotificationTimestamp, CloseDrawerButton
- **main**: Shows the full notification message, actionable CTAs, and supporting details. — components: NotificationMessageText, DueAmountHighlight, DueDateHighlight, PayNowCTAButton, ViewStatementLink, DismissNotificationButton, StatementSourceBadge, PaymentStatusBadge

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