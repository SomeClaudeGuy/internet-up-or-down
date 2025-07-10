import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Megaphone, 
  BarChart, 
  Video,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const t = useTranslation();
  
  const serviceItems = [
    {
      icon: Target,
      title: t.services.services.traffic.title,
      description: t.services.services.traffic.description,
      features: t.services.services.traffic.features,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart,
      title: t.services.services.analytics.title,
      description: t.services.services.analytics.description,
      features: t.services.services.analytics.features,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: t.services.services.social.title,
      description: t.services.services.social.description,
      features: t.services.services.social.features,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Megaphone,
      title: t.services.services.sponsorships.title,
      description: t.services.services.sponsorships.description,
      features: t.services.services.sponsorships.features,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: t.services.services.media.title,
      description: t.services.services.media.description,
      features: t.services.services.media.features,
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Video,
      title: t.services.services.content.title,
      description: t.services.services.content.description,
      features: t.services.services.content.features,
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.services.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${service.color} p-0.5`}>
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {t.services.learnMore}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">{t.services.ctaTitle}</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t.services.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="group text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent shadow-2xl shadow-primary/25">
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                  {t.services.ctaButton}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <div className="text-sm text-muted-foreground">
                {t.services.ctaUrgency}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;