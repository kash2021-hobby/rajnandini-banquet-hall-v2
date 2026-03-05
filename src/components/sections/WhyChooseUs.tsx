import { MapPin, Users, CalendarCheck, Sparkles, IndianRupee } from "lucide-react";
import serviceLocation from "@/assets/service-location.webp";
import serviceGatherings from "@/assets/service-gatherings.webp";
import serviceEvents from "@/assets/service-events.webp";
import serviceLuxury from "@/assets/service-luxury.webp";
import servicePackages from "@/assets/service-packages.webp";

const reasons = [
  {
    icon: MapPin,
    image: serviceLocation,
    title: "Locations",
    description: "Prime Location in Guwahati – Convenient and easy for your guests to reach.",
  },
  {
    icon: Users,
    image: serviceGatherings,
    title: "Large Gatherings",
    description: "Spacious Banquet Hall – Perfectly designed to host both intimate and large gatherings.",
  },
  {
    icon: CalendarCheck,
    image: serviceEvents,
    title: "Event Solutions",
    description: "Complete Event Management – From decoration to catering, we handle everything for you.",
  },
  {
    icon: Sparkles,
    image: serviceLuxury,
    title: "Luxury Ambience",
    description: "Elegant Atmosphere – Modern interiors blended with traditional elegance.",
  },
  {
    icon: IndianRupee,
    image: servicePackages,
    title: "Affordable Packages",
    description: "Budget-Friendly Packages – The best value for weddings and events in Guwahati.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-secondary text-lg">◆✦</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Why <em>Choose Us</em>
            </h2>
            <span className="text-secondary text-lg">✦◆</span>
          </div>
          <p className="font-body text-muted-foreground text-base">
            Everything You Need for a Perfect Celebration
          </p>
        </div>

        {/* Cards - 5 columns on large, 3+2 on medium, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-card"
            >
              <div className="overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-3">
                  <reason.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
