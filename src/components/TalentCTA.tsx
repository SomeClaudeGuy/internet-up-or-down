import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Trophy, DollarSign, Globe, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const TalentCTA = () => {
  const t = useTranslation();
  
  const benefits = [
    {
      icon: DollarSign,
      title: t.talentTopEarnings,
      description: t.talentTopEarningsDesc
    },
    {
      icon: Globe,
      title: t.talentGlobalReach,
      description: t.talentGlobalReachDesc
    },
    {
      icon: Trophy,
      title: t.talentPremiumBrands,
      description: t.talentPremiumBrandsDesc
    },
    {
      icon: Star,
      title: t.talentFullSupport,
      description: t.talentFullSupportDesc
    }
  ];

  return (
    <section id="talents" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.talentCtaTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.talentCtaSubtitle}
            </p>
            <div className="mt-4 text-lg font-semibold text-accent">
              {t.talentCtaBonus}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-card/30 rounded-2xl p-8 border border-border/50 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">{t.talentStatsActive}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100M+</div>
                <div className="text-sm text-muted-foreground">{t.talentStatsReach}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">{t.talentStatsPartners}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">{t.talentStatsSupport}</div>
              </div>
            </div>
          </div>

          {/* Regional Talent Showcase */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">{t.talentRegionsTitle}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[t.talentRegionLatam, t.talentRegionNorthAmerica, t.talentRegionApac, t.talentRegionEurope].map((region, index) => (
                <div 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl mb-2">{region.split(' ')[1]}</div>
                  <div className="font-semibold text-primary">{region.split(' ')[0]}</div>
                  <div className="text-sm text-muted-foreground mt-2">{t.talentRegionReady}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group text-lg px-10 py-6 bg-gradient-to-r from-accent to-primary shadow-2xl shadow-accent/25">
              <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                {t.talentApplyButton}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Requirements */}
          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              {t.talentRequirements}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentCTA;