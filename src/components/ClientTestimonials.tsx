import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const ClientTestimonials = () => {
  const t = useTranslation();
  
  const clients = [
    { name: "Stake", logo: "🎯" },
    { name: "BetBoom", logo: "💥" },
    { name: "Leon", logo: "🦁" },
    { name: "Pragmatic", logo: "⚡" },
    { name: "PIN-UP", logo: "📌" },
    { name: "Kick", logo: "⚽" },
    { name: "Betano", logo: "🎰" },
    { name: "Bet365", logo: "🎲" },
    { name: "22Bet", logo: "🏆" },
    { name: "Pinnacle", logo: "🎪" },
  ];

  const testimonials = [
    {
      company: "Pinnacle",
      logo: "🎯",
      text: t.testimonialsQuote1,
      rating: 5
    },
    {
      company: "BetBoom", 
      logo: "💥",
      text: t.testimonialsQuote2,
      rating: 5
    },
    {
      company: "Leon",
      logo: "🦁", 
      text: t.testimonialsQuote3,
      rating: 5
    },
    {
      company: "22Bet",
      logo: "🎲",
      text: "Amazing results with their strategies. Our conversions doubled!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Client Logos Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t.clientLogosTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            {t.clientLogosSubtitle}
          </p>

          {/* Scrolling Logos */}
          <div className="relative overflow-hidden mb-16">
            <div className="flex animate-marquee space-x-12">
              {/* First set */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center space-x-3 bg-card border border-border rounded-lg px-6 py-4 min-w-[160px] hover:scale-105 transition-transform"
                >
                  <span className="text-2xl">{client.logo}</span>
                  <span className="font-medium whitespace-nowrap">{client.name}</span>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center space-x-3 bg-card border border-border rounded-lg px-6 py-4 min-w-[160px] hover:scale-105 transition-transform"
                >
                  <span className="text-2xl">{client.logo}</span>
                  <span className="font-medium whitespace-nowrap">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.testimonialsTitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.testimonialsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
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

      </div>
    </section>
  );
};

export default ClientTestimonials;