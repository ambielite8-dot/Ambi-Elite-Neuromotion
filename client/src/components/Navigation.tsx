import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, X, Brain, Scale, Activity, 
  BookOpen, Heart, Mail, Landmark, Zap,
  Trophy, ShoppingBag, ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logoImg from "@assets/IMG_2736_1768707397208.jpeg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Brain },
  { href: "/athletics", label: "Athletics", icon: Trophy },
  { href: "/apparel", label: "Apparel", icon: ShoppingBag },
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

  const activeItem = NAV_ITEMS.find(item => item.href === location) || NAV_ITEMS[0];

  return (
    <>
      {/* Universal Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 h-20 px-6">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 h-full">
            <div className="h-full w-auto flex items-center overflow-hidden">
              <img 
                src={logoImg} 
                alt="Ambi Elite Logo" 
                className="h-[120%] w-auto mix-blend-screen object-contain" 
                style={{ filter: 'brightness(1.5) contrast(1.1)' }}
              />
            </div>
            <span className="font-display font-black text-xl md:text-2xl tracking-tighter uppercase text-foreground whitespace-nowrap">
              Ambi <span className="text-primary">Elite</span>
            </span>
          </Link>

          {/* Navigation Dropdown */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <activeItem.icon className="w-5 h-5 text-primary" />
                  <span className="font-bold uppercase tracking-widest text-[10px] hidden sm:block">{activeItem.label}</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-background/95 backdrop-blur-xl border-white/10 p-2 mt-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = location === item.href;
                  return (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link 
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors",
                          isActive 
                            ? "bg-primary/10 text-primary" 
                            : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                        )}
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="font-bold uppercase tracking-widest text-[10px]">{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/donate" className="hidden md:flex">
              <Button size="sm" className="font-black uppercase tracking-tighter glow-cyan h-9 px-6 text-xs">
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
