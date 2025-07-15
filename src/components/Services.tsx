import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "react-router-dom";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Megaphone, 
  BarChart, 
  Video,
  ArrowRight,
  Building2,
  Database
} from "lucide-react";

const Services = () => {
  const t = useTranslation();

  const getServiceUrl = (index: number) => {
    const urls = [
      '/services/traffic-generation',
      '/services/analytics', 
      '/services/social-media',
      '/services/sponsorships',
      '/services/media-buying',
      '/services/content-production',
      '/services/business-consulting',
      '/services/crm-managed'
    ];
    return urls[index];
  };

  const serviceItems = [
    {
      icon: Target,
      title: t.servicesTrafficTitle,
      description: t.servicesTrafficDesc,
      features: [t.servicesTrafficFeature1, t.servicesTrafficFeature2, t.servicesTrafficFeature3],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart,
      title: t.servicesAnalyticsTitle,
      description: t.servicesAnalyticsDesc,
      features: [t.servicesAnalyticsFeature1, t.servicesAnalyticsFeature2, t.servicesAnalyticsFeature3],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: t.servicesSocialTitle,
      description: t.servicesSocialDesc,
      features: [t.servicesSocialFeature1, t.servicesSocialFeature2, t.servicesSocialFeature3],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Megaphone,
      title: t.servicesSponsorshipsTitle,
      description: t.servicesSponsorshipsDesc,
      features: [t.servicesSponsorshipsFeature1, t.servicesSponsorshipsFeature2, t.servicesSponsorshipsFeature3],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: t.servicesMediaTitle,
      description: t.servicesMediaDesc,
      features: [t.servicesMediaFeature1, t.servicesMediaFeature2, t.servicesMediaFeature3],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Video,
      title: t.servicesContentTitle,
      description: t.servicesContentDesc,
      features: [t.servicesContentFeature1, t.servicesContentFeature2, t.servicesContentFeature3],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Building2,
      title: t.services?.services?.businessConsulting?.title || "Business Consulting",
      description: t.services?.services?.businessConsulting?.description || "Strategic business consulting to optimize your operations",
      features: t.services?.services?.businessConsulting?.features || ["Process Review", "Benchmarking", "Strategic Planning"],
      color: "from-slate-500 to-gray-500"
    },
    {
      icon: Database,
      title: t.services?.services?.crmManaged?.title || "CRM Managed Services",
      description: t.services?.services?.crmManaged?.description || "Complete CRM management and optimization services",
      features: t.services?.services?.crmManaged?.features || ["CRM Setup", "Automation", "Analytics"],
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.servicesTitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* First 6 services in 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {serviceItems.slice(0, 6).map((service, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm flex flex-col h-full"
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
              <CardContent className="text-center space-y-4 flex-1 flex flex-col">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 justify-center items-start min-h-[80px]">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 whitespace-nowrap flex-shrink-0"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto" asChild>
                  <Link to={getServiceUrl(index)}>
                    {t.servicesLearnMore}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Last 2 services centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {serviceItems.slice(6, 8).map((service, index) => (
            <Card 
              key={index + 6} 
              className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm flex flex-col h-full"
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
              <CardContent className="text-center space-y-4 flex-1 flex flex-col">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 justify-center items-start min-h-[80px]">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 whitespace-nowrap flex-shrink-0"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto" asChild>
                  <Link to={getServiceUrl(index + 6)}>
                    {t.servicesLearnMore}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">{t.servicesCtaTitle}</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t.servicesCtaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="group text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent shadow-2xl shadow-primary/25">
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                  {t.servicesCtaButton}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <div className="text-sm text-muted-foreground">
                {t.servicesCtaUrgency}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;