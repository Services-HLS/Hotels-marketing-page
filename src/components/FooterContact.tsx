import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const FooterContact = ({ onOpenDemo }: { onOpenDemo?: () => void }) => {
  return (
    <>
      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 scroll-mt-24 md:scroll-mt-28">
        <div className="container">
          <motion.div
            {...fadeUp}
            className="rounded-3xl bg-navy-gradient p-12 md:p-20 text-center shadow-elevated relative overflow-hidden"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl translate-y-1/2 -translate-x-1/3" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl mb-4">
                Let's Build the Future of
                <br />
                <span className="text-accent">US Investment Intelligence</span>
              </h2>
              <p className="text-white/50 mb-10 text-lg md:text-xl">
                Contact us for a demo or strategic consultation. Together we'll transform how you invest, build, and manage risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-bold text-accent-foreground hover:bg-accent/90 transition-colors shadow-elevated"
                >
                  <Mail size={16} /> Request Demo <ArrowRight size={16} />
                </button>
                <a
                  href="#platform"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  Explore Platform
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-14 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <img
                  src="/infoxeme%20logo.png"
                  alt="Infoxeme"
                  className="h-8 w-auto"
                />
                <div>
                  <span className="font-display text-base font-extrabold text-primary">
                    Infozyme Construction Intelligence
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Simple, AI-powered tools to choose better sites and keep construction projects on time and on budget.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-primary mb-3">Navigation</h4>
              <ul className="space-y-2">
                {[
                  { label: "Platform", href: "#platform" },
                  { label: "Construction", href: "#construction" },
                  { label: "AI Layer", href: "#ai-layer" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-primary mb-3">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail size={14} /> contact@smartlocationplatform.com
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} /> United States
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Infozyme. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Where to Invest · What to Build · How to Control Risk
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterContact;
