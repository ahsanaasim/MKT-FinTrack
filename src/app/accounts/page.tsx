"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  Building2,
  CheckCircle,
  Clock,
  History,
  Lock,
  Mail,
  Plus,
  RefreshCw,
  Shield,
  Sparkles,
  Trash2,
  XCircle,
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
import { ConnectAccountModal } from "@/components/accounts/connect-account-modal";
import { RevokeIntegrationModal } from "@/components/accounts/revoke-integration-modal";
import { SyncHistoryDrawer } from "@/components/accounts/sync-history-drawer";
import { usePreviewState } from "@/lib/state-preview";
import {
  accounts,
  formatDateTime,
  supportedBanks,
  type AccountIntegration,
} from "@/lib/mock-data";

function ConnectionStatusBadge({
  status,
}: {
  status: AccountIntegration["status"];
}) {
  if (status === "connected") {
    return (
      <Badge variant="secondary" className="bg-zinc-100 text-zinc-900">
        <CheckCircle className="size-3" />
        Connected
      </Badge>
    );
  }

  if (status === "syncing") {
    return (
      <Badge variant="outline">
        <RefreshCw className="size-3 animate-spin" />
        Syncing
      </Badge>
    );
  }

  if (status === "expired") {
    return (
      <Badge variant="outline" className="border-amber-300 text-amber-800">
        <Clock className="size-3" />
        Expired
      </Badge>
    );
  }

  return (
    <Badge variant="destructive">
      <XCircle className="size-3" />
      Sync error
    </Badge>
  );
}

function PageTitle({ onAddAccount }: { onAddAccount: () => void }) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Accounts
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Connected sources
        </h1>
        <p className="mt-4 text-muted-foreground">
          Manage banks, brokerages, mailbox imports, and retirement accounts
          that keep your dashboard current.
        </p>
      </div>
      <Button onClick={onAddAccount}>
        <Plus className="size-4" />
        Add account
      </Button>
    </div>
  );
}

