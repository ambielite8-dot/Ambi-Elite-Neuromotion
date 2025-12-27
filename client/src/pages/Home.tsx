import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap, Scale } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center">
        <div className="absolute top-0 right-0 -z-10 opacity-5">
           <Brain size={400} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            The Science of Movement
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-6">
            Neuro<span className="text-primary">motion</span>
          </h1>
          <p className="font-display text-2xl md:text-3xl text-muted-foreground max-w-3xl leading-snug mb-8">
            The Science of Bilateral Human Movement
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl text-lg text-muted-foreground leading-relaxed space-y-6"
        >
          <p>
            Neuromotion is a scientific framework describing how human movement, balance, and energy transfer 
            are governed by bilateral motor organization.
          </p>
          <p>
            Humans possess two hemispheres, two sides of the body, and two complete motor systems. 
            Yet modern movement development overwhelmingly favors one side. Neuromotion identifies the 
            consequences of this asymmetry and provides a structured path toward neuromotor balance.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <Link 
              href="/neuromotion" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore the Science <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/research"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors"
            >
              View Research
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Brain,
            title: "Neural Organization",
            desc: "Movement originates in the brain, organized through bilateral pathways."
          },
          {
            icon: Zap,
            title: "Energy Transfer",
            desc: "How force flows from stabilization to execution across the body."
          },
          {
            icon: Scale,
            title: "Bilateral Balance",
            desc: "Restoring symmetry to human motor patterns."
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors shadow-sm"
          >
            <feature.icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </section>
    </Layout>
  );
}
