import { Check, Sparkles, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "BASIC",
    price: "₹0",
    period: "/month",
    description: "Small Hotels – Limited",
    validity: "Life Time Free",
    goLive: "Less than a minute",
    features: [
      "5,000 Records limit",
      "Basic booking register",
      "Manual room status (max 20 rooms)",
      "Simple digital form (no history)",
      "Mobile version (limited view only)",
      "Basic print invoice",
      "Manual payment entry only",
      "Daily Check-in/out reports",
      "Basic summary dashboard",
      "Help docs only support",
    ],
    cta: "Start Free",
    href: "https://hms.hithlakshsolutions.com/", // External Link
    variant: "heroOutline" as const,
    popular: false,
  },
  {
    name: "PRO",
    price: "₹999",
    period: "/month",
    description: "Boutique / 20–70 Rooms",
    subtext: "First 6 months (annual payment required)",
    validity: "Renew every year",
    goLive: "Less than 1 hour",
    features: [
      "50,000 Records limit",
      "Full PMS: Room allocation & CI/CO",
      "Housekeeping app + live status",
      "Automated CI/CO + guest history",
      "Full mobile app for staff & owner",
      "GST invoice generator",
      "Online payments & split billing",
      "Daily revenue + Audit reports",
      "Attendance + Payroll management",
      "WhatsApp reminders & tasks",
      "Booking.com/MMT/Goibibo sync",
      "Daily MIS via WhatsApp",
      "POS integration optional",
      "WhatsApp & Call support",
    ],
    cta: "Contact Sales",
    href: "#footer", // Scroll to Footer
    variant: "hero" as const,
    popular: true,
    footerBadge: "First 6 months (annual payment required)"
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    period: "",
    description: "Hotel Chains",
    priceLabel: "Contact for pricing",
    validity: "Renew every year",
    goLive: "In a day",
    features: [
      "No Limit on records",
      "Chain-level PMS & coordination",
      "Central housekeeping monitoring",
      "Central guest database (Chain-wide)",
      "Advanced chain manager mobile app",
      "Multi-property GST/ledger system",
      "Central finance dashboard",
      "Chain-level analytics (ADR/RevPAR)",
      "Multi-property HR & approvals",
      "Advanced WhatsApp automation",
      "Centralized Multi-OTA management",
      "Group-level performance dashboard",
      "AI pricing engine + forecasting",
      "Full API + Smart locks + Channel managers",
      "Dedicated manager + SLA",
    ],
    cta: "Contact Sales",
    href: "#footer", // Scroll to Footer
    variant: "heroOutline" as const,
    popular: false,
  },
];

const Pricing = () => {
  const handleScrollToFooter = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#footer") {
      e.preventDefault();
      const footer = document.querySelector("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="pricing" className="bg-secondary/30 py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-1">
            Pricing Plans Overview
          </h2>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
            Choose the right scale for your business
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-xl p-5 border flex flex-col transition-all duration-300 ${plan.popular
                ? "border-primary shadow-xl scale-105 z-10 pb-10"
                : "border-border"
                }`}
            >
              {/* Top Badge (Most Popular) */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[9px] font-black flex items-center gap-1 shadow-lg whitespace-nowrap">
                  <Sparkles className="w-3 h-3" /> MOST POPULAR
                </div>
              )}

              <div className="text-center border-b pb-4 mb-4">
                <h3 className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-2">{plan.name}</h3>
                <div className="flex flex-col items-center justify-center min-h-[80px]">
                  <div className="flex items-center gap-2">

                    <span className={`font-display font-bold text-foreground ${plan.popular ? "text-5xl" : "text-4xl"}`}>
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium self-end mb-1">
                      {plan.period}
                    </span>
                  </div>

                  {plan.priceLabel && <span className="text-xs font-bold text-primary mt-1">{plan.priceLabel}</span>}
                  {plan.subtext && (
                    <span className="text-[9px] leading-tight text-primary font-bold bg-primary/10 px-2 py-1 rounded mt-2 max-w-[180px]">
                      {plan.subtext}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground font-semibold mt-3 italic">{plan.description}</p>
              </div>

              {/* Status Badges */}
              <div className="grid grid-cols-2 gap-2 mb-4 text-[9px] font-bold text-muted-foreground uppercase">
                <div className="bg-secondary/60 p-2 rounded text-center">Valid: {plan.validity}</div>
                <div className="bg-secondary/60 p-2 rounded text-center">Live: {plan.goLive}</div>
              </div>

              {/* Features List */}
              <ul className="space-y-2 mb-6 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[11px] text-foreground/90 font-medium leading-tight">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href={plan.href}
                  target={plan.href.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  onClick={(e) => handleScrollToFooter(e, plan.href)}
                >
                  <Button variant={plan.variant} className={`w-full text-xs font-bold py-6 ${plan.popular ? 'shadow-lg' : ''}`}>
                    {plan.cta}
                  </Button>
                </a>
              </div>

              {/* Bottom Badge for PRO Plan */}
              {plan.popular && plan.footerBadge && (
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-[8px] font-bold flex items-center gap-1 shadow-md whitespace-nowrap border-2 border-background uppercase tracking-tighter">

                  <Sparkles className="w-3 h-3" /> {plan.footerBadge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;