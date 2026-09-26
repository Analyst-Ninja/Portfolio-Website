"use client";

import { useRef } from "react";

import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap";

type Stage = { label: string; detail: string };
type Point = { x: number; y: number };

const NODE_W = 150;
const NODE_H = 56;

// Desktop: a gentle left→right wave. Mobile: a top→bottom zig-zag.
const LAYOUTS = {
  horizontal: {
    viewBox: "0 0 1200 240",
    points: (n: number): Point[] =>
      Array.from({ length: n }, (_, i) => ({ x: 100 + i * 200, y: [118, 82, 140, 92, 146, 108][i % 6] })),
    edge: (a: Point, b: Point) => {
      const x1 = a.x + NODE_W / 2;
      const x2 = b.x - NODE_W / 2;
      const mx = (x1 + x2) / 2;
      return `M${x1},${a.y} C${mx},${a.y} ${mx},${b.y} ${x2},${b.y}`;
    },
  },
  vertical: {
    viewBox: "0 0 360 660",
    points: (n: number): Point[] =>
      Array.from({ length: n }, (_, i) => ({ x: i % 2 ? 250 : 110, y: 60 + i * 108 })),
    edge: (a: Point, b: Point) => {
      const y1 = a.y + NODE_H / 2;
      const y2 = b.y - NODE_H / 2;
      const my = (y1 + y2) / 2;
      return `M${a.x},${y1} C${a.x},${my} ${b.x},${my} ${b.x},${y2}`;
    },
  },
} as const;

function Graph({ stages, orientation, className }: { stages: Stage[]; orientation: keyof typeof LAYOUTS; className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const layout = LAYOUTS[orientation];
  const pts = layout.points(stages.length);
  const edges = pts.slice(0, -1).map((p, i) => layout.edge(p, pts[i + 1]));

  useGSAP(
    () => {
      const svg = ref.current!;
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(svg);
        const loops: gsap.core.Animation[] = [];

        const intro = gsap.timeline({ delay: 0.4 });
        intro
          .from(q("[data-node]"), { autoAlpha: 0, scale: 0.85, transformOrigin: "50% 50%", duration: 0.6, stagger: 0.12, ease: "back.out(1.6)" })
          .from(q("[data-edge]"), { drawSVG: "0%", duration: 0.7, stagger: 0.12, ease: "power2.inOut" }, 0.2)
          .add(() => {
            loops.forEach((l) => l.play());
          });

        // Packets travel each edge; staggered so data looks like it flows through.
        q<SVGCircleElement>("[data-packet]").forEach((dot) => {
          const edge = Number(dot.dataset.edge);
          const lane = Number(dot.dataset.lane);
          const path = q<SVGPathElement>(`[data-edge="${edge}"]`)[0];
          loops.push(
            gsap.to(dot, {
              motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
              duration: 1.4,
              ease: "power1.inOut",
              repeat: -1,
              repeatDelay: 0.8,
              delay: edge * 0.35 + lane * 1.1,
              paused: true,
              onStart: () => gsap.set(dot, { autoAlpha: 1 }),
            })
          );
        });

        q("[data-glow]").forEach((glow, i) => {
          loops.push(
            gsap.fromTo(glow, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5, yoyo: true, repeat: -1, repeatDelay: 1.6, delay: i * 0.35, paused: true })
          );
        });

        // Only animate while on screen.
        const st = ScrollTrigger.create({
          trigger: svg,
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => {
            if (intro.isActive()) return;
            loops.forEach((l) => (self.isActive ? l.resume() : l.pause()));
          },
        });

        return () => st.kill();
      });
    },
    { scope: ref }
  );

  return (
    <svg
      ref={ref}
      viewBox={layout.viewBox}
      className={className}
      role="img"
      aria-label={`Data pipeline: ${stages.map((s) => s.label).join(" → ")}`}
    >
      <defs>
        <radialGradient id={`packet-${orientation}`}>
          <stop offset="0%" stopColor="var(--signal)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map((d, i) => (
        <path key={`e${i}`} data-edge={i} d={d} fill="none" className="stroke-foreground/25" strokeWidth={1.5} />
      ))}

      {edges.map((_, i) =>
        [0, 1].map((lane) => (
          <circle
            key={`p${i}-${lane}`}
            data-packet
            data-edge={i}
            data-lane={lane}
            r={7}
            cx={0}
            cy={0}
            fill={`url(#packet-${orientation})`}
            style={{ visibility: "hidden" }}
          />
        ))
      )}

      {stages.map((s, i) => {
        const p = pts[i];
        return (
          <g key={s.label} data-node transform={`translate(${p.x - NODE_W / 2} ${p.y - NODE_H / 2})`}>
            <rect
              data-glow
              x={-4}
              y={-4}
              width={NODE_W + 8}
              height={NODE_H + 8}
              rx={16}
              fill="none"
              stroke="var(--signal)"
              strokeOpacity={0.55}
              style={{ visibility: "hidden" }}
            />
            <rect width={NODE_W} height={NODE_H} rx={12} className="fill-card stroke-foreground/15" strokeWidth={1} />
            <circle cx={16} cy={NODE_H / 2} r={3.5} fill="var(--signal)" />
            <text x={28} y={24} className="fill-foreground font-display" fontSize={16} fontWeight={600}>
              {s.label}
            </text>
            <text x={28} y={42} className="fill-muted-foreground font-mono" fontSize={11}>
              {s.detail}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function PipelineHero({ stages }: { stages: Stage[] }) {
  return (
    <div className="relative">
      <Graph stages={stages} orientation="horizontal" className="hidden w-full md:block" />
      <Graph stages={stages} orientation="vertical" className="mx-auto block w-full max-w-sm md:hidden" />
    </div>
  );
}
