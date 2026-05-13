import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import bust from "@/assets/jeremiah/bust.png";
import logo from "@/assets/jeremiah/logo.png";
import decor from "@/assets/jeremiah/decor.png";
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

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

const projects = [
  { tag: "Mobile Design", title: "PADII Conversational AI", sub: "Mobile Design · Graphics", img: pPadii, href: "#" },
  { tag: "Website Design", title: "Netflix AI Movie Creator", sub: "Website Design · Animation", img: pNetflix, href: "#" },
  { tag: "Mobile Design", title: "Moniepoint Mini Bank", sub: "Moniepoint · Mobile App", img: pMoniepoint, href: "#" },
  { tag: "Mobile Design", title: "Lagrent {Rent App}", sub: "Website Design · Interaction Design", img: pLagrent, href: "https://www.behance.net/gallery/231280891/LAGOS-HOME-RENT" },
  { tag: "Website Design", title: "Cesado Art Gallery", sub: "Website Design", img: pCesado, href: "#" },
];

const skills = [
  { name: "Framer", desc: "No-code website builder", pct: 90 },
  { name: "Photoshop", desc: "Visual design & retouching", pct: 93 },
  { name: "Figma", desc: "Interface & prototyping", pct: 90 },
  { name: "After Effects", desc: "Motion design", pct: 50 },
  { name: "Rive", desc: "Interactive animation", pct: 30 },
  { name: "React", desc: "Front-end development", pct: 90 },
];

const process = [
  { n: "01", t: "Discovery", d: "We start with a problem statement and goals. Research users, behaviors, and competitors.", time: "3-5 days" },
  { n: "02", t: "Define", d: "Define and scope project goals — measurable outcomes like satisfaction and task completion.", time: "2-3 days" },
  { n: "03", t: "Ideation", d: "Brainstorm and create wireframes outlining structure and navigation.", time: "3-5 days" },
  { n: "04", t: "Prototyping", d: "Build interactive prototypes that closely resemble the final product.", time: "2-6 days" },
  { n: "05", t: "Development", d: "Build the product, work with developers, and ship reliable functionality.", time: "3-5 days" },
];

