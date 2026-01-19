import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navigation } from "@/components/Navigation";
import Home from "@/pages/Home";
import Neuromotion from "@/pages/Neuromotion";
import SixLaws from "@/pages/SixLaws";
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
    <div className="min-h-screen bg-background pt-20">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/athletics" component={Athletics} />
        <Route path="/apparel" component={Apparel} />
        <Route path="/neuromotion" component={Neuromotion} />
        <Route path="/six-laws" component={SixLaws} />
        <Route path="/nst" component={Nst} />
        <Route path="/research" component={Research} />
        <Route path="/foundation" component={Foundation} />
        <Route path="/donate" component={Donate} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Navigation />
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
