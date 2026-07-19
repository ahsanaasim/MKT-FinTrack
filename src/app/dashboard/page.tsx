"use client";

import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Bell,
  CreditCard,
  Landmark,
  LineChart,
  Loader2,
  PieChart,
  RefreshCw,
  Shield,
  Sparkles,
  Wallet,
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
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { AppNav } from "@/components/layout/nav";
import { EmptyState, StatusBanners } from "@/components/layout/status";
import { usePreviewState } from "@/lib/state-preview";
import {
  dashboardData,
  formatCurrency,
  formatDate,
} from "@/lib/mock-data";

function DashboardHero({ loading }: { loading: boolean }) {
  const data = dashboardData;

  if (loading) {
    return (
      <section className="grid gap-6 rounded-2xl editorial-hero-mesh p-6 text-white shadow-sm md:grid-cols-[1.15fr_0.85fr] md:p-8">
        <div className="space-y-5">
          <Skeleton className="h-5 w-40 bg-white/20" />
          <Skeleton className="h-16 w-72 bg-white/20" />
          <Skeleton className="h-5 w-64 bg-white/15" />
          <div className="flex gap-3">
            <Skeleton className="h-9 w-28 bg-white/20" />
            <Skeleton className="h-9 w-32 bg-white/15" />
          </div>
        </div>
        <Skeleton className="min-h-56 rounded-xl bg-white/10" />
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden rounded-2xl editorial-hero-mesh text-white shadow-sm">
      <div className="grid gap-8 p-6 md:grid-cols-[1.15fr_0.85fr] md:p-8 lg:p-10">
        <div className="relative z-10 animate-fade-up">
          <Badge className="bg-white/15 text-white ring-1 ring-white/20">
            <Sparkles className="size-3" />
            Updated today
          </Badge>
          <p className="mt-8 text-sm uppercase tracking-[0.22em] text-white/60">
            Good morning, {data.userName}
          </p>
          <h1 className="mt-3 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {formatCurrency(data.netWorth)}
          </h1>
          <p className="mt-4 max-w-md text-lg text-white/72">
            Net worth is up {data.netWorthChange}% this month, led by equities
            and steady NPS contributions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/review">
                Review latest
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/vault">Open vault</Link>
            </Button>
          </div>
        </div>

        <div className="relative min-h-72 animate-fade-up stagger-2">
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full border border-white/20" />
          <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-white/10 blur-xl" />
          <div className="relative ml-auto flex h-full max-w-sm flex-col justify-end rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
            <div className="rounded-lg bg-white p-5 text-foreground shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Portfolio movement
                  </p>
                  <p className="mt-2 text-2xl font-semibold">+₹88,520</p>
                </div>
                <LineChart className="size-8 text-zinc-500" />
              </div>
              <div className="mt-5 flex h-28 items-end gap-2">
                {data.mutualFunds.trend.map((value, index) => (
                  <div
                    key={`${value}-${index}`}
                    className="flex-1 rounded-t-md bg-primary"
                    style={{ height: `${value}%`, opacity: 0.32 + index * 0.08 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EditorialSummaryBlocks({ loading }: { loading: boolean }) {
  const data = dashboardData;
  const blocks = [
    {
      label: "NPS",
      value: formatCurrency(data.nps.balance),
      detail: `${data.nps.units.toLocaleString("en-IN")} units`,
      icon: Shield,
      className: "md:col-span-3",
    },
    {
      label: "Mutual funds",
      value: formatCurrency(data.mutualFunds.value),
      detail: `${data.mutualFunds.units.toLocaleString("en-IN")} units`,
      icon: PieChart,
      className: "md:col-span-4 md:translate-y-6",
    },
    {
      label: "Equity",
      value: formatCurrency(data.equity.value),
      detail: `${data.equity.holdings} holdings`,
      icon: Landmark,
      className: "md:col-span-3",
    },
    {
      label: "Credit card due",
      value: formatCurrency(data.creditCard.outstanding),
      detail: `Due ${formatDate(data.creditCard.dueDate)}`,
      icon: CreditCard,
      className: "md:col-span-2 md:translate-y-10",
    },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-12">
      {blocks.map((block) => {
        const Icon = block.icon;
        return (
          <Card
            key={block.label}
            className={`min-h-44 border-border bg-card/95 shadow-sm ${block.className}`}
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardDescription>{block.label}</CardDescription>
                  {loading ? (
                    <Skeleton className="mt-3 h-9 w-36" />
                  ) : (
                    <CardTitle className="mt-3 text-3xl tracking-tight">
                      {block.value}
                    </CardTitle>
                  )}
                </div>
                <div className="flex size-10 items-center justify-center rounded-lg bg-secondary">
                  <Icon className="size-5" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton className="h-4 w-28" />
              ) : (
                <p className="text-sm text-muted-foreground">{block.detail}</p>
              )}
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}

function InvestmentStorySection({ loading }: { loading: boolean }) {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Investment story
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Growth is concentrated, but not crowded
        </h2>
        <p className="mt-4 text-muted-foreground">
          Equities remain the largest contributor, while mutual funds and NPS
          provide the slower-moving base of the portfolio.
        </p>
      </div>

      <Card className="bg-card/95 shadow-sm">
        <CardContent className="pt-2">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <Skeleton key={item} className="h-10 w-full" />
              ))}
            </div>
          ) : (
            <div className="space-y-5">
              {dashboardData.investmentBreakdown.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-muted-foreground">{item.value}%</span>
                  </div>
                  <Progress value={item.value} className="h-2" />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}

function RecentActivityTimeline({ loading }: { loading: boolean }) {
  return (
    <section className="rounded-2xl border border-border bg-card/95 p-6 shadow-sm">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Recent activity
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            What changed lately
          </h2>
        </div>
        <Button variant="outline" asChild>
          <Link href="/notifications">View all</Link>
        </Button>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <Skeleton key={item} className="h-20 w-full" />
          ))}
        </div>
      ) : (
        <ol className="relative space-y-6 border-l border-border pl-6">
          {dashboardData.recentActivity.map((item) => (
            <li key={item.id} className="relative">
              <span className="absolute -left-[1.98rem] top-1 flex size-5 items-center justify-center rounded-full border border-border bg-card">
                <span className="size-2 rounded-full bg-primary" />
              </span>
              <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{item.at}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

function DashboardAlerts() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Alert className="border-zinc-300 bg-white">
        <Bell />
        <AlertTitle>Payment due</AlertTitle>
        <AlertDescription>
          {dashboardData.creditCard.name} {dashboardData.creditCard.masked} has{" "}
          {formatCurrency(dashboardData.creditCard.outstanding)} due on{" "}
          {formatDate(dashboardData.creditCard.dueDate)}.
        </AlertDescription>
      </Alert>
      <Alert className="border-amber-300 bg-amber-50 text-amber-950">
        <AlertCircle className="text-amber-700" />
        <AlertTitle>Connection issue</AlertTitle>
        <AlertDescription className="text-amber-900/80">
          CDSL needs attention after a statement format change. Reconnect or
          upload the latest PDF.
        </AlertDescription>
      </Alert>
    </div>
  );
}

function DashboardCtas() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="bg-primary text-primary-foreground shadow-sm">
        <CardHeader>
          <div className="flex size-11 items-center justify-center rounded-lg bg-white/10">
            <Wallet className="size-5" />
          </div>
          <CardTitle className="text-2xl">Pay the card before it crowds July</CardTitle>
          <CardDescription className="text-white/70">
            Settle the outstanding amount and keep the receipt in your vault.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="bg-white text-primary hover:bg-white/90" asChild>
            <Link href="/payments">
              Pay {formatCurrency(dashboardData.creditCard.outstanding)}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-card/95 shadow-sm">
        <CardHeader>
          <div className="flex size-11 items-center justify-center rounded-lg bg-secondary">
            <RefreshCw className="size-5" />
          </div>
          <CardTitle>Connect the next source</CardTitle>
          <CardDescription>
            Add another bank, broker, or mailbox to keep the story complete.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/accounts">Connect account</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard/onboarding/step-1">Start onboarding</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

function DashboardEmptyState() {
  return (
    <EmptyState
      title="Build your first financial story"
      description="Connect a bank, mailbox, broker, or NPS source to fill this dashboard with your balances, dues, and recent activity."
      illustration={
        <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Landmark className="size-10" />
        </div>
      }
      action={
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/dashboard/onboarding/step-1">Start onboarding</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/accounts">Connect account</Link>
          </Button>
        </div>
      }
    />
  );
}

export default function DashboardPage() {
  const {
    isLoading,
    isEmpty,
    isError,
    isPlanLimit,
    isPermissionDenied,
    setState,
  } = usePreviewState();

  const blocked = isPlanLimit || isPermissionDenied;

  return (
    <div className="flex min-h-full flex-col editorial-paper">
      <AppNav />
      <main className="mx-auto w-full max-w-6xl flex-1 space-y-10 px-4 py-8 sm:px-6 lg:py-10">
        <StatusBanners
          onRetry={() => setState("ready")}
          planMessage="You've reached the account limit for your plan. Existing dashboard data remains visible, but new syncs are paused."
          permissionMessage="Your current session cannot view dashboard data. Re-authenticate to restore access."
        />

        {isEmpty ? (
          <DashboardEmptyState />
        ) : blocked ? (
          <EmptyState
            title={isPlanLimit ? "Syncs are paused" : "Dashboard is locked"}
            description={
              isPlanLimit
                ? "Upgrade your plan to resume new imports and add more connected accounts."
                : "Re-authenticate or contact support to recover access to this workspace."
            }
            illustration={
              <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-secondary">
                {isPlanLimit ? (
                  <Sparkles className="size-8 text-muted-foreground" />
                ) : (
                  <Shield className="size-8 text-muted-foreground" />
                )}
              </div>
            }
            action={
              <Button asChild>
                <Link href={isPlanLimit ? "/settings" : "/auth/login"}>
                  {isPlanLimit ? "Upgrade plan" : "Re-authenticate"}
                </Link>
              </Button>
            }
          />
        ) : (
          <>
            {isError && (
              <div className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 text-foreground">
                  <Loader2 className="size-4" />
                  Showing the last saved dashboard while we retry the latest
                  sync.
                </div>
              </div>
            )}
            <DashboardHero loading={isLoading} />
            <DashboardAlerts />
            <EditorialSummaryBlocks loading={isLoading} />
            <InvestmentStorySection loading={isLoading} />
            <RecentActivityTimeline loading={isLoading} />
            <DashboardCtas />
          </>
        )}
      </main>
    </div>
  );
}
