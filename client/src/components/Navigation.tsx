import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, X, Brain, Scale, Activity, 
  BookOpen, Heart, Mail, Landmark, Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logoImg from "@assets/IMG_2737_1768704291952.jpeg";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Brain },
  { href: "/neuromotion", label: "Neuromotion", icon: Activity },
  { href: "/six-laws", label: "The Six Laws", icon: Scale },
  { href: "/nst", label: "NST", icon: Zap },
  { href: "/research", label: "Research", icon: BookOpen },
  { href: "/foundation", label: "Foundation", icon: Landmark },
  { href: "/donate", label: "Donate", icon: Heart },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-md border-b border-white/5 h-24">
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 h-full">
          <div className="h-20 w-auto overflow-hidden flex items-center">
            <img 
              src={logoImg} 
              alt="Ambi Elite Logo" 
              className="h-32 w-auto invert brightness-200 mix-blend-screen object-contain" 
              style={{ filter: 'invert(1) brightness(2) contrast(1.2)' }}
            />
          </div>
          <span className="font-display font-black text-2xl tracking-tighter uppercase text-foreground whitespace-nowrap">Ambi <span className="text-primary">Elite</span></span>
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-white/5 transition-colors"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed inset-0 z-40 bg-background lg:hidden pt-32 px-6"
          >
            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-4 p-4 rounded-lg text-lg font-bold uppercase tracking-tighter transition-all",
                      isActive 
                        ? "bg-primary text-primary-foreground glow-cyan" 
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-6 h-6" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-80 flex-col border-r border-white/5 bg-background/50 backdrop-blur-xl">
        <div className="p-8 flex flex-col items-center">
          <Link href="/" className="group flex flex-col items-center gap-4 mb-8 w-full">
            <div className="w-full flex justify-center overflow-hidden h-32 items-center">
              <img 
                src={logoImg} 
                alt="Ambi Elite Logo" 
                className="w-56 h-auto invert brightness-200 mix-blend-screen transition-transform group-hover:scale-105 object-contain" 
                style={{ filter: 'invert(1) brightness(2) contrast(1.2)' }}
              />
            </div>
            <h1 className="font-display font-black text-3xl tracking-tighter uppercase leading-none text-foreground text-center">
              Ambi<br/><span className="text-primary">Elite</span>
            </h1>
          </Link>
          <div className="w-full h-px bg-white/5 mb-8" />
        </div>

        <nav className="flex-1 px-6 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = location === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "flex items-center space-x-4 px-4 py-3 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-200 group",
                  isActive 
                    ? "bg-primary/10 text-primary border-l-2 border-primary rounded-l-none" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 transition-transform group-hover:scale-110",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-10 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
          <div className="flex gap-4 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Neuromotion Verified</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Ambi Elite</p>
        </div>
      </aside>
    </>
  );
}
