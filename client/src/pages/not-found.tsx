import { Layout } from "@/components/Layout";
import { Container, ButtonLink } from "@/components/kit";
import { LogoMark } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <Layout>
      <Container className="flex min-h-[80vh] flex-col items-center justify-center pt-24 text-center">
        <LogoMark className="h-16 w-16 text-white/80" glow />
        <h1 className="mt-8 font-display text-5xl font-semibold text-white">Off balance.</h1>
        <p className="mt-4 max-w-md text-muted-foreground">This page doesn't exist. Let's get you back to center.</p>
        <div className="mt-8">
          <ButtonLink href="/">Back home</ButtonLink>
        </div>
      </Container>
    </Layout>
  );
}
