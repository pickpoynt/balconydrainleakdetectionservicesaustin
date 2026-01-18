import { AlertTriangle, Droplets, Clock, Shield, CheckCircle2 } from "lucide-react";

const warningSignsData = [
  {
    icon: Droplets,
    title: "Low Water Pressure",
    description: "If your showers feel weak or appliances take forever to fill, your pump may be struggling or your pressure tank might be failing.",
  },
  {
    icon: AlertTriangle,
    title: "Air Spitting from Faucets",
    description: "Sputtering faucets are a classic sign of a leak in the drop pipe or a well pump that is no longer fully submerged.",
  },
  {
    icon: Clock,
    title: "Pump Constant Cycling",
    description: "If you hear your pump clicking on and off frequently, your pressure tank has likely lost its internal air charge.",
  },
];

const benefitsData = [
  "Ensures consistent household water pressure",
  "Prevents sudden 'no water' emergencies",
  "Reduces electrical bills from short-cycling",
  "Protects plumbing fixtures from sediment",
  "Extends the life of your entire well system",
  "Peace of mind for your family's water needs",
];

const WellPumpInfo = () => {
  return (
    <section id="well-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Total Water Control
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Reliable Well Water Systems for Overland Park Homes
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            A failing well pump can disrupt your entire day. We provide expert diagnostics
            and rapid replacement to ensure your Overland Park home never runs dry.
          </p>
        </div>

        {/* Warning Signs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {warningSignsData.map((sign, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-copper/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <sign.icon className="w-7 h-7 text-copper" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {sign.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {sign.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Expert Submersible Service
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Most deeply buried well pumps fail eventually due to motor fatigue or
              electrical surges. Our team uses specialized equipment to pull and replace
              pumps safely, without damaging your well casing or electrical lines.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In Overland Park and Johnson County, we serve communities from Leawood and
              Prairie Village to Olathe and Lenexa. We understand local water table
              conditions and recommend the best pump sizing for your specific well depth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              Benefits of a New High-Efficiency Pump
            </h3>
            <ul className="space-y-4">
              {benefitsData.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90 text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-8 py-4">
            <AlertTriangle className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Is your water Pressure fluctuating or have you completely lost water? Call us for priority emergency service.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellPumpInfo;
