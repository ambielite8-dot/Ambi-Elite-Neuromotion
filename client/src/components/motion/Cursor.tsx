import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { prefersReducedMotion } from "./SmoothScroll";

/** Precision dot + trailing ring. Ring swells over interactive elements. Desktop (fine pointer) only. */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || prefersReducedMotion()) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement;
      setHover(!!t.closest?.("a, button, [role='button'], input, textarea, select, label"));
    };
    const leave = () => setVisible(false);
    const dn = () => setDown(true);
    const up = () => setDown(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", dn);
    window.addEventListener("pointerup", up);
    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", dn);
      window.removeEventListener("pointerup", up);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full border border-white/50 mix-blend-difference"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: hover ? 52 : 30, height: hover ? 52 : 30, opacity: visible ? 1 : 0, scale: down ? 0.8 : 1, backgroundColor: hover ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0)" }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[91] h-1.5 w-1.5 rounded-full bg-primary"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0 }}
      />
    </>
  );
}
