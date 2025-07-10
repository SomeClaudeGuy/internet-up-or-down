import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const GlobalCTA = () => {
  const translations = useTranslation();

  return (
    <div className="text-center bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-4">{translations.globalCtaTitle}</h3>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          {translations.globalCtaDesc}
        </p>
        <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent shadow-xl shadow-primary/25">
          <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
            <Globe className="mr-2 w-5 h-5" />
            {translations.globalCtaButton}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default GlobalCTA;