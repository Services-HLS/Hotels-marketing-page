import { motion } from "framer-motion";
import { Brain, TrendingUp, Target, BarChart3, AlertTriangle, Zap } from "lucide-react";
import aiLayerBg from "@/assets/ai-layer-bg.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const aiCapabilities = [
  { icon: TrendingUp, title: "ROI Forecasting", desc: "12–36 month forecasts with scenario bands for investment intelligence" },
  { icon: Target, title: "Opportunity Scoring", desc: "AI-matched ZIP-level demand signals for optimal investment decisions" },
  { icon: AlertTriangle, title: "Delay Prediction", desc: "Forecast construction delays and budget overruns before they happen" },
  { icon: BarChart3, title: "Change Order Impact", desc: "Estimate financial impact of change orders in real-time" },
  { icon: Brain, title: "Win-Rate Analysis", desc: "Predictive win-rate analysis per client and project type" },
  { icon: Zap, title: "Risk Exposure Modeling", desc: "Dynamic risk exposure models updated with 100M+ US data points" },
];

const AILayerSection = () => {
  return (
    <section id="ai-layer" className="relative py-20 md:py-28 overflow-hidden scroll-mt-24 md:scroll-mt-28">
      <div className="absolute inset-0">
        <img src={aiLayerBg} alt="AI neural network visualization" className="h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="container relative z-10">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">AI Intelligence Layer</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary md:text-5xl">
            Predictive · Proactive · Precise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built on 100M+ US data points — AI predicts disputes, overruns & financial exposure before they escalate.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="relative mx-auto max-w-6xl rounded-3xl border border-border bg-white/90 px-6 py-8 md:px-10 md:py-10 shadow-card-custom"
        >
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,1.15fr)_auto_minmax(0,1.15fr)] items-center">
            {/* Left column cards */}
            <div className="space-y-3 flex flex-col">
              {aiCapabilities.slice(0, 3).map((cap, i) => (
                <motion.div
                  key={cap.title}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group w-full rounded-2xl border border-border bg-white px-4 py-3 shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-construction/20 to-transparent" />
                    <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <cap.icon className="h-4 w-4 text-accent" />
                    </div>
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-primary">{cap.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {cap.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Center circular AI Intelligence Layer node */}
            <div className="relative flex items-center justify-center px-4 lg:px-6">
              {/* Outer faint ring */}
              <div className="h-64 w-64 rounded-full border border-accent/10 bg-gradient-to-br from-accent/5 via-construction/10 to-transparent shadow-[0_0_48px_rgba(15,23,42,0.28)]" />

              {/* Inner glowing circle */}
              <div className="absolute flex h-48 w-48 items-center justify-center rounded-full bg-navy-gradient shadow-[0_0_40px_rgba(15,23,42,0.5)]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/70 via-construction/60 to-transparent opacity-90 blur-[3px]" />
                <div className="relative z-10 px-6 text-center flex flex-col items-center justify-center">
                  <Brain className="mx-auto mb-2 h-8 w-8 text-white/95" />
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
                    AI Intelligence Layer
                  </p>
                  <p className="mt-1 text-[11px] text-white/85 leading-snug max-w-[9rem]">
                    Predictive · Proactive · Precise
                  </p>
                  {/* Removed extra sentence inside circle per request */}
                </div>
              </div>
            </div>

            {/* Right column cards */}
            <div className="space-y-3 flex flex-col">
              {aiCapabilities.slice(3).map((cap, index) => (
                <motion.div
                  key={cap.title}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group w-full rounded-2xl border border-border bg-white px-4 py-3 shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-construction/20 to-transparent" />
                    <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <cap.icon className="h-4 w-4 text-accent" />
                    </div>
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-primary">{cap.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {cap.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AILayerSection;
