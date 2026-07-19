"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  HelpCircle,
  LockKeyhole,
  ReceiptText,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { AppNav } from "@/components/layout/nav";
import { EmptyState, StatusBanners } from "@/components/layout/status";
import { usePreviewState } from "@/lib/state-preview";
import { dashboardData, formatCurrency, formatDate } from "@/lib/mock-data";

type PaymentMethod = "upi" | "bbps";
type PaymentModal = "confirmation" | "success" | "error" | null;

export default function PaymentsPage() {
  const {
    isLoading,
    isEmpty,
    isError,
    isPlanLimit,
    isPermissionDenied,
    setState,
  } = usePreviewState();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
  const [upiId, setUpiId] = useState("priya@okhdfcbank");
  const [amount, setAmount] = useState(
    String(dashboardData.creditCard.outstanding)
  );
  const [modal, setModal] = useState<PaymentModal>(null);

  const numericAmount = Number(amount) || 0;
  const receiptId = useMemo(
    () => `FT-${dashboardData.creditCard.masked.replace(/\D/g, "")}-0728`,
    []
  );
  const showSystemBanner = isPlanLimit || isPermissionDenied;

  function startPayment() {
    if (numericAmount <= 0 || (paymentMethod === "upi" && !upiId.includes("@"))) {
      setModal("error");
      return;
    }

    setModal("confirmation");
  }

  return (
    <div className="min-h-full editorial-paper">
      <AppNav />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <div>
            <Badge variant="outline" className="mb-4">
              Payments
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Pay credit card dues
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Settle the due amount parsed from your latest statement with a
              clear confirmation step and vault-ready receipt.
            </p>
          </div>
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>{dashboardData.creditCard.name}</CardTitle>
              <CardDescription className="text-primary-foreground/70">
                {dashboardData.creditCard.masked} · Due{" "}
                {formatDate(dashboardData.creditCard.dueDate)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold tracking-tight">
                {formatCurrency(dashboardData.creditCard.outstanding)}
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                Minimum due {formatCurrency(dashboardData.creditCard.minDue)}
              </p>
            </CardContent>
          </Card>
        </div>

        {showSystemBanner && (
          <StatusBanners
            planMessage="Payments are unavailable because your current plan limit has been reached."
            permissionMessage="You do not have permission to initiate payments from this workspace."
          />
        )}

        {isLoading ? (
          <PaymentsSkeleton />
        ) : isEmpty ? (
          <EmptyState
            title="No payment due"
            description="We could not find an outstanding credit card balance. Sync or upload a statement to prefill this screen."
            action={
              <Button asChild>
                <Link href="/upload">Upload statement</Link>
              </Button>
            }
          />
        ) : isError ? (
          <>
            <StatusBanners onRetry={() => setState("ready")} />
            <EmptyState
              title="Payment desk could not load"
              description="Retry loading payment details or contact support if the issue persists."
              illustration={
                <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-rose-50 text-rose-700">
                  <AlertCircle className="size-9" />
                </div>
              }
              action={
                <Button variant="outline" onClick={() => setState("ready")}>
                  <RefreshCw className="size-4" />
                  Retry
                </Button>
              }
            />
          </>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            <section className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="size-5" />
                    Statement amount
                  </CardTitle>
                  <CardDescription>
                    Prefilled from dashboardData.creditCard. Adjust only if you
                    are making a partial payment.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Payment amount</Label>
                    <Input
                      type="number"
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                      className="h-10"
                    />
                    <p className="text-xs text-muted-foreground">
                      Outstanding:{" "}
                      {formatCurrency(dashboardData.creditCard.outstanding)}
                    </p>
                  </div>
                  <div className="rounded-xl bg-secondary p-4">
                    <p className="text-sm text-muted-foreground">Due date</p>
                    <p className="mt-1 text-2xl font-semibold">
                      {formatDate(dashboardData.creditCard.dueDate)}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Payments are archived with the source statement.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment method</CardTitle>
                  <CardDescription>
                    Choose UPI for instant debit or BBPS for biller-backed
                    settlement.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <PaymentMethodSelector
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  />
                  {paymentMethod === "upi" && (
                    <UPIIdInput value={upiId} onChange={setUpiId} />
                  )}
                  <SecurityAssuranceText />
                  <SupportLink />
                </CardContent>
                <CardFooter className="justify-between">
                  <p className="text-sm text-muted-foreground">
                    You will confirm before any payment is initiated.
                  </p>
                  <Button
                    onClick={startPayment}
                    disabled={isPlanLimit || isPermissionDenied}
                  >
                    Pay Now
                    <ArrowRight className="size-4" />
                  </Button>
                </CardFooter>
              </Card>
            </section>

            <aside className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Payment summary</CardTitle>
                  <CardDescription>
                    Review the biller before opening the confirmation modal.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SummaryRow label="Card" value={dashboardData.creditCard.name} />
                  <SummaryRow label="Account" value={dashboardData.creditCard.masked} />
                  <SummaryRow label="Amount" value={formatCurrency(numericAmount)} />
                  <SummaryRow
                    label="Method"
                    value={paymentMethod === "upi" ? "UPI" : "BBPS"}
                  />
                </CardContent>
              </Card>

              <Card className="bg-paper-warm/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="size-5" />
                    Secure by design
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    FinTrack never stores UPI PINs. Payment authorization
                    happens through your chosen provider.
                  </p>
                  <p>
                    Receipts are saved to the encrypted vault with statement
                    context.
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        )}
      </main>

      <PaymentConfirmationModal
        open={modal === "confirmation"}
        amount={numericAmount}
        method={paymentMethod}
        upiId={upiId}
        onCancel={() => setModal(null)}
        onConfirm={() => setModal("success")}
      />
      <PaymentSuccessModal
        open={modal === "success"}
        amount={numericAmount}
        receiptId={receiptId}
        onOpenChange={(open) => setModal(open ? "success" : null)}
      />
      <PaymentErrorModal
        open={modal === "error"}
        onRetry={() => setModal("confirmation")}
        onOpenChange={(open) => setModal(open ? "error" : null)}
      />
    </div>
  );
}

function PaymentMethodSelector({
  value,
  onValueChange,
}: {
  value: PaymentMethod;
  onValueChange: (value: PaymentMethod) => void;
}) {
  return (
    <div className="space-y-2">
      <Label>Payment method</Label>
      <Select
        value={value}
        onValueChange={(next) => onValueChange(next as PaymentMethod)}
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="upi">UPI</SelectItem>
          <SelectItem value="bbps">BBPS</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

function UPIIdInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-2">
      <Label>UPI ID</Label>
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="name@bank"
        className="h-10"
      />
    </div>
  );
}

function SecurityAssuranceText() {
  return (
    <Alert>
      <LockKeyhole />
      <AlertTitle>Secure payment</AlertTitle>
      <AlertDescription>
        Bank-grade encryption protects payment context. We ask your UPI app or
        BBPS provider to complete authorization; FinTrack stores only the
        receipt metadata.
      </AlertDescription>
    </Alert>
  );
}

function SupportLink() {
  return (
    <Button variant="link" className="h-auto justify-start px-0" asChild>
      <Link href="mailto:support@fintrack.app">
        <HelpCircle className="size-4" />
        Contact support
      </Link>
    </Button>
  );
}

function PaymentConfirmationModal({
  open,
  amount,
  method,
  upiId,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  amount: number;
  method: PaymentMethod;
  upiId: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !nextOpen && onCancel()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm payment</DialogTitle>
          <DialogDescription>
            Confirm the amount and payment rail before continuing.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 rounded-xl border bg-muted/30 p-4">
          <SummaryRow label="Card" value={dashboardData.creditCard.name} />
          <SummaryRow label="Account" value={dashboardData.creditCard.masked} />
          <SummaryRow label="Amount" value={formatCurrency(amount)} />
          <SummaryRow label="Method" value={method === "upi" ? "UPI" : "BBPS"} />
          {method === "upi" && <SummaryRow label="UPI ID" value={upiId} />}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>
            Confirm
            <CheckCircle2 className="size-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function PaymentSuccessModal({
  open,
  amount,
  receiptId,
  onOpenChange,
}: {
  open: boolean;
  amount: number;
  receiptId: string;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Payment successful</DialogTitle>
          <DialogDescription>
            Payment initiated successfully. Your receipt is ready for the vault.
          </DialogDescription>
        </DialogHeader>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950">
          <div className="mb-3 flex items-center gap-2">
            <ReceiptText className="size-5 text-emerald-700" />
            <p className="font-medium">Receipt {receiptId}</p>
          </div>
          <SummaryRow label="Amount" value={formatCurrency(amount)} />
          <SummaryRow label="Status" value="Processing with bank" />
          <SummaryRow label="Card" value={dashboardData.creditCard.name} />
        </div>
        <DialogFooter>
          <Button variant="outline" asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button asChild>
            <Link href="/vault">Go to Vault</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function PaymentErrorModal({
  open,
  onRetry,
  onOpenChange,
}: {
  open: boolean;
  onRetry: () => void;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Payment error</DialogTitle>
          <DialogDescription>
            We could not start the payment. Check your amount or payment method
            and try again.
          </DialogDescription>
        </DialogHeader>
        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>Payment failed</AlertTitle>
          <AlertDescription>
            UPI IDs must include a payment handle. BBPS payments require a valid
            positive amount.
          </AlertDescription>
        </Alert>
        <DialogFooter>
          <Button variant="outline" asChild>
            <Link href="mailto:support@fintrack.app">Contact support</Link>
          </Button>
          <Button onClick={onRetry}>
            <RefreshCw className="size-4" />
            Retry
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-medium">{value}</span>
    </div>
  );
}

function PaymentsSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
      <section className="space-y-6">
        <Skeleton className="h-56 rounded-xl" />
        <Skeleton className="h-72 rounded-xl" />
      </section>
      <aside className="space-y-4">
        <Skeleton className="h-64 rounded-xl" />
        <Skeleton className="h-48 rounded-xl" />
      </aside>
    </div>
  );
}
