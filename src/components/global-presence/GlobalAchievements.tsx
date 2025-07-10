import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Star, Target } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const GlobalAchievements = () => {
  const translations = useTranslation();

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-center mb-12">{translations.globalAchievementsTitle}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Award-Winning Agency - Featured Achievement */}
        <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 md:col-span-2">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Award-Winning Digital Marketing Agency</h3>
                <p className="text-primary font-semibold">Digital Marketing Excellence Award 2024</p>
              </div>
            </div>
            <p className="text-muted-foreground text-center leading-relaxed">
              Recognized as the leading digital marketing agency in the gaming and betting industry. 
              Our innovative campaigns and exceptional ROI have earned us industry-wide recognition.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
          <CardContent className="p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4">{translations.globalAchievement1Title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{translations.globalAchievement1Desc}</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Additional achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">{translations.globalAchievement2Title}</h3>
            <p className="text-muted-foreground text-center leading-relaxed">{translations.globalAchievement2Desc}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
          <CardContent className="p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Performance Excellence</h3>
            <p className="text-muted-foreground leading-relaxed">
              Consistently delivering 300%+ ROI across all campaigns with our data-driven approach and premium talent network.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GlobalAchievements;