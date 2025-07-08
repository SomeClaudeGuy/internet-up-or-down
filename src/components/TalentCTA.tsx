import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Trophy, DollarSign, Globe, ArrowRight } from "lucide-react";

const TalentCTA = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Top Earnings",
      description: "Competitive rates and performance bonuses"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Work with brands across 4 continents"
    },
    {
      icon: Trophy,
      title: "Premium Brands",
      description: "Partner with industry-leading operators"
    },
    {
      icon: Star,
      title: "Full Support",
      description: "Dedicated account management and resources"
    }
  ];

  return (
    <section id="talents" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Earn <span className="text-primary">Great Income</span> as Our Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              <strong className="text-foreground">200+ influencers</strong> already earning well with our exclusive iGaming partnerships. 
              Join our growing talent network.
            </p>
            <div className="mt-4 text-lg font-semibold text-accent">
              💰 Competitive rates and performance bonuses available
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-card/30 rounded-2xl p-8 border border-border/50 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Active Talents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100M+</div>
                <div className="text-sm text-muted-foreground">Monthly Reach</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Brand Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Regional Talent Showcase */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Talents Across All Regions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["LATAM 🌎", "North America 🇺🇸", "APAC 🌏", "Europe 🇪🇺"].map((region, index) => (
                <div 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl mb-2">{region.split(' ')[1]}</div>
                  <div className="font-semibold text-primary">{region.split(' ')[0]}</div>
                  <div className="text-sm text-muted-foreground mt-2">Elite talents ready to partner</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group text-lg px-10 py-6 bg-gradient-to-r from-accent to-primary shadow-2xl shadow-accent/25">
              💎 Apply to Elite Network (2 min)
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Requirements */}
          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              ⭐ Minimum 10K followers • 🎮 Gaming/Casino content focus • 📊 Consistent engagement rates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentCTA;