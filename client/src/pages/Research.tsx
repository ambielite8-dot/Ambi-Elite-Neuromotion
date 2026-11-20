import { useEffect } from "react";
import { ExternalLink, Activity, BrainCircuit, Microscope, LineChart } from "lucide-react";
import { Layout } from "@/components/Layout";
import { getFragment } from "@/lib/location";
import { Container, Section, Heading, Reveal, ButtonLink, PageHero } from "@/components/kit";
import { REFERENCES, REFERENCE_GROUPS } from "@/data/references";

const LAYERS = [
  {
    label: "Established science",
    tone: "text-emerald-300",
    border: "border-emerald-400/25",
    items: [
      "About 9 in 10 people favor the right hand, and culture changes how often the other hand is used.",
      "Each hemisphere mainly drives the opposite side of the body.",
      "The corpus callosum connects the hemispheres and supports two-handed coordination.",
      "The brain physically changes with motor practice, at any age.",
      "Precision grip and power grip are distinct, and the median and ulnar nerves supply different parts of the hand.",
      "Hip strength and strength imbalances are linked to injury risk.",
    ],
  },
  {
    label: "Neuromotion's framework",
    tone: "text-precision",
    border: "border-primary/25",
    items: [
      "Organizes these findings into Six Laws: Base, Anchor, Inner Grip, Outer Grip, Ambi Curve, Dynamic Balance.",
      "Maps Inner and Outer Grip as two full-body chains, from fingers to feet.",
      "Proposes that lifelong one-sided use leaves a dormant energy cycle that can be trained.",
      "Proposes that systematic bilateral training strengthens interhemispheric integration.",
    ],
  },
  {
    label: "What we're testing next",
    tone: "text-power",
    border: "border-accent/25",
    items: [
      "Does NST measurably improve bilateral motor control over 208 weeks?",
      "Does it change EEG coherence or motor-cortex maps?",
      "Does it reduce compensation, pain or injury compared with usual training?",
      "What is the best age to start, and how long do the gains last?",
    ],
  },
];

const PATHWAYS = [
  { icon: Activity, title: "Motion capture", desc: "3D analysis of bilateral Ambi Curves: timing, path and symmetry of energy transfer, before and after NST." },
  { icon: BrainCircuit, title: "EEG coherence", desc: "Measuring interhemispheric communication during bilateral and cross-body tasks." },
  { icon: Microscope, title: "TMS mapping", desc: "Mapping motor-cortex representation of the non-dominant side as training progresses." },
  { icon: LineChart, title: "Longitudinal cohorts", desc: "Following children and adults over years to track posture, coordination, injury and cognition." },
];

export default function Research() {
  useEffect(() => {
    const frag = getFragment();
    if (frag) {
      const el = document.getElementById(frag);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("ring-2", "ring-primary/60");
          setTimeout(() => el.classList.remove("ring-2", "ring-primary/60"), 2400);
        }, 150);
      }
    }
  }, []);

  return (
    <Layout>
      <PageHero
        eyebrow="Research"
        title={
          <>
            Standing on <span className="grad-text">real science.</span>
          </>
        }
        lead="Neuromotion proposes that long-term one-sided motor dominance limits interhemispheric communication and motor adaptability. Here is what's already established, what Neuromotion adds, and what we're working to prove."
      />

      <Section className="pt-0">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {LAYERS.map((l, i) => (
              <Reveal key={l.label} delay={i * 0.06} className={`panel rounded-3xl border ${l.border} p-7`}>
                <div className={`font-mono text-[11px] uppercase tracking-[0.22em] ${l.tone}`}>{l.label}</div>
                <ul className="mt-5 space-y-3">
                  {l.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm leading-relaxed text-white/85">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading eyebrow="Research pathways" title="How we'll measure it." lead="This work is meant to complement neuroscience, biomechanics, rehabilitation and human performance research." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PATHWAYS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="panel rounded-2xl p-6">
                <p.icon className="h-7 w-7 text-precision" />
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="references">
        <Container>
          <Heading
            eyebrow="Scientific foundations"
            title="References"
            lead="Every numbered citation on this site links here. Each entry says what the study found and why it matters for Neuromotion."
          />
          <div className="mt-12 space-y-14">
            {REFERENCE_GROUPS.map((group) => (
              <div key={group}>
                <h3 className="mb-5 font-mono text-[12px] uppercase tracking-[0.24em] text-muted-foreground">{group}</h3>
                <ol className="grid gap-3 lg:grid-cols-2">
                  {REFERENCES.map((r, idx) => ({ r, idx }))
                    .filter(({ r }) => r.group === group)
                    .map(({ r, idx }) => (
                      <li key={r.id} id={`ref-${r.id}`} className="panel scroll-mt-28 rounded-2xl p-6 transition-shadow">
                        <div className="flex items-start gap-4">
                          <span className="font-mono text-sm text-precision">[{idx + 1}]</span>
                          <div className="min-w-0">
                            <a href={r.url} target="_blank" rel="noreferrer" className="group inline font-display text-lg font-semibold leading-snug text-white hover:text-precision">
                              {r.title}
                              <ExternalLink className="ml-1.5 inline h-3.5 w-3.5 opacity-50 group-hover:opacity-100" />
                            </a>
                            <div className="mt-1 text-sm text-muted-foreground">
                              {r.authors} ({r.year}). <span className="italic">{r.source}</span>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-white/85">
                              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Found · </span>
                              {r.shows}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-white/85">
                              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-precision">Why it matters · </span>
                              {r.why}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                </ol>
              </div>
            ))}
          </div>
          <Reveal className="mt-14 rounded-2xl border border-white/[0.08] p-6 text-sm leading-relaxed text-muted-foreground">
            Want to collaborate? We welcome researchers in neuroscience, biomechanics, physical therapy, motor development and
            sports science.
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Propose a collaboration</ButtonLink>
              <ButtonLink href="/donate" variant="ghost">
                Fund a study
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </Layout>
  );
}
