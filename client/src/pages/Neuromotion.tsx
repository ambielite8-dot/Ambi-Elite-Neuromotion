import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Neuromotion() {
  const points = [
    {
      title: "Neural Pathways",
      body: "Movement is not isolated to muscles, but organized through neural pathways that connect the brain to the body's bilateral structure."
    },
    {
      title: "Energy Dynamics",
      body: "Energy must be stabilized on one side to be directed and expressed effectively on the other."
    },
    {
      title: "Complementary Roles",
      body: "The body operates through complementary roles across both sides—one stabilizing, one executing."
    }
  ];

  return (
    <Layout>
      <SectionHeader 
        title="What Is Neuromotion?" 
        subtitle="The study of how energy, motion, and control flow through the human body via bilateral coordination."
      />

      <div className="grid gap-8 mb-16">
        {points.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="overflow-hidden border-l-4 border-l-primary hover:bg-secondary/20 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-display mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.body}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="bg-primary/5 rounded-2xl p-10 border border-primary/10">
        <h3 className="text-2xl font-display font-bold mb-4">A Unified Model</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Neuromotion introduces a unified model that explains how motion originates, how it is transferred, 
          and why imbalance emerges when one side dominates execution while the other remains primarily stabilizing.
          It is not merely a fitness practice, but a fundamental understanding of human biomechanics.
        </p>
      </div>
    </Layout>
  );
}
