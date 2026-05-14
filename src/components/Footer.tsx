import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Linkedin, Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer
      className="relative bg-foreground text-background overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <img src={logo} alt="Fokel" className="h-10 w-auto mb-6" />
              <h3 className="text-2xl lg:text-3xl font-bold text-background leading-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Ready to bring your brand into <span className="text-accent">focus</span>?
              </h3>
              <p className="text-background/60 leading-relaxed max-w-md mb-8">
                Let's discuss how we can transform your digital presence and make your brand the undisputed authority in your niche.
              </p>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-6"
            >
              Navigation
            </motion.p>
            <div className="flex flex-col gap-4">
              {["About", "Services", "Work", "Contact"].map((link, i) => (
                <motion.button
                  key={link}
                  onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.05 }}
                  className="text-left text-background/70 hover:text-accent transition-colors duration-300"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-6"
            >
              Connect
            </motion.p>
            <div className="flex flex-col gap-4">
              <motion.a
                href="mailto:info@fokelworks.com"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="inline-flex items-center gap-3 text-background/70 hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-5 h-5 shrink-0" />
                info@fokelworks.com
              </motion.a>
              <motion.a
                href="tel:+918950483522"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.17 }}
                className="inline-flex items-center gap-3 text-background/70 hover:text-accent transition-colors duration-300"
              >
                <Phone className="w-5 h-5 shrink-0" />
                +91 89504 83522
              </motion.a>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.19 }}
                className="inline-flex items-start gap-3 text-background/70 transition-colors duration-300"
              >
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <span className="text-sm">A77, Basement, A Block,<br />East of Kailash, New Delhi 110065</span>
              </motion.div>
              <motion.a
                href="https://www.linkedin.com/company/fokelworks/about/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 text-background/70 hover:text-accent transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://www.instagram.com/fokelworks"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="inline-flex items-center gap-3 text-background/70 hover:text-accent transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-background/40">
            © 2026 Fokel. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-sm text-background/40 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <p className="text-sm text-background/40">
              Crafted with precision in India
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
