"use client";

import Link from "next/link";
import {
  AlertCircle,
  BellRing,
  CalendarClock,
  Check,
  CreditCard,
  FileText,
  Tag,
  WalletCards,
  X,
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
import { cn } from "@/lib/utils";
import {
  formatCurrency,
  formatDate,
  type NotificationItem,
} from "@/lib/mock-data";

type NotificationDetailDrawerProps = {
  notification: NotificationItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDismiss?: (notification: NotificationItem) => void;
};

const typeLabels: Record<NotificationItem["type"], string> = {
  payment: "Payment",
  sync: "Sync",
  system: "System",
  investment: "Investment",
};

const typeStyles: Record<NotificationItem["type"], string> = {
  payment: "bg-primary text-primary-foreground",
  sync: "bg-amber-100 text-amber-950",
  system: "bg-secondary text-secondary-foreground",
  investment: "bg-emerald-100 text-emerald-950",
};

function TypeBadge({ type }: { type: NotificationItem["type"] }) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-full px-3 text-xs font-medium",
        typeStyles[type]
      )}
    >
      {typeLabels[type]}
    </span>
  );
}

function formatTimestamp(iso: string) {
  return `${formatDate(iso)} at ${new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso))}`;
}

export function NotificationDetailDrawer({
  notification,
  open,
  onOpenChange,
  onDismiss,
}: NotificationDetailDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
        {notification ? (
          <>
            <SheetHeader className="border-b border-border/80 pr-12">
              <div className="mb-3 flex items-center gap-2">
                <TypeBadge type={notification.type} />
                {!notification.read && (
                  <Badge className="bg-rose-600 text-white hover:bg-rose-600">
                    Unread
                  </Badge>
                )}
              </div>
              <SheetTitle className="text-2xl leading-tight">
                {notification.title}
              </SheetTitle>
              <SheetDescription className="flex items-center gap-2">
                <CalendarClock className="size-4" />
                {formatTimestamp(notification.at)}
              </SheetDescription>
            </SheetHeader>

            <div className="space-y-6 px-4">
              <section className="rounded-2xl border border-border bg-paper/70 p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                  <BellRing className="size-4" />
                  Full message
                </div>
                <p className="text-lg leading-relaxed tracking-tight">
                  {notification.body}
                </p>
              </section>

              {(notification.dueAmount || notification.dueDate) && (
                <section className="grid gap-3 sm:grid-cols-2">
                  {notification.dueAmount && (
                    <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                      <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <WalletCards className="size-4" />
                      </div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Due amount
                      </p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight">
                        {formatCurrency(notification.dueAmount)}
                      </p>
                    </div>
                  )}
                  {notification.dueDate && (
                    <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                      <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-secondary">
                        <CalendarClock className="size-4" />
                      </div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Due date
                      </p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight">
                        {formatDate(notification.dueDate)}
                      </p>
                    </div>
                  )}
                </section>
              )}

              <section className="space-y-3">
                <h3 className="flex items-center gap-2 font-medium tracking-tight">
                  <Tag className="size-4" />
                  Badges
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{typeLabels[notification.type]}</Badge>
                  <Badge variant="secondary">
                    {notification.read ? "Read" : "Needs attention"}
                  </Badge>
                  {notification.paymentStatus && (
                    <Badge className="bg-amber-100 text-amber-950 hover:bg-amber-100">
                      {notification.paymentStatus}
                    </Badge>
                  )}
                  {notification.statementSource && (
                    <Badge variant="outline">
                      Source: {notification.statementSource}
                    </Badge>
                  )}
                </div>
              </section>

              <Separator />

              <section className="rounded-2xl bg-secondary p-4">
                <div className="mb-2 flex items-center gap-2 font-medium">
                  <AlertCircle className="size-4" />
                  Suggested next step
                </div>
                <p className="text-sm text-muted-foreground">
                  {notification.actionLabel
                    ? `${notification.actionLabel} to resolve this notification.`
                    : "No action is required. Keep this message for your records or dismiss it."}
                </p>
              </section>
            </div>

            <SheetFooter className="border-t border-border/80">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {notification.type === "payment" && (
                  <Button asChild>
                    <Link href={notification.actionHref ?? "/payments"}>
                      <CreditCard className="size-4" />
                      Pay now
                    </Link>
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <Link href="/vault">
                    <FileText className="size-4" />
                    View statement
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {notification.actionHref && notification.type !== "payment" && (
                  <Button asChild>
                    <Link href={notification.actionHref}>
                      <Check className="size-4" />
                      {notification.actionLabel ?? "Open action"}
                    </Link>
                  </Button>
                )}
                <Button
                  variant="destructive"
                  onClick={() => onDismiss?.(notification)}
                >
                  <X className="size-4" />
                  Dismiss
                </Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <SheetHeader>
            <SheetTitle>No notification selected</SheetTitle>
            <SheetDescription>
              Choose a notification card to read the full message.
            </SheetDescription>
          </SheetHeader>
        )}
      </SheetContent>
    </Sheet>
  );
}
