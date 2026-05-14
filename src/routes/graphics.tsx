import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";
import { useEffect, useRef, useState } from "react";

const graphicsModules = import.meta.glob<{ default: string }>("../assets/Graphics/*", { eager: true });
const graphicsImages = Object.values(graphicsModules).map((m) => m.default);

const SLIDE_DURATION = 4000;

export const Route = createFileRoute("/graphics")({
  component: GraphicsPage,
  head: () => ({
    meta: [
      { title: "Graphics — Balogun Jeremiah | Graphic Designer" },
      { name: "description", content: "Graphic design works by Balogun Jeremiah — posters, flyers, brand assets, social media, and marketing collateral." },
      { name: "keywords", content: "Balogun Jeremiah Graphics, Graphic Design Nigeria, Poster Design, Flyer Design, Brand Design Lagos" },
      { property: "og:title", content: "Graphics — Balogun Jeremiah | Graphic Designer" },
      { property: "og:description", content: "Graphic design works — posters, flyers, brand assets, social media, and marketing collateral." },
      { property: "og:url", content: `${SITE_URL}/graphics` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: "Graphics — Balogun Jeremiah | Graphic Designer" },
      { name: "twitter:description", content: "Graphic design works — posters, flyers, brand assets, social media, and marketing collateral." },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/graphics` }],
  }),
});

function GraphicsPage() {
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const [cursorLarge, setCursorLarge] = useState(false);
  const [slideIdx, setSlideIdx] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const progressKey = useRef(0);

  const isOpen = slideIdx !== null;

  const goTo = (idx: number) => {
    progressKey.current += 1;
    setSlideIdx(idx);
  };

  const prev = () => {
    if (slideIdx === null) return;
    goTo(slideIdx > 0 ? slideIdx - 1 : graphicsImages.length - 1);
  };

  const next = () => {
    if (slideIdx === null) return;
    goTo(slideIdx < graphicsImages.length - 1 ? slideIdx + 1 : 0);
  };

  const open = (idx: number) => {
    progressKey.current += 1;
    setSlideIdx(idx);
    setPlaying(false);
  };

  const close = () => {
    setSlideIdx(null);
    setPlaying(false);
  };

  // Autoplay
  useEffect(() => {
    if (!playing || slideIdx === null) return;
    const id = setInterval(() => {
      progressKey.current += 1;
      setSlideIdx((i) => (i === null ? 0 : i < graphicsImages.length - 1 ? i + 1 : 0));
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [playing, slideIdx]);

  // Cursor tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " ") { e.preventDefault(); setPlaying((p) => !p); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, slideIdx]);

  return (
    <div className="min-h-screen bg-background text-foreground no-cursor overflow-x-hidden">
      {/* Custom cursor */}
      <div
        className={`fixed z-[9999] pointer-events-none rounded-full border border-foreground/40 cursor-ring ${cursorLarge ? "cursor-ring-lg" : ""}`}
        style={{ left: cursor.x, top: cursor.y }}
      />
      <div
        className="fixed z-[9999] pointer-events-none w-1.5 h-1.5 rounded-full bg-foreground cursor-dot"
        style={{ left: cursor.x, top: cursor.y }}
      />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-5 flex items-center justify-between border-b border-foreground/10 bg-background/90 backdrop-blur-sm">
        <Link
          to="/"
          className="text-xs tracking-widest uppercase hover:text-foreground/50 transition-colors"
          onMouseEnter={() => setCursorLarge(true)}
          onMouseLeave={() => setCursorLarge(false)}
        >
          ← Home
        </Link>
        <span className="font-display text-sm text-foreground/40 tracking-wide">Graphics</span>
      </header>

      {/* HERO */}
      <section className="pt-36 pb-16 px-8 md:px-12 border-b border-foreground/10">
        <p className="text-foreground/40 text-xs tracking-widest uppercase mb-6">Graphic Design · Print & Digital</p>
        <div className="flex items-end justify-between gap-8">
          <h1 className="font-display font-bold leading-[0.88] tracking-tighter text-fluid-hero">
            <span className="block">Graphics</span>
          </h1>
          <p className="text-foreground/20 text-xs shrink-0 pb-2">{graphicsImages.length} works</p>
        </div>
        <p className="mt-8 max-w-md text-foreground/50 text-base leading-relaxed">
          Posters, flyers, brand assets, social media graphics, and marketing collateral. Click any image to open the slideshow.
        </p>
      </section>

      {/* GALLERY */}
      <section className="px-8 md:px-12 py-16">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {graphicsImages.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-3 overflow-hidden group cursor-pointer"
              onClick={() => open(i)}
              onMouseEnter={() => setCursorLarge(true)}
              onMouseLeave={() => setCursorLarge(false)}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SLIDESHOW LIGHTBOX */}
      {isOpen && slideIdx !== null && (
        <div className="fixed inset-0 z-9998 bg-black flex flex-col select-none">

          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 shrink-0">
            <span className="text-white/40 text-xs tabular-nums tracking-widest">
              {slideIdx + 1} <span className="text-white/20">/</span> {graphicsImages.length}
            </span>
            <button
              type="button"
              onClick={close}
              className="text-white/50 hover:text-white transition-colors text-xs tracking-widest uppercase"
            >
              Close ×
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-px w-full bg-white/10 shrink-0 overflow-hidden">
            {playing && (
              <div
                key={`${progressKey.current}-${slideIdx}`}
                className="h-full w-full bg-white/60 animate-slide-progress"
              />
            )}
          </div>

          {/* Image area */}
          <div className="flex-1 flex items-center justify-center relative overflow-hidden px-16 py-4">
            {/* Prev button */}
            <button
              type="button"
              onClick={prev}
              onMouseEnter={() => setCursorLarge(true)}
              onMouseLeave={() => setCursorLarge(false)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors text-xl"
            >
              ←
            </button>

            <img
              key={slideIdx}
              src={graphicsImages[slideIdx]}
              alt=""
              className="max-w-full max-h-full object-contain animate-fade-in"
            />

            {/* Next button */}
            <button
              type="button"
              onClick={next}
              onMouseEnter={() => setCursorLarge(true)}
              onMouseLeave={() => setCursorLarge(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors text-xl"
            >
              →
            </button>
          </div>

          {/* Bottom controls */}
          <div className="shrink-0 flex items-center justify-center gap-6 py-5">
            {/* Prev */}
            <button
              type="button"
              onClick={prev}
              onMouseEnter={() => setCursorLarge(true)}
              onMouseLeave={() => setCursorLarge(false)}
              className="text-white/40 hover:text-white transition-colors text-xs tracking-widest uppercase"
            >
              ← Prev
            </button>

            {/* Play / Pause */}
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              onMouseEnter={() => setCursorLarge(true)}
              onMouseLeave={() => setCursorLarge(false)}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-white/60 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
            >
              {playing ? (
                /* Pause icon */
                <span className="flex gap-1">
                  <span className="w-0.75 h-4 bg-current rounded-sm" />
                  <span className="w-0.75 h-4 bg-current rounded-sm" />
                </span>
              ) : (
                /* Play icon */
                <span className="ml-0.5 border-y-[6px] border-y-transparent border-l-10 border-l-current" />
              )}
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={next}
              onMouseEnter={() => setCursorLarge(true)}
              onMouseLeave={() => setCursorLarge(false)}
              className="text-white/40 hover:text-white transition-colors text-xs tracking-widest uppercase"
            >
              Next →
            </button>
          </div>

          {/* Dot strip */}
          <div className="shrink-0 flex items-center justify-center gap-1.5 pb-5 overflow-hidden px-8">
            {graphicsImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === slideIdx
                    ? "w-4 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="px-8 md:px-12 py-6 border-t border-foreground/10">
        <div className="flex justify-between text-xs text-foreground/20">
          <span>© 2024 Balogun Jeremiah</span>
          <Link to="/" className="hover:text-foreground transition-colors uppercase tracking-widest">
            Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
