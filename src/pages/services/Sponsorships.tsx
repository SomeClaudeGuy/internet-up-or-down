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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-orange-500/5 to-red-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 text-sm font-medium">
              <Megaphone className="w-4 h-4 mr-2" />
              Premium Sponsorships & Activations
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Sponsorships That Drive Results
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Strategic partnerships and brand activations that connect with your target audience. 
              From major tournaments to celebrity partnerships, we create impactful sponsorship experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 shadow-2xl shadow-orange-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  🏆 Explore Partnership Opportunities
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                📊 View Success Stories
              </Button>
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