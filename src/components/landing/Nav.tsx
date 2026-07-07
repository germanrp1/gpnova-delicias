import { useEffect, useState } from "react";
import { project } from "@/data/project.config";
import { Logo } from "@/components/branding/Logo";


// const links = [
//   { href: "#proyecto", label: "Proyecto" },
//   { href: "#estudios", label: "Estudios" },
//   { href: "#caracteristicas", label: "Características" },
//   { href: "#ubicacion", label: "Ubicación" },
//   { href: "#contacto", label: "Contacto" },
// ];
const links = project.navigation;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-10 h-20 md:h-16">
        <a
          href="#top"
          className={`flex items-center gap-3 ${project.branding.logoMarginTop} ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          <Logo
            className="h-8 md:h-10 w-auto shrink-0"
            color={scrolled ? project.branding.logoColor : "#FFFFFF"}
            // color=#869F57
          />

          <span className="text-display text-2xl tracking-wider">
            {project.name}
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className={`hidden md:inline-flex items-center text-xs uppercase tracking-[0.18em] font-medium px-5 py-2.5 rounded-full transition-all ${
            scrolled
              ? "bg-primary text-primary-foreground hover:opacity-90"
              : "bg-white text-foreground hover:bg-white/90"
          }`}
        >
          Solicitar info
        </a>
      </div>
    </header>
  );
}
