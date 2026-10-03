import { Badge } from "@/components/ui/badge";
import { experience, totalExperience } from "@/data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function Timeline() {
  return (
    <section id="experience" className="scroll-mt-20 border-t py-24 sm:py-32">
      <div className="container-page">
        <SectionTitle
          index="02"
          eyebrow={`Experience · ${totalExperience}`}
          title="Where I've worked."
          body="From analytics at a bank to data platforms at a ratings agency — the common thread is making data trustworthy enough to act on."
        />

        <div className="relative ml-2 border-l border-border/60 sm:ml-4">
          <span data-draw-line aria-hidden className="absolute -left-px top-0 h-full w-px origin-top bg-signal" />
          <ol className="space-y-10">
            {experience.map((e) => (
              <li key={e.company} className="relative pl-6 sm:pl-10">
                <span className="absolute -left-[7px] top-8 size-3.5 rounded-full border-2 border-signal bg-background" />
                <article data-reveal className="overflow-hidden rounded-3xl border bg-card">
                  <header className="flex flex-col gap-3 border-b p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">{e.kicker}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                        {e.role} <span className="text-muted-foreground">· {e.company}</span>
                      </h3>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground">
                      {e.period} · {e.location}
                    </p>
                  </header>
                  <ul className="divide-y">
                    {e.highlights.map((h) => (
                      <li key={h.metric} className="grid gap-3 p-6 sm:grid-cols-[11rem_1fr] sm:gap-8 sm:px-8">
                        <span className="w-fit self-start rounded-full bg-signal/10 px-3 py-1 font-mono text-xs font-medium text-signal ring-1 ring-signal/25">
                          {h.metric}
                        </span>
                        <p className="leading-relaxed text-muted-foreground">
                          {h.tag ? (
                            <Badge variant="outline" className="mr-2 align-middle font-mono text-[10px] font-normal">
                              {h.tag}
                            </Badge>
                          ) : null}
                          {h.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
