import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { Segmented } from "@/components/kit";
import { BodyFigure, type ChainMode } from "./BodyFigure";

type Grip = "inner" | "outer";

function Leak() {
  const sparks = Array.from({ length: 14 }).map((_, i) => {
    const a = (i / 14) * Math.PI * 2;
    return { x: 200 + Math.cos(a) * 70, y: 330 + Math.sin(a) * 150, dx: Math.cos(a) * 60, dy: Math.sin(a) * 60, d: (i % 5) * 0.25 };
  });
  return (
    <g>
      {sparks.map((s, i) => (
        <motion.circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={3.5}
          fill="#fbbf24"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], cx: [s.x, s.x + s.dx], cy: [s.y, s.y + s.dy] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: s.d, ease: "easeOut" }}
        />
      ))}
    </g>
  );
}

export function DynamicBalanceLab() {
  const [right, setRight] = useState<Grip>("inner");
  const [left, setLeft] = useState<Grip>("outer");
  const valid = right !== left;
  const mode: ChainMode = valid ? (right === "inner" ? "balance-right" : "balance-left") : right === "inner" ? "inner" : "outer";

  return (
    <div className="panel grid overflow-hidden rounded-3xl lg:grid-cols-[1fr_1.1fr]">
      <div className="relative flex items-center justify-center p-6 md:p-10">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
        <BodyFigure className="relative h-[500px] w-auto md:h-[600px]" nervous nervousDim chains={mode} title="Dynamic Balance Rule demonstration">
          {!valid && <Leak />}
          <g fontFamily="JetBrains Mono, monospace" fontSize={14} fontWeight={600} fill="rgba(226,232,240,0.7)">
            <text x={36} y={140}>R</text>
            <text x={356} y={140}>L</text>
          </g>
        </BodyFigure>
      </div>
      <div className="flex flex-col justify-center gap-7 border-t border-white/[0.06] p-7 md:p-10 lg:border-l lg:border-t-0">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Try the rule</div>
          <h3 className="mt-2 font-display text-3xl font-semibold text-white">Precision and power must alternate.</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Choose which grip each side of the body is running. The figure faces you, so its right side is on your left.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Right side</div>
            <Segmented<Grip>
              value={right}
              onChange={setRight}
              options={[
                { value: "inner", label: "Inner Grip", tone: "precision" },
                { value: "outer", label: "Outer Grip", tone: "power" },
              ]}
            />
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Left side</div>
            <Segmented<Grip>
              value={left}
              onChange={setLeft}
              options={[
                { value: "inner", label: "Inner Grip", tone: "precision" },
                { value: "outer", label: "Outer Grip", tone: "power" },
              ]}
            />
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${right}-${left}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={
              "rounded-2xl border p-5 " +
              (valid ? "border-emerald-400/30 bg-emerald-400/[0.06]" : "border-amber-400/40 bg-amber-400/[0.08]")
            }
          >
            <div className="flex items-center gap-2 font-semibold text-white">
              {valid ? <CheckCircle2 className="h-5 w-5 text-emerald-400" /> : <AlertTriangle className="h-5 w-5 text-amber-400" />}
              {valid ? "Energy contained" : "Energy leak"}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {valid
                ? `The ${right === "inner" ? "right" : "left"} side runs precision while the ${right === "inner" ? "left" : "right"} side runs power. Force is generated on one side and steered on the other, so energy stays trapped inside the system.`
                : right === "inner"
                  ? "Two precision chains and no power chain: nothing is grounding the movement. It feels delicate, shaky and unsupported."
                  : "Two power chains and no precision chain: plenty of force with no steering. It feels stiff, heavy and inaccurate."}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl border border-white/[0.06] p-3 text-muted-foreground">
            <span className="text-precision">Attack</span> side = Inner Grip
            <br />
            <span className="text-power">Base</span> side = Outer Grip
          </div>
          <div className="rounded-xl border border-white/[0.06] p-3 text-muted-foreground">
            <span className="text-power">Attack</span> side = Outer Grip
            <br />
            <span className="text-precision">Base</span> side = Inner Grip
          </div>
        </div>
      </div>
    </div>
  );
}
