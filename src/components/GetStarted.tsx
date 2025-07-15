import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, MessageCircle, Calendar, Download, FileText, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GetStarted = () => {
  const [step, setStep] = useState<'initial' | 'conversation' | 'deck'>('initial');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    interest: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('conversation');
    toast({
      title: "Thank you for your interest!",
      description: "Let's schedule a conversation to understand your needs better.",
    });
  };

  const handleConversationComplete = () => {
    setStep('deck');
    toast({
      title: "Great conversation!",
      description: "Now you can request our comprehensive agency deck.",
    });
  };

  const handleDeckRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Deck Request Submitted!",
      description: "Check your email for the download link within 5 minutes.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (step === 'initial') {
    return (
      <section id="get-started" className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-md border border-primary/20 px-6 py-3 rounded-full mb-8 shadow-lg">
                <MessageCircle className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary tracking-wide">Get Started Today</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to <span className="text-primary">Accelerate</span> Your Growth?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Let's start with a conversation to understand your goals and how we can help you achieve them
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Benefits */}
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">What to expect:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>15-minute discovery call to understand your needs</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Custom strategy recommendations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Access to our comprehensive agency deck</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>No commitments or obligations</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Why start with a conversation?</h4>
                    <p className="text-muted-foreground text-sm">
                      Every successful partnership begins with understanding. We want to learn about your unique 
                      challenges and goals before sharing our detailed capabilities and case studies.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <Calendar className="w-6 h-6 text-primary" />
                    <span>Schedule Your Call</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll reach out within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleInitialSubmit} className="space-y-4">
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
                      <Label htmlFor="message">Tell us about your goals (Optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="What are your main marketing challenges or goals?"
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-accent">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule My Call
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      We respect your privacy and will never spam you.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (step === 'conversation') {
    return (
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-12">
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-10 h-10 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Call Scheduled!</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Thank you for your interest. We'll contact you within 24 hours to schedule your discovery call.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                  <p className="text-sm">
                    <strong>What happens next:</strong><br />
                    • Our team will review your information<br />
                    • We'll send you a calendar link to book your call<br />
                    • After our conversation, you'll get access to our agency deck
                  </p>
                </div>
                <Button 
                  onClick={handleConversationComplete}
                  className="bg-gradient-to-r from-primary to-accent"
                >
                  I've Had My Conversation - Request Deck
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-md border border-primary/20 px-6 py-3 rounded-full mb-8 shadow-lg">
              <FileText className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary tracking-wide">Download Available</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Get Our <span className="text-primary">Agency Deck</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Thank you for the great conversation! Now download our comprehensive deck with case studies and ROI data
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
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Download Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Confirm Your Download</CardTitle>
                <p className="text-muted-foreground">
                  We'll email you the deck within 5 minutes
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDeckRequest} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="download-email">Email Address</Label>
                    <Input
                      id="download-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@company.com"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-accent">
                    <Download className="w-5 h-5 mr-2" />
                    Send Me The Deck
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;