import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, DollarSign } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const SocialProof = () => {
  const t = useTranslation();
  
  const proofPoints = [
    {
      metric: "5+",
      description: t.socialProofExperienceLabel,
      icon: DollarSign,
      highlight: t.socialProofExperienceHighlight
    },
    {
      metric: "200+",
      description: t.socialProofStoriesLabel,
      icon: TrendingUp,
      highlight: t.socialProofStoriesHighlight
    },
    {
      metric: "4.9★",
      description: t.socialProofRatingLabel,
      icon: Star,
      highlight: t.socialProofRatingHighlight
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.socialProofTitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.socialProofSubtitle}
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
          {[
            { quote: t.testimonialsQuote1, author: t.testimonialsAuthor1, role: t.testimonialsRole1, result: t.testimonialsResult1 },
            { quote: t.testimonialsQuote2, author: t.testimonialsAuthor2, role: t.testimonialsRole2, result: t.testimonialsResult2 },
            { quote: t.testimonialsQuote3, author: t.testimonialsAuthor3, role: t.testimonialsRole3, result: t.testimonialsResult3 }
          ].map((testimonial, index) => (
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