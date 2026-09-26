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
        <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((g, i) => (
            <div key={g.title} data-reveal className="bg-background p-6">
              <p className="font-mono text-xs text-signal">0{i + 1}</p>
              <h3 className="mt-2 font-display text-lg font-semibold">{g.title}</h3>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
