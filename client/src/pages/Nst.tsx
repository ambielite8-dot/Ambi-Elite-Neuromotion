import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, User, Users, Video, Target, Info, ShieldCheck, Heart, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Nst() {
  const tiers = [
    {
      name: "Core Tier",
      price: "100",
      description: "Most People",
      features: [
        "208-week curriculum (4 years)",
        "Global Community Access",
        "Weekly Curriculum Updates",
        "Full Content Library Access",
        "1 Class per week"
      ],
      color: "border-primary/20",
      buttonVariant: "default" as const
    },
    {
      name: "Guided Tier",
      price: "200",
      description: "Personalized Support",
      features: [
        "Everything in Core",
        "Bi-weekly Coaching calls",
        "Bi-weekly Group calls",
        "Direct Q&A Sessions",
        "Personal Feedback Loops",
        "Priority Content Access"
      ],
      color: "border-primary glow-cyan",
      buttonVariant: "default" as const,
      popular: true
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <SectionHeader 
          title="NST Curriculum" 
          subtitle="A comprehensive 4-year journey into bilateral motor mastery. Complete the human movement profile."
        />

        <div className="max-w-6xl mx-auto px-6 pb-24">
          {/* Philosophy Section */}
          <div className="mb-24 glass-panel p-12 rounded-sm border-white/5 text-center max-w-4xl mx-auto">
            <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-black uppercase italic mb-6">Your Greatest Possession</h2>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed italic">
              "You only have one body and it's the greatest possession any of us have! Neuromotion targets the motor cortex to develop dormant neural pathways and interhemispheric cooperation."
            </p>
          </div>

          {/* Registration Requirements */}
          <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase italic tracking-tighter">Customized <span className="text-primary">Curriculum</span></h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                We provide a personalized path for every student. While the curriculum follows universal laws, it favors activities that pertain to your specific interests and goals.
              </p>
              <div className="space-y-4">
                {[
                  "Weekly progression videos required",
                  "Target sport or activity identification",
                  "Strength & weakness assessment",
                  "Personal biometric data (Age, Height, Weight)",
                  "Commitment to the 208-week curriculum"
                ].map((req, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-bold uppercase tracking-widest text-xs">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="glass-panel border-white/5 bg-white/[0.02]">
                <CardHeader>
                  <Users className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-xl font-black uppercase">Youth (6-18)</CardTitle>
                  <CardDescription>Athletic Performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-medium">Builds the ultimate athletic foundation, coordination, and mental confidence for competitive sports.</p>
                </CardContent>
              </Card>
              <Card className="glass-panel border-white/5 bg-white/[0.02]">
                <CardHeader>
                  <Activity className="w-8 h-8 text-accent mb-2" />
                  <CardTitle className="text-xl font-black uppercase">Adults (18+)</CardTitle>
                  <CardDescription>Health & Longevity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-medium">Focused on injury prevention, rehabilitation, and restoring structural balance for lifelong health.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
            {tiers.map((tier) => (
              <Card key={tier.name} className={`glass-panel border-2 ${tier.color} flex flex-col relative`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground font-black uppercase tracking-widest px-4 py-1">Recommended</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8 border-b border-white/5">
                  <CardTitle className="text-3xl font-black uppercase italic">{tier.name}</CardTitle>
                  <CardDescription className="font-bold tracking-widest uppercase text-[10px] mt-2">{tier.description}</CardDescription>
                  <div className="mt-6 flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black italic tracking-tighter">${tier.price}</span>
                    <span className="text-muted-foreground font-bold uppercase text-xs">/ month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pt-8">
                  <Button className="w-full h-14 font-black uppercase tracking-widest text-xs rounded-sm glow-cyan" variant={tier.buttonVariant}>
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center p-12 border border-white/5 rounded-sm bg-white/[0.01]">
            <Info className="w-8 h-8 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs leading-relaxed max-w-2xl mx-auto">
              All students will be challenged with tasks beyond their target sport to ensure complete bilateral motor development. The curriculum remains focused on your primary target while building the universal foundation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
