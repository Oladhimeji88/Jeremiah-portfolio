import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { projects } from "@/lib/projects";
import { SITE_URL, OG_IMAGE, SITE_NAME } from "@/lib/seo";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectPage,
  head: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) return {};
    const title = `${project.title} — ${SITE_NAME}`;
    const description = `${project.tag} · ${project.year}. ${project.description !== "Details coming soon." ? project.description : `A ${project.tag.toLowerCase()} project by Balogun Jeremiah.`}`;
    const url = `${SITE_URL}/projects/${project.id}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: `${project.services.join(", ")}, Balogun Jeremiah, UI UX Design Portfolio` },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
});

function ProjectPage() {
  const { projectId } = Route.useParams();
  const [cursor, setCursor] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center no-cursor">
        <div
          className="fixed z-9999 pointer-events-none rounded-full border border-foreground/40 cursor-ring"
          style={{ left: cursor.x, top: cursor.y }}
        />
        <div
          className="fixed z-9999 pointer-events-none w-1.5 h-1.5 rounded-full bg-foreground cursor-dot"
          style={{ left: cursor.x, top: cursor.y }}
        />
        <div className="text-center px-8">
          <p className="text-foreground/30 text-xs tracking-widest uppercase mb-4">404</p>
          <h1 className="font-display font-bold text-5xl mb-8">Project not found</h1>
          <Link to="/" className="text-xs tracking-widest uppercase text-foreground/50 hover:text-foreground transition-colors">
            ← Back home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground no-cursor">
      {/* Custom cursor */}
      <div
        className="fixed z-9999 pointer-events-none rounded-full border border-foreground/40 cursor-ring"
        style={{ left: cursor.x, top: cursor.y }}
      />
      <div
        className="fixed z-9999 pointer-events-none w-1.5 h-1.5 rounded-full bg-foreground cursor-dot"
        style={{ left: cursor.x, top: cursor.y }}
      />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-5 flex items-center justify-between border-b border-foreground/10 bg-background/90 backdrop-blur-sm">
        <Link
          to="/"
          className="text-xs tracking-widest uppercase hover:text-foreground/50 transition-colors"
        >
          ← Back
        </Link>
        <span className="font-display text-sm text-foreground/40">
          {project.n} / {String(projects.length).padStart(2, "0")}
        </span>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-12 px-8 md:px-12">
        <p className="text-foreground/40 text-xs tracking-widest uppercase mb-6">
          {project.tag} · {project.year}
        </p>
        <h1 className="font-display font-bold leading-[0.88] tracking-tighter text-fluid-hero mb-10">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-12">
          {project.services.map((s) => (
            <span
              key={s}
              className="text-xs tracking-widest uppercase text-foreground/40 border border-foreground/15 px-3 py-1.5"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* MAIN IMAGE */}
      {project.thumbnail && (
        <div className="px-8 md:px-12">
          <div className="w-full overflow-hidden rounded-sm bg-foreground/5">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full max-h-[80vh] object-cover"
            />
          </div>
        </div>
      )}

      <div className="border-t border-foreground/10 mt-20" />

      {/* OVERVIEW */}
      <section className="px-8 md:px-12 py-20">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <p className="text-foreground/40 text-xs tracking-widest uppercase">Overview</p>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/80">
            {project.description}
          </p>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      {project.images.length > 1 && (
        <>
          <div className="border-t border-foreground/10" />
          <section className="px-8 md:px-12 py-20">
            <p className="text-foreground/40 text-xs tracking-widest uppercase mb-10">Gallery</p>
            <div className="grid md:grid-cols-2 gap-4">
              {project.images.slice(1).map((img, i) => (
                <div key={i} className="overflow-hidden rounded-sm bg-foreground/5">
                  <img src={img} alt="" className="w-full h-72 md:h-96 object-cover" />
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* PROCESS */}
      {project.process.length > 0 && (
        <>
          <div className="border-t border-foreground/10" />
          <section className="px-8 md:px-12 py-20">
            <p className="text-foreground/40 text-xs tracking-widest uppercase mb-10">Process</p>
            <div>
              {project.process.map((step, i) => (
                <div key={i} className="flex gap-8 py-8 border-t border-foreground/10">
                  <span className="text-foreground/20 text-xs pt-1.5 w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">{step.title}</h3>
                    <p className="text-foreground/50 text-sm leading-relaxed max-w-2xl">{step.body}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-foreground/10" />
            </div>
          </section>
        </>
      )}

      {/* LIVE LINK */}
      {project.liveUrl && (
        <>
          <div className="border-t border-foreground/10" />
          <div className="px-8 md:px-12 py-12">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 text-xs tracking-widest uppercase hover:gap-8 transition-all duration-300"
            >
              View Live Project <span>→</span>
            </a>
          </div>
        </>
      )}

      <div className="border-t border-foreground/10" />

      {/* NEXT PROJECT */}
      <Link
        to="/projects/$projectId"
        params={{ projectId: nextProject.id }}
        className="block px-8 md:px-12 py-20 group"
      >
        <p className="text-foreground/40 text-xs tracking-widest uppercase mb-6">Next Project</p>
        <h2 className="font-display font-bold text-fluid-cta leading-none tracking-tighter group-hover:text-foreground/30 transition-colors duration-300">
          {nextProject.title}
        </h2>
      </Link>

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
