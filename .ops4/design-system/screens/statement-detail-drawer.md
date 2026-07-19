# Screen blueprint: Statement Detail Drawer

Purpose: View details and download options for a specific statement.
Layout: **single-column-form**

## Required regions
- **header**: Display statement metadata and quick actions — components: StatementFileName, StatementDateRange, StatementSourceBadge
- **main**: Enable download, deletion, and metadata review — components: DownloadPDFButton, DownloadJSONButton, DeleteStatementButton, StatementFilePreview, StatementUploadTimestamp, SupportedFormatsTooltip

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