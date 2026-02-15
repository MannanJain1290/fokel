import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { number: 20, suffix: "+", label: "Projects" },
  { number: 100, suffix: "%", label: "Client Satisfaction" },
  { number: 5, suffix: "+", label: "Sectors" },
  { number: 2.5, suffix: "x", label: "ROI" },
];

const AnimatedCounter = ({
  target,
  suffix,
  duration = 2000,
  delay = 0,
}: {
  target: number;
  suffix: string;
  duration?: number;
  delay?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setCount(0); // Reset to 0 when coming into view
      
      const startTime = Date.now() + delay;
      const isDecimal = target % 1 !== 0;
      let animationId: number;
      
      const animate = () => {
        const now = Date.now();
        if (now < startTime) {
          animationId = requestAnimationFrame(animate);
          return;
        }
        
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = easeOut * target;
        
        setCount(isDecimal ? Math.round(currentValue * 10) / 10 : Math.round(currentValue));
        
        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        }
      };
      
      animationId = requestAnimationFrame(animate);
      
      return () => cancelAnimationFrame(animationId);
    }
  }, [isInView, target, duration, delay]);

  return (
    <div ref={ref} className="flex items-center text-4xl md:text-6xl lg:text-7xl">
      <span className="font-bold text-foreground tabular-nums">
        {count}
      </span>
      <span className="font-bold text-accent">
        {suffix}
      </span>
    </div>
  );
};

const StoryInNumbers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-10 md:py-16 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-4"
        >
          Our Story
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground mb-20"
        >
          In Numbers<span className="text-accent">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <AnimatedCounter
                target={stat.number}
                suffix={stat.suffix}
                delay={i * 200}
              />
              <div className="mt-4 h-px w-full bg-border" />
              <p className="mt-4 text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryInNumbers;
