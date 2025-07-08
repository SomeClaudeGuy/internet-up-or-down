import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      company: "Pinnacle",
      logo: "🎯",
      text: "Basher has been a close partner throughout these years in LATAM, thanks to his knowledge in eSports we were able to develop successful campaigns together delivering quality results.",
      rating: 5
    },
    {
      company: "BetBoom", 
      logo: "💥",
      text: "We've been working with Basher Agency for a whole year! They are highly skilled professionals in streamers, ambassadors, social media, and special projects for esports. Working together is very comfortable, so we highly recommend the agency as a reliable partner.",
      rating: 5
    },
    {
      company: "Leon",
      logo: "🦁", 
      text: "Working with Basher Agency for over a year in APAC, Australia, and New Zealand has been a game-changer. Their expertise in iGaming marketing, influencer partnerships, and high-quality traffic generation has delivered outstanding results. The team is proactive, data-driven, and truly understands the market. Basher is not just a partner—they are a key part of our success.",
      rating: 5
    },
    {
      company: "22Bet",
      logo: "🎲",
      text: "Working with the basher agency was always a pleasure, sometimes there were unpleasant situations that arose due to the nature of our work, however, all these situations were resolved by the basher agency with excellent quality and speed. I cannot say anything else but recommend them to anyone who is willing to do business with them.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who <span className="text-primary">Trusts</span> Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our partners about the results we've delivered together in the iGaming industry.
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
            <h3 className="text-2xl font-bold mb-4">Guaranteed Results</h3>
            <p className="text-muted-foreground">Our track record speaks for itself</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">20K+</div>
              <div className="text-sm text-muted-foreground">Monthly Registrations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">6K+</div>
              <div className="text-sm text-muted-foreground">Monthly FTDs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Real-time Optimization</div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Real-time optimization to maximize conversions and ROI</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Monthly reports and weekly strategy meetings</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Expertise in marketing, branding, and social media</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Local market support from industry experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;