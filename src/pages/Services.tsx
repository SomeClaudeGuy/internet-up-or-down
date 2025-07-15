import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Megaphone, 
  BarChart, 
  Video,
  ArrowRight,
  Zap,
  Star,
  Building2,
  Database
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { useTranslation } from "@/hooks/useTranslation";

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
  
  const services = [
    {
      icon: Target,
      title: t.services.services.traffic.title,
      description: t.services.services.traffic.description,
      features: t.services.services.traffic.features,
      color: "from-blue-500 to-cyan-500",
      price: t.services.services.traffic.price
    },
    {
      icon: BarChart,
      title: t.services.services.analytics.title,
      description: t.services.services.analytics.description,
      features: t.services.services.analytics.features,
      color: "from-purple-500 to-pink-500",
      price: t.services.services.analytics.price
    },
    {
      icon: Users,
      title: t.services.services.social.title,
      description: t.services.services.social.description,
      features: t.services.services.social.features,
      color: "from-green-500 to-emerald-500",
      price: t.services.services.social.price
    },
    {
      icon: Megaphone,
      title: t.services.services.sponsorships.title,
      description: t.services.services.sponsorships.description,
      features: t.services.services.sponsorships.features,
      color: "from-orange-500 to-red-500",
      price: t.services.services.sponsorships.price
    },
    {
      icon: TrendingUp,
      title: t.services.services.mediaBuying.title,
      description: t.services.services.mediaBuying.description,
      features: t.services.services.mediaBuying.features,
      color: "from-indigo-500 to-purple-500",
      price: t.services.services.mediaBuying.price
    },
    {
      icon: Video,
      title: t.services.services.content.title,
      description: t.services.services.content.description,
      features: t.services.services.content.features,
      color: "from-pink-500 to-rose-500",
      price: t.services.services.content.price
    },
    {
      icon: Building2,
      title: t.services.services.businessConsulting.title,
      description: t.services.services.businessConsulting.description,
      features: t.services.services.businessConsulting.features,
      color: "from-slate-500 to-gray-500",
      price: t.services.services.businessConsulting.price
    },
    {
      icon: Database,
      title: t.services.services.crmManaged.title,
      description: t.services.services.crmManaged.description,
      features: t.services.services.crmManaged.features,
      color: "from-emerald-500 to-teal-500",
      price: t.services.services.crmManaged.price
    }
  ];

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t.services.ourServices}</span>
          </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span dangerouslySetInnerHTML={{ __html: t.services.title.replace('10X Your Results', '<span class="text-primary">10X Your Results</span>') }} />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              <span dangerouslySetInnerHTML={{ __html: t.services.subtitle.replace('$50M+', '<strong class="text-foreground">$50M+</strong>') }} />
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* First 6 services in 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 6).map((service, index) => (
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
                  
                  <div className="flex flex-wrap gap-2 justify-center flex-1">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto" asChild>
                    <Link to={getServiceUrl(index)}>
                      {t.services.learnMore}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Last 2 services centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {services.slice(6, 8).map((service, index) => (
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
                  
                  <div className="flex flex-wrap gap-2 justify-center flex-1">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto" asChild>
                    <Link to={getServiceUrl(index + 6)}>
                      {t.services.learnMore}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* B.Content CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold mb-6">{t.services.bContent.title}</h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t.services.bContent.description}
              </p>
              <Link to="/b-content">
                <Button size="lg" className="text-lg px-8 py-6">
                  {t.services.bContent.button}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

    </>
  );
};

export default Services;