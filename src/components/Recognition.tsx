import { ArrowUpRight, Award, BadgeCheck, GraduationCap } from "lucide-react";

import { awards, certifications, education } from "@/data/portfolioData";
import SectionTitle from "./SectionTitle";

const label = "flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground";

export default function Recognition() {
  return (
    <section id="recognition" className="scroll-mt-20 border-t bg-card/30 py-14 sm:py-20">
      <div className="container-page">
        <SectionTitle index="02" eyebrow="Recognition & learning" title="Awards, education, certifications." />

        <div data-reveal className="flex items-center justify-between">
          <h3 className={label}>
            <Award className="size-4 text-signal" /> Awards
          </h3>
          <span className="font-mono text-[11px] text-muted-foreground md:hidden">swipe →</span>
        </div>
        {/* Swipe row on mobile, grid from md up. Negative margin lets cards bleed to the screen edge. */}
        <ol className="no-scrollbar -mx-4 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {awards.map((a) => (
            <li key={a.title} data-reveal className="flex w-[80%] shrink-0 snap-start flex-col rounded-[1.25rem] border bg-card p-5 sm:w-[45%] md:w-auto">
              <span className="w-fit rounded-full bg-signal/10 px-2.5 py-0.5 font-mono text-[11px] text-signal">{a.date}</span>
              <p className="mt-2.5 font-display font-semibold leading-snug">{a.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{a.org}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-10">
          <div>
            <h3 className={label}>
              <GraduationCap className="size-4 text-signal" /> Education
            </h3>
            <p className="mt-3 font-display font-semibold leading-snug">{education.school}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {education.degree} · {education.year}
            </p>
          </div>

          <div>
            <h3 className={label}>
              <BadgeCheck className="size-4 text-signal" /> Certifications
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {certifications.map((c) => {
                const meta = c.date ? `${c.org} · ${c.date}` : c.org;
                const chip = "inline-flex items-center gap-1 rounded-full border bg-card px-3 py-1.5 text-xs font-medium";
                return (
                  <li key={c.title}>
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        title={meta}
                        className={`${chip} group transition-colors hover:border-signal/50 hover:text-signal hover:glow`}
                      >
                        {c.title}
                        <ArrowUpRight className="size-3 text-muted-foreground transition-colors group-hover:text-signal" />
                      </a>
                    ) : (
                      <span title={meta} className={chip}>
                        {c.title}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
