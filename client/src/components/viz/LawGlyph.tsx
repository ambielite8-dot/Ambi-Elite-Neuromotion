import { CYAN, ORANGE } from "./BodyFigure";

/** Compact diagrams for each of the Six Laws. 120×120 viewBox. */
export function LawGlyph({ law, className }: { law: 1 | 2 | 3 | 4 | 5 | 6; className?: string }) {
  const common = { fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <rect x={1} y={1} width={118} height={118} rx={22} fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
      {law === 1 && (
        <g {...common}>
          {/* Base: grounded leg + weight arrows into the ground */}
          <path d="M46 24 C44 50 44 70 48 94" stroke={ORANGE} strokeWidth={10} />
          <path d="M40 96 L70 96" stroke={ORANGE} strokeWidth={8} />
          <path d="M24 104 L96 104" stroke="rgba(255,255,255,0.35)" strokeWidth={2} />
          {[66, 80, 94].map((x) => (
            <path key={x} d={`M${x} 40 L${x} 82 M${x - 5} 76 L${x} 82 L${x + 5} 76`} stroke="rgba(254,215,170,0.7)" strokeWidth={2.4} />
          ))}
        </g>
      )}
      {law === 2 && (
        <g {...common}>
          {/* Anchor: extending arm toward a target */}
          <circle cx={30} cy={60} r={8} fill={CYAN} />
          <path d="M30 60 C50 52 66 50 92 50" stroke={CYAN} strokeWidth={6} />
          <circle cx={98} cy={50} r={10} stroke="rgba(165,243,252,0.8)" strokeWidth={2.4} />
          <circle cx={98} cy={50} r={3} fill="#a5f3fc" />
          <path d="M40 82 C60 76 74 74 90 74" stroke="rgba(165,243,252,0.35)" strokeWidth={2} strokeDasharray="3 5" />
        </g>
      )}
      {law === 3 && (
        <g {...common}>
          {/* Inner Grip: thumb opposing index + middle */}
          <path d="M44 96 L44 40 M58 96 L58 30 M72 96 L72 34" stroke={CYAN} strokeWidth={9} />
          <path d="M86 96 L86 44 M98 96 L98 56" stroke="rgba(255,255,255,0.15)" strokeWidth={9} />
          <path d="M30 96 C24 80 26 64 38 52" stroke={CYAN} strokeWidth={9} />
          <circle cx={46} cy={44} r={14} stroke="#a5f3fc" strokeWidth={1.5} strokeDasharray="2 3" />
        </g>
      )}
      {law === 4 && (
        <g {...common}>
          {/* Outer Grip: ring + little clamp into the palm */}
          <path d="M38 96 L38 44 M52 96 L52 32 M66 96 L66 36" stroke="rgba(255,255,255,0.15)" strokeWidth={9} />
          <path d="M80 96 L80 42 M94 96 L94 54" stroke={ORANGE} strokeWidth={9} />
          <rect x={30} y={70} width={74} height={14} rx={7} stroke="#fed7aa" strokeWidth={2} />
        </g>
      )}
      {law === 5 && (
        <g {...common}>
          {/* Ambi Curve: arc from base to anchor */}
          <path d="M28 100 C30 60 64 70 70 50 C76 30 88 24 98 20" stroke="url(#lawgrad)" strokeWidth={5} />
          <defs>
            <linearGradient id="lawgrad" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0" stopColor={ORANGE} />
              <stop offset="1" stopColor={CYAN} />
            </linearGradient>
          </defs>
          <circle cx={28} cy={100} r={6} fill={ORANGE} />
          <circle cx={98} cy={20} r={6} fill={CYAN} />
          <path d="M28 100 L98 20" stroke="rgba(255,255,255,0.18)" strokeWidth={1.5} strokeDasharray="3 5" />
        </g>
      )}
      {law === 6 && (
        <g {...common}>
          {/* Dynamic Balance: two sides, alternating */}
          <path d="M60 22 L60 98" stroke="rgba(255,255,255,0.25)" strokeWidth={2} />
          <path d="M60 60 L24 50" stroke={CYAN} strokeWidth={5} />
          <path d="M60 60 L96 70" stroke={ORANGE} strokeWidth={5} />
          <circle cx={24} cy={50} r={9} fill={CYAN} />
          <circle cx={96} cy={70} r={11} fill={ORANGE} />
          <path d="M44 98 L76 98 L60 80 Z" fill="rgba(255,255,255,0.15)" />
        </g>
      )}
    </svg>
  );
}
