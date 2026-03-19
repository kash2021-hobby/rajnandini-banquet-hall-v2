import { useNavigate } from "react-router-dom";
import { Users, CalendarCheck, Sparkles, IndianRupee } from "lucide-react";
import serviceGatherings from "@/assets/service-gatherings.webp";
import serviceEvents from "@/assets/service-events.webp";
import serviceBirthday from "@/assets/service-birthday.webp";
import servicePackages from "@/assets/service-packages.webp";

const services = [
  {
    icon: CalendarCheck,
    image: serviceEvents,
    title: "Your Dream Wedding, Our Expert Planning",
    description: "From venue decoration to guest management, we plan every detail of your perfect day.",
    label: "Wedding Planning",
  },
  {
    icon: Users,
    image: serviceGatherings,
    title: "Grand Reception Parties",
    description: "Celebrate your special moments with elegantly organized reception parties.",
    label: "Reception Parties",
  },
  {
    icon: Sparkles,
    image: serviceBirthday,
    title: "Memorable Birthday Celebrations",
    description: "Make every birthday unforgettable with our themed decorations and arrangements.",
    label: "Birthday Celebration",
  },
  {
    icon: IndianRupee,
    image: servicePackages,
    title: "Exquisite Catering Services",
    description: "Premium multi-cuisine catering crafted to delight every palate.",
    label: "Premium Catering",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleBookNow = (serviceName: string) => {
    navigate(`/contact?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-secondary text-lg">◆✦</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Our <em>Services</em>
            </h2>
            <span className="text-secondary text-lg">✦◆</span>
          </div>
          <p className="font-body text-muted-foreground text-base">
            From Concept to Execution, We Handle Every Detail
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.label}
              className="group cursor-pointer border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 bg-card"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.label}
                  className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-2">
                  {service.label}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-1 font-medium">
                  {service.title}
                </p>
                <p className="font-body text-sm text-muted-foreground mb-5">
                  {service.description}
                </p>
                <button
                  onClick={() => handleBookNow(service.label)}
                  className="bg-primary text-primary-foreground px-8 py-2.5 rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
