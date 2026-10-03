import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies, projects } from "@/data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function FeaturedProject() {
  const p = projects.find((x) => x.slug === "aurum")!;
  const cs = caseStudies.aurum;

  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-page">
        <SectionTitle
          index="04"
          eyebrow="Flagship"
          title={
            <>
              AURUM — the whole data stack, <span className="font-serif font-normal italic text-gold">solo.</span>
            </>
          }
          body={cs.oneLiner + " " + cs.problem}
        />

        <article
          data-reveal
          className="group relative overflow-hidden rounded-3xl border bg-card"
        >
          <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="grid lg:grid-cols-[1fr_1.25fr]">
            <div className="relative flex flex-col gap-8 p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-gold text-black">{p.status}</Badge>
                <Badge variant="outline">{cs.expansion}</Badge>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">{p.summary}</p>

              <ul className="space-y-3">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {h}
                  </li>
                ))}
              </ul>

              <dl className="grid grid-cols-3 gap-4 border-t pt-6">
                {cs.numbers.slice(0, 3).map((n) => (
                  <div key={n.label} className="flex flex-col-reverse">
                    <dt className="mt-1 text-xs text-muted-foreground">{n.label}</dt>
                    <dd className="font-display text-2xl font-semibold tracking-tight">{n.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={p.caseStudy!}>
                    Read case study <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    <Play /> Watch demo
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    Code <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </div>

            <Link
              href={p.caseStudy!}
              className="relative block min-h-64 overflow-hidden border-t bg-background/60 lg:border-t-0 lg:border-l"
              aria-label="Open AURUM architecture case study"
            >
              <Image
                src={cs.architecturePng.dark}
                alt="AURUM system architecture diagram"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="hidden object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03] dark:block"
              />
              <Image
                src={cs.architecturePng.light}
                alt="AURUM system architecture diagram"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03] dark:hidden"
              />
              <span className="absolute bottom-4 left-4 rounded-full border bg-background/80 px-3 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur">
                architecture · interactive →
              </span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 border-t px-6 py-5 sm:px-10">
            {p.stack.map((s) => (
              <Badge key={s} variant="outline" className="font-mono font-normal">
                {s}
              </Badge>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
