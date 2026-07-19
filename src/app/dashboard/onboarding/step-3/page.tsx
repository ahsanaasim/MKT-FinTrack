import { Landmark, LockKeyhole, ShieldCheck } from "lucide-react";
import {
  OnboardingIllustration,
  OnboardingStepLayout,
} from "@/components/onboarding/wizard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supportedBanks } from "@/lib/mock-data";

export default function OnboardingStepThreePage() {
  return (
    <OnboardingStepLayout
      currentStep={3}
      eyebrow="Connect accounts"
      title="Choose the banks and financial rails you want to sync."
      description="Start with supported banks for automatic parsing, then keep manual upload ready for formats that still need coverage."
      illustration={<OnboardingIllustration icon={Landmark} />}
      valueProps={[
        "Credit cards, demat, mutual funds, and NPS can live in one dashboard.",
        "Unsupported banks stay visible with a manual upload fallback.",
        "Connection status is tracked clearly before the first sync begins.",
      ]}
      ctaLabel="Start first sync"
      ctaHref="/dashboard/onboarding/step-4"
      secondaryLabel="Use manual upload"
      secondaryHref="/dashboard/onboarding/step-6"
      contextRail={
        <>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="size-4" />
                Security context
              </CardTitle>
              <CardDescription>
                Every integration is scoped and encrypted by design.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>OAuth tokens are stored separately from parsed statement data.</p>
              <p>Bank data is read-only and can be disconnected from settings.</p>
              <p>Manual uploads never require sharing account credentials.</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LockKeyhole className="size-4" />
                Coverage
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {supportedBanks.map((bank) => (
                <Badge
                  key={bank.id}
                  variant="outline"
                  className={
                    bank.supported
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-dashed text-muted-foreground"
                  }
                >
                  {bank.name}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </>
      }
    />
  );
}
