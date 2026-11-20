import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navigation } from "@/components/Navigation";
import { ScrollToTop } from "@/components/ScrollToTop";
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
  return (
    <Switch>
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
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Navigation />
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
