import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, X, Brain, Scale, Activity, 
  BookOpen, Heart, Mail, Landmark
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Brain },
  { href: "/neuromotion", label: "Neuromotion", icon: Activity },
  { href: "/six-laws", label: "The Six Laws", icon: Scale },
  { href: "/nst", label: "NST", icon: Activity },
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
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-md border-b border-border">
        <span className="font-display font-bold text-xl tracking-tight text-primary">Ambi Elite</span>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-secondary transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed inset-0 z-40 bg-background lg:hidden pt-20 px-6"
          >
            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-4 p-3 rounded-lg text-lg font-medium transition-colors",
                      isActive 
                        ? "bg-primary text-primary-foreground" 
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 flex-col border-r border-border bg-card">
        <div className="p-8">
          <h1 className="font-display font-bold text-2xl tracking-tighter text-foreground">
            Ambi<span className="text-primary">Elite</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">Research Foundation</p>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 group",
                  isActive 
                    ? "bg-primary/10 text-primary border-r-2 border-primary rounded-r-none" 
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon className={cn(
                  "w-4 h-4 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-8 text-xs text-muted-foreground leading-relaxed">
          <p>&copy; {new Date().getFullYear()} Ambi Research</p>
          <p className="mt-2">Advancing the study of Bilateral Human Movement.</p>
        </div>
      </aside>
    </>
  );
}
