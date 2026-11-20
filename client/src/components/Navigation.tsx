import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo, LogoMark } from "@/components/brand/Logo";
import { NeuromotionMark } from "@/components/brand/NeuromotionMark";

export const NEUROMOTION_NAV = [
  { href: "/neuromotion", label: "The Discovery", desc: "How the body is wired to move" },
  { href: "/six-laws", label: "The Six Laws", desc: "The universal language of movement" },
  { href: "/why-now", label: "Why Now", desc: "How humans became one-sided" },
  { href: "/research", label: "Research", desc: "The science and the references" },
];

export const AMBI_NAV = [
  { href: "/nst", label: "NST Training", desc: "The 208-week curriculum" },
  { href: "/athletics", label: "Athletics", desc: "Facility, AAU, NIL & scholarships" },
  { href: "/apparel", label: "Apparel", desc: "Gear built around the two grips" },
  { href: "/foundation", label: "Foundation", desc: "Research-first, literacy for all" },
];

// kept for the footer
export const PRIMARY_NAV = NEUROMOTION_NAV.map(({ href, label }) => ({ href, label }));
export const SECONDARY_NAV = [...AMBI_NAV.map(({ href, label }) => ({ href, label })), { href: "/contact", label: "Contact" }];

type MenuKey = "neuro" | "ambi" | null;

function MegaPanel({ which, onNavigate }: { which: "neuro" | "ambi"; onNavigate: () => void }) {
  const items = which === "neuro" ? NEUROMOTION_NAV : AMBI_NAV;
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-1/2 top-full mt-3 w-[640px] -translate-x-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#080d18]/95 shadow-2xl backdrop-blur-2xl"
    >
      <div className="grid grid-cols-[220px_1fr]">
        <div
          className={cn(
            "relative flex flex-col justify-between overflow-hidden p-6",
            which === "neuro" ? "bg-gradient-to-br from-primary/15 via-transparent to-accent/15" : "bg-gradient-to-br from-white/[0.08] to-transparent",
          )}
        >
          {which === "neuro" ? <NeuromotionMark className="h-14 w-14" /> : <LogoMark className="h-14 w-14 text-white" glow />}
          <div>
            <div className="mt-8 font-display text-xl font-semibold text-white">{which === "neuro" ? "Neuromotion" : "Ambi Elite"}</div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {which === "neuro" ? "The discovery. The science of bilateral human movement." : "The standard. Where Neuromotion is trained, worn and lived."}
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-1 p-3">
          {items.map((i) => (
            <li key={i.href}>
              <Link href={i.href} onClick={onNavigate} className="group flex items-center justify-between rounded-2xl px-4 py-3 transition hover:bg-white/[0.05]">
                <span>
                  <span className="block text-sm font-semibold text-white">{i.label}</span>
                  <span className="block text-xs text-muted-foreground">{i.desc}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [location] = useLocation();
  const lastY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [location]);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      // hide on scroll down, reveal on scroll up
      setHidden(y > 400 && y > lastY.current + 4);
      if (y < lastY.current - 4) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const enter = (k: MenuKey) => {
    clearTimeout(closeTimer.current);
    setMenu(k);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setMenu(null), 160);
  };
  const neuroActive = NEUROMOTION_NAV.some((i) => i.href === location);
  const ambiActive = AMBI_NAV.some((i) => i.href === location);

  return (
    <motion.header
      animate={{ y: hidden && !open && !menu ? -80 : 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "border-b border-white/[0.06] bg-[#070b14]/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Ambi Elite home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {(
            [
              ["neuro", "Neuromotion", neuroActive],
              ["ambi", "Ambi Elite", ambiActive],
            ] as const
          ).map(([k, label, active]) => (
            <div key={k} className="relative" onMouseEnter={() => enter(k)} onMouseLeave={leave}>
              <button
                type="button"
                onClick={() => setMenu(menu === k ? null : k)}
                aria-expanded={menu === k}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium transition-colors",
                  menu === k || active ? "bg-white/[0.08] text-white" : "text-muted-foreground hover:text-white",
                )}
              >
                {k === "neuro" && <NeuromotionMark className="h-4 w-4" animated={false} />}
                {label}
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", menu === k && "rotate-180")} />
              </button>
              <AnimatePresence>{menu === k && <MegaPanel which={k} onNavigate={() => setMenu(null)} />}</AnimatePresence>
            </div>
          ))}
          <Link href="/six-laws" className={cn("rounded-full px-4 py-2 text-[13px] font-medium transition-colors", location === "/six-laws" ? "text-white" : "text-muted-foreground hover:text-white")}>
            Six Laws
          </Link>
          <Link href="/contact" className={cn("rounded-full px-4 py-2 text-[13px] font-medium transition-colors", location === "/contact" ? "text-white" : "text-muted-foreground hover:text-white")}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/nst"
            className="hidden h-9 items-center rounded-full bg-white px-4 text-[13px] font-semibold text-background transition hover:bg-white/90 sm:inline-flex"
          >
            Start NST
          </Link>
          <Link
            href="/donate"
            className="hidden h-9 items-center rounded-full border border-primary/40 px-4 text-[13px] font-semibold text-precision transition hover:bg-primary/10 md:inline-flex"
          >
            Support
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/[0.06] bg-[#070b14] px-5 pb-10 pt-6 lg:hidden"
            aria-label="Mobile"
          >
            {(
              [
                ["Neuromotion", "The discovery", NEUROMOTION_NAV, <NeuromotionMark key="n" className="h-7 w-7" />],
                ["Ambi Elite", "The standard", AMBI_NAV, <LogoMark key="a" className="h-7 w-7 text-white" />],
              ] as const
            ).map(([title, sub, items, mark], gi) => (
              <div key={title} className={gi ? "mt-10" : ""}>
                <div className="flex items-center gap-3">
                  {mark}
                  <div>
                    <div className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">{title}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{sub}</div>
                  </div>
                </div>
                <ul className="mt-3">
                  {items.map((item, i) => (
                    <motion.li key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + (gi * 4 + i) * 0.04 }}>
                      <Link
                        href={item.href}
                        className={cn("block border-b border-white/[0.05] py-3 font-display text-2xl font-semibold tracking-tight", location === item.href ? "text-precision" : "text-white")}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mt-10 grid grid-cols-2 gap-2">
              <Link href="/contact" className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-medium text-white">
                Contact
              </Link>
              <Link href="/donate" className="rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">
                Support
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
