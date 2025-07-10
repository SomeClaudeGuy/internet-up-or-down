import { useTranslation } from "@/hooks/useTranslation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Target } from "lucide-react";
import techWorldMapImage from "@/assets/tech-world-map.jpg";
import gamerPortraitImage from "@/assets/gamer-portrait.png";
import gamingEnvironmentImage from "@/assets/gaming-environment.png";
import analyticsImage from "@/assets/analytics-dashboard.png";

const WhoWeAre = () => {
  const t = useTranslation();

  const teamImages = [
    {
      image: gamerPortraitImage,
      name: "Alex Rodriguez",
      role: "CEO & Founder",
      description: "15+ years in digital marketing, former Twitch Gaming Director"
    },
    {
      image: gamingEnvironmentImage,
      name: "Sarah Chen",
      role: "Head of Strategy",
      description: "Ex-Google Ads specialist with $50M+ managed spend"
    },
    {
      image: analyticsImage,
      name: "Marcus Johnson",
      role: "Creative Director",
      description: "Award-winning content creator with 100M+ views generated"
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
            The Faces Behind <span className="text-primary">Basher</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Meet the award-winning team that's revolutionizing digital marketing for the gaming and betting industry
          </p>
        </div>

        {/* Team Carousel */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h3>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {teamImages.map((member, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <div className="relative mb-6">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary/20"
                          />
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                            <Badge variant="secondary" className="bg-primary text-primary-foreground">
                              {member.role}
                            </Badge>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
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

        {/* Our Story */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Our Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded in 2019, Basher has grown from a small team of passionate gamers and marketers into an award-winning digital marketing agency. 
                We specialize in connecting gaming and betting brands with their ideal audiences through authentic, performance-driven campaigns.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over $50M in managed media spend and partnerships with 200+ content creators worldwide, we've proven that authentic storytelling 
                and data-driven strategies create the most impactful results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;