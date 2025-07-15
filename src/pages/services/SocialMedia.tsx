import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  Users, Heart, MessageCircle, Share2, TrendingUp, Zap, ArrowRight, CheckCircle, 
  Play, Camera, Video, Mic, Star, ThumbsUp, Eye, Send, Bookmark, MoreHorizontal,
  Instagram, Facebook, Twitter, Youtube, Twitch, UserPlus, Hash, AtSign
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SocialMedia = () => {
  const t = useTranslation();

  const socialPlatforms = [
    {
      name: "Instagram",
      icon: Instagram,
      color: "from-pink-500 via-purple-500 to-indigo-500",
      description: "Visual storytelling & influencer partnerships",
      engagement: "4.2M",
      growth: "+23%",
      speciality: "Stories & Reels"
    },
    {
      name: "TikTok",
      icon: Video,
      color: "from-red-500 via-pink-500 to-purple-500",
      description: "Viral content & trend participation",
      engagement: "8.7M",
      growth: "+67%",
      speciality: "Viral Videos"
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "from-blue-400 to-blue-600",
      description: "Real-time engagement & community building",
      engagement: "2.1M",
      growth: "+31%",
      speciality: "Live Updates"
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "from-red-500 to-red-700",
      description: "Long-form content & tutorials",
      engagement: "1.8M",
      growth: "+45%",
      speciality: "Video Content"
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "from-blue-500 to-blue-700",
      description: "Community groups & targeted advertising",
      engagement: "3.2M",
      growth: "+18%",
      speciality: "Groups & Ads"
    },
    {
      name: "Twitch",
      icon: Twitch,
      color: "from-purple-500 to-purple-700",
      description: "Live streaming & gaming community",
      engagement: "890K",
      growth: "+89%",
      speciality: "Live Streaming"
    }
  ];

  const contentTypes = [
    {
      title: "Viral Gaming Moments",
      description: "Capture and amplify those epic gaming moments that get shared millions of times",
      icon: Zap,
      engagement: "12M views",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500"
    },
    {
      title: "Behind-the-Scenes Content",
      description: "Show the human side of your brand with exclusive behind-the-scenes content",
      icon: Camera,
      engagement: "2.3M views",
      color: "bg-gradient-to-r from-purple-400 to-pink-500"
    },
    {
      title: "User-Generated Content",
      description: "Amplify your community's voice with authentic user-generated content campaigns",
      icon: Users,
      engagement: "5.8M views",
      color: "bg-gradient-to-r from-green-400 to-blue-500"
    },
    {
      title: "Live Streaming Events",
      description: "Real-time engagement through live tournaments, Q&As, and interactive sessions",
      icon: Play,
      engagement: "1.9M views",
      color: "bg-gradient-to-r from-red-400 to-pink-500"
    }
  ];

  const engagementMetrics = [
    { metric: "847%", label: "Engagement Rate Increase", icon: Heart },
    { metric: "23M+", label: "Monthly Reach", icon: Eye },
    { metric: "2.3M", label: "Community Size", icon: Users },
    { metric: "92%", label: "Conversion Rate", icon: TrendingUp }
  ];

  const socialFeatures = [
    {
      title: "Content Calendar Management",
      description: "Strategic planning and scheduling across all platforms",
      icon: Hash,
      benefits: ["Strategic post timing", "Cross-platform coordination", "Trend integration", "Performance optimization"]
    },
    {
      title: "Community Management",
      description: "24/7 engagement and relationship building",
      icon: MessageCircle,
      benefits: ["Real-time responses", "Crisis management", "Brand voice consistency", "Customer support"]
    },
    {
      title: "Influencer Partnerships",
      description: "Collaborate with top gaming influencers",
      icon: Star,
      benefits: ["Influencer sourcing", "Campaign management", "Performance tracking", "ROI optimization"]
    },
    {
      title: "Content Creation",
      description: "Professional content production and design",
      icon: Video,
      benefits: ["Video production", "Graphic design", "Copywriting", "Interactive content"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Social Media Feed Style */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-blue-500/5"></div>
        
        {/* Floating Social Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 text-pink-500/20 animate-bounce">
            <Heart className="w-8 h-8" />
          </div>
          <div className="absolute top-32 right-32 text-blue-500/20 animate-bounce delay-300">
            <ThumbsUp className="w-6 h-6" />
          </div>
          <div className="absolute bottom-32 left-32 text-purple-500/20 animate-bounce delay-700">
            <Share2 className="w-10 h-10" />
          </div>
          <div className="absolute top-1/2 right-1/4 text-green-500/20 animate-bounce delay-1000">
            <MessageCircle className="w-7 h-7" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-pink-500/20">
                <Users className="w-5 h-5 text-pink-500 mr-2" />
                <span className="text-sm font-medium text-pink-500">Social Media Mastery</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                <span className="block text-foreground">Social Media</span>
                <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  That Goes Viral
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your social presence into a conversion machine with content that captivates, 
                engages, and drives real business results across all major platforms.
              </p>
            </div>

            {/* Social Media Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {socialPlatforms.map((platform, index) => (
                <Card key={index} className="group relative overflow-hidden hover:scale-105 transition-all duration-500 border-0 shadow-xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-90`}></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  <CardHeader className="relative z-10 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <platform.icon className="w-8 h-8" />
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{platform.growth}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">{platform.name}</CardTitle>
                    <CardDescription className="text-white/90 text-sm">{platform.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">{platform.engagement}</div>
                        <div className="text-xs text-white/80">Monthly Reach</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold">{platform.speciality}</div>
                        <div className="text-xs text-white/80">Focus Area</div>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Social Media Interaction Icons */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Share2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Bookmark className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section - Masonry Style */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Content That</span>
              <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Breaks the Internet
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We create scroll-stopping content that doesn't just get views—it gets results. 
              Every post is strategically designed to drive engagement and conversions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {contentTypes.map((content, index) => (
              <Card key={index} className="group relative overflow-hidden hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-pink-500/20">
                <div className={`absolute top-0 left-0 w-full h-2 ${content.color}`}></div>
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <content.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {content.engagement}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {content.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {content.description}
                  </CardDescription>
                  
                  {/* Social Media Engagement Simulation */}
                  <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>1.2K</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4 text-blue-500" />
                        <span>89</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 className="w-4 h-4 text-green-500" />
                        <span>234</span>
                      </div>
                    </div>
                    <MoreHorizontal className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Metrics Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Engagement
              </span>
              <span className="block text-foreground">That Converts</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real metrics from real campaigns. We don't just build followers—we build communities that drive business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {engagementMetrics.map((metric, index) => (
              <Card key={index} className="group text-center p-8 hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-primary/20 hover:shadow-2xl">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {metric.metric}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Complete Social</span>
              <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Management Suite
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of your social media presence 
              with precision and creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {socialFeatures.map((feature, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-purple-500/20">
                <CardHeader>
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-purple-500 transition-colors">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Go
              <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Viral?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the brands that are dominating social media and converting followers into customers. 
              Let's build your viral social presence together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-2xl hover:scale-105 transition-all duration-300" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  <Send className="mr-2 w-5 h-5" />
                  Launch Your Viral Campaign
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-purple-500/20 hover:border-purple-500/50">
                <Play className="mr-2 w-5 h-5" />
                View Success Stories
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Free content audit
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Custom strategy blueprint
              <span className="mx-4">•</span>
              <CheckCircle className="w-4 h-4 text-green-500 inline mr-2" />
              Launch within 7 days
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMedia;