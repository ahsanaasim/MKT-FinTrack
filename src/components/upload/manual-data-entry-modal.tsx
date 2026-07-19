"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  CalendarDays,
  FileUp,
  HelpCircle,
  Plus,
  RefreshCw,
  Save,
  Trash2,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { usePreviewState } from "@/lib/state-preview";
import { formatCurrency } from "@/lib/mock-data";

type ManualDataEntryModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type TransactionRow = {
  id: string;
  date: string;
  description: string;
  amount: string;
};

type InvestmentRow = {
  id: string;
  name: string;
  units: string;
  value: string;
};

type ManualEntryForm = {
  statementType: string;
  periodStart: string;
  periodEnd: string;
  accountNumber: string;
  issuerName: string;
  totalOutstanding: string;
  dueDate: string;
  originalPdf: string;
};

const initialTransactions: TransactionRow[] = [
  {
    id: "txn-1",
    date: "2026-06-22",
    description: "Amazon Marketplace",
    amount: "3240",
  },
  {
    id: "txn-2",
    date: "2026-06-27",
    description: "Indigo Airlines",
    amount: "11890",
  },
];

const initialInvestments: InvestmentRow[] = [
  {
    id: "inv-1",
    name: "Parag Parikh Flexi Cap",
    units: "428.16",
    value: "360420",
  },
];

