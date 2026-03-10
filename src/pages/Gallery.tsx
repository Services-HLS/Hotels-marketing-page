import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BedDouble,
  Calendar,
  Users,
  TrendingUp,
  X,
  ChevronLeft,
  ChevronRight,
  Wallet,
  HeadphonesIcon,
} from "lucide-react";
import RequestDemoModal from "@/components/landing/RequestDemoModal";

const galleryItems = [
  {
    id: 1,
    title: "Main Dashboard Overview",
    description: "Get a complete bird's eye view of your hotel operations. Track real-time room availability, check-ins, check-outs, and revenue at a glance.",
    icon: BedDouble,
    color: "bg-blue-100 text-blue-600",
    image: "images/Admin-Dashboard.png",
  },
  {
    id: 2,
    title: "Booking Management",
    description: "Create, modify, and manage bookings with ease. Our intuitive calendar view shows room availability instantly.",
    icon: Calendar,
    color: "bg-blue-100 text-blue-600",
    image: "images/Bookings.png",
  },
  {
    id: 3,
    title: "Guest Management",
    description: "Maintain a comprehensive database of all your guests. View booking history, preferences, and contact information.",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
    image: "images/Guest.png",
  },
  {
    id: 4,
    title: "Income & Expenses",
    description: "Manage your hotel's cash flow effortlessly. Log miscellaneous expenses and generate instant financial statements.",
    icon: Wallet,
    color: "bg-blue-100 text-blue-600",
    image: "images/Income.png",
  },
  {
    id: 5,
    title: "Revenue Analytics",
    description: "Track your hotel's financial performance with detailed analytics. Monitor daily, weekly, and monthly revenue trends.",
    icon: TrendingUp,
    color: "bg-blue-100 text-blue-600",
    image: "images/Revenue.png",
  },
  {
    id: 6,
    title: "24/7 Contact Support",
    description: "Access direct help via WhatsApp or Call directly from your dashboard. Our dedicated team is ready to assist you anytime.",
    icon: HeadphonesIcon,
    color: "bg-blue-100 text-blue-600",
    image: "images/Contact.png",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleDemoSubmit = (data: any) => {
    const whatsappNumber = "917795791587";
    const header = "*Demo request for hotel management system*";
    const body = `
--------------------------------------
*Full Name:* ${data.fullName}
*Hotel Name:* ${data.hotelName}
*Room Count:* ${data.roomCount || "Not specified"}
*Phone:* ${data.phone}
*Email:* ${data.email}
*Message:* ${data.message || "No additional message"}
    `.trim();

    const encodedText = encodeURIComponent(`${header}\n${body}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium text-sm">Back to Home</span>
            </Link>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hidden sm:flex">
                <BedDouble className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-slate-900 hidden sm:block">Hotel Management System</span>
            </div>

            <RequestDemoModal onSubmit={handleDemoSubmit}>
              <Button variant="hero" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Request Demo
              </Button>
            </RequestDemoModal>
          </div>
        </div>
      </header>

      <section className="py-12 lg:py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
            Feature Showcase
          </span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            See HotelFlow <span className="text-blue-600">In Action</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">Explore our comprehensive dashboard features with this visual walkthrough.</p>
        </div>
      </section>

      {/* Gallery List */}
      <section className="pb-20 space-y-24">
        <div className="container mx-auto px-4">
          {galleryItems.map((item, index) => (
            <div key={item.id} className={`flex flex-col lg:flex-row items-center gap-12 mb-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-3/5 group cursor-pointer" onClick={() => setSelectedImage(index)}>
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                  <div className="bg-slate-900 px-4 py-2 flex gap-1.5 border-b border-slate-800">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <img src={item.image} alt={item.title} className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
              </div>
              <div className="w-full lg:w-2/5 space-y-6">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed">{item.description}</p>
                <Button onClick={() => setSelectedImage(index)} variant="outline" className="border-blue-200 text-blue-600">View Image</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox logic remains the same */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white"><X className="w-8 h-8" /></button>
          <div className="max-w-6xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img src={galleryItems[selectedImage].image} className="w-full h-auto" />
            <div className="p-6 flex justify-between items-center">
              <h4 className="text-xl font-bold">{galleryItems[selectedImage].title}</h4>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full"><ChevronLeft /></Button>
                <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full"><ChevronRight /></Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;