import { useTranslation } from "@/hooks/useTranslation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Target } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import techWorldMapImage from "@/assets/tech-world-map.jpg";
import gamerPortraitImage from "@/assets/gamer-portrait.png";
import gamingEnvironmentImage from "@/assets/gaming-environment.png";
import analyticsImage from "@/assets/analytics-dashboard.png";

const WhoWeAre = () => {
  const t = useTranslation();

  const storySlides = [
    {
      type: "founder",
      image: gamerPortraitImage,
      title: "The Beginning",
      content: "Founded in 2019 by Alex Rodriguez, former Twitch Gaming Director with 15+ years in digital marketing.",
      stats: "15+ Years Experience"
    },
    {
      type: "growth",
      image: gamingEnvironmentImage,
      title: "Rapid Growth",
      content: "Our team expanded globally, recruiting top talent from Google, Facebook, and leading gaming companies.",
      stats: "200+ Team Members"
    },
    {
      type: "success",
      image: analyticsImage,
      title: "Award-Winning Results",
      content: "Recognized as the Digital Marketing Agency of the Year 2024, managing $50M+ in media spend.",
      stats: "Award-Winning Agency"
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: "200+ Active Talents",
      description: "Creators from 15+ countries"
    },
    {
      icon: Award,
      title: "Award-Winning Agency",
      description: "Digital Marketing Excellence 2024"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "100M+ combined audience"
    },
    {
      icon: Target,
      title: "Performance Focused",
      description: "Average 300% ROI for clients"
    }
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Enhanced Background Layer */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15"
          style={{ backgroundImage: `url(${techWorldMapImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5" />
      </div>
      
      {/* Floating Network Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-3 h-3 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-[15%] w-4 h-4 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-[20%] w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-[25%] w-3 h-3 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-md border border-primary/20 px-6 py-3 rounded-full mb-8 shadow-lg">
            <Users className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary tracking-wide">Who We Are</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
            Meet <span className="text-primary">Basher</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The award-winning team revolutionizing digital marketing for the gaming and betting industry
          </p>
        </div>

        {/* Interactive Story Slider */}
        <div className="max-w-6xl mx-auto mb-20">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6 text-center">Our Story</h3>
              
              <div className="max-w-4xl mx-auto">
                <Carousel 
                  className="w-full" 
                  plugins={[
                    Autoplay({
                      delay: 4000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {storySlides.map((slide, index) => (
                      <CarouselItem key={index}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                          <div className="relative">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-full h-64 md:h-80 object-cover rounded-lg border-2 border-primary/20"
                            />
                            <div className="absolute bottom-4 left-4">
                              <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                                {slide.stats}
                              </Badge>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-2xl font-bold text-primary">{slide.title}</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              {slide.content}
                            </p>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <span>Chapter {index + 1} of {storySlides.length}</span>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we continue to push boundaries in digital marketing, delivering award-winning campaigns 
                  that drive real results for our clients worldwide.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;