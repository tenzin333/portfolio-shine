import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm font-mono">
        © {new Date().getFullYear()} Tenzin Thinlay Bhutia
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/tenzin333" },
          { icon: Linkedin, href: "https://linkedin.com/in/tenthinlay1" },
          { icon: Mail, href: "mailto:tenthinlayofficial@gmail.com" },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
