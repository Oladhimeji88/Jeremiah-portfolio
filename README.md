# Balogun Jeremiah — Portfolio

Personal portfolio website for Balogun Jeremiah, Senior Product Designer based in Lagos, Nigeria.

Built with TanStack Start, React 19, Tailwind CSS v4, and TypeScript.

## Tech Stack

- **Framework** — TanStack Start (SSR) + TanStack Router
- **UI** — React 19, Tailwind CSS v4, shadcn/ui
- **Language** — TypeScript
- **Build Tool** — Vite
- **Deployment Target** — Cloudflare Workers

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Oladhimeji88/olympian-portfolio.git
cd olympian-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # Reusable UI components (shadcn/ui)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and data (projects.ts)
├── routes/          # File-based routes (TanStack Router)
│   ├── __root.tsx       # Root layout, head meta, nav shell
│   ├── index.tsx        # Home page
│   ├── about.tsx        # About page
│   └── projects/
│       └── $projectId.tsx  # Dynamic project detail page
├── styles.css       # Global styles and Tailwind theme
├── router.tsx       # Router configuration
└── server.ts        # SSR server entry (Cloudflare Workers)
```

## Deployment

The project is configured for **Cloudflare Workers** via `wrangler.jsonc`.

To deploy:

```bash
npx wrangler deploy
```

Make sure you have a [Cloudflare account](https://dash.cloudflare.com/) and are logged in with `npx wrangler login`.

## Contact

- Email — [Balogun.jeremiah8@gmail.com](mailto:Balogun.jeremiah8@gmail.com)
- Behance — [behance.net/balogunjeremiah](https://www.behance.net/balogunjeremiah)
- Dribbble — [dribbble.com/Oladhimeji8](https://dribbble.com/Oladhimeji8)
- LinkedIn — [linkedin.com/in/balogun-jeremiah](https://www.linkedin.com/in/balogun-jeremiah/)
