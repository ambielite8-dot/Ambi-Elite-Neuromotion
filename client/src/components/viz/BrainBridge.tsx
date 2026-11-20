import { useId, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Segmented, Cite } from "@/components/kit";
import { CYAN, ORANGE } from "./BodyFigure";

type Mode = "bilateral" | "onesided";

const W = 600;
const mirror = (d: string) =>
  d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_, x, y) => `${(W - parseFloat(x)).toFixed(1)} ${y}`);

const LEFT_HEMI =
  "M292 62 C250 46 196 56 164 92 C132 128 118 182 120 236 C122 296 138 352 170 392 C200 428 248 446 292 432 C296 380 294 330 294 280 C294 200 294 130 292 62 Z";
const RIGHT_HEMI = mirror(LEFT_HEMI);

const GYRI_L = [
  "M270 80 C240 96 222 84 196 104 C176 120 170 140 152 150",
  "M282 130 C252 140 240 124 210 146 C190 162 176 160 142 196",
  "M286 186 C256 196 236 182 214 206 C196 224 170 222 132 246",
  "M286 244 C258 252 240 240 216 262 C196 282 168 280 134 300",
  "M286 302 C260 312 238 300 218 322 C200 340 180 340 152 352",
  "M282 360 C258 370 240 360 222 380 C206 396 190 400 176 400",
  "M240 70 C236 100 250 120 236 150 C226 172 238 196 226 220",
  "M196 120 C200 150 186 176 196 204 C204 230 190 256 196 282",
];

