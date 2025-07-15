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
      
      {/* Hero Section - Layered Design */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-indigo-500/5 to-purple-500/10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-indigo-500/10 text-indigo-500 border-indigo-500/20 inline-flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Performance Media Buying
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="block text-foreground mb-2">Media Buying</span>
                  <span className="block text-2xl md:text-3xl text-muted-foreground font-normal mb-2">That Delivers</span>
                  <span className="block bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    Maximum ROI
                  </span>
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  Performance-driven media buying strategies powered by AI and advanced analytics. 
                  We've managed $50M+ in ad spend, delivering exceptional ROI for iGaming operators.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/25" asChild>
                    <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                      🚀 Optimize Your Ad Spend
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                    📊 Free ROI Audit
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-muted-foreground">AI-Powered Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-muted-foreground">Real-Time Bidding</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-muted-foreground">Multi-Platform Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-muted-foreground">Performance Tracking</span>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-indigo-500/10 to-transparent rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-indigo-500 mb-1">400%</div>
                        <div className="text-xs text-muted-foreground">ROAS Improvement</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-500 mb-1">$50M+</div>
                        <div className="text-xs text-muted-foreground">Ad Spend Managed</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-500 mb-1">85%</div>
                        <div className="text-xs text-muted-foreground">Cost Reduction</div>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-500/10 to-transparent rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-indigo-500 mb-1">24/7</div>
                        <div className="text-xs text-muted-foreground">Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
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