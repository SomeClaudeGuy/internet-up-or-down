import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { BarChart, TrendingUp, Eye, Target, Database, Zap, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Analytics = () => {
  const t = useTranslation();

  const features = [
    {
      icon: BarChart,
      title: "Market Intelligence",
      description: "Comprehensive market analysis and competitor benchmarking across all major gaming markets"
    },
    {
      icon: Eye,
      title: "Competitor Insights",
      description: "Deep dive into competitor strategies, performance metrics, and market positioning"
    },
    {
      icon: TrendingUp,
      title: "Performance Metrics", 
      description: "Advanced KPI tracking and performance optimization recommendations"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Data-driven strategic recommendations based on market trends and opportunities"
    },
    {
      icon: Database,
      title: "Custom Dashboards",
      description: "Personalized analytics dashboards with real-time data visualization"
    },
    {
      icon: Zap,
      title: "Actionable Insights",
      description: "Transform data into actionable strategies that drive measurable results"
    }
  ];

  const results = [
    { metric: "300%", label: "Average Performance Improvement" },
    { metric: "50+", label: "Key Metrics Tracked" },
    { metric: "24/7", label: "Real-Time Monitoring" },
    { metric: "98%", label: "Data Accuracy Rate" }
  ];

  const packages = [
    {
      name: "Essential Analytics",
      price: "$3,000/month",
      description: "Core analytics and benchmarking for growing operators",
      features: [
        "Monthly Market Reports",
        "Competitor Analysis (5 competitors)",
        "Basic Performance Dashboard",
        "Email Support",
        "Quarterly Strategy Sessions"
      ]
    },
    {
      name: "Advanced Intelligence",
      price: "$8,000/month", 
      description: "Comprehensive analytics with deep market insights",
      features: [
        "Weekly Market Intelligence Reports",
        "Advanced Competitor Tracking (15 competitors)",
        "Custom Analytics Dashboard",
        "Dedicated Analyst",
        "Bi-weekly Strategy Calls",
        "Performance Optimization Recommendations"
      ],
      popular: true
    },
    {
      name: "Enterprise Intelligence",
      price: "Custom Pricing",
      description: "Full-scale intelligence platform for large operators",
      features: [
        "Daily Market Intelligence",
        "Complete Market Coverage",
        "White-label Analytics Platform",
        "Dedicated Intelligence Team",
        "24/7 Support & Monitoring",
        "Custom API Integration",
        "Predictive Analytics & AI Insights"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-purple-500/5 to-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 text-sm font-medium">
              <BarChart className="w-4 h-4 mr-2" />
              Market Intelligence & Analytics
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Benchmarking & Analytics Excellence
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Gain competitive advantage with comprehensive market analysis, competitor benchmarking, 
              and performance optimization insights that drive strategic decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/25">
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                  📊 Get Free Market Analysis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                📈 View Sample Reports
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Data-Driven Success</h2>
            <p className="text-xl text-muted-foreground">Intelligence that transforms strategy into results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">{result.metric}</div>
                <div className="text-sm text-muted-foreground">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Market Intelligence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced analytics and benchmarking tools that give you the competitive edge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-purple-500/50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-500 transition-colors">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics Packages</h2>
            <p className="text-xl text-muted-foreground">Intelligence solutions tailored to your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/25 scale-105' : 'border-border/50'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-purple-500 mb-2">{pkg.price}</div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  <Button 
                    className={`w-full mt-6 ${pkg.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''}`}
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
      <section className="py-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Strategic Decision Making</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join leading operators who rely on our market intelligence to stay ahead of the competition
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                  📊 Start Your Market Intelligence
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <div className="text-sm text-muted-foreground flex items-center justify-center">
                🎯 Free market analysis • Expert insights • Setup in 24 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;