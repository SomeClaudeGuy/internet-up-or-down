import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, DollarSign } from "lucide-react";

const SocialProof = () => {
  const proofPoints = [
    {
      metric: "5+",
      description: "Years Experience",
      icon: DollarSign,
      highlight: "Helping clients grow"
    },
    {
      metric: "200+",
      description: "Success Stories",
      icon: TrendingUp,
      highlight: "Strong ROI results"
    },
    {
      metric: "4.9★",
      description: "Client Rating",
      icon: Star,
      highlight: "98% retention rate"
    }
  ];

  const testimonials = [
    {
      quote: "Basher Agency took our casino from $100K to $2M monthly revenue in just 6 months.",
      author: "Marcus Chen",
      role: "CEO, LuxBet Casino",
      result: "+1900% Revenue Growth"
    },
    {
      quote: "As an influencer, I went from $5K to $85K/month with their premium brand partnerships.",
      author: "Sofia Rodriguez",
      role: "Gaming Influencer, 2.3M followers",
      result: "+1600% Income Increase"
    },
    {
      quote: "ROI was 450% in the first quarter. These guys know exactly what they're doing.",
      author: "David Thompson",
      role: "CMO, BetKing",
      result: "+450% ROI"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't take our word for it. Here's what our clients and partners say about working with us.
          </p>
        </div>

        {/* Proof Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {proofPoints.map((point, index) => (
            <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <point.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{point.metric}</div>
                <div className="text-lg font-semibold mb-2">{point.description}</div>
                <div className="text-sm text-muted-foreground">{point.highlight}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm font-semibold text-accent mt-2">{testimonial.result}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;