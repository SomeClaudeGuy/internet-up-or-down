import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import GlobalPresence from "@/components/GlobalPresence";
import TalentCTA from "@/components/TalentCTA";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ClientLogos />
      <Services />
      <GlobalPresence />
      <TalentCTA />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
