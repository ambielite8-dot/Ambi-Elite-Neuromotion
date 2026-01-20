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
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden pt-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10 w-full h-full">
           <Brain size={600} className="text-primary animate-pulse mx-auto" />
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
          <h1 className="font-display text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-4 leading-[0.9] uppercase italic">
            Human Movement<br/>
            <span className="text-primary text-glow-cyan text-5xl md:text-7xl">Unlocked</span>
          </h1>
          <p className="font-display text-2xl md:text-4xl text-foreground font-bold max-w-4xl mx-auto leading-tight mb-12 uppercase tracking-tighter">
            Unlock your body's second engine. <span className="text-accent italic">Bilateral Mastery through Neuromotion.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed space-y-8"
        >
          <p className="font-medium text-xl text-foreground/80">
            Neuromotion is completion—activating what was always there. Your body is your greatest possession. 
            We bridge the hemispheres to unlock the next stage of human evolution.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/nst" 
              className="inline-flex items-center justify-center px-10 py-5 rounded-sm bg-primary text-primary-foreground font-black uppercase tracking-widest glow-cyan hover:scale-105 transition-all duration-300"
            >
              Start Training <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/neuromotion"
              className="inline-flex items-center justify-center px-10 py-5 rounded-sm border-2 border-white/10 text-foreground font-black uppercase tracking-widest hover:bg-white/5 transition-all duration-300"
            >
              Master the Science
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Brain Integration Section */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-8 uppercase leading-none italic">Structural<br/><span className="text-primary text-glow-cyan">Cognition</span></h2>
          <p className="text-muted-foreground text-xl leading-relaxed mb-8 font-medium">
            Cognitive benefits are structural, not theoretical. Neuromotion increases interhemispheric signaling, 
            improving executive function, focus, and spatial awareness through systematic motion.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 glass-panel border-white/5">
              <h4 className="font-black text-primary uppercase text-xs mb-2 tracking-widest">Inner Grip</h4>
              <p className="text-[10px] uppercase font-bold text-muted-foreground">Precision & Sequencing</p>
            </div>
            <div className="p-6 glass-panel border-white/5">
              <h4 className="font-black text-accent uppercase text-xs mb-2 tracking-widest">Outer Grip</h4>
              <p className="text-[10px] uppercase font-bold text-muted-foreground">Power & Flow</p>
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
      <section className="mt-20 space-y-32">
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
            <h3 className="text-4xl font-black uppercase mb-8 italic"><span className="text-primary">Youth</span> Development</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <GraduationCap className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-xl">Curriculum Mastery</h4>
                  <p className="text-muted-foreground font-medium">A 208-week journey (ages 6-18) that prevents asymmetry and builds absolute coordination through customized training.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-xl">Embodied Confidence</h4>
                  <p className="text-muted-foreground font-medium">Confidence through control. Students master their bodies to unlock their true cognitive potential.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-4xl font-black uppercase mb-8 italic"><span className="text-accent">Adult</span> Health</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <Heart className="w-10 h-10 text-accent flex-shrink-0" />
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-xl">Injury Prevention</h4>
                  <p className="text-muted-foreground font-medium">Focused on restoration and balance. Learn to identify compensation before pain starts.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Activity className="w-10 h-10 text-accent flex-shrink-0" />
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-xl">Active Restoration</h4>
                  <p className="text-muted-foreground font-medium">Recover lost capacity and regain structural symmetry for lifelong mobility and clarity.</p>
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
      <section className="mt-20 text-center py-10 border-y border-white/5">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-4">
          Do it <span className="text-primary text-glow-cyan italic">Right.</span>
        </h2>
        <p className="text-muted-foreground font-black uppercase tracking-[0.5em] text-xs">The Global Standard</p>
      </section>
    </Layout>
  );
}
