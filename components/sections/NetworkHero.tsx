"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { animate, createTimeline, stagger } from "animejs";

const HUB = { x: 320, y: 250 };
const NODE_R = 15;
const HUB_R = 21;

/**
 * The Wasabi operating model as a hub-and-spoke network: one capability hub
 * connecting the communities the programs serve. Nodes mirror the program
 * categories in content/programs.ts, so the diagram states the model rather
 * than decorating it.
 */
const NODES = [
  { x: 320, y: 72, label: "Students", labelY: 44 },
  { x: 540, y: 158, label: "Schools", labelY: 130 },
  { x: 540, y: 342, label: "Government", labelY: 388 },
  { x: 320, y: 428, label: "SHG Women", labelY: 474 },
  { x: 100, y: 342, label: "Startups", labelY: 388 },
  { x: 100, y: 158, label: "Builder Events", labelY: 130 },
];

const RING_LINES = NODES.map((node, index) => {
  const next = NODES[(index + 1) % NODES.length];
  return { x1: node.x, y1: node.y, x2: next.x, y2: next.y };
});

const SPOKE_LINES = NODES.map((node) => ({
  x1: HUB.x,
  y1: HUB.y,
  x2: node.x,
  y2: node.y,
}));

export function NetworkHero() {
  const svgRef = useRef<SVGSVGElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl || reducedMotion) return;

    const lines = Array.from(svgEl.querySelectorAll<SVGLineElement>(".network-line"));
    const nodes = Array.from(svgEl.querySelectorAll<SVGCircleElement>(".network-node"));
    const labels = Array.from(svgEl.querySelectorAll<SVGTextElement>(".network-label"));
    const hub = svgEl.querySelector<SVGCircleElement>(".network-hub");
    const hubGlow = svgEl.querySelector<SVGCircleElement>(".network-hub-glow");
    if (!hub || !hubGlow) return;

    // Prime the draw-on state by hand (version-stable alternative to svg helpers).
    for (const line of lines) {
      const length = line.getTotalLength();
      line.style.strokeDasharray = `${length}`;
      line.style.strokeDashoffset = `${length}`;
    }

    const timeline = createTimeline({
      defaults: { ease: "outCubic", duration: 900 },
    });

    timeline
      .add(lines, {
        strokeDashoffset: 0,
        delay: stagger(70),
      })
      .add(
        nodes,
        {
          r: [0, NODE_R],
          opacity: [0, 1],
          duration: 500,
          delay: stagger(70),
        },
        "-=700",
      )
      .add(
        labels,
        {
          opacity: [0, 1],
          duration: 420,
          delay: stagger(60),
        },
        "-=450",
      )
      .add(
        hub,
        {
          r: [0, HUB_R],
          opacity: [0, 1],
          duration: 650,
        },
        "-=350",
      );

    // Soft looping pulse once the hub has landed.
    const pulse = animate(hubGlow, {
      r: [HUB_R, HUB_R * 2.4],
      opacity: [0.28, 0],
      duration: 2000,
      delay: 2300,
      loop: true,
      ease: "outSine",
    });

    return () => {
      timeline.pause();
      pulse.pause();
    };
  }, [reducedMotion]);

  return (
    <motion.figure
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="network-hero-panel"
      aria-label="Diagram of the Wasabi model: one capability hub connecting students, schools, SHG women, government, startups, and builder events"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 640 520"
        role="img"
        aria-hidden="true"
        className="block h-auto w-full"
      >
        <g stroke="#2d6a4f" strokeLinecap="round" fill="none">
          {RING_LINES.map((line, index) => (
            <line
              key={`ring-${index}`}
              className="network-line"
              strokeWidth="1.5"
              strokeOpacity="0.35"
              {...line}
            />
          ))}
          {SPOKE_LINES.map((line, index) => (
            <line
              key={`spoke-${index}`}
              className="network-line"
              strokeWidth="2"
              strokeOpacity="0.55"
              {...line}
            />
          ))}
        </g>

        <g>
          {NODES.map((node) => (
            <circle
              key={node.label}
              className="network-node"
              cx={node.x}
              cy={node.y}
              r={NODE_R}
              fill="#2d6a4f"
            />
          ))}
        </g>

        <g
          fill="#11241f"
          fontSize="15"
          fontWeight="700"
          textAnchor="middle"
          style={{ letterSpacing: "0.06em", textTransform: "uppercase" }}
        >
          {NODES.map((node) => (
            <text key={node.label} className="network-label" x={node.x} y={node.labelY}>
              {node.label}
            </text>
          ))}
        </g>

        <circle
          className="network-hub-glow"
          cx={HUB.x}
          cy={HUB.y}
          r={HUB_R}
          fill="#e5784a"
          opacity="0"
        />
        <circle className="network-hub" cx={HUB.x} cy={HUB.y} r={HUB_R} fill="#e5784a" />
        <text
          x={HUB.x}
          y={HUB.y + 52}
          textAnchor="middle"
          fill="#e5784a"
          fontSize="16"
          fontWeight="800"
          style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          Wasabi
        </text>
      </svg>
      <figcaption>One capability hub, many communities — the Wasabi operating model.</figcaption>
    </motion.figure>
  );
}
