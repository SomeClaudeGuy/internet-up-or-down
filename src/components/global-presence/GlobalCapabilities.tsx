import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Plane, Award, Network } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const GlobalCapabilities = () => {
  const translations = useTranslation();
  
  const capabilities = [
    { icon: Target, title: translations.globalCapabilityMarketTitle, desc: translations.globalCapabilityMarketDesc, color: "text-blue-500" },
    { icon: Plane, title: translations.globalCapabilityDeploymentTitle, desc: translations.globalCapabilityDeploymentDesc, color: "text-green-500" },
    { icon: Award, title: translations.globalCapabilityExpertiseTitle, desc: translations.globalCapabilityExpertiseDesc, color: "text-purple-500" },
    { icon: Network, title: translations.globalCapabilityNetworkTitle, desc: translations.globalCapabilityNetworkDesc, color: "text-orange-500" },
  ];

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-center mb-12">{translations.globalCapabilitiesTitle}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((capability, index) => (
          <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="text-center pb-3 relative z-10">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <capability.icon className={`w-7 h-7 ${capability.color}`} />
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {capability.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0 relative z-10">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {capability.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GlobalCapabilities;