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
  Lightbulb,
  ArrowDown,
  RefreshCw,
  Shuffle,
  Grid3x3,
  Building2
} from "lucide-react";
import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CRMManaged = () => {
  const t = useTranslation();

  const painPoints = [
    {
      icon: AlertCircle,
      title: "Data Scattered Everywhere",
      description: "Customer information lost in emails, spreadsheets, and sticky notes"
    },
    {
      icon: Clock,
      title: "Manual Everything",
      description: "Endless follow-ups, data entry, and missed opportunities"
    },
    {
      icon: FileText,
      title: "No Clear Pipeline",
      description: "Can't track deals, forecast revenue, or measure performance"
    },
    {
      icon: Target,
      title: "Inconsistent Experience",
      description: "Customers get different treatment from different team members"
    }
  ];

  const solutions = [
    {
      icon: Database,
      title: "Unified Customer Hub",
      description: "All customer data centralized and accessible in one intelligent system",
      benefit: "Complete customer view"
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Intelligent workflows that nurture leads and follow up automatically",
      benefit: "Never miss opportunities"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "AI-powered insights that forecast trends and optimize performance",
      benefit: "Data-driven growth"
    },
    {
      icon: Users,
      title: "Seamless Collaboration",
      description: "Perfect handoffs between sales, marketing, and support teams",
      benefit: "Consistent excellence"
    }
  ];

  const transformation = [
    {
      step: "1",
      title: "Audit & Strategy",
      description: "We analyze your current setup and design a custom CRM strategy",
      icon: Target
    },
    {
      step: "2",
      title: "Implementation",
      description: "Expert setup of your CRM system with all integrations and workflows",
      icon: Settings
    },
    {
      step: "3",
      title: "Training & Launch",
      description: "Complete team training and smooth transition to your new system",
      icon: Users
    },
    {
      step: "4",
      title: "Optimization",
      description: "Continuous monitoring and improvement for maximum ROI",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-slate-900/10 to-indigo-900/10"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-8 px-6 py-3 text-base font-medium bg-red-500/20 text-red-300 border-red-500/30 animate-pulse">
              <AlertCircle className="w-5 h-5 mr-2" />
              CRM Crisis Alert
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Turn Your CRM From <span className="text-red-400">Chaos</span><br />
              Into a <span className="text-green-400">Growth Engine</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stop losing customers to poor data management. Our CRM experts transform scattered information into organized, automated customer success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-2xl shadow-blue-500/25 hover:scale-105 transition-all" asChild>
                <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                  🚀 Transform My CRM
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Transformation Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Watch the Transformation
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how we turn CRM chaos into organized, automated success
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Before: Chaos */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl border border-red-500/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10"></div>
                    <div className="relative z-10">
                      <div className="grid grid-cols-3 gap-2 p-4">
                        {Array.from({ length: 9 }, (_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-red-500/40 rounded animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-2">BEFORE: Chaos</h3>
                <p className="text-gray-400">Scattered data, manual processes, missed opportunities</p>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center items-center">
                <div className="relative">
                  <ArrowRight className="w-16 h-16 text-blue-500 animate-pulse" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-blue-400 font-bold text-sm whitespace-nowrap">
                    WE TRANSFORM
                  </div>
                </div>
              </div>
              
              {/* After: Organized */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"></div>
                    <div className="relative z-10">
                      <div className="grid grid-cols-3 gap-2 p-4">
                        {Array.from({ length: 9 }, (_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-green-500/60 rounded animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">AFTER: Organized</h3>
                <p className="text-gray-400">Centralized data, automated workflows, customer success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gradient-to-b from-red-950/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
              Does This Sound Like Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              These CRM nightmares are costing you customers and revenue
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {painPoints.map((pain, index) => (
              <Card key={index} className="border-red-500/20 bg-red-950/10 hover:bg-red-950/20 transition-all duration-300 hover:scale-105">
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
              Here's How We Make CRM <span className="text-green-400">Work For You</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your customer management from daily struggle to competitive advantage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-green-500/20 bg-green-950/10 hover:bg-green-950/20 transition-all duration-300 group hover:scale-105">
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

      {/* Transformation Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our 4-Step Transformation Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From chaos to customer success in 4 proven steps
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transformation.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-blue-500/50 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg group-hover:scale-110 transition-transform">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                      <step.icon className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-indigo-600/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your CRM?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stop losing customers to poor data management. Start winning with organized, automated CRM.
            </p>
            
            <div className="bg-gradient-to-r from-blue-950/50 to-indigo-950/50 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30 mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
                <h3 className="text-2xl font-bold text-blue-400">
                  Free CRM Transformation Analysis
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Get a personalized report showing exactly how we'll transform your CRM chaos into customer success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-2xl shadow-blue-500/25 hover:scale-105 transition-all" asChild>
                  <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer" className="flex items-center whitespace-nowrap">
                    🚀 Get My Free Analysis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No commitment</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Actionable insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Custom roadmap</span>
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