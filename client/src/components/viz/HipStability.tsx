import { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { Segmented, Cite } from "@/components/kit";
import { CYAN, ORANGE } from "./BodyFigure";

type Mode = "strong" | "weak";

const PELVIS =
  "M120 190 C104 132 142 92 206 98 C236 100 254 116 260 132 C266 116 284 100 314 98 C378 92 416 132 400 190 C390 236 340 270 300 280 L220 280 C180 270 130 236 120 190 Z";

/** Front view of the pelvis in single-leg stance (standing on the figure's right leg, shown on the left). */
export function HipStability() {
  const [mode, setMode] = useState<Mode>("strong");
  const weak = mode === "weak";
  const [k, setK] = useState(0); // 0 = stable, 1 = collapsed (animated)
  useEffect(() => {
    const c = animate(k, weak ? 1 : 0, { type: "spring", stiffness: 70, damping: 15, onUpdate: setK });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weak]);
  const drop = 9 * k;
  const lean = -10 * k;
  const L = (a: number, b: number) => a + (b - a) * k;

  return (
    <div className="panel grid overflow-hidden rounded-3xl lg:grid-cols-[1.1fr_1fr]">
      <div className="relative flex items-center justify-center p-6 md:p-10">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
        <svg viewBox="40 -60 460 620" className="relative h-[440px] w-auto max-w-full md:h-[520px]" role="img" aria-label="Pelvis in single-leg stance showing hip stability">
          <defs>
            <linearGradient id="bone" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#24395c" />
              <stop offset="1" stopColor="#132036" />
            </linearGradient>
            <filter id="hip-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* level reference */}
          <line x1={60} x2={480} y1={300} y2={300} stroke={CYAN} strokeOpacity={0.35} strokeDasharray="4 6" />
          <line x1={260} x2={260} y1={-50} y2={540} stroke="#fff" strokeOpacity={0.18} strokeDasharray="4 6" />

          {/* stance leg (fixed) */}
          <path d={`M190 300 C${L(186, 204)} 360 ${L(180, 216)} 420 176 520`} stroke="rgba(148,197,255,0.4)" strokeWidth={38} strokeLinecap="round" fill="none" />
          <path
            d={`M190 300 C${L(186, 204)} 360 ${L(180, 216)} 420 176 520`}
            stroke="url(#bone)"
            strokeWidth={34}
            strokeLinecap="round"
            fill="none"
          />
          <circle cx={L(183, 208)} cy={430} r={20} fill="#1b2b47" stroke="rgba(148,197,255,0.45)" strokeWidth={2} />

          {/* pelvis + swing leg + spine rotate about the stance hip */}
          <g transform={`rotate(${drop} 190 300)`}>
            {/* swing leg, lifted */}
            <path d="M330 300 C334 340 340 380 350 410" stroke="rgba(148,197,255,0.4)" strokeWidth={38} strokeLinecap="round" fill="none" />
            <path d="M330 300 C334 340 340 380 350 410" stroke="url(#bone)" strokeWidth={34} strokeLinecap="round" fill="none" />
            <g transform="translate(0 20)">
              <path d={PELVIS} fill="url(#bone)" stroke="rgba(148,197,255,0.5)" strokeWidth={2.4} />
              <ellipse cx={260} cy={200} rx={62} ry={42} fill="#0a1120" stroke="rgba(148,197,255,0.3)" strokeWidth={2} />
              <path d="M236 110 L284 110 L276 170 L260 186 L244 170 Z" fill="#1b2b47" stroke="rgba(148,197,255,0.4)" strokeWidth={2} />
            </g>
            <circle cx={190} cy={300} r={22} fill="#1b2b47" stroke="rgba(148,197,255,0.5)" strokeWidth={2} />
            <circle cx={330} cy={300} r={22} fill="#1b2b47" stroke="rgba(148,197,255,0.5)" strokeWidth={2} />

            {/* spine above the sacrum, compensating with a lean back toward the stance side */}
            <g transform={`rotate(${lean} 260 130)`}>
              {Array.from({ length: 6 }).map((_, i) => (
                <rect key={i} x={246} y={100 - i * 30} width={28} height={22} rx={6} fill="#1b2b47" stroke="rgba(148,197,255,0.4)" strokeWidth={2} />
              ))}
            </g>
          </g>

          {/* gluteus medius: iliac crest → greater trochanter on the stance side */}
          <path
            d={`M${L(132, 140)} ${L(160, 168)} C${L(112, 120)} 210 ${L(136, 140)} 270 ${L(156, 158)} 318 L176 318 C${L(178, 180)} 270 ${L(190, 196)} 210 ${L(204, 214)} ${L(140, 150)} Z`}
            fill={weak ? ORANGE : CYAN}
            opacity={L(0.55, 0.28)}
            filter="url(#hip-glow)"
          />
          <path
            opacity={L(1, 0.35)}
            d="M146 170 C140 220 152 270 164 314 M160 160 C156 220 162 270 168 314 M176 150 C172 220 172 270 172 314"
            stroke={weak ? "#fed7aa" : "#ecfeff"}
            strokeWidth={1.5}
            fill="none"
          />

          {/* annotations */}
          <g fontFamily="JetBrains Mono, monospace" fontSize={13}>
            <text x={56} y={96} fill={weak ? "#fdba74" : "#a5f3fc"}>
              Gluteus medius
            </text>
            <text x={56} y={114} fill="rgba(226,232,240,0.6)" fontSize={11}>
              {weak ? "can't hold the pelvis" : "holding the pelvis level"}
            </text>
            {weak && (
              <>
                <text x={372} y={392} fill="#fdba74">Pelvis drops</text>
                <text x={300} y={-30} fill="#fdba74">Trunk leans</text>
                <text x={232} y={470} fill="#fdba74">Knee caves in</text>
              </>
            )}
            <text x={150} y={556} fill="rgba(226,232,240,0.6)" fontSize={11}>
              standing leg
            </text>
          </g>
        </svg>
      </div>

      <div className="flex flex-col justify-center gap-6 border-t border-white/[0.06] p-7 md:p-10 lg:border-l lg:border-t-0">
        <Segmented<Mode>
          value={mode}
          onChange={setMode}
          options={[
            { value: "strong", label: "Stable Base", tone: "precision" },
            { value: "weak", label: "Collapsed Base", tone: "power" },
          ]}
        />
        <div>
          <h3 className="font-display text-3xl font-semibold text-white">The hip is the Base of everything above it.</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every step is a moment on one leg. The gluteus medius on the standing side has to hold the pelvis level. When it
            can't, the opposite hip drops, the trunk leans to compensate, and the knee below caves inward
            <Cite id="trendelenburg" />. One weak link sends compensation up and down the whole chain.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            In a study of 501 athletes, weaker hip abduction and rotation strength before the season predicted who would
            later tear an ACL without contact
            <Cite id="khayambashi2016" />. When we lean on one hip for decades, the other hip never learns to be a Base.
          </p>
        </div>
      </div>
    </div>
  );
}
