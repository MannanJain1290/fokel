import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Fokel transformed our digital presence completely. Their strategic approach to branding and marketing delivered results that exceeded our expectations.",
    name: "Rahul Sharma",
    role: "CEO, Inventeron Technologies",
  },
  {
    quote:
      "Working with Fokel was a game-changer. They understood our vision and translated it into a digital experience that truly resonates with our audience.",
    name: "Priya Menon",
    role: "Marketing Head, Onsurity",
  },
  {
    quote:
      "The team at Fokel brought fresh perspective and meticulous attention to detail. Our brand has never looked better or performed stronger online.",
    name: "Ankit Verma",
    role: "Founder, HMO Architects",
  },
  {
    quote:
      "Fokel's data-driven approach combined with creative excellence helped us achieve a 3x increase in digital engagement within just six months.",
    name: "Sneha Kapoor",
    role: "Director of Growth, HomeLane",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground" ref={ref}>
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-primary-foreground mb-16"
        >
          What our clients
          <br />
          are <span className="text-accent">saying</span>...
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="border border-primary-foreground/10 bg-primary-foreground/5 p-8 md:p-14 lg:p-20 min-h-[320px] flex flex-col justify-between">
            <Quote className="w-10 h-10 text-accent mb-8" />
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-primary-foreground mb-10">
              "{testimonials[current].quote}"
            </p>
            <div>
              <p className="text-lg font-bold text-primary-foreground">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-primary-foreground/60">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="ml-4 text-sm text-primary-foreground/60 font-medium">
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
