import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { Users, Heart, MessageCircle, Share2, TrendingUp, Zap, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SocialMedia = () => {
  const t = useTranslation();

  const features = [
    {
      icon: Users,
      title: "Content Strategy",
      description: "Comprehensive social media strategies tailored specifically for the iGaming industry"
    },
    {
      icon: Heart,
      title: "Community Building", 
      description: "Build and nurture engaged communities that drive player loyalty and retention"
    },
    {
      icon: MessageCircle,
      title: "Engagement Management",
      description: "24/7 community management and customer engagement across all platforms"
    },
    {
      icon: Share2,
      title: "Viral Content Creation",
      description: "Create shareable content that amplifies your brand reach organically"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Advanced social media analytics and performance optimization"
    },
    {
      icon: Zap,
      title: "Real-Time Response",
      description: "Instant response to trends, events, and community feedback"
    }
  ];

  const results = [
    { metric: "500%", label: "Average Follower Growth" },
    { metric: "15M+", label: "Monthly Impressions Generated" },
    { metric: "25%", label: "Average Engagement Rate" },
    { metric: "24/7", label: "Community Monitoring" }
  ];


  const platforms = [
    { name: "Instagram", color: "from-purple-500 to-pink-500" },
    { name: "TikTok", color: "from-red-500 to-pink-500" },
    { name: "YouTube", color: "from-red-500 to-red-600" },
    { name: "Twitter/X", color: "from-gray-800 to-gray-900" },
    { name: "Facebook", color: "from-blue-500 to-blue-600" },
    { name: "Twitch", color: "from-purple-600 to-purple-700" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-green-500/5 to-emerald-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              Social Media Excellence
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Social Media Management That Converts
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Build massive social communities, drive viral engagement, and convert followers into players 
              with our proven iGaming social media strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 shadow-2xl shadow-green-500/25">
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                  🚀 Grow Your Social Presence
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                📱 View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Dominate Every Platform</h2>
            <p className="text-xl text-muted-foreground">Expert management across all major social media platforms</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {platform.name.charAt(0)}
                </div>
                <div className="text-sm font-medium">{platform.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Social Media Success Stories</h2>
            <p className="text-xl text-muted-foreground">Results that speak louder than words</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">{result.metric}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Social Media Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of your social media presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-green-500/50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 p-0.5">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-500 transition-colors">
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
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Bespoke Social Media Strategy</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every brand has a unique voice. Let us create a custom social media strategy 
                that perfectly captures your brand's personality and drives real engagement.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Brand-Specific Content</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Platform Optimization</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Community Management</span>
                </div>
              </div>
              
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 shadow-2xl shadow-green-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                  💬 Request Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dominate Social Media?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 200+ gaming brands that trust us to build their social media presence and drive conversions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 shadow-2xl shadow-green-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                  📱 Start Your Social Domination
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <div className="text-sm text-muted-foreground flex items-center justify-center">
                🎯 Free strategy session • Content calendar included • Launch in 7 days
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMedia;