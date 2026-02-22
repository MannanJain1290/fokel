import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import heroVideo from "@/assets/hero-video.mp4";

const AnimatedWord = ({ 
  children, 
  delay 
}: { 
  children: string; 
  delay: number;
}) => {
  return (
    <span className="inline-block overflow-hidden px-0.5 py-2">
      <motion.span
        className="inline-block"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [showPageReveal, setShowPageReveal] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('hasSeenPageReveal');
    if (!hasSeenAnimation) {
      setShowPageReveal(true);
      sessionStorage.setItem('hasSeenPageReveal', 'true');
    }
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const videoScale = useTransform(smoothProgress, [0, 0.5], [1, 0.75]);
  const videoY = useTransform(smoothProgress, [0, 0.5], [0, 50]);
  const videoX = useTransform(smoothProgress, [0, 0.5], [0, 0]);
  const videoOpacity = useTransform(smoothProgress, [0, 0.6, 0.8], [1, 1, 0]);
  const videoBorderRadius = useTransform(smoothProgress, [0, 0.5], [24, 40]);
  
  const videoRotateY = useTransform(smoothProgress, [0, 0.5], [0, -3]);
  const videoRotateX = useTransform(smoothProgress, [0, 0.5], [0, 5]);
  
  const shadowBlur = useTransform(smoothProgress, [0, 0.3, 0.6], [30, 60, 20]);
  const shadowSpread = useTransform(smoothProgress, [0, 0.3], [0, 10]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.2, 0.5], [0.3, 0.6, 0]);
  
  const videoBlur = useTransform(smoothProgress, [0, 0.5, 0.7], [0, 0, 4]);

  return (
    <section ref={sectionRef} className="min-h-screen relative bg-background overflow-hidden">
      {showPageReveal && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-foreground origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.div
            className="fixed inset-0 z-40 bg-accent origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
          />
        </>
      )}

      <div className="max-w-7xl mx-auto w-full px-4 lg:px-6 pt-24 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end w-full">
          <div className="flex flex-col gap-8">
            <h1
              className="text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1] tracking-[-0.03em] text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <AnimatedWord delay={0.6}>We</AnimatedWord>{" "}
              <AnimatedWord delay={0.7}>Bring</AnimatedWord>
              <br />
              <AnimatedWord delay={0.8}>Your</AnimatedWord>{" "}
              <AnimatedWord delay={0.9}>Brand</AnimatedWord>
              <br />
              <AnimatedWord delay={1.0}>Into</AnimatedWord>{" "}
              <span className="inline-block overflow-hidden px-0.5 py-2">
                <motion.span
                  className="inline-block italic font-normal text-accent"
                  initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ 
                    duration: 1, 
                    delay: 1.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  Focus
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              Helping brands and businesses drive value through creatively functional digital strategy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/#contact"
                  className="inline-block bg-orange-500 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-orange-600 transition-colors"
                >
                  Get in touch
                </Link>
              </motion.div>
            </motion.div>
          </div>

            <motion.div
              ref={videoContainerRef}
              initial={{ opacity: 0, scale: 0.8, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.8, 
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              className="relative aspect-[9/16] max-h-[75vh] w-full max-w-sm lg:max-w-md mx-auto"
              style={{
                scale: videoScale,
                y: videoY,
                x: videoX,
                opacity: videoOpacity,
                rotateY: videoRotateY,
                rotateX: videoRotateX,
                perspective: 1000,
                filter: useTransform(videoBlur, (v) => `blur(${v}px)`),
              }}
            >
              <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-accent/10"
                  style={{
                    opacity: glowOpacity,
                  }}
                />
                
                <motion.div
                  className="w-full h-full"
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 1.0, 
                    ease: [0.65, 0, 0.35, 1] 
                  }}
                  style={{ 
                    borderRadius: videoBorderRadius,
                  }}
                >
                  <video
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      />
    </section>
  );
};

export default Hero;
