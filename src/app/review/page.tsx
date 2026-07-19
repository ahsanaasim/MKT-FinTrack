"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  FileCheck2,
  FileText,
  HelpCircle,
  Pencil,
  RefreshCw,
  RotateCcw,
  Save,
  ShieldCheck,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AppNav } from "@/components/layout/nav";
import { EmptyState, StatusBanners } from "@/components/layout/status";
import { usePreviewState } from "@/lib/state-preview";
import {
  parsedReviewData,
  formatCurrency,
  formatDate,
} from "@/lib/mock-data";

type CreditCardFields = typeof parsedReviewData.creditCard;
type InvestmentFields = (typeof parsedReviewData.investments)[number];
type NpsFields = typeof parsedReviewData.nps;
type ReviewSection = "creditCard" | "investments" | "nps";

type ReviewFormState = {
  creditCard: CreditCardFields;
  investments: InvestmentFields[];
  nps: NpsFields;
};

const originalPreviewLines = [
  "HDFC BANK REGALIA CREDIT CARD STATEMENT",
  "Statement period: 01 Jun 2026 - 30 Jun 2026",
  "Card ending: 4412",
  "Total amount due: INR 42,180.00",
  "Minimum amount due: INR 2,109.00",
  "Payment due date: 28 Jul 2026",
  "Linked investments: Parag Parikh Flexi Cap, Axis Bluechip",
  "NPS contribution posted: INR 5,000.00",
];

