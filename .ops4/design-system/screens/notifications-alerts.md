# Screen blueprint: Notifications & Alerts

Route: `/notifications`
Purpose: Centralized feed of actionable alerts for new transactions, payment due dates, and system messages.
Layout: **list-detail**

## Required regions
- **header**: Page title and quick actions — components: PageTitle, MarkAllAsReadButton
- **filters**: Allow user to filter notifications by type or date — components: NotificationTypeFilter, DateRangeFilter, SearchInput
- **main**: Display list of notifications with actionable links — components: NotificationList, NotificationCard, ActionButton, UnreadBadge, Timestamp, NotificationIcon

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