import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Zap, Shield, Target } from "lucide-react";
import apparelHero from "@assets/IMG_2592_1768795873483.jpeg";
import precisionShoe from "@assets/IMG_2591_1768795873483.jpeg";
import powerShoe from "@assets/7837293C-270E-4C99-87C7-81BA21436DE8_1768797001756.png";
import whiteApparel from "@assets/IMG_2587_1768795873483.jpeg";

export default function Apparel() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pb-10">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden border-b border-white/5 pt-4">
          <div className="container px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 py-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-primary text-primary-foreground mb-4 font-black uppercase tracking-[0.2em]">Science x Style</Badge>
              <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase mb-6 leading-[0.9]">
                Ambi <span className="text-primary">Apparel</span>
              </h1>
              <p className="text-xl text-muted-foreground uppercase tracking-widest font-medium mb-8">
                The Science of Doing it Right
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="font-black uppercase tracking-tighter glow-cyan">Shop Collection</Button>
                <Button size="lg" variant="outline" className="font-black uppercase tracking-tighter border-white/10">Learn the Tech</Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square flex items-center justify-center"
            >
              <img 
                src={apparelHero} 
                alt="Ambi Elite Collection" 
                className="w-full h-full object-contain mix-blend-lighten max-h-[50vh]" 
              />
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        </section>

        {/* Eye Movement Training Section */}
        <section className="py-24 border-b border-white/5">
          <div className="container px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img src={whiteApparel} alt="Eye Movement Training Apparel" className="w-full rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="order-1 lg:order-2">
                <Eye className="w-16 h-16 text-primary mb-6" />
                <h2 className="font-display font-black text-4xl md:text-5xl tracking-tighter uppercase mb-6">
                  Visual <span className="text-primary">Precision</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our apparel is designed with specific logo placements to aid in eye movement training. By strategically positioning visual anchors, we help athletes improve peripheral awareness and reaction speeds, aligning with the principles of Neuromotion.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-black uppercase tracking-widest text-xs text-primary mb-2">Benefit</h4>
                    <p className="text-sm font-bold uppercase">Enhanced Awareness</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-black uppercase tracking-widest text-xs text-primary mb-2">Feature</h4>
                    <p className="text-sm font-bold uppercase">Visual Anchors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footwear Section */}
        <section className="py-24 bg-white/[0.01]">
          <div className="container px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-display font-black text-5xl md:text-6xl tracking-tighter uppercase mb-6">
                Proprietary <span className="text-primary">Footwear</span>
              </h2>
              <p className="text-xl text-muted-foreground uppercase tracking-widest font-medium">
                Proprietary Foam. Engineered for Science.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Precision 1 */}
              <Card className="bg-black border-white/10 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden bg-white/5 flex items-center justify-center p-8">
                    <img 
                      src={precisionShoe} 
                      alt="Ambi Precision 1" 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-primary/90 text-primary-foreground font-black uppercase tracking-widest px-4 py-1">Precision 1</Badge>
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                      <Target className="w-6 h-6" />
                      <span className="font-bold uppercase tracking-widest text-sm">The Finesse Model</span>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Internal Grip System</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Engineered for the inner grip playing style. The Precision 1 focuses on micro-adjustments and surgical movements, perfect for athletes who rely on finesse and technical sequencing.
                    </p>
                    <Button variant="outline" className="w-full font-black uppercase tracking-tighter border-primary/30 hover:bg-primary/10">View Technical Specs</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Power 1 */}
              <Card className="bg-black border-white/10 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden bg-white/5 flex items-center justify-center p-8">
                    <img 
                      src={powerShoe} 
                      alt="Ambi Power 1" 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-orange-500/90 text-white font-black uppercase tracking-widest px-4 py-1">Power 1</Badge>
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="flex items-center gap-3 mb-4 text-orange-500">
                      <Zap className="w-6 h-6" />
                      <span className="font-bold uppercase tracking-widest text-sm">The Strength Model</span>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">External Grip System</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Engineered for the outer grip playing style. The Power 1 maximizes energy transfer and explosive force, designed for athletes who play with raw power and dominance.
                    </p>
                    <Button variant="outline" className="w-full font-black uppercase tracking-tighter border-orange-500/30 hover:bg-orange-500/10">View Technical Specs</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-white/5 mb-6">
          <div className="container px-6">
            <div className="p-12 md:p-20 rounded-3xl bg-primary text-primary-foreground text-center relative overflow-hidden group">
              <div className="relative z-10">
                <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter uppercase mb-6 leading-none">Do it Right.</h2>
                <p className="text-xl opacity-90 font-medium uppercase tracking-widest mb-10">Join the Elite</p>
                <Button size="lg" variant="secondary" className="h-16 px-12 text-xl font-black uppercase tracking-tighter shadow-2xl">
                  Explore Full Catalog
                </Button>
              </div>
              <Shield className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-5 rotate-12 pointer-events-none" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
