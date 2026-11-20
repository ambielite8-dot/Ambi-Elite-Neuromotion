import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Baby, HeartPulse, Trophy, ChevronDown } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Container, Section, Heading, Reveal, ButtonLink, Stat, Eyebrow, Cite } from "@/components/kit";
import { NeuralField } from "@/components/motion/NeuralField";
import { SplitReveal, ScrollWords, Magnetic, Marquee } from "@/components/motion/effects";
import { BodyJourney } from "@/components/viz/BodyJourney";
import { PostureSimulator } from "@/components/viz/PostureSimulator";
import { HandNerveMap } from "@/components/viz/HandNerveMap";
import { BrainBridge } from "@/components/viz/BrainBridge";
import { AsymmetryTimeline } from "@/components/viz/AsymmetryTimeline";
import { HorizontalLaws } from "@/components/viz/HorizontalLaws";
import { BrandWorlds } from "@/components/BrandWorlds";
import { LogoMark } from "@/components/brand/Logo";
import { NeuromotionWordmark } from "@/components/brand/NeuromotionMark";
import { cn } from "@/lib/utils";

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const fieldScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.div style={{ scale: fieldScale }} className="absolute inset-0">
        <NeuralField className="h-full w-full" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#070b14_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <motion.div style={{ y, opacity: fade }} className="relative w-full">
        <Container className="flex flex-col items-center pt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-black/30 py-1.5 pl-2 pr-4 backdrop-blur"
          >
            <LogoMark className="h-5 w-5 text-white" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/60">Ambi Elite presents</span>
            <NeuromotionWordmark size="sm" />
          </motion.div>

          <h1 className="mt-10 max-w-6xl font-display text-[3.1rem] font-semibold leading-[0.92] tracking-[-0.045em] text-white sm:text-7xl lg:text-[5.6rem] xl:text-[6.6rem]">
            <SplitReveal text="We were never taught" delay={0.35} />
            <br />
            <SplitReveal text="how to move." delay={0.6} wordClassName={(w) => (w === "move." ? "grad-text" : undefined)} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 md:text-xl"
          >
            Two hemispheres. Two sides. Two complete motor systems. The modern world trained us to live on one.{" "}
            <span className="text-white">Neuromotion is the science of getting the other half back.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 1.35 }} className="mt-10 flex flex-wrap justify-center gap-3">
            <Magnetic>
              <ButtonLink href="#journey">Enter the body</ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink href="/nst" variant="ghost">
                Start NST training
              </ButtonLink>
            </Magnetic>
          </motion.div>
        </Container>
      </motion.div>

      <motion.a
        href="#manifesto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col [@media(min-height:1000px)]:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}

function Manifesto() {
  return (
    <Section id="manifesto" className="py-28 md:py-44">
      <Container>
        <Eyebrow>The problem nobody named</Eyebrow>
        <ScrollWords
          className="max-w-6xl font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.03em] text-white md:text-6xl"
          highlight={["bilateral", "single-lateral", "neuromotion"]}
          text="Nobody ever taught human movement. We get up one day and start walking, and then we start favoring one side. Tools, machines, schools and screens did the rest. We are bilateral beings, trained to be single-lateral. Neuromotion is how we get the other half back."
        />
      </Container>
    </Section>
  );
}

const WORDS = ["Base", "Anchor", "Inner Grip", "Outer Grip", "Ambi Curve", "Dynamic Balance", "Median nerve", "Ulnar nerve", "Corpus callosum", "Dual Energy Cycle"];

function Audiences() {
  const items = [
    {
      icon: Baby,
      title: "Kids & teens",
      tone: "precision",
      body: "Start before asymmetry sets in. Early two-sided training prevents postural imbalance, coordination gaps and compensation before they become permanent, while the young brain's bridge is most responsive.",
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
      body: "Athletes break faster because the loads are higher. Correcting strength imbalances lowers injury risk, and a true second side is the rarest edge in sport.",
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
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#05080f] px-6 py-24 text-center md:px-16">
          <div className="absolute inset-0 opacity-70">
            <NeuralField className="h-full w-full" density={0.6} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,8,15,0.4),#05080f_75%)]" />
          <LogoMark className="relative mx-auto h-24 w-24 text-white" glow />
          <h2 className="relative mt-8 font-display text-6xl font-semibold italic tracking-[-0.04em] text-white md:text-8xl">
            Do it <span className="text-precision">right.</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Neuromotion doesn't add something new. It activates what was always there: the other side of your body, the
            other side of your brain, and the bridge between them.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <Magnetic>
              <ButtonLink href="/nst">Begin NST</ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink href="/donate" variant="power">
                Fund the research
              </ButtonLink>
            </Magnetic>
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
      <Manifesto />

      <Section className="pt-0">
        <Container>
          <Heading
            eyebrow="Two names, one mission"
            title={
              <>
                <span className="grad-text">Neuromotion</span> is the discovery. <br className="hidden md:block" />
                Ambi Elite is the standard.
              </>
            }
            lead="Neuromotion is the science: a framework for how the human body is wired to move on both sides. Ambi Elite is the brand that teaches it, trains it and lives it."
          />
          <Reveal className="mt-12">
            <BrandWorlds />
          </Reveal>
        </Container>
      </Section>

      <section id="journey" className="relative scroll-mt-0 pt-16">
        <Container>
          <Heading
            eyebrow="A journey through the body"
            title={
              <>
                Scroll inside the system <br className="hidden md:block" />
                that <span className="text-precision">moves you.</span>
              </>
            }
          />
        </Container>
        <Container>
          <BodyJourney />
        </Container>
      </section>

      <div className="border-y border-white/[0.06] py-8">
        <Marquee
          items={WORDS.map((w, i) => (
            <span key={w} className={cn("font-display text-3xl font-semibold tracking-tight md:text-5xl", i % 2 ? "text-power/90" : "text-precision/90")}>
              {w}
            </span>
          ))}
        />
      </div>

      <Section>
        <Container>
          <Heading
            eyebrow="Watch it happen"
            tone="power"
            title="What one-sided living does to a body."
            lead="Drag the slider. This is the quiet process behind the tilted neck, the rounded back and the favored hip we see every day. It isn't sudden and it isn't random: the body adapts to how it is used."
          />
          <Reveal className="mt-12">
            <PostureSimulator />
          </Reveal>
        </Container>
      </Section>

      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat value="~90%" label="of humans favor the right hand, a ratio unchanged since the Neandertals." cite="papadatou2020" tone="precision" />
            <Stat value="619M" label="people live with low back pain, the world's leading cause of disability." cite="gbd2023lbp" tone="power" />
            <Stat value="1 in 5" label="U.S. adults live with chronic pain." cite="rikard2023" tone="power" />
            <Stat value="+11.9%" label="strength gained by the untrained limb when only the other side trains. The sides are linked." cite="manca2017" tone="precision" />
          </div>
        </Container>
      </Section>

      <section className="py-16 md:py-24">
        <HorizontalLaws
          intro={
            <div>
              <Eyebrow>A universal language for movement</Eyebrow>
              <h2 className="font-display text-5xl font-semibold leading-[1.02] text-white md:text-6xl">
                Movement is governed by <span className="text-precision">six laws.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Learn them once and you can read every movement you make, from walking and writing to lifting and
                competing, and correct it for life.
              </p>
              <Link href="/six-laws" className="mt-8 inline-flex items-center gap-2 font-semibold text-white hover:text-precision">
                Explore the Six Laws <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          }
        />
      </section>

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
