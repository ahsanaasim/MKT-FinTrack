"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  Clock,
  History,
  KeyRound,
  Link2,
  Lock,
  Mail,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Trash2,
  Unplug,
  User,
} from "lucide-react";
import { AppNav } from "@/components/layout/nav";
import { EmptyState, StatusBanners } from "@/components/layout/status";
import { ChangePasswordModal } from "@/components/settings/change-password-modal";
import { PrivacySettingsModal } from "@/components/settings/privacy-settings-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { usePreviewState } from "@/lib/state-preview";
import {
  accounts,
  formatCurrency,
  formatDate,
  userProfile,
  type AccountIntegration,
} from "@/lib/mock-data";

function ProfileInfoForm({
  onChangePassword,
  onPrivacySettings,
}: {
  onChangePassword: () => void;
  onPrivacySettings: () => void;
}) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <User className="size-5" />
        </div>
        <CardTitle className="text-2xl">Profile information</CardTitle>
        <CardDescription>
          Manage the identity FinTrack uses for statements, reminders, and
          payment receipts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="profile-name">Full name</Label>
              <Input id="profile-name" defaultValue={userProfile.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile-email">Email</Label>
              <Input
                id="profile-email"
                type="email"
                defaultValue={userProfile.email}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile-mobile">Mobile</Label>
              <Input
                id="profile-mobile"
                type="tel"
                defaultValue={userProfile.mobile}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profile-plan">Security tier</Label>
              <Input id="profile-plan" value="Vault protected" readOnly />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button type="submit">Save profile</Button>
            <Button type="button" variant="outline" onClick={onChangePassword}>
              <KeyRound className="size-4" />
              Change password
            </Button>
            <Button type="button" variant="outline" onClick={onPrivacySettings}>
              <Lock className="size-4" />
              Privacy settings
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function NotificationPreferencesToggle() {
  const preferences = [
    {
      id: "payment-reminders",
      title: "Payment reminders",
      description: "Due amount and due date alerts for credit card statements.",
      defaultChecked: true,
    },
    {
      id: "sync-alerts",
      title: "Sync health alerts",
      description: "Parser errors, expired sessions, and source interruptions.",
      defaultChecked: true,
    },
    {
      id: "weekly-digest",
      title: "Weekly editorial digest",
      description: "A compact summary of vault activity and investment changes.",
      defaultChecked: false,
    },
  ];

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-secondary">
          <Bell className="size-5" />
        </div>
        <CardTitle>Notification preferences</CardTitle>
        <CardDescription>
          Choose which moments should interrupt you and which can wait for a
          digest.
        </CardDescription>
      </CardHeader>
      <CardContent className="rounded-b-xl border-t p-0">
        {preferences.map((preference, index) => (
          <div key={preference.id}>
            <label className="flex cursor-pointer items-start justify-between gap-4 p-4">
              <span>
                <span className="block font-medium">{preference.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {preference.description}
                </span>
              </span>
              <Switch defaultChecked={preference.defaultChecked} />
            </label>
            {index < preferences.length - 1 && <Separator />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function DeleteAccountButton() {
  return (
    <Card className="border-rose-200 bg-rose-50/70 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-rose-950">
          <Trash2 className="size-5" />
          Delete account
        </CardTitle>
        <CardDescription className="text-rose-900/70">
          Permanently remove your profile, vault metadata, statement files, and
          connected integrations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="destructive">
          <Trash2 className="size-4" />
          Delete account
        </Button>
      </CardContent>
    </Card>
  );
}

function IntegrationStatusBadge({
  status,
}: {
  status: AccountIntegration["status"];
}) {
  const styles: Record<AccountIntegration["status"], string> = {
    connected: "bg-emerald-100 text-emerald-950 hover:bg-emerald-100",
    syncing: "bg-blue-100 text-blue-950 hover:bg-blue-100",
    error: "bg-rose-100 text-rose-950 hover:bg-rose-100",
    expired: "bg-amber-100 text-amber-950 hover:bg-amber-100",
  };

  return (
    <Badge className={styles[status]}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}

function RevokeIntegrationButton({
  account,
}: {
  account: AccountIntegration;
}) {
  return (
    <Button variant="outline" size="sm" className="w-full">
      <Unplug className="size-3.5" />
      Revoke {account.institution}
    </Button>
  );
}

function SyncHistoryLink() {
  return (
    <Button variant="outline" className="w-full justify-between" asChild>
      <Link href="/accounts">
        <span className="inline-flex items-center gap-2">
          <History className="size-4" />
          View sync history
        </span>
        <span aria-hidden="true">-&gt;</span>
      </Link>
    </Button>
  );
}

function ConnectedAccountsList() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link2 className="size-5" />
          Connected accounts
        </CardTitle>
        <CardDescription>
          OAuth and parser sources that keep your vault current.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="rounded-2xl border border-border bg-white p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">{account.institution}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {account.email}
                </p>
              </div>
              <IntegrationStatusBadge status={account.status} />
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4" />
              Last sync {formatDate(account.lastSync)}
            </div>
            {account.syncError && (
              <div className="mt-3 rounded-lg bg-rose-50 p-3 text-sm text-rose-900">
                {account.syncError}
              </div>
            )}
            <div className="mt-4">
              <RevokeIntegrationButton account={account} />
            </div>
          </div>
        ))}
        <SyncHistoryLink />
      </CardContent>
    </Card>
  );
}

function SettingsSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <div className="space-y-6">
        <Skeleton className="h-80 rounded-2xl" />
        <Skeleton className="h-64 rounded-2xl" />
      </div>
      <Skeleton className="h-[38rem] rounded-2xl" />
    </div>
  );
}

export default function SettingsPage() {
  const { isLoading, isError, isPermissionDenied, setState } =
    usePreviewState();
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const connectedCount = accounts.filter(
    (account) => account.status === "connected"
  ).length;

  return (
    <div className="min-h-full editorial-paper">
      <AppNav />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <StatusBanners
          onRetry={() => setState("ready")}
          permissionMessage="Settings contain private identity and integration controls. Re-authenticate to continue."
        />

        <section className="mb-8 rounded-3xl bg-primary p-6 text-primary-foreground shadow-2xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/80">
                <ShieldCheck className="size-4" />
                Account settings
              </div>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Your control room, edited down to essentials.
              </h1>
              <p className="mt-4 max-w-2xl text-white/70">
                Update profile details, tune notification rules, and manage the
                integrations that feed the encrypted vault.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <div>
                <p className="text-3xl font-semibold">{connectedCount}</p>
                <p className="text-sm text-white/65">Connected</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">
                  {formatCurrency(42180)}
                </p>
                <p className="text-sm text-white/65">Protected dues</p>
              </div>
            </div>
          </div>
        </section>

        {isPermissionDenied ? (
          <EmptyState
            title="Settings are locked"
            description="This page includes profile, password, privacy, and integration controls. Sign in again to restore access."
            action={
              <Button asChild>
                <Link href="/auth/login">
                  <Lock className="size-4" />
                  Re-authenticate
                </Link>
              </Button>
            }
            illustration={
              <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-rose-50 text-rose-700">
                <ShieldAlert className="size-9" />
              </div>
            }
          />
        ) : isLoading ? (
          <SettingsSkeleton />
        ) : isError ? (
          <EmptyState
            title="Settings could not be loaded"
            description="Retry from the alert above to refresh your profile and integration controls."
            illustration={
              <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-rose-50 text-rose-700">
                <RefreshCw className="size-9" />
              </div>
            }
          />
        ) : (
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
            <div className="space-y-6">
              <ProfileInfoForm
                onChangePassword={() => setPasswordOpen(true)}
                onPrivacySettings={() => setPrivacyOpen(true)}
              />
              <NotificationPreferencesToggle />
              <DeleteAccountButton />
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-emerald-700" />
                    Integration status
                  </CardTitle>
                  <CardDescription>
                    {connectedCount} of {accounts.length} sources are connected.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 rounded-xl bg-secondary p-3">
                    <Mail className="size-4" />
                    <span className="text-sm">Email sync active</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-secondary p-3">
                    <Smartphone className="size-4" />
                    <span className="text-sm">Mobile alerts enabled</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-amber-50 p-3 text-amber-950">
                    <AlertTriangle className="size-4" />
                    <span className="text-sm">1 integration needs review</span>
                  </div>
                </CardContent>
              </Card>
              <ConnectedAccountsList />
            </aside>
          </div>
        )}
      </main>

      <ChangePasswordModal
        open={passwordOpen}
        onOpenChange={setPasswordOpen}
      />
      <PrivacySettingsModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </div>
  );
}
