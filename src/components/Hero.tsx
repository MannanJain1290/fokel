import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-background overflow-hidden">
      {/* Main centered headline */}
      <div className="flex-1 flex items-center justify-center px-6 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.95] tracking-[-0.03em] text-foreground text-center uppercase"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          We Bring
          <br />
          Your Brand
          <br />
          Into <span className="text-accent">Focus</span>
        </motion.h1>
      </div>

      {/* Bottom subtitle - positioned bottom right like onething */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16">
        <div className="flex justify-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base md:text-lg text-muted-foreground max-w-sm text-right leading-relaxed"
          >
            Helping brands and businesses drive value
            through creatively functional digital strategy
          </motion.p>
        </div>
      </div>

      {/* Decorative accent shape */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 70%)",
        }}
      />
    </section>
  );
};

export default Hero;
