import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a well pump typically last?",
    answer: "Most high-quality submersible pumps last between 10 and 15 years. Factors like water quality, pump sizing, and the frequency of cycling (how often it turns on and off) can significantly impact this lifespan."
  },
  {
    question: "My water just stopped. Is it definitely the pump?",
    answer: "Not necessarily. It could be a tripped circuit breaker, a failed pressure switch, or a problem with the pressure tank. We perform a full diagnostic to identify the exact cause before recommending a replacement."
  },
  {
    question: "How long does it take to replace a well pump?",
    answer: "A standard submersible pump replacement usually takes 3 to 5 hours. We carry most common pump sizes and components on our trucks, allowing us to restore your water the same day in most cases."
  },
  {
    question: "What is the benefit of a constant pressure system?",
    answer: "Unlike traditional systems that have 'on' and 'off' cycles, constant pressure systems (VFDs) adjust the pump speed to provide steady, city-like pressure even when multiple faucets are running simultaneously."
  },
  {
    question: "Do you service shallow well jet pumps too?",
    answer: "Yes! While deep well submersibles are more common in Overland Park, we also service and replace shallow well jet pumps and their associated piping and controls."
  },
  {
    question: "How do I know if my pressure tank is bad?",
    answer: "The most common sign is 'short-cycling,' where the pump turns on and off every few seconds while you're using water. You might also notice fluctuating water pressure or a clicking sound coming from the switch."
  },
  {
    question: "Do you offer emergency well service on weekends?",
    answer: "Absolutely. We know a lack of water is an urgent issue. We offer 24/7 emergency repair services to the Overland Park and Johnson County area."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Well Water FAQ – Overland Park, KS
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Get professional answers to common questions about well pump replacement, pressure tanks, and system maintenance in Johnson County.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-steel/20 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-navy font-semibold hover:text-copper hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-steel leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-steel mb-4">Still have questions?</p>
          <a
            href="tel:+18777921410"
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call us at (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
