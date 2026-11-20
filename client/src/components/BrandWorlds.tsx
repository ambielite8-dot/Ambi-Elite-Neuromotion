import { useRef } from "react";
import { Link } from "wouter";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NeuromotionMark } from "@/components/brand/NeuromotionMark";
import { LogoMark } from "@/components/brand/Logo";
import { NEUROMOTION_NAV, AMBI_NAV } from "@/components/Navigation";
import { cn } from "@/lib/utils";
import gymImg from "@assets/IMG_0025_1768795739004.jpeg";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(px, [0, 1], [-9, 9]), { stiffness: 150, damping: 18 });
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  return (
    <motion.div
      ref={ref}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = ref.current!.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
      className={cn("group relative overflow-hidden rounded-[2rem] border border-white/10", className)}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: useTransform([glareX, glareY], ([x, y]) => `radial-gradient(500px circle at ${x} ${y}, rgba(255,255,255,0.08), transparent 55%)`) }}
      />
    </motion.div>
  );
}

/** Explains the relationship: Neuromotion is the discovery; Ambi Elite is the brand that teaches it. */
export function BrandWorlds() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <TiltCard className="min-h-[540px] bg-[#071019]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(34,211,238,0.22),transparent_55%),radial-gradient(ellipse_at_90%_90%,rgba(255,138,31,0.18),transparent_55%)]" />
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/70">The discovery</span>
            <NeuromotionMark className="h-16 w-16 transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div>
            <h3 className="font-display text-5xl font-semibold leading-none md:text-6xl">
              <span className="text-[#a5f3fc]">Neuro</span>
              <span className="text-[#fdba74]">motion</span>
            </h3>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
              The science of how the nervous system organizes movement, balance and energy across both sides of the body.
              The laws, the anatomy, the research. It belongs to everyone.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-2">
              {NEUROMOTION_NAV.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-white transition hover:border-primary/50 hover:bg-primary/10">
                    {i.label} <ArrowUpRight className="h-4 w-4 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TiltCard>

      <TiltCard className="min-h-[540px] bg-black">
        <img src={gymImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale transition duration-1000 group-hover:scale-105 group-hover:opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative flex h-full flex-col justify-between p-8 md:p-10">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/70">The standard</span>
            <LogoMark className="h-16 w-16 text-white transition-transform duration-700 group-hover:-translate-y-1" glow />
          </div>
          <div>
            <h3 className="font-display text-5xl font-semibold uppercase leading-none tracking-[0.12em] text-white md:text-6xl">Ambi Elite</h3>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
              The home of Neuromotion. The curriculum, the coaches, the court, the gear and the community where the
              discovery gets trained, worn and lived. Do it right.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-2">
              {AMBI_NAV.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10">
                    {i.label} <ArrowUpRight className="h-4 w-4 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
