import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Building2, ChevronDown } from "lucide-react";

// The Interface update to fix the "onSubmit" error
interface RequestDemoModalProps {
  children: React.ReactNode;
  onSubmit?: (data: any) => void; 
}

const RequestDemoModal = ({ children, onSubmit }: RequestDemoModalProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    hotelName: "",
    roomCount: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none bg-white rounded-3xl shadow-2xl">
        <div className="p-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Request a Demo</h3>
          </div>
          <p className="text-slate-500 text-sm mb-6">Fill in your details and we'll schedule a personalized demo for your hotel.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                <input required name="fullName" placeholder="John Smith" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                <input required type="email" name="email" placeholder="john@hotel.com" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
                <input required name="phone" placeholder="+91 98765 43210" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Hotel Name *</label>
                <input required name="hotelName" placeholder="Grand Hotel" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Number of Rooms</label>
              <div className="relative">
                <select name="roomCount" className="w-full appearance-none px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}>
                  <option value="">Select room count</option>
                  <option value="1-20">1 - 20 Rooms</option>
                  <option value="21-50">21 - 50 Rooms</option>
                  <option value="50+">50+ Rooms</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Additional Message (Optional)</label>
              <textarea name="message" placeholder="Tell us about your requirements..." className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 resize-none h-24" onChange={handleChange} />
            </div>

            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 py-6 text-lg font-bold rounded-2xl flex items-center justify-center gap-2">
              Request Demo <span>→</span>
            </Button>
            <p className="text-[10px] text-center text-slate-400">By submitting, you agree to our privacy policy and terms of service.</p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RequestDemoModal;