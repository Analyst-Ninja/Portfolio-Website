import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Maximize2, Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import SiteMotion from "@/components/motion/SiteMotion";
import { caseStudies } from "@/data/portfolioData";

const cs = caseStudies.aurum;

export const metadata: Metadata = {
  title: "AURUM — case study",
  description: `${cs.oneLiner} Ingestion, a dbt warehouse, an ML ranking model and AWS orchestration — built solo by Rohit Kumar.`,
};

export default function AurumCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[620px] rounded-full bg-gold/10 blur-[120px]" />
          <div className="container-page relative pt-10 pb-16 sm:pt-14 sm:pb-24">
            <Link href="/#work" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-3.5" /> back to work
            </Link>
            <div data-reveal className="mt-10 flex flex-wrap gap-2">
              <Badge className="bg-gold text-black">Case study</Badge>
              <Badge variant="outline">{cs.expansion}</Badge>
            </div>
            <h1 data-split className="mt-6 font-display text-[clamp(3.5rem,13vw,10rem)] font-semibold leading-[0.85] tracking-[-0.045em]">
              {cs.title}
            </h1>
            <p data-reveal className="mt-8 max-w-3xl font-serif text-3xl italic leading-snug text-gold sm:text-4xl">
              {cs.oneLiner}
            </p>
            <p data-reveal className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {cs.problem}
            </p>
            <div data-reveal className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={cs.demo} target="_blank" rel="noreferrer">
                  <Play /> Watch the demo
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={cs.repo} target="_blank" rel="noreferrer">
                  View on GitHub <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Numbers */}
        <section className="container-page py-16">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3 lg:grid-cols-6">
            {cs.numbers.map((n) => (
              <div key={n.label} data-reveal className="flex flex-col-reverse bg-background p-5">
                <dt className="mt-1 text-xs text-muted-foreground">{n.label}</dt>
                <dd className="font-display text-3xl font-semibold tracking-tight">{n.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Architecture */}
        <section id="architecture" className="py-16 sm:py-24">
          <div className="container-page">
            <SectionTitle
              index="01"
              eyebrow="Architecture"
              title="One system, as built."
              body="Interactive diagram of what runs today — switch between the Terraform, data-path and orchestration views inside the frame."
            />
            <div data-reveal className="overflow-hidden rounded-3xl border bg-card">
              <div className="flex items-center justify-between border-b px-4 py-3 font-mono text-xs text-muted-foreground">
                <span>aurum-architecture.html</span>
                <a
                  href={cs.architectureHtml}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-foreground"
                >
                  <Maximize2 className="size-3.5" /> open full screen
                </a>
              </div>
              <iframe
                src={cs.architectureHtml}
                title="AURUM interactive architecture diagram"
                loading="lazy"
                className="hidden h-[78vh] min-h-[560px] w-full bg-background md:block"
              />
              {/* Phones get a static render; the interactive diagram needs width. */}
              <a href={cs.architectureHtml} target="_blank" rel="noreferrer" className="relative block aspect-[2048/1320] md:hidden">
                <Image src={cs.architecturePng.dark} alt="AURUM architecture diagram" fill sizes="100vw" className="hidden object-contain dark:block" />
                <Image src={cs.architecturePng.light} alt="AURUM architecture diagram" fill sizes="100vw" className="object-contain dark:hidden" />
              </a>
            </div>
          </div>
        </section>

        {/* Stages */}
        <section className="border-y bg-card/30 py-16 sm:py-24">
          <div className="container-page">
            <SectionTitle index="02" eyebrow="How it works" title="Four layers, each with a job." />
            <Tabs defaultValue={cs.stages[0].id} data-reveal>
              <TabsList>
                {cs.stages.map((s) => (
                  <TabsTrigger key={s.id} value={s.id}>
                    {s.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {cs.stages.map((s, i) => (
                <TabsContent key={s.id} value={s.id}>
                  <div className="grid gap-8 rounded-3xl border bg-background p-6 sm:p-10 md:grid-cols-[1fr_2fr]">
                    <div>
                      <p className="font-mono text-xs text-gold">stage 0{i + 1}</p>
                      <h3 className="mt-2 font-display text-4xl font-semibold tracking-tight">{s.title}</h3>
                    </div>
                    <ol className="space-y-5">
                      {s.points.map((pt, j) => (
                        <li key={pt} className="flex gap-4 leading-relaxed">
                          <span className="mt-0.5 font-mono text-xs text-muted-foreground">{String(j + 1).padStart(2, "0")}</span>
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

        {/* Decisions */}
        <section className="py-16 sm:py-24">
          <div className="container-page">
            <SectionTitle index="03" eyebrow="Engineering decisions" title="What I optimised for." />
            <div className="grid gap-5 md:grid-cols-2">
              {cs.decisions.map((d, i) => (
                <div key={d.title} data-reveal className="rounded-3xl border bg-card p-6 sm:p-8">
                  <p className="font-mono text-xs text-gold">0{i + 1}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{d.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack + CTA */}
        <section className="border-t py-16 sm:py-24">
          <div className="container-page">
            <SectionTitle index="04" eyebrow="Stack" title="Built with." />
            <div data-reveal className="flex flex-wrap gap-2">
              {cs.stack.map((s) => (
                <Badge key={s} variant="outline" className="px-3 py-1 font-mono text-sm font-normal">
                  {s}
                </Badge>
              ))}
            </div>
            <div data-reveal className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl border bg-card p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <p className="font-display text-2xl font-semibold tracking-tight">See it run.</p>
                <p className="mt-1 text-muted-foreground">A 40-second walkthrough of the whole system, one continuous shot.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href={cs.demo} target="_blank" rel="noreferrer">
                    <Play /> Watch demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/#work">More projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SiteMotion />
    </>
  );
}
