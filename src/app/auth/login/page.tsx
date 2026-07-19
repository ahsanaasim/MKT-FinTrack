"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/layout/nav";
import { usePreviewState } from "@/lib/state-preview";

export default function LoginPage() {
  const router = useRouter();
  const { isLoading, isError, isPlanLimit, isPermissionDenied, setState } =
    usePreviewState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const valid = email.trim().length > 3 && password.length >= 6;
  const busy = submitting || isLoading;
  const blocked = isPlanLimit || isPermissionDenied;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid || busy || blocked) return;
    setSubmitting(true);
    setState("loading");
    await new Promise((r) => setTimeout(r, 900));
    if (isError) {
      setSubmitting(false);
      return;
    }
    setState("ready");
    setSubmitting(false);
    router.push("/dashboard");
  }

  return (
    <div className="editorial-paper flex min-h-full flex-col items-center justify-center px-4 py-12">
      <div className="mb-8 animate-fade-up">
        <Logo />
      </div>
      <div className="w-full max-w-md animate-fade-up stagger-1 rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Welcome back to your financial story
          </p>
        </div>

        {isError && (
          <div
            role="alert"
            className="mb-4 rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive"
          >
            Invalid email or password.{" "}
            <a href="mailto:support@fintrack.app" className="underline">
              Contact support
            </a>
          </div>
        )}
        {isPlanLimit && (
          <div className="mb-4 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-950">
            Sign-in temporarily limited for this plan. Please try again later.
          </div>
        )}
        {isPermissionDenied && (
          <div className="mb-4 rounded-md border border-rose-300 bg-rose-50 px-3 py-2 text-sm text-rose-950">
            Access restricted. Contact your administrator.
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email or mobile</Label>
            <Input
              id="email"
              type="text"
              autoComplete="username"
              placeholder="you@email.com"
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
                autoComplete="current-password"
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
          <Button
            type="submit"
            className="w-full"
            disabled={!valid || busy || blocked}
          >
            {busy && <Loader2 className="size-4 animate-spin" />}
            Log in
          </Button>
        </form>

        <div className="mt-6 flex flex-col items-center gap-2 text-sm">
          <Link
            href="/auth/forgot"
            className="text-muted-foreground underline-offset-4 hover:underline"
          >
            Forgot password?
          </Link>
          <p className="text-muted-foreground">
            New here?{" "}
            <Link href="/auth/register" className="font-medium text-foreground underline-offset-4 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
