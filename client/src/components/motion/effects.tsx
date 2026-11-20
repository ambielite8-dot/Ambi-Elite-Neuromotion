import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform, animate, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

/** Thin cyan→orange bar showing reading progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-white to-accent"
    />
  );
}

/** Headline that rises in word by word from behind a mask. */
export function SplitReveal({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  as: Tag = "span",
  wordClassName,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2" | "p";
  wordClassName?: (word: string, i: number) => string | undefined;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");
  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom" aria-hidden="true">
          <motion.span
            className={cn("inline-block", wordClassName?.(w, i))}
            initial={{ y: "110%", rotate: 4 }}
            animate={inView ? { y: "0%", rotate: 0 } : undefined}
            transition={{ duration: 0.9, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}

/** Paragraph whose words light up one by one as it scrolls through the viewport. */
export function ScrollWords({ text, className, highlight = [] }: { text: string; className?: string; highlight?: string[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} hot={highlight.some((h) => w.toLowerCase().includes(h))}>
          {w}
        </Word>
      ))}
    </p>
  );
}

function Word({ children, progress, range, hot }: { children: string; progress: MotionValue<number>; range: [number, number]; hot: boolean }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className={cn("mr-[0.25em] inline-block", hot && "grad-text")}>
      {children}
    </motion.span>
  );
}

/** Number that counts up when scrolled into view. Preserves prefix/suffix, e.g. "~90%", "1.71B". */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const m = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const [display, setDisplay] = useState(m ? `${m[1]}0${m[3]}` : value);
  useEffect(() => {
    if (!m || !inView) return;
    const target = parseFloat(m[2].replace(/,/g, ""));
    const decimals = (m[2].split(".")[1] || "").length;
    const c = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(`${m[1]}${v.toFixed(decimals)}${m[3]}`),
    });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/** Element that leans toward the cursor. */
export function Magnetic({ children, strength = 0.35, className }: { children: React.ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 15, mass: 0.4 });
  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Endless horizontal ticker. */
export function Marquee({ items, className, reverse = false }: { items: React.ReactNode[]; className?: string; reverse?: boolean }) {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-10">
          {it}
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        </span>
      ))}
    </div>
  );
  return (
    <div className={cn("relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]", className)}>
      <div className={cn("flex", reverse ? "animate-marquee-rev" : "animate-marquee")}>
        {row}
        {row}
      </div>
    </div>
  );
}

/** Global pointer tracker: panels get a soft light that follows the cursor (see .panel::before). */
export function SpotlightTracker() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(".panel") as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
