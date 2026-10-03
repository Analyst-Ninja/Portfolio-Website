import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, ExternalLink, Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies, projects } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import ProjectCard, { ACCENTS } from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Work() {
  const aurum = projects.find((x) => x.slug === "aurum")!;
  const cs = caseStudies.aurum;
  const rest = projects.filter((p) => p.slug !== "aurum");
  const featured = rest.filter((p) => p.caseStudy);
  const more = rest.filter((p) => !p.caseStudy);

  return (
    <section id="work" className="scroll-mt-20 border-t py-14 sm:py-20">
      <div className="container-page">
        <SectionTitle
          index="03"
          eyebrow="Selected work"
          title={
            <>
              Built on my own time, <span className="text-gradient">for the craft.</span>
            </>
          }
          body="Personal builds that go deeper than any one job allows."
        />

        {/* AURUM flagship */}
        <article data-reveal className="group relative overflow-hidden rounded-[1.25rem] border bg-card transition-shadow duration-500 hover:shadow-[0_0_0_1px_color-mix(in_srgb,var(--gold)_40%,transparent),0_24px_70px_-24px_color-mix(in_srgb,var(--gold)_50%,transparent)]">
          <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="grid md:grid-cols-[1fr_1.1fr]">
            <div className="relative flex flex-col gap-5 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-gold text-black">{aurum.status}</Badge>
                <span className="font-mono text-[11px] text-muted-foreground">{cs.expansion}</span>
              </div>
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  AURUM <span className="text-gold">solo.</span>
                </h3>
                <p className="mt-2 text-muted-foreground">{cs.oneLiner}</p>
                <p className="mt-3 hidden text-sm leading-relaxed text-muted-foreground md:block">{aurum.summary}</p>
              </div>

              <dl className="grid grid-cols-3 gap-3 border-t pt-5">
                {cs.numbers.slice(0, 3).map((n) => (
                  <div key={n.label} className="flex flex-col-reverse">
                    <dt className="mt-1 text-[11px] leading-snug text-muted-foreground">{n.label}</dt>
                    <dd className="font-display text-2xl font-semibold tracking-tight">{n.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex flex-wrap gap-2.5">
                <Button asChild className="glow">
                  <Link href={aurum.caseStudy!}>
                    Case study <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={aurum.demo} target="_blank" rel="noreferrer">
                    <Play /> Demo
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href={aurum.repo} target="_blank" rel="noreferrer">
                    Code <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </div>

            <Link
              href={aurum.caseStudy!}
              className="relative hidden overflow-hidden border-l bg-background/60 md:block"
              aria-label="Open AURUM architecture case study"
            >
              <Image
                src={cs.architecturePng.dark}
                alt="AURUM system architecture diagram"
                fill
                sizes="(min-width: 768px) 50vw, 0px"
                className="hidden object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03] dark:block"
              />
              <Image
                src={cs.architecturePng.light}
                alt="AURUM system architecture diagram"
                fill
                sizes="(min-width: 768px) 50vw, 0px"
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03] dark:hidden"
              />
            </Link>
          </div>
        </article>

        {/* Case-study projects: swipe row on mobile, 2×2 grid from md up */}
        <div className="mt-8 flex items-center justify-between md:hidden">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Case studies</p>
          <span className="font-mono text-[11px] text-muted-foreground">swipe →</span>
        </div>
        <div className="no-scrollbar -mx-4 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 sm:-mx-8 sm:px-8 md:mx-0 md:mt-5 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i + 2} className="w-[85%] shrink-0 snap-start sm:w-[60%] md:w-auto" />
          ))}
        </div>

        {/* Remaining builds, collapsed */}
        <details data-reveal className="group/more mt-6 rounded-[1.25rem] border bg-card/50">
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-medium [&::-webkit-details-marker]:hidden">
            <span>
              {more.length} more builds
              <span className="ml-2 font-mono text-xs font-normal text-muted-foreground">
                {more.map((p) => p.title.split(" ")[0]).join(" · ")}
              </span>
            </span>
            <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-open/more:rotate-180" />
          </summary>
          <ul className="divide-y border-t">
            {more.map((p) => (
              <li
                key={p.slug}
                className="grid items-center gap-x-6 gap-y-1 px-5 py-4 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_auto]"
              >
                <p className="flex items-center gap-2.5 font-display font-semibold">
                  <span className={cn("size-2 shrink-0 rounded-full", ACCENTS[p.accent])} />
                  {p.title}
                  <span className="font-mono text-xs font-normal text-muted-foreground">{p.year}</span>
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <div className="flex gap-4 text-sm">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium hover:text-signal">
                    Code <ArrowUpRight className="size-4" />
                  </a>
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium hover:text-signal">
                      Live app <ExternalLink className="size-3.5" />
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
