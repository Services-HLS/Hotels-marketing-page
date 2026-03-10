import { motion } from "framer-motion";
import { Smartphone, Download, Shield, Zap, CheckCircle2, Cloud, RefreshCw } from "lucide-react";

const appFeatures = [
    { icon: Zap, text: "Real-time room status updates" },
    { icon: Shield, text: "Secure access from anywhere" },
    { icon: CheckCircle2, text: "One-tap check-in & check-out" },
    { icon: RefreshCw, text: "Instant Data Synchronization" },
];

const AppDownload = () => {
    return (
        <section id="app-download" className="pt-12 pb-20 lg:pt-16 lg:pb-28 relative overflow-hidden bg-background">
            {/* Background Aesthetic Gradients */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(var(--primary-rgb),0.03),transparent_50%)]" />
                <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-emerald-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left: Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-10"
                    >
                        {/* Premium Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2.5 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold tracking-wide uppercase shadow-sm shadow-primary/5"
                        >
                            <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                            <Smartphone className="w-4 h-4" />
                            Mobile App Now Live
                        </motion.div>

                        <div className="space-y-6 text-center lg:text-left">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-foreground"
                            >
                                Manage Your Hotel{" "}
                                <span className="text-gradient-primary">Anywhere, Anytime</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium"
                            >
                                Take control of your operations with our user-friendly Android app. Built for speed, security, and seamless guest management on the go.
                            </motion.p>
                        </div>

                        {/* Feature Cards for better UX */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {appFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -4, borderColor: "rgba(var(--primary-rgb),0.3)" }}
                                    className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-base font-bold text-foreground/90 pt-1.5">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Ratings & Call to Action */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                            <motion.a
                                href="https://play.google.com/store/apps/details?id=com.hls.hotelapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-5 bg-navy text-white rounded-2xl px-8 py-5 hover:bg-navy/90 transition-all shadow-2xl group border-t border-white/10"
                            >
                                <svg viewBox="0 0 24 24" className="w-10 h-10 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.18 23.76C3.06 23.52 3 23.22 3 22.86V1.14C3 0.78 3.06 0.48 3.18 0.24L3.24 0.18L14.82 11.76V11.88V12L3.24 23.58L3.18 23.76Z" fill="#EA4335" />
                                    <path d="M18.78 15.66L14.82 11.88V11.76L18.78 8.34L18.84 8.4L23.52 11.04C24.84 11.76 24.84 12.96 23.52 13.68L18.84 16.32L18.78 15.66Z" fill="#FBBC05" />
                                    <path d="M18.84 16.32L14.82 12.3L3.18 23.76C3.6 24.12 4.26 24.18 5.04 23.76L18.84 16.32Z" fill="#34A853" />
                                    <path d="M18.84 8.4L5.04 1.08C4.26 0.6 3.6 0.72 3.18 1.08L14.82 12.54L18.84 8.4Z" fill="#4285F4" />
                                </svg>
                                <div>
                                    <p className="text-xs opacity-60 font-medium leading-none mb-1">DOWNLOAD FOR FREE</p>
                                    <p className="text-xl font-black leading-none tracking-tight">Google PlayStore</p>
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right: Phone Mockup with user image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex justify-center relative"
                    >
                        {/* Dramatic Glow behind phone */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none">
                            <div className="w-[120%] h-[120%] bg-primary/20 rounded-full blur-[140px] opacity-40 animate-pulse" />
                        </div>

                        <div className="relative">
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                {/* Professional Phone Frame with HIGHLIGHTED BLUE BORDER */}
                                <div className="relative w-[280px] sm:w-[320px] bg-slate-900 rounded-[3rem] p-3.5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_30px_60px_-30px_rgba(0,0,0,0.5)] border-4 border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]">

                                    {/* Bezel details */}
                                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-40 border border-white/5" />

                                    {/* Screen Container - SHORTER HEIGHT TO COVER SPACE */}
                                    <div className="relative bg-slate-950 rounded-[2.2rem] overflow-hidden h-[480px] sm:h-[540px] border border-white/5 group">
                                        <img
                                            src="images/Login.jpeg"
                                            alt="App Mobile Interface"
                                            className="w-full h-full object-cover object-top rounded-[2.2rem] shadow-inner"
                                        />

                                        {/* Overlay to blend image into phone look */}
                                        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] bg-gradient-to-b from-transparent via-transparent to-black/20" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Enhanced Floating Badges */}

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AppDownload;
