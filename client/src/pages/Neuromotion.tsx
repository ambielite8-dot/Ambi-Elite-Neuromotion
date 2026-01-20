import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Activity, Zap, Target, Brain, Globe, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import silhouetteImg from "@assets/stock_images/human_body_silhouett_d804f4e0.jpg";

export default function Neuromotion() {
  const points = [
    {
      title: "Dual Energy Cycle",
      subtitle: "Universal Mechanism",
      icon: Activity,
      color: "text-primary",
      borderColor: "border-primary",
      body: "Most systems treat symptoms like pain or poor posture. Neuromotion explains the underlying mechanism: how energy moves, how motion is organized, and how asymmetry forms neurologically. You don't just train—you understand your body for the first time."
    },
    {
      title: "Precision Chain",
      subtitle: "Inside Grip (Cyan)",
      icon: Target,
      color: "text-primary",
      borderColor: "border-primary",
      body: "Governed by the median nerve. Each side of your body contains an Inner precision chain. Neuromotion organizes the science of differentiated nerve pathways into the Inner Grip—the bridge to the mind's analytical center."
    },
    {
      title: "Power Chain",
      subtitle: "Outside Grip (Orange)",
      icon: Zap,
      color: "text-accent",
      borderColor: "border-accent",
      body: "Governed by the ulnar nerve. The Outer power chain handles creativity, flow, and explosive force. Control is achieved only when energy is trapped between the Inner and Outer grips."
    },
    {
      title: "The Ambi Curve",
      subtitle: "Natural Motion",
      icon: ShieldCheck,
      color: "text-foreground",
      borderColor: "border-white/20",
      body: "Humans move in arcs, not straight lines. Neuromotion explains why one leg stabilizes while the other extends, and why one side often cuts off motion early. Once learned, you can self-correct for life."
    }
  ];

  return (
    <Layout>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
        <img 
          src={silhouetteImg} 
          alt="" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] opacity-[0.03] mix-blend-lighten grayscale"
          style={{ filter: 'brightness(1.5) contrast(1.2)' }}
        />
      </div>

      <div className="relative z-10">
        <SectionHeader 
          title="The Neuromotion Engine" 
          subtitle="The revolutionary study of how energy, motion, and control flow through the human body via bilateral coordination."
        />

        {/* Big Picture Section */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">
              Why you are <br/><span className="text-primary text-glow-cyan">Imbalanced</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Neuromotion reveals that humans are built with a Dual Energy Cycle. While most people only develop one directional movement pattern, we show how to activate both intentionally, reframing ambidexterity from a "skill" to a natural human capacity.
            </p>
            <div className="p-8 glass-panel border-primary/20 bg-primary/5 rounded-sm">
              <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4">The Discovery</h4>
              <p className="font-bold text-lg italic">"It makes subconscious movement conscious. People stop being prisoners to habit-driven motion."</p>
            </div>
          </div>
          <div className="relative group min-h-[400px] flex items-center justify-center overflow-hidden rounded-sm border border-white/5 bg-white/[0.02]">
            <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10" />
            <img 
              src={silhouetteImg} 
              alt="Scientific Human Silhouette" 
              className="w-full h-full object-cover opacity-40 mix-blend-lighten shadow-2xl transition-all group-hover:opacity-60 group-hover:scale-105 duration-700"
              style={{ filter: 'brightness(1.2) contrast(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          </div>
        </section>
      </div>

      {/* Detailed Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {points.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className={`glass-panel border-l-4 ${point.borderColor} h-full group hover:bg-white/[0.02] transition-colors`}>
              <CardContent className="p-10">
                <div className={`${point.color} mb-6`}>
                  <point.icon className="w-12 h-12" />
                </div>
                <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${point.color}`}>{point.subtitle}</span>
                <h3 className="text-3xl font-black font-display mb-4 uppercase mt-1">{point.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-medium">{point.body}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Cognitive Benefits Section */}
      <section className="mb-32 glass-panel p-12 rounded-sm border-white/10 overflow-hidden relative">
        <div className="max-w-4xl">
          <Badge className="bg-primary mb-6">Structural Cognition</Badge>
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8 tracking-tighter">
            Push your brain toward <br/><span className="text-primary">Peak Functionality</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-muted-foreground text-lg font-medium leading-relaxed">
              Neuromotion targets cognition through the body—how the brain evolved to learn. By increasing interhemispheric signaling and corpus callosum communication, we enhance executive function and spatial awareness organically.
            </p>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed">
              This is the most behavior-based way to elevate your mind without chemicals or artificial stimulants. Every movement becomes an opportunity to regain symmetry and refine control.
            </p>
          </div>
        </div>
      </section>

      <div className="glass-panel p-12 rounded-sm border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 text-center">
        <h3 className="text-3xl font-display font-black mb-6 uppercase leading-none italic">
          Neuromotion <span className="text-primary">Never Ends</span>
        </h3>
        <p className="text-xl text-foreground font-medium leading-relaxed italic max-w-3xl mx-auto">
          "Once learned, Neuromotion integrates into daily life—walking, standing, reaching. It creates a relationship with the body instead of resistance to it. You don't add something new. You activate what was always there."
        </p>
      </div>
      </div>
    </Layout>
  );
}
