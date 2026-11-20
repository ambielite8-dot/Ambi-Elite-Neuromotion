import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NeuromotionWordmark } from "@/components/brand/NeuromotionMark";
import { prefersReducedMotion } from "./SmoothScroll";

const CHEVRON = "M6 92 C30 80 44 50 50 6 C56 50 70 80 94 92 C72 86 57 66 50 36 C43 66 28 86 6 92 Z";
const KEY = "ambi-intro-seen";

/** Opening title sequence: the Ambi Elite chevron draws itself, then presents Neuromotion. Once per session. */
export function IntroSequence() {
  const [show, setShow] = useState(() => {
    try {
      if (new URLSearchParams(window.location.search).has("intro")) return true;
      return !sessionStorage.getItem(KEY) && !prefersReducedMotion() && !navigator.webdriver;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!show) return;
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* private mode */
    }
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 3300);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, [show]);

  useEffect(() => {
    if (!show) document.documentElement.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center bg-[#04060b]"
          onClick={() => setShow(false)}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <svg viewBox="0 0 100 100" className="h-28 w-28 md:h-36 md:w-36">
            <motion.path
              d={CHEVRON}
              fill="none"
              stroke="#fff"
              strokeWidth={0.8}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            />
            <motion.path d={CHEVRON} fill="#fff" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05, duration: 0.5 }} />
          </svg>
          <motion.div
            className="mt-6 font-display text-lg font-semibold uppercase text-white md:text-2xl"
            initial={{ opacity: 0, letterSpacing: "0.8em" }}
            animate={{ opacity: 1, letterSpacing: "0.32em" }}
            transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Ambi Elite
          </motion.div>
          <motion.div
            className="mt-10 font-mono text-[11px] uppercase tracking-[0.4em] text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            presents
          </motion.div>
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 2.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <NeuromotionWordmark />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
