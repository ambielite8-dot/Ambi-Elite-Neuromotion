import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Landmark, Trophy, Users, Zap, DollarSign } from "lucide-react";
import { Link } from "wouter";
import gymImg from "@assets/IMG_0025_1768795739004.jpeg";

export default function Athletics() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pb-12">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-4">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${gymImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
          </div>

          <div className="container relative z-10 px-6 text-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display font-black text-6xl md:text-8xl tracking-tighter uppercase mb-6 leading-none">
                Ambi <span className="text-primary">Athletics</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium uppercase tracking-widest mb-10">
                Revolutionizing Sports Through Neuromotion
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/donate">
                  <Button size="lg" className="h-14 px-10 text-lg uppercase font-black tracking-tighter glow-cyan w-full sm:w-auto">
                    Support the Facility
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg uppercase font-black tracking-tighter border-primary/50 hover:bg-primary/10 w-full sm:w-auto">
                  Join the AAU Team
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fundraising Section */}
        <section className="py-24 border-y border-white/5 bg-white/[0.02]">
          <div className="container px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display font-black text-4xl md:text-5xl tracking-tighter uppercase mb-8">
                  The <span className="text-primary">Future</span> of Training
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    We are raising funds to build a state-of-the-art basketball training facility dedicated to youth development (ages 6-14). This isn't just a gym; it's a center for **Neuromotor Symmetry Training (NST)**.
                  </p>
                  <p>
                    By integrating bilateral motor organization into basketball fundamentals, we create athletes who move with unparalleled precision and power. Our goal is to revolutionize the game by building complete body control from the ground up.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-12">
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <Landmark className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Facility</h3>
                      <p className="text-2xl font-black text-foreground uppercase tracking-tighter">New Gym</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/5 border-white/10">
                    <CardContent className="p-6">
                      <Trophy className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Team</h3>
                      <p className="text-2xl font-black text-foreground uppercase tracking-tighter">AAU Elite</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                  <img src={gymImg} alt="Ambi Elite Training Facility" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships & NIL */}
        <section className="py-24">
          <div className="container px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display font-black text-4xl md:text-5xl tracking-tighter uppercase mb-6">
                NIL & <span className="text-primary">Scholarships</span>
              </h2>
              <p className="text-xl text-muted-foreground uppercase tracking-widest font-medium">
                Unlocking potential through access
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: DollarSign,
                  title: "NIL Deals",
                  desc: "We provide NIL opportunities for our athletes, recognizing their value and commitment to the Neuromotion standard."
                },
                {
                  icon: Users,
                  title: "AAU Team",
                  desc: "Ambi Elite AAU competes at the highest level, applying science-backed training to dominate the court."
                },
                {
                  icon: Zap,
                  title: "NST Scholarships",
                  desc: "We offer scholarships for NST training to ensure every dedicated athlete can master complete body control."
                }
              ].map((item, i) => (
                <Card key={i} className="bg-black border-white/5 hover:border-primary/50 transition-colors group">
                  <CardContent className="p-10">
                    <item.icon className="w-12 h-12 text-primary mb-6 transition-transform group-hover:scale-110" />
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-20 p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-orange-500/20 border border-primary/20 text-center">
              <h3 className="font-display font-black text-3xl uppercase mb-6">Support the Revolution</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Join us in building the global authority on athletic performance. Every donation goes directly towards the facility, scholarships, and revolutionary training for the next generation.
              </p>
              <Link href="/donate">
                <Button size="lg" className="h-14 px-12 text-xl font-black uppercase tracking-tighter glow-cyan">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
