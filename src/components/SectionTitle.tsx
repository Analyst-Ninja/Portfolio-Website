import { cn } from "@/lib/utils";

export default function SectionTitle({
  index,
  eyebrow,
  title,
  body,
  className,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 grid gap-6 md:mb-16 md:grid-cols-[1fr_1.4fr] md:items-end", className)} data-reveal>
      <div>
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-signal">{index}</span>
          <span className="h-px w-8 bg-border" />
          {eyebrow}
        </p>
        <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-5xl">
          {title}
        </h2>
      </div>
      {body ? <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:justify-self-end">{body}</p> : null}
    </div>
  );
}
