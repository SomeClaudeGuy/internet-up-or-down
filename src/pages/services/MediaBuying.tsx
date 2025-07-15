import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { TrendingUp, Target, Zap, BarChart, DollarSign, Globe, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MediaBuying = () => {
  const t = useTranslation();

  const features = [
    {
      icon: Target,
      title: "Performance Media Buying",
      description: "Data-driven media buying strategies optimized for maximum ROI in the iGaming sector"
    },
    {
      icon: TrendingUp,
      title: "Campaign Optimization",
      description: "Continuous optimization using AI and machine learning for peak performance"
    },
    {
      icon: DollarSign,
      title: "ROI Focused",
      description: "Every dollar spent is tracked, measured, and optimized for maximum return on investment"
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Comprehensive tracking and analytics to measure every aspect of campaign performance"
    },
    {
      icon: Globe,
      title: "Multi-Platform Reach",
      description: "Strategic media buying across all major platforms and advertising networks"
    },
    {
      icon: Zap,
      title: "Real-Time Bidding",
      description: "Advanced programmatic buying with real-time optimization and bid management"
    }
  ];

  const results = [
    { metric: "400%", label: "Average ROAS Improvement" },
    { metric: "$50M+", label: "Total Ad Spend Managed" },
    { metric: "85%", label: "Cost Reduction Achieved" },
    { metric: "24/7", label: "Campaign Monitoring" }
  ];


  const platforms = [
    { name: "Google Ads", description: "Search & Display campaigns" },
    { name: "Facebook/Meta", description: "Social media advertising" },
    { name: "TikTok Ads", description: "Short-form video campaigns" },
    { name: "YouTube", description: "Video advertising campaigns" },
    { name: "Native Networks", description: "Content-native advertising" },
    { name: "Programmatic DSPs", description: "Real-time bidding platforms" },
    { name: "Affiliate Networks", description: "Performance-based partnerships" },
    { name: "Push Notification", description: "Direct user engagement" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Trading Floor/Command Center Style */}
      <section className="pt-20 pb-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white min-h-screen flex items-center">
        {/* Matrix-style code rain effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-green-400 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-blue-400 to-transparent animate-pulse delay-100"></div>
          <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-purple-400 to-transparent animate-pulse delay-200"></div>
          <div className="absolute top-0 left-[55%] w-px h-full bg-gradient-to-b from-indigo-400 to-transparent animate-pulse delay-300"></div>
          <div className="absolute top-0 left-[70%] w-px h-full bg-gradient-to-b from-cyan-400 to-transparent animate-pulse delay-400"></div>
          <div className="absolute top-0 left-[85%] w-px h-full bg-gradient-to-b from-pink-400 to-transparent animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Command Center Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <TrendingUp className="w-5 h-5 mr-2 text-indigo-400" />
                <span className="text-indigo-300 font-semibold">MEDIA BUYING COMMAND CENTER</span>
                <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse"></div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">MEDIA</span>
                <span className="block text-white drop-shadow-2xl">BUYING</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Advanced algorithmic media buying powered by AI and real-time market intelligence
              </p>
            </div>

            {/* Trading Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Main Trading Panel */}
              <div className="lg:col-span-2 bg-black/50 rounded-2xl border border-indigo-500/30 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-indigo-400">LIVE TRADING METRICS</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-mono">ACTIVE</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 rounded-lg p-4 border border-green-500/30">
                    <div className="text-green-400 text-xs font-mono mb-1">ROAS</div>
                    <div className="text-2xl font-black text-green-400">400%</div>
                    <div className="text-green-400 text-xs">↗ +15%</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-lg p-4 border border-blue-500/30">
                    <div className="text-blue-400 text-xs font-mono mb-1">SPEND</div>
                    <div className="text-2xl font-black text-blue-400">$50M+</div>
                    <div className="text-blue-400 text-xs">MANAGED</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-purple-400 text-xs font-mono mb-1">SAVINGS</div>
                    <div className="text-2xl font-black text-purple-400">85%</div>
                    <div className="text-purple-400 text-xs">COST CUT</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-900/50 to-indigo-800/50 rounded-lg p-4 border border-indigo-500/30">
                    <div className="text-indigo-400 text-xs font-mono mb-1">UPTIME</div>
                    <div className="text-2xl font-black text-indigo-400">24/7</div>
                    <div className="text-indigo-400 text-xs">MONITOR</div>
                  </div>
                </div>
                
                {/* Platform Status */}
                <div className="space-y-2">
                  <div className="text-xs text-gray-400 mb-2">PLATFORM STATUS</div>
                  {[
                    { name: "Google Ads", status: "OPTIMIZING", color: "green" },
                    { name: "Facebook Meta", status: "SCALING", color: "blue" },
                    { name: "TikTok Ads", status: "TESTING", color: "yellow" },
                    { name: "Programmatic", status: "ACTIVE", color: "purple" }
                  ].map((platform) => (
                    <div key={platform.name} className="flex justify-between items-center text-sm">
                      <span className="text-gray-300">{platform.name}</span>
                      <span className={`text-${platform.color}-400 font-mono text-xs`}>{platform.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* AI Control Panel */}
              <div className="bg-black/50 rounded-2xl border border-purple-500/30 p-6 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400">AI ENGINE</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Optimization Level</span>
                    <span className="text-purple-400">MAXIMUM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Learning Mode</span>
                    <span className="text-indigo-400">ADAPTIVE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Bid Strategy</span>
                    <span className="text-green-400">AUTO</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Risk Level</span>
                    <span className="text-yellow-400">BALANCED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Command Buttons */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Button size="lg" className="text-lg px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/25 font-bold" asChild>
                  <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                    🚀 INITIATE MEDIA BUYING
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="text-lg px-10 py-5 border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 font-bold">
                  📊 RUN DIAGNOSTICS
                </Button>
              </div>
              
              <div className="text-indigo-400 text-sm font-mono">
                [AI OPTIMIZATION] • [REAL-TIME BIDDING] • [PERFORMANCE TRACKING]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Buy Media Across All Platforms</h2>
            <p className="text-xl text-muted-foreground">Strategic media buying across every major advertising platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-indigo-500/50">
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-lg group-hover:text-indigo-500 transition-colors">
                    {platform.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm">
                    {platform.description}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Media Buying Results</h2>
            <p className="text-xl text-muted-foreground">Track record of delivering exceptional ROI through strategic media buying</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-500 mb-2">{result.metric}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Media Buying Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology and expert strategies that maximize every advertising dollar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-indigo-500/50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-0.5">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-indigo-500 transition-colors">
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
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Bespoke Media Buying Strategy</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every campaign requires a unique approach. Let us create a custom media buying 
                strategy that maximizes your ROI and reaches your ideal audience efficiently.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm">Custom Targeting</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm">Platform Optimization</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm">ROI Maximization</span>
                </div>
              </div>
              
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/25" asChild>
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
      <section className="py-20 bg-gradient-to-r from-indigo-500/20 to-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Maximize Your Ad ROI?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 200+ operators who trust us to manage their media buying and deliver exceptional results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  📈 Start Optimizing Your Ad Spend
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <div className="text-sm text-muted-foreground flex items-center justify-center">
                🎯 Free ROI analysis • Setup in 48 hours • Performance guarantees
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MediaBuying;