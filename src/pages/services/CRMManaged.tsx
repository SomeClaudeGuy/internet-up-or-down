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
  MessageSquare,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Heart,
  Star,
  AlertCircle,
  FileText,
  Lightbulb
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CRMManaged = () => {
  const t = useTranslation();

  const painPoints = [
    {
      icon: AlertCircle,
      title: "Scattered Customer Data",
      description: "Information spread across emails, spreadsheets, and sticky notes"
    },
    {
      icon: Clock,
      title: "Manual Follow-ups",
      description: "Missing opportunities because tasks fall through the cracks"
    },
    {
      icon: FileText,
      title: "No Sales Pipeline Visibility",
      description: "Can't track deals or forecast revenue accurately"
    },
    {
      icon: Target,
      title: "Inconsistent Customer Experience",
      description: "Different team members provide different levels of service"
    }
  ];

  const solutions = [
    {
      icon: Database,
      title: "Centralized Customer Hub",
      description: "Every customer interaction, purchase history, and preference in one place",
      benefit: "360° customer view"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Smart automation that nurtures leads and follows up automatically",
      benefit: "Never miss an opportunity"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboard showing sales performance and customer insights",
      benefit: "Data-driven decisions"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless handoffs between sales, marketing, and support teams",
      benefit: "Consistent experience"
    }
  ];

  const services = [
    {
      icon: Settings,
      title: "CRM Strategy & Setup",
      description: "We design and implement a CRM system that fits your unique business model",
      features: ["Custom field configuration", "Workflow design", "Integration planning"]
    },
    {
      icon: Workflow,
      title: "Automation Implementation",
      description: "Smart automation that works 24/7 to nurture leads and retain customers",
      features: ["Lead scoring", "Email sequences", "Task automation"]
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous monitoring and improvement to maximize your CRM ROI",
      features: ["Analytics setup", "Performance monitoring", "Regular optimization"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "Successfully managed CRM implementations across various industries"
    },
    {
      icon: Heart,
      title: "Customer-Centric Approach",
      description: "We focus on improving your customer relationships, not just the technology"
    },
    {
      icon: Lightbulb,
      title: "Strategic Thinking",
      description: "We don't just set up systems; we design strategies that drive growth"
    },
    {
      icon: Clock,
      title: "Ongoing Support",
      description: "Dedicated support team to ensure your CRM continues to deliver results"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Problem-Focused */}
      <section className="pt-20 pb-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-slate-900/10 to-indigo-900/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-8 px-6 py-3 text-base font-medium bg-red-500/20 text-red-300 border-red-500/30">
              <AlertCircle className="w-5 h-5 mr-2" />
              Customer Management Crisis
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Is Your Business <span className="text-red-400">Losing Customers</span><br />
              Because of Poor CRM?
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stop letting valuable customers slip through the cracks. Our CRM management service transforms chaotic customer data into a growth engine.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-2xl shadow-blue-500/25" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  🚀 Fix My CRM Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                📊 See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gradient-to-b from-red-950/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
              Sound Familiar?
            </h2>
            <p className="text-xl text-muted-foreground">
              These CRM nightmares are costing you money every day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {painPoints.map((pain, index) => (
              <Card key={index} className="border-red-500/20 bg-red-950/10 hover:bg-red-950/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <pain.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-red-400">
                        {pain.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {pain.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-green-950/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-3 text-base font-medium bg-green-500/20 text-green-300 border-green-500/30">
              <CheckCircle className="w-5 h-5 mr-2" />
              The Solution
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Turn CRM Chaos Into <span className="text-green-400">Customer Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our managed CRM service transforms your customer management from a daily struggle into your competitive advantage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-green-500/20 bg-green-950/10 hover:bg-green-950/20 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                      <solution.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-green-400">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {solution.description}
                      </p>
                      <Badge variant="outline" className="border-green-500/30 text-green-300">
                        {solution.benefit}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Make It Happen
            </h2>
            <p className="text-xl text-muted-foreground">
              Three core services that transform your customer management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-blue-500/50 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-0.5 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Trust Us With Your CRM?
            </h2>
            <p className="text-xl text-muted-foreground">
              We're not just another tech company - we're your growth partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-purple-500/50 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                        <reason.icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-500 transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-indigo-600/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Customer Management?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stop losing customers to poor CRM. Start your transformation today.
            </p>
            
            <div className="bg-gradient-to-r from-blue-950/50 to-indigo-950/50 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                🎯 Free CRM Health Check
              </h3>
              <p className="text-gray-300 mb-6">
                We'll analyze your current customer management setup and show you exactly where you're losing money
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-2xl shadow-blue-500/25" asChild>
                  <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                    🚀 Get My Free CRM Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              ✅ No commitment required • ✅ Actionable insights • ✅ Custom recommendations
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRMManaged;