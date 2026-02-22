import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Heart, Trophy } from "lucide-react";

const highlights = [
  {
    title: "Bold Vision",
    description: "We see what others miss. Our strategic approach uncovers opportunities that transform your business.",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Passion Driven",
    description: "Every project becomes our passion. We don't just deliver — we invest in your success.",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Proven Results",
    description: "Our work speaks for itself. Measurable growth and measurable impact on every project.",
    icon: Trophy,
    color: "from-amber-500 to-yellow-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.1 + i * 0.15,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-foreground">
            Bold ideas,<br />
            disruptive<br />
            execution<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-secondary border border-border rounded-2xl p-6 lg:p-8 flex flex-col justify-between min-h-[240px] overflow-hidden cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 rounded-2xl`}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-accent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--accent))" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5 text-accent" style={{ color: "hsl(var(--accent))" }} />
                  </motion.div>

                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <motion.div
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-accent/10"
                  whileHover={{ scale: 1.5, opacity: 0.2 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 md:gap-16"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
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
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
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
