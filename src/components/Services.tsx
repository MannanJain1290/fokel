import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Megaphone, Code, Compass, Palette, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Performance marketing, SEO, social media, and content strategies that drive measurable growth and engagement for your brand.",
    icon: Megaphone,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Web Design & Development",
    description:
      "Beautiful, conversion-focused websites and digital experiences built with modern technology and meticulous attention to detail.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Digital Strategy",
    description:
      "Data-driven digital roadmaps that align business goals with market opportunities, positioning your brand as the undisputed authority.",
    icon: Compass,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Brand Identity",
    description:
      "Comprehensive brand development — from naming and visual identity to messaging frameworks that resonate with your target audience.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
  },
];


// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.15,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="bg-primary text-primary-foreground overflow-hidden" ref={ref}>
      {/* Large outlined text marquee */} 
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Section label with animated line */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-[2px] bg-accent"
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-medium tracking-[0.3em] uppercase text-accent"
          >
            What We Do
          </motion.p>
        </div>
        
        {/* Animated heading */}
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Services<span className="text-accent">.</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === i;
            const number = String(i + 1).padStart(2, '0');
            
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 lg:p-8 flex flex-col justify-between min-h-[320px] overflow-hidden cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 rounded-2xl`}
                  animate={{ opacity: isHovered ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and number row */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center"
                      animate={{ 
                        scale: isHovered ? 1.1 : 1,
                        backgroundColor: isHovered ? "hsl(var(--accent))" : "hsl(var(--accent) / 0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon 
                        className="w-5 h-5 transition-colors duration-300" 
                        style={{ color: isHovered ? "hsl(var(--primary))" : "hsl(var(--accent))" }}
                      />
                    </motion.div>
                    <motion.span
                      className="text-sm font-medium text-primary-foreground/30"
                      animate={{ color: isHovered ? "hsl(var(--accent))" : "hsl(var(--primary-foreground) / 0.3)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {number}
                    </motion.span>
                  </div>
                  
                  <motion.h3 
                    className="text-xl lg:text-2xl font-bold tracking-tight mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                    animate={{ color: isHovered ? "hsl(var(--accent))" : "hsl(var(--primary-foreground))" }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Decorative corner accent */}
                <motion.div
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-accent/10"
                  animate={{ scale: isHovered ? 1.5 : 1, opacity: isHovered ? 0.2 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
