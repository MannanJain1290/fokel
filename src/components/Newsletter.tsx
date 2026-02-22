import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const duration = prefersReducedMotion ? 0 : 0.8;
  const delay = (d: number) => (prefersReducedMotion ? 0 : d);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      className="relative py-24 md:py-32 bg-secondary overflow-hidden"
      ref={ref}
    >
      {/* Ambient floating glow (same vibe as Contact/Testimonial section) */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none"
        animate={
          prefersReducedMotion
            ? {}
            : {
                scale: [1, 1.05, 1],
                y: [0, -15, 0],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-6"
            >
              Stay Updated
            </motion.p>

            {/* Heading with reveal animation (Testimonials style) */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: delay(0.1),
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Subscribe to
                <br />
                our <span className="text-accent italic font-normal">newsletter</span>.
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration, delay: delay(0.25) }}
              className="mt-6 text-muted-foreground leading-relaxed max-w-md"
            >
              Get the latest insights on digital strategy, branding trends, and
              marketing tips delivered straight to your inbox.
            </motion.p>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration, delay: delay(0.3) }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="border border-accent bg-accent/5 p-8 rounded-xl"
              >
                <p className="text-lg font-semibold text-foreground">
                  Thank you for subscribing!
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  You'll hear from us soon with the latest updates.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Input with subtle focus animation */}
                <motion.input
                  whileFocus={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: 1.01,
                          borderColor: "hsl(var(--accent))",
                        }
                  }
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border border-border px-6 py-5 text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors text-sm rounded-lg"
                />

                {/* CTA Button (premium hover like Testimonials buttons) */}
                <motion.button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-5 text-sm font-semibold uppercase tracking-wider rounded-full"
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: 1.07,
                          y: -3,
                          boxShadow:
                            "0 16px 48px -12px hsl(var(--accent) / 0.5)",
                          transition: {
                            duration: 0.3,
                            ease: [0.25, 0.1, 0.25, 1],
                          },
                        }
                  }
                  whileTap={
                    prefersReducedMotion
                      ? {}
                      : { scale: 0.96, transition: { duration: 0.15 } }
                  }
                >
                  Subscribe
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
