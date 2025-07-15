import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  TrendingUp, Target, Zap, BarChart, DollarSign, Globe, ArrowRight, CheckCircle,
  Monitor, CreditCard, MousePointer, Wifi, Signal, Radio, Smartphone, Laptop,
  ArrowUpRight, ArrowDownRight, Settings, Power, Layers, Database, 
  Timer, Gauge, Crosshair, Rocket, Brain, Eye, Play, Pause, RefreshCw, Users
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MediaBuying = () => {
  const t = useTranslation();

  const adPlatforms = [
    {
      name: "Google Ads",
      icon: Target,
      spend: "$12.5M",
      performance: "+234%",
      status: "Optimizing",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      name: "Facebook Meta",
      icon: Users,
      spend: "$8.7M",
      performance: "+189%",
      status: "Scaling",
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20"
    },
    {
      name: "TikTok Ads",
      icon: Smartphone,
      spend: "$5.3M",
      performance: "+456%",
      status: "Testing",
      color: "from-pink-500 to-red-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20"
    },
    {
      name: "YouTube",
      icon: Play,
      spend: "$6.8M",
      performance: "+298%",
      status: "Active",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20"
    },
    {
      name: "Programmatic",
      icon: Layers,
      spend: "$15.2M",
      performance: "+167%",
      status: "Auto-Bid",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      name: "Native Ads",
      icon: Monitor,
      spend: "$4.1M",
      performance: "+312%",
      status: "Optimizing",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    }
  ];

  const buyingStrategies = [
    {
      title: "Programmatic Buying",
      description: "Real-time bidding with AI-powered optimization for maximum efficiency",
      icon: Brain,
      features: ["Real-time bidding", "Audience targeting", "Auto-optimization", "Cross-platform sync"],
      performance: "Up to 400% ROAS",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Performance Marketing",
      description: "ROI-focused campaigns with conversion tracking and attribution modeling",
      icon: TrendingUp,
      features: ["Conversion tracking", "Attribution modeling", "A/B testing", "Performance reporting"],
      performance: "Average 300% ROI",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Audience Intelligence",
      description: "Advanced audience segmentation and behavioral targeting strategies",
      icon: Eye,
      features: ["Behavioral targeting", "Lookalike audiences", "Custom segments", "Intent modeling"],
      performance: "85% higher CTR",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cross-Platform Optimization",
      description: "Unified campaigns across all major advertising platforms and networks",
      icon: Layers,
      features: ["Multi-platform sync", "Budget allocation", "Creative optimization", "Performance analysis"],
      performance: "60% cost reduction",
      color: "from-orange-500 to-red-500"
    }
  ];

  const liveMetrics = [
    { label: "Active Campaigns", value: "247", trend: "+12%", color: "text-blue-500" },
    { label: "Daily Spend", value: "$285K", trend: "+8%", color: "text-green-500" },
    { label: "Avg. ROAS", value: "4.2x", trend: "+15%", color: "text-purple-500" },
    { label: "Conversion Rate", value: "12.8%", trend: "+23%", color: "text-orange-500" }
  ];

  const mediaBuyingProcess = [
    {
      step: "01",
      title: "Market Research & Analysis",
      description: "Deep dive into your target audience and competitive landscape",
      icon: Target,
      duration: "2-3 days"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom media buying strategy tailored to your goals and budget",
      icon: Settings,
      duration: "1 week"
    },
    {
      step: "03",
      title: "Campaign Launch",
      description: "Multi-platform campaign deployment with real-time monitoring",
      icon: Rocket,
      duration: "24 hours"
    },
    {
      step: "04",
      title: "Optimization & Scaling",
      description: "Continuous optimization and strategic scaling for maximum ROI",
      icon: RefreshCw,
      duration: "Ongoing"
    }
  ];

  const clientResults = [
    {
      client: "Casino Elite",
      industry: "iGaming",
      spend: "$2.3M",
      results: {
        roas: "520%",
        cpa: "-67%",
        conversions: "+234%"
      },
      platforms: ["Google", "Facebook", "TikTok"],
      testimonial: "Media buying strategy transformed our acquisition cost and scale."
    },
    {
      client: "BetMax Global",
      industry: "Sports Betting",
      spend: "$1.8M",
      results: {
        roas: "410%",
        cpa: "-45%",
        conversions: "+189%"
      },
      platforms: ["YouTube", "Programmatic", "Native"],
      testimonial: "Exceptional results across all platforms with transparent reporting."
    },
    {
      client: "Gaming Pro",
      industry: "Online Gaming",
      spend: "$3.1M",
      results: {
        roas: "380%",
        cpa: "-52%",
        conversions: "+156%"
      },
      platforms: ["Google", "Facebook", "Programmatic"],
      testimonial: "Best media buying partnership we've ever had. Highly recommended."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Digital Trading Dashboard */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-900/20 to-purple-900/20"></div>
        
        {/* Digital Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Data Points */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-1500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-500/30">
                <Monitor className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-sm font-medium text-blue-500">Advanced Media Buying Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Media Buying
                </span>
                <span className="block text-foreground">That Performs</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Algorithmic media buying powered by AI and real-time market intelligence. 
                We've managed over $50M in ad spend with an average 400% ROAS for gaming brands.
              </p>
            </div>

            {/* Live Trading Dashboard */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 mb-16">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h2 className="text-2xl font-bold">Live Trading Dashboard</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="animate-pulse">
                    <Signal className="w-3 h-3 mr-1" />
                    Real-time
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {liveMetrics.map((metric, index) => (
                  <Card key={index} className="text-center p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center mb-2">
                      <span className={`text-2xl font-bold ${metric.color}`}>{metric.value}</span>
                      <ArrowUpRight className={`w-4 h-4 ml-2 ${metric.color}`} />
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                    <div className={`text-xs font-semibold ${metric.color}`}>{metric.trend}</div>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl hover:scale-105 transition-all duration-300" asChild>
                  <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                    <Rocket className="mr-2 w-5 h-5" />
                    Launch Media Buying Campaign
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Portfolio */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our Platform</span>
              <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We manage media buying across every major advertising platform with dedicated expertise and proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {adPlatforms.map((platform, index) => (
              <Card key={index} className={`group relative overflow-hidden hover:scale-105 transition-all duration-500 border-2 ${platform.borderColor}`}>
                <div className={`absolute inset-0 ${platform.bgColor} opacity-50`}></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center`}>
                        <platform.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold">{platform.name}</CardTitle>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {platform.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-card/30 rounded-lg">
                      <div className="text-lg font-bold text-green-500">{platform.spend}</div>
                      <div className="text-xs text-muted-foreground">Total Spend</div>
                    </div>
                    <div className="text-center p-3 bg-card/30 rounded-lg">
                      <div className="text-lg font-bold text-blue-500">{platform.performance}</div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-muted-foreground">Active</span>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Strategies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Buying Strategies
              </span>
              <span className="block text-foreground">That Convert</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven media buying strategies combine advanced technology with human expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {buyingStrategies.map((strategy, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-green-500/20">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${strategy.color}`}></div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${strategy.color} flex items-center justify-center`}>
                        <strategy.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold group-hover:text-green-500 transition-colors">
                          {strategy.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge variant="secondary" className="font-bold">
                      {strategy.performance}
                    </Badge>
                  </div>
                  
                  <CardDescription className="text-base leading-relaxed">
                    {strategy.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {strategy.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm bg-card/50 p-3 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Client Success</span>
              <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real results from real clients showing the power of strategic media buying.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {clientResults.map((result, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-purple-500/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{result.client}</h3>
                      <p className="text-sm text-muted-foreground">{result.industry}</p>
                    </div>
                    <Badge className="bg-purple-500/10 text-purple-500">
                      {result.spend} spend
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-card/50 rounded-lg">
                      <div className="text-lg font-bold text-green-500">{result.results.roas}</div>
                      <div className="text-xs text-muted-foreground">ROAS</div>
                    </div>
                    <div className="text-center p-3 bg-card/50 rounded-lg">
                      <div className="text-lg font-bold text-blue-500">{result.results.cpa}</div>
                      <div className="text-xs text-muted-foreground">CPA</div>
                    </div>
                    <div className="text-center p-3 bg-card/50 rounded-lg">
                      <div className="text-lg font-bold text-purple-500">{result.results.conversions}</div>
                      <div className="text-xs text-muted-foreground">Conversions</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Platforms Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.platforms.map((platform, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-muted-foreground italic">
                      "{result.testimonial}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to media buying that delivers consistent results and maximizes your advertising ROI.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {mediaBuyingProcess.map((step, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  <div className="relative z-10 flex-shrink-0 mr-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-3">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        <Timer className="w-3 h-3 mr-1" />
                        {step.duration}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale Your
              <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Media Buying?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the brands that have transformed their advertising performance with our strategic media buying expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl hover:scale-105 transition-all duration-300" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  <Target className="mr-2 w-5 h-5" />
                  Start Media Buying Campaign
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-blue-500/20 hover:border-blue-500/50">
                <BarChart className="mr-2 w-5 h-5" />
                Get Performance Audit
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Free strategy consultation
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Custom campaign setup
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Performance guarantee
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MediaBuying;