import { ArrowUpRight, Award, BadgeCheck, GraduationCap } from "lucide-react";

import { awards, certifications, education } from "@/data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function Recognition() {
  return (
    <section className="border-t bg-card/30 py-24 sm:py-32">
      <div className="container-page">
        <SectionTitle index="03" eyebrow="Recognition & learning" title="Awards, education, certifications." />

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div data-reveal className="rounded-3xl border bg-background p-6 sm:p-8">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <Award className="size-4 text-signal" /> Awards
            </h3>
            <ol className="mt-6 space-y-6">
              {awards.map((a) => (
                <li key={a.title} className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-6">
                  <span className="font-mono text-xs text-signal sm:pt-1">{a.date}</span>
                  <div>
                    <p className="font-display text-lg font-semibold leading-snug">{a.title}</p>
                    <p className="text-xs text-muted-foreground">{a.org}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-5">
            <div data-reveal className="rounded-3xl border bg-background p-6 sm:p-8">
              <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <GraduationCap className="size-4 text-signal" /> Education
              </h3>
              <p className="mt-5 font-display text-lg font-semibold leading-snug">{education.school}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {education.degree} · {education.year}
              </p>
            </div>

            <div data-reveal className="rounded-3xl border bg-background p-6 sm:p-8">
              <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <BadgeCheck className="size-4 text-signal" /> Certifications
              </h3>
              <ul className="mt-5 space-y-3">
                {certifications.map((c) => (
                  <li key={c.title} className="text-sm">
                    {c.url ? (
                      <a href={c.url} target="_blank" rel="noreferrer" className="group inline-flex items-start gap-1 font-medium hover:text-signal">
                        {c.title}
                        <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-signal" />
                      </a>
                    ) : (
                      <span className="font-medium">{c.title}</span>
                    )}
                    <span className="block text-xs text-muted-foreground">
                      {c.date ? `${c.org} · ${c.date}` : c.org}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