export default function ReviewPage() {
  const {
    isLoading,
    isEmpty,
    isError,
    isPlanLimit,
    isPermissionDenied,
    setState,
  } = usePreviewState();
  const [form, setForm] = useState<ReviewFormState>({
    creditCard: { ...parsedReviewData.creditCard },
    investments: parsedReviewData.investments.map((investment) => ({
      ...investment,
    })),
    nps: { ...parsedReviewData.nps },
  });
  const [editing, setEditing] = useState<Record<ReviewSection, boolean>>({
    creditCard: false,
    investments: false,
    nps: false,
  });
  const [confirmedSections, setConfirmedSections] = useState<
    Record<ReviewSection, boolean>
  >({
    creditCard: false,
    investments: false,
    nps: false,
  });
  const [saved, setSaved] = useState(false);

  const allConfirmed = useMemo(
    () => Object.values(confirmedSections).every(Boolean),
    [confirmedSections]
  );

  function updateCreditCard(key: keyof CreditCardFields, value: string) {
    setSaved(false);
    setForm((current) => ({
      ...current,
      creditCard: { ...current.creditCard, [key]: value },
    }));
  }

  function updateInvestment(
    index: number,
    key: keyof InvestmentFields,
    value: string
  ) {
    setSaved(false);
    setForm((current) => ({
      ...current,
      investments: current.investments.map((investment, i) =>
        i === index ? { ...investment, [key]: value } : investment
      ),
    }));
  }

  function updateNps(key: keyof NpsFields, value: string) {
    setSaved(false);
    setForm((current) => ({
      ...current,
      nps: { ...current.nps, [key]: value },
    }));
  }

  function confirmSection(section: ReviewSection) {
    setEditing((current) => ({ ...current, [section]: false }));
    setConfirmedSections((current) => ({ ...current, [section]: true }));
  }

  function editSection(section: ReviewSection) {
    setSaved(false);
    setEditing((current) => ({ ...current, [section]: true }));
    setConfirmedSections((current) => ({ ...current, [section]: false }));
  }

  function cancelSection(section: ReviewSection) {
    setSaved(false);
    setEditing((current) => ({ ...current, [section]: false }));
    setForm((current) => ({
      ...current,
      [section]:
        section === "investments"
          ? parsedReviewData.investments.map((investment) => ({ ...investment }))
          : { ...parsedReviewData[section] },
    }));
  }

  function handleConfirmAll() {
    setConfirmedSections({
      creditCard: true,
      investments: true,
      nps: true,
    });
    setEditing({
      creditCard: false,
      investments: false,
      nps: false,
    });
    setSaved(true);
  }

  const showSystemBanner = isPlanLimit || isPermissionDenied;

  return (
    <div className="min-h-full editorial-paper">
      <AppNav />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <div className="mb-8 space-y-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge variant="outline" className="mb-4">
                Data quality desk
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Data Review & Correction
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Confirm the fields FinTrack parsed before they become part of
                your dashboard, payments, and vault records.
              </p>
            </div>
            <StepIndicator
              steps={["Parsed", "Review", "Save"]}
              currentStep={2}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <ParsedSourceBadge source={parsedReviewData.source} />
            <SupportedBankFormatIndicator
              bankFormat={parsedReviewData.bankFormat}
            />
          </div>
        </div>

        {showSystemBanner && (
          <StatusBanners
            planMessage="Review actions are locked because your plan limit has been reached for this cycle."
            permissionMessage="You do not have permission to edit parsed statement data in this workspace."
          />
        )}

        {isLoading ? (
          <ReviewSkeleton />
        ) : isEmpty ? (
          <EmptyState
            title="No parsed statement is waiting"
            description="Upload a PDF or reconnect your statement source to populate this review desk."
            action={
              <Button asChild>
                <Link href="/upload">Upload statement</Link>
              </Button>
            }
          />
        ) : isError ? (
          <ReviewErrorState onRetry={() => setState("ready")} />
        ) : (
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            <section className="space-y-5">
              {saved && (
                <Alert className="border-emerald-300 bg-emerald-50 text-emerald-950">
                  <CheckCircle2 className="text-emerald-700" />
                  <AlertTitle>Review saved</AlertTitle>
                  <AlertDescription>
                    Confirmed data is ready for the dashboard, payments, and
                    vault.
                  </AlertDescription>
                </Alert>
              )}

              <EditableReviewSection
                title="Credit card"
                description="Payment-critical values parsed from the card statement."
                confirmed={confirmedSections.creditCard}
                editing={editing.creditCard}
                onConfirm={() => confirmSection("creditCard")}
                onEdit={() => editSection("creditCard")}
                onCancel={() => cancelSection("creditCard")}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <ReviewInput
                    label="Card name"
                    value={form.creditCard.name}
                    onChange={(value) => updateCreditCard("name", value)}
                    disabled={!editing.creditCard}
                  />
                  <ReviewInput
                    label="Account"
                    value={form.creditCard.account}
                    onChange={(value) => updateCreditCard("account", value)}
                    disabled={!editing.creditCard}
                  />
                  <ReviewInput
                    label="Outstanding"
                    value={form.creditCard.outstanding}
                    onChange={(value) => updateCreditCard("outstanding", value)}
                    disabled={!editing.creditCard}
                    type="number"
                    displayValue={formatCurrency(
                      Number(form.creditCard.outstanding) || 0
                    )}
                  />
                  <ReviewInput
                    label="Due date"
                    value={form.creditCard.dueDate}
                    onChange={(value) => updateCreditCard("dueDate", value)}
                    disabled={!editing.creditCard}
                    type="date"
                    displayValue={formatDate(form.creditCard.dueDate)}
                  />
                  <ReviewInput
                    label="Minimum due"
                    value={form.creditCard.minDue}
                    onChange={(value) => updateCreditCard("minDue", value)}
                    disabled={!editing.creditCard}
                    type="number"
                    displayValue={formatCurrency(
                      Number(form.creditCard.minDue) || 0
                    )}
                  />
                </div>
              </EditableReviewSection>

              <EditableReviewSection
                title="Investments"
                description="Holdings detected across fund and demat sections."
                confirmed={confirmedSections.investments}
                editing={editing.investments}
                onConfirm={() => confirmSection("investments")}
                onEdit={() => editSection("investments")}
                onCancel={() => cancelSection("investments")}
              >
                <div className="space-y-4">
                  {form.investments.map((investment, index) => (
                    <div
                      key={`${investment.name}-${index}`}
                      className="grid gap-4 rounded-xl border bg-muted/20 p-4 sm:grid-cols-3"
                    >
                      <ReviewInput
                        label="Investment"
                        value={investment.name}
                        onChange={(value) =>
                          updateInvestment(index, "name", value)
                        }
                        disabled={!editing.investments}
                      />
                      <ReviewInput
                        label="Units"
                        value={investment.units}
                        onChange={(value) =>
                          updateInvestment(index, "units", value)
                        }
                        disabled={!editing.investments}
                      />
                      <ReviewInput
                        label="Value"
                        value={investment.value}
                        onChange={(value) =>
                          updateInvestment(index, "value", value)
                        }
                        disabled={!editing.investments}
                        type="number"
                        displayValue={formatCurrency(
                          Number(investment.value) || 0
                        )}
                      />
                    </div>
                  ))}
                </div>
              </EditableReviewSection>

              <EditableReviewSection
                title="NPS"
                description="Retirement contribution values matched to your PRAN."
                confirmed={confirmedSections.nps}
                editing={editing.nps}
                onConfirm={() => confirmSection("nps")}
                onEdit={() => editSection("nps")}
                onCancel={() => cancelSection("nps")}
              >
                <div className="grid gap-4 sm:grid-cols-3">
                  <ReviewInput
                    label="PRAN"
                    value={form.nps.pran}
                    onChange={(value) => updateNps("pran", value)}
                    disabled={!editing.nps}
                  />
                  <ReviewInput
                    label="Balance"
                    value={form.nps.balance}
                    onChange={(value) => updateNps("balance", value)}
                    disabled={!editing.nps}
                    type="number"
                    displayValue={formatCurrency(Number(form.nps.balance) || 0)}
                  />
                  <ReviewInput
                    label="Contribution"
                    value={form.nps.contribution}
                    onChange={(value) => updateNps("contribution", value)}
                    disabled={!editing.nps}
                    type="number"
                    displayValue={formatCurrency(
                      Number(form.nps.contribution) || 0
                    )}
                  />
                </div>
              </EditableReviewSection>

              <footer className="sticky bottom-4 z-20 rounded-2xl border bg-background/95 p-3 shadow-lg backdrop-blur">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-muted-foreground">
                    {allConfirmed
                      ? "Every section is confirmed."
                      : "Confirm each section or save all reviewed fields."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <EditCancelButton
                      onClick={() => {
                        setForm({
                          creditCard: { ...parsedReviewData.creditCard },
                          investments: parsedReviewData.investments.map(
                            (investment) => ({ ...investment })
                          ),
                          nps: { ...parsedReviewData.nps },
                        });
                        setEditing({
                          creditCard: false,
                          investments: false,
                          nps: false,
                        });
                        setConfirmedSections({
                          creditCard: false,
                          investments: false,
                          nps: false,
                        });
                        setSaved(false);
                      }}
                    />
                    <ConfirmAndSaveButton
                      disabled={isPlanLimit || isPermissionDenied}
                      onClick={handleConfirmAll}
                    />
                  </div>
                </div>
              </footer>
            </section>

            <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              <ParsingSummaryCard />
              <OriginalStatementPreview />
              <HelpTooltip />
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

function StepIndicator({
  steps,
  currentStep,
}: {
  steps: string[];
  currentStep: number;
}) {
  return (
    <div className="flex rounded-2xl border bg-card p-2 shadow-sm">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const complete = stepNumber < currentStep;
        const active = stepNumber === currentStep;

        return (
          <div key={step} className="flex items-center">
            <div
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <span className="flex size-5 items-center justify-center rounded-full border border-current/30 text-xs">
                {complete ? <Check className="size-3" /> : stepNumber}
              </span>
              <span>{step}</span>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="mx-1 size-4 text-muted-foreground" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function ParsedSourceBadge({ source }: { source: string }) {
  return (
    <Badge className="h-7 rounded-lg">
      <FileText className="size-3.5" />
      Parsed source: {source}
    </Badge>
  );
}

function SupportedBankFormatIndicator({
  bankFormat,
}: {
  bankFormat: string;
}) {
  return (
    <Badge variant="secondary" className="h-7 rounded-lg">
      <ShieldCheck className="size-3.5" />
      Supported format: {bankFormat}
    </Badge>
  );
}

function EditableReviewSection({
  title,
  description,
  confirmed,
  editing,
  onConfirm,
  onEdit,
  onCancel,
  children,
}: {
  title: string;
  description: string;
  confirmed: boolean;
  editing: boolean;
  onConfirm: () => void;
  onEdit: () => void;
  onCancel: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border bg-card p-5 shadow-sm">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            {confirmed && (
              <Badge className="bg-emerald-700 text-white">Confirmed</Badge>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex gap-2">
          {editing ? (
            <>
              <Button variant="outline" onClick={onCancel}>
                <RotateCcw className="size-4" />
                Cancel
              </Button>
              <Button onClick={onConfirm}>
                <Save className="size-4" />
                Save
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={onEdit}>
                <Pencil className="size-4" />
                Edit
              </Button>
              <Button onClick={onConfirm}>
                <CheckCircle2 className="size-4" />
                Confirm
              </Button>
            </>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

function ReviewInput({
  label,
  value,
  onChange,
  disabled,
  type = "text",
  displayValue,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  type?: string;
  displayValue?: string;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {disabled ? (
        <div className="flex h-10 items-center rounded-lg border bg-muted/40 px-3 text-sm">
          {displayValue ?? value}
        </div>
      ) : (
        <Input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-10"
        />
      )}
    </div>
  );
}

function ParsingSummaryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Parsing summary</CardTitle>
        <CardDescription>Confidence and review workload.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span>Confidence</span>
            <span>{parsedReviewData.summary.confidence}%</span>
          </div>
          <Progress value={parsedReviewData.summary.confidence} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-secondary p-3">
            <p className="text-2xl font-semibold">
              {parsedReviewData.summary.fieldsParsed}
            </p>
            <p className="text-xs text-muted-foreground">Fields parsed</p>
          </div>
          <div className="rounded-xl bg-secondary p-3">
            <p className="text-2xl font-semibold">
              {parsedReviewData.summary.needsReview}
            </p>
            <p className="text-xs text-muted-foreground">Need review</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function OriginalStatementPreview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Original statement</CardTitle>
        <CardDescription>Source snippets matched by the parser.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-xl bg-zinc-950 p-4 font-mono text-xs leading-6 text-zinc-100">
          {originalPreviewLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function HelpTooltip() {
  return (
    <Card className="bg-paper-warm/80">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Review help
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="inline-flex size-7 items-center justify-center rounded-full border bg-background"
                aria-label="Review help"
              >
                <HelpCircle className="size-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              Confirm values if they match your source PDF. Use Edit for
              corrections, then Save to mark that section reviewed.
            </TooltipContent>
          </Tooltip>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-muted-foreground">
        <p>
          Payment values power reminders and pay-now flows, while investment and
          NPS values update your dashboard.
        </p>
        <Button variant="outline" asChild>
          <Link href="/upload">Upload another PDF</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function ConfirmAndSaveButton({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <Button disabled={disabled} onClick={onClick}>
      <FileCheck2 className="size-4" />
      Confirm and save
    </Button>
  );
}

function EditCancelButton({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="outline" onClick={onClick}>
      <RotateCcw className="size-4" />
      Reset edits
    </Button>
  );
}

function ReviewErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <EmptyState
      title="Parser review could not load"
      description="Retry the review queue, or manually upload the statement PDF to create a fresh parse."
      illustration={
        <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-rose-50 text-rose-700">
          <AlertCircle className="size-9" />
        </div>
      }
      action={
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline" onClick={onRetry}>
            <RefreshCw className="size-4" />
            Retry
          </Button>
          <Button asChild>
            <Link href="/upload">Manual Upload</Link>
          </Button>
        </div>
      }
    />
  );
}

function ReviewSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
      <section className="space-y-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="rounded-2xl border bg-card p-5">
            <div className="mb-5 flex justify-between">
              <div className="space-y-2">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-72" />
              </div>
              <Skeleton className="h-8 w-28" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <Skeleton className="h-16 rounded-xl" />
              <Skeleton className="h-16 rounded-xl" />
              <Skeleton className="h-16 rounded-xl" />
            </div>
          </div>
        ))}
      </section>
      <aside className="space-y-4">
        <Skeleton className="h-56 rounded-xl" />
        <Skeleton className="h-64 rounded-xl" />
        <Skeleton className="h-40 rounded-xl" />
      </aside>
    </div>
  );
}
