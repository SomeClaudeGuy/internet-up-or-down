import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/hooks/useTranslation";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Zap, Heart, Globe } from "lucide-react";

const WorkWithUsHome = () => {
  const t = useTranslation();
  const positions = [
    {
      title: "Senior Performance Marketing Manager",
      location: "Remote / Miami",
      type: "Full-time",
      department: "Marketing",
      description: "Lead high-budget campaigns for top-tier casino and betting brands. Drive 8-figure revenue growth through data-driven strategies.",
      requirements: ["5+ years in performance marketing", "Experience with gambling/betting verticals", "Proven track record with $1M+ budgets"]
    },
    {
      title: "Creative Director - Gaming Content",
      location: "Remote / London",
      type: "Full-time", 
      department: "Creative",
      description: "Shape the visual identity of leading gaming brands. Create content that converts and builds lasting brand loyalty.",
      requirements: ["Portfolio of gaming/betting creative work", "Leadership experience", "Understanding of compliance requirements"]
    },
    {
      title: "Business Development Manager",
      location: "Remote / Global",
      type: "Full-time",
      department: "Sales",
      description: "Build relationships with casino operators and gaming influencers. Expand our global footprint in key markets.",
      requirements: ["Network in gaming industry", "B2B sales experience", "Multilingual preferred"]
    },
    {
      title: "Data Analyst - Gaming Insights",
      location: "Remote",
      type: "Full-time",
      department: "Analytics",
      description: "Turn gaming data into actionable insights. Help optimize campaigns that generate millions in revenue.",
      requirements: ["SQL & Python expertise", "Gaming industry experience", "Statistical analysis background"]
    }
  ];

  const benefits = [
    { icon: Globe, title: "Global Remote Work", description: "Work from anywhere in the world" },
    { icon: Zap, title: "High-Impact Projects", description: "$50M+ in revenue generated for clients" },
    { icon: Users, title: "Elite Team", description: "Work alongside industry leaders" },
    { icon: Heart, title: "Comprehensive Benefits", description: "Health, dental, vision, and more" }
  ];

  const perks = [
    "Competitive salary + performance bonuses",
    "Unlimited PTO policy",
    "Latest tech equipment provided",
    "Annual team retreats in exotic locations",
    "Professional development budget",
    "Stock options for senior roles"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Join the Elite Team</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.workWithUsHeroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t.workWithUsHeroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Submit General Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Top Talent Chooses Basher</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another marketing agency. We're the team that gaming giants trust 
              with their most important campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Featured Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              Ready to make an impact? Here are some of our current openings.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {positions.slice(0, 2).map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {position.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {position.type}
                        </Badge>
                        <Badge variant="secondary">{position.department}</Badge>
                      </div>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Benefits & Perks</h2>
              <p className="text-xl text-muted-foreground">
                We invest in our people because exceptional talent deserves exceptional treatment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-lg">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Shape the Future of Gaming Marketing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't see the perfect role? We're always looking for exceptional talent. 
              Send us your resume and let's talk.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Submit General Application
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                Join Our Talent Network
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkWithUsHome;