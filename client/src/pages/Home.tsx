import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap, Scale, Globe, ShieldCheck, Activity, GraduationCap, Heart, Rocket } from "lucide-react";
import { Link } from "wouter";
import brainIntegrationImg from "@assets/IMG_0026_1768704291952.jpeg";
import kidsBenefitsImg from "@assets/IMG_0019_1768704291952.jpeg";
import adultsBenefitsImg from "@assets/IMG_0020_1768704291952.jpeg";
import heroSilhouette from "@assets/generated_images/scientific_human_silhouette_anatomical_diagram.png";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden pt-4">
        <div className="absolute inset-0 -z-20 opacity-60 flex items-center justify-center pointer-events-none">
           <img 
             src={heroSilhouette} 
             alt="Scientific Silhouette" 
             className="w-full h-full max-w-[1200px] object-contain mix-blend-lighten"
             style={{ filter: 'brightness(2.5) contrast(1.8)' }}
           />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center relative z-10"
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
          <div className="py-12 px-8 glass-panel border-primary/20 bg-primary/5 rounded-sm mb-12">
            <h3 className="text-primary font-black uppercase tracking-widest text-xs mb-4">What Neuromotion Actually Trains</h3>
            <p className="text-xl text-foreground font-bold leading-relaxed">
              Neuromotion is the conscious training of how energy moves through both sides of the human body — from the base, through the spine, and into action — restoring bilateral balance, coordination, and control.
            </p>
          </div>

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

      {/* Explanatory Bridge Section */}
      <section className="mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">
              Modern Life Is <br/><span className="text-accent">Asymmetrical</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Modern life has reduced human movement to repetition and compensation. Neuromotion addresses the neurological cost of asymmetry in a one-sided world. It's not just exercise—it's literacy.
            </p>
          </div>
          <div className="p-8 glass-panel border-white/5 rounded-sm">
            <h3 className="text-primary font-black uppercase tracking-widest text-xs mb-4">The Lens</h3>
            <p className="text-lg font-bold italic text-foreground">
              Neuromotion is always "on." Once learned, it becomes the lens through which you walk, sit, reach, and sleep. It is not something you quit; it is how you live.
            </p>
          </div>
        </div>
      </section>

      {/* Six Laws Teaser */}
      <section className="mt-32 py-20 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8 tracking-tighter">
            Movement Is Governed by <span className="text-primary">Six Laws</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium mb-12">
            Balance, precision, power, curvature, stabilization, and timing are not random. Neuromotion identifies and trains the six laws that govern all human movement—whether you are walking, working, or competing.
          </p>
          <Link 
            href="/neuromotion" 
            className="inline-flex items-center text-primary font-black uppercase tracking-widest hover:gap-4 transition-all"
          >
            Explore The Laws <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Brain Integration Section */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-8 uppercase leading-none italic">Structural<br/><span className="text-primary text-glow-cyan">Cognition</span></h2>
          <div className="p-6 glass-panel border-primary/20 bg-primary/5 rounded-sm mb-8">
            <p className="text-xl text-foreground font-bold italic leading-relaxed">
              The brain develops through the body.
            </p>
          </div>
          <p className="text-muted-foreground text-xl leading-relaxed mb-8 font-medium">
            When movement becomes symmetrical, neural signaling becomes more efficient—improving focus, coordination, confidence, and recovery. Cognitive benefits are structural, not theoretical.
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
            <p className="text-lg text-foreground font-bold mb-6 italic">
              Early Neuromotion training helps prevent postural imbalance, coordination gaps, and chronic compensation before they become permanent.
            </p>
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
            <p className="text-lg text-foreground font-bold mb-6 italic">
              For adults, Neuromotion restores awareness, balance, and control that was lost through years of unilateral living.
            </p>
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
