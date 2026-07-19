# Screen blueprint: Manual PDF Upload

Route: `/upload`
Purpose: Fallback workflow for uploading PDF statements when automated parsing fails or is unsupported.
Layout: **single-column-form**

## Required regions
- **header**: Communicate upload context and supported formats — components: StepIndicator, SupportedBankFormatIndicator, UploadGuidanceText
- **main**: Enable file selection, show progress, and handle errors — components: FilePicker, UploadProgressBar, SupportedFormatsList, SizeLimitBadge, UploadErrorBanner, HelpTooltip
- **footer**: Allow user to submit or cancel upload — components: UploadButton, CancelButton

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