import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from "@/hooks/useTranslation";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const t = useTranslation();
  
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.contactTitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.contactSubtitle}
          </p>
           <div className="mt-6 flex justify-center items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400">{t.contactAvailable}</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{t.contactResponse}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">{t.contactFormTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t.contactFirstName}</Label>
                    <Input id="firstName" placeholder={t.contactFirstNamePlaceholder} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t.contactLastName}</Label>
                    <Input id="lastName" placeholder={t.contactLastNamePlaceholder} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t.contactEmailField}</Label>
                  <Input id="email" type="email" placeholder={t.contactEmailPlaceholder} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t.contactPhoneField}</Label>
                  <Input id="phone" type="tel" placeholder={t.contactPhonePlaceholder} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">{t.contactCompanyField}</Label>
                  <Input id="company" placeholder={t.contactCompanyPlaceholder} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">{t.contactIdentityQuestion}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t.contactSelectOption} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brand">{t.contactIdentityBrand}</SelectItem>
                      <SelectItem value="operator">{t.contactIdentityOperator}</SelectItem>
                      <SelectItem value="developer">{t.contactIdentityDeveloper}</SelectItem>
                      <SelectItem value="talent">{t.contactIdentityTalent}</SelectItem>
                      <SelectItem value="other">{t.contactIdentityOther}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-method">{t.contactMethodField}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t.contactSelectMethod} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">{t.contactMethodEmail}</SelectItem>
                      <SelectItem value="phone">{t.contactMethodPhone}</SelectItem>
                      <SelectItem value="whatsapp">{t.contactMethodWhatsApp}</SelectItem>
                      <SelectItem value="telegram">{t.contactMethodTelegram}</SelectItem>
                      <SelectItem value="skype">{t.contactMethodSkype}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contactMessageField}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t.contactMessagePlaceholder}
                    rows={4}
                  />
                </div>

                <Button asChild className="w-full text-lg py-6">
                  <a href="https://docs.google.com/forms/d/1948-2HcLLEeciF3QQIzeTB-nPmM6-qsD3HopP5-bTyQ/viewform?edit_requested=true#response=ACYDBNgoe9qnpdvzE2IG3-SgO1FgdPRTnh9slrfCToFtyek2Of0Osps9NvqxQ-7epsdcl_0" target="_blank" rel="noopener noreferrer">
                    {t.contactFormButton}
                  </a>
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  {t.contactFormDisclaimer}
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">{t.contactQuickTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">{t.contactEmail}</div>
                    <div className="text-muted-foreground">hello@basher.agency</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">{t.contactPhone}</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">{t.contactWhatsApp}</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">{t.contactOfficesTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{t.contactOfficeLatam}</div>
                    <div className="text-muted-foreground text-sm">São Paulo, Brazil</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{t.contactOfficeEurope}</div>
                    <div className="text-muted-foreground text-sm">Madrid, Spain</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{t.contactOfficeApac}</div>
                    <div className="text-muted-foreground text-sm">Melbourne, Australia</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Signals */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">{t.contactTrustResponse}</div>
                    <div className="text-sm font-medium">{t.contactTrustResponseDesc}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">{t.contactTrustClients}</div>
                      <div className="text-xs text-muted-foreground">{t.contactTrustClientsDesc}</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">{t.contactTrustGuarantee}</div>
                      <div className="text-xs text-muted-foreground">{t.contactTrustGuaranteeDesc}</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.contactTrustFooter}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;