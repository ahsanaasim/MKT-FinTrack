"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Archive,
  Building2,
  CalendarDays,
  Download,
  FileText,
  Lock,
  RefreshCw,
  Search,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { AppNav } from "@/components/layout/nav";
import { EmptyState, StatusBanners } from "@/components/layout/status";
import { StatementDetailDrawer } from "@/components/vault/statement-detail-drawer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { usePreviewState } from "@/lib/state-preview";
import {
  accounts,
  formatDate,
  statements,
  type Statement,
} from "@/lib/mock-data";

const statementTypes = [
  "All",
  "Credit Card",
  "Mutual Fund",
  "Equity",
  "NPS",
] as const;

const dateRanges = ["Any time", "This month", "Last 60 days", "Quarter"] as const;

type StatementType = (typeof statementTypes)[number];
type DateRange = (typeof dateRanges)[number];

function isInDateRange(statement: Statement, range: DateRange) {
  if (range === "Any time") {
    return true;
  }

  const uploadedAt = new Date(statement.uploadedAt);
  const now = new Date("2026-07-19T12:00:00Z");

  if (range === "This month") {
    return (
      uploadedAt.getUTCFullYear() === now.getUTCFullYear() &&
      uploadedAt.getUTCMonth() === now.getUTCMonth()
    );
  }

  const days = range === "Last 60 days" ? 60 : 120;
  const cutoff = new Date(now);
  cutoff.setUTCDate(cutoff.getUTCDate() - days);
  return uploadedAt >= cutoff;
}

function formatFileSize(sizeKb: number) {
  if (sizeKb >= 1024) {
    return `${(sizeKb / 1024).toFixed(1)} MB`;
  }

  return `${sizeKb} KB`;
}

function StatementTypeFilter({
  value,
  onChange,
}: {
  value: StatementType;
  onChange: (value: StatementType) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Statement type
      </p>
      <div className="flex flex-wrap gap-2">
        {statementTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => onChange(type)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm transition-colors",
              value === type
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-white text-muted-foreground hover:text-foreground"
            )}
          >
            {type}
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

function InstitutionFilter({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const institutions = useMemo(
    () => ["All institutions", ...new Set(statements.map((s) => s.institution))],
    []
  );

  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Institution
      </span>
      <div className="relative">
        <Building2 className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-9 w-full rounded-lg border border-input bg-white py-1 pl-9 pr-8 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {institutions.map((institution) => (
            <option key={institution} value={institution}>
              {institution}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
}

function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Search vault
      </span>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search file, bank, or type"
          className="h-9 bg-white pl-9"
        />
      </div>
    </label>
  );
}

function DownloadAllStatementsButton({
  disabled,
}: {
  disabled?: boolean;
}) {
  return (
    <Button disabled={disabled}>
      <Download className="size-4" />
      Download all statements
    </Button>
  );
}

function VaultSkeletons() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Skeleton key={item} className="h-80 rounded-2xl" />
      ))}
    </div>
  );
}

function StatementCard({
  statement,
  onOpen,
}: {
  statement: Statement;
  onOpen: (statement: Statement) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(statement)}
      className="group text-left outline-none"
    >
      <Card className="h-full gap-0 overflow-hidden border border-border/80 bg-white py-0 shadow-sm transition duration-200 group-hover:-translate-y-1 group-hover:shadow-xl group-focus-visible:ring-3 group-focus-visible:ring-ring/50">
        <div className="relative min-h-44 bg-primary p-5 text-primary-foreground">
          <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,#fff,transparent_30%),linear-gradient(135deg,#18181b,#3f3f46)]" />
          <div className="relative flex h-full flex-col justify-between gap-8">
            <div className="flex items-start justify-between gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                <FileText className="size-6" />
              </div>
              <Badge className="bg-white text-primary hover:bg-white">
                {statement.type}
              </Badge>
            </div>
            <div>
              <p className="text-sm text-white/65">{statement.institution}</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-tight">
                {statement.fileName}
              </h2>
            </div>
          </div>
        </div>
        <CardContent className="space-y-4 p-5">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Period
              </p>
              <p className="mt-1 font-medium">
                {formatDate(statement.periodStart)}
              </p>
              <p className="text-muted-foreground">
                to {formatDate(statement.periodEnd)}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Uploaded
              </p>
              <p className="mt-1 font-medium">{formatDate(statement.uploadedAt)}</p>
              <p className="text-muted-foreground">
                {formatFileSize(statement.sizeKb)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 text-foreground" />
            Encrypted at rest, verified on download
          </div>
        </CardContent>
        <CardFooter className="justify-between gap-3">
          <span className="text-xs text-muted-foreground">
            Vault ID {statement.id}
          </span>
          <span className="text-sm font-medium">Open details</span>
        </CardFooter>
      </Card>
    </button>
  );
}

