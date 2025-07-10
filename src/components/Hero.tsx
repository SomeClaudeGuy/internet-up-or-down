import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const t = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-pulse">
            <span className="text-sm font-medium text-primary">
              {t.heroBadge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t.heroTitle}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.heroTitleHighlight}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-background"></div>
                ))}
              </div>
              <span>{t.heroSocialProofTalents}</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border"></div>
            <div>{t.heroSocialProofRating}</div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild className="group text-lg px-10 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl shadow-primary/25">
              <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                {t.heroCtaPrimary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group text-lg px-8 py-6 border-2 hover:bg-primary/5">
              <Play className="mr-2 w-5 h-5" />
              {t.heroCataSecondary}
            </Button>
          </div>

          {/* Urgency */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-12 max-w-2xl mx-auto">
            <p className="text-sm text-center">
              {t.heroUrgency}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-border/50">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">{t.heroStatsExperience}</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-border/50">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">{t.heroStatsSuccess}</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-border/50">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">{t.heroStatsRetention}</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-border/50">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24H</div>
              <div className="text-sm text-muted-foreground">{t.heroStatsResponse}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;