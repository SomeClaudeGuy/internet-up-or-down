import { Card, CardContent } from "@/components/ui/card";
import { Globe, Building, Clock, Users } from "lucide-react";

const GlobalStats = () => {
  const stats = [
    { icon: Globe, value: "4", label: "Continents", desc: "Global footprint", pulse: true },
    { icon: Building, value: "12", label: "Offices", desc: "Strategic locations", pulse: false },
    { icon: Clock, value: "24/7", label: "Operations", desc: "Round the clock", pulse: true },
    { icon: Users, value: "85+", label: "Team Members", desc: "Multicultural experts", pulse: false },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
      {stats.map((stat, index) => (
        <Card key={index} className="group text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
          <CardContent className="pt-6">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors ${stat.pulse ? 'animate-pulse' : ''}`}>
              <stat.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="font-semibold mb-1 group-hover:text-primary transition-colors">{stat.label}</div>
            <div className="text-sm text-muted-foreground">{stat.desc}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GlobalStats;