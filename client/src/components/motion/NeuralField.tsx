import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "./SmoothScroll";

type Node = { x: number; y: number; hx: number; hy: number; vx: number; vy: number; side: -1 | 0 | 1; r: number };
type Pulse = { a: number; b: number; t: number; speed: number };

const CYAN = [34, 211, 238];
const ORANGE = [255, 138, 31];
const WHITE = [236, 254, 255];

/**
 * A living, two-sided neural network drawn on canvas: cyan "left hemisphere",
 * orange "right hemisphere", and a white bridge of fibers in the middle. Impulses
 * travel edge to edge and cross the bridge; the cursor excites nearby neurons.
 */
export function NeuralField({ className, density = 1 }: { className?: string; density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduced = prefersReducedMotion();
    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let edges: number[][] = [];
    let pulses: Pulse[] = [];
    const mouse = { x: -9999, y: -9999, active: false };
    let raf = 0;
    let visible = true;
    let last = performance.now();

    const color = (side: number) => (side < 0 ? CYAN : side > 0 ? ORANGE : WHITE);

    function build() {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(130, Math.max(46, (w * h) / 11000)) * density);
      nodes = [];
      for (let i = 0; i < count; i++) {
        // cluster into two lobes with a sparse bridge in the middle
        const bridge = i < count * 0.1;
        const side: -1 | 0 | 1 = bridge ? 0 : i % 2 ? 1 : -1;
        const cx = side === 0 ? w / 2 : w / 2 + side * w * 0.22;
        const spreadX = side === 0 ? w * 0.06 : w * 0.2;
        const spreadY = side === 0 ? h * 0.18 : h * 0.36;
        const ang = Math.random() * Math.PI * 2;
        const rad = Math.sqrt(Math.random());
        const x = cx + Math.cos(ang) * rad * spreadX;
        const y = h / 2 + Math.sin(ang) * rad * spreadY;
        nodes.push({ x, y, hx: x, hy: y, vx: 0, vy: 0, side, r: side === 0 ? 1.6 : 1.2 + Math.random() * 1.6 });
      }
      // nearest-neighbour edges
      const maxD = Math.max(90, Math.min(w, h) * 0.17);
      edges = nodes.map(() => []);
      for (let i = 0; i < nodes.length; i++) {
        const ds: [number, number][] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const d = Math.hypot(nodes[i].hx - nodes[j].hx, nodes[i].hy - nodes[j].hy);
          if (d < maxD) ds.push([d, j]);
        }
        ds.sort((a, b) => a[0] - b[0]);
        for (const [, j] of ds.slice(0, 4)) {
          if (!edges[i].includes(j)) edges[i].push(j);
          if (!edges[j].includes(i)) edges[j].push(i);
        }
      }
      pulses = [];
      for (let k = 0; k < Math.round(count * 0.35); k++) spawn();
    }

    function spawn(from?: number) {
      const a = from ?? Math.floor(Math.random() * nodes.length);
      const nb = edges[a];
      if (!nb || !nb.length) return;
      pulses.push({ a, b: nb[Math.floor(Math.random() * nb.length)], t: 0, speed: 0.6 + Math.random() * 0.9 });
    }

    function frame(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      ctx.clearRect(0, 0, w, h);

      // physics: gentle drift around home, repelled by cursor
      for (const n of nodes) {
        n.vx += (n.hx - n.x) * 0.9 * dt + (Math.random() - 0.5) * 6 * dt;
        n.vy += (n.hy - n.y) * 0.9 * dt + (Math.random() - 0.5) * 6 * dt;
        if (mouse.active) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140) {
            const f = (1 - Math.sqrt(d2) / 140) * 60 * dt;
            n.vx += (dx / Math.sqrt(d2 + 1)) * f;
            n.vy += (dy / Math.sqrt(d2 + 1)) * f;
          }
        }
        n.vx *= 0.92;
        n.vy *= 0.92;
        n.x += n.vx;
        n.y += n.vy;
      }

      // edges
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (const j of edges[i]) {
          if (j < i) continue;
          const a = nodes[i];
          const b = nodes[j];
          const near = mouse.active ? Math.max(0, 1 - Math.hypot((a.x + b.x) / 2 - mouse.x, (a.y + b.y) / 2 - mouse.y) / 220) : 0;
          if (a.side !== b.side) {
            const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            const ca = color(a.side);
            const cb = color(b.side);
            g.addColorStop(0, `rgba(${ca},${0.16 + near * 0.4})`);
            g.addColorStop(1, `rgba(${cb},${0.16 + near * 0.4})`);
            ctx.strokeStyle = g;
          } else {
            ctx.strokeStyle = `rgba(${color(a.side)},${0.1 + near * 0.45})`;
          }
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // nodes
      for (const n of nodes) {
        const near = mouse.active ? Math.max(0, 1 - Math.hypot(n.x - mouse.x, n.y - mouse.y) / 180) : 0;
        ctx.fillStyle = `rgba(${color(n.side)},${0.45 + near * 0.55})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + near * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // impulses
      ctx.globalCompositeOperation = "lighter";
      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        const a = nodes[p.a];
        const b = nodes[p.b];
        const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
        p.t += (p.speed * 120 * dt) / len;
        if (p.t >= 1) {
          // hop onward, preferring to keep moving (and sometimes crossing the bridge)
          const next = edges[p.b].filter((j) => j !== p.a);
          if (next.length && Math.random() > 0.04) {
            p.a = p.b;
            p.b = next[Math.floor(Math.random() * next.length)];
            p.t = 0;
          } else {
            pulses.splice(k, 1);
            spawn();
          }
          continue;
        }
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const c = a.side === 0 || b.side === 0 ? WHITE : color(a.side);
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 9);
        grd.addColorStop(0, `rgba(${c},0.95)`);
        grd.addColorStop(1, `rgba(${c},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      if (!reduced && visible) raf = requestAnimationFrame(frame);
    }

    build();
    frame(performance.now());

    const ro = new ResizeObserver(() => {
      build();
      if (reduced) frame(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([e]) => {
      const was = visible;
      visible = e.isIntersecting && !document.hidden;
      if (visible && !was && !reduced) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    });
    io.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = mouse.y > 0 && mouse.y < r.height;
      if (mouse.active && Math.random() < 0.08) {
        let best = 0;
        let bd = Infinity;
        nodes.forEach((n, i) => {
          const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (d < bd) {
            bd = d;
            best = i;
          }
        });
        if (pulses.length < 160) spawn(best);
      }
    };
    const onLeave = () => (mouse.active = false);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [density]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
