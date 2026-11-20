import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/Logo";

export const PRIMARY_NAV = [
  { href: "/neuromotion", label: "The Science" },
  { href: "/six-laws", label: "Six Laws" },
  { href: "/why-now", label: "Why Now" },
  { href: "/nst", label: "NST Training" },
  { href: "/research", label: "Research" },
];

export const SECONDARY_NAV = [
  { href: "/athletics", label: "Athletics" },
  { href: "/apparel", label: "Apparel" },
  { href: "/foundation", label: "Foundation" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-white/[0.06] bg-[#070b14]/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Ambi Elite home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors",
                location === item.href ? "bg-white/[0.08] text-white" : "text-muted-foreground hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-2 h-4 w-px bg-white/10" />
          {SECONDARY_NAV.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-[13px] font-medium transition-colors",
                location === item.href ? "text-white" : "text-muted-foreground/80 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/donate"
            className="hidden h-9 items-center rounded-full bg-primary px-4 text-[13px] font-semibold text-primary-foreground transition hover:bg-primary/90 sm:inline-flex"
          >
            Support the research
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/[0.06] bg-[#070b14] px-5 pb-10 pt-6 lg:hidden"
            aria-label="Mobile"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Learn</div>
            <ul className="mt-3 space-y-1">
              {[{ href: "/", label: "Home" }, ...PRIMARY_NAV].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-2.5 font-display text-3xl font-semibold tracking-tight",
                      location === item.href ? "text-precision" : "text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Ambi Elite</div>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {[...SECONDARY_NAV, { href: "/donate", label: "Donate" }].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
