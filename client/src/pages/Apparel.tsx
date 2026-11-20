import { Eye, Target, Zap } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Container, Section, Heading, Reveal, ButtonLink, Eyebrow } from "@/components/kit";
import apparelHero from "@assets/IMG_2592_1768795873483.jpeg";
import precisionShoe from "@assets/IMG_2591_1768795873483.jpeg";
import powerShoe from "@assets/7837293C-270E-4C99-87C7-81BA21436DE8_1768797001756.png";
import whiteApparel from "@assets/IMG_2587_1768795873483.jpeg";

export default function Apparel() {
  return (
    <Layout>
      <section className="relative overflow-hidden pb-16 pt-32 md:pt-40">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Ambi Apparel · Science × Style</Eyebrow>
            <h1 className="font-display text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
              Wear the <span className="grad-text">standard.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Training gear designed around the science: visual anchors for eye-movement training, and footwear built for
              the two grips.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Shop the collection</ButtonLink>
              <ButtonLink href="#footwear" variant="ghost">
                Learn the tech
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="overflow-hidden rounded-3xl border border-white/10 bg-white">
            <img src={apparelHero} alt="Ambi Elite collection" className="w-full object-cover" />
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl border border-white/10 bg-white">
            <img src={whiteApparel} alt="Ambi Elite white training apparel" className="w-full object-cover" />
          </Reveal>
          <div>
            <Eye className="h-10 w-10 text-precision" />
            <Heading
              className="mt-6"
              title="Visual precision."
              lead="Logo placements are deliberate. Positioned as visual anchors, they give athletes targets for eye-movement and peripheral-awareness drills, so the eyes train both sides too."
            />
          </div>
        </Container>
      </Section>

      <Section id="footwear">
        <Container>
          <Heading align="center" eyebrow="Proprietary footwear" title="Two grips. Two shoes." lead="Proprietary foam, engineered around the Inner and Outer Grip." />
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {[
              {
                img: precisionShoe,
                name: "Precision 1",
                icon: Target,
                tone: "text-precision",
                kicker: "The finesse model · Inner Grip system",
                body: "Built for the Inner Grip playing style: micro-adjustments, sharp cuts and technical sequencing for athletes who win with finesse.",
              },
              {
                img: powerShoe,
                name: "Power 1",
                icon: Zap,
                tone: "text-power",
                kicker: "The strength model · Outer Grip system",
                body: "Built for the Outer Grip playing style: maximum energy transfer through the outside of the foot for athletes who play with force.",
              },
            ].map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06} className="panel overflow-hidden rounded-3xl">
                <div className="flex aspect-[16/10] items-center justify-center bg-white p-8">
                  <img src={s.img} alt={`Ambi ${s.name}`} className="h-full w-full object-contain" />
                </div>
                <div className="p-8">
                  <div className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] ${s.tone}`}>
                    <s.icon className="h-4 w-4" /> {s.kicker}
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-white">{s.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
