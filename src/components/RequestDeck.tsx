import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Mail, CheckCircle, FileText, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RequestDeck = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    interest: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    setIsSubmitted(true);
    toast({
      title: "Deck Request Submitted!",
      description: "Check your email for the download link within 5 minutes.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-12">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Request Submitted!</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your deck request has been received. Check your email within the next 5 minutes for the download link.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                  <p className="text-sm">
                    <strong>What's included in your deck:</strong><br />
                    • Our full service portfolio and case studies<br />
                    • ROI data from 50+ successful campaigns<br />
                    • Detailed breakdown of our process<br />
                    • Pricing and package information
                  </p>
                </div>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Request Another Deck
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-md border border-primary/20 px-6 py-3 rounded-full mb-8 shadow-lg">
              <FileText className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary tracking-wide">Free Download</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get Our <span className="text-primary">Agency Deck</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Download our comprehensive agency deck featuring case studies, ROI data, and everything you need to know about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Deck Preview */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Download className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Basher Agency Deck 2024</h3>
                      <p className="text-sm text-muted-foreground">42 pages • Updated Monthly</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span>50+ detailed case studies with ROI data</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span>Complete service breakdown and pricing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span>Our proven 4-step campaign process</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span>Client testimonials and success metrics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span>Industry insights and trend analysis</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">What our clients say:</h4>
                  <blockquote className="italic text-muted-foreground">
                    "This deck perfectly showcases why Basher is the leading agency in our space. 
                    The data and case studies speak for themselves."
                  </blockquote>
                  <div className="mt-2 text-sm font-medium">- Marketing Director, Stake.com</div>
                </CardContent>
              </Card>
            </div>

            {/* Request Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>Request Your Copy</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll email you the deck within 5 minutes
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role *</Label>
                    <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ceo">CEO/Founder</SelectItem>
                        <SelectItem value="cmo">CMO/Marketing Director</SelectItem>
                        <SelectItem value="marketing-manager">Marketing Manager</SelectItem>
                        <SelectItem value="growth-lead">Growth Lead</SelectItem>
                        <SelectItem value="product-manager">Product Manager</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">Primary Interest</Label>
                    <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="What interests you most?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="influencer-marketing">Influencer Marketing</SelectItem>
                        <SelectItem value="paid-media">Paid Media Buying</SelectItem>
                        <SelectItem value="content-creation">Content Creation</SelectItem>
                        <SelectItem value="full-service">Full Service Marketing</SelectItem>
                        <SelectItem value="performance-campaigns">Performance Campaigns</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your goals or specific questions..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-accent">
                    <Download className="w-5 h-5 mr-2" />
                    Send Me The Deck
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to receive marketing emails from Basher. 
                    You can unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestDeck;