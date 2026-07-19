import { AlertTriangle } from "lucide-react";
import {
  OnboardingIllustration,
  OnboardingStepLayout,
} from "@/components/onboarding/wizard";

export default function OnboardingStepEightPage() {
  return (
    <OnboardingStepLayout
      currentStep={8}
      eyebrow="Error"
      title="We could not finish the automatic sync."
      description="A connected parser hit an unexpected format. Your setup is safe, and you can retry sync or continue with the manual upload fallback."
      illustration={<OnboardingIllustration icon={AlertTriangle} tone="danger" />}
      valueProps={[
        "No dashboard values were saved without review.",
        "Manual upload can capture the same financial data now.",
        "Retrying sync will keep your existing connections intact.",
      ]}
      ctaLabel="Use manual fallback"
      ctaHref="/dashboard/onboarding/step-6"
      secondaryLabel="Retry first sync"
      secondaryHref="/dashboard/onboarding/step-4"
    />
  );
}
