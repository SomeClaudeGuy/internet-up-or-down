import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Megaphone, 
  BarChart, 
  Video,
  ArrowRight,
  Zap,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Traffic for Casino Operators",
      description: "High-quality traffic generation with proven conversion rates. Specialized in casino and betting platforms.",
      features: ["Quality traffic", "High conversion", "Global reach"],
      color: "from-blue-500 to-cyan-500",
      price: "From $5,000/mo"
    },
    {
      icon: BarChart,
      title: "Benchmarking & Analytics",
      description: "Comprehensive market analysis and platform benchmarking to optimize your competitive position.",
      features: ["Market analysis", "Competitor insights", "Performance metrics"],
      color: "from-purple-500 to-pink-500",
      price: "From $3,000/mo"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Full-scale social media strategies tailored for the iGaming industry across all major platforms.",
      features: ["Content strategy", "Community building", "Brand awareness"],
      color: "from-green-500 to-emerald-500",
      price: "From $2,500/mo"
    },
    {
      icon: Megaphone,
      title: "Sponsorships & Activations",
      description: "Strategic partnerships and brand activations that connect with your target audience effectively.",
      features: ["Event sponsorships", "Brand partnerships", "Audience engagement"],
      color: "from-orange-500 to-red-500",
      price: "From $10,000/project"
    },
    {
      icon: TrendingUp,
      title: "Media Buying & Marketing",
      description: "Performance-driven media buying strategies optimized for maximum ROI in the iGaming sector.",
      features: ["Media buying", "Performance optimization", "ROI focused"],
      color: "from-indigo-500 to-purple-500",
      price: "From $15,000/mo"
    },
    {
      icon: Video,
      title: "Content & Event Production",
      description: "High-quality audiovisual content and event production services for maximum brand impact.",
      features: ["Video production", "Event management", "Creative content"],
      color: "from-pink-500 to-rose-500",
      price: "From $8,000/project"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How We <span className="text-primary">10X Your Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our proven system has generated <strong className="text-foreground">$50M+</strong> in revenue. 
              Here's exactly how we'll scale your iGaming business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm h-full"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${service.color} p-0.5`}>
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {service.price}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* B.Content CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Premium B.Content Services</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Professional PR and content creation services specifically designed for gaming and betting brands. 
                Get published on major media outlets or get your money back.
              </p>
              <Link to="/b-content">
                <Button size="lg" className="text-lg px-8 py-6">
                  Explore B.Content
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ROI Guarantee */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">💰 ROI Guarantee: 5X Your Investment or We Work for FREE</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join 500+ operators who've seen <strong className="text-foreground">300%+ ROI</strong> in 90 days. 
                If we don't deliver 5X returns, you don't pay a cent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="group text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent shadow-2xl shadow-primary/25">
                  Claim Your FREE $10K Marketing Plan
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="text-sm text-muted-foreground">
                  ⏰ <strong>Only 7 spots left this month</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;