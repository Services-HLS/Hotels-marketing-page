import { useState } from "react";
import {
  BedDouble,
  Users,
  Calendar,
  TrendingUp,
  ChevronRight,
  RefreshCw,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="dashboard" className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left - Dashboard Image */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">

              {/* Header */}
              <div className="bg-gradient-hero px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                    <BedDouble className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground font-display font-semibold">
                    Dashboard Overview
                  </span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                  <RefreshCw className="w-4 h-4" />
                  Synced
                </div>
              </div>

              {/* Dashboard Image */}
              <div className="p-3">
                <img
                  src="images/Admin-Dashboard.png"
                  alt="Hotel Dashboard Preview"
                  className="w-full h-auto rounded-xl border border-border shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-bold tracking-wider uppercase mb-6">
              Dashboard Preview
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
              All Your Hotel Data,{" "}
              <span className="text-gradient-primary">One Place</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              Get a complete overview of your hotel operations. Track rooms,
              bookings, guests, and revenue in real-time with our intuitive dashboard.
            </p>

            <ul className="space-y-4 mb-7">
              {[
                "Real-time room availability tracking",
                "Quick booking creation and management",
                "Guest database with complete history",
                "Automatic sync across all devices",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <div className="w-5 h-5 bg-emerald/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-3 h-3 text-emerald" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/gallery">
              <Button variant="hero" size="lg">
                Explore Dashboard
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Modal (unchanged) */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="HotelFlow Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
