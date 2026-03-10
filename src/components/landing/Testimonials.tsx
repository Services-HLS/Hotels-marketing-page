import { Star, MoreVertical } from "lucide-react";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "siva reddy",
    date: "18 February 2026",
    content: "An all-in-one app for my hotel that has made my life much easier. I highly recommend using it for at least a month — you won't want to stop",
    rating: 5,
    helpful: "1 person found this review helpful",
    color: "bg-[#282725]"
  },
  {
    name: "gowtham reddY",
    date: "16 February 2026",
    content: "I've been using Hotel 360 to manage hotel operations and overall it's a useful app for tracking room bookings, guest check-ins and check-outs. The interface is quite easy to use.",
    rating: 5,
    helpful: "2 people found this review helpful",
    color: "bg-[#8D6E63]"
  },
  {
    name: "Chandra sekhar B",
    date: "16 February 2026",
    content: "save the time and cost, easy to use",
    rating: 5,
    helpful: "1 person found this review helpful",
    color: "bg-[#2E7D32]"
  },
  {
    name: "SAI SRINIVASA TRANSPORT",
    date: "20 February 2026",
    content: "hotel 360 Online booking, inventory, reporting in one system",
    rating: 5,
    helpful: "",
    color: "bg-[#9C27B0]"
  },
];

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section id="testimonials" className="pt-12 lg:pt-16 pb-2 sm:pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-bold tracking-wider uppercase mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
            Loved by{" "}
            <span className="text-gradient-primary">Hoteliers</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See what hotel owners and managers are saying about HotelFlow.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto px-4 sm:px-12 relative">
          <Carousel
            plugins={[plugin.current]}
            opts={{ align: "start", loop: true }}
            className="w-full"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
          >
            <CarouselContent className="-ml-4 items-stretch">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 flex">
                  <div
                    className="bg-card w-full h-full rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Review Header */}
                    <div className="flex items-center justify-between mb-4 shrink-0">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-medium shrink-0 ${testimonial.color}`}>
                          {testimonial.name.charAt(0).toUpperCase()}
                        </div>
                        <p className="font-medium text-foreground text-base tracking-tight">{testimonial.name}</p>
                      </div>
                      <button className="text-muted-foreground hover:bg-secondary/50 p-2 rounded-full transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Rating and Date */}
                    <div className="flex items-center gap-3 mb-4 shrink-0">
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-500" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                    </div>

                    {/* Content */}
                    <p className="text-foreground/90 mb-6 leading-relaxed flex-1">
                      {testimonial.content}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 lg:-left-16 border-border" />
            <CarouselNext className="hidden sm:flex -right-12 lg:-right-16 border-border" />
          </Carousel>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12 text-center">
          {[
            { value: "500+", label: "Hotels Trust Us" },
            { value: "50K+", label: "Bookings Managed" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
