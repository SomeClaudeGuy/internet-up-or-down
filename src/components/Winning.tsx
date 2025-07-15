import { Award, Star, Trophy, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Winning = () => {
  const award = {
    title: "Digital Marketing Agency of the Year",
    year: "2024",
    organization: "Global Marketing Awards",
    description: "Recognized for outstanding innovation and results in digital marketing"
  };

  const achievements = [
    {
      icon: Trophy,
      value: "300%",
      label: "Average ROI",
      color: "text-yellow-500"
    },
    {
      icon: Target,
      value: "$50M+",
      label: "Media Managed",
      color: "text-blue-500"
    },
    {
      icon: Star,
      value: "200+",
      label: "Active Talents",
      color: "text-purple-500"
    },
    {
      icon: Award,
      value: "15+",
      label: "Countries",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-500/30 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-500/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 backdrop-blur-md border border-yellow-500/20 px-6 py-3 rounded-full mb-8 shadow-lg">
            <Trophy className="w-5 h-5 text-yellow-500 animate-pulse" />
            <span className="text-sm font-semibold text-yellow-600 tracking-wide">#Winning</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
            Award-Winning <span className="text-primary">Digital Marketing</span> Agency
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Recognized globally for our innovative approach and exceptional results in the gaming and betting industry
          </p>
        </div>

        {/* Single Award Showcase */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-card/50 to-primary/5 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-yellow-600" />
              </div>
              <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary text-lg px-4 py-2">
                {award.year}
              </Badge>
              <h3 className="text-3xl font-bold mb-4">{award.title}</h3>
              <p className="text-lg text-primary font-medium mb-4">{award.organization}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {award.description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievement Stats */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 bg-background/50 rounded-full flex items-center justify-center ${achievement.color}`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold mb-1">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to work with an award-winning team that delivers results?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform duration-200">
              Start Your Winning Campaign
            </button>
            <button className="px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors duration-200">
              View Our Awards
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Winning;