import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap, Scale, Globe, ShieldCheck, Activity } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10 w-full h-full">
           <Brain size={800} className="text-primary animate-pulse mx-auto" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-primary uppercase bg-primary/10 border border-primary/20 rounded-full glow-cyan">
            A Global Neurological Discovery
          </span>
          <h1 className="font-display text-7xl md:text-9xl font-black tracking-tighter text-foreground mb-4 leading-[0.85] uppercase italic">
            True<br/>
            <span className="text-primary text-glow-cyan">Ambidexterity</span>
          </h1>
          <p className="font-display text-2xl md:text-4xl text-foreground font-bold max-w-4xl mx-auto leading-tight mb-12 uppercase tracking-tighter">
            The rarest skill on earth. <span className="text-accent italic">Unlocked.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed space-y-8"
        >
          <p className="font-medium text-xl text-foreground/80">
            Neuromotion is the revolutionary scientific framework governing human movement, balance, and energy transfer through 
            bilateral motor organization.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/neuromotion" 
              className="inline-flex items-center justify-center px-10 py-5 rounded-sm bg-primary text-primary-foreground font-black uppercase tracking-widest glow-cyan hover:scale-105 transition-all duration-300"
            >
              Master the Science <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 rounded-sm border-2 border-white/10 text-foreground font-black uppercase tracking-widest hover:bg-white/5 transition-all duration-300"
            >
              Join the Elite
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Discovery Section */}
      <section className="mt-32 glass-panel p-12 rounded-sm border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary glow-cyan" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 leading-none">The Asymmetry<br/><span className="text-primary">Problem</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Humans possess two hemispheres and two complete motor systems. Yet modern development overwhelmingly favors one side, 
              limiting neural coherence and physical potential.
            </p>
            <div className="space-y-4">
              {[
                "Neural Path Obstruction",
                "Linear Motion Limitations",
                "Unilateral Energy Leakage"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ShieldCheck className="text-primary w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square bg-white/5 rounded-sm border border-white/5 flex items-center justify-center group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Brain className="w-48 h-48 text-primary group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            icon: Globe,
            title: "Global Impact",
            desc: "A scientific methodology reshaping sports, rehabilitation, and cognitive performance worldwide.",
            color: "text-primary"
          },
          {
            icon: Zap,
            title: "The Power Chain",
            desc: "Unlocking the ulnar nerve and outer grip for explosive force generation.",
            color: "text-accent"
          },
          {
            icon: Activity,
            title: "Neural Symmetery",
            desc: "Restoring 1:1 motor fluency to create the complete human athlete.",
            color: "text-primary"
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 glass-panel rounded-sm hover:border-primary/50 transition-all group"
          >
            <feature.icon className={`w-12 h-12 ${feature.color} mb-6 group-hover:scale-110 transition-transform`} />
            <h3 className="font-display text-2xl font-black mb-4 uppercase">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-medium">{feature.desc}</p>
          </motion.div>
        ))}
      </section>
      
      {/* Slogan */}
      <section className="mt-40 text-center py-20 border-y border-white/5">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-4">
          Train Both Sides.<br/>
          <span className="text-primary text-glow-cyan">Unlock the whole mind.</span>
        </h2>
      </section>
    </Layout>
  );
}
