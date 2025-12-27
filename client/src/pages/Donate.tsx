import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Heart, CreditCard, DollarSign } from "lucide-react";

export default function Donate() {
  return (
    <Layout>
      <SectionHeader 
        title="Support the Research" 
        subtitle="Neuromotion research and education are currently independent."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your donation directly supports the advancement of this science. Contributions are used for:
          </p>
          
          <ul className="space-y-4 text-foreground/80">
            {["Publication of findings", "Research tools and equipment", "Educational content creation", "Platform development"].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>

          <div className="p-6 bg-secondary/30 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-2">Core Values</p>
            <p className="text-xl font-display font-bold">Transparency and accountability are core values.</p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border shadow-lg shadow-black/5">
          <h3 className="text-2xl font-display font-bold mb-6">Make a Contribution</h3>
          
          <div className="space-y-4">
            <button 
              disabled
              className="w-full py-4 px-6 rounded-xl bg-[#635BFF] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-not-allowed opacity-70"
            >
              <CreditCard className="w-5 h-5" />
              Donate via Stripe (Coming Soon)
            </button>
            
            <button 
              disabled
              className="w-full py-4 px-6 rounded-xl bg-[#0070BA] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-not-allowed opacity-70"
            >
              <DollarSign className="w-5 h-5" />
              Donate via PayPal (Coming Soon)
            </button>
          </div>
          
          <p className="text-xs text-center text-muted-foreground mt-6">
            Secure payment processing provided by Stripe and PayPal.
          </p>
        </div>
      </div>
    </Layout>
  );
}
