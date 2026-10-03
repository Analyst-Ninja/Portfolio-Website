import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolioData";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

// Root-relative anchors so the nav also works from /projects/* pages.
const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#stack", label: "Stack" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Home">
          <span className="grid size-8 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
            RK
          </span>
          <span className="hidden font-mono text-sm text-muted-foreground sm:inline">rohit.kumar</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <a href={profile.resume} target="_blank" rel="noreferrer">
              Résumé <ArrowUpRight />
            </a>
          </Button>
          <ThemeToggle />
          <MobileNav links={links} resume={profile.resume} />
        </div>
      </div>
    </header>
  );
}
