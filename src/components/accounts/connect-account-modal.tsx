"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AlertCircle,
  Check,
  HelpCircle,
  Loader2,
  Lock,
  Shield,
  Sparkles,
} from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePreviewState } from "@/lib/state-preview";

const providers = [
  "Gmail",
  "ICICI",
  "HDFC",
  "Axis",
  "CDSL",
  "NSDL",
  "Other",
];

export function ConnectAccountModal({
  open,
  onOpenChange,
  onConnect,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConnect?: (provider: string) => void;
}) {
  const { isLoading, isError, isPlanLimit, isPermissionDenied, setState } =
    usePreviewState();
  const [provider, setProvider] = useState("Gmail");
  const [connecting, setConnecting] = useState(false);

  const blocked = isLoading || isPlanLimit || isPermissionDenied || connecting;

  async function handleConnect() {
    if (blocked) return;
    setConnecting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    onConnect?.(provider);
    setConnecting(false);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-secondary">
            <Shield className="size-5" />
          </div>
          <DialogTitle>Connect an account</DialogTitle>
          <DialogDescription>
            Choose a provider and approve read-only access so FinTrack can sync
            statements and balances.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-12 w-3/4" />
          </div>
        ) : (
          <div className="space-y-5">
            {isError && (
              <Alert variant="destructive">
                <AlertCircle />
                <AlertTitle>Connection failed</AlertTitle>
                <AlertDescription>
                  We could not start the secure connection. Retry or contact
                  support if this keeps happening.
                </AlertDescription>
              </Alert>
            )}
            {isPlanLimit && (
              <Alert className="border-amber-300 bg-amber-50 text-amber-950">
                <Sparkles className="text-amber-700" />
                <AlertTitle>Account limit reached</AlertTitle>
                <AlertDescription>
                  Your current plan has no remaining account slots. Upgrade to
                  add another provider.
                </AlertDescription>
              </Alert>
            )}
            {isPermissionDenied && (
              <Alert className="border-rose-300 bg-rose-50 text-rose-950">
                <Lock className="text-rose-700" />
                <AlertTitle>Permission denied</AlertTitle>
                <AlertDescription>
                  Re-authenticate before connecting a new provider.
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <label
                htmlFor="provider"
                className="text-sm font-medium text-foreground"
              >
                Provider
              </label>
              <Select value={provider} onValueChange={setProvider}>
                <SelectTrigger id="provider" className="h-10 w-full">
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  {providers.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-xl border border-border bg-paper/70 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium">Permissions summary</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    FinTrack requests read-only access to statements, balances,
                    holdings, and sync metadata.
                  </p>
                </div>
                <Badge variant="secondary">Read-only</Badge>
              </div>
              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                {[
                  "Import statements",
                  "Read account balances",
                  "Detect payment dues",
                  "Store sync history",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Button variant="link" className="h-auto p-0" asChild>
              <Link href="/accounts#supported-banks">
                <HelpCircle className="size-4" />
                View supported banks
              </Link>
            </Button>
          </div>
        )}

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleConnect} disabled={blocked}>
            {(connecting || isLoading) && (
              <Loader2 className="size-4 animate-spin" />
            )}
            Connect
          </Button>
          {isError && (
            <Button
              type="button"
              variant="ghost"
              onClick={() => setState("ready")}
            >
              Retry
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
