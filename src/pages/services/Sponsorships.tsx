import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { Megaphone, Trophy, Users, Zap, Globe, Target, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sponsorships = () => {
  const t = useTranslation();

  const features = [
    {
      icon: Trophy,
      title: "Event Sponsorships",
      description: "Premium sponsorship opportunities at major gaming tournaments and industry events"
    },
    {
      icon: Users,
      title: "Brand Partnerships",
      description: "Strategic partnerships with influencers, streamers, and gaming personalities"
    },
    {
      icon: Target,
      title: "Audience Engagement",
      description: "Create meaningful connections with your target audience through authentic activations"
    },
    {
      icon: Megaphone,
      title: "Amplification Strategy",
      description: "Maximize ROI with multi-channel amplification across all touchpoints"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to premium sponsorship opportunities across all major gaming markets"
    },
    {
      icon: Zap,
      title: "Real-Time Activation",
      description: "Live event management and real-time optimization for maximum impact"
    }
  ];

  const results = [
    { metric: "15M+", label: "Event Impressions Generated" },
    { metric: "500%", label: "Average Brand Awareness Lift" },
    { metric: "50+", label: "Major Events Sponsored" },
    { metric: "98%", label: "Partner Satisfaction Rate" }
  ];


  const eventTypes = [
    { name: "Esports Tournaments", description: "Major gaming tournaments with millions of viewers" },
    { name: "Gaming Conventions", description: "Industry events like E3, Gamescom, and PAX" },
    { name: "Streaming Events", description: "Live streaming activations with top streamers" },
    { name: "Casino Conferences", description: "B2B iGaming industry conferences and summits" },
    { name: "Sports Partnerships", description: "Sports team and league sponsorship opportunities" },
    { name: "Music Festivals", description: "Gaming-focused music and entertainment events" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Stadium/Arena Style */}
      <section className="pt-20 pb-20 relative overflow-hidden bg-gradient-to-b from-orange-950 via-red-950 to-black text-white min-h-screen flex items-center">
        {/* Stadium Lights Effect */}
        <div className="absolute top-0 left-1/4 w-2 h-32 bg-gradient-to-b from-yellow-300 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-2 h-32 bg-gradient-to-b from-yellow-300 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-3 h-40 bg-gradient-to-b from-white to-transparent transform -translate-x-1/2"></div>
        
        {/* Crowd Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-gray-900/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Jumbotron Style Header */}
            <div className="text-center mb-20">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-black px-8 py-4 rounded-2xl mb-8 font-bold text-lg">
                <Megaphone className="w-6 h-6 mr-2 inline" />
                LIVE FROM THE ARENA
              </div>
              
              <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-wider">
                <span className="block text-yellow-300 drop-shadow-2xl">SPONSOR</span>
                <span className="block text-white drop-shadow-2xl">SHIPS</span>
              </h1>
              
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl p-8 backdrop-blur-sm border border-orange-500/30 mb-12">
                <p className="text-2xl text-gray-200 max-w-5xl mx-auto">
                  🏆 CHAMPIONSHIP-LEVEL PARTNERSHIPS • 🎮 ESPORTS DOMINATION • 🌟 CELEBRITY ACTIVATIONS
                </p>
              </div>
            </div>

            {/* Scoreboard Style Stats */}
            <div className="bg-black/80 rounded-3xl p-8 border-4 border-yellow-400 mb-16">
              <div className="text-center mb-6">
                <div className="text-yellow-400 text-xl font-bold mb-2">PARTNERSHIP STATS</div>
                <div className="flex justify-center items-center space-x-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="text-red-400 text-sm">LIVE</div>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center border-r border-yellow-400/30 last:border-r-0">
                  <div className="text-4xl font-black text-yellow-400 mb-2">15M+</div>
                  <div className="text-gray-400 text-sm font-bold">EVENT VIEWS</div>
                </div>
                <div className="text-center border-r border-yellow-400/30 last:border-r-0">
                  <div className="text-4xl font-black text-orange-400 mb-2">500%</div>
                  <div className="text-gray-400 text-sm font-bold">BRAND LIFT</div>
                </div>
                <div className="text-center border-r border-yellow-400/30 last:border-r-0">
                  <div className="text-4xl font-black text-red-400 mb-2">50+</div>
                  <div className="text-gray-400 text-sm font-bold">MAJOR EVENTS</div>
                </div>
                <div className="text-center border-r border-yellow-400/30 last:border-r-0">
                  <div className="text-4xl font-black text-yellow-400 mb-2">98%</div>
                  <div className="text-gray-400 text-sm font-bold">SUCCESS RATE</div>
                </div>
              </div>
            </div>

            {/* Arena-style CTAs */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Button size="lg" className="text-xl px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 shadow-2xl shadow-orange-500/25 font-bold" asChild>
                  <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                    🏆 JOIN THE CHAMPIONSHIP
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </a>
                </Button>
                
                <div className="text-yellow-400 text-lg font-bold">
                  VS
                </div>
                
                <Button variant="outline" size="lg" className="text-xl px-12 py-6 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold">
                  📊 VIEW HIGHLIGHT REEL
                </Button>
              </div>
              
              <div className="text-gray-400 text-lg">
                🎮 Premium partnerships • 🏟️ Major venues • 🌟 Celebrity endorsements
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sponsorship Opportunities</h2>
            <p className="text-xl text-muted-foreground">Premium partnerships across all major gaming and entertainment events</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {eventTypes.map((event, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-orange-500/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg group-hover:text-orange-500 transition-colors">
                    {event.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Impact</h2>
            <p className="text-xl text-muted-foreground">Measurable results from strategic sponsorship activations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{result.metric}</div>
                <div className="text-sm text-muted-foreground">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Sponsorship Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end sponsorship management from strategy to execution and optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-orange-500/50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 p-0.5">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-orange-500 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Quote Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Bespoke Sponsorship Strategy</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every brand needs unique partnerships. Let us create a custom sponsorship strategy 
                that aligns with your brand values and reaches your target audience effectively.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-sm">Custom Partnerships</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-sm">Event Activations</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-sm">ROI Tracking</span>
                </div>
              </div>
              
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 shadow-2xl shadow-orange-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  💬 Request Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/20 to-red-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Impactful Partnerships?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with millions of gaming enthusiasts through strategic sponsorships and brand activations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 shadow-2xl shadow-orange-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  🏆 Launch Your Sponsorship Campaign
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <div className="text-sm text-muted-foreground flex items-center justify-center">
                🎯 Free partnership consultation • Custom proposals • Launch in 2 weeks
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsorships;