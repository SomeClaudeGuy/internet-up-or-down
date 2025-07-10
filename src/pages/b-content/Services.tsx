import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Award, Target, Zap, Users } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const BContentServices = () => {
  const t = useTranslation();
  const serviceCategories = [
    {
      title: t.bContentCategoryStrategy,
      icon: Target,
      services: [
        { name: t.bContentBlogService, price: t.bContentBlogPrice, features: ["SEO-optimized articles", "Industry research", "Content calendar", "Performance tracking"] },
        { name: t.bContentVideoService, price: t.bContentVideoPrice, features: ["Script writing", "Professional production", "Post-production", "Multi-platform optimization"] },
        { name: t.bContentSocialService, price: t.bContentSocialPrice, features: ["Platform-specific content", "Community management", "Engagement strategy", "Analytics reporting"] }
      ]
    },
    {
      title: t.bContentCategoryPR,
      icon: Award,
      services: [
        { name: t.bContentTierService, price: t.bContentTierPrice, features: ["Forbes, TechCrunch, Bloomberg", "Press release distribution", "Media relationship management", "Crisis communication"] },
        { name: t.bContentLeadershipService, price: t.bContentLeadershipPrice, features: ["Executive positioning", "Speaking opportunities", "Industry awards", "Expert commentary"] },
        { name: t.bContentBrandingService, price: t.bContentBrandingPrice, features: ["Brand narrative development", "Competitive analysis", "Market positioning", "Messaging framework"] }
      ]
    },
    {
      title: t.bContentCategoryInfluencer,
      icon: Users,
      services: [
        { name: t.bContentGamingInfluencerService, price: t.bContentGamingInfluencerPrice, features: ["Tier 1 gaming influencers", "Campaign management", "Performance tracking", "Compliance management"] },
        { name: t.bContentBettingService, price: t.bContentBettingPrice, features: ["Licensed partnerships", "Responsible gambling focus", "Multi-platform campaigns", "ROI optimization"] },
        { name: t.bContentMicroService, price: t.bContentMicroPrice, features: ["Niche audience targeting", "Authentic partnerships", "Cost-effective reach", "Community building"] }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">B.Content Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.bContentServicesHeroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t.bContentServicesHeroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              <div className="text-center mb-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-2xl mb-2">{service.name}</CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {service.price}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full">{t.bContentGetStarted}</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">{t.bContentCustomSolutionTitle}</h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t.bContentCustomSolutionDesc}
              </p>
              <Button size="lg" className="text-lg px-8 py-6">
                {t.bContentStrategyCall}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default BContentServices;