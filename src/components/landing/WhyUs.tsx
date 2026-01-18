import { Shield, Users, ThumbsUp, Clock, DollarSign, Hammer } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Overland Park Local Pros",
    description: "Serving Johnson County and surrounding areas with fast, specialized well care.",
  },
  {
    icon: Shield,
    title: "24/7 Emergency Service",
    description: "We know no water is a true emergency. We're available day or night to restore your flow.",
  },
  {
    icon: DollarSign,
    title: "Upfront Fixed Pricing",
    description: "No hidden fees. We provide clear, honest quotes before any work begins on your well.",
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    description: "Most well pump replacements are completed the same day you call us.",
  },
  {
    icon: ThumbsUp,
    title: "All Brands Serviced",
    description: "Certified expertise with Goulds, Grundfos, Franklin Electric, and more.",
  },
  {
    icon: Hammer,
    title: "Lifetime Support",
    description: "We don't just install and leave. We provide ongoing support for your well water system.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Overland Park's Premier
              <span className="text-gradient-copper block">Well Water Service Team</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We specialize exclusively in well water systems. While general plumbers might say
              they 'do it all,' we focus on the complex electrical and mechanical components of
              modern high-efficiency well pumps and tanks.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">1,500+</span>
                <span className="text-sm text-muted-foreground">Wells Serviced</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">20+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">A+</span>
                <span className="text-sm text-muted-foreground">BBB Rating</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-copper/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
