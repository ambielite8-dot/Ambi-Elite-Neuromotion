import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import type { InsertContactMessage } from "@shared/schema";
import { Loader2, Mail, Send } from "lucide-react";
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
        title="Contact" 
        subtitle="For research inquiries, collaboration, or academic discussion."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
            <h3 className="text-xl font-bold font-display mb-2">Direct Inquiry</h3>
            <p className="text-muted-foreground mb-6">
              Prefer email? Reach out directly to our research team.
            </p>
            <a 
              href="mailto:contact@ambiresearch.org" 
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-lg"
            >
              <Mail className="w-5 h-5" />
              contact@ambiresearch.org
            </a>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            We value intellectual exchange and scientific collaboration. Please allow 2-3 business days for a response regarding research proposals.
          </p>
        </div>

        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Dr. Jane Doe" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="jane@university.edu" type="email" {...field} />
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we collaborate?" 
                        className="min-h-[150px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={submitMutation.isPending}
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
