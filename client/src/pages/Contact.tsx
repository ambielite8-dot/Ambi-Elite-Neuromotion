import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import type { InsertContactMessage } from "@shared/schema";
import { Loader2, Mail, Send, MessageSquare, Briefcase } from "lucide-react";
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  const submitMutation = useSubmitContact();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    submitMutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <Layout>
      <SectionHeader 
        title="Join the Elite" 
        subtitle="For research inquiries, professional collaboration, or global academic discussion."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-12">
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel p-10 rounded-sm border-primary/20 relative"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary glow-cyan" />
            <h3 className="text-2xl font-black font-display mb-4 uppercase italic tracking-tighter">Global Headquarters</h3>
            <p className="text-muted-foreground font-medium mb-8 leading-relaxed">
              Our research team operates globally. For urgent academic matters, please use our primary channel.
            </p>
            <a 
              href="mailto:contact@ambiresearch.org" 
              className="inline-flex items-center gap-4 text-primary hover:text-primary/80 font-black text-2xl uppercase tracking-tighter transition-all group"
            >
              <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span>contact@ambi.org</span>
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-sm border-white/5">
              <MessageSquare className="w-6 h-6 text-primary mb-4" />
              <h4 className="font-black uppercase text-xs mb-2 tracking-widest text-primary">Media</h4>
              <p className="text-[10px] text-muted-foreground font-bold uppercase leading-relaxed">Press & Interview Inquiries</p>
            </div>
            <div className="glass-panel p-6 rounded-sm border-white/5">
              <Briefcase className="w-6 h-6 text-accent mb-4" />
              <h4 className="font-black uppercase text-xs mb-2 tracking-widest text-accent">Partners</h4>
              <p className="text-[10px] text-muted-foreground font-bold uppercase leading-relaxed">Strategic Collaboration</p>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-12 rounded-sm border-white/10"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Full Name / Title</FormLabel>
                    <FormControl>
                      <Input className="bg-white/5 border-white/10 rounded-sm py-6 font-bold" placeholder="DR. ALBERT HAWK" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Email Address</FormLabel>
                    <FormControl>
                      <Input className="bg-white/5 border-white/10 rounded-sm py-6 font-bold" placeholder="CONTACT@UNIVERSITY.EDU" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Strategic Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="OUTLINE YOUR PROPOSAL..." 
                        className="min-h-[150px] bg-white/5 border-white/10 rounded-sm font-bold" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full py-8 text-lg font-black uppercase tracking-[0.3em] glow-cyan hover:scale-[1.02] transition-all" 
                size="lg"
                disabled={submitMutation.isPending}
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                    TRANSMITTING...
                  </>
                ) : (
                  <>
                    <Send className="mr-3 h-6 w-6" />
                    INITIATE CONTACT
                  </>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </Layout>
  );
}
