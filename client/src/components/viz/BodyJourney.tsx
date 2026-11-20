import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { BodyFigure, CYAN, ORANGE, type ChainMode } from "./BodyFigure";
import { DOMINANT, DORMANT } from "./AmbiCurve";
import { Cite } from "@/components/kit";
import { cn } from "@/lib/utils";

type Step = {
  kicker: string;
  title: string;
  body: React.ReactNode;
  tone: "precision" | "power" | "neutral";
  chains: ChainMode;
  view: "front" | "back";
  dim: boolean;
  zoom: { scale: number; y: string };
  curve?: boolean;
  label: string;
};

const STEPS: Step[] = [
  {
    kicker: "01 · The system",
    title: "One nervous system. Two complete halves.",
    body: "Your brain sends every command down the spinal cord and out through nerves that branch to both sides of your body. Left and right each have a full set of wiring: every nerve, every muscle chain.",
    tone: "neutral",
    chains: "none",
    view: "front",
    dim: false,
    zoom: { scale: 1, y: "0%" },
    label: "Anterior view · nervous system",
  },
  {
    kicker: "02 · The command center",
    title: "Two hemispheres, joined by one bridge.",
    body: (
      <>
        Each hemisphere mainly drives the opposite side of your body: 85–90% of motor fibers cross over
        <Cite id="corticospinal" />. The corpus callosum, about 200 million fibers, lets the two halves work as one
        <Cite id="statpearlsCC" />. Neglect one side of your body and you under-train the side of your brain behind it.
      </>
    ),
    tone: "neutral",
    chains: "none",
    view: "front",
    dim: false,
    zoom: { scale: 3.4, y: "46%" },
    label: "Brain · corpus callosum",
  },
  {
    kicker: "03 · Inner Grip",
    title: "The precision chain.",
    body: "Thumb, index and middle fingers, driven largely by the median nerve. From there, Neuromotion traces a line of control up the front of the body: forearm flexors, chest, core, quads, and down to the big-toe side of the foot. This chain aims, aligns and refines.",
    tone: "precision",
    chains: "inner",
    view: "front",
    dim: true,
    zoom: { scale: 1, y: "0%" },
    label: "Anterior view · Inner Grip chain",
  },
  {
    kicker: "04 · Outer Grip",
    title: "The power chain.",
    body: "Ring and little fingers, anchored by the ulnar nerve's deep grip muscles. The line runs along the back and outside of the body: rear shoulder, lats, spinal erectors, glutes, hamstrings and the outer edge of the foot. This chain grounds, protects and drives.",
    tone: "power",
    chains: "outer",
    view: "back",
    dim: true,
    zoom: { scale: 1, y: "0%" },
    label: "Posterior view · Outer Grip chain",
  },
  {
    kicker: "05 · Dynamic Balance",
    title: "Precision on one side. Power on the other.",
    body: "When the attacking side runs Inner Grip, the base side runs Outer Grip. Alternation traps energy inside the body so it becomes control. Two precision chains have nothing grounding them. Two power chains have nothing steering them.",
    tone: "neutral",
    chains: "balance-right",
    view: "front",
    dim: true,
    zoom: { scale: 1, y: "0%" },
    label: "Attack: Inner Grip · Base: Outer Grip",
  },
  {
    kicker: "06 · The Ambi Curve",
    title: "Energy moves in arcs, and you have two.",
    body: "From the Base foot, through the hip, diagonally across the back and out the Anchor hand. One arc has had millions of reps. The mirror-image arc, the dormant half of your Dual Energy Cycle, is waiting to be built.",
    tone: "power",
    chains: "none",
    view: "front",
    dim: true,
    zoom: { scale: 1, y: "0%" },
    curve: true,
    label: "Dominant cycle · dormant cycle",
  },
];

function StepText({ step, index, onActive }: { step: Step; index: number; onActive: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  const [wide, setWide] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => setWide(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);
  return (
    <div ref={ref} className="flex min-h-[78vh] items-center py-10 lg:min-h-screen">
      <motion.div
        animate={{ opacity: inView ? 1 : wide ? 0.25 : 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-white/[0.06] bg-[#070b14]/80 p-6 backdrop-blur-md lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-0"
      >
        <div
          className={cn(
            "font-mono text-[11px] uppercase tracking-[0.24em]",
            step.tone === "precision" ? "text-precision" : step.tone === "power" ? "text-power" : "text-muted-foreground",
          )}
        >
          {step.kicker}
        </div>
        <h3 className="mt-3 text-balance font-display text-3xl font-semibold leading-[1.05] text-white md:text-5xl">{step.title}</h3>
        <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">{step.body}</p>
      </motion.div>
    </div>
  );
}

export function BodyJourney() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <div className="relative grid lg:grid-cols-2 lg:gap-16">
      {/* pinned figure */}
      <div className="sticky top-16 z-0 h-[52vh] self-start lg:top-0 lg:h-screen">
        <div className="relative flex h-full items-center justify-center overflow-hidden lg:pt-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.10),transparent_65%)]" />
          <motion.div
            className="relative aspect-[400/900] h-[88%] lg:h-[min(80vh,860px)]"
            animate={{ scale: step.zoom.scale, y: step.zoom.y }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "50% 8%" }}
          >
            <BodyFigure className="h-full w-full" chains={step.chains} view={step.view} nervousDim={step.dim}>
              <AnimatePresence>
                {step.curve && (
                  <motion.g key="curve" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} fill="none" strokeLinecap="round">
                    <motion.path d={DOMINANT} stroke={CYAN} strokeWidth={5} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, ease: "easeInOut" }} />
                    <path d={DOMINANT} pathLength={100} stroke="#ecfeff" strokeWidth={9} className="impulse" style={{ ["--dur" as string]: "1.8s" }} />
                    <motion.path d={DORMANT} stroke={ORANGE} strokeWidth={3} strokeDasharray="6 8" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 1.2, duration: 0.8 }} />
                  </motion.g>
                )}
              </AnimatePresence>
            </BodyFigure>
          </motion.div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:bottom-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="whitespace-nowrap rounded-full border border-white/10 bg-[#070b14]/80 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur"
              >
                {step.label}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* step dots */}
          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col gap-2 lg:right-0">
            {STEPS.map((s, i) => (
              <span key={s.kicker} className={cn("h-1.5 w-1.5 rounded-full transition-all", i === active ? "h-6 bg-white" : "bg-white/25")} />
            ))}
          </div>
        </div>
      </div>

      {/* scrolling story */}
      <div className="relative z-10 -mt-[20vh] lg:mt-0">
        {STEPS.map((s, i) => (
          <StepText key={s.kicker} step={s} index={i} onActive={setActive} />
        ))}
      </div>
    </div>
  );
}
