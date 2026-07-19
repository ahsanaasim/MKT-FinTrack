import Link from "next/link";
import { Compass } from "lucide-react";
import { AppNav } from "@/components/layout/nav";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col editorial-paper">
      <AppNav />
      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <section className="w-full max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-secondary">
            <Compass className="size-7" />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            404
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Page not found
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            The page you are looking for is not in this FinTrack workspace. Head
            back to your dashboard or start again from the homepage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/dashboard">Back to dashboard</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Go home</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
