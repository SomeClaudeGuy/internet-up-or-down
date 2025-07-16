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
      title: (t as any).trafficSocialMediaTitle,
      description: (t as any).trafficSocialMediaDesc,
      platforms: ["Facebook", "Instagram", "TikTok", "Twitter", "YouTube"],
      icon: Users,
      benefits: ["High engagement rates", "Precise demographic targeting", "Real-time campaign optimization"]
    },
    {
      title: (t as any).trafficSEMTitle,
      description: (t as any).trafficSEMDesc,
      platforms: ["Google Ads", "Bing Ads", "Yahoo Search"],
      icon: Target,
      benefits: ["Intent-based targeting", "Immediate visibility", "Performance tracking"]
    },
    {
      title: (t as any).trafficNativeTitle, 
      description: (t as any).trafficNativeDesc,
      platforms: ["Taboola", "Outbrain", "Revcontent", "Content.ad"],
      icon: Eye,
      benefits: ["Non-intrusive advertising", "Higher engagement", "Brand safety"]
    },
    {
      title: (t as any).trafficDisplayTitle,
      description: (t as any).trafficDisplayDesc,
      platforms: ["Google Display", "Amazon DSP", "The Trade Desk"],
      icon: BarChart3,
      benefits: ["Real-time bidding", "Advanced targeting", "Cross-device reach"]
    }
  ];

  const methodology = [
    {
      step: "01",
      title: (t as any).trafficStep1Title,
      description: (t as any).trafficStep1Desc,
      icon: Search
    },
    {
      step: "02", 
      title: (t as any).trafficStep2Title,
      description: (t as any).trafficStep2Desc,
      icon: Filter
    },
    {
      step: "03",
      title: (t as any).trafficStep3Title,
      description: (t as any).trafficStep3Desc,
      icon: TrendingUp
    },
    {
      step: "04",
      title: (t as any).trafficStep4Title,
      description: (t as any).trafficStep4Desc,
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
              {(t as any).trafficGenerationTitle}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {(t as any).trafficGenerationDesc}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{(t as any).trafficAcquisitionChannelsTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {(t as any).trafficAcquisitionChannelsDesc}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{(t as any).trafficProcessTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {(t as any).trafficProcessDesc}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{(t as any).trafficPerformanceTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {(t as any).trafficPerformanceDesc}
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