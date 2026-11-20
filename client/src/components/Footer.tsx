import { Link } from "wouter";
import { LogoMark } from "@/components/brand/Logo";
import { NEUROMOTION_NAV, AMBI_NAV } from "@/components/Navigation";
import { NeuromotionMark } from "@/components/brand/NeuromotionMark";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#05080f]">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <LogoMark className="h-12 w-12 text-white" glow />
              <div>
                <div className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-white">Ambi Elite</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Home of Neuromotion™</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Humans are bilateral beings. Neuromotion is the science of how the nervous system organizes movement,
              balance and energy across both sides of the body, and the practice of getting the other half back.
            </p>
            <p className="mt-8 font-display text-3xl font-semibold italic text-white">
              Do it <span className="text-precision">right.</span>
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              <NeuromotionMark className="h-5 w-5" animated={false} /> Neuromotion
            </div>
            <ul className="mt-4 space-y-2.5">
              {NEUROMOTION_NAV.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-sm text-white/80 hover:text-white">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              <LogoMark className="h-4 w-4 text-white" /> Ambi Elite
            </div>
            <ul className="mt-4 space-y-2.5">
              {[...AMBI_NAV, { href: "/contact", label: "Contact" }, { href: "/donate", label: "Donate" }].map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-sm text-white/80 hover:text-white">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Ambi Elite · Ambi Research Foundation. Neuromotion™. All rights reserved.</span>
          <span>Educational content only, not medical advice. Consult a qualified professional about pain or injury.</span>
        </div>
      </div>
    </footer>
  );
}
