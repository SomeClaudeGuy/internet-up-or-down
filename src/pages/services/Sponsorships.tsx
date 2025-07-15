import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  Trophy, Star, Users, Zap, Globe, Target, ArrowRight, CheckCircle, 
  Crown, Sparkles, Award, Mic, Camera, Calendar, MapPin, Clock,
  Medal, Gift, Shield, Handshake, Megaphone, Ticket, VolumeX,
  Eye, TrendingUp
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sponsorships = () => {
  const t = useTranslation();

  const premiumPartnerships = [
    {
      tier: "Platinum",
      icon: Crown,
      color: "from-slate-300 via-slate-100 to-slate-300",
      bgColor: "bg-gradient-to-r from-slate-100/20 to-slate-200/20",
      borderColor: "border-slate-300/50",
      textColor: "text-slate-600",
      events: "50+ Premium Events",
      reach: "25M+ Global Reach",
      exclusivity: "Exclusive Rights",
      features: ["VIP Brand Placement", "Celebrity Endorsements", "Executive Networking", "Global Coverage"]
    },
    {
      tier: "Gold",
      icon: Medal,
      color: "from-yellow-400 via-yellow-300 to-yellow-500",
      bgColor: "bg-gradient-to-r from-yellow-100/20 to-yellow-200/20",
      borderColor: "border-yellow-400/50",
      textColor: "text-yellow-600",
      events: "30+ Major Events",
      reach: "15M+ Audience",
      exclusivity: "Priority Access",
      features: ["Prime Positioning", "Influencer Partnerships", "Media Coverage", "Custom Activations"]
    },
    {
      tier: "Silver",
      icon: Star,
      color: "from-gray-400 via-gray-300 to-gray-500",
      bgColor: "bg-gradient-to-r from-gray-100/20 to-gray-200/20",
      borderColor: "border-gray-400/50",
      textColor: "text-gray-600",
      events: "20+ Events",
      reach: "8M+ Viewers",
      exclusivity: "Category Focus",
      features: ["Strategic Placement", "Content Integration", "Social Amplification", "Performance Metrics"]
    }
  ];

  const eventShowcase = [
    {
      title: "Global Gaming Championship",
      date: "March 2024",
      location: "Las Vegas, NV",
      audience: "5.2M viewers",
      type: "Esports Tournament",
      status: "Sold Out",
      bgImage: "bg-gradient-to-r from-red-500 to-orange-500",
      icon: Trophy
    },
    {
      title: "iGaming Summit Europe",
      date: "June 2024",
      location: "London, UK",
      audience: "2.8M reach",
      type: "Industry Conference",
      status: "VIP Available",
      bgImage: "bg-gradient-to-r from-blue-500 to-purple-500",
      icon: Users
    },
    {
      title: "Streaming Festival",
      date: "August 2024",
      location: "Los Angeles, CA",
      audience: "12M viewers",
      type: "Live Streaming",
      status: "Premium Spots",
      bgImage: "bg-gradient-to-r from-purple-500 to-pink-500",
      icon: Camera
    },
    {
      title: "Casino Innovation Awards",
      date: "November 2024",
      location: "Monaco",
      audience: "3.5M reach",
      type: "Awards Ceremony",
      status: "Exclusive",
      bgImage: "bg-gradient-to-r from-yellow-500 to-orange-500",
      icon: Award
    }
  ];

  const activationTypes = [
    {
      title: "Brand Experience Zones",
      description: "Immersive brand activations that create lasting impressions",
      icon: Sparkles,
      examples: ["Interactive Gaming Lounges", "VIP Hospitality Suites", "Product Demonstration Areas", "Celebrity Meet & Greets"]
    },
    {
      title: "Content Collaborations",
      description: "Strategic content partnerships with top creators and influencers",
      icon: Mic,
      examples: ["Branded Content Series", "Podcast Sponsorships", "Live Stream Integrations", "Social Media Campaigns"]
    },
    {
      title: "Event Naming Rights",
      description: "Premium naming opportunities for major tournaments and events",
      icon: Megaphone,
      examples: ["Tournament Title Sponsorship", "Arena Naming Rights", "Award Category Sponsors", "Series Partnerships"]
    },
    {
      title: "Technology Integration",
      description: "Cutting-edge tech activations and digital experiences",
      icon: Zap,
      examples: ["AR/VR Experiences", "Mobile App Integration", "Live Streaming Tech", "Data Analytics Platforms"]
    }
  ];

  const partnershipBenefits = [
    { metric: "500M+", label: "Total Impressions", icon: Eye },
    { metric: "2,400%", label: "Average Brand Lift", icon: TrendingUp },
    { metric: "150+", label: "Global Events", icon: Globe },
    { metric: "95%", label: "Partner Retention", icon: Handshake }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Premium Event Showcase */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-background"></div>
        
        {/* Spotlight Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Stage Lights */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-yellow-400/30 via-yellow-400/10 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-px h-40 bg-gradient-to-b from-white/80 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-40 bg-gradient-to-b from-white/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-purple-500/30">
                <Crown className="w-6 h-6 text-purple-400 mr-3" />
                <span className="text-lg font-bold text-purple-400">Premium Sponsorship Portfolio</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  Partnerships
                </span>
                <span className="block text-foreground">That Elevate</span>
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Your Brand
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Connect with millions of engaged audiences through strategic sponsorships and premium brand activations 
                at the world's most prestigious gaming and entertainment events.
              </p>
            </div>

            {/* Partnership Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {premiumPartnerships.map((tier, index) => (
                <Card key={index} className={`group relative overflow-hidden transition-all duration-700 hover:scale-105 border-2 ${tier.borderColor} hover:shadow-2xl`}>
                  <div className={`absolute inset-0 ${tier.bgColor} opacity-50`}></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full"></div>
                  
                  <CardHeader className="relative z-10 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center shadow-lg`}>
                        <tier.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className={`text-2xl font-bold ${tier.textColor} mb-2`}>
                      {tier.tier}
                    </CardTitle>
                    <Badge variant="secondary" className="mb-4">{tier.exclusivity}</Badge>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <div className="grid grid-cols-1 gap-4 mb-6">
                      <div className="text-center p-3 bg-card/50 rounded-lg border">
                        <div className="text-lg font-bold text-primary">{tier.events}</div>
                        <div className="text-xs text-muted-foreground">Events</div>
                      </div>
                      <div className="text-center p-3 bg-card/50 rounded-lg border">
                        <div className="text-lg font-bold text-green-500">{tier.reach}</div>
                        <div className="text-xs text-muted-foreground">Reach</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="w-full" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Showcase - Timeline Style */}
      <section className="py-20 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Upcoming</span>
              <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Event Calendar
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Exclusive sponsorship opportunities at the most prestigious gaming and entertainment events worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {eventShowcase.map((event, index) => (
              <Card key={index} className="group relative overflow-hidden hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-purple-500/30">
                <div className={`absolute inset-0 ${event.bgImage} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <event.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="text-xs">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                    <Badge 
                      variant={event.status === "Sold Out" ? "destructive" : event.status === "Exclusive" ? "default" : "secondary"}
                      className="font-bold"
                    >
                      {event.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2 text-green-500" />
                      <span className="font-semibold text-green-500">{event.audience}</span>
                    </div>
                    <Button size="sm" variant="outline" className="group-hover:border-primary/50">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activation Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Brand Activation
              </span>
              <span className="block text-foreground">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From immersive experiences to strategic partnerships, we create activations that resonate with your audience and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {activationTypes.map((activation, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-500/20">
                <CardHeader>
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <activation.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                        {activation.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {activation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {activation.examples.map((example, i) => (
                      <div key={i} className="flex items-center text-sm bg-card/50 p-3 rounded-lg border">
                        <Sparkles className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Partnership</span>
              <span className="block bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Impact Metrics
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Measurable results from strategic sponsorships that deliver real business value and brand growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-green-500/20 hover:shadow-xl">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black mb-2 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  {benefit.metric}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{benefit.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Experience Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-yellow-500/30">
                <Crown className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-sm font-bold text-yellow-500">VIP Partnership Experience</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">Exclusive Access to</span>
                <span className="block bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Premium Opportunities
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                Join our exclusive partnership program and gain access to premium sponsorship opportunities, 
                VIP networking events, and priority placement at major gaming and entertainment events.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center p-8 border-2 border-yellow-500/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Ticket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Priority Access</h3>
                <p className="text-sm text-muted-foreground">First access to premium sponsorship opportunities</p>
              </Card>
              
              <Card className="text-center p-8 border-2 border-purple-500/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Exclusive Protection</h3>
                <p className="text-sm text-muted-foreground">Category exclusivity and brand protection</p>
              </Card>
              
              <Card className="text-center p-8 border-2 border-blue-500/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Premium Benefits</h3>
                <p className="text-sm text-muted-foreground">Exclusive perks and partnership rewards</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create
              <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                Legendary Partnerships?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the world's most prestigious brands in creating unforgettable experiences that captivate audiences and drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 shadow-2xl hover:scale-105 transition-all duration-300" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  <Crown className="mr-2 w-5 h-5" />
                  Launch Premium Partnership
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-purple-500/20 hover:border-purple-500/50">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule VIP Consultation
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Exclusive partnership opportunities
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Premium event access
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              VIP activation support
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsorships;