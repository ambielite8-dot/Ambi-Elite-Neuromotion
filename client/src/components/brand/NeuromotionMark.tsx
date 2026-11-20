import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Neuromotion mark: two mirrored hemispheres (cyan precision · orange power)
 * joined by a bridge, the corpus callosum. The discovery, not the brand.
 */
export function NeuromotionMark({ className, animated = true }: { className?: string; animated?: boolean }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 100 100" className={cn("shrink-0", className)} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-l`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#67e8f9" />
          <stop offset="1" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id={`${id}-r`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fdba74" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
        <filter id={`${id}-g`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* hemispheres as tapered crescents */}
      <path d="M44 8 C14 16 6 44 10 62 C14 80 28 92 44 92 C30 84 22 70 22 52 C22 32 30 18 44 8 Z" fill={`url(#${id}-l)`} />
      <path d="M56 8 C86 16 94 44 90 62 C86 80 72 92 56 92 C70 84 78 70 78 52 C78 32 70 18 56 8 Z" fill={`url(#${id}-r)`} />
      {/* bridge */}
      <path d="M30 50 L70 50" stroke="#fff" strokeWidth={3} strokeLinecap="round" opacity={0.9} />
      <path d="M34 40 Q50 46 66 40 M34 60 Q50 54 66 60" stroke="#fff" strokeWidth={1.6} strokeLinecap="round" opacity={0.45} fill="none" />
      {animated && (
        <circle r={3.4} fill="#fff" filter={`url(#${id}-g)`}>
          <animateMotion dur="2.4s" repeatCount="indefinite" path="M30 50 L70 50 L30 50" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" />
        </circle>
      )}
    </svg>
  );
}

export function NeuromotionWordmark({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const text = size === "lg" ? "text-4xl md:text-6xl" : size === "sm" ? "text-[13px]" : "text-xl";
  const mark = size === "lg" ? "h-14 w-14 md:h-20 md:w-20" : size === "sm" ? "h-6 w-6" : "h-9 w-9";
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <NeuromotionMark className={mark} />
      <span className={cn("font-display font-semibold uppercase tracking-[0.18em]", text)}>
        <span className="text-[#a5f3fc]">Neuro</span>
        <span className="text-[#fdba74]">motion</span>
        <sup className="ml-0.5 align-super text-[0.4em] tracking-normal text-white/60">™</sup>
      </span>
    </span>
  );
}
