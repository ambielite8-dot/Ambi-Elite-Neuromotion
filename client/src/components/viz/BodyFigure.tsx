import { useId } from "react";
import { CX, SILHOUETTE, NERVES, INNER_CHAIN, OUTER_CHAIN, INNER_NODES, OUTER_NODES, smooth } from "./anatomy";

export const CYAN = "#22d3ee";
export const ORANGE = "#ff8a1f";

export type ChainMode = "none" | "inner" | "outer" | "both" | "balance-left" | "balance-right";

type Props = {
  className?: string;
  nervous?: boolean;
  /** dim the nervous system to a quiet backdrop */
  nervousDim?: boolean;
  chains?: ChainMode;
  view?: "front" | "back";
  nodes?: boolean;
  labels?: boolean;
  skeleton?: boolean;
  children?: React.ReactNode;
  title?: string;
};

/** Ellipse brain with gyri, split into a cyan (left) and orange (right) hemisphere. */
function Brain({ id }: { id: string }) {
  const { cx } = SILHOUETTE.head;
  const gyri = [
    "M-20 -10 C-14 -18 -8 -8 -2 -16",
    "M-23 2 C-16 -4 -10 6 -3 -2",
    "M-20 14 C-14 8 -8 18 -2 10",
    "M-14 -22 C-10 -16 -5 -24 -2 -20",
  ];
  return (
    <g transform={`translate(${cx} 58)`}>
      <ellipse cx={-1.5} cy={0} rx={25} ry={27} fill={`url(#${id}-brainL)`} opacity={0.9} />
      <ellipse cx={1.5} cy={0} rx={25} ry={27} fill={`url(#${id}-brainR)`} opacity={0.9} clipPath={`url(#${id}-rightHalf)`} />
      {gyri.map((d, i) => (
        <g key={i} fill="none" strokeWidth={1.2} strokeLinecap="round" opacity={0.7}>
          <path d={d} stroke="#a5f3fc" />
          <path d={d} stroke="#fed7aa" transform="scale(-1 1)" />
        </g>
      ))}
      {/* corpus callosum */}
      <path d="M-10 4 Q0 -2 10 4" stroke="#fff" strokeWidth={2.2} fill="none" strokeLinecap="round" className="breathe" />
      <line x1={0} y1={-26} x2={0} y2={26} stroke="#070b14" strokeWidth={1.5} />
    </g>
  );
}

