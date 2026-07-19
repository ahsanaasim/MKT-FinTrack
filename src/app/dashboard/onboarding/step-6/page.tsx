import { UploadCloud } from "lucide-react";
import {
  OnboardingIllustration,
  OnboardingStepLayout,
} from "@/components/onboarding/wizard";
import { Button } from "@/components/ui/button";

export default function OnboardingStepSixPage() {
  return (
    <OnboardingStepLayout
      currentStep={6}
      eyebrow="Manual upload fallback"
      title="Keep moving even when a bank is not yet supported."
      description="Upload PDFs, JSON exports, or statements manually so your dashboard can stay complete while parser support expands."
      illustration={<OnboardingIllustration icon={UploadCloud} tone="light" />}
      valueProps={[
        "Manual uploads use the same encrypted vault as automatic sync.",
        "Unsupported banks can be tagged for future parser requests.",
        "You can enter missing values by hand when confidence is low.",
      ]}
      ctaLabel="Finish setup"
      ctaHref="/dashboard/onboarding/step-7"
      secondaryLabel="Review parsed data"
      secondaryHref="/dashboard/onboarding/step-5"
    >
      <div className="rounded-xl border border-dashed border-border bg-background p-5 text-center">
        <UploadCloud className="mx-auto size-8 text-muted-foreground" />
        <p className="mt-3 text-sm font-medium">Drop statements here</p>
        <p className="mt-1 text-xs text-muted-foreground">
          PDF, CSV, JSON, and image receipts are supported in fallback mode.
        </p>
        <Button variant="outline" className="mt-4">
          Browse files
        </Button>
      </div>
    </OnboardingStepLayout>
  );
}
