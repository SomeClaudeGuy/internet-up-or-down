import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ExternalLink, Award, Users, Target } from "lucide-react";

const BContentCaseStudies = () => {
  const caseStudies = [
    {
      client: "GameTech Pro",
      industry: "Online Casino",
      challenge: "Struggling with brand authority and organic traffic in a competitive market",
      solution: "Comprehensive PR strategy targeting tier-1 publications and thought leadership positioning",
      results: [
        { metric: "400%", label: "Organic Traffic Increase" },
        { metric: "15", label: "Tier-1 Media Placements" },
        { metric: "2.3M", label: "Brand Impressions" },
        { metric: "85%", label: "Lead Quality Improvement" }
      ],
      image: "/placeholder.svg",
      testimonial: "B.Content transformed our brand presence. We went from unknown to industry leaders in just 6 months.",
      author: "Sarah Chen, CMO"
    },
    {
      client: "BetMax Sports",
      industry: "Sports Betting",
      challenge: "Low engagement and difficulty reaching target audience of sports enthusiasts",
      solution: "Influencer partnerships with top sports content creators and strategic content marketing",
      results: [
        { metric: "650%", label: "Social Engagement Increase" },
        { metric: "45", label: "Influencer Partnerships" },
        { metric: "5.7M", label: "Video Views" },
        { metric: "320%", label: "User Acquisition Growth" }
      ],
      image: "/placeholder.svg",
      testimonial: "The influencer campaigns drove unprecedented engagement and brought in our highest-value customers.",
      author: "Marcus Rodriguez, Head of Marketing"
    },
    {
      client: "Royal Poker Network",
      industry: "Online Poker",
      challenge: "Regulatory compliance concerns while maintaining marketing effectiveness",
      solution: "Compliant content strategy focusing on skill development and responsible gaming",
      results: [
        { metric: "280%", label: "Qualified Lead Increase" },
        { metric: "95%", label: "Compliance Score" },
        { metric: "150%", label: "Player Retention" },
        { metric: "60%", label: "Cost Per Acquisition Reduction" }
      ],
      image: "/placeholder.svg",
      testimonial: "B.Content helped us navigate compliance while achieving our best marketing results ever.",
      author: "Elena Vasquez, VP Marketing"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Success Stories</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Real results from real clients. See how B.Content has helped gaming and betting 
              brands achieve breakthrough growth through strategic content and PR.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <h2 className="text-3xl font-bold">{study.client}</h2>
                      <Badge variant="outline">{study.industry}</Badge>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-red-500">Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-blue-500">Solution</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-green-500">Results</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="text-center p-4 bg-muted/30 rounded-lg">
                              <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                              <div className="text-sm text-muted-foreground">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Results & Testimonial Side */}
                  <div className="bg-muted/30 p-12 flex flex-col justify-center">
                    <blockquote className="text-xl font-medium mb-6 italic">
                      "{study.testimonial}"
                    </blockquote>
                    <div className="text-primary font-semibold mb-2">{study.author}</div>
                    <div className="text-muted-foreground mb-6">{study.client}</div>
                    
                    <Button className="w-fit">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Full Case Study
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Combined Results Across All Clients</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strategic approach to content marketing and PR consistently delivers 
              measurable results for gaming and betting brands.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Tier-1 Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25M+</div>
              <div className="text-muted-foreground">Brand Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join the gaming and betting brands that trust B.Content to deliver breakthrough results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start Your Success Story
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                Get Free Strategy Session
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BContentCaseStudies;