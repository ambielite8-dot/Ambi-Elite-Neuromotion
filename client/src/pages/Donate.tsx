import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Heart, CreditCard, DollarSign, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Donate() {
  return (
    <Layout>
      <SectionHeader 
        title="Support Global Research" 
        subtitle="Ambi Elite research and education initiatives are currently independent and globally accessible."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12">
        <div className="space-y-12">
          <p className="text-2xl text-foreground font-bold leading-tight max-w-xl">
            Your contribution accelerates the <span className="text-primary italic">Neuromotion Revolution</span>.
          </p>
          
          <div className="grid grid-cols-1 gap-6">
            {[
              { title: "Scientific Publication", desc: "Funding the peer-reviewed release of bilateral movement discoveries." },
              { title: "Advanced Equipment", desc: "Investing in high-speed motion capture and EEG imaging tools." },
              { title: "Global Literacy", desc: "Creating free educational content for schools and elite sports academies." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary glow-cyan" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-sm mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-10 glass-panel rounded-sm border-primary/20 bg-primary/5">
            <ShieldCheck className="w-10 h-10 text-primary mb-6" />
            <p className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-4">Integrity Protocol</p>
            <p className="text-2xl font-display font-black uppercase tracking-tighter italic">Transparency and accountability are core values.</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-12 rounded-sm border-white/10 shadow-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
             <Globe size={150} />
          </div>
          
          <h3 className="text-3xl font-display font-black mb-8 uppercase tracking-tighter italic">Contribute</h3>
          
          <div className="space-y-6">
            <button 
              disabled
              className="w-full py-6 px-8 rounded-sm bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300 cursor-not-allowed opacity-50 glow-cyan"
            >
              <CreditCard className="w-6 h-6" />
              Stripe Secure
            </button>
            
            <button 
              disabled
              className="w-full py-6 px-8 rounded-sm border-2 border-white/10 text-foreground font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white/5 transition-all duration-300 cursor-not-allowed opacity-50"
            >
              <DollarSign className="w-6 h-6" />
              PayPal Official
            </button>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-8 opacity-40">
             <div className="h-px bg-white/20 flex-1" />
             <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Secure Gateway</span>
             <div className="h-px bg-white/20 flex-1" />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
