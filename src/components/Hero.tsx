import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { interests, metrics, pipelineStages, profile, totalExperience } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import PipelineHero from "./motion/PipelineHero";

function StatusDot() {
  return (
    <span className="relative flex size-2 shrink-0">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
      <span className="relative inline-flex size-2 rounded-full bg-signal" />
    </span>
  );
}

// profile-pic.png is already circle-cropped (transparent corners), so it is
// always shown inside a circle — never a rectangle.
function Portrait() {
  return (
    <div className="relative mx-auto size-72 lg:size-80">
      <div aria-hidden className="absolute -inset-10 rounded-full bg-signal/20 blur-3xl" />
      <div
        aria-hidden
        className="absolute -inset-1.5 animate-[spin-slow_14s_linear_infinite] rounded-full"
        style={{ background: "conic-gradient(from 0deg, transparent 0 25%, var(--signal) 45%, #a78bfa 60%, transparent 80%)" }}
      />
      <div className="absolute inset-0 overflow-hidden rounded-full bg-background p-1.5">
        <div className="relative size-full overflow-hidden rounded-full bg-card">
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="320px"
            className="scale-[1.03] object-cover"
          />
        </div>
      </div>
      <div className="absolute -left-6 top-10 rounded-2xl border bg-background/80 px-3.5 py-2 shadow-xl shadow-black/30 backdrop-blur">
        <p className="text-lg font-semibold leading-none tracking-tight">{totalExperience}</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">in data</p>
      </div>
      <div className="absolute -right-4 bottom-8 flex items-center gap-2 rounded-2xl border bg-background/80 px-3.5 py-2.5 shadow-xl shadow-black/30 backdrop-blur">
        <StatusDot />
        <p className="text-sm font-medium">{profile.employer}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-signal/15 blur-[140px]"
      />

      <div className="container-page relative pt-8 pb-14 sm:pt-16 md:pb-20">
        <div className="grid items-center gap-12 md:grid-cols-[1.35fr_1fr]">
          <div>
            {/* Mobile: small avatar instead of the big portrait */}
            <div data-reveal className="mb-6 flex items-center gap-3 md:hidden">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-card ring-2 ring-signal/60 ring-offset-2 ring-offset-background">
                <Image src={profile.photo} alt={`Portrait of ${profile.name}`} fill sizes="56px" className="scale-[1.03] object-cover" />
              </div>
              <div>
                <p className="font-semibold">{profile.name}</p>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <StatusDot /> {profile.title} · {profile.employer}
                </p>
              </div>
            </div>

            <p
              data-reveal
              className="mb-6 hidden w-fit items-center gap-2 rounded-full border bg-card/60 px-3 py-1.5 font-mono text-[11px] text-muted-foreground backdrop-blur md:inline-flex"
            >
              <StatusDot />
              {profile.title} · {profile.employer} · {profile.location}
            </p>

            <h1
              data-split
              className="text-[clamp(2.6rem,6.2vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-balance"
            >
              I build data platforms that <span className="text-gradient">run themselves.</span>
            </h1>
            <p data-reveal className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.summary}
            </p>
            <div data-reveal className="mt-8 flex flex-wrap gap-2.5">
              <Button asChild size="lg" className="glow">
                <Link href="/projects/aurum">
                  Explore AURUM <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href={profile.resume} target="_blank" rel="noreferrer">
                  Résumé <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>

          <div data-reveal className="hidden md:block">
            <Portrait />
          </div>
        </div>

        {/* Career metrics */}
        <dl className="relative mt-14 grid grid-cols-2 border-y md:mt-20 lg:grid-cols-4">
          <span aria-hidden data-bar className="absolute inset-x-0 -top-px h-px origin-left bg-gradient-to-r from-signal via-signal/60 to-transparent" />
          {metrics.map((m, i) => (
            <div
              key={m.label}
              data-reveal
              className={cn(
                "flex flex-col-reverse px-1 py-6 sm:px-6",
                i % 2 === 1 && "border-l pl-5",
                i === 2 && "lg:border-l lg:pl-6",
                i >= 2 && "border-t lg:border-t-0"
              )}
            >
              <dt className="mt-2 font-mono text-[11px] uppercase leading-snug tracking-wider text-muted-foreground">{m.label}</dt>
              <dd className="flex flex-wrap items-baseline gap-x-1 tracking-tight">
                <span data-count={m.value} className="text-4xl font-semibold tabular-nums sm:text-5xl">
                  {m.value}
                </span>
                <span className="text-sm font-medium text-signal sm:text-lg">{m.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>

        {/* About */}
        <div id="about" data-reveal className="grid scroll-mt-24 gap-4 py-10 md:grid-cols-[12rem_1fr] md:gap-10 md:py-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">About</p>
          <div>
            <p className="max-w-3xl text-lg leading-relaxed text-foreground/85 sm:text-xl">{profile.bio}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {interests.map((it) => (
                <li key={it.title} title={it.body} className="rounded-full border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                  {it.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pipeline DAG: desktop only (tall zig-zag on mobile) */}
        <div data-reveal className="hidden rounded-[1.25rem] border bg-card/50 p-6 md:block">
          <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>pipeline.live</span>
            <span>source → serve</span>
          </div>
          <PipelineHero stages={pipelineStages} />
        </div>
      </div>
    </section>
  );
}
