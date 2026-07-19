import { ClipboardCheck } from "lucide-react";
import {
  OnboardingIllustration,
  OnboardingStepLayout,
} from "@/components/onboarding/wizard";
import { Badge } from "@/components/ui/badge";
import { dashboardData, formatCurrency } from "@/lib/mock-data";

export default function OnboardingStepFivePage() {
  return (
    <OnboardingStepLayout
      currentStep={5}
      eyebrow="Review data"
      title="Confirm the first fields FinTrack parsed for you."
      description="Review balances, due dates, and investment summaries before they become part of your dashboard story."
      illustration={<OnboardingIllustration icon={ClipboardCheck} />}
      valueProps={[
        "Parsed values are shown in plain language before saving.",
        "Low-confidence fields can be corrected manually.",
        "Approved data feeds your net worth and payment reminders.",
      ]}
      ctaLabel="Continue to fallback options"
      ctaHref="/dashboard/onboarding/step-6"
      secondaryLabel="Edit accounts"
      secondaryHref="/dashboard/onboarding/step-3"
    >
      <div className="grid gap-3 rounded-xl border border-border bg-secondary/40 p-4 text-sm sm:grid-cols-2">
        <div>
          <p className="text-muted-foreground">Net worth preview</p>
          <p className="mt-1 text-lg font-semibold">
            {formatCurrency(dashboardData.netWorth)}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground">Credit card due</p>
          <p className="mt-1 text-lg font-semibold">
            {formatCurrency(dashboardData.creditCard.outstanding)}
          </p>
        </div>
        <Badge variant="secondary">Confidence checked</Badge>
        <Badge variant="secondary">2 fields need review</Badge>
      </div>
    </OnboardingStepLayout>
  );
}
