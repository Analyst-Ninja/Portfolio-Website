import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Accent, Project } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

// Per-project accent dot/glow. Add an entry here when adding a new `accent`.
const ACCENTS: Record<Accent, string> = {
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

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const p = project;
  return (
    <Card
      data-reveal
      className="group relative gap-5 overflow-hidden py-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-foreground/25"
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
        <CardTitle className="mt-3 font-display text-2xl tracking-tight">{p.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
        <ul className="space-y-2">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm leading-relaxed">
              <span className="mt-[0.6em] h-px w-3 shrink-0 bg-foreground/40" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {p.stack.map((s) => (
            <span key={s} className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground">
              {s}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-5 border-t pt-5 text-sm">
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
