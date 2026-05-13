import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import bust from "@/assets/jeremiah/bust.png";
import jeremiah from "@/assets/jeremiah/Jeremiah.png";
import podium from "@/assets/podium.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Balogun Jeremiah" },
      { name: "description", content: "Senior Product Designer designing systems that scale. Lagos, Nigeria." },
    ],
  }),
});

const experience = [
  {
    company: "Tech4mation Limited",
    role: "Product Designer · UX Engineer",
    period: "2025 – Present",
    type: "Full-time",
    story: "When I joined Tech4mation, I noticed a recurring pattern: systems were powerful but difficult to use. So I focused on simplifying them. I redesigned key SaaS dashboards and internal tools, turning scattered and complex workflows into structured, intuitive flows.",
    results: [
      "Improved task completion by ~30% by reducing friction in user journeys",
      "Built a reusable design system that reduced inconsistencies by ~35%",
      "Worked closely with engineers to ensure design translated cleanly into production",
      "Reduced UI implementation issues by ~25%",
    ],
    outcome: "Users stopped struggling to figure things out and started completing tasks faster.",
  },
  {
    company: "Landscale",
    role: "Product Design Lead",
    period: "2025 – Present",
    type: "Contract",
    story: "The previous interface lacked clarity and aesthetics. The product had potential, but users struggled to navigate and get value quickly. I stepped in to restructure the experience.",
    results: [
      "Redesigned onboarding flows, increasing activation by ~28%",
      "Reduced drop-offs by ~22% by simplifying key user journeys",
      "Created high-fidelity prototypes that helped teams align faster and make better decisions",
    ],
    outcome: "The product became easier to understand, faster to adopt, and more engaging to use.",
  },
  {
    company: "Pubblescope",
    role: "Founder & Product Designer",
    period: "2025",
    type: "AI Real Estate Platform",
    story: "Finding affordable housing in Nigeria is stressful, time-consuming, and inefficient. So I built a product to fix it.",
    results: [
      "Designed an AI-powered platform that matches users with homes based on budget and location",
      "Improved search relevance by ~40%",
      "Reduced time-to-find housing by ~35%",
      "Designed the entire experience — from search to recommendations to dashboards",
    ],
    outcome: "Users spend less time searching and more time finding the right home with AI.",
  },
  {
    company: "Vast Learn",
    role: "Product Designer",
    period: "2024 – 2025",
    type: "Full-time",
    story: "Learning platforms often overwhelm users. At Vast Learn, I focused on making learning feel simple and natural.",
    results: [
      "Increased engagement by ~25% by improving content flow and UX structure",
      "Reduced navigation time by ~20%",
      "Designed interfaces that made learning easier across devices",
    ],
    outcome: "Users spent less time figuring things out and more time learning.",
  },
  {
    company: "Talent Mine Foundation",
    role: "Head of Media",
    period: "",
    type: "Volunteer",
    story: "Here, design was about impact — not just products.",
    results: [
      "Created visuals and storytelling content that increased engagement by ~50%",
      "Helped communicate real stories from underserved communities",
    ],
    outcome: "Design became a tool for visibility, connection, and real-world impact.",
  },
];

const education = [
  { degree: "B.Sc. Applied Physics", institution: "Lagos State University", year: "2023" },
  { degree: "Product Design", institution: "Zuri Product Design School, Ojodu Lagos", year: "2022" },
];

const toolset = [
  { category: "Design", items: ["UI/UX", "SaaS", "Design Systems", "Interaction Design"] },
  { category: "Tools", items: ["Figma", "Framer", "Adobe Suite", "After Effects"] },
  { category: "Technical", items: ["HTML", "CSS", "Tailwind", "Git"] },
  { category: "Product Thinking", items: ["AI Design", "Research", "Growth", "Accessibility"] },
];

function AboutPage() {
  const [cursor, setCursor] = useState({ x: -200, y: -200 });

  const portraitDragRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ mouseX: 0, mouseY: 0, elX: 0, elY: 0 });
  const translate = useRef({ x: 0, y: 0 });

  const handlePortraitMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    dragStart.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      elX: translate.current.x,
      elY: translate.current.y,
    };
    const el = portraitDragRef.current;
    if (el) el.style.cursor = "grabbing";
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
      if (!isDragging.current) return;
      const dx = e.clientX - dragStart.current.mouseX + dragStart.current.elX;
      const dy = e.clientY - dragStart.current.mouseY + dragStart.current.elY;
      translate.current = { x: dx, y: dy };
      const el = portraitDragRef.current;
      if (el) el.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    const onUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      const el = portraitDragRef.current;
      if (el) el.style.cursor = "grab";
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground no-cursor">
      {/* Cursor */}
      <div className="fixed z-9999 pointer-events-none rounded-full border border-foreground/40 cursor-ring" style={{ left: cursor.x, top: cursor.y }} />
      <div className="fixed z-9999 pointer-events-none w-1.5 h-1.5 rounded-full bg-foreground cursor-dot" style={{ left: cursor.x, top: cursor.y }} />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-5 flex items-center justify-between border-b border-foreground/10 bg-background/90 backdrop-blur-sm">
        <Link to="/" className="text-xs tracking-widest uppercase hover:text-foreground/50 transition-colors">← Home</Link>
        <span className="font-display text-sm text-foreground/40 tracking-wide">About</span>
      </header>

      {/* HERO */}
      <section className="pt-36 pb-16 px-8 md:px-12">
        <p className="text-foreground/40 text-xs tracking-widest uppercase mb-8">Senior Product Designer · Lagos, Nigeria</p>

        {/* Heading + floating portrait */}
        <div className="relative mb-12">
          <h1 className="font-display font-bold text-fluid-hero leading-[0.88] tracking-tighter">
            <span className="block">Designing</span>
            <span className="block text-foreground/25">Systems</span>
            <span className="block">That Scale</span>
          </h1>

          {/* Draggable + oscillating portrait — desktop */}
          <div
            ref={portraitDragRef}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:right-12 hidden md:block cursor-grab"
            onMouseDown={handlePortraitMouseDown}
          >
            <img
              src={jeremiah}
              alt="Balogun Jeremiah"
              className="w-72 h-72 rounded-full object-cover object-top grayscale border-4 border-white shadow-marble animate-oscillate pointer-events-none select-none"
            />
          </div>

          {/* Mobile: portrait below heading */}
          <div className="mt-8 flex justify-start md:hidden">
            <img
              src={jeremiah}
              alt="Balogun Jeremiah"
              className="w-44 h-44 rounded-full object-cover object-top grayscale border-4 border-white animate-oscillate"
            />
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-4">
            I didn't start with design. I started with understanding how things work. With a background in Physical Science, I developed a natural way of thinking in <span className="text-foreground font-medium">systems, structure, and cause-effect relationships</span>.
          </p>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            That mindset led me into product design, where I now focus on solving complex problems and turning them into simple, intuitive experiences. Today, I design products across <span className="text-foreground font-medium">SaaS, AI, and real-world service platforms</span>, helping businesses move from confusion to clarity and users from frustration to flow.
          </p>
        </div>
      </section>

      <div className="border-t border-foreground/10" />

      {/* WHAT I DO */}
      <section className="px-8 md:px-12 py-16">
        <p className="text-foreground/40 text-xs tracking-widest uppercase mb-10">What I Do</p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-foreground/60 text-base leading-relaxed mb-6">I design products that:</p>
            <ul className="space-y-3">
              {["Simplify complex workflows", "Improve how people interact with systems", "Drive real, measurable outcomes"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="text-foreground/30 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-foreground/40 text-xs tracking-widest uppercase mb-6">My Process</p>
            <div className="flex flex-wrap items-center gap-2">
              {["Research", "Strategy", "UI", "Prototyping", "Developer Handoff"].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg">{step}</span>
                  {i < arr.length - 1 && <span className="text-foreground/25 text-sm">→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-foreground/10" />

      {/* EXPERIENCE */}
      <section className="px-8 md:px-12 py-16">
        <p className="text-foreground/40 text-xs tracking-widest uppercase mb-10">Experience</p>
        <div>
          {experience.map((job, i) => (
            <div key={i} className="group py-10 border-t border-foreground/10 hover:border-foreground/25 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                <div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl">{job.company}</h3>
                  <p className="text-foreground/50 text-sm mt-1">{job.role}</p>
                </div>
                <div className="md:text-right shrink-0">
                  <p className="text-foreground/30 text-xs tracking-widest uppercase">{job.type}</p>
                  <p className="text-foreground/40 text-sm mt-1">{job.period}</p>
                </div>
              </div>
              <p className="text-foreground/60 text-sm leading-relaxed mb-5 max-w-2xl">{job.story}</p>
              <ul className="space-y-2 mb-5">
                {job.results.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-foreground/70">
                    <span className="text-foreground/25 shrink-0 mt-0.5">·</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-3">
                <span className="text-foreground/25 text-xs tracking-widest uppercase shrink-0 mt-0.5">Result</span>
                <p className="text-foreground/50 text-sm italic">{job.outcome}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-foreground/10" />
        </div>
      </section>

      <div className="border-t border-foreground/10" />

      {/* TOOLS & EDUCATION */}
      <section className="px-8 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Tools */}
          <div>
            <p className="text-foreground/40 text-xs tracking-widest uppercase mb-10">Tools & Skills</p>
            <div className="space-y-6">
              {toolset.map((group) => (
                <div key={group.category} className="border-t border-foreground/10 pt-5">
                  <p className="text-foreground/30 text-xs tracking-widest uppercase mb-3">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-sm text-foreground/70 border border-foreground/15 px-3 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="text-foreground/40 text-xs tracking-widest uppercase mb-10">Education</p>
            <div>
              {education.map((ed) => (
                <div key={ed.degree} className="border-t border-foreground/10 pt-6 pb-6">
                  <h4 className="font-display font-bold text-xl mb-1">{ed.degree}</h4>
                  <p className="text-foreground/50 text-sm">{ed.institution}</p>
                  <p className="text-foreground/30 text-xs mt-1">{ed.year}</p>
                </div>
              ))}
              <div className="border-t border-foreground/10" />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-foreground/10" />

      {/* CTA */}
      <section className="relative px-8 md:px-12 py-20 overflow-hidden">
        {/* Podium — floating right */}
        <div className="absolute right-12 bottom-0 w-52 hidden md:block pointer-events-none select-none animate-drift">
          <img src={podium} alt="" className="w-full object-contain object-bottom" />
        </div>

        <p className="text-foreground/40 text-xs tracking-widest uppercase mb-8 relative z-10">Get in touch</p>
        <a
          href="mailto:Balogun.jeremiah8@gmail.com"
          className="block font-display font-bold leading-none tracking-tighter text-fluid-cta hover:text-foreground/30 transition-colors duration-300 relative z-10 md:max-w-[70%]"
        >
          LET'S TALK
        </a>
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-foreground/10 pt-8 relative z-10">
          <a href="mailto:Balogun.Jeremiah8@gmail.com" className="text-foreground/50 hover:text-foreground transition-colors text-sm">
            Balogun.Jeremiah8@gmail.com
          </a>
          <Link to="/" className="text-xs tracking-widest uppercase text-foreground/30 hover:text-foreground transition-colors">
            View Work →
          </Link>
        </div>
      </section>

      <footer className="px-8 md:px-12 py-6 border-t border-foreground/10">
        <div className="flex justify-between text-xs text-foreground/20">
          <span>© 2024 Balogun Jeremiah</span>
          <Link to="/" className="hover:text-foreground transition-colors uppercase tracking-widest">Home</Link>
        </div>
      </footer>
    </div>
  );
}
