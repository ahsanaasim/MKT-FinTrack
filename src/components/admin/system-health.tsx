"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState, type ReactNode } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Banknote,
  CheckCircle2,
  Clock3,
  DatabaseZap,
  FileWarning,
  Gauge,
  HeartPulse,
  Loader2,
  LockKeyhole,
  Mail,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  UploadCloud,
  Wand2,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState, StatusBanners } from "@/components/layout/status";
import { cn } from "@/lib/utils";
import {
  adminMetrics,
  formatDateTime,
  supportedBanks,
  usePreviewState,
} from "@/lib/mock-data";

type IntegrationType = "All" | "Email" | "Bank" | "Demat" | "Retirement" | "Payments";
type Severity = "All" | "Critical" | "Warning" | "Info";

const adminLinks = [
  { href: "/admin", label: "Health" },
  { href: "/admin/panels/status", label: "Status" },
  { href: "/admin/panels/errors", label: "Errors" },
  { href: "/admin/panels/integrations", label: "Integrations" },
];

const integrationTypes: IntegrationType[] = [
  "All",
  "Email",
  "Bank",
  "Demat",
  "Retirement",
  "Payments",
];

const severities: Severity[] = ["All", "Critical", "Warning", "Info"];

const severityByType: Record<string, Exclude<Severity, "All">> = {
  ParseError: "Critical",
  Timeout: "Warning",
  Upstream: "Info",
};

const parserQueue = [
  { name: "CDSL Q2 Demat", status: "Patch queued", confidence: 72 },
  { name: "HDFC Credit Card v7", status: "Monitoring", confidence: 94 },
  { name: "ICICI Amazon Pay", status: "Stable", confidence: 98 },
];

function statusBadgeClass(status: string) {
  if (status.toLowerCase() === "healthy") {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }
  if (status.toLowerCase() === "degraded") {
    return "border-amber-200 bg-amber-50 text-amber-800";
  }
  return "border-rose-200 bg-rose-50 text-rose-700";
}

function severityBadgeClass(severity: Severity) {
  if (severity === "Critical") return "border-rose-200 bg-rose-50 text-rose-700";
  if (severity === "Warning") return "border-amber-200 bg-amber-50 text-amber-800";
  if (severity === "Info") return "border-zinc-200 bg-zinc-50 text-zinc-700";
  return "border-border bg-secondary text-foreground";
}

function FacetChips<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
              value === option
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:text-foreground"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export function AdminHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/admin" className="inline-flex items-center gap-2 font-semibold">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
            A
          </span>
          <span>FinTrack Admin</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Admin navigation">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors",
                pathname === link.href
                  ? "bg-secondary font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button variant="outline" size="sm" asChild>
          <Link href="/admin/login">
            <LockKeyhole className="size-3.5" />
            Admin login
          </Link>
        </Button>
      </div>
      <nav
        className="flex gap-1 overflow-x-auto border-t border-border px-4 py-2 md:hidden"
        aria-label="Admin navigation"
      >
        {adminLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm",
              pathname === link.href
                ? "bg-secondary font-medium text-foreground"
                : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-paper-warm/40">
      <AdminHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}

export function AdminStateGate({
  children,
  emptyTitle = "No operational data",
  emptyDescription = "There are no system events in the selected preview state.",
}: {
  children: ReactNode;
  emptyTitle?: string;
  emptyDescription?: string;
}) {
  const { isLoading, isEmpty, isError, isPlanLimit, isPermissionDenied, setState } =
    usePreviewState();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <Skeleton key={item} className="h-32 rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-80 rounded-xl" />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        illustration={
          <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-secondary">
            <Server className="size-9 text-muted-foreground" />
          </div>
        }
        action={
          <Button onClick={() => setState("ready")}>
            <RefreshCw className="size-4" />
            Reload system data
          </Button>
        }
      />
    );
  }

  if (isError || isPlanLimit || isPermissionDenied) {
    return (
      <StatusBanners
        onRetry={() => setState("ready")}
        planMessage="Admin observability is rate-limited for this preview account."
        permissionMessage="This system health page is restricted to internal admins."
      />
    );
  }

  return children;
}

export function SystemStatusBadge() {
  return (
    <Badge className="h-7 gap-1.5 rounded-full bg-emerald-50 px-3 text-emerald-700 ring-1 ring-emerald-200">
      <CheckCircle2 className="size-3.5" />
      {adminMetrics.status}
    </Badge>
  );
}

export function LastUpdatedTimestamp() {
  return (
    <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
      <Clock3 className="size-4" />
      Last updated {formatDateTime(adminMetrics.lastUpdated)}
    </p>
  );
}

export function RefreshButton() {
  const { setState } = usePreviewState();
  const [refreshing, setRefreshing] = useState(false);

  async function refresh() {
    setRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 550));
    setRefreshing(false);
    setState("ready");
  }

  return (
    <Button variant="outline" onClick={refresh} disabled={refreshing}>
      {refreshing ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <RefreshCw className="size-4" />
      )}
      Refresh
    </Button>
  );
}

