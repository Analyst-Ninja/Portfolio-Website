import Image from "next/image";

import { consolePreview, interests, profile, totalExperience } from "@/data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-page">
        <SectionTitle
          index="04"
          eyebrow="About"
          title={
            <>
              Data engineer by trade, <span className="font-serif font-normal italic text-signal">builder</span> by habit.
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] [&>*]:min-w-0">
          <div data-reveal className="relative">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border bg-card ring-1 ring-signal/30 ring-offset-8 ring-offset-background">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border bg-background/85 p-4 backdrop-blur sm:left-auto sm:w-64">
              <p className="font-mono text-xs text-muted-foreground">currently</p>
              <p className="mt-1 text-sm font-medium">
                {profile.title} @ {profile.employer}
              </p>
              <p className="text-xs text-muted-foreground">{totalExperience} in data · {profile.location}</p>
            </div>
          </div>

          <div className="flex flex-col gap-8 pt-6 lg:pt-0">
            <div data-reveal className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I started on the analytics side at Axis Bank — requirements, reporting, data quality — and moved into
                engineering because I wanted to fix problems at the source. Today at{" "}
                <span className="text-foreground">{profile.employer}</span> I build ingestion frameworks, an Iceberg
                lakehouse with an MCP server on top, and the CLEANews APIs that feed agentic-AI workflows — work
                recognised with Moody&apos;s IM&apos;PACT Award.
              </p>
              <p>
                Outside work I build end-to-end platforms to go deeper than any one job allows: AURUM took a stock-research
                idea from raw SEC filings to a scheduled ML pipeline on AWS. Lately I&apos;m most curious about the seam
                between data and AI — giving LLMs safe, governed access to real data.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {interests.map((it) => (
                <div key={it.title} data-reveal className="rounded-2xl border bg-card p-5">
                  <h3 className="font-display font-semibold">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                </div>
              ))}
            </div>

            <div data-reveal className="overflow-hidden rounded-2xl border bg-[#0b0c0e] text-[#d6d7d2]">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="ml-3 font-mono text-[11px] text-white/40">~/rohit — zsh</span>
              </div>
              <pre data-type-lines className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7">
                {consolePreview.map((line) => (
                  <div key={line} className={line.startsWith("$") ? "text-white" : "text-[#c6f432]/85"}>
                    {line}
                  </div>
                ))}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
