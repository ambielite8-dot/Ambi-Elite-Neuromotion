import { Navigation } from "./Navigation";
import { motion } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row">
      <Navigation />
      <main className="flex-1 lg:ml-80 w-full pt-24 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="container max-w-5xl mx-auto px-6 py-12 lg:py-20"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
