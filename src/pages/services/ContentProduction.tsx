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
      
      {/* Hero Section - Video Player Style */}
      <section className="pt-20 pb-20 relative overflow-hidden bg-black text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-pink-900/20 to-rose-900/20"></div>
        
        {/* Video Frame Effect */}
        <div className="absolute inset-8 border-4 border-pink-500/30 rounded-3xl transform hover:scale-[1.02] transition-all duration-1000">
          <div className="absolute top-4 left-4 flex space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse delay-300"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse delay-700"></div>
          </div>
          
          <div className="absolute top-4 right-4 text-pink-500 text-sm font-mono animate-pulse">
            REC ●
          </div>
          
          {/* Film grain effect */}
          <div className="absolute inset-4 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Play Button Icon */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/50 group cursor-pointer">
                <Play className="w-16 h-16 ml-2 group-hover:animate-pulse" fill="white" />
              </div>
            </div>
            
            <Badge className="mb-8 px-6 py-3 text-base font-medium bg-pink-500/20 text-pink-300 border-pink-500/30">
              <Video className="w-5 h-5 mr-2" />
              Content Production Studio
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="block text-white mb-4">LIGHTS</span>
              <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-4">CAMERA</span>
              <span className="block text-white">ACTION!</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              {(t as any).contentProductionDesc || "Professional content production that stops the scroll and drives action. From viral videos to live events, we create content that matters."}
            </p>

            {/* Production Counter */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">100M+</div>
                <div className="text-sm text-gray-400">Video Views</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-400 mb-2">500+</div>
                <div className="text-sm text-gray-400">Videos Produced</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Events Managed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-400 mb-2">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
            
            {/* Control Bar */}
            <div className="bg-gradient-to-r from-pink-900/50 to-rose-900/50 rounded-2xl p-6 backdrop-blur-sm border border-pink-500/30 mb-12">
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Camera className="w-6 h-6 text-pink-400" />
                  <span className="text-pink-300">Video Production</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-rose-400" />
                  <span className="text-rose-300">Event Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mic className="w-6 h-6 text-pink-400" />
                  <span className="text-pink-300">Audio Production</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 shadow-2xl shadow-pink-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  🎬 Start Production
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-pink-500/30 text-pink-300 hover:bg-pink-500/10">
                🎥 Watch Our Reel
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              🎥 Free creative consultation • Custom proposals • Production starts in 1 week
            </p>
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