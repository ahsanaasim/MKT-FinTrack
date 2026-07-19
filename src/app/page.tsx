"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Layers,
  RefreshCw,
  Shield,
  Wallet,
  HelpCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MarketingNav, SiteFooter } from "@/components/layout/nav";
import { StatusBanners } from "@/components/layout/status";
import { usePreviewState } from "@/lib/state-preview";
import {
  brand,
  features,
  landingFaqs,
  supportedBanks,
} from "@/lib/mock-data";

const iconMap = {
  layers: Layers,
  refresh: RefreshCw,
  wallet: Wallet,
  shield: Shield,
};

export default function LandingPage() {
  const { isLoading, isError, setState } = usePreviewState();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(t);
  }, []);

  const showSkeleton = isLoading || !mounted;

  return (
    <div className="flex min-h-full flex-col editorial-paper">
      <MarketingNav />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
          <StatusBanners onRetry={() => setState("ready")} />
        </div>

        {/* Hero — immersive full-bleed editorial */}
        <section className="relative overflow-hidden">
          <div className="editorial-hero-mesh absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
            {showSkeleton ? (
              <>
                <div className="space-y-4">
                  <Skeleton className="h-12 w-3/4 bg-white/20" />
                  <Skeleton className="h-6 w-full bg-white/15" />
                  <Skeleton className="h-6 w-2/3 bg-white/15" />
                  <div className="flex gap-3 pt-4">
                    <Skeleton className="h-11 w-32 bg-white/20" />
                    <Skeleton className="h-11 w-32 bg-white/15" />
                  </div>
                </div>
                <Skeleton className="aspect-[4/3] w-full rounded-xl bg-white/10" />
              </>
            ) : (
              <>
                <div className="animate-fade-up text-white">
                  <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                    {brand.name}
                  </p>
                  <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                    Your money, told as a story
                  </h1>
                  <p className="mt-5 max-w-lg text-lg text-white/80">
                    FinTrack turns credit cards, investments, and NPS into an
                    editorial dashboard — sync statements, review with clarity,
                    and pay with confidence.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90"
                      asChild
                    >
                      <Link href="/auth/register">
                        Get started
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                      asChild
                    >
                      <Link href="/#features">Learn more</Link>
                    </Button>
                  </div>
                </div>
                <div className="animate-fade-up stagger-2 relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <div className="rounded-lg bg-white/95 p-5 text-foreground shadow-lg">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Net worth
                      </p>
                      <p className="mt-1 text-3xl font-semibold tracking-tight">
                        ₹28,47,650
                      </p>
                      <p className="mt-2 text-sm text-emerald-700">
                        +3.2% this month
                      </p>
                      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                        {["NPS", "Funds", "Equity"].map((label) => (
                          <div
                            key={label}
                            className="rounded-md bg-secondary px-2 py-3"
                          >
                            <p className="text-[10px] uppercase text-muted-foreground">
                              {label}
                            </p>
                            <div className="mx-auto mt-2 h-8 w-full rounded-sm bg-primary/10" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Bento + asymmetric features */}
        <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-12 max-w-2xl animate-fade-up">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built like a magazine. Works like a vault.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Immersive hero metrics, story-driven summaries, and privacy-first
              sync — designed for people, not operators.
            </p>
          </div>

          {showSkeleton ? (
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-48 rounded-xl" />
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((f, i) => {
                const Icon = iconMap[f.icon as keyof typeof iconMap];
                const reverse = i % 2 === 1;
                return (
                  <article
                    key={f.title}
                    className={`group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-transform duration-200 hover:scale-[1.02] animate-fade-up ${
                      reverse ? "md:translate-y-8" : ""
                    } stagger-${(i % 4) + 1}`}
                  >
                    <div className="flex size-12 items-center justify-center rounded-lg bg-secondary">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {f.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* Supported banks */}
        <section
          id="banks"
          className="border-y border-border bg-white/70 py-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Supported banks & brokers
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hover unsupported badges to see the manual upload fallback.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {supportedBanks.map((bank) =>
                bank.supported ? (
                  <span
                    key={bank.id}
                    className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm"
                  >
                    {bank.name}
                  </span>
                ) : (
                  <Tooltip key={bank.id}>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground"
                      >
                        {bank.name}
                        <HelpCircle className="size-3.5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      Not yet supported for auto-sync. Upload a PDF or enter
                      data manually from your dashboard.
                    </TooltipContent>
                  </Tooltip>
                )
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight">
            Questions, answered
          </h2>
          {showSkeleton ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-14 rounded-lg" />
              ))}
            </div>
          ) : isError ? null : (
            <Accordion type="single" collapsible className="w-full">
              {landingFaqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-start text-base font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="rounded-2xl editorial-hero-mesh px-8 py-14 text-center text-white">
            <h2 className="text-3xl font-semibold tracking-tight">
              Start your financial story today
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/75">
              Register in minutes. Connect accounts when you&apos;re ready.
            </p>
            <Button
              size="lg"
              className="mt-8 bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link href="/auth/register">Create free account</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
