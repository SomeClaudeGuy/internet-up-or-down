
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, MapPin, Clock, Users, Building, Zap, Target, Award, Plane, TrendingUp, Calendar, Network } from "lucide-react";
import globalNetworkImage from "@/assets/global-network.jpg";

const GlobalPresence = () => {
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

  const stats = [
    { icon: Globe, value: "4", label: "Continents", desc: "Global footprint", pulse: true },
    { icon: Building, value: "12", label: "Offices", desc: "Strategic locations", pulse: false },
    { icon: Clock, value: "24/7", label: "Operations", desc: "Round the clock", pulse: true },
    { icon: Users, value: "85+", label: "Team Members", desc: "Multicultural experts", pulse: false },
  ];

  const capabilities = [
    { icon: Target, title: "Market Intelligence", desc: "Real-time insights from global markets", color: "text-blue-500" },
    { icon: Plane, title: "Rapid Deployment", desc: "Launch campaigns worldwide in 48 hours", color: "text-green-500" },
    { icon: Award, title: "Local Expertise", desc: "Native teams in every major market", color: "text-purple-500" },
    { icon: Network, title: "Connected Network", desc: "Seamless 24/7 collaboration hub", color: "text-orange-500" },
  ];

  const achievements = [
    { title: "Industry Events", desc: "Active at Sigma, ICE, iGB, SBC events", icon: Calendar },
    { title: "Market Leadership", desc: "First to identify emerging trends", icon: TrendingUp },
    { title: "Regulatory Expertise", desc: "Navigate complex compliance landscapes", icon: Globe },
    { title: "Cultural Intelligence", desc: "Deep understanding of local preferences", icon: Users },
  ];

  return (
    <section id="about" className="relative py-20 bg-muted/30 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${globalNetworkImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="group text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <CardContent className="pt-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors ${stat.pulse ? 'animate-pulse' : ''}`}>
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold mb-1 group-hover:text-primary transition-colors">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Global Capabilities</h3>
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

        {/* Regions Grid */}
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

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Global Network?</h3>
              <div className="space-y-4">
                {achievements.slice(0, 2).map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground flex-shrink-0">
                      <achievement.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{achievement.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Competitive Advantages</h3>
              <div className="space-y-4">
                {achievements.slice(2, 4).map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground flex-shrink-0">
                      <achievement.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{achievement.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Go Global?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Leverage our worldwide network to expand your reach and tap into new markets with confidence.
            </p>
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent shadow-xl shadow-primary/25">
              <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 w-5 h-5" />
                Explore Global Opportunities
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
