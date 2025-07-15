import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  Target, Users, TrendingUp, Globe, Zap, Shield, ArrowRight, CheckCircle, 
  PlayCircle, Star, Trophy, DollarSign, Clock, Rocket, MousePointer 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TrafficGeneration = () => {
  const t = useTranslation();

  const trafficSources = [
    {
      name: "Social Media Traffic",
      description: "Facebook, Instagram, TikTok, Twitter",
      quality: "Premium",
      volume: "50M+ monthly users",
      conversion: "12-18%"
    },
    {
      name: "Search Engine Traffic", 
      description: "Google Ads, Bing, Yahoo",
      quality: "Ultra High",
      volume: "30M+ searches",
      conversion: "15-25%"
    },
    {
      name: "Native Advertising",
      description: "Taboola, Outbrain, Revcontent",
      quality: "High",
      volume: "40M+ impressions",
      conversion: "10-15%"
    },
    {
      name: "Push Notifications",
      description: "Mobile & Desktop push campaigns",
      quality: "Premium",
      volume: "25M+ subscribers", 
      conversion: "8-12%"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Laser-Targeted Traffic",
      description: "Advanced AI targeting delivers players who actually convert, not just clicks",
      highlight: "98% quality score"
    },
    {
      icon: Zap,
      title: "Instant Scale",
      description: "Scale from 100 to 10,000 new players per day within 48 hours",
      highlight: "0-100 in 48hrs"
    },
    {
      icon: DollarSign,
      title: "Guaranteed ROI",
      description: "We guarantee 300%+ ROI or you don't pay. Risk-free traffic generation",
      highlight: "300%+ ROI guaranteed"
    },
    {
      icon: Shield,
      title: "Fraud-Free Traffic",
      description: "Military-grade fraud detection ensures every click is from a real player",
      highlight: "0% fraud rate"
    },
    {
      icon: Clock,
      title: "24/7 Optimization", 
      description: "AI constantly optimizes campaigns while you sleep for maximum performance",
      highlight: "AI-powered optimization"
    },
    {
      icon: Trophy,
      title: "Industry Leaders",
      description: "Trusted by 500+ top casino operators worldwide for premium traffic",
      highlight: "500+ operators trust us"
    }
  ];

  const testimonials = [
    {
      name: "Marcus Rodriguez",
      company: "VegasCasino Pro",
      quote: "2,500 new players in the first month. ROI of 450%. Simply incredible.",
      result: "+450% ROI"
    },
    {
      name: "Sarah Chen", 
      company: "Royal Gaming",
      quote: "Best traffic quality we've ever seen. 85% of players made deposits.",
      result: "85% FTD rate"
    },
    {
      name: "David Thompson",
      company: "EliteBet Casino", 
      quote: "Scaled from 50 to 5,000 players per day in just 2 weeks.",
      result: "10,000% growth"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - High-Converting Sales Page */}
      <section className="pt-20 pb-16 relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 text-white min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        {/* Traffic Flow Animation */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-blue-400 rounded-full animate-ping`}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Urgent Banner */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-red-500/20 border border-red-500/50 rounded-full px-6 py-2 mb-6">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-red-300 font-semibold text-sm">LIMITED TIME: 50% OFF SETUP FEES</span>
                <div className="w-2 h-2 bg-red-400 rounded-full ml-3 animate-pulse"></div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="block text-white">GET</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  10,000 PLAYERS
                </span>
                <span className="block text-white">IN 30 DAYS</span>
              </h1>
              
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-2xl inline-block mb-8 font-bold text-xl transform rotate-2 shadow-2xl">
                🎯 GUARANTEED OR MONEY BACK
              </div>
              
              <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                The only traffic generation service that <strong className="text-white">guarantees 300%+ ROI</strong> or you don't pay a penny. 
                Used by 500+ top casino operators worldwide.
              </p>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white ml-2">4.9/5 from 500+ operators</span>
                </div>
                <div className="text-gray-300">|</div>
                <div className="text-white">🏆 #1 Traffic Provider 2024</div>
                <div className="text-gray-300">|</div>
                <div className="text-white">💰 $50M+ in client revenue generated</div>
              </div>
            </div>

            {/* Results Dashboard */}
            <div className="bg-black/50 rounded-3xl p-8 border border-blue-500/30 backdrop-blur-sm mb-16">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">LIVE RESULTS DASHBOARD</h3>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-mono">UPDATING EVERY 60 SECONDS</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gradient-to-b from-blue-600/30 to-blue-800/30 rounded-xl border border-blue-500/30">
                  <div className="text-3xl font-black text-blue-400 mb-1">847,293</div>
                  <div className="text-blue-300 text-sm">Players Delivered Today</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-b from-green-600/30 to-green-800/30 rounded-xl border border-green-500/30">
                  <div className="text-3xl font-black text-green-400 mb-1">$2.4M</div>
                  <div className="text-green-300 text-sm">Revenue Generated Today</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-b from-purple-600/30 to-purple-800/30 rounded-xl border border-purple-500/30">
                  <div className="text-3xl font-black text-purple-400 mb-1">18.7%</div>
                  <div className="text-purple-300 text-sm">Average FTD Rate</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-b from-orange-600/30 to-orange-800/30 rounded-xl border border-orange-500/30">
                  <div className="text-3xl font-black text-orange-400 mb-1">542%</div>
                  <div className="text-orange-300 text-sm">Average Client ROI</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Button size="lg" className="text-xl px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-500 shadow-2xl shadow-green-500/50 font-bold transform hover:scale-105 transition-all duration-300" asChild>
                  <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                    🚀 GET 10,000 PLAYERS NOW
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="text-xl px-12 py-6 border-2 border-blue-500/50 text-blue-300 hover:bg-blue-500/10 font-bold">
                  <PlayCircle className="mr-3 w-6 h-6" />
                  Watch Success Stories
                </Button>
              </div>
              
              <div className="text-yellow-400 text-lg font-bold">
                ⚡ Setup in 24 hours • 💰 ROI guaranteed • 🛡️ Risk-free trial
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traffic Sources Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Traffic Sources That Convert</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just send traffic. We send <strong>converting players</strong> from the world's highest-quality sources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {trafficSources.map((source, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-500 border-2 border-border/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                      {source.name}
                    </CardTitle>
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20 font-bold">
                      {source.quality}
                    </Badge>
                  </div>
                  <CardDescription className="text-base text-muted-foreground">
                    {source.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-bold text-blue-500">{source.volume}</div>
                      <div className="text-sm text-muted-foreground">Volume</div>
                    </div>
                    <div className="text-center p-3 bg-green-500/10 rounded-lg">
                      <div className="text-lg font-bold text-green-500">{source.conversion}</div>
                      <div className="text-sm text-muted-foreground">FTD Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Casino Operators Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another traffic provider. We're your growth partner with a proven track record.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-500 border-2 border-border/50 hover:border-primary/50 hover:shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-primary/10 to-transparent w-20 h-20"></div>
                <CardHeader className="text-center relative">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary to-accent p-0.5 group-hover:rotate-12 transition-all duration-500">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-primary group-hover:animate-pulse" />
                    </div>
                  </div>
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 font-bold">
                    {benefit.highlight}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Results From Real Operators</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it. Here's what our clients are saying:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-500 border-2 border-border/50 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/20 relative">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 font-bold">
                    {testimonial.result}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic text-foreground">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Ready to 10X Your Player Base?
            </h2>
            <p className="text-2xl mb-8 opacity-90">
              Join 500+ operators already scaling with guaranteed traffic that converts
            </p>
            
            {/* Urgency Timer */}
            <div className="bg-red-500/20 border border-red-400/50 rounded-2xl p-6 mb-8 inline-block">
              <div className="text-yellow-300 font-bold text-lg mb-2">⏰ LIMITED TIME OFFER EXPIRES IN:</div>
              <div className="text-3xl font-black text-white">47 HOURS : 23 MINUTES : 12 SECONDS</div>
              <div className="text-red-300 font-semibold">50% OFF setup fees + FREE fraud protection</div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button size="lg" className="text-2xl px-16 py-8 bg-gradient-to-r from-green-500 to-emerald-500 shadow-2xl shadow-green-500/50 font-black transform hover:scale-110 transition-all duration-300 animate-pulse" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  🎯 CLAIM YOUR 10,000 PLAYERS
                  <Rocket className="ml-3 w-8 h-8" />
                </a>
              </Button>
            </div>
            
            <div className="text-yellow-300 text-xl font-bold">
              ✅ 300% ROI Guaranteed ✅ 0% Fraud Rate ✅ 24hr Setup ✅ Risk-Free Trial
            </div>
            
            <div className="mt-8 text-lg opacity-75">
              Still not convinced? Call us now: <strong className="text-white">+1-800-TRAFFIC</strong>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrafficGeneration;