"use client";

import { useEffect, useRef, useState, type DragEvent } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileText,
  FileUp,
  RefreshCw,
  UploadCloud,
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
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { AppNav } from "@/components/layout/nav";
import { EmptyState, StatusBanners } from "@/components/layout/status";
import { ManualDataEntryModal } from "@/components/upload/manual-data-entry-modal";
import { usePreviewState } from "@/lib/state-preview";

const supportedFormatItems = [
  "Password-free PDF statements",
  "Credit card, mutual fund, demat, and NPS PDFs",
  "Single file uploads up to 12 MB",
];

export default function UploadPage() {
  const {
    isLoading,
    isEmpty,
    isError,
    isPlanLimit,
    isPermissionDenied,
    setState,
  } = usePreviewState();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadState, setUploadState] = useState<
    "idle" | "uploading" | "success" | "error"
  >("idle");
  const [manualEntryOpen, setManualEntryOpen] = useState(false);

  useEffect(() => {
    if (uploadState !== "uploading") {
      return;
    }

    const interval = window.setInterval(() => {
      setUploadProgress((current) => {
        if (current >= 100) {
          window.clearInterval(interval);
          setUploadState("success");
          return 100;
        }
        return Math.min(current + 14, 100);
      });
    }, 240);

    return () => window.clearInterval(interval);
  }, [uploadState]);

  function beginUpload(file?: File) {
    if (!file) {
      return;
    }

    setFileName(file.name);
    setUploadProgress(0);

    if (file.type !== "application/pdf" || file.size > 12 * 1024 * 1024) {
      setUploadState("error");
      return;
    }

    setUploadState("uploading");
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setDragging(false);
    beginUpload(event.dataTransfer.files[0]);
  }

  const showSystemBanner = isPlanLimit || isPermissionDenied;

  return (
    <div className="min-h-full editorial-paper">
      <AppNav />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div>
            <Badge variant="outline" className="mb-4">
              Manual fallback
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Manual PDF Upload
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              When an email sync misses a document or a bank changes its format,
              upload the source PDF directly. FinTrack reads it into your review
              queue and keeps the original in your vault.
            </p>
          </div>
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Editorial fallback</CardTitle>
              <CardDescription className="text-primary-foreground/70">
                A calm rescue path for messy statements, unsupported issuers,
                and one-off PDFs.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {showSystemBanner && (
          <StatusBanners
            planMessage="Manual uploads are paused because your monthly statement limit has been reached."
            permissionMessage="You need upload access to add statement PDFs to this workspace."
          />
        )}

        {isLoading ? (
          <UploadSkeleton />
        ) : isEmpty ? (
          <EmptyState
            title="No statement selected"
            description="Choose a PDF statement to begin parsing, or enter the data manually if the original file is unavailable."
            action={
              <Button onClick={() => setManualEntryOpen(true)}>
                Manual Data Entry
              </Button>
            }
          />
        ) : isError ? (
          <UploadErrorState
            onRetry={() => setState("ready")}
            onManualEntry={() => setManualEntryOpen(true)}
          />
        ) : (
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            <section className="space-y-6">
              <label
                onDragOver={(event) => {
                  event.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                className={`group flex min-h-[360px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed bg-card p-8 text-center shadow-sm transition-all ${
                  dragging
                    ? "border-primary bg-secondary"
                    : "border-border hover:border-primary/60 hover:bg-white"
                }`}
              >
                <span className="flex size-20 items-center justify-center rounded-2xl bg-secondary transition-transform group-hover:scale-105">
                  <UploadCloud className="size-9" />
                </span>
                <span className="mt-6 text-2xl font-semibold tracking-tight">
                  Drop your PDF statement here
                </span>
                <span className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                  Or browse from your device. We will validate format and size
                  before sending it into the review queue.
                </span>
                <span className="mt-6 inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                  <FileUp className="mr-2 size-4" />
                  Choose PDF
                </span>
                <Input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  className="sr-only"
                  onChange={(event) => beginUpload(event.target.files?.[0])}
                  disabled={isPlanLimit || isPermissionDenied}
                />
              </label>

              <UploadProgressPanel
                fileName={fileName}
                progress={uploadProgress}
                state={uploadState}
                onRetry={() => {
                  setUploadState("idle");
                  setUploadProgress(0);
                  fileInputRef.current?.click();
                }}
                onManualEntry={() => setManualEntryOpen(true)}
              />
            </section>

            <aside className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Supported formats</CardTitle>
                  <CardDescription>
                    Best results come from original monthly statements.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {supportedFormatItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 text-emerald-700" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-paper-warm/80">
                <CardHeader>
                  <CardTitle>What happens next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    The PDF is parsed into credit card, investment, and NPS
                    fields. You review the values before they touch your
                    dashboard.
                  </p>
                  <p>
                    If parsing fails, manual entry keeps you moving while our
                    parser catches up.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/review">
                      Go to review
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        )}
      </main>

      <ManualDataEntryModal
        open={manualEntryOpen}
        onOpenChange={setManualEntryOpen}
      />
    </div>
  );
}

function UploadProgressPanel({
  fileName,
  progress,
  state,
  onRetry,
  onManualEntry,
}: {
  fileName: string;
  progress: number;
  state: "idle" | "uploading" | "success" | "error";
  onRetry: () => void;
  onManualEntry: () => void;
}) {
  if (state === "idle") {
    return (
      <Alert>
        <FileText />
        <AlertTitle>Size limits</AlertTitle>
        <AlertDescription>
          Upload one PDF at a time. Maximum size is 12 MB; password-protected
          statements should be unlocked before upload.
        </AlertDescription>
      </Alert>
    );
  }

  if (state === "error") {
    return (
      <Alert variant="destructive">
        <AlertCircle />
        <AlertTitle>Upload failed</AlertTitle>
        <AlertDescription className="flex flex-wrap items-center gap-3">
          <span>
            {fileName
              ? `${fileName} could not be uploaded. Check that it is an unlocked PDF under 12 MB.`
              : "The statement could not be uploaded."}
          </span>
          <Button size="sm" variant="outline" onClick={onRetry}>
            <RefreshCw className="size-3.5" />
            Retry
          </Button>
          <Button size="sm" onClick={onManualEntry}>
            Manual Data Entry
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (state === "success") {
    return (
      <Alert className="border-emerald-300 bg-emerald-50 text-emerald-950">
        <CheckCircle2 className="text-emerald-700" />
        <AlertTitle>Upload complete</AlertTitle>
        <AlertDescription className="flex flex-wrap items-center gap-3">
          <span>
            {fileName} is ready for review. Confirm the parsed values before
            saving.
          </span>
          <Button size="sm" asChild>
            <Link href="/review">
              Continue to review
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Uploading {fileName}</CardTitle>
        <CardDescription>Validating and queueing the PDF parser.</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={progress} />
        <p className="mt-2 text-xs text-muted-foreground">{progress}% complete</p>
      </CardContent>
    </Card>
  );
}

function UploadErrorState({
  onRetry,
  onManualEntry,
}: {
  onRetry: () => void;
  onManualEntry: () => void;
}) {
  return (
    <EmptyState
      title="Upload service is unavailable"
      description="Retry the PDF upload flow, or enter the statement values manually while we reconnect to the parser."
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
          <Button onClick={onManualEntry}>Manual Data Entry</Button>
        </div>
      }
    />
  );
}

function UploadSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-6">
        <Skeleton className="h-[360px] rounded-2xl" />
        <Skeleton className="h-20 rounded-xl" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-52 rounded-xl" />
        <Skeleton className="h-48 rounded-xl" />
      </div>
    </div>
  );
}
