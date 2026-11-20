import { Check, Info } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Container, Section, Heading, Reveal, ButtonLink, PageHero } from "@/components/kit";
import { cn } from "@/lib/utils";

const PHASES = [
  { year: 1, name: "Awareness", color: "bg-primary", text: "Feel the Base and Anchor. Find your Inner and Outer Grip on both sides. Notice compensation before it notices you." },
  { year: 2, name: "Alignment", color: "bg-sky-400", text: "Organize the hips, spine and ribs. Contain energy between the chains and restore the Ambi Curve on your dominant side." },
  { year: 3, name: "Integration", color: "bg-amber-400", text: "Build the dormant energy cycle. Switch roles: the dominant side learns to stabilize, the other side learns to execute." },
  { year: 4, name: "Fluency", color: "bg-accent", text: "Both cycles on demand, under speed and pressure, in your sport and your life. Symmetry stops being training and becomes who you are." },
];

const DEVELOPS = [
  "Awareness of Base and Anchor roles",
  "Bilateral grip control: Inner and Outer, both sides",
  "Balanced energy transfer along the Ambi Curve",
  "Role-switching fluency between sides",
  "Interhemispheric cooperation through movement",
];

const REQUIREMENTS = [
  "Weekly progression videos",
  "Target sport or activity",
  "Strength and weakness assessment",
  "Age, height and weight",
  "Commitment to the 208-week curriculum",
];

const TIERS = [
  {
    name: "Core",
    price: "100",
    tagline: "For most people",
    features: ["208-week curriculum (4 years)", "1 class per week", "Weekly curriculum updates", "Full content library", "Global community access"],
    featured: false,
  },
  {
    name: "Guided",
    price: "200",
    tagline: "Personalized support",
    features: ["Everything in Core", "Bi-weekly 1:1 coaching calls", "Bi-weekly group calls", "Direct Q&A sessions", "Personal feedback on your videos", "Priority content access"],
    featured: true,
  },
];

function WeekGrid() {
  return (
    <div className="panel rounded-3xl p-6 md:p-8">
      <div className="flex items-baseline justify-between">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">208 weeks · one square per week</div>
        <div className="font-display text-sm text-white">4 years</div>
      </div>
      <div className="mt-6 grid grid-cols-[repeat(26,minmax(0,1fr))] gap-[3px] sm:gap-1">
        {Array.from({ length: 208 }).map((_, i) => {
          const phase = PHASES[Math.floor(i / 52)];
          return <div key={i} className={cn("aspect-square rounded-[2px]", phase.color)} style={{ opacity: 0.35 + ((i % 52) / 52) * 0.65 }} />;
        })}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {PHASES.map((p) => (
          <div key={p.name} className="flex items-center gap-2 text-sm text-white">
            <span className={cn("h-2.5 w-2.5 rounded-full", p.color)} />
            Year {p.year} · {p.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Nst() {
  return (
    <Layout>
      <PageHero
        brand="ambi"
        eyebrow="NST · Neuromotor Symmetry Training"
        title={
          <>
            Train the motor cortex, <span className="grad-text">not just the muscles.</span>
          </>
        }
        lead="NST is the applied methodology of Neuromotion. It doesn't force ambidexterity. It restores access to motor patterns that already exist in your nervous system but were never trained. You only have one body, and it's the greatest possession any of us have."
      >
        <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="#enroll">See plans</ButtonLink>
          <ButtonLink href="/six-laws" variant="ghost">
            What you'll learn
          </ButtonLink>
        </Reveal>
      </PageHero>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <Heading eyebrow="The curriculum" title="Four years. Week by week. Motion by motion." lead="No random workouts. Each phase builds awareness, reinforces alignment and expands capacity, so you feel progress without burning out." />
              <Reveal className="mt-8 space-y-3">
                {DEVELOPS.map((d) => (
                  <div key={d} className="flex items-start gap-3 text-white/90">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-precision" /> {d}
                  </div>
                ))}
              </Reveal>
            </div>
            <Reveal>
              <WeekGrid />
            </Reveal>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {PHASES.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06} className="panel rounded-2xl p-6">
                <div className="flex items-center gap-2">
                  <span className={cn("h-2.5 w-2.5 rounded-full", p.color)} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Year {p.year}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal className="panel rounded-3xl p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-precision">Youth · ages 6–18</div>
              <h3 className="mt-3 font-display text-3xl font-semibold text-white">Build it right from the start.</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The ultimate athletic foundation: two-sided coordination, posture that holds, and the confidence that comes
                from controlling your own body, built while the brain is most adaptable.
              </p>
            </Reveal>
            <Reveal delay={0.06} className="panel rounded-3xl p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-power">Adults · 18+</div>
              <h3 className="mt-3 font-display text-3xl font-semibold text-white">Restore what was lost.</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Injury prevention, recovery support and structural balance for lifelong health. Undo years of one-sided
                living and get back balance, range, awareness and control.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section id="enroll">
        <Container>
          <Heading align="center" eyebrow="Enroll" title="Choose your path." lead="Your curriculum follows the universal laws but leans toward your own sport, activity and goals." />
          <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
            {TIERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div className={cn("relative flex h-full flex-col rounded-3xl p-8", t.featured ? "border-2 border-primary/60 bg-primary/[0.05] glow-precision" : "panel")}>
                  {t.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Recommended</span>
                  )}
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{t.tagline}</div>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-white">{t.name}</h3>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-6xl font-semibold text-white">${t.price}</span>
                    <span className="text-muted-foreground">/ month</span>
                  </div>
                  <ul className="mt-8 flex-1 space-y-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-precision" /> {f}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href="/contact" variant={t.featured ? "primary" : "ghost"} className="mt-8 w-full">
                    Enroll in {t.name}
                  </ButtonLink>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-[1fr_1.2fr]">
            <Reveal className="rounded-2xl border border-white/[0.08] p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">To register you'll share</div>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                {REQUIREMENTS.map((r) => (
                  <li key={r} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" /> {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.06} className="flex gap-4 rounded-2xl border border-white/[0.08] p-6 text-sm leading-relaxed text-muted-foreground">
              <Info className="h-5 w-5 shrink-0 text-muted-foreground" />
              Every student is challenged beyond their target sport to make sure the whole body develops on both sides. The
              curriculum stays focused on your main goal while building the universal foundation underneath it. NST is
              education and training, not medical treatment. If you have pain or an injury, work with a qualified clinician.
            </Reveal>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
