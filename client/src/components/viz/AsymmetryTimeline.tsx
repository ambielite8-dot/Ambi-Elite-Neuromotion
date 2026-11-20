import { Cite, Reveal } from "@/components/kit";
import { cn } from "@/lib/utils";

type Era = {
  when: string;
  title: string;
  body: React.ReactNode;
  pressure: number; // 0–1: how hard the environment pushes toward one side
  highlight?: "power" | "precision";
};

export const ERAS: Era[] = [
  {
    when: "1.8 million years ago",
    title: "A slight preference appears",
    body: (
      <>
        Marks on the teeth of early humans show tools held mostly in the right hand
        <Cite id="frayer2016" />. By the Neandertals, about 9 in 10 were right-handed, the same ratio as today. A
        preference is ancient and natural. Neglecting the other side is not.
      </>
    ),
    pressure: 0.12,
  },
  {
    when: "~5,000 years ago",
    title: "Tools and writing pick a side",
    body: "Scripts, weapons, tools and customs are built around the right hand. The left becomes the “helper,” and in many cultures, the wrong hand.",
    pressure: 0.3,
  },
  {
    when: "1760 – 1900",
    title: "The Industrial Revolution",
    body: (
      <>
        Machines are designed for right-handed operators, and work becomes the same one-sided motion repeated for 10 to
        14 hours a day. People adapt to the machine, not the other way around
        <Cite id="mcmanus2009" />.
      </>
    ),
    pressure: 0.62,
    highlight: "power",
  },
  {
    when: "~1900",
    title: "Schools enforce one side",
    body: (
      <>
        With universal schooling, children are pushed to write with the right hand. Reported left-handedness in the U.S.
        falls to about 3% of people born around 1900, then climbs back to about 11% once the pressure eases
        <Cite id="gilbert1992" />. Culture had reshaped how a whole generation used its body.
      </>
    ),
    pressure: 0.78,
    highlight: "power",
  },
  {
    when: "1980s – today",
    title: "The seated, one-thumb world",
    body: "Desks, steering wheels, a mouse on one side, a phone in one hand, a bag on the same shoulder, a favorite hip to stand on. Movement shrinks to repetition, and the same side does the work every day.",
    pressure: 0.92,
    highlight: "power",
  },
  {
    when: "Now",
    title: "The bill arrives",
    body: (
      <>
        Low back pain is the world's leading cause of disability, affecting about 619 million people
        <Cite id="gbd2023lbp" />. About 1.71 billion people live with a musculoskeletal condition
        <Cite id="cieza2020" />. We treat the pain, crack the back, brace the knee, and send people back to the same
        one-sided life.
      </>
    ),
    pressure: 1,
    highlight: "power",
  },
  {
    when: "Next",
    title: "Neuromotion",
    body: "Name the problem, map the system, and teach human movement on purpose: both sides, both hemispheres, from childhood on. Not a trend. A new standard of human literacy.",
    pressure: 0,
    highlight: "precision",
  },
];

export function AsymmetryTimeline({ compact = false }: { compact?: boolean }) {
  const eras = compact ? ERAS.filter((_, i) => [0, 2, 3, 5, 6].includes(i)) : ERAS;
  const alt = !compact;
  return (
    <ol className="relative">
      <div className={cn("absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-white/5 via-accent/50 to-primary", alt && "md:left-1/2")} />
      {eras.map((era, i) => {
        const right = alt && i % 2 === 1;
        const tone = era.highlight === "precision" ? "precision" : era.highlight === "power" ? "power" : "neutral";
        return (
          <li key={era.title} className={cn("relative pb-12 pl-12 last:pb-0", alt && "md:grid md:grid-cols-2 md:gap-16 md:pl-0")}>
            <span
              className={cn(
                "absolute left-[9px] top-2 h-[13px] w-[13px] rounded-full ring-4 ring-background",
                alt && "md:left-1/2 md:-translate-x-1/2",
                tone === "precision" ? "bg-primary glow-precision" : tone === "power" ? "bg-accent" : "bg-white/60",
              )}
            />
            <Reveal className={cn(alt && "md:col-start-1", right && "md:col-start-2")} delay={0.05}>
              <div className={cn(alt && "md:max-w-md", alt && !right && "md:ml-auto md:text-right")}>
                <div
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.22em]",
                    tone === "precision" ? "text-precision" : tone === "power" ? "text-power" : "text-muted-foreground",
                  )}
                >
                  {era.when}
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">{era.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{era.body}</p>
                {era.highlight !== "precision" && (
                  <div className={cn("mt-4 flex items-center gap-3", alt && !right && "md:flex-row-reverse")}>
                    <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/[0.06]">
                      <div className="h-full rounded-full bg-gradient-to-r from-amber-300 to-accent" style={{ width: `${era.pressure * 100}%` }} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">one-sided pressure</span>
                  </div>
                )}
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
