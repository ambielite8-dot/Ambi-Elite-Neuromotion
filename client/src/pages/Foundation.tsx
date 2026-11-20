import { Globe, Scale, ShieldCheck, Landmark } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Container, Section, Reveal, ButtonLink, PageHero } from "@/components/kit";

export default function Foundation() {
  return (
    <Layout>
      <PageHero
        brand="ambi"
        eyebrow="Ambi Research Foundation"
        title={
          <>
            Research first. <span className="grad-text">Literacy for everyone.</span>
          </>
        }
        lead="The Ambi Research Foundation exists to support independent research, education and public awareness of Neuromotion: to test it rigorously, teach it widely, and make neuromotor literacy accessible to every body."
      >
        <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/donate">Support the research</ButtonLink>
          <ButtonLink href="/research" variant="ghost">
            See the research agenda
          </ButtonLink>
        </Reveal>
      </PageHero>
      <Section className="pt-0">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { icon: Globe, title: "Fund exploratory studies", desc: "Motion capture, EEG, TMS and long-term studies in biomechanics and neuroscience." },
              { icon: Scale, title: "Promote balanced development", desc: "Bring bilateral motor development into schools, youth sports and professional athletics." },
              { icon: ShieldCheck, title: "Make literacy accessible", desc: "Free educational content and scholarships, so neuromotor literacy isn't only for those who can pay." },
              { icon: Landmark, title: "Support ethical, open research", desc: "Transparent methods, honest reporting, and collaboration with independent scientists." },
            ].map((it, i) => (
              <Reveal key={it.title} delay={i * 0.06} className="panel rounded-3xl p-8">
                <it.icon className="h-8 w-8 text-precision" />
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">{it.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{it.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
