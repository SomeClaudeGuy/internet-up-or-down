import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, Users, Search, Filter } from "lucide-react";

const WorkWithUsPositions = () => {
  const positions = [
    {
      title: "Senior Performance Marketing Manager",
      location: "Remote / Miami",
      type: "Full-time",
      department: "Marketing",
      salary: "$120k - $180k",
      description: "Lead high-budget campaigns for top-tier casino and betting brands. Drive 8-figure revenue growth through data-driven strategies.",
      requirements: ["5+ years in performance marketing", "Experience with gambling/betting verticals", "Proven track record with $1M+ budgets", "Google Ads & Facebook Ads expertise", "Data analysis and optimization skills"]
    },
    {
      title: "Creative Director - Gaming Content",
      location: "Remote / London",
      type: "Full-time", 
      department: "Creative",
      salary: "$100k - $150k",
      description: "Shape the visual identity of leading gaming brands. Create content that converts and builds lasting brand loyalty.",
      requirements: ["Portfolio of gaming/betting creative work", "Leadership experience managing creative teams", "Understanding of compliance requirements", "Video production experience", "Brand strategy expertise"]
    },
    {
      title: "Business Development Manager",
      location: "Remote / Global",
      type: "Full-time",
      department: "Sales",
      salary: "$80k - $120k + Commission",
      description: "Build relationships with casino operators and gaming influencers. Expand our global footprint in key markets.",
      requirements: ["Network in gaming industry", "B2B sales experience", "Multilingual preferred", "CRM management", "Contract negotiation skills"]
    },
    {
      title: "Data Analyst - Gaming Insights",
      location: "Remote",
      type: "Full-time",
      department: "Analytics",
      salary: "$70k - $110k",
      description: "Turn gaming data into actionable insights. Help optimize campaigns that generate millions in revenue.",
      requirements: ["SQL & Python expertise", "Gaming industry experience", "Statistical analysis background", "Tableau/PowerBI skills", "A/B testing experience"]
    },
    {
      title: "Content Marketing Specialist",
      location: "Remote / Barcelona",
      type: "Full-time",
      department: "Marketing",
      salary: "$50k - $80k",
      description: "Create compelling content that drives engagement and conversions for gaming brands.",
      requirements: ["3+ years content marketing", "Gaming industry knowledge", "SEO optimization skills", "Social media expertise", "Video editing capabilities"]
    },
    {
      title: "Influencer Partnership Manager",
      location: "Remote / Los Angeles",
      type: "Full-time",
      department: "Partnerships",
      salary: "$60k - $90k",
      description: "Manage relationships with top gaming influencers and content creators.",
      requirements: ["Influencer marketing experience", "Gaming/streaming knowledge", "Negotiation skills", "Campaign management", "Performance tracking"]
    },
    {
      title: "Junior Performance Marketer",
      location: "Remote",
      type: "Full-time",
      department: "Marketing",
      salary: "$40k - $60k",
      description: "Support senior marketers in campaign execution and optimization.",
      requirements: ["1-2 years marketing experience", "Google Ads certification", "Analytics background", "Eagerness to learn", "Detail-oriented mindset"]
    },
    {
      title: "Graphic Designer - Gaming",
      location: "Remote / New York",
      type: "Contract",
      department: "Creative",
      salary: "$35 - $65/hour",
      description: "Create stunning visuals for gaming and betting brand campaigns.",
      requirements: ["Gaming design portfolio", "Adobe Creative Suite mastery", "Motion graphics skills", "Brand guidelines adherence", "Fast turnaround capability"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Open Positions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Role
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join the team behind $50M+ in client revenue. Explore opportunities 
              to shape the future of gaming and betting marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search positions..." 
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="creative">Creative</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="analytics">Analytics</SelectItem>
                  <SelectItem value="partnerships">Partnerships</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Positions List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-6 max-w-4xl mx-auto">
            {positions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
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
                      <div className="text-lg font-semibold text-primary">{position.salary}</div>
                    </div>
                    <Button className="lg:self-start">Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{position.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Requirements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-muted-foreground text-sm flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* No Perfect Match CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Don't See the Perfect Role?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're always looking for exceptional talent. Submit a general application 
                and we'll reach out when the right opportunity comes up.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Submit General Application
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Join Our Talent Network
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default WorkWithUsPositions;