function Index() {
  const works = useReveal<HTMLDivElement>();
  const skillsR = useReveal<HTMLDivElement>();
  const processR = useReveal<HTMLDivElement>();
  const testR = useReveal<HTMLDivElement>();
  const ctaR = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-foreground text-background">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="" className="w-8 h-8 object-contain" />
            <span className="font-display text-sm tracking-wide">Balogun Jeremiah</span>
          </a>
          <ul className="hidden md:flex gap-10 text-sm text-background/80">
            <li><a href="#projects" className="hover:text-background transition-colors">Projects</a></li>
            <li><a href="#about" className="hover:text-background transition-colors">About &amp; Contact</a></li>
          </ul>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <span className="text-background/70">Email: <span className="text-background">Balogun.jeremiah8@gmail.com</span></span>
            <a href="mailto:Balogun.jeremiah8@gmail.com" className="px-5 py-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">Contact Me</a>
          </div>
          <a href="mailto:Balogun.jeremiah8@gmail.com" className="md:hidden px-4 py-2 text-xs rounded-full bg-background/10">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative px-6 pt-16 pb-24">
        <img src={decor} alt="" aria-hidden className="hidden md:block absolute top-10 right-10 w-48 opacity-40 animate-drift pointer-events-none" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-[auto_1fr] gap-10 items-start">
          {/* Left column: profile chip + bust */}
          <div className="flex md:flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-3 animate-fade-up">
              <div className="w-14 h-14 rounded-full bg-foreground/10 flex items-center justify-center font-display text-xl">BJ</div>
              <div>
                <p className="font-display text-base">Balogun Jeremiah</p>
                <p className="text-xs text-muted-foreground">UI/UX Designer</p>
              </div>
            </div>
            <div className="relative animate-rise delay-200">
              <img
                src={bust}
                alt="Marble bust statue"
                className="w-56 md:w-72 animate-float drop-shadow-[0_30px_30px_rgba(60,40,20,0.25)]"
              />
            </div>
          </div>

          {/* Right column: headline */}
          <div className="md:pt-4">
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full bg-foreground/5 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm">Available for Freelance</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
              <span className="animate-fade-up inline-block">HI! I'm </span>
              <span className="inline-block px-5 py-1 mx-2 rounded-full bg-secondary border border-border align-middle animate-fade-up delay-100">Jeremiah</span>
              <br />
              <span className="animate-fade-up delay-200 inline-block">a </span>
              <span className="inline-block px-5 py-1 mx-2 rounded-full bg-foreground text-background align-middle animate-fade-up delay-300">UI/UX Designer</span>
              <br />
              <span className="animate-fade-up delay-300 inline-block">From </span>
              <span className="inline-block px-5 py-1 mx-2 rounded-full border border-foreground/30 align-middle animate-fade-up delay-500">
                <strong>Lagos,</strong> <span className="text-muted-foreground">Nigeria</span>
              </span>
              <br />
              <span className="animate-fade-up delay-500 inline-block">turning your ideas</span>
              <br />
              <span className="animate-fade-up delay-700 inline-block">into <em className="text-gradient-gold not-italic">Realities</em></span>
            </h1>

            <div className="mt-12 grid sm:grid-cols-[auto_1fr_auto] gap-6 items-center">
              <span className="font-display text-sm text-muted-foreground">(2021 — PRESENT)</span>
              <p className="text-lg text-muted-foreground max-w-xl">
                I'm dedicated to crafting websites and digital products that bring your idea to life.
              </p>
              <a href="#projects" className="px-6 py-3 rounded-full bg-foreground text-background text-sm hover:bg-accent hover:text-accent-foreground transition-colors whitespace-nowrap">
                See what I can do →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 bg-foreground/[0.03]">
        <div ref={works.ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${works.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-display text-sm text-muted-foreground">{"{01}"} — Featured Projects</p>
          <h2 className="font-display text-4xl md:text-6xl mt-3 max-w-3xl">
            I blend creativity with <em className="text-gradient-gold not-italic">technical expertise</em>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {projects.map((p, i) => (
              <a
                key={p.title}
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`marble-card overflow-hidden p-6 group hover:scale-[1.01] transition-transform duration-500 ${i === 4 ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="px-3 py-1 rounded-full bg-foreground/10 font-display">{`{${p.tag}}`}</span>
                  <span className="text-muted-foreground">{p.sub}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-5">{p.title}</h3>
                <div className="overflow-hidden rounded-lg bg-background">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 px-6">
        <div ref={skillsR.ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${skillsR.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-display text-sm text-muted-foreground">{"{02}"} — My Creative Box</p>
          <h2 className="font-display text-4xl md:text-6xl mt-3">My Creative Box</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {skills.map((s, i) => (
              <div key={s.name} className="marble-card p-6 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl">{s.name}</h3>
                  <span className="font-display text-3xl text-gradient-gold">{s.pct}%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                <div className="mt-5 h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-foreground rounded-full transition-all duration-1000"
                    style={{ width: skillsR.shown ? `${s.pct}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 bg-foreground/[0.03]">
        <div ref={processR.ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${processR.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-display text-sm text-muted-foreground">{"{03}"} — Process</p>
          <h2 className="font-display text-4xl md:text-6xl mt-3">How it works</h2>

          <div className="mt-14 space-y-4">
            {process.map((p) => (
              <div key={p.n} className="marble-card p-6 md:p-8 grid md:grid-cols-[auto_1fr_auto] gap-6 items-start hover:translate-x-1 transition-transform">
                <div className="font-display text-5xl text-gradient-gold w-20">{p.n}/</div>
                <div>
                  <h3 className="font-display text-2xl mb-2">{p.t}</h3>
                  <p className="text-muted-foreground max-w-2xl">{p.d}</p>
                </div>
                <span className="px-4 py-1 rounded-full bg-foreground/10 text-sm whitespace-nowrap">{p.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <div ref={testR.ref} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${testR.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-display text-sm text-muted-foreground">{"{04}"} — Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Hear what people are saying about me.</h2>

          <div className="marble-card mt-14 p-10 md:p-14">
            <img src={testimonial} alt="Emmanuel Berit" className="w-20 h-20 rounded-full object-cover mx-auto mb-6" />
            <p className="text-xl md:text-2xl italic font-body leading-relaxed">
              "Jeremiah worked under my supervision and he delivered on time and he is good at what he does."
            </p>
            <p className="font-display mt-6">Emmanuel Berit</p>
            <p className="text-sm text-muted-foreground">Vastlearn</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="py-24 px-6 bg-foreground text-background relative overflow-hidden">
        <img src={bust} alt="" aria-hidden className="absolute -right-10 bottom-0 w-72 md:w-96 opacity-20 animate-float pointer-events-none" />
        <div ref={ctaR.ref} className={`max-w-5xl mx-auto relative z-10 transition-all duration-1000 ${ctaR.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl">
            Let's build that project that will make the next <em className="text-gradient-gold not-italic">Debut</em>.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-end">
            <div>
              <p className="text-background/70 max-w-md">
                Craft intuitive interfaces with purpose, blending creativity and clarity to deliver seamless, delightful user experiences.
              </p>
              <div className="mt-8">
                <p className="text-sm text-background/60">Contact</p>
                <a href="mailto:Balogun.Jeremiah8@gmail.com" className="font-display text-xl md:text-2xl underline underline-offset-4">
                  Balogun.Jeremiah8@gmail.com
                </a>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-background/60 mb-3">Connect with me</p>
              <div className="flex md:justify-end gap-6 text-sm">
                <a href="#" className="hover:text-accent">Behance</a>
                <a href="#" className="hover:text-accent">Dribbble</a>
                <a href="#" className="hover:text-accent">LinkedIn</a>
                <a href="#" className="hover:text-accent">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-foreground text-background/70 border-t border-background/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="w-6 h-6" />
            <span>Balogun Jeremiah</span>
          </div>
          <p>Created by Balogun Jeremiah</p>
        </div>
      </footer>
    </div>
  );
}
