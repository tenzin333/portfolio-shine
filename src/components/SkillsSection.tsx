import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend & Full Stack",
    skills: [
      { name: "React / Next.js (App Router)", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "React Hook Form / Zod", level: 90 },
      { name: "shadcn/ui / TailwindCSS", level: 92 },
      { name: "TanStack Table", level: 85 },
      { name: "Chrome Extension (MV3)", level: 82 },
      { name: "Node.js / Express", level: 88 },
    ],
  },
  {
    category: "AI / GenAI & Data",
    skills: [
      { name: "RAG Pipelines (pgvector)", level: 85 },
      { name: "LLM Integration (Groq / Llama)", level: 85 },
      { name: "Embeddings (Gemini)", level: 82 },
      { name: "Agentic Workflows (ReAct)", level: 78 },
      { name: "Python / FastAPI", level: 82 },
      { name: "Pandas / Backtesting", level: 78 },
      { name: "Prompt Engineering", level: 85 },
    ],
  },
  {
    category: "Infrastructure & DevOps",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Jenkins CI/CD", level: 82 },
      { name: "Vitest / React Testing Library", level: 85 },
      { name: "OAuth SSO (ForgeRock / WSO2)", level: 88 },
      { name: "New Relic / Pino / OpenSearch", level: 78 },
      { name: "PostgreSQL / Redis / MongoDB", level: 82 },
      { name: "Git / SonarQube", level: 88 },
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