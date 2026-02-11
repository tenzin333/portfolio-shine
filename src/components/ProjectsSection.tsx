import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Lumen AI",
    subtitle: "LLM-Powered Browser Assistant",
    description:
      "High-performance Manifest V3 Chrome extension providing real-time, context-aware AI analysis of web content with a secure BYOK vault.",
    tech: ["JavaScript", "Chrome API", "Groq Cloud", "Llama 3.1", "Manifest V3"],
    github: "https://github.com/tenzin333",
  },
  {
    title: "Autonomous Bounty Hunter",
    subtitle: "AI Security Agent",
    description:
      "AI agent that automates vulnerability detection and generates surgical security patches, with immutable on-chain fix logging.",
    tech: ["Python", "Semgrep", "Llama 3/4", "Solidity", "Foundry"],
    github: "https://github.com/tenzin333",
  },
  {
    title: "Smart Contract Security Audit Engine",
    subtitle: "Automated Auditing Suite",
    description:
      "Automated smart contract auditing using Foundry fuzzing and static analysis, simulating reentrancy and overflow attacks.",
    tech: ["Solidity", "Foundry", "Anvil", "Node.js", "Ethers.js"],
  },
  {
    title: "Professional Portfolio",
    subtitle: "Developer Portfolio",
    description:
      "Modern developer portfolio with full-stack project showcases, optimized SEO and accessibility scores to 95+.",
    tech: ["React.js", "Next.js", "TailwindCSS", "Netlify"],
    live: "https://tenzinthinlay.netlify.app",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// projects</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <p className="font-mono text-primary text-xs mb-1">{project.subtitle}</p>
                <h3 className="text-xl font-bold font-heading mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded text-xs font-mono bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
