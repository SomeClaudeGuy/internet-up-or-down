import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Zap, Heart, Users, Plane, Coffee, Laptop, Trophy, DollarSign, Calendar, BookOpen, Gift } from "lucide-react";

const WorkWithUsBenefits = () => {
  const benefitCategories = [
    {
      title: "Compensation & Rewards",
      icon: DollarSign,
      benefits: [
        { name: "Competitive Base Salary", description: "Market-leading compensation packages based on experience and performance" },
        { name: "Performance Bonuses", description: "Quarterly bonuses tied to individual and company performance metrics" },
        { name: "Stock Options", description: "Equity participation for senior roles and long-term team members" },
        { name: "Annual Salary Reviews", description: "Regular compensation reviews to ensure market competitiveness" }
      ]
    },
    {
      title: "Work-Life Balance",
      icon: Calendar,
      benefits: [
        { name: "Unlimited PTO", description: "Take the time you need to recharge with our flexible time-off policy" },
        { name: "Remote-First Culture", description: "Work from anywhere in the world with flexible hours" },
        { name: "4-Day Work Week Option", description: "Compressed schedule available for eligible roles" },
        { name: "Mental Health Support", description: "Access to counseling services and mental health resources" }
      ]
    },
    {
      title: "Professional Development",
      icon: BookOpen,
      benefits: [
        { name: "Learning Budget", description: "$3,000 annual budget for courses, conferences, and certifications" },
        { name: "Conference Attendance", description: "Sponsored attendance at industry events and networking opportunities" },
        { name: "Mentorship Program", description: "Pair with industry leaders for career guidance and growth" },
        { name: "Internal Training", description: "Regular workshops and training sessions with expert speakers" }
      ]
    },
    {
      title: "Health & Wellness",
      icon: Heart,
      benefits: [
        { name: "Premium Health Insurance", description: "100% covered medical, dental, and vision insurance" },
        { name: "Wellness Stipend", description: "$100/month for gym memberships, fitness classes, or wellness apps" },
        { name: "Annual Health Checkup", description: "Comprehensive health screenings covered by the company" },
        { name: "Ergonomic Setup", description: "Standing desk, quality chair, and ergonomic accessories" }
      ]
    },
    {
      title: "Equipment & Technology",
      icon: Laptop,
      benefits: [
        { name: "Latest Tech Equipment", description: "MacBook Pro, 4K monitors, and any tools you need to excel" },
        { name: "Home Office Stipend", description: "$1,500 budget to set up your ideal workspace" },
        { name: "Phone & Internet", description: "Monthly allowance for phone and high-speed internet" },
        { name: "Software & Tools", description: "Access to premium software and professional tools" }
      ]
    },
    {
      title: "Team & Culture",
      icon: Users,
      benefits: [
        { name: "Annual Team Retreats", description: "All-expenses-paid team retreats in exotic locations" },
        { name: "Quarterly Team Events", description: "Regular virtual and in-person team building activities" },
        { name: "Gaming Tournaments", description: "Internal tournaments with prizes and bragging rights" },
        { name: "Celebration Budget", description: "Team celebration budget for achievements and milestones" }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "The unlimited PTO and remote work flexibility allows me to maintain perfect work-life balance while working on exciting campaigns.",
      author: "Sarah M.",
      role: "Senior Marketing Manager"
    },
    {
      quote: "The learning budget helped me get certified in advanced analytics, which directly contributed to our campaign success.",
      author: "Marcus R.",
      role: "Data Analyst"
    },
    {
      quote: "Our team retreat in Bali was incredible. It's amazing to work for a company that truly invests in its people.",
      author: "Elena V.",
      role: "Creative Director"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Gift className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Benefits & Perks</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Exceptional Benefits for Exceptional Talent
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We believe great talent deserves great treatment. Our comprehensive benefits 
              package is designed to support your success both professionally and personally.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {benefitCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              <div className="text-center mb-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.benefits.map((benefit, benefitIndex) => (
                  <Card key={benefitIndex} className="h-full">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-3">{benefit.name}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">By the Numbers</h2>
            <p className="text-xl text-muted-foreground">
              See how we invest in our team's success and well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$3,000</div>
              <div className="text-muted-foreground">Annual Learning Budget</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Health Insurance Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Countries Represented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Team Says</h2>
            <p className="text-xl text-muted-foreground">
              Hear from team members about their experience with our benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <blockquote className="text-lg mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-primary font-semibold">{testimonial.author}</div>
                  <div className="text-muted-foreground">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience These Benefits?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our team and enjoy comprehensive benefits while working on campaigns 
              that shape the future of gaming marketing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                Submit Application
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkWithUsBenefits;