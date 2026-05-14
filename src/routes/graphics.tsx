import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";
import { useEffect, useState } from "react";

const graphicsModules = import.meta.glob<{ default: string }>("../assets/Graphics/*", { eager: true });
const graphicsImages = Object.values(graphicsModules).map((m) => m.default);

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
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && lightbox) {
        const idx = graphicsImages.indexOf(lightbox);
        if (idx < graphicsImages.length - 1) setLightbox(graphicsImages[idx + 1]);
      }
      if (e.key === "ArrowLeft" && lightbox) {
        const idx = graphicsImages.indexOf(lightbox);
        if (idx > 0) setLightbox(graphicsImages[idx - 1]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

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
          Posters, flyers, brand assets, social media graphics, and marketing collateral. Print and digital, all designed to communicate with clarity and visual impact.
        </p>
      </section>

      {/* GALLERY */}
      <section className="px-8 md:px-12 py-16">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {graphicsImages.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-3 overflow-hidden group cursor-pointer"
              onClick={() => setLightbox(src)}
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

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9998] bg-background/95 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-8 right-8 text-xs tracking-widest uppercase text-foreground/50 hover:text-foreground transition-colors z-10"
          >
            Close
          </button>

          {/* Prev */}
          {graphicsImages.indexOf(lightbox) > 0 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightbox(graphicsImages[graphicsImages.indexOf(lightbox) - 1]); }}
              className="absolute left-8 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors text-2xl z-10"
            >
              ←
            </button>
          )}

          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {graphicsImages.indexOf(lightbox) < graphicsImages.length - 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightbox(graphicsImages[graphicsImages.indexOf(lightbox) + 1]); }}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors text-2xl z-10"
            >
              →
            </button>
          )}

          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/30 text-xs tabular-nums">
            {graphicsImages.indexOf(lightbox) + 1} / {graphicsImages.length}
          </p>
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
