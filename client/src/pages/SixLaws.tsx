import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const laws = [
  {
    number: "01",
    title: "The Base",
    side: "STABILIZATION",
    desc: "The grounding side responsible for weight distribution and energy generation. Without the Base, the Attack is hollow."
  },
  {
    number: "02",
    title: "The Anchor",
    side: "EXECUTION",
    desc: "The executing side responsible for extension, direction, and task completion. The Anchor is the expression of the Base's power."
  },
  {
    number: "03",
    title: "Inner Grip",
    side: "PRECISION CHAIN",
    desc: "The median nerve governs fine motor control. Cyan logic meets physical accuracy. thumb • index • middle."
  },
  {
    number: "04",
    title: "Outer Grip",
    side: "POWER CHAIN",
    desc: "The ulnar nerve builds stability and force. Orange creativity meets structural force. ring • pinky."
  },
  {
    number: "05",
    title: "The Ambi Curve",
    side: "ENERGY FLOW",
    desc: "Humans move in arcs, not lines. Energy transfers via spinal and hip alignment in a natural curved path."
  },
  {
    number: "06",
    title: "Dynamic Balance",
    side: "THE RULE",
    desc: "Precision and power must alternate. When one side is Inside Grip, the other MUST be Outside Grip to prevent energy leakage."
  }
];

export default function SixLaws() {
  return (
    <Layout>
      <SectionHeader title="The Six Laws" subtitle="The immutable laws of bilateral organization and human motor fluency." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {laws.map((law, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-10 rounded-sm relative group overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-1 transition-all duration-500 ${i % 2 === 0 ? 'bg-primary group-hover:h-2 glow-cyan' : 'bg-accent group-hover:h-2 glow-orange'}`} />
            
            <div className="flex justify-between items-start mb-6">
              <span className="text-6xl font-black font-display text-white/5 group-hover:text-white/10 transition-colors">
                {law.number}
              </span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${i % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{law.side}</span>
              </div>
            </div>

            <h3 className="text-3xl font-display font-black mb-4 uppercase tracking-tighter group-hover:text-primary transition-colors">{law.title}</h3>
            <p className="text-muted-foreground leading-relaxed font-medium text-sm">
              {law.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
