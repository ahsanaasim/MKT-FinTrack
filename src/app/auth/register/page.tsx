"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle2, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/layout/nav";
import { usePreviewState } from "@/lib/state-preview";

export default function RegisterPage() {
  const router = useRouter();
  const { isLoading, isError, isPlanLimit, isPermissionDenied, setState } =
    usePreviewState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const valid =
    name.trim().length > 1 &&
    email.trim().length > 3 &&
    password.length >= 6 &&
    password === confirm;
  const busy = submitting || isLoading;
  const blocked = isPlanLimit || isPermissionDenied;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid || busy || blocked) return;
    setSubmitting(true);
    setState("loading");
    await new Promise((r) => setTimeout(r, 1000));
    if (isError) {
      setSubmitting(false);
      setState("error");
      return;
    }
    setState("ready");
    setSubmitting(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="editorial-paper flex min-h-full flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 text-center shadow-sm">
          <CheckCircle2 className="mx-auto size-12 text-emerald-600" />
          <h1 className="mt-4 text-2xl font-semibold">Account created</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your FinTrack journey starts now. Log in to continue onboarding.
          </p>
          <Button className="mt-6 w-full" asChild>
            <Link href="/auth/login">Continue to login</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="editorial-paper flex min-h-full flex-col items-center justify-center px-4 py-12">
      <div className="mb-6 flex w-full max-w-md items-center justify-between animate-fade-up">
        <Logo />
        <Link href="/auth/login" className="text-sm text-muted-foreground hover:text-foreground">
          Log in
        </Link>
      </div>
      <div className="w-full max-w-md animate-fade-up stagger-1 rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Create account</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Start your journey to effortless finance
          </p>
        </div>

        {isError && (
          <div role="alert" className="mb-4 rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
            Registration failed. Please try again.
          </div>
        )}
        {isPlanLimit && (
          <div className="mb-4 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-950">
            New registrations are paused for this plan.{" "}
            <Link href="/auth/login" className="underline">
              Log in instead
            </Link>
          </div>
        )}
        {isPermissionDenied && (
          <div className="mb-4 rounded-md border border-rose-300 bg-rose-50 px-3 py-2 text-sm text-rose-950">
            Registration not allowed.{" "}
            <Link href="/auth/login" className="underline">
              Back to login
            </Link>
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={busy || blocked}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email or mobile</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={busy || blocked}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={busy || blocked}
                className="pe-10"
              />
              <button
                type="button"
                className="absolute end-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                onClick={() => setShow((v) => !v)}
                aria-label={show ? "Hide password" : "Show password"}
              >
                {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">Confirm password</Label>
            <Input
              id="confirm"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              disabled={busy || blocked}
            />
          </div>
          <Button type="submit" className="w-full" disabled={!valid || busy || blocked}>
            {busy && <Loader2 className="size-4 animate-spin" />}
            Register
          </Button>
        </form>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <Link href="/" className="hover:underline">
            Terms
          </Link>
          <Link href="/" className="hover:underline">
            Privacy
          </Link>
          <Link href="/" className="hover:underline">
            Accessibility
          </Link>
        </div>
      </div>
      {success ? null : (
        <p className="sr-only">
          <button type="button" onClick={() => router.push("/dashboard")}>
            skip
          </button>
        </p>
      )}
    </div>
  );
}
