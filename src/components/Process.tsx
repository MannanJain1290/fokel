import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We deep-dive into your business, audience, and competitive landscape to uncover growth blind spots and untapped opportunities.",
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    description:
      "A custom digital growth roadmap built around your goals — with clear milestones, KPIs, and prioritized initiatives.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "Our team crafts pixel-perfect designs and builds high-performance digital experiences that convert visitors into customers.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "We launch with precision and continuously optimize — scaling what works, cutting what doesn't, and driving compounding growth.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-6"
        >
          Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground mb-20"
        >
          How we turn ambition
          <br />
          into market authority<span className="text-accent">.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="relative border border-border p-8 lg:p-10 group hover:border-accent/40 transition-colors duration-500"
            >
              <span className="text-6xl lg:text-7xl font-bold text-muted/50 absolute top-6 right-8 select-none">
                {step.number}
              </span>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
