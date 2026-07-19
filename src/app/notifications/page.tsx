"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Bell,
  BellRing,
  CalendarDays,
  CheckCheck,
  CreditCard,
  FileText,
  RefreshCw,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { AppNav } from "@/components/layout/nav";
import { EmptyState, StatusBanners } from "@/components/layout/status";
import { NotificationDetailDrawer } from "@/components/notifications/notification-detail-drawer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { usePreviewState } from "@/lib/state-preview";
import {
  formatCurrency,
  formatDate,
  notifications,
  type NotificationItem,
} from "@/lib/mock-data";

const notificationTypes = [
  "All",
  "payment",
  "sync",
  "system",
  "investment",
] as const;

const dateRanges = ["Any time", "Today", "Last 7 days", "This month"] as const;

type NotificationType = (typeof notificationTypes)[number];
type DateRange = (typeof dateRanges)[number];

const typeLabels: Record<NotificationItem["type"], string> = {
  payment: "Payment",
  sync: "Sync",
  system: "System",
  investment: "Investment",
};

const typeStyles: Record<NotificationItem["type"], string> = {
  payment: "border-primary bg-primary text-primary-foreground",
  sync: "border-amber-200 bg-amber-50 text-amber-950",
  system: "border-border bg-secondary text-secondary-foreground",
  investment: "border-emerald-200 bg-emerald-50 text-emerald-950",
};

function isInDateRange(notification: NotificationItem, range: DateRange) {
  if (range === "Any time") {
    return true;
  }

  const createdAt = new Date(notification.at);
  const now = new Date("2026-07-19T12:00:00Z");

  if (range === "Today") {
    return createdAt.toDateString() === now.toDateString();
  }

  if (range === "This month") {
    return (
      createdAt.getUTCFullYear() === now.getUTCFullYear() &&
      createdAt.getUTCMonth() === now.getUTCMonth()
    );
  }

  const cutoff = new Date(now);
  cutoff.setUTCDate(cutoff.getUTCDate() - 7);
  return createdAt >= cutoff;
}

function NotificationTypeFilter({
  value,
  onChange,
}: {
  value: NotificationType;
  onChange: (value: NotificationType) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Notification type
      </p>
      <div className="flex flex-wrap gap-2">
        {notificationTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => onChange(type)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm capitalize transition-colors",
              value === type
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-white text-muted-foreground hover:text-foreground"
            )}
          >
            {type === "All" ? "All" : typeLabels[type]}
          </button>
        ))}
      </div>
    </div>
  );
}

function DateRangeFilter({
  value,
  onChange,
}: {
  value: DateRange;
  onChange: (value: DateRange) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Date range
      </p>
      <div className="flex flex-wrap gap-2">
        {dateRanges.map((range) => (
          <button
            key={range}
            type="button"
            onClick={() => onChange(range)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors",
              value === range
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-white text-muted-foreground hover:text-foreground"
            )}
          >
            <CalendarDays className="size-3.5" />
            {range}
          </button>
        ))}
      </div>
    </div>
  );
}

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Search feed
      </span>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search messages, source, or action"
          className="h-9 bg-white pl-9"
        />
      </div>
    </label>
  );
}

function MarkAllAsReadButton({
  disabled,
  onClick,
}: {
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      <CheckCheck className="size-4" />
      Mark all as read
    </Button>
  );
}

function NotificationSkeletons() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4].map((item) => (
        <Skeleton key={item} className="h-44 rounded-2xl" />
      ))}
    </div>
  );
}

