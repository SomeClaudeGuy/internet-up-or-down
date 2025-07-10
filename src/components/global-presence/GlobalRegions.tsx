import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";

const GlobalRegions = () => {
  const translations = useTranslation();
  
  const regions = [
    {
      name: translations.globalRegionAmericasName,
      description: translations.globalRegionAmericasDesc,
      emoji: "🌎",
      color: "from-green-500 to-emerald-500",
      highlights: [translations.globalRegionAmericasHighlight1, translations.globalRegionAmericasHighlight2, translations.globalRegionAmericasHighlight3],
      keyStats: translations.globalRegionAmericasStats,
      flag: "🇺🇸"
    },
    {
      name: translations.globalRegionEuropeName,
      description: translations.globalRegionEuropeDesc,
      emoji: "🇪🇺",
      color: "from-blue-500 to-cyan-500", 
      highlights: [translations.globalRegionEuropeHighlight1, translations.globalRegionEuropeHighlight2, translations.globalRegionEuropeHighlight3],
      keyStats: translations.globalRegionEuropeStats,
      flag: "🇪🇺"
    },
    {
      name: translations.globalRegionAsiaPacificName,
      description: translations.globalRegionAsiaPacificDesc,
      emoji: "🌏",
      color: "from-purple-500 to-pink-500",
      highlights: [translations.globalRegionAsiaPacificHighlight1, translations.globalRegionAsiaPacificHighlight2, translations.globalRegionAsiaPacificHighlight3],
      keyStats: translations.globalRegionAsiaPacificStats,
      flag: "🇦🇺"
    },
    {
      name: translations.globalRegionMenaName,
      description: translations.globalRegionMenaDesc,
      emoji: "🌍", 
      color: "from-orange-500 to-red-500",
      highlights: [translations.globalRegionMenaHighlight1, translations.globalRegionMenaHighlight2, translations.globalRegionMenaHighlight3],
      keyStats: translations.globalRegionMenaStats,
      flag: "🇦🇪"
    },
  ];

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-center mb-12">{translations.globalRegionsTitle}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {regions.map((region, index) => (
          <Card 
            key={index}
            className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="text-center relative z-10">
              <div className={`w-18 h-18 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${region.color} p-0.5 group-hover:scale-110 transition-transform`}>
                <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center text-3xl">
                  {region.emoji}
                </div>
              </div>
              <CardTitle className="group-hover:text-primary transition-colors mb-2">
                {region.name}
              </CardTitle>
              <Badge variant="outline" className="text-xs">
                {region.keyStats}
              </Badge>
            </CardHeader>
            <CardContent className="text-center relative z-10">
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {region.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {region.highlights.map((highlight, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors">
                    {highlight}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GlobalRegions;