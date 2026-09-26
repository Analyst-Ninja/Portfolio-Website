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

        <div className="mt-14">
          <p data-reveal className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-signal" />
            By the numbers · Moody&apos;s + Axis Bank
          </p>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                data-reveal
                className="group relative flex flex-col-reverse overflow-hidden rounded-2xl border bg-card/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-signal/40 hover:bg-card"
              >
                <span aria-hidden data-bar className="absolute inset-x-0 top-0 h-0.5 origin-left bg-signal" />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-signal/0 blur-2xl transition-colors duration-500 group-hover:bg-signal/20"
                />
                <dt className="mt-3 space-y-1.5">
                  <span className="block text-sm font-medium text-foreground/90">{m.label}</span>
                  <span className="block font-mono text-[11px] text-muted-foreground">{m.context}</span>
                </dt>
                <dd className="flex items-baseline gap-1 font-display tracking-tight">
                  <span data-count={m.value} className="text-5xl font-semibold tabular-nums">
                    {m.value}
                  </span>
                  <span className="text-xl font-medium text-signal">{m.suffix}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
