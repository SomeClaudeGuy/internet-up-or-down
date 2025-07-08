import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
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
              The worldwide leading marketing agency for casino/betting operators, 
              influencers, and audiovisual content.
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
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Traffic Generation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Benchmarking</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sponsorships</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Media Buying</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Content Production</a></li>
            </ul>
          </div>

          {/* Regions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Regions</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Latin America</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">North America</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Europe</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">APAC</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Australia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">New Zealand</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
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
                <span>Global offices</span>
              </div>
            </div>
            <Button className="w-full">
              Work With Us
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 Basher Agency. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;