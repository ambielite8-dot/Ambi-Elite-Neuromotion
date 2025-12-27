import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Check } from "lucide-react";

export default function Nst() {
  const benefits = [
    "Awareness of Base and Anchor roles",
    "Bilateral grip control",
    "Balanced energy transfer",
    "Symmetrical motor fluency"
  ];

  return (
    <Layout>
      <SectionHeader 
        title="Neuromotor Symmetry Training (NST)" 
        subtitle="The applied methodology derived from Neuromotion."
      />

      <div className="space-y-12">
        <div className="prose prose-lg text-muted-foreground max-w-none">
          <p>
            NST is not just exercise; it is a re-education of the nervous system. By systematically training
            both sides of the body to perform both stabilizing and executing roles, we unlock the full 
            potential of human movement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <h3 className="text-xl font-display font-bold mb-6">NST Develops:</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-accent/10 rounded-2xl p-8 border border-accent/20 flex items-center">
            <div>
              <h3 className="text-xl font-display font-bold mb-4 text-accent-foreground/90">Important Note</h3>
              <p className="text-foreground/70 italic leading-relaxed">
                "NST does not force ambidexterity. It restores access to motor patterns that exist neurologically but are underutilized."
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
