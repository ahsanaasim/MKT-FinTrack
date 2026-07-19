# Screen blueprint: Admin System Health

Route: `/admin`
Purpose: Internal-only admin area for monitoring system health, integration status, error logs, and managing supported bank/institution parsers.
Layout: **dashboard-grid**

## Required regions
- **header**: Displays system health summary and quick actions. — components: SystemStatusBadge, LastUpdatedTimestamp, RefreshButton
- **main**: Shows system metrics, integration status, error logs, and parser management. — components: SystemMetricsGrid, IntegrationStatusTable, ErrorLogsTable, SupportedBankCoverageIndicator, ParserManagementPanel

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