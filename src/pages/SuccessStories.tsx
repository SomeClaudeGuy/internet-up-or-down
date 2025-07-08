import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, TrendingUp, Users, Award } from "lucide-react";

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Success Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our talented creators have transformed brands and generated millions in revenue through strategic content partnerships.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">500%</div>
                <div className="text-muted-foreground">Average ROI Increase</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Successful Talents</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Campaigns Delivered</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Talent Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Meet Our <span className="text-primary">Elite Talents</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Talent 1 */}
            <Card className="overflow-hidden group hover-scale">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop" 
                  alt="Gaming Content Creator"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Gaming
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sarah "GameQueen" Chen</h3>
                <p className="text-muted-foreground mb-3">Twitch Partner • 850K Followers</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Avg. Viewers:</span>
                    <span className="font-medium">12.5K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversion Rate:</span>
                    <span className="font-medium text-primary">8.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Campaign ROI:</span>
                    <span className="font-medium text-primary">420%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Talent 2 */}
            <Card className="overflow-hidden group hover-scale">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop" 
                  alt="Casino Content Creator"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Casino
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Marcus "SlotKing" Rodriguez</h3>
                <p className="text-muted-foreground mb-3">YouTube Partner • 1.2M Subscribers</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monthly Views:</span>
                    <span className="font-medium">2.8M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversion Rate:</span>
                    <span className="font-medium text-primary">12.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Campaign ROI:</span>
                    <span className="font-medium text-primary">680%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Talent 3 */}
            <Card className="overflow-hidden group hover-scale">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" 
                  alt="Sports Betting Content Creator"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Sports
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Emma "BetSmart" Thompson</h3>
                <p className="text-muted-foreground mb-3">Multi-Platform • 650K Total Followers</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Engagement Rate:</span>
                    <span className="font-medium">15.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversion Rate:</span>
                    <span className="font-medium text-primary">9.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Campaign ROI:</span>
                    <span className="font-medium text-primary">520%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Talent 4 */}
            <Card className="overflow-hidden group hover-scale">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop" 
                  alt="Poker Content Creator"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Poker
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Jake "PokerPro" Williams</h3>
                <p className="text-muted-foreground mb-3">Twitch Partner • 420K Followers</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Peak Viewers:</span>
                    <span className="font-medium">18K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversion Rate:</span>
                    <span className="font-medium text-primary">11.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Campaign ROI:</span>
                    <span className="font-medium text-primary">590%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Talent 5 */}
            <Card className="overflow-hidden group hover-scale">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" 
                  alt="Tech Content Creator"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Tech
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Alex "CryptoGamer" Park</h3>
                <p className="text-muted-foreground mb-3">YouTube • 980K Subscribers</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Avg. Views:</span>
                    <span className="font-medium">125K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversion Rate:</span>
                    <span className="font-medium text-primary">13.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Campaign ROI:</span>
                    <span className="font-medium text-primary">750%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Talent 6 */}
            <Card className="overflow-hidden group hover-scale">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop" 
                  alt="Lifestyle Content Creator"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Lifestyle
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mia "LuxeLife" Johnson</h3>
                <p className="text-muted-foreground mb-3">Instagram • 1.5M Followers</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Story Views:</span>
                    <span className="font-medium">380K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conversion Rate:</span>
                    <span className="font-medium text-primary">10.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Campaign ROI:</span>
                    <span className="font-medium text-primary">640%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;