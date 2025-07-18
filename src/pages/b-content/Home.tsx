import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Users, Award, TrendingUp } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const BContentHome = () => {
  const t = useTranslation();
  const services = [
    {
      title: t.bContentPRTitle,
      description: t.bContentPRDesc,
      features: [t.bContentPRFeature1, t.bContentPRFeature2, t.bContentPRFeature3, t.bContentPRFeature4]
    },
    {
      title: t.bContentMarketingTitle,
      description: t.bContentMarketingDesc,
      features: [t.bContentMarketingFeature1, t.bContentMarketingFeature2, t.bContentMarketingFeature3, t.bContentMarketingFeature4]
    },
    {
      title: t.bContentInfluencerTitle,
      description: t.bContentInfluencerDesc,
      features: [t.bContentInfluencerFeature1, t.bContentInfluencerFeature2, t.bContentInfluencerFeature3, t.bContentInfluencerFeature4]
    }
  ];

  const results = [
    { metric: "300%", label: t.bContentMetricTraffic },
    { metric: "50+", label: t.bContentMetricPlacements },
    { metric: "2M+", label: t.bContentMetricImpressions },
    { metric: "98%", label: t.bContentMetricRetention }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Content & PR Division</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.bContentHeroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t.bContentHeroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                {t.bContentGetStrategy}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                {t.bContentViewCases}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.bContentResultsTitle}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.bContentResultsSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                <div className="text-muted-foreground">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">{t.bContentServicesTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.bContentServicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl font-medium mb-6 italic">
                "{t.bContentTestimonialQuote}"
              </blockquote>
              <div className="text-primary font-semibold">{t.bContentTestimonialAuthor}</div>
              <div className="text-muted-foreground">{t.bContentTestimonialRole}</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.bContentCtaTitle}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t.bContentCtaSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                {t.bContentFreeAudit}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                {t.bContentScheduleConsult}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BContentHome;