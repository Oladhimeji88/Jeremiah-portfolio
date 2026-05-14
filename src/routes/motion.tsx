import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";
import { useEffect, useState } from "react";
import { videos, thumbUrl, embedUrl } from "@/lib/videos";

export const Route = createFileRoute("/motion")({
  component: MotionPage,
  head: () => ({
    meta: [
      { title: "Motion & Video Edits — Balogun Jeremiah" },
      { name: "description", content: "Motion design and video editing work by Balogun Jeremiah — animated interfaces, motion graphics, and polished video production." },
      { name: "keywords", content: "Balogun Jeremiah Motion Design, Video Editing, After Effects, Motion Graphics, Lagos Nigeria" },
      { property: "og:title", content: "Motion & Video Edits — Balogun Jeremiah" },
      { property: "og:description", content: "Motion design and video editing — animated interfaces, motion graphics, and polished video production." },
      { property: "og:url", content: `${SITE_URL}/motion` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: "Motion & Video Edits — Balogun Jeremiah" },
      { name: "twitter:description", content: "Motion design and video editing — animated interfaces, motion graphics, and polished video production." },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/motion` }],
  }),
});

function MotionPage() {
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const [cursorLarge, setCursorLarge] = useState(false);
  const [playerIdx, setPlayerIdx] = useState<number | null>(null);

  const isOpen = playerIdx !== null;

  const close = () => setPlayerIdx(null);
  const prev = () => setPlayerIdx((i) => (i === null || i === 0 ? videos.length - 1 : i - 1));
  const next = () => setPlayerIdx((i) => (i === null ? 0 : i < videos.length - 1 ? i + 1 : 0));

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, playerIdx]);

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
        <span className="font-display text-sm text-foreground/40 tracking-wide">Motion & Video</span>
      </header>

      {/* HERO */}
      <section className="pt-36 pb-16 px-8 md:px-12 border-b border-foreground/10">
        <p className="text-foreground/40 text-xs tracking-widest uppercase mb-6">Motion Design · Video Editing</p>
        <div className="flex items-end justify-between gap-8">
          <h1 className="font-display font-bold leading-[0.88] tracking-tighter text-fluid-hero">
            <span className="block">Motion &</span>
            <span className="block text-foreground/25">Video Edits</span>
          </h1>
          <p className="text-foreground/20 text-xs shrink-0 pb-2">{videos.length} clips</p>
        </div>
        <p className="mt-8 max-w-md text-foreground/50 text-base leading-relaxed">
          Animated interfaces, motion graphics, logo reveals, and polished video production. Click any clip to watch.
        </p>
      </section>

      {/* GRID */}
      <section className="px-8 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => {
            const thumb = thumbUrl(v);
            const hasUrl = !!embedUrl(v);
            return (
              <div
                key={i}
                className={`group flex flex-col gap-3 ${hasUrl ? "cursor-pointer" : "opacity-40"}`}
                onClick={() => hasUrl && setPlayerIdx(i)}
                onMouseEnter={() => hasUrl && setCursorLarge(true)}
                onMouseLeave={() => setCursorLarge(false)}
              >
                <div className="relative overflow-hidden bg-foreground/5 aspect-video">
                  {thumb ? (
                    <img
                      src={thumb}
                      alt={v.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-foreground/[0.04]">
                      <span className="text-foreground/20 text-xs tracking-widest uppercase">
                        {hasUrl ? "Loading…" : "Coming soon"}
                      </span>
                    </div>
                  )}

                  {/* Play overlay */}
                  {hasUrl && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors duration-300">
                      <span className="w-12 h-12 rounded-full border border-white/60 group-hover:border-white flex items-center justify-center transition-colors duration-200">
                        <span className="ml-1 border-y-[6px] border-y-transparent border-l-10 border-l-white/80 group-hover:border-l-white transition-colors duration-200" />
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-foreground/40 tracking-wide truncate">{v.title}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PLAYER LIGHTBOX */}
      {isOpen && playerIdx !== null && (
        <div className="fixed inset-0 z-9998 bg-black flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 shrink-0 border-b border-white/10">
            <div>
              <p className="text-white/70 text-sm font-display font-medium">{videos[playerIdx].title}</p>
              <p className="text-white/30 text-xs tabular-nums mt-0.5">{playerIdx + 1} / {videos.length}</p>
            </div>
            <button
              type="button"
              onClick={close}
              onMouseEnter={() => setCursorLarge(true)}
              onMouseLeave={() => setCursorLarge(false)}
              className="text-white/50 hover:text-white transition-colors text-xs tracking-widest uppercase"
            >
              Close ×
            </button>
          </div>

          {/* Iframe player */}
          <div className="flex-1 flex items-center justify-center relative px-16 py-6 overflow-hidden">
            <button
              type="button"
              onClick={prev}
              onMouseEnter={() => setCursorLarge(true)}
              onMouseLeave={() => setCursorLarge(false)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors text-xl"
            >
              ←
            </button>

            <iframe
              key={playerIdx}
              src={embedUrl(videos[playerIdx])}
              title={videos[playerIdx].title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full max-w-4xl aspect-video animate-fade-in border-0"
            />

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

          {/* Bottom nav */}
          <div className="shrink-0 flex items-center justify-between px-6 py-4 border-t border-white/10">
            <button
              type="button"
              onClick={prev}
              onMouseEnter={() => setCursorLarge(true)}
              onMouseLeave={() => setCursorLarge(false)}
              className="text-white/40 hover:text-white transition-colors text-xs tracking-widest uppercase"
            >
              ← Prev
            </button>
            <div className="flex items-center gap-1.5 overflow-hidden max-w-xs">
              {videos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to clip ${i + 1}`}
                  onClick={() => setPlayerIdx(i)}
                  onMouseEnter={() => setCursorLarge(true)}
                  onMouseLeave={() => setCursorLarge(false)}
                  className={`rounded-full transition-all duration-200 shrink-0 ${
                    i === playerIdx ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
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
