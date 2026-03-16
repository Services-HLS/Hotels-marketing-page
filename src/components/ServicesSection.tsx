import { motion } from "framer-motion";
import { MessageSquare, Settings, Boxes } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: MessageSquare,
    label: "Consulting",
    title: "Strategic Advisory",
    desc: "Work with our team to fit Smart Location into your projects, from site selection through construction risk reviews.",
    features: [
      "Site selection & portfolio workshops",
      "Pre‑construction risk & schedule reviews",
      "Playbooks for using dashboards in weekly meetings",
      "Executive briefings for investors and lenders",
    ],
  },
  {
    icon: Settings,
    label: "Managed Services",
    title: "Managed Operations & Automation",
    desc: "We run the platform for you — monitoring dashboards, chasing red flags, and preparing decision-ready reports.",
    features: [
      "Continuous monitoring of projects & supply chain",
      "Weekly risk & opportunity calls with your team",
      "Automated alerts and executive-ready status reports",
      "Hands-on support rolling out new modules",
    ],
  },
  {
    icon: Boxes,
    label: "Products",
    title: "Platform & Tools",
    desc: "Use our SaaS modules directly and plug Smart Location into your existing tools and workflows.",
    features: [
      "Smart Location Advisory (ZIP-level scoring)",
      "Construction & Supply Chain Intelligence dashboards",
      "Contract & Risk AI and Financial integrations",
      "AI Intelligence Layer for forecasting ROI & delays",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 scroll-mt-24 md:scroll-mt-28">
      <div className="container">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">How We Deliver</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
            Our Service Models
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three ways to engage — consulting, managed automation, and self-serve products.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((svc, i) => (
            <motion.div
              key={svc.label}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group flex flex-col rounded-2xl border border-border bg-white p-8 shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex rounded-xl bg-accent/10 p-3 self-start group-hover:bg-accent/20 transition-colors">
                <svc.icon className="h-7 w-7 text-accent" />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-accent uppercase mb-1">{svc.label}</span>
              <h3 className="mb-3 text-lg font-bold text-primary">{svc.title}</h3>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed flex-1">{svc.desc}</p>
              <ul className="space-y-2.5 border-t border-border pt-5">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
