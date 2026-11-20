import { useId, useState } from "react";
import { Cite } from "@/components/kit";
import { CYAN, ORANGE } from "./BodyFigure";

type V = [number, number];
const rad = (d: number) => (d * Math.PI) / 180;
const rot = ([x, y]: V, deg: number): V => [x * Math.cos(rad(deg)) - y * Math.sin(rad(deg)), x * Math.sin(rad(deg)) + y * Math.cos(rad(deg))];
const add = (a: V, b: V): V => [a[0] + b[0], a[1] + b[1]];
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const f = (n: number) => n.toFixed(1);

// Hansraj (2014) modeled neck load by forward head angle.
const HEAD_LOAD: [number, number][] = [
  [0, 11],
  [15, 27],
  [30, 40],
  [45, 49],
  [60, 60],
];
function headLoad(angle: number) {
  for (let i = 0; i < HEAD_LOAD.length - 1; i++) {
    const [a0, l0] = HEAD_LOAD[i];
    const [a1, l1] = HEAD_LOAD[i + 1];
    if (angle <= a1) return lerp(l0, l1, (angle - a0) / (a1 - a0));
  }
  return 60;
}

const STAGES = [
  { at: 0, title: "Balanced", text: "Both sides share the load. Eyes, shoulders and hips sit level over a centered base." },
  { at: 8, title: "The bias sets in", text: "The dominant side starts doing everything. The other side quietly becomes a stabilizer." },
  { at: 16, title: "Compensation becomes normal", text: "One hip hikes, the opposite shoulder drops, the neck tilts to keep the eyes level." },
  { at: 24, title: "The body has adapted around error", text: "Load concentrates in a few joints. Stiffness and pain feel like “just getting older.”" },
];

function catmull(pts: V[], closed = false) {
  const p = closed ? [pts[pts.length - 1], ...pts, pts[0], pts[1]] : [pts[0], ...pts, pts[pts.length - 1]];
  let d = `M${f(p[1][0])} ${f(p[1][1])}`;
  for (let i = 1; i < p.length - 2; i++) {
    const [p0, p1, p2, p3] = [p[i - 1], p[i], p[i + 1], p[i + 2]];
    d += ` C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`;
  }
  return closed ? d + " Z" : d;
}

function Capsule({ a, b, w }: { a: V; b: V; w: number }) {
  return (
    <>
      <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="rgba(148,197,255,0.42)" strokeWidth={w + 3} strokeLinecap="round" />
      <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#15223a" strokeWidth={w} strokeLinecap="round" />
    </>
  );
}

const SKIN = "#15223a";
const EDGE = "rgba(148,197,255,0.42)";

