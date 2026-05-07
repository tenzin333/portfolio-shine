import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

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

          {/* AI / GenAI Side Projects */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-16 pb-12"
          >
            <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <Rocket size={12} className="text-primary-foreground" />
            </div>
            <p className="font-mono text-primary text-xs mb-1">2025 — Present</p>
            <h3 className="text-xl font-bold font-heading mb-1">AI / GenAI Projects</h3>
            <p className="text-muted-foreground text-sm mb-3">Extending into GenAI & LLM-Powered Applications</p>
            <ul className="text-muted-foreground text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Built and shipped DeepTrail — a full RAG pipeline (Gemini embeddings → pgvector → Groq/Llama 3 synthesis) packaged as a Chrome Extension (MV3 + React 18) with FastAPI backend on Render and PostgreSQL on Neon.tech. Live on the Chrome Web Store.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Developing SigmaTrader — a BTC/USDT algorithmic trading bot using RSI mean reversion strategy, backtested over 314 trades (45.2% win rate, 1.22 profit factor). Python, FastAPI, Next.js, Binance API. Planning LLM sentiment filter via Groq.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Built Lumen AI — a Chrome Extension providing real-time AI analysis of web content via Groq's Llama 3.1 inference, with context-aware summarization and BYOK vault for zero-knowledge privacy.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Built Autonomous Bounty Hunter — a ReAct-style AI security agent using Semgrep for vulnerability detection, LLM-generated security patches, and on-chain audit logging via Solidity smart contracts.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Completed a 14-day GenAI engineering sprint covering RAG pipelines, agentic workflows, prompt engineering, evaluation (RAGAS), system design, and mock interviews.
              </li>
            </ul>
          </motion.div>

          {/* Work — Tecnotree */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative pl-16 pb-12"
          >
            <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <Briefcase size={12} className="text-primary-foreground" />
            </div>
            <p className="font-mono text-primary text-xs mb-1">Dec 2021 — Present</p>
            <h3 className="text-xl font-bold font-heading mb-1">Senior Developer</h3>
            <p className="text-muted-foreground text-sm mb-3">Tecnotree Convergence Pvt Ltd</p>
            <ul className="text-muted-foreground text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Developed LLM-powered retrieval workflows and AI tooling integrations using FastAPI, vector search, and modern GenAI application patterns alongside enterprise platform engineering.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Integrated MCP (Model Context Protocol) server workflows and TypeScript-based AI tooling over TMF 671 APIs with token pass-through authentication and structured tool orchestration.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Designed asynchronous data-processing and transformation pipelines with validation, retry handling, and distributed workflow coordination — architectural patterns later applied in RAG ingestion and embedding systems.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Integrated New Relic Browser Agent with structured logging (Pino) for observability, monitoring, and debugging across distributed Next.js services and API workflows.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Architected OAuth 2.0 SSO authentication using WSO2, ForgeRock, and NextAuth; resolved distributed token refresh race conditions using Redis-based synchronization and locking mechanisms.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Managed Dockerized deployments, Harbor image security, and GitLab CI/CD automation for enterprise applications; improved deployment reliability and reduced production vulnerabilities.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Improved frontend performance by 40% through code-splitting, lazy loading, caching optimization, and efficient rendering strategies across large-scale React/Next.js applications.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Leveraged AI-assisted engineering workflows using Claude Code, Cursor, GitHub Copilot, and prompt-driven development practices to accelerate feature delivery and developer productivity.
              </li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
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