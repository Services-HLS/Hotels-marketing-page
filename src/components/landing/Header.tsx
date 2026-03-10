import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import RequestDemoModal from "./RequestDemoModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button & Logo */}
            <div className="flex items-center">
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 -ml-2 mr-1 text-foreground"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Logo */}
              <div className="flex items-center">
                <img
                  src="/images/Logo.png"
                  alt="Hotel Management System Logo"
                  className="h-20 w-20 object-contain drop-shadow-md"
                />
                <span className="text-xl sm:text-2xl font-display font-bold text-foreground truncate">
                  Hotel Management System
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Features
              </a>
              <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Dashboard
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Pricing
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Testimonials
              </a>
              <a href="https://hms.hithlakshsolutions.com/login" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" className="shadow-lg shadow-primary/20">
                  Sign In
                </Button>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-background border-r border-border shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-xl font-display font-bold">Menu</span>
          <button onClick={() => setIsMenuOpen(false)} className="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-4">
          <nav className="flex flex-col gap-2">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium py-3 px-2 rounded-md hover:bg-muted transition-colors">
              Features
            </a>
            <a href="#dashboard" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium py-3 px-2 rounded-md hover:bg-muted transition-colors">
              Dashboard
            </a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium py-3 px-2 rounded-md hover:bg-muted transition-colors">
              Pricing
            </a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-foreground font-medium py-3 px-2 rounded-md hover:bg-muted transition-colors">
              Testimonials
            </a>
          </nav>
        </div>

        <div className="p-4 border-t border-border flex flex-col gap-3">
          <a href="https://hms.hithlakshsolutions.com/login" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
            <Button variant="hero" size="lg" className="w-full shadow-lg shadow-primary/20">
              Sign In
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
