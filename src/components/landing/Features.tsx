import { motion } from "framer-motion";
import {
  BedDouble, CalendarCheck, Users, TrendingUp,
  MessageCircle, Shield, BarChart3, Bell
} from "lucide-react";

const features = [
  { icon: BedDouble, title: "Room Management", description: "View total rooms, available rooms, and booked rooms in a clean, intuitive dashboard.", color: "bg-primary/10 text-primary" },
  { icon: CalendarCheck, title: "Booking Management", description: "Quick access to view all bookings and create new bookings from Quick Actions.", color: "bg-emerald/10 text-emerald" },
  { icon: Users, title: "Guest Management", description: "Maintain total customers and guest details, easily accessible from View Customers.", color: "bg-amber/10 text-amber" },
  { icon: TrendingUp, title: "Financial Reports", description: "Revenue reports, profit analysis, expense tracking, and tax calculations.", color: "bg-teal/10 text-teal" },
  { icon: BarChart3, title: "Revenue Insights", description: "Track revenue trends and overall financial performance to improve decisions.", color: "bg-primary/10 text-primary" },
  { icon: MessageCircle, title: "WhatsApp Automation", description: "Auto check-in/check-out reminders, bulk messaging, and delivery reports.", color: "bg-emerald/10 text-emerald" },
  { icon: Bell, title: "Real-time Sync", description: "Always know your data is up to date with real-time sync status display.", color: "bg-amber/10 text-amber" },
  { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security to protect your hotel and guest data.", color: "bg-teal/10 text-teal" },
];

const Features = () => {
  return (
    <section id="features" className="py-12 lg:py-16 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-bold tracking-wider uppercase mb-6"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight"
          >
            Everything You Need to <span className="text-gradient-primary">Run Your Hotel</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            A modern, intuitive hotel management system to handle room availability, bookings, and guest details from a single dashboard.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              {/* Subtle Decorative Background Element */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;