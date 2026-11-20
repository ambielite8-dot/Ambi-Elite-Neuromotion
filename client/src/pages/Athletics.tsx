import { DollarSign, Landmark, Trophy, Users, Zap } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Container, Section, Heading, Reveal, ButtonLink, Eyebrow, Cite } from "@/components/kit";
import gymImg from "@assets/IMG_0025_1768795739004.jpeg";

export default function Athletics() {
  return (
    <Layout>
      <section className="relative flex min-h-[86vh] items-end overflow-hidden pb-20 pt-32">
        <img src={gymImg} alt="The Ambi Elite training court" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        <Container className="relative">
          <Reveal>
            <Eyebrow>Ambi Athletics</Eyebrow>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-white md:text-8xl">
              A second side is the <span className="grad-text">ultimate edge.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              Plenty of players can do a few things with either hand. Very few can write, dribble and shoot with equal
              control. That's what Ambi Elite builds, on the court and beyond it.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/donate">Support the facility</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Join the AAU team
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Heading
              eyebrow="The facility"
              title="The future of training."
              lead="We're raising funds to build a dedicated basketball training facility for youth development (ages 6–14). Not just a gym: a center for Neuromotor Symmetry Training, where bilateral motor organization is built into the fundamentals from day one."
            />
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="panel rounded-2xl p-6">
                <Landmark className="h-7 w-7 text-precision" />
                <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Facility</div>
                <div className="mt-1 font-display text-2xl font-semibold text-white">New gym</div>
              </Reveal>
              <Reveal delay={0.06} className="panel rounded-2xl p-6">
                <Trophy className="h-7 w-7 text-power" />
                <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Team</div>
                <div className="mt-1 font-display text-2xl font-semibold text-white">AAU Elite</div>
              </Reveal>
              <Reveal delay={0.1} className="panel col-span-2 rounded-2xl p-6 text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-white">Why it matters for athletes:</span> higher loads expose asymmetry
                faster. In professional soccer, untreated strength imbalances raised hamstring-injury risk, and correcting
                them brought it back toward normal
                <Cite id="croisier2008" />. Weaker hips predicted non-contact ACL tears
                <Cite id="khayambashi2016" />.
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading align="center" eyebrow="Access" title="NIL & scholarships." lead="Unlocking potential through access." />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { icon: DollarSign, title: "NIL deals", desc: "NIL opportunities for our athletes, recognizing their value and their commitment to the Neuromotion standard." },
              { icon: Users, title: "AAU team", desc: "Ambi Elite AAU competes at a high level, applying science-backed bilateral training on the court." },
              { icon: Zap, title: "NST scholarships", desc: "Scholarships for NST so every dedicated athlete can master complete body control, whatever their means." },
            ].map((it, i) => (
              <Reveal key={it.title} delay={i * 0.06} className="panel rounded-3xl p-8">
                <it.icon className="h-8 w-8 text-precision" />
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">{it.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{it.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 p-10 text-center md:p-16">
            <h3 className="font-display text-4xl font-semibold text-white">Build the next generation.</h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Every gift goes toward the facility, scholarships and training for young athletes who will grow up using both
              sides of their body.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/donate" variant="power">
                Donate now
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </Layout>
  );
}
