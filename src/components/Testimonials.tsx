import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Fokel transformed our digital presence completely. Their strategic approach to branding and marketing delivered results that exceeded our expectations. We've seen a 3x increase in qualified leads.",
    name: "Rahul Sharma",
    role: "CEO, Inventeron Technologies",
    initials: "RS",
  },
  {
    quote:
      "Working with Fokel was a game-changer for our brand. They understood our vision and translated it into a digital experience that truly resonates with our audience. The ROI has been exceptional.",
    name: "Priya Menon",
    role: "Marketing Head, Onsurity",
    initials: "PM",
  },
  {
    quote:
      "The team at Fokel brought fresh perspective and meticulous attention to detail. Our brand has never looked better or performed stronger online. They're now our go-to digital partner.",
    name: "Ankit Verma",
    role: "Founder, HMO Architects",
    initials: "AV",
  },
  {
    quote:
      "Fokel's data-driven approach combined with creative excellence helped us achieve remarkable growth. Our digital engagement increased 3x within just six months. Highly recommended.",
    name: "Sneha Kapoor",
    role: "Director of Growth, HomeLane",
    initials: "SK",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

const AUTO_PLAY_INTERVAL = 5000;

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = useCallback((newDirection: number) => {
    const newIndex = current + newDirection;
    if (newIndex < 0) {
      setCurrent(testimonials.length - 1);
      setPage([testimonials.length - 1, newDirection]);
    } else if (newIndex >= testimonials.length) {
      setCurrent(0);
      setPage([0, newDirection]);
    } else {
      setCurrent(newIndex);
      setPage([newIndex, newDirection]);
    }
  }, [current]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const slideInterval = setInterval(() => {
      paginate(1);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(slideInterval);
  }, [isAutoPlaying, paginate]);

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 overflow-hidden" ref={ref}>
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
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-accent"
          />
          <p className="section-label">Client Stories</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="heading-section text-foreground max-w-2xl">
            What our clients <span className="text-accent italic">say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative bg-background rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg shadow-foreground/5 border border-border/50">
            <div className="absolute top-6 right-6 md:top-8 md:right-8 text-accent/10">
              <Quote className="w-20 h-20 md:w-28 md:h-28" />
            </div>

            <div className="relative z-10 min-h-[200px] md:min-h-[180px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                  className="absolute inset-0 flex flex-col justify-between"
                >
                  <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-foreground/90 mb-8 text-pretty">
                    "{testimonials[current].quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold text-lg">
                        {testimonials[current].initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const newDirection = index > current ? 1 : -1;
                    setCurrent(index);
                    setPage([index, newDirection]);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current 
                      ? "bg-accent w-8" 
                      : "bg-border hover:bg-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
