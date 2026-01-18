import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Activity, Zap, Target, Brain } from "lucide-react";
import brainComparisonImg from "@assets/IMG_0022_1768704291952.jpeg";

export default function Neuromotion() {
  const points = [
    {
      title: "Precision Chain",
      subtitle: "Inside Grip (Cyan)",
      icon: Target,
      color: "text-primary",
      borderColor: "border-primary",
      body: "Governed by the median nerve. Handles logic, sequencing, and fine motor control. The thumb, index, and middle fingers form the bridge to the mind's analytical center."
    },
    {
      title: "Power Chain",
      subtitle: "Outside Grip (Orange)",
      icon: Zap,
      color: "text-accent",
      borderColor: "border-accent",
      body: "Governed by the ulnar nerve. Handles creativity, flow, and explosive force generation. The ring and pinky fingers engage the body's structural power line."
    },
    {
      title: "Neural Integration",
      subtitle: "Cognitive Synergy",
      icon: Brain,
      color: "text-foreground",
      borderColor: "border-white/20",
      body: "The way to unlock the mind is by gaining complete control of the body. By training both sides, we force the corpus callosum to integrate hemispheres, creating neural coherence."
    }
  ];

  return (
    <Layout>
      <SectionHeader 
        title="The Neuromotion Engine" 
        subtitle="The revolutionary study of how energy, motion, and control flow through the human body via bilateral coordination."
      />

      {/* Science Spotlight */}
      <section className="mb-32 glass-panel p-12 rounded-sm border-white/10 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Brain size={300} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img src={brainComparisonImg} alt="Neural Pathways Mapping" className="rounded-sm border border-white/5 glow-orange shadow-2xl" />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-4xl font-black uppercase italic mb-6 tracking-tighter">Open Neural<br/><span className="text-accent">Pathways</span></h3>
            <p className="text-muted-foreground text-xl font-medium leading-relaxed mb-6">
              For centuries, we debated mind vs. body. Neuromotion proves they are unified. Complete body control is the 
              ultimate cognitive enhancer.
            </p>
            <div className="flex gap-4">
               <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-sm text-[10px] font-black uppercase tracking-widest text-primary">Logic & Control</div>
               <div className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-sm text-[10px] font-black uppercase tracking-widest text-accent">Creativity & Flow</div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-10 mb-20">
        {points.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className={`glass-panel border-l-4 ${point.borderColor} overflow-hidden group`}>
              <CardContent className="p-10 flex flex-col md:flex-row gap-8 items-start">
                <div className={`${point.color} p-4 bg-white/5 rounded-sm group-hover:scale-110 transition-transform`}>
                  <point.icon className="w-10 h-10" />
                </div>
                <div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${point.color}`}>{point.subtitle}</span>
                  <h3 className="text-3xl font-black font-display mb-4 uppercase mt-1">{point.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">{point.body}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="glass-panel p-12 rounded-sm border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <h3 className="text-3xl font-display font-black mb-6 uppercase leading-none">A Unified<br/><span className="text-primary text-glow-cyan text-4xl">Mind-Body Model</span></h3>
        <p className="text-xl text-foreground font-medium leading-relaxed italic">
          "The way to unlock the mind is through the body, and the way to unlock the body is through the mind. Beautiful things happen when they meet at the bridge."
        </p>
      </div>
    </Layout>
  );
}