function SupportedBankCoverageIndicator() {
  const supported = supportedBanks.filter((bank) => bank.supported).length;
  const coverage = Math.round((supported / supportedBanks.length) * 100);

  return (
    <Card id="supported-banks" className="bg-card/95 shadow-sm">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <CardDescription>Supported coverage</CardDescription>
            <CardTitle className="mt-2 text-3xl">{coverage}%</CardTitle>
          </div>
          <Badge variant="outline">
            {supported} of {supportedBanks.length} providers
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Progress value={coverage} className="h-2" />
        <div className="flex flex-wrap gap-2">
          {supportedBanks.map((bank) => (
            <Badge
              key={bank.id}
              variant={bank.supported ? "secondary" : "outline"}
              className={
                bank.supported ? "bg-zinc-100 text-zinc-900" : "border-dashed"
              }
            >
              {bank.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function StatusGuide() {
  const statuses: AccountIntegration["status"][] = [
    "connected",
    "syncing",
    "error",
    "expired",
  ];

  return (
    <div className="flex flex-wrap gap-2 rounded-xl border border-border bg-white/70 p-3">
      {statuses.map((status) => (
        <ConnectionStatusBadge key={status} status={status} />
      ))}
    </div>
  );
}

function AccountBlock({
  account,
  index,
  onViewHistory,
  onRevoke,
}: {
  account: AccountIntegration;
  index: number;
  onViewHistory: (account: AccountIntegration) => void;
  onRevoke: (account: AccountIntegration) => void;
}) {
  const wide = index === 0 || index === 3;
  const Icon = account.institution === "Gmail" ? Mail : Building2;

  return (
    <Card
      className={`min-h-64 bg-card/95 shadow-sm ${
        wide ? "md:col-span-7" : "md:col-span-5 md:translate-y-8"
      }`}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg bg-secondary">
              <Icon className="size-5" />
            </div>
            <div>
              <CardTitle className="text-2xl">{account.institution}</CardTitle>
              <CardDescription className="mt-1">{account.email}</CardDescription>
            </div>
          </div>
          <ConnectionStatusBadge status={account.status} />
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-paper/70 p-3">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Last sync
            </p>
            <p className="mt-2 font-medium">{formatDateTime(account.lastSync)}</p>
          </div>
          <div className="rounded-lg border border-border bg-paper/70 p-3">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Access
            </p>
            <p className="mt-2 font-medium">Read-only import</p>
          </div>
        </div>

        {account.syncError && (
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>Sync error</AlertTitle>
            <AlertDescription>{account.syncError}</AlertDescription>
          </Alert>
        )}

        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewHistory(account)}
          >
            <History className="size-3.5" />
            Sync history
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onRevoke(account)}
          >
            <Trash2 className="size-3.5" />
            Revoke
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function AccountsSkeleton() {
  return (
    <div className="grid gap-5 md:grid-cols-12">
      {[1, 2, 3, 4].map((item) => (
        <Skeleton
          key={item}
          className={`h-64 rounded-xl ${
            item === 1 || item === 4 ? "md:col-span-7" : "md:col-span-5"
          }`}
        />
      ))}
    </div>
  );
}

function AccountsEmptyState({ onAddAccount }: { onAddAccount: () => void }) {
  return (
    <EmptyState
      title="No connected sources yet"
      description="Connect Gmail, a bank, CDSL, NSDL, or another provider to start automated statement syncs."
      illustration={
        <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Plus className="size-10" />
        </div>
      }
      action={<Button onClick={onAddAccount}>Connect first account</Button>}
    />
  );
}

export default function AccountsPage() {
  const {
    isLoading,
    isEmpty,
    isError,
    isPlanLimit,
    isPermissionDenied,
    setState,
  } = usePreviewState();
  const [connectOpen, setConnectOpen] = useState(false);
  const [revokeTarget, setRevokeTarget] = useState<AccountIntegration | null>(
    null
  );
  const [historyTarget, setHistoryTarget] = useState<AccountIntegration | null>(
    null
  );

  const blocked = isPlanLimit || isPermissionDenied;

  return (
    <div className="flex min-h-full flex-col editorial-paper">
      <AppNav />
      <main className="mx-auto w-full max-w-6xl flex-1 space-y-8 px-4 py-8 sm:px-6 lg:py-10">
        <StatusBanners
          onRetry={() => setState("ready")}
          planMessage="You've reached your account limit. Revoke an unused integration or upgrade before adding another source."
          permissionMessage="You don't have permission to manage integrations for this workspace."
        />

        <PageTitle onAddAccount={() => setConnectOpen(true)} />

        {blocked ? (
          <EmptyState
            title={isPlanLimit ? "Account slots are full" : "Management locked"}
            description={
              isPlanLimit
                ? "Your connected sources stay visible, but new connections are unavailable on this plan."
                : "Re-authenticate with an account that can manage integrations."
            }
            illustration={
              <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-secondary">
                {isPlanLimit ? (
                  <Sparkles className="size-8 text-muted-foreground" />
                ) : (
                  <Lock className="size-8 text-muted-foreground" />
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
            <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr]">
              <SupportedBankCoverageIndicator />
              <Card className="bg-primary text-primary-foreground shadow-sm">
                <CardHeader>
                  <div className="flex size-11 items-center justify-center rounded-lg bg-white/10">
                    <Shield className="size-5" />
                  </div>
                  <CardTitle>Secure sync, reversible anytime</CardTitle>
                  <CardDescription className="text-white/70">
                    Every integration is read-only and can be revoked without
                    deleting existing statements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="bg-white text-primary hover:bg-white/90"
                    onClick={() => setConnectOpen(true)}
                  >
                    <Plus className="size-4" />
                    Add account
                  </Button>
                </CardContent>
              </Card>
            </div>

            <StatusGuide />

            {isError && (
              <Alert className="border-amber-300 bg-amber-50 text-amber-950">
                <AlertCircle className="text-amber-700" />
                <AlertTitle>Some sync details may be stale</AlertTitle>
                <AlertDescription className="text-amber-900/80">
                  Integration cards are shown from the last saved snapshot while
                  we retry the latest provider status.
                </AlertDescription>
              </Alert>
            )}

            {isLoading ? (
              <AccountsSkeleton />
            ) : isEmpty ? (
              <AccountsEmptyState onAddAccount={() => setConnectOpen(true)} />
            ) : (
              <section className="grid gap-5 md:grid-cols-12">
                {accounts.map((account, index) => (
                  <AccountBlock
                    key={account.id}
                    account={account}
                    index={index}
                    onViewHistory={setHistoryTarget}
                    onRevoke={setRevokeTarget}
                  />
                ))}
              </section>
            )}
          </>
        )}
      </main>

      <ConnectAccountModal
        open={connectOpen}
        onOpenChange={setConnectOpen}
        onConnect={() => setState("ready")}
      />
      <RevokeIntegrationModal
        integration={revokeTarget}
        open={Boolean(revokeTarget)}
        onOpenChange={(open) => {
          if (!open) setRevokeTarget(null);
        }}
      />
      <SyncHistoryDrawer
        integration={historyTarget}
        open={Boolean(historyTarget)}
        onOpenChange={(open) => {
          if (!open) setHistoryTarget(null);
        }}
      />
    </div>
  );
}
