import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Microscope, Activity, BrainCircuit, Users, Binary } from "lucide-react";
import { motion } from "framer-motion";

export default function Research() {
  const pathways = [
    {
      icon: Activity,
      title: "Motion Capture Analysis",
      desc: "Detailed study of bilateral Ambi Curves and energy transfer visualization.",
      color: "text-primary"
    },
    {
      icon: BrainCircuit,
      title: "EEG Coherence Studies",
      desc: "Measuring interhemispheric communication during bilateral tasks.",
      color: "text-accent"
    },
    {
      icon: Binary,
      title: "Neural Sequencing",
      desc: "Analyzing how the brain alternates between Precision and Power chains.",
      color: "text-primary"
    },
    {
      icon: Microscope,
      title: "TMS Mapping",
      desc: "Mapping motor cortex engagement changes before and after NST interventions.",
      color: "text-accent"
    }
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden mb-20">
        <div className="absolute top-0 right-0 -z-10 opacity-10">
          <BrainCircuit size={400} className="text-primary" />
        </div>
        
        <SectionHeader 
          title="Research Vision" 
          subtitle="Neuromotion proposes that long-term unilateral motor dominance limits interhemispheric communication and motor adaptability."
        />

        <div className="glass-panel p-10 rounded-sm border-primary/20 mt-12">
          <p className="text-xl text-foreground font-medium leading-relaxed max-w-4xl italic">
            "This work is intended to complement neuroscience, biomechanics, rehabilitation, and human performance research. 
            We are moving beyond isolated muscle studies into the era of integrated neural movement."
          </p>
        </div>
      </section>

      <h2 className="text-4xl font-display font-black mb-10 uppercase italic tracking-tighter">
        Future Research <span className="text-primary">Pathways</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pathways.map((path, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex p-8 rounded-sm glass-panel border-white/5 hover:border-primary/40 transition-all group"
          >
            <div className="mr-8 flex-shrink-0">
              <div className="w-16 h-16 rounded-sm bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <path.icon className={`w-8 h-8 ${path.color}`} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black font-display mb-3 uppercase tracking-tighter group-hover:text-primary transition-colors">{path.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">{path.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
