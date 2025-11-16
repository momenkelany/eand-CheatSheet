import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function Router() {
  const baseEnv: string = (import.meta.env.BASE_URL as string) || "/";
  // wouter expects the base without a trailing slash (e.g. '/eand-CheatSheet')
  const base = baseEnv === "/" ? "/" : baseEnv.replace(/\/$/, "");
  return (
    <WouterRouter base={base}>
      <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          <Router />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
