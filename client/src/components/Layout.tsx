import { Footer } from "./Footer";

/** Pages render full-bleed sections; Navigation is mounted once in App. */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1 overflow-x-clip">{children}</main>
      <Footer />
    </div>
  );
}
