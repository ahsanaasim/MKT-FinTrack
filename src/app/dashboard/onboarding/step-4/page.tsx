import { Loader2, RefreshCw } from "lucide-react";
import {
  OnboardingIllustration,
  OnboardingStepLayout,
} from "@/components/onboarding/wizard";
import { Progress } from "@/components/ui/progress";

export default function OnboardingStepFourPage() {
  return (
    <OnboardingStepLayout
      currentStep={4}
      eyebrow="First sync"
      title="Your first statement sync is underway."
      description="FinTrack is discovering connected statements, matching parser versions, and preparing a review queue before anything is published."
      illustration={<OnboardingIllustration icon={RefreshCw} tone="light" />}
      valueProps={[
        "Inbox discovery is checked before account parsers run.",
        "Parser confidence is scored for every extracted field.",
        "You will review the summary before it updates your dashboard.",
      ]}
      ctaLabel="Review synced data"
      ctaHref="/dashboard/onboarding/step-5"
      secondaryLabel="Something went wrong?"
      secondaryHref="/dashboard/onboarding/step-8"
    >
      <div className="rounded-xl border border-border bg-secondary/50 p-4">
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-sm font-medium">
            <Loader2 className="size-4 animate-spin" />
            Sync progress
          </p>
          <p className="text-sm text-muted-foreground">68%</p>
        </div>
        <Progress value={68} />
        <div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
          <span>Inbox scanned</span>
          <span>Parsers matched</span>
          <span>Review queue ready</span>
        </div>
      </div>
    </OnboardingStepLayout>
  );
}
