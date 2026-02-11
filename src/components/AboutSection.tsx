import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Shield, Brain } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Full Stack", desc: "React, Next.js, Node.js — enterprise-grade apps" },
  { icon: Brain, title: "AI Integration", desc: "LLM-powered tools & context-aware assistants" },
  { icon: Shield, title: "Security", desc: "SAST, smart contract auditing, OWASP Top 10" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// about</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed mb-12">
            Full Stack Developer with 4 years of experience specializing in scalable web architectures,
            AI-driven tools, and security orchestration. Expert in JavaScript, TypeScript, React, and Node.js.
            Currently focused on integrating LLMs for context-aware browser assistance and automated
            vulnerability remediation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all group"
            >
              <item.icon className="text-primary mb-4 group-hover:glow-text transition-all" size={28} />
              <h3 className="text-lg font-semibold font-heading mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
