import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24 bg-background overflow-hidden" ref={ref}>
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
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent">
            Who We Are
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="overflow-hidden mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground">
            Bold ideas,
            <br />
            disruptive
            <br />
            execution<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid md:grid-cols-2 gap-8 md:gap-16"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 tracking-tight">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Fokel, our mission is to bring your business into the market focus 
              with a bold, disruptive edge. We combine strategic thinking with creative 
              excellence to craft digital experiences that captivate audiences and drive 
              measurable results.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 tracking-tight">
              Our Vision
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our vision is to redefine the digital landscape by setting a new gold standard 
              for B2B growth, where every brand we touch becomes the undisputed authority 
              in its niche.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
