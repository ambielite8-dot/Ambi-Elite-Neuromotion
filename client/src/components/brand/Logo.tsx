import { cn } from "@/lib/utils";

/** The Ambi Elite chevron: two curved arcs meeting at a sharp apex. */
export function LogoMark({ className, glow = false }: { className?: string; glow?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("shrink-0", className)} aria-hidden="true">
      {glow && (
        <defs>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}
      <path
        d="M6 92 C30 80 44 50 50 6 C56 50 70 80 94 92 C72 86 57 66 50 36 C43 66 28 86 6 92 Z"
        fill="currentColor"
        filter={glow ? "url(#logo-glow)" : undefined}
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-7 w-7 text-white" />
      <span className="font-display text-[15px] font-semibold uppercase tracking-[0.22em] text-white">
        Ambi <span className="text-precision">Elite</span>
      </span>
    </span>
  );
}
