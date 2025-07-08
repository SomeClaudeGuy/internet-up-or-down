import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GlobalRegions = () => {
  const regions = [
    {
      name: "LATAM",
      description: "The fastest-growing iGaming market with 45% year-over-year growth",
      emoji: "🌎",
      color: "from-green-500 to-emerald-500",
      highlights: ["Brazil", "Mexico", "Argentina"],
      keyStats: "45% YoY Growth",
      flag: "🇧🇷"
    },
    {
      name: "North America", 
      description: "Leading the regulated online gaming revolution across states",
      emoji: "🇺🇸",
      color: "from-blue-500 to-cyan-500", 
      highlights: ["USA", "Canada", "Remote"],
      keyStats: "$7.5B Market Size",
      flag: "🇺🇸"
    },
    {
      name: "APAC",
      description: "Emerging powerhouse with massive untapped potential",
      emoji: "🌏",
      color: "from-purple-500 to-pink-500",
      highlights: ["Australia", "Singapore", "Japan"],
      keyStats: "2.3B Population",
      flag: "🇦🇺"
    },
    {
      name: "Europe",
      description: "Mature regulated markets with established player bases",
      emoji: "🇪🇺", 
      color: "from-orange-500 to-red-500",
      highlights: ["UK", "Germany", "Malta"],
      keyStats: "€25B Revenue",
      flag: "🇬🇧"
    },
  ];

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-center mb-12">Where We Operate</h3>
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