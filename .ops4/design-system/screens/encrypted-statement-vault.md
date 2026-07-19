# Screen blueprint: Encrypted Statement Vault

Route: `/vault`
Purpose: Secure, encrypted in-app vault for storing and downloading historical PDF/JSON statements.
Layout: **list-detail**

## Required regions
- **header**: Page title and vault summary. — components: VaultTitle, VaultDescription, DownloadAllStatementsButton
- **filters**: Allow user to filter/search statements by type, date, or institution. — components: StatementTypeFilter, DateRangeFilter, InstitutionFilter, SearchBar
- **main**: Display list of stored statements with download and metadata. — components: StatementListTable

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