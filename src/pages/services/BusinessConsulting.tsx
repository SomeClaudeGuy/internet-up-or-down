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
  const t = useTranslation();

  const services = [
    {
      icon: Target,
      title: "Business Process Review",
      description: "Comprehensive analysis of your current business processes to identify inefficiencies and optimization opportunities"
    },
    {
      icon: BarChart3,
      title: "Performance Benchmarking",
      description: "Compare your business performance against industry standards and best practices to identify improvement areas"
    },
    {
      icon: TrendingUp,
      title: "Strategic Planning",
      description: "Develop comprehensive strategic plans that align with your business objectives and market opportunities"
    },
    {
      icon: Settings,
      title: "Operational Excellence",
      description: "Streamline operations and implement best practices to enhance efficiency and reduce costs"
    },
    {
      icon: Users,
      title: "Organizational Assessment",
      description: "Evaluate team structure, culture, and capabilities to optimize human resources and leadership"
    },
    {
      icon: Lightbulb,
      title: "Innovation Framework",
      description: "Establish systems and processes to drive continuous innovation and competitive advantage"
    }
  ];

  const industries = [
    "Technology & Software",
    "Financial Services",
    "Healthcare & Biotech",
    "Manufacturing",
    "Retail & E-commerce",
    "Professional Services",
    "Real Estate",
    "Gaming & Entertainment"
  ];

  const consultationAreas = [
    { area: "Process Review", description: "Comprehensive analysis of current operations" },
    { area: "Benchmarking", description: "Industry standards and best practices comparison" },
    { area: "Strategic Planning", description: "Custom roadmaps for business transformation" },
    { area: "360° Assessment", description: "Complete evaluation of all business aspects" }
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
            {/* Business Icon */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/50 group cursor-pointer">
                <Building2 className="w-16 h-16 group-hover:animate-pulse" />
              </div>
            </div>
            
            <Badge className="mb-8 px-6 py-3 text-base font-medium bg-blue-500/20 text-blue-300 border-blue-500/30">
              <Target className="w-5 h-5 mr-2" />
              Full-Suite Business Consulting
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="block text-white mb-4">TRANSFORM</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">YOUR</span>
              <span className="block text-white">BUSINESS</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              360° business consultation that reviews, benchmarks, and optimizes your critical business processes. 
              We provide comprehensive analysis and strategic guidance to help you make informed decisions and achieve sustainable growth.
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
                  🚀 Start 360° Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                📊 Learn About Our Process
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              💼 Free business assessment • Custom process review • Strategic implementation roadmap
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">360° Business Consultation Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive review and optimization of your critical business processes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-blue-500/50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Expertise</h2>
            <p className="text-xl text-muted-foreground">Deep sector knowledge across multiple industries</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-blue-500/50">
                <CardContent className="p-6 text-center">
                  <div className="text-sm font-medium group-hover:text-blue-500 transition-colors">
                    {industry}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground">A structured approach to business transformation</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive analysis of your current state, challenges, and opportunities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  Custom roadmap development with clear objectives and measurable outcomes
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on execution support with your team to ensure successful delivery
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous monitoring and refinement to maximize results and ROI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Consultation Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Custom Business Strategy</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every business is unique. Let us develop a tailored consulting approach 
                that addresses your specific challenges and accelerates your growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">Strategic Assessment</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">Custom Implementation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">Ongoing Support</span>
                </div>
              </div>
              
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  💬 Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Partner with experts who understand your industry and can deliver measurable results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  🚀 Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <div className="text-sm text-muted-foreground flex items-center justify-center">
                💼 Free strategic consultation • Custom roadmaps • Implementation support
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