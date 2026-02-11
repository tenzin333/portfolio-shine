import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// experience</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12">
            Career <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          {/* Work */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-16 pb-12"
          >
            <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <Briefcase size={12} className="text-primary-foreground" />
            </div>
            <p className="font-mono text-primary text-xs mb-1">Dec 2021 — Present</p>
            <h3 className="text-xl font-bold font-heading mb-1">Full Stack Developer</h3>
            <p className="text-muted-foreground text-sm mb-3">Tecnotree Convergence Pvt Ltd</p>
            <ul className="text-muted-foreground text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Delivered full-stack features using React, Next.js, and Node.js for major enterprise projects.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Optimized RESTful API endpoints, improving data retrieval performance by 30%.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Improved page load performance by 40% via code-splitting and caching strategies.
              </li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative pl-16"
          >
            <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap size={12} className="text-primary-foreground" />
            </div>
            <p className="font-mono text-primary text-xs mb-1">2017 — 2021</p>
            <h3 className="text-xl font-bold font-heading mb-1">
              B.Tech — Electronics & Communication Engineering
            </h3>
            <p className="text-muted-foreground text-sm mb-1">
              Surendra Institute of Engineering & Management
            </p>
            <p className="text-muted-foreground text-sm">3.7 GPA</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
