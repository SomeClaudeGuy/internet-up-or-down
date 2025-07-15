import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { Target, Users, TrendingUp, Globe, Zap, Shield, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TrafficGeneration = () => {
  const t = useTranslation();

  const features = [
    {
      icon: Target,
      title: "High-Quality Traffic",
      description: "Premium traffic sources with verified conversion rates specifically for casino operators"
    },
    {
      icon: Users,
      title: "Targeted Audiences",
      description: "Precisely segmented audiences based on gaming preferences and spending behavior"
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description: "Continuously optimized campaigns to maximize player acquisition and retention"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to premium traffic sources across all major gaming markets worldwide"
    },
    {
      icon: Zap,
      title: "Real-Time Scaling",
      description: "Instantly scale winning campaigns with our proprietary traffic management system"
    },
    {
      icon: Shield,
      title: "Fraud Protection",
      description: "Advanced fraud detection and prevention to ensure only quality players"
    }
  ];

  const results = [
    { metric: "2,000+", label: "New Player Registrations per Month" },
    { metric: "15%", label: "Average First Deposit Rate" },
    { metric: "98%", label: "Traffic Quality Score" },
    { metric: "24/7", label: "Campaign Monitoring" }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 text-sm font-medium">
              <Target className="w-4 h-4 mr-2" />
              Premium Traffic Generation
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              High-Quality Traffic for Casino Operators
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Drive premium player acquisition with our exclusive traffic sources. Proven conversion rates, 
              advanced targeting, and fraud protection for sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent shadow-2xl shadow-primary/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  🚀 Get Free Traffic Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                📞 Schedule Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-muted-foreground">Track record of success across 200+ casino operators</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{result.metric}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Traffic Generation?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced targeting, premium sources, and proven results that drive sustainable growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary to-accent p-0.5">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
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
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Bespoke Traffic Solution</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every business has unique traffic needs. Let us create a custom traffic generation 
                strategy tailored specifically to your target audience and goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Custom Targeting</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Scalable Solutions</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Performance Tracking</span>
                </div>
              </div>
              
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent shadow-2xl shadow-primary/25" asChild>
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
      <section className="py-20 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Traffic?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 200+ operators who've transformed their player acquisition with our premium traffic solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent shadow-2xl shadow-primary/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  🚀 Start Driving Quality Traffic
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <div className="text-sm text-muted-foreground flex items-center justify-center">
                ⏰ Free consultation • Results guaranteed • Setup in 48 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrafficGeneration;