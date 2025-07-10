import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const t = useTranslation();
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-lg">
                B
              </div>
              <span className="text-xl font-bold">Basher Agency</span>
            </div>
            <p className="text-muted-foreground">
              {t.footerDescription}
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t.footerServicesTitle}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t.footerServicesTraffic}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footerServicesBenchmarking}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footerServicesSocial}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footerServicesSponsorships}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footerServicesMedia}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footerServicesContent}</a></li>
            </ul>
          </div>

          {/* Regions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t.footerRegionsTitle}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t.footerRegionsLatam}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footerRegionsNorthAmerica}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footerRegionsEurope}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footerRegionsApac}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footerRegionsAustralia}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footerRegionsNewZealand}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t.footerContactTitle}</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@basher.agency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{t.footerContactGlobal}</span>
              </div>
            </div>
            <Button className="w-full" onClick={() => window.location.href = '/work-with-us'}>
              {t.footerWorkWithUs}
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              {t.footerCopyright}
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">{t.footerPrivacy}</a>
              <a href="#" className="hover:text-primary transition-colors">{t.footerTerms}</a>
              <a href="#" className="hover:text-primary transition-colors">{t.footerCookies}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;