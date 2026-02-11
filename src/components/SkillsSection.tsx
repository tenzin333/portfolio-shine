import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "AI & Web",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Node.js", level: 88 },
      { name: "JavaScript", level: 95 },
      { name: "LLM Integration", level: 85 },
      { name: "Chrome API", level: 80 },
      { name: "TailwindCSS", level: 90 },
    ],
  },
  {
    category: "Security & Web3",
    skills: [
      { name: "SAST (Semgrep)", level: 80 },
      { name: "Solidity", level: 75 },
      { name: "Foundry", level: 75 },
      { name: "OWASP Top 10", level: 85 },
      { name: "Vulnerability Remediation", level: 80 },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 78 },
      { name: "CI/CD (GitHub Actions)", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 78 },
      { name: "Shell Scripting", level: 75 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// skills</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-12">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * ci }}
            >
              <h3 className="font-heading font-semibold text-lg mb-6 text-primary">
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-mono text-xs">{skill.name}</span>
                      <span className="text-muted-foreground text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + si * 0.08 + ci * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
