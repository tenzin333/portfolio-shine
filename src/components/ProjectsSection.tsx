import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AskMyDocs",
    date: "Apr 2026 – Present",
    badge: { label: "Live", variant: "live" },
    description:
      "Full-stack RAG SaaS — upload PDFs, ask questions, get grounded answers. Handles chunking, embedding, vector search, and LLM synthesis end-to-end with a production-ready auth and storage layer.",
    pipeline: ["PDF upload", "S3 storage", "Gemini embed", "pgvector", "cosine search", "LLM synthesis"],
    tags: ["Next.js 15", "FastAPI", "pgvector", "Gemini", "AWS EC2", "AWS S3", "Docker", "JWT", "Neon.tech"],
    links: {
      github: "https://github.com/tenzin333",
      demo: "https://tenzinthinlay.netlify.app",
    },
    featured: true,
  },
  {
    title: "DeepTrail",
    date: "Mar 2026",
    badge: { label: "Chrome Web Store", variant: "store" },
    description:
      "AI research knowledge graph built as a Chrome extension. Captures browser activity, embeds content via Gemini, stores in pgvector, and visualises semantic connections with React Flow.",
    pipeline: ["browser capture", "embed", "pgvector", "graph viz"],
    tags: ["Chrome MV3", "React 18", "FastAPI", "pgvector", "Groq / Llama 3", "React Flow", "Render"],
    links: {
      github: "https://github.com/tenzin333",
      demo: "#", // replace with Chrome Web Store URL
    },
  },
  {
    title: "Lumen AI",
    date: "Oct 2025",
    badge: { label: "Extension", variant: "ext" },
    description:
      "LLM-powered browser assistant that provides real-time AI analysis of any web page. Context-aware summarisation and one-click explanations via the Context Menus API with BYOK privacy vault.",
    pipeline: ["page content", "service worker", "Groq API", "overlay UI"],
    tags: ["Chrome MV3", "JavaScript", "Groq Cloud", "Llama 3.1", "Marked.js", "BYOK"],
    links: {
      github: "https://github.com/tenzin333",
    },
  },
];

const badgeStyles: Record<string, string> = {
  live: "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300",
  store: "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-300",
  ext: "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950 dark:text-amber-300",
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects.find((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// projects</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-10">
            Things I've <span className="text-gradient">shipped</span>
          </h2>
        </motion.div>

        {/* Featured */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border-2 border-primary/40 bg-card p-6 md:p-8 mb-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${badgeStyles[featured.badge.variant]}`}>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                {featured.badge.label}
              </span>
              <span className="text-xs text-muted-foreground font-mono">{featured.date}</span>
            </div>

            <h3 className="text-2xl font-bold font-heading mb-2">{featured.title}</h3>
            <p className="text-muted-foreground mb-5 max-w-2xl">{featured.description}</p>

            {/* Pipeline */}
            <p className="font-mono text-xs text-muted-foreground/60 mb-2">pipeline</p>
            <div className="flex flex-wrap items-center gap-1.5 mb-5">
              {featured.pipeline.map((step, i) => (
                <span key={step} className="flex items-center gap-1.5">
                  <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground">
                    {step}
                  </span>
                  {i < featured.pipeline.length - 1 && (
                    <span className="text-muted-foreground/40 text-xs">→</span>
                  )}
                </span>
              ))}
            </div>

            <div className="border-t border-border pt-4 mb-4">
              <div className="flex flex-wrap gap-1.5">
                {featured.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 rounded border border-border text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a href={featured.links.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-2 rounded border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all">
                <Github size={13} /> GitHub
              </a>
              {featured.links.demo && (
                <a href={featured.links.demo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs px-3 py-2 rounded border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all">
                  <ExternalLink size={13} /> Live demo
                </a>
              )}
            </div>
          </motion.div>
        )}

        {/* Secondary grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {secondary.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${badgeStyles[project.badge.variant]}`}>
                  {project.badge.label}
                </span>
                <span className="text-xs text-muted-foreground font-mono">{project.date}</span>
              </div>

              <h3 className="text-lg font-bold font-heading mb-1.5">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <p className="font-mono text-xs text-muted-foreground/60 mb-2">pipeline</p>
              <div className="flex flex-wrap items-center gap-1 mb-4">
                {project.pipeline.map((step, si) => (
                  <span key={step} className="flex items-center gap-1">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                      {step}
                    </span>
                    {si < project.pipeline.length - 1 && (
                      <span className="text-muted-foreground/40 text-xs">→</span>
                    )}
                  </span>
                ))}
              </div>

              <div className="border-t border-border pt-3 mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all">
                  <Github size={13} /> GitHub
                </a>
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all">
                    <ExternalLink size={13} /> Web Store
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;