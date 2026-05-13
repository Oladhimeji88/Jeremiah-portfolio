import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/jeremiah/logo.png";
import bust from "@/assets/jeremiah/bust.png";
import pPadii from "@/assets/jeremiah/p-padii.png";
import pNetflix from "@/assets/jeremiah/p-netflix.png";
import pMoniepoint from "@/assets/jeremiah/p-moniepoint.png";
import pLagrent from "@/assets/jeremiah/p-lagrent.png";
import pCesado from "@/assets/jeremiah/p-cesado.png";
import testimonial from "@/assets/jeremiah/testimonial.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Balogun Jeremiah — UI/UX Designer | Lagos, Nigeria" },
      {
        name: "description",
        content:
          "Balogun Jeremiah — UI/UX designer from Lagos, Nigeria. Turning your ideas into realities through thoughtful interfaces and digital products.",
      },
    ],
  }),
});

const projects = [
  { n: "01", tag: "Mobile Design", title: "PADII Conversational AI", year: "2024", img: pPadii, href: "#" },
  { n: "02", tag: "Website Design", title: "Netflix AI Movie Creator", year: "2024", img: pNetflix, href: "#" },
  { n: "03", tag: "Mobile Design", title: "Moniepoint Mini Bank", year: "2023", img: pMoniepoint, href: "#" },
  { n: "04", tag: "Website Design", title: "Lagrent Rent App", year: "2023", img: pLagrent, href: "https://www.behance.net/gallery/231280891/LAGOS-HOME-RENT" },
  { n: "05", tag: "Website Design", title: "Cesado Art Gallery", year: "2023", img: pCesado, href: "#" },
];

const skills = [
  { name: "Framer", desc: "No-code website builder", pct: 90, icon: "https://cdn.simpleicons.org/framer/ffffff" },
  { name: "Photoshop", desc: "Visual design & retouching", pct: 93, icon: "https://cdn.simpleicons.org/adobephotoshop/ffffff" },
  { name: "Figma", desc: "Interface & prototyping", pct: 90, icon: "https://cdn.simpleicons.org/figma/ffffff" },
  { name: "After Effects", desc: "Motion design", pct: 50, icon: "https://cdn.simpleicons.org/adobeaftereffects/ffffff" },
  { name: "Rive", desc: "Interactive animation", pct: 30, icon: "https://cdn.simpleicons.org/rive/ffffff" },
  { name: "React", desc: "Front-end development", pct: 90, icon: "https://cdn.simpleicons.org/react/ffffff" },
];

