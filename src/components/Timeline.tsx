import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { experience, totalExperience } from "@/data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function Timeline() {
  return (
    <section id="experience" className="scroll-mt-20 border-t py-14 sm:py-20">
      <div className="container-page">
        <SectionTitle
          index="01"
          eyebrow={`Experience · ${totalExperience}`}
          title="Where I've worked."
          body="Analytics at a bank, then data platforms at a ratings agency — making data trustworthy enough to act on."
        />

        {/* No data-reveal inside panels: inactive tabs are unmounted/hidden and would miss their trigger. */}
        <Tabs defaultValue={experience[0].company} data-reveal className="gap-5">
          <TabsList>
            {experience.map((e) => (
              <TabsTrigger key={e.company} value={e.company}>
                {e.company}
              </TabsTrigger>
            ))}
          </TabsList>

          {experience.map((e) => (
            <TabsContent key={e.company} value={e.company} className="overflow-hidden rounded-[1.25rem] border bg-card">
              <header className="flex flex-col gap-1 border-b p-5 sm:flex-row sm:items-baseline sm:justify-between sm:p-6">
                <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {e.role} <span className="text-muted-foreground">· {e.company}</span>
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {e.period} · {e.location}
                </p>
              </header>
              <ul className="grid md:grid-cols-2 [&>li:not(:first-child)]:border-t md:[&>li:nth-child(2)]:border-t-0 md:[&>li:nth-child(odd)]:border-r">
                {e.highlights.map((h) => (
                  <li key={h.metric} className="p-5 sm:p-6">
                    <p className="flex flex-wrap items-center gap-2">
                      <span className="text-xl font-semibold tracking-tight text-signal">{h.metric}</span>
                      {h.tag ? (
                        <Badge variant="outline" className="font-mono text-[10px] font-normal">
                          {h.tag}
                        </Badge>
                      ) : null}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
