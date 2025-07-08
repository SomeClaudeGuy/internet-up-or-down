
import { Globe } from "lucide-react";
import globalNetworkImage from "@/assets/global-network.jpg";
import GlobalStats from "@/components/global-presence/GlobalStats";
import GlobalCapabilities from "@/components/global-presence/GlobalCapabilities";
import GlobalRegions from "@/components/global-presence/GlobalRegions";
import GlobalAchievements from "@/components/global-presence/GlobalAchievements";
import GlobalCTA from "@/components/global-presence/GlobalCTA";

const GlobalPresence = () => {
  return (
    <section id="about" className="relative py-20 bg-muted/30 overflow-hidden">
      {/* Background Image with enhanced styling */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${globalNetworkImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-primary/30" />
      
      {/* Floating network nodes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/40 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent/50 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary/60 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-60 right-1/3 w-5 h-5 bg-accent/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Worldwide Operations</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Global <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Presence</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Operating across <strong className="text-foreground">4 continents</strong> with multicultural teams working 24/7. 
            We spot trends and opportunities <strong className="text-foreground">before they hit the mainstream</strong>.
          </p>
        </div>

        <GlobalStats />
        <GlobalCapabilities />
        <GlobalRegions />
        <GlobalAchievements />
        <GlobalCTA />
      </div>
    </section>
  );
};

export default GlobalPresence;
