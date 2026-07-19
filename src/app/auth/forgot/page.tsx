"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/layout/nav";
import { usePreviewState } from "@/lib/state-preview";

export default function ForgotPasswordPage() {
  const { isLoading, isError, isPlanLimit, isPermissionDenied, setState } =
    usePreviewState();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const valid = email.trim().length > 3;
  const busy = submitting || isLoading;
  const blocked = isPlanLimit || isPermissionDenied;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid || busy || blocked) return;
    setSubmitting(true);
    setState("loading");
    await new Promise((r) => setTimeout(r, 800));
    if (isError) {
      setSubmitting(false);
      setState("error");
      return;
    }
    setState("ready");
    setSubmitting(false);
    setSuccess(true);
  }

  return (
    <div className="editorial-paper flex min-h-full flex-col items-center justify-center px-4 py-12">
      <div className="mb-6 flex w-full max-w-md items-center justify-between animate-fade-up">
        <Logo />
        <Link href="/auth/login" className="text-sm text-muted-foreground hover:text-foreground">
          Back to login
        </Link>
      </div>
      <div className="w-full max-w-md animate-fade-up stagger-1 rounded-xl border border-border bg-card p-8 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Reset password</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll help you get back on track
        </p>

        {success ? (
          <div className="mt-6 text-center">
            <CheckCircle2 className="mx-auto size-10 text-emerald-600" />
            <p className="mt-3 text-sm">
              If an account exists for <strong>{email}</strong>, we sent reset
              instructions.
            </p>
            <Button variant="outline" className="mt-4" onClick={() => setSuccess(false)}>
              Resend link
            </Button>
          </div>
        ) : (
          <>
            {isError && (
              <div role="alert" className="mt-4 rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
                We couldn&apos;t send a reset link. Please try again.
              </div>
            )}
            {isPlanLimit && (
              <div className="mt-4 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm">
                Password resets are limited right now.{" "}
                <Link href="/auth/login" className="underline">
                  Back to login
                </Link>
              </div>
            )}
            {isPermissionDenied && (
              <div className="mt-4 rounded-md border border-rose-300 bg-rose-50 px-3 py-2 text-sm">
                Reset not allowed for this account.{" "}
                <Link href="/auth/login" className="underline">
                  Back to login
                </Link>
              </div>
            )}
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <p className="text-sm text-muted-foreground">
                Enter the email or mobile linked to your FinTrack account.
              </p>
              <div className="space-y-2">
                <Label htmlFor="email">Email or mobile</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={busy || blocked}
                />
              </div>
              <Button type="submit" className="w-full" disabled={!valid || busy || blocked}>
                {busy && <Loader2 className="size-4 animate-spin" />}
                Send reset link
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
