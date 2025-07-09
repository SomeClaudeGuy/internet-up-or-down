
import { Globe } from "lucide-react";
import globalNetworkImage from "@/assets/global-network.jpg";
import GlobalStats from "@/components/global-presence/GlobalStats";
import GlobalCapabilities from "@/components/global-presence/GlobalCapabilities";
import GlobalRegions from "@/components/global-presence/GlobalRegions";
import GlobalAchievements from "@/components/global-presence/GlobalAchievements";
import GlobalCTA from "@/components/global-presence/GlobalCTA";
import ScrollingGlobe from "@/components/global-presence/ScrollingGlobe";

const GlobalPresence = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Enhanced Background Layer with Rotating Globe */}
      <div className="absolute inset-0">
        <ScrollingGlobe />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
          style={{ backgroundImage: `url(${globalNetworkImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5" />
      </div>
      
      {/* Floating Network Nodes - Better Positioned */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-3 h-3 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-[15%] w-4 h-4 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-[20%] w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-[25%] w-3 h-3 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-md border border-primary/20 px-6 py-3 rounded-full mb-8 shadow-lg">
            <Globe className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary tracking-wide">Worldwide Operations</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
            Global <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Presence</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Operating across <strong className="text-foreground font-semibold">4 continents</strong> with multicultural teams working 24/7. 
            We spot trends and opportunities <strong className="text-foreground font-semibold">before they hit the mainstream</strong>.
          </p>
        </div>

        {/* Content Sections with Better Spacing */}
        <div className="space-y-16 lg:space-y-20">
          <GlobalStats />
          <GlobalCapabilities />
          <GlobalRegions />
          <GlobalAchievements />
          <GlobalCTA />
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
