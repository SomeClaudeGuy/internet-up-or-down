import { useTranslation } from "@/hooks/useTranslation";

const ClientLogos = () => {
  const t = useTranslation();
  
  const clients = [
    { name: "Stake", logo: "🎯" },
    { name: "BetBoom", logo: "💥" },
    { name: "Leon", logo: "🦁" },
    { name: "Pragmatic", logo: "⚡" },
    { name: "PIN-UP", logo: "📌" },
    { name: "Kick", logo: "⚽" },
    { name: "Betano", logo: "🎰" },
    { name: "Bet365", logo: "🎲" },
    { name: "22Bet", logo: "🏆" },
    { name: "Pinnacle", logo: "🎪" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t.clientLogosTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.clientLogosSubtitle}
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-12">
            {/* First set */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center space-x-3 bg-card border border-border rounded-lg px-6 py-4 min-w-[160px] hover:scale-105 transition-transform"
              >
                <span className="text-2xl">{client.logo}</span>
                <span className="font-medium whitespace-nowrap">{client.name}</span>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center space-x-3 bg-card border border-border rounded-lg px-6 py-4 min-w-[160px] hover:scale-105 transition-transform"
              >
                <span className="text-2xl">{client.logo}</span>
                <span className="font-medium whitespace-nowrap">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ClientLogos;