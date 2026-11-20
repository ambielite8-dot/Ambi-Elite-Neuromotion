/**
 * Shared anatomical geometry for the 400 × 900 body figure (anatomical position:
 * standing, arms slightly abducted, palms facing forward). Coordinates are written for
 * the figure's LEFT side (viewer's right, x > 200) as offsets from the midline and
 * mirrored for the other side, so every diagram stays perfectly symmetrical.
 */

export const CX = 200;
type P = [number, number];
type Seg = { c1: P; c2: P; to: P };

const X = (dx: number, side: 1 | -1) => CX + side * dx;
const pt = ([dx, y]: P, side: 1 | -1) => `${X(dx, side).toFixed(1)} ${y.toFixed(1)}`;

function segs(start: P, list: Seg[], side: 1 | -1) {
  return `M${pt(start, side)} ` + list.map((s) => `C${pt(s.c1, side)} ${pt(s.c2, side)} ${pt(s.to, side)}`).join(" ");
}

/** Reverse a chain of cubic segments (so the mirrored half can be walked backwards). */
function reverse(start: P, list: Seg[]): { start: P; list: Seg[] } {
  const points: P[] = [start, ...list.map((s) => s.to)];
  const out: Seg[] = [];
  for (let i = list.length - 1; i >= 0; i--) {
    out.push({ c1: list[i].c2, c2: list[i].c1, to: points[i] });
  }
  return { start: points[points.length - 1], list: out };
}

// Torso + leg outline, figure-left half: neck → shoulder → armpit → flank → hip → leg → foot → crotch
const TORSO_START: P = [15, 108];
const TORSO: Seg[] = [
  { c1: [15, 124], c2: [17, 134], to: [23, 141] },
  { c1: [42, 149], c2: [66, 152], to: [85, 161] },
  { c1: [101, 168], c2: [109, 184], to: [106, 205] },
  { c1: [104, 222], c2: [92, 231], to: [80, 238] },
  { c1: [78, 282], c2: [70, 322], to: [63, 356] },
  { c1: [58, 382], c2: [64, 410], to: [76, 437] },
  { c1: [85, 462], c2: [87, 492], to: [84, 522] },
  { c1: [80, 580], c2: [71, 620], to: [67, 652] },
  { c1: [74, 690], c2: [74, 732], to: [65, 772] },
  { c1: [61, 800], c2: [56, 826], to: [54, 846] },
  { c1: [57, 861], c2: [63, 872], to: [59, 881] },
  { c1: [52, 889], c2: [30, 891], to: [23, 885] },
  { c1: [19, 877], c2: [21, 862], to: [24, 850] },
  { c1: [26, 820], c2: [28, 790], to: [30, 760] },
  { c1: [34, 722], c2: [30, 690], to: [28, 660] },
  { c1: [26, 620], c2: [22, 560], to: [16, 522] },
  { c1: [12, 502], c2: [6, 486], to: [0, 480] },
];

function torsoPath() {
  const right = segs(TORSO_START, TORSO, 1);
  const rev = reverse(TORSO_START, TORSO);
  const left = rev.list.map((s) => `C${pt(s.c1, -1)} ${pt(s.c2, -1)} ${pt(s.to, -1)}`).join(" ");
  return `${right} ${left} Z`;
}

const ARM_START: P = [90, 163];
const ARM: Seg[] = [
  { c1: [108, 169], c2: [117, 186], to: [117, 207] },
  { c1: [119, 242], c2: [125, 282], to: [129, 319] },
  { c1: [135, 361], c2: [143, 401], to: [147, 437] },
  // hand (thumb on the outer side in anatomical position)
  { c1: [152, 444], c2: [158, 452], to: [161, 464] },
  { c1: [163, 474], c2: [160, 482], to: [156, 482] },
  { c1: [157, 496], c2: [153, 514], to: [145, 521] },
  { c1: [137, 526], c2: [129, 518], to: [128, 503] },
  { c1: [127, 488], c2: [128, 470], to: [130, 457] },
  { c1: [128, 440], c2: [124, 410], to: [118, 373] },
  { c1: [114, 351], c2: [111, 336], to: [108, 323] },
  { c1: [104, 292], c2: [96, 262], to: [88, 236] },
  { c1: [84, 214], c2: [83, 182], to: [90, 163] },
];

