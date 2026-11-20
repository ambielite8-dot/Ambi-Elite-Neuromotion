import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, Send, Microscope, Users, Newspaper } from "lucide-react";
import { insertContactMessageSchema } from "@shared/schema";
import type { InsertContactMessage } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/Layout";
import { Container, Section, Reveal, PageHero } from "@/components/kit";

export default function Contact() {
  const submit = useSubmitContact();
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: InsertContactMessage) => submit.mutate(data, { onSuccess: () => form.reset() });
  const field = "h-12 rounded-xl border-white/10 bg-black/30 text-white placeholder:text-muted-foreground/60";

  return (
    <Layout>
      <PageHero
        brand="ambi"
        eyebrow="Contact"
        title={
          <>
            Join the <span className="grad-text">movement.</span>
          </>
        }
        lead="Enrolling in NST, joining the AAU team, collaborating on research, writing about Neuromotion, or giving: we'd love to hear from you."
      />
      <Section className="pt-0">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: Users, title: "Training & enrollment", desc: "NST plans, youth programs and the AAU team." },
              { icon: Microscope, title: "Research collaboration", desc: "Neuroscience, biomechanics, PT, motor development and sports science." },
              { icon: Newspaper, title: "Media & partners", desc: "Press, interviews and strategic partnerships." },
            ].map((it, i) => (
              <Reveal key={it.title} delay={i * 0.06} className="panel flex gap-4 rounded-2xl p-6">
                <it.icon className="h-6 w-6 shrink-0 text-precision" />
                <div>
                  <div className="font-display text-lg font-semibold text-white">{it.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{it.desc}</div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2} className="rounded-2xl border border-white/[0.08] p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Email</div>
              <a href="mailto:contact@ambiresearch.org" className="mt-2 inline-flex items-center gap-2 font-display text-xl font-semibold text-white hover:text-precision">
                <Mail className="h-5 w-5" /> contact@ambiresearch.org
              </a>
            </Reveal>
          </div>

          <Reveal className="panel rounded-3xl p-7 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field: f }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-white/80">Name</FormLabel>
                      <FormControl>
                        <Input className={field} placeholder="Your name" autoComplete="name" {...f} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field: f }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-white/80">Email</FormLabel>
                      <FormControl>
                        <Input className={field} placeholder="you@example.com" type="email" autoComplete="email" {...f} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field: f }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-white/80">Message</FormLabel>
                      <FormControl>
                        <Textarea className="min-h-[160px] rounded-xl border-white/10 bg-black/30 text-white placeholder:text-muted-foreground/60" placeholder="Tell us what you're interested in…" {...f} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  disabled={submit.isPending}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
                >
                  {submit.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {submit.isPending ? "Sending…" : "Send message"}
                </button>
              </form>
            </Form>
          </Reveal>
        </Container>
      </Section>
    </Layout>
  );
}