function FrontFigure({ t }: { t: number }) {
  const pelvis = 9 * t; // + → figure's right hip (viewer left) hikes
  const shoulders = -7 * t; // + → viewer-left shoulder drops
  const head = 12 * t;
  const P: V = [180 - 9 * t, 404];
  const hipL = add(P, rot([-30, 0], pelvis));
  const hipR = add(P, rot([30, 0], pelvis));
  const footL: V = [152, 680];
  const footR: V = [208, 680];
  const kneeL: V = [lerp(hipL[0], footL[0], 0.5) - 3, lerp(hipL[1], footL[1], 0.5)];
  const kneeR: V = [lerp(hipR[0], footR[0], 0.5) - 12 * t, lerp(hipR[1], footR[1], 0.5) + 3 * t];
  const T: V = [180 + 8 * t, 170];
  const spineCtrl: V = [lerp(P[0], T[0], 0.5) - 30 * t, 290];
  const shL = add(T, rot([-62, 10], shoulders));
  const shR = add(T, rot([62, 10], shoulders));
  const H = add(T, rot([0, -70], head));
  const neckTop = add(T, rot([0, -40], head));
  const elbowL = add(shL, [-10, 104]);
  const elbowR = add(shR, [10, 104]);
  const handL = add(elbowL, [-4, 94]);
  const handR = add(elbowR, [4, 94]);
  const eyeL = add(H, rot([-11, -2], head));
  const eyeR = add(H, rot([11, -2], head));
  const mid = (k: number): V => {
    // point on the (curved) spine at fraction k from pelvis to T1
    const u = 1 - k;
    return [u * u * P[0] + 2 * u * k * spineCtrl[0] + k * k * T[0], u * u * P[1] + 2 * u * k * spineCtrl[1] + k * k * T[1]];
  };
  const w = mid(0.42);
  const ch = mid(0.78);
  const torso = catmull(
    [
      add(T, rot([-16, -8], shoulders)),
      add(shL, rot([4, -8], shoulders)),
      add(shL, rot([4, 14], shoulders)),
      add(ch, rot([-52, 18], shoulders * 0.6)),
      [w[0] - 40, w[1]],
      add(hipL, rot([-18, 0], pelvis)),
      add(hipL, rot([-10, 26], pelvis)),
      add(P, rot([0, 36], pelvis)),
      add(hipR, rot([10, 26], pelvis)),
      add(hipR, rot([18, 0], pelvis)),
      [w[0] + 40, w[1]],
      add(ch, rot([52, 18], shoulders * 0.6)),
      add(shR, rot([-4, 14], shoulders)),
      add(shR, rot([-4, -8], shoulders)),
      add(T, rot([16, -8], shoulders)),
    ],
    true,
  );
  const wL = 50 + 18 * t;

  const level = (a: V, b: V, label: string, value: number, y: number) => {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const ext = 40 / Math.hypot(dx, dy);
    return (
      <g>
        <line x1={40} x2={320} y1={y} y2={y} stroke={CYAN} strokeOpacity={0.35} strokeDasharray="3 5" />
        <line x1={a[0] - dx * ext} y1={a[1] - dy * ext} x2={b[0] + dx * ext} y2={b[1] + dy * ext} stroke={ORANGE} strokeWidth={2} opacity={0.25 + 0.75 * t} />
        <text x={328} y={y + 4} fill={t > 0.05 ? "#fdba74" : "#a5f3fc"} fontSize={12} fontFamily="JetBrains Mono, monospace">
          {label} {value.toFixed(1)}°
        </text>
      </g>
    );
  };

  return (
    <svg viewBox="0 0 430 720" className="h-full w-full" role="img" aria-label="Front view posture model">
      <line x1={180} x2={180} y1={20} y2={690} stroke="#fff" strokeOpacity={0.25} strokeDasharray="4 6" />
      <ellipse cx={footL[0]} cy={690} rx={14 + 16 * (wL / 100)} ry={6} fill={ORANGE} opacity={0.2 + (wL - 50) / 40} />
      <ellipse cx={footR[0]} cy={690} rx={14 + 16 * ((100 - wL) / 100)} ry={6} fill={CYAN} opacity={0.35} />
      <text x={footL[0] - 6} y={714} textAnchor="middle" fill="#fdba74" fontSize={12} fontFamily="JetBrains Mono, monospace">
        {Math.round(wL)}%
      </text>
      <text x={footR[0] + 6} y={714} textAnchor="middle" fill="#a5f3fc" fontSize={12} fontFamily="JetBrains Mono, monospace">
        {Math.round(100 - wL)}%
      </text>

      <Capsule a={shL} b={elbowL} w={22} />
      <Capsule a={elbowL} b={handL} w={17} />
      <Capsule a={shR} b={elbowR} w={22} />
      <Capsule a={elbowR} b={handR} w={17} />
      <Capsule a={hipL} b={kneeL} w={36} />
      <Capsule a={kneeL} b={footL} w={26} />
      <Capsule a={hipR} b={kneeR} w={36} />
      <Capsule a={kneeR} b={footR} w={26} />
      <path d={torso} fill={SKIN} stroke={EDGE} strokeWidth={2.4} />
      <Capsule a={add(T, [0, 4])} b={neckTop} w={22} />
      <ellipse cx={H[0]} cy={H[1]} rx={26} ry={32} transform={`rotate(${head} ${H[0]} ${H[1]})`} fill={SKIN} stroke={EDGE} strokeWidth={2.4} />
      <path d={`M${f(P[0])} ${f(P[1] + 10)} Q${f(spineCtrl[0])} ${f(spineCtrl[1])} ${f(T[0])} ${f(T[1])}`} stroke="#e2e8f0" strokeWidth={3.5} fill="none" strokeDasharray="1 7" strokeLinecap="round" />
      {[hipL, hipR, shL, shR, kneeL, kneeR].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={4} fill="#e2e8f0" />
      ))}
      <circle cx={eyeL[0]} cy={eyeL[1]} r={2.5} fill="#e2e8f0" />
      <circle cx={eyeR[0]} cy={eyeR[1]} r={2.5} fill="#e2e8f0" />

      {level(eyeL, eyeR, "Head", head, 92)}
      {level(shL, shR, "Shoulders", Math.abs(shoulders), 180)}
      {level(hipL, hipR, "Pelvis", pelvis, 404)}
    </svg>
  );
}

