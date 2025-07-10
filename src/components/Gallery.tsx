import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Image as ImageIcon, Calendar, Eye } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import casinoSlotsImage from "@/assets/casino-slots.png";
import esportsEventImage from "@/assets/esports-event.png";
import betOnGameMobileImage from "@/assets/bet-on-game-mobile.png";
import vipMobileRewardsImage from "@/assets/vip-mobile-rewards.png";

const Gallery = () => {
  const t = useTranslation();
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      type: "video",
      category: "campaign",
      title: "Stake Casino Summer Campaign",
      description: "Multi-platform influencer campaign generating 5M+ impressions",
      image: casinoSlotsImage,
      views: "2.1M",
      date: "2024-03-15",
      tags: ["Casino", "Influencer", "Summer"],
    },
    {
      id: 2,
      type: "image",
      category: "activation",
      title: "BetBoom Esports Tournament",
      description: "Live tournament activation with 50+ streamers",
      image: esportsEventImage,
      views: "1.8M",
      date: "2024-02-20",
      tags: ["Esports", "Live Event", "Tournament"],
    },
    {
      id: 3,
      type: "video",
      category: "campaign",
      title: "Leon Mobile App Launch",
      description: "Cross-platform mobile campaign with AR filters",
      image: betOnGameMobileImage,
      views: "3.2M",
      date: "2024-01-10",
      tags: ["Mobile", "AR", "Launch"],
    },
    {
      id: 4,
      type: "image",
      category: "activation",
      title: "VIP Rewards Program",
      description: "Exclusive creator program with premium rewards",
      image: vipMobileRewardsImage,
      views: "900K",
      date: "2023-12-05",
      tags: ["VIP", "Rewards", "Premium"],
    },
    {
      id: 5,
      type: "video",
      category: "campaign",
      title: "22Bet World Cup Campaign",
      description: "Global sports betting campaign during World Cup",
      image: casinoSlotsImage,
      views: "4.5M",
      date: "2023-11-18",
      tags: ["Sports", "World Cup", "Global"],
    },
    {
      id: 6,
      type: "image",
      category: "activation",
      title: "Pinnacle Live Stream Series",
      description: "Weekly live streams with top gaming influencers",
      image: esportsEventImage,
      views: "1.2M",
      date: "2023-10-22",
      tags: ["Live Stream", "Weekly", "Gaming"],
    }
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const filters = [
    { value: "all", label: "All Content" },
    { value: "campaign", label: "Campaigns" },
    { value: "activation", label: "Activations" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-md border border-primary/20 px-6 py-3 rounded-full mb-8 shadow-lg">
            <ImageIcon className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary tracking-wide">Our Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Gallery of <span className="text-primary">Success</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our latest campaigns, activations, and content that's driving real results for gaming and betting brands
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full p-2">
            {filters.map((filterOption) => (
              <Button
                key={filterOption.value}
                variant={filter === filterOption.value ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter(filterOption.value)}
                className={`rounded-full px-6 transition-all duration-300 ${
                  filter === filterOption.value 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "hover:bg-primary/10"
                }`}
              >
                {filterOption.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card 
              key={item.id}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                    {item.type === "video" ? (
                      <Play className="w-16 h-16 mx-auto mb-2" />
                    ) : (
                      <ImageIcon className="w-16 h-16 mx-auto mb-2" />
                    )}
                    <p className="text-sm">View {item.type}</p>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant="secondary" 
                    className={`capitalize ${
                      item.type === "video" 
                        ? "bg-red-500/80 text-white border-red-400" 
                        : "bg-blue-500/80 text-white border-blue-400"
                    }`}
                  >
                    {item.type}
                  </Badge>
                </div>

                {/* Views */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
                    <Eye className="w-3 h-3" />
                    <span>{item.views}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to see your brand featured here?</h3>
              <p className="text-muted-foreground mb-6">
                Let's create something amazing together. Our team is ready to bring your vision to life.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-lg px-8 py-4">
                Start Your Campaign
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;