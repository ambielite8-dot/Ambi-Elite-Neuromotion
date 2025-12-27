import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

const laws = [
  {
    number: "01",
    title: "The Base",
    desc: "The stabilizing side responsible for grounding, weight distribution, and energy generation."
  },
  {
    number: "02",
    title: "The Anchor",
    desc: "The executing side responsible for extension, direction, and task completion."
  },
  {
    number: "03",
    title: "Inner Grip",
    desc: "The precision chain governing fine motor control, alignment, and accuracy."
  },
  {
    number: "04",
    title: "Outer Grip",
    desc: "The power chain governing force, protection, and structural stability."
  },
  {
    number: "05",
    title: "The Ambi Curve",
    desc: "The natural curved path through which energy transfers from Base to Anchor via spinal, hip, and rib alignment. Humans do not move linearly; motion follows arcs shaped by stabilization on one side and execution on the other."
  },
  {
    number: "06",
    title: "The Dynamic Balance Rule",
    desc: "Precision and power must alternate across sides. When Inner Grip emphasizes on one side, Outer Grip must support on the opposite side to prevent energy leakage and instability."
  }
];

export default function SixLaws() {
  return (
    <Layout>
      <SectionHeader title="The Six Laws" subtitle="The fundamental principles governing bilateral human movement." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {laws.map((law, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`
              p-8 rounded-xl border transition-all duration-300
              ${i >= 4 ? 'md:col-span-2 bg-secondary/30 border-primary/20' : 'bg-card border-border hover:shadow-lg hover:border-primary/30'}
            `}
          >
            <span className="text-6xl font-display font-bold text-primary/10 mb-4 block">
              {law.number}
            </span>
            <h3 className="text-2xl font-display font-bold mb-3">{law.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {law.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
