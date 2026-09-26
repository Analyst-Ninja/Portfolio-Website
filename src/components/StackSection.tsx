import { stackGroups } from "@/data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function StackSection() {
  const all = stackGroups.flatMap((g) => g.items);
  const half = Math.ceil(all.length / 2);
  const rows = [all.slice(0, half), all.slice(half)];

  return (
    <section id="stack" className="scroll-mt-20 border-y bg-card/30 py-24 sm:py-32">
      <div className="container-page">
        <SectionTitle
          index="03"
          eyebrow="Toolbox"
          title="Tools I reach for, layer by layer."
          body="Grouped the way data actually moves: in, through, stored, shipped — and increasingly, handed to a model."
        />
      </div>

      {/* Marquee: each track holds the row twice so a -50% loop is seamless. */}
      <div
        aria-hidden
        className="mb-16 space-y-3 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
      >
        {rows.map((row, r) => (
          <div key={r} data-marquee={r % 2 ? "reverse" : undefined} className="flex w-max gap-3">
            {[...row, ...row].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="whitespace-nowrap rounded-full border bg-background px-5 py-2.5 font-display text-lg font-medium sm:text-xl"
              >
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="container-page">
        <div className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((g, i) => (
            <div key={g.title} data-reveal className="bg-background p-5">
              <h3 className="flex items-baseline gap-2 font-display text-base font-semibold">
                <span className="font-mono text-xs font-normal text-signal">0{i + 1}</span>
                {g.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <li key={it} className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground">
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
