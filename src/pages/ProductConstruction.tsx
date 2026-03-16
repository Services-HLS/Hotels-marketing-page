import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import constructionBg from "@/assets/construction-bg.jpg";
import { HardHat, ScanLine, Truck, BarChart3 } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const ProductConstruction = () => {
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

          {/* Hero with background image */}
          <motion.section
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl border border-construction/30 bg-slate-950/80 shadow-elevated"
          >
            <div className="absolute inset-0">
              <img
                src={constructionBg}
                alt="Real-time construction monitoring"
                className="h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/60" />
            </div>
            <div className="relative z-10 px-8 py-10 md:px-12 md:py-12 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-construction/20 px-3 py-1 text-[11px] font-semibold text-construction">
                <HardHat className="h-3 w-3" /> Construction Intelligence · Real-time
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                How Construction Intelligence Works in Real Time
              </h1>
              <p className="text-sm md:text-base text-slate-100/90 max-w-2xl">
                From drawings to drones, the platform gives owners, GCs, and lenders a live view of risk, schedule, and
                cost—on every project and every site.
              </p>
            </div>
          </motion.section>

          {/* Real-time flow */}
          <motion.section
            {...fadeUp}
            className="grid gap-6 md:grid-cols-3 rounded-2xl"
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 md:p-6 shadow-card-custom">
              <p className="text-[10px] font-bold tracking-widest text-construction uppercase mb-1">
                01 · Before Groundbreak
              </p>
              <h2 className="text-base md:text-lg font-bold text-white mb-2">Pre‑Construction Checks</h2>
              <p className="text-xs md:text-sm text-slate-300">
                Upload drawings, schedules, and budgets—AI flags conflicts, scope gaps, and code risks before contracts are signed.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 md:p-6 shadow-card-custom">
              <p className="text-[10px] font-bold tracking-widest text-construction uppercase mb-1">
                02 · During Build
              </p>
              <h2 className="text-base md:text-lg font-bold text-white mb-2">Live Site Monitoring</h2>
              <p className="text-xs md:text-sm text-slate-300">
                Drones, photos, and field updates are compared to the plan so % complete, delays, and risks are visible every day.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 md:p-6 shadow-card-custom">
              <p className="text-[10px] font-bold tracking-widest text-construction uppercase mb-1">
                03 · Supply &amp; Hand‑over
              </p>
              <h2 className="text-base md:text-lg font-bold text-white mb-2">Supply Chain &amp; Quality</h2>
              <p className="text-xs md:text-sm text-slate-300">
                Every critical material and asset is tracked from manufacturer to site so hand‑over happens with full evidence.
              </p>
            </div>
          </motion.section>

          {/* Dashboard-style images + bullets */}
          <motion.section
            {...fadeUp}
            className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] rounded-2xl border border-slate-800 bg-slate-950/80 p-6 md:p-8 shadow-card-custom"
          >
            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-white">
                What you see in the live dashboard
              </h2>
              <ul className="space-y-1.5 text-xs md:text-sm text-slate-200">
                <li>• Portfolio view of all active projects with risk and delay scores.</li>
                <li>• Site‑level timeline showing planned vs. actual progress and budget burn.</li>
                <li>• Red‑flag feed for RFIs, change orders, safety issues, and inspections.</li>
                <li>• Supply chain lane view—from factory to jobsite dock—with delay impact.</li>
                <li>• Drill‑downs into specific trades, locations, or contractors in one click.</li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900">
              <img
                src="/Dashboard.png"
                alt="Construction intelligence dashboard overview"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4">
                <p className="text-[11px] md:text-xs font-semibold text-slate-100">
                  Example: construction intelligence dashboard combining schedule, risk, and supply chain insights.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Outcomes */}
          <motion.section
            {...fadeUp}
            className="rounded-2xl border border-construction/40 bg-construction/10 p-6 md:p-7 shadow-elevated"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-1">
                <p className="text-[10px] font-bold tracking-widest text-construction uppercase">
                  Outcomes in the field
                </p>
                <h2 className="text-lg md:text-xl font-bold text-white">
                  From reactive firefighting to proactive control
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-[11px] md:text-xs text-slate-100">
                <div className="rounded-xl bg-slate-950/60 px-3 py-2">
                  <p className="text-sm md:text-base font-extrabold">↓ Delays</p>
                  <p>Fewer surprise slips</p>
                </div>
                <div className="rounded-xl bg-slate-950/60 px-3 py-2">
                  <p className="text-sm md:text-base font-extrabold">↓ Waste</p>
                  <p>Right‑time materials</p>
                </div>
                <div className="rounded-xl bg-slate-950/60 px-3 py-2">
                  <p className="text-sm md:text-base font-extrabold">↑ Trust</p>
                  <p>Shared live view</p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default ProductConstruction;

