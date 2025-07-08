import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Megaphone, 
  BarChart, 
  Video,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Traffic for Casino Operators",
      description: "High-quality traffic generation with proven conversion rates. Specialized in casino and betting platforms.",
      features: ["Quality traffic", "High conversion", "Global reach"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart,
      title: "Benchmarking & Analytics",
      description: "Comprehensive market analysis and platform benchmarking to optimize your competitive position.",
      features: ["Market analysis", "Competitor insights", "Performance metrics"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Full-scale social media strategies tailored for the iGaming industry across all major platforms.",
      features: ["Content strategy", "Community building", "Brand awareness"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Megaphone,
      title: "Sponsorships & Activations",
      description: "Strategic partnerships and brand activations that connect with your target audience effectively.",
      features: ["Event sponsorships", "Brand partnerships", "Audience engagement"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Media Buying & Marketing",
      description: "Performance-driven media buying strategies optimized for maximum ROI in the iGaming sector.",
      features: ["Media buying", "Performance optimization", "ROI focused"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Video,
      title: "Content & Event Production",
      description: "High-quality audiovisual content and event production services for maximum brand impact.",
      features: ["Video production", "Event management", "Creative content"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We <span className="text-primary">10X Your Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven system has helped <strong className="text-foreground">200+ clients</strong> grow their revenue. 
            Here's exactly how we'll scale your iGaming business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
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

        <div className="text-center mt-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">💰 Results-Driven Approach</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join <strong className="text-foreground">200+ operators</strong> who've seen strong ROI with our proven strategies. 
              Performance-based pricing available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="group text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent shadow-2xl shadow-primary/25">
                Get Your FREE Marketing Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="text-sm text-muted-foreground">
                ⏰ <strong>Schedule your consultation today</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;