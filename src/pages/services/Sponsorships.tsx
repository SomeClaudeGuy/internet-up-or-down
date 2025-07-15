import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  Trophy, Star, Users, Zap, Globe, Target, ArrowRight, CheckCircle, 
  Crown, Sparkles, Award, Mic, Camera, Calendar, MapPin, Clock,
  Medal, Gift, Shield, Handshake, Megaphone, Ticket, VolumeX,
  Eye, TrendingUp, DollarSign, Percent, PlayCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sponsorships = () => {
  const t = useTranslation();

  const successStories = [
    {
      client: "MegaCasino Global",
      event: "World Gaming Championship 2024",
      results: {
        impressions: "85M+",
        brandLift: "340%",
        newSignups: "125K",
        roi: "650%"
      },
      testimonial: "The sponsorship activation exceeded our expectations. We saw immediate brand recognition and a significant increase in new player registrations."
    },
    {
      client: "Royal Gaming Co",
      event: "Esports Festival Europe",
      results: {
        impressions: "45M+",
        brandLift: "280%",
        newSignups: "89K",
        roi: "420%"
      },
      testimonial: "Our brand became synonymous with premium gaming after this partnership. The quality of leads was outstanding."
    },
    {
      client: "BetMax Pro",
      event: "Streaming Summit 2024",
      results: {
        impressions: "32M+",
        brandLift: "450%",
        newSignups: "67K",
        roi: "380%"
      },
      testimonial: "The influencer partnerships and content integration drove massive engagement across all our platforms."
    }
  ];

  const serviceOfferings = [
    {
      title: "Major Event Sponsorships",
      description: "Secure premium placement at the world's biggest gaming and entertainment events",
      icon: Trophy,
      features: [
        "Title sponsorship opportunities",
        "VIP hospitality packages",
        "Brand integration in broadcasts",
        "Celebrity endorsement access"
      ],
      results: "Average 400% brand lift",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Influencer Partnerships",
      description: "Connect with top gaming influencers and content creators for authentic brand promotion",
      icon: Star,
      features: [
        "A-list influencer access",
        "Custom content creation",
        "Multi-platform campaigns",
        "Performance tracking"
      ],
      results: "Up to 85% engagement rates",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tournament Naming Rights",
      description: "Own the conversation with exclusive naming rights to major gaming tournaments",
      icon: Crown,
      features: [
        "Exclusive naming rights",
        "Logo placement everywhere",
        "Press conference access",
        "Winner presentations"
      ],
      results: "500M+ guaranteed impressions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Content Integration",
      description: "Seamlessly integrate your brand into premium gaming content and broadcasts",
      icon: Camera,
      features: [
        "Native content placement",
        "Branded segments",
        "Product demonstrations",
        "Social media amplification"
      ],
      results: "3x higher recall rates",
      color: "from-green-500 to-teal-500"
    }
  ];

  const platformMetrics = [
    { platform: "Twitch", reach: "31M+ viewers", engagement: "78%", growth: "+156%" },
    { platform: "YouTube Gaming", reach: "42M+ views", engagement: "65%", growth: "+234%" },
    { platform: "Tournament Broadcasts", reach: "125M+ viewers", engagement: "89%", growth: "+89%" },
    { platform: "Social Media", reach: "67M+ impressions", engagement: "45%", growth: "+178%" }
  ];

  const clientLogos = [
    { name: "MegaCasino", logo: "🎰" },
    { name: "Royal Gaming", logo: "👑" },
    { name: "BetMax", logo: "🚀" },
    { name: "ElitePlay", logo: "💎" },
    { name: "GameVault", logo: "🏆" },
    { name: "LuckyStrike", logo: "⚡" }
  ];

  const servicePromises = [
    {
      title: "Performance Focused",
      description: "All campaigns optimized for maximum ROI and brand impact",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "Premium Placement",
      description: "Top-tier positioning at major gaming events",
      icon: Crown,
      color: "text-yellow-500"
    },
    {
      title: "Dedicated Support",
      description: "Full-service account management and campaign optimization",
      icon: Handshake,
      color: "text-purple-500"
    },
    {
      title: "Measurable Results",
      description: "Comprehensive reporting and performance analytics",
      icon: Eye,
      color: "text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-500/30">
              <Trophy className="w-5 h-5 text-orange-500 mr-2" />
              <span className="text-sm font-medium text-orange-500">Premium Sponsorship Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {(t as any).sponsorshipsPageTitle || "Strategic Sponsorships That Drive Results"}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              {(t as any).sponsorshipsPageDesc || "We've helped gaming brands achieve over $500M in revenue through strategic sponsorship placements at premium events. Our data-driven approach ensures maximum ROI and brand impact."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9/5 client satisfaction</span>
              </div>
              <div className="text-muted-foreground">•</div>
              <div className="text-muted-foreground">200+ successful campaigns</div>
              <div className="text-muted-foreground">•</div>
              <div className="text-muted-foreground">$500M+ in client revenue</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-red-500 shadow-xl hover:scale-105 transition-all duration-300" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  <Trophy className="mr-2 w-5 h-5" />
                  Explore Partnership Opportunities
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-orange-500/20 hover:border-orange-500/50">
                <PlayCircle className="mr-2 w-5 h-5" />
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Client Success</span>
              <span className="block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how our strategic sponsorship approach has delivered measurable results for leading gaming brands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-green-500/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{story.client}</h3>
                      <p className="text-sm text-muted-foreground">{story.event}</p>
                    </div>
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                      {story.results.roi} ROI
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-card/50 rounded-lg border">
                      <div className="text-lg font-bold text-green-500">{story.results.impressions}</div>
                      <div className="text-xs text-muted-foreground">Impressions</div>
                    </div>
                    <div className="text-center p-3 bg-card/50 rounded-lg border">
                      <div className="text-lg font-bold text-blue-500">{story.results.newSignups}</div>
                      <div className="text-xs text-muted-foreground">New Signups</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "{story.testimonial}"
                  </p>
                  
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Brand Lift:</span>
                      <span className="font-bold text-green-500">{story.results.brandLift}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Our Sponsorship</span>
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From major event sponsorships to influencer partnerships, we provide comprehensive solutions 
              that maximize your brand's presence in the gaming industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {serviceOfferings.map((service, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-orange-500/20">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase">
                        Expected Results
                      </h4>
                      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/20">
                        <div className="text-lg font-bold text-green-500 mb-1">
                          {service.results}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Based on previous campaigns
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Performance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Platform Performance
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our sponsorship campaigns consistently deliver strong performance across all major gaming platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {platformMetrics.map((platform, index) => (
              <Card key={index} className="text-center p-6 hover:scale-105 transition-all duration-300">
                <div className="text-lg font-bold mb-4">{platform.platform}</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xl font-bold text-blue-500">{platform.reach}</div>
                    <div className="text-xs text-muted-foreground">Total Reach</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-green-500">{platform.engagement}</div>
                    <div className="text-xs text-muted-foreground">Engagement Rate</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-purple-500">{platform.growth}</div>
                    <div className="text-xs text-muted-foreground">Growth Rate</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Promises */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Our</span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"> Commitment</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're committed to delivering exceptional results through strategic partnerships and premium event placements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {servicePromises.map((promise, index) => (
              <Card key={index} className="text-center p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <promise.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{promise.title}</h3>
                <p className="text-sm text-muted-foreground">{promise.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground">
              Join the gaming brands who've transformed their marketing with our sponsorship expertise
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Ready to Elevate</span>
              <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Your Brand?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's discuss how strategic sponsorships can transform your brand's presence in the gaming industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-red-500 shadow-xl hover:scale-105 transition-all duration-300" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  <Handshake className="mr-2 w-5 h-5" />
                  Start Your Partnership
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-orange-500/20 hover:border-orange-500/50">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Free consultation
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Custom strategy development
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Performance-focused approach
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsorships;