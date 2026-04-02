import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Chrome } from "lucide-react";

const projects = [
  {
    title: "DeepTrail",
    subtitle: "AI Browsing Intelligence Platform",
    description:
      "Chrome Extension (MV3 + React 18) that builds a knowledge graph from browsing activity. FastAPI backend with pgvector on Neon.tech, Gemini embeddings (768-dim), and Groq/Llama 3 for semantic search and context-aware insights. Features React Flow force-directed graphs, MetaMask-style dark UI, and a freemium SaaS model.",
    tech: ["React 18", "FastAPI", "pgvector", "Gemini", "Groq/Llama 3", "Chrome MV3"],
    github: "https://github.com/tenzin333",
    live: "https://chromewebstore.google.com/detail/deeptrail/gbfhehbnondmcbjfbakjopooknchcglg",
    featured: true,
  },
  {
    title: "SigmaTrader",
    subtitle: "Algorithmic Crypto Trading Bot",
    description:
      "BTC/USDT trading bot using RSI mean reversion on 15m candles (RSI<32 + EMA20 + volume filter, trailing stop, TP +3% / SL -1%). Phase 0 backtest complete: 314 trades, 45.2% win rate, 1.22 profit factor. Next: live data pipeline and LLM sentiment filtering via Groq.",
    tech: ["Python", "FastAPI", "Next.js", "Binance API", "Pandas"],
    github: "https://github.com/tenzin333",
  },
  {
    title: "DPM-UI",
    subtitle: "Enterprise Promotion Management Dashboard",
    description:
      "Core contributor at Tecnotree — a promotion management platform serving telecom enterprises. Built complex nested criteria builders, bulk export/import wizards, permission-based navigation, and ForgeRock/WSO2 SSO with Redis distributed locking. Led the Vitest + RTL testing initiative targeting 80% coverage.",
    tech: ["Next.js", "TypeScript", "shadcn/ui", "React Hook Form", "Zod", "Docker/K8s"],
  },
  {
    title: "Lumen AI",
    subtitle: "Real-Time Webpage Analysis Extension",
    description:
      "Chrome extension using Groq/Llama 3.1 for real-time, context-aware analysis of any webpage. Secure BYOK vault for API key management, Manifest V3 compliant with minimal permissions footprint.",
    tech: ["JavaScript", "Chrome MV3", "Groq Cloud", "Llama 3.1"],
    github: "https://github.com/tenzin333",
  },
  {
    title: "Autonomous Bounty Hunter",
    subtitle: "ReAct-Style AI Security Agent",
    description:
      "AI agent that automates vulnerability detection using Semgrep static analysis and generates surgical security patches via Llama 3/4. ReAct reasoning loop with immutable on-chain fix logging for audit trails.",
    tech: ["Python", "Semgrep", "Llama 3/4", "Solidity", "Foundry"],
    github: "https://github.com/tenzin333",
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
              className={`group p-6 rounded-lg bg-card border transition-all relative overflow-hidden ${
                project.featured
                  ? "border-primary/30 hover:border-primary/60 md:col-span-2"
                  : "border-border hover:border-primary/40"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-mono text-primary text-xs">{project.subtitle}</p>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-primary/15 text-primary border border-primary/20">
                      flagship
                    </span>
                  )}
                </div>
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
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
                      aria-label={`${project.title} live`}
                    >
                      {project.live.includes("chromewebstore") ? (
                        <>
                          <Chrome size={18} />
                          <span className="text-xs font-mono">Web Store</span>
                        </>
                      ) : (
                        <ExternalLink size={18} />
                      )}
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