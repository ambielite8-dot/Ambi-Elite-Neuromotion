import { Layout } from "@/components/Layout";
import { Container, Section, Heading, Reveal, ButtonLink, PageHero, Stat, Cite } from "@/components/kit";
import { AsymmetryTimeline } from "@/components/viz/AsymmetryTimeline";
import { PostureSimulator } from "@/components/viz/PostureSimulator";

const DAILY = [
  "Driving with one arm",
  "Carrying bags on the same shoulder",
  "Standing with weight on a favorite hip",
  "A mouse and a phone always in the same hand",
  "Reaching, working and stabilizing from one side",
  "Sleeping in the same position every night",
];

const KIDS = ["Uneven shoulder height", "Forward head posture", "Hip imbalance", "Limited off-side coordination"];

export default function WhyNow() {
  return (
    <Layout>
      <PageHero
        eyebrow="Why now · The asymmetry crisis"
        tone="power"
        title={
          <>
            We were built for two sides. <span className="text-power">The world trained us for one.</span>
          </>
        }
        lead="This is not a niche problem, an athletic problem or an aging problem. It's a human problem. Tools, machines, schools and screens taught billions of people to live through one side of the body, and the bill is coming due in our spines, hips, necks and knees."
      />

      <Section className="pt-0">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat value="619M" label="people with low back pain, the leading cause of years lived with disability." cite="gbd2023lbp" tone="power" />
            <Stat value="843M" label="projected low back pain cases by 2050 if nothing changes." cite="gbd2023lbp" tone="power" />
            <Stat value="1.71B" label="people living with a musculoskeletal condition." cite="cieza2020" tone="power" />
            <Stat value="20.9%" label="of U.S. adults living with chronic pain." cite="rikard2023" tone="power" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            align="center"
            eyebrow="The timeline"
            title="How humans became single-lateral."
            lead="A slight preference for one hand is as old as our species. What's new is how completely modern life abandoned the other side."
          />
          <div className="mt-16">
            <AsymmetryTimeline />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Heading
                eyebrow="It's not extreme behavior"
                tone="power"
                title="Normal life trains asymmetry."
                lead="The crisis isn't driven by injuries or accidents. It's driven by ordinary days, repeated thousands of times. The nervous system learns efficiency, not balance."
              />
              <Reveal className="mt-8 grid gap-2 sm:grid-cols-2">
                {DAILY.map((d) => (
                  <div key={d} className="rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3 text-sm text-white/85">
                    {d}
                  </div>
                ))}
              </Reveal>
            </div>
            <div>
              <Heading
                eyebrow="Starting younger"
                tone="power"
                title="Kids are locking it in early."
                lead="Prolonged sitting, screens, one-sided writing and early single-sport specialization mean children reach adolescence with patterns that used to show up decades later."
              />
              <Reveal className="mt-8 flex flex-wrap gap-2">
                {KIDS.map((k) => (
                  <span key={k} className="rounded-full border border-accent/30 bg-accent/[0.07] px-4 py-2 text-sm text-white">
                    {k}
                  </span>
                ))}
              </Reveal>
              <Reveal className="mt-6 text-muted-foreground">
                These aren't cosmetic. They are neuromuscular patterns being set while the brain is most adaptable, which
                is exactly why that is the best time to train both sides
                <Cite id="steele2013" />.
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            eyebrow="Athletes break faster. Everyone else degrades slower."
            title="Same root cause, different speed."
            lead={
              <>
                Sports injuries are just the most visible version of the problem, because the loads are higher. In
                professional soccer, untreated strength imbalances raised hamstring-injury risk, and correcting them brought
                it back toward normal
                <Cite id="croisier2008" />. Everyone else carries the same imbalance into the office, the car and old age.
              </>
            }
          />
          <Reveal className="mt-12">
            <PostureSimulator />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="panel rounded-[2rem] p-8 md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-precision">The missing education</div>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
                  We teach reading, writing and math. Nobody teaches movement.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  We teach people how to sit, lift, train and work, but not how to distribute energy, alternate
                  stabilization, move symmetrically or prevent compensation. Neuromotion doesn't replace medicine or
                  training. It comes before both, as a new standard of human literacy.
                </p>
              </div>
              <div className="space-y-3">
                {["Awareness of asymmetry", "Tools to reverse compensation", "Alignment principles for daily life", "A framework that applies to every body"].map((x, i) => (
                  <div key={x} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                    <span className="font-mono text-sm text-precision">0{i + 1}</span>
                    <span className="text-white">{x}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <ButtonLink href="/neuromotion">Learn the science</ButtonLink>
              <ButtonLink href="/nst" variant="ghost">
                Start NST
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </Layout>
  );
}
