import { PartyPopper } from "lucide-react";
import {
  OnboardingIllustration,
  OnboardingStepLayout,
} from "@/components/onboarding/wizard";
import { dashboardData, formatCurrency } from "@/lib/mock-data";

export default function OnboardingStepSevenPage() {
  return (
    <OnboardingStepLayout
      currentStep={7}
      eyebrow="Success"
      title="Your FinTrack dashboard is ready."
      description="Your first financial story has been assembled with connected accounts, parsed statements, and fallback options ready for future gaps."
      illustration={<OnboardingIllustration icon={PartyPopper} />}
      valueProps={[
        `${formatCurrency(dashboardData.netWorth)} net worth preview is ready.`,
        "Payment reminders and statement vault entries are now available.",
        "You can keep refining connections from the dashboard any time.",
      ]}
      ctaLabel="Go to dashboard"
      ctaHref="/dashboard"
      secondaryLabel="View onboarding error state"
      secondaryHref="/dashboard/onboarding/step-8"
    />
  );
}
