import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { CheckCircle2, Zap, Brain, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Nst() {
  const benefits = [
    { title: "Awareness", desc: "Instinctive recognition of Base and Anchor roles." },
    { title: "Grip Control", desc: "Mastery of bilateral inside/outside grip pathways." },
    { title: "Energy Flow", desc: "Seamless energy transfer without unilateral leakage." },
    { title: "Fluency", desc: "Total symmetrical motor fluency in any environment." }
  ];

  return (
    <Layout>
      <SectionHeader 
        title="Neuromotor Symmetry Training" 
        subtitle="NST: The elite applied methodology derived from the laws of Neuromotion."
      />

      <div className="space-y-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="prose prose-invert prose-lg max-w-none font-medium text-foreground/80 leading-relaxed">
            <p>
              NST is not exercise; it is a <span className="text-primary font-black uppercase">neural re-education</span>. 
              By systematically training both sides of the body to perform both stabilizing and executing roles, 
              we unlock the full neurological potential of human movement.
            </p>
          </div>
          <div className="glass-panel p-10 rounded-sm border-accent/20 bg-accent/5 relative overflow-hidden">
             <Shield className="absolute -bottom-10 -right-10 w-40 h-40 text-accent opacity-5" />
             <h3 className="text-2xl font-display font-black mb-4 text-accent uppercase italic">Strategic Mandate</h3>
             <p className="text-foreground font-bold italic leading-relaxed text-lg">
               "NST does not force ambidexterity. It restores access to motor patterns that exist neurologically but remain critically underutilized in 99% of the population."
             </p>
          </div>
        </section>

        <section>
          <h3 className="text-4xl font-display font-black mb-12 uppercase italic tracking-tighter">
            Operational <span className="text-primary">Development</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-sm border-white/5 flex items-start gap-6 group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase mb-2 tracking-tighter">{benefit.title}</h4>
                  <p className="text-muted-foreground font-medium text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center py-20 border-t border-white/5">
           <Zap className="w-16 h-16 text-primary mx-auto mb-8 animate-pulse" />
           <h3 className="text-3xl font-black uppercase italic tracking-tighter">Become the Complete Athlete.</h3>
        </section>
      </div>
    </Layout>
  );
}
