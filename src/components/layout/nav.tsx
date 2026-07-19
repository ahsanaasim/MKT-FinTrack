"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { brand } from "@/lib/mock-data";

const marketingLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#banks", label: "Banks" },
  { href: "/#faq", label: "FAQ" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-semibold tracking-tight text-foreground",
        className
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
        F
      </span>
      <span className="text-lg">{brand.name}</span>
    </Link>
  );
}

export function MarketingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {marketingLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/auth/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/register">Register</Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="border-t border-border px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {marketingLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1" asChild>
                <Link href="/auth/login">Log in</Link>
              </Button>
              <Button className="flex-1" asChild>
                <Link href="/auth/register">Register</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

const appLinks = [
  { href: "/dashboard", label: "Home" },
  { href: "/accounts", label: "Accounts" },
  { href: "/review", label: "Review" },
  { href: "/upload", label: "Upload" },
  { href: "/payments", label: "Payments" },
  { href: "/vault", label: "Vault" },
  { href: "/notifications", label: "Alerts" },
  { href: "/settings", label: "Settings" },
];

export function AppNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="App navigation"
        >
          {appLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "bg-secondary font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/notifications">Alerts</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/settings">Priya</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border px-4 py-4 lg:hidden">
          <nav className="grid grid-cols-2 gap-2">
            {appLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm",
                  pathname === link.href
                    ? "bg-secondary font-medium"
                    : "text-muted-foreground"
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-paper-warm/50 mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Editorial finance for people who want clarity without the clutter.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link href="/#features" className="text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="/#faq" className="text-muted-foreground hover:text-foreground">
            FAQ
          </Link>
          <Link href="/auth/login" className="text-muted-foreground hover:text-foreground">
            Privacy policy
          </Link>
          <Link href="/auth/login" className="text-muted-foreground hover:text-foreground">
            Terms of service
          </Link>
          <a
            href="mailto:hello@fintrack.app"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FinTrack. All rights reserved.
      </div>
    </footer>
  );
}
