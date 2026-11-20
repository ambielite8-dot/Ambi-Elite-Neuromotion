import { Microscope, Landmark, GraduationCap, ShieldCheck } from "lucide-react";
import { FaPaypal, FaStripe } from "react-icons/fa";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Container, Section, Reveal, PageHero } from "@/components/kit";

export default function Donate() {
  return (
    <Layout>
      <PageHero
        eyebrow="Support the mission"
        tone="power"
        title={
          <>
            Help us teach the world <span className="grad-text">how to move.</span>
          </>
        }
        lead="Neuromotion research and education are independent. Your support funds publication, research tools, educational content, scholarships and the Ambi Elite training facility."
      />
      <Section className="pt-0">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Microscope, tone: "text-precision", title: "Research", desc: "Motion capture, EEG and long-term studies that put Neuromotion to the test, and publishing the results openly." },
              { icon: Landmark, tone: "text-white", title: "Training facility", desc: "A dedicated basketball facility for youth NST and AAU team development." },
              { icon: GraduationCap, tone: "text-power", title: "NST scholarships", desc: "Access to Neuromotor Symmetry Training for young people and athletes who couldn't otherwise afford it." },
            ].map((it, i) => (
              <Reveal key={it.title} delay={i * 0.06} className="panel rounded-3xl p-8">
                <it.icon className={`h-8 w-8 ${it.tone}`} />
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">{it.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{it.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-16 max-w-2xl">
            <h2 className="text-center font-display text-3xl font-semibold text-white">Give</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link href="/contact" className="flex items-center justify-center gap-4 rounded-2xl bg-white p-6 text-black transition hover:bg-white/90">
                <FaStripe className="h-10 w-10" />
                <span className="text-left">
                  <span className="block text-[11px] font-semibold uppercase tracking-widest opacity-60">Give with</span>
                  <span className="block text-xl font-semibold">Card</span>
                </span>
              </Link>
              <Link href="/contact" className="flex items-center justify-center gap-4 rounded-2xl bg-[#0070ba] p-6 text-white transition hover:bg-[#0070ba]/90">
                <FaPaypal className="h-9 w-9" />
                <span className="text-left">
                  <span className="block text-[11px] font-semibold uppercase tracking-widest opacity-70">Give with</span>
                  <span className="block text-xl font-semibold">PayPal</span>
                </span>
              </Link>
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/[0.08] p-5 text-sm leading-relaxed text-muted-foreground">
              <ShieldCheck className="h-5 w-5 shrink-0 text-precision" />
              Online giving is being set up. Until it's live, reach out through the contact page and we'll arrange your gift
              directly. Transparency and accountability are core values: we'll report how every dollar is used.
            </div>
          </Reveal>
        </Container>
      </Section>
    </Layout>
  );
}
