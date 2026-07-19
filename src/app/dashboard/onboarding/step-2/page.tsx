import { MailCheck } from "lucide-react";
import {
  OnboardingIllustration,
  OnboardingStepLayout,
} from "@/components/onboarding/wizard";
import { Badge } from "@/components/ui/badge";

export default function OnboardingStepTwoPage() {
  return (
    <OnboardingStepLayout
      currentStep={2}
      eyebrow="Connect email"
      title="Let FinTrack find statements in your inbox."
      description="Connect Gmail once so credit card, demat, mutual fund, and NPS statements can be discovered automatically."
      illustration={<OnboardingIllustration icon={MailCheck} tone="light" />}
      valueProps={[
        "OAuth access can be revoked at any time.",
        "Only financial statement metadata is surfaced for review.",
        "Detected files remain encrypted in your statement vault.",
      ]}
      ctaLabel="Connect financial accounts"
      ctaHref="/dashboard/onboarding/step-3"
      secondaryLabel="Skip email for now"
      secondaryHref="/dashboard/onboarding/step-3"
    >
      <div className="flex flex-wrap gap-2">
        {["Gmail OAuth", "Encrypted vault", "Read-only sync"].map((item) => (
          <Badge key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </div>
    </OnboardingStepLayout>
  );
}
