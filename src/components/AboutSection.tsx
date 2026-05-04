import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, GraduationCap, Cpu } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Production Systems", value: "3" },
  { label: "AI Projects Shipped", value: "3" },
  { label: "API Performance Gain", value: "30%" },
];

const highlights = [
  {
    icon: Briefcase,
    title: "Senior Developer @ Tecnotree",
    sub: "Dec 2021 – Present · Bangalore, India",
    desc: "Building enterprise-grade Next.js platforms with OAuth SSO, Redis, observability, and CI/CD. Currently developing an MCP server integration over TMF 671 APIs.",
  },
  {
    icon: Cpu,
    title: "AI/GenAI Builder",
    sub: "Independent · 2025 – Present",
    desc: "Shipping production AI systems solo — RAG pipelines, LLM integration, vector search, and agentic workflows across full-stack SaaS and Chrome extensions.",
  },
  {
    icon: GraduationCap,
    title: "B.Tech — Electronics & Communication",
    sub: "Surendra Institute of Engineering · GPA 3.7 / 4.0",
    desc: "Graduated 2021. Strong fundamentals in systems thinking and signal processing that translate directly into how I reason about data pipelines and infrastructure.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-primary text-sm mb-2">// about</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Who I <span className="text-gradient">am</span>
          </h2>
          <div className="max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a full-stack engineer based in{" "}
              <span className="inline-flex items-center gap-1 text-foreground font-mono text-sm">
                <MapPin size={13} className="text-primary" />
                Kalimpong, West Bengal
              </span>{" "}
              with 4+ years of production experience. My day job is building
              enterprise platforms at Tecnotree — complex auth systems, API
              performance, observability, CI/CD.
            </p>
            <p>
              Outside of that, I've been independently shipping AI-native
              systems: a full RAG SaaS, a research knowledge graph on the Chrome
              Web Store, and an LLM browser assistant. I specialise in the full
              stack from React and FastAPI to pgvector and LLM integration — and
              I operate best when I own a product outcome end-to-end.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="rounded-xl bg-card border border-border p-5 text-center"
            >
              <p className="text-3xl font-bold font-heading text-gradient mb-1">
                {s.value}
              </p>
              <p className="text-xs font-mono text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="rounded-xl border border-border bg-card p-5 group hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <h.icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    {h.title}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">
                    {h.sub}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Currently section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-5 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="font-mono text-xs text-primary font-semibold tracking-widest uppercase">
              Currently
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building{" "}
            <span className="text-foreground font-semibold">AskMyDocs</span> —
            a production RAG SaaS — and an{" "}
            <span className="text-foreground font-semibold">
              MCP server integration
            </span>{" "}
            at Tecnotree over TMF 671 APIs. Open to Full Stack, GenAI, or hybrid
            roles — remote preferred.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;