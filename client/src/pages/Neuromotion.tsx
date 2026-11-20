import { Layout } from "@/components/Layout";
import { Container, Section, Heading, Reveal, ButtonLink, PageHero, Cite } from "@/components/kit";
import { ChainExplorer } from "@/components/viz/ChainExplorer";
import { HandNerveMap } from "@/components/viz/HandNerveMap";
import { HipStability } from "@/components/viz/HipStability";
import { AmbiCurve } from "@/components/viz/AmbiCurve";
import { BrainBridge } from "@/components/viz/BrainBridge";
import { Check, X } from "lucide-react";

const NOT = ["a workout", "a sport", "therapy", "yoga", "meditation"];

const EXPLAINS = [
  { k: "Force", v: "How power is generated from a stable Base." },
  { k: "Precision", v: "How control is kept on the executing side." },
  { k: "Balance", v: "How the body stays organized over its base." },
  { k: "Cognition", v: "How thinking integrates with motion." },
];

const SIGNS = [
  "One shoulder higher than the other",
  "One hip tighter, one leg always leading",
  "One hand doing all the work",
  "A head that tilts or juts forward",
  "Chronic stiffness and “normal” pain",
  "Fatigue without explanation",
  "Loss of confidence in movement",
];

const YOUTH = ["Balance", "Coordination", "Range of motion", "Reaction speed", "Confidence in movement", "Mental clarity", "Body awareness", "Adaptability"];