function SideFigure({ t, angle }: { t: number; angle: number }) {
  const ankle: V = [120, 680];
  const knee: V = [123, 530];
  const hip: V = [122 - 4 * t, 402];
  const back: V[] = [
    [146, 420],
    [138, 350],
    [146 + 24 * t, 266],
    [136 + 18 * t, 196],
  ];
  const front: V[] = [
    [110 + 14 * t, 198],
    [98 + 10 * t, 262],
    [100 + 2 * t, 336],
    [102, 420],
  ];
  const torso = catmull([...back, ...front], true);
  const N0: V = [(back[3][0] + front[0][0]) / 2, 194];
  const H = add(N0, rot([0, -66], -angle));
  const neckTop = add(N0, rot([0, -36], -angle));
  const ear = add(H, rot([6, 2], -angle));
  const sh: V = [124 + 12 * t, 220];
  const elbow: V = [122 + 2 * t, 312];
  const hand: V = [118 - 10 * t, 398];
  return (
    <svg viewBox="0 0 240 720" className="h-full w-full" role="img" aria-label="Side view posture model">
      <line x1={ankle[0]} x2={ankle[0]} y1={30} y2={690} stroke={CYAN} strokeOpacity={0.55} strokeDasharray="4 6" />
      <Capsule a={ankle} b={knee} w={26} />
      <Capsule a={knee} b={hip} w={38} />
      <path d={`M${ankle[0] - 22} 688 L${ankle[0] + 14} 688`} stroke={EDGE} strokeWidth={8} strokeLinecap="round" />
      <path d={torso} fill={SKIN} stroke={EDGE} strokeWidth={2.4} />
      <path
        d={catmull([[back[0][0] - 12, back[0][1] - 6], [back[1][0] - 10, back[1][1]], [back[2][0] - 12, back[2][1]], [back[3][0] - 10, back[3][1] + 2]])}
        fill="none"
        stroke="#e2e8f0"
        strokeWidth={3.5}
        strokeDasharray="1 7"
        strokeLinecap="round"
      />
      <Capsule a={N0} b={neckTop} w={20} />
      <ellipse cx={H[0]} cy={H[1]} rx={29} ry={33} transform={`rotate(${-angle} ${H[0]} ${H[1]})`} fill={SKIN} stroke={EDGE} strokeWidth={2.4} />
      <path d={`M${f(H[0] - 28)} ${f(H[1] - 2)} l-7 8 l8 3`} transform={`rotate(${-angle} ${H[0]} ${H[1]})`} fill="none" stroke={EDGE} strokeWidth={2.4} />
      <Capsule a={sh} b={elbow} w={20} />
      <Capsule a={elbow} b={hand} w={16} />
      <circle cx={ear[0]} cy={ear[1]} r={5.5} fill={t > 0.05 ? ORANGE : CYAN} />
      <line x1={ear[0]} x2={ankle[0]} y1={ear[1]} y2={ear[1]} stroke={ORANGE} strokeWidth={2.4} opacity={t} />
      <text x={120} y={714} textAnchor="middle" fill="rgba(226,232,240,0.6)" fontSize={12} fontFamily="JetBrains Mono, monospace">
        side view
      </text>
    </svg>
  );
}

export function PostureSimulator() {
  const [years, setYears] = useState(0);
  const sliderId = useId();
  const t = years / 30;
  const angle = 40 * t;
  const load = headLoad(angle);
  const stage = [...STAGES].reverse().find((s) => years >= s.at)!;

  return (
    <div className="panel overflow-hidden rounded-3xl">
      <div className="grid lg:grid-cols-[1.6fr_1fr]">
        <div className="relative grid grid-cols-[1.75fr_1fr] gap-2 border-b border-white/[0.06] p-4 md:p-8 lg:border-b-0 lg:border-r">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative h-[420px] md:h-[560px]">
            <FrontFigure t={t} />
          </div>
          <div className="relative h-[420px] md:h-[560px]">
            <SideFigure t={t} angle={angle} />
          </div>
        </div>

        <div className="flex flex-col gap-7 p-6 md:p-8">
          <div>
            <label htmlFor={sliderId} className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Years of one-sided living
            </label>
            <div className="mt-2 flex items-baseline gap-3">
              <span className="font-display text-6xl font-semibold text-white">{years}</span>
              <span className="text-muted-foreground">years</span>
            </div>
            <input
              id={sliderId}
              type="range"
              min={0}
              max={30}
              value={years}
              onChange={(e) => setYears(+e.target.value)}
              className="mt-4 w-full accent-[#ff8a1f]"
            />
            <div className="mt-1 flex justify-between font-mono text-[10px] text-muted-foreground">
              <span>0</span>
              <span>10</span>
              <span>20</span>
              <span>30</span>
            </div>
          </div>

          <div className="min-h-[112px]">
            <div className={years === 0 ? "font-display text-2xl font-semibold text-precision" : "font-display text-2xl font-semibold text-power"}>
              {stage.title}
            </div>
            <p className="mt-2 leading-relaxed text-muted-foreground">{stage.text}</p>
          </div>

          <dl className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Neck load (modeled)</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-white">
                {Math.round(load)}
                <span className="ml-1 text-base text-muted-foreground">lb</span>
                <Cite id="hansraj2014" />
              </dd>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Load on one leg</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-white">
                {Math.round(50 + 18 * t)}
                <span className="ml-1 text-base text-muted-foreground">%</span>
              </dd>
            </div>
          </dl>
          <p className="text-xs leading-relaxed text-muted-foreground/80">
            An illustrative model of one common compensation pattern, not a diagnosis. Neck-load figures come from a
            published computer model of forward head posture.
          </p>
        </div>
      </div>
    </div>
  );
}
