import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientTestimonials from "@/components/ClientTestimonials";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import WhoWeAre from "@/components/WhoWeAre";
import Winning from "@/components/Winning";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ClientTestimonials />
      <SocialProof />
      <Services />
      <WhoWeAre />
      <Winning />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Index;
