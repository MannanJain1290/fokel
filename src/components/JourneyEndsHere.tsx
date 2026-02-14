import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const marqueeItems = [
  "Your", "search", "for", "a", "digital", "agency", "ends", "here..."
];

const JourneyEndsHere = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-primary text-primary-foreground overflow-hidden" ref={ref}>
      {/* Giant scrolling marquee text */}
      <div className="py-12 md:py-16 overflow-hidden border-b border-primary-foreground/10">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((word, i) => (
            <span
              key={i}
              className="flex-shrink-0 mx-2 md:mx-3 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase"
              style={{
                WebkitTextStroke: "1.5px hsl(var(--primary-foreground) / 0.4)",
                WebkitTextFillColor: word === "ends" || word === "here..."
                  ? "hsl(var(--accent))"
                  : "transparent",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* CTA content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Your journey to
              <br />
              digital excellence
              <br />
              <span className="text-accent">starts now</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              We've helped brands across industries transform their digital presence.
              Whether you need a complete brand overhaul or targeted digital campaigns,
              our team is ready to deliver results that matter.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-accent text-accent-foreground px-6 py-2.5 text-sm font-semibold rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneyEndsHere;
