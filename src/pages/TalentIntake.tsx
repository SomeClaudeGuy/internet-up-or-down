import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Star, TrendingUp, Users } from "lucide-react";

const TalentIntake = () => {
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.talentHeroTitle}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.talentHeroSubtitle}
          </p>
        </div>
      </section>

      {/* Earn as a Partner Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Earn as a Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our exclusive network of top-performing creators and unlock premium earning opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Top Earnings</h3>
                <p className="text-muted-foreground text-sm">$50K+ average annual earnings</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Growth Support</h3>
                <p className="text-muted-foreground text-sm">Dedicated team to help you scale</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Premium Brands</h3>
                <p className="text-muted-foreground text-sm">Work with industry leaders</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Full Support</h3>
                <p className="text-muted-foreground text-sm">24/7 campaign optimization</p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="bg-card/30 rounded-2xl p-8 border border-border/50 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Active Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100M+</div>
                <div className="text-sm text-muted-foreground">Combined Reach</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Brand Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.talentPremiumPartnerships}</h3>
                <p className="text-muted-foreground">{t.talentPremiumDesc}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.talentGrowthSupport}</h3>
                <p className="text-muted-foreground">{t.talentGrowthDesc}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.talentCommunityAccess}</h3>
                <p className="text-muted-foreground">{t.talentCommunityDesc}</p>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">{t.talentAppTitle}</CardTitle>
                <p className="text-center text-muted-foreground">
                  {t.talentAppSubtitle}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <Label htmlFor="firstName">{t.talentFirstName}</Label>
                       <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                       <Label htmlFor="lastName">{t.talentLastName}</Label>
                       <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="email">{t.talentEmail}</Label>
                     <Input id="email" type="email" placeholder="your@email.com" />
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="phone">{t.talentPhone}</Label>
                     <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="platform">{t.talentPlatform}</Label>
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
                     <Label htmlFor="followers">{t.talentFollowers}</Label>
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
                     <Label htmlFor="niche">{t.talentNiche}</Label>
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
                     <Label htmlFor="experience">{t.talentExperience}</Label>
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
                     <Label htmlFor="portfolio">{t.talentPortfolio}</Label>
                     <Textarea
                      id="portfolio" 
                      placeholder="Share links to your main channels, best content, or media kit..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="goals">{t.talentGoals}</Label>
                     <Textarea
                      id="goals" 
                      placeholder="What are you looking to achieve through brand partnerships? What makes you unique?"
                      rows={4}
                    />
                  </div>

                   <Button type="submit" className="w-full text-lg py-6">
                     {t.talentSubmit}
                   </Button>
                   <p className="text-xs text-center text-muted-foreground mt-2">
                     {t.talentReviewNote}
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