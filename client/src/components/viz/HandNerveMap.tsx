import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Segmented, Cite } from "@/components/kit";
import { CYAN, ORANGE } from "./BodyFigure";

type Mode = "nerves" | "inner" | "outer";

// Right hand, palm facing the viewer: little finger on the left, thumb on the right.
const FINGERS = [
  { key: "little", x: 147, y: 272, w: 30, L: 108, a: -11, nerve: "ulnar" },
  { key: "ring", x: 184, y: 258, w: 34, L: 146, a: -4, nerve: "split" },
  { key: "middle", x: 224, y: 252, w: 36, L: 160, a: 1, nerve: "median" },
  { key: "index", x: 264, y: 262, w: 34, L: 144, a: 7, nerve: "median" },
] as const;

const THUMB = { x: 290, y: 398, w: 42, L: 124, a: 46 };

function fingerPath(w: number, L: number) {
  const r = w / 2;
  return `M${-r} 6 L${-r} ${-(L - r)} A${r} ${r} 0 0 1 ${r} ${-(L - r)} L${r} 6 Z`;
}

const PALM =
  "M150 548 C146 500 132 452 126 404 C120 356 120 312 132 282 C150 262 170 254 196 252 C226 248 256 250 284 262 C300 272 304 300 306 330 C318 352 330 380 322 412 C312 452 290 488 276 548 Z";

const COPY: Record<Mode, { title: string; tone: "precision" | "power" | "neutral"; body: React.ReactNode; facts: [string, string][] }> = {
  nerves: {
    title: "Two nerves, two jobs",
    tone: "neutral",
    body: (
      <>
        Every hand is wired by two main nerves that come from different roots in the neck and split the hand between
        them. The <span className="text-precision">median nerve</span> runs through the carpal tunnel to the thumb side.
        The <span className="text-power">ulnar nerve</span> runs past the &ldquo;funny bone&rdquo; to the little-finger
        side, then dives deep into the palm to power the small muscles that lock a grip.
      </>
    ),
    facts: [
      ["Median nerve", "C5–T1 roots · carpal tunnel · thumb, index, middle, half of ring"],
      ["Ulnar nerve", "C8–T1 roots · Guyon's canal · little finger, half of ring, deep palm"],
    ],
  },
  inner: {
    title: "Inner Grip · the precision chain",
    tone: "precision",
    body: (
      <>
        The thumb opposing the index and middle fingertips is what scientists call the <em>precision grip</em>
        <Cite id="napier1956" />. It is driven largely by the median nerve: the thumb's thenar muscles and the forearm
        flexors. Neuromotion follows that line of control up the body as the Inner Grip: forearm flexors, chest, core,
        quads, and the big-toe side of the foot.
      </>
    ),
    facts: [
      ["Fingers", "Thumb · index · middle"],
      ["Governs", "Fine control, alignment, accuracy, sequencing"],
    ],
  },
  outer: {
    title: "Outer Grip · the power chain",
    tone: "power",
    body: (
      <>
        Clamping an object into the palm is the <em>power grip</em>
        <Cite id="napier1956" />. The ring and little fingers anchor it, and the ulnar nerve supplies the deep
        intrinsic muscles (interossei, hypothenar, adductor pollicis) that lock it down. Neuromotion follows this line up
        the outside and back of the body as the Outer Grip: rear shoulder, lats, spinal erectors, glutes, hamstrings,
        and the outer edge of the foot.
      </>
    ),
    facts: [
      ["Fingers", "Ring · little"],
      ["Governs", "Force, stability, protection, structure"],
    ],
  },
};

