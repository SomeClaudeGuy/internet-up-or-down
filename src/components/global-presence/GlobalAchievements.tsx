import { Card, CardContent } from "@/components/ui/card";
import { Calendar, TrendingUp, Globe, Users } from "lucide-react";

const GlobalAchievements = () => {
  const achievements = [
    { title: "Industry Events", desc: "Active at Sigma, ICE, iGB, SBC events", icon: Calendar },
    { title: "Market Leadership", desc: "First to identify emerging trends", icon: TrendingUp },
    { title: "Regulatory Expertise", desc: "Navigate complex compliance landscapes", icon: Globe },
    { title: "Cultural Intelligence", desc: "Deep understanding of local preferences", icon: Users },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Global Network?</h3>
          <div className="space-y-4">
            {achievements.slice(0, 2).map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground flex-shrink-0">
                  <achievement.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{achievement.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Competitive Advantages</h3>
          <div className="space-y-4">
            {achievements.slice(2, 4).map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground flex-shrink-0">
                  <achievement.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{achievement.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GlobalAchievements;