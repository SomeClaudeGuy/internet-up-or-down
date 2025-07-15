import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import BContentLayout from "./pages/b-content/Layout";
import BContentHome from "./pages/b-content/Home";
import BContentServices from "./pages/b-content/Services";
import BContentCaseStudies from "./pages/b-content/CaseStudies";
import WorkWithUsLayout from "./pages/work-with-us/Layout";
import WorkWithUsHome from "./pages/work-with-us/Home";
import WorkWithUsPositions from "./pages/work-with-us/Positions";
import WorkWithUsBenefits from "./pages/work-with-us/Benefits";
import Services from "./pages/Services";
import TrafficGeneration from "./pages/services/TrafficGeneration";
import Analytics from "./pages/services/Analytics";
import SocialMedia from "./pages/services/SocialMedia";
import Sponsorships from "./pages/services/Sponsorships";
import MediaBuying from "./pages/services/MediaBuying";
import ContentProduction from "./pages/services/ContentProduction";
import BusinessConsulting from "./pages/services/BusinessConsulting";
import CRMManaged from "./pages/services/CRMManaged";
import SuccessStories from "./pages/SuccessStories";
import TalentIntake from "./pages/TalentIntake";
import GalleryPage from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
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
          
          {/* Standalone pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/traffic-generation" element={<TrafficGeneration />} />
          <Route path="/services/analytics" element={<Analytics />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/sponsorships" element={<Sponsorships />} />
          <Route path="/services/media-buying" element={<MediaBuying />} />
          <Route path="/services/content-production" element={<ContentProduction />} />
          <Route path="/services/business-consulting" element={<BusinessConsulting />} />
          <Route path="/services/crm-managed" element={<CRMManaged />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/talent-intake" element={<TalentIntake />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