export function ManualDataEntryModal({
  open,
  onOpenChange,
}: ManualDataEntryModalProps) {
  const {
    isLoading,
    isError,
    isPlanLimit,
    isPermissionDenied,
    setState,
  } = usePreviewState();
  const [form, setForm] = useState<ManualEntryForm>({
    statementType: "credit-card",
    periodStart: "2026-06-01",
    periodEnd: "2026-06-30",
    accountNumber: "4412",
    issuerName: "HDFC Bank",
    totalOutstanding: "42180",
    dueDate: "2026-07-28",
    originalPdf: "",
  });
  const [transactions, setTransactions] =
    useState<TransactionRow[]>(initialTransactions);
  const [investments, setInvestments] =
    useState<InvestmentRow[]>(initialInvestments);
  const [saved, setSaved] = useState(false);

  const enteredValue = useMemo(() => {
    const outstanding = Number(form.totalOutstanding) || 0;
    const investmentValue = investments.reduce(
      (sum, row) => sum + (Number(row.value) || 0),
      0
    );
    return outstanding + investmentValue;
  }, [form.totalOutstanding, investments]);

  function updateForm<K extends keyof ManualEntryForm>(
    key: K,
    value: ManualEntryForm[K]
  ) {
    setSaved(false);
    setForm((current) => ({ ...current, [key]: value }));
  }

  function updateTransaction(
    id: string,
    key: keyof Omit<TransactionRow, "id">,
    value: string
  ) {
    setSaved(false);
    setTransactions((rows) =>
      rows.map((row) => (row.id === id ? { ...row, [key]: value } : row))
    );
  }

  function updateInvestment(
    id: string,
    key: keyof Omit<InvestmentRow, "id">,
    value: string
  ) {
    setSaved(false);
    setInvestments((rows) =>
      rows.map((row) => (row.id === id ? { ...row, [key]: value } : row))
    );
  }

  function handleSave() {
    setSaved(true);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Manual data entry</DialogTitle>
          <DialogDescription>
            Use this fallback when a statement cannot be parsed automatically.
            We save the structured values and the source PDF together.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <ManualEntrySkeleton />
        ) : isError ? (
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>Manual entry could not load</AlertTitle>
            <AlertDescription className="flex flex-wrap items-center gap-3">
              <span>Refresh the form and try again.</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setState("ready")}
              >
                <RefreshCw className="size-3.5" />
                Retry
              </Button>
            </AlertDescription>
          </Alert>
        ) : isPlanLimit ? (
          <Alert className="border-amber-300 bg-amber-50 text-amber-950">
            <AlertCircle className="text-amber-700" />
            <AlertTitle>Manual entries are unavailable on this plan</AlertTitle>
            <AlertDescription>
              Upgrade your plan to add fallback statement records after your
              monthly parse limit is reached.
            </AlertDescription>
          </Alert>
        ) : isPermissionDenied ? (
          <Alert className="border-rose-300 bg-rose-50 text-rose-950">
            <AlertCircle className="text-rose-700" />
            <AlertTitle>Permission required</AlertTitle>
            <AlertDescription>
              Re-authenticate before adding sensitive statement data manually.
            </AlertDescription>
          </Alert>
        ) : (
          <div className="grid gap-6">
            <div className="rounded-xl border bg-muted/30 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">Structured value entered</p>
                  <p className="text-2xl font-semibold tracking-tight">
                    {formatCurrency(enteredValue)}
                  </p>
                </div>
                <div className="min-w-48">
                  <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Completion
                  </p>
                  <Progress value={saved ? 100 : 72} />
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <StatementTypeSelect
                value={form.statementType}
                onValueChange={(value) => updateForm("statementType", value)}
              />
              <StatementPeriodDateRange
                start={form.periodStart}
                end={form.periodEnd}
                onStartChange={(value) => updateForm("periodStart", value)}
                onEndChange={(value) => updateForm("periodEnd", value)}
              />
              <AccountNumberField
                value={form.accountNumber}
                onChange={(value) => updateForm("accountNumber", value)}
              />
              <IssuerNameField
                value={form.issuerName}
                onChange={(value) => updateForm("issuerName", value)}
              />
              <TotalOutstandingField
                value={form.totalOutstanding}
                onChange={(value) => updateForm("totalOutstanding", value)}
              />
              <DueDateField
                value={form.dueDate}
                onChange={(value) => updateForm("dueDate", value)}
              />
            </div>

            <Separator />

            <TransactionTable
              rows={transactions}
              onUpdate={updateTransaction}
              onAdd={() =>
                setTransactions((rows) => [
                  ...rows,
                  {
                    id: `txn-${Date.now()}`,
                    date: "",
                    description: "",
                    amount: "",
                  },
                ])
              }
              onRemove={(id) =>
                setTransactions((rows) => rows.filter((row) => row.id !== id))
              }
            />

            <InvestmentTable
              rows={investments}
              onUpdate={updateInvestment}
              onAdd={() =>
                setInvestments((rows) => [
                  ...rows,
                  {
                    id: `inv-${Date.now()}`,
                    name: "",
                    units: "",
                    value: "",
                  },
                ])
              }
              onRemove={(id) =>
                setInvestments((rows) => rows.filter((row) => row.id !== id))
              }
            />

            <UploadOriginalPDFField
              value={form.originalPdf}
              onChange={(value) => updateForm("originalPdf", value)}
            />

            {saved && (
              <Alert className="border-emerald-300 bg-emerald-50 text-emerald-950">
                <Save className="text-emerald-700" />
                <AlertTitle>Manual data saved</AlertTitle>
                <AlertDescription>
                  The entry is ready for review and can be reconciled with the
                  original statement PDF.
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}

        <DialogFooter className="items-center justify-between sm:justify-between">
          <SupportLink />
          <div className="flex flex-col-reverse gap-2 sm:flex-row">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={isLoading || isError || isPlanLimit || isPermissionDenied}
            >
              <Save className="size-4" />
              Save entry
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function FieldShell({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

function StatementTypeSelect({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <FieldShell label="Statement type">
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose statement type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="credit-card">Credit card</SelectItem>
          <SelectItem value="mutual-fund">Mutual fund</SelectItem>
          <SelectItem value="equity">Equity / demat</SelectItem>
          <SelectItem value="nps">NPS</SelectItem>
        </SelectContent>
      </Select>
    </FieldShell>
  );
}

function StatementPeriodDateRange({
  start,
  end,
  onStartChange,
  onEndChange,
}: {
  start: string;
  end: string;
  onStartChange: (value: string) => void;
  onEndChange: (value: string) => void;
}) {
  return (
    <FieldShell label="Statement period">
      <div className="grid grid-cols-2 gap-2">
        <Input
          type="date"
          value={start}
          onChange={(event) => onStartChange(event.target.value)}
          aria-label="Statement period start"
        />
        <Input
          type="date"
          value={end}
          onChange={(event) => onEndChange(event.target.value)}
          aria-label="Statement period end"
        />
      </div>
    </FieldShell>
  );
}

function AccountNumberField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <FieldShell label="Account number" hint="Last four digits are enough.">
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="4412"
      />
    </FieldShell>
  );
}

function IssuerNameField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <FieldShell label="Issuer name">
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="HDFC Bank"
      />
    </FieldShell>
  );
}

function TotalOutstandingField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <FieldShell label="Total outstanding">
      <Input
        type="number"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="42180"
      />
    </FieldShell>
  );
}

