import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Testimonials = () => {
  const t = useTranslation();
  
  const testimonials = [
    {
      company: "Pinnacle",
      logo: "🎯",
      text: t.testimonials.companies[0].text,
      rating: 5
    },
    {
      company: "BetBoom", 
      logo: "💥",
      text: t.testimonials.companies[1].text,
      rating: 5
    },
    {
      company: "Leon",
      logo: "🦁", 
      text: t.testimonials.companies[2].text,
      rating: 5
    },
    {
      company: "22Bet",
      logo: "🎲",
      text: t.testimonials.companies[3].text,
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="text-3xl">{testimonial.logo}</div>
                  <h3 className="text-xl font-bold">{testimonial.company}</h3>
                </div>
                <div className="flex justify-center space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground italic text-center leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">{t.testimonials.guaranteedResults}</h3>
            <p className="text-muted-foreground">{t.testimonials.trackRecord}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">20K+</div>
              <div className="text-sm text-muted-foreground">{t.testimonials.stats.registrations}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">6K+</div>
              <div className="text-sm text-muted-foreground">{t.testimonials.stats.ftds}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">{t.testimonials.stats.satisfaction}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">{t.testimonials.stats.optimization}</div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>{t.testimonials.features[0]}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>{t.testimonials.features[1]}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>{t.testimonials.features[2]}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>{t.testimonials.features[3]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;