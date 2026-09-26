import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { metrics, pipelineStages, profile } from "@/data/portfolioData";
import PipelineHero from "./motion/PipelineHero";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]"
      />

      <div className="container-page relative pt-16 pb-10 sm:pt-24">
        <div data-reveal className="mb-8 inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-signal" />
          </span>
          {profile.title} · {profile.employer} · {profile.location}
        </div>

        <h1
          data-split
          className="max-w-5xl font-display text-[clamp(2.75rem,8vw,6.75rem)] font-semibold leading-[0.95] tracking-[-0.035em]"
        >
          I build data platforms that <span className="font-serif font-normal italic text-signal">run themselves.</span>
        </h1>

        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-[1.3fr_1fr] md:items-end">
          <p data-reveal className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {profile.tagline} {profile.summary}
          </p>
          <div data-reveal className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild size="lg">
              <Link href="/projects/aurum">
                Explore AURUM <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>

        <div data-reveal className="mt-14 rounded-3xl border bg-card/40 p-4 backdrop-blur-sm sm:p-6">
          <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>pipeline.live</span>
            <span className="hidden sm:inline">source → serve</span>
          </div>
          <PipelineHero stages={pipelineStages} />
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} data-reveal className="flex flex-col-reverse bg-background p-5 sm:p-6">
              <dt className="mt-1 text-sm text-muted-foreground">{m.label}</dt>
              <dd className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
