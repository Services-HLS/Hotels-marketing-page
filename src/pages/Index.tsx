import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Dashboard from "@/components/landing/Dashboard";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import AppDownload from "@/components/landing/AppDownload";
import Footer from "@/components/landing/Footer";
import StickyPlayStore from "@/components/landing/StickyPlayStore";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <Pricing />
        <Testimonials />
        <AppDownload />
      </main>
      <Footer />
      <StickyPlayStore />
    </div>
  );
};

export default Index;