function armPath(side: 1 | -1) {
  return `${segs(ARM_START, ARM, side)} Z`;
}

export const SILHOUETTE = {
  torso: torsoPath(),
  armL: armPath(1),
  armR: armPath(-1),
  head: { cx: CX, cy: 64, rx: 33, ry: 42 },
};

// ───────────────────────── Nervous system ─────────────────────────
const line = (pts: P[], side: 1 | -1) => {
  // Catmull-Rom → cubic Bézier for smooth nerve paths
  const p = pts.map(([dx, y]) => [X(dx, side), y] as [number, number]);
  let d = `M${p[0][0].toFixed(1)} ${p[0][1].toFixed(1)}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
};

export const both = (pts: P[]) => [line(pts, 1), line(pts, -1)] as const;
export const smooth = line;

export const NERVES = {
  cord: `M${CX} 96 L${CX} 430`,
  cauda: [
    ...both([[0, 420], [4, 440], [8, 462]]),
    ...both([[0, 420], [2, 444], [3, 468]]),
  ],
  // Brachial plexus → the three great nerves of each arm
  median: both([[4, 150], [40, 166], [84, 196], [102, 250], [114, 322], [128, 392], [139, 450], [147, 486], [150, 506]]),
  ulnar: both([[4, 160], [44, 176], [84, 206], [96, 252], [109, 322], [120, 380], [131, 448], [136, 486], [136, 512]]),
  radial: both([[4, 145], [50, 160], [96, 196], [113, 250], [123, 320], [138, 396], [148, 444], [156, 470]]),
  // Intercostals
  intercostal: [196, 216, 236, 256, 276, 296, 316, 336, 356].flatMap((y, i) =>
    both([[3, y], [24, y + 4], [48 - i * 0.6, y + 14], [64 - i * 0.8, y + 30]]),
  ),
  // Lumbosacral plexus
  femoral: both([[6, 428], [30, 458], [46, 500], [50, 570], [46, 640], [40, 700], [36, 780], [32, 850], [30, 876]]),
  sciatic: both([[8, 446], [34, 488], [52, 560], [54, 640], [56, 700], [52, 780], [48, 850], [46, 878]]),
};

// ───────────────────────── Neuromotion chains ─────────────────────────
/** Inner Grip · precision chain (front): thumb/index/middle → forearm flexors → chest → core → quads → knee → big toe */
export const INNER_CHAIN = both([
  [149, 508], [140, 452], [127, 392], [113, 330], [100, 266], [86, 222], [58, 214], [28, 236], [18, 290], [16, 360], [22, 420], [36, 478], [44, 560], [38, 650], [34, 720], [30, 800], [30, 880],
]);

/** Outer Grip · power chain (back): ring/pinky → forearm → rear shoulder → lats → erectors → glutes → hamstrings → outer foot */
export const OUTER_CHAIN = both([
  [134, 514], [128, 450], [118, 380], [108, 322], [98, 262], [100, 196], [78, 236], [54, 300], [26, 368], [14, 420], [36, 462], [54, 520], [56, 600], [58, 660], [62, 740], [56, 820], [50, 884],
]);

/** Muscle "hotspots" for each chain, used as glowing nodes. [dx, y, label] */
export const INNER_NODES: [number, number, string][] = [
  [146, 500, "Thumb · index · middle"],
  [126, 390, "Forearm flexors"],
  [52, 220, "Chest"],
  [18, 330, "Core"],
  [42, 540, "Quadriceps"],
  [32, 870, "Big toe line"],
];
export const OUTER_NODES: [number, number, string][] = [
  [134, 508, "Ring · pinky"],
  [102, 205, "Rear shoulder"],
  [62, 290, "Lats"],
  [14, 410, "Erectors"],
  [42, 470, "Glutes"],
  [56, 610, "Hamstrings"],
  [52, 878, "Outer foot"],
];
