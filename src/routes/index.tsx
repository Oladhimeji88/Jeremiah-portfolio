import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/jeremiah/logo.png";
import bust from "@/assets/jeremiah/bust.png";
import testimonialImg from "@/assets/jeremiah/testimonial.jpg";
import { projects } from "@/lib/projects";

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

const testimonials = [
  {
    quote: "Jeremiah worked under my supervision and he delivered on time and he is good at what he does.",
    name: "Emmanuel Berit",
    role: "Vastlearn",
    img: testimonialImg,
  },
  {
    quote: "An exceptional designer who truly understands the balance between aesthetics and functionality. Every deliverable exceeded expectations.",
    name: "Tolu Adeyemi",
    role: "Product Manager, Fintech Startup",
    img: null,
  },
  {
    quote: "Jeremiah has a rare ability to translate vague ideas into polished, intuitive interfaces. Working with him was an absolute pleasure.",
    name: "Chisom Okafor",
    role: "Co-Founder, Padii",
    img: null,
  },
  {
    quote: "Fast, professional, and detail-oriented. He redesigned our entire mobile app and users noticed immediately.",
    name: "David Nwachukwu",
    role: "CEO, Moniepoint Partner",
    img: null,
  },
  {
    quote: "His motion design work brought our brand to life in ways we couldn't have imagined. Highly recommended.",
    name: "Amara Eze",
    role: "Creative Director",
    img: null,
  },
  {
    quote: "The branding work Jeremiah delivered was world-class. Clean, distinctive, and exactly on-brief.",
    name: "Femi Lawson",
    role: "Founder, Cesado Art Gallery",
    img: null,
  },
];

