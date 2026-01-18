import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap, Scale, Globe, ShieldCheck, Activity, GraduationCap, Heart, Rocket } from "lucide-react";
import { Link } from "wouter";
import brainIntegrationImg from "@assets/IMG_0026_1768704291952.jpeg";
import kidsBenefitsImg from "@assets/IMG_0019_1768704291952.jpeg";
import adultsBenefitsImg from "@assets/IMG_0020_1768704291952.jpeg";

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
            Coherent<br/>
            <span className="text-primary text-glow-cyan text-6xl md:text-8xl">Integration</span>
          </h1>
          <p className="font-display text-2xl md:text-4xl text-foreground font-bold max-w-4xl mx-auto leading-tight mb-12 uppercase tracking-tighter">
            Harness the body to elevate the mind. <span className="text-accent italic">The Corpus Callosum Evolution.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed space-y-8"
        >
          <p className="font-medium text-xl text-foreground/80">
            Neuromotion represents a paradigm shift: true cognitive mastery is achieved through absolute physical discipline. 
            We bridge the hemispheres to unlock the next stage of human evolution.
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

      {/* Brain Integration Section */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-8 uppercase leading-none italic">The Corpus<br/><span className="text-primary text-glow-cyan">Callosum Bridge</span></h2>
          <p className="text-muted-foreground text-xl leading-relaxed mb-8 font-medium">
            The corpus callosum is the neural highway that integrates the two hemispheres. Ambi Elite training strengthens this bridge, 
            enabling faster decisions, smoother balance, and total synchronization.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 glass-panel border-white/5">
              <h4 className="font-black text-primary uppercase text-xs mb-2 tracking-widest">Focused</h4>
              <p className="text-[10px] uppercase font-bold text-muted-foreground">Sequencing & Detail</p>
            </div>
            <div className="p-6 glass-panel border-white/5">
              <h4 className="font-black text-accent uppercase text-xs mb-2 tracking-widest">Creativity</h4>
              <p className="text-[10px] uppercase font-bold text-muted-foreground">Flow & Intuition</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 group-hover:bg-primary/30 transition-all" />
          <img 
            src={brainIntegrationImg} 
            alt="Brain Integration Diagram" 
            className="rounded-sm border border-white/10 glow-cyan shadow-2xl mix-blend-lighten" 
            style={{ filter: 'contrast(1.1) brightness(1.1)' }}
          />
        </motion.div>
      </section>

      {/* Benefits for Kids & Adults */}
      <section className="mt-40 space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10" />
            <img 
              src={kidsBenefitsImg} 
              alt="Benefits for Kids" 
              className="rounded-sm border border-white/10 shadow-2xl mix-blend-lighten" 
              style={{ filter: 'contrast(1.1) brightness(1.1)' }}
            />
          </motion.div>
          <div>
            <h3 className="text-4xl font-black uppercase mb-8 italic"><span className="text-primary">Learning</span> plus Development</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <GraduationCap className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-xl">Accelerated Learning</h4>
                  <p className="text-muted-foreground font-medium">Activates both hemispheres, making children more adaptable, creative, and focused.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-xl">Confidence plus Discipline</h4>
                  <p className="text-muted-foreground font-medium">Mastering unique skills instills self-assurance and the reward of steady progress.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-4xl font-black uppercase mb-8 italic"><span className="text-accent">Performance</span> plus Longevity</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <Rocket className="w-10 h-10 text-accent flex-shrink-0" />
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-xl">Sharpness plus Performance</h4>
                  <p className="text-muted-foreground font-medium">Strengthen the mind-body connection to drive results in sports and professional life.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Heart className="w-10 h-10 text-accent flex-shrink-0" />
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-xl">Active Longevity</h4>
                  <p className="text-muted-foreground font-medium">Enhance coordination and reduce joint strain for lifelong health and mobility.</p>
                </div>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-accent/10 blur-3xl -z-10" />
            <img 
              src={adultsBenefitsImg} 
              alt="Benefits for Adults" 
              className="rounded-sm border border-white/10 shadow-2xl mix-blend-lighten" 
              style={{ filter: 'contrast(1.1) brightness(1.1)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Slogan */}
      <section className="mt-40 text-center py-20 border-y border-white/5">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-4">
          Master the Body.<br/>
          <span className="text-primary text-glow-cyan text-4xl md:text-6xl">Elevate the Mind.</span>
        </h2>
      </section>
    </Layout>
  );
}
