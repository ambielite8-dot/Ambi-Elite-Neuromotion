import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Segmented } from "@/components/kit";
import { BodyFigure } from "./BodyFigure";
import { INNER_NODES, OUTER_NODES } from "./anatomy";
import { cn } from "@/lib/utils";

type Mode = "nervous" | "inner" | "outer";

const COPY: Record<Mode, { title: string; tone: "neutral" | "precision" | "power"; body: string; items: string[] }> = {
  nervous: {
    title: "One system, wired in two halves",
    tone: "neutral",
    body: "The brain sends commands down the spinal cord, and nerves branch out to every muscle on both sides. In the arms, the median nerve (cyan) and ulnar nerve (orange) run side by side to opposite edges of the hand. Each side of the body has its own complete set of wiring.",
    items: ["Brain: two hemispheres + the corpus callosum", "Spinal cord: the main highway", "Brachial plexus → median, ulnar, radial nerves", "Lumbosacral plexus → femoral and sciatic nerves"],
  },
  inner: {
    title: "Inner Grip chain (front view)",
    tone: "precision",
    body: "Precision starts at the thumb, index and middle fingers and runs up the front of the body. This is the chain that aligns, aims and refines.",
    items: INNER_NODES.map((n) => n[2]),
  },
  outer: {
    title: "Outer Grip chain (back view)",
    tone: "power",
    body: "Power starts at the ring and little fingers and runs along the outside and back of the body. This is the chain that grounds, protects and drives.",
    items: OUTER_NODES.map((n) => n[2]),
  },
};

export function ChainExplorer() {
  const [mode, setMode] = useState<Mode>("nervous");
  const c = COPY[mode];
  return (
    <div className="panel grid overflow-hidden rounded-3xl lg:grid-cols-[1fr_1fr]">
      <div className="relative flex items-center justify-center p-6 md:p-10">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
        <BodyFigure
          className="relative h-[540px] w-auto md:h-[680px]"
          nervous
          nervousDim={mode !== "nervous"}
          chains={mode === "nervous" ? "none" : mode}
          view={mode === "outer" ? "back" : "front"}
        />
        <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {mode === "outer" ? "Posterior view" : "Anterior view"}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 border-t border-white/[0.06] p-7 md:p-10 lg:border-l lg:border-t-0">
        <Segmented<Mode>
          value={mode}
          onChange={setMode}
          options={[
            { value: "nervous", label: "Nervous system", tone: "neutral" },
            { value: "inner", label: "Inner chain", tone: "precision" },
            { value: "outer", label: "Outer chain", tone: "power" },
          ]}
        />
        <AnimatePresence mode="wait">
          <motion.div key={mode} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
            <h3 className={cn("font-display text-3xl font-semibold", c.tone === "precision" ? "text-precision" : c.tone === "power" ? "text-power" : "text-white")}>
              {c.title}
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{c.body}</p>
            <ol className="mt-6 space-y-2">
              {c.items.map((it, i) => (
                <li key={it} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-2.5 text-sm text-white/90">
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[11px]",
                      c.tone === "precision" ? "bg-primary/15 text-precision" : c.tone === "power" ? "bg-accent/15 text-power" : "bg-white/10 text-white",
                    )}
                  >
                    {i + 1}
                  </span>
                  {it}
                </li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
