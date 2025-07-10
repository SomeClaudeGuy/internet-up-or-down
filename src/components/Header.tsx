import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslation } from "@/hooks/useTranslation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const t = useTranslation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-xl">
              B
            </div>
            <span className="text-2xl font-bold">Basher Agency</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              {t.header.services}
            </Link>
            <Link to="/b-content" className="text-foreground hover:text-primary transition-colors">
              {t.header.content}
            </Link>
            <Link to="/success-stories" className="text-foreground hover:text-primary transition-colors">
              {t.header.talents}
            </Link>
            <a href="#contact" onClick={handleContactClick} className="text-foreground hover:text-primary transition-colors">
              {t.header.contact}
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Link to="/talent-intake">
              <Button variant="outline">{t.header.joinAsTalent}</Button>
            </Link>
            <Button>{t.header.getStarted}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">
                {t.header.services}
              </Link>
              <Link to="/b-content" className="text-foreground hover:text-primary transition-colors">
                {t.header.content}
              </Link>
              <Link to="/success-stories" className="text-foreground hover:text-primary transition-colors">
                {t.header.talents}
              </Link>
              <a href="#contact" onClick={handleContactClick} className="text-foreground hover:text-primary transition-colors">
                {t.header.contact}
              </a>
            </nav>
            <div className="flex flex-col space-y-2 mt-4">
              <div className="mb-2">
                <LanguageSelector />
              </div>
              <Link to="/talent-intake">
                <Button variant="outline" className="w-full">{t.header.joinAsTalent}</Button>
              </Link>
              <Button className="w-full">{t.header.getStarted}</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;