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


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Dashboard-style Layout */}
      <section className="pt-24 pb-20 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-background to-pink-500/5"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Dashboard Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-3 text-base font-medium bg-purple-500/10 text-purple-500 border-purple-500/20">
              <BarChart className="w-5 h-5 mr-2" />
              Analytics Intelligence Dashboard
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Analytics
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              Transform your business intelligence with data-driven insights, competitor analysis, and strategic recommendations
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <BarChart className="w-8 h-8" />
                <span className="text-sm opacity-80">Performance</span>
              </div>
              <div className="text-3xl font-bold mb-1">300%</div>
              <div className="text-sm opacity-80">Average Improvement</div>
            </div>
            
            <div className="bg-card border-2 border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Target className="w-8 h-8 text-purple-500" />
                <span className="text-sm text-muted-foreground">Metrics</span>
              </div>
              <div className="text-3xl font-bold text-purple-500 mb-1">50+</div>
              <div className="text-sm text-muted-foreground">KPIs Tracked</div>
            </div>
            
            <div className="bg-card border-2 border-pink-500/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Eye className="w-8 h-8 text-pink-500" />
                <span className="text-sm text-muted-foreground">Monitoring</span>
              </div>
              <div className="text-3xl font-bold text-pink-500 mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Real-time</div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Database className="w-8 h-8" />
                <span className="text-sm opacity-80">Accuracy</span>
              </div>
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-sm opacity-80">Data Quality</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  📊 Get Your Analytics Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-purple-500/20">
                📈 View Demo Report
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              🎯 Free market analysis • Custom dashboard • Live in 24 hours
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

      {/* Bespoke Quote Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Bespoke Analytics Solution</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every business is unique. Let us create a custom analytics and benchmarking solution 
                tailored specifically to your needs and objectives.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">Custom Dashboards</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">Tailored Reporting</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-sm">Dedicated Support</span>
                </div>
              </div>
              
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/25" asChild>
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
      <section className="py-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Strategic Decision Making</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join leading operators who rely on our market intelligence to stay ahead of the competition
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl shadow-purple-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
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