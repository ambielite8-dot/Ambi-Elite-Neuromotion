import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Landmark } from "lucide-react";

export default function Foundation() {
  return (
    <Layout>
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-12">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8">
          <Landmark className="w-10 h-10 text-primary" />
        </div>
        
        <SectionHeader 
          title="Ambi Research Foundation" 
          subtitle="The Ambi Research Foundation exists to support independent research, education, and public awareness related to Neuromotion."
          align="center"
        />

        <div className="prose prose-lg text-muted-foreground mb-12">
          <p>
            This is a research-first initiative. We are dedicated to exploring the untapped potential
            of the human motor system through rigorous scientific inquiry and open collaboration.
          </p>
        </div>

        <div className="bg-card w-full rounded-2xl p-8 md:p-12 shadow-sm border border-border text-left">
          <h3 className="text-2xl font-display font-bold mb-6 text-center md:text-left">Our Mission</h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="font-bold text-primary text-xl">01.</span>
              <p className="text-foreground/80 text-lg">Fund exploratory studies in biomechanics and neuroscience.</p>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-primary text-xl">02.</span>
              <p className="text-foreground/80 text-lg">Promote balanced motor development in education and athletics.</p>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-primary text-xl">03.</span>
              <p className="text-foreground/80 text-lg">Make neuromotor literacy accessible to the general public.</p>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-primary text-xl">04.</span>
              <p className="text-foreground/80 text-lg">Support ethical, open research practices.</p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
