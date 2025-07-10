import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, TrendingUp, Users, Award } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const SuccessStories = () => {
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.successStoriesTitle}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.successStoriesSubtitle}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">500%</div>
                <div className="text-muted-foreground">{t.successStatsROI}</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">{t.successStatsTalents}</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">{t.successStatsCampaigns}</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">{t.successStatsSatisfaction}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Talent Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t.successEliteTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Talent 1 */}
            <Card className="overflow-hidden group hover-scale">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop" 
                  alt="Gaming Content Creator"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t.successCategoryGaming}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t.talentSarahName}</h3>
                <p className="text-muted-foreground mb-3">{t.talentSarahDesc}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{t.successMetricViewers}</span>
                    <span className="font-medium">{t.talentSarahViewers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.successMetricConversion}</span>
                    <span className="font-medium text-primary">{t.talentSarahConversion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.successMetricROI}</span>
                    <span className="font-medium text-primary">{t.talentSarahROI}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Talent 2 */}
            <Card className="overflow-hidden group hover-scale">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop" 
                  alt="Casino Content Creator"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t.successCategoryCasino}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t.talentMarcusName}</h3>
                <p className="text-muted-foreground mb-3">{t.talentMarcusDesc}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{t.successMetricMonthlyViews}</span>
                    <span className="font-medium">{t.talentMarcusViews}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.successMetricConversion}</span>
                    <span className="font-medium text-primary">{t.talentMarcusConversion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.successMetricROI}</span>
                    <span className="font-medium text-primary">{t.talentMarcusROI}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Talent 3 */}
            <Card className="overflow-hidden group hover-scale">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" 
                  alt="Sports Betting Content Creator"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t.successCategorySports}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t.talentEmmaName}</h3>
                <p className="text-muted-foreground mb-3">{t.talentEmmaDesc}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{t.successMetricEngagement}</span>
                    <span className="font-medium">{t.talentEmmaEngagement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.successMetricConversion}</span>
                    <span className="font-medium text-primary">{t.talentEmmaConversion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.successMetricROI}</span>
                    <span className="font-medium text-primary">{t.talentEmmaROI}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Talent 4 */}
            <Card className="overflow-hidden group hover-scale">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop" 
                  alt="Poker Content Creator"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t.successCategoryPoker}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t.talentJakeName}</h3>
                <p className="text-muted-foreground mb-3">{t.talentJakeDesc}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{t.successMetricPeakViewers}</span>
                    <span className="font-medium">{t.talentJakePeak}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.successMetricConversion}</span>
                    <span className="font-medium text-primary">{t.talentJakeConversion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.successMetricROI}</span>
                    <span className="font-medium text-primary">{t.talentJakeROI}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Talent 5 */}
            <Card className="overflow-hidden group hover-scale">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" 
                  alt="Tech Content Creator"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t.successCategoryTech}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t.talentAlexName}</h3>
                <p className="text-muted-foreground mb-3">{t.talentAlexDesc}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{t.successMetricAvgViews}</span>
                    <span className="font-medium">{t.talentAlexViews}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.successMetricConversion}</span>
                    <span className="font-medium text-primary">{t.talentAlexConversion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.successMetricROI}</span>
                    <span className="font-medium text-primary">{t.talentAlexROI}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Talent 6 */}
            <Card className="overflow-hidden group hover-scale">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop" 
                  alt="Lifestyle Content Creator"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {t.successCategoryLifestyle}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t.talentMiaName}</h3>
                <p className="text-muted-foreground mb-3">{t.talentMiaDesc}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{t.successMetricStoryViews}</span>
                    <span className="font-medium">{t.talentMiaStory}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.successMetricConversion}</span>
                    <span className="font-medium text-primary">{t.talentMiaConversion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.successMetricROI}</span>
                    <span className="font-medium text-primary">{t.talentMiaROI}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;