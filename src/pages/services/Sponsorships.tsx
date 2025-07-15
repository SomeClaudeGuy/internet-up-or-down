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
      investment: "$2.5M",
      results: {
        impressions: "85M+",
        brandLift: "340%",
        newSignups: "125K",
        roi: "650%"
      },
      quote: "The sponsorship activation exceeded all expectations. We saw immediate brand recognition and a massive spike in new player registrations.",
      clientLogo: "🎰",
      testimonial: "Best marketing investment we've ever made. The ROI was incredible and the brand exposure was phenomenal."
    },
    {
      client: "Royal Gaming Co",
      event: "Esports Festival Europe",
      investment: "$1.8M",
      results: {
        impressions: "45M+",
        brandLift: "280%",
        newSignups: "89K",
        roi: "420%"
      },
      quote: "Our brand became synonymous with premium gaming after this partnership. The quality of leads was outstanding.",
      clientLogo: "👑",
      testimonial: "Transformed our brand perception overnight. Premium positioning that money can't usually buy."
    },
    {
      client: "BetMax Pro",
      event: "Streaming Summit 2024",
      investment: "$950K",
      results: {
        impressions: "32M+",
        brandLift: "450%",
        newSignups: "67K",
        roi: "380%"
      },
      quote: "The influencer partnerships and content integration drove massive engagement across all our platforms.",
      clientLogo: "🚀",
      testimonial: "Game-changing results. Our social media following tripled and conversion rates doubled."
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
      investment: "Starting at $500K",
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
      investment: "Starting at $250K",
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
      results: "Guaranteed 500M+ impressions",
      investment: "Starting at $1M",
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
      investment: "Starting at $150K",
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

  const guarantees = [
    {
      title: "Minimum 300% ROI",
      description: "Or we refund the difference",
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      title: "100M+ Impressions",
      description: "Guaranteed across all activations",
      icon: Eye,
      color: "text-blue-500"
    },
    {
      title: "Premium Placement",
      description: "Top-tier positioning only",
      icon: Crown,
      color: "text-yellow-500"
    },
    {
      title: "Full Campaign Support",
      description: "Dedicated account management",
      icon: Handshake,
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Sales Focused */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5"></div>
        
        {/* Spotlight Effects */}
        <div className="absolute top-0 left-1/4 w-2 h-64 bg-gradient-to-b from-yellow-400/80 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-2 h-64 bg-gradient-to-b from-orange-400/80 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-3 h-80 bg-gradient-to-b from-white/60 to-transparent transform -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-red-500/30">
              <Trophy className="w-6 h-6 text-red-500 mr-3" />
              <span className="text-lg font-bold text-red-500">CHAMPIONSHIP-LEVEL SPONSORSHIPS</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
              <span className="block text-foreground">Turn</span>
              <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                $1M Investment
              </span>
              <span className="block text-foreground">Into</span>
              <span className="block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                $6M Returns
              </span>
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto font-semibold">
              We've generated over <span className="text-green-500 font-bold">$500M in client revenue</span> through strategic 
              sponsorships at premium gaming events. Your competitors are already here - don't get left behind.
            </p>

            {/* Urgency Banner */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/50 rounded-2xl p-6 mb-12 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
                <span className="text-red-500 font-bold text-lg">LIMITED SPOTS AVAILABLE</span>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse ml-3"></div>
              </div>
              <p className="text-lg text-muted-foreground">
                Only <span className="text-red-500 font-bold">3 premium sponsorship slots</span> remain for Q2 2024 events. 
                Book now to secure your position at the biggest gaming tournaments.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9/5 from 200+ campaigns</span>
              </div>
              <div className="text-muted-foreground">|</div>
              <div className="text-muted-foreground">🏆 #1 Gaming Sponsorship Agency</div>
              <div className="text-muted-foreground">|</div>
              <div className="text-muted-foreground">💰 $500M+ in client revenue</div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-red-500 to-orange-500 shadow-2xl shadow-red-500/30 font-bold hover:scale-105 transition-all duration-300 animate-pulse" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  🚀 CLAIM YOUR SPONSORSHIP SLOT
                  <ArrowRight className="ml-3 w-6 h-6" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="text-xl px-12 py-8 border-2 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 font-bold">
                <PlayCircle className="mr-3 w-6 h-6" />
                Watch Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Real Results from</span>
              <span className="block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Real Clients
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These aren't just case studies - they're proof that our sponsorship strategies deliver massive ROI for gaming brands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="group relative overflow-hidden border-2 border-green-500/20 hover:border-green-500/50 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-green-500/10 to-transparent w-32 h-32 rounded-bl-full"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{story.clientLogo}</div>
                      <div>
                        <h3 className="font-bold text-lg">{story.client}</h3>
                        <p className="text-sm text-muted-foreground">{story.event}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20 font-bold">
                      {story.results.roi} ROI
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-card/50 rounded-lg">
                      <div className="text-lg font-bold text-green-500">{story.results.impressions}</div>
                      <div className="text-xs text-muted-foreground">Impressions</div>
                    </div>
                    <div className="text-center p-3 bg-card/50 rounded-lg">
                      <div className="text-lg font-bold text-blue-500">{story.results.newSignups}</div>
                      <div className="text-xs text-muted-foreground">New Signups</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="mb-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm italic text-muted-foreground mb-3">
                      "{story.testimonial}"
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-lg p-3 border border-green-500/20">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Investment:</span>
                      <span className="font-bold">{story.investment}</span>
                    </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our</span>
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Championship </span>
              <span className="text-foreground">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From major event sponsorships to influencer partnerships, we deliver results that transform your brand's presence in gaming.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {serviceOfferings.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden border-2 border-transparent hover:border-orange-500/30 hover:scale-105 transition-all duration-500">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold group-hover:text-orange-500 transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge variant="secondary" className="font-bold">
                      {service.investment}
                    </Badge>
                  </div>
                  
                  <CardDescription className="text-base leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase">
                        What You Get
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
      <section className="py-20 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Platform Performance
              </span>
              <span className="block text-foreground">That Dominates</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our sponsorship campaigns consistently outperform industry benchmarks across all major gaming platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {platformMetrics.map((platform, index) => (
              <Card key={index} className="text-center p-6 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-500/30">
                <div className="text-2xl font-bold mb-2">{platform.platform}</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-lg font-bold text-blue-500">{platform.reach}</div>
                    <div className="text-xs text-muted-foreground">Total Reach</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-500">{platform.engagement}</div>
                    <div className="text-xs text-muted-foreground">Engagement Rate</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-500">{platform.growth}</div>
                    <div className="text-xs text-muted-foreground">Growth Rate</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our</span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"> Guarantees</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're so confident in our results that we back every sponsorship with ironclad guarantees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="text-center p-6 hover:scale-105 transition-all duration-300 border-2 border-green-500/20">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center`}>
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{guarantee.title}</h3>
                <p className="text-sm text-muted-foreground">{guarantee.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground">
              Join 500+ gaming brands who've transformed their business with our sponsorship strategies
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Ready to</span>
              <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Dominate Gaming?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't let your competitors capture the gaming audience. Book your premium sponsorship slot today.
            </p>
            
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 mb-12 border border-red-500/30">
              <div className="text-lg font-bold text-red-500 mb-4">
                ⚠️ URGENT: Only 3 Premium Slots Left for Q2 2024
              </div>
              <div className="text-muted-foreground">
                The biggest gaming events are booking fast. Secure your spot before your competitors do.
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-2xl px-16 py-8 bg-gradient-to-r from-red-500 to-orange-500 shadow-2xl shadow-red-500/30 font-black hover:scale-110 transition-all duration-300 animate-pulse" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  💥 BOOK MY SPONSORSHIP NOW
                  <ArrowRight className="ml-3 w-8 h-8" />
                </a>
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Guaranteed 300% ROI
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              100M+ impressions guaranteed
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Premium event access
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsorships;