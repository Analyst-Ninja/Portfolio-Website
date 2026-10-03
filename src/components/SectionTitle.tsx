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
    <div className={cn("mb-8 grid gap-4 md:mb-10 md:grid-cols-[1.5fr_1fr] md:items-end", className)} data-reveal>
      <div>
        <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-signal">{index}</span>
          <span className="text-muted-foreground/50">/</span>
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-balance sm:text-4xl">
          {title}
        </h2>
      </div>
      {body ? (
        <p className="hidden max-w-md text-base leading-relaxed text-muted-foreground md:block md:justify-self-end">{body}</p>
      ) : null}
    </div>
  );
}
