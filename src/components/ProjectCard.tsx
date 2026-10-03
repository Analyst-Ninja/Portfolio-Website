import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Accent, Project } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

// Per-project accent dot/glow. Add an entry here when adding a new `accent`.
export const ACCENTS: Record<Accent, string> = {
  gold: "bg-amber-400",
  vector: "bg-violet-400",
  feeds: "bg-lime-400",
  lake: "bg-sky-400",
  stream: "bg-cyan-400",
  airflow: "bg-teal-400",
  api: "bg-indigo-400",
  realtime: "bg-rose-400",
  product: "bg-emerald-400",
};

const MAX_CHIPS = 4;

export default function ProjectCard({
  project,
  index,
  className,
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  const p = project;
  return (
    <Card
      data-reveal
      className={cn(
        "group relative gap-4 overflow-hidden py-5 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-foreground/25",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25",
          ACCENTS[p.accent]
        )}
      />
      <CardHeader>
        <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className={cn("size-2 rounded-full", ACCENTS[p.accent])} />
            {String(index).padStart(2, "0")} · {p.year}
          </span>
          <Badge variant={p.status === "Live Demo" ? "default" : "outline"} className="font-mono font-normal">
            {p.status}
          </Badge>
        </div>
        <CardTitle className="mt-2 font-display text-xl tracking-tight">{p.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-3">
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground" title={p.summary}>
          {p.summary}
        </p>
        <p className="flex gap-2 font-mono text-xs leading-relaxed text-signal">
          <span aria-hidden>→</span>
          {p.highlights[0]}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {p.stack.slice(0, MAX_CHIPS).map((s) => (
            <span key={s} className="rounded-full border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
              {s}
            </span>
          ))}
          {p.stack.length > MAX_CHIPS ? (
            <span className="px-1 py-0.5 font-mono text-[11px] text-muted-foreground">+{p.stack.length - MAX_CHIPS}</span>
          ) : null}
        </div>
      </CardContent>

      <CardFooter className="gap-5 border-t pt-4 text-sm">
        <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium hover:text-signal">
          Code <ArrowUpRight className="size-4" />
        </a>
        {p.caseStudy ? (
          <Link href={p.caseStudy} className="inline-flex items-center gap-1 font-medium text-signal hover:underline underline-offset-4">
            Case study <ArrowRight className="size-4" />
          </Link>
        ) : null}
        {p.live ? (
          <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium hover:text-signal">
            Live app <ExternalLink className="size-3.5" />
          </a>
        ) : null}
      </CardFooter>
    </Card>
  );
}
