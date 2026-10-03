import { stackGroups } from "@/data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function StackSection() {
  const all = stackGroups.flatMap((g) => g.items);

  return (
    <section id="stack" className="scroll-mt-20 border-t bg-card/30 py-14 sm:py-20">
      <div className="container-page">
        <SectionTitle
          index="04"
          eyebrow="Toolbox"
          title="Tools I reach for, layer by layer."
          body="Grouped the way data moves: in, through, stored, shipped — and handed to a model."
        />
      </div>

      {/* Marquee: the track holds the list twice so a -50% loop is seamless. */}
      <div
        aria-hidden
        className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
      >
        <div data-marquee className="flex w-max gap-3">
          {[...all, ...all].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-full border bg-background px-5 py-2.5 font-display text-lg font-medium sm:text-xl"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="container-page mt-10">
        <div className="grid gap-px overflow-hidden rounded-[1.25rem] border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((g, i) => (
            <div key={g.title} data-reveal className="bg-card p-5">
              <h3 className="flex items-baseline gap-2 text-sm font-semibold">
                <span className="font-mono text-xs font-normal text-signal">0{i + 1}</span>
                {g.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <li key={it} className="rounded-full border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
