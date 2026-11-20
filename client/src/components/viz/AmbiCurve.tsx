import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Segmented, Cite } from "@/components/kit";
import { BodyFigure, CYAN, ORANGE } from "./BodyFigure";
import { smooth } from "./anatomy";

type Mode = "dominant" | "dormant" | "both";

// Cross-body arc from the Base foot, up through the hip, diagonally across the back to the opposite shoulder and out the Anchor hand.
const ARC: [number, number][] = [
  [38, 878], [40, 760], [44, 650], [48, 540], [46, 472], [22, 424], [-6, 360], [-40, 286], [-80, 222], [-104, 214], [-118, 300], [-130, 380], [-142, 452], [-146, 504],
];
export const DOMINANT = smooth(ARC, 1);
export const DORMANT = smooth(ARC, -1);

const COPY: Record<Mode, { title: string; body: string }> = {
  dominant: {
    title: "The cycle you already own",
    body: "A right-hander plants the left leg and finishes with the right hand. That diagonal arc from Base foot, through the hip, across the back and out the Anchor hand has been rehearsed millions of times. It feels effortless because it is wired.",
  },
  dormant: {
    title: "The cycle you never built",
    body: "The mirror-image arc uses the same bones, muscles and nerves. It just never got the reps. That's why the off-side feels clumsy: the energy path was never activated, so force leaks out before it arrives.",
  },
  both: {
    title: "The Dual Energy Cycle",
    body: "Two arcs, two directions, one body. NST trains the dormant cycle until both directions are fluent and either side can stabilize or execute on demand. That's ambidexterity as a human capacity, not a party trick.",
  },
};

export function AmbiCurve() {
  const [mode, setMode] = useState<Mode>("dominant");
  const showDom = mode !== "dormant" || true;
  const domActive = mode === "dominant" || mode === "both";
  const dorActive = mode === "dormant" || mode === "both";

  return (
    <div className="panel grid overflow-hidden rounded-3xl lg:grid-cols-[1fr_1fr]">
      <div className="relative flex items-center justify-center p-6 md:p-10">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
        <BodyFigure className="relative h-[520px] w-auto md:h-[620px]" nervous nervousDim title="The Ambi Curve: a cross-body energy arc">
          <defs>
            <filter id="arc-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {showDom && (
            <g fill="none" strokeLinecap="round" filter="url(#arc-glow)">
              <motion.path d={DOMINANT} stroke={CYAN} animate={{ strokeWidth: domActive ? 5 : 2, opacity: domActive ? 1 : 0.25 }} />
              {domActive && <path d={DOMINANT} pathLength={100} stroke="#ecfeff" strokeWidth={9} className="impulse" style={{ ["--dur" as string]: "1.8s" }} />}
            </g>
          )}
          <g fill="none" strokeLinecap="round" filter="url(#arc-glow)">
            <motion.path
              d={DORMANT}
              stroke={ORANGE}
              strokeDasharray={dorActive ? "0" : "6 8"}
              animate={{ strokeWidth: dorActive ? 5 : 2, opacity: dorActive ? 1 : 0.35 }}
            />
            {dorActive && <path d={DORMANT} pathLength={100} stroke="#fff7ed" strokeWidth={9} className="impulse" style={{ ["--dur" as string]: "1.8s", ["--delay" as string]: "0.9s" }} />}
          </g>
          {/* Base + Anchor markers */}
          <g fontFamily="JetBrains Mono, monospace" fontSize={13} fontWeight={600}>
            {domActive && (
              <>
                <circle cx={238} cy={878} r={9} fill={CYAN} />
                <text x={252} y={870} fill="#a5f3fc">BASE</text>
                <circle cx={54} cy={504} r={9} fill={CYAN} />
                <text x={8} y={540} fill="#a5f3fc">ANCHOR</text>
              </>
            )}
            {dorActive && (
              <>
                <circle cx={162} cy={878} r={9} fill={ORANGE} />
                <text x={148} y={870} fill="#fed7aa" textAnchor="end">BASE</text>
                <circle cx={346} cy={504} r={9} fill={ORANGE} />
                <text x={392} y={540} fill="#fed7aa" textAnchor="end">ANCHOR</text>
              </>
            )}
          </g>
        </BodyFigure>
      </div>
      <div className="flex flex-col justify-center gap-6 border-t border-white/[0.06] p-7 md:p-10 lg:border-l lg:border-t-0">
        <Segmented<Mode>
          value={mode}
          onChange={setMode}
          options={[
            { value: "dominant", label: "Dominant cycle", tone: "precision" },
            { value: "dormant", label: "Dormant cycle", tone: "power" },
            { value: "both", label: "Both: the goal", tone: "neutral" },
          ]}
        />
        <AnimatePresence mode="wait">
          <motion.div key={mode} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
            <h3 className="font-display text-3xl font-semibold text-white">{COPY[mode].title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{COPY[mode].body}</p>
          </motion.div>
        </AnimatePresence>
        <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-5 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-white">Grounded in anatomy.</span> This cross-body route follows what anatomists
          call the posterior oblique sling: the glute on one side links through the thoracolumbar fascia to the lat on the
          other, carrying load from the legs to the opposite arm
          <Cite id="vleeming1995" />.
        </div>
      </div>
    </div>
  );
}
