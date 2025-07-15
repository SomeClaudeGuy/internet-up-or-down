import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  Users, 
  Database, 
  BarChart3, 
  Settings, 
  Target, 
  Phone,
  ArrowRight,
  CheckCircle,
  Workflow,
  Mail,
  Calendar,
  MessageSquare
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CRMManaged = () => {
  const t = useTranslation();

  const services = [
    {
      icon: Database,
      title: "CRM Setup & Configuration",
      description: "Complete CRM system setup, customization, and configuration tailored to your business needs"
    },
    {
      icon: Users,
      title: "Lead Management",
      description: "Comprehensive lead tracking, scoring, and nurturing systems to maximize conversion rates"
    },
    {
      icon: Workflow,
      title: "Sales Pipeline Automation",
      description: "Automated workflows and processes to streamline your sales operations and improve efficiency"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Advanced reporting and analytics to track performance, identify trends, and optimize results"
    },
    {
      icon: Mail,
      title: "Email Marketing Integration",
      description: "Seamless email marketing automation integrated with your CRM for personalized campaigns"
    },
    {
      icon: Phone,
      title: "Customer Support Systems",
      description: "Integrated customer support and ticketing systems for exceptional customer service"
    }
  ];

  const keyFeatures = [
    { title: "Custom Configuration", description: "Tailored to your business processes" },
    { title: "Full Integration", description: "Seamless connection with existing tools" },
    { title: "24/7 Support", description: "Round-the-clock monitoring and assistance" },
    { title: "Team Training", description: "Comprehensive user training and documentation" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 relative overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900/20 to-teal-900/20"></div>
        
        {/* CRM Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-2 h-full">
            {Array.from({ length: 64 }, (_, i) => (
              <div
                key={i}
                className="border border-emerald-400/20 rounded animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-8 px-6 py-3 text-base font-medium bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
              <Settings className="w-5 h-5 mr-2" />
              CRM Managed Services
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="block text-white mb-4">STREAMLINE</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">YOUR</span>
              <span className="block text-white">CRM</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Complete CRM management services that streamline your customer relationships, 
              automate sales processes, and optimize your business operations with expert support.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-bold text-emerald-400 mb-2">{feature.title}</div>
                  <div className="text-sm text-gray-400">{feature.description}</div>
                </div>
              ))}
            </div>
            
            {/* Services Preview */}
            <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 rounded-2xl p-6 backdrop-blur-sm border border-emerald-500/30 mb-12">
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Database className="w-6 h-6 text-emerald-400" />
                  <span className="text-emerald-300">CRM Setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-teal-400" />
                  <span className="text-teal-300">Lead Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Workflow className="w-6 h-6 text-emerald-400" />
                  <span className="text-emerald-300">Automation</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 shadow-2xl shadow-emerald-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  🚀 Start CRM Management
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10">
                📊 Learn More
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              💼 Free CRM audit • Custom implementation • Ongoing support
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete CRM Management Solutions</h2>
            <p className="text-xl text-muted-foreground">End-to-end CRM services to optimize your customer relationships</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 border-border/50 hover:border-emerald-500/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 p-0.5 flex-shrink-0">
                      <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our CRM Management Process</h2>
            <p className="text-xl text-muted-foreground">A proven approach to CRM success</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Complete analysis of your current systems and business requirements
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  Custom CRM setup, configuration, and integration with your existing tools
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Training</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive team training and documentation for smooth adoption
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing monitoring, optimization, and support to ensure peak performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500/20 to-teal-500/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your CRM?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our experts handle your CRM management while you focus on growing your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 shadow-2xl shadow-emerald-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  🚀 Start Your CRM Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <div className="text-sm text-muted-foreground flex items-center justify-center">
                💼 Free CRM audit • Custom implementation • Ongoing support
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRMManaged;