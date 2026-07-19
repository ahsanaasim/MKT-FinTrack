"use client";

import { useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  HelpCircle,
  Loader2,
  RefreshCw,
  XCircle,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { EmptyState } from "@/components/layout/status";
import { usePreviewState } from "@/lib/state-preview";
import {
  formatDateTime,
  syncHistory,
  type AccountIntegration,
} from "@/lib/mock-data";

function SyncStatusBadge({ status }: { status: "success" | "error" }) {
  if (status === "success") {
    return (
      <Badge variant="secondary" className="bg-zinc-100 text-zinc-900">
        <CheckCircle className="size-3" />
        Synced
      </Badge>
    );
  }

  return (
    <Badge variant="destructive">
      <XCircle className="size-3" />
      Error
    </Badge>
  );
}

export function SyncHistoryDrawer({
  integration,
  open,
  onOpenChange,
}: {
  integration: AccountIntegration | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { isLoading, isEmpty, isError, setState } = usePreviewState();
  const [syncing, setSyncing] = useState(false);
  const lastSuccessfulSync = useMemo(
    () => syncHistory.find((item) => item.status === "success"),
    []
  );

  async function handleManualSync() {
    if (isLoading || syncing) return;
    setSyncing(true);
    await new Promise((resolve) => setTimeout(resolve, 750));
    setSyncing(false);
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-xl">
        <SheetHeader className="border-b">
          <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-secondary">
            <Clock className="size-5" />
          </div>
          <SheetTitle>{integration?.institution ?? "Sync history"}</SheetTitle>
          <SheetDescription>
            {integration?.email
              ? `${integration.email} · last sync ${
                  integration.lastSync
                    ? formatDateTime(integration.lastSync)
                    : "not yet available"
                }`
              : "Recent import attempts and provider responses."}
          </SheetDescription>
        </SheetHeader>

        <div className="px-4">
          {isLoading ? (
            <div className="space-y-4 py-4">
              {[1, 2, 3, 4].map((item) => (
                <Skeleton key={item} className="h-20 w-full" />
              ))}
            </div>
          ) : isError ? (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle />
              <AlertTitle>History unavailable</AlertTitle>
              <AlertDescription>
                We could not load sync history for this integration.
              </AlertDescription>
            </Alert>
          ) : isEmpty ? (
            <div className="py-4">
              <EmptyState
                title="No syncs yet"
                description="Run a manual sync to start collecting statements and balances for this provider."
                illustration={
                  <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-secondary">
                    <RefreshCw className="size-8 text-muted-foreground" />
                  </div>
                }
              />
            </div>
          ) : (
            <>
              <div className="my-4 rounded-xl border border-border bg-paper/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Last successful sync
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight">
                  {lastSuccessfulSync
                    ? formatDateTime(lastSuccessfulSync.at)
                    : "Not available"}
                </p>
                {integration?.syncError && (
                  <div className="mt-3 flex items-center gap-2 text-sm text-destructive">
                    <AlertCircle className="size-4" />
                    {integration.syncError}
                  </div>
                )}
              </div>

              <ScrollArea className="h-[calc(100vh-22rem)] pr-3">
                <ol className="relative space-y-5 border-l border-border pl-5">
                  {syncHistory.map((item) => (
                    <li key={item.id} className="relative">
                      <span className="absolute -left-[1.72rem] top-1 flex size-4 items-center justify-center rounded-full border border-border bg-background">
                        <span className="size-1.5 rounded-full bg-primary" />
                      </span>
                      <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="font-medium">{item.message}</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {formatDateTime(item.at)}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <SyncStatusBadge status={item.status} />
                            {item.error && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button
                                    type="button"
                                    className="text-muted-foreground hover:text-foreground"
                                    aria-label="View sync error"
                                  >
                                    <HelpCircle className="size-4" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent>{item.error}</TooltipContent>
                              </Tooltip>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </ScrollArea>
            </>
          )}
        </div>

        <SheetFooter className="border-t">
          {isError ? (
            <Button variant="outline" onClick={() => setState("ready")}>
              Retry
            </Button>
          ) : (
            <Button onClick={handleManualSync} disabled={isLoading || syncing}>
              {(isLoading || syncing) && (
                <Loader2 className="size-4 animate-spin" />
              )}
              Manual sync
            </Button>
          )}
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
