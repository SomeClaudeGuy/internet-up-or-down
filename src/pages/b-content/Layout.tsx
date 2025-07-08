import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BContentLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BContentLayout;