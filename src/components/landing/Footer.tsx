import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-navy text-primary-foreground relative">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Ready to Transform Your Hotel Operations?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Join 500+ hotels already using our system to streamline their operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hms.hithlakshsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-medium rounded-xl hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/Logo.png"
                alt="Hotel Management System Logo"
                className="h-24 w-24 object-contain drop-shadow-md"
              />
              <span className="text-xl font-display font-bold leading-tight whitespace-nowrap">
                Hotel Management System
              </span>
            </div>
            <p className="text-primary-foreground/60 leading-relaxed max-w-sm">
              Modern hotel management system built to empower small and mid-size hotels with enterprise-grade tools.
            </p>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-4 flex lg:justify-center">
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-primary">Quick Links</h4>
              <ul className="space-y-4">
                {["Features", "Pricing", "Dashboard", "Testimonials", "App Download"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-primary-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30" /> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-bold text-lg mb-6 text-primary">Contact Information</h4>
            <div className="space-y-5">
              <a href="mailto:services@hithlakshsolutions.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">
                  services@hithlakshsolutions.com
                </span>
              </a>
              <a href="tel:+917795791587" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">
                  +91 77957 91587
                </span>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-primary-foreground/70 leading-relaxed">
                  19-12-1/121, Kesavayanagunta, Tirupati,<br />Andhra Pradesh – 517501
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 flex justify-center items-center">
          <p className="text-sm text-primary-foreground/40 font-medium text-center">
            © 2026 Hithlaksh Solutions Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;