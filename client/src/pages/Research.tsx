import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Microscope, Activity, BrainCircuit, Users } from "lucide-react";

export default function Research() {
  const pathways = [
    {
      icon: Activity,
      title: "Motion Capture Analysis",
      desc: "Detailed study of bilateral Ambi Curves and energy transfer visualization."
    },
    {
      icon: BrainCircuit,
      title: "EEG Coherence Studies",
      desc: "Measuring interhemispheric communication during bilateral tasks."
    },
    {
      icon: Microscope,
      title: "TMS Mapping",
      desc: "Mapping motor cortex engagement changes before and after NST interventions."
    },
    {
      icon: Users,
      title: "Longitudinal Studies",
      desc: "Tracking motor development over time in diverse populations."
    }
  ];

  return (
    <Layout>
      <SectionHeader 
        title="Research Vision" 
        subtitle="Neuromotion proposes that long-term unilateral motor dominance limits interhemispheric communication and motor adaptability."
      />

      <div className="mb-16">
        <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
          This work is intended to complement neuroscience, biomechanics, rehabilitation, and human performance research.
          Our goal is to provide empirical evidence for the benefits of bilateral motor competence.
        </p>
      </div>

      <h2 className="text-2xl font-display font-bold mb-8">Future Research Pathways</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pathways.map((path, i) => (
          <div key={i} className="flex p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
            <div className="mr-6 flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary">
                <path.icon className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold font-display mb-2">{path.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{path.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
