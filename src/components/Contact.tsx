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
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t py-24 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_bottom,black_20%,transparent_70%)]" />
      <div className="container-page relative">
        <p data-reveal className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-signal">06</span>
          <span className="h-px w-8 bg-border" />
          Contact
        </p>
        <h2
          data-reveal
          className="max-w-5xl font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
        >
          Let&apos;s build something that <span className="font-serif font-normal italic text-signal">moves data.</span>
        </h2>
        <p data-reveal className="mt-6 max-w-xl text-lg text-muted-foreground">
          Open to conversations about data platforms, lakehouses, and data-for-AI work.
        </p>

        <div data-reveal className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
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
