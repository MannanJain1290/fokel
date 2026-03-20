import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-[2px] bg-accent"
          />
          <p className="section-label">Who We Are</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-12 lg:mb-0"
          >
            <h2 className="heading-section text-primary-foreground leading-tight">
              Bold ideas,<br />
              <span className="text-accent">disruptive</span><br />
              execution<span className="text-accent">.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-col gap-8"
          >
            <div className="relative pl-6 border-l-2 border-accent/30">
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                At Fokel, we believe exceptional digital experiences don't happen by accident. 
                They emerge from the intersection of strategic thinking, creative vision, and 
                relentless attention to detail.
              </p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-accent/30">
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Our mission is simple: transform ambitious brands into undisputed market leaders 
                through creative excellence and measurable results. We don't just create—we <span className="text-accent font-medium">execute</span>.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-primary-foreground/10"
        >
          {[
            { value: "20+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "5+", label: "Years of Experience" },
            { value: "2.5x", label: "Average ROI" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {stat.value}
              </p>
              <p className="text-sm text-primary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
