import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Landmark, ShieldCheck, Globe, Scale } from "lucide-react";
import { motion } from "framer-motion";

export default function Foundation() {
  return (
    <Layout>
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto py-12">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-primary/10 rounded-sm border border-primary/20 flex items-center justify-center mb-10 glow-cyan"
        >
          <Landmark className="w-12 h-12 text-primary" />
        </motion.div>
        
        <SectionHeader 
          title="Ambi Research Foundation" 
          subtitle="The global authority dedicated to independent research, education, and public awareness of Neuromotion."
          align="center"
        />

        <div className="prose prose-invert prose-lg text-foreground/80 mb-20 max-w-4xl">
          <p className="font-medium text-xl leading-relaxed">
            This is a research-first initiative. We are dedicated to exploring the untapped potential
            of the human motor system through rigorous scientific inquiry and open collaboration. 
            <span className="text-primary font-black uppercase tracking-widest block mt-4">The Global Standard for Bilateral Literacy.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {[
            { 
              icon: Globe, 
              title: "Global Funding", 
              desc: "Supporting exploratory studies in biomechanics and neuroscience across continents." 
            },
            { 
              icon: Scale, 
              title: "Educational Reform", 
              desc: "Promoting balanced motor development in global education and professional athletics." 
            },
            { 
              icon: ShieldCheck, 
              title: "Literacy Access", 
              desc: "Making neuromotor literacy accessible as a fundamental human health right." 
            },
            { 
              icon: Landmark, 
              title: "Ethical Standards", 
              desc: "Ensuring open, ethical research practices for the benefit of all humanity." 
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-10 rounded-sm border-white/5 text-left group hover:border-primary/50 transition-all"
            >
              <item.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
