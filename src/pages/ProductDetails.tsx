import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const ProductDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-foreground">
      <main className="pt-28 pb-20">
        <div className="container max-w-5xl space-y-10">
          <motion.div {...fadeUp} className="-mt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 text-xs font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              ← Back
            </button>
          </motion.div>

          {/* Hero card */}
          <motion.section
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-r from-accent/20 via-slate-900 to-slate-900 px-8 py-10 md:px-12 md:py-12 shadow-elevated"
          >
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_top,_rgba(255,255,255,0.12)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.2)_0,_transparent_60%)]" />
            <div className="relative z-10 max-w-3xl space-y-4">
              <p className="text-xs font-bold tracking-widest text-accent uppercase">
                Platform Overview
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                AI in Real Estate &amp; Construction
              </h1>
              <p className="text-sm md:text-base text-slate-200">
                The platform addresses the common chaos in construction—fragmented data, budget overruns, and unpredictable
                risks—and replaces it with a single AI layer that brings clarity to investors, developers, and operators.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 text-[11px] md:text-xs text-slate-200/80">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-slate-900/40 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Location · Construction · Financial Intelligence
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                  &quot;Bloomberg Terminal&quot; for Built World
                </span>
              </div>
            </div>
          </motion.section>

          {/* Three-pillar overview */}
          <motion.section
            {...fadeUp}
            className="grid gap-6 md:grid-cols-3 rounded-2xl"
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 md:p-6 shadow-card-custom">
              <p className="text-[10px] font-bold tracking-widest text-accent uppercase mb-1">
                Pillar 1
              </p>
              <h2 className="text-base md:text-lg font-bold text-white">
                Location Intelligence
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-300">
                Find the right place and concept before you invest a dollar.
              </p>
              <ul className="mt-3 space-y-1.5 text-[11px] md:text-xs text-slate-300">
                <li>• ZIP + corridor scoring</li>
                <li>• What-to-build recommendations</li>
                <li>• ROI &amp; break-even forecasts</li>
                <li>• Location risk (Low / Med / High)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 md:p-6 shadow-card-custom">
              <p className="text-[10px] font-bold tracking-widest text-construction uppercase mb-1">
                Pillar 2
              </p>
              <h2 className="text-base md:text-lg font-bold text-white">
                Construction Intelligence
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-300">
                Keep projects on time and on budget from pre-con to handover.
              </p>
              <ul className="mt-3 space-y-1.5 text-[11px] md:text-xs text-slate-300">
                <li>• Drawing &amp; schedule checks</li>
                <li>• Compliance &amp; code flags</li>
                <li>• Site progress vs. plan</li>
                <li>• Material &amp; equipment tracking</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 md:p-6 shadow-card-custom">
              <p className="text-[10px] font-bold tracking-widest text-accent uppercase mb-1">
                Pillar 3
              </p>
              <h2 className="text-base md:text-lg font-bold text-white">
                Financial &amp; Risk Intelligence
              </h2>
              <p className="mt-2 text-xs md:text-sm text-slate-300">
                Give investors, lenders, and insurers one shared source of truth.
              </p>
              <ul className="mt-3 space-y-1.5 text-[11px] md:text-xs text-slate-300">
                <li>• ERP-linked budget tracking</li>
                <li>• Contract AI &amp; change orders</li>
                <li>• Portfolio risk exposure</li>
                <li>• Forecasted profit &amp; cashflow</li>
              </ul>
            </div>
          </motion.section>

          {/* Lifecycle steps */}
          <motion.section
            {...fadeUp}
            className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 md:p-7 shadow-card-custom"
          >
            <h2 className="text-lg md:text-xl font-bold text-white mb-3">
              How the platform works across the lifecycle
            </h2>
            <div className="grid gap-4 md:grid-cols-4 text-[11px] md:text-xs text-slate-200">
              <div className="space-y-1.5">
                <p className="font-semibold text-accent">Step 1 · Invest</p>
                <p>Score locations, select concepts, and size the opportunity with ROI and risk in one view.</p>
              </div>
              <div className="space-y-1.5">
                <p className="font-semibold text-construction">Step 2 · Pre‑Construction</p>
                <p>Check drawings, phasing, and contracts before you lock budgets or break ground.</p>
              </div>
              <div className="space-y-1.5">
                <p className="font-semibold text-accent">Step 3 · Build &amp; Supply Chain</p>
                <p>Track physical progress, materials, and blockers in real time against the baseline plan.</p>
              </div>
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-200">Step 4 · Finance &amp; Risk</p>
                <p>Connect costs, contracts, and performance so stakeholders see the same live truth.</p>
              </div>
            </div>
          </motion.section>

          {/* Snapshot metrics */}
          <motion.section
            {...fadeUp}
            className="rounded-2xl border border-accent/30 bg-accent/10 p-6 md:p-7 shadow-elevated"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-white">
                  Snapshot of traction &amp; differentiation
                </h2>
                <p className="mt-1 text-xs md:text-sm text-slate-100/80">
                  Unified AI across location, construction, and finance—rather than yet another point tool.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-[11px] md:text-xs text-slate-100">
                <div className="rounded-xl bg-slate-900/50 px-3 py-2">
                  <p className="text-sm md:text-base font-extrabold">10+</p>
                  <p>Pilot clients</p>
                </div>
                <div className="rounded-xl bg-slate-900/50 px-3 py-2">
                  <p className="text-sm md:text-base font-extrabold">$1.6M</p>
                  <p>ARR</p>
                </div>
                <div className="rounded-xl bg-slate-900/50 px-3 py-2">
                  <p className="text-sm md:text-base font-extrabold">94%</p>
                  <p>Retention</p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.div {...fadeUp} className="pt-2">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Back to home
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;

