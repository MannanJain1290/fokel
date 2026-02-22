import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  { src: "/clients/homelane.png", alt: "HomeLane", height: "h-8 md:h-10" },
  { src: "/clients/wtc.png", alt: "WTC", height: "h-6 md:h-8" },
  { src: "/clients/genes.png", alt: "Genes", height: "h-6 md:h-8" },
  { src: "/clients/onsurity.png", alt: "Onsurity", height: "h-6 md:h-8" },
  { src: "/clients/inventeron.png", alt: "Inventeron", height: "h-6 md:h-8" },
  { src: "/clients/hmo.png", alt: "HMO Architects", height: "h-6 md:h-8" },
];

const Marquee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      className="bg-background overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
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
            Trusted By
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="relative py-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0) 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, hsl(var(--background)) 0%, hsl(var(--background) / 0) 100%)",
          }}
        />

        <div className="animate-marquee py-2 will-change-transform flex min-w-max">
          <div className="flex gap-16 md:gap-24 items-center pr-16 md:pr-24">
            {clients.map((client, i) => (
              <motion.div
                key={`${client.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-2 h-24 md:h-28 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className={`${client.height} w-auto object-contain mix-blend-darken grayscale hover:grayscale-0 transition-all duration-500 ease-out opacity-60 hover:opacity-100`}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex gap-16 md:gap-24 items-center pl-16 md:pl-24" aria-hidden>
            {clients.map((client, i) => (
              <motion.div
                key={`dup-${client.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-2 h-24 md:h-28 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={client.src}
                  alt=""
                  className={`${client.height} w-auto object-contain mix-blend-darken grayscale hover:grayscale-0 transition-all duration-500 ease-out opacity-60 hover:opacity-100`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Marquee;
