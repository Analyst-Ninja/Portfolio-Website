import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import SiteMotion from "@/components/motion/SiteMotion";
import { projectCaseStudies, type Comparison, type Impact, type Visual } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

// AURUM has its own route; only these slugs exist here.
export const dynamicParams = false;

export function generateStaticParams() {
  return projectCaseStudies.map((cs) => ({ slug: cs.slug }));
}

const formatImpact = (m: Impact) =>
  m.value.toLocaleString("en-US", { minimumFractionDigits: m.decimals ?? 0, maximumFractionDigits: m.decimals ?? 0 });

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = projectCaseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return { title: `${cs.title} — case study`, description: `${cs.oneLiner} ${cs.problem}` };
}

function ComparisonCard({ c }: { c: Comparison }) {
  const max = Math.max(...c.rows.map((r) => r.value));
  return (
    <div data-reveal className="rounded-3xl border bg-background p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold tracking-tight">{c.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{c.caption}</p>
      <ul className="mt-6 space-y-4">
        {c.rows.map((r) => (
          <li key={r.label}>
            <div className="mb-1.5 flex items-baseline justify-between gap-4 font-mono text-xs">
              <span className={r.highlight ? "text-foreground" : "text-muted-foreground"}>{r.label}</span>
              <span className={r.highlight ? "text-(--pa)" : "text-muted-foreground"}>{r.display}</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
              <div
                data-bar
                className={cn("h-full origin-left rounded-full", r.highlight ? "bg-(--pa)" : "bg-foreground/25")}
                style={{ width: `${Math.max((r.value / max) * 100, 1.5)}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function VisualCard({ v }: { v: Visual }) {
  const body = (
    <>
      <div className={cn("flex items-center justify-center p-3 sm:p-5", v.dark ? "bg-background/60" : "bg-white")}>
        {v.dark ? (
          <>
            <Image src={v.dark} alt={v.title} width={v.width} height={v.height} sizes="(min-width: 768px) 50vw, 100vw" className="hidden h-auto max-h-[520px] w-full rounded-md object-contain dark:block" />
            <Image src={v.light} alt={v.title} width={v.width} height={v.height} sizes="(min-width: 768px) 50vw, 100vw" className="h-auto max-h-[520px] w-full rounded-md object-contain dark:hidden" />
          </>
        ) : (
          <Image src={v.light} alt={v.title} width={v.width} height={v.height} sizes="(min-width: 768px) 50vw, 100vw" className="h-auto max-h-[520px] w-full object-contain" />
        )}
      </div>
      <figcaption className="border-t px-5 py-4">
        <p className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {v.title}
          {v.href ? <span className="normal-case tracking-normal text-(--pa)">interactive →</span> : null}
        </p>
        <p className="mt-1 text-sm leading-relaxed">{v.caption}</p>
      </figcaption>
    </>
  );
  const cls = "flex flex-col overflow-hidden rounded-3xl border bg-card transition-colors hover:border-foreground/25";
  return v.href ? (
    <a data-reveal href={v.href} target="_blank" rel="noreferrer" className={cls}>
      <figure className="contents">{body}</figure>
    </a>
  ) : (
    <figure data-reveal className={cls}>
      {body}
    </figure>
  );
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const i = projectCaseStudies.findIndex((c) => c.slug === slug);
  if (i < 0) notFound();
  const cs = projectCaseStudies[i];
  const next = projectCaseStudies[(i + 1) % projectCaseStudies.length];

  // Section numbers follow whichever optional sections this project has.
  let n = 0;
  const idx = () => String(++n).padStart(2, "0");

  return (
    <>
      <Nav />
      <main
        data-accent
        style={{ "--pa-light": cs.accent.light, "--pa-dark": cs.accent.dark } as React.CSSProperties}
      >
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[620px] rounded-full bg-(--pa)/15 blur-[120px]" />
          <div className="container-page relative pt-10 pb-16 sm:pt-14 sm:pb-24">
            <Link href="/#work" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-3.5" /> back to work
            </Link>
            <div data-reveal className="mt-10 flex flex-wrap items-center gap-2">
              <Badge className="bg-(--pa) text-black">Case study</Badge>
              <Badge variant="outline">{cs.kicker}</Badge>
              <span className="font-mono text-xs text-muted-foreground">{cs.year}</span>
            </div>
            <h1 data-split className="mt-6 max-w-5xl font-display text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-balance">
              {cs.title}
            </h1>
            <p data-reveal className="mt-8 max-w-3xl font-serif text-3xl italic leading-snug text-(--pa) sm:text-4xl">
              {cs.oneLiner}
            </p>
            <p data-reveal className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {cs.problem}
            </p>
            <div data-reveal className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={cs.repo} target="_blank" rel="noreferrer">
                  View on GitHub <ArrowUpRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#architecture">
                  See the architecture <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="container-page py-16 sm:py-20">
          <p data-reveal className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-(--pa)" /> Impact
          </p>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {cs.impact.map((m) => (
              <div key={m.label} data-reveal className="relative flex flex-col-reverse bg-background p-6 sm:p-8">
                <dd className="mt-2 font-mono text-xs text-muted-foreground">{m.context}</dd>
                <dt className="mt-3 font-medium">{m.label}</dt>
                <dd className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                  {m.prefix ? <span className="text-(--pa)">{m.prefix}</span> : null}
                  <span data-count={m.value} data-decimals={m.decimals ?? 0} data-label={formatImpact(m)}>
                    {formatImpact(m)}
                  </span>
                  {m.suffix ? <span className="text-(--pa)">{m.suffix}</span> : null}
                </dd>
                <span aria-hidden data-bar className="absolute inset-x-0 top-0 h-0.5 origin-left bg-(--pa)" />
              </div>
            ))}
          </dl>
        </section>

        {/* Architecture */}
        <section id="architecture" className="scroll-mt-20 py-16 sm:py-24">
          <div className="container-page">
            <SectionTitle index={idx()} eyebrow="Architecture" title="How the pieces fit." body={cs.architecture.note} />
            <div data-reveal className="overflow-hidden rounded-3xl border bg-card">
              <div className="flex items-center justify-between border-b px-4 py-3 font-mono text-xs text-muted-foreground">
                <span>{cs.architecture.html.split("/").pop()}</span>
                <a href={cs.architecture.html} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
                  <Maximize2 className="size-3.5" /> open full screen
                </a>
              </div>
              <iframe
                src={cs.architecture.html}
                title={`${cs.title} interactive architecture diagram`}
                loading="lazy"
                className="hidden h-[78vh] max-h-[880px] min-h-[560px] w-full bg-background md:block"
              />
              {/* Phones get a static render; the interactive diagram needs width. */}
              <a href={cs.architecture.html} target="_blank" rel="noreferrer" className="relative block aspect-[2048/1320] md:hidden">
                <Image src={cs.architecture.dark} alt={`${cs.title} architecture diagram`} fill sizes="100vw" className="hidden object-contain dark:block" />
                <Image src={cs.architecture.light} alt={`${cs.title} architecture diagram`} fill sizes="100vw" className="object-contain dark:hidden" />
              </a>
            </div>
          </div>
        </section>

        {/* Numbers */}
        {cs.comparisons.length ? (
          <section className="border-y bg-card/30 py-16 sm:py-24">
            <div className="container-page">
              <SectionTitle index={idx()} eyebrow="By the numbers" title="What the data says." />
              <div className={cn("grid gap-5", cs.comparisons.length > 1 && "lg:grid-cols-2", cs.comparisons.length > 2 && "xl:grid-cols-3")}>
                {cs.comparisons.map((c) => (
                  <ComparisonCard key={c.title} c={c} />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Stages */}
        <section className={cn("py-16 sm:py-24", !cs.comparisons.length && "border-y bg-card/30")}>
          <div className="container-page">
            <SectionTitle index={idx()} eyebrow="How it works" title={`${cs.stages.length} stages, each with a job.`} />
            <Tabs defaultValue={cs.stages[0].id} data-reveal>
              <TabsList className="h-auto flex-wrap">
                {cs.stages.map((s) => (
                  <TabsTrigger key={s.id} value={s.id}>
                    {s.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {cs.stages.map((s, j) => (
                <TabsContent key={s.id} value={s.id}>
                  <div className="grid gap-8 rounded-3xl border bg-background p-6 sm:p-10 md:grid-cols-[1fr_2fr]">
                    <div>
                      <p className="font-mono text-xs text-(--pa)">stage 0{j + 1}</p>
                      <h3 className="mt-2 font-display text-4xl font-semibold tracking-tight">{s.title}</h3>
                    </div>
                    <ol className="space-y-5">
                      {s.points.map((pt, k) => (
                        <li key={pt} className="flex gap-4 leading-relaxed">
                          <span className="mt-0.5 font-mono text-xs text-muted-foreground">{String(k + 1).padStart(2, "0")}</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Visuals */}
        {cs.visuals.length ? (
          <section className="pb-16 sm:pb-24">
            <div className="container-page">
              <SectionTitle index={idx()} eyebrow="Evidence" title="Straight from the repo." />
              <div className={cn("grid gap-5", cs.visuals.length > 1 && "md:grid-cols-2")}>
                {cs.visuals.map((v) => (
                  <VisualCard key={v.title} v={v} />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Decisions */}
        <section className="border-t py-16 sm:py-24">
          <div className="container-page">
            <SectionTitle index={idx()} eyebrow="Engineering decisions" title="What I optimised for." />
            <div className="grid gap-5 md:grid-cols-2">
              {cs.decisions.map((d, j) => (
                <div key={d.title} data-reveal className="rounded-3xl border bg-card p-6 sm:p-8">
                  <p className="font-mono text-xs text-(--pa)">0{j + 1}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{d.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack + next */}
        <section className="border-t py-16 sm:py-24">
          <div className="container-page">
            <SectionTitle index={idx()} eyebrow="Stack" title="Built with." />
            <div data-reveal className="flex flex-wrap gap-2">
              {cs.stack.map((s) => (
                <Badge key={s} variant="outline" className="px-3 py-1 font-mono text-sm font-normal">
                  {s}
                </Badge>
              ))}
            </div>
            <Link
              href={`/projects/${next.slug}`}
              data-reveal
              className="group mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl border bg-card p-8 transition-colors hover:border-foreground/25 sm:flex-row sm:items-center sm:p-10"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Next case study</p>
                <p className="mt-2 font-display text-3xl font-semibold tracking-tight">{next.title}</p>
                <p className="mt-1 text-muted-foreground">{next.oneLiner}</p>
              </div>
              <span className="grid size-12 shrink-0 place-items-center rounded-full border transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="size-5" />
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <SiteMotion />
    </>
  );
}
