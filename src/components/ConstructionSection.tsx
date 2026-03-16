import { motion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  FileWarning,
  ClipboardCheck,
  Handshake,
  Users,
  TrendingUp,
  Package,
  Truck,
  Recycle,
  ScanLine,
  HardHat,
  MapPinned,
  FileText,
  Brain,
  Shield,
  Clock3,
} from "lucide-react";
import constructionBg from "@/assets/construction-bg.jpg";
import supplyChainBg from "@/assets/supply-chain-bg.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const preConstructionIntelligence = [
  { icon: ScanLine, title: "Drawing Clash Detection", desc: "Catch HVAC/steel conflicts, layout issues, and constructability risks before fieldwork begins." },
  { icon: ClipboardCheck, title: "Scope Gap Checks", desc: "Spot missing scope and assumptions early to avoid disputes and surprise change orders." },
  { icon: BarChart3, title: "Schedule Stress Testing", desc: "Stress the baseline against weather and supply risk to identify likely delay hotspots." },
  { icon: FileWarning, title: "Compliance Flags", desc: "Surface code and permit risks early to prevent rework and inspection failures." },
];

const constructionMonitoring = [
  { icon: Shield, title: "Progress vs Plan", desc: "Track percent complete and critical path health across all sites in one control panel." },
  { icon: FileWarning, title: "Red-Flag Alerts", desc: "Early alerts for trade delays, missed inspections, safety incidents, and quality risks." },
  { icon: Users, title: "Trade Accountability", desc: "Drill down by trade partner, package, or site to see who is blocking the next phase." },
  { icon: BarChart3, title: "Portfolio Reporting", desc: "Board-ready dashboards for owners, lenders, and leadership without manual spreadsheets." },
];

const smartLocationAdvisory = [
  { icon: MapPinned, title: "ZIP & Corridor Scoring", desc: "Compare corridors and ZIP codes using demand signals, access, and construction constraints." },
  { icon: BarChart3, title: "ROI & Break-Even Forecasts", desc: "See projected ROI (e.g. ~18%) and break-even timelines before committing capital." },
  { icon: AlertTriangle, title: "Permitting & Zoning Risk", desc: "Surface hidden zoning hurdles and permitting risk early to avoid redesigns and delays." },
  { icon: ClipboardCheck, title: "Go / No-Go Recommendations", desc: "Clear rationale and a next-step checklist for investment committees and development teams." },
];

const supplyChainMaterials = [
  { icon: Package, title: "Factory-to-Dock Tracking", desc: "Know where critical materials are, when they arrive, and what tasks they unblock." },
  { icon: Truck, title: "ETA & Delay Impact", desc: "If steel or windows are late, see the domino effect on the full schedule automatically." },
  { icon: Recycle, title: "Waste & Re-Order Signals", desc: "Reduce over-ordering and rework with usage analytics and just-in-time deliveries." },
  { icon: ScanLine, title: "Quality & Acceptance", desc: "Accepted/Rejected workflows tied to documentation and field validation." },
];

const contractRiskManagement = [
  { icon: FileText, title: "Pay Apps & Invoicing", desc: "Unify pay apps, invoices, and approvals so cash flow is visible and auditable." },
  { icon: ClipboardCheck, title: "Change Order Control", desc: "Track CO status, cost impact, and schedule impact with clear accountability." },
  { icon: AlertTriangle, title: "Budget & Contingency", desc: "See budget burn, forecasted final cost, and remaining contingency in one view." },
  { icon: BarChart3, title: "ERP Alignment", desc: "Map cost codes and budgets to keep finance, project teams, and leadership aligned." },
];

const aiIntelligenceLayer = [
  {
    icon: TrendingUp,
    title: "ROI Forecasting",
    desc: "Forecast project ROI and payback periods using live and historical signals, so investors can see expected return bands before committing. Quickly compare scenarios by tweaking rents, costs, and schedules.",
  },
  {
    icon: Clock3,
    title: "Delay Prediction",
    desc: "Predict schedule slips early by combining historical benchmarks with live jobsite data like RFIs, inspections, and late deliveries. Surface the trades and tasks most likely to push the critical path.",
  },
  {
    icon: Brain,
    title: "Scenario Planning",
    desc: "Simulate what happens if a shipment slips, a trade falls behind, or weather hits a key phase. See the impact on finish dates, cost exposure, and contingency so teams can choose the best mitigation plan.",
  },
  {
    icon: Shield,
    title: "Risk & Confidence Scoring",
    desc: "Score overall project risk and confidence in hand-over dates and budgets using all platform signals. Give leadership a single, simple score they can track week over week to see whether risk is rising or falling.",
  },
];

const materialTracking = [
  { icon: Package, title: "Material Tracking", desc: "End-to-end visibility from manufacturer to site — quantity, spec, and delivery" },
  { icon: Truck, title: "Supply Chain Intel", desc: "Live transportation tracking and supplier coordination hub" },
  { icon: Recycle, title: "Waste Control", desc: "AI-optimized ordering to reduce wastage at every construction stage" },
  { icon: ScanLine, title: "Quality Checks", desc: "Accepted/Rejected workflow with IoT sensor validation and documentation" },
];

