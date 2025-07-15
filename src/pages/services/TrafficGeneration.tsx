import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  Target, Users, TrendingUp, Globe, Zap, Shield, CheckCircle, 
  MousePointer, BarChart3, Filter, Search, Eye, Star, Rocket
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TrafficGeneration = () => {
  const t = useTranslation();

  const trafficTypes = [
    {
      title: "Social Media Traffic",
      description: "Leverage social platforms to reach your target audience where they spend most of their time.",
      platforms: ["Facebook", "Instagram", "TikTok", "Twitter", "YouTube"],
      icon: Users,
      benefits: ["High engagement rates", "Precise demographic targeting", "Real-time campaign optimization"]
    },
    {
      title: "Search Engine Marketing",
      description: "Capture high-intent users actively searching for gaming and entertainment content.",
      platforms: ["Google Ads", "Bing Ads", "Yahoo Search"],
      icon: Target,
      benefits: ["Intent-based targeting", "Immediate visibility", "Performance tracking"]
    },
    {
      title: "Native Advertising", 
      description: "Seamlessly integrate your content within editorial environments for natural discovery.",
      platforms: ["Taboola", "Outbrain", "Revcontent", "Content.ad"],
      icon: Eye,
      benefits: ["Non-intrusive advertising", "Higher engagement", "Brand safety"]
    },
    {
      title: "Display & Programmatic",
      description: "Automated buying of ad inventory across premium publisher networks.",
      platforms: ["Google Display", "Amazon DSP", "The Trade Desk"],
      icon: BarChart3,
      benefits: ["Real-time bidding", "Advanced targeting", "Cross-device reach"]
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Audience Research & Analysis",
      description: "We conduct comprehensive market research to identify your ideal customer profiles and their online behavior patterns.",
      icon: Search
    },
    {
      step: "02", 
      title: "Multi-Channel Strategy Development",
      description: "Based on research insights, we develop a tailored traffic acquisition strategy across multiple channels.",
      icon: Filter
    },
    {
      step: "03",
      title: "Campaign Optimization & Scaling",
      description: "Continuous monitoring and optimization of campaigns to maximize ROI and scale successful initiatives.",
      icon: TrendingUp
    },
    {
      step: "04",
      title: "Performance Analytics & Reporting",
      description: "Detailed reporting and analytics to track performance, measure success, and inform future strategies.",
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-8">
              <MousePointer className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Traffic Generation Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {(t as any).trafficGenerationTitle || "Strategic Traffic Acquisition"}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {(t as any).trafficGenerationDesc || "Our comprehensive traffic generation services help gaming and entertainment brands reach their target audiences through data-driven, multi-channel marketing strategies that deliver quality users and sustainable growth."}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Active Campaigns</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">25M+</div>
                <div className="text-sm text-muted-foreground">Monthly Impressions</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">15%</div>
                <div className="text-sm text-muted-foreground">Avg. Conversion Rate</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">3.2x</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traffic Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Traffic Acquisition Channels</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We utilize a diverse mix of traffic channels to ensure consistent, high-quality user acquisition 
              across multiple touchpoints in the customer journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {trafficTypes.map((type, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                      Platforms & Networks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {type.platforms.map((platform, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Traffic Generation Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to driving quality traffic that converts, backed by data analysis 
              and continuous optimization across all channels.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {methodology.map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center relative">
                    <step.icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  {index < methodology.length - 1 && (
                    <div className="w-0.5 h-12 bg-border mx-auto mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Performance Insights</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Data-driven results from our traffic generation campaigns across various industry verticals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2 text-primary">340%</div>
              <div className="text-muted-foreground">Average ROI increase within 6 months</div>
            </Card>
            
            <Card className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-3xl font-bold mb-2 text-green-500">2.8M+</div>
              <div className="text-muted-foreground">Quality users acquired monthly</div>
            </Card>
            
            <Card className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Globe className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-3xl font-bold mb-2 text-blue-500">50+</div>
              <div className="text-muted-foreground">Global markets covered</div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrafficGeneration;