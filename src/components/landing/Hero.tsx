import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X, Building2, User, Mail, Phone, MessageSquare } from "lucide-react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    hotelName: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "Demo request for hotel management system";
    const bodyText = `
${subject}
-------------------------
Full Name: ${formData.fullName}
Hotel Name: ${formData.hotelName}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
    `.trim();

    // 1. Send to WhatsApp
    const whatsappNumber = "917795791587"; // Your Number
    const encodedMessage = encodeURIComponent(bodyText);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

    // 2. Trigger Mail
    const mailtoLink = `mailto:services@hithlakshsolutions.com?subject=${encodeURIComponent(subject)}&body=${encodedMessage}`;
    window.location.href = mailtoLink;

    setShowDemoModal(false);
  };

  return (
    <section className="relative flex items-center pt-32 pb-12 lg:pt-40 lg:pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              Simplify Your Hotel Operations in{" "}
              <span className="text-gradient-primary relative">
                One Smart Dashboard
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 8" fill="none">
                  <path d="M1 5.26C71.33 2.13 141.66 1 212 1c48.66 0 97.33 0.78 145 2.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The all-in-one platform to manage rooms, bookings, and guests with zero technical friction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => setShowDemoModal(true)}
                variant="hero" size="xl" className="shadow-lg shadow-primary/25 hover:scale-105 transition-transform"
              >
                Request Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              {/* <Button variant="heroOutline" size="xl" onClick={() => setShowVideo(true)} className="backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2" /> Watch Video
              </Button> */}
            </div>
          </motion.div>

          {/* Right Content Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative perspective-1000"
          >
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden group">
              <div className="bg-navy/95 px-6 py-3 flex items-center gap-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
              </div>
              <div className="p-2 bg-slate-950/50">
                <img src="images/Dashboard.png" alt="Dashboard" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- REQUEST DEMO MODAL --- */}
      <AnimatePresence>
        {showDemoModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowDemoModal(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-background border border-border rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">Request a Demo</h2>
                    <p className="text-muted-foreground text-sm mt-1">We'll show you how HotelFlow works.</p>
                  </div>
                  <button onClick={() => setShowDemoModal(false)} className="p-2 hover:bg-secondary rounded-full">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                      <input required name="fullName" onChange={handleInputChange} className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Hotel Name</label>
                      <input required name="hotelName" onChange={handleInputChange} className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20" placeholder="Grand Resort" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <input required type="email" name="email" onChange={handleInputChange} className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                    <input required name="phone" onChange={handleInputChange} className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20" placeholder="+91 00000 00000" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message (Optional)</label>
                    <textarea name="message" onChange={handleInputChange} rows={3} className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 ring-primary/20 resize-none" placeholder="How can we help?" />
                  </div>

                  <Button type="submit" variant="hero" className="w-full py-7 text-lg shadow-xl shadow-primary/20">
                    Submit Request
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Modal logic remains same */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
          <button className="absolute top-6 right-6 p-2 text-white/50"><X className="w-8 h-8" /></button>
          <iframe width="80%" height="80%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="Demo Video" frameBorder="0" allowFullScreen className="rounded-2xl" />
        </div>
      )}
    </section>
  );
};

export default Hero;