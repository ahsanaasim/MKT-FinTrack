import { Sparkles } from "lucide-react";
import {
  OnboardingIllustration,
  OnboardingStepLayout,
} from "@/components/onboarding/wizard";
import { dashboardData } from "@/lib/mock-data";

export default function OnboardingStepOnePage() {
  return (
    <OnboardingStepLayout
      currentStep={1}
      eyebrow="Welcome"
      title={`Welcome, ${dashboardData.userName}. Let's build your financial story.`}
      description="FinTrack turns statements, account balances, and payments into a calm editorial dashboard that is ready when you are."
      illustration={<OnboardingIllustration icon={Sparkles} />}
      valueProps={[
        "Connect only the accounts you want to track.",
        "Review every parsed field before it becomes part of your dashboard.",
        "Keep fallback uploads available for unsupported banks and brokers.",
      ]}
      ctaLabel="Start with email"
      ctaHref="/dashboard/onboarding/step-2"
      secondaryLabel="Go to dashboard"
      secondaryHref="/dashboard"
    />
  );
}
