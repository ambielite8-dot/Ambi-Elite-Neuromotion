import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { REFERENCES } from "@/data/references";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 md:px-8", className)}>{children}</div>;
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "precision",
  className,
}: {
  children: React.ReactNode;
  tone?: "precision" | "power" | "neutral";
  className?: string;
}) {
  const color =
    tone === "precision" ? "text-precision" : tone === "power" ? "text-power" : "text-muted-foreground";
  const dot = tone === "precision" ? "bg-primary" : tone === "power" ? "bg-accent" : "bg-muted-foreground";
  return (
    <div className={cn("mb-5 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em]", color, className)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", dot)} />
      {children}
    </div>
  );
}

export function Heading({
  eyebrow,
  tone,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  tone?: "precision" | "power" | "neutral";
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow tone={tone} className={align === "center" ? "justify-center" : undefined}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className="text-balance font-display text-4xl font-semibold leading-[1.02] text-white md:text-6xl">
        {title}
      </h2>
      {lead && <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">{lead}</p>}
    </Reveal>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Superscript citation link that points at the reference list on /research. */
export function Cite({ id }: { id: string }) {
  const index = REFERENCES.findIndex((r) => r.id === id);
  if (index < 0) return null;
  const ref = REFERENCES[index];
  return (
    <Link
      href={`/research#ref-${id}`}
      title={`${ref.authors} (${ref.year}). ${ref.title}`}
      className="ml-0.5 align-super font-mono text-[0.62em] text-precision/80 no-underline hover:text-precision"
    >
      [{index + 1}]
    </Link>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "power";
  className?: string;
}) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 glow-precision",
    power: "bg-accent text-accent-foreground hover:bg-accent/90 glow-power",
    ghost: "border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.07]",
  }[variant];
  const cls = cn(
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all",
    styles,
    className,
  );
  const inner = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </>
  );
  if (href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Stat({
  value,
  label,
  cite,
  tone = "neutral",
}: {
  value: string;
  label: React.ReactNode;
  cite?: string;
  tone?: "precision" | "power" | "neutral";
}) {
  const color = tone === "precision" ? "text-precision" : tone === "power" ? "text-power" : "text-white";
  return (
    <div className="panel rounded-2xl p-6">
      <div className={cn("font-display text-4xl font-semibold tracking-tight md:text-5xl", color)}>{value}</div>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {label}
        {cite && <Cite id={cite} />}
      </div>
    </div>
  );
}

/** Small segmented toggle used by the interactive diagrams. */
export function Segmented<T extends string>({
  value,
  onChange,
  options,
  className,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string; tone?: "precision" | "power" | "neutral" }[];
  className?: string;
}) {
  return (
    <div className={cn("inline-flex flex-wrap gap-1 rounded-full border border-white/10 bg-black/30 p-1", className)}>
      {options.map((o) => {
        const active = o.value === value;
        const activeStyle =
          o.tone === "power"
            ? "bg-accent text-accent-foreground"
            : o.tone === "neutral"
              ? "bg-white text-background"
              : "bg-primary text-primary-foreground";
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
              active ? activeStyle : "text-muted-foreground hover:text-white",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export function PageHero({
  eyebrow,
  tone,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  tone?: "precision" | "power" | "neutral";
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <Container className="relative">
        <Reveal>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
          <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.98] text-white md:text-7xl">
            {title}
          </h1>
          {lead && <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">{lead}</p>}
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
