import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BContentLayout from "./pages/b-content/Layout";
import BContentHome from "./pages/b-content/Home";
import BContentServices from "./pages/b-content/Services";
import BContentCaseStudies from "./pages/b-content/CaseStudies";
import WorkWithUsLayout from "./pages/work-with-us/Layout";
import WorkWithUsHome from "./pages/work-with-us/Home";
import WorkWithUsPositions from "./pages/work-with-us/Positions";
import WorkWithUsBenefits from "./pages/work-with-us/Benefits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* B.Content nested routes */}
          <Route path="/b-content" element={<BContentLayout />}>
            <Route index element={<BContentHome />} />
            <Route path="services" element={<BContentServices />} />
            <Route path="case-studies" element={<BContentCaseStudies />} />
          </Route>
          
          {/* Work With Us nested routes */}
          <Route path="/work-with-us" element={<WorkWithUsLayout />}>
            <Route index element={<WorkWithUsHome />} />
            <Route path="positions" element={<WorkWithUsPositions />} />
            <Route path="benefits" element={<WorkWithUsBenefits />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
