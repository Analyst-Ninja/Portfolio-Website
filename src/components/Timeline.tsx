import { experience, totalExperience } from "@/data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function Timeline() {
  return (
    <section id="experience" className="scroll-mt-20 border-t py-24 sm:py-32">
      <div className="container-page">
        <SectionTitle index="05" eyebrow={`Experience · ${totalExperience}`} title="Where I've worked." />

        <div className="relative ml-2 border-l border-border/60 sm:ml-4">
          <span data-draw-line aria-hidden className="absolute -left-px top-0 h-full w-px origin-top bg-signal" />
          <ol>
          {experience.map((e) => (
            <li key={e.company} data-reveal className="relative pb-14 pl-8 last:pb-0 sm:pl-12">
              <span className="absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-signal bg-background" />
              <div className="grid gap-3 md:grid-cols-[14rem_1fr] md:gap-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">{e.kicker}</p>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">{e.period}</p>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {e.role} <span className="text-muted-foreground">· {e.company}</span>
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{e.description}</p>
                </div>
              </div>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
