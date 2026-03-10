import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

const StickyPlayStore = () => {
    return (
        <motion.a
            href="https://play.google.com/store/apps/details?id=com.hls.hotelapp"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[90] flex items-center gap-3 bg-foreground text-background rounded-2xl px-5 py-3 shadow-2xl shadow-foreground/20 group border border-background/10 backdrop-blur-sm"
        >
            <div className="relative">
                <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M3.18 23.76C3.06 23.52 3 23.22 3 22.86V1.14C3 0.78 3.06 0.48 3.18 0.24L3.24 0.18L14.82 11.76V11.88V12L3.24 23.58L3.18 23.76Z" fill="#EA4335" />
                    <path d="M18.78 15.66L14.82 11.88V11.76L18.78 8.34L18.84 8.4L23.52 11.04C24.84 11.76 24.84 12.96 23.52 13.68L18.84 16.32L18.78 15.66Z" fill="#FBBC05" />
                    <path d="M18.84 16.32L14.82 12.3L3.18 23.76C3.6 24.12 4.26 24.18 5.04 23.76L18.84 16.32Z" fill="#34A853" />
                    <path d="M18.84 8.4L5.04 1.08C4.26 0.6 3.6 0.72 3.18 1.08L14.82 12.54L18.84 8.4Z" fill="#4285F4" />
                </svg>
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-white rounded-full -z-10"
                />
            </div>
            <div className="text-left leading-tight hidden sm:block">
                <p className="text-[10px] opacity-70 font-medium">GET IT ON</p>
                <p className="text-sm font-bold tracking-tight">Google Play</p>
            </div>

            {/* Small mobile version icon only or kept as is if screen small */}
            <div className="sm:hidden">
                <Smartphone className="w-4 h-4 opacity-50" />
            </div>
        </motion.a>
    );
};

export default StickyPlayStore;
