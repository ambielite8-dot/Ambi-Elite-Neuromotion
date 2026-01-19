import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Heart, Landmark, ShieldCheck, Globe } from "lucide-react";
import { FaPaypal, FaStripe } from "react-icons/fa";

export default function Donate() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <SectionHeader 
          title="Support the Mission" 
          subtitle="Your contributions fuel the Neuromotion discovery, accelerate global research, and provide scholarships."
        />

        <div className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-panel border-primary/40 bg-primary/5 p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe size={80} />
              </div>
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/20 rounded-sm flex items-center justify-center mb-6">
                  <Globe className="text-primary w-6 h-6" />
                </div>
                <Badge className="bg-primary text-primary-foreground mb-4 font-black uppercase tracking-[0.2em] text-[8px]">Priority 1</Badge>
                <h3 className="text-2xl font-black uppercase mb-4 italic">Global Research</h3>
                <p className="text-muted-foreground font-medium mb-6 leading-relaxed text-sm">
                  Funding the peer-reviewed release of bilateral movement discoveries and high-speed motion capture tools.
                </p>
                <div className="w-full bg-white/5 rounded-full h-2 mb-2">
                  <div className="bg-primary h-full rounded-full w-[65%] glow-cyan" />
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  <span>Research Goal</span>
                  <span>65% Funded</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-panel border-white/10 p-8">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center mb-6">
                  <Landmark className="text-foreground w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4">Gym Facility</h3>
                <p className="text-muted-foreground font-medium mb-6 leading-relaxed text-sm">
                  Support the construction of our specialized basketball training facility and AAU team development.
                </p>
                <div className="w-full bg-white/5 rounded-full h-2 mb-2">
                  <div className="bg-foreground h-full rounded-full w-[45%]" />
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  <span>Phase 1</span>
                  <span>45% Funded</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-panel border-accent/20 p-8">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center mb-6">
                  <Heart className="text-accent w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4">NST Scholarships</h3>
                <p className="text-muted-foreground font-medium mb-6 leading-relaxed text-sm">
                  Provide access to Neuromotor Symmetry Training for underprivileged youth and aspiring professionals.
                </p>
                <Button variant="outline" className="w-full border-accent/20 text-accent font-black uppercase tracking-widest text-[10px]">Learn More</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black uppercase text-center mb-12 italic">Choose a <span className="text-primary">Payment Method</span></h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-4 p-8 rounded-sm bg-white text-black hover:bg-white/90 transition-all group"
              >
                <FaStripe className="w-12 h-12" />
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Pay with</p>
                  <p className="text-xl font-black uppercase tracking-tighter">Stripe</p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-4 p-8 rounded-sm bg-[#0070ba] text-white hover:bg-[#0070ba]/90 transition-all group"
              >
                <FaPaypal className="w-12 h-12" />
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Pay with</p>
                  <p className="text-xl font-black uppercase tracking-tighter">PayPal</p>
                </div>
              </motion.button>
            </div>

            <div className="p-8 border border-white/5 rounded-sm bg-white/[0.02] text-center">
              <ShieldCheck className="w-8 h-8 mx-auto mb-4 opacity-20" />
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest leading-relaxed">
                All transactions are secure and encrypted.<br/>
                Ambi Elite Foundation is a registered non-profit organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
