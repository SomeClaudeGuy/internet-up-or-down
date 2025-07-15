import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  TrendingUp, 
  Target, 
  Users, 
  Settings, 
  BarChart3, 
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Building2,
  PieChart,
  Handshake
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BusinessConsulting = () => {
  const t = useTranslation() as any;

  const services = [
    {
      icon: Target,
      title: t.businessConsultingService1Title,
      description: t.businessConsultingService1Desc
    },
    {
      icon: BarChart3,
      title: t.businessConsultingService2Title,
      description: t.businessConsultingService2Desc
    },
    {
      icon: TrendingUp,
      title: t.businessConsultingService3Title,
      description: t.businessConsultingService3Desc
    },
    {
      icon: Settings,
      title: t.businessConsultingService4Title,
      description: t.businessConsultingService4Desc
    },
    {
      icon: Users,
      title: t.businessConsultingService5Title,
      description: t.businessConsultingService5Desc
    },
    {
      icon: Lightbulb,
      title: t.businessConsultingService6Title,
      description: t.businessConsultingService6Desc
    }
  ];


  const consultationAreas = [
    { area: t.businessConsultingArea1, description: t.businessConsultingArea1Desc },
    { area: t.businessConsultingArea2, description: t.businessConsultingArea2Desc },
    { area: t.businessConsultingArea3, description: t.businessConsultingArea3Desc },
    { area: t.businessConsultingArea4, description: t.businessConsultingArea4Desc }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/20 to-purple-900/20"></div>
        
        {/* Business Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-1 h-full">
            {Array.from({ length: 144 }, (_, i) => (
              <div
                key={i}
                className="border border-blue-400/20 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            
            <Badge className="mb-8 px-6 py-3 text-base font-medium bg-blue-500/20 text-blue-300 border-blue-500/30">
              <Target className="w-5 h-5 mr-2" />
              {t.businessConsultingBadge}
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              {t.businessConsultingTitle}
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              {t.businessConsultingSubtitle}
            </p>

            {/* Consultation Areas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {consultationAreas.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-2">{item.area}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
              ))}
            </div>
            
            {/* Services Preview */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-6 backdrop-blur-sm border border-blue-500/30 mb-12">
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Target className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-300">Process Review</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                  <span className="text-purple-300">Benchmarking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="w-6 h-6 text-blue-400" />
                  <span className="text-blue-300">360° Assessment</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/25" asChild>
                 <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  {t.businessConsultingCta1}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                {t.businessConsultingCta2}
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              {t.businessConsultingDisclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.businessConsultingServicesTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.businessConsultingServicesSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-blue-500/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 flex-shrink-0">
                      <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.businessConsultingProcessTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.businessConsultingProcessSubtitle}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.businessConsultingProcess1Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.businessConsultingProcess1Desc}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.businessConsultingProcess2Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.businessConsultingProcess2Desc}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.businessConsultingProcess3Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.businessConsultingProcess3Desc}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.businessConsultingProcess4Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.businessConsultingProcess4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.businessConsultingFinalCtaTitle}</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t.businessConsultingFinalCtaDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  {t.businessConsultingFinalCtaButton}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <div className="text-sm text-muted-foreground flex items-center justify-center">
                {t.businessConsultingFinalCtaDisclaimer}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessConsulting;