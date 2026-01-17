import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Activity, Zap, Target } from "lucide-react";

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
      title: "Dynamic Synchronization",
      subtitle: "The Bridge",
      icon: Activity,
      color: "text-foreground",
      borderColor: "border-white/20",
      body: "True balance is achieved only when the body can seamlessly switch roles between the Attack side and the Base side in perfect synchrony."
    }
  ];

  return (
    <Layout>
      <SectionHeader 
        title="The Neuromotion Engine" 
        subtitle="The revolutionary study of how energy, motion, and control flow through the human body via bilateral coordination."
      />

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
        <h3 className="text-3xl font-display font-black mb-6 uppercase leading-none">A Global<br/><span className="text-primary text-glow-cyan text-4xl">Scientific Standard</span></h3>
        <p className="text-xl text-foreground font-medium leading-relaxed">
          Ambi Elite strengthens the bridge between hemispheres. Faster decisions, smoother balance, and total synchronization are no 
          longer accidental—they are engineered.
        </p>
      </div>
    </Layout>
  );
}
