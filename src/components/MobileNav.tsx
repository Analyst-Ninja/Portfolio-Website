"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function MobileNav({ links, resume }: { links: { href: string; label: string }[]; resume: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-8 pt-20">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <nav className="flex flex-col gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-3 py-3 font-display text-3xl font-medium tracking-tight"
            >
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <span className="transition-colors group-hover:text-signal">{l.label}</span>
            </a>
          ))}
        </nav>
        <Button asChild className="mt-6">
          <a href={resume} target="_blank" rel="noreferrer">
            Download résumé
          </a>
        </Button>
      </SheetContent>
    </Sheet>
  );
}
