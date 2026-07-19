"use client";

import Link from "next/link";
import {
  AlertCircle,
  AlertTriangle,
  Lock,
  RefreshCw,
  ShieldAlert,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { usePreviewState } from "@/lib/state-preview";

export function StatusBanners({
  onRetry,
  planMessage = "You've reached your plan limit. Upgrade to connect more accounts and unlock premium actions.",
  permissionMessage = "You don't have permission to view this content. Please re-authenticate or contact support.",
}: {
  onRetry?: () => void;
  planMessage?: string;
  permissionMessage?: string;
}) {
  const { isError, isPlanLimit, isPermissionDenied, setState } =
    usePreviewState();

  if (isError) {
    return (
      <Alert variant="destructive" className="mb-6">
        <AlertCircle />
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription className="flex flex-wrap items-center gap-3">
          <span>We couldn&apos;t load this page. Check your connection and try again.</span>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              onRetry?.();
              setState("ready");
            }}
          >
            <RefreshCw className="size-3.5" />
            Retry
          </Button>
          <Link href="mailto:support@fintrack.app" className="text-sm underline">
            Contact support
          </Link>
        </AlertDescription>
      </Alert>
    );
  }

  if (isPlanLimit) {
    return (
      <Alert className="mb-6 border-amber-300 bg-amber-50 text-amber-950">
        <AlertTriangle className="text-amber-700" />
        <AlertTitle>Plan limit reached</AlertTitle>
        <AlertDescription className="flex flex-wrap items-center gap-3">
          <span>{planMessage}</span>
          <Button size="sm">Upgrade plan</Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (isPermissionDenied) {
    return (
      <Alert className="mb-6 border-rose-300 bg-rose-50 text-rose-950">
        <ShieldAlert className="text-rose-700" />
        <AlertTitle>Permission denied</AlertTitle>
        <AlertDescription className="flex flex-wrap items-center gap-3">
          <span>{permissionMessage}</span>
          <Button size="sm" variant="outline" asChild>
            <Link href="/auth/login">
              <Lock className="size-3.5" />
              Re-authenticate
            </Link>
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return null;
}

export function EmptyState({
  title,
  description,
  action,
  illustration,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
  illustration?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-paper/60 px-6 py-16 text-center animate-fade-up">
      {illustration ?? (
        <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-secondary">
          <span className="text-3xl font-light text-muted-foreground">∅</span>
        </div>
      )}
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