export function AdminHero({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {eyebrow}
              </p>
              <SystemStatusBadge />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <LastUpdatedTimestamp />
            {action ?? <RefreshButton />}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SystemMetricsGrid() {
  const metrics = [
    {
      label: "Uptime",
      value: adminMetrics.uptime,
      detail: "Rolling 30 days",
      icon: Gauge,
    },
    {
      label: "API latency",
      value: `${adminMetrics.apiLatencyMs}ms`,
      detail: "P95 response time",
      icon: Activity,
    },
    {
      label: "Integration health",
      value: `${adminMetrics.integrationHealth}%`,
      detail: "Across live connectors",
      icon: HeartPulse,
    },
    {
      label: "Errors / 24h",
      value: adminMetrics.errorCount24h.toString(),
      detail: "Auto-triaged incidents",
      icon: FileWarning,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <Card key={metric.label} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">
                {metric.label}
              </CardTitle>
              <CardAction>
                <span className="flex size-9 items-center justify-center rounded-lg bg-secondary">
                  <Icon className="size-4" />
                </span>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold tracking-tight">{metric.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{metric.detail}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export function IntegrationStatusTable({
  selectedType,
  onTypeChange,
}: {
  selectedType: IntegrationType;
  onTypeChange: (type: IntegrationType) => void;
}) {
  const filtered = adminMetrics.integrations.filter(
    (integration) => selectedType === "All" || integration.type === selectedType
  );

  return (
    <Card className="shadow-sm">
      <CardHeader className="border-b">
        <CardTitle>Integration status</CardTitle>
        <CardDescription>
          Operational state for email, bank, broker, retirement, and payment rails.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 pt-1">
        <FacetChips
          label="Integration Type"
          options={integrationTypes}
          value={selectedType}
          onChange={onTypeChange}
        />
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[620px] text-sm">
            <thead className="bg-secondary/70 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Integration</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Errors</th>
                <th className="px-4 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((integration) => (
                <tr key={integration.name} className="bg-card">
                  <td className="px-4 py-3 font-medium">{integration.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{integration.type}</td>
                  <td className="px-4 py-3">
                    <Badge
                      variant="outline"
                      className={cn("capitalize", statusBadgeClass(integration.status))}
                    >
                      {integration.status === "healthy" ? (
                        <CheckCircle2 className="size-3" />
                      ) : (
                        <AlertTriangle className="size-3" />
                      )}
                      {integration.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">{integration.errors}</td>
                  <td className="px-4 py-3">
                    <Button size="sm" variant="ghost">
                      Inspect
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

export function ErrorLogsTable({
  selectedSeverity,
  onSeverityChange,
}: {
  selectedSeverity: Severity;
  onSeverityChange: (severity: Severity) => void;
}) {
  const [query, setQuery] = useState("");
  const logs = useMemo(
    () =>
      adminMetrics.errorLogs
        .map((log) => ({
          ...log,
          severity: severityByType[log.type] ?? "Warning",
        }))
        .filter((log) => selectedSeverity === "All" || log.severity === selectedSeverity)
        .filter((log) => {
          const q = query.trim().toLowerCase();
          if (!q) return true;
          return [log.integration, log.type, log.message]
            .join(" ")
            .toLowerCase()
            .includes(q);
        }),
    [query, selectedSeverity]
  );

  return (
    <Card className="shadow-sm">
      <CardHeader className="border-b">
        <CardTitle>Error logs</CardTitle>
        <CardDescription>
          Recent parser, upstream, and timeout events with severity facets.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 pt-1">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <FacetChips
            label="Error Severity"
            options={severities}
            value={selectedSeverity}
            onChange={onSeverityChange}
          />
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Search
            </p>
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="CDSL, timeout..."
                className="w-full pl-8 lg:w-64"
              />
            </div>
          </div>
        </div>
        {logs.length === 0 ? (
          <EmptyState
            title="No matching logs"
            description="Adjust severity or search filters to inspect a broader incident set."
          />
        ) : (
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="bg-secondary/70 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">Time</th>
                  <th className="px-4 py-3 font-medium">Severity</th>
                  <th className="px-4 py-3 font-medium">Integration</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {logs.map((log) => (
                  <tr key={log.id} className="bg-card">
                    <td className="px-4 py-3 text-muted-foreground">
                      {formatDateTime(log.at)}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className={severityBadgeClass(log.severity as Severity)}
                      >
                        {log.severity === "Critical" ? (
                          <XCircle className="size-3" />
                        ) : (
                          <AlertTriangle className="size-3" />
                        )}
                        {log.severity}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 font-medium">{log.integration}</td>
                    <td className="px-4 py-3 text-muted-foreground">{log.type}</td>
                    <td className="px-4 py-3">{log.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function SupportedBankCoverageIndicator() {
  const supported = supportedBanks.filter((bank) => bank.supported).length;
  const total = supportedBanks.length;
  const percent = Math.round((supported / total) * 100);

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Supported bank coverage</CardTitle>
        <CardDescription>
          Auto-sync coverage against declared launch institutions.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="mb-2 flex items-end justify-between gap-4">
            <p className="text-3xl font-semibold tracking-tight">{percent}%</p>
            <p className="text-sm text-muted-foreground">
              {supported}/{total} supported
            </p>
          </div>
          <Progress value={percent} />
        </div>
        <div className="flex flex-wrap gap-2">
          {supportedBanks.map((bank) => (
            <Badge
              key={bank.id}
              variant="outline"
              className={
                bank.supported
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-dashed text-muted-foreground"
              }
            >
              {bank.supported ? (
                <CheckCircle2 className="size-3" />
              ) : (
                <UploadCloud className="size-3" />
              )}
              {bank.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function ParserManagementPanel() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Parser management</CardTitle>
        <CardDescription>
          Version posture, confidence scores, and manual remediation queue.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {parserQueue.map((parser) => (
          <div key={parser.name} className="rounded-lg border border-border bg-background p-4">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">{parser.name}</p>
                <p className="text-xs text-muted-foreground">{parser.status}</p>
              </div>
              <Badge variant="secondary">{parser.confidence}%</Badge>
            </div>
            <Progress value={parser.confidence} />
          </div>
        ))}
        <div className="grid gap-2 sm:grid-cols-2">
          <Button variant="outline">
            <Wand2 className="size-4" />
            Train parser
          </Button>
          <Button>
            <DatabaseZap className="size-4" />
            Deploy patch
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function SystemHealthOverview() {
  const [selectedType, setSelectedType] = useState<IntegrationType>("All");
  const [selectedSeverity, setSelectedSeverity] = useState<Severity>("All");

  return (
    <AdminStateGate>
      <div className="space-y-6">
        <SystemMetricsGrid />
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(360px,0.75fr)]">
          <div className="space-y-6">
            <IntegrationStatusTable
              selectedType={selectedType}
              onTypeChange={setSelectedType}
            />
            <ErrorLogsTable
              selectedSeverity={selectedSeverity}
              onSeverityChange={setSelectedSeverity}
            />
          </div>
          <aside className="space-y-6">
            <SupportedBankCoverageIndicator />
            <ParserManagementPanel />
          </aside>
        </div>
      </div>
    </AdminStateGate>
  );
}

export function SystemStatusPanel() {
  return (
    <AdminStateGate>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-6">
          <SystemMetricsGrid />
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Service heartbeat</CardTitle>
              <CardDescription>
                Live operational posture across ingestion, parsing, storage, and alerting.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {[
                ["API Gateway", "Healthy", Server],
                ["Email Ingestion", "Healthy", Mail],
                ["Parser Workers", "Degraded", SlidersHorizontal],
                ["Vault Storage", "Healthy", ShieldCheck],
              ].map(([name, status, Icon]) => {
                const ServiceIcon = Icon as typeof Server;
                return (
                  <div
                    key={name as string}
                    className="rounded-lg border border-border bg-background p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <ServiceIcon className="size-5 text-muted-foreground" />
                      <Badge
                        variant="outline"
                        className={statusBadgeClass(status as string)}
                      >
                        {status as string}
                      </Badge>
                    </div>
                    <p className="mt-4 font-medium">{name as string}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Last heartbeat under 60 seconds ago
                    </p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
        <aside className="space-y-6">
          <SupportedBankCoverageIndicator />
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Context rail</CardTitle>
              <CardDescription>Operational notes for today.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>CDSL parser variance is the only degraded subsystem.</p>
              <p>Payment confirmations are stable after delayed BBPS acknowledgements.</p>
              <Button className="w-full" asChild>
                <Link href="/admin/panels/errors">Review active errors</Link>
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </AdminStateGate>
  );
}

export function ErrorLogsPanel() {
  const [selectedSeverity, setSelectedSeverity] = useState<Severity>("All");

  return (
    <AdminStateGate
      emptyTitle="No error logs"
      emptyDescription="No integration incidents are available in this preview state."
    >
      <ErrorLogsTable
        selectedSeverity={selectedSeverity}
        onSeverityChange={setSelectedSeverity}
      />
    </AdminStateGate>
  );
}

export function IntegrationManagementPanel() {
  const [selectedType, setSelectedType] = useState<IntegrationType>("All");

  return (
    <AdminStateGate>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-6">
          <IntegrationStatusTable
            selectedType={selectedType}
            onTypeChange={setSelectedType}
          />
          <ParserManagementPanel />
        </div>
        <aside className="space-y-6">
          <SupportedBankCoverageIndicator />
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Integration context</CardTitle>
              <CardDescription>Controls for internal operators.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <RefreshCw className="size-4" />
                Retry failed syncs
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Banknote className="size-4" />
                Request bank parser
              </Button>
              <Button className="w-full justify-start">
                <Wand2 className="size-4" />
                Open parser workbench
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </AdminStateGate>
  );
}
