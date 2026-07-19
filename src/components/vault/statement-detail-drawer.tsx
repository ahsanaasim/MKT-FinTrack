"use client";

import {
  Calendar,
  Clock,
  Database,
  Download,
  FileJson,
  FileText,
  Lock,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { Statement } from "@/lib/mock-data";
import { formatDate } from "@/lib/mock-data";

type StatementDetailDrawerProps = {
  statement: Statement | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete?: (statement: Statement) => void;
};

function formatFileSize(sizeKb: number) {
  if (sizeKb >= 1024) {
    return `${(sizeKb / 1024).toFixed(1)} MB`;
  }

  return `${sizeKb} KB`;
}

function formatTimestamp(iso: string) {
  return `${formatDate(iso)} at ${new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso))}`;
}

export function StatementDetailDrawer({
  statement,
  open,
  onOpenChange,
  onDelete,
}: StatementDetailDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
        {statement ? (
          <>
            <SheetHeader className="border-b border-border/80 pr-12">
              <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Lock className="size-5" />
              </div>
              <SheetTitle className="text-2xl leading-tight">
                {statement.fileName}
              </SheetTitle>
              <SheetDescription>
                Encrypted statement from {statement.institution}, stored in your
                private vault.
              </SheetDescription>
            </SheetHeader>

            <div className="space-y-6 px-4">
              <section className="rounded-2xl border border-border bg-paper/70 p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Badge variant="secondary">{statement.type}</Badge>
                  <Badge variant="outline" className="gap-1">
                    <ShieldCheck className="size-3" />
                    AES-256
                  </Badge>
                </div>
                <dl className="grid gap-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 size-4 text-muted-foreground" />
                    <div>
                      <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Statement period
                      </dt>
                      <dd className="font-medium">
                        {formatDate(statement.periodStart)} -{" "}
                        {formatDate(statement.periodEnd)}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-4 text-muted-foreground" />
                    <div>
                      <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Uploaded timestamp
                      </dt>
                      <dd className="font-medium">
                        {formatTimestamp(statement.uploadedAt)}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="mt-0.5 size-4 text-muted-foreground" />
                    <div>
                      <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Metadata
                      </dt>
                      <dd className="font-medium">
                        {statement.institution} · {formatFileSize(statement.sizeKb)}
                      </dd>
                    </div>
                  </div>
                </dl>
              </section>

              <section>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-medium tracking-tight">Secure preview</h3>
                  <Badge variant="outline">Read-only</Badge>
                </div>
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  <div className="border-b border-border bg-secondary px-4 py-3">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <FileText className="size-4" />
                      Statement preview
                    </div>
                  </div>
                  <div className="space-y-4 p-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        {statement.institution}
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-tight">
                        {statement.type}
                      </p>
                    </div>
                    <Separator />
                    <div className="grid gap-3 text-sm">
                      <div className="flex justify-between gap-3">
                        <span className="text-muted-foreground">File</span>
                        <span className="text-right font-medium">
                          {statement.fileName}
                        </span>
                      </div>
                      <div className="flex justify-between gap-3">
                        <span className="text-muted-foreground">Vault ID</span>
                        <span className="font-mono text-xs">{statement.id}</span>
                      </div>
                      <div className="flex justify-between gap-3">
                        <span className="text-muted-foreground">Integrity</span>
                        <span className="font-medium text-emerald-700">
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <SheetFooter className="border-t border-border/80">
              <div className="grid grid-cols-2 gap-2">
                <Button className="w-full">
                  <Download className="size-4" />
                  Download PDF
                </Button>
                <Button variant="outline" className="w-full">
                  <FileJson className="size-4" />
                  JSON
                </Button>
              </div>
              <Button
                variant="destructive"
                className="w-full justify-center"
                onClick={() => onDelete?.(statement)}
              >
                <Trash2 className="size-4" />
                Delete statement
              </Button>
            </SheetFooter>
          </>
        ) : (
          <SheetHeader>
            <SheetTitle>No statement selected</SheetTitle>
            <SheetDescription>
              Choose a statement card to inspect its encrypted metadata.
            </SheetDescription>
          </SheetHeader>
        )}
      </SheetContent>
    </Sheet>
  );
}
