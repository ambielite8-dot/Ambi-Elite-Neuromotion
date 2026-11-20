import { Switch, Route, useLocation, Router as WouterRouter } from "wouter";
import { IS_PREVIEW, usePreviewLocation } from "@/lib/location";
import { AnimatePresence, motion } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { IntroSequence } from "@/components/motion/IntroSequence";
import { Cursor } from "@/components/motion/Cursor";
import { ScrollProgress, SpotlightTracker } from "@/components/motion/effects";
import Home from "@/pages/Home";
import Neuromotion from "@/pages/Neuromotion";
import SixLaws from "@/pages/SixLaws";
import WhyNow from "@/pages/WhyNow";
import Nst from "@/pages/Nst";
import Research from "@/pages/Research";
import Foundation from "@/pages/Foundation";
import Donate from "@/pages/Donate";
import Contact from "@/pages/Contact";
import Athletics from "@/pages/Athletics";
import Apparel from "@/pages/Apparel";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onAnimationComplete={() => {
          // leave no filter/transform on the page wrapper (keeps position: sticky working)
          const el = document.getElementById("page");
          if (el) {
            el.style.filter = "";
            el.style.transform = "";
          }
        }}
        id="page"
      >
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/neuromotion" component={Neuromotion} />
          <Route path="/six-laws" component={SixLaws} />
          <Route path="/why-now" component={WhyNow} />
          <Route path="/nst" component={Nst} />
          <Route path="/research" component={Research} />
          <Route path="/athletics" component={Athletics} />
          <Route path="/apparel" component={Apparel} />
          <Route path="/foundation" component={Foundation} />
          <Route path="/donate" component={Donate} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter hook={IS_PREVIEW ? usePreviewLocation : undefined}>
        <SmoothScroll>
          <div className="grain">
            <IntroSequence />
            <ScrollProgress />
            <SpotlightTracker />
            <Cursor />
            <Navigation />
            <Router />
            <Toaster />
          </div>
        </SmoothScroll>
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