const CardGrid = ({ items, accent }: { items: typeof preConstructionIntelligence; accent: "construction" | "accent" }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {items.map((item, i) => (
      <motion.div
        key={item.title}
        {...fadeUp}
        transition={{ duration: 0.5, delay: i * 0.08 }}
        className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all"
      >
        <div className="mb-4 relative inline-flex h-9 w-9 items-center justify-center">
          <div
            className={`absolute inset-0 rounded-full opacity-40 blur-[0.5px] transition-opacity group-hover:opacity-70 ${
              accent === "construction"
                ? "bg-gradient-to-br from-construction/70 via-construction/30 to-transparent"
                : "bg-gradient-to-br from-accent/70 via-accent/30 to-transparent"
            }`}
          />
          <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 group-hover:bg-white/15 group-hover:ring-white/25 transition-all duration-300">
            <item.icon
              className={`h-4 w-4 ${
                accent === "construction" ? "text-construction" : "text-accent"
              } opacity-95 group-hover:opacity-100 transition-opacity`}
            />
          </div>
        </div>
        <h4 className="mb-2 text-sm font-bold text-white">{item.title}</h4>
        <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
      </motion.div>
    ))}
  </div>
);

const ConstructionSection = () => {
  return (
    <section id="construction" className="relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
      {/* Hero banner for construction */}
      <div className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={constructionBg} alt="AI-powered construction" className="h-full w-full object-cover" />
          <div className="absolute inset-0 section-overlay" />
        </div>

        <div className="container relative z-10">
          {/* Header */}
          <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto mb-16">
            <div className="mx-auto mb-4 inline-flex rounded-xl bg-construction/20 p-3">
              <HardHat className="h-8 w-8 text-construction" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Construction Intelligence Platform
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/60 mx-auto max-w-4xl">
              From site selection to final hand‑over — Smart Location Advisory, Pre‑Construction Intelligence, Construction Monitoring,
              Supply Chain &amp; Materials, Contract &amp; Risk Management, and AI forecasts in one place.
            </p>
          </motion.div>

          {/* Smart Location Advisory */}
          <div className="mb-20">
            <motion.div {...fadeUp} className="mb-8 max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold tracking-widest text-construction">01</span>
                <div className="h-px flex-1 bg-construction/30" />
              </div>
              <h3 className="text-xl font-bold text-white md:text-2xl">Smart Location Advisory</h3>
              <p className="mt-2 text-white/50 whitespace-nowrap">
                Choose the right site with data-backed scoring for demand, permitting risk, and construction feasibility — before you break ground.
              </p>
            </motion.div>
            <CardGrid items={smartLocationAdvisory} accent="construction" />
          </div>

          {/* Pre-Construction Intelligence */}
          <div className="mb-20">
            <motion.div {...fadeUp} className="mb-8 max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold tracking-widest text-construction">02</span>
                <div className="h-px flex-1 bg-construction/30" />
              </div>
              <h3 className="text-xl font-bold text-white md:text-2xl">Pre-Construction Intelligence</h3>
              <p className="mt-2 text-white/50 whitespace-nowrap">
                De-risk the project before groundbreak — catch clashes, scope gaps, and schedule risk while changes are still cheap.
              </p>
            </motion.div>
            <CardGrid items={preConstructionIntelligence} accent="construction" />
          </div>

          {/* Construction Monitoring */}
          <div className="mb-20">
            <motion.div {...fadeUp} className="mb-8 max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold tracking-widest text-construction">03</span>
                <div className="h-px flex-1 bg-construction/30" />
              </div>
              <h3 className="text-xl font-bold text-white md:text-2xl">Construction Monitoring</h3>
              <p className="mt-2 text-white/50 whitespace-nowrap">
                Run a live project room — see progress vs. plan, red flags, and accountability across every jobsite.
              </p>
            </motion.div>
            <CardGrid items={constructionMonitoring} accent="construction" />
          </div>

          {/* Supply Chain & Materials */}
          <div className="mb-20">
            <motion.div {...fadeUp} className="mb-8 max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold tracking-widest text-construction">04</span>
                <div className="h-px flex-1 bg-construction/30" />
              </div>
              <h3 className="text-xl font-bold text-white md:text-2xl">Supply Chain & Materials</h3>
              <p className="mt-2 text-white/50 whitespace-nowrap">
                Keep crews moving with factory-to-dock visibility, delay impact analysis, and waste reduction signals.
              </p>
            </motion.div>
            <CardGrid items={supplyChainMaterials} accent="construction" />
          </div>

          {/* Contract & Risk Management */}
          <div className="mb-20">
            <motion.div {...fadeUp} className="mb-8 max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold tracking-widest text-construction">05</span>
                <div className="h-px flex-1 bg-construction/30" />
              </div>
              <h3 className="text-xl font-bold text-white md:text-2xl">Contract & Risk Management</h3>
              <p className="mt-2 text-white/50 whitespace-nowrap">
                Connect pay apps and ERPs so every stakeholder sees the same budget, contingency, and change order picture.
              </p>
            </motion.div>
            <CardGrid items={contractRiskManagement} accent="construction" />
          </div>

          {/* AI Intelligence Layer */}
          <div>
            <motion.div {...fadeUp} className="mb-8 max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold tracking-widest text-construction">06</span>
                <div className="h-px flex-1 bg-construction/30" />
              </div>
              <h3 className="text-xl font-bold text-white md:text-2xl">AI Intelligence Layer</h3>
              <p className="mt-2 text-white/50 whitespace-nowrap">
                Predict budget drift and schedule delays with simulation, forecasting, and confidence scoring — before issues hit the critical path.
              </p>
            </motion.div>
            <CardGrid items={aiIntelligenceLayer} accent="construction" />

            <motion.div {...fadeUp} className="mt-8 text-center">
              <a
                href="/product/construction"
                className="inline-flex items-center justify-center rounded-xl border border-construction/50 bg-black/20 px-5 py-2.5 text-xs font-semibold text-white hover:bg-construction hover:text-slate-950 transition-colors"
              >
                See how the Construction product works in real time →
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;