const socials = [
  { label: "Behance", href: "https://www.behance.net/balogunjeremiah" },
  { label: "Dribbble", href: "https://dribbble.com/Oladhimeji8" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/balogun-jeremiah/" },
  { label: "Calendly", href: "https://calendly.com/balogun-jeremiah8/30min" },
];

const services = [
  { n: "01", title: "UI/UX Design", desc: "End-to-end product design — wireframes, prototypes, and high-fidelity interfaces." },
  { n: "02", title: "Branding", desc: "Visual identity systems, logos, colour palettes, and brand guidelines." },
  { n: "03", title: "Motion & Video Editing", desc: "Animated interfaces, motion graphics, and polished video production." },
  { n: "04", title: "Graphic Design", desc: "Print and digital assets — posters, banners, social media, and marketing collateral." },
  { n: "05", title: "AI Development", desc: "Building apps and tools with AI — Claude, Codex, and modern AI APIs." },
  { n: "06", title: "Illustration", desc: "Custom digital illustrations, icons, and visual storytelling." },
];

const skills = [
  { name: "Framer", desc: "No-code website builder", pct: 90, icon: "https://cdn.simpleicons.org/framer/ffffff", abbr: null },
  { name: "Photoshop", desc: "Visual design & retouching", pct: 93, icon: null, abbr: "Ps" },
  { name: "Figma", desc: "Interface & prototyping", pct: 90, icon: "https://cdn.simpleicons.org/figma/ffffff", abbr: null },
  { name: "After Effects", desc: "Motion design", pct: 50, icon: null, abbr: "Ae" },
  { name: "Rive", desc: "Interactive animation", pct: 30, icon: "https://cdn.simpleicons.org/rive/ffffff", abbr: null },
  { name: "React", desc: "Front-end development", pct: 90, icon: "https://cdn.simpleicons.org/react/ffffff", abbr: null },
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
        className={`fixed z-9999 pointer-events-none rounded-full border border-foreground/40 cursor-ring ${cursorLarge ? "cursor-ring-lg" : ""}`}
        style={{ left: cursor.x, top: cursor.y }}
      />
      <div
        className="fixed z-9999 pointer-events-none w-1.5 h-1.5 rounded-full bg-foreground cursor-dot"
        style={{ left: cursor.x, top: cursor.y }}
      />

      {/* Menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background flex flex-col md:flex-row transition-all duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Left — navigation links */}
        <div className="flex-1 flex flex-col justify-center px-10 md:px-20 py-24">
          <p className="text-foreground/30 text-xs tracking-widest uppercase mb-12">Navigation</p>
          <nav className="space-y-1">
            {[
              { label: "Work", href: "#projects", route: null },
              { label: "About", href: null, route: "/about" },
              { label: "Services", href: "#services", route: null },
              { label: "Skills", href: "#skills", route: null },
              { label: "Contact", href: "#contact", route: null },
            ].map(({ label, href, route }) =>
              route ? (
                <Link
                  key={label}
                  to={route as "/about"}
                  onClick={() => setMenuOpen(false)}
                  className="block font-display font-bold text-6xl md:text-8xl leading-none hover:text-foreground/30 transition-colors duration-200 uppercase"
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={href!}
                  onClick={() => setMenuOpen(false)}
                  className="block font-display font-bold text-6xl md:text-8xl leading-none hover:text-foreground/30 transition-colors duration-200 uppercase"
                >
                  {label}
                </a>
              )
            )}
          </nav>
          <div className="mt-14 flex gap-8 text-sm text-foreground/40">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — about */}
        <div className="hidden md:flex flex-col justify-between w-80 border-l border-foreground/10 px-10 py-24">
          <div>
            <p className="text-foreground/30 text-xs tracking-widest uppercase mb-8">About</p>
            <img src={bust} alt="Balogun Jeremiah" className="w-24 h-24 object-cover rounded-full grayscale mb-6" />
            <h2 className="font-display font-bold text-xl mb-3">Balogun Jeremiah</h2>
            <p className="text-foreground/50 text-sm leading-relaxed mb-6">
              I didn't start with design — I started with understanding how things work. Background in Physical Science. Now I design systems that scale across SaaS, AI, and real-world platforms.
            </p>
            <p className="text-foreground/30 text-xs tracking-widest uppercase">B.Sc. Applied Physics · Lagos State University · 2023</p>
          </div>
          <a
            href="mailto:Balogun.jeremiah8@gmail.com"
            className="text-xs tracking-widest uppercase text-foreground/40 hover:text-foreground transition-colors"
          >
            Balogun.jeremiah8@gmail.com
          </a>
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
              Senior Product Designer. I help businesses move from confusion to clarity and users from frustration to flow.
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
            <Link
              key={p.id}
              to="/projects/$projectId"
              params={{ projectId: p.id }}
              className="group flex items-center gap-4 md:gap-8 py-6 border-t border-foreground/10 hover:border-foreground/25 transition-all duration-300"
              onMouseEnter={() => { setHoveredProject(p); setCursorLarge(true); }}
              onMouseLeave={() => { setHoveredProject(null); setCursorLarge(false); }}
            >
              <span className="text-foreground/25 text-xs w-6 shrink-0">{p.n}</span>
              <h3 className="font-display font-bold flex-1 text-fluid-project group-hover:translate-x-2 transition-transform duration-300 uppercase">
                {p.title}
              </h3>
              <span className="hidden md:block text-foreground/30 text-xs tracking-wide shrink-0">{p.tag}</span>
              <span className="text-foreground/25 text-xs shrink-0">{p.year}</span>
              <span className="text-foreground/0 group-hover:text-foreground/60 transition-colors text-lg shrink-0">→</span>
            </Link>
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
          <img src={hoveredProject.thumbnail} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      <div className="border-t border-foreground/10" />

      {/* SERVICES */}
      <section id="services" className="px-8 md:px-12 py-20">
        <p className="text-foreground/40 text-xs tracking-widest uppercase mb-10">What I Do</p>
        <div>
          {services.map((s) => (
            <div
              key={s.n}
              className="group flex gap-6 md:gap-12 py-7 border-t border-foreground/10 hover:border-foreground/25 transition-all duration-300"
            >
              <span className="text-foreground/20 text-xs pt-1.5 w-6 shrink-0">{s.n}</span>
              <div className="flex-1 md:flex items-start justify-between gap-12">
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-2 md:mb-0 group-hover:translate-x-1 transition-transform duration-300 shrink-0">
                  {s.title}
                </h3>
                <p className="text-foreground/40 text-sm leading-relaxed max-w-md md:pt-1">{s.desc}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-foreground/10" />
        </div>
      </section>

      <div className="border-t border-foreground/10" />

      {/* SKILLS */}
      <section id="skills" className="px-8 md:px-12 py-20">
        <div className="flex items-baseline justify-between mb-10">
          <p className="text-foreground/40 text-xs tracking-widest uppercase">Skills & Tools</p>
          <p className="text-foreground/20 text-xs">{skills.length} tools</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skills.map((s) => (
            <div
              key={s.name}
              className="group relative border border-foreground/10 hover:border-foreground/35 bg-foreground/[0.03] hover:bg-foreground/[0.07] transition-all duration-300 p-6 flex flex-col justify-between min-h-44 overflow-hidden"
            >
              {/* Top row — icon + percentage */}
              <div className="flex items-start justify-between mb-6">
                {s.icon ? (
                  <img
                    src={s.icon}
                    alt={s.name}
                    className="w-8 h-8 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <span className="font-display font-bold text-lg text-foreground/50 group-hover:text-foreground transition-colors duration-300 italic">
                    {s.abbr}
                  </span>
                )}
                <span className="font-display font-bold text-3xl text-foreground/15 group-hover:text-foreground/40 transition-colors duration-300 tabular-nums leading-none">
                  {s.pct}
                </span>
              </div>

              {/* Bottom — name + desc + bar */}
              <div>
                <p className="font-display font-bold text-xl mb-1 group-hover:translate-x-0.5 transition-transform duration-300">
                  {s.name}
                </p>
                <p className="text-foreground/35 text-xs leading-relaxed mb-4">{s.desc}</p>
                {/* Progress bar */}
                <div className="h-px w-full bg-foreground/10">
                  <div
                    className="h-px bg-foreground/60 group-hover:bg-foreground transition-colors duration-500"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
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
                <h3 className="font-display font-bold text-fluid-process mb-2 md:mb-0 group-hover:translate-x-1 transition-transform duration-300 shrink-0">
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

      {/* TESTIMONIALS */}
      <section className="py-20 overflow-hidden">
        <p className="text-foreground/40 text-xs tracking-widest uppercase mb-10 px-8 md:px-12">Testimonials</p>

        {/* Row 1 — left to right */}
        <div className="flex w-max animate-marquee mb-4">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-80 md:w-96 mx-3 border border-foreground/10 p-6 flex flex-col justify-between gap-6 hover:border-foreground/30 transition-colors"
            >
              <p className="text-sm leading-relaxed text-foreground/70 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                {t.img ? (
                  <img src={t.img} alt={t.name} className="w-9 h-9 rounded-full object-cover grayscale shrink-0" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-display font-bold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-foreground/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 — right to left */}
        <div className="flex w-max animate-marquee-reverse">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-80 md:w-96 mx-3 border border-foreground/10 p-6 flex flex-col justify-between gap-6 hover:border-foreground/30 transition-colors"
            >
              <p className="text-sm leading-relaxed text-foreground/70 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                {t.img ? (
                  <img src={t.img} alt={t.name} className="w-9 h-9 rounded-full object-cover grayscale shrink-0" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-display font-bold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-foreground/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
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
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors uppercase tracking-widest">
                {s.label}
              </a>
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
