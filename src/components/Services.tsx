import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Megaphone, 
  Globe, 
  Target, 
  Palette,
  Search,
  BarChart
} from "lucide-react";

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
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Digital Strategy",
    description:
      "Data-driven digital roadmaps that align business goals with market opportunities, positioning your brand as the undisputed authority.",
    icon: Target,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Brand Identity",
    description:
      "Comprehensive brand development — from naming and visual identity to messaging frameworks that resonate with your target audience.",
    icon: Palette,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "SEO & Performance",
    description:
      "Technical SEO and performance optimization to ensure your website ranks higher and loads faster for better user experience.",
    icon: Search,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Analytics & Insights",
    description:
      "Deep data analytics and insights to measure performance, optimize campaigns, and make informed business decisions.",
    icon: BarChart,
    color: "from-rose-500 to-red-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.1 + i * 0.1,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary overflow-hidden" ref={ref}>
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
            What We Do
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="overflow-hidden mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-foreground">
            Services<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-background border border-border rounded-2xl p-6 lg:p-8 flex flex-col justify-between min-h-[280px] overflow-hidden cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 rounded-2xl`}
                  animate={{ opacity: isHovered ? 0.08 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6"
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                      backgroundColor: isHovered
                        ? "hsl(var(--accent))"
                        : "hsl(var(--accent) / 0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-300"
                      style={{
                        color: isHovered
                          ? "hsl(var(--background))"
                          : "hsl(var(--accent))",
                      }}
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl lg:text-2xl font-bold tracking-tight mb-3"
                    animate={{
                      color: isHovered
                        ? "hsl(var(--accent))"
                        : "hsl(var(--foreground))",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <motion.div
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-accent/10"
                  animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.15 : 0,
                  }}
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
