import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import statueHero from "@/assets/statue-hero.png";
import statueBust from "@/assets/statue-bust.png";
import statueAthlete from "@/assets/statue-athlete.png";
import podium from "@/assets/podium.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Helena Marmaras — UI Designer | Classical Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Helena Marmaras, UI designer crafting timeless interfaces inspired by classical proportion and Greek harmony.",
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
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Meander({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 20"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <path
        d="M0,10 H10 V2 H22 V18 H4 M22,10 H32 V2 H44 V18 H26 M44,10 H54 V2 H66 V18 H48 M66,10 H76 V2 H88 V18 H70 M88,10 H98 V2 H110 V18 H92 M110,10 H120 V2 H132 V18 H114 M132,10 H142 V2 H154 V18 H136 M154,10 H164 V2 H176 V18 H158 M176,10 H186 V2 H198 V18 H180"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function Index() {
  const works = useReveal<HTMLDivElement>();
  const about = useReveal<HTMLDivElement>();
  const contact = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl tracking-[0.25em] text-foreground">
            HELENA·M
          </a>
          <ul className="hidden md:flex gap-10 font-display text-xs tracking-[0.3em] text-muted-foreground">
            <li><a href="#works" className="hover:text-foreground transition-colors">WORKS</a></li>
            <li><a href="#about" className="hover:text-foreground transition-colors">ATELIER</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">CONTACT</a></li>
          </ul>
          <a
            href="#contact"
            className="font-display text-xs tracking-[0.25em] px-5 py-2 border border-foreground/30 hover:bg-foreground hover:text-background transition-all"
          >
            COMMISSION
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
          {/* Decorative floating bust */}
          <img
            src={statueBust}
            alt=""
            aria-hidden
            className="hidden lg:block absolute -top-10 right-[55%] w-40 opacity-30 animate-float pointer-events-none"
          />

          <div className="relative z-10">
            <p className="font-display text-xs tracking-[0.4em] text-muted-foreground mb-6 animate-fade-up">
              ΜΟΥΣΑ · EST. MMXIX
            </p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground animate-fade-up delay-100">
              Interfaces
              <br />
              of <em className="text-gradient-gold not-italic">Eternal</em>
              <br />
              Proportion.
            </h1>
            <p className="mt-8 max-w-md text-xl text-muted-foreground leading-relaxed animate-fade-up delay-300">
              I am Helena Marmaras — a UI designer sculpting digital products
              with the harmony of classical antiquity and the precision of
              modern craft.
            </p>
            <div className="mt-10 flex gap-4 animate-fade-up delay-500">
              <a
                href="#works"
                className="font-display text-xs tracking-[0.25em] px-7 py-4 bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-all"
              >
                ENTER GALLERY
              </a>
              <a
                href="#about"
                className="font-display text-xs tracking-[0.25em] px-7 py-4 border border-foreground/40 hover:bg-foreground/5 transition-all"
              >
                THE ATELIER
              </a>
            </div>
            <Meander className="mt-14 w-64 text-foreground/40 animate-fade-up delay-700" />
          </div>

          <div className="relative h-[640px] flex items-end justify-center animate-rise delay-200">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.82_0.13_75/0.25),transparent_70%)]" />
            <img
              src={statueHero}
              alt="Marble statue of a Greek goddess"
              width={1024}
              height={1536}
              className="relative h-full w-auto object-contain animate-float drop-shadow-[0_40px_30px_rgba(60,40,20,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="border-y border-foreground/20 py-5 overflow-hidden bg-foreground/[0.03]">
        <div className="flex gap-16 whitespace-nowrap animate-[shimmer_30s_linear_infinite]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 font-display text-sm tracking-[0.4em] text-foreground/60">
              <span>ΑΡΜΟΝΙΑ — HARMONY</span>
              <span>·</span>
              <span>ΣΥΜΜΕΤΡΙΑ — SYMMETRY</span>
              <span>·</span>
              <span>ΚΑΛΛΟΣ — BEAUTY</span>
              <span>·</span>
              <span>ΤΕΧΝΗ — CRAFT</span>
              <span>·</span>
              <span>ΣΟΦΙΑ — WISDOM</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* WORKS — PODIUM GALLERY */}
      <section id="works" className="py-32 px-6">
        <div
          ref={works.ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${works.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-20">
            <p className="font-display text-xs tracking-[0.4em] text-muted-foreground mb-4">
              ·  CHAPTER  I  ·
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground">
              Selected <em className="text-gradient-gold not-italic">Works</em>
            </h2>
            <Meander className="mx-auto mt-6 w-48 text-foreground/40" />
          </div>

          {/* Podium row */}
          <div className="grid md:grid-cols-3 gap-8 items-end mb-24">
            {[
              { title: "Helios Banking", year: "MMXXIV", role: "Lead UI", h: "h-72" },
              { title: "Olympia Health", year: "MMXXIII", role: "Product Design", h: "h-96" },
              { title: "Pythia Search", year: "MMXXIV", role: "Design System", h: "h-80" },
            ].map((w, i) => (
              <div key={w.title} className="group text-center">
                <div className={`relative ${w.h} marble-card overflow-hidden mb-0 hover:scale-[1.02] transition-transform duration-700`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.82_0.13_75/0.2),transparent_60%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-9xl text-foreground/10 group-hover:text-foreground/20 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-left">
                    <p className="font-display text-[10px] tracking-[0.3em] text-muted-foreground">{w.role}</p>
                    <h3 className="font-display text-2xl mt-2">{w.title}</h3>
                  </div>
                </div>
                <img
                  src={podium}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="w-40 mx-auto -mt-2 opacity-90"
                />
                <p className="font-display text-xs tracking-[0.3em] text-muted-foreground mt-2">{w.year}</p>
              </div>
            ))}
          </div>

          {/* Wide work card */}
          <div className="marble-card p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-20">
              <img src={statueAthlete} alt="" aria-hidden loading="lazy" className="w-96 animate-drift" />
            </div>
            <div className="relative z-10">
              <p className="font-display text-xs tracking-[0.4em] text-muted-foreground">FEATURED COMMISSION</p>
              <h3 className="font-display text-4xl md:text-5xl mt-4">Athena — Operations Suite</h3>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                A complete redesign of an enterprise platform serving 40,000
                analysts. Built upon a typographic system inspired by stone
                inscriptions of the Acropolis.
              </p>
              <div className="flex gap-8 mt-8 font-display text-xs tracking-[0.3em] text-foreground/70">
                <div><div className="text-3xl text-gradient-gold mb-1">+62%</div>TASK SPEED</div>
                <div><div className="text-3xl text-gradient-gold mb-1">9.4</div>SUS SCORE</div>
                <div><div className="text-3xl text-gradient-gold mb-1">120k</div>USERS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 bg-foreground/[0.03]">
        <div
          ref={about.ref}
          className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${about.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative h-[600px] flex items-end justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.82_0.13_75/0.2),transparent_70%)]" />
            <img
              src={statueAthlete}
              alt="Marble statue of a Greek athlete"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative h-full w-auto object-contain animate-float drop-shadow-[0_40px_30px_rgba(60,40,20,0.25)]"
            />
          </div>

          <div>
            <p className="font-display text-xs tracking-[0.4em] text-muted-foreground mb-4">·  CHAPTER  II  ·</p>
            <h2 className="font-display text-5xl md:text-6xl">
              The <em className="text-gradient-gold not-italic">Atelier</em>
            </h2>
            <Meander className="mt-6 w-48 text-foreground/40" />
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              For a decade I have studied the geometry that governs both temple
              and screen. My practice unites the patience of a sculptor with
              the rigour of a systems thinker — every pixel placed as a column
              upon the stylobate.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                ["Design Systems", "Tokens, components, governance"],
                ["Product Design", "Discovery, flows, prototypes"],
                ["Brand & Identity", "Marks, typography, voice"],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-6 items-start border-b border-foreground/15 pb-5">
                  <span className="font-display text-2xl text-gradient-gold w-12">·</span>
                  <div>
                    <h4 className="font-display text-xl">{t}</h4>
                    <p className="text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <img
          src={statueBust}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute -left-20 top-10 w-80 opacity-20 animate-float pointer-events-none"
        />
        <img
          src={podium}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute -right-10 bottom-0 w-64 opacity-30 animate-drift pointer-events-none"
        />
        <div
          ref={contact.ref}
          className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-1000 ${contact.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="font-display text-xs tracking-[0.4em] text-muted-foreground mb-4">·  CHAPTER  III  ·</p>
          <h2 className="font-display text-5xl md:text-7xl">
            Let us <em className="text-gradient-gold not-italic">create</em>
            <br />
            something timeless.
          </h2>
          <Meander className="mx-auto mt-6 w-48 text-foreground/40" />
          <p className="mt-8 text-xl text-muted-foreground">
            Currently accepting commissions for Spring MMXXVI.
          </p>
          <a
            href="mailto:helena@marmaras.studio"
            className="inline-block mt-10 font-display text-sm tracking-[0.3em] px-10 py-5 bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-all"
          >
            HELENA@MARMARAS.STUDIO
          </a>
          <div className="mt-12 flex justify-center gap-8 font-display text-xs tracking-[0.3em] text-muted-foreground">
            <a href="#" className="hover:text-foreground">DRIBBBLE</a>
            <span>·</span>
            <a href="#" className="hover:text-foreground">BEHANCE</a>
            <span>·</span>
            <a href="#" className="hover:text-foreground">LINKEDIN</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-foreground/20 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 font-display text-xs tracking-[0.3em] text-muted-foreground">
          <p>© MMXXVI · HELENA MARMARAS</p>
          <p>CRAFTED IN ATHENS</p>
        </div>
      </footer>
    </div>
  );
}