export function BrainBridge() {
  const [mode, setMode] = useState<Mode>("bilateral");
  const id = useId().replace(/:/g, "");
  const fibers = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => {
        const y = 140 + i * 14;
        const xl = 214 + ((i * 37) % 56);
        const sag = 8 + (i % 5) * 7;
        return `M${xl} ${y} C${xl + 40} ${y + sag} ${W - xl - 40} ${y + sag} ${W - xl} ${y}`;
      }),
    [],
  );
  const bi = mode === "bilateral";

  return (
    <div className="panel overflow-hidden rounded-3xl">
      <div className="flex flex-col items-start justify-between gap-4 border-b border-white/[0.06] p-6 md:flex-row md:items-center md:px-8">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">The corpus callosum</div>
          <div className="mt-1 font-display text-xl font-semibold text-white">The bridge between your two brains</div>
        </div>
        <Segmented<Mode>
          value={mode}
          onChange={setMode}
          options={[
            { value: "bilateral", label: "Both sides trained", tone: "precision" },
            { value: "onesided", label: "One-sided living", tone: "power" },
          ]}
        />
      </div>

      <div className="grid items-center gap-6 p-6 md:p-8 lg:grid-cols-[1fr_1.5fr_1fr]">
        <div className="order-2 space-y-4 lg:order-1">
          <div className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-precision">Left hemisphere</div>
            <div className="mt-2 text-sm font-medium text-white">Drives the right side of the body</div>
            <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Hubs for language, sequencing, timing and fine detail.
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            About 85–90% of the motor fibers leaving each hemisphere cross to the opposite side of the body
            <Cite id="corticospinal" />. A neglected side of the body means a less-trained side of the brain.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <svg viewBox="0 0 600 640" className="mx-auto w-full max-w-[520px]" role="img" aria-label="Top-down view of the two brain hemispheres joined by the corpus callosum, with motor pathways crossing to the opposite side of the body">
            <defs>
              <radialGradient id={`${id}-L`} cx="0.6" cy="0.45" r="0.7">
                <stop offset="0" stopColor="#164e63" />
                <stop offset="1" stopColor="#0b2230" />
              </radialGradient>
              <radialGradient id={`${id}-R`} cx="0.4" cy="0.45" r="0.7">
                <stop offset="0" stopColor="#5a2a0c" />
                <stop offset="1" stopColor="#2a1406" />
              </radialGradient>
              <filter id={`${id}-glow`} x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <clipPath id={`${id}-cl`}>
                <path d={LEFT_HEMI} />
              </clipPath>
              <clipPath id={`${id}-cr`}>
                <path d={RIGHT_HEMI} />
              </clipPath>
            </defs>

            {/* hemispheres */}
            <path d={LEFT_HEMI} fill={`url(#${id}-L)`} stroke={CYAN} strokeOpacity={0.55} strokeWidth={2} />
            <path d={RIGHT_HEMI} fill={`url(#${id}-R)`} stroke={ORANGE} strokeOpacity={bi ? 0.55 : 0.3} strokeWidth={2} />
            <g clipPath={`url(#${id}-cl)`} fill="none" stroke="#67e8f9" strokeOpacity={0.35} strokeWidth={2} strokeLinecap="round">
              {GYRI_L.map((d) => (
                <path key={d} d={d} />
              ))}
            </g>
            <motion.g
              clipPath={`url(#${id}-cr)`}
              fill="none"
              stroke="#fdba74"
              strokeWidth={2}
              strokeLinecap="round"
              animate={{ strokeOpacity: bi ? 0.35 : 0.12 }}
            >
              {GYRI_L.map((d) => (
                <path key={d} d={mirror(d)} />
              ))}
            </motion.g>

            {/* corpus callosum fibers */}
            <g fill="none" strokeLinecap="round" filter={`url(#${id}-glow)`}>
              {fibers.map((d, i) => (
                <motion.path
                  key={d}
                  d={d}
                  stroke={i % 2 ? "#fde68a" : "#a5f3fc"}
                  strokeWidth={1.6}
                  animate={{ opacity: bi ? 0.85 : i % 4 === 0 ? 0.35 : 0.08 }}
                  transition={{ duration: 0.6 }}
                />
              ))}
            </g>
            <g fill="none" strokeLinecap="round" strokeWidth={4}>
              {fibers.map((d, i) => {
                if (!bi && i % 4 !== 0) return null;
                const rev = bi && i % 2 === 1;
                return (
                  <path
                    key={`p${i}`}
                    d={d}
                    pathLength={100}
                    stroke={rev ? "#fff7ed" : "#ecfeff"}
                    className={rev ? "impulse-rev" : "impulse"}
                    style={{ ["--dur" as string]: bi ? `${1.6 + (i % 5) * 0.25}s` : "3.4s", ["--delay" as string]: `${(i * 0.17) % 1.5}s` }}
                  />
                );
              })}
            </g>

            {/* brainstem + decussation */}
            <path d="M286 430 C288 460 292 476 300 486 C308 476 312 460 314 430" fill="#0f1a2e" stroke="rgba(226,232,240,0.3)" strokeWidth={1.5} />
            <g fill="none" strokeLinecap="round" filter={`url(#${id}-glow)`}>
              <path d="M232 380 C262 420 290 450 300 500 C312 545 380 575 470 590" stroke={CYAN} strokeWidth={3} />
              <motion.path
                d="M368 380 C338 420 310 450 300 500 C288 545 220 575 130 590"
                stroke={ORANGE}
                strokeWidth={3}
                animate={{ opacity: bi ? 1 : 0.3 }}
              />
            </g>
            <g fill="none" strokeLinecap="round" strokeWidth={6}>
              <path d="M232 380 C262 420 290 450 300 500 C312 545 380 575 470 590" pathLength={100} stroke="#ecfeff" className="impulse" style={{ ["--dur" as string]: "2.2s" }} />
              {bi && (
                <path d="M368 380 C338 420 310 450 300 500 C288 545 220 575 130 590" pathLength={100} stroke="#fff7ed" className="impulse" style={{ ["--dur" as string]: "2.2s", ["--delay" as string]: "1.1s" }} />
              )}
            </g>
            <circle cx={300} cy={500} r={6} fill="#fff" className="breathe" />

            {/* labels */}
            <g fontFamily="JetBrains Mono, monospace" fontSize={13} letterSpacing={1.5}>
              <text x={206} y={250} fill="#a5f3fc" textAnchor="middle" fontSize={16} fontWeight={600}>
                LEFT
              </text>
              <text x={394} y={250} fill="#fed7aa" textAnchor="middle" fontSize={16} fontWeight={600} opacity={bi ? 1 : 0.5}>
                RIGHT
              </text>
              <text x={470} y={616} fill="#a5f3fc" textAnchor="middle">
                RIGHT SIDE OF BODY
              </text>
              <text x={130} y={616} fill="#fed7aa" textAnchor="middle" opacity={bi ? 1 : 0.5}>
                LEFT SIDE OF BODY
              </text>
              <text x={300} y={128} fill="#fff" textAnchor="middle" fontSize={11} opacity={0.85}>
                ~200M FIBERS
              </text>
              <text x={346} y={506} fill="rgba(226,232,240,0.7)" fontSize={10}>
                crossover
              </text>
            </g>
          </svg>
        </div>

        <div className="order-3 space-y-4">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.06] p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-power">Right hemisphere</div>
            <div className="mt-2 text-sm font-medium text-white">Drives the left side of the body</div>
            <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Hubs for spatial awareness, the big picture, rhythm and flow.
            </div>
          </div>
          <motion.p key={mode} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm leading-relaxed text-muted-foreground">
            {bi ? (
              <>
                The corpus callosum's roughly 200 million fibers<Cite id="statpearlsCC" /> carry traffic both ways. When it is
                cut, coordinating the two hands breaks down<Cite id="kennerley2002" />. Demanding two-handed practice goes
                with a larger bridge, especially when it starts young<Cite id="schlaug1995" />.
              </>
            ) : (
              <>
                One-sided living sends most of the work through one hemisphere and one side of the body. The other side's
                pathways get less practice, and the brain trims what it doesn't use<Cite id="draganski2004" />.
              </>
            )}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
