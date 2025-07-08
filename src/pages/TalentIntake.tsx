import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Star, TrendingUp, Users } from "lucide-react";

const TalentIntake = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our <span className="text-primary">Elite Talent Network</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with top brands, earn premium rates, and scale your influence with our exclusive talent program.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Partnerships</h3>
                <p className="text-muted-foreground">Work with top-tier brands and earn industry-leading rates</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Growth Support</h3>
                <p className="text-muted-foreground">Access our marketing expertise to scale your personal brand</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community Access</h3>
                <p className="text-muted-foreground">Join an elite network of successful content creators</p>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Talent Application</CardTitle>
                <p className="text-center text-muted-foreground">
                  Tell us about yourself and let's explore partnership opportunities
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="platform">Primary Platform</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your main platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="twitch">Twitch</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                        <SelectItem value="twitter">Twitter/X</SelectItem>
                        <SelectItem value="kick">Kick</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="followers">Follower Count</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your follower range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1k-10k">1K - 10K</SelectItem>
                        <SelectItem value="10k-50k">10K - 50K</SelectItem>
                        <SelectItem value="50k-100k">50K - 100K</SelectItem>
                        <SelectItem value="100k-500k">100K - 500K</SelectItem>
                        <SelectItem value="500k-1m">500K - 1M</SelectItem>
                        <SelectItem value="1m+">1M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="niche">Content Niche</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your content niche" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gaming">Gaming</SelectItem>
                        <SelectItem value="slots">Slot Games</SelectItem>
                        <SelectItem value="casino">Casino Games</SelectItem>
                        <SelectItem value="sports">Sports Betting</SelectItem>
                        <SelectItem value="poker">Poker</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience with Brand Partnerships</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No prior experience</SelectItem>
                        <SelectItem value="beginner">1-5 partnerships</SelectItem>
                        <SelectItem value="intermediate">6-20 partnerships</SelectItem>
                        <SelectItem value="experienced">20+ partnerships</SelectItem>
                        <SelectItem value="professional">Full-time creator</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio/Channel Links</Label>
                    <Textarea 
                      id="portfolio" 
                      placeholder="Share links to your main channels, best content, or media kit..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goals">Partnership Goals</Label>
                    <Textarea 
                      id="goals" 
                      placeholder="What are you looking to achieve through brand partnerships? What makes you unique?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg py-6">
                    🚀 Submit Application
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    We'll review your application and get back to you within 48 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TalentIntake;