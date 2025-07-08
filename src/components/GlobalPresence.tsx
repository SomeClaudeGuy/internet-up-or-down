
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Clock, Users, Building, Zap, Target, Award } from "lucide-react";

const GlobalPresence = () => {
  const regions = [
    {
      name: "LATAM",
      description: "Strong presence in Latin America with deep market knowledge",
      emoji: "🌎",
      color: "from-green-500 to-emerald-500",
      highlights: ["Brazil", "Mexico", "Argentina"]
    },
    {
      name: "North America", 
      description: "Expanding reach across US and Canadian markets",
      emoji: "🇺🇸",
      color: "from-blue-500 to-cyan-500",
      highlights: ["USA", "Canada", "Remote"]
    },
    {
      name: "APAC",
      description: "Growing influence in Asia-Pacific and Australia",
      emoji: "🌏",
      color: "from-purple-500 to-pink-500",
      highlights: ["Australia", "Singapore", "Japan"]
    },
    {
      name: "Europe",
      description: "Established operations across European markets",
      emoji: "🇪🇺", 
      color: "from-orange-500 to-red-500",
      highlights: ["UK", "Germany", "Malta"]
    },
  ];

  const stats = [
    { icon: Globe, value: "4", label: "Continents", desc: "Global presence" },
    { icon: Building, value: "3", label: "Offices", desc: "Strategic locations" },
    { icon: Clock, value: "24/7", label: "Operations", desc: "Round the clock" },
    { icon: Users, value: "45+", label: "Team Members", desc: "Multicultural team" },
  ];

  const capabilities = [
    { icon: Target, title: "Market Intelligence", desc: "Real-time insights from global markets" },
    { icon: Zap, title: "Rapid Deployment", desc: "Quick campaign launches worldwide" },
    { icon: Award, title: "Local Expertise", desc: "Native understanding of each region" },
    { icon: Globe, title: "Connected Network", desc: "Seamless collaboration across time zones" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Global <span className="text-primary">Presence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Active across 4 continents with multicultural teams operating 24/7. 
            We identify trends and opportunities before anyone else.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:scale-105 transition-transform">
              <CardContent className="pt-6">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {capability.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground text-sm">
                  {capability.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regions.map((region, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${region.color} p-0.5`}>
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center text-2xl">
                    {region.emoji}
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {region.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-3">
                  {region.description}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {region.highlights.map((highlight, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Points */}
        <div className="bg-card/30 rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Our Global Network?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Local Market Expertise</h4>
                  <p className="text-muted-foreground text-sm">Deep understanding of regional regulations, player preferences, and cultural nuances.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold mb-1">24/7 Operations</h4>
                  <p className="text-muted-foreground text-sm">Round-the-clock support and campaign management across all time zones.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Industry Events</h4>
                  <p className="text-muted-foreground text-sm">Active participation in Sigma, ICE, iGB, SBC, and other major industry events.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Trend Identification</h4>
                  <p className="text-muted-foreground text-sm">Early identification of market trends and opportunities for innovative strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
