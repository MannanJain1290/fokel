import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Fokel completely transformed our digital presence. Within 3 months, our organic traffic increased by 280% and we became the go-to authority in our niche. Their strategic thinking is unmatched.",
    name: "Sarah Mitchell",
    role: "CEO, TechVault Inc.",
    initials: "SM",
  },
  {
    quote:
      "Working with Fokel felt like adding a full growth team to our company. Their bold approach to branding set us apart in a crowded market. The ROI speaks for itself — 5x pipeline growth.",
    name: "James Carter",
    role: "Founder, GrowthLoop",
    initials: "JC",
  },
  {
    quote:
      "Fokel doesn't just deliver campaigns — they deliver results. Their data-driven strategy paired with incredible design gave us a brand identity that commands respect in the B2B space.",
    name: "Priya Sharma",
    role: "Marketing Director, NexGen Solutions",
    initials: "PS",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-6"
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground mb-20"
        >
          Client Love<span className="text-accent">.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="border border-border bg-background p-8 lg:p-10 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-accent mb-6" />
                <p className="text-foreground leading-relaxed text-[15px]">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
