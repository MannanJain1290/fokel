import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-homelane.png";
import work4 from "@/assets/work-4.png";

const projects = [
  {
    image: work3,
    title: "HomeLane",
    category: "SEO & Digital Strategy",
    description:
      "Transformed organic presence with data-driven SEO strategy, achieving 98% traffic growth and 85 keywords on Google's first page.",
    tags: ["Google SEO", "Content Strategy", "Growth"],
    link: "/work/homelane",
  },
  {
    image: work2,
    title: "WTC 2026",
    category: "Event Marketing",
    description:
      "Comprehensive digital strategy and branding for the world's premier tunnel engineering congress, building anticipation across global markets.",
    tags: ["Event Marketing", "Branding", "Digital"],
    link: "/work/wtc-2026",
  },
  {
    image: work1,
    title: "Genes Lecoanet Hemant",
    category: "Social Media & Branding",
    description:
      "Elevated luxury fashion brand's digital presence with refined visual storytelling and strategic social media campaigns.",
    tags: ["Social Media", "Brand Strategy"],
    link: "/work/genes-lecoanet-hemant",
  },
  {
    image: work4,
    title: "Blue Leopard Media",
    category: "Brand Identity & Web",
    description:
      "Created a bold, contemporary brand identity and digital platform that positions the agency as an industry innovator.",
    tags: ["Branding", "Web Design", "Identity"],
    link: "/work/blue-leopard-media",
  },
];

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 lg:py-32 bg-background overflow-hidden" ref={ref}>
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
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-[2px] bg-accent"
          />
          <p className="section-label">Selected Projects</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <h2 className="heading-section text-foreground max-w-xl">
            Work that delivers <span className="text-accent">results</span>
          </h2>
          <p className="text-muted-foreground max-w-md lg:text-right">
            Every project is an opportunity to push creative boundaries and drive meaningful impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <Link to={project.link} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-secondary">
          <div className="aspect-[16/10] overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
          >
            <p className="text-sm font-medium text-white/80 mb-2">{project.category}</p>
            <p className="text-base text-white/90 leading-relaxed line-clamp-2 max-w-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-white/90 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
          >
            <ArrowUpRight className="w-5 h-5 text-foreground" />
          </motion.div>
        </div>

        <div className="mt-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-accent">{projectNumber}</span>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                {project.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">{project.category}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeaturedWork;
