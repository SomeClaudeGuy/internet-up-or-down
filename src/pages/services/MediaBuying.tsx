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
      description: "Search, Display, Shopping, and YouTube advertising",
      specialties: ["Search campaigns", "Display networks", "Shopping ads", "Video advertising"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      name: "Facebook & Instagram",
      icon: Users,
      description: "Social media advertising across Meta platforms",
      specialties: ["News feed ads", "Story advertising", "Reels promotion", "Audience targeting"],
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20"
    },
    {
      name: "TikTok Advertising",
      icon: Smartphone,
      description: "Short-form video advertising for younger demographics",
      specialties: ["In-feed ads", "Branded effects", "TopView ads", "Spark ads"],
      color: "from-pink-500 to-red-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20"
    },
    {
      name: "YouTube Advertising",
      icon: Play,
      description: "Video advertising on the world's largest video platform",
      specialties: ["Skippable ads", "Non-skippable ads", "Bumper ads", "Discovery ads"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20"
    },
    {
      name: "Programmatic Advertising",
      icon: Layers,
      description: "Automated ad buying across multiple networks",
      specialties: ["Real-time bidding", "Audience segmentation", "Cross-platform reach", "Performance optimization"],
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      name: "Native Advertising",
      icon: Monitor,
      description: "Content-style ads that blend with editorial content",
      specialties: ["Content integration", "Publisher networks", "Audience engagement", "Brand storytelling"],
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    }
  ];

  const mediaServices = [
    {
      title: "Strategic Planning & Research",
      description: "We start with comprehensive market research and competitive analysis to develop a data-driven media strategy",
      icon: Brain,
      features: ["Market analysis", "Competitor research", "Audience profiling", "Budget allocation"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Campaign Setup & Launch",
      description: "Professional campaign setup with proper tracking, targeting, and optimization from day one",
      icon: Rocket,
      features: ["Account setup", "Conversion tracking", "Audience targeting", "Creative testing"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization to improve performance and reduce costs over time",
      icon: TrendingUp,
      features: ["Bid management", "Audience optimization", "Creative testing", "Landing page optimization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive reporting and insights to understand campaign performance and ROI",
      icon: BarChart,
      features: ["Performance dashboards", "ROI tracking", "Custom reports", "Optimization recommendations"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const mediaBuyingProcess = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business goals, target audience, and competitive landscape to develop a comprehensive media buying strategy",
      icon: Target,
      deliverables: ["Market research", "Competitive analysis", "Target audience profiles", "Media strategy document"]
    },
    {
      step: "02",
      title: "Campaign Development",
      description: "We create and set up campaigns across selected platforms with proper tracking and optimization frameworks",
      icon: Settings,
      deliverables: ["Campaign setup", "Conversion tracking", "Audience segments", "Creative assets"]
    },
    {
      step: "03",
      title: "Launch & Monitor",
      description: "We launch campaigns with careful monitoring and real-time adjustments to ensure optimal performance",
      icon: Rocket,
      deliverables: ["Campaign launch", "Performance monitoring", "Real-time optimization", "Initial reporting"]
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "We continuously optimize campaigns based on performance data and scale successful strategies",
      icon: RefreshCw,
      deliverables: ["Performance optimization", "Budget scaling", "Creative testing", "Detailed reporting"]
    }
  ];

  const whyMediaBuying = [
    {
      title: "Expertise & Experience",
      description: "Our team has years of experience managing campaigns across all major advertising platforms",
      icon: Brain,
      benefits: ["Platform expertise", "Industry knowledge", "Best practices", "Proven strategies"]
    },
    {
      title: "Advanced Tools & Technology",
      description: "We use professional-grade tools and platforms to maximize campaign performance and efficiency",
      icon: Monitor,
      benefits: ["Professional tools", "Advanced analytics", "Automation", "Real-time optimization"]
    },
    {
      title: "Time & Resource Savings",
      description: "Focus on your business while we handle the complex and time-consuming aspects of media buying",
      icon: Timer,
      benefits: ["Time savings", "Resource efficiency", "Professional management", "Scalable processes"]
    },
    {
      title: "Performance Focus",
      description: "We're committed to delivering measurable results and continuous improvement in campaign performance",
      icon: Target,
      benefits: ["ROI focus", "Performance tracking", "Continuous optimization", "Transparent reporting"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
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

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-purple-500/30 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-pink-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-green-500/30 rounded-full animate-pulse delay-1500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-500/30">
              <Monitor className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-blue-500">Professional Media Buying Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Strategic Media Buying
              </span>
              <span className="block text-foreground">That Drives Results</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Professional media buying services that help gaming and entertainment brands reach their target audiences 
              efficiently across all major advertising platforms. We handle the complexity while you focus on your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl hover:scale-105 transition-all duration-300" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  <Rocket className="mr-2 w-5 h-5" />
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-blue-500/20 hover:border-blue-500/50">
                <BarChart className="mr-2 w-5 h-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Platforms */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Advertising Platforms</span>
              <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                We Manage
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide expert media buying services across all major advertising platforms, 
              ensuring your campaigns reach the right audience at the right time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {adPlatforms.map((platform, index) => (
              <Card key={index} className={`group hover:scale-105 transition-all duration-300 border-2 ${platform.borderColor}`}>
                <div className={`absolute inset-0 ${platform.bgColor} opacity-50`}></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center`}>
                      <platform.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold">{platform.name}</CardTitle>
                  </div>
                  
                  <CardDescription className="text-base leading-relaxed">
                    {platform.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-2">
                    {platform.specialties.map((specialty, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {specialty}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Our Media Buying
              </span>
              <span className="block text-foreground">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive media buying services that cover every aspect of your advertising campaigns 
              from strategy development to performance optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {mediaServices.map((service, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-green-500/20">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-green-500 transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                  
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
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

      {/* Why Choose Our Media Buying */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Why Choose Our</span>
              <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Media Buying Services
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We bring expertise, technology, and strategic thinking to every campaign, 
              helping you achieve better results with your advertising budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {whyMediaBuying.map((reason, index) => (
              <Card key={index} className="group text-center p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-4 group-hover:text-orange-500 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {reason.description}
                </p>
                <div className="space-y-2">
                  {reason.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Our</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to media buying that ensures every campaign is strategically planned, 
              expertly executed, and continuously optimized for maximum performance.
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
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                    
                    <div className="bg-card/50 rounded-lg p-4 border">
                      <h4 className="font-semibold mb-2 text-sm">Key Deliverables:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
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
              Ready to Optimize Your
              <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Advertising Strategy?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's discuss how professional media buying can help you reach your target audience 
              more effectively and maximize your advertising ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl hover:scale-105 transition-all duration-300" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  <Target className="mr-2 w-5 h-5" />
                  Start Your Campaign
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-blue-500/20 hover:border-blue-500/50">
                <Timer className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Free initial consultation
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Custom strategy development
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Transparent reporting
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MediaBuying;