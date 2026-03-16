import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Construction", href: "#construction" },
  { label: "AI Layer", href: "#ai-layer" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ onOpenDemo }: { onOpenDemo?: () => void }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    // Only intercept in-page anchors like "#platform"
    if (href.startsWith("#")) {
      event.preventDefault();
      const id = href.slice(1);
      
      // Close menu first on mobile to avoid layout shifts during scroll
      setOpen(false);
      
      // Use a small timeout to let the menu closing animation begin
      // This helps the browser calculate the correct scroll position
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          // Use scroll-margin-top on sections to handle navbar height
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (href === "#") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 10);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-border" : "bg-transparent"}`}>
      <div className="container relative flex h-20 items-center justify-center lg:justify-between">
        {/* Mobile toggle on the left (absolute) */}
        <button
          className={`lg:hidden absolute left-4 ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo and text - centered on mobile */}
        <a href="#hero" onClick={handleNavClick("#hero")} className="flex items-center gap-2.5">
          <img
            src="/infoxeme%20logo.png"
            alt="Infoxeme"
            className="h-9 w-auto rounded-xl bg-white/5 p-1 shadow-soft"
          />
          <div className="flex flex-col">
            <span className={`font-display text-lg font-extrabold leading-tight ${scrolled ? "text-primary" : "text-white"}`}>
              Infozyme
            </span>
            <span className={`text-[9px] font-medium tracking-widest uppercase ${scrolled ? "text-muted-foreground" : "text-white/50"}`}>Construction Intelligence</span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors ${scrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"}`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenDemo}
            className="rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors shadow-soft"
          >
            Request Demo
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-border"
          >
            <div className="container flex flex-col gap-3 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenDemo?.();
                }}
                className="mt-2 rounded-xl bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
              >
                Request Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