export function HandNerveMap() {
  const [mode, setMode] = useState<Mode>("nerves");
  const id = useId().replace(/:/g, "");
  const copy = COPY[mode];

  const fillFor = (nerve: string) => {
    if (mode === "nerves") return nerve === "ulnar" ? `url(#${id}-ul)` : nerve === "split" ? `url(#${id}-split)` : `url(#${id}-md)`;
    if (mode === "inner") return nerve === "median" ? `url(#${id}-md)` : `url(#${id}-skin)`;
    return nerve === "ulnar" || nerve === "split" ? `url(#${id}-ul)` : `url(#${id}-skin)`;
  };
  const glowFinger = (key: string) =>
    (mode === "inner" && (key === "index" || key === "middle")) || (mode === "outer" && (key === "ring" || key === "little"));

  return (
    <div className="panel grid overflow-hidden rounded-3xl lg:grid-cols-[1.05fr_1fr]">
      <div className="relative flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.07),transparent_70%)] p-6 md:p-10">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
        <svg viewBox="76 70 330 590" className="relative h-[460px] w-auto max-w-full md:h-[540px]" role="img" aria-label="Right hand, palm view, showing median and ulnar nerve territories">
          <defs>
            <linearGradient id={`${id}-skin`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#1a2944" />
              <stop offset="1" stopColor="#0f1a2e" />
            </linearGradient>
            <linearGradient id={`${id}-md`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#22d3ee" stopOpacity="0.55" />
              <stop offset="1" stopColor="#0e7490" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id={`${id}-ul`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#ff8a1f" stopOpacity="0.6" />
              <stop offset="1" stopColor="#9a3412" stopOpacity="0.38" />
            </linearGradient>
            <linearGradient id={`${id}-split`} x1="0" x2="1" y1="0" y2="0">
              <stop offset="0.5" stopColor="#ff8a1f" stopOpacity="0.55" />
              <stop offset="0.5" stopColor="#22d3ee" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id={`${id}-palm`} x1="0" x2="1" y1="0" y2="0">
              {mode === "nerves" ? (
                <>
                  <stop offset="0.31" stopColor="#ff8a1f" stopOpacity="0.32" />
                  <stop offset="0.31" stopColor="#22d3ee" stopOpacity="0.28" />
                </>
              ) : mode === "inner" ? (
                <>
                  <stop offset="0.45" stopColor="#1a2944" />
                  <stop offset="0.75" stopColor="#22d3ee" stopOpacity="0.35" />
                </>
              ) : (
                <>
                  <stop offset="0.0" stopColor="#ff8a1f" stopOpacity="0.45" />
                  <stop offset="0.6" stopColor="#1a2944" />
                </>
              )}
            </linearGradient>
            <filter id={`${id}-glow`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* forearm */}
          <path d="M150 548 C150 580 146 610 144 660 L284 660 C280 610 276 580 276 548 Z" fill={`url(#${id}-skin)`} stroke="rgba(148,197,255,0.35)" strokeWidth={2} />

          {/* palm + digits: outline pass then fill */}
          <g stroke="rgba(148,197,255,0.4)" strokeWidth={2.4} fill="none">
            <path d={PALM} />
            {FINGERS.map((f) => (
              <path key={f.key} d={fingerPath(f.w, f.L)} transform={`translate(${f.x} ${f.y}) rotate(${f.a})`} />
            ))}
            <path d={fingerPath(THUMB.w, THUMB.L)} transform={`translate(${THUMB.x} ${THUMB.y}) rotate(${THUMB.a})`} />
          </g>
          <path d={PALM} fill={`url(#${id}-skin)`} />
          <path d={PALM} fill={`url(#${id}-palm)`} />
          {FINGERS.map((f) => (
            <g key={f.key} transform={`translate(${f.x} ${f.y}) rotate(${f.a})`}>
              <path d={fingerPath(f.w, f.L)} fill={`url(#${id}-skin)`} />
              <motion.path
                d={fingerPath(f.w, f.L)}
                fill={fillFor(f.nerve)}
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              {[0.33, 0.62].map((t) => (
                <line key={t} x1={-f.w / 2 + 5} x2={f.w / 2 - 5} y1={-f.L * t} y2={-f.L * t} stroke="rgba(226,232,240,0.18)" strokeWidth={1.2} />
              ))}
              {glowFinger(f.key) && (
                <circle cx={0} cy={-(f.L - f.w / 2)} r={f.w / 2 + 6} fill="none" stroke={mode === "inner" ? CYAN : ORANGE} strokeWidth={2} className="breathe" />
              )}
            </g>
          ))}
          <g transform={`translate(${THUMB.x} ${THUMB.y}) rotate(${THUMB.a})`}>
            <path d={fingerPath(THUMB.w, THUMB.L)} fill={`url(#${id}-skin)`} />
            <path d={fingerPath(THUMB.w, THUMB.L)} fill={mode === "outer" ? `url(#${id}-skin)` : `url(#${id}-md)`} />
            <line x1={-14} x2={14} y1={-THUMB.L * 0.5} y2={-THUMB.L * 0.5} stroke="rgba(226,232,240,0.18)" strokeWidth={1.2} />
            {mode === "inner" && <circle cx={0} cy={-(THUMB.L - 20)} r={26} fill="none" stroke={CYAN} strokeWidth={2} className="breathe" />}
          </g>

          {/* palm landmarks */}
          <g fill="none" stroke="rgba(226,232,240,0.14)" strokeWidth={1.4} strokeLinecap="round">
            <path d="M140 330 C180 318 230 316 296 300" />
            <path d="M150 360 C190 350 230 344 262 350" />
            <path d="M282 330 C254 380 246 430 250 500" />
          </g>

          {/* thenar / hypothenar muscle masses */}
          <ellipse cx={270} cy={440} rx={30} ry={52} transform="rotate(-18 270 440)" fill={CYAN} opacity={mode === "outer" ? 0.04 : 0.16} />
          <ellipse cx={152} cy={430} rx={22} ry={58} transform="rotate(6 152 430)" fill={ORANGE} opacity={mode === "inner" ? 0.04 : mode === "outer" ? 0.3 : 0.16} />

          {/* carpal tunnel ligament + Guyon's canal */}
          <path d="M178 520 Q214 500 252 520" fill="none" stroke="rgba(226,232,240,0.5)" strokeWidth={3} strokeLinecap="round" />
          <circle cx={164} cy={522} r={9} fill="none" stroke="rgba(226,232,240,0.45)" strokeWidth={2} />

          {/* nerves */}
          <g fill="none" strokeLinecap="round" filter={`url(#${id}-glow)`} opacity={mode === "outer" ? 0.35 : 1}>
            <path id={`${id}-mdTrunk`} d="M214 660 C214 600 214 560 214 516 C214 480 218 440 226 400" stroke={CYAN} strokeWidth={4} />
            <path d="M226 400 C240 380 250 360 268 300 C276 240 278 200 278 152" stroke={CYAN} strokeWidth={2.4} />
            <path d="M226 400 C226 340 226 260 226 110" stroke={CYAN} strokeWidth={2.4} />
            <path d="M222 404 C210 360 200 320 192 260 C188 230 188 200 188 168" stroke={CYAN} strokeWidth={2} />
            <path d="M226 400 C250 400 280 400 300 380 C320 350 340 320 368 296" stroke={CYAN} strokeWidth={2.4} />
            <path d="M232 470 C246 462 258 454 268 446" stroke={CYAN} strokeWidth={2} strokeDasharray="3 3" />
          </g>
          <g fill="none" strokeLinecap="round" filter={`url(#${id}-glow)`} opacity={mode === "inner" ? 0.35 : 1}>
            <path d="M166 660 C166 600 166 560 164 522 C162 490 160 460 160 430" stroke={ORANGE} strokeWidth={4} />
            <path d="M160 430 C156 380 150 330 142 280 C134 240 130 210 128 180" stroke={ORANGE} strokeWidth={2.4} />
            <path d="M160 430 C168 380 174 320 178 260 C174 220 172 190 171 152" stroke={ORANGE} strokeWidth={2} />
            {/* deep motor branch arcing across the palm toward the thumb */}
            <path d="M162 470 C190 470 230 452 268 418" stroke={ORANGE} strokeWidth={2.4} strokeDasharray="5 4" />
          </g>
          {/* impulses */}
          <g fill="none" strokeLinecap="round" strokeWidth={6}>
            {mode !== "outer" && (
              <path d="M214 660 C214 600 214 560 214 516 C214 480 218 440 226 400 C226 340 226 260 226 110" pathLength={100} stroke="#ecfeff" className="impulse" style={{ ["--dur" as string]: "2s" }} />
            )}
            {mode !== "inner" && (
              <path d="M166 660 C166 600 166 560 164 522 C162 490 160 460 160 430 C156 380 150 330 142 280 C134 240 130 210 128 180" pathLength={100} stroke="#fff7ed" className="impulse" style={{ ["--dur" as string]: "2.3s", ["--delay" as string]: "0.6s" }} />
            )}
          </g>

          {/* labels */}
          <g fontFamily="JetBrains Mono, monospace" fontSize={11}>
            <text x={222} y={650} fill="#a5f3fc">MEDIAN</text>
            <text x={158} y={650} fill="#fed7aa" textAnchor="end">ULNAR</text>
            <text x={258} y={540} fill="rgba(226,232,240,0.6)" fontSize={9}>carpal tunnel</text>
            <text x={150} y={548} fill="rgba(226,232,240,0.6)" fontSize={9} textAnchor="end">Guyon's canal</text>
          </g>
        </svg>
      </div>

      <div className="flex flex-col justify-center gap-6 border-t border-white/[0.06] p-7 md:p-10 lg:border-l lg:border-t-0">
        <Segmented<Mode>
          value={mode}
          onChange={setMode}
          options={[
            { value: "nerves", label: "The wiring", tone: "neutral" },
            { value: "inner", label: "Inner Grip", tone: "precision" },
            { value: "outer", label: "Outer Grip", tone: "power" },
          ]}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <h3
              className={
                "font-display text-3xl font-semibold " +
                (copy.tone === "precision" ? "text-precision" : copy.tone === "power" ? "text-power" : "text-white")
              }
            >
              {copy.title}
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{copy.body}</p>
            <dl className="mt-6 divide-y divide-white/[0.06] rounded-2xl border border-white/[0.08] bg-black/20">
              {copy.facts.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[110px_1fr] gap-4 px-4 py-3 text-sm">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{k}</dt>
                  <dd className="text-white/90">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </AnimatePresence>
        <p className="text-xs leading-relaxed text-muted-foreground/80">
          Right hand, palm facing you. Shaded areas show which nerve supplies the skin. The dashed orange line is the ulnar
          nerve's deep branch, which crosses the palm to power the grip muscles.
        </p>
      </div>
    </div>
  );
}
