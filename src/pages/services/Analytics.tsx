import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  BarChart, TrendingUp, Eye, Target, Database, Zap, CheckCircle, 
  PieChart, LineChart, Activity, Users, Globe, Search 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Analytics = () => {
  const t = useTranslation();

  const analyticsServices = [
    {
      title: "Market Intelligence & Competitive Analysis",
      description: "Comprehensive market research and competitor benchmarking to understand your position in the gaming landscape.",
      icon: Search,
      capabilities: [
        "Market size and growth analysis",
        "Competitor performance tracking",
        "Trend identification and forecasting",
        "Regulatory impact assessment"
      ],
      tools: ["Data mining platforms", "Market research databases", "Competitive intelligence tools", "Trend analysis software"]
    },
    {
      title: "Performance Analytics & KPI Tracking",
      description: "Advanced analytics to track key performance indicators and measure the success of your marketing campaigns.",
      icon: BarChart,
      capabilities: [
        "Revenue attribution analysis",
        "Customer lifetime value tracking",
        "Campaign performance optimization",
        "ROI measurement and reporting"
      ],
      tools: ["Google Analytics", "Adobe Analytics", "Custom tracking solutions", "Business intelligence platforms"]
    },
    {
      title: "User Behavior Analytics",
      description: "Deep insights into user behavior patterns to optimize user experience and increase conversion rates.",
      icon: Activity,
      capabilities: [
        "User journey mapping",
        "Conversion funnel analysis",
        "Heatmap and session recordings",
        "A/B testing and optimization"
      ],
      tools: ["Hotjar", "Mixpanel", "Amplitude", "UserTesting platforms"]
    },
    {
      title: "Financial Analytics & Reporting",
      description: "Comprehensive financial analysis to track revenue, costs, and profitability across all channels.",
      icon: TrendingUp,
      capabilities: [
        "Revenue stream analysis",
        "Cost per acquisition tracking",
        "Profit margin optimization",
        "Budget allocation recommendations"
      ],
      tools: ["Financial modeling software", "Excel/Google Sheets", "Tableau", "Power BI"]
    }
  ];

  const analyticsProcess = [
    {
      step: "01",
      title: "Data Collection & Integration",
      description: "We gather data from multiple sources including your existing systems, third-party platforms, and market research databases to create a comprehensive data foundation.",
      icon: Database
    },
    {
      step: "02",
      title: "Analysis & Insights Generation",
      description: "Our team applies advanced analytical techniques to identify patterns, trends, and opportunities within your data.",
      icon: Search
    },
    {
      step: "03",
      title: "Reporting & Visualization",
      description: "We create clear, actionable reports and interactive dashboards that make complex data easy to understand and act upon.",
      icon: PieChart
    },
    {
      step: "04",
      title: "Strategic Recommendations",
      description: "Based on our analysis, we provide specific, actionable recommendations to improve performance and achieve your business objectives.",
      icon: Target
    }
  ];

  const keyMetrics = [
    { metric: "Revenue Attribution", description: "Track which channels drive the most valuable customers" },
    { metric: "Customer Lifetime Value", description: "Understand the long-term value of your user base" },
    { metric: "Conversion Rates", description: "Measure and optimize conversion across all touchpoints" },
    { metric: "Market Share", description: "Monitor your position relative to competitors" },
    { metric: "User Engagement", description: "Analyze how users interact with your platform" },
    { metric: "Cost Efficiency", description: "Optimize spend across marketing channels" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-8">
              <BarChart className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Analytics & Intelligence Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Data-Driven Intelligence
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Transform raw data into actionable insights with our comprehensive analytics services. 
              We help gaming and entertainment brands make informed decisions through advanced 
              market intelligence, performance tracking, and strategic analysis.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Key Metrics Tracked</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Data Accuracy</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Real-time Monitoring</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl font-bold text-primary mb-2">300%</div>
                <div className="text-sm text-muted-foreground">Avg. Performance Lift</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Analytics Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive analytics solutions that cover every aspect of your business, 
              from market intelligence to performance optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {analyticsServices.map((service, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {service.capabilities.map((capability, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                        Tools & Platforms
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Analytics Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to transforming your data into actionable insights that drive 
              business growth and competitive advantage.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {analyticsProcess.map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center relative">
                    <step.icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  {index < analyticsProcess.length - 1 && (
                    <div className="w-0.5 h-12 bg-border mx-auto mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Essential Business Metrics</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We track and analyze the metrics that matter most to your business success, 
              providing you with the insights needed to make informed decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="text-center p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{metric.metric}</h3>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Analytics Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our analytics expertise helps gaming and entertainment brands make data-driven decisions 
              that lead to measurable business improvements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Market Visibility</h3>
              <p className="text-sm text-muted-foreground">Gain complete visibility into market trends and competitor performance</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Performance Optimization</h3>
              <p className="text-sm text-muted-foreground">Identify opportunities to improve campaign performance and ROI</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategic Planning</h3>
              <p className="text-sm text-muted-foreground">Make informed strategic decisions based on data-driven insights</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Competitive Edge</h3>
              <p className="text-sm text-muted-foreground">Stay ahead of the competition with advanced market intelligence</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;