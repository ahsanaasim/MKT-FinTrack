# Screen blueprint: User Dashboard Home

Route: `/dashboard`
Purpose: Authenticated home for Individual Users. Consolidated financial dashboard with credit card, investment, and NPS data, actionable alerts, and entry points to all major workflows.
Layout: **dashboard-grid**

## Required regions
- **header**: Branding, navigation, and quick access to user account/settings. — components: Logo, TopNav, UserAvatarDropdown, NotificationsBell
- **main**: Primary dashboard content: financial summary, charts, actionable alerts, and recent activity. — components: SummaryCard(NPS balances), SummaryCard(Mutual fund units), SummaryCard(Equity stock holdings), SummaryCard(Credit card due date), NetWorthChart, InvestmentBreakdownChart, RecentActivityList, AlertBanner(Payment Due), AlertBanner(Connection Issue), PayCreditCardAction, ConnectAccountCTA

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