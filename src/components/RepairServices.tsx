import { Smartphone, Battery, Plug, Settings, Shield, Clock } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Smartphone,
    title: "Screen Repair",
    description: "Cracked or broken screen? We fix all phone brands quickly.",
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    description: "Phone dying fast? Get a new battery installed same day.",
  },
  {
    icon: Plug,
    title: "Charging Port",
    description: "Not charging properly? We repair all charging issues.",
  },
  {
    icon: Settings,
    title: "Software Fix",
    description: "Frozen or slow phone? We restore and optimize your device.",
  },
  {
    icon: Shield,
    title: "Water Damage",
    description: "Phone got wet? Quick water damage treatment available.",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Most repairs completed within 1-2 hours.",
  },
];

const RepairServices = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Expert Repair Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional phone repairs by experienced technicians. Fast, reliable, and affordable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gradient" size="xl" asChild>
            <a href="https://wa.me/233249814337?text=I need phone repair service" target="_blank" rel="noopener noreferrer">
              Book a Repair on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RepairServices;
