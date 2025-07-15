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

  const packages = [
    {
      name: "Content Essentials",
      price: "$8,000/month",
      description: "Essential content creation for growing brands",
      features: [
        "4 Professional Videos per Month",
        "Basic Event Coverage",
        "Standard Post-Production",
        "Monthly Content Strategy",
        "Email Support"
      ]
    },
    {
      name: "Production Pro",
      price: "$20,000/month",
      description: "Complete content production solution",
      features: [
        "12 Premium Videos per Month",
        "Full Event Production",
        "Advanced Post-Production",
        "Custom Animation & Graphics",
        "Dedicated Production Team",
        "Weekly Strategy Sessions"
      ],
      popular: true
    },
    {
      name: "Enterprise Studio",
      price: "Custom Pricing",
      description: "Full-scale content studio for major operators",
      features: [
        "Unlimited Content Production",
        "Multi-Location Shoots",
        "Celebrity & Influencer Collaborations",
        "Live Event Broadcasting",
        "24/7 Production Support",
        "White-label Content Platform",
        "Global Production Network"
      ]
    }
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-pink-500/5 to-rose-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 text-sm font-medium">
              <Video className="w-4 h-4 mr-2" />
              Premium Content & Event Production
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Content That Captivates & Converts
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              High-quality audiovisual content and event production services that create maximum brand impact. 
              From viral videos to live events, we bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 shadow-2xl shadow-pink-500/25">
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
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

      {/* Packages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Production Packages</h2>
            <p className="text-xl text-muted-foreground">Professional content production solutions for every scale</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-pink-500 shadow-2xl shadow-pink-500/25 scale-105' : 'border-border/50'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-pink-500 mb-2">{pkg.price}</div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  <Button 
                    className={`w-full mt-6 ${pkg.popular ? 'bg-gradient-to-r from-pink-500 to-rose-500' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
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