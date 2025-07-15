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

  const packages = [
    {
      name: "Performance Starter",
      price: "$5,000/month",
      description: "Essential media buying for growing operators",
      features: [
        "$20,000 Monthly Ad Spend Management",
        "3 Platform Campaign Management",
        "Weekly Performance Reports",
        "Basic Optimization",
        "Email Support"
      ]
    },
    {
      name: "Growth Accelerator",
      price: "$12,000/month",
      description: "Advanced media buying with full optimization",
      features: [
        "$100,000+ Monthly Ad Spend Management",
        "Multi-Platform Campaign Management",
        "AI-Powered Optimization",
        "Real-Time Performance Dashboard",
        "Dedicated Media Buyer",
        "Daily Optimization & Reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise Scale",
      price: "Custom Pricing",
      description: "Large-scale media buying for major operators",
      features: [
        "$500,000+ Monthly Ad Spend Management",
        "Full Programmatic Platform Access",
        "Custom Attribution Modeling",
        "24/7 Dedicated Media Buying Team",
        "Advanced AI & Machine Learning",
        "White-label Reporting Platform",
        "Performance-based Fee Structure"
      ]
    }
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-indigo-500/5 to-purple-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Performance Media Buying
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Media Buying That Maximizes ROI
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Performance-driven media buying strategies powered by AI and advanced analytics. 
              We've managed $50M+ in ad spend, delivering exceptional ROI for iGaming operators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/25">
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                  🚀 Optimize Your Ad Spend
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                📊 Free ROI Audit
              </Button>
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

      {/* Packages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Media Buying Packages</h2>
            <p className="text-xl text-muted-foreground">Scalable media buying solutions for every ad spend level</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-indigo-500 shadow-2xl shadow-indigo-500/25 scale-105' : 'border-border/50'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-indigo-500 mb-2">{pkg.price}</div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  <Button 
                    className={`w-full mt-6 ${pkg.popular ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
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