import { motion } from "framer-motion";
import { MapPinned, HardHat, Shield, Package, FileText, Brain } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const modules = [
  {
    id: "platform-location",
    icon: MapPinned,
    num: "01",
    title: "Smart Location Advisory",
    pillar: "Where to Invest",
    desc: "Score sites, corridors, and ZIP Codes for construction success — demand, permitting risk, access, and long-term value for new projects.",
    color: "text-accent",
    bgColor: "bg-gradient-to-br from-accent/20 via-accent/10 to-transparent",
  },
  {
    id: "platform-preconstruction",
    icon: HardHat,
    num: "02",
    title: "Pre-Construction Intelligence",
    pillar: "What to Build",
    desc: "Unify drawings, schedules, and budgets so you can detect clashes, scope gaps, and cost risks before you break ground.",
    color: "text-construction",
    bgColor: "bg-construction/10",
  },
  {
    id: "platform-monitoring",
    icon: Shield,
    num: "03",
    title: "Construction Monitoring",
    pillar: "How to Control the Build",
    desc: "See real-time progress vs. plan across every site — delays, RFIs, safety issues, and change orders in one construction control panel.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: "platform-supply-chain",
    icon: Package,
    num: "04",
    title: "Supply Chain & Materials",
    pillar: "Site Operations",
    desc: "Track materials from factory to jobsite dock, tie deliveries to tasks, and cut waste with just-in-time ordering and usage analytics.",
    color: "text-construction",
    bgColor: "bg-construction/10",
  },
  {
    id: "platform-contract-risk",
    icon: FileText,
    num: "05",
    title: "Contract & Risk Management",
    pillar: "Project Financials",
    desc: "Connect contracts, change orders, pay apps, and ERP so everyone sees the same budget, margin, and contingency picture in real time.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: "platform-ai-layer",
    icon: Brain,
    num: "06",
    title: "AI Intelligence Layer",
    pillar: "Predictive Analytics",
    desc: "Predict delays, budget drift, and supply disruptions early — simulate scenarios and see how today’s choices impact final cost and schedule.",
    color: "text-construction",
    bgColor: "bg-construction/10",
  },
];


const PlatformSection = () => {
  return (
    <section id="platform" className="py-20 md:py-28 scroll-mt-24 md:scroll-mt-28">
      <div className="container">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">Our Solution</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary md:text-5xl">
            One Unified AI Platform
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            From Location Advisory to Construction Execution and Financial Risk — all in one view.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-card px-6 py-3 shadow-card-custom">
            <span className="text-sm font-semibold text-primary">Location Intelligence</span>
            <span className="text-muted-foreground">+</span>
            <span className="text-sm font-semibold text-primary">Construction Intelligence</span>
            <span className="text-muted-foreground">+</span>
            <span className="text-sm font-semibold text-primary">Financial Intelligence</span>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              id={mod.id}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-white p-7 shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`relative rounded-xl ${mod.bgColor} p-3`}>
                  {mod.icon === MapPinned && (
                    <span className="pointer-events-none absolute inset-0 rounded-xl border border-accent/40 blur-[0.5px]" />
                  )}
                  <mod.icon className={`relative h-6 w-6 ${mod.color}`} />
                </div>
                <span className="text-xs font-bold tracking-widest text-muted-foreground">{mod.num}</span>
              </div>
              <p className={`text-[10px] font-bold tracking-widest uppercase mb-2 ${mod.color}`}>{mod.pillar}</p>
              <h3 className="text-base font-bold text-primary mb-3">{mod.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
