"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, Loader2, LockKeyhole, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePreviewState } from "@/lib/mock-data";

export default function AdminLoginPage() {
  const router = useRouter();
  const { isLoading, isError, isPermissionDenied, setState } = usePreviewState();
  const [email, setEmail] = useState("ops@fintrack.app");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const valid = email.includes("@") && password.length >= 6;
  const busy = submitting || isLoading;

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!valid || busy || isPermissionDenied) return;
    setSubmitting(true);
    setState("loading");
    await new Promise((resolve) => setTimeout(resolve, 800));
    if (isError) {
      setSubmitting(false);
      return;
    }
    setState("ready");
    setSubmitting(false);
    router.push("/admin");
  }

  return (
    <div className="editorial-paper flex min-h-full flex-col items-center justify-center px-4 py-12">
      <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
        <LockKeyhole className="size-6" />
      </div>
      <div className="w-full max-w-md animate-fade-up rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Internal only
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">
            Admin sign in
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Authenticate with your FinTrack operator account.
          </p>
        </div>

        {isError && (
          <div
            role="alert"
            className="mb-4 rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive"
          >
            Admin authentication failed. Check credentials or contact security.
          </div>
        )}
        {isPermissionDenied && (
          <div className="mb-4 rounded-md border border-rose-300 bg-rose-50 px-3 py-2 text-sm text-rose-950">
            Your account is not provisioned for admin access.
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="admin-email">Admin email</Label>
            <Input
              id="admin-email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={busy || isPermissionDenied}
              autoComplete="username"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="admin-password">Password</Label>
            <div className="relative">
              <Input
                id="admin-password"
                type={show ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                disabled={busy || isPermissionDenied}
                autoComplete="current-password"
                className="pe-10"
              />
              <button
                type="button"
                className="absolute end-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                onClick={() => setShow((value) => !value)}
                aria-label={show ? "Hide password" : "Show password"}
              >
                {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={!valid || busy || isPermissionDenied}
          >
            {busy && <Loader2 className="size-4 animate-spin" />}
            Sign in to admin
          </Button>
        </form>

        <div className="mt-6 rounded-lg border border-border bg-secondary/50 p-3 text-sm text-muted-foreground">
          <ShieldCheck className="mb-2 size-4 text-foreground" />
          Protected by device posture checks, SSO policy, and audited session
          logging.
        </div>
      </div>
      <Button variant="ghost" className="mt-6" asChild>
        <Link href="/auth/login">Back to user login</Link>
      </Button>
    </div>
  );
}