function DueDateField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <FieldShell label="Due date">
      <div className="relative">
        <CalendarDays className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="date"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="pl-8"
        />
      </div>
    </FieldShell>
  );
}

function TransactionTable({
  rows,
  onUpdate,
  onAdd,
  onRemove,
}: {
  rows: TransactionRow[];
  onUpdate: (
    id: string,
    key: keyof Omit<TransactionRow, "id">,
    value: string
  ) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
}) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="font-medium">Transaction table</h3>
          <p className="text-xs text-muted-foreground">
            Add key statement spends for later reconciliation.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={onAdd}>
          <Plus className="size-3.5" />
          Add row
        </Button>
      </div>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="bg-muted/60 text-left text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <tr>
              <th className="px-3 py-2 font-medium">Date</th>
              <th className="px-3 py-2 font-medium">Description</th>
              <th className="px-3 py-2 font-medium">Amount</th>
              <th className="px-3 py-2 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t">
                <td className="p-2">
                  <Input
                    type="date"
                    value={row.date}
                    onChange={(event) =>
                      onUpdate(row.id, "date", event.target.value)
                    }
                  />
                </td>
                <td className="p-2">
                  <Input
                    value={row.description}
                    onChange={(event) =>
                      onUpdate(row.id, "description", event.target.value)
                    }
                    placeholder="Merchant or narration"
                  />
                </td>
                <td className="p-2">
                  <Input
                    type="number"
                    value={row.amount}
                    onChange={(event) =>
                      onUpdate(row.id, "amount", event.target.value)
                    }
                    placeholder="0"
                  />
                </td>
                <td className="p-2">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => onRemove(row.id)}
                    aria-label="Remove transaction"
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function InvestmentTable({
  rows,
  onUpdate,
  onAdd,
  onRemove,
}: {
  rows: InvestmentRow[];
  onUpdate: (
    id: string,
    key: keyof Omit<InvestmentRow, "id">,
    value: string
  ) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
}) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="font-medium">Investment table</h3>
          <p className="text-xs text-muted-foreground">
            Capture fund, demat, or NPS holdings when the parser needs help.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={onAdd}>
          <Plus className="size-3.5" />
          Add row
        </Button>
      </div>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="bg-muted/60 text-left text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <tr>
              <th className="px-3 py-2 font-medium">Instrument</th>
              <th className="px-3 py-2 font-medium">Units</th>
              <th className="px-3 py-2 font-medium">Value</th>
              <th className="px-3 py-2 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t">
                <td className="p-2">
                  <Input
                    value={row.name}
                    onChange={(event) =>
                      onUpdate(row.id, "name", event.target.value)
                    }
                    placeholder="Fund or instrument"
                  />
                </td>
                <td className="p-2">
                  <Input
                    value={row.units}
                    onChange={(event) =>
                      onUpdate(row.id, "units", event.target.value)
                    }
                    placeholder="0.00"
                  />
                </td>
                <td className="p-2">
                  <Input
                    type="number"
                    value={row.value}
                    onChange={(event) =>
                      onUpdate(row.id, "value", event.target.value)
                    }
                    placeholder="0"
                  />
                </td>
                <td className="p-2">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => onRemove(row.id)}
                    aria-label="Remove investment"
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function UploadOriginalPDFField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <FieldShell
      label="Upload original PDF"
      hint="Optional, but recommended for audit trail and future parser training."
    >
      <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed bg-muted/30 p-4 transition-colors hover:bg-muted/50">
        <span className="flex size-10 items-center justify-center rounded-lg bg-background">
          <FileUp className="size-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium">
            {value || "Attach statement PDF"}
          </span>
          <span className="block text-xs text-muted-foreground">
            PDF only, up to 12 MB
          </span>
        </span>
        <Input
          type="file"
          accept="application/pdf"
          className="sr-only"
          onChange={(event) =>
            onChange(event.target.files?.[0]?.name ?? value)
          }
        />
      </label>
    </FieldShell>
  );
}

function SupportLink() {
  return (
    <Button variant="link" className="justify-start px-0" asChild>
      <Link href="mailto:support@fintrack.app">
        <HelpCircle className="size-4" />
        SupportLink
      </Link>
    </Button>
  );
}

function ManualEntrySkeleton() {
  return (
    <div className="grid gap-6">
      <Skeleton className="h-24 rounded-xl" />
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-8 w-full" />
          </div>
        ))}
      </div>
      <Skeleton className="h-40 rounded-xl" />
      <Skeleton className="h-36 rounded-xl" />
    </div>
  );
}
