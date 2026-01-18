import { Droplets, Wrench, Home, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Submersible Pump Replace",
    description: "Full replacement of deep well submersible pumps with high-efficiency modern units designed for longevity.",
    features: ["Stainless steel models", "Increased pressure", "5-Year warranty"],
  },
  {
    icon: Droplets,
    title: "Pressure Tank Install",
    description: "Installation of high-quality pressure tanks to eliminate pump short-cycling and ensure consistent water flow.",
    features: ["Cycle protection", "Full system sizing", "Leak-proof fittings"],
  },
  {
    icon: Home,
    title: "Jet Pump Repair",
    description: "Expert service and replacement for shallow well jet pumps, including priming and pressure switch calibration.",
    features: ["Precision switches", "Self-priming units", "Motor repair"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
            Specialized Care
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Expert Well Solutions in Overland Park
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't let a failing pump leave you without water. Our experts provide fast, reliable well service for Johnson County.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title} in Overland Park
              </h3>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-copper" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="group/btn text-copper hover:text-copper p-0">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
