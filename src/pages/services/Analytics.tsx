import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  BarChart, TrendingUp, Eye, Target, Database, Zap, CheckCircle, 
  PieChart, LineChart, Activity, Users, Globe, Search, ArrowRight, 
  Monitor, Code, Layers, Sparkles, Brain, Microscope
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Analytics = () => {
  const t = useTranslation();

  const analyticsFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms analyze patterns and predict future trends",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Microscope,
      title: "Deep Data Mining",
      description: "Extract valuable insights from complex datasets and user behavior",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Identify and segment your most valuable audience segments",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Sparkles,
      title: "Real-Time Analytics",
      description: "Live dashboards with instant updates and performance alerts",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  const dataVisualizationTypes = [
    {
      icon: BarChart,
      title: "Performance Dashboards",
      description: "Interactive dashboards showing KPIs, conversion rates, and revenue metrics",
      metrics: ["Revenue Growth", "User Acquisition", "Retention Rates", "Campaign ROI"]
    },
    {
      icon: PieChart,
      title: "Market Share Analysis",
      description: "Comprehensive competitor analysis and market positioning insights",
      metrics: ["Market Position", "Competitor Tracking", "Share of Voice", "Trend Analysis"]
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Forecast future performance and identify growth opportunities",
      metrics: ["Revenue Forecasting", "User Lifetime Value", "Churn Prediction", "Demand Planning"]
    },
    {
      icon: Activity,
      title: "User Journey Analytics",
      description: "Track user behavior across all touchpoints and optimize conversion paths",
      metrics: ["Conversion Funnels", "Drop-off Points", "User Flow", "Engagement Metrics"]
    }
  ];

  const analyticsTools = [
    { name: "Google Analytics 4", category: "Web Analytics", icon: "🌐" },
    { name: "Tableau", category: "Data Visualization", icon: "📊" },
    { name: "Power BI", category: "Business Intelligence", icon: "⚡" },
    { name: "Mixpanel", category: "Product Analytics", icon: "🔍" },
    { name: "Amplitude", category: "User Analytics", icon: "📱" },
    { name: "Hotjar", category: "User Behavior", icon: "🔥" },
    { name: "Segment", category: "Data Management", icon: "🔗" },
    { name: "Looker", category: "Data Platform", icon: "👁️" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Floating Elements */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
        
        {/* Floating Data Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-1/4 left-1/4 text-primary/20 animate-bounce delay-300">
            <BarChart className="w-8 h-8" />
          </div>
          <div className="absolute top-1/3 right-1/3 text-accent/20 animate-bounce delay-700">
            <TrendingUp className="w-10 h-10" />
          </div>
          <div className="absolute bottom-1/3 left-1/5 text-green-500/20 animate-bounce delay-1100">
            <PieChart className="w-6 h-6" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-primary/20">
                <Monitor className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Advanced Analytics Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Analytics
                </span>
                <span className="block text-foreground">That Actually</span>
                <span className="block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  Drive Results
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your data into competitive advantage with our comprehensive analytics suite. 
                We turn complex data into crystal-clear insights that drive strategic decisions and measurable growth.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {analyticsFeatures.map((feature, index) => (
                <Card key={index} className="group relative overflow-hidden border-0 hover:scale-105 transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <CardHeader className="text-center relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 rounded-2xl bg-card border hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-black text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Data Points Analyzed</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-card border hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-black text-green-500 mb-2">98.7%</div>
                <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-card border hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-black text-blue-500 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Real-time Monitoring</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-card border hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-black text-purple-500 mb-2">350%</div>
                <div className="text-sm text-muted-foreground">Average ROI Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Data Visualization
              </span>
              <span className="block text-foreground">That Tells a Story</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Turn complex datasets into compelling visual narratives that drive understanding and action across your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {dataVisualizationTypes.map((viz, index) => (
              <Card key={index} className="group relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <viz.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {viz.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-foreground/80">
                    {viz.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="grid grid-cols-2 gap-3">
                    {viz.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Tools Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Powered by</span>
              <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Industry-Leading Tools
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We leverage the most advanced analytics platforms and technologies to deliver unparalleled insights and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {analyticsTools.map((tool, index) => (
              <Card key={index} className="group text-center p-6 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-muted-foreground">{tool.category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Analytics Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to transforming your data into actionable insights that drive measurable business results.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
              
              {[
                {
                  step: "01",
                  title: "Data Discovery & Audit",
                  description: "Comprehensive analysis of your existing data sources, quality assessment, and identification of key metrics and KPIs.",
                  icon: Search
                },
                {
                  step: "02",
                  title: "Strategic Analytics Planning",
                  description: "Development of customized analytics framework aligned with your business objectives and growth targets.",
                  icon: Target
                },
                {
                  step: "03",
                  title: "Implementation & Integration",
                  description: "Setup of analytics tools, data pipelines, and integration with your existing systems and workflows.",
                  icon: Layers
                },
                {
                  step: "04",
                  title: "Insights & Optimization",
                  description: "Continuous monitoring, analysis, and optimization based on performance data and emerging trends.",
                  icon: TrendingUp
                }
              ].map((step, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  <div className="relative z-10 flex-shrink-0 mr-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Data into Insights?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join leading gaming and entertainment brands who rely on our analytics expertise to drive growth and stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent shadow-2xl hover:scale-105 transition-all duration-300" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  <BarChart className="mr-2 w-5 h-5" />
                  Get Your Analytics Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/20 hover:border-primary/50">
                <Eye className="mr-2 w-5 h-5" />
                View Sample Dashboard
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Free initial consultation
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Custom analytics strategy
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Setup within 48 hours
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;