export default function VaultPage() {
  const { isLoading, isEmpty, isError, setState } = usePreviewState();
  const [type, setType] = useState<StatementType>("All");
  const [dateRange, setDateRange] = useState<DateRange>("Any time");
  const [institution, setInstitution] = useState("All institutions");
  const [query, setQuery] = useState("");
  const [selectedStatement, setSelectedStatement] = useState<Statement | null>(
    null
  );

  const filteredStatements = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return statements.filter((statement) => {
      const matchesType = type === "All" || statement.type === type;
      const matchesInstitution =
        institution === "All institutions" ||
        statement.institution === institution;
      const matchesDate = isInDateRange(statement, dateRange);
      const matchesSearch =
        normalizedQuery.length === 0 ||
        [
          statement.fileName,
          statement.type,
          statement.institution,
          statement.id,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesType && matchesInstitution && matchesDate && matchesSearch;
    });
  }, [dateRange, institution, query, type]);

  const resetFilters = () => {
    setType("All");
    setDateRange("Any time");
    setInstitution("All institutions");
    setQuery("");
  };

  return (
    <div className="min-h-full editorial-paper">
      <AppNav />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <StatusBanners
          onRetry={() => setState("ready")}
          permissionMessage="Your vault is locked for this session. Re-authenticate to inspect encrypted statements."
        />

        <section className="mb-8 overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-2xl">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.4fr_0.8fr] lg:p-10">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/80">
                <Lock className="size-4" />
                Encrypted Statement Vault
              </div>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                A private gallery for every financial record.
              </h1>
              <p className="mt-4 max-w-xl text-white/70">
                Browse credit card, investment, equity, and NPS statements as
                editorial cards with verified metadata and encrypted downloads.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <DownloadAllStatementsButton
                  disabled={isLoading || isError || filteredStatements.length === 0}
                />
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href="/upload">
                    <Upload className="size-4" />
                    Upload statement
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                Vault health
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-4xl font-semibold">{statements.length}</p>
                  <p className="text-sm text-white/65">Statements</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold">{accounts.length}</p>
                  <p className="text-sm text-white/65">Sources</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm text-white/75">
                Last verified {formatDate(statements[0]?.uploadedAt ?? "")}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-border bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5">
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <StatementTypeFilter value={type} onChange={setType} />
            <DateRangeFilter value={dateRange} onChange={setDateRange} />
            <InstitutionFilter value={institution} onChange={setInstitution} />
            <SearchBar value={query} onChange={setQuery} />
          </div>
        </section>

        {isLoading ? (
          <VaultSkeletons />
        ) : isError ? (
          <EmptyState
            title="Vault temporarily unavailable"
            description="Retry from the alert above to reload encrypted statement metadata."
            illustration={
              <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-rose-50 text-rose-700">
                <RefreshCw className="size-9" />
              </div>
            }
          />
        ) : isEmpty ? (
          <EmptyState
            title="Your vault is ready for its first statement"
            description="Connect a source or upload a PDF to start building your encrypted financial archive."
            action={
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild>
                  <Link href="/accounts">Connect account</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/upload">Upload PDF</Link>
                </Button>
              </div>
            }
            illustration={
              <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-secondary">
                <Archive className="size-9 text-muted-foreground" />
              </div>
            }
          />
        ) : filteredStatements.length === 0 ? (
          <EmptyState
            title="No statements match these filters"
            description="Try another statement type, institution, date range, or search term."
            action={
              <Button variant="outline" onClick={resetFilters}>
                Clear filters
              </Button>
            }
          />
        ) : (
          <section>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Gallery
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {filteredStatements.length} encrypted statements
                </h2>
              </div>
              <Badge variant="outline" className="h-6">
                Zinc secured
              </Badge>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredStatements.map((statement) => (
                <StatementCard
                  key={statement.id}
                  statement={statement}
                  onOpen={setSelectedStatement}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <StatementDetailDrawer
        statement={selectedStatement}
        open={Boolean(selectedStatement)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedStatement(null);
          }
        }}
        onDelete={(statement) => {
          setSelectedStatement(null);
          setQuery(statement.fileName);
        }}
      />
    </div>
  );
}
