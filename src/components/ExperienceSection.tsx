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
                Core contributor to DPM-UI — an enterprise promotion management dashboard built with Next.js App Router, TypeScript, shadcn/ui, React Hook Form, and Zod, serving telecom clients including Verizon.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Engineered complex nested form systems including criteria builders with alias badges, part number validation, and correlation group handling for promotion configuration.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Built bulk promotion export/import wizards and bulk lifecycle update workflows, significantly reducing manual operator overhead.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Architected OAuth 2.0 SSO authentication with WSO2 and ForgeRock via NextAuth, including refresh token handling, redirect loop fixes, and Redis-based distributed locking for token refresh race conditions.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Led a UI unit testing initiative using Vitest + React Testing Library targeting 80% coverage, with Jenkins CI/CD integration and a 6-week rollout plan.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Integrated New Relic browser monitoring and pino-based structured logging for OpenSearch. Managed Docker deployments via Harbor, eliminating critical CVEs from production images.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Optimized RESTful API endpoints improving data retrieval performance by 30% through query optimization and Redis caching. Improved frontend performance by 40% via code-splitting and lazy loading.
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