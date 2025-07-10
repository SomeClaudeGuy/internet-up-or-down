import { Card, CardContent } from "@/components/ui/card";
import { Calendar, TrendingUp, Globe, Users } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const GlobalAchievements = () => {
  const translations = useTranslation();

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-center mb-12">{translations.globalAchievementsTitle}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">{translations.globalAchievement1Title}</h3>
            <p className="text-muted-foreground text-center leading-relaxed">{translations.globalAchievement1Desc}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">{translations.globalAchievement2Title}</h3>
            <p className="text-muted-foreground text-center leading-relaxed">{translations.globalAchievement2Desc}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GlobalAchievements;