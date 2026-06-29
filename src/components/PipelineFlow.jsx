"use client";

import { motion, useReducedMotion } from "framer-motion";

// Signature element: data flows through the four stages of a pipeline.
// Particles travel ingest -> process -> store -> serve; nodes pulse in sequence.
const stages = [
  { key: "ingest", label: "Ingest", glyph: "stream" },
  { key: "process", label: "Process", glyph: "gear" },
  { key: "store", label: "Store", glyph: "stack" },
  { key: "serve", label: "Serve", glyph: "api" },
];

const X = [90, 277, 463, 650];
const Y = 70;
const R = 26;

function Glyph({ type }) {
  switch (type) {
    case "stream":
      return (
        <>
          <path d="M-9 -5 H9 M-9 0 H9 M-9 5 H9" />
        </>
      );
    case "gear":
      return (
        <>
          <circle cx="0" cy="0" r="5.5" />
          <path d="M0 -10 V-7 M0 7 V10 M-10 0 H-7 M7 0 H10 M-7 -7 L-5 -5 M7 7 L5 5 M7 -7 L5 -5 M-7 7 L-5 5" />
        </>
      );
    case "stack":
      return (
        <>
          <path d="M-9 -6 L0 -10 L9 -6 L0 -2 Z M-9 0 L0 4 L9 0 M-9 6 L0 10 L9 6" />
        </>
      );
    case "api":
      return (
        <>
          <path d="M-3 -8 L-9 0 L-3 8 M3 -8 L9 0 L3 8" />
        </>
      );
    default:
      return null;
  }
}

function PipelineFlow() {
  const reduce = useReducedMotion();

  return (
    <div className="pipeline" aria-hidden="true">
      <svg viewBox="0 0 740 140" role="img" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="pf-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* connecting track */}
        <line
          x1={X[0]}
          y1={Y}
          x2={X[3]}
          y2={Y}
          stroke="url(#pf-line)"
          strokeWidth="2"
        />

        {/* flowing particles */}
        {!reduce &&
          [0, 1, 2, 3, 4].map((i) => (
            <motion.circle
              key={i}
              cy={Y}
              r="3.5"
              fill="var(--accent)"
              initial={{ cx: X[0], opacity: 0 }}
              animate={{
                cx: [X[0], X[3]],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3.2,
                delay: i * 0.64,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

        {/* nodes */}
        {stages.map((stage, i) => (
          <g key={stage.key} transform={`translate(${X[i]} ${Y})`}>
            <motion.circle
              r={R}
              className="pipeline__node"
              initial={false}
              animate={
                reduce
                  ? {}
                  : { scale: [1, 1.12, 1], opacity: [0.85, 1, 0.85] }
              }
              transition={{
                duration: 3.2,
                delay: i * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <g className="pipeline__glyph">
              <Glyph type={stage.glyph} />
            </g>
            <text className="pipeline__label" y={R + 22} textAnchor="middle">
              {stage.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default PipelineFlow;
