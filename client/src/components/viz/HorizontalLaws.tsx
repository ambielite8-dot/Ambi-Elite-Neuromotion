import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { LawGlyph } from "./LawGlyph";
import { LAWS } from "@/data/laws";
import { cn } from "@/lib/utils";

/** Pinned section: vertical scroll drives the Six Laws sideways (desktop). Stacks on mobile. */
export function HorizontalLaws({ intro }: { intro: React.ReactNode }) {
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth + 64));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const sx = useSpring(x, { stiffness: 120, damping: 30, mass: 0.4 });
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* desktop: pinned horizontal track */}
      <div ref={section} className="relative hidden lg:block" style={{ height: `calc(100vh + ${distance}px)` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div ref={track} style={{ x: sx }} className="flex w-max items-stretch gap-6 pl-[max(2rem,calc((100vw-80rem)/2+2rem))] pr-16">
            <div className="flex w-[30rem] shrink-0 flex-col justify-center">{intro}</div>
            {LAWS.map((law) => (
              <Link
                key={law.n}
                href={`/six-laws#law-${law.n}`}
                className="panel group flex h-[70vh] max-h-[620px] w-[26rem] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] p-8 transition-colors hover:border-white/25"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-8xl font-semibold leading-none text-white/[0.06] transition-colors group-hover:text-white/[0.12]">0{law.n}</span>
                  <span className={cn("font-mono text-[11px] uppercase tracking-[0.22em]", law.tone === "precision" ? "text-precision" : law.tone === "power" ? "text-power" : "text-muted-foreground")}>
                    {law.role}
                  </span>
                </div>
                <LawGlyph law={law.n} className="mx-auto h-40 w-40 transition-transform duration-700 group-hover:scale-110" />
                <div>
                  <h3 className={cn("font-display text-4xl font-semibold", law.tone === "precision" ? "text-precision" : law.tone === "power" ? "text-power" : "text-white")}>{law.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{law.short}</p>
                </div>
              </Link>
            ))}
          </motion.div>
          <div className="mx-auto mt-10 h-px w-full max-w-7xl bg-white/10 px-8">
            <motion.div style={{ width: bar }} className="h-px bg-gradient-to-r from-primary to-accent" />
          </div>
        </div>
      </div>

      {/* mobile / tablet: stacked */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8">{intro}</div>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:px-8 [scrollbar-width:none]">
          {LAWS.map((law) => (
            <Link key={law.n} href={`/six-laws#law-${law.n}`} className="panel flex w-[78vw] max-w-sm shrink-0 snap-center flex-col gap-6 rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-semibold text-white/10">0{law.n}</span>
                <LawGlyph law={law.n} className="h-20 w-20" />
              </div>
              <div>
                <div className={cn("font-mono text-[11px] uppercase tracking-[0.2em]", law.tone === "precision" ? "text-precision" : law.tone === "power" ? "text-power" : "text-muted-foreground")}>{law.role}</div>
                <h3 className="mt-1 font-display text-3xl font-semibold text-white">{law.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{law.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
