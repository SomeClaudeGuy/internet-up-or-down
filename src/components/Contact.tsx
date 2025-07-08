import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start Your <span className="text-primary">Campaign</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to elevate your brand in the iGaming industry? Get in touch with our team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Get Started Today</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company/Brand</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">How would you like to be identified?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brand">Brand</SelectItem>
                      <SelectItem value="operator">Betting or Casino Operator</SelectItem>
                      <SelectItem value="developer">Game Developer</SelectItem>
                      <SelectItem value="talent">Talent/Influencer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-method">Preferred Contact Method</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your preferred method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="telegram">Telegram</SelectItem>
                      <SelectItem value="skype">Skype</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project, goals, and how we can help..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">hello@basher.agency</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Our Offices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Latin America HQ</div>
                    <div className="text-muted-foreground text-sm">São Paulo, Brazil</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Europe Office</div>
                    <div className="text-muted-foreground text-sm">Madrid, Spain</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">APAC Office</div>
                    <div className="text-muted-foreground text-sm">Melbourne, Australia</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">&lt; 24h</div>
                  <div className="font-medium mb-2">Average Response Time</div>
                  <div className="text-sm text-muted-foreground">
                    Our team responds to all inquiries within 24 hours, typically much faster.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;