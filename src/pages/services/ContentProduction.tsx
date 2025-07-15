import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { Video, Camera, Mic, Edit, Play, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContentProduction = () => {
  const t = useTranslation();

  const features = [
    {
      icon: Video,
      title: "Video Production",
      description: "High-end video content creation from concept to final delivery for maximum brand impact"
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Complete event planning, production, and management for memorable brand experiences"
    },
    {
      icon: Camera,
      title: "Creative Content",
      description: "Innovative content creation that captures attention and drives engagement"
    },
    {
      icon: Edit,
      title: "Post-Production",
      description: "Professional editing, color grading, and post-production services"
    },
    {
      icon: Mic,
      title: "Audio Production",
      description: "High-quality audio recording, mixing, and sound design"
    },
    {
      icon: Play,
      title: "Live Streaming",
      description: "Professional live streaming production for events and campaigns"
    }
  ];

  const results = [
    { metric: "100M+", label: "Total Video Views Generated" },
    { metric: "500+", label: "Videos Produced" },
    { metric: "50+", label: "Events Managed" },
    { metric: "98%", label: "Client Satisfaction Rate" }
  ];


  const contentTypes = [
    { name: "Brand Videos", description: "High-end brand storytelling videos" },
    { name: "Product Demos", description: "Engaging product demonstration content" },
    { name: "Live Events", description: "Professional event coverage and streaming" },
    { name: "Social Content", description: "Platform-optimized social media content" },
    { name: "Commercials", description: "High-impact advertising commercials" },
    { name: "Documentaries", description: "In-depth documentary-style content" },
    { name: "Animation", description: "Custom 2D and 3D animation content" },
    { name: "Podcasts", description: "Professional podcast production" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Asymmetric Layout */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-pink-500/10 text-pink-500 border-pink-500/20">
                  <Video className="w-4 h-4 mr-2" />
                  Premium Content & Event Production
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="block text-foreground">Content That</span>
                  <span className="block bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                    Captivates & Converts
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8">
                  High-quality audiovisual content and event production services that create maximum brand impact. 
                  From viral videos to live events, we bring your vision to life.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 shadow-2xl shadow-pink-500/25" asChild>
                    <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                      🎬 Start Your Content Journey
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                    🎥 View Our Reel
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-4">Production Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Video Views</span>
                      <span className="text-lg font-bold text-pink-500">100M+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Videos Produced</span>
                      <span className="text-lg font-bold text-rose-500">500+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Events Managed</span>
                      <span className="text-lg font-bold text-pink-500">50+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Satisfaction Rate</span>
                      <span className="text-lg font-bold text-rose-500">98%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card border border-border/50 rounded-xl p-6">
                  <h4 className="font-semibold mb-3">Content Types</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Videos", "Events", "Podcasts", "Animation"].map((type) => (
                      <span key={type} className="px-3 py-1 bg-pink-500/10 text-pink-500 text-sm rounded-full">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Content We Create</h2>
            <p className="text-xl text-muted-foreground">Comprehensive content production across all formats and platforms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contentTypes.map((content, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-pink-500/50">
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-lg group-hover:text-pink-500 transition-colors">
                    {content.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm">
                    {content.description}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Content Performance</h2>
            <p className="text-xl text-muted-foreground">Creating content that resonates and drives results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-2">{result.metric}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Full-Service Production</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end content and event production from concept to delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-pink-500/50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 p-0.5">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-pink-500 transition-colors">
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
            <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Bespoke Content Production</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every brand has a unique story to tell. Let us create custom content production 
                solutions that perfectly capture your vision and engage your audience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-pink-500" />
                  <span className="text-sm">Custom Concepts</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-pink-500" />
                  <span className="text-sm">Professional Production</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-pink-500" />
                  <span className="text-sm">Multi-format Delivery</span>
                </div>
              </div>
              
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 shadow-2xl shadow-pink-500/25" asChild>
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
      <section className="py-20 bg-gradient-to-r from-pink-500/20 to-rose-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Exceptional Content?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your brand with high-impact content and events that capture attention and drive results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 shadow-2xl shadow-pink-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  🎬 Start Your Production
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <div className="text-sm text-muted-foreground flex items-center justify-center">
                🎥 Free creative consultation • Custom proposals • Production starts in 1 week
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentProduction;