import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Container, Section, Heading, Reveal, ButtonLink, PageHero } from "@/components/kit";
import { LawGlyph } from "@/components/viz/LawGlyph";
import { DynamicBalanceLab } from "@/components/viz/DynamicBalanceLab";
import { AmbiCurve } from "@/components/viz/AmbiCurve";
import { LAWS } from "@/data/laws";
import { cn } from "@/lib/utils";

export default function SixLaws() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
    }
  }, []);

  return (
    <Layout>
      <PageHero
        eyebrow="The Six Laws of Neuromotion"
        title={
          <>
            The laws that govern <span className="grad-text">every movement</span> you make.
          </>
        }
        lead="Balance, precision, power, curvature, stabilization and timing are not random. Walking, writing, lifting, throwing, sitting and sleeping all obey the same six laws. Learn them once and you have a language for your body for the rest of your life."
      >
        <Reveal delay={0.15} className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {LAWS.map((l) => (
            <a key={l.n} href={`#law-${l.n}`} className="group rounded-2xl border border-white/[0.08] bg-black/20 p-3 text-center transition hover:border-white/20">
              <LawGlyph law={l.n} className="mx-auto h-14 w-14" />
              <div className="mt-2 text-xs font-semibold text-white/80 group-hover:text-white">{l.name}</div>
            </a>
          ))}
        </Reveal>
      </PageHero>

      <Section className="pt-6">
        <Container className="space-y-6">
          {LAWS.map((law) => (
            <Reveal key={law.n}>
              <article id={`law-${law.n}`} className="panel scroll-mt-24 overflow-hidden rounded-3xl">
                <div className="grid lg:grid-cols-[280px_1fr_1fr]">
                  <div className="relative flex items-center gap-5 border-b border-white/[0.06] p-7 lg:flex-col lg:items-start lg:justify-between lg:border-b-0 lg:border-r">
                    <div className="font-display text-7xl font-semibold leading-none text-white/[0.07] lg:text-9xl">0{law.n}</div>
                    <LawGlyph law={law.n} className="h-24 w-24 lg:h-32 lg:w-32" />
                  </div>
                  <div className="p-7 md:p-9">
                    <div
                      className={cn(
                        "font-mono text-[11px] uppercase tracking-[0.22em]",
                        law.tone === "precision" ? "text-precision" : law.tone === "power" ? "text-power" : "text-muted-foreground",
                      )}
                    >
                      Law {law.n} · {law.role}
                    </div>
                    <h2 className="mt-2 font-display text-4xl font-semibold text-white">{law.name}</h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{law.long}</p>
                  </div>
                  <div className="grid gap-px border-t border-white/[0.06] bg-white/[0.04] lg:border-l lg:border-t-0">
                    <div className="bg-[#0b1220] p-7">
                      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-precision">In daily life</div>
                      <p className="mt-2 text-sm leading-relaxed text-white/85">{law.inDailyLife}</p>
                    </div>
                    <div className="bg-[#0b1220] p-7">
                      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-power">When it fails</div>
                      <p className="mt-2 text-sm leading-relaxed text-white/85">{law.whenItFails}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            eyebrow="Law 6 in action"
            title="Try the Dynamic Balance Rule."
            lead="Precision on one side, power on the other. Flip the switches and watch what happens when both sides try to do the same job."
          />
          <Reveal className="mt-12">
            <DynamicBalanceLab />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading
            eyebrow="Law 5 in action"
            title="See the Ambi Curve."
            lead="Switch between the cycle you already own and the one you never built."
          />
          <Reveal className="mt-12">
            <AmbiCurve />
          </Reveal>
          <Reveal className="mt-14 flex flex-wrap gap-3">
            <ButtonLink href="/nst">Train the laws with NST</ButtonLink>
            <ButtonLink href="/neuromotion" variant="ghost">
              Back to the science
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>
    </Layout>
  );
}