function NotificationCard({
  notification,
  onOpen,
  onDismiss,
}: {
  notification: NotificationItem;
  onOpen: (notification: NotificationItem) => void;
  onDismiss: (notification: NotificationItem) => void;
}) {
  const unread = !notification.read;

  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={() => onOpen(notification)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(notification);
        }
      }}
      className={cn(
        "cursor-pointer gap-0 border bg-white py-0 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-3 focus-visible:ring-ring/50",
        unread ? "border-primary/30" : "border-border/80"
      )}
    >
      <CardContent className="p-0">
        <div className="grid gap-0 md:grid-cols-[0.35fr_1fr]">
          <div
            className={cn(
              "flex min-h-40 flex-col justify-between border-b border-border p-5 md:border-b-0 md:border-r",
              unread ? "bg-primary text-primary-foreground" : "bg-secondary"
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <span
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium",
                  unread
                    ? "border-white/20 bg-white/10 text-white"
                    : typeStyles[notification.type]
                )}
              >
                {typeLabels[notification.type]}
              </span>
              {unread && (
                <span className="rounded-full bg-white px-2 py-1 text-xs font-medium text-primary">
                  Unread
                </span>
              )}
            </div>
            <div>
              <p
                className={cn(
                  "text-xs uppercase tracking-[0.2em]",
                  unread ? "text-white/60" : "text-muted-foreground"
                )}
              >
                Published
              </p>
              <p className="mt-1 text-lg font-semibold">
                {formatDate(notification.at)}
              </p>
            </div>
          </div>
          <div className="p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold leading-tight tracking-tight">
                  {notification.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {notification.body}
                </p>
              </div>
              <BellRing
                className={cn(
                  "size-5",
                  unread ? "text-primary" : "text-muted-foreground"
                )}
              />
            </div>

            {(notification.dueAmount || notification.statementSource) && (
              <div className="mt-5 flex flex-wrap gap-2">
                {notification.dueAmount && (
                  <Badge variant="secondary">
                    Due {formatCurrency(notification.dueAmount)}
                  </Badge>
                )}
                {notification.dueDate && (
                  <Badge variant="outline">
                    Due date {formatDate(notification.dueDate)}
                  </Badge>
                )}
                {notification.statementSource && (
                  <Badge variant="outline">
                    Source {notification.statementSource}
                  </Badge>
                )}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {notification.type === "payment" && (
                <Button
                  size="sm"
                  asChild
                  onClick={(event) => event.stopPropagation()}
                >
                  <Link href={notification.actionHref ?? "/payments"}>
                    <CreditCard className="size-3.5" />
                    Pay now
                  </Link>
                </Button>
              )}
              <Button
                size="sm"
                variant="outline"
                asChild
                onClick={(event) => event.stopPropagation()}
              >
                <Link href="/vault">
                  <FileText className="size-3.5" />
                  View statement
                </Link>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={(event) => {
                  event.stopPropagation();
                  onDismiss(notification);
                }}
              >
                <X className="size-3.5" />
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function NotificationsPage() {
  const { isLoading, isEmpty, isError, setState } = usePreviewState();
  const [type, setType] = useState<NotificationType>("All");
  const [dateRange, setDateRange] = useState<DateRange>("Any time");
  const [query, setQuery] = useState("");
  const [readIds, setReadIds] = useState<Set<string>>(new Set());
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());
  const [selectedNotification, setSelectedNotification] =
    useState<NotificationItem | null>(null);

  const visibleNotifications = useMemo(
    () =>
      notifications
        .filter((notification) => !dismissedIds.has(notification.id))
        .map((notification) => ({
          ...notification,
          read: notification.read || readIds.has(notification.id),
        })),
    [dismissedIds, readIds]
  );

  const filteredNotifications = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return visibleNotifications.filter((notification) => {
      const matchesType = type === "All" || notification.type === type;
      const matchesDate = isInDateRange(notification, dateRange);
      const matchesSearch =
        normalizedQuery.length === 0 ||
        [
          notification.title,
          notification.body,
          notification.type,
          notification.statementSource ?? "",
          notification.actionLabel ?? "",
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesType && matchesDate && matchesSearch;
    });
  }, [dateRange, query, type, visibleNotifications]);

  const unreadCount = visibleNotifications.filter(
    (notification) => !notification.read
  ).length;

  const openNotification = (notification: NotificationItem) => {
    setReadIds((current) => new Set(current).add(notification.id));
    setSelectedNotification({ ...notification, read: true });
  };

  const dismissNotification = (notification: NotificationItem) => {
    setDismissedIds((current) => new Set(current).add(notification.id));
    if (selectedNotification?.id === notification.id) {
      setSelectedNotification(null);
    }
  };

  const resetFilters = () => {
    setType("All");
    setDateRange("Any time");
    setQuery("");
  };

  return (
    <div className="min-h-full editorial-paper">
      <AppNav />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12">
        <StatusBanners
          onRetry={() => setState("ready")}
          permissionMessage="Notifications are hidden until this session is re-authenticated."
        />

        <section className="mb-8 rounded-3xl border border-border bg-white/85 p-6 shadow-sm backdrop-blur sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                <Bell className="size-4" />
                Editorial Notification Feed
              </div>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Alerts written like a front page, ordered by urgency.
              </h1>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Payment reminders, sync issues, system notices, and investment
                updates stay readable without collapsing into an admin table.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <MarkAllAsReadButton
                disabled={isLoading || unreadCount === 0}
                onClick={() =>
                  setReadIds(new Set(notifications.map((item) => item.id)))
                }
              />
              <Badge variant="outline" className="h-8 px-3">
                {unreadCount} unread
              </Badge>
            </div>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-border bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5">
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <NotificationTypeFilter value={type} onChange={setType} />
            <DateRangeFilter value={dateRange} onChange={setDateRange} />
            <div className="lg:col-span-2">
              <SearchInput value={query} onChange={setQuery} />
            </div>
          </div>
        </section>

        {isLoading ? (
          <NotificationSkeletons />
        ) : isError ? (
          <EmptyState
            title="Notifications could not be loaded"
            description="Retry from the alert above to refresh your notification feed."
            illustration={
              <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-rose-50 text-rose-700">
                <RefreshCw className="size-9" />
              </div>
            }
          />
        ) : isEmpty || visibleNotifications.length === 0 ? (
          <EmptyState
            title="All quiet for now"
            description="Payment reminders, statement syncs, and system notices will appear here when they need attention."
            illustration={
              <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-secondary">
                <Sparkles className="size-9 text-muted-foreground" />
              </div>
            }
          />
        ) : filteredNotifications.length === 0 ? (
          <EmptyState
            title="No notifications match these filters"
            description="Try another type, date range, or search term."
            action={
              <Button variant="outline" onClick={resetFilters}>
                Clear filters
              </Button>
            }
          />
        ) : (
          <section className="space-y-4">
            {filteredNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                onOpen={openNotification}
                onDismiss={dismissNotification}
              />
            ))}
          </section>
        )}
      </main>

      <NotificationDetailDrawer
        notification={selectedNotification}
        open={Boolean(selectedNotification)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedNotification(null);
          }
        }}
        onDismiss={dismissNotification}
      />
    </div>
  );
}