export function BodyFigure({
  className,
  nervous = true,
  nervousDim = false,
  chains = "none",
  view = "front",
  nodes = true,
  labels = false,
  skeleton = true,
  children,
  title = "Anatomical figure of the human nervous system",
}: Props) {
  const id = useId().replace(/:/g, "");
  const { torso, armL, armR, head } = SILHOUETTE;
  const shapes = (
    <>
      <path d={armL} />
      <path d={armR} />
      <path d={torso} />
      <ellipse cx={head.cx} cy={head.cy} rx={head.rx} ry={head.ry} />
    </>
  );

  const nerveOpacity = nervousDim ? 0.28 : 1;
  const showInner = chains === "inner" || chains === "both";
  const showOuter = chains === "outer" || chains === "both";

  return (
    <svg viewBox="0 0 400 900" className={className} role="img" aria-label={title}>
      <defs>
        <linearGradient id={`${id}-skin`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14213a" />
          <stop offset="0.55" stopColor="#0e1729" />
          <stop offset="1" stopColor="#0a1120" />
        </linearGradient>
        <radialGradient id={`${id}-sheen`} cx="0.5" cy="0.3" r="0.6">
          <stop offset="0" stopColor="#5eead4" stopOpacity="0.10" />
          <stop offset="1" stopColor="#5eead4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-brainL`} cx="0.35" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#67e8f9" />
          <stop offset="1" stopColor="#0e7490" />
        </radialGradient>
        <radialGradient id={`${id}-brainR`} cx="0.65" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#fdba74" />
          <stop offset="1" stopColor="#c2410c" />
        </radialGradient>
        <clipPath id={`${id}-rightHalf`}>
          <rect x={0} y={-40} width={40} height={80} />
        </clipPath>
        <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id={`${id}-softglow`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <clipPath id={`${id}-body`}>{shapes}</clipPath>
      </defs>

      {/* ground shadow */}
      <ellipse cx={CX} cy={889} rx={90} ry={8} fill="#000" opacity={0.45} />

      {/* outline pass, then fill pass → clean single silhouette */}
      <g stroke="rgba(148,197,255,0.35)" strokeWidth={3.2} fill="none">{shapes}</g>
      <g fill={`url(#${id}-skin)`}>{shapes}</g>
      <g fill={`url(#${id}-sheen)`}>{shapes}</g>

      {/* faint skeletal landmarks */}
      {skeleton && (
        <g clipPath={`url(#${id}-body)`} fill="none" stroke="rgba(203,213,225,0.10)" strokeWidth={1.4} strokeLinecap="round">
          {view === "front" ? (
            <>
              <path d={`M${CX - 62} 162 Q${CX - 30} 150 ${CX - 6} 160 M${CX + 62} 162 Q${CX + 30} 150 ${CX + 6} 160`} />
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <path
                  key={i}
                  d={`M${CX - 8} ${190 + i * 24} C${CX - 40} ${186 + i * 24} ${CX - 62} ${200 + i * 26} ${CX - 64 + i * 2} ${222 + i * 26} M${CX + 8} ${190 + i * 24} C${CX + 40} ${186 + i * 24} ${CX + 62} ${200 + i * 26} ${CX + 64 - i * 2} ${222 + i * 26}`}
                />
              ))}
              <path d={`M${CX} 168 L${CX} 300`} />
              <path d={`M${CX - 64} 420 C${CX - 58} 470 ${CX - 20} 488 ${CX} 470 C${CX + 20} 488 ${CX + 58} 470 ${CX + 64} 420`} />
              <circle cx={CX - 52} cy={472} r={9} />
              <circle cx={CX + 52} cy={472} r={9} />
            </>
          ) : (
            <>
              {Array.from({ length: 22 }).map((_, i) => (
                <rect key={i} x={CX - 5} y={150 + i * 13} width={10} height={9} rx={3} />
              ))}
              <path d={`M${CX - 30} 190 L${CX - 78} 182 L${CX - 56} 250 Z M${CX + 30} 190 L${CX + 78} 182 L${CX + 56} 250 Z`} />
              <path d={`M${CX - 60} 430 C${CX - 52} 470 ${CX - 18} 480 ${CX} 470 C${CX + 18} 480 ${CX + 52} 470 ${CX + 60} 430`} />
            </>
          )}
        </g>
      )}

      {/* Nervous system */}
      {nervous && (
        <g opacity={nerveOpacity} fill="none" strokeLinecap="round">
          <g stroke="rgba(226,232,240,0.28)" strokeWidth={1}>
            {NERVES.intercostal.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
          <g stroke="rgba(226,232,240,0.45)" strokeWidth={1.4}>
            {NERVES.radial.map((d, i) => (
              <path key={i} d={d} />
            ))}
            {NERVES.femoral.map((d, i) => (
              <path key={i} d={d} />
            ))}
            {NERVES.sciatic.map((d, i) => (
              <path key={i} d={d} strokeDasharray="5 4" />
            ))}
            {NERVES.cauda.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
          <path d={NERVES.cord} stroke="#e2e8f0" strokeWidth={4} opacity={0.9} />
          <path d={NERVES.cord} stroke="#fff" strokeWidth={9} opacity={0.12} filter={`url(#${id}-softglow)`} />
          <g filter={`url(#${id}-glow)`} strokeWidth={2}>
            {NERVES.median.map((d, i) => (
              <path key={i} d={d} stroke={CYAN} />
            ))}
            {NERVES.ulnar.map((d, i) => (
              <path key={i} d={d} stroke={ORANGE} />
            ))}
          </g>
          {/* travelling impulses */}
          {!nervousDim && (
            <g strokeWidth={4.5}>
              <path d={NERVES.cord} pathLength={100} stroke="#fff" className="impulse" style={{ ["--dur" as string]: "3.2s" }} />
              {NERVES.median.map((d, i) => (
                <path key={`m${i}`} d={d} pathLength={100} stroke="#cffafe" className="impulse" style={{ ["--dur" as string]: "2.4s", ["--delay" as string]: `${i * 0.6}s` }} />
              ))}
              {NERVES.ulnar.map((d, i) => (
                <path key={`u${i}`} d={d} pathLength={100} stroke="#ffedd5" className="impulse" style={{ ["--dur" as string]: "2.8s", ["--delay" as string]: `${0.9 + i * 0.5}s` }} />
              ))}
              {NERVES.sciatic.map((d, i) => (
                <path key={`s${i}`} d={d} pathLength={100} stroke="#e2e8f0" className="impulse" style={{ ["--dur" as string]: "3.6s", ["--delay" as string]: `${1.2 + i * 0.7}s` }} />
              ))}
            </g>
          )}
        </g>
      )}

      {/* Chains */}
      {(showInner || chains === "balance-left" || chains === "balance-right") && (
        <g fill="none" strokeLinecap="round" filter={`url(#${id}-glow)`}>
          {INNER_CHAIN.map((d, i) => {
            // i = 0 → figure-left (viewer right); i = 1 → figure-right (viewer left)
            if (chains === "balance-left" && i === 1) return null;
            if (chains === "balance-right" && i === 0) return null;
            return (
              <g key={i}>
                <path d={d} stroke={CYAN} strokeWidth={10} opacity={0.18} />
                <path d={d} stroke={CYAN} strokeWidth={2.6} />
                <path d={d} pathLength={100} stroke="#ecfeff" strokeWidth={5} className="impulse" style={{ ["--dur" as string]: "2.2s" }} />
              </g>
            );
          })}
        </g>
      )}
      {(showOuter || chains === "balance-left" || chains === "balance-right") && (
        <g fill="none" strokeLinecap="round" filter={`url(#${id}-glow)`}>
          {OUTER_CHAIN.map((d, i) => {
            if (chains === "balance-left" && i === 0) return null;
            if (chains === "balance-right" && i === 1) return null;
            return (
              <g key={i}>
                <path d={d} stroke={ORANGE} strokeWidth={12} opacity={0.18} />
                <path d={d} stroke={ORANGE} strokeWidth={3} />
                <path d={d} pathLength={100} stroke="#fff7ed" strokeWidth={5.5} className="impulse-rev" style={{ ["--dur" as string]: "2.6s" }} />
              </g>
            );
          })}
        </g>
      )}

      {nodes && chains !== "none" && (
        <g>
          {(showInner || chains.startsWith("balance")) &&
            INNER_NODES.flatMap(([dx, y], i) =>
              [1, -1]
                .filter((s) => (chains === "balance-left" ? s === 1 : chains === "balance-right" ? s === -1 : true))
                .map((s) => <circle key={`in${i}${s}`} cx={CX + s * dx} cy={y} r={4} fill="#ecfeff" stroke={CYAN} strokeWidth={2} />),
            )}
          {(showOuter || chains.startsWith("balance")) &&
            OUTER_NODES.flatMap(([dx, y], i) =>
              [1, -1]
                .filter((s) => (chains === "balance-left" ? s === -1 : chains === "balance-right" ? s === 1 : true))
                .map((s) => <circle key={`out${i}${s}`} cx={CX + s * dx} cy={y} r={4} fill="#fff7ed" stroke={ORANGE} strokeWidth={2} />),
            )}
        </g>
      )}

      {labels && chains !== "none" && (
        <g fontFamily="JetBrains Mono, monospace" fontSize={11} letterSpacing={0.5}>
          {(showInner ? INNER_NODES : []).map(([dx, y, label]) => (
            <g key={label}>
              <line x1={CX + dx + 6} y1={y} x2={392} y2={y} stroke={CYAN} strokeOpacity={0.35} strokeDasharray="2 3" />
              <text x={394} y={y + 4} fill="#a5f3fc">
                {label}
              </text>
            </g>
          ))}
        </g>
      )}

      {nervous && <Brain id={id} />}
      {children}
    </svg>
  );
}

export { smooth };