export default function Neuromotion() {
  return (
    <Layout>
      <PageHero
        eyebrow="The Science"
        title={
          <>
            How your body is <span className="grad-text">actually wired</span> to move.
          </>
        }
        lead="Neuromotion is the science of how the human nervous system organizes movement, balance and energy across both sides of the body. Neuromotor Symmetry Training (NST) is the applied system that develops it."
      >
        <Reveal delay={0.15} className="mt-12 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-sm text-muted-foreground">Neuromotion is not</span>
          {NOT.map((n) => (
            <span key={n} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/70">
              <X className="h-3.5 w-3.5 text-muted-foreground" /> {n}
            </span>
          ))}
          <span className="ml-2 text-sm text-white">…yet it intersects with all of them.</span>
        </Reveal>
      </PageHero>

      <Section className="pt-4">
        <Container>
          <div className="grid gap-4 md:grid-cols-4">
            {EXPLAINS.map((e, i) => (
              <Reveal key={e.k} delay={i * 0.06} className="panel rounded-2xl p-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-precision">It explains</div>
                <div className="mt-3 font-display text-2xl font-semibold text-white">{e.k}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.v}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                q: "Is it physical training?",
                a: "Partly, but that's too small. Training builds strength, endurance, speed and technique. Neuromotion builds symmetry, integration, efficiency, control and awareness. You can be strong and still asymmetrical. You can be skilled and still neurologically incomplete.",
              },
              {
                q: "Is it cognitive training?",
                a: "Yes, through the body. The brain relies on sensory feedback, coordination, balance and timing. Neuromotion trains the hemisphere behind each side of the body, and the bridge between them.",
              },
              {
                q: "Is it the new yoga?",
                a: "No, but it explains why yoga works. Yoga touches awareness, symmetry and breath. Neuromotion defines the laws underneath, maps energy transfer, trains both sides equally and measures progress.",
              },
            ].map((x, i) => (
              <Reveal key={x.q} delay={i * 0.06} className="rounded-2xl border border-white/[0.07] p-6">
                <h3 className="font-display text-xl font-semibold text-white">{x.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{x.a}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            eyebrow="01 · The wiring"
            title="Every side has two chains."
            lead="One of the most overlooked truths in human movement: each side of the body is not a single unit. It carries an Inner (precision) chain and an Outer (power) chain. On the dominant side they work together on autopilot. On the other side the chains, nerves and muscles all exist, but they were never coordinated."
          />
          <Reveal className="mt-12">
            <ChainExplorer />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            eyebrow="02 · The hand"
            title={
              <>
                Median nerve. <span className="text-precision">Inner Grip.</span> Ulnar nerve. <span className="text-power">Outer Grip.</span>
              </>
            }
            lead="Your hand is the clearest window into the system. Two nerves from different roots in your neck split the hand into a precision side and a power side."
          />
          <Reveal className="mt-12">
            <HandNerveMap />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            eyebrow="03 · The hips"
            tone="power"
            title="Hip stability is the foundation."
            lead="We are always leaning on one side and anchoring with the other, and the hips take the hit first. A Base that can't hold the pelvis level hands the problem to the spine, the knees and the neck."
          />
          <Reveal className="mt-12">
            <HipStability />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            eyebrow="04 · The Ambi Curve"
            title="Humans move in arcs, not lines."
            lead="Energy travels from the Base, through the hips and spine, out to the Anchor along a curve, diagonally across the body. You have two of these arcs. Most people have only ever trained one."
          />
          <Reveal className="mt-12">
            <AmbiCurve />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            eyebrow="05 · The brain"
            title={
              <>
                The corpus callosum: <span className="grad-text">the bridge.</span>
              </>
            }
            lead="This is where Neuromotion goes beyond movement. Each side of your body is driven by the opposite side of your brain, and the two hemispheres talk through one bridge."
          />
          <Reveal className="mt-12">
            <BrainBridge />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "The brain rewires with practice",
                b: "Adults who learned to juggle showed measurable changes in grey matter, which faded when practice stopped",
                c: "draganski2004",
                b2: ", and in white-matter connections, regardless of how skilled they got",
                c2: "scholz2009",
              },
              {
                t: "The two sides are linked",
                b: "Train only one limb, and the untrained opposite limb gets about 12% stronger on average. The nervous system shares what one side learns with the other",
                c: "manca2017",
              },
              {
                t: "It's about integration, not dominance",
                b: "People aren't “left-brained” or “right-brained.” Each hemisphere has specialties, and performance comes from how well they cooperate",
                c: "nielsen2013",
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 0.06} className="panel rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold text-white">{x.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {x.b}
                  <Cite id={x.c} />
                  {x.b2}
                  {x.c2 && <Cite id={x.c2} />}.
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6 rounded-2xl border border-primary/20 bg-primary/[0.05] p-6 md:p-8">
            <p className="font-display text-xl leading-relaxed text-white md:text-2xl">
              Benjamin Franklin saw it more than two centuries ago. Writing as the left hand, he complained that its twin
              sister, the right, got every lesson, while “if by chance I touched a pencil, a pen, or a needle, I was bitterly rebuked.”
              <Cite id="franklin" />
            </p>
            <p className="mt-4 text-muted-foreground">What he intuited, Neuromotion now explains.</p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Heading
                eyebrow="06 · Reverse compensation"
                tone="power"
                title="Most people aren't injured. They're compensating."
                lead="Compensation is the body solving a problem without fixing the cause. It shifts work to the stronger side, the dominant limb, the familiar pattern. At first that's intelligent. Over decades it becomes destructive."
              />
              <Reveal className="mt-8 space-y-4 text-muted-foreground">
                <p>
                  Muscles don't fail first. <span className="text-white">Coordination fails first.</span> By the time pain
                  shows up, compensation has been in place for years. That's why so many fixes don't stick: stretching one
                  tight spot, strengthening one weak muscle, cracking the back, taping the knee. They can bring relief, but
                  they don't change why the body is compensating.
                </p>
                <p className="font-display text-2xl font-semibold text-white">You can't stretch your way out of a neurological pattern.</p>
                <p>
                  Reversing compensation is not about forcing symmetry. It's about restoring choice: waking up dormant
                  pathways, rebalancing load, restoring communication between hemispheres, and teaching both sides to
                  stabilize and execute.
                </p>
              </Reveal>
            </div>
            <Reveal className="panel self-start rounded-3xl p-7 md:p-9">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-power">The signs you've normalized</div>
              <ul className="mt-6 space-y-3">
                {SIGNS.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-white/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-white/[0.06] pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-precision">
                What people notice when it reverses
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {["Better posture without cueing", "Stability without bracing", "Coordination without thinking", "Less fatigue", "More confidence in movement", "Clearer body awareness"].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-precision" /> {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            align="center"
            eyebrow="07 · Stay young"
            title={
              <>
                Aging is inevitable. <span className="text-precision">Decline is not.</span>
              </>
            }
            lead="What most people call “getting old” is largely the slow loss of neural integration, movement symmetry and body awareness. The qualities we associate with youth are not age-dependent. They're use-dependent."
          />
          <Reveal className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
            {YOUTH.map((y) => (
              <span key={y} className="rounded-full border border-primary/25 bg-primary/[0.06] px-4 py-2 text-sm font-medium text-white">
                {y}
              </span>
            ))}
          </Reveal>
          <Reveal className="mt-14 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/six-laws">Learn the Six Laws</ButtonLink>
            <ButtonLink href="/research" variant="ghost">
              See the research
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>
    </Layout>
  );
}
