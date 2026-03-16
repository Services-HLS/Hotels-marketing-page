import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlatformSection from "@/components/PlatformSection";
import ConstructionSection from "@/components/ConstructionSection";
import AILayerSection from "@/components/AILayerSection";
import ServicesSection from "@/components/ServicesSection";
import FooterContact from "@/components/FooterContact";
import DemoDialog from "@/components/DemoDialog";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenDemo={() => setDemoOpen(true)} />
      <HeroSection onOpenDemo={() => setDemoOpen(true)} />
      <PlatformSection />
      <ConstructionSection />
      <AILayerSection />

      <ServicesSection />
      <FooterContact onOpenDemo={() => setDemoOpen(true)} />
      
      <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default Index;
