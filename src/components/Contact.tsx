import { ArrowUpRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolioData";

export default function Contact() {
  const links = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Résumé", href: profile.resume },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t py-16 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_bottom,black_20%,transparent_70%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-signal/15 blur-[140px]"
      />
      <div className="container-page relative">
        <p data-reveal className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-signal">05</span>
          <span className="text-muted-foreground/50">/</span>
          Contact
        </p>
        <h2
          data-reveal
          className="max-w-5xl font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
        >
          Let&apos;s build something that <span className="text-gradient">moves data.</span>
        </h2>
        <p data-reveal className="mt-6 max-w-xl text-lg text-muted-foreground">
          Open to conversations about data platforms, lakehouses, and data-for-AI work.
        </p>

        <div data-reveal className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="glow">
            <a href={`mailto:${profile.email}`}>
              <Mail /> {profile.email}
            </a>
          </Button>
          {links.map((l) => (
            <Button key={l.label} asChild size="lg" variant="outline">
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label} <ArrowUpRight />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