const socials = [
  { label: "Behance", href: "https://www.behance.net/balogunjeremiah" },
  { label: "Dribbble", href: "https://dribbble.com/Oladhimeji8" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/balogun-jeremiah/" },
  { label: "Calendly", href: "https://calendly.com/balogun-jeremiah8/30min" },
];

const process = [
  { n: "01", t: "Discovery", d: "Research users, behaviors, and competitors. Define the problem statement and goals.", time: "3–5 days" },
  { n: "02", t: "Define", d: "Scope project goals with measurable outcomes like satisfaction and task completion.", time: "2–3 days" },
  { n: "03", t: "Ideation", d: "Brainstorm and create wireframes outlining structure and navigation.", time: "3–5 days" },
  { n: "04", t: "Prototyping", d: "Build interactive prototypes that closely resemble the final product.", time: "2–6 days" },
  { n: "05", t: "Development", d: "Build the product, work with developers, and ship reliable functionality.", time: "3–5 days" },
];

function Index() {
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const [hoveredProject, setHoveredProject] = useState<(typeof projects)[0] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorLarge, setCursorLarge] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden no-cursor">

      {/* Custom cursor */}
      <div
        className={`fixed z-[9999] pointer-events-none rounded-full border border-foreground/40 cursor-ring ${cursorLarge ? "cursor-ring-lg" : ""}`}
        style={{ left: cursor.x, top: cursor.y }}
      />
      <div
        className="fixed z-[9999] pointer-events-none w-1.5 h-1.5 rounded-full bg-foreground cursor-dot"
        style={{ left: cursor.x, top: cursor.y }}
      />

      {/* Menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background flex flex-col justify-center px-10 md:px-20 transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <p className="text-foreground/30 text-xs tracking-widest uppercase mb-12">Navigation</p>
        <nav className="space-y-1">
          {[
            { label: "Work", href: "#projects" },
            { label: "Skills", href: "#skills" },
            { label: "Process", href: "#process" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block font-display font-bold text-7xl md:text-9xl leading-none hover:text-foreground/30 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex gap-8 text-sm text-foreground/40">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">{s.label}</a>
          ))}
        </div>
      </div>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-5 flex items-center justify-between border-b border-foreground/10 bg-background/90 backdrop-blur-sm">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="" className="w-6 h-6 object-contain invert" />
          <span className="font-display text-sm tracking-wide">Balogun Jeremiah</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-xs text-foreground/40 tracking-wide">
          <span>Lagos, Nigeria</span>
          <span className="text-foreground/20">·</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 inline-block animate-pulse" />
            Available for Freelance
          </span>
          <span className="text-foreground/20">·</span>
          <span>2021 — Present</span>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          onMouseEnter={() => setCursorLarge(true)}
          onMouseLeave={() => setCursorLarge(false)}
          className="text-xs tracking-widest uppercase hover:text-foreground/50 transition-colors"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      {/* HERO */}
      <section id="top" className="min-h-screen flex flex-col justify-end px-8 md:px-12 pb-12 pt-28">
        <div className="w-full">
          <p className="text-foreground/40 text-xs tracking-widest uppercase mb-10">
            UI/UX Designer · Lagos, Nigeria · 2021—Present
          </p>
          <h1 className="font-display font-bold leading-[0.88] tracking-tighter text-fluid-hero">
            <span className="block">Balogun</span>
            <span className="block text-foreground/25">Jeremiah</span>
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-foreground/10 pt-8">
            <p className="max-w-sm text-foreground/50 text-base leading-relaxed">
              Turning ideas into realities through thoughtful interfaces and digital products.
            </p>
            <a
              href="#projects"
              onMouseEnter={() => setCursorLarge(true)}
              onMouseLeave={() => setCursorLarge(false)}
              className="inline-flex items-center gap-4 text-xs tracking-widest uppercase hover:gap-8 transition-all duration-300 whitespace-nowrap"
            >
              View Work <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="border-t border-foreground/10" />

      {/* PROJECTS */}
      <section id="projects" className="px-8 md:px-12 py-20">
        <div className="flex items-baseline justify-between mb-10">
          <p className="text-foreground/40 text-xs tracking-widest uppercase">Selected Work</p>
          <p className="text-foreground/20 text-xs">{projects.length} projects</p>
        </div>
        <div>
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 md:gap-8 py-6 border-t border-foreground/10 hover:border-foreground/25 transition-all duration-300"
              onMouseEnter={() => { setHoveredProject(p); setCursorLarge(true); }}
              onMouseLeave={() => { setHoveredProject(null); setCursorLarge(false); }}
            >
              <span className="text-foreground/25 text-xs w-6 shrink-0">{p.n}</span>
              <h3 className="font-display font-bold flex-1 text-fluid-project group-hover:translate-x-2 transition-transform duration-300">
                {p.title}
              </h3>
              <span className="hidden md:block text-foreground/30 text-xs tracking-wide shrink-0">{p.tag}</span>
              <span className="text-foreground/25 text-xs shrink-0">{p.year}</span>
              <span className="text-foreground/0 group-hover:text-foreground/60 transition-colors text-lg shrink-0">→</span>
            </a>
          ))}
          <div className="border-t border-foreground/10" />
        </div>
      </section>

      {/* Floating project image follows cursor */}
      {hoveredProject && (
        <div
          className="fixed z-30 pointer-events-none w-56 h-40 md:w-72 md:h-52 overflow-hidden rounded-sm float-img"
          style={{ left: cursor.x + 28, top: cursor.y - 100 }}
        >
          <img src={hoveredProject.img} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      <div className="border-t border-foreground/10" />

      {/* ABOUT + SKILLS */}
      <section id="skills" className="px-8 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* About */}
          <div>
            <p className="text-foreground/40 text-xs tracking-widest uppercase mb-10">About</p>
            <div className="flex gap-5 items-start mb-8">
              <img src={bust} alt="Balogun Jeremiah" className="w-20 h-20 object-cover rounded-full grayscale shrink-0" />
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight mb-4">
                  Product designer<br />from Lagos
                </h2>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  I'm dedicated to crafting websites and digital products that bring your idea to life. With 4+ years of experience, I blend creativity with technical expertise to deliver purposeful, delightful experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="text-foreground/40 text-xs tracking-widest uppercase mb-10">Skills & Tools</p>
            <div>
              {skills.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-4 py-4 border-t border-foreground/10 hover:border-foreground/25 transition-colors group"
                >
                  <img src={s.icon} alt={s.name} className="w-5 h-5 object-contain opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                  <div className="flex-1">
                    <span className="font-display font-semibold text-lg group-hover:translate-x-1 transition-transform duration-200 inline-block">
                      {s.name}
                    </span>
                    <span className="text-foreground/30 text-xs ml-3">{s.desc}</span>
                  </div>
                  <span className="text-foreground/30 text-xs tabular-nums">{s.pct}%</span>
                </div>
              ))}
              <div className="border-t border-foreground/10" />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-foreground/10" />

      {/* PROCESS */}
      <section id="process" className="px-8 md:px-12 py-20">
        <p className="text-foreground/40 text-xs tracking-widest uppercase mb-10">Process</p>
        <div>
          {process.map((p) => (
            <div
              key={p.n}
              className="group flex gap-6 md:gap-12 py-8 border-t border-foreground/10 hover:border-foreground/25 transition-all duration-300"
            >
              <span className="text-foreground/20 text-xs pt-2 w-6 shrink-0">{p.n}</span>
              <div className="flex-1 md:flex items-start justify-between gap-12">
                <h3
                  className="font-display font-bold text-fluid-process mb-2 md:mb-0 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
                >
                  {p.t}
                </h3>
                <p className="text-foreground/40 text-sm leading-relaxed max-w-md md:pt-1">{p.d}</p>
              </div>
              <span className="hidden md:block text-foreground/20 text-xs pt-2 shrink-0">{p.time}</span>
            </div>
          ))}
          <div className="border-t border-foreground/10" />
        </div>
      </section>

      <div className="border-t border-foreground/10" />

      {/* TESTIMONIAL */}
      <section className="px-8 md:px-12 py-20">
        <p className="text-foreground/40 text-xs tracking-widest uppercase mb-10">Testimonials</p>
        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start max-w-4xl">
          <img src={testimonial} alt="Emmanuel Berit" className="w-14 h-14 rounded-full object-cover grayscale shrink-0" />
          <div>
            <p className="text-2xl md:text-3xl leading-snug mb-6 font-display font-medium">
              "Jeremiah worked under my supervision and he delivered on time and he is good at what he does."
            </p>
            <p className="text-foreground/40 text-xs tracking-wide uppercase">Emmanuel Berit — Vastlearn</p>
          </div>
        </div>
      </section>

      <div className="border-t border-foreground/10" />

      {/* CTA */}
      <section id="contact" className="px-8 md:px-12 py-20">
        <p className="text-foreground/40 text-xs tracking-widest uppercase mb-8">Get in touch</p>
        <a
          href="mailto:Balogun.jeremiah8@gmail.com"
          onMouseEnter={() => setCursorLarge(true)}
          onMouseLeave={() => setCursorLarge(false)}
          className="block font-display font-bold leading-none tracking-tighter text-fluid-cta hover:text-foreground/30 transition-colors duration-300"
        >
          LET'S TALK
        </a>
        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-foreground/10 pt-8">
          <a
            href="mailto:Balogun.Jeremiah8@gmail.com"
            className="text-foreground/50 hover:text-foreground transition-colors text-sm"
          >
            Balogun.Jeremiah8@gmail.com
          </a>
          <div className="flex gap-8 text-xs text-foreground/30 tracking-wide">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors uppercase tracking-widest">{s.label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-12 py-6 border-t border-foreground/10">
        <div className="flex flex-col md:flex-row justify-between gap-3 text-xs text-foreground/20">
          <span>© 2024 Balogun Jeremiah</span>
          <span>UI/UX Designer · Lagos, Nigeria</span>
        </div>
      </footer>
    </div>
  );
}
