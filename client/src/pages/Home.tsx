import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Baby, HeartPulse, Trophy } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Container, Section, Heading, Reveal, ButtonLink, Stat, Eyebrow, Cite } from "@/components/kit";
import { BodyFigure } from "@/components/viz/BodyFigure";
import { PostureSimulator } from "@/components/viz/PostureSimulator";
import { HandNerveMap } from "@/components/viz/HandNerveMap";
import { BrainBridge } from "@/components/viz/BrainBridge";
import { AsymmetryTimeline } from "@/components/viz/AsymmetryTimeline";
import { LawGlyph } from "@/components/viz/LawGlyph";
import { LogoMark } from "@/components/brand/Logo";
import { LAWS } from "@/data/laws";
import { cn } from "@/lib/utils";

const CALLOUTS = [
  { x: 200, y: 58, label: "Two hemispheres", sub: "joined by the corpus callosum", side: "right" as const, tone: "neutral" },
  { x: 349, y: 488, label: "Median nerve", sub: "Inner Grip · precision", side: "right" as const, tone: "precision" },
  { x: 51, y: 488, label: "Ulnar nerve", sub: "Outer Grip · power", side: "left" as const, tone: "power" },
  { x: 200, y: 260, label: "Spinal cord", sub: "the main highway", side: "left" as const, tone: "neutral" },
  { x: 150, y: 420, label: "The hips", sub: "the Base", side: "left" as const, tone: "neutral" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      <div className="pointer-events-none absolute right-[-10%] top-10 h-[700px] w-[700px] rounded-full bg-primary/[0.12] blur-[140px]" />
      <div className="pointer-events-none absolute right-[20%] top-[40%] h-[400px] w-[400px] rounded-full bg-accent/[0.10] blur-[120px]" />
      <Container className="relative grid items-center gap-6 lg:grid-cols-[1.1fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="py-8 lg:py-24">
          <Eyebrow>Neuromotion · The science of bilateral human movement</Eyebrow>
          <h1 className="text-balance font-display text-[2.9rem] font-semibold leading-[0.95] text-white sm:text-6xl md:text-7xl xl:text-[5.6rem]">
            We were never <br className="hidden sm:block" />
            taught how <span className="grad-text">to move.</span>
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            We get up one day and start walking, and then we start favoring one side. Humans are bilateral beings: two
            hemispheres, two sides, two complete motor systems. The modern world trained us to live on one.
          </p>
          <p className="mt-4 max-w-xl text-pretty text-lg font-medium leading-relaxed text-white md:text-xl">
            Neuromotion is the science of getting the other half back.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/neuromotion">See how it works</ButtonLink>
            <ButtonLink href="/nst" variant="ghost">
              Start NST training
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[400/900] h-[78vh] max-h-[860px] min-h-[540px]"
        >
          <BodyFigure className="h-full w-full" />
          {CALLOUTS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: c.side === "right" ? -8 : 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.15 }}
              className={cn("absolute hidden items-center gap-2 sm:flex", c.side === "left" ? "flex-row-reverse" : "")}
              style={{
                top: `${(c.y / 900) * 100}%`,
                ...(c.side === "right" ? { left: `${(c.x / 400) * 100}%` } : { right: `${100 - (c.x / 400) * 100}%` }),
                transform: "translateY(-50%)",
              }}
            >
              <span className="h-px w-10 bg-white/30" />
              <span
                className={cn(
                  "whitespace-nowrap rounded-xl border bg-[#070b14]/80 px-3 py-2 backdrop-blur",
                  c.tone === "precision" ? "border-primary/40" : c.tone === "power" ? "border-accent/40" : "border-white/15",
                )}
              >
                <span className={cn("block text-[13px] font-semibold", c.tone === "precision" ? "text-precision" : c.tone === "power" ? "text-power" : "text-white")}>
                  {c.label}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{c.sub}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function BilateralBeings() {
  const pairs = [
    {
      k: "2",
      title: "Hemispheres",
      body: "Each half of the brain mainly drives the opposite side of the body, and about 200 million fibers connect them.",
      cite: "statpearlsCC",
    },
    {
      k: "2 × 2",
      title: "Grip chains",
      body: "Every side has an Inner (precision) chain and an Outer (power) chain, wired by different nerves.",
      cite: "napier1956",
    },
    {
      k: "2",
      title: "Bases",
      body: "Either hip can ground you and either leg can drive you, but most of us only ever trust one.",
      cite: "khayambashi2016",
    },
  ];
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Heading
            eyebrow="The problem nobody named"
            title={
              <>
                Bilateral beings. <span className="text-power">Single-lateral</span> lives.
              </>
            }
            lead="Nobody ever taught human movement. We were never taught balance, or how to tap into the side that isn't weak, just neglected. So we lean on one hip, anchor with one arm and favor one leg until it becomes who we are."
          />
          <div className="grid gap-4 sm:grid-cols-3 lg:mt-10">
            {pairs.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="panel rounded-2xl p-6">
                <div className="font-display text-5xl font-semibold text-white">{p.k}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-precision">{p.title}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                  <Cite id={p.cite} />
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Stats() {
  return (
    <Section className="py-16 md:py-20">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value="~90%" label="of humans favor the right hand, a ratio unchanged since the Neandertals." cite="papadatou2020" tone="precision" />
          <Stat value="619M" label="people live with low back pain, the world's leading cause of disability." cite="gbd2023lbp" tone="power" />
          <Stat value="1 in 5" label="U.S. adults live with chronic pain." cite="rikard2023" tone="power" />
          <Stat value="+11.9%" label="strength gained by the untrained limb when only the other side trains. The sides are linked." cite="manca2017" tone="precision" />
        </div>
      </Container>
    </Section>
  );
}

function LawsPreview() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Heading
            eyebrow="A universal language for movement"
            title={
              <>
                Movement is governed by <span className="text-precision">six laws.</span>
              </>
            }
            lead="Base. Anchor. Inner Grip. Outer Grip. Ambi Curve. Dynamic Balance. Learn them once and you can read every movement you make, from walking and writing to lifting and competing, and correct it for life."
          />
          <Reveal>
            <ButtonLink href="/six-laws" variant="ghost">
              Explore the Six Laws
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LAWS.map((law, i) => (
            <Reveal key={law.n} delay={(i % 3) * 0.06}>
              <Link href={`/six-laws#law-${law.n}`} className="panel group flex h-full gap-5 rounded-2xl p-5 transition-colors hover:border-white/20">
                <LawGlyph law={law.n} className="h-20 w-20 shrink-0" />
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Law {law.n} · {law.role}
                  </div>
                  <div className={cn("mt-1 font-display text-xl font-semibold", law.tone === "precision" ? "text-precision" : law.tone === "power" ? "text-power" : "text-white")}>
                    {law.name}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{law.short}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Audiences() {
  const items = [
    {
      icon: Baby,
      title: "Kids & teens",
      tone: "precision",
      body: "Start before asymmetry sets in. Early, two-sided training prevents postural imbalance, coordination gaps and compensation before they become permanent, and the young brain's bridge is most responsive.",
      cite: "steele2013",
    },
    {
      icon: HeartPulse,
      title: "Adults",
      tone: "power",
      body: "Restore what years of one-sided living took away: balance, range, awareness and control. Reverse the compensation instead of managing it forever.",
      cite: "draganski2004",
    },
    {
      icon: Trophy,
      title: "Athletes",
      tone: "neutral",
      body: "Athletes break faster because the loads are higher. Correcting strength imbalances lowers injury risk, and a true second side is the rarest skill in sport.",
      cite: "croisier2008",
    },
  ];
  return (
    <Section>
      <Container>
        <Heading align="center" eyebrow="Same laws, different entry points" title="Built for every body." />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className="panel rounded-3xl p-8">
              <it.icon className={cn("h-8 w-8", it.tone === "precision" ? "text-precision" : it.tone === "power" ? "text-power" : "text-white")} />
              <h3 className="mt-6 font-display text-2xl font-semibold text-white">{it.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {it.body}
                <Cite id={it.cite} />
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section className="pb-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0b1a2c] via-[#0a1120] to-[#1d1209] px-6 py-20 text-center md:px-16">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
          <LogoMark className="relative mx-auto h-20 w-20 text-white" glow />
          <h2 className="relative mt-8 font-display text-5xl font-semibold italic text-white md:text-7xl">
            Do it <span className="text-precision">right.</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Neuromotion doesn't add something new. It activates what was always there: the other side of your body, the
            other side of your brain, and the bridge between them.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/nst">Begin NST</ButtonLink>
            <ButtonLink href="/donate" variant="power">
              Fund the research
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <BilateralBeings />

      <Section className="pt-8">
        <Container>
          <Heading
            eyebrow="Watch it happen"
            tone="power"
            title={
              <>
                What one-sided living does to a body.
              </>
            }
            lead="Drag the slider. This is the quiet process behind the tilted neck, the rounded back and the favored hip we see every day. It isn't sudden and it isn't random: the body adapts to how it is used."
          />
          <Reveal className="mt-12">
            <PostureSimulator />
          </Reveal>
        </Container>
      </Section>

      <Stats />

      <Section>
        <Container>
          <Heading
            eyebrow="It's in your hands, literally"
            title={
              <>
                Two nerves. <span className="text-precision">Precision</span> and <span className="text-power">power.</span>
              </>
            }
            lead="Neuromotion didn't invent the two grips. Science has described them since 1956. Neuromotion organizes them into a system you can feel, train and use."
          />
          <Reveal className="mt-12">
            <HandNerveMap />
          </Reveal>
        </Container>
      </Section>

      <LawsPreview />

      <Section>
        <Container>
          <Heading
            eyebrow="Structural cognition"
            title={
              <>
                The brain develops <span className="grad-text">through the body.</span>
              </>
            }
            lead="Every movement is neurological. When you train the side you neglected, you train the hemisphere that drives it, and the bridge that joins the two."
          />
          <Reveal className="mt-12">
            <BrainBridge />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Heading
                eyebrow="Why now"
                tone="power"
                title="How we became one-sided."
                lead="A slight preference is ancient. Tools, machines, schools and screens turned it into a lifelong, one-sided habit, and the cost is showing up in our spines, hips and joints."
              />
              <Reveal className="mt-8">
                <Link href="/why-now" className="inline-flex items-center gap-2 font-semibold text-white hover:text-precision">
                  Read the full story <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <AsymmetryTimeline compact />
          </div>
        </Container>
      </Section>

      <Audiences />
      <FinalCta />
    </Layout>
  );
}
