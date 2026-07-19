import Link from "next/link";
import { type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";
import { AppNav } from "@/components/layout/nav";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const steps = [
  "Welcome",
  "Email",
  "Accounts",
  "Sync",
  "Review",
  "Fallback",
  "Success",
  "Error",
];

export function OnboardingIllustration({
  icon: Icon,
  tone = "dark",
}: {
  icon: LucideIcon;
  tone?: "dark" | "light" | "danger";
}) {
  return (
    <div
      className={cn(
        "relative min-h-72 overflow-hidden rounded-2xl border p-6",
        tone === "dark" && "border-zinc-800 bg-primary text-primary-foreground",
        tone === "light" && "border-border bg-secondary text-foreground",
        tone === "danger" && "border-rose-200 bg-rose-50 text-rose-950"
      )}
    >
      <div className="absolute -right-12 -top-12 size-44 rounded-full bg-white/10" />
      <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
        <div className="flex size-14 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
          <Icon className="size-7" />
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {[68, 86, 54].map((height) => (
            <div key={height} className="flex h-24 items-end rounded-lg bg-white/10 p-2">
              <div
                className="w-full rounded-md bg-white/70"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepProgress({ currentStep }: { currentStep: number }) {
  const value = Math.round((currentStep / steps.length) * 100);

  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Step {currentStep} of {steps.length}
        </p>
        <p className="text-sm text-muted-foreground">{value}% complete</p>
      </div>
      <Progress value={value} />
      <div className="mt-4 grid grid-cols-4 gap-2 text-xs text-muted-foreground sm:grid-cols-8">
        {steps.map((step, index) => {
          const active = index + 1 === currentStep;
          const complete = index + 1 < currentStep;
          return (
            <div
              key={step}
              className={cn(
                "rounded-md border px-2 py-1 text-center",
                active && "border-primary bg-primary text-primary-foreground",
                complete && !active && "border-emerald-200 bg-emerald-50 text-emerald-700",
                !active && !complete && "border-border bg-background"
              )}
            >
              {step}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function OnboardingStepLayout({
  currentStep,
  eyebrow,
  title,
  description,
  illustration,
  valueProps,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
  children,
  contextRail,
}: {
  currentStep: number;
  eyebrow: string;
  title: string;
  description: string;
  illustration: ReactNode;
  valueProps: string[];
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  children?: ReactNode;
  contextRail?: ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col editorial-paper">
      <AppNav />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
          <StepProgress currentStep={currentStep} />
          <div
            className={cn(
              "mt-8 grid gap-6",
              contextRail ? "lg:grid-cols-[minmax(0,1fr)_340px]" : ""
            )}
          >
            <article className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-4 sm:p-6">{illustration}</div>
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {eyebrow}
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {title}
                </h1>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {valueProps.map((prop) => (
                    <li key={prop} className="flex gap-3">
                      <span className="mt-1 size-1.5 rounded-full bg-primary" />
                      <span>{prop}</span>
                    </li>
                  ))}
                </ul>
                {children && <div className="mt-6">{children}</div>}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <Link href={ctaHref}>{ctaLabel}</Link>
                  </Button>
                  {secondaryHref && secondaryLabel && (
                    <Button size="lg" variant="outline" asChild>
                      <Link href={secondaryHref}>{secondaryLabel}</Link>
                    </Button>
                  )}
                </div>
              </div>
            </article>
            {contextRail && <aside className="space-y-4">{contextRail}</aside>}
          </div>
        </section>
      </main>
    </div>
  );
}
