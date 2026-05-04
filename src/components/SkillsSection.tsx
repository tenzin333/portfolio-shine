import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    category: "Frontend & Full Stack",
    skills: [
      { name: "React / Next.js 15 (App Router)", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "shadcn/ui + Tailwind CSS", level: 92 },
      { name: "Node.js / Express", level: 88 },
      { name: "React Hook Form / Zod", level: 90 },
      { name: "Chrome Extension (MV3)", level: 82 },
      { name: "React Flow", level: 78 },
    ],
  },
  {
    category: "AI / GenAI & Data",
    skills: [
      { name: "RAG Pipelines (pgvector)", level: 88 },
      { name: "LLM APIs (Gemini / Groq / OpenAI)", level: 86 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Embeddings (Gemini 768-dim)", level: 83 },
      { name: "Python / FastAPI", level: 83 },
      { name: "Agentic Workflows (ReAct)", level: 78 },
      { name: "LangChain / RAGAS / MCP", level: 76 },
    ],
  },
  {
    category: "Infrastructure & DevOps",
    skills: [
      { name: "OAuth 2.0 (WSO2 / ForgeRock)", level: 88 },
      { name: "Docker / AWS EC2 / S3", level: 84 },
      { name: "GitLab CI/CD / GitHub Actions", level: 83 },
      { name: "PostgreSQL / Redis / MongoDB", level: 82 },
      { name: "Vitest / React Testing Library", level: 82 },
      { name: "New Relic / Pino / OpenSearch", level: 78 },
      { name: "Harbor / SonarQube", level: 75 },
    ],
  },
];

const filters = ["All", "Frontend & Full Stack", "AI / GenAI & Data", "Infrastructure & DevOps"];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? skillCategories
    : skillCategories.filter((c) => c.category === active);

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// skills</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-md text-xs font-mono border transition-all ${
                active === f
                  ? "border-primary/60 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {f === "Frontend & Full Stack" ? "Frontend" : f === "AI / GenAI & Data" ? "AI / GenAI" : f === "Infrastructure & DevOps" ? "Infra" : f}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((cat, ci) => (
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