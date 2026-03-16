import { motion } from "framer-motion";
import { ArrowRight, HardHat, Shield, MapPinned, Brain } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = ({ onOpenDemo }: { onOpenDemo?: () => void }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Smart city with AI overlays" className="h-full w-full object-cover" />
        <div className="absolute inset-0 hero-gradient-overlay" />
      </div>

      <div className="container relative z-10 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-white/90 tracking-wide">AI-Powered · IoT-Enabled · USA Focused · Series A</span>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            From Fragmented Data to
          </h1>
          <h1 className="mb-8 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-accent">Total Project Clarity</span>
          </h1>

          <p className="mb-10 max-w-3xl mx-auto text-lg text-white/65 font-body leading-relaxed md:text-xl">
            Centralize Location, Construction, and Financial Intelligence into a single AI-powered source of truth — from
            investment advisory to execution and risk management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#platform"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-bold text-accent-foreground hover:bg-accent/90 transition-colors shadow-elevated"
            >
              Explore Platform <ArrowRight size={16} />
            </a>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Request a Demo
            </button>
          </div>

          {/* Three pillars */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {[
              { icon: MapPinned, label: "Location Intel", highlight: "Where to Invest", desc: "ZIP code success prediction and market ROI." },
              { icon: HardHat, label: "Construction Intel", highlight: "How to Execute", desc: "Real-time monitoring, supply chain, and site control." },
              { icon: Shield, label: "Financial Intel", highlight: "How to Manage Risk", desc: "Risk scoring, ERP integration, and portfolio clarity." },
            ].map((item, i) => (
              <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all text-center">
                <div className="relative mx-auto mb-3 h-10 w-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/60 via-construction/30 to-transparent opacity-40 blur-[0.5px] group-hover:opacity-70 transition-opacity" />
                  <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 group-hover:bg-white/15 group-hover:ring-white/25 transition-all duration-300 group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12)]">
                    <item.icon className="h-5 w-5 text-accent opacity-95 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <p className="text-sm text-white/60">{item.label}</p>
                <p className="text-xl font-extrabold text-white">{item.highlight}</p>
                <p className="mt-1 text-xs text-white/50">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "$800B+", label: "TAM" },
              { value: "100M+", label: "US Data Points" },
              { value: "10+", label: "Pilot Clients" },
              { value: "94%", label: "Retention Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-accent">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
