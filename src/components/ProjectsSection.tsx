import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-widest uppercase">
            Full Stack Developer → AI / GenAI
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 leading-tight">
            Tenzin Thinlay
            <br />
            <span className="text-gradient">Bhutia</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
            4+ years building enterprise platforms at Tecnotree. Now shipping
            AI-native tools — RAG pipelines, LLM agents, and agentic workflows
            — from browser extensions to SaaS.
          </p>
        </motion.div>

        {/* AskMyDocs featured badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="inline-flex items-center gap-2.5 px-4 py-2.5 mb-8 rounded-lg border border-primary/20 bg-primary/5 text-sm text-muted-foreground hover:border-primary/40 hover:bg-primary/10 transition-all cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span>Latest:</span>
          <span className="text-primary font-semibold">AskMyDocs</span>
          <span className="text-muted-foreground/40">—</span>
          <span className="text-xs text-muted-foreground/60 hidden sm:inline">
            RAG · pgvector · Gemini · Next.js 15 · AWS
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-md border border-primary/40 text-foreground font-semibold hover:border-primary hover:bg-primary/10 transition-all"
          >
            Contact Me
          </a>
          <a
            href="/Tenzin_Thinlay_Base_FS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md border border-border text-muted-foreground font-semibold hover:border-primary/40 hover:text-foreground transition-all"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
        
          {[
            { icon: Github, href: "https://github.com/tenzin333", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/tenthinlay1", label: "LinkedIn" },
            { icon: Mail, href: "mailto:tenthinlayofficial@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-primary animate-bounce" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;