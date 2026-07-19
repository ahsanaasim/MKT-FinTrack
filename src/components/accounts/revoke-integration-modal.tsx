"use client";

import { useState } from "react";
import { AlertCircle, AlertTriangle, Loader2, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePreviewState } from "@/lib/state-preview";
import type { AccountIntegration } from "@/lib/mock-data";

export function RevokeIntegrationModal({
  integration,
  open,
  onOpenChange,
  onConfirm,
}: {
  integration: AccountIntegration | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm?: (integration: AccountIntegration) => void;
}) {
  const { isLoading, isError, setState } = usePreviewState();
  const [revoking, setRevoking] = useState(false);
  const name = integration?.institution ?? "this integration";

  async function handleConfirm() {
    if (!integration || isLoading || revoking) return;
    setRevoking(true);
    await new Promise((resolve) => setTimeout(resolve, 650));
    onConfirm?.(integration);
    setRevoking(false);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
            <AlertTriangle className="size-5" />
          </div>
          <DialogTitle>Revoke {name}</DialogTitle>
          <DialogDescription>
            This will stop future syncs and disconnect the provider from
            FinTrack.
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-3">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        ) : (
          <div className="space-y-4">
            {isError && (
              <Alert variant="destructive">
                <AlertCircle />
                <AlertTitle>Could not revoke integration</AlertTitle>
                <AlertDescription>
                  The revoke request did not complete. Retry once your
                  connection is stable.
                </AlertDescription>
              </Alert>
            )}

            <div className="rounded-xl border border-border bg-paper/70 p-4">
              <p className="text-sm text-muted-foreground">Integration</p>
              <p className="mt-1 text-lg font-semibold tracking-tight">
                {name}
              </p>
              {integration?.email && (
                <p className="text-sm text-muted-foreground">
                  {integration.email}
                </p>
              )}
            </div>

            <div className="space-y-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-sm">
              <div className="flex gap-2">
                <Trash2 className="mt-0.5 size-4 text-destructive" />
                <div>
                  <p className="font-medium">What happens next</p>
                  <p className="mt-1 text-muted-foreground">
                    New statements will no longer import automatically. Existing
                    parsed transactions, vault files, and dashboard history stay
                    available unless you delete them separately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          {isError ? (
            <Button variant="ghost" onClick={() => setState("ready")}>
              Retry
            </Button>
          ) : (
            <Button
              variant="destructive"
              onClick={handleConfirm}
              disabled={!integration || isLoading || revoking}
            >
              {(isLoading || revoking) && (
                <Loader2 className="size-4 animate-spin" />
              )}
              Confirm revoke
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
